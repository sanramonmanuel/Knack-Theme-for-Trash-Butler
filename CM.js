window.cloudinaryCredentials = {
    cloudName: 'strategicvisionz',
    unsignedUploadPreset: 'trashdash-default',
    apiKey: '594146185129859',
    apiSecret: 'URPTARoCbgIdkfvOkdU_j-u0Btw'
};

//OLD VALUE
/*

window.imageUploadIntegrationArray = [{
    upload_view_id: "view_3192",
    //list_view_id: "view_", //can be null, used only if there is a table that list the uploaded images.
    //update_view_id: "view_",
    object_id: "object_18",
    timestamp_field_id: "field_117",
    image_field_id: "field_609",
    image_browse_field_id: "field_115",
    address_field_id: "field_116",
},
{
    upload_view_id: "view_3196",
    //list_view_id: "view_", //can be null, used only if there is a table that list the uploaded images.
    //update_view_id: "view_",
    object_id: "object_16",
    timestamp_field_id: "field_101",
    image_field_id: "field_607",
    image_browse_field_id: "field_99",
    address_field_id: "field_100",
},
{
    upload_view_id: "view_3200",
    //list_view_id: "view_", //can be null, used only if there is a table that list the uploaded images.
    //update_view_id: "view_",
    object_id: "object_16",
    timestamp_field_id: "field_101",
    image_field_id: "field_607",
    image_browse_field_id: "field_99",
    address_field_id: "field_100",
},{
    upload_view_id: "view_3227",
    //list_view_id: "view_", //can be null, used only if there is a table that list the uploaded images.
    //update_view_id: "view_",
    object_id: "object_16",
    timestamp_field_id: "field_101",
    image_field_id: "field_607",
    image_browse_field_id: "field_99",
    address_field_id: "field_100",
},
{
    upload_view_id: "view_3231",
    //list_view_id: "view_", //can be null, used only if there is a table that list the uploaded images.
    //update_view_id: "view_",
    object_id: "object_16",
    timestamp_field_id: "field_101",
    image_field_id: "field_607",
    image_browse_field_id: "field_99",
    address_field_id: "field_100",
},
{
    upload_view_id: "view_3204",
    //list_view_id: "view_", //can be null, used only if there is a table that list the uploaded images.
    //update_view_id: "view_",
    object_id: "object_10",
    timestamp_field_id: "field_1247",
    image_field_id: "field_614",
    image_browse_field_id: "field_63",
    address_field_id: "field_1248",
},
{
    upload_view_id: "view_3209",
    //list_view_id: "view_", //can be null, used only if there is a table that list the uploaded images.
    //update_view_id: "view_",
    object_id: "object_12",
    timestamp_field_id: "field_796",
    image_field_id: "field_604",
    image_browse_field_id: "field_75",
    address_field_id: "field_795",
},
{
    upload_view_id: "view_3209",
    //list_view_id: "view_", //can be null, used only if there is a table that list the uploaded images.
    //update_view_id: "view_",
    object_id: "object_12",
    timestamp_field_id: "field_798",
    image_field_id: "field_605",
    image_browse_field_id: "field_76",
    address_field_id: "field_797",
},
{
    upload_view_id: "view_3218",
    //list_view_id: "view_", //can be null, used only if there is a table that list the uploaded images.
    //update_view_id: "view_",
    object_id: "object_10",
    timestamp_field_id: "field_1247",
    image_field_id: "field_614",
    image_browse_field_id: "field_63",
    address_field_id: "field_1248",
},
{
    upload_view_id: "view_3218",
    //list_view_id: "view_", //can be null, used only if there is a table that list the uploaded images.
    //update_view_id: "view_",
    object_id: "object_10",
    timestamp_field_id: "field_1250",
    image_field_id: "field_615",
    image_browse_field_id: "field_64",
    address_field_id: "field_1249",
}];
*/

window.imageUploadIntegrationArray = [
//clock in
{
    add_watermark:true,
    upload_view_id: "view_3192",
    object_id: "object_18",
    timestamp_field_id: "field_117",
    image_field_id: "field_609",
    image_browse_field_id: "field_115",
    address_field_id: "field_116"
},
//clock out
{
  	add_watermark:true,
    upload_view_id: "view_3238",
    object_id: "object_18",
    timestamp_field_id: "field_262",
    image_field_id: "field_260",
    image_browse_field_id: "field_807",
    address_field_id: "field_261"
},
//Compactor Before (Resident Access)
{
    add_watermark:true,
    upload_view_id: "view_3196",
    object_id: "object_16",
    timestamp_field_id: "field_101",
    image_field_id: "field_607",
    image_browse_field_id: "field_99",
    address_field_id: "field_100"
},
//Compactor Before (Maintenance Access) 
{
  	add_watermark:true,
    upload_view_id: "view_3200",
    object_id: "object_16",
    timestamp_field_id: "field_101",
    image_field_id: "field_607",
    image_browse_field_id: "field_99",
    address_field_id: "field_100",
},
//Report New Service Hazard
{
    upload_view_id: "view_3204",
    object_id: "object_10",
    timestamp_field_id: "field_1247",
    image_field_id: "field_620",
    image_browse_field_id: "field_588",
    address_field_id: "field_1248"
},
//Add Resident Infraction Photo 1
{
  	add_watermark:true,
    upload_view_id: "view_3218",
    object_id: "object_10",
    timestamp_field_id: "field_1247",
    image_field_id: "field_614",
    image_browse_field_id: "field_63",
    address_field_id: "field_1248"
},
//Add Resident Infraction Photo 2
{
  	add_watermark:true,
    upload_view_id: "view_3218",
    object_id: "object_10",
    timestamp_field_id: "field_1250",
    image_field_id: "field_615",
    image_browse_field_id: "field_64",
    address_field_id: "field_1249"
},
//Compactor After (Resident Access)
{
  	add_watermark:true,
    upload_view_id: "view_3227",
    object_id: "object_16",
    timestamp_field_id: "field_101",
    image_field_id: "field_607",
    image_browse_field_id: "field_99",
    address_field_id: "field_100"
},
//Compactor After (Maintenance Access)
{
  	add_watermark:true,
    upload_view_id: "view_3231",
    object_id: "object_16",
    timestamp_field_id: "field_101",
    image_field_id: "field_607",
    image_browse_field_id: "field_99",
    address_field_id: "field_100",
}    
];

window.knackRestApiKey = '874a0c90-cbe0-11e8-bc1a-bd0ff4f2a6dd';

var canSupportClass = function() {
    try {
        eval('"use strict"; class foo {}');
        return true;
    } catch (e) {
        return false;
    }
}

KnackInitAsync = function($, callback) {
    window.$ = $;
    window.menuIconMap = [];
  
  	var asyncLoads = 0;
  
  	//for image upload integration
    if (canSupportClass()) {
        if (typeof FilePond == 'undefined') {
            LazyLoad.css([
              //'https://dl.dropbox.com/s/sqlg3dw46rcc7ch/Community%20Manager%20Theme.css',
              'https://unpkg.com/filepond/dist/filepond.css',
                'https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
            ], function() {
                LazyLoad.js(['https://cdn.jsdelivr.net/npm/exif-js',
                    'https://unpkg.com/filepond-plugin-image-crop/dist/filepond-plugin-image-crop.js',
                    'https://unpkg.com/filepond-plugin-image-resize/dist/filepond-plugin-image-resize.js',
                    'https://unpkg.com/filepond-plugin-image-transform/dist/filepond-plugin-image-transform.js',
                    'https://unpkg.com/filepond-plugin-file-validate-size/dist/filepond-plugin-file-validate-size.min.js',
                    'https://unpkg.com/filepond-plugin-image-exif-orientation/dist/filepond-plugin-image-exif-orientation.min.js',
                    'https://unpkg.com/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.js',
                    'https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.js',
                    'https://unpkg.com/filepond/dist/filepond.min.js',
                    'https://server.chhjny.com/imageupload/NewImageUploader.js',
                    'https://server.chhjny.com/imageupload/processImageUploadIntegration_filepond.js'
                ], function() {
                  asyncLoads++;
                });
            });
        }
    } else {
        LazyLoad.js(['https://cdn.jsdelivr.net/npm/exif-js',
                     'https://server.chhjny.com/imageupload/OldImageUploader.js',
                     'https://server.chhjny.com/imageupload/processImageUploadIntegration_ordinary.js'], function() {
        	asyncLoads++;
        });
    }
  
    //end image upload integration
    if (!Knack.isMobile()) {
      LazyLoad.css(['https://server.chhjny.com/sidebar/sidebar.css'], function() {
        window.menuIconMap = 
          {
          //Menu Name: Icon Name
          "History" : "fa-history",
          "Services" : "fa-server",
          "Management" : "fa-life-ring",
          "Archive Pages" : "fa-archive",
          "Settings" : "fa-gear",
          "Help Desk" : "fa-question-circle",
        };
        LazyLoad.js(['https://server.chhjny.com/sidebar/sidebar.js'], function() {
          asyncLoads++;
        });
      });
    } else {
      $("#app-menu-container").show();
      asyncLoads++;
    }
  
    //knack js api and kanban
  	LazyLoad.css(['https://server.chhjny.com/jkanban/jkanban.min.css'], function() {
      LazyLoad.js(['https://server.chhjny.com/jkanban/jkanban.min.js',
                   'https://server.chhjny.com/jkanban/KnackKanban.js'
                  ], function() {
        asyncLoads++;
      });
    });

    
  
  	var checkAsyncLoads = setInterval(function(){
    	//there are 3 async loads we are waiting on.
        // 1 image upload scripts
        // 2 sidebar scripts.
        // 3 KnackJsApi & Kanban scripts/css
      	if(asyncLoads == 3) { 
            clearInterval(checkAsyncLoads);
            callback();
        }
    },200);
};


