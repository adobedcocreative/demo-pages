//JS file

// animation game file

/*
* check start for play again
* start/stop game
* autoplay the game
 */

function checkStart() {
    exportRoot.gameStarted = 0;
    var mc = exportRoot.mainMC;
    this.tlIntro = gsap.timeline();
    this.tlIntro.to(mc.bg_fade, {duration:0.2, alpha:0, ease:Power4.easeInOut});

    if (numberOfGames==0) {
        exportRoot.tl1.play();
    } else {
        exportRoot.sparkleAnimVis = 0;
        mc.txtLearn.alpha = 0;
        mc.cta1.alpha = 0;
        mc.playBtn.alpha = 0;
        mc.playTxt.alpha = 0;
        exportRoot.animSparkles(0);
        this.tlIntro.from(mc.gameMain, {duration: .5, alpha: 0, ease:Power2.easeInOut,
            onComplete: function () {exportRoot.tl2.play();}
        });
    }
}

function startGame() {
    sortAutoPlay(0);
    exportRoot.tl2.play();
    if (typeof exportRoot.tlwiggle!=='undefined')
        exportRoot.tlwiggle.kill();
    document.getElementById("rHit").style.visibility='visible';
}
function stopGame(myObject) {
    exportRoot.boxFinalX = myObject.x;
    exportRoot.gameStarted = 0;
    exportRoot.tlIcons.kill();
    createjs.Ticker.off("tick", exportRoot.ticker);
    createjs.Touch.disable(stage);
    exportRoot.mainMC.trackObject.removeEventListener("pressmove", function(){});
}
function sortAutoPlay(startStop){
    if(startStop==1) {
        exportRoot.autoplay = 0;
        autoPlayPause = setInterval(function () {
            startGame();
            exportRoot.autoplay = 1;
        }, 7000);
    } else {
        if (typeof autoPlayPause !== 'undefined')
            clearInterval(autoPlayPause);
    }
}

//////////////////
function wiggleBag(myObject, startStop) {
    exportRoot.tlwiggle = gsap.timeline();
    if(startStop && exportRoot.gameStarted == 0) {
        sortAutoPlay(1);
        exportRoot.tlwiggle.to(myObject, {duration: 0.2, x: "-=5", ease: "sine.inOut"})
            .to(myObject, {duration: 0.4, x: "+=10", ease: "sine.inOut"})
            .to(myObject, {duration: 0.4, x: "-=10", ease: "sine.inOut"})
            .to(myObject, {duration: 0.4, x: "+=10", ease: "sine.inOut"})
            .to(myObject, {duration: 0.4, x: "-=5", ease: "sine.out"})
            .to(myObject, {duration: 3,
                onComplete: function () {
                    exportRoot.tlwiggle.restart();
                }
            })
    }
    else {
        exportRoot.tlwiggle.kill();
        exportRoot.gameStarted = 1;
    }


}


