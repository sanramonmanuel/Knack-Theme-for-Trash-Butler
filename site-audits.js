TB.hideComponent("component_34");

// TB.render('component_47', function(){
    // HIDE INPUT
    // $( ".community-table .input-group" ).addClass( "hideMe" );
    
    addNewAuditBtn = document.getElementById("addNewSiteAuditCom");
        
    addNewAuditBtn.addEventListener("click", (e) => {
        $($('.table-2 .t-new-record-button')[0]).click();
    
    }, false);
       
// });

TB.render('component_66', function(){
    var filterCom = document.getElementById('checkIDcom');
    var showAllCom = document.getElementById('clearCheckCom');
    
    filterCom.addEventListener("click", (e) => {
    
        var searchValue = '';
        test = document.getElementsByClassName("select2 select2-hidden-accessible")[0];
        // test = $($('.community-select select')[0]);
        
        searchValue = test.options[test.selectedIndex].text;
        // console.log(searchValue)
        // searchValue
        console.log(typeof(searchValue), searchValue);
     
        $($('.community-table input')[0]).val(searchValue).change();
        $($('.community-table button')[0]).click();
        searchValue = '';
    }, false);
    
    showAllCom.addEventListener("click", (e) => {
    
        var clearValue = '';
        $($('.community-table input')[0]).val(clearValue).change();
        $($('.community-table btn btn-sm')[0]).click();
    }, false);
    
       
});