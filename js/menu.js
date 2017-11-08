jQuery(document).ready(function( $ ) {
    /**
     * SCROLLING MENU Animations
     *
     * @description When the user scroll to the top of section 2, navbar autmaticly become black
     * @author Jeff Jardon
     * */
    //Init ScrollMagic
    var ScrollMenuBackgroundController = new ScrollMagic.Controller();
    //Show the background (black) of the main navigation
    new ScrollMagic.Scene({triggerElement: 'section:nth-child(2)', triggerHook: 0.5})
        .setClassToggle('#sidebar', 'dark-menu')
        .addIndicators({name: 'dark menu show', colorTrigger: 'red', indent: 700, colorStart: 'pink'})
        .addTo(ScrollMenuBackgroundController);

    //Show the logo of the main navigation
    new ScrollMagic.Scene({triggerElement: 'section:nth-child(2)', triggerHook: 0.5})
        .setClassToggle('#logo-psm-nav', 'show-logo')
        .addIndicators({name: 'logo show', colorTrigger: 'red', indent: 600, colorStart: 'pink'})
        .addTo(ScrollMenuBackgroundController);
    //END SCROLLING MENU ANIMATIONS

    /**
     * SCROLLING Click BURGER ANIMATION
     *
     * @description The user click on the burger menu, this one will come from outside of the screen
     * @author Jeff Jardon
     * */
    var sidebar = $('#sidebar');
    var links = sidebar.find('a,i,li');
    var timeLineLinks = new TimelineMax;
    timeLineLinks.staggerFrom(links, 0.5, {x:-200,autoAlpha:0, scale:0.1}, 0.05);

    $("[data-toggle]").click(function(e) {
        e.preventDefault();
        //Open sidebar
        $(sidebar).toggleClass("open-sidebar");

        //Animation
        if(timeLineLinks.reversed()){
            timeLineLinks.timeScale(1);
            timeLineLinks.play()
        } else {
            timeLineLinks.timeScale(4);
            timeLineLinks.reverse();
        }
    });
    //END CLICK BURGER ANIMATION

    /**
     * SCROLLING CLICK DROPDOWNS
     *
     * @description The user click on a menu items composed by several sub menus. Those ones will be shown in a dropdown
     * @author Jeff Jardon
     * */
    $(".dropdown").click(function(e) {
        e.preventDefault();
        var dropdown = $(this).find('.dropdown-content');
        $(dropdown).toggleClass("open-dropdown");
    });
    //END CLICK DROPDOWNS

    /**
     * OPEN MENU ANIMATION MOBILE
     *
     *
     * */


},jQuery);