/*  drag function for the bag and icons generator
*   myObject        =>  the bag
*   tWidth, tHeight =>  bag dimensions
*   eWidth, eHeight =>  banner dimensions
*   tlimitY         =>  y of the icons don't follow
*   tbagY           =>  y when the icons go inside the bag
*/
function drag(myObject, tWidth, tHeight, eWidth, eHeight, tlimitY, tbagY) {

    //settings
    var nGroupSound = 3; // the number of the sounds that I have
    var mc = exportRoot.mainMC;
    myObject.width = tWidth;
    myObject.height = tHeight;
    exportRoot.width = eWidth;
    exportRoot.height = eHeight;
    var limitY = tlimitY;
    var bagY = tbagY;
    var fallingObjsGroup = 6;
    var fallingObjs2 = [
        "i_onedrive",
        "i_excel",
        "i_ppt",
        "i_outlook",
        "i_word",
        "i_flake01",
        "i_flake02",
        "i_flake03"
    ];

    var pointCount = 0;

//check time
    var chrono = setInterval( sec, 1000);
    var secAmount = 10;

    function sec() {
        secAmount--;
        mc.score_MC.time_num.text = ":"+secAmount;
        if (secAmount==0) {
            clearInterval(chrono);
            exportRoot.tl2.play();
        }
    }
////


    //////////////////// SOUND ///////////////////////////////////////////////
    //// random assign a number to the icon to have their own sound

    //// sound setting

    var preloadSound1 = new createjs.LoadQueue();
    var preloadSound2 = new createjs.LoadQueue();
    var preloadSound3 = new createjs.LoadQueue();
    preloadSound1.addEventListener("fileload", function (event){
        handleFileSoundComplete(event,1);
    });
    preloadSound2.addEventListener("fileload", function (event){
        handleFileSoundComplete(event,2);
    });
    preloadSound3.addEventListener("fileload", function (event){
        handleFileSoundComplete(event,3);
    });
    preloadSound1.loadFile("audio/pickup1.mp3");
    preloadSound2.loadFile("audio/pickup2.mp3");
    preloadSound3.loadFile("audio/pickup3.mp3");

    function handleFileSoundComplete(event, soundId) {
        createjs.Sound.registerSound(event.item.src, "sound" + soundId);
    }


//////////////////////////////////////////////////////////////////

    var iconFalling = [];
    //icons animation
    exportRoot.tlIcons = gsap.timeline();
    for (k=1; k<=fallingObjsGroup; k++) {
        if (k>1) {
            exportRoot.tlIcons.to(mc, {duration: 0},"<0.3");
        }
        for (i = 0; i < fallingObjs2.length; i++) {

            if (typeof mc.icons["icons"+k][fallingObjs2[i]] !== 'undefined') {
                var ranDuration = gsap.utils.random(2.5, 4);
                var ranDuration2 = gsap.utils.random(5, 9);
                var ranStart = gsap.utils.random(0.2,0.4)
                var ranRotation = gsap.utils.random(-180, 120);
                var ranDimension = gsap.utils.random(0.4, 1);
                gsap.set(mc.icons["icons" + k][fallingObjs2[i]], {scale: ranDimension});
                mc.icons["icons" + k][fallingObjs2[i]].soundId = gsap.utils.random(1, nGroupSound, 1);

                exportRoot.tlIcons.to(mc.icons["icons" + k][fallingObjs2[i]], {
                    duration: ranDuration,
                    y: "+=" + (exportRoot.height+100),
                    onStart: function () {
                        iconFalling.push(this._targets[0]);
                        this._targets[0].hited = 0;
                    },
                    onComplete: function () {
                        var indexTmp = iconFalling.indexOf(this._targets[0]);
                        iconFalling.splice(indexTmp,1);
                    }
                }, "<" + ranStart)
                    .to(mc.icons["icons" + k][fallingObjs2[i]], {duration: ranDuration2, rotation: ranRotation}, "<")
            }
        }
    }


////////////////////// Hit ///////////////////
    exportRoot.ticker = createjs.Ticker.on("tick", hitBag);

    ///////// checking hit
    function hitBag() {
        //check bag position
        for(i=0; i<iconFalling.length; i++ ) {
            if (iconFalling[i].y > bagY && iconFalling[i].y < limitY && iconFalling[i].hited == 0) {
                if (iconFalling[i].x < (myObject.x + myObject.width / 2) && iconFalling[i].x > (myObject.x - myObject.width / 2)) {
                    iconFalling[i].hited = 1;
                    //iconFalling[i].alpha = 0;
                    gsap.killTweensOf(iconFalling[i]);
                    gsap.to(iconFalling[i], {duration:0.3, scale:0.1, x:myObject.x, y:"+=2", ease:"power2.out"});
                    gsap.to(iconFalling[i], {duration:0.4, alpha:0, ease:"power2.inOut"});
                    if (exportRoot.autoplay!=1) {
                        soundTemp = createjs.Sound.play("sound" + iconFalling[i].soundId);
                        soundTemp.volume = 0.4;
                        soundTemp.play();
                    }
                }
            }
            //overlimit
            else if (iconFalling[i].y > limitY && iconFalling[i].alpha != 0) {
                iconFalling[i].alpha = 0.2;
            }
        }
        stage.update();
    }

    /////////////////////

    // Enable touch events while allowing touch events to bubble up to the document.
    createjs.Touch.enable( stage, false, true );

// Don't let the stage to automatically prevent default touch events.
    stage.preventSelection = false;


// Listen for the "mousedown/touchstart" event on the circle and don't let it bubble.

    //create a touch area to drag

    mc.trackObject.addEventListener( 'mousedown', function( event ){
        event.nativeEvent.preventDefault();
    }, false );

    stage.mouseMoveOutside = false;




    mc.trackObject.addEventListener("pressmove", function(evt) {
        if(exportRoot.gameStarted) {
            var position = myObject.parent.globalToLocal(evt.stageX, evt.stageY);
            evt.currentTarget.x = position.x;
            changeRevolve();

            stage.update();
        }
    });

    var intervalForRevolve = exportRoot.width/9;

    function changeRevolve() {
        myObject.x = mc.trackObject.x;
    }

    stage.update();

}

//for disable the touch when we don't need it anymore
//createjs.Touch.disable(stage);