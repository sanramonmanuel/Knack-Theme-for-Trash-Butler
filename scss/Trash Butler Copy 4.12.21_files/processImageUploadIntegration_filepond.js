var imageUrlUpdate = function(record, list_view_id, object_id, address_field_id, timestamp_field_id, image_field_id, isUpdate) {
    var waterMarkData = [];

    if (address_field_id && ((`${address_field_id}_raw` in record) && record[`${address_field_id}_raw`])) { //check if there's an address
        var addressField = record[`${address_field_id}_raw`];
        var address = '';

        if (('street' in addressField) && addressField['street']) {
            address += addressField.street + '\n';
        }

        if ((('city' in addressField) && addressField['city']) && (('state' in addressField) && addressField['state'])) {
            address += `${addressField.city}, ${addressField.state}`;
        }

        if (address.length > 0) {
            waterMarkData.push(address);
        }
    }

    if ((timestamp_field_id in record) && record[timestamp_field_id]) { //check if there's a timestamp
        waterMarkData.push(record[timestamp_field_id]);
    }

    //only update if there's data to watermark.
    if (waterMarkData.length > 0) {
        var imageFieldRaw = record[`${image_field_id}_raw`];
        var imageUrl = '';

        if(typeof imageFieldRaw == 'object'){
            imageUrl = imageFieldRaw.url;
        } else {
            imageUrl = imageFieldRaw;
        }

        var urls = imageUrl.split("upload");
        var watermarkString = waterMarkData.join('\n');
        var watermarkParam = `c_scale,fl_relative,l_text:Doppio%20One_20_stroke:${encodeURIComponent(encodeURIComponent(watermarkString))},g_south_east,y_5,x_10,co_rgb:FFF,bo_5px_solid_black`;
        var imageRelPath = urls[1];

        if (isUpdate) {
            var url1Arr = urls[1].split("/");
            imageRelPath = `/${url1Arr[url1Arr.length-2]}/${url1Arr[url1Arr.length-1]}`
        }

        var updatedImageUrl = `${urls[0]}upload/${watermarkParam}${imageRelPath}`;

        Knack.showSpinner();
        var data = {};
        data[image_field_id] = updatedImageUrl;

        $.ajax({
            url: `https://api.knack.com/v1/objects/${object_id}/records/${record.id}`,
            type: 'PUT',
            headers: {
                'Authorization': Knack.getUserToken(),
                'X-Knack-Application-Id': Knack.application_id,
                'X-Knack-REST-API-Key': window.knackRestApiKey,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data),
            success: () => {
                Knack.hideSpinner();
                if (list_view_id) {
                    Knack.views[list_view_id].model.fetch();
                }
            }
        });
    }
};

window.imageUploadIntegrationArray.forEach((item, index) => {
    //there should be both the image_browse_field_id and image_field_id
    if(!('image_browse_field_id' in item) || !('image_field_id' in item)) return;

    $(document).on(`knack-view-render.${item.upload_view_id}`, function(event, view, data) {
        $(`#${item.upload_view_id}`).find(`input#${item.image_field_id}`).addClass('hideMe');
        $(`#kn-input-${item.timestamp_field_id}`).addClass('hideMe');

        if(item.address_field_id){
            $(`#kn-input-${item.address_field_id}`).addClass('hideMe');
        }

        $(`#kn-input-${item.image_browse_field_id}`).addClass('hideMe');

        var fpInt = setInterval(function() {
            if (typeof FilePond != 'undefined') {
                clearInterval(fpInt);
                let imageUploader = new ImageUploader(item);
                //imageUploader.setCloudinaryCredentials(window.cloudinaryCredentials.cloudName, window.cloudinaryCredentials.unsignedUploadPreset, window.cloudinaryCredentials.apiKey, window.cloudinaryCredentials.apiSecret, window.cloudinaryCredentials.folder);
                imageUploader.setCloudinaryCredentials(window.cloudinaryCredentials);
                imageUploader.init();
            }
        }, 100);
    });

    if(item.add_watermark){
        //Update image url when a record is updated
        if (typeof item.update_view_id != "undefined") {
            $(document).on(`knack-record-update.${item.update_view_id}`, function(event, view, record) {
                imageUrlUpdate(
                    record,
                    item.list_view_id,
                    item.object_id,
                    item.address_field_id,
                    item.timestamp_field_id,
                    item.image_field_id,
                    true
                );
            });
        }

        //Update image url when a record is added, meaning an image was uploaded.
        $(document).on(`knack-record-create.${item.upload_view_id}`, function(event, view, record) {
            imageUrlUpdate(
                record,
                item.list_view_id,
                item.object_id,
                item.address_field_id,
                item.timestamp_field_id,
                item.image_field_id,
                false
            );
        });
    }
});