//LOAD REQUIRED LIBRARIES
//load from chhjny server
LazyLoad.css(['https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
    'https://server.chhjny.com/scripts/@fullcalendar/core@4.2.0/main.min.css',
    'https://server.chhjny.com/scripts/@fullcalendar/daygrid@4.2.0/main.min.css',
    'https://server.chhjny.com/scripts/@fullcalendar/timegrid@4.2.0/main.min.css',
    'https://server.chhjny.com/scripts/@fullcalendar/bootstrap@4.2.0/main.min.css',
    'https://server.chhjny.com/scripts/tingle@0.15.1/tingle.min.css'
], function() {
    LazyLoad.js([
        'https://server.chhjny.com/scripts/@fullcalendar/core@4.2.0/main.min.js',
        'https://server.chhjny.com/scripts/@fullcalendar/daygrid@4.2.0/main.min.js',
        'https://server.chhjny.com/scripts/@fullcalendar/timegrid@4.2.0/main.min.js',
        'https://server.chhjny.com/scripts/@fullcalendar/bootstrap@4.2.0/main.min.js',
        'https://server.chhjny.com/scripts/@fullcalendar/interaction@4.2.0/main.min.js',
        'https://server.chhjny.com/scripts/tingle@0.15.1/tingle.min.js'
    ], function() {
        

    });
});





//A simple Knack REST API interface that handles the 10 request/sec
//limitation of the KNACK REST API.
KnackApi = {};
KnackApi.callCount = 0;
KnackApi.knackCall = async function(type, urlParams, obj = null) {
    if (!type) return;

    try {
        await new Promise((resolve, reject) => {
            let waitInt = setInterval(() => {
                if (KnackApi.callCount < 5) {
                    KnackApi.callCount++;
                    clearInterval(waitInt);
                    resolve();
                }
            }, 100);
        });

        obj = obj ? obj : {};

        var headers = {
            'X-Knack-Application-Id': Knack.application_id,
            'X-Knack-REST-API-KEY': "874a0c90-cbe0-11e8-bc1a-bd0ff4f2a6dd"
        };

        if (type == 'put' || type == 'post') {
            headers['Authorization'] = Knack.getUserToken();
            headers['Content-Type'] = 'application/json';
        }

        return new Promise((resolve, reject) => {
            $.ajax({
                type: type,
                headers: headers,
                url: `https://api.knack.com/v1/objects/${urlParams}`,
                data: JSON.stringify(obj),
                success: function(data) {
                    KnackApi.callCount--;
                    resolve(data);
                },
                error: function(data) {
                    KnackApi.callCount--;
                    resolve(data);
                }
            });
        });
    } catch (e) {
        console.log(e);
        return e;
    }
};

KnackApi.GetObjects = async function(objectName, filter) {
    let currentPage = 0;
    let maxPages = 0;
    const responses = [];
    do {
        currentPage++;
        let url = `${objectName}/records`;
        url += '?rows_per_page=1000';
        url += `&filters=${encodeURIComponent(JSON.stringify(filter))}`;
        url += `&page=${currentPage}`
        const response = await KnackApi.knackCall('get', url);
        const records = response.records;
        maxPages = response.total_pages;
        responses.push(records);
    } while (currentPage < maxPages)
    return [].concat(...responses);
};

KnackApi.GetObject = async function(objectName, id) {
    return await KnackApi.knackCall('get', `${objectName}/records/${id}`);
};

KnackApi.SaveObject = async function(objectName, data) {
    return await KnackApi.knackCall('post', `${objectName}/records`, data);
};

KnackApi.UpdateObject = async function(objectName, id, data) {
    return await KnackApi.knackCall('put', `${objectName}/records/${id}`, data);
};

KnackApi.DeleteObject = async function(objectName, id) {
    return await KnackApi.knackCall('delete', `${objectName}/records/${id}`, data);
};

/*************
KNACK JS API
************/
var KnackJs = function(info) {
    // Knack info
    this.applicationID = info.applicationID;
    this.restAPIkey = info.restAPIkey;
    this.knackURL = info.knackURL || 'https://api.knack.com/v1/';
    this.jQuery = info.jQuery || window.$;

    // Environment info
    this.environment = info.environment || 'production';
    this.isProduction = this.environment === 'production';
    this.isDevelopment = this.environment === 'development';

    // Internal info
    this.$spinnerBackdrop = null;

    // External libraries
    this.libraries = info.libraries || {
        async: {
            url: 'https://cdnjs.cloudflare.com/ajax/libs/async/2.4.1/async.min.js',
            loaded: false,
            objectName: 'async'
        },
        jquery: {
            url: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js',
            loaded: false,
            objectName: 'jQuery'
        }
    };

    // Check compatibility
    this.assert(Knack || window.Knack, 'Error, this library only run on Knack applications');
    this.assert(this.jQuery, 'Error, jQuery instance is required');
};

Object.defineProperty(KnackJs.prototype, '$', {
    get: function() {
        return window.jQuery || this.jQuery || window.$;
    }
});

KnackJs.prototype.set = function(key, value) {
    Object.defineProperty(KnackJs.prototype, key, {
        get: function() {
            return value;
        }
    });
};

KnackJs.prototype.assert = function(cond, message) {
    if (!cond) {
        throw new Error(message);
    }
};

Object.defineProperty(KnackJs.prototype, 'headers', {
    get: function() {
        return {
            'X-Knack-Application-ID': this.applicationID,
            'X-Knack-REST-API-Key': this.restAPIkey,
            'content-type': 'application/json'
        };
    }
});

KnackJs.prototype.find = function(objectId, filters, sortField, sortOrder, recordPerPage) {
    filters = filters || [];
    sortOrder = sortOrder || '';
    sortField = sortField || '';
    recordPerPage = recordPerPage || 'all';

    var filterValEnc = encodeURIComponent(JSON.stringify(filters));
    var sortFEnc = encodeURIComponent(sortField);
    var sortOEnc = encodeURIComponent(sortOrder);

    return this.$.ajax({
        type: 'GET',
        headers: this.headers,
        url: this.knackURL + 'objects/' + objectId + '/records?rows_per_page=' + recordPerPage +
            '&filters=' + filterValEnc + "&sort_field=" + sortFEnc + "&sort_order=" +
            sortOEnc
    });
};

KnackJs.prototype.findById = function(objectId, id) {

    return this.$.ajax({
        type: 'GET',
        headers: this.headers,
        url: this.knackURL + 'objects/' + objectId + '/records/' + id
    });
};

KnackJs.prototype.update = function(objectId, id, data) {

    return this.$.ajax({
        type: 'PUT',
        headers: this.headers,
        url: this.knackURL + 'objects/' + objectId + '/records/' + id,
        data: data
    });
};

KnackJs.prototype.delete = function(objectId, id) {

    return this.$.ajax({
        type: 'DELETE',
        headers: this.headers,
        url: this.knackURL + 'objects/' + objectId + '/records/' + id
    });
};

KnackJs.prototype.create = function(objectId, data) {
    return this.$.ajax({
        type: 'POST',
        headers: this.headers,
        url: this.knackURL + 'objects/' + objectId + '/records',
        data: data
    });
};

var knackApi = new KnackJs({
    applicationID: '5bbcb6a739b582305a70b738',
    restAPIkey: '874a0c90-cbe0-11e8-bc1a-bd0ff4f2a6dd',
    environment: 'production',
    jQuery: $
});

knackApi.set('OBJECT', {
    MGR_SCHED: 'object_36',
    MGR_EVENTS: 'object_32',
    DISTRICT: 'object_27',
    COMMUNITY: 'object_8',
    SCHED_ITEM_TEMPLATES: 'object_35',
    COMM_SMS_LIST: 'object_37'
});

/////////////////END KNACK JS API


