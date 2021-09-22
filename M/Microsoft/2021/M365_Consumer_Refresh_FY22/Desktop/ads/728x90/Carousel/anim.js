function frame0(){
    var mc = exportRoot.mainMC;
    var img1 = mc.screens.img1;
    var init_headline_y;
	var timer1 = gsap.timeline();
	var tlJiggle = gsap.timeline();

    exportRoot.init_img1_y = mc.screens.img1.y;
    exportRoot.init_img2_y = mc.screens.img2.y;
    exportRoot.init_img3_y = mc.screens.img3.y;
    exportRoot.init_img4_y = mc.screens.img4.y;
    exportRoot.init_img5_y = mc.screens.img5.y;

	exportRoot.mainMC.nav.alpha=0

    exportRoot.runBanner = function() {

        var maxNav = 5;
        mc.cta.alpha=1;
        mc.logo.alpha=1;
        var hit1 = mc.hit1;
        var hit2 = mc.hit2;
        var hit3 = mc.hit3;
        var hit4 = mc.hit4;
        var hit5 = mc.hit5;

        var initYpos = 0;
        var initOffset = 120;

        //var subHeadPos = exportRoot.headline1.y;

        var prevSelection = 0;
        exportRoot.currentSelection = 1;

        var nav = mc.nav;

        hit1.on("click", function(evt) {
			timer1.kill();
			exportRoot.jiggleStop();
            if (!exportRoot.animInProgress) {
                prevSelection = exportRoot.currentSelection;
                exportRoot.currentSelection = 1;
                amoAd.onInteraction('Excel Click', exportRoot.currentSelection-1);
                if (exportRoot.currentSelection != prevSelection){
                    exportRoot.animInProgress=true
                    if(exportRoot.currentSelection > prevSelection) {
                        exportRoot.nextScene();
                    } else {
                        exportRoot.prevScene();
                    }
                    exportRoot.gotoNextNav();
                }
            }
        });

        hit2.on("click", function(evt) {
			timer1.kill();
			exportRoot.jiggleStop();
            if (!exportRoot.animInProgress) {
                prevSelection = exportRoot.currentSelection;
                exportRoot.currentSelection = 2;
                amoAd.onInteraction('PPT Click', exportRoot.currentSelection-1);
                if (exportRoot.currentSelection != prevSelection){
                    exportRoot.animInProgress=true
                    if(exportRoot.currentSelection > prevSelection) {
                        exportRoot.nextScene();
                    } else {
                        exportRoot.prevScene();
                    }
                    exportRoot.gotoNextNav();
                }
            }
        });

        hit3.on("click", function(evt) {
			timer1.kill();
			exportRoot.jiggleStop();
            if (!exportRoot.animInProgress) {
                prevSelection = exportRoot.currentSelection;
                exportRoot.currentSelection = 3;
                amoAd.onInteraction('Outlook Click', exportRoot.currentSelection-1);
                if (exportRoot.currentSelection != prevSelection){
                    exportRoot.animInProgress=true
                    if(exportRoot.currentSelection > prevSelection) {
                        exportRoot.nextScene();
                    } else {
                        exportRoot.prevScene();
                    }
                    exportRoot.gotoNextNav();
                }
            }
        });

        hit4.on("click", function(evt) {
			timer1.kill();
			exportRoot.jiggleStop();
            if (!exportRoot.animInProgress) {
                prevSelection = exportRoot.currentSelection;
                exportRoot.currentSelection = 4;
                amoAd.onInteraction('OneDrive Click', exportRoot.currentSelection-1);
                if (exportRoot.currentSelection != prevSelection){
                    exportRoot.animInProgress=true
                    if(exportRoot.currentSelection > prevSelection) {
                        exportRoot.nextScene();
                    } else {
                        exportRoot.prevScene();
                    }
                    exportRoot.gotoNextNav();

                }
            }
        });

        hit5.on("click", function(evt) {
			timer1.kill();
			exportRoot.jiggleStop();
            if (!exportRoot.animInProgress) {
                prevSelection = exportRoot.currentSelection;
                exportRoot.currentSelection = 5;
                amoAd.onInteraction('Editor Click', exportRoot.currentSelection-1);
                if (exportRoot.currentSelection != prevSelection){
                    exportRoot.animInProgress=true
                    if(exportRoot.currentSelection > prevSelection) {
                        exportRoot.nextScene();
                    } else {
                        exportRoot.prevScene();
                    }
                    exportRoot.gotoNextNav();

                }
            }
        });

        exportRoot.gotoNextNav = function(type) {
            if(type===undefined) {
                for (var i = 1; i <= maxNav; i++) {
					//deselected
						if (nav["icon" + i].scale > 0.75) gsap.to(nav["icon" + i], 1, {scale: .4, ease: Power4.easeInOut});
					}
				//selected
					gsap.to(nav["icon" + exportRoot.currentSelection], 1, {scale: .76, ease: Power4.easeInOut});


					centerPosition = 125;
					navHeight = nav.icon1.y+nav.icon5.y+125;

					if (exportRoot.currentSelection==1) centerPosition = 100;
					if (exportRoot.currentSelection==5) centerPosition = 150;
					navHeight = nav.icon1.y+nav.icon5.y+125;
						movingGap = centerPosition - nav["icon" + exportRoot.currentSelection].y;
						if(movingGap>0) directionGap = "+";
						else directionGap = "-";
						for (var i = 1; i <= maxNav; i++) {
							gsap.to(nav["icon" + i],0.5,{y:directionGap+"="+Math.abs(movingGap)});
							gsap.to(mc["hit" + i],0.5,{y:directionGap+"="+Math.abs(movingGap)});
						}
			}
			if(type==1){
				for (var i=2;i<=maxNav;i++) {
					gsap.to(nav["icon" + i], 1, {scale: 1, ease: Power4.easeInOut});
				}

			}
        }

		//
		//  AUTORUN CYCLE
		//
		timer1.to(mc, {duration: 0.1, onComplete:function(){exportRoot.jiggle(2,11); exportRoot.jiggle(3,11); exportRoot.jiggle(4,11); exportRoot.jiggle(5,11);}});
		timer1.to(mc, {duration: 7.5, onComplete:function(){exportRoot.autorun(2);}});
		timer1.to(mc, {duration: 2.5, onComplete:function(){exportRoot.autorun(3);}});
		timer1.to(mc, {duration: 2.5, onComplete:function(){exportRoot.autorun(4);}});
		timer1.to(mc, {duration: 2.5, onComplete:function(){exportRoot.autorun(5);}});
		timer1.to(mc, {duration: 2.5, onComplete:function(){exportRoot.autorun(1);  timer1.kill(); }});
		timer1.pause();
		
		exportRoot.autorun = function(id) {
					prevSelection = exportRoot.currentSelection;
					exportRoot.currentSelection = id
					if (exportRoot.currentSelection != prevSelection){
						exportRoot.animInProgress=true
						exportRoot.nextScene();
						exportRoot.gotoNextNav();
					}			
		}
		
		//exportRoot.tlJiggle.kill(1);
		
		//
		//  ICON JIGGLE ANIMATION
		//
		exportRoot.jiggle = function(id, repeatValue) {
			exportRoot["tlJiggle"+id] = gsap.timeline({yoyo:true, repeat:repeatValue});
			exportRoot["tlJiggle"+id].add("start");
			exportRoot["tlJiggle"+id].to(nav["icon"+id].sub, {duration: 0.625, scaleX: 1.2, scaleY: 1.2, ease:Sine.easeInOut});
			exportRoot["tlJiggle"+id].add("end");
		}
		
		exportRoot.jiggleStop = function(id, repeatValue) {
			exportRoot.tlJiggle2.pause();
			exportRoot.tlJiggle3.pause();
			exportRoot.tlJiggle4.pause();
			exportRoot.tlJiggle5.pause();
			gsap.to([nav.icon2.sub,nav.icon3.sub,nav.icon4.sub,nav.icon5.sub], {duration: 0.625, scaleX: 1, scaleY: 1, ease:Sine.easeInOut});

		}
				
        exportRoot.getSelectionId = function(direction) {
            prevSelection = exportRoot.currentSelection
            if (direction == "next") {
                if (exportRoot.currentSelection == maxNav) {
                    exportRoot.currentSelection = 1;
                } else {
                    exportRoot.currentSelection++;
                }
            } else if (direction == "prev") {
                if (exportRoot.currentSelection == 1) {
                    exportRoot.currentSelection = maxNav
                } else {
                    exportRoot.currentSelection--;
                }
            }
        }

        exportRoot.logoChangeCheck = function() {
            if (exportRoot.currentSelection==5){
                gsap.delayedCall(0.05,function(){
                    exportRoot.tlLogoChange.tweenTo("in");
                })
            } else {
                //gsap.delayedCall(0.15,function(){
                exportRoot.tlLogoChange.tweenTo("out");
                //})
            }
        }

        exportRoot.smallPrintCheck = function() {
            if (exportRoot.currentSelection==6){
                gsap.delayedCall(0.7,function(){
                    exportRoot.tlSmallPrint6.tweenTo("in");
                })
                exportRoot.tlSmallPrint7.tweenTo("out");
            } else if (exportRoot.currentSelection==7){
                gsap.delayedCall(0.7,function(){
                    exportRoot.tlSmallPrint7.tweenTo("in");
                })
                exportRoot.tlSmallPrint6.tweenTo("out");
            } else {
                exportRoot.tlSmallPrint6.tweenTo("out");
                exportRoot.tlSmallPrint7.tweenTo("out");
            }
        }

	exportRoot.tl0 = gsap.timeline({defaults:{ease:Power0.easeNone}});
	exportRoot.tl0.add("bottom");
	exportRoot.tl0.add("mid");
	exportRoot.tl0.add("top");
	exportRoot.tl0.pause();
	
	exportRoot.tl1 = gsap.timeline({defaults:{ease:Power0.easeNone}});
	exportRoot.tl1.add("top");
	exportRoot.tl1.from(mc.screens.img1.icon, 1, { y: "+=30", alpha: 0});
	exportRoot.tl1.from(mc.screens.img1.ui, 1, { y: "+=18", alpha: 0},"<");
	exportRoot.tl1.from(mc.screens.img1.reflection, 1, { alpha: 0},"<");
	exportRoot.tl1.add("mid");
	exportRoot.tl1.to(mc.screens.img1.icon, 1, { y:  "-=30", alpha: 0});
	exportRoot.tl1.to(mc.screens.img1.ui, 1, { y:  "-=18", alpha: 0},"<");
	exportRoot.tl1.to(mc.screens.img1.reflection, 1, { alpha: 0},"<");
	exportRoot.tl1.add("bottom");	
	exportRoot.tl1.pause();
	
	exportRoot.tl2 = gsap.timeline({defaults:{ease:Power0.easeNone}});
	exportRoot.tl2.add("top");
	exportRoot.tl2.from(mc.screens.img2.icon, 1, { y: "+=30", alpha: 0});
	exportRoot.tl2.from(mc.screens.img2.ui, 1, { y: "+=18", alpha: 0},"<");
	exportRoot.tl2.from(mc.screens.img2.reflection, 1, { alpha: 0},"<");
	exportRoot.tl2.add("mid");
	exportRoot.tl2.to(mc.screens.img2.icon, 1, { y:  "-=30", alpha: 0});
	exportRoot.tl2.to(mc.screens.img2.ui, 1, { y:  "-=18", alpha: 0},"<");
	exportRoot.tl2.to(mc.screens.img2.reflection, 1, { alpha: 0},"<");
	exportRoot.tl2.add("bottom");
	exportRoot.tl2.pause();
	
	exportRoot.tl3 = gsap.timeline({defaults:{ease:Power0.easeNone}});
	exportRoot.tl3.add("top");
	exportRoot.tl3.from(mc.screens.img3.icon, 1, { y: "+=30", alpha: 0});
	exportRoot.tl3.from(mc.screens.img3.ui, 1, { y: "+=18", alpha: 0},"<");
	exportRoot.tl3.from(mc.screens.img3.reflection, 1, { alpha: 0},"<");
	exportRoot.tl3.add("mid");
	exportRoot.tl3.to(mc.screens.img3.icon, 1, { y:  "-=30", alpha: 0});
	exportRoot.tl3.to(mc.screens.img3.ui, 1, { y:  "-=18", alpha: 0},"<");
	exportRoot.tl3.to(mc.screens.img3.reflection, 1, { alpha: 0},"<");
	exportRoot.tl3.add("bottom");
	exportRoot.tl3.pause();
	
	exportRoot.tl4 = gsap.timeline({defaults:{ease:Power0.easeNone}});
	exportRoot.tl4.add("top");
	exportRoot.tl4.from(mc.screens.img4.icon, 1, { y: "+=30", alpha: 0});
	exportRoot.tl4.from(mc.screens.img4.ui, 1, { y: "+=18", alpha: 0},"<");
	exportRoot.tl4.from(mc.screens.img4.reflection, 1, { alpha: 0},"<");
	exportRoot.tl4.add("mid");
	exportRoot.tl4.to(mc.screens.img4.icon, 1, { y:  "-=30", alpha: 0});
	exportRoot.tl4.to(mc.screens.img4.ui, 1, { y:  "-=18", alpha: 0},"<");
	exportRoot.tl4.to(mc.screens.img4.reflection, 1, { alpha: 0},"<");
	exportRoot.tl4.add("bottom");
	exportRoot.tl4.pause();
	
	exportRoot.tl5 = gsap.timeline({defaults:{ease:Power0.easeNone}});
	exportRoot.tl5.add("top");
	exportRoot.tl5.from(mc.screens.img5.icon, 1, { y: "+=30", alpha: 0});
	exportRoot.tl5.from(mc.screens.img5.ui, 1, { y: "+=18", alpha: 0},"<");
	exportRoot.tl5.from(mc.screens.img5.reflection, 1, { alpha: 0},"<");
	exportRoot.tl5.add("mid");
	exportRoot.tl5.to(mc.screens.img5.icon, 1, { y:  "-=30", alpha: 0});
	exportRoot.tl5.to(mc.screens.img5.ui, 1, { y:  "-=18", alpha: 0},"<");
	exportRoot.tl5.to(mc.screens.img5.reflection, 1, { alpha: 0},"<");
	exportRoot.tl5.add("bottom");
	exportRoot.tl5.pause();
	
	//logo animation
		exportRoot.tlLogoChange = gsap.timeline();

		exportRoot.tlLogoChange.add("out");
		exportRoot.tlLogoChange.to(exportRoot.mainMC.logo.ms_white, .5, {alpha:0,  ease:Power2.easeInOut});
		exportRoot.tlLogoChange.to(exportRoot.mainMC.logo.ms_grey, .5, {alpha:1,  ease:Power2.easeInOut},"<");
		exportRoot.tlLogoChange.add("in");
		
		exportRoot.tlLogoChange.pause();
		
		exportRoot.tlSmallPrint6 = gsap.timeline();

		exportRoot.tlSmallPrint6.add("out");
		//exportRoot.tlSmallPrint6.from(exportRoot.smallPrint1, .5, { alpha:0, ease:Power2.easeInOut});	
		exportRoot.tlSmallPrint6.add("in");
		
		exportRoot.tlSmallPrint6.pause();
		
		exportRoot.tlSmallPrint7 = gsap.timeline();

		exportRoot.tlSmallPrint7.add("out");
		//exportRoot.tlSmallPrint7.from(exportRoot.smallPrint2, .5, { alpha:0, ease:Power2.easeInOut});	
		exportRoot.tlSmallPrint7.add("in");
		
		exportRoot.tlSmallPrint7.pause();
		
		init_headline_y = exportRoot.headline1[0].y
        var headlines = Object.keys(exportRoot).filter(function(key){ return key.match(new RegExp('^headline', 'i'));});
        var yValues = headlines.map(function(headline) { return exportRoot[headline][0].y });
        
		exportRoot.nextScene = function() {
			//console.log("NEXT currentSelection:"+exportRoot.currentSelection+"  prevSelection"+prevSelection)
			//exportRoot.logoChangeCheck(exportRoot.currentSelection);
			exportRoot.smallPrintCheck(exportRoot.currentSelection);

			exportRoot.tlNext = gsap.timeline();
            if(exportRoot.currentSelection==1) {
                exportRoot.tlNext.to(mc.screens["img"+exportRoot.currentSelection], 0, { y:exportRoot["init_img"+exportRoot.currentSelection+"_y"]-initOffset, alpha: 1});
            }else {
                exportRoot.tlNext.to(mc.screens["img"+exportRoot.currentSelection], 0, {y: exportRoot["init_img"+exportRoot.currentSelection+"_y"]+initOffset, alpha: 1});
            }
			//exportRoot.tlNext.to(exportRoot["headline"+exportRoot.currentSelection], 0, { y:init_headline_y+initOffset/5, alpha: 0});		
			for (i=0; i<exportRoot["headline"+exportRoot.currentSelection].length; i++) {
                exportRoot.tlNext.to(exportRoot["headline" + exportRoot.currentSelection][i], 0, {
                    y: yValues[exportRoot.currentSelection - 1] + initOffset / 5 + 20*i,
                    alpha: 0
                });
            }
			if(prevSelection==0) {prevSelection=5;}
			exportRoot.tlNext.to(mc.screens["img"+prevSelection], 1, { y:exportRoot["init_img"+exportRoot.currentSelection+"_y"]-initOffset,  ease:Power2.easeInOut, onStart:function(){exportRoot["tl"+prevSelection].tweenFromTo("mid","bottom", {duration:0.6, ease:Power2.easeInOut});}});
			exportRoot.tlNext.to(mc.screens["img"+exportRoot.currentSelection], 1, { y:exportRoot["init_img"+exportRoot.currentSelection+"_y"], ease:Power2.easeInOut, onStart:function(){exportRoot["tl"+exportRoot.currentSelection].tweenFromTo("top","mid", {duration:0.6, ease:Power2.easeInOut});}, onComplete:function(){exportRoot.animInProgress=false}},"<");
			
			//exportRoot.tlNext.to(exportRoot["headline"+prevSelection], 0.4, { y:init_headline_y-initOffset/3, alpha: 0, ease:Power2.easeIn, stagger:0.03},"<");
			//exportRoot.tlNext.to(exportRoot["headline"+exportRoot.currentSelection], 0.5, { y:init_headline_y, alpha: 1, ease:Power3.easeOut, stagger:0.03},">+.3");

            for (i=0; i<exportRoot["headline"+prevSelection].length; i++) {
                exportRoot.tlNext.to(exportRoot["headline" + prevSelection][i], 0.4, {
                    y: yValues[prevSelection - 1] - initOffset / 3 + 20*i,
                    alpha: 0,
                    ease: Power2.easeIn,
                    //stagger: 0.03
                }, "<");
            }
            for (i=0; i<exportRoot["headline"+exportRoot.currentSelection].length; i++) {
                exportRoot.tlNext.to(exportRoot["headline" + exportRoot.currentSelection][i], 0.5, {
                    y: yValues[exportRoot.currentSelection - 1] + 20*i,
                    alpha: 1,
                    ease: Power3.easeOut,
                    //stagger: 0.03
                }, ((i!=0) ? "<+0.06" : ">+.3"));
            }
		}
		
		exportRoot.prevScene = function() {
			//console.log("PREV currentSelection:"+exportRoot.currentSelection+"  prevSelection"+prevSelection)
			//exportRoot.logoChangeCheck(exportRoot.currentSelection);
			exportRoot.smallPrintCheck(exportRoot.currentSelection);
			exportRoot.tlBack = gsap.timeline();
            if(exportRoot.currentSelection==5) {
                exportRoot.tlBack.to(mc.screens["img"+exportRoot.currentSelection], 0, { y:exportRoot["init_img"+exportRoot.currentSelection+"_y"]+initOffset, alpha: 1});
            }else {
                exportRoot.tlBack.to(mc.screens["img" + exportRoot.currentSelection], 0, {
                    y: exportRoot["init_img" + exportRoot.currentSelection + "_y"] - initOffset,
                    alpha: 1
                });
            }
			//exportRoot.tlBack.to(exportRoot["headline"+exportRoot.currentSelection], 0, { y:init_headline_y+initOffset/15, alpha: 0});
            for (i=0; i<exportRoot["headline"+exportRoot.currentSelection].length; i++) {
                exportRoot.tlBack.to(exportRoot["headline" + exportRoot.currentSelection], 0, {
                    y: yValues[exportRoot.currentSelection - 1] + initOffset / 5 + 20*i,
                    alpha: 0
                });
            }
			exportRoot.tlBack.to(mc.screens["img"+prevSelection], 1, { y:exportRoot["init_img"+exportRoot.currentSelection+"_y"]+initOffset, ease:Power2.easeInOut, onStart:function(){exportRoot["tl"+prevSelection].tweenFromTo("mid","top", {duration:0.6, ease:Power2.easeInOut});}});
			exportRoot.tlBack.to(mc.screens["img"+exportRoot.currentSelection], 1, { y:exportRoot["init_img"+exportRoot.currentSelection+"_y"], ease:Power2.easeInOut, onStart:function(){exportRoot["tl"+exportRoot.currentSelection].tweenFromTo("bottom","mid", {duration:0.6, ease:Power2.easeInOut});}, onComplete:function(){exportRoot.animInProgress=false}},"<");

			//exportRoot.tlBack.to(exportRoot["headline"+prevSelection], 0.4, { y:init_headline_y+initOffset/3, alpha: 0, ease:Power2.easeIn, stagger:0.03},"<");
			//exportRoot.tlBack.to(exportRoot["headline"+exportRoot.currentSelection], 0.5, { y:init_headline_y, alpha: 1, ease:Power3.easeOut, stagger:0.03},">+.3");

            for (i=0; i<exportRoot["headline"+prevSelection].length; i++) {
                exportRoot.tlNext.to(exportRoot["headline" + prevSelection][i], 0.4, {
                    y: yValues[prevSelection - 1] - initOffset / 3 + 20*i,
                    alpha: 0,
                    ease: Power2.easeIn,
                    //stagger: 0.03
                }, "<");
            }
            for (i=0; i<exportRoot["headline"+exportRoot.currentSelection].length; i++) {
                exportRoot.tlNext.to(exportRoot["headline" + exportRoot.currentSelection][i], 0.5, {
                    y: yValues[exportRoot.currentSelection - 1] + 20*i,
                    alpha: 1,
                    ease: Power3.easeOut,
                    //stagger: 0.03
                }, ((i!=0) ? "<+0.06" : ">+.3"));
            }
		}

        exportRoot.gotoNextNav(1)
		
		exportRoot.mainMC.nav.alpha=1
		
        exportRoot.tlText = gsap.timeline()
            .to(
                [
                    exportRoot.headline1,
                    exportRoot.headline2,
                    exportRoot.headline3,
                    exportRoot.headline4,
                    exportRoot.headline5,
                    mc.screens.img2,
                    mc.screens.img3,
                    mc.screens.img4,
                    mc.screens.img5
                ],
                0,
                { alpha: 0, onStart:function(){initDiv.style.visibility='hidden'}
                })
            .to([mc.screens.img1.ui], 0, { alpha: 1, y:35})
            .to([mc.screens.img1.icon], 0, { alpha: 1, y:20})
            .to([mc.screens.img1.reflection], 0, { alpha: .5, y:110})
			.to([mc.nav.icon1], 0, { alpha: 0})
			.to([mc.nav.icon2], 0, { alpha: 0})
			.to([mc.nav.icon3], 0, { alpha: 0})
			.to([mc.nav.icon4], 0, { alpha: 0})
			.to([mc.nav.icon5], 0, { alpha: 0})
            .to(exportRoot.headline1, 0, { alpha: 1})
			.from([mc.txtIntro], 1, { alpha: 0});


        //icons appear
        exportRoot.tlText.from(exportRoot.mainMC.nav, 2, {scaleX:1.2, scaleY:1.2,  ease:Power2.easeOut},">+.3")
			.to(exportRoot.mainMC.txtIntro, 0.6, {alpha:0, ease:Power1.easeIn},"<")
			.to(exportRoot.mainMC.nav.icon1, .3, {alpha:1, ease:Power1.easeInOut},"<+0.6")
			.to(exportRoot.mainMC.nav.icon2, .3, {alpha:1, ease:Power1.easeInOut},">-0.2")
			.to(exportRoot.mainMC.nav.icon3, .3, {alpha:1, ease:Power1.easeInOut},">-0.2")
			.to(exportRoot.mainMC.nav.icon4, .3, {alpha:1, ease:Power1.easeInOut},">-0.2")
			.to(exportRoot.mainMC.nav.icon5, .3, {alpha:1, ease:Power1.easeInOut},">-0.2")
			.to(exportRoot.mainMC.introBG, 1.4, {x:"+=780",  ease:Power2.easeInOut},"<+1")
            .from(mc.screens.img1.icon, 1.4, {x:"-=150",  ease:Power3.easeInOut},"<")
            .from([mc.screens.img1.ui,mc.screens.img1.reflection], 1.4, {x:"-=100",  ease:Power3.easeInOut},"<")
            .from(exportRoot.headline1, .7, {x:"-=100",  alpha:0, ease:Power3.easeOut},"<+.8");

        //1st icons animation
        exportRoot.tlText.to(exportRoot.mainMC.nav.icon5, .6, { x:138, scaleX:.4, scaleY:.4, ease:Power1.easeInOut},"<-0.8")
            .to(exportRoot.mainMC.nav.icon5, .3, {y:208, ease:Power1.easeInOut},"<+.3")
            .to(exportRoot.mainMC.nav.icon4, .7, { x:138, scaleX:.4, scaleY:.4, ease:Power1.easeInOut},"<-.2")
            .to(exportRoot.mainMC.nav.icon4, .3, {y:180, ease:Power1.easeInOut},"<+.4")
            .to(exportRoot.mainMC.nav.icon3, .8, { x:138, scaleX:.4, scaleY:.4, ease:Power1.easeInOut},"<-.3")
            .to(exportRoot.mainMC.nav.icon3, .4, {y:154, ease:Power1.easeInOut},"<+.5")
            .to(exportRoot.mainMC.nav.icon2, .9, { x:138, scaleX:.4, scaleY:.4, ease:Power1.easeInOut},"<-.4")
            .to(exportRoot.mainMC.nav.icon2, .5, {y:128, ease:Power1.easeInOut},"<+.4")
            .to(exportRoot.mainMC.nav.icon1, 1, { x:138, scaleX:.76, scaleY:.76, ease:Power1.easeInOut},"<-.3")
            .to(exportRoot.mainMC.nav.icon1, .6, {y:100,   ease:Power1.easeInOut, onComplete:function(){timer1.play();}},"<+.4");

        exportRoot.tlText.from(exportRoot.mainMC.logo.ms_white, .5, {alpha:0,  ease:Power2.easeInOut},"<-.3")
            .to(exportRoot.mainMC.logo.ms_grey, .5, {alpha:0,  ease:Power2.easeInOut},"<");


    }







    exportRoot.initBanner = function (data) {

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
            } else if (id == "intr") {
                exportRoot['' + keys[i]] = new Array();
                exportRoot.fillAllText("intr", data[keys[i]], exportRoot.mainMC.txtIntro, exportRoot['' + keys[i]]);
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

                var scale = newWidth / ctaMC.nominalBounds.width;

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
            case "intr":
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
                text.xDimension = mc.x;
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
}