//JS file

function frame0Anim() {
    var mc = exportRoot.mainMC;
    exportRoot.replayAnim = "inProgress";
    mc.cta.alpha=0;
    mc.txtCta.alpha=0;


    exportRoot.runBanner = function() {

        mc.mute_btn_wht.alpha = 0;
        mc.mute_btn_blk.alpha = 0;
        mc.loading_bar.alpha = 0;
        exportRoot.setHeadlineAlpha();
        for(c=1; c<=exportRoot.nSlide; c++) {
            exportRoot.videoAnim(c);
        }

        this.tlAnim = gsap.timeline();
        this.tlAnim.pause();
        mc.logo_intro.gotoAndPlay(1);

        this.tlAnim.from(exportRoot.headline1,{
            duration:0.8,
            y: "+=30", alpha: 0,
            stagger: 0.05,
            ease:Power3.easeOut,
        });

        this.tlAnim.to(exportRoot.headline1,{
            duration:0.5,
            alpha: 0,
            ease:Power3.easeIn
        }, "+=0.5")
            .set(mc.slides, {scale:0.7, x:(exportRoot.width-exportRoot.width*0.7)/2, y:(exportRoot.height-exportRoot.height*0.7)/2})
            .from(mc.slides, {duration: 1, alpha:0}, "<0.2")
            .from(mc.nav, {duration:1, alpha:0}, "<")
            .from(mc.slides.sub_slides, {duration:3, y:exportRoot.slidePositions[4]-100}, "<")
             .to([mc.nav.dot_4, mc.nav.dot_3, mc.nav.dot_2], {duration:0.375, scale:1.6, alpha:1,
                stagger:{
                    each: 0.375,
                    repeat:1,
                    yoyo:true
            }}, "<")
            .to(mc.nav.dot_1, {duration: 0.375, scale:1.6, alpha:1},"<1.5")
            .to(mc.slides, {duration:0.5, scale:1, x:0, y:0, ease:"power2.inOut",
                onStart:navColor, onStartParams: [1],
                onComplete: function () {
                    exportRoot.navEnable = 1;
                }
            })
            .to(mc.slides,{duration:0.1, onComplete: function () {
                    slideMaskAnimation(1,exportRoot.selectedSlide);
                    showLoading(1);

                }}, "<.1")

        this.tlAnim.to(mc.mute_btn_blk,{duration: 0.6, alpha: 1, ease:Power3.easeInOut}, "+=1");

        //this.tlAnim.from(mc.mute_btn_wht,{duration: 0.6, alpha: 0, ease:Power3.easeInOut}, "<");



///////// Autoplay        ///////////////
        exportRoot.AutoPlay = gsap.timeline({defaults:{duration:17}});
        exportRoot.AutoPlay.to(mc,{onComplete: function() {navBehavior(2)}},"+=6")
                .to(mc,{onComplete: function() {navBehavior(3)}})
                .to(mc,{onComplete: function() {
                    navBehavior(4);
                    exportRoot.AutoPlay.pause();
                    exportRoot.autoplayDone = true;
                }})

    }


    exportRoot.setHeadlineAlpha = function () {
        for(hg=0; hg<exportRoot.slidesCopyArray.length; hg++) {
            for(h=0; h<exportRoot.slidesCopyArray[hg].length; h++) {
                gsap.set(exportRoot["headline"+exportRoot.slidesCopyArray[hg][h]],{alpha:0})
            }
        }
    }

     exportRoot.videoAnim = function(nSlide) {

         for(h=0; h<exportRoot.slidesCopyArray[nSlide-1].length; h++) {
             gsap.set(exportRoot["headline"+exportRoot.slidesCopyArray[nSlide-1][h]],{alpha:1})
         }

        exportRoot["tlSlide"+nSlide] = gsap.timeline();

        exportRoot["tlSlide"+nSlide].add("start"); /////////////////////////////////
        exportRoot["tlSlide"+nSlide].from(exportRoot["headline"+exportRoot.slidesCopyArray[nSlide-1][0]],{
            duration:0.8,
            y: "+=30", alpha: 0,
            stagger: 0.05,
            ease:Power3.easeOut,
        }, "+=0.5")
            .from(exportRoot["headline"+exportRoot.slidesCopyArray[nSlide-1][1]],{
                duration:0.8,
                y: "+=30", alpha: 0,
                ease:Power3.easeOut,
            }, "<+.3")
            .to(mc,{duration:2.9});

        exportRoot["tlSlide"+nSlide].add("fade1"); //////////////////////////////

        exportRoot["tlSlide"+nSlide].to(exportRoot["headline"+exportRoot.slidesCopyArray[nSlide-1][0]],{
            duration:0.5,
            alpha: 0,
            ease:Power3.easeIn,
        })
            .to(exportRoot["headline"+exportRoot.slidesCopyArray[nSlide-1][1]],{
                duration:0.5,
                alpha: 0,
                ease:Power3.easeIn
            }, "<");

        exportRoot["tlSlide"+nSlide].add("fade1_mid")
            .to(mc,{duration:1})
            .add("fade1_end");


        exportRoot["tlSlide"+nSlide].add("start2"); ///////////////////////////

        exportRoot["tlSlide"+nSlide].from(exportRoot["headline"+exportRoot.slidesCopyArray[nSlide-1][2]],{
            duration:0.8,
            x: "-=100", alpha: 0,
            stagger: 0.05,
            ease:Power3.easeOut
        })
            .from(exportRoot["headline"+exportRoot.slidesCopyArray[nSlide-1][3]],{
                duration:0.8,
                x: "-=100", alpha: 0,
                stagger: 0.05,
                ease:Power3.easeOut,
                onStart: function () {
                    //exportRoot.ctaAnim.tweenFromTo("start","mid",0.5);
                    mc.cta.alpha = 1;
                    mc.txtCta.alpha = 1;
                    gsap.from([mc.cta,mc.txtCta], { x: "-=150", alpha:0, overwrite:true})
                },
                onComplete:function(){
                    exportRoot.videoState="reset";
                }
            },"<")
            //.from([mc.cta, mc.txtCta], { duration: 0.6, x: "-=150", overwrite:"auto", alpha:1}, "<+.5");

        exportRoot["tlSlide"+nSlide].add("fade2");

        exportRoot["tlSlide"+nSlide].to(exportRoot["headline"+exportRoot.slidesCopyArray[nSlide-1][2]],{
            duration:0.5,
            alpha: 0,
            ease:Power3.easeOut,
            onStart: function () {
                //exportRoot.ctaAnim.tweenFromTo("mid","end",0.5);
            }
        })
            .to(exportRoot["headline"+exportRoot.slidesCopyArray[nSlide-1][3]],{
                duration:0.5,
                alpha: 0,
                ease:Power3.easeOut,
            },"<")
            //.to([mc.cta, mc.txtCta], { duration: 0.5, alpha:0}, "<");

        exportRoot["tlSlide"+nSlide].add("end");
         exportRoot["tlSlide"+nSlide].pause();

    }
}