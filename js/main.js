/*(function ($) {
    var element = $('.losange');

    element.on('click', function(event) {
        element.css('transform','scale(1)');
        TweenMax.to($(this), 0.2, {scale:1.3});
    })
})(jQuery);*/

jQuery(document).ready(function( $ ) {

    /*
    * ANIMATION WELCOME SVG
    */

    //Animation idee
    var idee = $('#idee'),
        tete_idee = $('#tete_idee'),
        ampoule = $('#ampoule_idee'),
        tung_al = $('#tung_al_idee'),
        tung_et = $('#tung_et_idee'),
        eteinte = $('#eteinte_idee'),
        allumee = $('#allumee_idee'),
        bras_droit_idee = $('#avant-bras_droit'),
        bras_gauche_idee = $('#avant-bras_gauche_idee');

    var tl_idee = new TimelineMax;


    tl_idee.to(tete_idee, 0.5, {rotation:30, transformOrigin:"90% 100%"})
        .to(bras_droit_idee, 0.3, {rotation:70, transformOrigin:"15% 90%"},0.5)
        .to(bras_gauche_idee, 0.3, {rotation:120, transformOrigin:"90% 30%"},0.5)
        .set(tung_al, {className:"+=show"},0.7)
        .set(tung_et, {className:"+=hide"},0.7)
        .set(eteinte, {className:"+=hide"},0.7)
        .set(allumee, {className:"+=show"},0.7)
        .fromTo(ampoule, 0.15, {rotation:-10, transformOrigin:"50%, 50%"}, {rotation:10, transformOrigin:"50%, 50%", repeat:-1, ease: Power0.easeNone, yoyo:true});

    /*idee.hover(function()
    {
        tl_idee.restart();
    }, function(){
    });*/

    //animation reunion
    var reunion = $('#reunion'),
        bras_reunion = $('#avant-bras_gauche_reunion'),
        ar_bras_reunion = $('#arriere-bras_gauche_reunion'),
        ombre = $('#ombre_reunion'),
        feuille_diagramme = $('#feuille_diagramme_reunion'),
        feuille_maquette = $('#feuille_maquette_reunion');

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

    //animation travail
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

    //animation deploiement
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

    var tl_depl = new TimelineMax({repeat:-1, repeatDelay:2});

    tl_depl.to(tetes_levees, 0, {opacity:0}, -1)
        .from([fleche1, fleche2, fleche3], 2, {scale: 4, y:-400},1)
        .to(tetes_levees, 0, {opacity:1}, 3.5)
        //.to([tete_pere, tete_mere, tete_fils, tete_fille1, tete_fille2], 0, {opacity:0},3.5)
        .to([bouche_pere, bouche_mere, bouche_fils, bouche_fille1, bouche_fille2], 0.5, {y:5}, 4);


    //fonctions pour gérer le passage entre les animations
    var active ="idee";
    var animations = $('#animations_home'),
        animation = $('#animations_home div svg');

    var slider_texts = $('#text-slider-container'),
        slider_text = $('#svg-slider-texte .text-slider');

    function idee_open(){
        var timeLine_svg_idee_animation = new TimelineMax;
        var timeLine_text_slider_idee_animation = new TimelineMax;

        timeLine_svg_idee_animation.to(animation, 0.2, {scale:0.8, transformOrigin:"50% 50%"})
            .to(animations, 0.5, {x:"0%", ease:Power1.easeInOut})
            .add(function(){restartAndStopAnimations()})
            .to(animation, 0.2, {scale:1, transformOrigin:"50% 50%"})
            .add(tl_idee.play(),1.5);

        timeLine_text_slider_idee_animation.to(slider_text, 0.2, {scale:0.8, transformOrigin:"50% 50%"})
            .to(slider_texts, 0.5, {x:"0%", ease:Power1.easeInOut})
            .add(function(){restartAndStopAnimations()})
            .to(slider_text, 0.2, {scale:1, transformOrigin:"50% 50%"})
            .add(tl_idee.play(),1.5);

        active = "idee";
        selectState();
    }

    function reunion_open(){
        var timeLine_svg_reunion_animation = new TimelineMax;
        var timeLine_text_slider_reunion_animation = new TimelineMax;

        timeLine_svg_reunion_animation.to(animation, 0.2, {scale:0.8, transformOrigin:"50% 50%"})
            .to(animations, 0.5, {x:"-100%", ease:Power1.easeInOut})
            .add(function(){restartAndStopAnimations()})
            .to(animation, 0.2, {scale:1, transformOrigin:"50% 50%"})
            .add(tl_reunion.play());

        timeLine_text_slider_reunion_animation.to(slider_text, 0.2, {scale:0.8, transformOrigin:"50% 50%"})
            .to(slider_texts, 0.5, {x:"-100%", ease:Power1.easeInOut})
            .add(function(){restartAndStopAnimations()})
            .to(slider_text, 0.2, {scale:1, transformOrigin:"50% 50%"})
            .add(tl_idee.play(),1.5);

        active="reunion";
        selectState();
    }

    function travail_open(){
        var timeLine_svg_travail_animation = new TimelineMax;
        var timeLine_text_slider_travail_animation = new TimelineMax;

        timeLine_svg_travail_animation.to(animation, 0.2, {scale:0.8, transformOrigin:"50% 50%"})
            .to(animations, 0.5, {x:"-200%", ease:Power1.easeInOut})
            .add(function(){restartAndStopAnimations()})
            .to(animation, 0.2, {scale:1, transformOrigin:"50% 50%"})
            .add(tl_travail.play());

        timeLine_text_slider_travail_animation.to(slider_text, 0.2, {scale:0.8, transformOrigin:"50% 50%"})
            .to(slider_texts, 0.5, {x:"-200%", ease:Power1.easeInOut})
            .add(function(){restartAndStopAnimations()})
            .to(slider_text, 0.2, {scale:1, transformOrigin:"50% 50%"})
            .add(tl_idee.play(),1.5);

        active="travail";
        selectState();
    }

    function deploiement_open(){
        var timeLine_svg_deploiement_animation = new TimelineMax;
        var timeLine_text_slider_deploiement_animation = new TimelineMax;

        timeLine_svg_deploiement_animation.to(animation, 0.2, {scale:0.8, transformOrigin:"50% 50%"})
            .to(animations, 0.5, {x:"-300%", ease:Power1.easeInOut})
            .add(function(){restartAndStopAnimations()})
            .to(animation, 0.2, {scale:1, transformOrigin:"50% 50%"})
            .add(tl_depl.play());

        timeLine_text_slider_deploiement_animation.to(slider_text, 0.2, {scale:0.8, transformOrigin:"50% 50%"})
            .to(slider_texts, 0.5, {x:"-300%", ease:Power1.easeInOut})
            .add(function(){restartAndStopAnimations()})
            .to(slider_text, 0.2, {scale:1, transformOrigin:"50% 50%"})
            .add(tl_idee.play(),1.5);
        active="deploiement";
        selectState();
    }

    $('#svg-slider-nav #sel_idee').click(idee_open);
    //idee.click(idee_open);
    $('#svg-slider-nav #sel_reunion').click(reunion_open);
    //reunion.click(reunion_open);
    $('#svg-slider-nav #sel_travail').click(travail_open);
    //travail.click(travail_open);
    $('#svg-slider-nav #sel_deploiement').click(deploiement_open);
    //deploiement.click(deploiement_open);

    $('#svg-slider-nav #prev').click(precedent);
    $('#svg-slider-nav #next').click(suivant);

    function suivant(){
        if(active=="idee"){
            reunion_open();
        }else if (active=="reunion") {
            travail_open();
        }else if (active=="travail") {
            deploiement_open();
        }
    }

    function precedent(){
        if(active=="reunion"){
            idee_open();
        }else if (active=="travail") {
            reunion_open();
        }else if (active=="deploiement") {
            travail_open();
        }
    }

    function restartAndStopAnimations(){
        if(active != "idee"){tl_idee.restart();
            tl_idee.pause();}
        if(active != "reunion"){tl_reunion.restart();
            tl_reunion.pause();}
        if(active != "travail"){tl_travail.restart();
            tl_travail.pause();}
        if(active != "deploiement"){tl_depl.restart();
            tl_depl.pause();}
    }

    function selectState(){
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

    /*
    * MENU ANIMATIONS
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

    /*
     * SCROLL EVENTS
     * */

    //Init ScrollMagic
    var controller = new ScrollMagic.Controller();
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
        .addTo(controller);

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
            indent: 400,
            colorStart: '#75CC395'
        })
        .addTo(controller);

});
