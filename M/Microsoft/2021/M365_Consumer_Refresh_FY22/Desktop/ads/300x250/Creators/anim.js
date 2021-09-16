//JS file

function frame0() {
	

	
    var mc = exportRoot.mainMC;
    exportRoot.replayAnim = "inProgress";

    exportRoot.initBanner = function (data) {
        exportRoot.isReplay = false;


        var keys = [];
        for (var i in data) {
            if (data.hasOwnProperty(i)) {
                keys.push(i);
            }
        }

        for (var i in keys) {
            var id = keys[i].substr(0, 4);
            if (id == "head") {
                exportRoot['' + keys[i]] = [];
                exportRoot.fillAllText("head", data[keys[i]], exportRoot.mainMC.txt, exportRoot['' + keys[i]]);
            } else if (id == "CTA" && data[keys[i]].length > 1) {
                exportRoot.fillAllText("CTA", data[keys[i]], exportRoot.mainMC.txtCta)
            } else if (id == "CTAs") {
                ctaMC = mc.cta.CTAbg
                popL = mc.cta.popLeft
                popR = mc.cta.popRight
                sclX = parseFloat(data[keys[i]][0])
                oldWidth = ctaMC.nominalBounds.width
                ctaMC.scaleX = sclX/100;
                stage.update();
                newWidth = (ctaMC.nominalBounds.width/100)*sclX
                ctaMC.x -= (newWidth-oldWidth)/2
                mc.cta.x +=data[keys[i]][1]
                mc.cta.y +=data[keys[i]][2]

            } else if (id == "CTAa") {
                mc.cta.arrow.visible = data[keys[i]][0]
                mc.cta.arrow.x += data[keys[i]][1]
                mc.cta.arrow.y += data[keys[i]][2]
            } else if(id == "type") {
                exportRoot['' + keys[i]] = [];
                exportRoot.fillAllText("typeW", data[keys[i]], exportRoot.mainMC.txt, exportRoot['' + keys[i]]);
            }
        }
    }
		var distanceArray4Cursor= new Array();
    exportRoot.fillAllText = function (typeTmp, txtDetails, objTmp, aVar) {

        var typeObj;
        switch (typeTmp) {
            case "head":
                typeObj = 0;
                break;
            case "CTA":
                typeObj = 1;
                break;
            case "typeW":
                typeObj = 2;
                break;
            default:
                typeObj = 0;
        }

        var txt = txtDetails[0]
        var size = txtDetails[1]
        var xOffset = txtDetails[2]
        var yOffset = txtDetails[3]
        var lineSpacing = txtDetails[4]
        var lineWidth = txtDetails[5]
        var align = txtDetails[6]
        var fontLine = txtDetails[7]



        var aSentenceLine = this.getTheSentences(txt, size, xOffset, yOffset, lineSpacing, lineWidth, align, typeObj);

		// if (typeObj==0 || typeObj==1 ) {
			var wordBuild = ""
			for (var i = 0; i < aSentenceLine.length; i++) {
				//console.log("aSentenceLine:"+aSentenceLine.length+"  sublength:"+aSentenceLine[i].length)
				wordBuild += aSentenceLine[i].txt

				var mc = new createjs.MovieClip();
				mc.y = (i * parseInt(lineSpacing))
				mc.y += yOffset
				mc.y += parseInt(size);
				mc.x += xOffset

				var txtWidth = 0
				if (typeObj==0 || typeObj==1 ) {
					for (var j = 0; j < aSentenceLine[i].length; j++) {
						var text = new createjs.Text(aSentenceLine[i][j].txt, "normal " + size + " " + fontLine, aSentenceLine[i][j].color);
						text.textAlign = "Left"
						text.x = txtWidth
						text.textBaseline = "alphabetic"
						txtWidth += (text.getTransformedBounds().width)

						mc.addChild(text)
					}
				} else {
						var textSoFar = new createjs.Text(wordBuild, "normal " + size + " " + fontLine, aSentenceLine[i].color);
						if (i==0){
							var text = new createjs.Text("|", "normal " + size + " " + fontLine, aSentenceLine[i].color);
							text.textAlign = "Left"
							text.x = textSoFar.getTransformedBounds().width - text.getTransformedBounds().width
							text.textBaseline = "alphabetic"
							var mc2 = new createjs.MovieClip();
							mc2.y = (i * parseInt(lineSpacing))
							mc2.y += yOffset
							mc2.y += parseInt(size);
							mc2.x += xOffset
							mc2.addChild(text)
							exportRoot.cursormc = mc2
							exportRoot.cursormc.alpha=0
						}
						var text = new createjs.Text(aSentenceLine[i].txt, "normal " + size + " " + fontLine, aSentenceLine[i].color);
						text.textAlign = "Left"
						text.x = textSoFar.getTransformedBounds().width - text.getTransformedBounds().width
						distanceArray4Cursor.push(text.x)
						console.log("distanceArray4Cursor:"+distanceArray4Cursor)
						text.textBaseline = "alphabetic"
						mc.addChild(text)

				}
				
				if (align == "center") mc.x = mc.x - mc.getTransformedBounds().width / 2;
				if (align == "right") mc.x = mc.x - mc.getTransformedBounds().width;
				if (typeObj==1) {
					mc.y = mc.y *0.9 - (mc.getTransformedBounds().height / 2);
				}
				if (mc.getTransformedBounds()) {
					mc.cache(
						mc.getTransformedBounds().width*-1,
						mc.getTransformedBounds().height*-1,
						600,
						600,
						1.8
					)
				}
				if (typeObj==2) {console.log(mc2+"TEST"); objTmp.addChild(mc2)} 
				objTmp.addChild(mc);
				
				if (typeof aVar !== 'undefined') aVar.push(mc);
			}
		// } 
	}

    exportRoot.getTheSentences = function (text, size, xOffset, yOffset, lineSpacing, lineWidth, align, typeObj2) {
        var aSentenceLine = [];
        var aStr = text.substr(0);
        var sentences = aStr.split("|");
		//if (typeObjTmp==0 || typeObjTmp==1 ) sentences = aStr.split("|");
		//if (typeObjTmp==2) sentences = aStr.split("");
		
        var lastColor = "#000000"
        // Figure out the setence lines

        for (var i = 0; i < sentences.length; i++) {
            var aS = sentences[i].substr(0);
            var aSplit = [];
            aSplit = aS.split("<");
            aSplit = aSplit.filter(Boolean);
            var wholeSentence = [];

            for (var j = 0; j < aSplit.length; j++) {
                var checkColor = aSplit[j].indexOf("#");
                var color = (checkColor == -1) ? lastColor : aSplit[j].substr(0, 7);
                lastColor = color
                var txt = (checkColor == -1) ? aSplit[j].substr(0) : aSplit[j].substr(8);
                var subSentence = {
                    color: color,
                    txt: txt
                };
               	if (typeObj2==0 || typeObj2==1 ) wholeSentence.push(subSentence)
				if (typeObj2==2) {
					txt = txt.split(""); 
					for (var r=0; r < txt.length; r++) {
						
						var subSentence = {
							color: color,
							txt: txt[r]
						};
						aSentenceLine.push(subSentence)
					}
				}
            }
            if (typeObj2==0 || typeObj2==1 ) aSentenceLine.push(wholeSentence)
        }

        return aSentenceLine
    }


    mc.cta.alpha=0;
    mc.replay_btn.alpha=0;


    exportRoot.runBanner = function() {


        mc.cta.alpha=1;
        mc.replay_btn.alpha=1;


        this.tlAnim = gsap.timeline();

        this.tlAnim.to(mc,{
            duration:0.1,
            alpha: 1,
            onStart:function(){exportRoot.videoState="playing"; vid.play();},
        });
		
		

		var currentX = exportRoot.cursormc.x
		var init=0
		distanceArray4Cursor[0]
        this.tlAnim.from(exportRoot.typewrite1,{
            duration:0.01,
            alpha: 0,
            stagger: {
				each:0.05,
				onComplete() {
					exportRoot.cursormc.x = distanceArray4Cursor[init]+(currentX+5)
					init++
				}},
            ease:Power4.easeOut,
			onStart:function(){exportRoot.cursormc.alpha=1},
        }, "+=2.25");

		//Flash begin
		
		this.tlAnim.to(exportRoot.cursormc,{
            duration:0.01,
            alpha: 0,
            ease:Power3.easeIn,
        }, "+=0.1");
		
		this.tlAnim.to(exportRoot.cursormc,{
            duration:0.01,
            alpha: 1,
            ease:Power3.easeIn,
        }, "+=0.3");
		
			this.tlAnim.to(exportRoot.cursormc,{
            duration:0.01,
            alpha: 0,
            ease:Power3.easeIn,
        }, "+=0.3");
		
		this.tlAnim.to(exportRoot.cursormc,{
            duration:0.01,
            alpha: 1,
            ease:Power3.easeIn,
        }, "+=0.3");
			
		this.tlAnim.to(exportRoot.cursormc,{
            duration:0.01,
            alpha: 0,
            ease:Power3.easeIn,
        }, "+=0.3");
		
		this.tlAnim.to(exportRoot.cursormc,{
            duration:0.01,
            alpha: 1,
            ease:Power3.easeIn,
        }, "+=0.3");
		
			this.tlAnim.to(exportRoot.cursormc,{
            duration:0.01,
            alpha: 0,
            ease:Power3.easeIn,
        }, "+=0.3");
		
		//Flash end
		
        this.tlAnim.to(exportRoot.typewrite1,{
            duration:0.7,
            alpha: 0,
            ease:Power3.easeIn,
			onStart:function(){exportRoot.cursormc.alpha=0},
        }, "+=0");
		
        //this.tlAnim.from(mc.mute_btn_wht,{duration: 0.6, alpha: 0, ease:Power3.easeInOut}, "<");

        this.tlAnim.from(exportRoot.headline2,{
            duration:0.7,
            x: "-=150", alpha: 0,
            stagger: 0.07,
            ease:Power2.easeOut
        }, "+=2.1");

		
		
		//console.log(exportRoot.typewrite1+ "TEST:"+exportRoot.typewrite1[0])
       
		this.tlAnim.from([mc.cta,mc.txtCta], { duration: 0.7, x: "-=150", onComplete:function(){
            exportRoot.videoState="reset";
        }}, "<+.5");
        this.tlAnim.from(mc.replay_btn, 1, { alpha: 0, onStart:function(){exportRoot.isReplay = true;}}, "-=0.6");
        this.tlAnim.to(mc,1,{onComplete:function (){
                video.pause();
                vid.pause();
            }});

        //this.tlAnim.to(mc.mute_btn_wht,{duration: 0.6, alpha: 0, ease:Power3.easeInOut}, "+=4");
        //this.tlAnim.to(mc.mute_btn_blk,{duration: 0.6, alpha: 1, ease:Power3.easeInOut}, "+=4");
    }
}
