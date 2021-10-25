//JS file
// banner initialization

function initFrame0() {
    exportRoot.initBanner = function (data) {
        exportRoot.isReplay = false;
        var mc = exportRoot.mainMC;
        var keys = [];
        for (var i in data) {
            if (data.hasOwnProperty(i)) {
                keys.push(i);
            }
        }

        for (var i in keys) {
            var id = keys[i].substr(0, 4);
            if (id == "head") {
                exportRoot['' + keys[i]] = new Array();
                exportRoot.fillAllText("head", data[keys[i]], exportRoot.mainMC.txt, exportRoot['' + keys[i]]);
            }
            else if (id == "repl") {
                exportRoot.fillAllText("CTA", data[keys[i]], exportRoot.mainMC.txtPlayAgain)
            }
            else if (id == "play") {
                exportRoot.fillAllText("CTA", data[keys[i]], exportRoot.mainMC.playTxt)
            }
            else if (id == "CTA1") {
                exportRoot.fillAllText("CTA", data[keys[i]], exportRoot.mainMC.txtLearn)
            }
            else if (id == "CTA" && data[keys[i]].length > 1) {
                exportRoot.fillAllText("CTA", data[keys[i]], exportRoot.mainMC.txtCta)
            }
            else if (id == "CTAs") {
                ctaMC = mc.cta.CTAbg
                popL = mc.cta.popLeft
                popR = mc.cta.popRight
                sclX = parseFloat(data[keys[i]][0])
                oldWidth = ctaMC.nominalBounds.width
                ctaMC.scaleX = sclX/100;
                stage.update();
                newWidth = (ctaMC.nominalBounds.width/100)*sclX
                ctaMC.x -= (newWidth-oldWidth)/2

                var scale = newWidth / ctaMC.nominalBounds.width;

                mc.cta.x +=data[keys[i]][1]
                mc.cta.y +=data[keys[i]][2]

            }
            else if (id == "CTAa") {
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

        var text = txtDetails[0];
        var size = txtDetails[1];
        var xOffset = txtDetails[2];
        var yOffset = txtDetails[3];
        var lineSpacing = txtDetails[4];
        var lineWidth = txtDetails[5];
        var align = txtDetails[6];
        var fontLine = txtDetails[7];
        var tColor = txtDetails[8];

        var aSentenceLine = this.getTheSentences(text, size, xOffset, yOffset, lineSpacing, lineWidth, align)

        for (var i = 0; i < aSentenceLine.length; i++) {
            var mc = new createjs.MovieClip();
            mc.y = (i * parseInt(lineSpacing))
            mc.y += yOffset
            mc.y += parseInt(size);
            mc.x += xOffset


            // gradient text
            if(Array.isArray(tColor)) {
                GradientText = function (text, font, color) {
                    this.Text_constructor(text, font, color);
                }
                var p = createjs.extend(GradientText, createjs.Text);
                p._drawTextLine = function (ctx, text, y) {
                    var width = this._rectangle.width;
                    var height = this.getMeasuredLineHeight();
                    //change the x1 with the width if we wish to change the angle of the gradient
                    var my_gradient = ctx.createLinearGradient(0, y, 0, y + height);
                    my_gradient.addColorStop(0, tColor[0]);
                    my_gradient.addColorStop(1, tColor[1]);
                    ctx.fillStyle = my_gradient;
                    ctx.fillText(text, 0, y, this.maxWidth || 0xFFFF);
                };
                window.GradientText = createjs.promote(GradientText, "Text");
            }
            ///


            var txtWidth = 0
            for (var j = 0; j < aSentenceLine[i].length; j++) {
                if(Array.isArray(tColor)) var text = new GradientText(aSentenceLine[i][j], "normal " + size + " " + fontLine, "#ff0000");
                else var text = new createjs.Text(aSentenceLine[i][j], "normal " + size + " " + fontLine, tColor);
                text.textAlign = "Left";
                text.x = txtWidth;
                if(!Array.isArray(tColor)) text.textBaseline = "alphabetic"
                else text.y = text.y - parseInt(size,10)*0.77;
                txtWidth += (text.getTransformedBounds().width);


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

                /*var checkColor = aSplit[j].indexOf("#")
                var color = (checkColor == -1) ? lastColor : aSplit[j].substr(0, 7);
                lastColor = color*/
                /*var txt = (checkColor == -1) ? aSplit[j].substr(0) : aSplit[j].substr(8);
                var subSentence = {
                    color: color,
                    txt: txt
                };
                wholeSentence.push(subSentence)
                 */
                wholeSentence.push(aSplit[j].substr(0));
            }
            aSentenceLine.push(wholeSentence)
        }
        return aSentenceLine
    }
}