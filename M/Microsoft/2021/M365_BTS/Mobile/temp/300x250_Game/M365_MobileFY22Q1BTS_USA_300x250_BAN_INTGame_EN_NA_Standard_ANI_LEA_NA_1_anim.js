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
        mc.txtLearn.alpha = 0;
        mc.cta1.alpha = 0;
        mc.playBtn.alpha = 0;
        mc.playTxt.alpha = 0;
        this.tlIntro.from(mc.gameMain, {duration: .5, alpha: 0, ease:Power2.easeInOut,
            onComplete: function () {exportRoot.tl2.play();}
        });
    }
}

function startGame() {
    exportRoot.gameStarted = 1;
    sortAutoPlay(0);
    exportRoot.tl2.play();
    if (typeof exportRoot.tlwiggle!=='undefined')
        exportRoot.tlwiggle.kill();
    document.getElementById("rHit").style.visibility='visible';
}
function stopGame() {
    exportRoot.tlIcons.kill();
    createjs.Ticker.off("tick", exportRoot.ticker);

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
    else exportRoot.tlwiggle.kill();


}


/*  drag function for the bag and icons generator
*   myObject        =>  the bag
*   tWidth, tHeight =>  bag dimensions
*   eWidth, eHeight =>  banner dimensions
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
        "i_apple1",
        "i_apple2",
        "i_ppt",
        "i_outlook",
        "i_word",
        "i_banana",
        "i_pencil"
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
                var ranDuration = gsap.utils.random(1.5, 3);
                var ranDuration2 = gsap.utils.random(4, 8);
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




    mc.trackObject.on("pressmove", function(evt) {
        var position = myObject.parent.globalToLocal(evt.stageX,evt.stageY);
        evt.currentTarget.x = position.x;
        changeRevolve();

        stage.update();
    });

    var intervalForRevolve = exportRoot.width/9;

    function changeRevolve() {
        myObject.x = mc.trackObject.x;
        mc.bagRevolveMasked.x = myObject.x+16;
        mc.bagRevolveMasked.y = myObject.y-2;
        myObject.gotoAndStop("revolve");
        if(myObject.x<intervalForRevolve) {
            mc.bagRevolveMasked.gotoAndStop("lxxx");
            myObject.bagRevolve.gotoAndStop("lxxx");
        }
         else if (myObject.x>=intervalForRevolve && myObject.x<intervalForRevolve*2) {
            mc.bagRevolveMasked.gotoAndStop("lxx");
            myObject.bagRevolve.gotoAndStop("lxx");
        }
         else if (myObject.x>=intervalForRevolve*2 && myObject.x<intervalForRevolve*3) {
            mc.bagRevolveMasked.gotoAndStop("lx");
            myObject.bagRevolve.gotoAndStop("lx");
        }
         else if (myObject.x>=intervalForRevolve*3 && myObject.x<intervalForRevolve*4) {
            mc.bagRevolveMasked.gotoAndStop("l");
            myObject.bagRevolve.gotoAndStop("l");
        }
         else if (myObject.x>=intervalForRevolve*4 && myObject.x<intervalForRevolve*5) {
            mc.bagRevolveMasked.gotoAndStop("c");
            myObject.bagRevolve.gotoAndStop("c");
        }
         else if (myObject.x>=intervalForRevolve*5 && myObject.x<intervalForRevolve*6) {
            mc.bagRevolveMasked.gotoAndStop("r");
            myObject.bagRevolve.gotoAndStop("r");
        }
         else if (myObject.x>=intervalForRevolve*6 && myObject.x<intervalForRevolve*7) {
            mc.bagRevolveMasked.gotoAndStop("rx");
            myObject.bagRevolve.gotoAndStop("rx");
        }
         else if (myObject.x>=intervalForRevolve*7 && myObject.x<intervalForRevolve*8) {
            mc.bagRevolveMasked.gotoAndStop("rxx");
            myObject.bagRevolve.gotoAndStop("rxx");
        }
         else if (myObject.x>=intervalForRevolve*8) {
            mc.bagRevolveMasked.gotoAndStop("rxxx");
            myObject.bagRevolve.gotoAndStop("rxxx");
        }
    }

    stage.update();

}

//for disable the touch when we don't need it anymore
//createjs.Touch.disable(stage);

function playFrame0() {

    var mc = exportRoot.mainMC
    exportRoot.replayAnim = "inProgress"


    exportRoot.initBanner = function (data) {
    exportRoot.isReplay = false;
    exportRoot.isClick = false;

    Object.keys = function(obj) {
        var keys = [];

        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                keys.push(i);
            }
        }
        return keys
    }
    var keys = Object.keys(data)

    for (var i in keys) {
            var id = keys[i].substr(0, 4);
            if (id == "head") {
                exportRoot['' + keys[i]] = new Array()
                exportRoot.fillHead(data[keys[i]], exportRoot['' + keys[i]])
            } else if (id == "repl") {
                exportRoot.fillReplay(data[keys[i]])
            } else if (id == "CTA" && data[keys[i]].length > 1) {
                exportRoot.fillCta(data[keys[i]])
            } else if (id == "CTA1" && data[keys[i]].length > 1) {
                exportRoot.fillCta1(data[keys[i]])
            } else if (id == "play" && data[keys[i]].length > 1) {
                exportRoot.fillPlay(data[keys[i]])
            } else if (id == "CTAa") {
                mc.cta.arrow.visible = data[keys[i]][0]
                mc.cta.arrow.x += data[keys[i]][1]
                mc.cta.arrow.y += data[keys[i]][2]
            }
        }
    }




    exportRoot.fillHead = function (txtDetails, aVar) {
        var text = txtDetails[0]
        var size = txtDetails[1]
        var xOffset = txtDetails[2]
        var yOffset = txtDetails[3]
        var lineSpacing = txtDetails[4]
        var lineWidth = txtDetails[5]
        var align = txtDetails[6]
        var fontTextLine = txtDetails[7];

        if (fontTextLine!="") fontTextLine = " "+fontTextLine;

        var aSentenceLine = this.getTheSentences(text, size, xOffset, yOffset, lineSpacing, lineWidth, align)

        for (var i = 0; i < aSentenceLine.length; i++) {
            var mc = new createjs.MovieClip();
            mc.y = (i * parseInt(lineSpacing))
            mc.y += yOffset
            mc.y += parseInt(size)
            mc.x += xOffset

            var txtWidth = 0
            for (var j = 0; j < aSentenceLine[i].length; j++) {
                var text = new createjs.Text(aSentenceLine[i][j].txt, "normal " + size + " Segoe Pro" + fontTextLine, aSentenceLine[i][j].color);
                text.textAlign = "Left"
                text.x = txtWidth
                text.textBaseline = "alphabetic"
                txtWidth += (text.getTransformedBounds().width)
                mc.addChild(text)
            }
            if (align == "center") mc.x = mc.x - mc.getTransformedBounds().width / 2
            if (align == "right") mc.x = mc.x - mc.getTransformedBounds().width
            if (mc.getTransformedBounds()) mc.cache(mc.getTransformedBounds().width*-1,mc.getTransformedBounds().height*-1,mc.getTransformedBounds().width*2,mc.getTransformedBounds().height*2,1.8)
            exportRoot.mainMC.txt.addChild(mc);
            aVar.push(mc)
        }
    }





    exportRoot.fillCta = function (txtDetails) {
        var text = txtDetails[0]
        var size = txtDetails[1]
        var xOffset = txtDetails[2]
        var yOffset = txtDetails[3]
        var lineSpacing = txtDetails[4]
        var lineWidth = txtDetails[5]
        var align = txtDetails[6]


        var aSentenceLine = this.getTheSentences(text, size, xOffset, yOffset, lineSpacing, lineWidth, align)

        for (var i = 0; i < aSentenceLine.length; i++) {
            var mc = new createjs.MovieClip();
            mc.y = (i * parseInt(lineSpacing))
            mc.y += yOffset
            mc.y += (parseInt(size) * 0.90)
            mc.x += xOffset

            var txtWidth = 0
            for (var j = 0; j < aSentenceLine[i].length; j++) {
                var text = new createjs.Text(aSentenceLine[i][j].txt, "normal " + size + " Segoe Pro", aSentenceLine[i][j].color);
                text.textAlign = "Left"
                text.x = txtWidth
                text.textBaseline = "alphabetic"
                txtWidth += (text.getTransformedBounds().width)
                mc.addChild(text)
            }
            if (align == "center") mc.x = mc.x - mc.getTransformedBounds().width / 2
            if (align == "right") mc.x = mc.x - mc.getTransformedBounds().width
            mc.y = mc.y - (mc.getTransformedBounds().height / 2)
            if (mc.getTransformedBounds()) mc.cache(mc.getTransformedBounds().width*-1,mc.getTransformedBounds().height*-1,mc.getTransformedBounds().width*2,mc.getTransformedBounds().height*2,1.5)
            this.mainMC.txtCta.addChild(mc);
        }
    }
    exportRoot.fillCta1 = function (txtDetails) {
        var text = txtDetails[0]
        var size = txtDetails[1]
        var xOffset = txtDetails[2]
        var yOffset = txtDetails[3]
        var lineSpacing = txtDetails[4]
        var lineWidth = txtDetails[5]
        var align = txtDetails[6]


        var aSentenceLine = this.getTheSentences(text, size, xOffset, yOffset, lineSpacing, lineWidth, align)

        for (var i = 0; i < aSentenceLine.length; i++) {
            var mc = new createjs.MovieClip();
            mc.y = (i * parseInt(lineSpacing))
            mc.y += yOffset
            mc.y += (parseInt(size) * 0.90)
            mc.x += xOffset

            var txtWidth = 0
            for (var j = 0; j < aSentenceLine[i].length; j++) {
                var text = new createjs.Text(aSentenceLine[i][j].txt, "normal " + size + " Segoe Pro", aSentenceLine[i][j].color);
                text.textAlign = "Left"
                text.x = txtWidth
                text.textBaseline = "alphabetic"
                txtWidth += (text.getTransformedBounds().width)
                mc.addChild(text)
            }
            if (align == "center") mc.x = mc.x - mc.getTransformedBounds().width / 2
            if (align == "right") mc.x = mc.x - mc.getTransformedBounds().width
            mc.y = mc.y - (mc.getTransformedBounds().height / 2)
            if (mc.getTransformedBounds()) mc.cache(mc.getTransformedBounds().width*-1,mc.getTransformedBounds().height*-1,mc.getTransformedBounds().width*2,mc.getTransformedBounds().height*2,1.5)
            this.mainMC.txtLearn.addChild(mc);
        }
    }
    exportRoot.fillReplay = function (txtDetails) {
        var text = txtDetails[0]
        var size = txtDetails[1]
        var xOffset = txtDetails[2]
        var yOffset = txtDetails[3]
        var lineSpacing = txtDetails[4]
        var lineWidth = txtDetails[5]
        var align = txtDetails[6]


        var aSentenceLine = this.getTheSentences(text, size, xOffset, yOffset, lineSpacing, lineWidth, align)

        for (var i = 0; i < aSentenceLine.length; i++) {
            var mc = new createjs.MovieClip();
            mc.y = (i * parseInt(lineSpacing))
            mc.y += yOffset
            mc.y += (parseInt(size) * 0.90)
            mc.x += xOffset

            var txtWidth = 0
            for (var j = 0; j < aSentenceLine[i].length; j++) {
                var text = new createjs.Text(aSentenceLine[i][j].txt, "normal " + size + " Segoe Pro", aSentenceLine[i][j].color);
                text.textAlign = "Left"
                text.x = txtWidth
                text.textBaseline = "alphabetic"
                txtWidth += (text.getTransformedBounds().width)
                mc.addChild(text)
            }
            if (align == "center") mc.x = mc.x - mc.getTransformedBounds().width / 2
            if (align == "right") mc.x = mc.x - mc.getTransformedBounds().width
            mc.y = mc.y - (mc.getTransformedBounds().height / 2)
            if (mc.getTransformedBounds()) mc.cache(mc.getTransformedBounds().width*-1,mc.getTransformedBounds().height*-1,mc.getTransformedBounds().width*2,mc.getTransformedBounds().height*2,1.5)
            this.mainMC.txtPlayAgain.addChild(mc);
        }
    }

    exportRoot.fillPlay = function (txtDetails) {
        var text = txtDetails[0]
        var size = txtDetails[1]
        var xOffset = txtDetails[2]
        var yOffset = txtDetails[3]
        var lineSpacing = txtDetails[4]
        var lineWidth = txtDetails[5]
        var align = txtDetails[6]


        var aSentenceLine = this.getTheSentences(text, size, xOffset, yOffset, lineSpacing, lineWidth, align)

        for (var i = 0; i < aSentenceLine.length; i++) {
            var mc = new createjs.MovieClip();
            mc.y = (i * parseInt(lineSpacing))
            mc.y += yOffset
            mc.y += (parseInt(size) * 0.90)
            mc.x += xOffset

            var txtWidth = 0
            for (var j = 0; j < aSentenceLine[i].length; j++) {
                var text = new createjs.Text(aSentenceLine[i][j].txt, "normal " + size + " Segoe Pro", aSentenceLine[i][j].color);
                text.textAlign = "Left"
                text.x = txtWidth
                text.textBaseline = "alphabetic"
                txtWidth += (text.getTransformedBounds().width)
                mc.addChild(text)
            }
            if (align == "center") mc.x = mc.x - mc.getTransformedBounds().width / 2
            if (align == "right") mc.x = mc.x - mc.getTransformedBounds().width
            mc.y = mc.y - (mc.getTransformedBounds().height / 2)
            if (mc.getTransformedBounds()) mc.cache(mc.getTransformedBounds().width*-1,mc.getTransformedBounds().height*-1,mc.getTransformedBounds().width*2,mc.getTransformedBounds().height*2,1.5)
            this.mainMC.playTxt.addChild(mc);
        }
    }

    exportRoot.getTheSentences = function (text, size, xOffset, yOffset, lineSpacing, lineWidth, align) {
        var sentences = new Array()
        var aSentenceLine = new Array()
        var aStr = text.substr(0);
        sentences = aStr.split("|");
        var lastColor = "#000000"
        // Figure out the setence lines

        for (var i = 0; i < sentences.length; i++) {
            var aS = sentences[i].substr(0);
            var aSplit = new Array()
            aSplit = aS.split("<");
            aSplit = aSplit.filter(Boolean)
            var wholeSentence = new Array()

            for (var j = 0; j < aSplit.length; j++) {

                var checkColor = aSplit[j].indexOf("#")
                var color = (checkColor == -1) ? lastColor : aSplit[j].substr(0, 7);
                lastColor = color
                var txt = (checkColor == -1) ? aSplit[j].substr(0) : aSplit[j].substr(8);
                var subSentence = {
                    color: color,
                    txt: txt
                };
                wholeSentence.push(subSentence)
            }
            aSentenceLine.push(wholeSentence)
        }
        return aSentenceLine
    }



    exportRoot.runBanner = function() {


        this.tl1 = gsap.timeline();
        this.tl2 = gsap.timeline();
        mc.score_MC.alpha = 0;

        checkStart();

//		// 1st frame
        if (numberOfGames==0) {
            this.tl1.from(exportRoot.headline1,{duration:0.5, alpha: 0, ease:Power4.easeInOut})
                .from(mc.gameMain, {duration: .8, alpha: 0, ease:Power2.easeInOut})
                .from([mc.txtLearn,mc.cta1], {duration: 0.5, alpha:0, y:"+=50", ease:Power2.easeInOut}, "<.5")
                .from([mc.playBtn, mc.playTxt], {duration: 1, alpha:0, ease:Power4.easeInOut,
                    onComplete: function(){exportRoot.tl1.pause(); wiggleBag(mc.gameMain,1);}
                }, "<.5")
        }



//		//start game
        this.tl2.to([mc.txtLearn,mc.cta1], {duration:0.2, alpha:0,
            onStart: function() {
                mc.gameMain.gotoAndPlay(2);
                mc.playBtn.alpha=0;
                mc.playTxt.alpha=0;
            },
            onComplete: function(){wiggleBag(mc.gameMain,0);}})
            .from(mc.trackObject, {duration:0.5, alpha:0, ease:Power2.easeInOut}, "<")
            .to([mc.playBtn, mc.playTxt], { duration: 0.2, alpha: 0},"<.3")
            .to(mc.score_MC,{duration:1, alpha:100, ease:Power4.easeInOut,
                onComplete: function() {
                    exportRoot.tl2.pause();
                    drag(mc.gameMain, 100, 176, 300, 250, 200, 180);
                }
            }, "<")




//		//final frame
        this.tl2.to(exportRoot.headline1,{duration:0.5, alpha: 0, ease:Power4.easeInOut})
            .to(mc.score_MC, {duration:0.5, alpha: 0, ease:Power4.easeInOut}, "<")
            .to([mc.gameMain,mc.icons, mc.trackObject],{duration:0.8, alpha: 0, ease:Power4.easeInOut,
                onStart:function(){
                    mc.bagRevolveMasked.alpha = 0;
                    },
                onComplete:function() {stopGame();}
            }, "-=0.3")
            .from(mc.finalFrame.excel, 1.6, { alpha: 0, y: "-=400",	ease:Power4.easeOut}, "+=0")
            .from(mc.finalFrame.outlook, 1.5, { alpha: 0, y: "-=400",	ease:Power4.easeOut}, "<+.1")
            .from(mc.finalFrame.pptScreen, 1.2, { alpha: 0, y: "-=200",	ease:Power4.easeOut}, "<+.2")
            .from(mc.finalFrame.pptMob, 1.1, { alpha: 0, y: "-=200", ease:Power4.easeOut, onStart:function(){
                    exportRoot.mainMC.finalFrame.gotoAndPlay(1);
                    }}, "<+.3")
            .from(mc.finalFrame.word, .9, { alpha: 0, y: "-=100", ease:Power4.easeOut}, "<+.2")
            .from(mc.finalFrame.oneDrive, .8, { alpha: 0, y: "-=100", ease:Power4.easeOut}, "<+.2")
            .to(
                [
                    mc.finalFrame.excel,
                    mc.finalFrame.outlook,
                    mc.finalFrame.word,
                    mc.finalFrame.oneDrive
                ],
                {duration:.7, alpha:0.4, ease:"power2.inOut"}
            ,">");



        this.tl2.from(exportRoot.headline2,{duration:0.8, y: "-=20", alpha: 0, stagger: 0.1, ease:Power4.easeOut,
            onStart:function(){
                exportRoot.isClick = true;
                exportRoot.isReplay = true;
            }
        }, "<+.2");
        this.tl2.from([mc.txtCta, mc.txtPlayAgain, mc.cta], 0.8, { alpha: 0, y: "+=80",	ease:Power4.easeOut}, "<0.4");

        this.tl2.pause();
    }
}