/*
window.cloudinaryCredentials = {
    cloudName: 'strategicvisionz',
    unsignedUploadPreset: 'trashdash-default',
    apiKey: '594146185129859',
    apiSecret: 'URPTARoCbgIdkfvOkdU_j-u0Btw'
};

window.imageUploadIntegrationArray = [{
    upload_view_id: "view_3192",
    //list_view_id: "view_", //can be null, used only if there is a table that list the uploaded images.
    //update_view_id: "view_",
    object_id: "object_18",
    timestamp_field_id: "field_117",
    image_field_id: "field_609",
    image_browse_field_id: "field_115",
    address_field_id: "field_116",
},
{
    upload_view_id: "view_3196",
    //list_view_id: "view_", //can be null, used only if there is a table that list the uploaded images.
    //update_view_id: "view_",
    object_id: "object_16",
    timestamp_field_id: "field_101",
    image_field_id: "field_607",
    image_browse_field_id: "field_99",
    address_field_id: "field_100",
},
{
    upload_view_id: "view_3200",
    //list_view_id: "view_", //can be null, used only if there is a table that list the uploaded images.
    //update_view_id: "view_",
    object_id: "object_16",
    timestamp_field_id: "field_101",
    image_field_id: "field_607",
    image_browse_field_id: "field_99",
    address_field_id: "field_100",
},{
    upload_view_id: "view_3227",
    //list_view_id: "view_", //can be null, used only if there is a table that list the uploaded images.
    //update_view_id: "view_",
    object_id: "object_16",
    timestamp_field_id: "field_101",
    image_field_id: "field_607",
    image_browse_field_id: "field_99",
    address_field_id: "field_100",
},
{
    upload_view_id: "view_3231",
    //list_view_id: "view_", //can be null, used only if there is a table that list the uploaded images.
    //update_view_id: "view_",
    object_id: "object_16",
    timestamp_field_id: "field_101",
    image_field_id: "field_607",
    image_browse_field_id: "field_99",
    address_field_id: "field_100",
},
{
    upload_view_id: "view_3204",
    //list_view_id: "view_", //can be null, used only if there is a table that list the uploaded images.
    //update_view_id: "view_",
    object_id: "object_10",
    timestamp_field_id: "field_1247",
    image_field_id: "field_614",
    image_browse_field_id: "field_63",
    address_field_id: "field_1248",
},
{
    upload_view_id: "view_3209",
    //list_view_id: "view_", //can be null, used only if there is a table that list the uploaded images.
    //update_view_id: "view_",
    object_id: "object_12",
    timestamp_field_id: "field_796",
    image_field_id: "field_604",
    image_browse_field_id: "field_75",
    address_field_id: "field_795",
},
{
    upload_view_id: "view_3209",
    //list_view_id: "view_", //can be null, used only if there is a table that list the uploaded images.
    //update_view_id: "view_",
    object_id: "object_12",
    timestamp_field_id: "field_798",
    image_field_id: "field_605",
    image_browse_field_id: "field_76",
    address_field_id: "field_797",
}];

window.knackRestApiKey = '874a0c90-cbe0-11e8-bc1a-bd0ff4f2a6dd';

var canSupportClass = function() {
    try {
        eval('"use strict"; class foo {}');
        return true;
    } catch (e) {
        return false;
    }
}

KnackInitAsync = function($, callback) {
    window.$ = $;
    window.menuIconMap = [];
  
  	var asyncLoads = 0;
  
  	//for image upload integration
    if (canSupportClass()) {
        if (typeof FilePond == 'undefined') {
            LazyLoad.css(['https://unpkg.com/filepond/dist/filepond.css',
                'https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
            ], function() {
                LazyLoad.js(['https://cdn.jsdelivr.net/npm/exif-js',
                    'https://unpkg.com/filepond-plugin-image-crop/dist/filepond-plugin-image-crop.js',
                    'https://unpkg.com/filepond-plugin-image-resize/dist/filepond-plugin-image-resize.js',
                    'https://unpkg.com/filepond-plugin-image-transform/dist/filepond-plugin-image-transform.js',
                    'https://unpkg.com/filepond-plugin-file-validate-size/dist/filepond-plugin-file-validate-size.min.js',
                    'https://unpkg.com/filepond-plugin-image-exif-orientation/dist/filepond-plugin-image-exif-orientation.min.js',
                    'https://unpkg.com/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.js',
                    'https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.js',
                    'https://unpkg.com/filepond/dist/filepond.min.js',
                    'https://server.chhjny.com/imageupload/NewImageUploader.js',
                    'https://server.chhjny.com/imageupload/processImageUploadIntegration_filepond.js'
                ], function() {
                  asyncLoads++;
                });
            });
        }
    } else {
        LazyLoad.js(['https://cdn.jsdelivr.net/npm/exif-js',
                     'https://server.chhjny.com/imageupload/OldImageUploader.js',
                     'https://server.chhjny.com/imageupload/processImageUploadIntegration_ordinary.js'], function() {
        	asyncLoads++;
        });
    }
  
    //end image upload integration


/*
START Custom Date Filter
*/

class DateFilter {
    /**
     * Class constructor
     * @param {Array} filterParams contains an array of {viewName:"",dateFieldId:""} objects dateField id is the field key for the date located in viewName
     * @param {string} dateFieldName the name of the field for the date.
     * @param {string} dateRangeDivSelector div selector where we will insert our date filter elements
     * @param {number} insertIndex determines the position of the date filter elements when inserting in dateRangeDivSelector
     */
    constructor(filterParams, dateFieldName, dateRangeDivSelector, insertIndex) {
        this.filterParams = filterParams;
        this.dateFieldName = dateFieldName;
        this.dateRangeDivSelector = dateRangeDivSelector;
        this.dateRangeDivInsertIndex = insertIndex < 1 ? -1 : (insertIndex - 1);
    }

    /**
     * Initializes our date filter elements. Creates and inserts the date filter elements
     * in this.dateRangeDivSelector
     */
    init() {
        var div = $('<div class="level" style="margin-bottom: .7em;">');
        var form = $('<form class="table-date-filter-' + this.dateFieldName + '">');
        var p = $('<p class="control has-addons">');
        var label = $('<span class="input" style="border:0;box-shadow: none;padding-left: 0;">' + this.dateFieldName + ' Filter:</span>');
        var filterFieldFrom = $(`<input type="text" class="input" id="from_datefilter" placeholder="From">`);
        var filterFieldTo = $(`<input type="text" class="input" id="to_datefilter" placeholder="To">`);

        var params = this.getFilterParam();
        if (params != null) {
            $(filterFieldFrom).val(params.from);
            $(filterFieldTo).val(params.to);
        }
        var filterBtn = $('<a class="kn-button filter">Apply Filter</a>');
        $(p).append(label);
        $(p).append(filterFieldFrom);
        $(p).append(filterFieldTo);
        $(p).append(filterBtn);
        $(form).append(p);
        $(div).append(form);

        if (this.dateRangeDivInsertIndex > -1) {
            $(`${this.dateRangeDivSelector}>div:eq(${this.dateRangeDivInsertIndex})`).after(div);
        } else {
            $(this.dateRangeDivSelector).prepend(div);
        }

        filterFieldFrom.datepicker();
        filterFieldTo.datepicker();

        filterBtn.click(() => {
            this.doFilter();
        });

    }

    /**
     * Converts a string  e.g. 07/30/2019, to a JS Date object.
     * @param {*} dateString the date string to convert to an object
     */
    getDateObject(dateString) {
        let dateArr = dateString.split("/");
        let dateObj = new Date();
        dateObj.setFullYear(dateArr[2], dateArr[0] - 1, dateArr[1]);
        return dateObj;
    }

    /**
     * Retrieves the from and to date values if the page has already been filtered so that
     * it can be set in the from and to field date fields.
     */
    getFilterParam() {
        var urlParams = window.location.href.split('?');
        var result = {
            from: null,
            to: null
        };

        if (urlParams.length >= 2) {
            var filterParams = urlParams[1];
            var filterString = decodeURI(filterParams)
                .replace(/%2F/g, '\/')
                .replace(/%2C/g, ',')
                .replace(/%3A/g, ':');
            var filter = filterString.split('&')[0].split('=')[1];
            var filterObj = JSON.parse(filter);

            if (filterObj.rules && filterObj.rules.length > 1) {
                result = {};
                for (var i = 0; i < filterObj.rules.length; i++) {
                    var filterRule = filterObj.rules[i];
                    var filterValue = filterRule.value;
                    var dateObj = this.getDateObject(filterValue);
                    if (filterRule.operator == 'is after') { //from date
                        dateObj.setDate(dateObj.getDate() + 1);
                        result.from = ("0" + (dateObj.getMonth() + 1)).slice(-2) + "/" + ("0" + dateObj.getDate()).slice(-2) + "/" + dateObj.getFullYear();
                    } else if (filterRule.operator == 'is before') { //to date
                        dateObj.setDate(dateObj.getDate() - 1);
                   
                      result.to = ("0" + (dateObj.getMonth() + 1)).slice(-2) + "/" + ("0" + dateObj.getDate()).slice(-2) + "/" + dateObj.getFullYear();
                    } else {
                        //nani?
                    }
                }
            }
        }
        return result.from == null && result.to == null ? null : result;
    }

    /**
     * Does the actual filtering by date of the selected view tables.
     */
    doFilter() {
        var fromDate = $("#from_datefilter").val();
        var toDate = $("#to_datefilter").val();

        if (fromDate.length == 0 || toDate.length == 0) {
            alert("From and To dates are required");
        } else {
            var fromDateObj = this.getDateObject(fromDate);
            var toDateObj = this.getDateObject(toDate);
            if (toDateObj.getTime() < fromDateObj.getTime()) {
                alert("To date cannot be less than the From date");
            } else {
                fromDateObj.setDate(fromDateObj.getDate() - 1);
                toDateObj.setDate(toDateObj.getDate() + 1);

                var newFromDateString = ("0" + (fromDateObj.getMonth() + 1)).slice(-2) + "/" + ("0" + fromDateObj.getDate()).slice(-2) + "/" + fromDateObj.getFullYear();
                var newToDateString = ("0" + (toDateObj.getMonth() + 1)).slice(-2) + "/" + ("0" + toDateObj.getDate()).slice(-2) + "/" + toDateObj.getFullYear();
                var filterParamList = [];

                this.filterParams.forEach(param => {
                    var filter = {
                        "match": "and",
                        "rules": [{
                                "field": param.dateFieldId,
                                "operator": "is after",
                                "value": newFromDateString,
                                "field_name": this.dateFieldName
                            },
                            {
                                "match": "and",
                                "field": param.dateFieldId,
                                "operator": "is before",
                                "value": newToDateString,
                                "field_name": this.dateFieldName
                            }
                        ]
                    };

                    var filterString = JSON.stringify(filter);

                    filterString = encodeURI(filterString)
                        .replace(/%22/g, '"')
                        .replace(/\//g, '%2F')
                        .replace(/,/g, '%2C')
                        .replace(/:/g, '%3A')

                    var params = param.viewName + '_filters=' + filterString + '&' + param.viewName + '_page=1';
                    filterParamList.push(params);
                });

                var currPage = window.location.href.split('?')[0];
                Knack.showSpinner();
                window.location.href = currPage + "?" + filterParamList.join("&");
            }
        }
    }
}




//This is used to apply the custom date filter to a single table

//Services --> Time Clocks --> All Time Clocks - scene_804
  $(document).on('knack-view-render.view_3257', function(event, view, data) {
  var dFilter = new DateFilter([{'viewName':'view_3257', 'dateFieldId':'field_113'}], 'Clock In Date Range', '.kn-records-nav', 2)
  dFilter.init();
  });

//Services --> Time Clocks --> All Time Clocks - scene_804
  $(document).on('knack-view-render.view_3275', function(event, view, data) {
  var dFilter = new DateFilter([{'viewName':'view_3275', 'dateFieldId':'field_113'}], 'Clock In Date Range', '.kn-records-nav', 2)
  dFilter.init();
  });

//Services --> Time Clocks --> All Time Clocks - scene_804
  $(document).on('knack-view-render.view_3244', function(event, view, data) {
  var dFilter = new DateFilter([{'viewName':'view_3244', 'dateFieldId':'field_113'}], 'Clock In Date Range', '.kn-records-nav', 2)
  dFilter.init();
  });

//Services --> Time Clocks --> All Time Clocks - scene_804
  $(document).on('knack-view-render.view_3246', function(event, view, data) {
  var dFilter = new DateFilter([{'viewName':'view_3246', 'dateFieldId':'field_113'}], 'Clock In Date Range', '.kn-records-nav', 2)
  dFilter.init();
  });


