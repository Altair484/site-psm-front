/* ==========================================================================
 PAGE MASTER 1 - SECTION VIDEO
 ========================================================================== */

/**
 * Todo: add comments
 * @type {Element}
 */
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'NM2wtte1JRE',
        width: "100%",
        playerVars:{
            "showinfo":0,
            "rel":0,
            "controls":0,
            "autoplay":1,
            "loop":1,
            "mute":1,
            "playinline":0,
            "wmode":"opaque"
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
    player.mute();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}

document.addEventListener("fullscreenchange", onFullScreenChange, false);
document.addEventListener("webkitfullscreenchange", onFullScreenChange, false);
document.addEventListener("mozfullscreenchange", onFullScreenChange, false);

function onFullScreenChange() {
    var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
    if(fullscreenElement == null){
        player.mute();
    }else {
        player.seekTo(0);
        player.unMute();
    }
}


jQuery(document).ready(function( $ ) {

    /**
     * Todo: add comments
     * @type {e.Controller}
     */
    var ScrollVideoController = new ScrollMagic.Controller();
    //Show the background (black) of the main navigation
    new ScrollMagic.Scene({triggerElement: '#masters', triggerHook: 0.5})
        .setClassToggle('.video-background', 'miniature')
        .addIndicators({name: 'miniature video', colorTrigger: 'red', indent: 700, colorStart: 'pink'})
        .addTo(ScrollVideoController);

    /**
     * Todo: add comments
     *
     */
    $(function($) {
        // var master_1_button = $("#toggle-masters").find(".row").find(".choose-training:first-of-type");
        // var master_2_button = $("#toggle-masters").find(".choose-training:nth-of-type(2)");

        var choose_training = $("#toggle-masters").find(".row").find(".choose-training");

        var master_1_content = $("#masters").find("#master-1"),
            master_2_content = $("#masters").find("#master-2");

        $(choose_training).click(function (e) {

            if ($(this).index() == 0) {
                master_1_content.addClass("selected");
                master_2_content.removeClass("selected");

                $(this).addClass("active");
                $(this).next().removeClass("active");
            } else {
                master_2_content.addClass("selected");
                master_1_content.removeClass("selected");

                $(this).addClass("active");
                $(this).prev().removeClass("active");
            }
        });
    });

    /**
     * Todo: add comments
     *
     */

    $(function($){
        var contents = $('.accordeon-content');
        var titles = $('.accordeon-title');
        titles.on('click',function(){
            var title = $(this);
            contents.filter(':visible').slideUp(function(){
                $(this).prev('.accordeon-title').removeClass('is-opened');
            });

            var content = title.next('.accordeon-content');

            if (!content.is(':visible')) {
                content.slideDown(function(){title.addClass('is-opened')});
            }
        });
    });

    /**
     * Todo: add comments
     *
     */

    var accordeons = $('.accordeon'),
        losanges = $('.losange');
        accordeons.addClass('hide')
        accordeons.first().removeClass('hide').addClass('show');
        losanges.on('click', function(){
            //alert($(this).index());
            if ($(this).index() != 1){
                accordeons.addClass('hide');
            }
            if ($(this).index() == 0){
                accordeons.removeClass('show');
                accordeons.first().removeClass('hide').addClass('show');
            } else  if ($(this).index() == 3){
                accordeons.removeClass('show');
                accordeons.eq(1).removeClass('hide').addClass('show');
            } else  if ($(this).index() == 2){
                accordeons.removeClass('show');
                accordeons.eq(2).removeClass('hide').addClass('show');
            }

        });

},jQuery);