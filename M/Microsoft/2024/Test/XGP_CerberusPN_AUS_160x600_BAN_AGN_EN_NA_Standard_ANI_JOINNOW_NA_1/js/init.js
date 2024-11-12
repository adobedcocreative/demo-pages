let bannerSize, isReplay = false, loadBody, loadFont = false, loadVideo = false, loadedVideos = 0, isHover = false;
const vid1 = $("#vid1").get(0);
const vid2 = $("#vid2").get(0);

setSize('#outline, #aria-text, #vid1,#vid2', 1);
loadingFont();
showCopy(1);

loadingVideo(vid1, videoSrc[0]);

//check loading
function loaded(type) {
    if (type === 'font') loadFont = true;
    if (type === 'body') loadBody = true
    if (type === 'video1') {
        loadingVideo(vid2, videoSrc[1]);
    }
    if (type === 'video2') loadVideo = true;

    if (loadFont && loadBody && loadVideo) runBanner();
}

//////// interaction with mouse //////////////////////////////////////////////////////////////////////
$('#outline')
.on('mouseenter', function () {
    mOver = 1;
    if (arrowCtaPlaying !== 1) tlArrowCta.restart();
    if (isLoadedVid2 == true) {
        tlZoom.play();
        isHover = true;

        const vid2 = document.getElementById('vid2');
        if (vid2) {
            vid2.loop = true;
            vid2.play();
        }
    }
})
    .on("mouseleave", function (e) {
        mOver = 0;
        if (arrowCtaPlaying != 1) tlArrowCta.play();

        if (isLoadedVid2 == true) {
            tlZoom.reverse();
        }
    })
    .on('click', function () {
        window.open(clickTag);
    });

$('#rHit')
    .on('mouseover', function () {
        if (isReplay === true)
            $('#rHit').addClass("solid");
    })
    .on('mouseout', function () {
        $('#rHit').removeClass("solid");
    })
    .on('click', function () {
        if (isReplay === true)
            replay();
    });
$('#aria-button').on('click', function () {
    window.open(clickTag);
});
///////////////////////////////////////////////////////////////////////////////////////////////////

function replay() {
    isReplay = isHover = false;
    $('#rHit').removeClass("solid");

    gsap.to(vid2, .2, { alpha: 0 });
    vid2.currentTime = 0;
    vid2.pause();
    isLoadedVid2 = false;

    vid1.style.visibility = "visible";
    vid1.currentTime = 0;
    vid1.play();

    tl1.restart();
}