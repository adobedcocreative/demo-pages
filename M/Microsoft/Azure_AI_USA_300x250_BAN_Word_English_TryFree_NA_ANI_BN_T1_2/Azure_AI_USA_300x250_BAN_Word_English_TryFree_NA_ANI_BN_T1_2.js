(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.replay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("ABNA/YgaAagnAIghgOYgigOgWghAAgkYAAglAXghAigNYAigNAnAJAZAbIgWAUYgRgSgagGgWAJYgXAJgPAWAAAYYAAAYAOAWAXAKYAWAJAagFARgSg");
	this.shape.setTransform(1.3,0.1,0.877,0.877,135,0,0,1.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgmgTIBNAAIgnAmg");
	this.shape_1.setTransform(-5.3,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.2,-7.8,18.4,15.8);


(lib.TailRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhNBEIAAiIICbAAIAACIg");
	var mask_graphics_1 = new cjs.Graphics().p("AhNBEIAAiIICbAAIAACIg");
	var mask_graphics_2 = new cjs.Graphics().p("AhNBEIAAiIICbAAIAACIg");
	var mask_graphics_3 = new cjs.Graphics().p("AhNBFIAAiJICbAAIAACJg");
	var mask_graphics_4 = new cjs.Graphics().p("AhNBEIAAiHICbAAIAACHg");
	var mask_graphics_5 = new cjs.Graphics().p("AhNBEIAAiIICbAAIAACIg");
	var mask_graphics_6 = new cjs.Graphics().p("AhNBFIAAiIICbAAIAACIg");
	var mask_graphics_7 = new cjs.Graphics().p("AhNBEIAAiHICbAAIAACHg");
	var mask_graphics_8 = new cjs.Graphics().p("AhNBEIAAiHICbAAIAACHg");
	var mask_graphics_9 = new cjs.Graphics().p("AhNBFIAAiJICbAAIAACJg");
	var mask_graphics_10 = new cjs.Graphics().p("AhNBFIAAiJICbAAIAACJg");
	var mask_graphics_11 = new cjs.Graphics().p("AhNBEIAAiIICbAAIAACIg");
	var mask_graphics_12 = new cjs.Graphics().p("AhNBFIAAiIICbAAIAACIg");
	var mask_graphics_13 = new cjs.Graphics().p("AhNBFIAAiIICbAAIAACIg");
	var mask_graphics_14 = new cjs.Graphics().p("AhNBEIAAiIICbAAIAACIg");
	var mask_graphics_15 = new cjs.Graphics().p("AhNBEIAAiIICbAAIAACIg");
	var mask_graphics_16 = new cjs.Graphics().p("AhNBFIAAiIICbAAIAACIg");
	var mask_graphics_17 = new cjs.Graphics().p("AhNBEIAAiHICbAAIAACHg");
	var mask_graphics_18 = new cjs.Graphics().p("AhNBFIAAiJICbAAIAACJg");
	var mask_graphics_19 = new cjs.Graphics().p("AhNBEIAAiIICbAAIAACIg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:5.1,y:19}).wait(1).to({graphics:mask_graphics_1,x:5.1,y:19}).wait(1).to({graphics:mask_graphics_2,x:5.1,y:19}).wait(1).to({graphics:mask_graphics_3,x:5.1,y:19}).wait(1).to({graphics:mask_graphics_4,x:5.1,y:18.9}).wait(1).to({graphics:mask_graphics_5,x:5.1,y:18.8}).wait(1).to({graphics:mask_graphics_6,x:5.1,y:18.6}).wait(1).to({graphics:mask_graphics_7,x:5.1,y:18.4}).wait(1).to({graphics:mask_graphics_8,x:5.1,y:18}).wait(1).to({graphics:mask_graphics_9,x:5.1,y:17.6}).wait(1).to({graphics:mask_graphics_10,x:5.1,y:17.1}).wait(1).to({graphics:mask_graphics_11,x:5.1,y:16.4}).wait(1).to({graphics:mask_graphics_12,x:5.1,y:15.7}).wait(1).to({graphics:mask_graphics_13,x:5.1,y:14.8}).wait(1).to({graphics:mask_graphics_14,x:5.1,y:13.7}).wait(1).to({graphics:mask_graphics_15,x:5.1,y:12.5}).wait(1).to({graphics:mask_graphics_16,x:5.1,y:11.1}).wait(1).to({graphics:mask_graphics_17,x:5.1,y:9.5}).wait(1).to({graphics:mask_graphics_18,x:5.1,y:7.7}).wait(1).to({graphics:mask_graphics_19,x:5.1,y:5.7}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B5EB").s().p("Agxg8IBjAAIAAB4g");
	this.shape.setTransform(5,6.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.TailLeft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhNBEIAAiIICbAAIAACIg");
	var mask_graphics_1 = new cjs.Graphics().p("AhNBEIAAiIICbAAIAACIg");
	var mask_graphics_2 = new cjs.Graphics().p("AhNBEIAAiIICbAAIAACIg");
	var mask_graphics_3 = new cjs.Graphics().p("AhNBFIAAiJICbAAIAACJg");
	var mask_graphics_4 = new cjs.Graphics().p("AhNBEIAAiHICbAAIAACHg");
	var mask_graphics_5 = new cjs.Graphics().p("AhNBEIAAiIICbAAIAACIg");
	var mask_graphics_6 = new cjs.Graphics().p("AhNBFIAAiIICbAAIAACIg");
	var mask_graphics_7 = new cjs.Graphics().p("AhNBEIAAiHICbAAIAACHg");
	var mask_graphics_8 = new cjs.Graphics().p("AhNBEIAAiHICbAAIAACHg");
	var mask_graphics_9 = new cjs.Graphics().p("AhNBFIAAiJICbAAIAACJg");
	var mask_graphics_10 = new cjs.Graphics().p("AhNBFIAAiJICbAAIAACJg");
	var mask_graphics_11 = new cjs.Graphics().p("AhNBEIAAiIICbAAIAACIg");
	var mask_graphics_12 = new cjs.Graphics().p("AhNBFIAAiIICbAAIAACIg");
	var mask_graphics_13 = new cjs.Graphics().p("AhNBFIAAiIICbAAIAACIg");
	var mask_graphics_14 = new cjs.Graphics().p("AhNBEIAAiIICbAAIAACIg");
	var mask_graphics_15 = new cjs.Graphics().p("AhNBEIAAiIICbAAIAACIg");
	var mask_graphics_16 = new cjs.Graphics().p("AhNBFIAAiIICbAAIAACIg");
	var mask_graphics_17 = new cjs.Graphics().p("AhNBEIAAiHICbAAIAACHg");
	var mask_graphics_18 = new cjs.Graphics().p("AhNBFIAAiJICbAAIAACJg");
	var mask_graphics_19 = new cjs.Graphics().p("AhNBEIAAiIICbAAIAACIg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:5.1,y:19}).wait(1).to({graphics:mask_graphics_1,x:5.1,y:19}).wait(1).to({graphics:mask_graphics_2,x:5.1,y:19}).wait(1).to({graphics:mask_graphics_3,x:5.1,y:19}).wait(1).to({graphics:mask_graphics_4,x:5.1,y:18.9}).wait(1).to({graphics:mask_graphics_5,x:5.1,y:18.8}).wait(1).to({graphics:mask_graphics_6,x:5.1,y:18.6}).wait(1).to({graphics:mask_graphics_7,x:5.1,y:18.4}).wait(1).to({graphics:mask_graphics_8,x:5.1,y:18}).wait(1).to({graphics:mask_graphics_9,x:5.1,y:17.6}).wait(1).to({graphics:mask_graphics_10,x:5.1,y:17.1}).wait(1).to({graphics:mask_graphics_11,x:5.1,y:16.4}).wait(1).to({graphics:mask_graphics_12,x:5.1,y:15.7}).wait(1).to({graphics:mask_graphics_13,x:5.1,y:14.8}).wait(1).to({graphics:mask_graphics_14,x:5.1,y:13.7}).wait(1).to({graphics:mask_graphics_15,x:5.1,y:12.5}).wait(1).to({graphics:mask_graphics_16,x:5.1,y:11.1}).wait(1).to({graphics:mask_graphics_17,x:5.1,y:9.5}).wait(1).to({graphics:mask_graphics_18,x:5.1,y:7.7}).wait(1).to({graphics:mask_graphics_19,x:5.1,y:5.7}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B9B9B9").s().p("Agxg8IBjAAIhjB4g");
	this.shape.setTransform(5,6.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.RightBubBod = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B9B9B9").s().p("Ag3AYIAAguIBvAAIAAAug");
	this.shape.setTransform(57.7,45.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B9B9B9").s().p("AhZA0IAAhnICzAAIAABng");
	this.shape_1.setTransform(54.3,42.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B9B9B9").s().p("Ah4BNIAAiZIDxAAIAACZg");
	this.shape_2.setTransform(51.2,39.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B9B9B9").s().p("AiTBjIAAjFIEnAAIAADFg");
	this.shape_3.setTransform(48.5,37.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B9B9B9").s().p("AisB3IAAjtIFZAAIAADtg");
	this.shape_4.setTransform(46,35.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B9B9B9").s().p("AjBCJIAAkRIGDAAIAAERg");
	this.shape_5.setTransform(43.8,33.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B9B9B9").s().p("AjUCZIAAkxIGpAAIAAExg");
	this.shape_6.setTransform(41.9,32.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B9B9B9").s().p("AjlCnIAAlMIHLAAIAAFMg");
	this.shape_7.setTransform(40.3,30.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B9B9B9").s().p("Aj0CzIAAllIHpAAIAAFlg");
	this.shape_8.setTransform(38.8,29.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B9B9B9").s().p("AkAC9IAAl5IIBAAIAAF5g");
	this.shape_9.setTransform(37.5,28.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B9B9B9").s().p("AkLDGIAAmLIIXAAIAAGLg");
	this.shape_10.setTransform(36.4,27.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B9B9B9").s().p("AkVDOIAAmbIIrAAIAAGbg");
	this.shape_11.setTransform(35.5,26.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B9B9B9").s().p("AkdDUIAAmnII7AAIAAGng");
	this.shape_12.setTransform(34.7,26.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B9B9B9").s().p("AkjDaIAAmzIJHAAIAAGzg");
	this.shape_13.setTransform(34,25.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B9B9B9").s().p("AkoDeIAAm7IJSAAIAAG7g");
	this.shape_14.setTransform(33.5,25.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B9B9B9").s().p("AktDiIAAnDIJbAAIAAHDg");
	this.shape_15.setTransform(33.1,24.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B9B9B9").s().p("AkxDlIAAnJIJjAAIAAHJg");
	this.shape_16.setTransform(32.7,24.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B9B9B9").s().p("Ak0DnIAAnNIJpAAIAAHNg");
	this.shape_17.setTransform(32.4,24.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B9B9B9").s().p("Ak2DpIAAnRIJtAAIAAHRg");
	this.shape_18.setTransform(32.2,24.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B9B9B9").s().p("Ak4DrIAAnUIJxAAIAAHUg");
	this.shape_19.setTransform(32,24.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B9B9B9").s().p("Ak5DsIAAnXIJzAAIAAHXg");
	this.shape_20.setTransform(31.9,24);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B9B9B9").s().p("Ak6DsIAAnXIJ1AAIAAHXg");
	this.shape_21.setTransform(31.8,23.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B9B9B9").s().p("Ak6DtIAAnZIJ1AAIAAHZg");
	this.shape_22.setTransform(31.7,23.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B9B9B9").s().p("Ak7DtIAAnZIJ3AAIAAHZg");
	this.shape_23.setTransform(31.7,23.8);
	this.shape_23._off = true;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B9B9B9").s().p("Ak7DuIAAnbIJ3AAIAAHbg");
	this.shape_24.setTransform(31.6,23.8);
	this.shape_24._off = true;

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B9B9B9").s().p("Ak5DsIAAnXIJ0AAIAAHXg");
	this.shape_25.setTransform(31.8,23.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B9B9B9").s().p("Ak4DrIAAnVIJxAAIAAHVg");
	this.shape_26.setTransform(31.9,24);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B9B9B9").s().p("Ak3DqIAAnTIJvAAIAAHTg");
	this.shape_27.setTransform(32.1,24.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B9B9B9").s().p("Ak1DpIAAnRIJrAAIAAHRg");
	this.shape_28.setTransform(32.3,24.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B9B9B9").s().p("AkzDnIAAnNIJnAAIAAHNg");
	this.shape_29.setTransform(32.5,24.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B9B9B9").s().p("AkwDlIAAnJIJhAAIAAHJg");
	this.shape_30.setTransform(32.8,24.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B9B9B9").s().p("AktDjIAAnFIJbAAIAAHFg");
	this.shape_31.setTransform(33.1,24.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B9B9B9").s().p("AkrDhIAAnBIJXAAIAAHBg");
	this.shape_32.setTransform(33.3,25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B9B9B9").s().p("AkpDgIAAm/IJTAAIAAG/g");
	this.shape_33.setTransform(33.5,25.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B9B9B9").s().p("AkoDfIAAm9IJRAAIAAG9g");
	this.shape_34.setTransform(33.6,25.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B9B9B9").s().p("AkmDeIAAm7IJNAAIAAG7g");
	this.shape_35.setTransform(33.8,25.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B9B9B9").s().p("AkmDdIAAm5IJNAAIAAG5g");
	this.shape_36.setTransform(33.8,25.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B9B9B9").s().p("AklDdIAAm5IJLAAIAAG5g");
	this.shape_37.setTransform(33.9,25.4);
	this.shape_37._off = true;

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B9B9B9").s().p("AklDdIAAm4IJLAAIAAG4g");
	this.shape_38.setTransform(33.9,25.5);
	this.shape_38._off = true;

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B9B9B9").s().p("AkmDeIAAm6IJNAAIAAG6g");
	this.shape_39.setTransform(33.8,25.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B9B9B9").s().p("AknDeIAAm7IJPAAIAAG7g");
	this.shape_40.setTransform(33.7,25.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B9B9B9").s().p("AkqDgIAAm/IJUAAIAAG/g");
	this.shape_41.setTransform(33.5,25.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B9B9B9").s().p("AkuDjIAAnFIJcAAIAAHFg");
	this.shape_42.setTransform(33.1,24.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B9B9B9").s().p("Ak/DwIAAnfIJ/AAIAAHfg");
	this.shape_43.setTransform(31.4,23.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B9B9B9").s().p("AlDDzIAAnlIKHAAIAAHlg");
	this.shape_44.setTransform(31,23.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B9B9B9").s().p("AlGD1IAAnpIKNAAIAAHpg");
	this.shape_45.setTransform(30.7,23.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B9B9B9").s().p("AlID3IAAntIKRAAIAAHtg");
	this.shape_46.setTransform(30.4,22.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B9B9B9").s().p("AlLD5IAAnxIKXAAIAAHxg");
	this.shape_47.setTransform(30.2,22.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B9B9B9").s().p("AlMD6IAAnzIKZAAIAAHzg");
	this.shape_48.setTransform(30,22.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B9B9B9").s().p("AlOD7IAAn1IKdAAIAAH1g");
	this.shape_49.setTransform(29.9,22.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B9B9B9").s().p("AlPD8IAAn3IKfAAIAAH3g");
	this.shape_50.setTransform(29.8,22.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B9B9B9").s().p("AlQD9IAAn5IKhAAIAAH5g");
	this.shape_51.setTransform(29.7,22.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B9B9B9").s().p("AlQD+IAAn6IKiAAIAAH6g");
	this.shape_52.setTransform(29.6,22.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B9B9B9").s().p("AlRD+IAAn6IKjAAIAAH6g");
	this.shape_53.setTransform(29.6,22.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B9B9B9").s().p("AlRD+IAAn7IKjAAIAAH7g");
	this.shape_54.setTransform(29.6,22.2);
	this.shape_54._off = true;

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B9B9B9").s().p("AlOD8IAAn3IKdAAIAAH3g");
	this.shape_55.setTransform(29.8,22.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B9B9B9").s().p("AlND7IAAn1IKbAAIAAH1g");
	this.shape_56.setTransform(30,22.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B9B9B9").s().p("AlJD4IAAnvIKTAAIAAHvg");
	this.shape_57.setTransform(30.3,22.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B9B9B9").s().p("AlHD2IAAnrIKPAAIAAHrg");
	this.shape_58.setTransform(30.5,22.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B9B9B9").s().p("AlFD1IAAnpIKLAAIAAHpg");
	this.shape_59.setTransform(30.7,23.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B9B9B9").s().p("AlBDyIAAnjIKDAAIAAHjg");
	this.shape_60.setTransform(31.1,23.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#B9B9B9").s().p("Ak/DxIAAnhIJ/AAIAAHhg");
	this.shape_61.setTransform(31.2,23.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#B9B9B9").s().p("Ak+DwIAAneIJ9AAIAAHeg");
	this.shape_62.setTransform(31.4,23.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B9B9B9").s().p("Ak9DvIAAndIJ7AAIAAHdg");
	this.shape_63.setTransform(31.5,23.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B9B9B9").s().p("Ak9DuIAAnbIJ7AAIAAHbg");
	this.shape_64.setTransform(31.5,23.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B9B9B9").s().p("Ak8DuIAAnbIJ5AAIAAHbg");
	this.shape_65.setTransform(31.6,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[]},2).to({state:[{t:this.shape_24}]},16).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27,p:{y:24.1}}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_27,p:{y:24.2}}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44,p:{x:31}}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47,p:{x:30.2,y:22.7}}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50,p:{x:29.8}}]},1).to({state:[{t:this.shape_51,p:{x:29.7}}]},1).to({state:[{t:this.shape_51,p:{x:29.6}}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_51,p:{x:29.6}}]},1).to({state:[{t:this.shape_51,p:{x:29.7}}]},1).to({state:[{t:this.shape_50,p:{x:29.7}}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_47,p:{x:30.1,y:22.6}}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_44,p:{x:30.9}}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65,p:{y:23.7}}]},1).to({state:[{t:this.shape_65,p:{y:23.7}}]},1).to({state:[{t:this.shape_65,p:{y:23.8}}]},1).to({state:[]},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(23).to({_off:false},0).wait(1).to({_off:true},1).wait(25).to({_off:false},0).wait(1).to({_off:true},1).wait(32).to({_off:false,x:31.8,y:23.9},0).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(25).to({_off:false},0).wait(4).to({_off:true},2).wait(16).to({_off:false},0).wait(2).to({_off:true},1).wait(75));
	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(65).to({_off:false},0).wait(1).to({_off:true},1).wait(5).to({_off:false},0).wait(2).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(67).to({_off:false},0).wait(4).to({_off:true},1).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.shape_54).wait(97).to({_off:false},0).wait(5).to({_off:true},1).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(52.1,42.8,11.3,4.7);


(lib.logos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB900").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape.setTransform(3.9,3.4,0.208,0.208);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A4EF").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_1.setTransform(-3.9,3.4,0.208,0.208);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7FBA00").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_2.setTransform(3.9,-4.4,0.208,0.208);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F25022").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_3.setTransform(-3.9,-4.4,0.208,0.208);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ARIDTQgXgYAAgyIAAieIhsAAIAAD5IhKAAIAAj5Ig0AAIAAg7IA0AAIAAgrQAAgxAggfQAfggAyAAQANAAALACIASAEIAAA/QgDgCgKgDQgJgDgMAAQgXAAgMAOQgMAOAAAcIAAAmIBsAAIAAhGIBKgWIAABcIBJAAIAAA7IhJAAIAACQQAAAcAKANQAKALAXAAQAGAAAJgDQAHgCAIgFIAAA8QgHAEgQAEQgPADgQAAQgvAAgXgZgAIsDCQgrgrAAhJQAAhNAsgsQArgtBNAAQBJAAApAsQApAsAABHQAABMgsAsQgrAthLAAQhIAAgqgqgAJjAAQgWAaAAAyQAAAwAWAaQAWAZApAAQAoAAAVgZQAVgaAAgyQAAgygWgZQgVgZgnAAQgoAAgXAagAE7DnQgXgEgRgIIAAhHQAWAOAVAIQAWAIAUAAQAYAAAMgHQAMgHAAgQQAAgPgMgLQgMgKgigOQgogQgSgWQgRgVAAggQAAgpAigbQAhgbA1AAQAOAAAWADQATAEAPAGIAABFQgOgJgUgHQgRgHgVAAQgVAAgLAIQgMAIAAANQAAAQAKAJQAJAIAjAOQAsASARAVQASAWAAAfQAAAsgiAaQggAbg6AAQgTAAgYgFgAgiDCQgqgrAAhJQAAhNArgsQAqgtBOAAQBIAAApAsQApArAABIQAABMgsAsQgrAthLAAQhHAAgqgqgAAVAAQgVAZAAAzQAAAxAVAZQAWAZApAAQAnAAAVgZQAVgaAAgyQAAgzgWgYQgVgZgnAAQgoAAgWAagAoDDBQgqgrAAhEQAAhLArgvQAsgwBQAAQATAAAWAFQAVAFANAHIAABGQgQgLgTgIQgSgHgSAAQgrAAgaAbQgbAcAAAwQAAAvAaAaQAZAaAsAAQAQAAAUgHQAUgIAQgMIAABEQgRAJgXAGQgVAFgcAAQhEAAgrgrgAkEDkIAAk0IBIAAIAAAxIACAAQAKgaAUgOQAUgOAcAAIAQABIAMADIAABKQgGgEgLgEQgLgEgQAAQgaAAgTAVQgTAYAAAuIAACcgAqpDkIAAk0IBJAAIAAE0gAs7DkIAAlRIgBAAIiGFRIgyAAIiJlRIgBAAIAAFRIhFAAIAAmvIBrAAIB9FAIABAAICDlAIBnAAIAAGvgAqkiMQgNgMAAgSQAAgRANgNQAOgMARAAQAUAAAMAMQANANAAARQAAASgNAMQgNAMgTAAQgSAAgNgMg");
	this.shape_4.setTransform(37.4,-0.8,0.208,0.208);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhmB4QgngpAAhMQAAhHAqguQAqgvA/AAQBBAAAjAoQAkAmAABGIAAAjIjTAAQAFAuAZATQAZASAnAAQAbAAAXgIQAagJAQgMIAAA8QgTAMgcAHQgbAHgkAAQhFAAgogqgAgohWQgUASgHAlICJAAQABgkgSgTQgQgTgfAAQgZAAgVATg");
	this.shape_5.setTransform(94.7,0.8,0.208,0.208);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhZCdIAAk0IBJAAIAAAxIABAAQAKgaATgOQAUgOAdAAIAPABIAMADIAABKQgFgEgLgEQgNgEgOAAQgcAAgRAWQgSAXAAAuIAACcg");
	this.shape_6.setTransform(89.8,0.7,0.208,0.208);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhuB+QgcgeAAhBIAAi7IBKAAIAACzQAAAmAPAUQAPAUAgAAQAeAAATgVQASgWAAgkIAAiyIBKAAIAAE0IhKAAIAAgoIgBAAQgPAWgXALQgZAMgcAAQg2AAgdgfg");
	this.shape_7.setTransform(83.6,0.8,0.208,0.208);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiBCbIAAgjICfjYIiTAAIAAg6ID2AAIAAAdIihDeICiAAIAAA6g");
	this.shape_8.setTransform(77.3,0.8,0.208,0.208);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AB7DYIgnhrIipAAIglBrIhSAAICjmvIBTAAICjGvgAhBAuICAAAIg/i1IgCAAg");
	this.shape_9.setTransform(69.8,-0.5,0.208,0.208);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logos, new cjs.Rectangle(-7.5,-8,105.2,15), null);


(lib.LeftBubBod = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B5EB").s().p("AgxAQIAAgfIBjAAIAAAfg");
	this.shape.setTransform(5,46);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B5EB").s().p("AhUAtIAAhZICpAAIAABZg");
	this.shape_1.setTransform(8.5,43.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00B5EB").s().p("AhzBIIAAiPIDnAAIAACPg");
	this.shape_2.setTransform(11.6,40.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00B5EB").s().p("AiPBeIAAi8IEfAAIAAC8g");
	this.shape_3.setTransform(14.4,38.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00B5EB").s().p("AioBzIAAjlIFRAAIAADlg");
	this.shape_4.setTransform(16.9,36);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00B5EB").s().p("Ai+CGIAAkLIF9AAIAAELg");
	this.shape_5.setTransform(19.1,34.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00B5EB").s().p("AjSCWIAAkrIGlAAIAAErg");
	this.shape_6.setTransform(21.1,32.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00B5EB").s().p("AjjCkIAAlHIHHAAIAAFHg");
	this.shape_7.setTransform(22.8,31.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00B5EB").s().p("AjyCxIAAlhIHlAAIAAFhg");
	this.shape_8.setTransform(24.3,29.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00B5EB").s().p("Aj/C7IAAl1IH/AAIAAF1g");
	this.shape_9.setTransform(25.6,28.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00B5EB").s().p("AkKDFIAAmJIIVAAIAAGJg");
	this.shape_10.setTransform(26.7,27.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00B5EB").s().p("AkUDNIAAmZIIpAAIAAGZg");
	this.shape_11.setTransform(27.7,27.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00B5EB").s().p("AkcDTIAAmlII5AAIAAGlg");
	this.shape_12.setTransform(28.5,26.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00B5EB").s().p("AkjDZIAAmxIJHAAIAAGxg");
	this.shape_13.setTransform(29.2,25.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00B5EB").s().p("AkoDeIAAm7IJRAAIAAG7g");
	this.shape_14.setTransform(29.7,25.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00B5EB").s().p("AktDiIAAnCIJbAAIAAHCg");
	this.shape_15.setTransform(30.2,25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00B5EB").s().p("AkxDlIAAnJIJjAAIAAHJg");
	this.shape_16.setTransform(30.6,24.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00B5EB").s().p("Ak0DnIAAnNIJpAAIAAHNg");
	this.shape_17.setTransform(30.9,24.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00B5EB").s().p("Ak2DpIAAnRIJtAAIAAHRg");
	this.shape_18.setTransform(31.1,24.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00B5EB").s().p("Ak4DqIAAnTIJwAAIAAHTg");
	this.shape_19.setTransform(31.3,24.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00B5EB").s().p("Ak5DsIAAnXIJzAAIAAHXg");
	this.shape_20.setTransform(31.4,24);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00B5EB").s().p("Ak6DsIAAnXIJ1AAIAAHXg");
	this.shape_21.setTransform(31.5,23.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00B5EB").s().p("Ak6DtIAAnZIJ1AAIAAHZg");
	this.shape_22.setTransform(31.5,23.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00B5EB").s().p("Ak7DtIAAnZIJ3AAIAAHZg");
	this.shape_23.setTransform(31.6,23.8);
	this.shape_23._off = true;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00B5EB").s().p("Ak7DuIAAnbIJ3AAIAAHbg");
	this.shape_24.setTransform(31.6,23.8);
	this.shape_24._off = true;

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00B5EB").s().p("Ak8DuIAAnbIJ4AAIAAHbg");
	this.shape_25.setTransform(31.7,23.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00B5EB").s().p("Ak8DuIAAnbIJ5AAIAAHbg");
	this.shape_26.setTransform(31.7,23.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00B5EB").s().p("Ak9DvIAAncIJ7AAIAAHcg");
	this.shape_27.setTransform(31.8,23.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00B5EB").s().p("Ak+DvIAAndIJ9AAIAAHdg");
	this.shape_28.setTransform(31.9,23.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00B5EB").s().p("Ak/DwIAAnfIJ/AAIAAHfg");
	this.shape_29.setTransform(32,23.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00B5EB").s().p("AlBDyIAAnjIKDAAIAAHjg");
	this.shape_30.setTransform(32.2,23.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00B5EB").s().p("AlDDzIAAnlIKHAAIAAHlg");
	this.shape_31.setTransform(32.4,23.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00B5EB").s().p("AlGD2IAAnrIKNAAIAAHrg");
	this.shape_32.setTransform(32.7,23);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00B5EB").s().p("AlKD4IAAnvIKUAAIAAHvg");
	this.shape_33.setTransform(33.1,22.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00B5EB").s().p("AlND7IAAn1IKbAAIAAH1g");
	this.shape_34.setTransform(33.4,22.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00B5EB").s().p("AlQD9IAAn5IKhAAIAAH5g");
	this.shape_35.setTransform(33.7,22.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00B5EB").s().p("AlSD/IAAn9IKlAAIAAH9g");
	this.shape_36.setTransform(33.9,22.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00B5EB").s().p("AlUEAIAAn/IKpAAIAAH/g");
	this.shape_37.setTransform(34.1,22);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00B5EB").s().p("AlVEBIAAoBIKrAAIAAIBg");
	this.shape_38.setTransform(34.2,21.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00B5EB").s().p("AlWECIAAoDIKtAAIAAIDg");
	this.shape_39.setTransform(34.3,21.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00B5EB").s().p("AlXECIAAoDIKvAAIAAIDg");
	this.shape_40.setTransform(34.4,21.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00B5EB").s().p("AlYEDIAAoFIKxAAIAAIFg");
	this.shape_41.setTransform(34.5,21.7);
	this.shape_41._off = true;

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00B5EB").s().p("AlXECIAAoDIKuAAIAAIDg");
	this.shape_42.setTransform(34.4,21.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00B5EB").s().p("AlWEBIAAoCIKtAAIAAICg");
	this.shape_43.setTransform(34.3,21.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00B5EB").s().p("AlVEAIAAoAIKrAAIAAIAg");
	this.shape_44.setTransform(34.2,21.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00B5EB").s().p("AlTD/IAAn9IKnAAIAAH9g");
	this.shape_45.setTransform(34,22);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00B5EB").s().p("AlRD+IAAn7IKjAAIAAH7g");
	this.shape_46.setTransform(33.8,22.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00B5EB").s().p("AlPD8IAAn4IKfAAIAAH4g");
	this.shape_47.setTransform(33.6,22.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00B5EB").s().p("AlMD6IAAnzIKZAAIAAHzg");
	this.shape_48.setTransform(33.3,22.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00B5EB").s().p("AlJD4IAAnvIKTAAIAAHvg");
	this.shape_49.setTransform(33,22.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00B5EB").s().p("AlFD1IAAnpIKLAAIAAHpg");
	this.shape_50.setTransform(32.6,23.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00B5EB").s().p("AlADxIAAnhIKBAAIAAHhg");
	this.shape_51.setTransform(32.1,23.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00B5EB").s().p("Ak2DpIAAnSIJtAAIAAHSg");
	this.shape_52.setTransform(31.1,24.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00B5EB").s().p("AkxDmIAAnLIJjAAIAAHLg");
	this.shape_53.setTransform(30.6,24.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00B5EB").s().p("AktDjIAAnFIJbAAIAAHFg");
	this.shape_54.setTransform(30.2,24.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00B5EB").s().p("AkqDgIAAnAIJVAAIAAHAg");
	this.shape_55.setTransform(29.9,25.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00B5EB").s().p("AknDeIAAm7IJPAAIAAG7g");
	this.shape_56.setTransform(29.6,25.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00B5EB").s().p("AklDcIAAm4IJLAAIAAG4g");
	this.shape_57.setTransform(29.4,25.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00B5EB").s().p("AkjDbIAAm1IJHAAIAAG1g");
	this.shape_58.setTransform(29.2,25.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00B5EB").s().p("AkiDaIAAmzIJFAAIAAGzg");
	this.shape_59.setTransform(29.1,25.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00B5EB").s().p("AkgDZIAAmxIJBAAIAAGxg");
	this.shape_60.setTransform(28.9,25.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00B5EB").s().p("AkgDZIAAmxIJAAAIAAGxg");
	this.shape_61.setTransform(28.9,25.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00B5EB").s().p("AkfDYIAAmwII/AAIAAGwg");
	this.shape_62.setTransform(28.8,25.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00B5EB").s().p("AkfDYIAAmvII/AAIAAGvg");
	this.shape_63.setTransform(28.8,25.9);
	this.shape_63._off = true;

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00B5EB").s().p("AkhDaIAAmzIJDAAIAAGzg");
	this.shape_64.setTransform(29,25.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00B5EB").s().p("AkiDbIAAm1IJFAAIAAG1g");
	this.shape_65.setTransform(29.1,25.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00B5EB").s().p("AkkDcIAAm3IJJAAIAAG3g");
	this.shape_66.setTransform(29.3,25.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00B5EB").s().p("AkmDdIAAm6IJNAAIAAG6g");
	this.shape_67.setTransform(29.5,25.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00B5EB").s().p("AkoDfIAAm9IJRAAIAAG9g");
	this.shape_68.setTransform(29.7,25.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00B5EB").s().p("AkrDhIAAnCIJXAAIAAHCg");
	this.shape_69.setTransform(30,25);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00B5EB").s().p("AkvDkIAAnHIJeAAIAAHHg");
	this.shape_70.setTransform(30.4,24.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00B5EB").s().p("AkyDmIAAnLIJkAAIAAHLg");
	this.shape_71.setTransform(30.7,24.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00B5EB").s().p("Ak0DoIAAnPIJpAAIAAHPg");
	this.shape_72.setTransform(30.9,24.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#00B5EB").s().p("Ak2DqIAAnSIJtAAIAAHSg");
	this.shape_73.setTransform(31.1,24.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#00B5EB").s().p("Ak4DrIAAnVIJwAAIAAHVg");
	this.shape_74.setTransform(31.3,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[]},7).to({state:[{t:this.shape_24}]},11).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[]},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(23).to({_off:false},0).wait(1).to({_off:true},1).wait(59).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).wait(1).to({_off:true},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(25).to({_off:false},0).wait(4).to({_off:true},7).wait(11).to({_off:false},0).wait(2).to({_off:true},1).wait(75));
	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(67).to({_off:false},0).wait(4).to({_off:true},1).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.shape_63).wait(96).to({_off:false},0).wait(1).to({y:26},0).wait(5).to({y:25.9},0).wait(1).to({_off:true},1).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,44.4,10,3.3);


(lib.cta_arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguA1IA4g1Ig4g2IARgRIBLBHIhLBIg");
	this.shape.setTransform(3.1,0.2,0.576,0.576);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_arrow, new cjs.Rectangle(0.5,-3.9,5.4,8.4), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.cta, null, null);


(lib.FillBlue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0078D4").s().p("AhsC8IAAl3IDZAAIAAF3g");
	this.shape.setTransform(10.9,18.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.FillBlue, new cjs.Rectangle(0,0,21.8,37.6), null);


(lib.circle_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.circle_bg, null, null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguA1IA4g1Ig4g2IARgRIBLBHIhLBIg");
	this.shape.setTransform(8.5,4.4,0.576,0.576);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(5.8,0.2,5.4,8.4), null);


(lib.replay_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{out:0,over:1,down:2,hit:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 6
	this.instance = new lib.replay("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-18.1,16.7,1.754,1.754);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-18.6,y:16.6,alpha:1},1).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.3,2.9,32.2,27.7);


(lib.cta_arrowmo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_52 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(52).call(this.frame_52).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag3A4QgXgXAAghQAAggAXgXQAXgXAgAAQAhAAAXAXQAXAXAAAgQAAAhgXAXQgXAXghAAQggAAgXgXg");

	// Layer 4
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(-18.1,0.1,1,1,0,0,0,5.6,4.2);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({x:2.2},8,cjs.Ease.get(1)).wait(1).to({regX:8.5,regY:4.4,x:4.9,y:0.3},0).wait(1).to({x:4.3},0).wait(1).to({x:3.3},0).wait(1).to({x:2.5},0).wait(1).to({x:2},0).wait(1).to({regX:5.6,regY:4.2,x:-1,y:0.1},0).wait(1).to({regX:8.5,regY:4.4,x:2,y:0.3},0).wait(1).to({x:2.3},0).wait(1).to({x:2.8},0).wait(1).to({x:3.2},0).wait(1).to({x:3.4},0).wait(1).to({regX:5.6,regY:4.2,x:0.6,y:0.1},0).wait(1).to({regX:8.5,regY:4.4,x:3.5,y:0.3},0).wait(1).to({x:3.3},0).wait(1).to({x:3.2},0).wait(1).to({x:3},0).wait(1).to({x:2.9},0).wait(1).to({regX:5.6,regY:4.2,x:0,y:0.1},0).wait(1).to({regX:8.5,regY:4.4,x:2.9,y:0.3},0).wait(1).to({x:3},0).wait(2).to({x:3.1},0).wait(1).to({regX:5.6,regY:4.2,x:0.2,y:0.1},0).wait(10));

	// Layer 2
	this.instance_1 = new lib.arrow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.2,0.1,1,1,0,0,0,5.6,4.2);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-1.1},8,cjs.Ease.get(1)).wait(2).to({x:19.9},8,cjs.Ease.get(-1)).to({_off:true},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.4,-3.9,5.4,8.4);


(lib.arrowMain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.arrow = new lib.cta_arrow();
	this.arrow.name = "arrow";
	this.arrow.parent = this;
	this.arrow.setTransform(10.8,10.8);

	this.arrow_1 = new lib.cta_arrowmo();
	this.arrow_1.name = "arrow_1";
	this.arrow_1.parent = this;
	this.arrow_1.setTransform(10.8,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arrow}]}).to({state:[{t:this.arrow_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.2,6.8,5.4,8.4);


(lib.animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_58 = function() {
		this.stop()
		exportRoot.bannerStart = false
	}
	this.frame_59 = function() {
		exportRoot.bannerStart = true
	}
	this.frame_133 = function() {
		this.gotoAndPlay(58)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(58).call(this.frame_58).wait(1).call(this.frame_59).wait(74).call(this.frame_133).wait(1));

	// FillBlue
	this.fillBlue = new lib.FillBlue();
	this.fillBlue.name = "fillBlue";
	this.fillBlue.parent = this;
	this.fillBlue.setTransform(52.4,28.7,1,1,0,0,0,10.9,18.8);
	this.fillBlue._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fillBlue).wait(59).to({_off:false},0).to({regY:18.9,scaleX:1.05,scaleY:0.92,x:57.5,y:30.4},22,cjs.Ease.cubicInOut).to({regX:11,scaleX:0.94,scaleY:1.08,x:47.4,y:27.3},30,cjs.Ease.cubicInOut).wait(1).to({regX:10.9,regY:18.8,x:47.3,y:27.2},0).wait(1).to({scaleX:0.94,scaleY:1.08},0).wait(1).to({x:47.4},0).wait(1).to({scaleX:0.94,scaleY:1.08},0).wait(1).to({scaleX:0.94,scaleY:1.08,x:47.5},0).wait(1).to({scaleX:0.94,scaleY:1.08,x:47.6,y:27.3},0).wait(1).to({scaleX:0.94,scaleY:1.07,x:47.8},0).wait(1).to({scaleX:0.95,scaleY:1.07,x:48},0).wait(1).to({scaleX:0.95,scaleY:1.07,x:48.3,y:27.5},0).wait(1).to({scaleX:0.96,scaleY:1.06,x:48.7},0).wait(1).to({scaleX:0.96,scaleY:1.05,x:49.2,y:27.7},0).wait(1).to({scaleX:0.97,scaleY:1.04,x:49.7,y:27.8},0).wait(1).to({scaleX:0.98,scaleY:1.03,x:50.2,y:28},0).wait(1).to({scaleX:0.98,scaleY:1.02,x:50.7,y:28.1},0).wait(1).to({scaleX:0.99,scaleY:1.02,x:51.1,y:28.2},0).wait(1).to({scaleX:0.99,scaleY:1.01,x:51.5,y:28.3},0).wait(1).to({scaleX:0.99,scaleY:1.01,x:51.7,y:28.4},0).wait(1).to({scaleX:1,scaleY:1.01,x:51.9},0).wait(1).to({scaleX:1,scaleY:1,x:52,y:28.5},0).wait(1).to({scaleX:1,scaleY:1,x:52.2},0).wait(1).to({scaleX:1,scaleY:1,x:52.3,y:28.7},0).wait(2));

	// FillBlue
	this.fillBlue_1 = new lib.FillBlue();
	this.fillBlue_1.name = "fillBlue_1";
	this.fillBlue_1.parent = this;
	this.fillBlue_1.setTransform(57.1,34.6,0.122,0.689,0,0,0,11.1,18.8);
	this.fillBlue_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fillBlue_1).wait(35).to({_off:false},0).wait(1).to({regY:18.9,scaleX:0.28,scaleY:0.74,x:56.4,y:33.6},0).wait(1).to({regX:11.2,scaleX:0.43,scaleY:0.79,x:55.8,y:32.7},0).wait(1).to({regX:11.4,regY:19.1,scaleX:0.54,scaleY:0.83,x:55.4,y:32.1},0).wait(1).to({scaleX:0.65,scaleY:0.87,x:55,y:31.5},0).wait(1).to({regX:11.7,regY:19.2,scaleX:0.73,scaleY:0.9,x:54.8,y:31},0).wait(1).to({regY:19.4,scaleX:0.8,scaleY:0.92,x:54.5,y:30.8},0).wait(1).to({regX:11.8,scaleX:0.85,scaleY:0.94,x:54.3,y:30.4},0).wait(1).to({regX:11.9,regY:19.6,scaleX:0.89,scaleY:0.95,x:54.1,y:30.3},0).wait(1).to({regX:12,scaleX:0.93,scaleY:0.97,y:30},0).wait(1).to({scaleX:0.94,scaleY:0.98,x:53.9,y:29.9},0).wait(1).to({regX:12.2,regY:19.7,scaleX:0.97,scaleY:0.98,x:54},0).wait(1).to({regX:12.5,scaleX:0.98,scaleY:0.99,x:54.2,y:29.8},0).wait(1).to({regX:12.7,scaleX:0.99,scaleY:1,x:54.3,y:29.7},0).wait(1).to({regY:19.8,scaleX:0.99,scaleY:1,x:54.2,y:29.8},0).wait(1).to({regX:13,regY:20,scaleX:1,scaleY:1,x:54.5,y:29.9},0).wait(1).to({regX:13.1,regY:20.1,scaleX:1,scaleY:1,x:54.6,y:30},0).wait(1).to({regX:13.4,scaleX:1,scaleY:1,x:54.9},0).wait(1).to({regX:10.9,regY:18.8,scaleX:1,scaleY:1,x:52.3,y:28.7},0).wait(4).to({_off:true},2).wait(75));

	// SpeechLeft
	this.instance = new lib.LeftBubBod("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(0.5,47.1,1,1,0,0,0,0.5,47.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({_off:false},0).wait(35).to({mode:"single",startPosition:35},0).wait(2).to({mode:"synched",startPosition:47,loop:false},0).wait(75));

	// SpeecRight
	this.instance_1 = new lib.RightBubBod("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(104.2,57,1,1,0,0,0,62.7,47.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27).to({_off:false},0).wait(30).to({mode:"single",startPosition:30},0).wait(2).to({mode:"synched",startPosition:47,loop:false},0).wait(75));

	// TailRight
	this.instance_2 = new lib.TailRight("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(99.7,63.4,1,1,0,0,0,5,6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).wait(50).to({mode:"single",startPosition:19},0).wait(2).to({mode:"synched",loop:false},0).wait(75));

	// TailLeft
	this.instance_3 = new lib.TailLeft("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(31.6,71.3,1,1,0,0,0,31.6,23.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).wait(55).to({mode:"single",startPosition:19},0).wait(2).to({mode:"synched",loop:false},0).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.CTA_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.arrow = new lib.arrowMain();
	this.arrow.name = "arrow";
	this.arrow.parent = this;
	this.arrow.setTransform(66.8,2.7,1.474,1.474,0,0,0,11,10.5);

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0078D4").s().p("Ar5DBIAAmBIXzAAIAAGBg");
	this.shape.setTransform(14,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CTA_btn, new cjs.Rectangle(-62.1,-14.9,152.3,38.7), null);


(lib.Intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Animation
	this.animation = new lib.animation();
	this.animation.name = "animation";
	this.animation.parent = this;
	this.animation.setTransform(210.8,175,1,1,0,0,0,31.6,23.8);

	this.timeline.addTween(cjs.Tween.get(this.animation).wait(1));

}).prototype = getMCSymbolPrototype(lib.Intro, null, null);


(lib.mainMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// replay
	this.replay_btn = new lib.replay_btn();
	this.replay_btn.name = "replay_btn";
	this.replay_btn.parent = this;
	this.replay_btn.setTransform(285.1,4.3,0.348,0.348,0,0,180,-0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.replay_btn).wait(1));

	// MSFT Logo
	this.msft_logo = new lib.logos();
	this.msft_logo.name = "msft_logo";
	this.msft_logo.parent = this;
	this.msft_logo.setTransform(188.3,25.9,1,1,0,0,0,1,2.8);

	this.timeline.addTween(cjs.Tween.get(this.msft_logo).wait(1));

	// CTA
	this.txtCta = new lib.cta();
	this.txtCta.name = "txtCta";
	this.txtCta.parent = this;
	this.txtCta.setTransform(80.5,182.7,0.496,0.496);

	this.timeline.addTween(cjs.Tween.get(this.txtCta).wait(1));

	// circle Bonus
	this.bg_circle = new lib.circle_bg();
	this.bg_circle.name = "bg_circle";
	this.bg_circle.parent = this;
	this.bg_circle.setTransform(199.4,177.6);

	this.timeline.addTween(cjs.Tween.get(this.bg_circle).wait(1));

	// CTA_BG
	this.cta = new lib.CTA_btn();
	this.cta.name = "cta";
	this.cta.parent = this;
	this.cta.setTransform(76.6,179.7,0.943,0.943,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// Intro
	this.anim = new lib.Intro();
	this.anim.name = "anim";
	this.anim.parent = this;
	this.anim.setTransform(301,263.2,1,1,0,0,0,300,250.2);

	this.timeline.addTween(cjs.Tween.get(this.anim).wait(1));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111111").s().p("A3vT0MAAAgnnMAvfAAAMAAAAnng");
	this.shape.setTransform(150,124.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mainMC, new cjs.Rectangle(-1.9,-1.9,304,253.5), null);


// stage content:
(lib.Azure_AI_USA_300x250_BAN_Word_English_TryFree_NA_ANI_BN_T1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var mc = exportRoot.mainMC
		
		this.initBanner = function (data) {
		
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
						} else if (id == "smal" && data[keys[i]].length > 1) {
							exportRoot['' + keys[i]] = new Array()
							exportRoot.fillHead(data[keys[i]], exportRoot['' + keys[i]])
						} else if (id == "cost" && data[keys[i]].length > 1) {
							exportRoot.fillPriceMc(data[keys[i]])
						} else if (id == "flag" && data[keys[i]].length > 1) {
							exportRoot['' + keys[i]] = new Array()
							exportRoot.fillFlag(data[keys[i]], parseInt(keys[i].substr((keys[i].length-1), keys[i].length)))
						} else if (id == "CTA" && data[keys[i]].length > 1) {
							exportRoot.fillCta(data[keys[i]])
						} else if (id == "CTAa") {
							mc.cta.arrow.visible = data[keys[i]][0]
							mc.cta.arrow.x += data[keys[i]][1]
							mc.cta.arrow.y += data[keys[i]][2]
						}
				}
		}
		
		
		
		this.fillHead = function (txtDetails, aVar) {
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
				mc.y += parseInt(size)
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
				if (mc.getTransformedBounds()) mc.cache(mc.getTransformedBounds().width*-1,mc.getTransformedBounds().height*-1,mc.getTransformedBounds().width*2,mc.getTransformedBounds().height*2,1.5)
				stage.addChild(mc);
				aVar.push(mc)
			}
		}
		
		this.fillPriceMc = function (txtDetails) {
		
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
					if (mc.getTransformedBounds()) mc.cache(mc.getTransformedBounds().width*-1,mc.getTransformedBounds().height*-1,mc.getTransformedBounds().width*2,mc.getTransformedBounds().height*2,1.5)
		
				this.mainMC.bg_circle.addChild(mc);
			}
		}
		
		
		this.fillCta = function (txtDetails) {
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
		
		this.getTheSentences = function (text, size, xOffset, yOffset, lineSpacing, lineWidth, align) {
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
		
		
		
		exportRoot.tl1 = new TimelineLite();
		var mc = exportRoot.mainMC
		
		var bannerStart = exportRoot.bannerStart = true
		
		this.runBanner = function() {
			exportRoot.tlH1 = new TimelineLite();
			for (var i = 0; i < exportRoot.headline1.length; i++) {
				if (i==0) {
							exportRoot.tlH1.from(exportRoot.headline1[i], 0.7, {x: "+=250",	alpha: 0, ease: Power4.easeOut}, "+=0.2");
				} else {
							exportRoot.tlH1.from(exportRoot.headline1[i], 0.7, {x: "+=250",	alpha: 0, ease: Power4.easeOut}, "-=0.6");
				}
		
			}	
			exportRoot.tlH1.stop()
			
			exportRoot.tl1.to(mc.msft_logo, 0.7, {alpha: 1,	x: "-=200",	ease: Power4.easeOut,	onStart: function(){exportRoot.tlH1.play();mc.cta.arrow.gotoAndStop(1)}});
		
			exportRoot.tl1.to(mc.txtCta, 0.7, {alpha: 1,	x: "-=100", ease: Power4.easeOut}, "-=0.5");
			exportRoot.tl1.to(mc.cta, 0.7, {alpha: 1,	x: "-=100",	ease: Power4.easeOut, onStart: function(){exportRoot.tlH1.play();mc.anim.animation.gotoAndPlay(1)}}, "-=0.7");
			
			
		
			
			
		}
			mc.bg_circle.x += 200; mc.bg_circle.alpha = 0
			mc.msft_logo.x += 200; mc.msft_logo.alpha = 0
			mc.txtCta.x += 100; mc.txtCta.alpha = 0
			mc.cta.x += 100; mc.cta.alpha = 0
			mc.replay_btn.x+=200
		
			mc.msft_logo.cache(-150,-30,300,60,1.5)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mainMC
	this.mainMC = new lib.mainMC();
	this.mainMC.name = "mainMC";
	this.mainMC.parent = this;
	this.mainMC.setTransform(0,0.1,1,1,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.mainMC).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(148.1,123.1,304,253.5);
// library properties:
lib.properties = {
	id: '90A26FE74B042E4A89CA750D1DA2DF1F',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['90A26FE74B042E4A89CA750D1DA2DF1F'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;