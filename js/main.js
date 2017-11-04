/*(function ($) {
    var element = $('.losange');

    element.on('click', function(event) {
        element.css('transform','scale(1)');
        TweenMax.to($(this), 0.2, {scale:1.3});
    })
})(jQuery);*/

jQuery(document).ready(function( $ ) {

    /* ==========================================================================
     GENERAL
     ========================================================================== */

    /**
     * MENU ANIMATION DROPDOWN
     *
     * @description create a little slide up effect when the dropdown menu is selected
     * @author Jeff Jardon
     * */
    // Add slideup & fadein animation to dropdown
    $('.dropdown').on('show.bs.dropdown', function(e){
        var $dropdown = $(this).find('.dropdown-menu');
        var orig_margin_top = parseInt($dropdown.css('margin-top'));
        $dropdown.css({'margin-top': (orig_margin_top + 10) + 'px', opacity: 0}).animate({'margin-top': orig_margin_top + 'px', opacity: 1}, 300, function(){
            $(this).css({'margin-top':''});
        });
    });
    // Add slidedown & fadeout animation to dropdown
    $('.dropdown').on('hide.bs.dropdown', function(e){
        var $dropdown = $(this).find('.dropdown-menu');
        var orig_margin_top = parseInt($dropdown.css('margin-top'));
        $dropdown.css({'margin-top': orig_margin_top + 'px', opacity: 1, display: 'block'}).animate({'margin-top': (orig_margin_top + 10) + 'px', opacity: 0}, 300, function(){
            $(this).css({'margin-top':'', display:''});
        });
    });

    /**
     * SCROLLING MENU
     *
     * @description When the user scroll to the top of section 2, navbar autmaticly become black
     * @author Jeff Jardon
     * */
    //Init ScrollMagic
    var ScrollMenuBackgroundController = new ScrollMagic.Controller();
    //Show the background (black) of the main navigation
    var blackMenuScene = new ScrollMagic.Scene({
        triggerElement: 'section:nth-child(2)',
        triggerHook:0
    })
        .setClassToggle('.navbar', 'bg-black')//Addclass to .navbar
        .addIndicators({
            name:'black nav',
            colorTrigger: 'red',
            indent: 0,
            colorStart: '#75CC395'
        })
        .addTo(ScrollMenuBackgroundController);

    //

    /* ==========================================================================
     WELCOME PAGE - GLOBAL
     ========================================================================== */
    /**
     * SCROLLING MENU
     *
     * @description When the user scroll to the bottom of section #welcome-section, the logo appear in the navbar
     * @author Jeff Jardon
     * */
    //Init ScrollMagic
    var ScrollMenuLogoController = new ScrollMagic.Controller();
    //Hide the logo from the first section of homepage
    var hideLogoScene = new ScrollMagic.Scene({
        triggerElement: '#welcome-section',
        duration: '100%',
        triggerHook:0
    })
        .setClassToggle('.navbar-brand', 'hide-logo')//Addclass to .navbar
        .addIndicators({
            name:'Hide logo',
            colorTrigger: 'red',
            indent: 150,
            colorStart: '#75CC395'
        })
        .addTo(ScrollMenuLogoController);



    /* ==========================================================================
     WELCOME PAGE - SECTION WELCOME
     ========================================================================== */

    /**
     * IDEE TWEEN MAX ANIMATION
     *
     * @description Set movements of each svg IDEE childs
     * This animation is infinite.
     *
     * @author Federico Borsoi
     * */
    //Each objects animated in the SVG
    var idee = $('#idee'),
        tete_idee = $('#tete_idee'),
        ampoule = $('#ampoule_idee'),
        tung_al = $('#tung_al_idee'),
        tung_et = $('#tung_et_idee'),
        eteinte = $('#eteinte_idee'),
        allumee = $('#allumee_idee'),
        bras_droit_idee = $('#avant-bras_droit'),
        bras_gauche_idee = $('#avant-bras_gauche_idee');

    //Timeline
    var tl_idee = new TimelineMax;
    tl_idee.to(tete_idee, 0.5, {rotation:30, transformOrigin:"90% 100%"})
        .to(bras_droit_idee, 0.3, {rotation:70, transformOrigin:"15% 90%"},0.5)
        .to(bras_gauche_idee, 0.3, {rotation:120, transformOrigin:"90% 30%"},0.5)
        .set(tung_al, {className:"+=show"},0.7)
        .set(tung_et, {className:"+=hide"},0.7)
        .set(eteinte, {className:"+=hide"},0.7)
        .set(allumee, {className:"+=show"},0.7)
        .fromTo(ampoule, 0.15, {rotation:-10, transformOrigin:"50%, 50%"}, {rotation:10, transformOrigin:"50%, 50%", repeat:-1, ease: Power0.easeNone, yoyo:true});
    //END IDEE TWEEN MAX ANIMATION

    /**
     * REUNION TWEEN MAX ANIMATION
     *
     * @description Set movements of each svg REUNION childs
     * This animation is infinite.
     *
     * @author Federico Borsoi
     * */
    //Each objects animated in the SVG
    var reunion = $('#reunion'),
        bras_reunion = $('#avant-bras_gauche_reunion'),
        ar_bras_reunion = $('#arriere-bras_gauche_reunion'),
        ombre = $('#ombre_reunion'),
        feuille_diagramme = $('#feuille_diagramme_reunion'),
        feuille_maquette = $('#feuille_maquette_reunion');

    //Timeline
    var tl_reunion = new TimelineMax({repeat:-1});
    tl_reunion.to([bras_reunion, ombre],0.5, {y:-47, x:30})
        .to(ar_bras_reunion,0.5, {rotation:-50, x:10, y:10, transformOrigin:"0% 20%"}, 0)
        .to([bras_reunion, ombre],0.5, {y:0, x:0},0.5)
        .to(ar_bras_reunion,0.5, {rotation:0, x:0, y:0, transformOrigin:"0% 20%"}, 0.5)
        .to([bras_reunion, ombre], 0.5, {rotation:40, x:-2 , transformOrigin:"12% 80%"})
        .to([bras_reunion, ombre], 0.5, {rotation:0, x:2 , transformOrigin:"12% 80%"})
        .to([bras_reunion, ombre], 0.5, {rotation:40, x:-2 , transformOrigin:"12% 80%"})
        .to(feuille_diagramme, 0.5, {rotation:-30, transformOrigin:"100% 0%"})
        .to(feuille_diagramme, 0.5, {y:500})
        .to([bras_reunion, ombre], 0.5, {rotation:0, transformOrigin:"12% 80%"})
        .to([bras_reunion, ombre], 0.5, {rotation:10, transformOrigin:"12% 80%"})
        .to([bras_reunion, ombre], 0.5, {rotation:30, transformOrigin:"12% 80%"})
        .to([bras_reunion, ombre], 0.5, {y:3, rotation:50, transformOrigin:"12% 80%"})
        .to([bras_reunion, ombre], 0.5, {y:0, rotation:0, transformOrigin:"12% 80%"}, 6.5)
        .to(feuille_diagramme, 0.5, {y:0, rotation:0}, 6.5);
    //END REUNION TWEEN MAX ANIMATION

    /**
     * TRAVAIL TWEEN MAX ANIMATION
     *
     * @description Set movements of each svg TRAVAIL childs
     * This animation is infinite.
     *
     * @author Federico Borsoi
     * */
    //Each objects animated in the SVG
    var travail = $('#travail'),
        com_tr = $('#com_travail'),
        tete_com = $('#tete_com_travail'),
        bras_com = $('#bras_com_travail'),
        fb_com = $('#facebook_travail'),
        tw_com = $('#twitter_travail'),
        mus_tr = $('#musique_travail'),
        graph_tr = $('#graphisme_travail'),
        dev_tr = $('#developpement_travail'),
        vol_droit = $('#volume-son-droit_mus_travail'),
        vol_gauche = $('#volume-son-gauche_mus_travail'),
        pied_mus = $('#chaussure-gauche_mus_travail'),
        tete_mus = $('#tete_mus_travail'),
        bras_d_mus = $('#bras-droit_mus_travail'),
        avantb_mus = $('#avant-bras-g_mus_travail'),
        arriereb_mus = $('#arriere-bras-g_mus_travail'),
        main_mus = $('#arriere-main_mus_travail'),
        ill_1 = $('#p1_ill_graph_travail'),
        ill_2 = $('#p4_ill_graph_travail'),
        ill_3 = $('#p5_ill_graph_travail'),
        ill_4 = $('#p6_ill_graph_travail'),
        ill_5 = $('#p2_ill_graph_travail'),
        ill_6 = $('#p8_ill_graph_travail'),
        ill_7 = $('#p9_ill_graph_travail'),
        ill_8 = $('#p10_ill_graph_travail'),
        ill_9 = $('#p7_ill_graph_travail'),
        ill_10 = $('#p3_ill_graph_travail'),
        ill_11 = $('#p11_ill_graph_travail'),
        boule_pap = $('#boule_pap_graph'),
        main_graph = $('#main_graph_travail'),
        bras_graph = $('#bras-droit_graph_travail'),
        brasg_graph = $('#bras-gauche_graph_travail'),
        code_dev = $('#code_dev_travail rect'),
        brasd_dev = $('#bras-droit_dev'),
        brasg_dev = $('#bras-gauche_dev');

    //Timeline
    var tl_travail = new TimelineMax({repeat:-1});
    tl_travail.from(bras_com, 1, {rotation:150, transformOrigin:"90% 90%"})
        .to(tete_com, 0.3, {rotation:10, transformOrigin:"50% 100%"}, 1.5)
        .to(tete_com, 0.3, {rotation:0, transformOrigin:"50% 100%"})
        .set(tw_com, {className:"-=transparent"},2.5)
        .to(tete_com, 0.3, {rotation:10, transformOrigin:"50% 100%"}, 3)
        .to(tete_com, 0.3, {rotation:0, transformOrigin:"50% 100%"})
        .set(com_tr, {className:"+=transparent"},5)
        .set(mus_tr, {className:"-=transparent"},5)
        .to(pied_mus, 0.5, {rotation:10, transformOrigin:"100% 100%", repeat:10})
        .from(tete_mus, 0.5, {rotation:-5, transformOrigin:"50% 100%", yoyo:true, repeat:10}, 5)
        .from(bras_d_mus, 0.2, {y:-2, x:3, repeat:25, yoyo:true}, 5)
        .to(vol_droit, 0.5, {y:15},5)
        .to(vol_gauche, 0.5, {y:-5},5.5)
        .to([avantb_mus, main_mus], 0.5, {y:2, x:5}, 5.5)
        .to(arriereb_mus, 0.5, {rotation:-4, transformOrigin:"50%, 0%"}, 5.5)
        .to(vol_droit, 0.5, {y:-5},6)
        .to(vol_gauche, 0.5, {y:15},6)
        .to(vol_droit, 0.5, {y:15},6.5)
        .to(vol_gauche, 0.5, {y:0},6.5)
        .to([avantb_mus, main_mus], 0.5, {y:0, x:0}, 6.5)
        .to(arriereb_mus, 0.5, {rotation:0, transformOrigin:"50%, 0%"}, 6.5)
        .to(vol_droit, 0.5, {y:0},7)
        .to(vol_gauche, 0.5, {y:10},7)
        .to(vol_droit, 0.5, {y:10},7.5)
        .to(vol_gauche, 0.5, {y:-2},7.5)
        .to([avantb_mus, main_mus], 0.5, {y:3.5, x:9}, 8)
        .to(arriereb_mus, 0.5, {rotation:-7, transformOrigin:"50%, 0%"}, 8)
        .to(vol_droit, 0.5, {y:-2},8)
        .to(vol_gauche, 0.5, {y:8},8)
        .to(vol_droit, 0.5, {y:8},8.5)
        .to(vol_gauche, 0.5, {y:20},8.5)
        .to(vol_droit, 0.5, {y:20},9)
        .to(vol_gauche, 0.5, {y:-5},9)
        .to([avantb_mus, main_mus], 0.5, {y:4, x:15}, 9)
        .to(arriereb_mus, 0.5, {rotation:-10, transformOrigin:"50%, 0%"}, 9)
        .to(vol_droit, 0.5, {y:-5}, 9.5)
        .to(vol_gauche, 0.5, {y:0},9.5)
        .to([avantb_mus, main_mus], 0.5, {y:-3, x:-15}, 9.5)
        .to(arriereb_mus, 0.5, {rotation:9, transformOrigin:"50%, 0%"}, 9.5)
        .to(vol_droit, 0.5, {y:0})
        .set(mus_tr, {className:"+=transparent"},10)
        .set(graph_tr, {className:"-=transparent"},10)
        .fromTo(main_graph, 0.4, {x:-20}, {x:10, repeat:4, yoyo:true, repeatDelay:0.5}, 10)
        .fromTo(bras_graph, 0.4, {rotation:2, transformOrigin:"0% 30%"}, {rotation:-5, transformOrigin:"0% 30%", yoyo:true, repeat:4, repeatDelay:0.5}, 10)
        .fromTo(brasg_graph, 0.5, {rotation:2, transformOrigin:"100% 30%"}, {rotation:-2, transformOrigin:"100% 30%", yoyo:true, repeat:3}, 10.4)
        .from(ill_1, 0.1, {opacity:0},10.4)
        .from(ill_2, 0.1, {opacity:0},10.8)
        .from(ill_3, 0.1, {opacity:0},11.2)
        .from(ill_4, 0.1, {opacity:0},11.6)
        .from(ill_5, 0.1, {opacity:0},12)
        .from(boule_pap, 0.6, {x:6, y:-85, ease:Bounce.easeOut}, 12)
        .from(ill_6, 0.1, {opacity:0},12.4)
        .from(ill_7, 0.1, {opacity:0},12.8)
        .from(ill_8, 0.1, {opacity:0},13.2)
        .from(ill_9, 0.1, {opacity:0},13.6)
        .from(ill_10, 0.1, {opacity:0},14)
        .from(ill_11, 0.1, {opacity:0},14.4)
        .set(graph_tr, {className:"+=transparent"},15)
        .set(dev_tr, {className:"-=transparent"},15)
        .to(code_dev, 5, {y:-50, ease: Linear.easeNone})
        .to(brasd_dev, 0.2, {rotation:-6, transformOrigin:"0% 30%", repeat:25, yoyo:true, ease: Linear.easeNone},15)
        .from(brasg_dev, 0.2, {rotation:6, transformOrigin:"100% 30%", repeat:25, yoyo:true, ease: Linear.easeNone},15);
    //END TRAVAIL TWEEN MAX ANIMATION

    /**
     * DEPLOIEMENT TWEEN MAX ANIMATION
     *
     * @description Set movements of each svg DEPLOIEMENT childs
     * This animation is infinite.
     *
     * @author Federico Borsoi
     * */
    //Each objects animated in the SVG
    var deploiement = $('#deploiement'),
        tete_mere = $('#tete_mere'),
        tete_pere = $('#tete-pere'),
        tete_fils = $('#tete_fils'),
        tete_fille1 = $('#tete_fille1'),
        tete_fille2 = $('#tete_fille2'),
        tetes_levees = $('#tetes_levees_depl'),
        bouche_pere = $('#bouche-pere_depl'),
        bouche_mere = $('#bouche-mere_depl'),
        bouche_fils = $('#bouche-fils_depl'),
        bouche_fille1 = $('#bouche-fille1_depl'),
        bouche_fille2 = $('#bouche-fille2_depl'),
        fleche1 = $('#fleche1_depl'),
        fleche2 = $('#fleche2_depl'),
        fleche3 = $('#fleche3_depl');

    //Timeline
    var tl_depl = new TimelineMax({repeat:-1, repeatDelay:2});
    tl_depl.to(tetes_levees, 0, {opacity:0}, -1)
        .from([fleche1, fleche2, fleche3], 2, {scale: 4, y:-400},1)
        .to(tetes_levees, 0, {opacity:1}, 3.5)
        //.to([tete_pere, tete_mere, tete_fils, tete_fille1, tete_fille2], 0, {opacity:0},3.5)
        .to([bouche_pere, bouche_mere, bouche_fils, bouche_fille1, bouche_fille2], 0.5, {y:5}, 4);
    //END DEPLOIEMENT TWEEN MAX ANIMATION

    /*---- SVG SLIDING ANIMATIONS ----*/

        //Set the initial state of animation to active
        var active ="idee";

        //Set the elements to animate
        var animations = $('#animations_home'),
            animation = $('#animations_home div svg');

        var slider_texts = $('#text-slider-container'),
            slider_text = $('#svg-slider-texte .text-slider');

        /**
         * IDEE OPEN
         *
         * @description This function will create the same animation for each sliders (text and svg one)
         * When this function is called, the IDEE slider will be shown with a slide animation
         *
         * @author Federico Borsoi/Jeff Jardon
         */
        function idee_open(){
            var timeLine_svg_idee_animation = new TimelineMax;
            var timeLine_text_slider_idee_animation = new TimelineMax;

            //SVG Slider animation
            timeLine_svg_idee_animation.to(animation, 0.2, {scale:0.8, transformOrigin:"50% 50%"})
                .to(animations, 0.5, {x:"0%", ease:Power1.easeInOut})
                .add(function(){reset_animations()})
                .to(animation, 0.2, {scale:1, transformOrigin:"50% 50%"})
                .add(tl_idee.play(),1.5);

            //Text Slider animation
            timeLine_text_slider_idee_animation.to(slider_text, 0.2, {scale:0.8, transformOrigin:"50% 50%"})
                .to(slider_texts, 0.5, {x:"0%", ease:Power1.easeInOut})
                .add(function(){reset_animations()})
                .to(slider_text, 0.2, {scale:1, transformOrigin:"50% 50%"})
                .add(tl_idee.play(),1.5);

            active = "idee";
            //Select state of the navigation (bulls and arrows class)
            select_state();
        }
        //END IDEE OPEN

        /**
         * REUNION OPEN
         *
         * @description This function will create the same animation for each sliders (text and svg one)
         * When this function is called, the REUNION slider will be shown with a slide animation
         *
         * @author Federico Borsoi/Jeff Jardon
         */
        function reunion_open(){
            var timeLine_svg_reunion_animation = new TimelineMax;
            var timeLine_text_slider_reunion_animation = new TimelineMax;

            //SVG Slider animation
            timeLine_svg_reunion_animation.to(animation, 0.2, {scale:0.8, transformOrigin:"50% 50%"})
                .to(animations, 0.5, {x:"-100%", ease:Power1.easeInOut})
                .add(function(){reset_animations()})
                .to(animation, 0.2, {scale:1, transformOrigin:"50% 50%"})
                .add(tl_reunion.play());

            //Text Slider animation
            timeLine_text_slider_reunion_animation.to(slider_text, 0.2, {scale:0.8, transformOrigin:"50% 50%"})
                .to(slider_texts, 0.5, {x:"-100%", ease:Power1.easeInOut})
                .add(function(){reset_animations()})
                .to(slider_text, 0.2, {scale:1, transformOrigin:"50% 50%"})
                .add(tl_idee.play(),1.5);
            active="reunion";
            //Select state of the navigation (bulls and arrows class)
            select_state();
        }
        //END REUNION OPEN

        /**
         * TRAVAIL OPEN
         *
         * @description This function will create the same animation for each sliders (text and svg one)
         * When this function is called, the TRAVAIL slider will be shown with a slide animation
         *
         * @author Federico Borsoi/Jeff Jardon
         */
        function travail_open(){
            var timeLine_svg_travail_animation = new TimelineMax;
            var timeLine_text_slider_travail_animation = new TimelineMax;

            //SVG Slider animation
            timeLine_svg_travail_animation.to(animation, 0.2, {scale:0.8, transformOrigin:"50% 50%"})
                .to(animations, 0.5, {x:"-200%", ease:Power1.easeInOut})
                .add(function(){reset_animations()})
                .to(animation, 0.2, {scale:1, transformOrigin:"50% 50%"})
                .add(tl_travail.play());

            //Text Slider animation
            timeLine_text_slider_travail_animation.to(slider_text, 0.2, {scale:0.8, transformOrigin:"50% 50%"})
                .to(slider_texts, 0.5, {x:"-200%", ease:Power1.easeInOut})
                .add(function(){reset_animations()})
                .to(slider_text, 0.2, {scale:1, transformOrigin:"50% 50%"})
                .add(tl_idee.play(),1.5);
            active="travail";
            //Select state of the navigation (bulls and arrows class)
            select_state();
        }
        //TRAVAIL OPEN

        /**
         * DEPLOIEMENT OPEN
         *
         * @description This function will create the same animation for each sliders (text and svg one)
         * When this function is called, the DEPLOIEMENT slider will be shown with a slide animation
         *
         * @author Federico Borsoi/Jeff Jardon
         */
        function deploiement_open(){
            var timeLine_svg_deploiement_animation = new TimelineMax;
            var timeLine_text_slider_deploiement_animation = new TimelineMax;

            //SVG Slider animation
            timeLine_svg_deploiement_animation.to(animation, 0.2, {scale:0.8, transformOrigin:"50% 50%"})
                .to(animations, 0.5, {x:"-300%", ease:Power1.easeInOut})
                .add(function(){reset_animations()})
                .to(animation, 0.2, {scale:1, transformOrigin:"50% 50%"})
                .add(tl_depl.play());

            //Text Slider animation
            timeLine_text_slider_deploiement_animation.to(slider_text, 0.2, {scale:0.8, transformOrigin:"50% 50%"})
                .to(slider_texts, 0.5, {x:"-300%", ease:Power1.easeInOut})
                .add(function(){reset_animations()})
                .to(slider_text, 0.2, {scale:1, transformOrigin:"50% 50%"})
                .add(tl_idee.play(),1.5);
            active="deploiement";
            //Select state of the navigation (bulls and arrows class)
            select_state();
        }
        //END DEPLOIEMENT OPEN

        /**
         * RESET ANIMATIONS
         *
         * @description When a new state of animation is selected (active var) all animations are reset to start
         * @author Federido Borsoi
         */
        function reset_animations(){
            if(active != "idee"){tl_idee.restart();
                tl_idee.pause();}
            if(active != "reunion"){tl_reunion.restart();
                tl_reunion.pause();}
            if(active != "travail"){tl_travail.restart();
                tl_travail.pause();}
            if(active != "deploiement"){tl_depl.restart();
                tl_depl.pause();}
        }
        //END RESET ANIMATIONS

    /*---- END SVG SLIDING ANIMATIONS ----*/

    /**
     * SVG SLIDER NAVIGATION CLICK
     *
     * @description When the user choose to click on bulls or next/prev arrows, events are fired to change animation states
     *
     * @author Jeff Jardon
     *
     */
    $('#svg-slider-nav li i').click(function(){
        switch($(this).attr("id")){
            case "prev":
                precedent()
                break;
            case "sel_idee":
                idee_open();
                break;
            case "sel_reunion":
                reunion_open();
                break;
            case "sel_travail":
                travail_open();
                break;
            case "sel_deploiement":
                deploiement_open();
                break;
            case "next":
                suivant();
                break;
        }
    });
    //END SVG SLIDER NAVIGATION CLICK

    /**
     * SUIVANT
     *
     * @description This function will check the current state of the animation
     * When this function is called, the animation state will be set with the next one
     *
     * @author Federico Borsoi
     */
    function suivant(){
        if(active=="idee"){
            reunion_open();
        }else if (active=="reunion") {
            travail_open();
        }else if (active=="travail") {
            deploiement_open();
        }
    }
    //END SUIVANT

    /**
     * PRECEDENT
     *
     * @description This function will check the current state of the animation
     * When this function is called, the animation state will be set with the previous one
     *
     * @author Federico Borsoi
     */
    function precedent(){
        if(active=="reunion"){
            idee_open();
        }else if (active=="travail") {
            reunion_open();
        }else if (active=="deploiement") {
            travail_open();
        }
    }
    // END PRECEDENT

    /**
     * SWIPE FUNCTION
     *
     * Reproduce the swipe event on any screens, so sliders can be swiped right, left and down
     * @link http://labs.rampinteractive.co.uk/touchSwipe/demos/
     *
     * @author Jeff Jardon
     */
    (function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(f){var y="1.6.12",p="left",o="right",e="up",x="down",c="in",A="out",m="none",s="auto",l="swipe",t="pinch",B="tap",j="doubletap",b="longtap",z="hold",E="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,C="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe",preventDefaultEvents:true};f.fn.swipe=function(H){var G=f(this),F=G.data(C);if(F&&typeof H==="string"){if(F[H]){return F[H].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+H+" does not exist on jQuery.swipe")}}else{if(F&&typeof H==="object"){F.option.apply(this,arguments)}else{if(!F&&(typeof H==="object"||!H)){return w.apply(this,arguments)}}}return G};f.fn.swipe.version=y;f.fn.swipe.defaults=n;f.fn.swipe.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipe.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:A};f.fn.swipe.pageScroll={NONE:m,HORIZONTAL:E,VERTICAL:u,AUTO:s};f.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:i};function w(F){if(F&&(F.allowPageScroll===undefined&&(F.swipe!==undefined||F.swipeStatus!==undefined))){F.allowPageScroll=m}if(F.click!==undefined&&F.tap===undefined){F.tap=F.click}if(!F){F={}}F=f.extend({},f.fn.swipe.defaults,F);return this.each(function(){var H=f(this);var G=H.data(C);if(!G){G=new D(this,F);H.data(C,G)}})}function D(a4,au){var au=f.extend({},au);var az=(a||d||!au.fallbackToMouseEvents),K=az?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",ax=az?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",V=az?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",T=az?null:"mouseleave",aD=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ag=0,aP=null,ac=0,a1=0,aZ=0,H=1,ap=0,aJ=0,N=null;var aR=f(a4);var aa="start";var X=0;var aQ={};var U=0,a2=0,a5=0,ay=0,O=0;var aW=null,af=null;try{aR.bind(K,aN);aR.bind(aD,a9)}catch(aj){f.error("events not supported "+K+","+aD+" on jQuery.swipe")}this.enable=function(){aR.bind(K,aN);aR.bind(aD,a9);return aR};this.disable=function(){aK();return aR};this.destroy=function(){aK();aR.data(C,null);aR=null};this.option=function(bc,bb){if(typeof bc==="object"){au=f.extend(au,bc)}else{if(au[bc]!==undefined){if(bb===undefined){return au[bc]}else{au[bc]=bb}}else{if(!bc){return au}else{f.error("Option "+bc+" does not exist on jQuery.swipe.options")}}}return null};function aN(bd){if(aB()){return}if(f(bd.target).closest(au.excludedElements,aR).length>0){return}var be=bd.originalEvent?bd.originalEvent:bd;var bc,bf=be.touches,bb=bf?bf[0]:be;aa=g;if(bf){X=bf.length}else{if(au.preventDefaultEvents!==false){bd.preventDefault()}}ag=0;aP=null;aJ=null;ac=0;a1=0;aZ=0;H=1;ap=0;N=ab();S();ai(0,bb);if(!bf||(X===au.fingers||au.fingers===i)||aX()){U=ar();if(X==2){ai(1,bf[1]);a1=aZ=at(aQ[0].start,aQ[1].start)}if(au.swipeStatus||au.pinchStatus){bc=P(be,aa)}}else{bc=false}if(bc===false){aa=q;P(be,aa);return bc}else{if(au.hold){af=setTimeout(f.proxy(function(){aR.trigger("hold",[be.target]);if(au.hold){bc=au.hold.call(aR,be,be.target)}},this),au.longTapThreshold)}an(true)}return null}function a3(be){var bh=be.originalEvent?be.originalEvent:be;if(aa===h||aa===q||al()){return}var bd,bi=bh.touches,bc=bi?bi[0]:bh;var bf=aH(bc);a2=ar();if(bi){X=bi.length}if(au.hold){clearTimeout(af)}aa=k;if(X==2){if(a1==0){ai(1,bi[1]);a1=aZ=at(aQ[0].start,aQ[1].start)}else{aH(bi[1]);aZ=at(aQ[0].end,aQ[1].end);aJ=aq(aQ[0].end,aQ[1].end)}H=a7(a1,aZ);ap=Math.abs(a1-aZ)}if((X===au.fingers||au.fingers===i)||!bi||aX()){aP=aL(bf.start,bf.end);ak(be,aP);ag=aS(bf.start,bf.end);ac=aM();aI(aP,ag);if(au.swipeStatus||au.pinchStatus){bd=P(bh,aa)}if(!au.triggerOnTouchEnd||au.triggerOnTouchLeave){var bb=true;if(au.triggerOnTouchLeave){var bg=aY(this);bb=F(bf.end,bg)}if(!au.triggerOnTouchEnd&&bb){aa=aC(k)}else{if(au.triggerOnTouchLeave&&!bb){aa=aC(h)}}if(aa==q||aa==h){P(bh,aa)}}}else{aa=q;P(bh,aa)}if(bd===false){aa=q;P(bh,aa)}}function M(bb){var bc=bb.originalEvent?bb.originalEvent:bb,bd=bc.touches;if(bd){if(bd.length&&!al()){G();return true}else{if(bd.length&&al()){return true}}}if(al()){X=ay}a2=ar();ac=aM();if(ba()||!am()){aa=q;P(bc,aa)}else{if(au.triggerOnTouchEnd||(au.triggerOnTouchEnd==false&&aa===k)){if(au.preventDefaultEvents!==false){bb.preventDefault()}aa=h;P(bc,aa)}else{if(!au.triggerOnTouchEnd&&a6()){aa=h;aF(bc,aa,B)}else{if(aa===k){aa=q;P(bc,aa)}}}}an(false);return null}function a9(){X=0;a2=0;U=0;a1=0;aZ=0;H=1;S();an(false)}function L(bb){var bc=bb.originalEvent?bb.originalEvent:bb;if(au.triggerOnTouchLeave){aa=aC(h);P(bc,aa)}}function aK(){aR.unbind(K,aN);aR.unbind(aD,a9);aR.unbind(ax,a3);aR.unbind(V,M);if(T){aR.unbind(T,L)}an(false)}function aC(bf){var be=bf;var bd=aA();var bc=am();var bb=ba();if(!bd||bb){be=q}else{if(bc&&bf==k&&(!au.triggerOnTouchEnd||au.triggerOnTouchLeave)){be=h}else{if(!bc&&bf==h&&au.triggerOnTouchLeave){be=q}}}return be}function P(bd,bb){var bc,be=bd.touches;if((J()&&W())||(Q()&&aX())){if(J()&&W()){bc=aF(bd,bb,l)}if((Q()&&aX())&&bc!==false){bc=aF(bd,bb,t)}}else{if(aG()&&bc!==false){bc=aF(bd,bb,j)}else{if(ao()&&bc!==false){bc=aF(bd,bb,b)}else{if(ah()&&bc!==false){bc=aF(bd,bb,B)}}}}if(bb===q){if(W()){bc=aF(bd,bb,l)}if(aX()){bc=aF(bd,bb,t)}a9(bd)}if(bb===h){if(be){if(!be.length){a9(bd)}}else{a9(bd)}}return bc}function aF(be,bb,bd){var bc;if(bd==l){aR.trigger("swipeStatus",[bb,aP||null,ag||0,ac||0,X,aQ]);if(au.swipeStatus){bc=au.swipeStatus.call(aR,be,bb,aP||null,ag||0,ac||0,X,aQ);if(bc===false){return false}}if(bb==h&&aV()){aR.trigger("swipe",[aP,ag,ac,X,aQ]);if(au.swipe){bc=au.swipe.call(aR,be,aP,ag,ac,X,aQ);if(bc===false){return false}}switch(aP){case p:aR.trigger("swipeLeft",[aP,ag,ac,X,aQ]);if(au.swipeLeft){bc=au.swipeLeft.call(aR,be,aP,ag,ac,X,aQ)}break;case o:aR.trigger("swipeRight",[aP,ag,ac,X,aQ]);if(au.swipeRight){bc=au.swipeRight.call(aR,be,aP,ag,ac,X,aQ)}break;case e:aR.trigger("swipeUp",[aP,ag,ac,X,aQ]);if(au.swipeUp){bc=au.swipeUp.call(aR,be,aP,ag,ac,X,aQ)}break;case x:aR.trigger("swipeDown",[aP,ag,ac,X,aQ]);if(au.swipeDown){bc=au.swipeDown.call(aR,be,aP,ag,ac,X,aQ)}break}}}if(bd==t){aR.trigger("pinchStatus",[bb,aJ||null,ap||0,ac||0,X,H,aQ]);if(au.pinchStatus){bc=au.pinchStatus.call(aR,be,bb,aJ||null,ap||0,ac||0,X,H,aQ);if(bc===false){return false}}if(bb==h&&a8()){switch(aJ){case c:aR.trigger("pinchIn",[aJ||null,ap||0,ac||0,X,H,aQ]);if(au.pinchIn){bc=au.pinchIn.call(aR,be,aJ||null,ap||0,ac||0,X,H,aQ)}break;case A:aR.trigger("pinchOut",[aJ||null,ap||0,ac||0,X,H,aQ]);if(au.pinchOut){bc=au.pinchOut.call(aR,be,aJ||null,ap||0,ac||0,X,H,aQ)}break}}}if(bd==B){if(bb===q||bb===h){clearTimeout(aW);clearTimeout(af);if(Z()&&!I()){O=ar();aW=setTimeout(f.proxy(function(){O=null;aR.trigger("tap",[be.target]);if(au.tap){bc=au.tap.call(aR,be,be.target)}},this),au.doubleTapThreshold)}else{O=null;aR.trigger("tap",[be.target]);if(au.tap){bc=au.tap.call(aR,be,be.target)}}}}else{if(bd==j){if(bb===q||bb===h){clearTimeout(aW);O=null;aR.trigger("doubletap",[be.target]);if(au.doubleTap){bc=au.doubleTap.call(aR,be,be.target)}}}else{if(bd==b){if(bb===q||bb===h){clearTimeout(aW);O=null;aR.trigger("longtap",[be.target]);if(au.longTap){bc=au.longTap.call(aR,be,be.target)}}}}}return bc}function am(){var bb=true;if(au.threshold!==null){bb=ag>=au.threshold}return bb}function ba(){var bb=false;if(au.cancelThreshold!==null&&aP!==null){bb=(aT(aP)-ag)>=au.cancelThreshold}return bb}function ae(){if(au.pinchThreshold!==null){return ap>=au.pinchThreshold}return true}function aA(){var bb;if(au.maxTimeThreshold){if(ac>=au.maxTimeThreshold){bb=false}else{bb=true}}else{bb=true}return bb}function ak(bb,bc){if(au.preventDefaultEvents===false){return}if(au.allowPageScroll===m){bb.preventDefault()}else{var bd=au.allowPageScroll===s;switch(bc){case p:if((au.swipeLeft&&bd)||(!bd&&au.allowPageScroll!=E)){bb.preventDefault()}break;case o:if((au.swipeRight&&bd)||(!bd&&au.allowPageScroll!=E)){bb.preventDefault()}break;case e:if((au.swipeUp&&bd)||(!bd&&au.allowPageScroll!=u)){bb.preventDefault()}break;case x:if((au.swipeDown&&bd)||(!bd&&au.allowPageScroll!=u)){bb.preventDefault()}break}}}function a8(){var bc=aO();var bb=Y();var bd=ae();return bc&&bb&&bd}function aX(){return !!(au.pinchStatus||au.pinchIn||au.pinchOut)}function Q(){return !!(a8()&&aX())}function aV(){var be=aA();var bg=am();var bd=aO();var bb=Y();var bc=ba();var bf=!bc&&bb&&bd&&bg&&be;return bf}function W(){return !!(au.swipe||au.swipeStatus||au.swipeLeft||au.swipeRight||au.swipeUp||au.swipeDown)}function J(){return !!(aV()&&W())}function aO(){return((X===au.fingers||au.fingers===i)||!a)}function Y(){return aQ[0].end.x!==0}function a6(){return !!(au.tap)}function Z(){return !!(au.doubleTap)}function aU(){return !!(au.longTap)}function R(){if(O==null){return false}var bb=ar();return(Z()&&((bb-O)<=au.doubleTapThreshold))}function I(){return R()}function aw(){return((X===1||!a)&&(isNaN(ag)||ag<au.threshold))}function a0(){return((ac>au.longTapThreshold)&&(ag<r))}function ah(){return !!(aw()&&a6())}function aG(){return !!(R()&&Z())}function ao(){return !!(a0()&&aU())}function G(){a5=ar();ay=event.touches.length+1}function S(){a5=0;ay=0}function al(){var bb=false;if(a5){var bc=ar()-a5;if(bc<=au.fingerReleaseThreshold){bb=true}}return bb}function aB(){return !!(aR.data(C+"_intouch")===true)}function an(bb){if(bb===true){aR.bind(ax,a3);aR.bind(V,M);if(T){aR.bind(T,L)}}else{aR.unbind(ax,a3,false);aR.unbind(V,M,false);if(T){aR.unbind(T,L,false)}}aR.data(C+"_intouch",bb===true)}function ai(bd,bb){var bc={start:{x:0,y:0},end:{x:0,y:0}};bc.start.x=bc.end.x=bb.pageX||bb.clientX;bc.start.y=bc.end.y=bb.pageY||bb.clientY;aQ[bd]=bc;return bc}function aH(bb){var bd=bb.identifier!==undefined?bb.identifier:0;var bc=ad(bd);if(bc===null){bc=ai(bd,bb)}bc.end.x=bb.pageX||bb.clientX;bc.end.y=bb.pageY||bb.clientY;return bc}function ad(bb){return aQ[bb]||null}function aI(bb,bc){bc=Math.max(bc,aT(bb));N[bb].distance=bc}function aT(bb){if(N[bb]){return N[bb].distance}return undefined}function ab(){var bb={};bb[p]=av(p);bb[o]=av(o);bb[e]=av(e);bb[x]=av(x);return bb}function av(bb){return{direction:bb,distance:0}}function aM(){return a2-U}function at(be,bd){var bc=Math.abs(be.x-bd.x);var bb=Math.abs(be.y-bd.y);return Math.round(Math.sqrt(bc*bc+bb*bb))}function a7(bb,bc){var bd=(bc/bb)*1;return bd.toFixed(2)}function aq(){if(H<1){return A}else{return c}}function aS(bc,bb){return Math.round(Math.sqrt(Math.pow(bb.x-bc.x,2)+Math.pow(bb.y-bc.y,2)))}function aE(be,bc){var bb=be.x-bc.x;var bg=bc.y-be.y;var bd=Math.atan2(bg,bb);var bf=Math.round(bd*180/Math.PI);if(bf<0){bf=360-Math.abs(bf)}return bf}function aL(bc,bb){var bd=aE(bc,bb);if((bd<=45)&&(bd>=0)){return p}else{if((bd<=360)&&(bd>=315)){return p}else{if((bd>=135)&&(bd<=225)){return o}else{if((bd>45)&&(bd<135)){return x}else{return e}}}}}function ar(){var bb=new Date();return bb.getTime()}function aY(bb){bb=f(bb);var bd=bb.offset();var bc={left:bd.left,right:bd.left+bb.outerWidth(),top:bd.top,bottom:bd.top+bb.outerHeight()};return bc}function F(bb,bc){return(bb.x>bc.left&&bb.x<bc.right&&bb.y>bc.top&&bb.y<bc.bottom)}}}));
    $(function() {
        //Enable swiping...
        $("#text-slider-container, #animations_home").swipe( {
            //Generic swipe handler for all directions
            swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
                switch(active) {
                    case "idee":
                        if (direction == "left") {
                            reunion_open();
                        }
                        break;
                    case "reunion":
                        if (direction == "right") {
                            idee_open();
                        }
                        if (direction == "left") {
                            travail_open();
                        }
                        break;
                    case "travail":
                        if (direction == "right") {
                            reunion_open();
                        }
                        if (direction == "left") {
                            deploiement_open();
                        }
                        break;
                    case "deploiement":
                        if (direction == "right") {
                            travail_open();
                        }
                        break;
                }
               /* if (direction == "down") {
                    $('html, body').animate({
                        scrollTop: '-=300'
                    }, 500);
                }
                if (direction == "up") {
                    $('html, body').animate({
                        scrollTop: '+=300'
                    }, 500);
                }*/
            },
            allowPageScroll: "vertical",
            //Default is 75px, set to 0 so any distance triggers swipe
            threshold:75
        });
    });
    //END SWIPE FUNCTION

    /**
     * SELECT STATE
     *
     * @description each time the sliders change slides, bulls and arrow from navigation get active or selected classes
     * @author Federico Borsoi/Jeff Jardon
     */
    function select_state(){
        var bull_idee = $('#sel_idee');
        var bull_reunion = $('#sel_reunion');
        var bull_travail = $('#sel_travail');
        var bull_deploiement = $('#sel_deploiement');
        var prev = $('#prev');
        var next = $('#next')

        bull_idee.removeClass('selected');
        bull_reunion.removeClass('selected');
        bull_travail.removeClass('selected');
        bull_deploiement.removeClass('selected');
        next.removeClass('inactive');
        prev.removeClass('inactive');
        switch(active) {
            case "idee":
                bull_idee.addClass('selected');
                prev.addClass('inactive');
                break;
            case "reunion":
                bull_reunion.addClass('selected');
                break;
            case "travail":
                bull_travail.addClass('selected');
                break;
            case "deploiement":
                bull_deploiement.addClass('selected');
                next.addClass('inactive');
                break;
        }
    }
    //SELECT STATE

    /* ==========================================================================
     WELCOME PAGE - SECTION PRENSENTATION
     ========================================================================== */
    /**
     * Todo: add commentary
     * */
    if ($(window).width() > 768){
        var controllerPresentationSection = new ScrollMagic.Controller();
        // build tween
        var tl_losange1_presentation = new TimelineMax,
            tl_losange2_presentation = new TimelineMax,
            tl_losange3_presentation = new TimelineMax;
        tl_losange4_presentation = new TimelineMax;

        var losange_presentation_1 = $('#presentation-section').find('.losange:nth-child(1)'),
            losange_presentation_2 = $('#presentation-section').find('.losange:nth-child(2)'),
            losange_presentation_3 = $('#presentation-section').find('.losange:nth-child(3)'),
            losange_presentation_4 = $('#presentation-section').find('.losange:nth-child(4)');

        tl_losange1_presentation.to(losange_presentation_1, 0.5, {scale: 3, ease: Linear.easeNone});
        tl_losange2_presentation.to(losange_presentation_2, 0.5, {top:"-100px", ease: Linear.easeNone});
        tl_losange3_presentation.to(losange_presentation_3, 0.5, {top:"-75px", ease: Linear.easeNone});
        tl_losange4_presentation.to(losange_presentation_4, 1, {top:"90%", ease: Linear.easeNone})
            .to(losange_presentation_4, 1, {rotation:225, transformOrigin:"50%"}, '-=1');


        new ScrollMagic.Scene({
            triggerElement: "#presentation-section",
            duration: '400',
            triggerHook:0.5,
            offset: 475
        })
            .setTween(tl_losange1_presentation)
            .setPin("#presentation-section")
            .addIndicators({name: "losange 1 scale"}) // add indicators (requires plugin)
            .addTo(controllerPresentationSection);


        new ScrollMagic.Scene({
            triggerElement: "#presentation-section",
            duration: "100%",
            triggerHook:0.5
        })
            .setTween(tl_losange2_presentation)
            .addIndicators({name: "losange 2 translate",indent:200}) // add indicators (requires plugin)
            .addTo(controllerPresentationSection);

        new ScrollMagic.Scene({
            triggerElement: "#presentation-section",
            duration: "100%",
            triggerHook:0.5
        })
            .setTween(tl_losange3_presentation)
            .addIndicators({name: "losange 3 translate",indent:300}) // add indicators (requires plugin)
            .addTo(controllerPresentationSection);

        new ScrollMagic.Scene({
            triggerElement: "#presentation-section",
            duration: "100%",
            triggerHook:0.5
        })
            .setTween(tl_losange4_presentation)
            .addIndicators({name: "losange 4 translate",indent:500}) // add indicators (requires plugin)
            .addTo(controllerPresentationSection);
    }

    /* ==========================================================================
     WELCOME PAGE - SECTION FORMATIONS
     ========================================================================== */
    /**
     * ANIMATION WRITTING LETTERS
     * */
    var element = $('#formations-section').find('.formations');
    var writting_letters = element.find('span.writing-letter');
    var tl_writting_letters_formations_licence = new TimelineMax;
    var tl_writting_letters_formations_master1 = new TimelineMax;
    var tl_writting_letters_formations_master2 = new TimelineMax;

    writting_letters.each(function (index) {
        $(this).html($(this).text().replace(/(\w)/g, "<span>$&</span>"));
        switch (index) {
            case 0 :
                tl_writting_letters_formations_licence.staggerFrom($(this).find('span'), 0.1, {autoAlpha: 0, rotation: 90, scale: 2, display: "none"}, 0.05);
                tl_writting_letters_formations_licence.stop();
                break;
            case 1 :
                tl_writting_letters_formations_master1.staggerFrom($(this).find('span'), 0.1, {autoAlpha: 0, rotation: 90, scale: 2, display: "none"}, 0.05);
                tl_writting_letters_formations_master1.stop();
                break;
            case 2 :
                tl_writting_letters_formations_master2.staggerFrom($(this).find('span'), 0.1, {autoAlpha: 0, rotation: 90, scale: 2, display: "none"}, 0.05);
                tl_writting_letters_formations_master2.stop();
                break;
        }
    });

    if ($(window).width() > 768) {
        $(".formation").mouseover(function (e) {
            switch ($(this).index()) {
                case 0 :
                    //$(this).find("span.writing-letter > span").last().append("&nbsp;");
                    tl_writting_letters_formations_licence.play();
                    break;
                case 1 :
                    tl_writting_letters_formations_master1.play();
                    break;
                case 2 :
                    tl_writting_letters_formations_master2.play();
                    break;
            }
        })

        $(".formation").mouseout(function (e) {
            switch ($(this).index()) {
                case 0 :
                    tl_writting_letters_formations_licence.reverse();
                    break;
                case 1 :
                    tl_writting_letters_formations_master1.reverse();
                    break;
                case 2 :
                    tl_writting_letters_formations_master2.reverse();
                    break;
            }
        })
    }else{
        var Scroll_formations_section = new ScrollMagic.Controller();

        //Licence
        new ScrollMagic.Scene({
            triggerElement: '.formation:nth-of-type(1)',
            duration:'33%',
            triggerHook:0.5
        })
            .setClassToggle('.formation:nth-of-type(1) .filter', 'activeScroll')//Addclass to .navbar
            .setTween(tl_writting_letters_formations_licence.play())
            .addIndicators({name:'licence 3 anim', colorTrigger: 'red', indent: 200, colorStart: '#75CC395'})
            .addTo(Scroll_formations_section);



        //Master 1
        new ScrollMagic.Scene({
            triggerElement: '.formation:nth-of-type(2)',
            duration:'33%',
            triggerHook:0.5
        })
            .setClassToggle('.formation:nth-of-type(2) .filter', 'activeScroll')//Addclass to .navbar
            .setTween(tl_writting_letters_formations_master1.play())
            .addIndicators({name:'Master 1 anim', colorTrigger: 'red', indent: 200, colorStart: '#75CC395'})
            .addTo(Scroll_formations_section);


        //Master 2
        new ScrollMagic.Scene({
            triggerElement: '.formation:nth-of-type(3)',
            duration:'33%',
            triggerHook:0.5
        })
            .setClassToggle('.formation:nth-of-type(3) .filter', 'activeScroll')//Addclass to .navbar
            .setTween(tl_writting_letters_formations_master2.play())
            .addIndicators({name:'Master 2 anim', colorTrigger: 'red', indent: 200, colorStart: '#75CC395'})
            .addTo(Scroll_formations_section);
    }














    /*var ScrollMenuBackgroundController = new ScrollMagic.Controller();
    //Show the background (black) of the main navigation
    var blackMenuScene = new ScrollMagic.Scene({
        triggerElement: 'section:nth-child(2)',
        triggerHook:0
    })
        .setClassToggle('.navbar', 'bg-black')//Addclass to .navbar
        .addIndicators({
            name:'black nav',
            colorTrigger: 'red',
            indent: 200,
            colorStart: '#75CC395'
        })
        .addTo(ScrollMenuBackgroundController);*/
});
