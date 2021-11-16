/// interactivity functions

function navBehavior(nChoose,noAuto,label) {
    if(noAuto){
        exportRoot.AutoPlay.kill();
        exportRoot.noAuto = true;
    } else {
        exportRoot.noAuto = false;
    }
    if(exportRoot.navEnable == 1) {

        //reset nav
        for (i = 1; i <= exportRoot.nSlide; i++) {
            if (i != nChoose) gsap.to(exportRoot.mainMC.nav["dot_" + i], {scale: 1, alpha: 0.4});
        }
        //checking navigation

        if (nChoose >= exportRoot.nSlide) nChoose = nChoose - exportRoot.nSlide;
        if (nChoose < 1) nChoose = exportRoot.nSlide + nChoose;

        //setup nav status
        gsap.to(exportRoot.mainMC.nav["dot_" + nChoose], {scale: 1.6, alpha: 1});
        exportRoot.selectedSlide = nChoose;

        changeSlide();
    }
    if(noAuto !== undefined) {
        amoAd.onInteraction(label, exportRoot.selectedSlide - 1);
    }
}
function navColor(nColor) {
    var colors = [
        ["#505050", "rgba(0,0,0,0)"],
        ["#FFFFFF", "rgba(0,0,0,0.7)"]
    ];
    var navParts = [
        "arrow_up",
        "arrow_down",
        "dot_1",
        "dot_2",
        "dot_3",
        "dot_4"
    ];
    for (i=0; i<navParts.length; i++) {
        gsap.to(exportRoot.mainMC.nav[navParts[i]].children[0].graphics._fill,{duration:0.5, style: colors[nColor][0]});
        gsap.to(exportRoot.mainMC.nav[navParts[i]].shadow,{duration:0.5, color: colors[nColor][1]});
    }
}
function changeSlide() {
    var zoomFactor = 0.7;
    var cst = gsap.timeline();
    var yOffset = (exportRoot.height-exportRoot.height*zoomFactor)/2;
    var movement = -1*(exportRoot.height+exportRoot.slidesGap)*(exportRoot.selectedSlide-1);
    gsap.to([exportRoot.mainMC.cta, exportRoot.mainMC.txtCta], {alpha:0, duration:0.5})

    cst.to(exportRoot.mainMC,{duration:0.5, onStart: function() {
        fadeCopy(exportRoot.prevSlide);
        slideMaskAnimation(0,exportRoot.prevSlide);
    },
        onComplete: function () {
            exportRoot.videoState="reset";
        }
    })
        .to(document.getElementById("vid"+exportRoot.prevSlide),{duration:0.5, volume:0},"<")
        .to(exportRoot.mainMC.slides,{duration:0.5, overwrite:true, scale:zoomFactor,
            x:(exportRoot.width-exportRoot.width*zoomFactor)/2,
            y:yOffset, ease:"power2.inOut",
            onStart:navColor, onStartParams: [0],
            onComplete: function () {fadeCopy(exportRoot.prevSlide);}
        })
        .to(exportRoot.mainMC.slides.sub_slides,{duration:1, overwrite:true, y:exportRoot.slidePositions[exportRoot.selectedSlide], ease:"power2.inOut",
            onComplete: showLoading, onCompleteParams: [exportRoot.selectedSlide]
        },"<.2")
        .to(exportRoot.mainMC.slides,{duration:0.5, scale:1, x:0, y:0, ease:"power2.inOut",
            onStart:navColor, onStartParams: [1],
            //onComplete: showSelectedVideo, onCompleteParams: [exportRoot.selectedSlide]
        },"<.8")
        .to(exportRoot.mainMC.slides,{duration:0.1,
            onComplete: function () {
                slideMaskAnimation(1, exportRoot.selectedSlide);
                exportRoot.navEnable = 1;
            }
        }, "<.1");
}

