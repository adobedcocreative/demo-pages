(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"O365_ONDRV_USA_300x600_BAN_Retargeting_NA_NA_NA_ANI_BN_NA_1_atlas_", frames: [[0,737,400,114],[0,512,400,223],[0,0,250,510]]}
];


// symbols:



(lib.Laptop_Keyboard = function() {
	this.initialize(ss["O365_ONDRV_USA_300x600_BAN_Retargeting_NA_NA_NA_ANI_BN_NA_1_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Laptop_Screen = function() {
	this.initialize(ss["O365_ONDRV_USA_300x600_BAN_Retargeting_NA_NA_NA_ANI_BN_NA_1_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Phone_resize = function() {
	this.initialize(ss["O365_ONDRV_USA_300x600_BAN_Retargeting_NA_NA_NA_ANI_BN_NA_1_atlas_"]);
	this.gotoAndStop(2);
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


(lib.white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhL2A/lMAAAh/KMCXtAAAMAAAB/Kg");
	this.shape.setTransform(485.4824,406.9504,1,2.3867);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.white, new cjs.Rectangle(0,-564.3,971,1942.5), null);


(lib.replay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("ABNA/YgaAagnAIghgOYgigOgWghAAgkYAAglAXghAigNYAigNAnAJAZAbIgWAUYgRgSgagGgWAJYgXAJgPAWAAAYYAAAYAOAWAXAKYAWAJAagFARgSg");
	this.shape.setTransform(1.25,0.05,0.8766,0.8766,135.0007,0,0,1.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgmgTIBNAAIgnAmg");
	this.shape_1.setTransform(-5.3,2.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.2,-7.8,18.4,15.8);


(lib.PhoneBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDDDDD").s().p("ApoJqIAAzTITRAAIAATTg");
	this.shape.setTransform(80.45,148);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance = new lib.Phone_resize();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.6356,0.6356);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.PhoneBG, new cjs.Rectangle(0,0,158.9,324.2), null);


(lib.Outline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DA3A00").ss(2,1,1).p("AnsorQgZgQhTAAQhgAAhdAZQkHBHgsDcQgrDeC0CKQBCAzBTAcQBHAYAtgDQgEA9ArBCQBJBuC9BgQCwBZC4gFQBngCBMgdQAOAXAxAbQA4AeBDAPQC3AoCThiQCNhfAgiFQAPg7gLhDQAwgVA7g6QBIhHAphVQByjrimjnQjDjpkNgDQhUgBhRAWIhBAXQgxgWhKgVQiVgqiDAJQiIAIiKA8QhoAsgYAcg");
	this.shape.setTransform(110.537,69.7814);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Outline, new cjs.Rectangle(-1,-1,223.1,141.6), null);


(lib.ms = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#737373").s().p("AANApIAAgvIggAAIAABKIgVAAIAAhKIgQAAIAAgSIAQAAIAAgMQAAgJADgJQAFgIAHgDQAIgEAKgBQAGAAAFACIABAAIAAATIgBAAQgFgCgEgBQgGABgEAEQgDADgBAJIAAALIAgAAIAAgUIABgBIAUgGIABAAIAAAbIAWAAIAAASIgWAAIAAArQAAAJADADQADADAHABIAIgDIABgBIAAASIAAABIgHACIgJABQgcgBAAgdg");
	this.shape.setTransform(30.7515,0.0002);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#737373").s().p("AgiAjQgMgMAAgWQAAgXAMgMQANgOAWAAQAWAAAMANQAMAMAAAXQABAVgNAOQgNAOgWAAQgVgBgNgNgAgRgWQgHAIAAAPQAAAOAHAHQAGAJALAAQANAAAGgJQAGgHAAgPQAAgNgGgJQgHgHgMgBQgLAAgGAIg");
	this.shape_1.setTransform(20.1013,2.2002);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#737373").s().p("AgSAvIgMgEIAAgVIABAAQAFAEAHADQAGACAGAAQAOAAAAgJQAAgDgCgDIgFgDIgKgGQgJgDgEgEQgEgCgDgFQgCgFAAgHQAAgNAKgHQAKgJAPAAIAKABIAKAEIABAAIAAAUIgBgBQgEgDgGgCIgLgBQgGAAgCACQgEACAAAFQAAAEADADQACADAKAEQANAGAFAFQAGAGAAAKQAAAMgKAIQgKAJgQAAIgNgCg");
	this.shape_2.setTransform(11.3262,2.2002);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#737373").s().p("AgiAjQgMgMAAgWQAAgXANgMQAMgOAWAAQAWAAAMANQAMANAAAWQABAVgNAOQgOAOgVAAQgVgBgNgNgAgRgWQgHAIAAAPQAAAOAHAHQAGAJAMAAQALAAAHgJQAGgIAAgOQAAgNgHgJQgGgHgMgBQgLAAgGAIg");
	this.shape_3.setTransform(2.451,2.2002);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#737373").s().p("AgaAvIAAhcIAWAAIAAARIAAAAQADgIAEgEQAHgGAIAAQAFAAADABIABAAIAAAXIgBgBIgFgCIgHgBQgIAAgGAHQgEAJAAAKIAAAvg");
	this.shape_4.setTransform(-5.1241,2.1002);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#737373").s().p("AgNAqQgLgFgFgLQgGgKAAgNQAAgOAGgMQAGgMALgGQALgGAPgBIAMACIAKADIAAABIAAAUIgBAAQgKgIgLAAQgMAAgHAJQgIAIAAAOQAAANAIAIQAGAJANAAQAFAAAGgCIAKgGIABgBIAAAUIAAAAQgLAHgPAAQgNAAgKgHg");
	this.shape_5.setTransform(-13.0742,2.2002);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#737373").s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgDAFgBQAGABAEADQADADAAAFQAAAFgEAEQgDADgGABQgFgBgDgDg");
	this.shape_6.setTransform(-19.2743,-5.0999);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#737373").s().p("AgKAuIAAhbIAVAAIAABbg");
	this.shape_7.setTransform(-19.2993,2.1752);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#737373").s().p("AAwBAIABhoIgBAAIgCALIgnBdIgOAAIgmhcIgDgMIgBAAIABBoIgVAAIAAh/IAgAAIAlBhIAohhIAeAAIAAB/g");
	this.shape_8.setTransform(-29.4745,0.3502);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ms, new cjs.Rectangle(-36.4,-7,72.9,14.1), null);


(lib.cta_arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYBIIA4g1IiBAAIAAgkICBAAIg5g2IAuAAIBNBHIhNBIg");
	this.shape.setTransform(0.1794,0.0354,0.576,0.576);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_arrow, new cjs.Rectangle(-5.4,-4.1,11.2,8.3), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.logo_box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEBA00").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape.setTransform(5.6253,5.6753);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#03A5EA").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_1.setTransform(-5.6749,5.6753);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7CBB01").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_2.setTransform(5.6253,-5.6249);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F25022").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_3.setTransform(-5.6749,-5.6249);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_box, new cjs.Rectangle(-10.8,-10.7,21.6,21.5), null);


(lib.LatpotKeyboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Laptop_Keyboard();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.LatpotKeyboard, new cjs.Rectangle(0,0,400,114), null);


(lib.LaptopScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Laptop_Screen();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.LaptopScreen, new cjs.Rectangle(0,0,400,223), null);


(lib.Image9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlCE7IAAp1IKFAAIAAJ1g");
	mask.setTransform(191.875,167.8);

	// Layer_1
	this.instance = new lib.Phone_resize();
	this.instance.parent = this;
	this.instance.setTransform(0,-128);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image9, new cjs.Rectangle(159.6,136.4,64.6,62.900000000000006), null);


(lib.Image8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlCE7IAAp1IKFAAIAAJ1g");
	mask.setTransform(126.325,167.8);

	// Layer_1
	this.instance = new lib.Phone_resize();
	this.instance.parent = this;
	this.instance.setTransform(0,-127.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image8, new cjs.Rectangle(94.1,136.4,64.5,62.900000000000006), null);


(lib.Image7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlCE7IAAp1IKFAAIAAJ1g");
	mask.setTransform(61.475,167.8);

	// Layer_1
	this.instance = new lib.Phone_resize();
	this.instance.parent = this;
	this.instance.setTransform(0,-127.75);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image7, new cjs.Rectangle(29.2,136.4,64.6,62.900000000000006), null);


(lib.Image6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlCE7IAAp1IKFAAIAAJ1g");
	mask.setTransform(191.875,167.8);

	// Layer_1
	this.instance = new lib.Phone_resize();
	this.instance.parent = this;
	this.instance.setTransform(0,-64);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image6, new cjs.Rectangle(159.6,136.4,64.6,62.900000000000006), null);


(lib.Image5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlCE7IAAp1IKFAAIAAJ1g");
	mask.setTransform(126.325,167.8);

	// Layer_1
	this.instance = new lib.Phone_resize();
	this.instance.parent = this;
	this.instance.setTransform(0,-64);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image5, new cjs.Rectangle(94.1,136.4,64.5,62.900000000000006), null);


(lib.Image4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlCE7IAAp1IKFAAIAAJ1g");
	mask.setTransform(61.475,167.8);

	// Layer_1
	this.instance = new lib.Phone_resize();
	this.instance.parent = this;
	this.instance.setTransform(0,-63.75);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image4, new cjs.Rectangle(29.2,136.4,64.6,62.900000000000006), null);


(lib.Image3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlCE7IAAp1IKFAAIAAJ1g");
	mask.setTransform(191.875,167.8);

	// Layer_1
	this.instance = new lib.Phone_resize();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image3, new cjs.Rectangle(159.6,136.4,64.6,62.900000000000006), null);


(lib.Image2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlCE7IAAp1IKFAAIAAJ1g");
	mask.setTransform(126.325,167.8);

	// Layer_1
	this.instance = new lib.Phone_resize();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image2, new cjs.Rectangle(94.1,136.4,64.5,62.900000000000006), null);


(lib.Image1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlCE7IAAp1IKFAAIAAJ1g");
	mask.setTransform(61.475,167.8);

	// Layer_1
	this.instance = new lib.Phone_resize();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Image1, new cjs.Rectangle(29.2,136.4,64.6,62.900000000000006), null);


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
	this.shape.setTransform(57.35,15.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.478)","rgba(255,255,255,0)"],[0,0.51,1],58.5,-0.9,125.3,-0.9).s().p("Ao9CXIAAktIR6AAIAAEtg");
	this.shape_1.setTransform(57.35,15.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},7).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114.7,30.3);


(lib.cloud_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.cloud_sub = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEYJ4QhEgcg1gyQhhAahlAAQjnAAiyh0QivhygviwQikgKhwhnQhxhlAAiNQAAiUB7hpQB7hpCvAAQBQAABNAaQBXhFBzglQB2goCDAAQC5AACeBPQBpgsB0AAQDZAACbCMQCaCMAADFQAAB/hGBsQhCBqh0BAIABAaQABCchxBuQhwBuifAAQhNAAhFgcg");
	this.shape.setTransform(106,65.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloud_sub, new cjs.Rectangle(0,0,212,132), null);


(lib.cloud_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AlYC3Qh8h1AUilQASiUB8glQAygPBWgDICqAAICpAAQBVADAyAQQB6AkAWCUQAWCah5B4QiCCAjbAAQjXAAiBh4g");
	this.shape.setTransform(45.1565,30.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90.3,60.7);


(lib.cloud_bk_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6F6F6").s().p("AiwCxQhJhJAAhoQAAhmBJhKQBKhJBmAAQBoAABIBJQBKBKAABmQAABohKBJQhIBJhoAAQhmAAhKhJg");
	this.shape.setTransform(-214.3694,16.5838,0.7614,0.7679,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6F6F6").s().p("AiwCxQhJhJAAhoQAAhmBJhKQBKhJBmAAQBoAABIBJQBKBKAABmQAABohKBJQhIBJhoAAQhmAAhKhJg");
	this.shape_1.setTransform(-237.2237,32.6099,0.5925,0.5975,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6F6F6").s().p("AiwCxQhJhJAAhoQAAhmBJhKQBKhJBmAAQBoAABIBJQBKBKAABmQAABohKBJQhIBJhoAAQhmAAhKhJg");
	this.shape_2.setTransform(-142.6048,26.9016,0.8181,0.8251,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6F6F6").s().p("AmHCbIAAk1IMPAAIAAE1g");
	this.shape_3.setTransform(-189.8023,34.126,1.1959,0.8676,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6F6F6").s().p("AiwCxQhJhJAAhoQAAhmBJhKQBKhJBmAAQBoAABIBJQBKBKAABmQAABohKBJQhIBJhoAAQhmAAhKhJg");
	this.shape_4.setTransform(-176.5589,15.9964,1.2896,1.264,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-252,-15.6,129.9,63.2);


(lib.cloud_bk_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6F6F6").s().p("AiwCxQhJhJAAhoQAAhmBJhKQBKhJBmAAQBoAABIBJQBKBKAABmQAABohKBJQhIBJhoAAQhmAAhKhJg");
	this.shape.setTransform(65.7624,25.498,0.5904,0.6075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6F6F6").s().p("AiwCxQhJhJAAhoQAAhmBJhKQBKhJBmAAQBoAABIBJQBKBKAABmQAABohKBJQhIBJhoAAQhmAAhKhJg");
	this.shape_1.setTransform(77.6455,38.1942,0.4595,0.4727);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6F6F6").s().p("AiwCxQhJhJAAhoQAAhmBJhKQBKhJBmAAQBoAABIBJQBKBKAABmQAABohKBJQhIBJhoAAQhmAAhKhJg");
	this.shape_2.setTransform(15.8762,33.8106,0.6344,0.6527);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6F6F6").s().p("AmHCbIAAk1IMPAAIAAE1g");
	this.shape_3.setTransform(48.0969,37.8815,0.7534,0.7823);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6F6F6").s().p("AiwCxQhJhJAAhoQAAhmBJhKQBKhJBmAAQBoAABIBJQBKBKAABmQAABohKBJQhIBJhoAAQhmAAhKhJg");
	this.shape_4.setTransform(42.2041,24.9998);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.2,50.2);


(lib.cloud_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak8DgQiDhdAAiDQAAiCCDhdQCDhdC5AAQC5AACEBdQCDBdAACCQAACDiDBdQiEBdi5AAQi5AAiDhdg");
	this.shape.setTransform(44.8267,31.6761);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.7,63.4);


(lib.circle_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.arrow_sub = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DA3A00").s().p("AhjE6IAApyIDHAAIAAJyg");
	this.shape.setTransform(43.6516,51.2517);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA3A00").s().p("AAAgJIkrErIiMiMIG3m3IG4G3IiMCMg");
	this.shape_1.setTransform(43.9767,28.9764);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow_sub, new cjs.Rectangle(0,0,88,82.6), null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYBIIA4g1IiBAAIAAgkICBAAIg5g2IAuAAIBNBHIhNBIg");
	this.shape.setTransform(5.6294,4.1854,0.576,0.576);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(0,0,11.3,8.4), null);


(lib.Access_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.ScreenImages = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_9
	this.instance = new lib.Image9();
	this.instance.parent = this;
	this.instance.setTransform(190.9,295.75,0.01,0.01,0,0,0,190.1,170.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({regX:190.2,regY:170.2,scaleX:1,scaleY:1,x:190.95,y:295.85},19,cjs.Ease.get(1)).wait(32));

	// Layer_8
	this.instance_1 = new lib.Image8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(126.05,295,0.01,0.01,0,0,0,125,170.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({_off:false},0).to({regX:125.1,regY:170.2,scaleX:1,scaleY:1,y:295.05},19,cjs.Ease.get(1)).wait(35));

	// Layer_7
	this.instance_2 = new lib.Image7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(61,295.3,0.01,0.01,0,0,0,60.1,170.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({regY:170.2,scaleX:1,scaleY:1,x:61.05,y:295.35},19,cjs.Ease.get(1)).wait(38));

	// Layer_6
	this.instance_3 = new lib.Image6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(190.9,231.5,0.01,0.01,0,0,0,190.1,170.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20).to({_off:false},0).to({regX:190.2,regY:170.2,scaleX:1,scaleY:1,x:190.95,y:231.6},19,cjs.Ease.get(1)).wait(41));

	// Layer_5
	this.instance_4 = new lib.Image5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(126.05,231.65,0.01,0.01,0,0,0,125,170.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({_off:false},0).to({regX:125.1,regY:170.2,scaleX:1,scaleY:1,y:231.7},19,cjs.Ease.get(1)).wait(44));

	// Layer_4
	this.instance_5 = new lib.Image4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(61,231.45,0.01,0.01,0,0,0,60.1,170.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).to({regY:170.2,scaleX:1,scaleY:1,x:61.05,y:231.5},19,cjs.Ease.get(1)).wait(47));

	// Layer_3
	this.instance_6 = new lib.Image3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(190.9,167.85,0.01,0.01,0,0,0,190.1,170.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11).to({_off:false},0).to({regX:190.2,regY:170.2,scaleX:1,scaleY:1,x:190.95,y:167.9},19,cjs.Ease.get(1)).wait(50));

	// Layer_2
	this.instance_7 = new lib.Image2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(126.25,167.85,0.01,0.01,0,0,0,125,170.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({_off:false},0).to({regX:125.1,regY:170.2,scaleX:1,scaleY:1,y:167.9},19,cjs.Ease.get(1)).wait(53));

	// Layer_1
	this.instance_8 = new lib.Image1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(61.35,167.85,0.01,0.01,0,0,0,60.1,170.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(5).to({_off:false},0).to({regY:170.2,scaleX:1,scaleY:1,x:61.4,y:167.9},19,cjs.Ease.get(1)).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.6,251.2,510.3);


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
	this.instance.setTransform(-18.65,16.55,1.754,1.754);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},1).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.8,0,32.199999999999996,30.5);


(lib.radialWipeWhole = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// RadialWipe (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_4 = new cjs.Graphics().p("Ar7DNIL7AqIL8AqI1ABUg");
	var mask_graphics_5 = new cjs.Graphics().p("Ar7DGIL7AvIL8AvI1ABPg");
	var mask_graphics_6 = new cjs.Graphics().p("Ar6CzIL6A8IL7A8I1BBBg");
	var mask_graphics_7 = new cjs.Graphics().p("Ar5CTIL5BSIL6BRI1DAqg");
	var mask_graphics_8 = new cjs.Graphics().p("Ar1BmIL1BwIL2BwI1EAKg");
	var mask_graphics_9 = new cjs.Graphics().p("ApWErIiZkPILvCYILwCXg");
	var mask_graphics_10 = new cjs.Graphics().p("ApgD4IiEk6ILkDHILlDGg");
	var mask_graphics_11 = new cjs.Graphics().p("AptC8IholsILVD9ILWD+g");
	var mask_graphics_12 = new cjs.Graphics().p("Ap+B2Ig/miIK9E7IK+E8g");
	var mask_graphics_13 = new cjs.Graphics().p("AqUBbIgJnaIKdF/IKeGAg");
	var mask_graphics_14 = new cjs.Graphics().p("AqQBLIA9oSIJyHHIJyHIg");
	var mask_graphics_15 = new cjs.Graphics().p("AqEA0ICXpFII4IRII6ISg");
	var mask_graphics_16 = new cjs.Graphics().p("ApyAUIEDpuIHxJaIHxJbg");
	var mask_graphics_17 = new cjs.Graphics().p("ApbgXIGFqHIGYKfIGaKeg");
	var mask_graphics_18 = new cjs.Graphics().p("Ao8hRIIaqJIEvLbIEwLag");
	var mask_graphics_19 = new cjs.Graphics().p("AoVieIK/pqQAAAAC2MJIC2MIg");
	var mask_graphics_20 = new cjs.Graphics().p("Am3j/INxolQgBAAAtMkIAsMlg");
	var mask_graphics_21 = new cjs.Graphics().p("Ampl3IQmmxQgBABhqMnIhqMpg");
	var mask_graphics_22 = new cjs.Graphics().p("Alsn4IRXkZQgBAAjYMRIjZMSg");
	var mask_graphics_23 = new cjs.Graphics().p("AkepuIR0h+QgBAAlELsIlCLtgANWrsIAAAAIAAAAg");
	var mask_graphics_24 = new cjs.Graphics().p("AjBrIIR7AhQgBgBmoK5ImmK4gAO6qnIAAAAg");
	var mask_graphics_25 = new cjs.Graphics().p("AhVrWIRrC/QgBgBoEJ3IoCJ4g");
	var mask_graphics_26 = new cjs.Graphics().p("AAhrWIRHFZQgBgBpWIqIpUIrg");
	var mask_graphics_27 = new cjs.Graphics().p("ACirIIQMHsQAAAAqdHSIqbHTg");
	var mask_graphics_28 = new cjs.Graphics().p("AEqqtIO+J3QAAgBrXFyIrVFzg");
	var mask_graphics_29 = new cjs.Graphics().p("AG2qEINeL0QAAgBsDELIsBELg");
	var mask_graphics_30 = new cjs.Graphics().p("AJEpPILuNjQgBAAsgCeIseCeg");
	var mask_graphics_31 = new cjs.Graphics().p("ALRoPIJvPDQgBgBsuAuIstAvg");
	var mask_graphics_32 = new cjs.Graphics().p("AIRHFIsrhCIR0uKIHkQPQAAgBsthCg");
	var mask_graphics_33 = new cjs.Graphics().p("AIRFyIsaixITmrlIFQRJQAAgBsciyg");
	var mask_graphics_34 = new cjs.Graphics().p("AIRFJIr6kdIVBowIC1RsQAAgBr8keg");
	var mask_graphics_35 = new cjs.Graphics().p("AIRFJIrLmDIWBlyIAXR7QABgBrOmFg");
	var mask_graphics_36 = new cjs.Graphics().p("AHOFJIqQniIWnisIiHRzQAAgBqQnkg");
	var mask_graphics_37 = new cjs.Graphics().p("AGdFJIpjoYIWwgwIjoRjQABgBpmoag");
	var mask_graphics_38 = new cjs.Graphics().p("AFuFJIo0pKIWvBMIlGRLQAAgBo1pMg");
	var mask_graphics_39 = new cjs.Graphics().p("AFAFJIoAp4IWjDIImjQrQABgBoBp6g");
	var mask_graphics_40 = new cjs.Graphics().p("AETFJInIqiIWNFDIn8QEQAAgBnJqkg");
	var mask_graphics_41 = new cjs.Graphics().p("ADoFJImMrGIVsG5IpTPWQABgBmOrIg");
	var mask_graphics_42 = new cjs.Graphics().p("ADAFJIlPrmIVCIvIqkOfQAAgBlPrng");
	var mask_graphics_43 = new cjs.Graphics().p("ACaFJIkPr/IUNKfIrwNiQABgBkPsBg");
	var mask_graphics_44 = new cjs.Graphics().p("AB2FJIjMsUITPMLIs3MfQABAAjNsWg");
	var mask_graphics_45 = new cjs.Graphics().p("ABWFJIiIsiISINxIt5LWQABgBiIskg");
	var mask_graphics_46 = new cjs.Graphics().p("AA4FJIhCsrIQ4PRIuzKHQABAAhEstg");
	var mask_graphics_47 = new cjs.Graphics().p("AAfFJIABsuIPjQqIvnI0QABAAACswg");
	var mask_graphics_48 = new cjs.Graphics().p("AAIFJIBIsrIOER7IwTHdQABAABGstg");
	var mask_graphics_49 = new cjs.Graphics().p("AgJFJICLsiIMfTDIw3GDQABAACMskg");
	var mask_graphics_50 = new cjs.Graphics().p("AgXFJIDPsTIK0UDIxVElQABAADRsVg");
	var mask_graphics_51 = new cjs.Graphics().p("AgiFJIESr+IJEU5IxqDFQABAAETsAg");
	var mask_graphics_52 = new cjs.Graphics().p("Al8QvIAAAAIAAAAIAAAAgAgoFJIFSrkIHQVmIx2BkQABAAFTrmg");
	var mask_graphics_53 = new cjs.Graphics().p("Am9QQIAAAAIAAAAIAAAAgAgrFKIGQrEIFZWIIx7ACQABAAGRrGg");
	var mask_graphics_54 = new cjs.Graphics().p("AmwOAQAAABHhqAIHhp+IgKWQg");
	var mask_graphics_55 = new cjs.Graphics().p("AogMXIIho7IIgo6IlBVRg");
	var mask_graphics_56 = new cjs.Graphics().p("ApRLMIJRn6IJSn5IpETkg");
	var mask_graphics_57 = new cjs.Graphics().p("Ap3KaIJ3nAIJ4m+IsSRdg");
	var mask_graphics_58 = new cjs.Graphics().p("AqUJ4IKUmLIKVmJIuwPOg");
	var mask_graphics_59 = new cjs.Graphics().p("AqqJiIKqldIKrldIwkNFg");
	var mask_graphics_60 = new cjs.Graphics().p("Aq6JUIK6k4IK7k3Ix2LLg");
	var mask_graphics_61 = new cjs.Graphics().p("ArGJLILGkaILHkaIytJngArGJLIAAAAIAAAAIAAAAg");
	var mask_graphics_62 = new cjs.Graphics().p("ArOJGILOkFILPkFIzPIdg");
	var mask_graphics_63 = new cjs.Graphics().p("ArSJDIAAAAIAAAAIAAAAgAAAFKILTj4IzhHxIjEAAILSj5g");
	var mask_graphics_64 = new cjs.Graphics().p("ArTI+IAAAAIAAAAIAAAAgAAAFKILUj0IznHiIjAAGILTj0g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_4,x:29.5764,y:37.3056}).wait(1).to({graphics:mask_graphics_5,x:29.5975,y:37.0754}).wait(1).to({graphics:mask_graphics_6,x:29.6754,y:36.3842}).wait(1).to({graphics:mask_graphics_7,x:29.8538,y:35.2304}).wait(1).to({graphics:mask_graphics_8,x:30.2057,y:33.6119}).wait(1).to({graphics:mask_graphics_9,x:30.8322,y:33.1201}).wait(1).to({graphics:mask_graphics_10,x:31.8623,y:33.1179}).wait(1).to({graphics:mask_graphics_11,x:33.45,y:33.1153}).wait(1).to({graphics:mask_graphics_12,x:35.7711,y:33.1124}).wait(1).to({graphics:mask_graphics_13,x:39.0174,y:27.8341}).wait(1).to({graphics:mask_graphics_14,x:40.3224,y:20.6343}).wait(1).to({graphics:mask_graphics_15,x:41.5661,y:13.2411}).wait(1).to({graphics:mask_graphics_16,x:43.3043,y:5.9381}).wait(1).to({graphics:mask_graphics_17,x:45.6455,y:-0.9234}).wait(1).to({graphics:mask_graphics_18,x:48.7092,y:-6.9235}).wait(1).to({graphics:mask_graphics_19,x:52.624,y:-11.5804}).wait(1).to({graphics:mask_graphics_20,x:53.0256,y:-14.3649}).wait(1).to({graphics:mask_graphics_21,x:63.6987,y:-14.5777}).wait(1).to({graphics:mask_graphics_22,x:74.7355,y:-12.3404}).wait(1).to({graphics:mask_graphics_23,x:85.3572,y:-8.6026}).wait(1).to({graphics:mask_graphics_24,x:95.361,y:-5.0873}).wait(1).to({graphics:mask_graphics_25,x:104.5559,y:-6.4873}).wait(1).to({graphics:mask_graphics_26,x:112.7663,y:-6.5005}).wait(1).to({graphics:mask_graphics_27,x:119.8352,y:-5.1268}).wait(1).to({graphics:mask_graphics_28,x:125.6278,y:-2.3927}).wait(1).to({graphics:mask_graphics_29,x:130.0333,y:1.6494}).wait(1).to({graphics:mask_graphics_30,x:132.9678,y:6.9223}).wait(1).to({graphics:mask_graphics_31,x:134.375,y:13.3249}).wait(1).to({graphics:mask_graphics_32,x:134.2283,y:27.3951}).wait(1).to({graphics:mask_graphics_33,x:132.5305,y:46.8131}).wait(1).to({graphics:mask_graphics_34,x:129.3139,y:61.6274}).wait(1).to({graphics:mask_graphics_35,x:124.6402,y:71.869}).wait(1).to({graphics:mask_graphics_36,x:125.3129,y:81.385}).wait(1).to({graphics:mask_graphics_37,x:125.7845,y:86.7992}).wait(1).to({graphics:mask_graphics_38,x:125.726,y:91.8218}).wait(1).to({graphics:mask_graphics_39,x:125.1385,y:96.4165}).wait(1).to({graphics:mask_graphics_40,x:124.0261,y:100.55}).wait(1).to({graphics:mask_graphics_41,x:122.3969,y:104.1922}).wait(1).to({graphics:mask_graphics_42,x:120.2628,y:107.3166}).wait(1).to({graphics:mask_graphics_43,x:117.6392,y:109.9004}).wait(1).to({graphics:mask_graphics_44,x:114.5453,y:111.9249}).wait(1).to({graphics:mask_graphics_45,x:111.0036,y:113.3753}).wait(1).to({graphics:mask_graphics_46,x:107.0398,y:114.241}).wait(1).to({graphics:mask_graphics_47,x:102.6827,y:114.5159}).wait(1).to({graphics:mask_graphics_48,x:97.9641,y:114.1979}).wait(1).to({graphics:mask_graphics_49,x:92.9183,y:113.2893}).wait(1).to({graphics:mask_graphics_50,x:87.582,y:111.7967}).wait(1).to({graphics:mask_graphics_51,x:81.994,y:109.731}).wait(1).to({graphics:mask_graphics_52,x:76.1949,y:107.1073}).wait(1).to({graphics:mask_graphics_53,x:70.1656,y:104.01}).wait(1).to({graphics:mask_graphics_54,x:52.9629,y:104.2684}).wait(1).to({graphics:mask_graphics_55,x:51.5,y:101.1251}).wait(1).to({graphics:mask_graphics_56,x:46.5967,y:95.652}).wait(1).to({graphics:mask_graphics_57,x:42.799,y:88.9116}).wait(1).to({graphics:mask_graphics_58,x:39.8913,y:81.776}).wait(1).to({graphics:mask_graphics_59,x:37.6995,y:74.916}).wait(1).to({graphics:mask_graphics_60,x:36.0847,y:68.818}).wait(1).to({graphics:mask_graphics_61,x:34.9378,y:63.8143}).wait(1).to({graphics:mask_graphics_62,x:34.1766,y:60.1186}).wait(1).to({graphics:mask_graphics_63,x:33.7429,y:57.8624}).wait(1).to({graphics:mask_graphics_64,x:33.7044,y:57.4292}).wait(1).to({graphics:null,x:0,y:0}).wait(2));

	// Trimpath Radial
	this.instance = new lib.Outline("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(106.15,66,1,1,0,0,0,110.5,69.8);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(60).to({startPosition:0},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-4.8,223,141.60000000000002);


(lib.phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ScreenImages
	this.instance = new lib.ScreenImages("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(77.95,159.15,0.636,0.636,0,0,0,125.1,255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// Layer_2
	this.instance_1 = new lib.PhoneBG("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(78.5,157.6,1,1,0,0,0,79.5,162.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-4.5,158.9,324.2);


(lib.ms_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.ms = new lib.ms();
	this.ms.name = "ms";
	this.ms.parent = this;
	this.ms.setTransform(64.45,10.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEBA00").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape.setTransform(16.425,16.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#03A5EA").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_1.setTransform(5.125,16.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7CBB01").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_2.setTransform(16.425,5.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F25022").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_3.setTransform(5.125,5.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.ms}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ms_logo, new cjs.Rectangle(0,0,100.9,21.6), null);


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
	this.instance.setTransform(-18.15,0.05,1,1,0,0,0,5.6,4.2);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({x:2.15},8,cjs.Ease.get(1)).wait(1).to({x:2},0).wait(1).to({x:1.35},0).wait(1).to({x:0.4},0).wait(1).to({x:-0.4},0).wait(1).to({x:-0.9},0).wait(1).to({x:-1.05},0).wait(1).to({x:-0.95},0).wait(1).to({x:-0.6},0).wait(1).to({x:-0.15},0).wait(1).to({x:0.25},0).wait(1).to({x:0.5},0).wait(1).to({x:0.55},0).wait(2).to({x:0.4},0).wait(1).to({x:0.25},0).wait(1).to({x:0.1},0).wait(1).to({x:0},0).wait(1).to({x:-0.05},0).wait(1).to({x:0},0).wait(1).to({x:0.05},0).wait(1).to({x:0.1},0).wait(1).to({x:0.15},0).wait(11));

	// Layer 2
	this.instance_1 = new lib.arrow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.15,0.05,1,1,0,0,0,5.6,4.2);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-1.15},8,cjs.Ease.get(1)).wait(2).to({x:19.85},8,cjs.Ease.get(-1)).to({_off:true},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-4.1,20.5,8.3);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ms();
	this.instance.parent = this;
	this.instance.setTransform(14,-0.35);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEBA00").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape.setTransform(-34.0247,5.6753);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#03A5EA").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_1.setTransform(-45.3249,5.6753);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7CBB01").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_2.setTransform(-34.0247,-5.6249);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F25022").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_3.setTransform(-45.3249,-5.6249);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-50.4,-10.7,100.9,21.5), null);


(lib.laptop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.LaptopScreen();
	this.instance.parent = this;
	this.instance.setTransform(144.55,70.25,0.722,0.722,0,0,0,199.8,111.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// Layer_3
	this.instance_1 = new lib.LatpotKeyboard();
	this.instance_1.parent = this;
	this.instance_1.setTransform(144.7,150.55,0.722,0.8724,0,0,0,200.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({scaleY:1.1711},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.3,-10,288.8,294.1);


(lib.MSFT_Logocopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.logo = new lib.logo();
	this.logo.name = "logo";
	this.logo.parent = this;
	this.logo.setTransform(-0.35,1.4);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

}).prototype = getMCSymbolPrototype(lib.MSFT_Logocopy, new cjs.Rectangle(-50.8,-9.3,100.9,21.5), null);


(lib.MSFT_logo_sq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.logo_box = new lib.logo_box();
	this.logo_box.name = "logo_box";
	this.logo_box.parent = this;
	this.logo_box.setTransform(-40,1.4);

	this.timeline.addTween(cjs.Tween.get(this.logo_box).wait(1));

}).prototype = getMCSymbolPrototype(lib.MSFT_logo_sq, new cjs.Rectangle(-50.8,-9.3,21.599999999999998,21.5), null);


(lib.MSFT_Logo_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.ms.cache(-101,-22,202,44,2)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.ms = new lib.ms_logo();
	this.ms.name = "ms";
	this.ms.parent = this;
	this.ms.setTransform(-0.3,1.45,1,1,0,0,0,50.5,10.8);

	this.timeline.addTween(cjs.Tween.get(this.ms).wait(1));

}).prototype = getMCSymbolPrototype(lib.MSFT_Logo_anim, new cjs.Rectangle(-50.8,-9.3,100.9,21.5), null);


(lib.MSFT_Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.logo.cache(-101,-22,202,44,2)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.logo = new lib.logo();
	this.logo.name = "logo";
	this.logo.parent = this;
	this.logo.setTransform(-0.35,1.4);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

}).prototype = getMCSymbolPrototype(lib.MSFT_Logo, new cjs.Rectangle(-50.8,-9.3,100.9,21.5), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_68 = function() {
		exportRoot.mainMC.anim.gotoAndPlay(1)
	}
	this.frame_77 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(68).call(this.frame_68).wait(9).call(this.frame_77).wait(1));

	// Layer_2
	this.instance_1 = new lib.MSFT_logo_sq();
	this.instance_1.parent = this;
	this.instance_1.setTransform(302.7,339.4,0.3276,0.3276,0,0,0,-39.9,1.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({regX:-40,regY:1.4,scaleX:5.4173,scaleY:5.4173,x:302.75,y:339.2},13,cjs.Ease.quadOut).to({x:87.75},12,cjs.Ease.quadInOut).to({_off:true},1).wait(51));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("AlmfHIAAyRMBE0AAAIAASRg");
	var mask_graphics_15 = new cjs.Graphics().p("Al1fHIAAyRMBE0AAAIAASRg");
	var mask_graphics_16 = new cjs.Graphics().p("AmifHIAAyRMBE0AAAIAASRg");
	var mask_graphics_17 = new cjs.Graphics().p("AntfHIAAyRMBE0AAAIAASRg");
	var mask_graphics_18 = new cjs.Graphics().p("ApWfHIAAyRMBE0AAAIAASRg");
	var mask_graphics_19 = new cjs.Graphics().p("ArefHIAAyRMBE0AAAIAASRg");
	var mask_graphics_20 = new cjs.Graphics().p("AuDfHIAAyRMBE0AAAIAASRg");
	var mask_graphics_21 = new cjs.Graphics().p("AwofHIAAyRMBE0AAAIAASRg");
	var mask_graphics_22 = new cjs.Graphics().p("AywfHIAAyRMBE0AAAIAASRg");
	var mask_graphics_23 = new cjs.Graphics().p("A0ZfHIAAyRMBE0AAAIAASRg");
	var mask_graphics_24 = new cjs.Graphics().p("A1kfHIAAyRMBE0AAAIAASRg");
	var mask_graphics_25 = new cjs.Graphics().p("A2RfHIAAyRMBE0AAAIAASRg");
	var mask_graphics_26 = new cjs.Graphics().p("A2gfHIAAyRMBE0AAAIAASRg");
	var mask_graphics_51 = new cjs.Graphics().p("EhL2CXxMAAAkvhMCXtAAAMAAAEvhg");
	var mask_graphics_52 = new cjs.Graphics().p("EhL2CXxMAAAkvhMCXtAAAMAAAEvhg");
	var mask_graphics_53 = new cjs.Graphics().p("EhL2CXxMAAAkvhMCXtAAAMAAAEvhg");
	var mask_graphics_54 = new cjs.Graphics().p("EhL2CXxMAAAkvhMCXtAAAMAAAEvhg");
	var mask_graphics_55 = new cjs.Graphics().p("EhL2CXxMAAAkvhMCXtAAAMAAAEvhg");
	var mask_graphics_56 = new cjs.Graphics().p("EhL2CXxMAAAkvhMCXtAAAMAAAEvhg");
	var mask_graphics_57 = new cjs.Graphics().p("EhL2CXxMAAAkvhMCXtAAAMAAAEvhg");
	var mask_graphics_58 = new cjs.Graphics().p("EhL2CXxMAAAkvhMCXtAAAMAAAEvhg");
	var mask_graphics_59 = new cjs.Graphics().p("EhL2CXxMAAAkvhMCXtAAAMAAAEvhg");
	var mask_graphics_60 = new cjs.Graphics().p("EhL2CXxMAAAkvhMCXtAAAMAAAEvhg");
	var mask_graphics_61 = new cjs.Graphics().p("EhL2CXxMAAAkvhMCXtAAAMAAAEvhg");
	var mask_graphics_62 = new cjs.Graphics().p("EhL2CXxMAAAkvhMCXtAAAMAAAEvhg");
	var mask_graphics_63 = new cjs.Graphics().p("EhL2CXxMAAAkvhMCXtAAAMAAAEvhg");
	var mask_graphics_64 = new cjs.Graphics().p("EhL2CXxMAAAkvhMCXtAAAMAAAEvhg");
	var mask_graphics_65 = new cjs.Graphics().p("EhL2CXxMAAAkvhMCXtAAAMAAAEvhg");
	var mask_graphics_66 = new cjs.Graphics().p("EhL2CXxMAAAkvhMCXtAAAMAAAEvhg");
	var mask_graphics_67 = new cjs.Graphics().p("EhL2CXxMAAAkvhMCXtAAAMAAAEvhg");
	var mask_graphics_68 = new cjs.Graphics().p("EhL2CXxMAAAkvhMCXtAAAMAAAEvhg");
	var mask_graphics_69 = new cjs.Graphics().p("EhL2CXxMAAAkvhMCXtAAAMAAAEvhg");
	var mask_graphics_70 = new cjs.Graphics().p("EhM1CXxMAAAkvhMCXtAAAMAAAEvhg");
	var mask_graphics_71 = new cjs.Graphics().p("EhTjCXxMAAAkvhMCXsAAAMAAAEvhg");
	var mask_graphics_72 = new cjs.Graphics().p("EhaoCXxMAAAkvhMCXtAAAMAAAEvhg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:404.6146,y:199.0879}).wait(1).to({graphics:mask_graphics_15,x:403.1112,y:199.0879}).wait(1).to({graphics:mask_graphics_16,x:398.6008,y:199.0879}).wait(1).to({graphics:mask_graphics_17,x:391.0834,y:199.0879}).wait(1).to({graphics:mask_graphics_18,x:380.5591,y:199.0879}).wait(1).to({graphics:mask_graphics_19,x:367.0278,y:199.0879}).wait(1).to({graphics:mask_graphics_20,x:350.4896,y:199.0879}).wait(1).to({graphics:mask_graphics_21,x:333.9514,y:199.0879}).wait(1).to({graphics:mask_graphics_22,x:320.4202,y:199.0879}).wait(1).to({graphics:mask_graphics_23,x:309.8959,y:199.0879}).wait(1).to({graphics:mask_graphics_24,x:302.3785,y:199.0879}).wait(1).to({graphics:mask_graphics_25,x:297.8681,y:199.0879}).wait(1).to({graphics:mask_graphics_26,x:296.3646,y:199.0879}).wait(1).to({graphics:null,x:0,y:0}).wait(24).to({graphics:mask_graphics_51,x:298.0398,y:339.3566}).wait(1).to({graphics:mask_graphics_52,x:295.8343,y:339.3566}).wait(1).to({graphics:mask_graphics_53,x:289.2176,y:339.3566}).wait(1).to({graphics:mask_graphics_54,x:278.1898,y:339.3566}).wait(1).to({graphics:mask_graphics_55,x:262.7509,y:339.3566}).wait(1).to({graphics:mask_graphics_56,x:242.9009,y:339.3566}).wait(1).to({graphics:mask_graphics_57,x:218.6398,y:339.3566}).wait(1).to({graphics:mask_graphics_58,x:189.9676,y:339.3566}).wait(1).to({graphics:mask_graphics_59,x:156.8843,y:339.3566}).wait(1).to({graphics:mask_graphics_60,x:119.3898,y:339.3566}).wait(1).to({graphics:mask_graphics_61,x:77.4843,y:339.3566}).wait(1).to({graphics:mask_graphics_62,x:31.1676,y:339.3566}).wait(1).to({graphics:mask_graphics_63,x:-19.5602,y:339.3566}).wait(1).to({graphics:mask_graphics_64,x:-74.6991,y:339.3566}).wait(1).to({graphics:mask_graphics_65,x:-134.2491,y:339.3566}).wait(1).to({graphics:mask_graphics_66,x:-198.2102,y:339.3566}).wait(1).to({graphics:mask_graphics_67,x:-266.5824,y:339.3566}).wait(1).to({graphics:mask_graphics_68,x:-339.3657,y:339.3566}).wait(1).to({graphics:mask_graphics_69,x:-416.5602,y:339.3566}).wait(1).to({graphics:mask_graphics_70,x:-491.8278,y:339.3566}).wait(1).to({graphics:mask_graphics_71,x:-534.8361,y:339.3566}).wait(1).to({graphics:mask_graphics_72,x:-580.05,y:339.3566}).wait(6));

	// Layer 3
	this.instance_2 = new lib.MSFT_Logocopy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(88.55,332.7,5.4173,5.4173,0,0,0,0.1,0.2);
	this.instance_2._off = true;

	this.instance_3 = new lib.MSFT_Logo_anim();
	this.instance_3.parent = this;
	this.instance_3.setTransform(305,332.7,5.4173,5.4173,0,0,0,0.1,0.2);

	var maskedShapeInstanceList = [this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},14).to({state:[{t:this.instance_3}]},12).to({state:[]},47).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({_off:true,x:305},12,cjs.Ease.quadInOut).wait(52));

	// white
	this.instance_4 = new lib.white();
	this.instance_4.parent = this;
	this.instance_4.setTransform(297.95,339.3,1,1,0,0,0,485.4,406.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(51).to({x:-674.7},21,cjs.Ease.quadIn).to({_off:true},1).wait(5));

	// white copy
	this.instance_5 = new lib.white();
	this.instance_5.parent = this;
	this.instance_5.setTransform(297.95,339.3,1,1,0,0,0,485.4,406.9);
	this.instance_5.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(52).to({x:-674.7},21,cjs.Ease.quadIn).to({_off:true},2).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1160.1,-631.9,1943.6,1942.5);


(lib.cloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cloud.cache(-212,-132,424,264,1.8)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.cloud = new lib.cloud_sub();
	this.cloud.name = "cloud";
	this.cloud.parent = this;
	this.cloud.setTransform(106,66,1,1,0,0,0,106,66);

	this.timeline.addTween(cjs.Tween.get(this.cloud).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,212,132);


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
	this.arrow.setTransform(10.75,10.75);

	this.arrow_1 = new lib.cta_arrowmo();
	this.arrow_1.name = "arrow_1";
	this.arrow_1.parent = this;
	this.arrow_1.setTransform(10.75,10.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arrow}]}).to({state:[{t:this.arrow_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,20.5,20.5);


(lib.arrow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.arrow.cache(-89,-83,178,166,1.8)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.arrow = new lib.arrow_sub();
	this.arrow.name = "arrow";
	this.arrow.parent = this;
	this.arrow.setTransform(44,41.3,1,1,0,0,0,44,41.3);

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow_mc, new cjs.Rectangle(0,0,88,82.6), null);


(lib.anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_275 = function() {
		exportRoot.tl1.play()
		exportRoot.finalHeadline.play()
		TweenMax.delayedCall(0.4, function(){exportRoot.finalHeadline2.play()})
	}
	this.frame_285 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(275).call(this.frame_275).wait(10).call(this.frame_285).wait(1));

	// laptop
	this.instance = new lib.laptop("single",0);
	this.instance.parent = this;
	this.instance.setTransform(144.45,160.65,0.7868,0.7868,0,0,0,145.3,80.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({mode:"synched",startPosition:7,loop:false},0).wait(1).to({regX:144.7,regY:137,x:144,y:205.75,startPosition:8},0).wait(1).to({y:206.2,startPosition:9},0).wait(1).to({y:206.7,startPosition:10},0).wait(1).to({y:207.25,startPosition:11},0).wait(1).to({y:207.9,startPosition:12},0).wait(1).to({y:208.6,startPosition:13},0).wait(1).to({y:209.4,startPosition:14},0).wait(1).to({y:210.35,startPosition:15},0).wait(1).to({y:211.45,startPosition:16},0).wait(1).to({y:212.65,startPosition:17},0).wait(1).to({y:214.1,startPosition:18},0).wait(1).to({regX:145.3,regY:80.2,x:144.45,y:171.05,startPosition:19},0).wait(1).to({regX:144.7,regY:137,x:144,y:220,startPosition:20},0).wait(1).to({y:224.9,startPosition:21},0).wait(1).to({y:230.4,startPosition:22},0).wait(1).to({y:236.7,startPosition:23},0).wait(1).to({y:243.8,startPosition:24},0).wait(1).to({y:251.85,startPosition:25},0).wait(1).to({y:260.9,startPosition:26},0).wait(1).to({y:271.05,startPosition:27},0).wait(1).to({y:282.35,startPosition:28},0).wait(1).to({y:294.9,startPosition:29},0).wait(1).to({y:308.65,startPosition:30},0).wait(1).to({y:323.65,startPosition:31},0).wait(1).to({y:339.8,startPosition:32},0).wait(1).to({y:357.1,startPosition:33},0).wait(1).to({y:375.4,startPosition:34},0).wait(1).to({y:394.6,startPosition:35},0).wait(1).to({y:414.6,startPosition:36},0).wait(1).to({y:435.3,startPosition:37},0).wait(1).to({y:456.55,startPosition:38},0).wait(1).to({y:478.25,startPosition:39},0).wait(1).to({regX:145.3,regY:80.2,x:144.45,y:455.65,mode:"single"},0).wait(228));

	// text 2
	this.frame2 = new lib.Access_txt();
	this.frame2.name = "frame2";
	this.frame2.parent = this;
	this.frame2.setTransform(248.85,366.15,1,1,0,0,0,106,66);
	this.frame2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.frame2).wait(204).to({x:250,y:51.45,alpha:1},25,cjs.Ease.cubicOut).wait(30).to({alpha:0},15).wait(12));

	// cloud text
	this.frame1 = new lib.cloud_txt();
	this.frame1.name = "frame1";
	this.frame1.parent = this;
	this.frame1.setTransform(248.45,-110.8,1,1,0,0,0,106,66);

	this.timeline.addTween(cjs.Tween.get(this.frame1).wait(68).to({y:142.05},42,cjs.Ease.cubicOut).wait(54).to({y:-111.25,alpha:0},30,cjs.Ease.cubicIn).wait(92));

	// cloud 2
	this.instance_1 = new lib.cloud_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(144.95,-169.5,1,1,0,0,0,44.8,31.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(68).to({_off:false},0).to({y:83.35},42,cjs.Ease.cubicOut).wait(54).to({y:-169.95},30,cjs.Ease.cubicIn).wait(92));

	// cloud shade
	this.instance_2 = new lib.cloud_shadow();
	this.instance_2.parent = this;
	this.instance_2.setTransform(144.95,-159.55,1,1,0,0,0,45.1,30.3);
	this.instance_2.alpha = 0.3906;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(68).to({_off:false},0).to({y:93.3,alpha:0},42,cjs.Ease.cubicOut).wait(54).to({y:-160},30,cjs.Ease.cubicIn).wait(92));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgQUqIAAu7IPdAAIAAO7g");
	var mask_graphics_1 = new cjs.Graphics().p("AgQUiIAAu7IPdAAIAAO7g");
	var mask_graphics_2 = new cjs.Graphics().p("AgQUaIAAu7IPdAAIAAO7g");
	var mask_graphics_3 = new cjs.Graphics().p("AgQUSIAAu8IPdAAIAAO8g");
	var mask_graphics_4 = new cjs.Graphics().p("AgQUKIAAu8IPdAAIAAO8g");
	var mask_graphics_5 = new cjs.Graphics().p("AgQUBIAAu7IPdAAIAAO7g");
	var mask_graphics_6 = new cjs.Graphics().p("AgQT5IAAu7IPdAAIAAO7g");
	var mask_graphics_7 = new cjs.Graphics().p("AgQTxIAAu7IPdAAIAAO7g");
	var mask_graphics_8 = new cjs.Graphics().p("AgQTpIAAu7IPdAAIAAO7g");
	var mask_graphics_9 = new cjs.Graphics().p("AgQThIAAu8IPdAAIAAO8g");
	var mask_graphics_10 = new cjs.Graphics().p("AgQTZIAAu8IPdAAIAAO8g");
	var mask_graphics_11 = new cjs.Graphics().p("AgQTRIAAu8IPdAAIAAO8g");
	var mask_graphics_12 = new cjs.Graphics().p("AgQTJIAAu8IPdAAIAAO8g");
	var mask_graphics_13 = new cjs.Graphics().p("AgQTAIAAu7IPdAAIAAO7g");
	var mask_graphics_14 = new cjs.Graphics().p("AgQS4IAAu8IPdAAIAAO8g");
	var mask_graphics_15 = new cjs.Graphics().p("AgQSwIAAu8IPdAAIAAO8g");
	var mask_graphics_16 = new cjs.Graphics().p("AgQSoIAAu8IPdAAIAAO8g");
	var mask_graphics_17 = new cjs.Graphics().p("AgQSgIAAu8IPdAAIAAO8g");
	var mask_graphics_18 = new cjs.Graphics().p("AgQSYIAAu8IPdAAIAAO8g");
	var mask_graphics_19 = new cjs.Graphics().p("AgQSQIAAu9IPdAAIAAO9g");
	var mask_graphics_20 = new cjs.Graphics().p("AgQSIIAAu9IPdAAIAAO9g");
	var mask_graphics_21 = new cjs.Graphics().p("AgQR/IAAu8IPdAAIAAO8g");
	var mask_graphics_22 = new cjs.Graphics().p("AgQR3IAAu8IPdAAIAAO8g");
	var mask_graphics_23 = new cjs.Graphics().p("AgQRvIAAu8IPdAAIAAO8g");
	var mask_graphics_24 = new cjs.Graphics().p("AgQRnIAAu9IPdAAIAAO9g");
	var mask_graphics_25 = new cjs.Graphics().p("AgQRfIAAu9IPdAAIAAO9g");
	var mask_graphics_26 = new cjs.Graphics().p("AgQRXIAAu9IPdAAIAAO9g");
	var mask_graphics_27 = new cjs.Graphics().p("AgQRPIAAu9IPdAAIAAO9g");
	var mask_graphics_28 = new cjs.Graphics().p("AgQRHIAAu9IPdAAIAAO9g");
	var mask_graphics_29 = new cjs.Graphics().p("AgQQ+IAAu8IPdAAIAAO8g");
	var mask_graphics_30 = new cjs.Graphics().p("AgQQ2IAAu9IPdAAIAAO9g");
	var mask_graphics_31 = new cjs.Graphics().p("AgQQuIAAu9IPdAAIAAO9g");
	var mask_graphics_32 = new cjs.Graphics().p("AgQQmIAAu9IPdAAIAAO9g");
	var mask_graphics_33 = new cjs.Graphics().p("AgQQeIAAu9IPdAAIAAO9g");
	var mask_graphics_34 = new cjs.Graphics().p("AgQQWIAAu9IPdAAIAAO9g");
	var mask_graphics_35 = new cjs.Graphics().p("AgQQOIAAu+IPdAAIAAO+g");
	var mask_graphics_36 = new cjs.Graphics().p("AgQQGIAAu+IPdAAIAAO+g");
	var mask_graphics_37 = new cjs.Graphics().p("AgQP9IAAu9IPdAAIAAO9g");
	var mask_graphics_38 = new cjs.Graphics().p("AgQP1IAAu9IPdAAIAAO9g");
	var mask_graphics_39 = new cjs.Graphics().p("AgQPtIAAu9IPdAAIAAO9g");
	var mask_graphics_40 = new cjs.Graphics().p("AgQPlIAAu+IPdAAIAAO+g");
	var mask_graphics_41 = new cjs.Graphics().p("AgQPdIAAu+IPdAAIAAO+g");
	var mask_graphics_42 = new cjs.Graphics().p("AgQPVIAAu+IPdAAIAAO+g");
	var mask_graphics_43 = new cjs.Graphics().p("AgQPNIAAu+IPdAAIAAO+g");
	var mask_graphics_44 = new cjs.Graphics().p("AgQPFIAAu+IPdAAIAAO+g");
	var mask_graphics_45 = new cjs.Graphics().p("AgQO9IAAu9IPdAAIAAO9g");
	var mask_graphics_46 = new cjs.Graphics().p("AgQO0IAAu9IPdAAIAAO9g");
	var mask_graphics_47 = new cjs.Graphics().p("AgQOsIAAu9IPdAAIAAO9g");
	var mask_graphics_48 = new cjs.Graphics().p("AgQOkIAAu9IPdAAIAAO9g");
	var mask_graphics_49 = new cjs.Graphics().p("AgQOcIAAu9IPdAAIAAO9g");
	var mask_graphics_50 = new cjs.Graphics().p("AgQOUIAAu9IPdAAIAAO9g");
	var mask_graphics_51 = new cjs.Graphics().p("AgQOMIAAu+IPdAAIAAO+g");
	var mask_graphics_52 = new cjs.Graphics().p("AgQOEIAAu+IPdAAIAAO+g");
	var mask_graphics_53 = new cjs.Graphics().p("AgQN8IAAu+IPdAAIAAO+g");
	var mask_graphics_54 = new cjs.Graphics().p("AgQNzIAAu9IPdAAIAAO9g");
	var mask_graphics_55 = new cjs.Graphics().p("AgQNrIAAu9IPdAAIAAO9g");
	var mask_graphics_56 = new cjs.Graphics().p("AgQNjIAAu+IPdAAIAAO+g");
	var mask_graphics_57 = new cjs.Graphics().p("AgQNbIAAu+IPdAAIAAO+g");
	var mask_graphics_58 = new cjs.Graphics().p("AgQNTIAAu+IPdAAIAAO+g");
	var mask_graphics_59 = new cjs.Graphics().p("AgQNLIAAu+IPdAAIAAO+g");
	var mask_graphics_60 = new cjs.Graphics().p("AgQNDIAAu+IPdAAIAAO+g");
	var mask_graphics_61 = new cjs.Graphics().p("AgQM7IAAu+IPdAAIAAO+g");
	var mask_graphics_62 = new cjs.Graphics().p("AgQMyIAAu+IPdAAIAAO+g");
	var mask_graphics_63 = new cjs.Graphics().p("AgQMqIAAu+IPdAAIAAO+g");
	var mask_graphics_64 = new cjs.Graphics().p("AgQMiIAAu+IPdAAIAAO+g");
	var mask_graphics_65 = new cjs.Graphics().p("AgQMaIAAu+IPdAAIAAO+g");
	var mask_graphics_66 = new cjs.Graphics().p("AgQMSIAAu+IPdAAIAAO+g");
	var mask_graphics_67 = new cjs.Graphics().p("AgQMKIAAu/IPdAAIAAO/g");
	var mask_graphics_68 = new cjs.Graphics().p("AgQMCIAAu/IPdAAIAAO/g");
	var mask_graphics_69 = new cjs.Graphics().p("AgQL6IAAu/IPdAAIAAO/g");
	var mask_graphics_70 = new cjs.Graphics().p("AgQLxIAAu+IPdAAIAAO+g");
	var mask_graphics_71 = new cjs.Graphics().p("AgQLpIAAu+IPdAAIAAO+g");
	var mask_graphics_72 = new cjs.Graphics().p("AgQLhIAAu+IPdAAIAAO+g");
	var mask_graphics_73 = new cjs.Graphics().p("AgQLZIAAu/IPdAAIAAO/g");
	var mask_graphics_74 = new cjs.Graphics().p("AgQLRIAAu/IPdAAIAAO/g");
	var mask_graphics_75 = new cjs.Graphics().p("AgQLJIAAu/IPdAAIAAO/g");
	var mask_graphics_76 = new cjs.Graphics().p("AgQLBIAAu/IPdAAIAAO/g");
	var mask_graphics_77 = new cjs.Graphics().p("AgQK5IAAugIPdAAIAAOgg");
	var mask_graphics_78 = new cjs.Graphics().p("AgQKxIAAuAIPdAAIAAOAg");
	var mask_graphics_79 = new cjs.Graphics().p("AgQKpIAAthIPdAAIAANhg");
	var mask_graphics_80 = new cjs.Graphics().p("AgQKhIAAtBIPdAAIAANBg");
	var mask_graphics_81 = new cjs.Graphics().p("AgQKZIAAsiIPdAAIAAMig");
	var mask_graphics_82 = new cjs.Graphics().p("AgQKRIAAsCIPdAAIAAMCg");
	var mask_graphics_83 = new cjs.Graphics().p("AgQKJIAArjIPdAAIAALjg");
	var mask_graphics_84 = new cjs.Graphics().p("AgQKBIAArDIPdAAIAALDg");
	var mask_graphics_85 = new cjs.Graphics().p("AgQJ5IAAqkIPdAAIAAKkg");
	var mask_graphics_86 = new cjs.Graphics().p("AgQJxIAAqEIPdAAIAAKEg");
	var mask_graphics_87 = new cjs.Graphics().p("AgQJpIAApmIPdAAIAAJmg");
	var mask_graphics_88 = new cjs.Graphics().p("AgQJhIAApGIPdAAIAAJGg");
	var mask_graphics_89 = new cjs.Graphics().p("AgQJYIAAomIPdAAIAAImg");
	var mask_graphics_90 = new cjs.Graphics().p("AgQJQIAAoGIPdAAIAAIGg");
	var mask_graphics_91 = new cjs.Graphics().p("AgQJIIAAnmIPdAAIAAHmg");
	var mask_graphics_92 = new cjs.Graphics().p("AgQJAIAAnHIPdAAIAAHHg");
	var mask_graphics_93 = new cjs.Graphics().p("AgQI4IAAmnIPdAAIAAGng");
	var mask_graphics_94 = new cjs.Graphics().p("AgQIwIAAmIIPdAAIAAGIg");
	var mask_graphics_95 = new cjs.Graphics().p("AgQIoIAAloIPdAAIAAFog");
	var mask_graphics_96 = new cjs.Graphics().p("AgQIgIAAlJIPdAAIAAFJg");
	var mask_graphics_97 = new cjs.Graphics().p("AgQIYIAAkpIPdAAIAAEpg");
	var mask_graphics_98 = new cjs.Graphics().p("AgQIQIAAkKIPdAAIAAEKg");
	var mask_graphics_99 = new cjs.Graphics().p("AgQIIIAAjqIPdAAIAADqg");
	var mask_graphics_100 = new cjs.Graphics().p("AgQIAIAAjLIPdAAIAADLg");
	var mask_graphics_101 = new cjs.Graphics().p("AgQH4IAAirIPdAAIAACrg");
	var mask_graphics_102 = new cjs.Graphics().p("AgQHwIAAiMIPdAAIAACMg");
	var mask_graphics_164 = new cjs.Graphics().p("AgQHwIAAiMIPdAAIAACMg");
	var mask_graphics_167 = new cjs.Graphics().p("AgQJKIAAlAIPdAAIAAFAg");
	var mask_graphics_168 = new cjs.Graphics().p("AgQJKIAAllIPdAAIAAFlg");
	var mask_graphics_169 = new cjs.Graphics().p("AgQJLIAAmMIPdAAIAAGMg");
	var mask_graphics_170 = new cjs.Graphics().p("AgQJLIAAmyIPdAAIAAGyg");
	var mask_graphics_171 = new cjs.Graphics().p("AgQJLIAAnYIPdAAIAAHYg");
	var mask_graphics_172 = new cjs.Graphics().p("AgQJLIAAn9IPdAAIAAH9g");
	var mask_graphics_173 = new cjs.Graphics().p("AgQJLIAAojIPdAAIAAIjg");
	var mask_graphics_174 = new cjs.Graphics().p("AgQJMIAApKIPdAAIAAJKg");
	var mask_graphics_175 = new cjs.Graphics().p("AgQJMIAApuIPdAAIAAJug");
	var mask_graphics_176 = new cjs.Graphics().p("AgQJMIAAqUIPdAAIAAKUg");
	var mask_graphics_177 = new cjs.Graphics().p("AgQJMIAAq6IPdAAIAAK6g");
	var mask_graphics_178 = new cjs.Graphics().p("AgQJMIAArfIPdAAIAALfg");
	var mask_graphics_179 = new cjs.Graphics().p("AgQJNIAAsGIPdAAIAAMGg");
	var mask_graphics_180 = new cjs.Graphics().p("AgQJNIAAssIPdAAIAAMsg");
	var mask_graphics_181 = new cjs.Graphics().p("AgQJNIAAtRIPdAAIAANRg");
	var mask_graphics_182 = new cjs.Graphics().p("AgQJNIAAt3IPdAAIAAN3g");
	var mask_graphics_183 = new cjs.Graphics().p("AgQJNIAAudIPdAAIAAOdg");
	var mask_graphics_184 = new cjs.Graphics().p("AgQJOIAAvEIPdAAIAAPEg");
	var mask_graphics_185 = new cjs.Graphics().p("AgQJOIAAvpIPdAAIAAPpg");
	var mask_graphics_186 = new cjs.Graphics().p("AgQJOIAAwPIPdAAIAAQPg");
	var mask_graphics_187 = new cjs.Graphics().p("AgQJOIAAw1IPdAAIAAQ1g");
	var mask_graphics_188 = new cjs.Graphics().p("AgQJPIAAxbIPdAAIAARbg");
	var mask_graphics_214 = new cjs.Graphics().p("AgUNaIAA4/IPcAAIAAY/g");
	var mask_graphics_215 = new cjs.Graphics().p("AgUNDIAA3rIPdAAIAAXrg");
	var mask_graphics_216 = new cjs.Graphics().p("AgTMvIAA2dIPcAAIAAWdg");
	var mask_graphics_217 = new cjs.Graphics().p("AgTMbIAA1UIPdAAIAAVUg");
	var mask_graphics_218 = new cjs.Graphics().p("AgSLqIAA0RIPcAAIAAURg");
	var mask_graphics_219 = new cjs.Graphics().p("AgSK9IAAzUIPdAAIAATUg");
	var mask_graphics_220 = new cjs.Graphics().p("AgRKUIAAydIPcAAIAASdg");
	var mask_graphics_221 = new cjs.Graphics().p("AgRJxIAAx2IPdAAIAAR2g");
	var mask_graphics_222 = new cjs.Graphics().p("AgRJRIAAxTIPdAAIAARTg");
	var mask_graphics_223 = new cjs.Graphics().p("AgRI0IAAwyIPdAAIAAQyg");
	var mask_graphics_224 = new cjs.Graphics().p("AgQIaIAAwVIPcAAIAAQVg");
	var mask_graphics_225 = new cjs.Graphics().p("AgQIEIAAv9IPcAAIAAP9g");
	var mask_graphics_226 = new cjs.Graphics().p("AgQH0IAAvnIPcAAIAAPng");
	var mask_graphics_227 = new cjs.Graphics().p("AgQHrIAAvVIPdAAIAAPVg");
	var mask_graphics_228 = new cjs.Graphics().p("AgQHjIAAvFIPdAAIAAPFg");
	var mask_graphics_229 = new cjs.Graphics().p("AgQHeIAAu6IPdAAIAAO6g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:97.2758,y:132.2002}).wait(1).to({graphics:mask_graphics_1,x:97.2758,y:131.388}).wait(1).to({graphics:mask_graphics_2,x:97.2758,y:130.5758}).wait(1).to({graphics:mask_graphics_3,x:97.2758,y:129.7636}).wait(1).to({graphics:mask_graphics_4,x:97.2758,y:128.9515}).wait(1).to({graphics:mask_graphics_5,x:97.2758,y:128.1393}).wait(1).to({graphics:mask_graphics_6,x:97.2758,y:127.3271}).wait(1).to({graphics:mask_graphics_7,x:97.2758,y:126.5149}).wait(1).to({graphics:mask_graphics_8,x:97.2758,y:125.7028}).wait(1).to({graphics:mask_graphics_9,x:97.2758,y:124.8906}).wait(1).to({graphics:mask_graphics_10,x:97.2758,y:124.0784}).wait(1).to({graphics:mask_graphics_11,x:97.2758,y:123.2662}).wait(1).to({graphics:mask_graphics_12,x:97.2758,y:122.4541}).wait(1).to({graphics:mask_graphics_13,x:97.2758,y:121.6419}).wait(1).to({graphics:mask_graphics_14,x:97.2758,y:120.8297}).wait(1).to({graphics:mask_graphics_15,x:97.2758,y:120.0175}).wait(1).to({graphics:mask_graphics_16,x:97.2758,y:119.2054}).wait(1).to({graphics:mask_graphics_17,x:97.2758,y:118.3932}).wait(1).to({graphics:mask_graphics_18,x:97.2758,y:117.581}).wait(1).to({graphics:mask_graphics_19,x:97.2758,y:116.7689}).wait(1).to({graphics:mask_graphics_20,x:97.2758,y:115.9567}).wait(1).to({graphics:mask_graphics_21,x:97.2758,y:115.1445}).wait(1).to({graphics:mask_graphics_22,x:97.2758,y:114.3323}).wait(1).to({graphics:mask_graphics_23,x:97.2758,y:113.5202}).wait(1).to({graphics:mask_graphics_24,x:97.2758,y:112.708}).wait(1).to({graphics:mask_graphics_25,x:97.2758,y:111.8958}).wait(1).to({graphics:mask_graphics_26,x:97.2758,y:111.0836}).wait(1).to({graphics:mask_graphics_27,x:97.2758,y:110.2715}).wait(1).to({graphics:mask_graphics_28,x:97.2758,y:109.4593}).wait(1).to({graphics:mask_graphics_29,x:97.2758,y:108.6471}).wait(1).to({graphics:mask_graphics_30,x:97.2758,y:107.8349}).wait(1).to({graphics:mask_graphics_31,x:97.2758,y:107.0228}).wait(1).to({graphics:mask_graphics_32,x:97.2758,y:106.2106}).wait(1).to({graphics:mask_graphics_33,x:97.2758,y:105.3984}).wait(1).to({graphics:mask_graphics_34,x:97.2758,y:104.5863}).wait(1).to({graphics:mask_graphics_35,x:97.2758,y:103.7741}).wait(1).to({graphics:mask_graphics_36,x:97.2758,y:102.9619}).wait(1).to({graphics:mask_graphics_37,x:97.2758,y:102.1497}).wait(1).to({graphics:mask_graphics_38,x:97.2758,y:101.3376}).wait(1).to({graphics:mask_graphics_39,x:97.2758,y:100.5254}).wait(1).to({graphics:mask_graphics_40,x:97.2758,y:99.7132}).wait(1).to({graphics:mask_graphics_41,x:97.2758,y:98.901}).wait(1).to({graphics:mask_graphics_42,x:97.2758,y:98.0889}).wait(1).to({graphics:mask_graphics_43,x:97.2758,y:97.2767}).wait(1).to({graphics:mask_graphics_44,x:97.2758,y:96.4645}).wait(1).to({graphics:mask_graphics_45,x:97.2758,y:95.6523}).wait(1).to({graphics:mask_graphics_46,x:97.2758,y:94.8402}).wait(1).to({graphics:mask_graphics_47,x:97.2758,y:94.028}).wait(1).to({graphics:mask_graphics_48,x:97.2758,y:93.2158}).wait(1).to({graphics:mask_graphics_49,x:97.2758,y:92.4036}).wait(1).to({graphics:mask_graphics_50,x:97.2758,y:91.5915}).wait(1).to({graphics:mask_graphics_51,x:97.2758,y:90.7793}).wait(1).to({graphics:mask_graphics_52,x:97.2758,y:89.9671}).wait(1).to({graphics:mask_graphics_53,x:97.2758,y:89.155}).wait(1).to({graphics:mask_graphics_54,x:97.2758,y:88.3428}).wait(1).to({graphics:mask_graphics_55,x:97.2758,y:87.5306}).wait(1).to({graphics:mask_graphics_56,x:97.2758,y:86.7184}).wait(1).to({graphics:mask_graphics_57,x:97.2758,y:85.9063}).wait(1).to({graphics:mask_graphics_58,x:97.2758,y:85.0941}).wait(1).to({graphics:mask_graphics_59,x:97.2758,y:84.2819}).wait(1).to({graphics:mask_graphics_60,x:97.2758,y:83.4697}).wait(1).to({graphics:mask_graphics_61,x:97.2758,y:82.6576}).wait(1).to({graphics:mask_graphics_62,x:97.2758,y:81.8454}).wait(1).to({graphics:mask_graphics_63,x:97.2758,y:81.0332}).wait(1).to({graphics:mask_graphics_64,x:97.2758,y:80.221}).wait(1).to({graphics:mask_graphics_65,x:97.2758,y:79.4089}).wait(1).to({graphics:mask_graphics_66,x:97.2758,y:78.5967}).wait(1).to({graphics:mask_graphics_67,x:97.2758,y:77.7845}).wait(1).to({graphics:mask_graphics_68,x:97.2758,y:76.9724}).wait(1).to({graphics:mask_graphics_69,x:97.2758,y:76.1602}).wait(1).to({graphics:mask_graphics_70,x:97.2758,y:75.348}).wait(1).to({graphics:mask_graphics_71,x:97.2758,y:74.5358}).wait(1).to({graphics:mask_graphics_72,x:97.2758,y:73.7237}).wait(1).to({graphics:mask_graphics_73,x:97.2758,y:72.9115}).wait(1).to({graphics:mask_graphics_74,x:97.2758,y:72.0993}).wait(1).to({graphics:mask_graphics_75,x:97.2758,y:71.2871}).wait(1).to({graphics:mask_graphics_76,x:97.2758,y:70.475}).wait(1).to({graphics:mask_graphics_77,x:97.2758,y:69.673}).wait(1).to({graphics:mask_graphics_78,x:97.2758,y:68.8711}).wait(1).to({graphics:mask_graphics_79,x:97.2758,y:68.0692}).wait(1).to({graphics:mask_graphics_80,x:97.2758,y:67.2673}).wait(1).to({graphics:mask_graphics_81,x:97.2758,y:66.4653}).wait(1).to({graphics:mask_graphics_82,x:97.2758,y:65.6634}).wait(1).to({graphics:mask_graphics_83,x:97.2758,y:64.8615}).wait(1).to({graphics:mask_graphics_84,x:97.2758,y:64.0596}).wait(1).to({graphics:mask_graphics_85,x:97.2758,y:63.2576}).wait(1).to({graphics:mask_graphics_86,x:97.2758,y:62.4557}).wait(1).to({graphics:mask_graphics_87,x:97.2758,y:61.6538}).wait(1).to({graphics:mask_graphics_88,x:97.2758,y:60.8518}).wait(1).to({graphics:mask_graphics_89,x:97.2758,y:60.0499}).wait(1).to({graphics:mask_graphics_90,x:97.2758,y:59.248}).wait(1).to({graphics:mask_graphics_91,x:97.2758,y:58.4461}).wait(1).to({graphics:mask_graphics_92,x:97.2758,y:57.6441}).wait(1).to({graphics:mask_graphics_93,x:97.2758,y:56.8422}).wait(1).to({graphics:mask_graphics_94,x:97.2758,y:56.0403}).wait(1).to({graphics:mask_graphics_95,x:97.2758,y:55.2384}).wait(1).to({graphics:mask_graphics_96,x:97.2758,y:54.4364}).wait(1).to({graphics:mask_graphics_97,x:97.2758,y:53.6345}).wait(1).to({graphics:mask_graphics_98,x:97.2758,y:52.8326}).wait(1).to({graphics:mask_graphics_99,x:97.2758,y:52.0307}).wait(1).to({graphics:mask_graphics_100,x:97.2758,y:51.2287}).wait(1).to({graphics:mask_graphics_101,x:97.2758,y:50.4268}).wait(1).to({graphics:mask_graphics_102,x:97.2758,y:49.6249}).wait(62).to({graphics:mask_graphics_164,x:97.2758,y:49.6249}).wait(3).to({graphics:mask_graphics_167,x:97.2758,y:58.6274}).wait(1).to({graphics:mask_graphics_168,x:97.2769,y:58.6476}).wait(1).to({graphics:mask_graphics_169,x:97.2781,y:58.6678}).wait(1).to({graphics:mask_graphics_170,x:97.2793,y:58.6879}).wait(1).to({graphics:mask_graphics_171,x:97.2805,y:58.7081}).wait(1).to({graphics:mask_graphics_172,x:97.2817,y:58.7282}).wait(1).to({graphics:mask_graphics_173,x:97.2829,y:58.7484}).wait(1).to({graphics:mask_graphics_174,x:97.2841,y:58.7686}).wait(1).to({graphics:mask_graphics_175,x:97.2853,y:58.7887}).wait(1).to({graphics:mask_graphics_176,x:97.2865,y:58.8089}).wait(1).to({graphics:mask_graphics_177,x:97.2877,y:58.8291}).wait(1).to({graphics:mask_graphics_178,x:97.2889,y:58.8492}).wait(1).to({graphics:mask_graphics_179,x:97.29,y:58.8694}).wait(1).to({graphics:mask_graphics_180,x:97.2912,y:58.8896}).wait(1).to({graphics:mask_graphics_181,x:97.2924,y:58.9097}).wait(1).to({graphics:mask_graphics_182,x:97.2936,y:58.9299}).wait(1).to({graphics:mask_graphics_183,x:97.2948,y:58.9501}).wait(1).to({graphics:mask_graphics_184,x:97.296,y:58.9702}).wait(1).to({graphics:mask_graphics_185,x:97.2972,y:58.9904}).wait(1).to({graphics:mask_graphics_186,x:97.2984,y:59.0106}).wait(1).to({graphics:mask_graphics_187,x:97.2996,y:59.0307}).wait(1).to({graphics:mask_graphics_188,x:97.2758,y:59.0916}).wait(1).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_graphics_214,x:96.8258,y:85.7662}).wait(1).to({graphics:mask_graphics_215,x:96.8884,y:83.5355}).wait(1).to({graphics:mask_graphics_216,x:96.9467,y:81.4569}).wait(1).to({graphics:mask_graphics_217,x:97.0008,y:79.5304}).wait(1).to({graphics:mask_graphics_218,x:97.0463,y:74.604}).wait(1).to({graphics:mask_graphics_219,x:97.088,y:70.0998}).wait(1).to({graphics:mask_graphics_220,x:97.1258,y:65.9748}).wait(1).to({graphics:mask_graphics_221,x:97.1516,y:62.4697}).wait(1).to({graphics:mask_graphics_222,x:97.1751,y:59.2752}).wait(1).to({graphics:mask_graphics_223,x:97.1963,y:56.3913}).wait(1).to({graphics:mask_graphics_224,x:97.2153,y:53.818}).wait(1).to({graphics:mask_graphics_225,x:97.232,y:51.5553}).wait(1).to({graphics:mask_graphics_226,x:97.2463,y:49.2306}).wait(1).to({graphics:mask_graphics_227,x:97.2584,y:46.8623}).wait(1).to({graphics:mask_graphics_228,x:97.2682,y:44.9421}).wait(1).to({graphics:mask_graphics_229,x:97.2758,y:43.4002}).wait(57));

	// arrow
	this.instance_3 = new lib.arrow_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(145.15,219.1,1,1,0,0,0,44,41.3);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:56.7},102).wait(74).to({rotation:180,x:145.05,y:72.7},0).to({y:50.7},29).to({x:145.8,y:167.05},30,cjs.Ease.get(-1)).wait(51));

	// cloud
	this.instance_4 = new lib.cloud();
	this.instance_4.parent = this;
	this.instance_4.setTransform(142.65,-176.8,1,1,0,0,0,106,66);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(68).to({y:76.05},42,cjs.Ease.cubicOut).wait(54).to({y:-177.25},30,cjs.Ease.cubicIn).wait(92));

	// cloud outline
	this.instance_5 = new lib.radialWipeWhole("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(48.45,-235.2,1,1,0,0,0,11.8,7.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(68).to({_off:false},0).wait(1).to({regX:106.2,regY:66,x:142.85,y:-159.35},0).wait(1).to({y:-142.1},0).wait(1).to({y:-125.15},0).wait(1).to({y:-108.75},0).wait(1).to({y:-92.95},0).wait(1).to({y:-77.95},0).wait(1).to({y:-63.8},0).wait(1).to({y:-50.55},0).wait(1).to({y:-38.3},0).wait(1).to({y:-26.95},0).wait(1).to({y:-16.5},0).wait(1).to({y:-6.9},0).wait(1).to({y:1.85},0).wait(1).to({y:9.85},0).wait(1).to({y:17.2},0).wait(1).to({y:23.85},0).wait(1).to({y:29.95},0).wait(1).to({y:35.5},0).wait(1).to({y:40.6},0).wait(1).to({y:45.2},0).wait(1).to({y:49.4},0).wait(1).to({y:53.25},0).wait(1).to({y:56.7},0).wait(1).to({regX:11.8,regY:7.6,x:48.45,y:1.45,mode:"synched",loop:false},0).wait(1).to({regX:106.2,regY:66,x:142.75,y:61.95,startPosition:1},0).wait(1).to({x:142.65,y:63.8,startPosition:2},0).wait(1).to({x:142.6,y:65.5,startPosition:3},0).wait(1).to({x:142.5,y:67,startPosition:4},0).wait(1).to({x:142.45,y:68.35,startPosition:5},0).wait(1).to({x:142.4,y:69.55,startPosition:6},0).wait(1).to({x:142.35,y:70.65,startPosition:7},0).wait(1).to({x:142.3,y:71.6,startPosition:8},0).wait(1).to({x:142.25,y:72.45,startPosition:9},0).wait(1).to({y:73.15,startPosition:10},0).wait(1).to({x:142.2,y:73.75,startPosition:11},0).wait(1).to({y:74.3,startPosition:12},0).wait(1).to({x:142.15,y:74.7,startPosition:13},0).wait(1).to({y:75.05,startPosition:14},0).wait(1).to({y:75.3,startPosition:15},0).wait(1).to({y:75.5,startPosition:16},0).wait(1).to({y:75.6,startPosition:17},0).wait(1).to({regX:11.8,regY:7.6,x:47.75,y:17.25,startPosition:18},0).wait(176));

	// cloud back 2 copy
	this.instance_6 = new lib.cloud_bk_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(396.5,-144,0.8,0.8,0,0,0,44.6,25);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(59).to({_off:false},0).to({regY:25.2,y:444.2},31,cjs.Ease.cubicOut).wait(84).to({regY:25,y:-144},29,cjs.Ease.cubicIn).wait(83));

	// cloud back 2
	this.instance_7 = new lib.cloud_bk_2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(261.45,-177.95,1,1,0,0,0,44.6,25.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(51).to({_off:false},0).to({y:479.2},25,cjs.Ease.quadInOut).wait(114).to({y:-177.95},23,cjs.Ease.quadInOut).wait(73));

	// cloud back 1
	this.instance_8 = new lib.cloud_bk_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(261.45,-152.95,1,1,0,0,0,44.6,25.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(41).to({_off:false},0).to({y:439.2},26,cjs.Ease.quadIn).wait(131).to({y:-152.95},22,cjs.Ease.quadOut).wait(66));

	// phone
	this.instance_9 = new lib.phone("single",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(143.9,461.55,0.8742,0.8742,0,0,0,78.5,76);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(204).to({_off:false},0).wait(1).to({regY:157.6,y:503.1},0).wait(1).to({y:473.85},0).wait(1).to({y:445.45},0).wait(1).to({y:418.35},0).wait(1).to({y:392.85},0).wait(1).to({y:369.25},0).wait(1).to({y:347.65},0).wait(1).to({y:328},0).wait(1).to({y:310.3},0).wait(1).to({y:294.4},0).wait(1).to({y:280.15},0).wait(1).to({y:267.45},0).wait(1).to({y:256.1},0).wait(1).to({y:246},0).wait(1).to({y:236.95},0).wait(1).to({y:228.9},0).wait(1).to({y:221.75},0).wait(1).to({y:215.4},0).wait(1).to({y:209.75},0).wait(1).to({y:204.75},0).wait(1).to({y:200.35},0).wait(1).to({y:196.45},0).wait(1).to({y:193.05},0).wait(1).to({y:190.1},0).wait(1).to({y:187.55},0).wait(1).to({y:185.35},0).wait(1).to({regY:76,y:112.3,mode:"synched",startPosition:6,loop:false},0).wait(1).to({regY:157.6,y:183.25,startPosition:7},0).wait(1).to({y:183,startPosition:8},0).wait(1).to({y:182.85,startPosition:9},0).wait(1).to({y:182.7,startPosition:10},0).wait(1).to({y:182.65,startPosition:11},0).wait(1).to({regY:76,y:111.35},0).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.2,-243.2,341.2,917.8);


