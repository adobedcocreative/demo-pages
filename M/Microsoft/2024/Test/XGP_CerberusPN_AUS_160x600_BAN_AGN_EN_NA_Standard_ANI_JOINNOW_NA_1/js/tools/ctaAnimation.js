// arrowCta animation
arrowCtaPlaying = 0;
mouseOverEnabled = false;
tlArrowCta = gsap.timeline();
tlArrowCta
    .set('#arrow', { x: 0 })
    .to('#arrow', { duration: 0.2, fill: "#FFFFFF", x: "+=10", ease: "power2.in", onStart: function () { arrowCtaPlaying = 1; } })
    .to('#arrow', { duration: 0.01, x: "-=20" })
    .to('#arrow', { duration: 0.4, x: "+=10", ease: "power2.Out" })

    .to('#bg_arrow', { duration: .8, x: "+=200", ease: "power2.inOut" }, "<-.2")
    .to('#txtCta', { duration: .8, color: "#FFFFFF", ease: "power2.inOut" }, "<")
    .to('#cta', {
        duration: .2, scale: 1.05, ease: "power2.inOut",
    }, "<")
    .add(() => {
        if (tlArrowCta !== undefined)
            tlArrowCta.pause();
        arrowCtaPlaying = 0;
        if (mOver == 0) {
            tlArrowCta.play();
        }

    }, "<.6")

    .to('#arrow', { duration: 0.2, fill: "#054B16", x: "+=10", ease: "power2.in" })
    .to('#arrow', { duration: 0.01, x: "-=20" })
    .to('#arrow', { duration: 0.4, x: 0, ease: "power2.Out" }, "<")

    .to('#bg_arrow', { duration: .8, x: "+=295", ease: "power2.inOut" }, "<-.2")
    .to('#cta', { duration: .2, scale: 1, ease: "power2.inOut" }, "<")
    .to('#txtCta', {
        duration: .8, color: "#054B16", ease: "power2.inOut",
        onComplete: function () { arrowCtaPlaying = 0; }
    }, "<")
    .set('#bg_arrow', { x: "-=475" })
    .pause();


function over() {
    if (mouseOverEnabled) {
        if (arrowCtaPlaying != 1) tlArrowCta.restart();
        mOver = 1;
    }
}

function out(e) {
    if (mouseOverEnabled) {
        mOver = 0;
        if (arrowCtaPlaying != 1) tlArrowCta.play();
    }
}

function checkClick(p) {
    window.open(eval("clickTag"));
}