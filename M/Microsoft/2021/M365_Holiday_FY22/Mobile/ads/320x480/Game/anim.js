//JS file for animations
function animFrame0() {

    var mc = exportRoot.mainMC;
    exportRoot.replayAnim = "inProgress";


    exportRoot.runBanner = function() {


        this.tl1 = gsap.timeline();
        this.tl2 = gsap.timeline();
        mc.score_MC.alpha = 0;

        checkStart();

//		// 1st frame
        if (numberOfGames==0) {
            this.tl1.from(exportRoot.headline1,{duration:0.5, y:"+=30", alpha: 0, ease:Power2.easeInOut, stagger: 0.1})
                .from(mc.gameMain, {duration: .8, alpha: 0, ease:Power2.easeInOut}, "<")
                .from([mc.txtLearn,mc.cta1], {duration: 0.5, alpha:0, y:"+=50", ease:Power2.easeInOut}, "<.5")
                .from([mc.playBtn, mc.playTxt], {duration: 1, alpha:0, ease:Power4.easeInOut,
                    onComplete: function(){exportRoot.tl1.pause(); wiggleBag(mc.gameMain,1);}
                }, "<.5")
        }



//		//start game
        exportRoot.tl2.to([mc.txtLearn,mc.cta1], {duration:0.2, alpha:0,
            onStart: function() {
                mc.gameMain.gotoAndPlay(2);
                mc.playBtn.alpha=0;
                mc.playTxt.alpha=0;
            },
            onComplete: function(){wiggleBag(mc.gameMain,0);}})
            .from(mc.trackObject, {duration:0.5, alpha:0, ease:Power2.easeInOut}, "<")
            .to(mc.score_MC,{duration:1, alpha:100, ease:Power4.easeInOut,
                onComplete: function() {
                    exportRoot.tl2.pause();
                    drag(mc.gameMain, 115, 205, 320, 480, 366, 346);
                }}, "<.3")
            .to([mc.playBtn, mc.playTxt], { duration: 0.2, alpha: 0},"<.3")



        var ff = mc.finalFrame;
        var lastBoxPos = 0;

        ff.pptM.alpha = 0;
        ff.ppt.alpha = 0;

//		//final frame
        exportRoot.tl2.to(exportRoot.headline1,{duration:0.5, alpha: 0, ease:Power4.easeInOut})
            .to(mc.score_MC, {duration:0.5, alpha: 0, ease:Power4.easeInOut}, "<")
            .to([mc.icons, mc.trackObject],{duration:0.8, alpha: 0, ease:Power4.easeInOut,
                onComplete:function() {
                    stopGame(mc.gameMain);
                    lastBoxPos = exportRoot.boxFinalX;
                    var pptAnim = gsap.timeline({defaults: {ease:Power4.easeOut}});
                    //ppt animation out from the box
                    pptAnim.to(mc.gameMain, 1.5, {y:"+=40"})
                        .to(ff.pptM, 0.3, {alpha:1},"<")
                        .from(ff.pptM, 1.2, {y:"+=80"}, "<")
                        .from(ff.pptM, 1.8, {x: lastBoxPos}, "<.3")
                        .to(mc.gameMain, .5, {alpha:0},"<.2")
                        .from(ff.ppt, 1.2, {x:"+=100"}, "<.2")
                        .to(ff.ppt, 1.2, {alpha:1}, "<")
                }
            }, "+=0") //other animations from here
            .from([ff.sparkle01, ff.sparkle02, ff.sparkle03], .4, { alpha: 0, x: "+=50", ease:Power4.easeOut, stagger: 0.1},"+=.5")
            .from(ff.excel, .8, { alpha: 0, x: "+=100",	ease:Power4.easeOut}, "<.1")
            .from(ff.word, .8, { alpha: 0, x: "-=100",	ease:Power4.easeOut}, "<.1")
            .from(ff.onedrive, .8, { alpha: 0, x: "+=100",	ease:Power4.easeOut}, "<.1")
            .from([mc.txtCta, mc.txtPlayAgain, mc.cta], 0.8, { alpha: 0, y: "+=80",	ease:Power4.easeOut}, "<")
            .from([ff.sparkle06, ff.sparkle05, ff.sparkle04, ff.tree], .8, { alpha: 0, x: "-=50",	ease:Power4.easeOut, stagger: 0.1}, "<.1")

        exportRoot.tl2.from(exportRoot.headline2,{duration:0.8, y: "+=30", alpha: 0, stagger: 0.1, ease:Power2.easeOut,
            onStart:function(){
                exportRoot.isClick = true;
                exportRoot.isReplay = true;
                exportRoot.sparkleAnimVis = 1;
                exportRoot.checkAnimSparkle();
            }
        }, "<+.2");

        exportRoot.tl2.pause();
    }
    //////////////////////


    // sparkles random animation
    exportRoot.sparkleTl = gsap.timeline();

    exportRoot.checkAnimSparkle = function (){
        //console.log(exportRoot.sparkleAnimVis);
        if (exportRoot.sparkleAnimVis == 1) exportRoot.animSparkles();
        else {
            exportRoot.sparkleTl.killTweensOf(mc.finalFrame.sparkle01)
                .killTweensOf(mc.finalFrame.sparkle02)
                .killTweensOf(mc.finalFrame.sparkle03);
        }
    }
    exportRoot.animSparkles = function() {
        var ff = mc.finalFrame;
        if (exportRoot.sparkleAnimVis == 0) exportRoot.checkAnimSparkle();
        else
        {
            exportRoot.sparkleTl = gsap.timeline({
                defaults: {
                    duration: gsap.utils.random(0.1, .4),
                    ease: Power2.easeInOut,
                    alpha: .5,
                    repeatRefresh: true,
                }
            });
            exportRoot.sparkleTl.to([ff.sparkle01, ff.sparkle02, ff.sparkle03],
                {
                    stagger: {
                        from: "random",
                        amount: gsap.utils.random(0.5, 3),
                        repeat: 1,
                        yoyo: true
                    },
                    onComplete: function () {
                        gsap.to(ff, {
                            duration: gsap.utils.random(0.6, 2), onComplete: function () {
                                exportRoot.checkAnimSparkle()
                            }
                        })
                    }
                }
            );
        }
    }
}
