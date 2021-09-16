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
            }
        }
    }

    exportRoot.fillAllText = function (typeTmp, txtDetails, objTmp, aVar) {

        var typeObj;
        switch (typeTmp) {
            case "head":
                typeObj = 0;
                break;
            case "CTA":
                typeObj = 1;
                break;
            default:
                typeObj = 0;
        }

        var text = txtDetails[0]
        var size = txtDetails[1]
        var xOffset = txtDetails[2]
        var yOffset = txtDetails[3]
        var lineSpacing = txtDetails[4]
        var lineWidth = txtDetails[5]
        var align = txtDetails[6]
        var fontLine = txtDetails[7]

        var aSentenceLine = this.getTheSentences(text, size, xOffset, yOffset, lineSpacing, lineWidth, align)

        for (var i = 0; i < aSentenceLine.length; i++) {
            var mc = new createjs.MovieClip();
            mc.y = (i * parseInt(lineSpacing))
            mc.y += yOffset
            mc.y += parseInt(size);
            mc.x += xOffset

            var txtWidth = 0
            for (var j = 0; j < aSentenceLine[i].length; j++) {
                var text = new createjs.Text(aSentenceLine[i][j].txt, "normal " + size + " " + fontLine, aSentenceLine[i][j].color);
                text.textAlign = "Left"
                text.x = txtWidth
                text.textBaseline = "alphabetic"
                txtWidth += (text.getTransformedBounds().width)
                mc.addChild(text)
            }
            if (align == "center") mc.x = mc.x - mc.getTransformedBounds().width / 2;
            if (align == "right") mc.x = mc.x - mc.getTransformedBounds().width;
            if (typeObj==1) {
                mc.y = mc.y *0.9 - (mc.getTransformedBounds().height / 2);
            }
            if (mc.getTransformedBounds())
                mc.cache(
                    mc.getTransformedBounds().width*-1,
                    mc.getTransformedBounds().height*-1,
                    mc.getTransformedBounds().width*2,
                    mc.getTransformedBounds().height*2,
                    1.8
                )
            objTmp.addChild(mc);
            if (typeof aVar !== 'undefined')
                aVar.push(mc);
        }
    }

    exportRoot.getTheSentences = function (text, size, xOffset, yOffset, lineSpacing, lineWidth, align) {
        var aSentenceLine = [];
        var aStr = text.substr(0);
        var sentences = aStr.split("|");
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
                wholeSentence.push(subSentence)
            }
            aSentenceLine.push(wholeSentence)
        }
        return aSentenceLine
    }


    mc.cta.alpha=0
    mc.replay_btn.alpha=0


    exportRoot.runBanner = function() {

        mc.cta.alpha=1
        mc.replay_btn.alpha=1

        this.tlAnim = gsap.timeline();        this.tlAnim.to(mc,{
            duration:0.1,
            alpha: 1,
            onStart:function(){exportRoot.videoState="playing"; vid.play();}
        }, "+=0.5");

        this.tlAnim.from(exportRoot.headline1,{
            duration:0.7,
            y: "+=30", alpha: 0,
            stagger: 0.05,
            ease:Power2.easeOut,
        }, "+=2.6");


        this.tlAnim.to(exportRoot.headline1,{
            duration:0.5,
            alpha: 0,
            ease:Power3.easeIn,
        }, "+=2");

        //this.tlAnim.from(mc.mute_btn_wht,{duration: 0.6, alpha: 0, ease:Power3.easeInOut}, "<");

        this.tlAnim.from(exportRoot.headline2,{
            duration:0.7,
            x: "-=150", alpha: 0,
            stagger: 0.06,
            ease:Power2.easeOut,
        }, "+=8");


        this.tlAnim.from([mc.cta,mc.txtCta], { duration: 0.7, x: "-=200", onComplete:function(){exportRoot.videoState="reset"}}, "<+.5");
        this.tlAnim.from(mc.replay_btn, 1, { alpha: 0, onStart:function(){exportRoot.isReplay = true;}}, "-=0.6");
        this.tlAnim.to(mc,1,{onComplete:function (){
                video.pause();
                vid.pause();
            }});
       // this.tlAnim.to(mc.mute_btn_wht,{duration: 0.6, alpha: 0, ease:Power3.easeInOut}, "+=4");
        //this.tlAnim.to(mc.mute_btn_blk,{duration: 0.6, alpha: 1, ease:Power3.easeInOut}, "+=4");
    }
}