 /*
//This is used to apply the custom date filter to multiple tables on the same page
  $(document).on('knack-scene-render.scene_XXX', function(event, view, data) {
  var filterTableParams = [{
      'viewName':'view_XXX', 
      'dateFieldId':'field_XXX'	
  },{
      'viewName':'view_XXX', 
      'dateFieldId':'field_XXX'  
  },{
      'viewName':'view_XXX', 
      'dateFieldId':'field_XXX'
  },{
      'viewName':'view_XXX', 
      'dateFieldId':'field_XXX'  
  }];
  
  var dFilter = new DateFilter(filterTableParams, 'Clock In Timestamp', '#kn-scene_XXX', 0)
  dFilter.init();
  });
  
*/



/*
END CUSTOM DATE FILTER
*/





//This is the view modification for Butlers - dropdown
const butlerViews = {
    ['Today\'s Services']: 'view_68',
    ['Current Time Clocks']: 'view_457',

}

for (let view in butlerViews) {
    $(document).on(`knack-view-render.${butlerViews[view]}`, () => {
        $(`#${butlerViews[view]} .view-header h2`).html(`<i class="fa fa-chevron-down"></i>${view}<i class="fa fa-chevron-down"></i>`);
        $(`#${butlerViews[view]} .view-header`).click(function() {
            $(`#${butlerViews[view]} .kn-table-wrapper`).slideToggle(300, () => {
                if ($(`#${butlerViews[view]} .view-header h2`).html().indexOf('down') > -1)
                    $(`#${butlerViews[view]} .view-header h2`).html(`<i class="fa fa-chevron-up"></i>${view}<i class="fa fa-chevron-up"></i>`);
                else
                    $(`#${butlerViews[view]} .view-header h2`).html(`<i class="fa fa-chevron-down"></i>${view}<i class="fa fa-chevron-down"></i>`);
            });
        });
    });
}
//end Butler view modification



//This hides the clocked in timestamp on the Butler clock in form so that it can still collect information
$(document).on("knack-view-render.view_2500", function(event, view, data) {
        $("#kn-input-field_113").addClass('hideMe');
});


//This hides the timestamp fields on the Butler compactor-before form so that they can still collect information
$(document).on("knack-view-render.view_78", function(event, view, data) {
        $("#kn-input-field_103").addClass('hideMe');
});

//This hides the timestamp fields on the Butler compactor-before-inside form so that they can still collect information
$(document).on("knack-view-render.view_98", function(event, view, data) {
        $("#kn-input-field_103").addClass('hideMe');
});

//This hides the timestamp fields on the Butler compactor-after form so that they can still collect information
$(document).on("knack-view-render.view_101", function(event, view, data) {
        $("#kn-input-field_103").addClass('hideMe');
});

//This hides the timestamp fields on the Butler compactor-after-inside form so that they can still collect information
$(document).on("knack-view-render.view_104", function(event, view, data) {
        $("#kn-input-field_103").addClass('hideMe');
});


//This hides the timestamp fields on the Butler Clock Out form so that they can still collect information
$(document).on("knack-view-render.view_2505", function(event, view, data) {
        $("#kn-input-field_114").addClass('hideMe');
});


//This hides the clocked in timestamp on the Porter clock in form so that it can still collect information
$(document).on("knack-view-render.view_2795", function(event, view, data) {
        $("#kn-input-field_113").addClass('hideMe');
});


//This hides the timestamp fields on the Porter compactor-before form so that they can still collect information
$(document).on("knack-view-render.view_2811", function(event, view, data) {
        $("#kn-input-field_103").addClass('hideMe');
});

//This hides the timestamp fields on the Porter compactor-before-inside form so that they can still collect information
$(document).on("knack-view-render.view_2814", function(event, view, data) {
        $("#kn-input-field_103").addClass('hideMe');
});

//This hides the timestamp fields on the Porter compactor-after form so that they can still collect information
$(document).on("knack-view-render.view_2817", function(event, view, data) {
        $("#kn-input-field_103").addClass('hideMe');
});

//This hides the timestamp fields on the Porter compactor-after-inside form so that they can still collect information
$(document).on("knack-view-render.view_2820", function(event, view, data) {
        $("#kn-input-field_103").addClass('hideMe');
});


//This hides the timestamp fields on the Porter Forgot to Return from Lunch Break form so that they can still collect information
$(document).on("knack-view-render.view_2807", function(event, view, data) {
        $("#kn-input-field_1034").addClass('hideMe');
});


//This hides the timestamp fields on the Porter Clock Out form so that they can still collect information
$(document).on("knack-view-render.view_2798", function(event, view, data) {
        $("#kn-input-field_114").addClass('hideMe');
});

//This hides the timestamp fields on the Area Supervisor Dashboard Clock In form so that they can still collect information
$(document).on("knack-view-render.view_3181", function(event, view, data) {
        $("#kn-input-field_1176").addClass('hideMe');
});

//This hides the timestamp fields on the Area Supervisor "Time Punches" Clock In form so that they can still collect information
$(document).on("knack-view-render.view_3089", function(event, view, data) {
        $("#kn-input-field_1176").addClass('hideMe');
});

//This hides the timestamp fields on the Area Supervisor Clock Out form so that they can still collect information
$(document).on("knack-view-render.view_3090", function(event, view, data) {
        $("#kn-input-field_1177").addClass('hideMe');
});

//This hides the timestamp fields on the Area Supervisor Clock Out form so that they can still collect information
$(document).on("knack-view-render.view_3088", function(event, view, data) {
        $("#kn-input-field_1177").addClass('hideMe');
});


//This hides the timestamp fields on the Butler - Testing Clock In form so that they can still collect information
$(document).on("knack-view-render.view_3192", function(event, view, data) {
        $("#kn-input-field_113").addClass('hideMe');
});

//This hides the timestamp fields on the Butler - Testing Compactor Before form so that they can still collect information
$(document).on("knack-view-render.view_3196", function(event, view, data) {
        $("#kn-input-field_103").addClass('hideMe');
});

//This hides the timestamp fields on the Butler - Testing Compactor Before Inside form so that they can still collect information
$(document).on("knack-view-render.view_3200", function(event, view, data) {
        $("#kn-input-field_103").addClass('hideMe');
});

//This hides the timestamp fields on the Butler - Testing Compactor After form so that they can still collect information
$(document).on("knack-view-render.view_3227", function(event, view, data) {
        $("#kn-input-field_103").addClass('hideMe');
});

//This hides the timestamp fields on the Butler - Testing Compactor After Inside form so that they can still collect information
$(document).on("knack-view-render.view_3231", function(event, view, data) {
        $("#kn-input-field_103").addClass('hideMe');
});

//SMS
$(document).on('knack-record-create.view_1628', function(event, view, record) {
    var smsListId = record.field_697_raw[0].id;
    var message = record.field_698;

    knackApi.findById(knackApi.OBJECT.COMM_SMS_LIST, smsListId).then((result) => {
        //send the message to the linked number of smsListId
        var number = result.field_692_raw.formatted;
        $.ajax({
            type: "POST",
            url: "https://server.chhjny.com:3003/send",
            data: JSON.stringify({
                to: number,
                message: message
            }),
            contentType: "application/json"
        });
    });
});


//SMS Bulk
$(document).on('knack-record-create.view_1742', function(event, view, record) {
    var communityId = record.field_715_raw[0].id;
    var message = record.field_714;
  	var filter = {
        'match': 'and',
        'rules': [{
                'field': 'field_711',
                'operator': 'is',
                'value': communityId
        }]
    };
  	Knack.showSpinner();
    knackApi.find(knackApi.OBJECT.BULK_SMS_LIST, filter).then((result) => {
        if(result.total_records > 0) {
        	var numbers = [];
          	result.records.forEach((record) => {
            	numbers.push(record.field_710_raw.formatted);
            });
          
          	$.ajax({
                type: "POST",
                url: "https://server.chhjny.com:3003/send_multiple",
                data: JSON.stringify({
                    number_csv: numbers.join(","),
                    message: message
                }),
                contentType: "application/json"
        	}); 
        } else {
        	alert("No sms list item found with the selected community");
            knackApi.delete("object_41",record.id); //delete the message
        }
        Knack.hideSpinner();
    });
});

//SMS CSS Phone like thread display
function responsiveChat(element) {
    $(element).html('<form class="chat"><span></span><div class="messages"></div></form>');

    function showLatestMessage() {
        $(element).find('.messages').scrollTop($(element).find('.messages').height());
    }

    showLatestMessage();
}

function responsiveChatPush(element, sender, origin, date, message) {
    var originClass;
    if (origin == 'me') {
        originClass = 'myMessage';
    } else {
        originClass = 'fromThem';
    }
    $(element + ' .messages').append('<div class="message"><div class="' + originClass + '"><p>' + message + '</p><date><b>' + sender + '</b> ' + date + '</date></div></div>');
  	$(element).scrollTop($(element)[0].scrollHeight);
}

var interval_view_1627 = null;
var scheduleModelFetchTimeout_view_1627 = null;
var chatScroll_view_1627 = -1;
var prevDataLength_view_1627 = 0;

$(document).on('knack-view-render.view_1627', function(event, view, data) {
    $("#view_1627 div.kn-table-wrapper").html('')
    $("#view_1627 div.kn-records-nav").remove();

    /* Activating chatbox on element */
    responsiveChat('#view_1627 div.kn-table-wrapper');
    data.forEach((message) => {
        var messageClass = message.field_700 == 'TB Response' ? "me" : "you";
        var name = message.field_700 == 'TB Response' ? message.field_702_raw[0].identifier : "Customer";
        responsiveChatPush('.chat', name, messageClass, message.field_703, message.field_698);
    });
	
  	
    //retain the scroll position of the chat box
  	if(chatScroll_view_1627 > -1 && prevDataLength_view_1627 == data.length) {
      	$(".chat").scrollTop(chatScroll_view_1627);
    }
  
  	prevDataLength_view_1627 = data.length;
  
    //make sure that the poll function has not been started yet
    //and also there is no scheduled event to start the poll function
    if (interval_view_1627 == null && scheduleModelFetchTimeout_view_1627 == null) {
        interval_view_1627 = setInterval(function() {
            Knack.views.view_1627.model.fetch();
        }, 1000);
    }

    //when scrolling for that sms messages, stop the polling of new messages for smooth scrolling
    //resume only after the scroll stopped and 500ms has passed.
    $(".chat").off().on("scroll", function() {
        chatScroll_view_1627 = $(".chat").scrollTop();
        clearInterval(interval_view_1627);
        interval_view_1627 = null;
        if (scheduleModelFetchTimeout_view_1627 != null) {
            clearTimeout(scheduleModelFetchTimeout_view_1627);
        }

        scheduleModelFetchTimeout_view_1627 = setTimeout(function() {
            interval_view_1627 = setInterval(function() {
                Knack.views.view_1627.model.fetch();
            }, 1000);
        }, 500);
    });
});

//when butler sends message, append to message thread view_1628
$(document).on('knack-record-create.view_1628', function(event, view, record) {
    responsiveChatPush('.chat', record.field_702_raw[0].identifier, "me", record.field_703, record.field_698);
});

//accordion stuff
$.fn.toAccordion = function() {
    var generateAccordionRow = function(rowData, index, view_id) {
      	var hasContent = rowData.content.length > 0;
        var mainDiv = $("<div> </div>");
        var checked = index == 0 ? "checked='true'" : "";
      	var disableClick = hasContent ? "" : "disabled";
        var clickControl = $(`<input id='faq-${view_id}-${index}' name='faq-${view_id}' type='radio' ${disableClick}>`);
        var header = $(`<label for='faq-${view_id}-${index}'>${rowData.header}</label>`);

        mainDiv.append(clickControl);
        mainDiv.append(header);

      	if(hasContent){
          	var contentContainer = $('<article class="ac-small"> </article>');
        	var content = $(`<p>${rowData.content}</p>`);
        	contentContainer.append(content);
			mainDiv.append(contentContainer);
        }
      
        return mainDiv;
    };

    //this is the view object
    var view_id = $(this).attr("id");
    var faqAccContainer = $('<section class="ac-container"></section>');
    $(this).find("table.kn-table").parent().css("display", "none");
    $(this).find("table.kn-table tbody tr").each((idx, tr) => {
        var faqAccordionData = {
            header: '',
            content: ''
        };
      	
      	if($(tr).hasClass('kn-tr-nodata')){
        	faqAccordionData.header = 'No Data';
        } else {
          $(tr).find("td").each((i, td) => {
              var text = $.trim($(td).text());
              if (i == 0) { //header
                  faqAccordionData.header = text;
              } else { //content
                  faqAccordionData.content = text;
              }
          });
        }
      
        var accordionData = generateAccordionRow(faqAccordionData, idx, view_id);
        faqAccContainer.append(accordionData);
    });
    $(this).append(faqAccContainer);
    return this;
};

//The tables listed in this view array should:
// - only have 2 columns, first column will be displayed has the header, and the second is the content of the accordion
// - should not display any other element besides the table, so no pagination, filter, search.
var tablesToAccordionViews = ['view_2246', 'view_2245', 'view_2244', 'view_2243', 'view_2242', 'view_2241', 'view_2240'];
                              
tablesToAccordionViews.forEach( (view_id, idx) => {
	$(document).on(`knack-view-render.${view_id}`, function(event, view, data) {
        $(`#${view_id}`).toAccordion();
    });
});

//Listener for the Training Group assignment
$(document).on('knack-record-create.view_2788', function(event, view, record) {
	Knack.showSpinner();
	$.ajax({
    	url: 'https://knackhelper.azurewebsites.net/api/trainingGroupAssignment?code=QqMNtQyUkFQ1y/a0zqkZauduJE6N/my8FVCS2tUz/UmKMI/SaYTUrg==&&name=John',
      	type: 'POST',
      	data: JSON.stringify(record),
      	success: function (response) {
        	alert('API Called.');
        }
    });
	alert("Submitted!");
});


//Community Concierge Section
//May 2021

//Log in
$(document).on("knack-view-render.view_3363", function(event, view, data) {
 	$('head').append('<link rel="stylesheet" type="text/css" class="lazyload" href="https://dl.dropbox.com/s/pt24adzdqgjx73y/Community%20Manager%20Theme.min.css">')
});

//global value test


//view_3369 This will add the css for the CCS
$(document).on("knack-view-render.view_3370", function(event, view, data) {
  	console.log(data);
  	//This add the text for the SERVICE TODAY -> Time info
  	$('.kn-detail.field_141').addClass('hideMe');
  	var i;
    for (i = 0; i < data.length; i++) {
      if(data[i].field_141 == "Yes"){
        $($('.field_44')[i]).html('Service Today At ' + data[i].field_44);	
      }
      else{
      	$($('.field_44')[i]).html('No Service Today');
      }
      
      
        //= 'service_today_id'+ i;
      //console.log('service_today_id'+ i);
    }
  	//kn-link-page
  	//This makes the section clickable
  	  $(".kn-list-item-container").addClass("pointer");
      $(".kn-list-item-container").click(function() {
        window.location = $(this).find("a").attr("href");
        const testGetId = $(this).attr("id");
        console.log(testGetId);
        return false;
      });
    $('head').append('<link rel="stylesheet" type="text/css" class="lazyload" href="https://dl.dropbox.com/s/pt24adzdqgjx73y/Community%20Manager%20Theme.min.css">')
});

function appendCustomMenuBottom(){
  	$('head').append('<link rel="stylesheet" type="text/css" class="lazyload" href="https://dl.dropbox.com/s/pt24adzdqgjx73y/Community%20Manager%20Theme.min.css">')
	let customMenu = $('#custom_menu_id');
  
  	var myComIcon = `<i class="fa fa-building"></i>`;
    var logOutIcon = `<i class="fa fa-sign-out"></i>`;
  
    $('#kn-mobile-menu').append(customMenu);
  	var customMenuBottom = $(`
        <ul class="sv-bottom-menu" style="list-style-type: none;">
          <li><a href="https://chhj.knack.com/trash-butler#community-concierge-on-dev">  ${myComIcon} <span class="custom-menu-text"> My Communities </span></a></li>
          <li><a href="#" class="kn-log-out">${logOutIcon} <span class="custom-menu-text"> Log Out</a> </span></li></ul>
    	</ul>`
    );
  	var checkIfExist = document.getElementsByClassName('sv-bottom-menu');
	if (checkIfExist.length == 0){$('#kn-mobile-menu').append(customMenuBottom);}
    
}
//This will click the service Id btn on the hidden list (View And Rate Last night Service)
$(document).on("knack-view-render.view_3397", function(event, view, data) {
    console.log("view_3397 is loaded");
    $('#view_3397').addClass("hideMe");
    if(data.length === 0){
        $('#view_last_night_service_btn').addClass("hideMe");
    }

    $('#view_last_night_service_btn').on('click', function () {
        console.log("view_last_night_service_btn is clicked")
          $('#last_night_service_id').click();
    });
});
function showHideMenuText(){
	if($(".minimizedMenu")[0]){
      console.log('addClass')
      $('.custom-menu-text').addClass('hideMe');
      $('#custom_menu_id li').addClass('bigger-icon');
      $('.sv-bottom-menu').addClass('bigger-icon');
      $('#custom_menu_id').addClass('adjust-margin-top-60px');
     
    }
    else{
      console.log('removeClass');
      $('.custom-menu-text').removeClass('hideMe');
      $('#custom_menu_id li').removeClass('bigger-icon');
      $('.sv-bottom-menu').removeClass('bigger-icon');
      $('#custom_menu_id').removeClass('adjust-margin-top-60px');
    }
}
//$(window).on('load', function() {
   // showHideMenuText();
//});

function appendCustomMenuMain(){
  	
  	//Menu Icon
	var dashboard = `<i class="fa fa-th-large"></i>`;
    var serviceHistory = `<i class="fa fa-history "></i>`;
    var infractions = `<i class="fa fa-info-circle"></i>`;
    var units = `<i class="fa fa-tachometer"></i>`;
    var hazards = `<i class="fa fa-life-ring"></i>`;
    var supportTicket = `<i class="fa fa-inbox"></i>`;
    var billing = `<i class="fa fa-list-alt"></i>`;
  	var profile = `<i class="fa fa-user"></i>`;
  	//
  	var radarLog = `<i class="fa fa-camera"></i>`;
  	var comLog = `<i class="fa fa-building-o"></i>`;


    var customMenu = $(`
        <ul id="custom_menu_id" style="list-style-type:none; display:none;">
          <li id="com_dashboard"><a class="sv-cm-navbar" >${dashboard} <span class="custom-menu-text"> Dashboard</span></a></li>
          <li id="com_service_history"><a class="sv-cm-navbar" >${serviceHistory} <span class="custom-menu-text"> Service History</span></a></li>
          <li id="com_infractions"><a class="sv-cm-navbar" >${infractions} <span class="custom-menu-text"> Infractions</span></a></li>
          
          <li id="com_hazards"><a class="sv-cm-navbar" >${hazards}<span class="custom-menu-text"> Service Hazards</span></a></li>
          <li id="com_support_tickets"><a class="sv-cm-navbar" >${supportTicket} <span class="custom-menu-text"> Support Tickets</span></a></li>
		  <li id="com_radar"><a class="sv-cm-navbar" >${units}</i> <span class="custom-menu-text"> Community Units</span></a></li>
		  <li id="com_radarLogs"><a class="sv-cm-navbar" >${radarLog} <span class="custom-menu-text"> RADAR Logs</span></a></li>
          <li id="com_account_billing" style="display: none;"><a class="sv-cm-navbar" >${billing} <span class="custom-menu-text"> Account/Billing</span></a></li>
          <li id="com_profile"><a class="sv-cm-navbar" >${profile} <span class="custom-menu-text"> Community Profile</span></a></li>

          
          <li id="com_comLogs" style="display: none;"><a class="sv-cm-navbar" >${comLog} <span class="custom-menu-text"> Community Logs</span></a></li>
    	</ul>`
        //HIDDEN
        //Com log
        //Account Billing
    );
  	if($('#custom_menu_id').length == 0){$('#kn-mobile-menu').append(customMenu);}
  	$($('.kn-mobile-controls')[0]).on('click', function(){
      	showHideMenuText();
    })
}
//add href to the navbar
function addLinkToCommunityDashboard(id){
  
  	appendCustomMenuBottom();
  
  	let varId = id;
	$('#com_dashboard a').attr("href", "https://chhj.knack.com/trash-butler#community-concierge-on-dev/community-dashboard/"+varId);
  	$('#com_service_history a').attr("href", "https://chhj.knack.com/trash-butler#community-concierge-on-dev/community-dashboard/"+varId+"/community-service-history/"+varId);
  	$('#com_infractions a').attr("href", "https://chhj.knack.com/trash-butler#community-concierge-on-dev/community-dashboard/"+varId+"/infractions/"+varId);
    $('#com_radar a').attr("href", "https://chhj.knack.com/trash-butler#community-concierge-on-dev/community-dashboard/"+varId+"/radar-and-units/"+varId);
    $('#com_hazards a').attr("href", "https://chhj.knack.com/trash-butler#community-concierge-on-dev/community-dashboard/"+varId+"/service-hazards/"+varId);
    $('#com_support_tickets a').attr("href", "https://chhj.knack.com/trash-butler#community-concierge-on-dev/community-dashboard/"+varId+"/community-support-tickets/"+varId);
    $('#com_account_billing a').attr("href", "https://chhj.knack.com/trash-butler#community-concierge-on-dev/community-dashboard/"+varId+"/account-billing/"+varId);
    $('#com_profile a').attr("href", "https://chhj.knack.com/trash-butler#community-concierge-on-dev/community-dashboard/"+varId+"/my-community-profile/"+varId);
  
  	//
  	$('#com_radarLogs a').attr("href", "https://chhj.knack.com/trash-butler#community-concierge-on-dev/community-dashboard/"+varId+"/radar-logs/"+varId);
    $('#com_comLogs a').attr("href", "https://chhj.knack.com/trash-butler#community-concierge-on-dev/community-dashboard/"+varId+"/community-logs/"+varId);
  	
  	//$('#custom_menu_id').css({"display": "block"});
  	var timeout = setTimeout(function(){
            document.getElementById('custom_menu_id').style.display = 'block';
            clearTimeout(timeout);
    }, 1000);
}
//DASHBOARD
$(document).on("knack-view-render.view_3374", function(event, view, data) {
  	appendCustomMenuMain();
  	
  	addLinkToCommunityDashboard(data.id);
  	$('#com_dashboard').addClass('sv-active');
});

$(document).on("knack-view-render.view_3458", function(event, view, data) {
  	appendCustomMenuMain();
  	addLinkToCommunityDashboard(data.id);
  	$('#com_service_history').addClass('sv-active');
});

//Infractions view_3561
$(document).on("knack-view-render.view_3561", function(event, view, data) {
  	appendCustomMenuMain();
  	addLinkToCommunityDashboard(data.id);
  	$('#com_infractions').addClass('sv-active');
});
//Radar and Units view_3465
$(document).on("knack-view-render.view_3465", function(event, view, data) {
  	appendCustomMenuMain();
  	addLinkToCommunityDashboard(data.id);
  	
  	$('#com_radar').addClass('sv-active');
});
//view_3560 Service Hazards
$(document).on("knack-view-render.view_3560", function(event, view, data) {
  	appendCustomMenuMain();
  	addLinkToCommunityDashboard(data.id);
  	$('#com_hazards').addClass('sv-active');
});

//Service Hazards view_3463 UNSURE
$(document).on("knack-view-render.view_3463", function(event, view, data) {
  	appendCustomMenuMain();
  	addLinkToCommunityDashboard(data.id);
  	
  	
});
//Support Ticket view_3468
$(document).on("knack-view-render.view_3468", function(event, view, data) {
  	appendCustomMenuMain();
  	addLinkToCommunityDashboard(data.id);
  	//com_support_tickets
  	$('#com_support_tickets').addClass('sv-active');
});
//Account Billing view_3470
$(document).on("knack-view-render.view_3470", function(event, view, data) {
  	appendCustomMenuMain();
  	addLinkToCommunityDashboard(data.id);
  	$('#com_account_billing').addClass('sv-active');
});
//Profile view_3472 ? UNSURE
$(document).on("knack-view-render.view_3472", function(event, view, data) {
  	appendCustomMenuMain();
  	addLinkToCommunityDashboard(data.id);
  	$('#com_profile').addClass('sv-active');
});
//view_3551 Community Profile
$(document).on("knack-view-render.view_3551", function(event, view, data) {
  	appendCustomMenuMain();
  	addLinkToCommunityDashboard(data.id);
  	$('#com_profile').addClass('sv-active');
  	//console.log(testGetId);
});
//view_3477
$(document).on("knack-view-render.view_3477", function(event, view, data) {
  	appendCustomMenuMain();
  	addLinkToCommunityDashboard(data.id);
});

//view_3536 Edit Community Profile
$(document).on("knack-view-render.view_3536", function(event, view, data) {
  	appendCustomMenuMain();
  	addLinkToCommunityDashboard(data.id);
});

//view_3587 RADAR Logs
$(document).on("knack-view-render.view_3587", function(event, view, data) {
  	appendCustomMenuMain();
  	addLinkToCommunityDashboard(data.id);
  	$('#com_radarLogs').addClass('sv-active');
});

//view_3586 Community Logs
$(document).on("knack-view-render.view_3586", function(event, view, data) {
  	appendCustomMenuMain();
  	addLinkToCommunityDashboard(data.id);
});

//view_3604 Maange Access Code
$(document).on("knack-view-render.view_3604", function(event, view, data) {
  	appendCustomMenuMain();
  	addLinkToCommunityDashboard(data.id);
});



//Last Night Service Rating
$(document).on("knack-view-render.view_3410", function(event, view, data) {
  $("input").addClass("hideMe");
  $('#view_3410 button').addClass('hideMe');
  $(".radio").on('click', function () {
    if($('.radio:checked').val() != null){
          const selections = document.querySelectorAll('input[type="radio"]');
          let userSelection;
          for (const selection of selections) {
            if (selection.checked) {
              userSelection = selection.value;
              break;
            }
          }
          console.log(userSelection);
          if(userSelection == `<i class="fa fa-thumbs-down rating-down"></i>`){
              console.log("Thumbs D");
              $('#view_3410 button').removeClass('hideMe');
              //$("#view_3549-field_1495").prop("selectedIndex", 1).change();
              $('#kn-input-field_1425').removeClass('hideMe');
          }else{
              console.log("Thumbs UP");
         	  //$("#view_3549-field_1495").prop("selectedIndex", 2).change();
             $('#view_3410 button').removeClass('hideMe');
             $('#view_3410 form').submit();
             location.reload();
            $('#kn-input-field_1425').addClass('hideMe');
            
          }
    }
  });
  //$($(".kn-button")[0]).addClass("hideMe");
    $(".radio").on('click', function () {
      if($('.radio:checked').val() != null){
          //$('form').submit();
          //location.reload();
    	}
   });
});

//view_3473 Survey Form
$(document).on("knack-view-render.view_3473", function(event, view, data) {
  	console.log(data);
  	var blankValue = `<i class="fa fa-plus-circle"></i>`;
  	if(data.field_1462 == blankValue || data.field_1462 == ""){
    	$('#view_3410').removeClass('hideMe');
      	$('#view_3473').addClass('hideMe');
    }
  	else{
    	$('#view_3410').addClass('hideMe');
      	$('#view_3473').removeClass('hideMe');
    }
  	$('#edit-rating-id').on('click', function(){
    	$('#view_3473').addClass('hideMe');
      	$('#view_3410').removeClass('hideMe');
      	$("#view_3410 input:radio").attr("checked", false);
      	$('#kn-input-field_1425').addClass('hideMe');
    });
  	//close_rating_form
  	$('#close_rating_form').on('click', function(){
    	$('#view_3473').removeClass('hideMe');
      	$('#view_3410').addClass('hideMe');
    });
});

//Community Units - view_3512
$(document).on("knack-view-render.view_3512", function(event, view, data) {
  appendCustomMenuMain();
  addLinkToCommunityDashboard(data.id);
  
});

//view_3374 Show Infraction Total Loss
$(document).on("knack-view-render.view_3374", function(event, view, data) {
    console.log(data);
    $('#infraction_total_number_id').html(data.field_1415);
    $('#infraction_cost_id').html(data.field_1487);
  	$('.field_1415').addClass('hideMe');
    $('.field_1487').addClass('hideMe');
});
//view_3508 Show Infraction Total Loss on Infraction Page
$(document).on("knack-view-render.view_3508", function(event, view, data) {
    console.log(data);
    $('#infraction_total_number_id').html(data.field_1415);
    $('#infraction_cost_id').html(data.field_1487);
  	$('.field_1415').addClass('hideMe');
    $('.field_1487').addClass('hideMe');
});
//Get what quarter
$(document).on("knack-view-render.view_3514", function(event, view, data) {
  	$('#view_3514').addClass('hideMe');
    var date = new Date();     
 	var quarter =  parseInt(date.getMonth() / 3 ) + 1 ;
  	var currentYear = date.getFullYear();
  console.log(quarter, currentYear)
  //this will show the survey notification IF the current quarter total survey is more than 0.
  if(quarter == 1){
  	if(data.field_1113 == 0){
        $('#current_quarter_id').html('Q1');
        $('#current_year_id').html(currentYear);
    }else{
    	$('p.sticky').addClass('hideMe');
    }
  }
  if(quarter == 2){
  	if(data.field_1114 == 0){
        $('#current_quarter_id').html('Q2');
        $('#current_year_id').html(currentYear);
    }else{
    	$('p.sticky').addClass('hideMe');
    }
  }
  if(quarter == 3){
  	if(data.field_1115 == 0){
        $('#current_quarter_id').html('Q3');
        $('#current_year_id').html(currentYear);
    }else{
    	$('p.sticky').addClass('hideMe');
    }
  }
  if(quarter == 4){
  	if(data.field_1116 == 0){
        $('#current_quarter_id').html('Q4');
        $('#current_year_id').html(currentYear);
    }else{
    	$('p.sticky').addClass('hideMe');
    }
  }
  
  //Close the Sticky Survey
  $('#close_sticky').on('click', function () {
    $('p.sticky').addClass('hideMe');
  });
  
  //view_survey_id Open the Survey
  $('#click_survey_id').on('click', function () {
    $('#view_survey_id').click();
    $('p.sticky').addClass('hideMe');
  });
});

//HIDE THE SIDE WHEN ON THE MAIN MENU
//kn-scene_1253

$(document).on('knack-scene-render.scene_1253', function(event, scene) {
   //$('#kn-mobile-menu').addClass('hideMe');
  	//document.getElementById('knack-body').style.margin-left = '-50px';
  
});

//view_3520 Survey Form ONGOING
$(document).on("knack-view-render.view_3520", function(event, view, data) {
  	var date = new Date();     
 	var quarter =  parseInt(date.getMonth() / 3 ) + 1 ;
  	var quarterInput = 'Q'+quarter;
    console.log(data, "quarterInput is ", quarterInput);
  if(quarter == 1){
  	$("#view_3520-field_1101").prop("selectedIndex", 0).change();
  }
  if(quarter == 2){
  	$("#view_3520-field_1101").prop("selectedIndex", 1).change();
  }
  if(quarter == 3){
  	$("#view_3520-field_1101").prop("selectedIndex", 2).change();
  }
  if(quarter == 4){
  	$("#view_3520-field_1101").prop("selectedIndex", 3).change();
  }
});

//view_3473 Survey Form
$(document).on("knack-view-render.view_3473", function(event, view, data) {
  	console.log(data);
  	var blankValue = `<i class="fa fa-plus-circle"></i>`;
  	if(data.field_1552 == blankValue || data.field_1552 == ""){
    	$('#view_3410').removeClass('hideMe');
      	$('#view_3473').addClass('hideMe');
    }
  	else{
    	$('#view_3410').addClass('hideMe');
      	$('#view_3473').removeClass('hideMe');
    }
  	$('#edit-rating-id').on('click', function(){
    	$('#view_3473').addClass('hideMe');
      	$('#view_3410').removeClass('hideMe');
    });
  	//close_rating_form
  	$('#close_rating_form').on('click', function(){
    	$('#view_3473').removeClass('hideMe');
      	$('#view_3410').addClass('hideMe');
    });
});
//This will hide the side nav bar on the other pages.
$(document).on('knack-scene-render.any', function(event, scene) {
   showHideMenuText();
  //List of the Page where the view exist to hide the side bar;
  	var viewsToHide = document.getElementById('view_3370');
    if (viewsToHide) {
        $('#kn-mobile-menu').addClass('hideMe')
      //kn-app-header
      	$('#kn-app-header').addClass('hideMe')
    } else {
      	$('#kn-mobile-menu').removeClass('hideMe')
      	$('#kn-app-header').removeClass('hideMe')
    
    }
});
//view_3378 Community Documents BTN
$(document).on("knack-view-render.view_3378", function(event, view, data) {
  	//console.log(data , "documnet");
  	$('#view_3378').addClass('hideMe');
  	
  	if(!data.field_1533){
    	 $($('.sv-document-btn')[0]).addClass('hideMe');//Resident Flyer
    }
  	if(!data.field_414){
    	 $($('.sv-document-btn')[1]).addClass('hideMe');//Community Flyer
    }
  	//if(!data.field_1534){
    	// $($('.sv-document-btn')[2]).addClass('hideMe');//Certificate of Ins can be edit by the CM
    //}
  	if(!data.field_1535){
    	 $($('.sv-document-btn')[3]).addClass('hideMe');//Holiday Flyer
    }
  
    $($('.sv-document-btn')[0]).on('click', function(){//Resident Flyer
      $('.field_1533 a').click();
    });
    $($('.sv-document-btn')[1]).on('click', function(){//Community Flyer
      $('.field_414 a').click();
    });
  	$($('.sv-document-btn')[2]).on('click', function(){//Certificate of Ins
		$('#view_com_cert_of_ins').click();
   	});
  	$($('.sv-document-btn')[3]).on('click', function(){//Holiday Flyer
		$('.field_1535 a').click();
   	});
  
});

//view_3582 Certificate of Ins POP UP - This will hide or show the form
$(document).on("knack-view-render.view_3582", function(event, view, data) {
  
  
 
  $('#view_3583 .kn-asset-close').addClass('hideMe')
   console.log(data, "Cert of Ins");
  	if(data.field_1534){
      	//show details with edit
      	//hide form
        //cert_of_ins_pdf_prev
        document.getElementById('cert_of_ins_pdf_prev').style.display = 'none';
        $('#cert_of_ins_pdf_prev').attr("src", data.field_1534_raw.url);
      	//this waits for 2 seconds before showing the pdf iframe
      	var timeout = setTimeout(function(){
            document.getElementById('cert_of_ins_pdf_prev').style.display = 'block';
            clearTimeout(timeout);
        }, 2000);
      	//field_1534
      //hides the ins field
      $('.field_1534').addClass('hideMe');
      //adds href to the btn
      $('#view_coi').attr("href", data.field_1534_raw.url);
      $('#view_3580').addClass('hideMe');//form
      
      
     
      
  	}else{
    	//show form
      	//hide details
    }
  	
  	//btn - click to show the form
    //edit
    $('#edit_coi').on('click', function(){
      $('#view_3580').removeClass('hideMe');//form
      $('#edit_coi').addClass('hideMe');//form
    });
  	
  	$('#view_3580 .is-primary').on("click", function(){
    	
       		$("#view_3583").addClass("hideMe");
     	
    });
  	
});

//this will change the text display of the Reqeust RADAR column INFRACTION PAGE
$(document).on("knack-view-render.view_3557", function(event, view, data) {
  console.log(data)
  for (let i = 0; i < data.length; i++) {
      var x = document.querySelector("table").rows[i + 1].cells;
      var link = location.href + '/community-request-radar/' + data[i].field_146_raw[0].id;
      x[4].innerHTML = `<a href=${link}><span>Request RADAR</span></a>`;
     //console.log(data[i].field_146_raw[0].id, "OK NAMAN");
    }
  
});

//view_3456 Service History
$(document).on("knack-view-render.view_3456", function(event, view, data) {
  console.log(data);
   for (let i = 0; i < data.length; i++) {
      var x = document.querySelector("table").rows[i + 1].cells;
      var link = location.href + '/community-request-radar/' + data[i].field_146_raw[0].id;
      x[7].innerHTML = `<a href=${link}><span>Request RADAR</span></a>`;
     console.log(x[7].innerHTML);
    }
});