(lib.logos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.MSFT_Logo();
	this.instance.parent = this;
	this.instance.setTransform(-16.4,10.95,2.2463,2.2463);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logos, new cjs.Rectangle(-130.5,-10.1,226.7,48.4), null);


(lib.CTA_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.arrow = new lib.arrowMain();
	this.arrow.name = "arrow";
	this.arrow.parent = this;
	this.arrow.setTransform(26.65,3.4,0.92,0.92,0,0,0,10.9,10.6);

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(1));

	// CTA_text
	this.cta_glare = new lib.cta_glare();
	this.cta_glare.name = "cta_glare";
	this.cta_glare.parent = this;
	this.cta_glare.setTransform(0.05,0.1,1,1,0,0,0,57.4,15.1);

	this.timeline.addTween(cjs.Tween.get(this.cta_glare).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DA3A00").s().p("ArZCdIAAk5IWzAAIAAE5g");
	this.shape.setTransform(14.275,1.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CTA_btn, new cjs.Rectangle(-58.7,-13.7,146,31.4), null);


(lib.mainMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MSFT Logo intro
	this.logo = new lib.logo_1();
	this.logo.name = "logo";
	this.logo.parent = this;
	this.logo.setTransform(56.9,194.05,0.312,0.312);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// replay
	this.replay_btn = new lib.replay_btn();
	this.replay_btn.name = "replay_btn";
	this.replay_btn.parent = this;
	this.replay_btn.setTransform(284.1,4.3,0.3475,0.3475,0,0,180,-0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.replay_btn).wait(1));

	// CTA
	this.txtCta = new lib.cta();
	this.txtCta.name = "txtCta";
	this.txtCta.parent = this;
	this.txtCta.setTransform(224.05,555.6,0.4964,0.4964);

	this.timeline.addTween(cjs.Tween.get(this.txtCta).wait(1));

	// circle Bonus
	this.bg_circle = new lib.circle_bg();
	this.bg_circle.name = "bg_circle";
	this.bg_circle.parent = this;
	this.bg_circle.setTransform(228.5,511.5);

	this.timeline.addTween(cjs.Tween.get(this.bg_circle).wait(1));

	// CTA_BG
	this.cta = new lib.CTA_btn();
	this.cta.name = "cta";
	this.cta.parent = this;
	this.cta.setTransform(238.9,552.65,0.9433,0.9433,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// Layer_2
	this.instance = new lib.logos();
	this.instance.parent = this;
	this.instance.setTransform(77.5,35.75,0.3473,0.3473,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// anim
	this.anim = new lib.anim();
	this.anim.name = "anim";
	this.anim.parent = this;
	this.anim.setTransform(150.3,224.2,1.2,1.2,0,0,0,145.2,80.3);

	this.timeline.addTween(cjs.Tween.get(this.anim).wait(1));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E6").s().p("EgXvAvYMAAAhevMAvfAAAMAAABevg");
	this.shape.setTransform(150.025,301.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mainMC, new cjs.Rectangle(-1.9,-163.4,323,767.9), null);


// stage content:
(lib.O365_ONDRV_USA_300x600_BAN_Retargeting_NA_NA_NA_ANI_BN_NA_1 = function(mode,startPosition,loop) {
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
						} else if (id == "fram" && data[keys[i]].length > 1) {
							exportRoot.fillFrame(data[keys[i]], keys[i])
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
		
		this.fillFrame = function (txtDetails, aKey) {
			console.log(aKey)
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
		
				this.mainMC.anim[aKey].addChild(mc);
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
		
		
		
		var mc = exportRoot.mainMC
		
		
		this.runBanner = function() {
			
				this.tl = new TimelineLite();
		
			exportRoot.finalHeadline = new TimelineLite();
			for (var i = 0; i < exportRoot.headline1.length; i++) {
				//exportRoot.finalHeadline.from(exportRoot.headline1[i], 0.6, {x: "+=100",	alpha: 0, ease: Power3.easeOut}, "-=0.4");
				if (i==0) exportRoot.finalHeadline.from(exportRoot.headline1[i], 0.6, { x: "+=200", alpha: 0, ease: Power1.easeOut});
				if (i!=0) exportRoot.finalHeadline.from(exportRoot.headline1[i], 0.6, { x: "+=200", alpha: 0, ease: Power1.easeOut}, "-=0.35");
		
				}
			exportRoot.finalHeadline.stop()
		
		
				
			
			this.tl1 = new TimelineLite();
			
			exportRoot.tl1.from(mc.replay_btn, 0.7, {alpha: 1,	x: "+=300",ease: Power4.easeOut}, "-=0.5")
			exportRoot.tl1.from(mc.bg_circle, 0.7, {alpha: 1,	x: "+=300",	ease: Power4.easeOut}, "-=0.3")
			
			exportRoot.tl1.from(mc.txtCta, 0.7, {alpha: 1,	x: "+=300", ease: Power4.easeOut}, "-=0.5");
			exportRoot.tl1.from(mc.cta, 0.7, {alpha: 1,	x: "+=300",	ease: Power4.easeOut}, "-=0.7");
			
			
			this.tl1.stop()
		
			mc.logo.gotoAndPlay(1)
		}
		
			//mc.bg_circle.x += 300; mc.bg_circle.alpha = 0
			//mc.txtCta.x += 300; mc.txtCta.alpha = 0
			//mc.cta.x += 300; mc.cta.alpha = 0
			//mc.replay_btn.x+=300
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
p.nominalBounds = new cjs.Rectangle(148.1,136.6,173.00000000000003,467.9);
// library properties:
lib.properties = {
	id: '90A26FE74B042E4A89CA750D1DA2DF1F',
	width: 300,
	height: 600,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/O365_ONDRV_USA_300x600_BAN_Retargeting_NA_NA_NA_ANI_BN_NA_1_atlas_.png?1542021951183", id:"O365_ONDRV_USA_300x600_BAN_Retargeting_NA_NA_NA_ANI_BN_NA_1_atlas_"}
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