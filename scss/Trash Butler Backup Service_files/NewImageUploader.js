class ImageUploader {
    constructor(imageUploadParams) {
        //MULTIPLE UPLOAD SPECIFIC FIELDS
        /**
         * [{
         *     fileName: '',
         *     url: '',
         *     data: '',
         *     time: '',
         *     lon:'',
         *     lat:'',
         *     token: '' //contains the cloudinary token, used to delete the image in this list
         * }, ...]
         */
         this.imageList = [];
         this.savedImages = [];

        for(var key in imageUploadParams){
            this[key] = imageUploadParams[key];
        }
    }

    //Class functions
    uploadImage(fieldName, file, metadata, load, error, progress, abort) {
        //cloudinary credentials
        var timestamp = new Date().getTime();
        var fileNameDotIdx = file.name.lastIndexOf('.');
  	    var fileName = file.name.substr(0,fileNameDotIdx);

        var public_id = `${fileName}_${timestamp}`;
        var self = this;
        if(this.folder) {
            public_id = `${this.folder}/${public_id}`;
        }

        var url = `https://api.cloudinary.com/v1_1/${this.cloudName}/upload`;
        var signatureString = "";

        //it's imperative that the keys are in alphabetical order.
        var params = {
            "public_id": public_id,
            "return_delete_token": true,
            "timestamp": timestamp
        };

        var fd = new FormData();
        fd.append('file', file, file.name);
        fd.append('api_key', this.apiKey);

        for (var key in params) {
            signatureString += `${key}=${params[key]}&`;
            fd.append(key, params[key]);
        }

        //remove the last & and append apiSecret
        signatureString = signatureString.substring(0, signatureString.length - 1) + this.apiSecret;
        var request = new XMLHttpRequest();

        this.digestMessage(signatureString).then(sig => {
            fd.append('signature', this.hexString(sig));
            request.open('POST', url);

            // Should call the progress method to update the progress to 100% before calling load
            // Setting computable to false switches the loading indicator to infinite mode
            request.upload.onprogress = (e) => {
                progress(e.lengthComputable, e.loaded, e.total);
            };

            // Should call the load method when done and pass the returned server file id
            // this server file id is then used later on when reverting or restoring a file
            // so your server knows which file to return without exposing that info to the client
            request.onload = function() {
                if (request.status >= 200 && request.status < 300) {
                    // the load method accepts either a string (id) or an object
                    load(request.responseText);
                    var response = JSON.parse(request.responseText);
                    var url = response.secure_url;
                    console.log(file.name);
                    if(self.is_multiple){
                        var filename = file.name;
                        var imgIdx = self.imageList.findIndex(img => img.filename == filename);
                        if(imgIdx > -1){
                            self.imageList[imgIdx].token = response.delete_token;
                            self.imageList[imgIdx].url = url;
                        } else {
                            console.log(`Cannot find image with file name ${fileName} @ index ${imgIdx}`);
                        }
                    } else {
                        var fieldId = fieldName.split('-')[1];
                        $(`#${fieldId}`).val(url);
                    }
                } else {
                    // Can call the error method if something is wrong, should exit after
                    error('oh no');
                }
            };

            request.send(fd);
        });

        // Should expose an abort method so the request can be cancelled
        return {
            abort: () => {
                // This function is entered if the user has tapped the cancel button
                request.abort();
                // Let FilePond know the request has been cancelled
                abort();
            }
        };
    }

    deleteImage(uniqueFileId, load, error) {
        var cloudinaryImgObj = JSON.parse(uniqueFileId)
        var url = `https://api.cloudinary.com/v1_1/${this.cloudName}/delete_by_token`;
        var self = this;
        $.ajax({
            url: url,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                token: cloudinaryImgObj.delete_token
            }),
            success: function(result) {
                if(self.is_multiple){
                    var imgIdx = self.imageList.findIndex(img => img.token == cloudinaryImgObj.delete_token);
                    if(imgIdx > -1){
                        self.imageList.splice(imgIdx, 1);
                    } else {
                        console.log(`Cannot find image with file token ${cloudinaryImgObj.delete_token} @ index ${imgIdx}`);
                    }
                }
                load();
            },
            error: function(xhr, status, message) {
                error(message);
            }
        });
    };

    createImage(filePondInput) {
        var timestamp_field_id = this.timestamp_field_id;
        var address_field_id = this.address_field_id;
        var upload_view_id = this.upload_view_id;
        var accepted_files = this.accepted_files ? this.accepted_files : ['image/*'];
        FilePond.create(filePondInput, {
            labelIdle: '<span class="filepond--label-action"><i class="fa fa-camera" style="font-size:2em !important;"></i></span>',
            acceptedFileTypes: accepted_files,
            onaddfilestart: (file) => {
                //EXIF DATA EXTRACTION
                var img = document.createElement('img');
                img.src = window.URL.createObjectURL(file.file);
                img.addEventListener("load", () => {

                    var newImageToUpload = {
                        filename: file.file.name
                    };

                    EXIF.getData(img, () => {
                        var longitude = null;
                        var latitude = null;
                        var hasGps = true;
                        if (img.exifdata.GPSLongitude) {
                            var lonDegree = img.exifdata.GPSLongitude[0];
                            var lonMinute = img.exifdata.GPSLongitude[1];
                            var lonSecond = img.exifdata.GPSLongitude[2];
                            var lonDirection = img.exifdata.GPSLongitudeRef;
                            longitude = this.convertDMSToDD(lonDegree, lonMinute, lonSecond, lonDirection);
                        } else {
                            hasGps = false;
                        }


                        if (img.exifdata.GPSLatitude) {
                            var latDegree = img.exifdata.GPSLatitude[0];
                            var latMinute = img.exifdata.GPSLatitude[1];
                            var latSecond = img.exifdata.GPSLatitude[2];
                            var latDirection = img.exifdata.GPSLatitudeRef;
                            latitude = this.convertDMSToDD(latDegree, latMinute, latSecond, latDirection);
                        } else {
                            hasGps = false;
                        }
                        if (img.exifdata.DateTimeOriginal && img.exifdata.DateTimeOriginal.length > 0) {
                            //let's format the date. "2019:02:24 12:11:07" to MM/DD/YY HH:MM AM/PM
                            var origDate = img.exifdata.DateTimeOriginal.split(" ");
                            var datePart = origDate[0].split(":");
                            var timePart = origDate[1].split(":");

                            var hour = parseInt(timePart[0]);
                            var am_pm = hour < 12 ? "am" : "pm";
                            hour = hour > 12 ? hour - 12 : hour;
                            hour = ('00' + hour).slice(-2);

                            var newDateString = `${datePart[1]}/${datePart[2]}/${datePart[0]}`;
                            var newTimeString = `${hour}:${timePart[1]}${am_pm}`;
                            var dateId = `#${upload_view_id}-${timestamp_field_id}`;
                            var timeId = `#${upload_view_id}-${timestamp_field_id}-time`;

                            newImageToUpload.date = newDateString;
                            newImageToUpload.time = newTimeString;

                            if ($(dateId).length) {
                                $(dateId).val(newDateString); //date
                            }

                            if ($(timeId)) {
                                $(timeId).val(newTimeString); //time
                            }
                        }

                        if (hasGps && address_field_id) {
                            //field_1927 is the address field
                            $(`#kn-input-${address_field_id} input`).each(function() {
                                var fieldName = $(this).attr('name');
                                if (fieldName == 'latitude') {
                                    $(this).val(latitude);
                                    newImageToUpload.lat = latitude;
                                } else if (fieldName == 'longitude') {
                                    $(this).val(longitude);
                                    newImageToUpload.lon = longitude;
                                }
                            });
                        }
                        this.imageList.push(newImageToUpload);
                    });
                });
            }
        });
    }

    initFilePond() {

        FilePond.registerPlugin(
            FilePondPluginImageExifOrientation,
            FilePondPluginImageCrop,
            FilePondPluginImageResize,
            FilePondPluginImageTransform,
            FilePondPluginFileValidateSize,
            FilePondPluginImagePreview,
            FilePondPluginFileValidateType
        );

        FilePond.setOptions({
            imageTransformOutputStripImageHead: false,
            imageResizeUpscale: false,
            imageResizeTargetWidth: this.max_width ? this.max_width : 1000,
            imageResizeMode: 'cover',
            imageTransformOutputQuality: this.image_quality ? this.image_quality : 100,
            imageTransformOutputQualityMode: 'optional',
            server: {
                process: (fieldName, file, metadata, load, error, progress, abort) => {
                    this.uploadImage(fieldName, file, metadata, load, error, progress, abort);
                },
                revert: (uniqueFileId, load, error) => {
                    this.deleteImage(uniqueFileId, load, error);
                }
            }
        });
    }

    async saveImages() {
        var promises = [];
        this.imageList.forEach((image) => {
            var params = {};
            params[this.timestamp_field_id] = `${image.date} ${image.time}`;
            params[this.image_field_id] = image.url;
            params[this.address_field_id] = {
                "latitude" : image.lat,
                "longitude" : image.lon
            };
            
            promises.push(new Promise((resolve,reject) => {
                $.ajax({
                    url: `https://api.knack.com/v1/objects/${this.object_id}/records`,
                    type: 'POST',
                    headers: {
                        'Authorization': Knack.getUserToken(),
                        'X-Knack-Application-Id': Knack.application_id,
                        'X-Knack-REST-API-Key': window.knackRestApiKey,
                        'Content-Type': 'application/json'
                    },
                    data: JSON.stringify(params),
                    success: function(data){
                        console.log(`Created image with id ${data.id}`);
                        resolve(data.id);
                    },
                    error:function(err){
                        console.log(err);
                        reject(err);
                    }
                });
            }));
        });

        return Promise.all(promises);
    }

    replaceSubmitButton(){
        var submitButtonHolder = $(this.submitButton).parent();
        var newSubmitButton = $("<button class='kn-button is-primary' type='button'>Submit</button>");
        var imagesSelectObj = $(`div#field_block_${this.image_field_url_id} select`);
        var self = this;
        newSubmitButton.click((e) => {
            this.saveImages().then((results) => {
                //Knack.views[self.upload_view_id].model.fetch();

                console.log(results);
                
                //upload_view_id-image_connection_field_id.val()['id1','id2'....]
                $(`#${self.upload_view_id}-${self.image_connection_field_id}`).val(results);
                console.log($(`#${self.upload_view_id}-${self.image_connection_field_id}`).val());
                $(self.submitButton).click();
                //self.filepondObj.removeFiles();
            });
        });

        $(submitButtonHolder).append(newSubmitButton);
    }

    init() {
        if (this.cloudName && this.apiKey && this.apiSecret) {
            var imageElem = null;
            console.log(this.is_multiple);
            if(this.is_multiple){
                imageElem = $(`#${this.upload_view_id}`).find(`#kn-input-${this.image_connection_field_id}`)
            } else {
                imageElem = $(`#${this.upload_view_id}`).find(`input#${this.image_field_id}`)
            }

            if (imageElem.length > 0) {
                if (FilePond) {
                    var fieldImageContainer = this.is_multiple ? imageElem : $(imageElem).parent();
                    var filePondId = `filepond-${this.image_field_id}`;
                    var multiple = this.is_multiple ? 'multiple':'';
                    var filePondInput = $(`<input type="file" class="filepond" name="${filePondId}" id="${filePondId}" ${multiple}>`);
                    $(fieldImageContainer).append(filePondInput);
                    if (EXIF) {
                        this.initFilePond();
                        this.createImage(filePondInput[0]);

                        //replace submit button with a new one if is_Multiple true
                        if(this.is_multiple){
                            this.submitButton = $(`#${this.upload_view_id} div.kn-submit`).find("button");
                            this.submitButton.addClass('hideMe');
                            this.replaceSubmitButton();
                        }
                    } else {
                        alert("EXIF js required");
                    }
                } else {
                    alert("FilePond JS required");
                }
            } else {
                alert("Image upload field not found");
            }

        } else {
            alert("Please set cloudinary credentials");
        }
    }

    //Setter Function
    setCloudinaryCredentials(cloudinaryCredentials) {
        for(var key in cloudinaryCredentials){
            this[key] = cloudinaryCredentials[key];
        }
    }

    //Helper Functions
    convertDMSToDD(degrees, minutes, seconds, direction) {
        var dd = degrees + (minutes / 60) + (seconds / 3600);
        if (direction == "S" || direction == "W") {
            dd = dd * -1;
        }
        return dd;
    };

    hexString(buffer) {
        var byteArray = new Uint8Array(buffer);

        var hexCodes = [...byteArray].map(value => {
            var hexCode = value.toString(16);
            var paddedHexCode = hexCode.padStart(2, '0');
            return paddedHexCode;
        });

        return hexCodes.join('');
    }

    digestMessage(message) {
        var encoder = new TextEncoder();
        var data = encoder.encode(message);
        return window.crypto.subtle.digest('SHA-1', data);
    }
}