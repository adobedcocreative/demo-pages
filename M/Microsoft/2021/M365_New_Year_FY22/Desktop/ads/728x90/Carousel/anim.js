function frame0Anim() {
	exportRoot.mainMC.frontRibbon.cache(-114,-32,375,104,2);
exportRoot.mainMC.backRibbon.cache(-221,-96,464,111,2);
    var mc = exportRoot.mainMC;
    exportRoot.replayAnim = "inProgress";

    exportRoot.runBanner = function() {

        //hide all the headline
        for(let c=1; c<=exportRoot.nSlide; c++) {
            gsap.set(exportRoot["headline"+c],{alpha:0,
                x:(c==1)? 478 : exportRoot.width
            });
        }

        mc.nav_l.alpha = 0;

        exportRoot.finalCopyPositionY = [];
        for(let c=1; c<=exportRoot.nSlide; c++) {
            let temp = [];
            for (let i = 0; i < exportRoot["headline"+c].length; i++) {
                temp.push(exportRoot["headline"+c][i].y);
            }
            exportRoot.finalCopyPositionY.push(temp);
        }

        this.tl1 = gsap.timeline();

        this.tl1.from(mc.slides.sub_slides.slide1,{duration: 3, scale:0.5, ease:Power2.easeOut})
            .from(exportRoot.headline1,{duration:1, y: "+=50", stagger: 0.1, ease:Power4.easeOut}, "<1")
            .to(exportRoot.headline1,{duration:1, alpha:1, stagger: 0.1, ease:Power4.easeOut, onComplete:function (){ exportRoot.tlAutoplay.play(); }}, "<")

        exportRoot.tl1.pause();

        mc.logo_intro.gotoAndPlay(1);


        // AUTOPLAY
        this.tlAutoplay = gsap.timeline();

        this.tlAutoplay.to(mc,{duration:2.5, repeat:4, delay:2,
            onRepeat: function(){
                navBehavior(exportRoot.selectedSlide + 1,0,1);
            },
            onComplete: function () {
                navBehavior(1,1,0);
            }
        });
        this.tlAutoplay.pause();
    }
}