function slideMaskAnimation(oC,slideN) {
    var centerFrame = 29;

    if(oC==1) {
        var selS = exportRoot.mainMC.slides.sub_slides["slide"+slideN];
        var cF = selS.currentFrame;

        if (cF < centerFrame) selS.gotoAndPlay(cF);
        if (cF > centerFrame) selS.gotoAndPlay(centerFrame-cF+centerFrame);
        if (cF == 0) selS.gotoAndPlay(1);
        gsap.to(exportRoot.mainMC.bg, {duration:2, alpha:0});
    }
    if(oC==0) {
        for(i=1; i<exportRoot.nSlide+1; i++) {
            var selS = exportRoot.mainMC.slides.sub_slides["slide"+i];
            var cF = exportRoot.mainMC.slides.sub_slides["slide"+i].currentFrame;

            if (cF < centerFrame) selS.gotoAndPlay(centerFrame - cF + centerFrame);
            if (cF > centerFrame) selS.gotoAndPlay(cF);
            if (cF == centerFrame) selS.gotoAndPlay(cF + 1);
            gsap.to(exportRoot.mainMC.bg, {duration:1, alpha:1, overwrite:true});
            //gsap.killTweensOf(exportRoot["tlSlide" + slideN]);

        }
    }
}


function showLoading(n) {
    //console.log(loadV.percentComplete1)
    //if(loadV["percentComplete"+n] == "100%") showSelectedVideo(n);
    //showSelectedVideo(exportRoot.selectedSlide)
    /*exportRoot.loadTl = gsap.timeline();
    exportRoot.loadTl.to(exportRoot,{duration:0.2, repeat:-1,
        onRepeat:function(){
            if (loadV["percentComplete"+n] == "100%") {
                showSelectedVideo(n);
                exportRoot.loadTl.kill();
                if((n+1)<=exportRoot.nSlide) xhr["xhrReq"+(n+1)].send();
            }
        }
    })*/
    showSelectedVideo(n)
}
function showSelectedVideo(nVid) {
    //reset video visibility
    fadeCopy(exportRoot.prevSlide);
    for (i=1; i<=exportRoot.nSlide; i++) {
        document.getElementById("vid"+i).style.opacity = 0;
        document.getElementById("vid"+i).currentTime = 0;
    }
    document.getElementById("vid"+exportRoot.prevSlide).pause();
    document.getElementById("vid"+nVid).volume = 1;
    exportRoot.videoState="playing";
    gsap.to(document.getElementById("vid"+nVid).style, {duration:1, opacity:1, onComplete:function (){
            document.getElementById("vid"+nVid).play();
            exportRoot["tlSlide"+nVid].tweenFromTo("start","fade2");
            if(
                (exportRoot.mainMC.mute_btn_blk.currentFrame==2)
            ) {
                document.getElementById("vid" + nVid).muted = false;
                document.getElementById("vid"+exportRoot.prevSlide).muted = true;
            }
            exportRoot.prevSlide = nVid;
        }});

    /*    var queue = new createjs.LoadQueue(true);
        queue.loadFile({src:"./video/TonysChoco_300x250.mp4", type:"video"});
        queue.on("complete", function() {

        }, this);*/
}

function fadeCopy(n) {
    currentPosition = exportRoot["tlSlide"+n].currentLabel();

    if(currentPosition=="start" || currentPosition=="fade1" || currentPosition=="end") {
        exportRoot["tlSlide" + n].tweenFromTo("fade1_mid", "fade1_end");
    }
    else if(currentPosition=="fade1_mid" || currentPosition=="fade1_end") {
        exportRoot["tlSlide" + n].tweenFromTo("fade1_mid","fade1_end");
        //exportRoot.ctaAnim.tweenFromTo("mid","end");
    }
    else if(currentPosition=="start2" || currentPosition=="fade2") {
        exportRoot["tlSlide" + n].tweenFromTo("fade2", "end");
        //exportRoot.ctaAnim.tweenFromTo("mid","end",0.5);
    }
}