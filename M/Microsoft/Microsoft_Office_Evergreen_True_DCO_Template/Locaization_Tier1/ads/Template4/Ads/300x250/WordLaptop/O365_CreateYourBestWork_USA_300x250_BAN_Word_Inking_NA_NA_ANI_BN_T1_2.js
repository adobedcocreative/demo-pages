(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"O365_CreateYourBestWork_USA_300x250_BAN_Word_Inking_NA_NA_ANI_BN_T1_2_atlas_", frames: [[759,251,93,13],[482,291,377,42],[482,335,377,16],[759,61,100,29],[759,92,100,29],[759,0,153,59],[759,123,20,126],[482,0,275,289],[0,0,480,360]]}
];


// symbols:



(lib.highlighted = function() {
	this.spriteSheet = ss["O365_CreateYourBestWork_USA_300x250_BAN_Word_Inking_NA_NA_ANI_BN_T1_2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.menu = function() {
	this.spriteSheet = ss["O365_CreateYourBestWork_USA_300x250_BAN_Word_Inking_NA_NA_ANI_BN_T1_2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.menu_btm = function() {
	this.spriteSheet = ss["O365_CreateYourBestWork_USA_300x250_BAN_Word_Inking_NA_NA_ANI_BN_T1_2_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.menu_pens_red = function() {
	this.spriteSheet = ss["O365_CreateYourBestWork_USA_300x250_BAN_Word_Inking_NA_NA_ANI_BN_T1_2_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.menu_pens_yellow = function() {
	this.spriteSheet = ss["O365_CreateYourBestWork_USA_300x250_BAN_Word_Inking_NA_NA_ANI_BN_T1_2_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.penmoveshadow = function() {
	this.spriteSheet = ss["O365_CreateYourBestWork_USA_300x250_BAN_Word_Inking_NA_NA_ANI_BN_T1_2_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.PenPurple = function() {
	this.spriteSheet = ss["O365_CreateYourBestWork_USA_300x250_BAN_Word_Inking_NA_NA_ANI_BN_T1_2_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.screen2 = function() {
	this.spriteSheet = ss["O365_CreateYourBestWork_USA_300x250_BAN_Word_Inking_NA_NA_ANI_BN_T1_2_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Surfacelaptop1 = function() {
	this.spriteSheet = ss["O365_CreateYourBestWork_USA_300x250_BAN_Word_Inking_NA_NA_ANI_BN_T1_2_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
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


(lib.scroll_screen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.screen2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.scroll_screen, new cjs.Rectangle(0,0,275,289), null);


(lib.replay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("ABNA/YgaAagnAIghgOYgigOgWghAAgkYAAglAXghAigNYAigNAnAJAZAbIgWAUYgRgSgagGgWAJYgXAJgPAWAAAYYAAAYAOAWAXAKYAWAJAagFARgSg");
	this.shape.setTransform(1.3,0.1,0.877,0.877,135,0,0,1.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgmgTIBNAAIgnAmg");
	this.shape_1.setTransform(-5.3,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.2,-7.8,18.4,15.8);


(lib.pen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.PenPurple();
	this.instance.parent = this;
	this.instance.setTransform(47.1,25.1,1.669,1.669,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pen, new cjs.Rectangle(0,0,150.9,261.6), null);


(lib.ms = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#737373").s().p("AANApIAAgvIggAAIAABKIgVAAIAAhKIgQAAIAAgSIAQAAIAAgMQAAgJADgJQAFgIAHgDQAIgEAKgBQAGAAAFACIABAAIAAATIgBAAQgFgCgEgBQgGABgEAEQgDADgBAJIAAALIAgAAIAAgUIABgBIAUgGIABAAIAAAbIAWAAIAAASIgWAAIAAArQAAAJADADQADADAHABIAIgDIABgBIAAASIAAABIgHACIgJABQgcgBAAgdg");
	this.shape.setTransform(30.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#737373").s().p("AgiAjQgMgMAAgWQAAgXAMgMQANgOAWAAQAWAAAMANQAMAMAAAXQABAVgNAOQgNAOgWAAQgVgBgNgNgAgRgWQgHAIAAAPQAAAOAHAHQAGAJALAAQANAAAGgJQAGgHAAgPQAAgNgGgJQgHgHgMgBQgLAAgGAIg");
	this.shape_1.setTransform(20.1,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#737373").s().p("AgSAvIgMgEIAAgVIABAAQAFAEAHADQAGACAGAAQAOAAAAgJQAAgDgCgDIgFgDIgKgGQgJgDgEgEQgEgCgDgFQgCgFAAgHQAAgNAKgHQAKgJAPAAIAKABIAKAEIABAAIAAAUIgBgBQgEgDgGgCIgLgBQgGAAgCACQgEACAAAFQAAAEADADQACADAKAEQANAGAFAFQAGAGAAAKQAAAMgKAIQgKAJgQAAIgNgCg");
	this.shape_2.setTransform(11.3,2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#737373").s().p("AgiAjQgMgMAAgWQAAgXANgMQAMgOAWAAQAWAAAMANQAMANAAAWQABAVgNAOQgOAOgVAAQgVgBgNgNgAgRgWQgHAIAAAPQAAAOAHAHQAGAJAMAAQALAAAHgJQAGgIAAgOQAAgNgHgJQgGgHgMgBQgLAAgGAIg");
	this.shape_3.setTransform(2.5,2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#737373").s().p("AgaAvIAAhcIAWAAIAAARIAAAAQADgIAEgEQAHgGAIAAQAFAAADABIABAAIAAAXIgBgBIgFgCIgHgBQgIAAgGAHQgEAJAAAKIAAAvg");
	this.shape_4.setTransform(-5.1,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#737373").s().p("AgNAqQgLgFgFgLQgGgKAAgNQAAgOAGgMQAGgMALgGQALgGAPgBIAMACIAKADIAAABIAAAUIgBAAQgKgIgLAAQgMAAgHAJQgIAIAAAOQAAANAIAIQAGAJANAAQAFAAAGgCIAKgGIABgBIAAAUIAAAAQgLAHgPAAQgNAAgKgHg");
	this.shape_5.setTransform(-13.1,2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#737373").s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgDAFgBQAGABAEADQADADAAAFQAAAFgEAEQgDADgGABQgFgBgDgDg");
	this.shape_6.setTransform(-19.3,-5.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#737373").s().p("AgKAuIAAhbIAVAAIAABbg");
	this.shape_7.setTransform(-19.3,2.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#737373").s().p("AAwBAIABhoIgBAAIgCALIgnBdIgOAAIgmhcIgDgMIgBAAIABBoIgVAAIAAh/IAgAAIAlBhIAohhIAeAAIAAB/g");
	this.shape_8.setTransform(-29.5,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ms, new cjs.Rectangle(-36.4,-7,72.9,14.1), null);


(lib.cta_arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYBIIA4g1IiBAAIAAgkICBAAIg5g2IAuAAIBNBHIhNBIg");
	this.shape.setTransform(0.2,0,0.576,0.576);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_arrow, new cjs.Rectangle(-5.4,-4.1,11.3,8.4), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.cta, null, null);


(lib.moveshadeopac = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.penmoveshadow();
	this.instance.parent = this;
	this.instance.setTransform(0,53.5,1,0.751,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.moveshadeopac, new cjs.Rectangle(0,0,158.9,95), null);


(lib.logo_box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEBA00").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape.setTransform(5.6,5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#03A5EA").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_1.setTransform(-5.7,5.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7CBB01").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_2.setTransform(5.6,-5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F25022").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_3.setTransform(-5.7,-5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_box, new cjs.Rectangle(-10.8,-10.7,21.6,21.6), null);


(lib.highlight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.highlighted();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.highlight, new cjs.Rectangle(0,0,93,13), null);


(lib.cta_glare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_9 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.478)","rgba(255,255,255,0)"],[0,0.51,1],-125.2,-0.1,-58.4,-0.1).s().p("Ao9CXIAAktIR6AAIAAEtg");
	this.shape.setTransform(57.4,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.478)","rgba(255,255,255,0)"],[0,0.51,1],58.5,-0.9,125.3,-0.9).s().p("Ao9CXIAAktIR6AAIAAEtg");
	this.shape_1.setTransform(57.4,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},7).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.circle_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.circle_bg, null, null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYBIIA4g1IiBAAIAAgkICBAAIg5g2IAuAAIBNBHIhNBIg");
	this.shape.setTransform(5.6,4.2,0.576,0.576);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(0,0,11.3,8.4), null);


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
	this.instance.setTransform(-18.6,16.6,1.754,1.754);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},1).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.8,2.8,32.2,27.7);


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
	mask.graphics.p("AhIBJQgegfAAgqQAAgpAegfQAfgeApAAQAqAAAfAeQAeAfAAApQAAAqgeAfQgfAegqAAQgpAAgfgeg");

	// Layer 4
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(-18.1,0.1,1,1,0,0,0,5.6,4.2);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({x:2.2},8,cjs.Ease.get(1)).wait(1).to({x:2},0).wait(1).to({x:1.4},0).wait(1).to({x:0.4},0).wait(1).to({x:-0.4},0).wait(1).to({x:-0.9},0).wait(1).to({x:-1},0).wait(1).to({x:-0.9},0).wait(1).to({x:-0.6},0).wait(1).to({x:-0.1},0).wait(1).to({x:0.3},0).wait(1).to({x:0.5},0).wait(1).to({x:0.6},0).wait(2).to({x:0.4},0).wait(1).to({x:0.3},0).wait(1).to({x:0.1},0).wait(1).to({x:0},0).wait(3).to({x:0.1},0).wait(2).to({x:0.2},0).wait(11));

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
p.nominalBounds = new cjs.Rectangle(-5.4,-4.1,11.3,8.4);


(lib.moveshadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.moveshadeopac();
	this.instance.parent = this;
	this.instance.setTransform(67.3,13.8,1,1,0,0,0,79.4,47.5);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.moveshadow, new cjs.Rectangle(-12.1,-33.7,158.9,95), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ms();
	this.instance.parent = this;
	this.instance.setTransform(14,-0.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEBA00").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape.setTransform(-34,5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#03A5EA").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_1.setTransform(-45.3,5.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7CBB01").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_2.setTransform(-34,-5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F25022").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_3.setTransform(-45.3,-5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-50.4,-10.7,100.9,21.6), null);


(lib.MSFT_logo_sq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.logo_box = new lib.logo_box();
	this.logo_box.name = "logo_box";
	this.logo_box.parent = this;
	this.logo_box.setTransform(-40,1.4);

	this.timeline.addTween(cjs.Tween.get(this.logo_box).wait(1));

}).prototype = getMCSymbolPrototype(lib.MSFT_logo_sq, new cjs.Rectangle(-50.8,-9.3,21.5,21.5), null);


(lib.MSFT_Logo_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ms();
	this.instance.parent = this;
	this.instance.setTransform(13.7,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEBA00").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape.setTransform(-34.4,7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#03A5EA").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_1.setTransform(-45.7,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7CBB01").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_2.setTransform(-34.4,-4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F25022").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_3.setTransform(-45.7,-4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MSFT_Logo_anim, new cjs.Rectangle(-50.8,-9.3,100.9,21.5), null);


(lib.MSFT_Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.logo = new lib.logo();
	this.logo.name = "logo";
	this.logo.parent = this;
	this.logo.setTransform(-0.3,1.4);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

}).prototype = getMCSymbolPrototype(lib.MSFT_Logo, new cjs.Rectangle(-50.8,-9.3,100.9,21.5), null);


(lib.device_animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_270 = function() {
		exportRoot.tl2.play()
		exportRoot.finalHeadline.play()
	}
	this.frame_286 = function() {
		exportRoot.subHeadline.play()
	}
	this.frame_292 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(270).call(this.frame_270).wait(16).call(this.frame_286).wait(6).call(this.frame_292).wait(2));

	// Pen
	this.pen = new lib.pen();
	this.pen.name = "pen";
	this.pen.parent = this;
	this.pen.setTransform(683.1,348.3,1,1,54,0,0,107.7,198.3);
	this.pen._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pen).wait(11).to({_off:false},0).wait(1).to({regX:88,regY:123.4,rotation:53.9,x:729.3,y:287.7},0).wait(1).to({rotation:53.7,x:725.5,y:286.9},0).wait(1).to({rotation:53.5,x:720.7,y:285.8},0).wait(1).to({rotation:53.3,x:714.9,y:284.6},0).wait(1).to({rotation:53,x:707.9,y:283.1},0).wait(1).to({rotation:52.7,x:699.7,y:281.4},0).wait(1).to({rotation:52.3,x:690.4,y:279.4},0).wait(1).to({rotation:51.9,x:679.8,y:277.1},0).wait(1).to({rotation:51.4,x:667.9,y:274.6},0).wait(1).to({rotation:50.9,x:654.9,y:271.8},0).wait(1).to({rotation:50.3,x:640.5,y:268.8},0).wait(1).to({rotation:49.7,x:624.9,y:265.5},0).wait(1).to({rotation:49,x:608.3,y:262.1},0).wait(1).to({rotation:48.3,x:590.8,y:258.4},0).wait(1).to({rotation:47.5,x:572.4,y:254.6},0).wait(1).to({rotation:46.8,x:553.3,y:250.6},0).wait(1).to({rotation:46,x:534,y:246.5},0).wait(1).to({rotation:45.2,x:514.5,y:242.5},0).wait(1).to({rotation:44.4,x:495.1,y:238.5},0).wait(1).to({rotation:43.6,x:476,y:234.7},0).wait(1).to({rotation:42.9,x:457.5,y:230.9},0).wait(1).to({rotation:42.2,x:439.8,y:227.2},0).wait(1).to({rotation:41.5,x:423.1,y:223.9},0).wait(1).to({rotation:40.9,x:407.4,y:220.7},0).wait(1).to({rotation:40.3,x:392.8,y:217.7},0).wait(1).to({rotation:39.7,x:379.4,y:215.1},0).wait(1).to({rotation:39.2,x:367.2,y:212.6},0).wait(1).to({rotation:38.8,x:356.2,y:210.4},0).wait(1).to({rotation:38.4,x:346.3,y:208.4},0).wait(1).to({rotation:38,x:337.7,y:206.7},0).wait(1).to({rotation:37.7,x:330.1,y:205.2},0).wait(1).to({rotation:37.5,x:323.6,y:203.9},0).wait(1).to({rotation:37.3,x:318.1,y:202.8},0).wait(1).to({rotation:37.1,x:313.6,y:201.9},0).wait(1).to({regX:107.7,regY:198.4,rotation:36.9,x:280.8,y:273},0).wait(15).to({regX:107.9,rotation:24.2,x:366.5,y:273.1},20,cjs.Ease.quadInOut).wait(7).to({y:272.8},0).wait(1).to({regX:88,regY:123.4,rotation:24.3,x:376.7,y:194.2},0).wait(1).to({rotation:24.5,x:373.3,y:191.2},0).wait(1).to({rotation:24.8,x:368.7,y:187.2},0).wait(1).to({rotation:25.2,x:362.9,y:182.3},0).wait(1).to({rotation:25.7,x:355.8,y:176.2},0).wait(1).to({rotation:26.2,x:347.4,y:168.8},0).wait(1).to({rotation:26.9,x:337.5,y:160.4},0).wait(1).to({rotation:27.6,x:326.3,y:150.7},0).wait(1).to({rotation:28.5,x:313.8,y:140},0).wait(1).to({rotation:29.3,x:300.4,y:128.5},0).wait(1).to({rotation:30.3,x:286.3,y:116.5},0).wait(1).to({rotation:31.2,x:272.1,y:104.4},0).wait(1).to({rotation:32.1,x:258.3,y:92.5},0).wait(1).to({rotation:33,x:245.2,y:81.4},0).wait(1).to({rotation:33.7,x:233.3,y:71.4},0).wait(1).to({rotation:34.4,x:222.9,y:62.4},0).wait(1).to({rotation:35,x:213.9,y:54.9},0).wait(1).to({rotation:35.5,x:206.6,y:48.7},0).wait(1).to({rotation:35.9,x:200.7,y:43.7},0).wait(1).to({rotation:36.2,x:196.2,y:39.9},0).wait(1).to({regX:107.9,regY:198.4,rotation:36.4,x:164.6,y:109.4},0).wait(9).to({regY:198.3,scaleX:1,scaleY:1,rotation:31.4,x:163.7},3).to({scaleX:1,scaleY:1,rotation:28.2,x:163,y:109.3},2).to({regY:198.4,rotation:36.4,x:164.6,y:109.4},5).wait(15).to({x:164.3},0).wait(1).to({regX:88,regY:123.4,rotation:36.3,x:192.7,y:38.5},0).wait(1).to({rotation:36.1,y:40.3},0).wait(1).to({rotation:36,y:42.5},0).wait(1).to({rotation:35.7,y:45.4},0).wait(1).to({rotation:35.5,y:48.9},0).wait(1).to({rotation:35.1,x:192.8,y:53},0).wait(1).to({rotation:34.8,y:57.7},0).wait(1).to({rotation:34.3,y:63.1},0).wait(1).to({rotation:33.8,x:192.9,y:69.2},0).wait(1).to({rotation:33.3,y:75.9},0).wait(1).to({rotation:32.7,y:83.1},0).wait(1).to({rotation:32.1,y:90.8},0).wait(1).to({rotation:31.5,y:98.8},0).wait(1).to({rotation:30.8,y:106.8},0).wait(1).to({rotation:30.2,y:114.8},0).wait(1).to({rotation:29.6,y:122.5},0).wait(1).to({rotation:29,y:129.6},0).wait(1).to({rotation:28.5,y:136.2},0).wait(1).to({rotation:28.1,y:142.2},0).wait(1).to({rotation:27.6,y:147.4},0).wait(1).to({rotation:27.3,y:151.8},0).wait(1).to({rotation:27,y:155.5},0).wait(1).to({rotation:26.8,y:158.5},0).wait(1).to({rotation:26.6,y:160.9},0).wait(1).to({regX:107.9,regY:198.3,rotation:26.4,x:177.3,y:238.6},0).wait(16).to({x:177.7,y:239.2},0).wait(1).to({regX:88,regY:123.4,x:194.8,y:162.8},0).wait(1).to({x:196.4,y:162.3},0).wait(1).to({scaleX:1,scaleY:1,x:198.3,y:161.8},0).wait(1).to({x:200.3,y:161.3},0).wait(1).to({x:202.6,y:160.7},0).wait(1).to({x:205,y:160},0).wait(1).to({regX:108,regY:198.3,rotation:26.3,x:192.3,y:235.2},0).wait(1).to({regX:88,regY:123.4,scaleX:1,scaleY:1,rotation:27.5,x:212.4,y:159.9},0).wait(1).to({rotation:28.7,x:217.5,y:160.6},0).wait(1).to({rotation:30.1,x:223.1,y:161.4},0).wait(1).to({rotation:31.5,x:228.9,y:162.2},0).wait(1).to({rotation:33,x:235.1,y:163.3},0).wait(1).to({rotation:34.6,x:241.6,y:164.3},0).wait(1).to({rotation:36.2,x:248.5,y:165.6},0).wait(1).to({regX:108.1,regY:198.3,scaleX:1,scaleY:1,rotation:38,x:225.4,y:238},0).wait(1).to({regX:88,regY:123.4,scaleX:1,scaleY:1,rotation:44,x:268.6,y:175.6},0).wait(1).to({regX:108.2,regY:198.3,scaleX:1,scaleY:1,rotation:50.4,x:237.3,y:248.6},0).to({scaleX:1,scaleY:1,rotation:57,x:235.2,y:255.4},1).wait(1).to({regX:88,regY:123.4,scaleX:1,scaleY:1,rotation:59.9,x:276.4,y:204.1},0).wait(1).to({regX:108.3,regY:198.3,rotation:63,x:208.2,y:262.5},0).wait(1).to({regX:88,regY:123.4,scaleX:0.99,scaleY:0.99,rotation:59.9,x:256.4,y:207.3},0).wait(1).to({rotation:56.8,x:247,y:203.8},0).wait(1).to({rotation:53.4,x:237.1,y:200.4},0).wait(1).to({regX:108.4,regY:198.3,scaleX:0.99,scaleY:0.99,rotation:50,x:182.5,y:260.4},0).wait(1).to({regX:88,regY:123.4,rotation:48.1,x:220.7,y:193.6},0).wait(1).to({rotation:46.1,x:214.6,y:190.2},0).wait(1).to({regX:108.5,regY:198.2,rotation:44,x:171.2,y:254.2},0).wait(1).to({regX:88,regY:123.4,rotation:40.3,x:204.7,y:180.3},0).wait(1).to({regX:108.5,regY:198.3,scaleX:0.99,scaleY:0.99,rotation:36.1,x:173.3,y:245.6},0).wait(1).to({regX:88,regY:123.4,scaleX:1,scaleY:1,rotation:34.3,x:200.3,y:171.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:32.4,x:200,y:168.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:30.5,x:199.5,y:166.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:28.5,x:199,y:164.3},0).wait(1).to({regX:107.9,regY:198.3,scaleX:1,scaleY:1,rotation:26.4,x:183.6,y:238.2},0).wait(1).to({x:185.6},0).wait(10).to({x:184.8},0).to({regX:108,rotation:65,x:765.8,y:244.5},26,cjs.Ease.quadIn).to({_off:true},32).wait(7));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A1bbbMAAAgnOMA6yAAAMAAAAnOg");
	var mask_graphics_131 = new cjs.Graphics().p("A9ZTiMAAAgnCMA6yAAAMAAAAnCg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:239.1,y:175.5}).wait(131).to({graphics:mask_graphics_131,x:290.1,y:226.1}).wait(163));

	// MoveShadow
	this.instance = new lib.moveshadow();
	this.instance.parent = this;
	this.instance.setTransform(686.8,377.7,0.826,0.624,0,0,0,15.3,48.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).wait(1).to({regX:67.3,regY:13.8,x:718.2,y:353.7,alpha:0.013},0).wait(1).to({x:706.3,y:351.2,alpha:0.026},0).wait(1).to({x:694.2,y:348.6,alpha:0.04},0).wait(1).to({x:681.7,y:346,alpha:0.054},0).wait(1).to({x:668.9,y:343.2,alpha:0.069},0).wait(1).to({x:655.8,y:340.5,alpha:0.083},0).wait(1).to({x:642.5,y:337.6,alpha:0.098},0).wait(1).to({x:628.8,y:334.7,alpha:0.114},0).wait(1).to({x:614.9,y:331.8,alpha:0.13},0).wait(1).to({x:600.7,y:328.8,alpha:0.146},0).wait(1).to({x:586.3,y:325.7,alpha:0.162},0).wait(1).to({x:571.6,y:322.6,alpha:0.178},0).wait(1).to({x:556.7,y:319.4,alpha:0.195},0).wait(1).to({x:541.6,y:316.2,alpha:0.212},0).wait(1).to({x:526.2,y:313,alpha:0.23},0).wait(1).to({x:510.7,y:309.7,alpha:0.247},0).wait(1).to({x:495,y:306.3,alpha:0.265},0).wait(1).to({x:479.1,y:303,alpha:0.283},0).wait(1).to({regX:15.5,regY:48.3,x:420.3,y:321.1,alpha:0.301},0).wait(1).to({regX:67.3,regY:13.8,x:449.4,y:296.7},0).wait(1).to({x:435.7,y:293.8},0).wait(1).to({x:422,y:290.9},0).wait(1).to({x:408.6,y:288.1},0).wait(1).to({x:395.8,y:285.4},0).wait(1).to({x:383.8,y:282.8},0).wait(1).to({x:372.7,y:280.5},0).wait(1).to({x:362.5,y:278.3},0).wait(1).to({x:353.3,y:276.4},0).wait(1).to({x:345.2,y:274.7},0).wait(1).to({x:338.1,y:273.2},0).wait(1).to({x:332,y:271.9},0).wait(1).to({x:326.9,y:270.8},0).wait(1).to({x:322.6,y:269.9},0).wait(1).to({x:319.2,y:269.2},0).wait(1).to({regX:15.3,regY:48.1,x:273.8,y:290.2},0).wait(16).to({regX:67.3,regY:13.8,x:318.4,y:268.8},0).wait(1).to({x:320.6},0).wait(1).to({x:323.4,y:268.9},0).wait(1).to({x:326.8},0).wait(1).to({x:330.8,y:269},0).wait(1).to({x:335.5,y:269.1},0).wait(1).to({x:340.8,y:269.2},0).wait(1).to({x:346.7,y:269.3},0).wait(1).to({x:353.1,y:269.4},0).wait(1).to({x:359.7,y:269.5},0).wait(1).to({x:366.4,y:269.6},0).wait(1).to({x:373.1,y:269.7},0).wait(1).to({x:379.3,y:269.8},0).wait(1).to({x:385.1,y:269.9},0).wait(1).to({x:390.3,y:270},0).wait(1).to({x:394.8,y:270.1},0).wait(1).to({x:398.6,y:270.2},0).wait(1).to({x:401.7},0).wait(1).to({x:404.2,y:270.3},0).wait(1).to({regX:15.3,regY:48.1,x:363.1,y:291.7},0).wait(8).to({regX:67.3,regY:13.8,x:402.5,y:269.4},0).wait(1).to({x:397.3,y:268.2},0).wait(1).to({x:390.4,y:266.5},0).wait(1).to({x:381.7,y:264.4},0).wait(1).to({x:371,y:261.9},0).wait(1).to({x:358.2,y:258.8},0).wait(1).to({x:343.2,y:255.2},0).wait(1).to({x:326.3,y:251.1},0).wait(1).to({x:307.4,y:246.6},0).wait(1).to({regX:15.3,regY:48.3,x:244.1,y:263.2},0).wait(1).to({regX:67.3,regY:13.8,x:275.7,y:223.8},0).wait(1).to({x:264.2,y:205.9},0).wait(1).to({x:253,y:188.4},0).wait(1).to({x:242.4,y:171.9},0).wait(1).to({x:232.8,y:157},0).wait(1).to({x:224.4,y:143.8},0).wait(1).to({x:217.1,y:132.5},0).wait(1).to({x:211.2,y:123.2},0).wait(1).to({x:206.4,y:115.8},0).wait(1).to({x:202.8,y:110.2},0).wait(1).to({regX:15.3,regY:48.1,x:157.4,y:127.7},0).wait(34).to({x:164,y:128.2},0).wait(1).to({regX:67.3,regY:13.8,x:207.1,y:108.1},0).wait(1).to({x:207.3,y:109.9},0).wait(1).to({x:207.5,y:112.2},0).wait(1).to({x:207.8,y:115.1},0).wait(1).to({x:208.1,y:118.6},0).wait(1).to({x:208.5,y:122.8},0).wait(1).to({x:209,y:127.6},0).wait(1).to({x:209.6,y:133},0).wait(1).to({x:210.2,y:139.2},0).wait(1).to({x:210.9,y:145.9},0).wait(1).to({x:211.6,y:153.2},0).wait(1).to({x:212.4,y:161},0).wait(1).to({x:213.2,y:169},0).wait(1).to({x:214,y:177.1},0).wait(1).to({x:214.8,y:185.1},0).wait(1).to({x:215.5,y:192.8},0).wait(1).to({x:216.3,y:200},0).wait(1).to({x:216.9,y:206.6},0).wait(1).to({x:217.5,y:212.5},0).wait(1).to({x:218,y:217.7},0).wait(1).to({x:218.5,y:222.1},0).wait(1).to({x:218.8,y:225.8},0).wait(1).to({x:219.1,y:228.9},0).wait(1).to({x:219.4,y:231.2},0).wait(1).to({regX:15.3,regY:48.1,x:176.6,y:254.4},0).wait(16).to({x:172.2,y:258},0).wait(1).to({regX:67.3,regY:13.8,x:216.6,y:236.1},0).wait(1).to({x:218.3,y:235.5},0).wait(1).to({x:220.3,y:234.8},0).wait(1).to({x:222.6,y:234},0).wait(1).to({x:225.2,y:233},0).wait(1).to({x:228.2,y:232},0).wait(1).to({regX:15.3,regY:48.3,x:188.5,y:252.4},0).wait(1).to({regX:67.3,regY:13.8,x:234.2,y:231},0).wait(1).to({x:237.3,y:231.1},0).wait(1).to({x:240.6,y:231.3},0).wait(1).to({x:244.2,y:231.6},0).wait(1).to({x:248.1,y:231.8},0).wait(1).to({x:252.4,y:232},0).wait(1).to({x:256.9,y:232.3},0).wait(1).to({regX:15.5,regY:48.3,x:218.9,y:254.1},0).wait(1).to({regX:67.3,regY:13.8,x:266,y:236.6},0).wait(1).to({regX:15.5,regY:48.4,x:227.5,y:262.3},0).to({x:223.6,y:267.6},1).wait(1).to({regX:67.3,regY:13.8,x:252.9,y:249.5},0).wait(1).to({regX:15.6,regY:48.5,x:196.4,y:274.7},0).wait(1).to({regX:67.3,regY:13.8,x:233,y:252.9},0).wait(1).to({x:226.8,y:252.7},0).wait(1).to({x:220.4,y:252.6},0).wait(1).to({regX:15.6,regY:48.5,x:171.4,y:274.1},0).wait(1).to({regX:67.3,regY:13.8,x:211.2,y:250.5},0).wait(1).to({x:208.2,y:248.6},0).wait(1).to({regX:15.6,regY:48.5,x:162.6,y:268.3},0).wait(1).to({regX:67.3,regY:13.8,x:207.8,y:242.6},0).wait(1).to({regX:15.6,regY:48.5,x:167.9,y:260.1},0).wait(1).to({regX:67.3,regY:13.8,x:213.3,y:237.4},0).wait(1).to({x:216,y:236.3},0).wait(1).to({x:218.8,y:235.1},0).wait(1).to({x:221.6,y:234},0).wait(1).to({regX:15.3,regY:48.1,x:181.8,y:254.5},0).wait(1).to({x:182.6},0).wait(10).to({x:181.8},0).to({x:754.3,y:286.9},26,cjs.Ease.quadIn).to({_off:true},32).wait(7));

	// Ringmask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_184 = new cjs.Graphics().p("AgfgMIAPgEIAwAdIgPAFg");
	var mask_1_graphics_185 = new cjs.Graphics().p("AgogIIAkgNIAtAhIgiAKg");
	var mask_1_graphics_186 = new cjs.Graphics().p("AgygEIA6gVIArAkIg0APg");
	var mask_1_graphics_187 = new cjs.Graphics().p("Ag7AAIBQgdIAnAnIhIAUg");
	var mask_1_graphics_188 = new cjs.Graphics().p("AhFAEIBmglIAlAqIhbAZg");
	var mask_1_graphics_189 = new cjs.Graphics().p("AhOAIIB7gtIAiAtIhuAeg");
	var mask_1_graphics_190 = new cjs.Graphics().p("AhXAMICRg1IAeAwIiBAjg");
	var mask_1_graphics_191 = new cjs.Graphics().p("AhhAQICng9IAcAzIiVAog");
	var mask_1_graphics_192 = new cjs.Graphics().p("AhLAnIgigWIBTgdIBpggIARATIAMAXIACAIIAAACIinAlg");
	var mask_1_graphics_193 = new cjs.Graphics().p("AhUAqIglgYIBbggIB2gcIAEACIARANIANAaIAAAJIgBABIiXAYIgeAJIgDABg");
	var mask_1_graphics_194 = new cjs.Graphics().p("AiHASIBjgkICDgYIAEABIAXAKIAOAdIgDAKIgBABIinATIggAKIgEACIgXADg");
	var mask_1_graphics_195 = new cjs.Graphics().p("AiVARIBsgoICPgUIAGAAIAaAJIAQAfIgGALIgBAAIi2APIgjAMIgEACIgaAHg");
	var mask_1_graphics_196 = new cjs.Graphics().p("AiiAQIB0gqICigSIAfAHIAQAiIgHALIjIAKIglANIghAOg");
	var mask_1_graphics_197 = new cjs.Graphics().p("AiaAmIgkgVICAgwIAJgBIDAgKIAlAFIADACIAMAlIgDANIgBABIjsAAIgCAAIhRAbg");
	var mask_1_graphics_198 = new cjs.Graphics().p("AjaARICUg3IDogEIArADIAEACIAKAsIAAAQIkRgLIgDAAIheAcIgaADg");
	var mask_1_graphics_199 = new cjs.Graphics().p("Aj4AQICog9IE9AFIAMBGIk6gWIiJAmg");
	var mask_1_graphics_200 = new cjs.Graphics().p("AhkgBIiKAlIgugeIDVhMIFkBBIh2BMg");
	var mask_1_graphics_201 = new cjs.Graphics().p("AiNgUIiKAmIgugdIEChcIGJB7Ij3BUg");
	var mask_1_graphics_202 = new cjs.Graphics().p("Ai2gmIiKAmIgvgdIEvhrIGvC3Il3Bag");
	var mask_1_graphics_203 = new cjs.Graphics().p("AjAgvIiKAnIgugeIFChyIGvDOIlGBjg");
	var mask_1_graphics_204 = new cjs.Graphics().p("AhlCjIgageIhFi9IiGAlIgugeIFChyIGvDOImXB5g");
	var mask_1_graphics_205 = new cjs.Graphics().p("AiyCOIgSjGIiGAlIgugeIFChyIGvDOImTBxIiDAIg");
	var mask_1_graphics_206 = new cjs.Graphics().p("AjxCRIAsjMIiFAlIgugeIFChyIGvDOImYB0Ii+ALg");
	var mask_1_graphics_207 = new cjs.Graphics().p("AlCCRIB9jNIiFAmIgugeIFChyIGvDOImdB2IkJAJg");
	var mask_1_graphics_208 = new cjs.Graphics().p("AkxB8IB3i9IiAAnIgugeIFChxIGvDOImdB2Il0APg");
	var mask_1_graphics_209 = new cjs.Graphics().p("AmwCZICngpIB2iuIh/AmIgugeIFBhxIGwDOImnCBg");
	var mask_1_graphics_210 = new cjs.Graphics().p("AnDBmICmgqICaiZIh7AlIgvgeIFBhxIGwDOIo0DBg");
	var mask_1_graphics_211 = new cjs.Graphics().p("AnQBTICngqICuiGIh3AlIgugeIFBhxIGwDOIo0DBg");
	var mask_1_graphics_212 = new cjs.Graphics().p("AnjAJIC1gJIClhbIhWAWIgugeIFAhxIGxDPIqADag");
	var mask_1_graphics_213 = new cjs.Graphics().p("AnzgxID9AXIB9hBIhWAWIgugeIFBhxIGwDPIp/Dag");
	var mask_1_graphics_214 = new cjs.Graphics().p("AnriPIEJBnIBhgxIhWAWIgugeIFBhxIGwDPIrbDWg");
	var mask_1_graphics_215 = new cjs.Graphics().p("AnrAZIBRggIAiglIBCgeIg5gWIGqh0IGwDPIp/Dag");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(184).to({graphics:mask_1_graphics_184,x:171,y:256.2}).wait(1).to({graphics:mask_1_graphics_185,x:171.9,y:255.7}).wait(1).to({graphics:mask_1_graphics_186,x:172.9,y:255.3}).wait(1).to({graphics:mask_1_graphics_187,x:173.8,y:254.9}).wait(1).to({graphics:mask_1_graphics_188,x:174.8,y:254.5}).wait(1).to({graphics:mask_1_graphics_189,x:175.7,y:254.1}).wait(1).to({graphics:mask_1_graphics_190,x:176.6,y:253.7}).wait(1).to({graphics:mask_1_graphics_191,x:177.6,y:253.2}).wait(1).to({graphics:mask_1_graphics_192,x:178.8,y:253.1}).wait(1).to({graphics:mask_1_graphics_193,x:180,y:253}).wait(1).to({graphics:mask_1_graphics_194,x:181.4,y:253.1}).wait(1).to({graphics:mask_1_graphics_195,x:182.8,y:253.2}).wait(1).to({graphics:mask_1_graphics_196,x:184.1,y:253.3}).wait(1).to({graphics:mask_1_graphics_197,x:186.9,y:253.2}).wait(1).to({graphics:mask_1_graphics_198,x:189.7,y:253.2}).wait(1).to({graphics:mask_1_graphics_199,x:192.7,y:253.2}).wait(1).to({graphics:mask_1_graphics_200,x:196.3,y:254.2}).wait(1).to({graphics:mask_1_graphics_201,x:200.4,y:256.1}).wait(1).to({graphics:mask_1_graphics_202,x:204.6,y:257.9}).wait(1).to({graphics:mask_1_graphics_203,x:205.5,y:258.8}).wait(1).to({graphics:mask_1_graphics_204,x:205.5,y:259.9}).wait(1).to({graphics:mask_1_graphics_205,x:205.5,y:259.9}).wait(1).to({graphics:mask_1_graphics_206,x:205.5,y:260.2}).wait(1).to({graphics:mask_1_graphics_207,x:205.5,y:260.2}).wait(1).to({graphics:mask_1_graphics_208,x:203.9,y:260.6}).wait(1).to({graphics:mask_1_graphics_209,x:199.9,y:260.4}).wait(1).to({graphics:mask_1_graphics_210,x:198,y:263.5}).wait(1).to({graphics:mask_1_graphics_211,x:196.7,y:263.5}).wait(1).to({graphics:mask_1_graphics_212,x:194.8,y:264.9}).wait(1).to({graphics:mask_1_graphics_213,x:193.2,y:264.9}).wait(1).to({graphics:mask_1_graphics_214,x:194,y:264.6}).wait(1).to({graphics:mask_1_graphics_215,x:194.1,y:264.9}).wait(79));

	// Ring
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1.5,1,1).p("AgQAMQAAABAMgKQAKgHALgH");
	this.shape.setTransform(174.7,257);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(1.8,1,1).p("AighOQAKgGACgBQAygVBegIQBqgKBdAUQBgAVAVAmQAcAxgyAkQg5AoiXAWQiEAThfgDQhrgEgrgfQghgYAJggQAHgZAfgZQAdgXAygTQAWgIAUgFg");
	this.shape_1.setTransform(192.5,263.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},184).to({state:[]},86).wait(24));

	// menu tabs
	this.instance_1 = new lib.menu_pens_yellow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(138.3,117.4,0.64,0.64);

	this.instance_2 = new lib.menu_pens_red();
	this.instance_2.parent = this;
	this.instance_2.setTransform(138.3,117.4,0.64,0.64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},121).wait(173));

	// menu
	this.instance_3 = new lib.menu_btm();
	this.instance_3.parent = this;
	this.instance_3.setTransform(101.2,336.3);

	this.instance_4 = new lib.menu();
	this.instance_4.parent = this;
	this.instance_4.setTransform(101.2,101);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(294));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_61 = new cjs.Graphics().p("AGRXQIAAh9IO8AAIAAB9g");
	var mask_2_graphics_62 = new cjs.Graphics().p("AGrXPIAAh8IO8AAIAAB8g");
	var mask_2_graphics_63 = new cjs.Graphics().p("AHFXPIAAh8IO8AAIAAB8g");
	var mask_2_graphics_64 = new cjs.Graphics().p("AHfXPIAAh8IO8AAIAAB8g");
	var mask_2_graphics_65 = new cjs.Graphics().p("AH4XPIAAh8IO8AAIAAB8g");
	var mask_2_graphics_66 = new cjs.Graphics().p("AIRXPIAAh8IO8AAIAAB8g");
	var mask_2_graphics_67 = new cjs.Graphics().p("AIqXPIAAh8IO8AAIAAB8g");
	var mask_2_graphics_68 = new cjs.Graphics().p("AJDXPIAAh8IO7AAIAAB8g");
	var mask_2_graphics_69 = new cjs.Graphics().p("AJbXPIAAh8IO7AAIAAB8g");
	var mask_2_graphics_70 = new cjs.Graphics().p("AJzXPIAAh8IO7AAIAAB8g");
	var mask_2_graphics_71 = new cjs.Graphics().p("AKKXPIAAh8IO8AAIAAB8g");
	var mask_2_graphics_72 = new cjs.Graphics().p("AKhXPIAAh8IO8AAIAAB8g");
	var mask_2_graphics_73 = new cjs.Graphics().p("AK4XPIAAh8IO8AAIAAB8g");
	var mask_2_graphics_74 = new cjs.Graphics().p("ALPXPIAAh8IO7AAIAAB8g");
	var mask_2_graphics_75 = new cjs.Graphics().p("ALlXPIAAh8IO8AAIAAB8g");
	var mask_2_graphics_76 = new cjs.Graphics().p("AL7XPIAAh8IO8AAIAAB8g");
	var mask_2_graphics_77 = new cjs.Graphics().p("AMRXPIAAh8IO7AAIAAB8g");
	var mask_2_graphics_78 = new cjs.Graphics().p("AMmXPIAAh8IO8AAIAAB8g");
	var mask_2_graphics_79 = new cjs.Graphics().p("AM7XPIAAh8IO8AAIAAB8g");
	var mask_2_graphics_80 = new cjs.Graphics().p("ANQXPIAAh8IO8AAIAAB8g");
	var mask_2_graphics_81 = new cjs.Graphics().p("ANkXPIAAh8IO8AAIAAB8g");
	var mask_2_graphics_131 = new cjs.Graphics().p("ANkXPIAAh8IO8AAIAAB8g");
	var mask_2_graphics_132 = new cjs.Graphics().p("ANkXCIAAh9IO8AAIAAB9g");
	var mask_2_graphics_133 = new cjs.Graphics().p("ANkW0IAAh8IO8AAIAAB8g");
	var mask_2_graphics_134 = new cjs.Graphics().p("ANkWmIAAh8IO8AAIAAB8g");
	var mask_2_graphics_135 = new cjs.Graphics().p("ANkWZIAAh9IO8AAIAAB9g");
	var mask_2_graphics_136 = new cjs.Graphics().p("ANkWLIAAh8IO8AAIAAB8g");
	var mask_2_graphics_137 = new cjs.Graphics().p("ANkV+IAAh9IO8AAIAAB9g");
	var mask_2_graphics_138 = new cjs.Graphics().p("ANkVwIAAh8IO8AAIAAB8g");
	var mask_2_graphics_139 = new cjs.Graphics().p("ANkVjIAAh9IO8AAIAAB9g");
	var mask_2_graphics_140 = new cjs.Graphics().p("ANkVVIAAh9IO8AAIAAB9g");
	var mask_2_graphics_141 = new cjs.Graphics().p("ANkVHIAAh8IO8AAIAAB8g");
	var mask_2_graphics_142 = new cjs.Graphics().p("ANkU6IAAh9IO8AAIAAB9g");
	var mask_2_graphics_143 = new cjs.Graphics().p("ANkUsIAAh8IO8AAIAAB8g");
	var mask_2_graphics_144 = new cjs.Graphics().p("ANkUfIAAh9IO8AAIAAB9g");
	var mask_2_graphics_145 = new cjs.Graphics().p("ANkURIAAh8IO8AAIAAB8g");
	var mask_2_graphics_146 = new cjs.Graphics().p("ANkUDIAAh8IO8AAIAAB8g");
	var mask_2_graphics_147 = new cjs.Graphics().p("ANkT2IAAh9IO8AAIAAB9g");
	var mask_2_graphics_148 = new cjs.Graphics().p("ANkToIAAh8IO8AAIAAB8g");
	var mask_2_graphics_149 = new cjs.Graphics().p("ANkTbIAAh9IO8AAIAAB9g");
	var mask_2_graphics_150 = new cjs.Graphics().p("ANkTNIAAh8IO8AAIAAB8g");
	var mask_2_graphics_151 = new cjs.Graphics().p("ANkTAIAAh9IO8AAIAAB9g");
	var mask_2_graphics_152 = new cjs.Graphics().p("ANkSyIAAh9IO8AAIAAB9g");
	var mask_2_graphics_153 = new cjs.Graphics().p("ANkSkIAAh8IO8AAIAAB8g");
	var mask_2_graphics_154 = new cjs.Graphics().p("ANkSXIAAh9IO8AAIAAB9g");
	var mask_2_graphics_155 = new cjs.Graphics().p("ANkSJIAAh8IO8AAIAAB8g");
	var mask_2_graphics_156 = new cjs.Graphics().p("ANkR8IAAh9IO8AAIAAB9g");
	var mask_2_graphics_157 = new cjs.Graphics().p("ANkRuIAAh8IO8AAIAAB8g");
	var mask_2_graphics_158 = new cjs.Graphics().p("ANkRgIAAh8IO8AAIAAB8g");
	var mask_2_graphics_159 = new cjs.Graphics().p("ANkRTIAAh9IO8AAIAAB9g");
	var mask_2_graphics_160 = new cjs.Graphics().p("ANkRFIAAh8IO8AAIAAB8g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(61).to({graphics:mask_2_graphics_61,x:135.7,y:148.8}).wait(1).to({graphics:mask_2_graphics_62,x:138.3,y:148.7}).wait(1).to({graphics:mask_2_graphics_63,x:140.9,y:148.7}).wait(1).to({graphics:mask_2_graphics_64,x:143.5,y:148.7}).wait(1).to({graphics:mask_2_graphics_65,x:146,y:148.7}).wait(1).to({graphics:mask_2_graphics_66,x:148.5,y:148.7}).wait(1).to({graphics:mask_2_graphics_67,x:151,y:148.7}).wait(1).to({graphics:mask_2_graphics_68,x:153.4,y:148.7}).wait(1).to({graphics:mask_2_graphics_69,x:155.8,y:148.7}).wait(1).to({graphics:mask_2_graphics_70,x:158.2,y:148.7}).wait(1).to({graphics:mask_2_graphics_71,x:160.6,y:148.7}).wait(1).to({graphics:mask_2_graphics_72,x:162.9,y:148.7}).wait(1).to({graphics:mask_2_graphics_73,x:165.2,y:148.7}).wait(1).to({graphics:mask_2_graphics_74,x:167.4,y:148.7}).wait(1).to({graphics:mask_2_graphics_75,x:169.7,y:148.7}).wait(1).to({graphics:mask_2_graphics_76,x:171.9,y:148.7}).wait(1).to({graphics:mask_2_graphics_77,x:174,y:148.7}).wait(1).to({graphics:mask_2_graphics_78,x:176.2,y:148.7}).wait(1).to({graphics:mask_2_graphics_79,x:178.3,y:148.7}).wait(1).to({graphics:mask_2_graphics_80,x:180.4,y:148.7}).wait(1).to({graphics:mask_2_graphics_81,x:182.4,y:148.7}).wait(50).to({graphics:mask_2_graphics_131,x:182.4,y:148.7}).wait(1).to({graphics:mask_2_graphics_132,x:182.4,y:147.4}).wait(1).to({graphics:mask_2_graphics_133,x:182.4,y:146}).wait(1).to({graphics:mask_2_graphics_134,x:182.4,y:144.6}).wait(1).to({graphics:mask_2_graphics_135,x:182.4,y:143.3}).wait(1).to({graphics:mask_2_graphics_136,x:182.4,y:141.9}).wait(1).to({graphics:mask_2_graphics_137,x:182.4,y:140.6}).wait(1).to({graphics:mask_2_graphics_138,x:182.4,y:139.2}).wait(1).to({graphics:mask_2_graphics_139,x:182.4,y:137.9}).wait(1).to({graphics:mask_2_graphics_140,x:182.4,y:136.5}).wait(1).to({graphics:mask_2_graphics_141,x:182.4,y:135.1}).wait(1).to({graphics:mask_2_graphics_142,x:182.4,y:133.8}).wait(1).to({graphics:mask_2_graphics_143,x:182.4,y:132.4}).wait(1).to({graphics:mask_2_graphics_144,x:182.4,y:131.1}).wait(1).to({graphics:mask_2_graphics_145,x:182.4,y:129.7}).wait(1).to({graphics:mask_2_graphics_146,x:182.4,y:128.3}).wait(1).to({graphics:mask_2_graphics_147,x:182.4,y:127}).wait(1).to({graphics:mask_2_graphics_148,x:182.4,y:125.6}).wait(1).to({graphics:mask_2_graphics_149,x:182.4,y:124.3}).wait(1).to({graphics:mask_2_graphics_150,x:182.4,y:122.9}).wait(1).to({graphics:mask_2_graphics_151,x:182.4,y:121.6}).wait(1).to({graphics:mask_2_graphics_152,x:182.4,y:120.2}).wait(1).to({graphics:mask_2_graphics_153,x:182.4,y:118.8}).wait(1).to({graphics:mask_2_graphics_154,x:182.4,y:117.5}).wait(1).to({graphics:mask_2_graphics_155,x:182.4,y:116.1}).wait(1).to({graphics:mask_2_graphics_156,x:182.4,y:114.8}).wait(1).to({graphics:mask_2_graphics_157,x:182.4,y:113.4}).wait(1).to({graphics:mask_2_graphics_158,x:182.4,y:112}).wait(1).to({graphics:mask_2_graphics_159,x:182.4,y:110.7}).wait(1).to({graphics:mask_2_graphics_160,x:182.4,y:109.3}).wait(134));

	// highlighted
	this.instance_5 = new lib.highlight();
	this.instance_5.parent = this;
	this.instance_5.setTransform(317.9,291,1,1,0,0,0,46.5,6.5);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(61).to({_off:false},0).wait(70).to({y:212.2},29,cjs.Ease.quadInOut).to({_off:true},110).wait(24));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("A1bbbMAAAgnOMA6yAAAMAAAAnOg");
	var mask_3_graphics_131 = new cjs.Graphics().p("A9ZTiMAAAgnCMA6yAAAMAAAAnCg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:239.1,y:175.5}).wait(131).to({graphics:mask_3_graphics_131,x:290.1,y:226.1}).wait(163));

	// scroll screen
	this.instance_6 = new lib.scroll_screen();
	this.instance_6.parent = this;
	this.instance_6.setTransform(285.8,292.4,1,1,0,0,0,137.5,144.5);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(131).to({y:213.6},29,cjs.Ease.quadInOut).wait(110).to({y:292.4},22,cjs.Ease.quadInOut).wait(2));

	// grey screen
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E6E6E6").s().p("A9YTnMAAAgnNMA6yAAAMAAAAnNg");
	this.shape_2.setTransform(289.5,226.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(294));

	// surface
	this.instance_7 = new lib.Surfacelaptop1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(45,75.1,1.025,1.025);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(294));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45,75.1,492,369);


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
p.nominalBounds = new cjs.Rectangle(5.3,6.6,11.3,8.4);


(lib.logos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_53 = function() {
		exportRoot.tl1.play()
	}
	this.frame_100 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(53).call(this.frame_53).wait(47).call(this.frame_100).wait(3));

	// Layer_2
	this.instance = new lib.MSFT_logo_sq();
	this.instance.parent = this;
	this.instance.setTransform(299,339.4,0.272,0.272,0,0,0,-40,1.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:4.49,scaleY:4.49,x:299.1,y:339.3},13,cjs.Ease.quadOut).to({x:120.8},12,cjs.Ease.quadInOut).to({_off:true},1).wait(76));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("Ag5eVIAAvKMA5FAAAIAAPKg");
	var mask_graphics_15 = new cjs.Graphics().p("AiEeVIAAvKMA5FAAAIAAPKg");
	var mask_graphics_16 = new cjs.Graphics().p("AjPeVIAAvKMA5FAAAIAAPKg");
	var mask_graphics_17 = new cjs.Graphics().p("AkZeVIAAvKMA5EAAAIAAPKg");
	var mask_graphics_18 = new cjs.Graphics().p("AlkeVIAAvKMA5EAAAIAAPKg");
	var mask_graphics_19 = new cjs.Graphics().p("AmveVIAAvKMA5EAAAIAAPKg");
	var mask_graphics_20 = new cjs.Graphics().p("An6eVIAAvKMA5FAAAIAAPKg");
	var mask_graphics_21 = new cjs.Graphics().p("ApFeVIAAvKMA5FAAAIAAPKg");
	var mask_graphics_22 = new cjs.Graphics().p("AqQeVIAAvKMA5FAAAIAAPKg");
	var mask_graphics_23 = new cjs.Graphics().p("AraeVIAAvKMA5EAAAIAAPKg");
	var mask_graphics_24 = new cjs.Graphics().p("AsleVIAAvKMA5EAAAIAAPKg");
	var mask_graphics_25 = new cjs.Graphics().p("AtweVIAAvKMA5FAAAIAAPKg");
	var mask_graphics_26 = new cjs.Graphics().p("Au7eVIAAvKMA5FAAAIAAPKg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:359.6,y:194.1}).wait(1).to({graphics:mask_graphics_15,x:352.1,y:194.1}).wait(1).to({graphics:mask_graphics_16,x:344.6,y:194.1}).wait(1).to({graphics:mask_graphics_17,x:337.1,y:194.1}).wait(1).to({graphics:mask_graphics_18,x:329.6,y:194.1}).wait(1).to({graphics:mask_graphics_19,x:322.1,y:194.1}).wait(1).to({graphics:mask_graphics_20,x:314.7,y:194.1}).wait(1).to({graphics:mask_graphics_21,x:307.2,y:194.1}).wait(1).to({graphics:mask_graphics_22,x:299.7,y:194.1}).wait(1).to({graphics:mask_graphics_23,x:292.2,y:194.1}).wait(1).to({graphics:mask_graphics_24,x:284.7,y:194.1}).wait(1).to({graphics:mask_graphics_25,x:277.3,y:194.1}).wait(1).to({graphics:mask_graphics_26,x:269.8,y:194.1}).wait(1).to({graphics:null,x:0,y:0}).wait(76));

	// Layer 3
	this.instance_1 = new lib.MSFT_Logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(121.4,333.9,4.493,4.493,0,0,0,0.1,0.2);
	this.instance_1._off = true;

	this.instance_2 = new lib.MSFT_Logo_anim();
	this.instance_2.parent = this;
	this.instance_2.setTransform(300.9,333.9,4.493,4.493,0,0,0,0.1,0.2);

	var maskedShapeInstanceList = [this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},12).to({state:[{t:this.instance_1}]},13).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},22).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({_off:true,x:300.9},12,cjs.Ease.quadInOut).wait(13).to({_off:false},0).wait(2).to({regX:0,regY:0,scaleX:2.25,scaleY:2.25,x:-16.4,y:11},22,cjs.Ease.quadInOut).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.CTA_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.arrow = new lib.arrowMain();
	this.arrow.name = "arrow";
	this.arrow.parent = this;
	this.arrow.setTransform(22,2.4,0.92,0.92,0,0,0,10.9,10.6);

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(1));

	// CTA_text
	this.cta_glare = new lib.cta_glare();
	this.cta_glare.name = "cta_glare";
	this.cta_glare.parent = this;
	this.cta_glare.setTransform(0.1,0.1,1,1,0,0,0,57.4,15.1);

	this.timeline.addTween(cjs.Tween.get(this.cta_glare).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D83B01").s().p("ArZCbIAAk1IWzAAIAAE1g");
	this.shape.setTransform(-29.1,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CTA_btn, new cjs.Rectangle(-102.1,-14.4,146,30.9), null);


(lib.Intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Animation
	this.devices = new lib.device_animation();
	this.devices.name = "devices";
	this.devices.parent = this;
	this.devices.setTransform(183,138.2,0.48,0.48,0,0,0,344.7,250.3);

	this.timeline.addTween(cjs.Tween.get(this.devices).wait(1));

}).prototype = getMCSymbolPrototype(lib.Intro, new cjs.Rectangle(39.1,54.1,236.2,177.1), null);


(lib.mainMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// replay
	this.replay_btn = new lib.replay_btn();
	this.replay_btn.name = "replay_btn";
	this.replay_btn.parent = this;
	this.replay_btn.setTransform(284.1,4.3,0.348,0.348,0,0,180,-0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.replay_btn).wait(1));

	// CTA
	this.txtCta = new lib.cta();
	this.txtCta.name = "txtCta";
	this.txtCta.parent = this;
	this.txtCta.setTransform(41.7,220.2,0.496,0.496);

	this.timeline.addTween(cjs.Tween.get(this.txtCta).wait(1));

	// circle Bonus
	this.bg_circle = new lib.circle_bg();
	this.bg_circle.name = "bg_circle";
	this.bg_circle.parent = this;
	this.bg_circle.setTransform(3,177.1);

	this.timeline.addTween(cjs.Tween.get(this.bg_circle).wait(1));

	// CTA_BG
	this.cta = new lib.CTA_btn();
	this.cta.name = "cta";
	this.cta.parent = this;
	this.cta.setTransform(60.3,218.2,0.943,0.943,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// anim
	this.anim = new lib.Intro();
	this.anim.name = "anim";
	this.anim.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.anim).wait(1));

	// MSLogo
	this.logo = new lib.logos();
	this.logo.name = "logo";
	this.logo.parent = this;
	this.logo.setTransform(57.2,20,0.312,0.312,0,0,0,1,2.7);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3vT0MAAAgnnMAvfAAAMAAAAnng");
	this.shape.setTransform(150,124.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mainMC, new cjs.Rectangle(-36.1,-1.9,338.2,253.5), null);


