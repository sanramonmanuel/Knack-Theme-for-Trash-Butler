//Side and Profile Nav changes
var expandSideNav = function() {
  $("#kn-mobile-menu ul.kn-menu-list>li:first-child").removeClass('minimizedMenu');
  $(".kn-dropdown-menu-list").removeClass('minimizedMenu');
  $(".kn-dropdown-menu > a > span.kn-dropdown-icon").removeClass('minimizedMenu');

  //remove the ? icons that was added when the menu was minimized
  $("ul#app-menu-list-mobile > li > a > span:first-child").each(function() {
      $(this).removeClass("hideText");

      var i = $(this).find("i");
      if ($(i).hasClass('removeIcon')) {
          $(i).remove();
      } else {
          $(i).removeClass("hiddenTextWithIcon");
          $(i).css('font-size', 'initial');
      }
  });
};

var contractSideNav = function() {
  $("#kn-mobile-menu ul.kn-menu-list>li:first-child").addClass('minimizedMenu');
  $(".kn-dropdown-menu-list").addClass('minimizedMenu');
  $(".kn-dropdown-menu > a > span.kn-dropdown-icon").addClass('minimizedMenu');
  //add ? icons for menus that doesn't have icons
  $("ul#app-menu-list-mobile > li > a > span:first-child").each(function() {
      var title = $(this).text();
      $(this).addClass("hideText");
      var i = $(this).find("i");

      if (i.length == 0) {
          i = $("<i class='fa fa-question-circle removeIcon' title='" + title + "'></i>");
          $(this).append(i);
      }
      $(i).addClass("hiddenTextWithIcon");
      $(i).css('font-size', 'x-large');
  });
};

var menuToggleClick = function(toggle) {
  if (!$(toggle).hasClass('minimizedMenu')) {
      expandSideNav();
  } else {
      contractSideNav();
  }
}

var setupTopNav = function(isMobile) {
  var getMenuItems = function() {
      var menuItems = "";
      $(".kn-current_user a").each(function() {
          menuItems += $(this).prop('outerHTML');
      });
      return menuItems;
  };
  var username = !isMobile ? `&nbsp;${Knack.getUserAttributes().name}&nbsp;` : '&nbsp;';

  var navString = `<div class="profileNavbar">
      <div class="profileDropdown">
          <button class="profileDropbtn" style='display:flex'><span class="fa fa-user"></span>${username}<span class="fa fa-caret-down"></span>
          </button>
          <div class="profileDropdownContent" id="myDropdown">
              ${getMenuItems()}
          </div>
      </div>
  </div>`;

  $('#kn-app-mobile-container').append($(navString));
  $('.profileDropbtn').click(function(e) {
      $("#myDropdown").toggle("show");
      e.stopPropagation();
  });
}


//let's make sure there are only two click handlers for the document element
//one is the logout click event, the other is the menuClickHandler.
var addDocumentMenuClickHandler = function(menuClickHandler) {
  if ($._data(document, "events").click.length == 1) {
      $(document).on('click', menuClickHandler);
  }
};

//for menu
$(document).on('knack-scene-render.any', function(event, scene) {
    //if no user is logged in, do not display any navigation
    if (typeof Knack.getUserAttributes() == 'string') {
        $("#kn-mobile-menu").css('display', 'none'); //do not display the side nav
        $(".profileNavbar").css('display', 'none'); //do not display the top nav
        $(".kn-mobile-nav-toggle").css('display', 'none'); //do not display the hamburger menu icon
        contractSideNav();
    } else {
        $(".kn-mobile-account-container").remove();
        $("#kn-mobile-menu").css('display', 'block');

        //add icons to menus that doesn't have one based on the menuIconMap
        $("ul#app-menu-list-mobile > li > a > span:first-child").each(function() {
            var title = $(this).text();
            var i = $(this).find("i");
       
            if (i.length == 0 && (title in window.menuIconMap)) {
                i = $(`<i class='fa ${window.menuIconMap[title]}' style='font-size:initial;'></i>`);
                i.append("&nbsp;&nbsp;");
                $(this).prepend(i);
            }
        });

        //let's remove the toggle nav bar for now.
        $(".kn-mobile-nav-toggle").css('display', 'block');
        expandSideNav();

        $(".profileNavbar").remove();
        setupTopNav(false);

        /*if(isMobile){
                  $('.kn-dropdown-menu').off().on('click', function(e){
                      $(".kn-dropdown-menu .kn-dropdown-menu-list").css('display','none');
                      var submenu = $(this).find(".kn-dropdown-menu-list");
                      if(submenu.length > 0){
                          $(submenu).css('display','block');
                      }
                      e.stopPropagation();
                  });

                  addDocumentMenuClickHandler(function(e){
                      $(".kn-dropdown-menu .kn-dropdown-menu-list").css('display','none');
                      if( $("#myDropdown").css("display") == "block" ){
                          $("#myDropdown").toggle("show");
                      }
                      e.stopPropagation();
                  });
              } else {*/
        addDocumentMenuClickHandler(function(e) {
            if ($("#myDropdown").css("display") == "block") {
                $("#myDropdown").toggle("show");
            }
            e.stopPropagation();
        });
        //}
        var toggleItem = $(".kn-mobile-nav-toggle");

        toggleItem.off().on('click', function(e) {
            $("#knack-body").toggleClass('minimizedMenu');
            $("#kn-app-header").toggleClass('minimizedMenu');
            $("#kn-mobile-menu").toggleClass('minimizedMenu');
            $(this).toggleClass("minimizedMenu");
            menuToggleClick(this);
            e.stopPropagation();
        });

        //call the menutoggleclick to update the sub menu items to icons/icon-text 
        //depending on the state of the side nav
        menuToggleClick(toggleItem);
        $("#app-menu-list-mobile").css("display", "block");

        //fix for sub menu displaying incorrectly when the menu 
        //has a scroll bar
        $(".kn-dropdown-menu ul").css("margin-top", "-32px");
        $("#kn-mobile-menu").on('scroll', function(e){
            var initialPos = -32;
            if($(this).find("ul").hasClass("minimizedMenu")){
                initialPos = -36;
            }
            var positionAdjustment = $(this).scrollTop();
            var newMarginTop = initialPos - positionAdjustment;
            $(".kn-dropdown-menu ul").css("margin-top", newMarginTop  +"px");
        });

        //knack somehow removes the hover event for submenus when 
        //the width of the page is < 769px, let's make sure that the submenus
        //still appear regardless of width
        $(".kn-dropdown-menu").off("mouseover").on("mouseover", function(e){
            $(this).find("ul").css('display',"block");
          });
          
        $(".kn-dropdown-menu").off("mouseout").on("mouseout", function(e){
            $(this).find("ul").css('display',"none");
        });

    }
});