 //view_3549 Survey Rating on the Service History table
//This will change the value of the Rating Value field based on the radio input selected
$(document).on("knack-view-render.view_3549", function(event, view, data) {
    //this will hide the input and the submit btn
    //$("input").addClass("hideMe");
    $("#kn-input-field_1495").addClass("hideMe");
    
    //hardcoded value of the thumbsup field
    var thumbsUpVal = '<img src="https://s3.amazonaws.com/assets.knackhq.com/assets/5bbcb6a739b582305a70b738/60afcd97af88d2001eebb81f/original/up.png" alt="Thumbs Up" width="50" height="50" />';
    
    
    //when click, submit the form & set the value of the Rating Value field
    $(".radio").on('click', function () {
      
      if($('.radio:checked').val() != null){
        const selections = document.querySelectorAll('input[type="radio"]');
        let userSelection;
        for (const selection of selections) {
          if (selection.checked) {
            userSelection = selection.value;
            break;
          }
        }
        console.log(userSelection);
        if(userSelection == thumbsUpVal){
            console.log("Thumbs Up");
            $("#view_3549-field_1495").prop("selectedIndex", 1).change();
        }else{
            console.log("Thumbs D");
            $("#view_3549-field_1495").prop("selectedIndex", 2).change();
            
          
        }
        $('button').on("click", function(){
          $('.close-modal').click();
        });
        
        //$('form').submit();
        //$('.close-modal').click();
      }
    });
  });


//Community Profile - Schedule Indicator -view_3566 
$(document).on("knack-view-render.view_3566", function(event, view, data) {
   console.log(data);
  if(data.field_132 == "Yes"){
  	$('#sunday').addClass("on-sched");
  }
  else{
  	$('#sunday').addClass("not-on-sched");
  }
  if(data.field_133 == "Yes"){
  	$('#monday').addClass("on-sched");
  }
  else{
  	$('#monday').addClass("not-on-sched");
  }
  if(data.field_134 == "Yes"){
  	$('#tuesday').addClass("on-sched");
  }
  else{
  	$('#tuesday').addClass("not-on-sched");
  }
  if(data.field_135 == "Yes"){
  	$('#wednesday').addClass("on-sched");
  }
  else{
  	$('#wednesday').addClass("not-on-sched");
  }
  if(data.field_136 == "Yes"){
  	$('#thursday').addClass("on-sched");
  }
  else{
  	$('#thursday').addClass("not-on-sched");
  }
  if(data.field_137 == "Yes"){
  	$('#friday').addClass("on-sched");
  }
  else{
  	$('#friday').addClass("not-on-sched");
  }
  if(data.field_138 == "Yes"){
  	$('#saturday').addClass("on-sched");
  }
  else{
  	$('#saturday').addClass("not-on-sched");
  }
  
});

//Access Code - Indicator -view_3607 
$(document).on("knack-view-render.view_3607", function(event, view, data) {
   console.log(data);
  $('#view_3607').addClass("hideMe");
  if(data.field_1571 == "Yes"){
  	$('#sunday').addClass("on-sched");
  }
  else{
  	$('#sunday').addClass("not-on-sched");
  }
  if(data.field_1572 == "Yes"){
  	$('#monday').addClass("on-sched");
  }
  else{
  	$('#monday').addClass("not-on-sched");
  }
  if(data.field_1573 == "Yes"){
  	$('#tuesday').addClass("on-sched");
  }
  else{
  	$('#tuesday').addClass("not-on-sched");
  }
  if(data.field_1574 == "Yes"){
  	$('#wednesday').addClass("on-sched");
  }
  else{
  	$('#wednesday').addClass("not-on-sched");
  }
  if(data.field_1575 == "Yes"){
  	$('#thursday').addClass("on-sched");
  }
  else{
  	$('#thursday').addClass("not-on-sched");
  }
  if(data.field_1576 == "Yes"){
  	$('#friday').addClass("on-sched");
  }
  else{
  	$('#friday').addClass("not-on-sched");
  }
  if(data.field_1577 == "Yes"){
  	$('#saturday').addClass("on-sched");
  }
  else{
  	$('#saturday').addClass("not-on-sched");
  }
  //days_indicator
  var timeout = setTimeout(function(){
            document.getElementById('days_indicator').style.display = 'block';
            clearTimeout(timeout);
    }, 2000);
});

//view_3598 Edit Access Code

$(document).on("knack-view-render.view_3598", function(event, view, data) {
   //console.log(data);
  $('#view_3598').addClass('hideMe');
  if(data.field_132 == "No"){
        $("input[type='checkbox'][name='field_1571']").attr('disabled', 'disabled');
    }
    if(data.field_133 == "No"){
        $("input[type='checkbox'][name='field_1572']").attr('disabled', 'disabled');
    }

    if(data.field_134 == "No"){
        $("input[type='checkbox'][name='field_1573']").attr('disabled', 'disabled');
    }

    if(data.field_135 == "No"){
        $("input[type='checkbox'][name='field_1574']").attr('disabled', 'disabled');
    }

    if(data.field_136 == "No"){
        $("input[type='checkbox'][name='field_1575']").attr('disabled', 'disabled');
    }

    if(data.field_137 == "No"){
        $("input[type='checkbox'][name='field_1576']").attr('disabled', 'disabled');
    }

    if(data.field_138 == "No"){
        $("input[type='checkbox'][name='field_1577']").attr('disabled', 'disabled');
    }
  
});

//view_3603 Add Access Code

$(document).on("knack-view-render.view_3603", function(event, view, data) {
   //console.log(data);
  $('#view_3603').addClass('hideMe');
  if(data.field_132 == "No"){
        $("input[type='checkbox'][name='field_1571']").attr('disabled', 'disabled');
    }
    if(data.field_133 == "No"){
        $("input[type='checkbox'][name='field_1572']").attr('disabled', 'disabled');
    }

    if(data.field_134 == "No"){
        $("input[type='checkbox'][name='field_1573']").attr('disabled', 'disabled');
    }

    if(data.field_135 == "No"){
        $("input[type='checkbox'][name='field_1574']").attr('disabled', 'disabled');
    }

    if(data.field_136 == "No"){
        $("input[type='checkbox'][name='field_1575']").attr('disabled', 'disabled');
    }

    if(data.field_137 == "No"){
        $("input[type='checkbox'][name='field_1576']").attr('disabled', 'disabled');
    }

    if(data.field_138 == "No"){
        $("input[type='checkbox'][name='field_1577']").attr('disabled', 'disabled');
    }
  
});

//view_3374 Service Schedule on Dashboard
$(document).on("knack-view-render.view_3374", function(event, view, data) {
    console.log(data);
    $('#today-service-schedule').html(data.field_44);
    $('.field_44').addClass('hideMe');
});
//view_3407 Updates from TB
$(document).on("knack-view-render.view_3407", function(event, view, data) {
    console.log(data);
    $('#updates-from-tb-id').html(data.field_1403);
    $('.field_1403').addClass('hideMe');
});
//view_3374 Community Information
$(document).on("knack-view-render.view_3374", function(event, view, data) {
    console.log(data);
    $('#ComAdd_ID').html(data.field_38);
    $('#ComPhone_ID').html(data.field_39);
    $('.field_38').addClass('hideMe');
    $('.field_39').addClass('hideMe');
});

//view_3374 Show Infraction Total Loss
$(document).on("knack-view-render.view_3374", function(event, view, data) {
    //console.log(data);
    $('#today-service-schedule').html(data.field_44);
  	$('.field_44').addClass('hideMe');
});

//view_3407 Updates from TB
$(document).on("knack-view-render.view_3407", function(event, view, data) {
    //console.log(data);
    $('#updates-from-tb-id').html(data.field_1403);
  	$('.field_1403').addClass('hideMe');
});

//view_3618 Add Support Ticket
//this will hide the other option
$(document).on("knack-view-render.view_3618", function(event, view, data) {
      var selectId = document.getElementById("view_3618-field_306").getElementsByTagName("option");
      selectId[7].disabled = true;
  	  selectId[8].disabled = true;
  	  selectId[9].disabled = true;
  	  selectId[10].disabled = true;
      selectId[11].style = "display: none;";
  
  var timeout = setTimeout(function(){
    document.getElementById('view_3618').style.display = 'block';
    clearTimeout(timeout);
  }, 500);
});

//view_3621 RADAR LOGS PAGE Search Unit
$(document).on("knack-view-render.view_3621", function(event, view, data) {
  	$('#view_3621 button').addClass('hideMe');
  	$('#view_3588 form').addClass('hideMe');
  	//$('#view_3588 .search').addClass("hideMe");
  	document.getElementById('view_3621-field_305').options[0].innerHTML = "";
 	
  	$('#view_3621-field_305').on("change", function(){
      	
    	let test = document.getElementsByClassName("select")[0];
  		let searchValue = '';
      	searchValue = test.options[test.selectedIndex].text;
      	console.log(typeof(searchValue), searchValue);
      	$('#view_3588 input').val(searchValue).change();
        $('#view_3588 .search').click();
      	$('#view_3588 input').addClass('hideMe');
  		$('#view_3588 .search').addClass("hideMe");
      	
      	$('#selected_com').html(searchValue)
      
    })
});

//view_3588 Radar Logs Table
$(document).on("knack-view-render.view_3588", function(event, view, data) {
  	$('#view_3588 form').addClass('hideMe');
});

