class KnackKanban {
    /**
     * KnackKanban constructor
     * @param {string} viewId view id where the kanban board will be displayed
     * @param {string} objId object_id associated with this kanban board
     * @param {string} mainFieldId the field_id that will be updated whenever items are transferred from one board to another
     * @param {array} boards list of boards, this should contain the possible values of mainFieldId
     * @param {string} cardTemplate template use for display in the kanban card
     * @param {function} onCardClick function that will be triggered when a card is clicked. It should accept a single parameter
     *  that contains the card element that was clicked.
     * @param {function} onAddItemClick when this function is set, an add item button will be created for every board.
     *  The add item button will trigger this function. The function prototype should be function onAddItemClick(el, boardId), 
     *  where el is the add button that was clicked and boardId is the id of the board wheret he add button is located.
     */
    constructor (params){
        this.viewId = params.viewId;
        this.objId = params.objId;
        this.mainFieldId = params.mainFieldId;
        this.boards = params.boards;
        this.cardTemplate = params.cardTemplate;
        this.onCardClick = params.onCardClick;
        this.onAddItemClick = params.onAddItemClick;
        this.kanbanBoards = [];
        this.kanbanObj = null;
    }

    init() {
        $(`#${this.viewId} > div`).each(function(i,div){
            if(!$(div).hasClass('view-header') && !$(div).hasClass('kn-records-nav')){
                $(div).css("display","none");
            };
        });

        var table_records = [];
        Knack.showSpinner();
        $(".kn-table tbody tr").each((i, row) => { 
            var record = {
                id: $(row).attr("id")
            }
            $(row).find("td").each(( i , col) =>{
                var field = $(col).data("field-key");
                if(typeof field != 'undefined'){
                    let fieldSpan = $(col).find("span");
                    let img = $(fieldSpan).find('img');
                    if(img.length > 0){
                        record[field] = $(img).attr('src');
                    } else {
                        let fieldText = $(fieldSpan).text();
                        record[field] = fieldText.trim();
                    }
                }
            });
            table_records.push(record);
        });
        Knack.hideSpinner();
        this.setupBoards(table_records);
    }


    getTemplateKeyField([start,end]){
        const matcher = new RegExp(`${start}(.*?)${end}`,'gm');
        const normalise = (str) => str.slice(start.length,end.length*-1);
        return function(str) {
            return str.match(matcher).map(normalise);
        }
    }

    processCardTemplate(itemData, templateStr) {
        let fieldExtractor = this.getTemplateKeyField(["{{","}}"]);
        let fieldsInTemplate = fieldExtractor(templateStr);//contains field items to replace
        fieldsInTemplate.forEach((field) => {
            templateStr = templateStr.replace(`{{${field}}}`, itemData[field]);
        });

        return templateStr;
    }

    setupBoards(objectItems){
        this.boards.forEach((board) => {
            var boardObj = {
                "id": `${board.title}_${this.objId}`,
                "title": board.title,
                "class": typeof board.class != 'undefined' ? board.class : "",
                "item": []
            }
            var items = objectItems.filter((item) => {
                return item[this.mainFieldId] == board.title;
            });
            items.forEach((item) => {
                let boardTitle = this.processCardTemplate(item,this.cardTemplate);

                boardObj.item.push({
                    "id": item.id,
                    "title": boardTitle
                });
            });
            this.kanbanBoards.push(boardObj);
        });
        
        this.initKanban();
    }

    initKanban(){
        this.kanbanObj = new jKanban({
            element: `#${this.viewId}`,
            gutter: "10px",
            dragBoards:false,
            click:(el) => {
                if(typeof this.onCardClick == 'function'){
                    this.onCardClick(el);
                }
            },
            dropEl: (el, target, source, sibling) => {
                this.onItemDrop(el, target, source, sibling)
            },
            addItemButton: typeof this.onAddItemClick == 'function',
            buttonClick: (el, boardId) => {
                if(typeof this.onAddItemClick == 'function'){
                    this.onAddItemClick(el,boardId);
                }
            },
            boards: this.kanbanBoards
          });
    }

    onItemDrop( el, target, source, sibling){
        //do save of the mainFieldId in the object id
        var updatedVal = target.parentElement.dataset.id;
        updatedVal = updatedVal.split("_")[0];

        var fieldId = el.dataset.eid;
        var data = {};
        data[this.mainFieldId] = updatedVal;
        Knack.showSpinner();
        $.ajax({
            type: 'PUT',
            headers: {
                'X-Knack-Application-ID': Knack.application_id,
                'X-Knack-REST-API-Key': knackRestApiKey,
                'content-type': 'application/json'
            },
            url: 'https://api.knack.com/v1/objects/' + this.objId + '/records/' + fieldId,
            data: JSON.stringify(data)
        }).then((value) => {
            Knack.hideSpinner();
        });
    }
}
