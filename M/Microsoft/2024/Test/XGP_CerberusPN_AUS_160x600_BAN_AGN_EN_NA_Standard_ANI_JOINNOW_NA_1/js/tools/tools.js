
// TOOLS for banners

// setSize function //////////////////////////////////////////////////////////////
function setSize(elements, rHitSet = 1) {//checking banner size
    const data = $('meta[name="ad.size"]').attr('content');
    let ar1 = data.split(','), ar2 = [];

    for (let i = 0; i < ar1.length; i++) {
        let tmpAr = ar1[i].split('=');
        tmpAr[1] = eval(tmpAr[1]);
        ar2.push(tmpAr);
    }
    bannerSize = Object.fromEntries(new Map(ar2));

    //dimensions setup
    $(elements).width(bannerSize.width).height(bannerSize.height);
    if (rHitSet === 1) $('#rHit').css('left', bannerSize.width - 12 - 4);
}

// showCopy function ////////////////////////////////////////////////////////////
function showCopy(n) {
    if (n === 1) $('.copy').css('visibility', 'visible');
    if (n === 0) $('.copy').css('visibility', 'hidden');
}

// loadingFont function /////////////////////////////////////////////////////////
function loadingFont() {//FONT loading check
    let checkForFonts = 0;
    for (let i = 0; i < fontToLoad.length; i++) {
        (function () {
            let fontTmp = new FontFace(fontToLoad[i][0], fontToLoad[i][1]);
            fontTmp.load()
                .then(function (loaded_face) {
                    document.fonts.add(loaded_face);
                    checkForFonts++;
                    if (checkForFonts === fontToLoad.length)
                        loaded('font');
                })
                .catch(function (error) {
                    console.log("check font: " + error);
                });
        }());
    }
}