// stage content:
(lib.O365_CreateYourBestWork_USA_300x250_BAN_Word_Inking_NA_NA_ANI_BN_T1_2 = function(mode,startPosition,loop) {
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
		
		
		this.tlanim = new TimelineLite();
		
		
		this.tl1 = new TimelineLite();
		this.tl2 = new TimelineLite();
		this.tl = new TimelineLite();
		var mc = exportRoot.mainMC
		
		
		this.runBanner = function() {
		
		
			exportRoot.finalHeadline = new TimelineLite();
			for (var i = 0; i < exportRoot.headline1.length; i++) {
				exportRoot.finalHeadline.from(exportRoot.headline1[i], 0.6, {x: "+=50",	alpha: 0, ease: Power3.easeOut}, "-=0.4");
			}
			exportRoot.finalHeadline.stop()
			
			exportRoot.subHeadline = new TimelineLite();
			for (var i = 0; i < exportRoot.headline2.length; i++) {
				exportRoot.subHeadline.from(exportRoot.headline2[i], 0.6, {x: "+=50",	alpha: 0, ease: Power3.easeOut}, "-=0.4");
			}
			exportRoot.subHeadline.stop()
			
		
			
		
			
			
		
		    exportRoot.tl1.to(mc.anim.devices, 0.7, {alpha: 1,	x: "-=300",ease: Power4.easeOut, onComplete:function(){mc.anim.devices.play()}}, "-=0")
			
			exportRoot.tl1.stop()
			
			exportRoot.tl2.to(mc.anim.devices, 0.9, {alpha: 1,	x: "+=85", y: "+=16", ease: Power3.easeOut}, "-=0.5")
			exportRoot.tl2.to(mc.replay_btn, 0.7, {alpha: 1,	x: "-=300",ease: Power4.easeOut}, "-=0.5")
			exportRoot.tl2.to(mc.bg_circle, 0.7, {alpha: 1,	x: "-=300",	ease: Power4.easeOut}, "-=0.3")
			
			exportRoot.tl2.to(mc.txtCta, 0.7, {alpha: 1,	x: "+=300", ease: Power4.easeOut}, "-=0.5");
			exportRoot.tl2.to(mc.cta, 0.7, {alpha: 1,	x: "+=300",	ease: Power4.easeOut}, "-=0.7");
				
			exportRoot.tl2.stop()
		
			mc.logo.gotoAndPlay(1)
		}
		    mc.anim.devices.x += 300
			mc.bg_circle.x -= 300; mc.bg_circle.alpha = 0
			mc.txtCta.x -= 300; mc.txtCta.alpha = 0
			mc.cta.x -= 300; mc.cta.alpha = 0
			mc.replay_btn.x+=300
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
p.nominalBounds = new cjs.Rectangle(113.9,123.1,338.2,253.5);
// library properties:
lib.properties = {
	id: '90A26FE74B042E4A89CA750D1DA2DF1F',
	width: 300,
	height: 250,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/O365_CreateYourBestWork_USA_300x250_BAN_Word_Inking_NA_NA_ANI_BN_T1_2_atlas_.png?1537199552397", id:"O365_CreateYourBestWork_USA_300x250_BAN_Word_Inking_NA_NA_ANI_BN_T1_2_atlas_"}
	],
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