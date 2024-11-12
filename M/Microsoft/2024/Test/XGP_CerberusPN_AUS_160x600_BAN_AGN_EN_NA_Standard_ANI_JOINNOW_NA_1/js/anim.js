let checkTime, tl1, tlZoom;
let isLoadedVid2 = false;
gsap.ticker.add(FFAnimation);

function FFAnimation() {
    if (vid2.currentTime > 5 && isHover == true) { vid2.currentTime = 0; vid2.play(); }
    if (vid1.currentTime > 8.6 && isLoadedVid2 == false) {
        gsap.to(vid2, { alpha: 1 });
        vid2.currentTime = 0.3;
        vid2.play();
        isLoadedVid2 = true;
    }
}

function runBanner() {
    $('#init').css('visibility', 'hidden');
    tl1 = 'undefined';
    tlZoom = 'undefined';
    viewTab(vid1);
    vid1.style.visibility = "visible";
    vid1.currentTime = 0;

    createAnimation({});
    vid1.play();
}

function createAnimation() {
    tl1 = gsap.timeline()
        .set('#disclaimerintro', { alpha: 1 })
        .set('#introesbr', { alpha: 1 })
        .set('#cta', { alpha: 0, x: "+=50"})
        .set('#efg', { alpha: 0 })
        .set('#headline1', { alpha: 0, x: "+=50" }, "<")
        .set('#cod_logo', { alpha: 0, x: "+=50" }, "<")
        .set('#green_shape', { alpha: 0, x: "+=50" }, "<")

        .to('#mg', { duration: 0.4, z: 1, alpha: 1, ease: "power2.out" }, "<1.3")
        .to('#intro', { duration: 0.01, z: 1, x: "0", alpha: 0, ease: "power2.out" }, "<0.2")
        .to('#disclaimerintro', { duration: 0.1, z: 1, x: "0", alpha: 0, ease: "power2.out" }, "<")
        .to('#introesbr', { duration: 0.1, z: 1, x: "0", alpha: 0, ease: "power2.out" }, "<")

        .to('#cod_logo', { duration: 0.8, z: 1, alpha: 1, x: "0", ease: "power2.out" }, "<.2")
        .to('#headline1', { duration: 0.8, z: 1, x: "0", alpha: 1, ease: "power2.out" }, "<0.3")
        .to('#green_shape', { duration: 0.6, z: 1, alpha: 1, x: "0", ease: "power1.out" }, "<0.5")

	    .to("#cta", {
            duration: 0.5, alpha: 1, x: "0", z: 1, ease: "power1.out", onComplete: () => {
                mouseOverEnabled = true;
            }
        }, "<0.3")

        // .to('#esrbtxt', { duration: 0.8, z: 1, x: "0", alpha: 1, ease: "power1.out" }, "<0.3")
        .to('#disclaimer', { duration: 1, z: 1, x: "0", alpha: 1, ease: "power1.out" }, "<0.5")

        .to('#efg', { duration: 0.8, z: 1, x: "0", alpha: 1, ease: "power1.out" }, "<4.7")
        .to('#mg', { duration: 0.8, z: 1, x: "0", alpha: 1, ease: "power1.out" }, "<")


        .to('#rHit', 0.7, {
            alpha: 0.5, ease: "power2.out",
            onComplete: function () {
                isReplay = true;
                out();
            }
        }, "<")

    tlZoom = gsap.timeline()
        .to(vid2, {duration: 1, z: 1, scale: 1.25, y: "+=20",  ease: "power1.inOut"})

        .pause();
}

document.addEventListener('DOMContentLoaded', function () {
    const vid1 = document.getElementById('vid1');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                vid1.play();
                observer.unobserve(vid1);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(vid1);
});