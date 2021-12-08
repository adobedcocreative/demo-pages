/// interactivity functions

function navBehavior(nChoose,noAuto, direction, label) {
    if(noAuto){
        exportRoot.tlAutoplay.kill();
        exportRoot.noAuto = true;
    } else {
        exportRoot.noAuto = false;
    }

        gsap.to([exportRoot.mainMC.nav_r, exportRoot.mainMC.nav_l], {duration: 0.3, alpha: 1});

        if (nChoose >= exportRoot.nSlide + 1) nChoose = 1;
        if (nChoose <= 1) gsap.to(exportRoot.mainMC.nav_l, {duration: 0.3, alpha: 0, overwrite: true})

        //checking navigation

        if (!(nChoose > exportRoot.nSlide) &&
            !(nChoose < 1)) {
            //setup nav status
            exportRoot.selectedSlide = nChoose;
            if (nChoose == 1 && direction == 1) direction = 0;
            //if(nChoose == exportRoot.nSlide && direction == 0) direction = 1;

            changeSlide(direction);
        }
        if(noAuto !== undefined) {
            amoAd.onInteraction(label, exportRoot.selectedSlide - 1);
        }
}

function navColor(nColor) {
    const navParts = [
        ["arrow",0],
        ["circle",1]
    ];
    for (i=0; i<navParts.length; i++) {
        gsap.to(exportRoot.mainMC.nav_l[navParts[i][0]].children[navParts[i][1]].graphics._stroke,{duration:0.3, style: exportRoot.colors.nav[nColor]});
        gsap.to(exportRoot.mainMC.nav_r[navParts[i][0]].children[navParts[i][1]].graphics._stroke,{duration:0.3, style: exportRoot.colors.nav[nColor]});
        gsap.to(exportRoot.mainMC.cta.CTAbg.children[0].graphics._fill,{duration:0.1, style: exportRoot.colors.nav[nColor],
            //ease: "elastic"
            });
    }
}

function ribbonColor(nColor) {
    gsap.to(exportRoot.mainMC.frontRibbon,
        {
            duration: 0.1,
            hue: exportRoot.colors.frontRibbon[nColor][0],
            sat: exportRoot.colors.frontRibbon[nColor][1],
            bri: exportRoot.colors.frontRibbon[nColor][2],
            con: exportRoot.colors.frontRibbon[nColor][3],
            ease: "elastic",
            onUpdate: function () {
                exportRoot.mainMC.frontRibbon.bg.cache(-2, -2, 804, 66);
                if(exportRoot.mainMC.frontRibbon.hue<50 || exportRoot.mainMC.frontRibbon.hue>100 ) {
                    var matrix = new createjs.ColorMatrix().adjustHue(exportRoot.mainMC.frontRibbon.hue)
                        .adjustBrightness(exportRoot.mainMC.frontRibbon.bri).adjustContrast(exportRoot.mainMC.frontRibbon.con)
                        .adjustSaturation(exportRoot.mainMC.frontRibbon.sat);
                    exportRoot.mainMC.frontRibbon.bg.filters[1] = new createjs.ColorMatrixFilter(matrix);
                }
            }
        });
    gsap.to(exportRoot.mainMC.backRibbon,
        {
            duration: 0.1,
            hue: exportRoot.colors.backRibbon[nColor][0],
            sat: exportRoot.colors.backRibbon[nColor][1],
            bri: exportRoot.colors.backRibbon[nColor][2],
            con: exportRoot.colors.backRibbon[nColor][3],
            ease: "elastic",
            onUpdate: function () {
                exportRoot.mainMC.backRibbon.cache(-2, -2, 424, 66);
                if(exportRoot.mainMC.frontRibbon.hue<50 || exportRoot.mainMC.frontRibbon.hue>100 ) {
                    var matrix = new createjs.ColorMatrix().adjustHue(exportRoot.mainMC.backRibbon.hue)
                        .adjustBrightness(exportRoot.mainMC.backRibbon.bri).adjustContrast(exportRoot.mainMC.backRibbon.con)
                        .adjustSaturation(exportRoot.mainMC.backRibbon.sat);
                    exportRoot.mainMC.backRibbon.filters[1] = new createjs.ColorMatrixFilter(matrix)
                }
            }
        });
}

function ribbonMovement(nColor) {


        gsap.to(exportRoot.mainMC.frontRibbon, {
            x: exportRoot.start_frontRibbon - (exportRoot.frontRibbon_movement / exportRoot.nSlide) * (nColor + 1),
            duration: 1.2, ease: "power2.inOut"
        });
        gsap.to(exportRoot.mainMC.backRibbon, {
            x: exportRoot.start_backRibbon - (exportRoot.backRibbon_movement / exportRoot.nSlide) * (nColor + 1),
            duration: 1.2, ease: "power2.inOut"
        });

}

//// CHANGE SLIDE //////////////////////////////////
function changeSlide(direction) {
    var cst = gsap.timeline();

    cst.to(exportRoot["headline"+exportRoot.selectedSlide],{duration:0.1,alpha:0, x:(direction)? exportRoot.width : 0, stagger:0.01, overwrite:true, })
        .to(exportRoot.mainMC.slides.sub_slides,{duration:1, x:-1*exportRoot.slidePositions[exportRoot.selectedSlide], ease:"power2.inOut",
            onStart: function () {
                ribbonMovement(exportRoot.selectedSlide-1);
            },
            onComplete: function () {

                exportRoot.prevSlide = exportRoot.selectedSlide;
            }
        },"<0.1")
        .to(exportRoot["headline"+exportRoot.selectedSlide],{duration:1.2, alpha:1, x:exportRoot.finalCopyPosition, stagger:0.01, ease:"power2.inOut"}, "<")

        for(let i = 1; i<=exportRoot.nSlide; i++) {
            if(i!= exportRoot.selectedSlide) {
                cst.to(exportRoot["headline" + i], {
                    duration: 1.1, alpha: 0, overwrite: true,
                    x: (direction) ? 0 : exportRoot.width,
                    y: function (index, target, targets) {
                        return exportRoot.finalCopyPositionY[i-1][index]
                    },
                    ease: "power2.inOut"
                }, "<")
            }
        }

        cst.to(exportRoot.mainMC, {duration:0.5,
                onStart: function () {
                    navColor(exportRoot.selectedSlide-1);
                    ribbonColor(exportRoot.selectedSlide-1);
                }
            }, "<.5")
}