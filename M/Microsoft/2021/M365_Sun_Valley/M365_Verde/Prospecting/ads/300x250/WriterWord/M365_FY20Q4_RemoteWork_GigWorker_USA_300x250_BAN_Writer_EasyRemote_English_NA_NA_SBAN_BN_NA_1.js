(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"M365_FY20Q4_RemoteWork_GigWorker_USA_300x250_BAN_Writer_EasyRemote_English_NA_NA_SBAN_BN_NA_1_atlas_", frames: [[0,0,330,275],[0,277,249,117],[332,0,350,250],[684,0,271,250],[332,252,312,193]]}
];


// symbols:



(lib.BG = function() {
	this.initialize(ss["M365_FY20Q4_RemoteWork_GigWorker_USA_300x250_BAN_Writer_EasyRemote_English_NA_NA_SBAN_BN_NA_1_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._img = function() {
	this.initialize(ss["M365_FY20Q4_RemoteWork_GigWorker_USA_300x250_BAN_Writer_EasyRemote_English_NA_NA_SBAN_BN_NA_1_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.scene_1_1_img = function() {
	this.initialize(ss["M365_FY20Q4_RemoteWork_GigWorker_USA_300x250_BAN_Writer_EasyRemote_English_NA_NA_SBAN_BN_NA_1_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.scene_1_2_img = function() {
	this.initialize(ss["M365_FY20Q4_RemoteWork_GigWorker_USA_300x250_BAN_Writer_EasyRemote_English_NA_NA_SBAN_BN_NA_1_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.scene_2_2_img = function() {
	this.initialize(ss["M365_FY20Q4_RemoteWork_GigWorker_USA_300x250_BAN_Writer_EasyRemote_English_NA_NA_SBAN_BN_NA_1_atlas_"]);
	this.gotoAndStop(4);
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


(lib.whiteBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAvKMAAAheTMAu3AAAMAAABeTg");
	this.shape.setTransform(150.0023,724.4012,1,2.4001);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whiteBG, new cjs.Rectangle(0,0,300,1448.8), null);


(lib.white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhL2AauMAAAg1bMCXtAAAMAAAA1bg");
	this.shape.setTransform(485.475,171);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.white, new cjs.Rectangle(0,0,971,342), null);


(lib.txt_fix = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.txt.textBaseline = "alphabetic"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.txt = new cjs.Text("Research shows indoor plants help to decrease common\ntoxins and pollutants, such as benzene and formaldehyde,\nin the air. One study found that the snake plant absorbs\ntoxins, releases moisture into the air, and lessens airborne\nallergens. Even if you’re using air filters and purifiers,\nsurrounding yourself with indoor plants can improve the\nair quality in your home.", "10px 'Segoe Pro'", "#454545");
	this.txt.name = "txt";
	this.txt.lineHeight = 13;
	this.txt.lineWidth = 399;
	this.txt.parent = this;
	this.txt.setTransform(0.15,0.2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_fix, new cjs.Rectangle(-1.8,-1.8,402.90000000000003,275.90000000000003), null);


(lib.txt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.txt.textBaseline = "alphabetic"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.txt = new cjs.Text("Research shows indoor plants help to greatly decrease common toxins and pollutants, such as benzene and formaldehyde, in the air. One study found that the snake\nplant absorbs toxins, releases moisture into the air, and\nlessens airborne allergens. Even if you’re using air filters\nand purifiers, surrounding yourself with indoor plants\ncan improve the air quality in your home.", "10px 'Segoe Pro'", "#454545");
	this.txt.name = "txt";
	this.txt.lineHeight = 13;
	this.txt.lineWidth = 271;
	this.txt.parent = this;
	this.txt.setTransform(0.15,0.2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_1, new cjs.Rectangle(-1.8,-1.8,274.90000000000003,251), null);


(lib.TopRight_symbols = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglAgIAAg/IBLAAIAAA/gAADAaIAdAAIAAgmIg/AAIAAAmIAdAAIAAgaIgIAIIgFgEIAPgPIAQAPIgEAEIgJgIgAgfgSIA/AAIAAgHIg/AAg");
	this.shape.setTransform(3.2424,2.7636,0.8469,0.8469);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAfIAAgwIAMAAIAAgOIAxAAIAAAyIgMAAIAAAMgAgZAaIAnAAIAAgmIgnAAgAgMgRIAfAAIAAAeIAGAAIAAgmIglAAg");
	this.shape_1.setTransform(25.4729,2.8271,0.8469,0.8469);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAEIgcAdIgEgEIAdgdIgdgcIAEgEIAcAdIAdgdIAEAEIgdAcIAdAdIgEAEg");
	this.shape_2.setTransform(37.6468,2.8059,0.8469,0.8469);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeACIAAgDIA9AAIAAADg");
	this.shape_3.setTransform(14.8023,2.7424,0.8469,0.8469);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TopRight_symbols, new cjs.Rectangle(0,0,40.5,5.6), null);


(lib.topleft_icons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKANIAMgNIgMgMIAFgEIAQAQIgQARg");
	this.shape.setTransform(42.6265,4.8002);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag3ApQgRAAgMgMQgMgMABgRQgBgPAMgNQAMgMARAAIBvAAQARAAAMAMQALANAAAPQAAARgLAMQgMAMgRAAgAAqgMQgFAGAAAGQAAAIAFAGQAHAFAHAAQAIAAAFgFQAGgGAAgIQAAgGgGgGQgFgGgIAAQgHAAgHAGg");
	this.shape_1.setTransform(9.6507,4.9252);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiAzIgRgRIAAhUIBnAAIAABlgAAaAOIAAAfIATAAIAAhZIgNAAIAAAnIg/AAIAAgnIgOAAIAABMIAOANIAHAAIAAgfgAgSAtIAmAAIAAgZIgmAAgAgZgLIAzAAIAAghIgzAAg");
	this.shape_2.setTransform(29.7759,4.522,0.8781,0.8781);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKANIAMgNIgMgMIAFgEIAQAQIgQARg");
	this.shape_3.setTransform(40.1764,4.8002);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.topleft_icons, new cjs.Rectangle(0,0,43.7,9), null);


(lib.titletext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.txt.textBaseline = "alphabetic"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.txt = new cjs.Text("8 Healthy Benefits of Indoor Plants", "16px 'Segoe Pro'", "#2B579A");
	this.txt.name = "txt";
	this.txt.lineHeight = 17;
	this.txt.lineWidth = 272;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.titletext, new cjs.Rectangle(0,0,275.6,29), null);


(lib.Share_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.txt.textBaseline = "alphabetic"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.txt = new cjs.Text("Share", "7px 'Segoe Pro'", "#345699");
	this.txt.name = "txt";
	this.txt.lineHeight = 10;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Share_txt, new cjs.Rectangle(0,0,20.1,12.8), null);


(lib.scroll_tab = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DADBD8").ss(0.5,1,1).p("Ageh2IA9AAIAADtIg9AAg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeB3IAAjtIA9AAIAADtg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scroll_tab, new cjs.Rectangle(-4.1,-12.8,8.3,25.700000000000003), null);


(lib.ScreenBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(0.5,1,1).p("A1w3bMArhAAAMAAAAu3MgrhAAAg");
	this.shape.setTransform(146.8,86);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A1wXcMAAAgu3MArhAAAMAAAAu3g");
	this.shape_1.setTransform(146.8,86);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Image
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEECEA").s().p("A3baaMAAAg0zMAu3AAAMAAAA0zg");
	this.shape_2.setTransform(150,150.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ScreenBG, new cjs.Rectangle(0,-65,300,384.1), null);


(lib.scene1_fg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.scene_1_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scene1_fg, new cjs.Rectangle(0,0,271,250), null);


(lib.Review_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.txt.textBaseline = "alphabetic"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.txt = new cjs.Text("Review", "6px 'Segoe Pro'", "#494846");
	this.txt.name = "txt";
	this.txt.lineHeight = 10;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Review_txt, new cjs.Rectangle(0,0,22.7,14.6), null);


(lib.replaySub = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2F2F").s().p("AgiBMQgbgQgLgfQgKgdALgeQALgdAbgRQAbgQAfAEQAfAFAWAXIgWAUQgOgPgVgDQgVgDgSALQgSALgHAUQgHATAGAUQAHAUASALQASALAUgCQAWgDAOgPIAWAVQgWAXggADIgMABQgYAAgVgOg");
	this.shape.setTransform(2.0202,-0.7048,0.8766,0.8766,135.0007);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F2F2F").s().p("AgmgTIBNAAIgnAmg");
	this.shape_1.setTransform(-5.3,2.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.2,-7.8,18.4,15.8);


(lib.reddots = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD0201").s().p("AE+AIQgDgDAAgFQAAgDADgDQADgDAFAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgFAAgDgDgAEfAIQgDgDAAgFQAAgDADgDQADgDAEAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDgAEAAIQgDgDAAgFQAAgDADgDQADgDAFAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgFAAgDgDgADhAIQgDgDAAgFQAAgDADgDQADgDAEAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDgADCAIQgDgDAAgFQAAgDADgDQADgDAFAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgFAAgDgDgACjAIQgDgDAAgFQAAgDADgDQADgDAEAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDgACEAIQgDgDAAgFQAAgDADgDQADgDAEAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDgABlAIQgDgDAAgFQAAgDADgDQADgDAFAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgFAAgDgDgABGAIQgDgDAAgFQAAgDADgDQADgDAEAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDgAAnAIQgDgDAAgFQAAgDADgDQADgDAFAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgFAAgDgDgAAIAIQgDgDAAgFQAAgDADgDQADgDAEAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDgAgWAIQgDgDAAgFQAAgDADgDQADgDAFAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgFAAgDgDgAg1AIQgDgDAAgFQAAgDADgDQADgDAEAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDgAhUAIQgDgDAAgFQAAgDADgDQADgDAFAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgFAAgDgDgAhzAIQgDgDAAgFQAAgDADgDQADgDAEAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDgAiSAIQgDgDAAgFQAAgDADgDQADgDAEAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDgAixAIQgDgDAAgFQAAgDADgDQADgDAFAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgFAAgDgDgAjQAIQgDgDAAgFQAAgDADgDQADgDAEAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDgAjvAIQgDgDAAgFQAAgDADgDQADgDAFAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgFAAgDgDgAkOAIQgDgDAAgFQAAgDADgDQADgDAEAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDgAktAIQgDgDAAgFQAAgDADgDQADgDAFAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgFAAgDgDgAlMAIQgDgDAAgFQAAgDADgDQADgDAEAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDgAlrAIQgDgDAAgFQAAgDADgDQADgDAFAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgFAAgDgDgAFdAHQgDgDAAgEQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape.setTransform(43.65,1.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.reddots, new cjs.Rectangle(7,0.5,73.4,2.1), null);


(lib.Ready_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.txt.textBaseline = "alphabetic"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.txt = new cjs.Text("Page 4 of 5  818 words", "6px 'Segoe Pro'", "#626262");
	this.txt.name = "txt";
	this.txt.lineHeight = 10;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ready_txt, new cjs.Rectangle(0,0,62.9,14.1), null);


(lib.pointer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("AgcCoICCAAQADAAABgCIAAgoQAAgGACgGIAVgrIAAADQABgEAAgFIAAh9QAAgJgGgDQgDgHgJAAQgHAAgGAHQgGADAAAJIAAAxQAAABgDACQAAADgCAAQgCAAgCgDQgCgCAAgBIAAg/QAAgJgHgEQgDgGgJAAQgIAAgHAGQgGAEAAAJIAAAzQgBABgCAAQgDAAgBgBIAAhDQAAgGgGgHQgGgEgJAAQgIAAgEAEQgCAAAAABQgGAGAAAGIAABAQAAADAAABQgBAAgDAAQgCAAgBAAQAAgBAAgDIAAh6QAAgJgGgEQgHgGgIAAQgJAAgDAGQgGAEAAAJIAACqQAAADgCAAQAAABgCAAQgDADgDgDQgDgEgCgGIgEgOQAAgCgCAAIgPgRIgBgCQgRgNgOAKIAAADQgGAGgCAFQgDAIAFAIIBWBtIADACQADAHAAAHIAAAfQAAACACAAQACACACAAg");
	this.shape.setTransform(14.1804,16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcCoQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBgBQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgeQAAgIgDgGIgDgCIhWhtQgFgIADgIQACgGAGgFIAAgEQAOgJARANIABACIAPARQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAAAIAEAPQACAGADAEQADACADgCIACgBQAAAAABAAQAAAAAAgBQAAAAABgBQAAAAAAgBIAAirQAAgIAGgEQADgGAJAAQAIAAAHAGQAGAEAAAIIAAB7IAAADIADAAIAEAAIAAgDIAAhAQAAgHAGgFQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAQAEgEAIAAQAJAAAGAEQAGAGAAAHIAABCIAEABIADgBIAAgyQAAgKAGgDQAHgGAIAAQAJAAADAGQAHADAAAKIAAA/QAAAAAAAAQAAABAAAAQABABAAAAQABAAAAABQABABAAAAQABABAAAAQABABAAAAQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAQABAAAAgBQAAAAABgBQAAAAAAAAIAAgxQAAgJAGgDQAGgHAHAAQAJAAADAHQAGADAAAJIAAB9IgBAJIAAgDIgVArQgCAGAAAGIAAAnQAAABgBABQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_1.setTransform(14.1804,16.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1.5,1,1).p("AgcCVICCAAQADAAABgCIAAgoQAAgGACgGIAVgrIAAADQABgEAAgFIAAh0QAAgIgGgEIAAgCQgDgEgJAAQgHAAgGAEIAAACQgGAEAAAIIAAAnQAAACgDACQAAADgCAAQgCAAgCgDQgCgCAAgCIAAg1QAAgIgHgFIAAgBQgDgGgJAAQgIAAgHAGIAAABQgGAFAAAIIAAApQgBABgCAAQgDAAgBgBIAAg3QAAgIgGgGQgGgEgJAAQgIAAgEAEIgCAAQgGAGAAAIIAAA1QAAACAAABQgBAAgDAAQgCAAgBAAQAAgBAAgCIAAhTQAAgIgGgGQgHgGgIAAQgGAAgGAGQgGAGAAAIIAACDQAAADgCAAQAAAAgCAAQgDADgDgDQgDgDgCgFIgEgPQAAgBgCAAIgPgTIgBgBQgRgNgOAJIAAAEQgGAFgCAGQgDAJAFAIIBWBsIADACQADAGAAAIIAAAfQAAACACAAQACACACAAg");
	this.shape_2.setTransform(14.1804,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#BCBCBC","#FCFCFC","#FFFFFF"],[0,0.259,1],-7.3,-14.5,1.8,9.6).s().p("AgcCVQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBgBQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgeQAAgIgDgGIgDgCIhWhsQgFgIADgJQACgGAGgFIAAgEQAOgJARANIABACIAPASQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAAAIAEAPQACAFADAEQADACADgCIACgBQAAAAABAAQAAAAAAgBQAAAAABgBQAAAAAAgBIAAiDQAAgHAGgHQAGgGAGAAQAIAAAHAGQAGAHAAAHIAABTIAAADIADAAIAEAAIAAgDIAAg1QAAgIAGgGIACAAQAEgDAIgBQAJABAGADQAGAGAAAIIAAA3IAEABIADgBIAAgpQAAgHAGgGIAAgBQAHgGAIAAQAJAAADAGIAAABQAHAGAAAHIAAA2QAAAAAAAAQAAABAAAAQABABAAAAQABAAAAABQABABAAAAQABABAAAAQABABAAAAQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAQABAAAAgBQAAAAABgBQAAAAAAAAIAAgoQAAgIAGgEIAAgCQAGgEAHAAQAJAAADAEIAAACQAGAEAAAIIAAB0IgBAJIAAgDIgVArQgCAGAAAGIAAAnQAAABgBABQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_3.setTransform(14.1804,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,-1.2,28,35.6);


(lib.Percentage_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.txt.textBaseline = "alphabetic"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.txt = new cjs.Text("150%", "6px 'Segoe Pro'", "#626262");
	this.txt.name = "txt";
	this.txt.lineHeight = 9;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Percentage_txt, new cjs.Rectangle(0,0,17.8,13.5), null);


(lib.PageLayout_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.txt.textBaseline = "alphabetic"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.txt = new cjs.Text("Draw", "6px 'Segoe Pro'", "#494846");
	this.txt.name = "txt";
	this.txt.lineHeight = 10;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PageLayout_txt, new cjs.Rectangle(0,0,18.1,14.6), null);


(lib.Overlaycopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("EgZhAuoMAAAhdPMAzDAAAMAAABdPgAF512IGqAAIAAjDImqAAg");
	this.shape.setTransform(163.375,298.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Overlaycopy, new cjs.Rectangle(0,0,326.8,596.9), null);


(lib.Overlay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("EgZAAuaMAAJhczMAx5AAAMgAKBczgAGW1oIMpAAIAAjCIspAAg");
	this.shape.setTransform(159.15,296.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Overlay, new cjs.Rectangle(-1,0,320.3,594), null);


(lib.ON_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.txt.textBaseline = "alphabetic"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.txt = new cjs.Text("On", "6px 'Segoe Pro'", "#345699");
	this.txt.name = "txt";
	this.txt.lineHeight = 9;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ON_txt, new cjs.Rectangle(0,0,11.5,14.6), null);


(lib.officeBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.scene_1_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.officeBG, new cjs.Rectangle(0,0,350,250), null);


(lib.Name_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.txt.textBaseline = "alphabetic"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.txt = new cjs.Text("Daniela Duarte", "6px 'Segoe Pro'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.lineHeight = 10;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Name_txt, new cjs.Rectangle(0,0,43.2,13.5), null);


(lib.ms = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#737373").s().p("ARIDTQgXgYAAgyIAAieIhtAAIAAD5IhJAAIAAj5Ig0AAIAAg8IA0AAIAAgrQAAgwAfggQAggfAyAAIAXABIATAEIAAA/IgNgFQgJgDgMAAQgWAAgNAPQgNAPAAAbIAAAlIBtAAIAAhFIBJgXIAABcIBKAAIAAA8IhKAAIAACQQAAAcALAMQAKAMAWAAQAHAAAJgDQALgEAEgDIAAA8QgHAEgQADQgTAEgNAAQguAAgXgZgAIrDBQgqgqAAhJQAAhNArgsQAsgtBNAAQBJAAAoArQApArAABJQAABMgrAsQgsAthKAAQhHAAgsgrgAJjAAQgWAaAAAxQAAAwAWAaQAWAaApAAQAoAAAUgaQAVgZAAgzQAAgygVgYQgWgZgnAAQgoAAgWAagAE7DnQgYgFgQgHIAAhIQASANAZAJQAWAIATAAQAaAAALgHQAMgGAAgRQAAgPgNgKQgMgLgigNQgngQgSgWQgRgVAAghQAAgpAhgbQAigbA1AAQAPAAAVAEQARADARAGIAABGQgOgKgUgHQgUgHgSAAQgVAAgMAIQgLAJAAANQAAAPAKAJQAJAJAjAOQArARASAWQASAXAAAeQAAArgiAbQgiAbg5AAQgQAAgagFgAgiDBQgrgqAAhJQAAhNAsgsQArgtBMAAQBJAAApArQAoAsAABIQAABLgrAtQgrAthLAAQhIAAgpgrgAAUAAQgVAaAAAxQAAAwAVAaQAWAaApAAQAoAAAVgaQAVgZAAgzQAAgxgWgZQgVgZgnAAQgpAAgWAagAoDDAQgrgrAAhDQAAhKAsgwQAsgxBQAAQATAAAWAGQAVAFAMAHIAABGQgRgNgRgGQgSgHgSAAQgrAAgbAbQgaAdAAAvQAAAvAZAaQAaAaArAAQARAAATgIQAUgHAQgMIAABDQgTALgUAEQgYAGgZAAQhEAAgrgsgAkFDkIAAk1IBJAAIAAAxIABAAQAKgZAUgPQAUgOAdAAIAQABIALADIAABKQgEgDgMgFQgMgEgPAAQgbAAgSAWQgTAWAAAwIAACcgAqqDkIAAk1IBJAAIAAE1gAs7DkIAAlSIgBAAIiGFSIgyAAIiJlSIgBAAIAAFSIhFAAIAAmvIBrAAIB8E/IACAAICDk/IBnAAIAAGvgAqkiMQgNgNAAgRQAAgSANgMQANgNASAAQATAAANANQANANAAARQAAASgNAMQgNAMgTAAQgSAAgNgMg");
	this.shape.setTransform(-0.0145,0.0987,0.2986,0.2986);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#737373").s().p("Ah+DKIAAhDQArAcAqAAQArAAAbgWQAbgWAAgmQAAgkgbgVQgbgUgyAAQgWAAgxADIAPjiIDUAAIAAA8IiZAAIgIBsIAmgBQBEAAAlAjQAmAigBA9QAABAgrAnQgqAnhLAAQg/AAgegSg");
	this.shape_1.setTransform(64.1669,0.5765,0.2986,0.2986);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#737373").s().p("AhoCqQgogzAAheQAAhLAXg3QAWg4ArgeQAqgfA2AAQAyAAAaAMIAAA/QgjgSgmAAQgzAAggArQggAtgBBKIACAAQANgYAagPQAagOAcAAQA4AAAiAkQAhAkAAA9QAAApgTAiQgTAigfATQghASgoAAQhDAAgog1gAgxAUQgUAXAAAfQgBAZAKAUQAJAVARANQAQAMAWAAQAhAAATgWQATgXAAgmQAAgngTgWQgTgVgiAAQgeAAgWAUg");
	this.shape_2.setTransform(55.0447,0.4645,0.2986,0.2986);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#737373").s().p("AhWDYQgegHgOgKIAAhEQAUAQAbAJQAcAKAbAAQAoAAAYgUQAYgTAAggQAAgkgcgSQgcgTg0AAIgmAAIAAg5IAkAAQAuAAAYgRQAZgRAAghQAAgegTgRQgUgQgjAAQguAAgnAfIAAhAQASgKAcgIQAbgGAfAAQAmAAAcAOQAeANAPAYQAPAXAAAfQAAAqgWAbQgXAbgpAMIAAAAQAvAGAbAbQAbAbAAApQAAA8grAjQgqAkhJAAQggAAgbgHg");
	this.shape_3.setTransform(45.706,0.4645,0.2986,0.2986);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ms, new cjs.Rectangle(-36.4,-6.9,104.4,14.100000000000001), null);


(lib.cta_arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYBIIA4g1IiBAAIAAgkICBAAIg5g2IAuAAIBNBHIhNBIg");
	this.shape.setTransform(0.1794,0.0354,0.576,0.576);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_arrow, new cjs.Rectangle(-5.4,-4.1,11.2,8.3), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Microsoftlogo_rgb_cwhiteai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9B90E").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape.setTransform(49.7232,53.2975,0.9708,0.9708);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#39A4EE").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_1.setTransform(13.0509,53.2975,0.9708,0.9708);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#83BB1E").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_2.setTransform(49.7232,16.6251,0.9708,0.9708);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA4E17").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_3.setTransform(13.0509,16.6251,0.9708,0.9708);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ARIDTQgXgYAAgyIAAieIhtAAIAAD5IhJAAIAAj5Ig0AAIAAg8IA0AAIAAgrQAAgwAfggQAggfAyAAIAXABIATAEIAAA/IgNgFQgJgDgMAAQgWAAgNAPQgNAPAAAbIAAAlIBtAAIAAhFIBJgXIAABcIBKAAIAAA8IhKAAIAACQQAAAcALAMQAKAMAWAAQAHAAAJgDQALgEAEgDIAAA8QgHAEgQADQgTAEgNAAQguAAgXgZgAIrDBQgqgqAAhJQAAhNArgsQAsgtBNAAQBJAAAoArQApArAABJQAABMgrAsQgsAthKAAQhHAAgsgrgAJjAAQgWAaAAAxQAAAwAWAaQAWAaApAAQAoAAAUgaQAVgZAAgzQAAgygVgYQgWgZgnAAQgoAAgWAagAE7DnQgYgFgQgHIAAhIQASANAZAJQAWAIATAAQAaAAALgHQAMgGAAgRQAAgPgNgKQgMgLgigNQgngQgSgWQgRgVAAghQAAgpAhgbQAigbA1AAQAPAAAVAEQARADARAGIAABGQgOgKgUgHQgUgHgSAAQgVAAgMAIQgLAJAAANQAAAPAKAJQAJAJAjAOQArARASAWQASAXAAAeQAAArgiAbQgiAbg5AAQgQAAgagFgAgiDBQgrgqAAhJQAAhNAsgsQArgtBMAAQBJAAApArQAoAsAABIQAABLgrAtQgrAthLAAQhIAAgpgrgAAUAAQgVAaAAAxQAAAwAVAaQAWAaApAAQAoAAAVgaQAVgZAAgzQAAgxgWgZQgVgZgnAAQgpAAgWAagAoDDAQgrgrAAhDQAAhKAsgwQAsgxBQAAQATAAAWAGQAVAFAMAHIAABGQgRgNgRgGQgSgHgSAAQgrAAgbAbQgaAdAAAvQAAAvAZAaQAaAaArAAQARAAATgIQAUgHAQgMIAABDQgTALgUAEQgYAGgZAAQhEAAgrgsgAkFDkIAAk1IBJAAIAAAxIABAAQAKgZAUgPQAUgOAdAAIAQABIALADIAABKQgEgDgMgFQgMgEgPAAQgbAAgSAWQgTAWAAAwIAACcgAqqDkIAAk1IBJAAIAAE1gAs7DkIAAlSIgBAAIiGFSIgyAAIiJlSIgBAAIAAFSIhFAAIAAmvIBrAAIB8E/IACAAICDk/IBnAAIAAGvgAqkiMQgNgNAAgRQAAgSANgMQANgNASAAQATAAANANQANANAAARQAAASgNAMQgNAMgTAAQgSAAgNgMg");
	this.shape_4.setTransform(205.7809,33.8085,0.9708,0.9708);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah+DKIAAhDQArAcAqAAQArAAAbgWQAbgWAAgmQAAgkgbgVQgbgUgyAAQgWAAgxADIAPjiIDUAAIAAA8IiZAAIgIBsIAmgBQBEAAAlAjQAmAigBA9QAABAgrAnQgqAnhLAAQg/AAgegSg");
	this.shape_5.setTransform(414.3841,35.3618,0.9708,0.9708);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhoCqQgogzAAheQAAhLAXg3QAWg4ArgeQAqgfA2AAQAyAAAaAMIAAA/QgjgSgmAAQgzAAggArQggAtgBBKIACAAQANgYAagPQAagOAcAAQA4AAAiAkQAhAkAAA9QAAApgTAiQgTAigfATQghASgoAAQhDAAgog1gAgxAUQgUAXAAAfQgBAZAKAUQAJAVARANQAQAMAWAAQAhAAATgWQATgXAAgmQAAgngTgWQgTgVgiAAQgeAAgWAUg");
	this.shape_6.setTransform(384.7259,34.9977,0.9708,0.9708);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhWDYQgegHgOgKIAAhEQAUAQAbAJQAcAKAbAAQAoAAAYgUQAYgTAAggQAAgkgcgSQgcgTg0AAIgmAAIAAg5IAkAAQAuAAAYgRQAZgRAAghQAAgegTgRQgUgQgjAAQguAAgnAfIAAhAQASgKAcgIQAbgGAfAAQAmAAAcAOQAeANAPAYQAPAXAAAfQAAAqgWAbQgXAbgpAMIAAAAQAvAGAbAbQAbAbAAApQAAA8grAjQgqAkhJAAQggAAgbgHg");
	this.shape_7.setTransform(354.3638,34.9977,0.9708,0.9708);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,0,430.3,69.9);


(lib.Microsoftlogo_rgb_cgrayai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9B90E").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape.setTransform(49.7232,53.2975,0.9708,0.9708);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#39A4EE").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_1.setTransform(13.0509,53.2975,0.9708,0.9708);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#83BB1E").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_2.setTransform(49.7232,16.6251,0.9708,0.9708);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA4E17").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_3.setTransform(13.0509,16.6251,0.9708,0.9708);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#737373").s().p("ARIDTQgXgYAAgyIAAieIhtAAIAAD5IhJAAIAAj5Ig0AAIAAg8IA0AAIAAgrQAAgwAfggQAggfAyAAIAXABIATAEIAAA/IgNgFQgJgDgMAAQgWAAgNAPQgNAPAAAbIAAAlIBtAAIAAhFIBJgXIAABcIBKAAIAAA8IhKAAIAACQQAAAcALAMQAKAMAWAAQAHAAAJgDQALgEAEgDIAAA8QgHAEgQADQgTAEgNAAQguAAgXgZgAIrDBQgqgqAAhJQAAhNArgsQAsgtBNAAQBJAAAoArQApArAABJQAABMgrAsQgsAthKAAQhHAAgsgrgAJjAAQgWAaAAAxQAAAwAWAaQAWAaApAAQAoAAAUgaQAVgZAAgzQAAgygVgYQgWgZgnAAQgoAAgWAagAE7DnQgYgFgQgHIAAhIQASANAZAJQAWAIATAAQAaAAALgHQAMgGAAgRQAAgPgNgKQgMgLgigNQgngQgSgWQgRgVAAghQAAgpAhgbQAigbA1AAQAPAAAVAEQARADARAGIAABGQgOgKgUgHQgUgHgSAAQgVAAgMAIQgLAJAAANQAAAPAKAJQAJAJAjAOQArARASAWQASAXAAAeQAAArgiAbQgiAbg5AAQgQAAgagFgAgiDBQgrgqAAhJQAAhNAsgsQArgtBMAAQBJAAApArQAoAsAABIQAABLgrAtQgrAthLAAQhIAAgpgrgAAUAAQgVAaAAAxQAAAwAVAaQAWAaApAAQAoAAAVgaQAVgZAAgzQAAgxgWgZQgVgZgnAAQgpAAgWAagAoDDAQgrgrAAhDQAAhKAsgwQAsgxBQAAQATAAAWAGQAVAFAMAHIAABGQgRgNgRgGQgSgHgSAAQgrAAgbAbQgaAdAAAvQAAAvAZAaQAaAaArAAQARAAATgIQAUgHAQgMIAABDQgTALgUAEQgYAGgZAAQhEAAgrgsgAkFDkIAAk1IBJAAIAAAxIABAAQAKgZAUgPQAUgOAdAAIAQABIALADIAABKQgEgDgMgFQgMgEgPAAQgbAAgSAWQgTAWAAAwIAACcgAqqDkIAAk1IBJAAIAAE1gAs7DkIAAlSIgBAAIiGFSIgyAAIiJlSIgBAAIAAFSIhFAAIAAmvIBrAAIB8E/IACAAICDk/IBnAAIAAGvgAqkiMQgNgNAAgRQAAgSANgMQANgNASAAQATAAANANQANANAAARQAAASgNAMQgNAMgTAAQgSAAgNgMg");
	this.shape_4.setTransform(205.7809,33.8085,0.9708,0.9708);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#737373").s().p("Ah+DKIAAhDQArAcAqAAQArAAAbgWQAbgWAAgmQAAgkgbgVQgbgUgyAAQgWAAgxADIAPjiIDUAAIAAA8IiZAAIgIBsIAmgBQBEAAAlAjQAmAigBA9QAABAgrAnQgqAnhLAAQg/AAgegSg");
	this.shape_5.setTransform(414.3841,35.3618,0.9708,0.9708);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#737373").s().p("AhoCqQgogzAAheQAAhLAXg3QAWg4ArgeQAqgfA2AAQAyAAAaAMIAAA/QgjgSgmAAQgzAAggArQggAtgBBKIACAAQANgYAagPQAagOAcAAQA4AAAiAkQAhAkAAA9QAAApgTAiQgTAigfATQghASgoAAQhDAAgog1gAgxAUQgUAXAAAfQgBAZAKAUQAJAVARANQAQAMAWAAQAhAAATgWQATgXAAgmQAAgngTgWQgTgVgiAAQgeAAgWAUg");
	this.shape_6.setTransform(384.7259,34.9977,0.9708,0.9708);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#737373").s().p("AhWDYQgegHgOgKIAAhEQAUAQAbAJQAcAKAbAAQAoAAAYgUQAYgTAAggQAAgkgcgSQgcgTg0AAIgmAAIAAg5IAkAAQAuAAAYgRQAZgRAAghQAAgegTgRQgUgQgjAAQguAAgnAfIAAhAQASgKAcgIQAbgGAfAAQAmAAAcAOQAeANAPAYQAPAXAAAfQAAAqgWAbQgXAbgpAMIAAAAQAvAGAbAbQAbAbAAApQAAA8grAjQgqAkhJAAQggAAgbgHg");
	this.shape_7.setTransform(354.3638,34.9977,0.9708,0.9708);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,0,430.3,69.9);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A57PRIAA+gMAz3AAAIAAegg");
	this.shape.setTransform(202.625,127.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(36.6,29.4,332.09999999999997,195.29999999999998), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A57PRIAA+gMAz3AAAIAAegg");
	this.shape_1.setTransform(202.625,127.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(36.6,29.4,332.09999999999997,195.29999999999998), null);


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

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_box, new cjs.Rectangle(-10.8,-10.7,21.6,21.5), null);


(lib.Insert_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.txt.textBaseline = "alphabetic"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.txt = new cjs.Text("Insert", "6px 'Segoe Pro'", "#494846");
	this.txt.name = "txt";
	this.txt.lineHeight = 10;
	this.txt.lineWidth = 16;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Insert_txt, new cjs.Rectangle(0,0,19.5,15.3), null);


(lib.Home_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.txt.textBaseline = "alphabetic"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.txt = new cjs.Text("Home", "6px 'Segoe Pro'", "#494846");
	this.txt.name = "txt";
	this.txt.lineHeight = 10;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Home_txt, new cjs.Rectangle(0,0,21,14), null);


(lib.Formulas_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.txt.textBaseline = "alphabetic"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.txt = new cjs.Text("Design", "6px 'Segoe Pro'", "#494846");
	this.txt.name = "txt";
	this.txt.lineHeight = 10;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Formulas_txt, new cjs.Rectangle(0,0,22.5,14.6), null);


(lib.fore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.scene_2_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fore, new cjs.Rectangle(0,0,312,193), null);


(lib.Excel_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.txt.textBaseline = "alphabetic"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.txt = new cjs.Text("Word", "6px 'Segoe Pro'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.lineHeight = 10;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Excel_txt, new cjs.Rectangle(0,0,19.1,17.3), null);


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

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114.7,30.3);


(lib.Comments_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.txt.textBaseline = "alphabetic"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.txt = new cjs.Text("Comments", "7px 'Segoe Pro'", "#345699");
	this.txt.name = "txt";
	this.txt.lineHeight = 10;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Comments_txt, new cjs.Rectangle(0,0,35,12.8), null);


(lib.bxs_cache = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#345699").s().p("AgUANIgHAAIAAglIA2AAIAAAlIgiAAIgNAMgAgXAJIAHAAIAAAIIAHgIIAhAAIAAgeIgvAAg");
	this.shape.setTransform(45.35,5.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBE9E7").s().p("AjxA7QgFAAgDgDQgDgDAAgFIAAhfQAAgEADgDQADgEAFAAIHjAAQAFAAADAEQADADAAAEIAABfQAAAFgDADQgDADgFAAgAj3g1QgCADgBADIAABfQABADACADQACACAEAAIHjAAQAEAAACgCQACgDABgDIAAhfQgBgDgCgDQgCgDgEABInjAAQgEgBgCADg");
	this.shape_1.setTransform(63.6541,5.9007);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjnA7QgIAAgGgGQgHgGAAgKIAAhJQAAgJAHgHQAGgGAIAAIHPAAQAIAAAHAGQAGAHAAAJIAABJQAAAKgGAGQgHAGgIAAg");
	this.shape_2.setTransform(63.6541,5.9007);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#345699").s().p("AADAJIgGABIgHACIgHAEQgEACgBADIAAgEIABgHIACgGIAEgFIAFgEIAHgCIAGgBIAAgMIAVAUIgVAVgAgCgEIgDABIgFADIgDADIgEAEIgBAFIAKgFIALgBIAEAAIAAAGIALgMIgLgLIAAAGIgEAAg");
	this.shape_3.setTransform(7.6032,4.6757);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#345699").s().p("AgYATIAAglIADAAIAAAjIArAAIAAgUIADAAIAAAWg");
	this.shape_4.setTransform(6.5032,6.9257);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EBE9E7").s().p("AieA7QgFAAgDgDQgDgDAAgFIAAhfQAAgEADgDQADgEAFAAIE+AAQAEAAADAEQADADAAAEIAABfQAAAFgDADQgDADgEAAgAingvIAABfQAAAJAJgBIE+AAQADAAACgCQADgDAAgDIAAhfQAAgDgDgDQgCgDgDABIk+AAQgJAAAAAIg");
	this.shape_5.setTransform(17.0284,5.9007);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiUA7QgJAAgGgGQgGgGAAgKIAAhJQAAgJAGgHQAGgGAJAAIEpAAQAJAAAGAGQAGAHAAAJIAABJQAAAKgGAGQgGAGgJAAg");
	this.shape_6.setTransform(17.0284,5.9007);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bxs_cache, new cjs.Rectangle(0,0,89,11.8), null);


(lib.bushes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.BG();
	this.instance.setTransform(80,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bushes, new cjs.Rectangle(-1.6,-143.9,600.6,407.9), null);


(lib.bottom_bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#706F6F").s().p("AgEACIAAgCIAJAAIAAACg");
	this.shape.setTransform(106.2339,6.2042,0.8699,0.8699);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#706F6F").s().p("AgKABIAAgBIAVAAIAAABg");
	this.shape_1.setTransform(108.1481,5.0357,0.8697,0.8697);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#706F6F").s().p("AgKABIAAgCIAVAAIAAACg");
	this.shape_2.setTransform(108.1481,4.2094,0.8697,0.8697);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#706F6F").s().p("AgKACIAAgCIAVAAIAAACg");
	this.shape_3.setTransform(108.1481,3.3832,0.8697,0.8697);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#706F6F").s().p("AgKACIAAgCIAVAAIAAACg");
	this.shape_4.setTransform(108.1481,2.6004,0.8697,0.8697);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#706F6F").s().p("AgKABIAAgBIAVAAIAAABg");
	this.shape_5.setTransform(108.1481,1.7741,0.8697,0.8697);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#706F6F").s().p("AgKACIAAgDIAVAAIAAADg");
	this.shape_6.setTransform(108.1481,0.9479,0.8697,0.8697);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#706F6F").s().p("AgKABIAAgBIAVAAIAAABg");
	this.shape_7.setTransform(104.3213,5.0357,0.8697,0.8697);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#706F6F").s().p("AgKABIAAgCIAVAAIAAACg");
	this.shape_8.setTransform(104.3213,4.2094,0.8697,0.8697);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#706F6F").s().p("AgKACIAAgCIAVAAIAAACg");
	this.shape_9.setTransform(104.3213,3.3832,0.8697,0.8697);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#706F6F").s().p("AgKACIAAgCIAVAAIAAACg");
	this.shape_10.setTransform(104.3213,2.6004,0.8697,0.8697);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#706F6F").s().p("AgKABIAAgBIAVAAIAAABg");
	this.shape_11.setTransform(104.3213,1.7741,0.8697,0.8697);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#706F6F").s().p("AgKACIAAgDIAVAAIAAADg");
	this.shape_12.setTransform(104.3213,0.9479,0.8697,0.8697);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#706F6F").s().p("AgEABIAAgBIAJAAIAAABg");
	this.shape_13.setTransform(106.2339,5.3779,0.8699,0.8699);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#706F6F").s().p("AgEACIAAgDIAJAAIAAADg");
	this.shape_14.setTransform(106.2339,4.5515,0.8699,0.8699);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#706F6F").s().p("AgEABIAAgBIAJAAIAAABg");
	this.shape_15.setTransform(106.2339,3.7251,0.8699,0.8699);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#706F6F").s().p("AgEABIAAgBIAJAAIAAABg");
	this.shape_16.setTransform(106.2339,2.9422,0.8699,0.8699);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#706F6F").s().p("AgEACIAAgDIAJAAIAAADg");
	this.shape_17.setTransform(106.2339,2.1158,0.8699,0.8699);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#706F6F").s().p("AgEABIAAgBIAJAAIAAABg");
	this.shape_18.setTransform(106.2339,1.2895,0.8699,0.8699);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#706F6F").s().p("AgBAkIAAhGIADAAIAABGg");
	this.shape_19.setTransform(106.2122,3.5511,0.8699,0.8699);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#706F6F").s().p("AgEACIAAgDIAJAAIAAADg");
	this.shape_20.setTransform(106.2339,0.4631,0.8699,0.8699);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#706F6F").s().p("AgSAjIAAhEIAlAAIAAACIgiAAIAAA+IAiAAIAAAEg");
	this.shape_21.setTransform(104.1897,3.0727,0.8699,0.8699);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#706F6F").s().p("AgSAjIAAgEIAiAAIAAg+IgiAAIAAgCIAlAAIAABEg");
	this.shape_22.setTransform(108.2998,3.0727,0.8699,0.8699);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#706F6F").s().p("AgoAmIAAhLIBRAAIAABLgAglAjIBLAAIAAhFIhLAAg");
	this.shape_23.setTransform(119.9368,3.4814,0.8699,0.8699);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#706F6F").s().p("AgfACIAAgDIA/AAIAAADg");
	this.shape_24.setTransform(119.9368,5.5474,0.8699,0.8699);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#706F6F").s().p("AgfABIAAgBIA/AAIAAABg");
	this.shape_25.setTransform(119.9368,4.721,0.8699,0.8699);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#706F6F").s().p("AgfACIAAgDIA/AAIAAADg");
	this.shape_26.setTransform(119.9368,3.8946,0.8699,0.8699);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#706F6F").s().p("AgfABIAAgBIA/AAIAAABg");
	this.shape_27.setTransform(119.9368,3.0682,0.8699,0.8699);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#706F6F").s().p("AgfABIAAgCIA/AAIAAACg");
	this.shape_28.setTransform(119.9368,2.2419,0.8699,0.8699);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#706F6F").s().p("AgfACIAAgCIA/AAIAAACg");
	this.shape_29.setTransform(119.9368,1.4155,0.8699,0.8699);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#747474").s().p("AgjAhIAAhBIBHAAIAAAgIgDAAIAAgdIhCAAIAAA7IAgAAIAAADg");
	this.shape_30.setTransform(133.1974,2.6111,0.8197,0.8197);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#747474").s().p("AgIACIAAgDIASAAIAAADg");
	this.shape_31.setTransform(132.0293,4.189,0.8197,0.8197);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#747474").s().p("AgLACIAAgCIAXAAIAAACg");
	this.shape_32.setTransform(132.2752,3.4103,0.8197,0.8197);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#747474").s().p("AgQABIAAgCIAhAAIAAACg");
	this.shape_33.setTransform(132.6851,2.6316,0.8197,0.8197);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#747474").s().p("AgXACIAAgCIAvAAIAAACg");
	this.shape_34.setTransform(133.1974,1.8529,0.8197,0.8197);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#747474").s().p("AgXABIAAgCIAvAAIAAACg");
	this.shape_35.setTransform(133.1974,1.0742,0.8197,0.8197);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#747474").s().p("AgPAQQgHgGAAgKQAAgJAHgGQAHgIAIABQAKgBAGAIQAHAGAAAJQAAAKgHAGQgGAIgKgBQgIABgHgIgAgTAAQAAAIAGAFQAGAGAHABIADgBIgBgGIgCgIQgBgFgDgBIgDgBQgEgCgBgFIAAgCIgCAAIAAgBQgFAHAAAFgAAGgPIgBACQgFAIAAABIAAADQAAACAEABIAOAFIAAAAIACgHQAAgMgLgEIgBAAg");
	this.shape_36.setTransform(135.1933,4.7301,0.8199,0.8199);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#707070").s().p("AgUABIAAgBIAEgEIAAAAIACABIAKALIATgZIABAAIAAAAIAFADIAAABIgYAgg");
	this.shape_37.setTransform(6.0196,3.1383,0.8598,0.8598);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#707070").s().p("AAAAkQAAgEgRAAIgXAAIAAhDIAPAAQAVAAAFAIQAFgIAUAAIAPAAIAAAOIgCAEIAAgPIgNAAQgYAAAAAKIAAA2QADgCAOAAIAUAAIAAgeIACgCIAAAiIgWAAQgRAAAAAEgAgmAeIAVAAQAPAAACACIAAg2QAAgKgZAAIgNAAg");
	this.shape_38.setTransform(3.5692,3.3748,0.8598,0.8598);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#747474").s().p("AgQADIAAgFIAhAAIAAAFg");
	this.shape_39.setTransform(144.156,3.4829,0.8398,0.8398);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CACAC9").s().p("AgCAPIAAgdIAFAAIAAAdg");
	this.shape_40.setTransform(174.204,3.363,0.8397,0.8397);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#747474").s().p("AgNAjIAAhFIAaAAIAABFg");
	this.shape_41.setTransform(177.5627,3.1111,0.8397,0.8397);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CACAC9").s().p("Ak3AFIAAgJIJvAAIAAAJg");
	this.shape_42.setTransform(174.4559,3.363,0.8397,0.8397);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#626262").s().p("AgCAXIAAgUIgUAAIAAgFIAUAAIAAgUIAFAAIAAAUIAUAAIAAAFIgUAAIAAAUg");
	this.shape_43.setTransform(204.0368,3.4829,0.8398,0.8398);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bottom_bar, new cjs.Rectangle(0,-0.1,206,6.8999999999999995), null);


(lib.AutoSave_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.txt.textBaseline = "alphabetic"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.txt = new cjs.Text("AutoSave", "6px 'Segoe Pro'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.lineHeight = 10;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AutoSave_txt, new cjs.Rectangle(0,0,29.8,14), null);


(lib.arrows_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494846").s().p("AgQAUIATgUIgTgTIAHgHIAaAaIgaAbg");
	this.shape.setTransform(3.5231,2.0546,0.7498,0.7498);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#494846").s().p("AgRAUIAVgUIgVgTIAHgHIAbAaIgbAbg");
	this.shape_1.setTransform(1.2924,2.0546,0.7498,0.7498);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arrows_, new cjs.Rectangle(0,0,4.8,4.1), null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYBIIA4g1IiBAAIAAgkICBAAIg5g2IAuAAIBNBHIhNBIg");
	this.shape.setTransform(5.6294,4.1854,0.576,0.576);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(0,0,11.3,8.4), null);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.txt_1.cache(-300,-300,620,600,1.6)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.txt_1 = new lib.txt_1();
	this.txt_1.name = "txt_1";
	this.txt_1.setTransform(144.8,43.5,1,1,0,0,0,144.8,43.5);

	this.timeline.addTween(cjs.Tween.get(this.txt_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(-1.8,-1.8,274.90000000000003,251), null);


(lib.txt_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.txt_fix.cache(-300,-300,620,600,1.6)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.txt_fix = new lib.txt_fix();
	this.txt_fix.name = "txt_fix";
	this.txt_fix.setTransform(135.8,43.5,1,1,0,0,0,135.8,43.5);

	this.timeline.addTween(cjs.Tween.get(this.txt_fix).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_2, new cjs.Rectangle(-1.8,-1.8,402.90000000000003,275.90000000000003), null);


(lib.Top_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.symbols.cache(-50,-10,100,20,3)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.symbols = new lib.TopRight_symbols();
	this.symbols.name = "symbols";
	this.symbols.setTransform(20.3,3.1,1,1,0,0,0,20.3,3.1);

	this.timeline.addTween(cjs.Tween.get(this.symbols).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Top_right, new cjs.Rectangle(0,0,40.5,5.6), null);


(lib.top_left_icons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.icons.cache(-50,-10,100,20,2)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.icons = new lib.topleft_icons();
	this.icons.name = "icons";
	this.icons.setTransform(21.9,4.5,1,1,0,0,0,21.9,4.5);

	this.timeline.addTween(cjs.Tween.get(this.icons).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.top_left_icons, new cjs.Rectangle(0,0,43.7,9), null);


(lib.textanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Image
	this.instance = new lib._img();
	this.instance.setTransform(10,-34,1.03,1.03);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// TextDynamic
	this.instance_1 = new lib.txt1();
	this.instance_1.setTransform(153.8,178.5,1,1,0,0,0,144.8,43.5);

	this.instance_2 = new lib.txt_2();
	this.instance_2.setTransform(144.8,178.5,1,1,0,0,0,135.8,43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// TitleTextDynamic
	this.instance_3 = new lib.titletext();
	this.instance_3.setTransform(134.9,145.5,1,1,0,0,0,127.9,35.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,-34,408.1,443.1);


(lib.scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.fg = new lib.fore();
	this.fg.name = "fg";
	this.fg.setTransform(148,294,1,1,0,0,0,160,236);

	this.timeline.addTween(cjs.Tween.get(this.fg).wait(1));

	// Layer_1
	this.bg = new lib.bushes();
	this.bg.name = "bg";
	this.bg.setTransform(89.7,165.85,1,0.9999,0,0,0,199.5,132.1);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scene3, new cjs.Rectangle(-29.8,-2.2,330,274.9), null);


(lib.scene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.fg = new lib.scene1_fg();
	this.fg.name = "fg";
	this.fg.setTransform(753.2,420.2,1,1,0,0,0,176.2,300.2);

	this.timeline.addTween(cjs.Tween.get(this.fg).wait(1));

	// Layer_6
	this.bg = new lib.officeBG();
	this.bg.name = "bg";
	this.bg.setTransform(1115,715.5,1,1,0,0,0,617,595.5);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scene_1, new cjs.Rectangle(498,120,350,250), null);


(lib.replay_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{out:0,over:1,down:2,hit:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 6
	this.instance = new lib.replaySub("synched",0);
	this.instance.setTransform(-18.15,16.65,1.754,1.754);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-18.65,y:16.55,alpha:1},1).to({_off:true},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.8,0,32.699999999999996,30.6);


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
	this.instance.setTransform(-18.15,0.05,1,1,0,0,0,5.6,4.2);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({x:2.15},8,cjs.Ease.get(1)).wait(1).to({x:2},0).wait(1).to({x:1.35},0).wait(1).to({x:0.4},0).wait(1).to({x:-0.4},0).wait(1).to({x:-0.9},0).wait(1).to({x:-1.05},0).wait(1).to({x:-0.95},0).wait(1).to({x:-0.6},0).wait(1).to({x:-0.15},0).wait(1).to({x:0.25},0).wait(1).to({x:0.5},0).wait(1).to({x:0.55},0).wait(2).to({x:0.4},0).wait(1).to({x:0.25},0).wait(1).to({x:0.1},0).wait(1).to({x:0},0).wait(1).to({x:-0.05},0).wait(1).to({x:0},0).wait(1).to({x:0.05},0).wait(1).to({x:0.1},0).wait(1).to({x:0.15},0).wait(11));

	// Layer 2
	this.instance_1 = new lib.arrow();
	this.instance_1.setTransform(0.15,0.05,1,1,0,0,0,5.6,4.2);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-1.15},8,cjs.Ease.get(1)).wait(2).to({x:19.85},8,cjs.Ease.get(-1)).to({_off:true},1).wait(34));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-4.1,20.5,8.3);


(lib.MSFT_logo_sq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.logo_box.cache(-22,-22,44,44,2)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.logo_box = new lib.logo_box();
	this.logo_box.name = "logo_box";
	this.logo_box.setTransform(-40,1.4);

	this.timeline.addTween(cjs.Tween.get(this.logo_box).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MSFT_logo_sq, new cjs.Rectangle(-50.8,-9.3,21.599999999999998,21.5), null);


(lib.MSFT_Logo_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.ms.cache(-105,-16,210,32,2)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.ms = new lib.ms();
	this.ms.name = "ms";
	this.ms.setTransform(13.65,1.05);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEBA00").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape.setTransform(-34.3747,7.0753);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#03A5EA").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_1.setTransform(-45.6749,7.0753);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7CBB01").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_2.setTransform(-34.3747,-4.2249);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F25022").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_3.setTransform(-45.6749,-4.2249);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.ms}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MSFT_Logo_anim, new cjs.Rectangle(-50.8,-9.3,132.39999999999998,21.5), null);


(lib.logos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_50 = function() {
		exportRoot.tl1.play()
	}
	this.frame_74 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50).call(this.frame_50).wait(24).call(this.frame_74).wait(1));

	// Layer_5
	this.instance = new lib.MSFT_logo_sq();
	this.instance.setTransform(298.45,338.35,0.2981,0.2981,0,0,0,-39.9,1.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regX:-40,regY:1.4,scaleX:4.9325,scaleY:4.9325,x:298.4},13,cjs.Ease.quadOut).to({x:24.15},12,cjs.Ease.quadInOut).to({_off:true},1).wait(48));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("AyYelIAAwoMBbuAAAIAAQog");
	var mask_graphics_15 = new cjs.Graphics().p("AyrelIAAwoMBbtAAAIAAQog");
	var mask_graphics_16 = new cjs.Graphics().p("AzlelIAAwoMBbuAAAIAAQog");
	var mask_graphics_17 = new cjs.Graphics().p("A1EelIAAwoMBbuAAAIAAQog");
	var mask_graphics_18 = new cjs.Graphics().p("A3JelIAAwoMBbuAAAIAAQog");
	var mask_graphics_19 = new cjs.Graphics().p("A51elIAAwoMBbuAAAIAAQog");
	var mask_graphics_20 = new cjs.Graphics().p("A9HelIAAwoMBbuAAAIAAQog");
	var mask_graphics_21 = new cjs.Graphics().p("EggYAelIAAwoMBbuAAAIAAQog");
	var mask_graphics_22 = new cjs.Graphics().p("EgjEAelIAAwoMBbuAAAIAAQog");
	var mask_graphics_23 = new cjs.Graphics().p("EglJAelIAAwoMBbuAAAIAAQog");
	var mask_graphics_24 = new cjs.Graphics().p("EgmoAelIAAwoMBbuAAAIAAQog");
	var mask_graphics_25 = new cjs.Graphics().p("EgniAelIAAwoMBbuAAAIAAQog");
	var mask_graphics_26 = new cjs.Graphics().p("Egn1AelIAAwoMBbuAAAIAAQog");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:469.3539,y:195.7095}).wait(1).to({graphics:mask_graphics_15,x:467.448,y:195.7095}).wait(1).to({graphics:mask_graphics_16,x:461.7303,y:195.7095}).wait(1).to({graphics:mask_graphics_17,x:452.2008,y:195.7095}).wait(1).to({graphics:mask_graphics_18,x:438.8594,y:195.7095}).wait(1).to({graphics:mask_graphics_19,x:421.7063,y:195.7095}).wait(1).to({graphics:mask_graphics_20,x:400.7414,y:195.7095}).wait(1).to({graphics:mask_graphics_21,x:379.7765,y:195.7095}).wait(1).to({graphics:mask_graphics_22,x:362.6233,y:195.7095}).wait(1).to({graphics:mask_graphics_23,x:349.282,y:195.7095}).wait(1).to({graphics:mask_graphics_24,x:339.7525,y:195.7095}).wait(1).to({graphics:mask_graphics_25,x:334.0348,y:195.7095}).wait(1).to({graphics:mask_graphics_26,x:332.1289,y:195.7095}).wait(1).to({graphics:null,x:0,y:0}).wait(48));

	// Layer_7
	this.instance_1 = new lib.MSFT_Logo_anim();
	this.instance_1.setTransform(-132.35,332.45,4.9325,4.9325,0,0,0,0.1,0.2);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({x:222.05},12,cjs.Ease.quadInOut).to({_off:true},24).wait(25));

	// white (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EhL2A/xMAAAh/hMCXtAAAMAAAB/hg");
	var mask_1_graphics_51 = new cjs.Graphics().p("EhL2A/xMAAAh/hMCXtAAAMAAAB/hg");
	var mask_1_graphics_52 = new cjs.Graphics().p("EhL2A/xMAAAh/hMCXtAAAMAAAB/hg");
	var mask_1_graphics_53 = new cjs.Graphics().p("EhL2A/xMAAAh/hMCXtAAAMAAAB/hg");
	var mask_1_graphics_54 = new cjs.Graphics().p("EhL2A/xMAAAh/hMCXtAAAMAAAB/hg");
	var mask_1_graphics_55 = new cjs.Graphics().p("EhL2A/xMAAAh/hMCXtAAAMAAAB/hg");
	var mask_1_graphics_56 = new cjs.Graphics().p("EhL2A/xMAAAh/hMCXtAAAMAAAB/hg");
	var mask_1_graphics_57 = new cjs.Graphics().p("EhL2A/xMAAAh/hMCXtAAAMAAAB/hg");
	var mask_1_graphics_58 = new cjs.Graphics().p("EhL2A/xMAAAh/hMCXtAAAMAAAB/hg");
	var mask_1_graphics_59 = new cjs.Graphics().p("EhL2A/xMAAAh/hMCXtAAAMAAAB/hg");
	var mask_1_graphics_60 = new cjs.Graphics().p("EhL2A/xMAAAh/hMCXtAAAMAAAB/hg");
	var mask_1_graphics_61 = new cjs.Graphics().p("EhL2A/xMAAAh/hMCXtAAAMAAAB/hg");
	var mask_1_graphics_62 = new cjs.Graphics().p("EhL2A/xMAAAh/hMCXtAAAMAAAB/hg");
	var mask_1_graphics_63 = new cjs.Graphics().p("EhL2A/xMAAAh/hMCXtAAAMAAAB/hg");
	var mask_1_graphics_64 = new cjs.Graphics().p("EhL2A/xMAAAh/hMCXtAAAMAAAB/hg");
	var mask_1_graphics_65 = new cjs.Graphics().p("EhL2A/xMAAAh/hMCXtAAAMAAAB/hg");
	var mask_1_graphics_66 = new cjs.Graphics().p("EhL2A/xMAAAh/hMCXtAAAMAAAB/hg");
	var mask_1_graphics_67 = new cjs.Graphics().p("EhL2A/xMAAAh/hMCXtAAAMAAAB/hg");
	var mask_1_graphics_68 = new cjs.Graphics().p("EhL2A/xMAAAh/hMCXtAAAMAAAB/hg");
	var mask_1_graphics_69 = new cjs.Graphics().p("EhL2A/xMAAAh/hMCXtAAAMAAAB/hg");
	var mask_1_graphics_70 = new cjs.Graphics().p("EhM1A/xMAAAh/hMCXtAAAMAAAB/hg");
	var mask_1_graphics_71 = new cjs.Graphics().p("EhTjA/xMAAAh/hMCXtAAAMAAAB/hg");
	var mask_1_graphics_72 = new cjs.Graphics().p("EhanA/xMAAAh/hMCXtAAAMAAAB/hg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:298.0324,y:340.5185}).wait(51).to({graphics:mask_1_graphics_51,x:298.0324,y:340.5185}).wait(1).to({graphics:mask_1_graphics_52,x:295.8271,y:340.5185}).wait(1).to({graphics:mask_1_graphics_53,x:289.2111,y:340.5185}).wait(1).to({graphics:mask_1_graphics_54,x:278.1844,y:340.5185}).wait(1).to({graphics:mask_1_graphics_55,x:262.7471,y:340.5185}).wait(1).to({graphics:mask_1_graphics_56,x:242.8992,y:340.5185}).wait(1).to({graphics:mask_1_graphics_57,x:218.6406,y:340.5185}).wait(1).to({graphics:mask_1_graphics_58,x:189.9713,y:340.5185}).wait(1).to({graphics:mask_1_graphics_59,x:156.8914,y:340.5185}).wait(1).to({graphics:mask_1_graphics_60,x:119.4008,y:340.5185}).wait(1).to({graphics:mask_1_graphics_61,x:77.4995,y:340.5185}).wait(1).to({graphics:mask_1_graphics_62,x:31.1876,y:340.5185}).wait(1).to({graphics:mask_1_graphics_63,x:-19.5349,y:340.5185}).wait(1).to({graphics:mask_1_graphics_64,x:-74.6682,y:340.5185}).wait(1).to({graphics:mask_1_graphics_65,x:-134.212,y:340.5185}).wait(1).to({graphics:mask_1_graphics_66,x:-198.1666,y:340.5185}).wait(1).to({graphics:mask_1_graphics_67,x:-266.5318,y:340.5185}).wait(1).to({graphics:mask_1_graphics_68,x:-339.3076,y:340.5185}).wait(1).to({graphics:mask_1_graphics_69,x:-416.4941,y:340.5185}).wait(1).to({graphics:mask_1_graphics_70,x:-491.7868,y:340.5185}).wait(1).to({graphics:mask_1_graphics_71,x:-534.7908,y:340.5185}).wait(1).to({graphics:mask_1_graphics_72,x:-580,y:340.5185}).wait(3));

	// Layer_9
	this.instance_2 = new lib.MSFT_Logo_anim();
	this.instance_2.setTransform(222.05,332.45,4.9325,4.9325,0,0,0,0.1,0.2);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50).to({_off:false},0).wait(25));

	// white
	this.instance_3 = new lib.white();
	this.instance_3.setTransform(297.95,903.5,1,2.3867,0,0,0,485.4,406.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(51).to({scaleY:2.3668,y:895.45},0).to({x:-674.6},21,cjs.Ease.quadIn).wait(3));

	// white copy
	this.instance_4 = new lib.white();
	this.instance_4.setTransform(297.95,903.5,1,2.3867,0,0,0,485.4,406.9);
	this.instance_4.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(51).to({scaleY:2.3671,y:895.55},0).wait(2).to({scaleY:2.3867,x:-674.6,y:903.5},21,cjs.Ease.quadIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1160,-67.6,1943.5,816.3000000000001);


(lib.menu_bg_sub = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#606061").s().p("AgrAEIAAgIIBYAAIAAAIg");
	this.shape.setTransform(275.8042,186.4532);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#606061").s().p("AgaAhQgLgMAAgUQAAgSALgNQALgOARAAQATAAAKAPQAHAKAAAQIAAAGIg8AAQAAAPAJAIQAIAHAMAAQANAAAKgFIADAMQgMAFgRAAQgSAAgMgMgAgPgZQgGAHgBAKIAtAAQAAgJgEgHQgGgJgMAAQgKAAgGAIg");
	this.shape_1.setTransform(336.3301,180.3532);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#606061").s().p("AgUAsIgBhWIAOAAIABARIAAAAQAGgSARAAIAFAAIAAAPIgGAAQgIAAgGAFQgEAGgCAJIAAA0g");
	this.shape_2.setTransform(329.58,180.2532);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#606061").s().p("AgdAhQgMgMAAgVQAAgTAMgNQAMgMASAAQASAAAMANQALALAAAUQAAAWgNAMQgMALgRAAQgSAAgLgMgAgTgWQgGAKAAAMQAAAPAHAJQAIAKAKAAQALAAAIgKQAHgJAAgPQAAgMgGgJQgHgMgNAAQgMAAgHALg");
	this.shape_3.setTransform(321.2799,180.3532);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#606061").s().p("AAuA8IgEhoIgBAAQgHAXgIAWIgWA7IgLAAIgTg6QgKgfgEgPIAAAAIgFBoIgQAAIAJh3IAUAAIAVA6IALAoIAAAAIAMgoIAWg6IAUAAIAIB3g");
	this.shape_4.setTransform(309.1047,178.6531);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#606061").s().p("AgaAhQgLgMAAgUQAAgSALgNQALgOARAAQAUAAAJAPQAHAKAAAQIgBAGIg7AAQAAAPAJAIQAHAHANAAQANAAAKgFIADAMQgMAFgRAAQgSAAgMgMgAgQgZQgFAHgBAKIAtAAQAAgKgEgGQgGgJgMAAQgKAAgHAIg");
	this.shape_5.setTransform(293.7045,180.3532);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#606061").s().p("AgaAhQgLgMAAgUQAAgSAKgNQAMgOASAAQATAAAJAPQAHAKAAAQIAAAGIg8AAQAAAPAJAIQAIAHALAAQANAAAMgFIACAMQgMAFgQAAQgTAAgMgMgAgPgZQgGAHgBAKIAtAAQAAgKgEgGQgGgJgMAAQgJAAgHAIg");
	this.shape_6.setTransform(284.7543,180.3532);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#606061").s().p("AgkA2IAFgNQAMAIAQAAQAKAAAHgGQAHgFAAgKQgBgPgVgIQgggKAAgXQAAgOALgKQALgJAQAAQARAAAKAGIgFAMQgLgFgLAAQgLAAgGAFQgFAFAAAIQAAAIAFAFQAFAFAMAFQAQAGAIAHQAHAIAAANQABAPgLAJQgMALgSAAQgUAAgMgIg");
	this.shape_7.setTransform(275.7542,178.6531);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#606061").s().p("AgyAEIAAgIIBlAAIAAAIg");
	this.shape_8.setTransform(288.7294,155.4028);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#606061").s().p("AAKgTIARgCQgIAagJAPIgKACQAHgRADgYgAgPgTIAQgCQgIAcgJANIgJACQAGgRAEgYg");
	this.shape_9.setTransform(541.2083,143.5776);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#606061").s().p("AgbAnIAEgMQAJAGALAAQAQAAAAgMQAAgKgPgGQgXgHAAgRQAAgLAIgHQAIgHANAAQAMAAAJAFIgEAMQgIgFgJAAQgOAAAAAMQAAAFAEADQAEADAIADQAWAIAAARQAAAMgIAHQgJAHgOAAQgOAAgKgGg");
	this.shape_10.setTransform(534.7332,149.2777);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#606061").s().p("AgbAnIADgMQAKAGALAAQAQAAAAgMQAAgKgPgGQgXgHAAgRQAAgLAIgHQAIgHANAAQAMAAAJAFIgEAMQgIgFgKAAQgFAAgEADQgEAEAAAFQAAAFAEADQADADAIADQAXAIAAARQAAAMgIAHQgJAHgOAAQgOAAgKgGg");
	this.shape_11.setTransform(527.6831,149.2777);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#606061").s().p("AgaAhQgLgMAAgTQAAgUALgNQALgNARAAQATAAAKAOQAHALAAAQIAAAGIg8AAQAAAPAJAIQAIAHAMAAQANAAAKgFIADAMQgMAFgRAAQgSAAgMgMgAgPgYQgGAHgBAKIAtAAQAAgKgEgHQgGgJgMAAQgKAAgGAJg");
	this.shape_12.setTransform(519.6829,149.2777);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#606061").s().p("AAVAsIAAgxQAAgZgUAAQgGAAgGAFQgFAEgDAHIgBAHIAAAzIgPAAIgBhVIAOAAIABAOIAAAAQAIgQAUAAQALAAAJAHQAKAKAAAUIAAAyg");
	this.shape_13.setTransform(510.2328,149.1777);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#606061").s().p("AgaAhQgLgMAAgTQAAgUALgNQALgNARAAQATAAAKAOQAHALAAAQIAAAGIg8AAQAAAPAJAIQAIAHAMAAQANAAALgFIACAMQgMAFgRAAQgSAAgMgMgAgPgYQgGAHgBAKIAtAAQAAgKgEgHQgGgJgMAAQgKAAgGAJg");
	this.shape_14.setTransform(500.8326,149.2777);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#606061").s().p("AgbAnIADgMQALAGALAAQAPAAAAgMQAAgKgPgGQgXgHAAgRQAAgLAIgHQAIgHANAAQAMAAAKAFIgFAMQgIgFgKAAQgFAAgEADQgEAEAAAFQAAAFAEADQADADAJADQAWAIAAARQAAAMgIAHQgJAHgOAAQgNAAgLgGg");
	this.shape_15.setTransform(492.8075,149.2777);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#606061").s().p("AgHA8IAAhVIAPAAIAABVgAgGgrQgDgCAAgEQAAgKAJAAQAKAAAAAKQAAAJgKAAQgDAAgDgDg");
	this.shape_16.setTransform(487.1824,147.5777);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#606061").s().p("AgVAhQgMgNAAgTQAAgUANgMQAMgNAUAAQAOAAAIAFIgDAMQgIgEgLAAQgNgBgJAKQgIAJAAANQAAAPAJAJQAIAJAMAAQAKgBAKgEIADAMQgLAFgOAAQgTAAgLgMg");
	this.shape_17.setTransform(481.2073,149.3027);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#606061").s().p("AAVAsIAAgxQAAgZgTAAQgHAAgGAFQgFAEgDAHQgBADAAAEIAAAzIgPAAIgBhVIANAAIABAOIABAAQAJgQASAAQAMAAAJAHQAKAKAAAUIAAAyg");
	this.shape_18.setTransform(472.1572,149.1777);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#606061").s().p("AgdAhQgMgMAAgUQAAgUANgNQALgMARAAQATAAAMAMQALAMAAAUQAAAWgOAMQgMALgQAAQgSAAgLgMgAgTgWQgGAKgBAMQAAAPAIAJQAHAJALAAQALAAAHgJQAIgKAAgOQAAgMgGgJQgHgLgNAAQgMAAgHAKg");
	this.shape_19.setTransform(462.3071,149.2777);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#606061").s().p("AgcAuQgRgQAAgdQAAgbASgSQARgRAbAAQASAAALAFIgEANQgKgFgOAAQgVAAgMANQgNANAAAWQAAAXAMANQAMANAVAAQAOAAALgFIADAMQgLAGgUAAQgaAAgQgQg");
	this.shape_20.setTransform(452.4819,147.6027);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#606061").s().p("AgdA0QgLgMAAgUQAAgUALgNQALgMARAAQARAAAIANIAAAAIAAgzIAQAAIABB9IgOAAIgBgPIgBAAQgIARgUAAQgQAAgKgMgAgRgDQgHAIAAAPQAAAOAGAIQAHAKALAAQAIAAAHgFQAGgFACgJIABgHIAAgPIgBgHQgBgGgGgFQgGgGgJAAQgLAAgHAKg");
	this.shape_21.setTransform(438.1806,147.3777);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#606061").s().p("AAVAsIAAgxQABgZgVAAQgGAAgGAFQgFAEgCAHQgCADAAAEIAAAzIgQAAIAAhVIANAAIACAOIAAAAQAIgQAUAAQALAAAJAHQAKAKAAAUIAAAyg");
	this.shape_22.setTransform(428.4565,149.1777);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#606061").s().p("AgbAlQgHgHABgKQAAgfAyAAIAAgBQAAgUgSAAQgMAAgKAGIgEgKQALgIARAAQAgAAAAAjIAAAgQAAALABAJIgNAAIgCgLIAAAAQgKANgQAAQgNAAgHgIgAgSATQAAAPAPAAQAPAAAFgPIABgFIAAgOIgDAAQghAAAAATg");
	this.shape_23.setTransform(418.9564,149.2777);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#606061").s().p("AgjAyQAIgDAGgFQAJgHAEgKIABgEIgBgEIgghPIASAAIASAzIAFARIAAAAIAXhEIARAAIgYA+QgQApgNAMQgKAJgJABg");
	this.shape_24.setTransform(406.9312,151.2527);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#606061").s().p("AgFAyQgGgHAAgQIAAguIgOAAIAAgMIAOAAIAAgUIAOgFIAAAZIAXAAIAAAMIgXAAIAAAtQAAASAMgBIAJgBIABAMQgFADgJAAQgLgBgFgGg");
	this.shape_25.setTransform(399.5311,148.1527);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#606061").s().p("AgHA8IAAhVIAPAAIAABVgAgGgrQgDgCAAgEQAAgEADgDQADgDADAAQAKAAAAAKQAAAEgDACQgCADgFAAQgDAAgDgDg");
	this.shape_26.setTransform(394.5346,147.5777);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#606061").s().p("AgUAsIAAhVIANAAIAAARIACAAQAFgTARAAIAFAAIAAAPIgGAAQgHAAgGAFQgFAGgBAJIgBAHIAAAtg");
	this.shape_27.setTransform(389.956,149.1777);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#606061").s().p("AgbAlQgGgHAAgKQAAgPANgHQAOgJAXAAIAAgBQAAgUgSAAQgMAAgLAGIgDgKQALgIAQAAQAhAAAAAjIAAAgQAAALABAJIgOAAIgBgLIgBAAQgIANgRAAQgNAAgHgIgAgSATQAAAHAFAEQAEAEAGAAQAPAAAFgPIABgFIAAgOIgEAAQggAAAAATg");
	this.shape_28.setTransform(382.0308,149.2777);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#606061").s().p("AgHA/IAAh9IAPAAIAAB9g");
	this.shape_29.setTransform(375.8307,147.2776);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#606061").s().p("AgbAuQgRgQgBgdQAAgbASgSQARgRAbAAQATAAAJAFIgDANQgKgFgOAAQgVAAgNANQgNANABAWQgBAXAMANQANANAVAAQAPAAALgFIACAMQgKAGgVAAQgaAAgPgQg");
	this.shape_30.setTransform(368.6056,147.6027);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#606061").s().p("AARgUIAKgBQgHASgEAXIgQACQAHgaAKgQgAgJgUIAJgBQgGASgDAXIgRACQAHgaAKgQg");
	this.shape_31.setTransform(360.6305,143.5776);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#606061").s().p("AgUAsIgBhVIAOAAIABARIAAAAQADgJAGgFQAGgFAIAAIAFAAIAAAPIgGAAQgIAAgGAFQgEAGgCAJIgBAHIAAAtg");
	this.shape_32.setTransform(352.6304,149.1777);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#606061").s().p("AgdAhQgMgMAAgUQAAgUAMgNQAMgMASAAQASAAAMAMQALAMAAAUQAAAWgNAMQgMALgRAAQgSAAgLgMgAgTgWQgGAKAAAMQAAAPAHAJQAIAJAKAAQALAAAIgJQAHgKAAgOQAAgMgGgJQgHgLgNAAQgMAAgHAKg");
	this.shape_33.setTransform(344.3303,149.2777);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#606061").s().p("AgPBAIAAhJIgMAAIAAgMIAMAAIAAgEQAAgVAKgJQAHgIANAAQAIAAAFACIgCAMQgFgCgFAAQgQAAAAAZIAAAFIAUAAIAAAMIgUAAIAABJg");
	this.shape_34.setTransform(337.5302,147.1776);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#606061").s().p("AgbAnIAEgMQAJAGALAAQAQAAAAgMQAAgKgPgGQgXgHAAgRQAAgLAIgHQAIgHANAAQAMAAAJAFIgEAMQgIgFgJAAQgOAAAAAMQAAAFAEADQAEADAIADQAWAIAAARQAAAMgIAHQgJAHgOAAQgOAAgKgGg");
	this.shape_35.setTransform(327.13,149.2777);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#606061").s().p("AAVAsIAAgxQAAgZgUAAQgGAAgGAFQgFAEgDAHIgBAHIAAAzIgPAAIgBhVIAOAAIABAOIAAAAQAIgQAUAAQALAAAJAHQAKAKAAAUIAAAyg");
	this.shape_36.setTransform(318.6299,149.1777);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#606061").s().p("AgdAhQgMgMAAgUQAAgUAMgNQAMgMASAAQASAAAMAMQALAMAAAUQAAAWgNAMQgMALgRAAQgSAAgLgMgAgTgWQgGAKAAAMQAAAPAHAJQAIAJAKAAQAMAAAHgJQAHgKAAgOQAAgMgGgJQgHgLgNAAQgMAAgHAKg");
	this.shape_37.setTransform(308.7797,149.2777);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#606061").s().p("AgHA8IAAhVIAPAAIAABVgAgGgrQgDgCAAgEQAAgEADgDQADgDADAAQAKAAAAAKQAAAEgDACQgCADgFAAQgDAAgDgDg");
	this.shape_38.setTransform(301.7832,147.5777);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#606061").s().p("AgGAyQgFgHAAgQIAAguIgOAAIAAgMIAOAAIAAgUIAOgFIAAAZIAXAAIAAAMIgXAAIAAAtQAAASAMgBIAJgBIABAMQgGADgJAAQgKgBgGgGg");
	this.shape_39.setTransform(296.7045,148.1527);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#606061").s().p("AgoA+IAAh5IAOAAIAAAPIABAAQAKgRATAAQAQAAALAMQAKANAAATQAAAVgMANQgLAMgQAAQgSAAgIgOIAAAAIAAAvgAgOgrQgHAGgCAIIgBAHIAAAPIABAGQACAHAGAFQAHAFAIAAQALAAAHgJQAHgIAAgPQAAgOgGgJQgHgKgMAAQgIABgGAFg");
	this.shape_40.setTransform(289.0294,150.9527);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#606061").s().p("AgnAtQgPgRAAgbQAAgbAQgSQAQgRAXAAQAYAAAPARQAPAQAAAbQAAAegRARQgOAQgYAAQgYAAgPgRgAgcgiQgKAOABAUQAAAVAKAOQAKAPARAAQASgBALgPQAKgNgBgVQAAgTgJgOQgKgPgTAAQgRgBgLAPg");
	this.shape_41.setTransform(277.5042,147.6027);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#606061").s().p("AgwAFIAAgIIBhAAIAAAIg");
	this.shape_42.setTransform(288.2044,125.9023);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#606061").s().p("AgaAhQgLgMAAgTQAAgUALgNQALgNARAAQATAAAKAOQAHALAAAQIAAAGIg8AAQAAAPAJAIQAIAHALAAQAOAAAKgFIADAMQgMAFgRAAQgSAAgMgMgAgPgYQgGAHgBAKIAtAAQAAgKgEgHQgGgJgMAAQgKAAgGAJg");
	this.shape_43.setTransform(450.4819,119.7772);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#606061").s().p("AgkAGIAAgxIAQAAIAAAvQAAAbATAAQAHAAAGgEQAFgEACgGQABgDAAgFIAAg0IAQAAIABBVIgOAAIgBgOQgLAQgRAAQgeAAAAgmg");
	this.shape_44.setTransform(441.0817,119.8772);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#606061").s().p("AgbAnIADgMQAKAGALAAQAQAAAAgMQAAgLgPgFQgXgHAAgRQAAgLAIgHQAIgHANAAQAMAAAJAFIgEAMQgIgFgKAAQgFAAgEADQgEAEAAAEQAAAGAEADQADADAIADQAXAIAAARQAAAMgIAHQgJAHgOAAQgOAAgKgGg");
	this.shape_45.setTransform(432.6316,119.7772);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#606061").s().p("AgbAnIAEgMQAJAGALAAQAQAAAAgMQAAgLgPgFQgXgHAAgRQAAgLAIgHQAJgHAMAAQANAAAIAFIgEAMQgHgFgKAAQgGAAgEADQgEAEAAAEQAAAGAEADQAEADAIADQAWAIAAARQAAAMgIAHQgJAHgOAAQgOAAgKgGg");
	this.shape_46.setTransform(425.5315,119.7772);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#606061").s().p("AgHA8IAAhVIAPAAIAABVgAgGgrQgDgCAAgEQAAgKAJAAQAEAAADADQADADAAAEQAAAEgDACQgDADgEAAQgDAAgDgDg");
	this.shape_47.setTransform(419.9314,118.0772);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#606061").s().p("AgbAnIAEgMQAJAGALAAQAQAAAAgMQAAgLgPgFQgXgHAAgRQAAgLAIgHQAIgHANAAQAMAAAJAFIgEAMQgIgFgJAAQgGAAgEADQgEADAAAFQAAAGAEADQADADAJADQAWAIAAARQAAAMgIAHQgJAHgOAAQgOAAgKgGg");
	this.shape_48.setTransform(410.5313,119.7772);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#606061").s().p("AgHA8IAAhVIAPAAIAABVgAgGgrQgDgCAAgEQAAgEADgDQADgDADAAQAKAAAAAKQAAAEgDACQgCADgFAAQgDAAgDgDg");
	this.shape_49.setTransform(404.8847,118.0772);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#606061").s().p("AAVA/IAAgxQAAgZgUAAQgGAAgGAFQgGAEgCAGIgBAHIAAA0IgQAAIAAh9IAQAAIAAA1QAEgGAIgFQAIgEAHAAQALAAAIAHQALAKAAATIAAAzg");
	this.shape_50.setTransform(397.8811,117.7772);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#606061").s().p("AgFAxQgGgFAAgRIAAguIgOAAIAAgMIAOAAIAAgUIAOgFIAAAZIAXAAIAAAMIgXAAIAAAuQAAAQAMAAIAJgBIABAMQgFACgJABQgLAAgFgIg");
	this.shape_51.setTransform(389.8809,118.6522);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#606061").s().p("AgUAsIgBhVIAOAAIABARIAAAAQADgJAGgFQAGgFAIAAIAFAAIAAAPIgGAAQgIAAgGAFQgEAGgCAJIAAA0g");
	this.shape_52.setTransform(380.7808,119.6772);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#606061").s().p("AgdAhQgMgMAAgUQAAgUAMgNQAMgMASAAQASAAAMAMQALAMAAAUQAAAWgNAMQgMALgRAAQgSAAgLgMgAgTgWQgGAKAAAMQAAAPAHAJQAIAJAKAAQALAAAIgJQAHgKAAgOQAAgMgGgJQgHgLgNAAQgMAAgHAKg");
	this.shape_53.setTransform(372.4807,119.7772);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#606061").s().p("AgPBAIAAhJIgMAAIAAgMIAMAAIAAgEQAAgUAKgKQAHgIANAAQAIAAAFACIgCAMQgFgCgFAAQgQAAAAAZIAAAFIAUAAIAAAMIgUAAIAABJg");
	this.shape_54.setTransform(365.6806,117.6772);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#606061").s().p("AARA/IgdgpIgIAJIAAAgIgPAAIAAh9IAPAAIAABOIABAAIAggmIATAAIghAiIAlAzg");
	this.shape_55.setTransform(355.3804,117.7772);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#606061").s().p("AgVAgQgMgLAAgVQAAgSANgNQAMgNAUAAQAOAAAIAFIgEALQgHgDgLAAQgNAAgIAJQgJAJAAANQABAOAIAKQAIAIAMAAQAKAAAKgEIADAMQgKAFgPAAQgTAAgLgNg");
	this.shape_56.setTransform(346.5553,119.8022);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#606061").s().p("AgaAhQgLgMAAgTQAAgUALgNQALgNARAAQAUAAAJAOQAHALAAAQIgBAGIg7AAQAAAPAJAIQAIAHAMAAQANAAAKgFIADAMQgMAFgQAAQgTAAgMgMgAgPgYQgGAHgBAKIAtAAQAAgKgEgHQgGgJgMAAQgKAAgGAJg");
	this.shape_57.setTransform(338.0052,119.7772);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#606061").s().p("AAVA/IAAgxQAAgZgUAAQgGAAgGAFQgFAEgDAGIgBAHIAAA0IgQAAIAAh9IAQAAIAAA1QAEgGAIgFQAIgEAHAAQALAAAIAHQALAKAAATIAAAzg");
	this.shape_58.setTransform(328.58,117.7772);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#606061").s().p("AgVAgQgMgLAAgVQAAgSAMgNQAOgNATAAQAPAAAHAFIgEALQgGgDgMAAQgNAAgIAJQgIAJAAANQAAAPAJAJQAHAIANAAQAJAAAKgEIADAMQgLAFgOAAQgSAAgMgNg");
	this.shape_59.setTransform(319.7049,119.8022);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#606061").s().p("AgFAxQgGgFAAgRIAAguIgNAAIAAgMIANAAIAAgUIAOgFIAAAZIAWAAIAAAMIgWAAIAAAuQAAAQAMAAIAJgBIABAMQgFACgJABQgLAAgFgIg");
	this.shape_60.setTransform(308.8047,118.6522);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#606061").s().p("AgCgTIAPgCQgHAbgIAPIgKABQAGgRAEgYg");
	this.shape_61.setTransform(304.3796,114.0521);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#606061").s().p("AAWAsIAAgxQAAgZgVAAQgGAAgGAFQgFAEgCAHQgBACAAAFIAAAzIgRAAIAAhVIAOAAIABAOIAAAAQAJgQATAAQALAAAIAHQALAKAAAUIAAAyg");
	this.shape_62.setTransform(298.0545,119.6772);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#606061").s().p("AgdAhQgMgMAAgUQAAgUAMgNQAMgMASAAQASAAAMAMQALAMAAAUQAAAWgOAMQgMALgQAAQgSAAgLgMgAgTgWQgGAKAAAMQAAAPAHAJQAHAJALAAQALAAAIgJQAHgKAAgOQAAgMgGgJQgHgLgNAAQgMAAgHAKg");
	this.shape_63.setTransform(288.2294,119.7772);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#606061").s().p("AgxA7IAAh1QAQgCASAAQAgAAAPAPQARAQABAbQgBAdgRARQgRARgjAAQgRAAgMgCgAghgvIAABfIAQABQAYAAANgOQANgNAAgYQABgVgNgNQgMgMgXAAIgTABg");
	this.shape_64.setTransform(277.6542,118.1022);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#606061").s().p("AgUAEIAAgHIApAAIAAAHg");
	this.shape_65.setTransform(273.4792,92.9768);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#606061").s().p("AgZAhQgMgMAAgUQAAgSALgNQALgOARAAQAUAAAJAPQAHALAAAPIgBAGIg7AAQAAAPAJAIQAIAHAMAAQANAAAKgFIADAMQgLAFgSAAQgSAAgLgMgAgPgYQgGAHgBAKIAtAAQAAgKgEgGQgGgJgMAAQgKgBgGAJg");
	this.shape_66.setTransform(358.1555,86.8517);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#606061").s().p("AgVAhQgMgMAAgUQAAgTANgNQANgNATAAQANAAAJAFIgEAMQgGgFgMABQgNAAgIAKQgIAIAAANQAAAPAJAJQAIAJAMAAQAKAAAJgFIADAMQgIAFgRAAQgSAAgMgMg");
	this.shape_67.setTransform(349.8553,86.8517);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#606061").s().p("AAVAsIAAgxQAAgZgUAAQgGAAgGAFQgGAEgCAHIgBAHIAAAzIgQAAIAAhVIAOAAIABAOQAJgQATAAQALAAAIAHQALAKAAAUIAAAyg");
	this.shape_68.setTransform(340.8302,86.7767);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#606061").s().p("AgnAtQgPgRAAgbQAAgbAQgSQAQgRAXAAQAYAAAPARQAPARAAAbQAAAdgRARQgOAQgYAAQgXAAgQgRgAgbghQgKAOAAAUQAAAUAKAOQALAOAQAAQASAAAKgOQALgOgBgVQAAgTgJgOQgLgPgRAAQgSAAgKAPg");
	this.shape_69.setTransform(329.705,85.1767);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#606061").s().p("AgaAhQgLgLAAgVQAAgSAKgNQAMgOASAAQATAAAJAPQAHALAAAPIAAAGIg8AAQAAAPAJAIQAIAHALAAQANAAAMgFIACAMQgLAFgRAAQgUAAgLgMgAgPgYQgGAHgBAKIAtAAQAAgKgFgGQgFgJgMAAQgKgBgGAJg");
	this.shape_70.setTransform(315.3548,86.8517);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#606061").s().p("AgUAsIAAg6IgBgbIAOAAIABARIABAAQACgJAGgFQAGgFAIAAIAFAAIAAAPIgFAAQgRAAgEAUIAAA0g");
	this.shape_71.setTransform(308.5797,86.7767);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#606061").s().p("AgdAhQgMgMAAgUQAAgUAMgNQAMgMASAAQASAAAMAMQALAMAAAUQAAAWgNAMQgMALgRAAQgRAAgMgMgAgTgWQgGAKAAAMQAAAPAHAJQAIAJAKAAQAMAAAHgJQAHgKAAgOQAAgMgGgJQgHgLgNAAQgMAAgHAKg");
	this.shape_72.setTransform(300.2796,86.8767);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#606061").s().p("AAWAsIAAgxQAAgZgUAAQgHAAgGAFQgFAEgDAHIgBAHIAAAzIgPAAIAAg+IgBgXIAOAAIABAOIAAAAQAIgQAUAAQALAAAJAHQAKAKAAAUIAAAyg");
	this.shape_73.setTransform(290.4294,86.7767);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#606061").s().p("AggA4IAEgMQALAHAPAAQAaAAAAgfIAAgJQgJAOgRAAQgQAAgLgMQgKgMAAgRQAAgVAMgNQALgMAQAAQARAAAJAPIABgNIANAAIAABJQAAAdgNALQgKAKgUAAQgSAAgLgHgAgQgoQgHAIAAAPQAAAOAGAHQAHAJALAAQAIAAAFgEQAHgEACgHQABgDAAgFIAAgQIgBgHQgFgQgRAAQgKAAgHAJg");
	this.shape_74.setTransform(280.3293,88.6268);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#606061").s().p("AgHA8IAAh3IAPAAIAAB3g");
	this.shape_75.setTransform(273.4792,85.1767);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#345699").s().p("AgbAhQgMgLAAgVQAAgSALgNQAMgOATAAQATAAAKAOQAIALAAARIgBAIIg5AAQABALAHAGQAIAGAKAAQANAAALgEIADAPQgMAFgSAAQgUAAgMgMgAgNgWQgEAGgBAIIAlAAQAAgIgDgGQgFgHgKAAQgIAAgGAHg");
	this.shape_76.setTransform(518.9829,21.4757);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#345699").s().p("AgiA5IAFgSQAKAHAPAAQAYAAAAgaIAAgIIgBAAQgHANgRAAQgPAAgLgMQgLgLAAgSQAAgVANgNQAKgMARAAQARAAAHANIABAAIABgLIATAAIgBBJQAAAcgNALQgMALgUAAQgUAAgLgGgAgNgmQgGAIAAANQAAAMAFAGQAGAIAJAAQAOAAAEgNIABgHIAAgOIgBgGQgEgOgOAAQgIAAgGAHg");
	this.shape_77.setTransform(509.0078,23.2508);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#345699").s().p("AgdAlQgHgHAAgLQAAgfAyAAIAAgCQAAgPgRAAQgOAAgJAHIgEgPQAMgHASgBQAkAAAAAlIAAAfIABAVIgTAAIgCgKIAAAAQgKAMgPgBQgNABgHgJgAgPARQAAAMANAAQAMAAAEgMIABgEIAAgMIgEAAQgaAAAAAQg");
	this.shape_78.setTransform(499.3826,21.5007);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#345699").s().p("AgdAkQgJgKAAgUIAAgyIAVAAIAAAvQABAXAQAAQAKABAGgMIABgHIAAg0IAVAAIABBXIgTAAIgBgOIAAAAQgJAPgSAAQgOAAgHgIg");
	this.shape_79.setTransform(490.0075,21.6007);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#345699").s().p("AgiA5IAFgSQAKAHAPAAQAYAAAAgaIAAgIQgJANgQAAQgPAAgLgMQgLgLAAgSQABgVALgNQAMgMAQAAQAQAAAIANIAAAAIABgLIAUAAIgBBJQAAAcgNALQgMALgVAAQgTAAgLgGgAgNgmQgGAIAAANQAAAMAFAGQAGAIAJAAQAOAAAEgNIABgHIAAgOIgBgGQgDgOgPAAQgIAAgGAHg");
	this.shape_80.setTransform(479.5573,23.2508);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#345699").s().p("AASAtIAAgwQAAgXgRAAQgLAAgFANIgBAHIAAAzIgWAAIgBhXIATAAIACAOIAAAAQAJgPASgBQANAAAIAIQAJALAAASIAAA0g");
	this.shape_81.setTransform(469.5572,21.4007);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#345699").s().p("AgdAlQgIgHAAgLQABgPAOgIQANgJAYABIAAgCQgBgPgQAAQgOAAgKAHIgEgPQAMgHASgBQAkAAAAAlIAAAfQAAAMABAJIgTAAIgCgKIAAAAQgJAMgQgBQgNABgHgJgAgOARQAAAMAMAAQAMAAAEgMIABgEIAAgMIgDAAQgaAAAAAQg");
	this.shape_82.setTransform(459.707,21.5007);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#345699").s().p("AgKBAIAAh+IAVAAIAAB+g");
	this.shape_83.setTransform(453.1069,19.5007);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#345699").s().p("AgbAhQgMgLAAgVQAAgSALgNQAMgOASAAQATAAALAOQAIALAAARIgBAIIg5AAQAAALAJAGQAGAGALAAQANAAALgEIADAPQgMAFgTAAQgTAAgMgMgAgNgWQgEAGgBAIIAlAAQAAgIgDgGQgFgHgKAAQgIAAgGAHg");
	this.shape_84.setTransform(442.5568,21.4757);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#345699").s().p("AgeAnIAEgQQAMAHAKAAQANAAAAgKQAAgHgNgGQgXgHAAgRQgBgMAKgHQAIgIAOAAQANAAAKAFIgEAPQgJgFgKAAQgKAAgBAKQABAEADACQADADAIADQAXAHAAASQAAANgJAHQgJAHgRAAQgPAAgLgGg");
	this.shape_85.setTransform(434.2066,21.4757);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#345699").s().p("AgKA+IAAhWIAVAAIAABWgAgIgoQgDgEAAgFQAAgFADgDQAEgEAEAAQAGAAADAEQADADAAAFQAAAMgMAAQgEAAgEgDg");
	this.shape_86.setTransform(428.1815,19.6757);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#345699").s().p("AgWAhQgMgMAAgUQAAgTANgNQANgNAWAAQAKAAALAEIgEAQQgIgDgJAAQgMAAgGAIQgIAIAAALQAAANAJAIQAGAHALAAQAIAAAKgDIACAQQgHAEgRAAQgUAAgMgMg");
	this.shape_87.setTransform(422.0064,21.4757);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#345699").s().p("AASAtIAAgwQAAgXgRAAQgLAAgFANIgBAHIAAAzIgWAAIgBhXIATAAIABAOIABAAQADgHAHgDQAIgGAJAAQANAAAIAIQAKALAAASIAAA0g");
	this.shape_88.setTransform(412.7813,21.4007);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#345699").s().p("AgeAiQgNgNAAgVQAAgTANgNQAMgNATAAQATAAAMANQAMAMAAAUQAAAVgOANQgMAMgSgBQgSABgMgMgAgPgTQgGAIABALQgBAMAHAJQAFAJAJgBQAKABAFgJQAHgIAAgNQAAgLgGgIQgFgJgLAAQgJAAgGAJg");
	this.shape_89.setTransform(402.6561,21.5007);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#345699").s().p("AgWAhQgMgMAAgUQAAgTANgNQANgNAWAAQALAAAKAEIgEAQQgIgDgJAAQgMAAgGAIQgHAIAAALQAAANAHAIQAHAHALAAQAHAAALgDIADAQQgJAEgQAAQgTAAgNgMg");
	this.shape_90.setTransform(393.881,21.4757);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#345699").s().p("AgiA5IAFgSQAKAHAPAAQAYAAAAgaIAAgIIAAAAQgJANgQAAQgQAAgKgMQgKgLAAgSQAAgVAMgNQALgMAQAAQAQAAAIANIABgLIATAAIAABJQAAAdgNAKQgMALgVAAQgTAAgLgGgAgNgmQgGAIAAANQAAAMAFAGQAGAIAJAAQAOAAAEgNIABgHIgBgUQgEgOgOAAQgIAAgGAHg");
	this.shape_91.setTransform(380.7308,23.2508);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#345699").s().p("AASAtIAAgwQAAgXgRAAQgLAAgFANIgBAHIAAAzIgWAAIgBhXIATAAIACAOIAAAAQADgHAHgDQAIgGAJAAQANAAAIAIQAKALAAASIAAA0g");
	this.shape_92.setTransform(370.7307,21.4007);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#345699").s().p("AgKA+IAAhWIAVAAIAABWgAgIgoQgEgEABgFQgBgFAEgDQADgEAFAAQAFAAAEAEQADADAAAFQAAAFgDAEQgEADgFAAQgFAAgDgDg");
	this.shape_93.setTransform(363.3774,19.6757);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#345699").s().p("AgeAnIAEgQQAMAHALAAQANAAgBgKQABgHgNgGQgYgHAAgRQgBgMAKgHQAIgIAPAAQAMAAAKAFIgEAPQgJgFgJAAQgLAAgBAKQABAGAOAGQAXAHAAASQAAANgJAHQgKAHgPAAQgQAAgLgGg");
	this.shape_94.setTransform(357.3555,21.4757);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#345699").s().p("AgmAGIAAgyIAVAAIAAAvQAAAXARAAQAMABAEgMQABgCAAgFIAAg0IAWAAIABBXIgTAAIgCgOIAAAAQgKAPgRAAQgeABAAgng");
	this.shape_95.setTransform(348.5553,21.6007);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#345699").s().p("AgXAtIgBhXIATAAIABARIABAAQADgJAFgFQAHgEAHgBIAGABIAAAUIgHAAQgQAAgDAQIAAA0g");
	this.shape_96.setTransform(337.0301,21.4007);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#345699").s().p("AgbAhQgMgLAAgVQAAgSALgNQAMgOATAAQATAAAKAOQAIALAAARIgBAIIg5AAQABALAHAGQAIAGAKAAQANAAALgEIADAPQgMAFgSAAQgVAAgLgMgAgMgWQgFAGgBAIIAlAAQAAgIgDgGQgFgHgKAAQgIAAgFAHg");
	this.shape_97.setTransform(328.855,21.4757);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#345699").s().p("AgfA0QgLgNAAgTQAAgUAMgNQALgNAQAAQAQAAAHAMIABAAIAAgxIAWAAIAAB+IgTAAIgBgPIgBAAQgIARgTgBQgQAAgKgMgAgOAAQgGAHAAAMQAAAMAGAIQAGAHAJAAQAPAAAEgPIABgUIgBgFQgDgPgQAAQgJABgGAIg");
	this.shape_98.setTransform(318.8039,19.6007);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#345699").s().p("AgKA+IAAhWIAVAAIAABWgAgIgoQgDgEAAgFQAAgFADgDQAEgEAEAAQAFAAAEAEQADADAAAFQAAAFgDAEQgEADgFAAQgFAAgDgDg");
	this.shape_99.setTransform(311.5798,19.6757);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#345699").s().p("AgeAnIAEgQQALAHAMAAQANAAAAgKQAAgHgOgGQgYgHAAgRQAAgMAJgHQAJgIAOAAQANAAAKAFIgEAPQgJgFgJAAQgMAAAAAKQAAAGAPAGQAXAHAAASQAAANgJAHQgKAHgQAAQgPAAgLgGg");
	this.shape_100.setTransform(305.5797,21.4757);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#345699").s().p("AASAtIAAgwQAAgXgRAAQgLAAgFANIgBAHIAAAzIgWAAIgBhXIATAAIABAOIABAAQAIgPATgBQANAAAIAIQAKALAAASIAAA0g");
	this.shape_101.setTransform(296.7295,21.4007);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#345699").s().p("AgfAiQgMgNAAgVQAAgTAMgNQANgNATAAQATAAAMANQAMAMAAAUQAAAVgOANQgNAMgRgBQgTABgMgMgAgQgTQgEAIAAALQAAAMAFAJQAHAJAIgBQAJABAHgJQAFgJAAgMQAAgLgEgIQgGgJgLAAQgJAAgHAJg");
	this.shape_102.setTransform(286.6044,21.5007);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#345699").s().p("AgdAtQgRgPAAgdQAAgcATgRQARgRAcAAQATAAAKAFIgFASQgKgFgOAAQgSAAgLAMQgMAMAAATQAAAUALAMQAMAMASAAQANAAALgEIAEARQgKAFgVAAQgcAAgQgRg");
	this.shape_103.setTransform(276.6792,19.8007);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#E0E0E0").s().p("A5tCQIAAkfMAzbAAAIAAEfg");
	this.shape_104.setTransform(398.1561,18.9757);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#4A74BD").s().p("AgMAKIAAgTIAZAAIAAATg");
	this.shape_105.setTransform(254.4039,182.5032);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#4A74BD").s().p("AgMAKIAAgTIAZAAIAAATg");
	this.shape_106.setTransform(254.4039,179.8031);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#4A74BD").s().p("AgMAXIAAgtIAZAAIAAAtg");
	this.shape_107.setTransform(254.4039,175.7781);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AhlAFIAAgJIDLAAIAAAJg");
	this.shape_108.setTransform(247.9538,171.953);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AhqBhIAAjBIDVAAIAADBgAhgBXIDBAAIAAisIjBAAg");
	this.shape_109.setTransform(247.9538,177.9281);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#3B67B7").s().p("AgFBMIAAiXIAMAAIAACXg");
	this.shape_110.setTransform(251.3538,179.5281);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#F4F9F8").s().p("AhlBcIAAi3IDLAAIAAC3g");
	this.shape_111.setTransform(247.9538,177.9281);

	this.instance = new lib.Path_1();
	this.instance.setTransform(398.1,100.65,1,1,0,0,0,202.6,127);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.047)",-14,-7,22);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#F0F0F0").s().p("A6QPoIAA/PMA0hAAAIAAfPg");
	this.shape_112.setTransform(398.4061,101.527);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#C58C55").s().p("AgVAGIAAgLIArAAIAAALg");
	this.shape_113.setTransform(25.1504,25.2258);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#C58C55").s().p("AgVAGIAAgLIArAAIAAALg");
	this.shape_114.setTransform(19.8003,25.2258);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#C58C55").s().p("AgVAGIAAgLIArAAIAAALg");
	this.shape_115.setTransform(14.4502,25.2258);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#C58C55").s().p("AgVAGIAAgLIArAAIAAALg");
	this.shape_116.setTransform(9.0751,25.2258);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#0F1419").s().p("AgQAaQgKgKAAgPQAAgPAKgLQAKgKAQAAQALAAAGAEIgDAJQgGgDgIAAQgLAAgGAIQgHAHAAAKQAAAMAHAHQAHAHAKAAQAGAAAJgEIACAKQgJAEgLAAQgOAAgJgKg");
	this.shape_117.setTransform(24.1504,18.9757);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#0F1419").s().p("AgUAmIAAAAIgBAMIgLAAIABhkIAMAAIAAArIABAAQAHgMAPAAQANAAAIAJQAIAKAAAOQAAASgKAKQgJAJgMAAQgPAAgHgNgAgKgGQgGAEgCAHIgBAEIAAANIABAEQAEAPAOAAQAJAAAGgHQAFgHAAgMQAAgLgFgGQgFgIgKAAQgFAAgFAEg");
	this.shape_118.setTransform(17.0766,17.4507);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#0F1419").s().p("AgVAeQgFgGgBgIQAAgZApAAIAAgBQAAgQgPAAQgKAAgIAFIgCgIQAIgGANAAQAaAAAAAcIAAAZQAAAJABAHIgLAAIgBgJIAAAAQgIALgMAAQgKAAgGgGgAgOAPQAAALAMAAQALAAAFgLIAAgEIAAgLIgDAAQgZAAAAAPg");
	this.shape_119.setTransform(9.2501,18.9757);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#345699").s().p("AgaAlIAEgLQAJAFAKAAQAPAAAAgMQAAgJgOgGQgVgFAAgQQAAgKAHgIQAIgHAMAAQALAAAJAGIgEALQgIgFgJgBQgFAAgEAEQgDADAAAFQAAAEAEAEQADADAHACQAWAIAAAQQAAALgIAHQgJAGgNABQgOAAgJgGg");
	this.shape_120.setTransform(199.228,21.7507);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#345699").s().p("AgaAlIAEgLQAJAFALAAQAPAAAAgMQAAgJgPgGQgVgGAAgPQAAgKAHgIQAIgHAMAAQALAAAJAGIgEALQgHgFgJgBQgNAAAAAMQAAAEAEAEQADADAHACQAWAIAAAQQAAALgIAHQgIAGgOABQgNAAgKgGg");
	this.shape_121.setTransform(192.5279,21.7507);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#345699").s().p("AgYAfQgLgLAAgTQAAgRAKgMQALgNAQgBQASAAAJAOQAHALAAAOIgBAGIg4AAQAAAOAJAIQAHAGALAAQAMAAALgEIACAKQgLAFgQABQgSAAgKgMgAgOgXQgGAHgBAJIArAAQAAgJgEgHQgGgIgLAAQgJAAgGAIg");
	this.shape_122.setTransform(185.0278,21.7507);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#345699").s().p("AAUAqIAAguQABgYgUAAQgOAAgFAPIgBAHIAAAwIgPAAIAAhRIANAAIABAOIABAAQAHgQATAAQAKAAAIAHQAKAJAAATIAAAwg");
	this.shape_123.setTransform(176.1027,21.6757);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#345699").s().p("AgZAfQgKgLAAgTQAAgRAKgMQALgNAQgBQASAAAJAOQAHALAAAOIAAAGIg5AAQAAAOAJAIQAHAGALAAQALAAALgEIADAKQgKAFgRABQgSAAgLgMgAgPgXQgEAHgCAJIAqAAQAAgJgDgHQgGgIgLAAQgJAAgHAIg");
	this.shape_124.setTransform(167.2526,21.7507);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#345699").s().p("AgaAlIAEgLQAJAFALAAQAOAAAAgMQAAgJgOgGQgVgGAAgPQAAgKAHgIQAIgHAMAAQALAAAJAGIgEALQgIgFgJgBQgFAAgEAEQgDADAAAFQAAAEAEAEQADADAHACQAWAIAAAQQAAALgIAHQgIAGgOABQgNAAgKgGg");
	this.shape_125.setTransform(159.6774,21.7507);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#345699").s().p("AgGA5IAAhRIANAAIAABRgAgIguQAAgEACgDQADgDADAAQAJAAAAAKQAAAJgJAAQgIAAAAgJg");
	this.shape_126.setTransform(154.3774,20.1507);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#345699").s().p("AgUAfQgLgLAAgTQAAgSAMgMQAMgNATAAQALABAJAEIgDAMQgHgEgKAAQgNAAgIAJQgHAIAAAMQAAAOAIAIQAIAIALAAQAKAAAIgDIADALQgJAFgPAAQgRAAgLgMg");
	this.shape_127.setTransform(148.7273,21.7507);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#345699").s().p("AAUAqIAAguQAAgYgTAAQgOAAgFAPIgBAHIAAAwIgPAAIAAhRIANAAIABAOQAIgQASAAQALAAAIAHQAKAJAAATIAAAwg");
	this.shape_128.setTransform(140.2021,21.6757);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#345699").s().p("AgbAfQgMgLAAgTQAAgTAMgMQALgMAQAAQASAAALAMQALAMAAASQAAAUgNANQgLAJgQABQgRAAgKgMgAgSgUQgGAIAAAMQAAAOAHAIQAHAJAKAAQAKAAAHgJQAHgIAAgOQAAgLgFgJQgHgLgMAAQgLAAgHALg");
	this.shape_129.setTransform(130.927,21.7507);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#345699").s().p("AgaAsQgQgQAAgbQAAgaAQgQQARgQAZAAQARAAAKAEIgDANQgLgFgMAAQgTAAgMAMQgNANAAAUQAAAWAMAMQALAMAUAAQAPAAAJgEIADALQgJAGgVAAQgYAAgPgPg");
	this.shape_130.setTransform(121.6269,20.1507);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#345699").s().p("AgbAxQgKgMAAgSQgBgTALgMQALgMAPAAQARAAAHANIAAAAIAAgxIAPAAIABB3IgOAAIAAgOIgBAAQgHAQgUAAQgPAAgJgMgAgQgDQgGAIAAANQAAAOAGAHQAGAJALAAQAHABAGgFQAGgFACgIIABgGIAAgPIgBgGQgBgGgGgFQgGgFgIAAQgKAAgHAJg");
	this.shape_131.setTransform(108.1506,19.9507);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#345699").s().p("AAUAqIAAguQABgYgUAAQgFAAgGAEQgFAEgCAHIgBAHIAAAwIgPAAIgBhRIAOAAIAAAOIABAAQAHgQATAAQAKAAAIAHQAKAJAAATIAAAwg");
	this.shape_132.setTransform(98.9515,21.6757);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#345699").s().p("AgaAkQgFgHgBgKQAAgdAxAAIAAgBQAAgUgSAAQgLABgLAFIgDgJQALgIAPAAQAfABAAAhIAAAdQAAAMACAIIgOAAIgCgLIAAAAQgIANgQAAQgLgBgIgGgAgRASQAAAGAEAEQAEAEAGAAQAOAAAFgOIABgFIAAgNIgEAAQgeAAAAASg");
	this.shape_133.setTransform(90.0514,21.7507);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#345699").s().p("AghAvQAHgCAGgFQAIgHAFgKIABgDIgBgEIgehKIAQAAIAWA/IAAAAIAGgQIAQgvIAPAAIgWA6QgPAngMALQgJAIgJABg");
	this.shape_134.setTransform(78.6762,23.6258);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#345699").s().p("AgFAvQgFgGAAgPIAAgsIgNAAIAAgLIANAAIAAgTIANgEIAAAXIAVAAIAAALIgVAAIAAArQAAAQALAAIAJgBIAAALQgFACgIAAQgKAAgFgGg");
	this.shape_135.setTransform(71.7011,20.6757);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#345699").s().p("AgHA5IAAhRIAOAAIAABRgAgIguQAAgKAIAAQAJAAAAAKQAAADgDADQgCACgEABQgIAAAAgJg");
	this.shape_136.setTransform(67.0046,20.1507);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#345699").s().p("AgTAqIAAhRIAMAAIABAQIABAAQACgIAGgFQAGgFAHAAIAEABIAAAOIgFgBQgPAAgEATIAAAyg");
	this.shape_137.setTransform(62.676,21.6757);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#345699").s().p("AgZAkQgGgHgBgKQAAgdAxAAIAAgBQgBgUgRAAQgLABgLAFIgCgJQALgIAOAAQAfABAAAhIAAAdQAAAMABAIIgNAAIgBgLIgBAAQgIANgPAAQgMgBgHgGgAgRASQAAAGAEAEQAEAEAGAAQAOAAAFgOIABgFIAAgNIgEAAQgeAAAAASg");
	this.shape_138.setTransform(55.2008,21.7507);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#345699").s().p("AgHA8IAAh3IAPAAIAAB3g");
	this.shape_139.setTransform(49.3508,19.8757);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#345699").s().p("AgaAsQgQgQAAgbQAAgaAQgQQARgQAZAAQARAAAKAEIgDANQgKgFgNAAQgTAAgMAMQgNANAAAUQAAAWAMAMQALAMAUAAQAQAAAIgEIADALQgJAGgVAAQgYAAgPgPg");
	this.shape_140.setTransform(42.5256,20.1507);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#6C6C6C").s().p("AgZgxIA0AvIg0A0g");
	this.shape_141.setTransform(216.3033,20.8507);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("Ax3CdIAAk5MAjvAAAIAAE5g");
	this.shape_142.setTransform(116.2268,18.9757);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#F0F0F0").s().p("AyPCxIAAlhMAkfAAAIAAFhg");
	this.shape_143.setTransform(116.7768,19.2757);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.instance},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgPAVQgGgIAAgNQABgLAFgIQAFgJAKAAQAKAAAHAJQAEAIAAALQABANgHAIQgFAIgKAAQgJAAgGgIg");
	this.shape_144.setTransform(294.3015,51.8262);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgPAVQgFgIgBgNQAAgLAGgIQAFgJAKAAQALAAAFAJQAGAIAAALQAAANgHAIQgFAIgKAAQgJAAgGgIg");
	this.shape_145.setTransform(284.2013,51.8262);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#606061").s().p("AgrAEIAAgIIBYAAIAAAIg");
	this.shape_146.setTransform(279.0012,184.9532);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#606061").s().p("AgaAhQgLgMAAgUQAAgSALgNQALgOARAAQATAAAKAPQAHAKAAAQIAAAGIg8AAQAAAPAJAIQAIAHAMAAQANAAAKgFIADAMQgMAFgRAAQgSAAgMgMgAgPgZQgGAHgBAKIAtAAQAAgJgEgHQgGgJgMAAQgKAAgGAIg");
	this.shape_147.setTransform(339.5271,178.8532);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#606061").s().p("AgUAsIgBhWIAOAAIABARIAAAAQAGgSARAAIAFAAIAAAPIgGAAQgIAAgGAFQgEAGgCAJIAAA0g");
	this.shape_148.setTransform(332.777,178.7532);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#606061").s().p("AgdAhQgMgMAAgVQAAgTAMgNQAMgMASAAQASAAAMANQALALAAAUQAAAWgNAMQgMALgRAAQgSAAgLgMgAgTgWQgGAKAAAMQAAAPAHAJQAIAKAKAAQALAAAIgKQAHgJAAgPQAAgMgGgJQgHgMgNAAQgMAAgHALg");
	this.shape_149.setTransform(324.4769,178.8532);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#606061").s().p("AAvA8IgGhoIAAAAQgHAXgIAWIgWA7IgKAAIgUg6QgLgfgDgPIAAAAIgFBoIgPAAIAIh3IAUAAIAUA6IAMAoIAAAAIAMgoIAWg6IAUAAIAIB3g");
	this.shape_150.setTransform(312.3017,177.1531);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#606061").s().p("AgaAhQgLgMAAgUQAAgSALgNQALgOASAAQASAAAKAPQAHAKAAAQIAAAGIg8AAQAAAPAJAIQAHAHAMAAQANAAALgFIADAMQgMAFgRAAQgSAAgMgMgAgPgZQgGAHgBAKIAtAAQAAgKgEgGQgGgJgMAAQgKAAgGAIg");
	this.shape_151.setTransform(296.9015,178.8532);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#606061").s().p("AgaAhQgLgMAAgUQAAgSAKgNQAMgOARAAQATAAAKAPQAHAKAAAQIgBAGIg7AAQAAAPAJAIQAIAHAMAAQANAAALgFIACAMQgMAFgQAAQgTAAgMgMgAgPgZQgGAHgBAKIAtAAQAAgKgEgGQgGgJgMAAQgKAAgGAIg");
	this.shape_152.setTransform(287.9514,178.8532);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#606061").s().p("AgkA2IAFgNQAMAIAQAAQAKAAAHgGQAHgFgBgKQAAgPgVgIQgggKAAgXQAAgOALgKQAKgJARAAQARAAAKAGIgFAMQgMgFgKAAQgLAAgGAFQgFAFAAAIQAAAIAGAFQAEAFANAFQAQAGAGAHQAJAIgBANQAAAPgKAJQgMALgSAAQgUAAgMgIg");
	this.shape_153.setTransform(278.9512,177.1531);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#606061").s().p("AgyAEIAAgIIBlAAIAAAIg");
	this.shape_154.setTransform(291.9264,153.9028);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#606061").s().p("AALgTIAQgCQgIAagJAPIgKACQAGgRAFgYgAgPgTIAQgCQgIAcgIANIgKACQAGgRAEgYg");
	this.shape_155.setTransform(544.4053,142.0776);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#606061").s().p("AgbAnIAEgMQAJAGALAAQAQAAAAgMQAAgKgPgGQgXgHAAgRQAAgLAIgHQAIgHANAAQAMAAAJAFIgEAMQgIgFgJAAQgGAAgEADQgEAEAAAFQAAAFAEADQAEADAIADQAWAIAAARQAAAMgIAHQgJAHgOAAQgOAAgKgGg");
	this.shape_156.setTransform(537.9302,147.7777);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#606061").s().p("AgbAnIADgMQAKAGALAAQAQAAAAgMQAAgKgPgGQgXgHAAgRQAAgLAIgHQAIgHANAAQAMAAAJAFIgEAMQgIgFgKAAQgNAAAAAMQAAAFAEADQADADAIADQAXAIAAARQAAAMgIAHQgJAHgOAAQgOAAgKgGg");
	this.shape_157.setTransform(530.8801,147.7777);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#606061").s().p("AgaAhQgLgMAAgTQAAgUALgNQALgNARAAQATAAAKAOQAHALAAAQIAAAGIg8AAQAAAPAJAIQAIAHAMAAQANAAAKgFIADAMQgMAFgRAAQgSAAgMgMgAgPgYQgGAHgBAKIAtAAQAAgKgEgHQgGgJgMAAQgKAAgGAJg");
	this.shape_158.setTransform(522.8799,147.7777);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#606061").s().p("AAVAsIAAgxQAAgZgUAAQgGAAgGAFQgFAEgDAHIgBAHIAAAzIgPAAIgBhVIAOAAIABAOIAAAAQAIgQAUAAQALAAAJAHQAKAKAAAUIAAAyg");
	this.shape_159.setTransform(513.4298,147.6777);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#606061").s().p("AgaAhQgLgMAAgTQAAgUALgNQALgNARAAQATAAAKAOQAHALAAAQIAAAGIg8AAQAAAPAJAIQAIAHAMAAQANAAALgFIACAMQgMAFgRAAQgSAAgMgMgAgPgYQgGAHgBAKIAtAAQAAgKgEgHQgGgJgMAAQgKAAgGAJg");
	this.shape_160.setTransform(504.0297,147.7777);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#606061").s().p("AgbAnIADgMQALAGAKAAQAQAAAAgMQAAgKgPgGQgXgHAAgRQAAgLAIgHQAJgHAMAAQANAAAJAFIgFAMQgIgFgKAAQgFAAgEADQgEAEAAAFQAAAFAEADQAEADAHADQAXAIAAARQAAAMgIAHQgJAHgOAAQgOAAgKgGg");
	this.shape_161.setTransform(496.0045,147.7777);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#606061").s().p("AgHA8IAAhVIAPAAIAABVgAgGgrQgDgCAAgEQAAgEADgDQADgDADAAQAKAAAAAKQAAAJgKAAQgDAAgDgDg");
	this.shape_162.setTransform(490.3795,146.0777);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#606061").s().p("AgVAhQgMgNAAgTQAAgUANgMQAMgNAUAAQAOAAAIAFIgEAMQgHgEgLAAQgNgBgIAKQgJAJABANQAAAPAIAJQAIAJAMAAQAKgBAKgEIADAMQgKAFgPAAQgSAAgMgMg");
	this.shape_163.setTransform(484.4044,147.8027);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#606061").s().p("AAWAsIAAgxQgBgZgTAAQgHAAgGAFQgGAEgCAHQgBADAAAEIAAAzIgQAAIAAhVIAOAAIABAOIAAAAQAJgQASAAQAMAAAIAHQALAKAAAUIAAAyg");
	this.shape_164.setTransform(475.3542,147.6777);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#606061").s().p("AgdAhQgMgMAAgUQAAgUANgNQALgMASAAQASAAALAMQAMAMAAAUQAAAWgOAMQgLALgRAAQgRAAgMgMgAgTgWQgGAKgBAMQABAPAHAJQAIAJAKAAQALAAAHgJQAIgKAAgOQAAgMgGgJQgHgLgMAAQgNAAgHAKg");
	this.shape_165.setTransform(465.5041,147.7777);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#606061").s().p("AgcAuQgRgQAAgdQAAgbASgSQARgRAbAAQASAAALAFIgEANQgKgFgOAAQgVAAgMANQgNANAAAWQAAAXAMANQAMANAVAAQAOAAALgFIADAMQgLAGgUAAQgaAAgQgQg");
	this.shape_166.setTransform(455.6789,146.1027);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#606061").s().p("AgdA0QgLgMAAgUQAAgUALgNQALgMARAAQARAAAIANIAAAAIAAgzIAQAAIABB9IgOAAIgBgPIgBAAQgIARgUAAQgQAAgKgMgAgRgDQgHAIAAAPQAAAOAGAIQAHAKALAAQAIAAAHgFQAGgFACgJIABgHIAAgPIgBgHQgBgGgGgFQgGgGgJAAQgLAAgHAKg");
	this.shape_167.setTransform(441.3777,145.8777);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#606061").s().p("AAVAsIAAgxQAAgZgUAAQgGAAgGAFQgFAEgCAHQgCADAAAEIAAAzIgPAAIgBhVIANAAIABAOIABAAQAIgQAUAAQALAAAJAHQAKAKAAAUIAAAyg");
	this.shape_168.setTransform(431.6536,147.6777);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#606061").s().p("AgbAlQgHgHAAgKQAAgfAzAAIAAgBQAAgUgSAAQgMAAgKAGIgEgKQALgIAQAAQAhAAAAAjIAAAgQAAALABAJIgNAAIgCgLIgBAAQgJANgQAAQgNAAgHgIgAgSATQAAAPAPAAQAPAAAFgPIABgFIAAgOIgDAAQghAAAAATg");
	this.shape_169.setTransform(422.1534,147.7777);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#606061").s().p("AgjAyQAIgDAGgFQAJgHAEgKIABgEIgBgEIgghPIASAAIASAzIAFARIAAAAIAXhEIARAAIgYA+QgQApgNAMQgKAJgJABg");
	this.shape_170.setTransform(410.1282,149.7527);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#606061").s().p("AgFAyQgGgHAAgQIAAguIgOAAIAAgMIAOAAIAAgUIAOgFIAAAZIAXAAIAAAMIgXAAIAAAtQAAASAMgBIAJgBIABAMQgFADgJAAQgLgBgFgGg");
	this.shape_171.setTransform(402.7281,146.6527);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#606061").s().p("AgHA8IAAhVIAPAAIAABVgAgGgrQgDgCAAgEQAAgEADgDQADgDADAAQAKAAAAAKQAAAEgDACQgCADgFAAQgDAAgDgDg");
	this.shape_172.setTransform(397.7316,146.0777);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#606061").s().p("AgUAsIAAhVIANAAIAAARIABAAQAGgTARAAIAEAAIAAAPIgEAAQgJAAgGAFQgEAGgBAJIgCAHIAAAtg");
	this.shape_173.setTransform(393.153,147.6777);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#606061").s().p("AgbAlQgGgHAAgKQAAgPANgHQAOgJAXAAIAAgBQAAgUgSAAQgMAAgLAGIgDgKQALgIAQAAQAhAAAAAjIAAAgQAAALABAJIgOAAIgBgLIgBAAQgIANgRAAQgNAAgHgIgAgSATQAAAHAFAEQAEAEAGAAQAPAAAFgPIABgFIAAgOIgEAAQggAAAAATg");
	this.shape_174.setTransform(385.2278,147.7777);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#606061").s().p("AgHA/IAAh9IAPAAIAAB9g");
	this.shape_175.setTransform(379.0278,145.7776);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#606061").s().p("AgbAuQgSgQABgdQAAgbARgSQARgRAbAAQATAAAKAFIgEANQgKgFgOAAQgVAAgNANQgMANAAAWQAAAXAMANQAMANAVAAQAOAAAMgFIADAMQgMAGgUAAQgZAAgQgQg");
	this.shape_176.setTransform(371.8026,146.1027);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#606061").s().p("AARgUIAKgBQgHASgEAXIgQACQAHgaAKgQgAgJgUIAJgBQgGASgDAXIgRACQAHgaAKgQg");
	this.shape_177.setTransform(363.8275,142.0776);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#606061").s().p("AgUAsIgBhVIAOAAIABARIAAAAQADgJAGgFQAGgFAIAAIAFAAIAAAPIgGAAQgIAAgGAFQgEAGgCAJIgBAHIAAAtg");
	this.shape_178.setTransform(355.8274,147.6777);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#606061").s().p("AgdAhQgMgMAAgUQAAgUAMgNQAMgMASAAQASAAAMAMQALAMAAAUQAAAWgNAMQgMALgRAAQgSAAgLgMgAgTgWQgGAKAAAMQAAAPAHAJQAIAJAKAAQALAAAIgJQAHgKAAgOQAAgMgGgJQgHgLgNAAQgMAAgHAKg");
	this.shape_179.setTransform(347.5273,147.7777);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#606061").s().p("AgPBAIAAhJIgMAAIAAgMIAMAAIAAgEQAAgVAKgJQAHgIANAAQAIAAAFACIgCAMQgFgCgFAAQgQAAAAAZIAAAFIAUAAIAAAMIgUAAIAABJg");
	this.shape_180.setTransform(340.7272,145.6776);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#606061").s().p("AgbAnIAEgMQAJAGALAAQAQAAAAgMQAAgKgPgGQgXgHAAgRQAAgLAIgHQAIgHANAAQAMAAAJAFIgEAMQgIgFgJAAQgOAAAAAMQAAAFAEADQAEADAIADQAWAIAAARQAAAMgIAHQgJAHgOAAQgOAAgKgGg");
	this.shape_181.setTransform(330.327,147.7777);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#606061").s().p("AAVAsIAAgxQAAgZgUAAQgGAAgGAFQgFAEgDAHIgBAHIAAAzIgPAAIgBhVIAOAAIABAOIAAAAQAIgQAUAAQALAAAJAHQAKAKAAAUIAAAyg");
	this.shape_182.setTransform(321.8269,147.6777);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#606061").s().p("AgdAhQgMgMAAgUQAAgUAMgNQAMgMASAAQASAAAMAMQALAMAAAUQAAAWgNAMQgMALgRAAQgSAAgLgMgAgTgWQgGAKAAAMQAAAPAHAJQAIAJAKAAQAMAAAHgJQAHgKAAgOQAAgMgGgJQgHgLgNAAQgMAAgHAKg");
	this.shape_183.setTransform(311.9767,147.7777);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#606061").s().p("AgHA8IAAhVIAPAAIAABVgAgGgrQgDgCAAgEQAAgEADgDQADgDADAAQAKAAAAAKQAAAEgDACQgCADgFAAQgDAAgDgDg");
	this.shape_184.setTransform(304.9802,146.0777);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#606061").s().p("AgGAyQgFgHAAgQIAAguIgOAAIAAgMIAOAAIAAgUIAOgFIAAAZIAXAAIAAAMIgXAAIAAAtQAAASAMgBIAJgBIABAMQgGADgJAAQgKgBgGgGg");
	this.shape_185.setTransform(299.9015,146.6527);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#606061").s().p("AgoA+IAAh5IAOAAIAAAPIABAAQAKgRATAAQAQAAALAMQAKANAAATQAAAVgMANQgLAMgQAAQgSAAgIgOIAAAAIAAAvgAgOgrQgHAGgCAIIgBAHIAAAPIABAGQACAHAGAFQAHAFAIAAQALAAAHgJQAHgIAAgPQAAgOgGgJQgHgKgMAAQgIABgGAFg");
	this.shape_186.setTransform(292.2264,149.4527);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#606061").s().p("AgnAtQgPgRAAgbQAAgbAQgSQAPgRAYAAQAYAAAPARQAPAQAAAbQAAAegQARQgPAQgYAAQgYAAgPgRgAgcgiQgKAOAAAUQABAVAJAOQAMAPAQAAQASgBALgPQAKgNAAgVQAAgTgKgOQgKgPgTAAQgRgBgLAPg");
	this.shape_187.setTransform(280.7013,146.1027);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#606061").s().p("AgwAFIAAgIIBhAAIAAAIg");
	this.shape_188.setTransform(291.4014,124.4023);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#606061").s().p("AgaAhQgLgMAAgTQAAgUALgNQALgNARAAQATAAAKAOQAHALAAAQIAAAGIg8AAQAAAPAJAIQAIAHALAAQAOAAAKgFIADAMQgMAFgRAAQgSAAgMgMgAgPgYQgGAHgBAKIAtAAQAAgKgEgHQgGgJgMAAQgKAAgGAJg");
	this.shape_189.setTransform(453.6789,118.2772);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#606061").s().p("AgkAGIAAgxIAQAAIAAAvQAAAbATAAQAHAAAGgEQAFgEACgGQABgDAAgFIAAg0IAQAAIABBVIgOAAIgBgOQgLAQgRAAQgeAAAAgmg");
	this.shape_190.setTransform(444.2787,118.3772);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#606061").s().p("AgbAnIADgMQAKAGALAAQAQAAAAgMQAAgLgPgFQgXgHAAgRQAAgLAIgHQAIgHANAAQAMAAAJAFIgEAMQgIgFgKAAQgFAAgEADQgEAEAAAEQAAAGAEADQADADAIADQAXAIAAARQAAAMgIAHQgJAHgOAAQgOAAgKgGg");
	this.shape_191.setTransform(435.8286,118.2772);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#606061").s().p("AgbAnIAEgMQAJAGALAAQAQAAAAgMQAAgLgPgFQgXgHAAgRQAAgLAIgHQAJgHAMAAQANAAAIAFIgEAMQgHgFgKAAQgGAAgEADQgEAEAAAEQAAAGAEADQAEADAIADQAWAIAAARQAAAMgIAHQgJAHgOAAQgOAAgKgGg");
	this.shape_192.setTransform(428.7285,118.2772);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#606061").s().p("AgHA8IAAhVIAPAAIAABVgAgGgrQgDgCAAgEQAAgKAJAAQAEAAADADQADADAAAEQAAAEgDACQgDADgEAAQgDAAgDgDg");
	this.shape_193.setTransform(423.1284,116.5772);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#606061").s().p("AgbAnIAEgMQAJAGALAAQAQAAAAgMQAAgLgPgFQgXgHAAgRQAAgLAIgHQAIgHANAAQAMAAAJAFIgEAMQgIgFgJAAQgGAAgEADQgEADAAAFQAAAGAEADQADADAJADQAWAIAAARQAAAMgIAHQgJAHgOAAQgOAAgKgGg");
	this.shape_194.setTransform(413.7283,118.2772);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#606061").s().p("AgHA8IAAhVIAPAAIAABVgAgGgrQgDgCAAgEQAAgEADgDQADgDADAAQAKAAAAAKQAAAEgDACQgCADgFAAQgDAAgDgDg");
	this.shape_195.setTransform(408.0818,116.5772);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#606061").s().p("AAVA/IAAgxQAAgZgUAAQgGAAgGAFQgGAEgCAGIgBAHIAAA0IgQAAIAAh9IAQAAIAAA1QAEgGAIgFQAIgEAHAAQALAAAIAHQALAKAAATIAAAzg");
	this.shape_196.setTransform(401.0781,116.2772);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#606061").s().p("AgFAxQgGgFAAgRIAAguIgOAAIAAgMIAOAAIAAgUIAOgFIAAAZIAXAAIAAAMIgXAAIAAAuQAAAQAMAAIAJgBIABAMQgFACgJABQgLAAgFgIg");
	this.shape_197.setTransform(393.078,117.1522);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#606061").s().p("AgUAsIgBhVIAOAAIABARIAAAAQADgJAGgFQAGgFAIAAIAFAAIAAAPIgGAAQgIAAgGAFQgEAGgCAJIAAA0g");
	this.shape_198.setTransform(383.9778,118.1772);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#606061").s().p("AgdAhQgMgMAAgUQAAgUAMgNQAMgMASAAQASAAAMAMQALAMAAAUQAAAWgNAMQgMALgRAAQgSAAgLgMgAgTgWQgGAKAAAMQAAAPAHAJQAIAJAKAAQALAAAIgJQAHgKAAgOQAAgMgGgJQgHgLgNAAQgMAAgHAKg");
	this.shape_199.setTransform(375.6777,118.2772);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#606061").s().p("AgPBAIAAhJIgMAAIAAgMIAMAAIAAgEQAAgUAKgKQAHgIANAAQAIAAAFACIgCAMQgFgCgFAAQgQAAAAAZIAAAFIAUAAIAAAMIgUAAIAABJg");
	this.shape_200.setTransform(368.8776,116.1772);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#606061").s().p("AARA/IgdgpIgIAJIAAAgIgPAAIAAh9IAPAAIAABOIABAAIAggmIATAAIghAiIAlAzg");
	this.shape_201.setTransform(358.5774,116.2772);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#606061").s().p("AgVAgQgMgLAAgVQAAgSAMgNQANgNAUAAQAOAAAIAFIgEALQgIgDgKAAQgNAAgIAJQgJAJABANQAAAOAIAKQAJAIALAAQAKAAAKgEIADAMQgLAFgOAAQgSAAgMgNg");
	this.shape_202.setTransform(349.7523,118.3022);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#606061").s().p("AgZAhQgMgMAAgTQAAgUALgNQALgNARAAQAUAAAJAOQAHALAAAQIAAAGIg8AAQAAAPAJAIQAIAHAMAAQAMAAALgFIADAMQgMAFgRAAQgSAAgLgMgAgPgYQgGAHgBAKIAtAAQAAgKgEgHQgGgJgMAAQgJAAgHAJg");
	this.shape_203.setTransform(341.2022,118.2772);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#606061").s().p("AAVA/IAAgxQAAgZgUAAQgGAAgGAFQgFAEgDAGIgBAHIAAA0IgQAAIAAh9IAQAAIAAA1QAEgGAIgFQAIgEAHAAQALAAAIAHQALAKAAATIAAAzg");
	this.shape_204.setTransform(331.777,116.2772);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#606061").s().p("AgVAgQgMgLAAgVQAAgSAMgNQANgNAVAAQAOAAAHAFIgDALQgIgDgKAAQgOAAgIAJQgIAJAAANQAAAPAIAJQAIAIANAAQAJAAAKgEIADAMQgLAFgOAAQgTAAgLgNg");
	this.shape_205.setTransform(322.9019,118.3022);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#606061").s().p("AgFAxQgGgFAAgRIAAguIgNAAIAAgMIANAAIAAgUIAOgFIAAAZIAWAAIAAAMIgWAAIAAAuQAAAQAMAAIAJgBIABAMQgFACgJABQgLAAgFgIg");
	this.shape_206.setTransform(312.0017,117.1522);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#606061").s().p("AgCgTIAPgCQgHAbgIAPIgKABQAGgRAEgYg");
	this.shape_207.setTransform(307.5767,112.5521);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#606061").s().p("AAVAsIAAgxQABgZgVAAQgGAAgGAFQgFAEgCAHQgBACAAAFIAAAzIgQAAIgBhVIAOAAIAAAOIABAAQAJgQATAAQALAAAJAHQAKAKAAAUIAAAyg");
	this.shape_208.setTransform(301.2516,118.1772);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#606061").s().p("AgdAhQgMgMAAgUQAAgUAMgNQAMgMASAAQASAAAMAMQALAMAAAUQAAAWgOAMQgMALgQAAQgSAAgLgMgAgTgWQgGAKAAAMQAAAPAHAJQAHAJALAAQALAAAIgJQAHgKAAgOQAAgMgGgJQgHgLgNAAQgMAAgHAKg");
	this.shape_209.setTransform(291.4264,118.2772);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#606061").s().p("AgwA7IAAh1QAPgCARAAQAhAAAQAPQAQAQABAbQAAAdgSARQgRARgjAAQgQAAgMgCgAghgvIAABfIAQABQAYAAANgOQANgNAAgYQAAgVgMgNQgNgMgWAAIgTABg");
	this.shape_210.setTransform(280.8513,116.6022);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#606061").s().p("AgUAEIAAgHIApAAIAAAHg");
	this.shape_211.setTransform(276.6762,91.4768);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#606061").s().p("AgZAhQgMgMAAgUQAAgSALgNQALgOARAAQATAAAKAPQAHALAAAPIAAAGIg8AAQABAPAIAIQAIAHALAAQANAAALgFIADAMQgLAFgSAAQgSAAgLgMgAgPgYQgFAHgCAKIAtAAQAAgKgEgGQgGgJgMAAQgJgBgHAJg");
	this.shape_212.setTransform(361.3525,85.3517);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#606061").s().p("AgVAhQgMgMAAgUQAAgTANgNQAMgNAVAAQAMAAAJAFIgDAMQgHgFgLABQgOAAgIAKQgIAIAAANQAAAPAIAJQAJAJAMAAQAKAAAJgFIADAMQgIAFgRAAQgTAAgLgMg");
	this.shape_213.setTransform(353.0524,85.3517);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#606061").s().p("AAUAsIAAgxQAAgZgSAAQgHAAgGAFQgEAEgCAHIgBAHIAAAzIgPAAIgBhVIANAAIABAOIAAAAQAJgQARAAQALAAAIAHQAKAKAAAUIAAAyg");
	this.shape_214.setTransform(343.8022,85.2767);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#606061").s().p("AgnAtQgPgRAAgbQAAgbAQgSQAPgRAYAAQAZAAAOARQAPARAAAbQAAAdgQARQgQAQgXAAQgYAAgPgRgAgcghQgJAOAAAUQAAAUAKAOQALAOAQAAQASAAALgOQAKgOAAgVQAAgTgKgOQgKgPgSAAQgSAAgLAPg");
	this.shape_215.setTransform(332.902,83.6767);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#606061").s().p("AgaAhQgLgLAAgVQAAgSAKgNQAMgOARAAQATAAAKAPQAHALAAAPIgBAGIg7AAQAAAPAJAIQAIAHAMAAQANAAALgFIACAMQgLAFgRAAQgTAAgMgMgAgQgYQgFAHgBAKIAtAAQAAgKgFgGQgFgJgMAAQgKgBgHAJg");
	this.shape_216.setTransform(318.5518,85.3517);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#606061").s().p("AgUAsIAAg6IgBgbIAOAAIABARIABAAQACgJAGgFQAGgFAIAAIAFAAIAAAPIgFAAQgRAAgEAUIAAA0g");
	this.shape_217.setTransform(311.7767,85.2767);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#606061").s().p("AgdAhQgMgMAAgUQAAgUAMgNQAMgMASAAQASAAAMAMQALAMAAAUQAAAWgNAMQgMALgRAAQgRAAgMgMgAgTgWQgGAKAAAMQAAAPAHAJQAIAJAKAAQAMAAAHgJQAHgKAAgOQAAgMgGgJQgHgLgNAAQgMAAgHAKg");
	this.shape_218.setTransform(303.4766,85.3767);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#606061").s().p("AAWAsIAAgxQAAgZgUAAQgPAAgGAQIgBAHIAAAzIgPAAIAAg+IgBgXIAOAAIABAOIAAAAQAIgQAUAAQALAAAJAHQAKAKAAAUIAAAyg");
	this.shape_219.setTransform(293.6264,85.2767);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#606061").s().p("AggA4IAEgMQALAHAPAAQAaAAAAgfIAAgJQgJAOgRAAQgQAAgLgMQgKgMAAgRQAAgVAMgNQALgMAQAAQARAAAJAPIABgNIANAAIAABJQAAAdgNALQgKAKgUAAQgSAAgLgHgAgQgoQgHAIAAAPQAAAOAGAHQAHAJALAAQAIAAAFgEQAHgEACgHQABgDAAgFIAAgQIgBgHQgFgQgRAAQgKAAgHAJg");
	this.shape_220.setTransform(283.5263,87.1268);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#606061").s().p("AgHA8IAAh3IAPAAIAAB3g");
	this.shape_221.setTransform(276.6762,83.6767);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#295796").s().p("AgbAhQgMgLAAgVQAAgSALgNQAMgOATAAQATAAAKAOQAIALAAARIgBAIIg5AAQABALAHAGQAIAGAKAAQANAAALgEIADAPQgMAFgSAAQgUAAgMgMgAgNgWQgEAGgBAIIAlAAQAAgIgDgGQgFgHgKAAQgIAAgGAHg");
	this.shape_222.setTransform(522.1799,19.9757);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#295796").s().p("AgiA5IAFgSQAKAHAPAAQAYAAAAgaIAAgIIgBAAQgIANgQAAQgPAAgLgMQgLgLAAgSQABgVALgNQAMgMAQAAQAQAAAIANIAAAAIABgLIAUAAIgBBJQAAAcgNALQgMALgVAAQgTAAgLgGgAgNgmQgGAIAAANQAAAMAFAGQAGAIAJAAQAOAAAEgNIABgHIAAgOIgBgGQgDgOgPAAQgIAAgGAHg");
	this.shape_223.setTransform(512.2048,21.7508);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#295796").s().p("AgdAlQgHgHAAgLQAAgfAyAAIAAgCQAAgPgRAAQgOAAgJAHIgEgPQAMgHASgBQAkAAAAAlIAAAfIABAVIgTAAIgCgKIAAAAQgKAMgPgBQgNABgHgJgAgPARQAAAMANAAQAMAAAEgMIABgEIAAgMIgEAAQgaAAAAAQg");
	this.shape_224.setTransform(502.5796,20.0007);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#295796").s().p("AgnAGIAAgyIAXAAIAAAvQgBAXARAAQAKABAFgMIACgHIAAg0IAWAAIAABXIgTAAIgBgOIAAAAQgJAPgSAAQgfABAAgng");
	this.shape_225.setTransform(493.2045,20.1007);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#295796").s().p("AgiA5IAFgSQAKAHAPAAQAYAAAAgaIAAgIQgIANgRAAQgQAAgKgMQgKgLAAgSQgBgVAMgNQAMgMAQAAQAQAAAIANIAAAAIABgLIATAAIAABJQAAAcgNALQgMALgVAAQgTAAgLgGgAgNgmQgGAIAAANQAAAMAGAGQAFAIAJAAQAOAAAEgNIABgHIAAgOIgBgGQgEgOgOAAQgIAAgGAHg");
	this.shape_226.setTransform(482.7543,21.7508);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#295796").s().p("AARAtIAAgwQAAgXgQAAQgLAAgFANIgBAHIAAAzIgWAAIgBhXIATAAIABAOIABAAQAJgPASgBQANAAAIAIQAKALAAASIAAA0g");
	this.shape_227.setTransform(472.7542,19.9007);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#295796").s().p("AgdAlQgIgHABgLQAAgfAzAAIAAgCQAAgPgRAAQgOAAgKAHIgEgPQAMgHASgBQAkAAAAAlIAAAfQAAAMABAJIgTAAIgBgKIgBAAQgJAMgQgBQgMABgIgJgAgPARQAAAMANAAQANAAADgMIABgEIAAgMIgDAAQgbAAAAAQg");
	this.shape_228.setTransform(462.904,20.0007);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#295796").s().p("AgKBAIAAh+IAVAAIAAB+g");
	this.shape_229.setTransform(456.3039,18.0007);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#295796").s().p("AgbAhQgMgLAAgVQAAgSALgNQALgOAUAAQASAAALAOQAIALAAARIgBAIIg5AAQABALAHAGQAIAGAKAAQANAAALgEIADAPQgMAFgTAAQgUAAgLgMgAgNgWQgEAGgBAIIAlAAQAAgIgDgGQgFgHgKAAQgIAAgGAHg");
	this.shape_230.setTransform(445.7538,19.9757);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#295796").s().p("AgeAnIAFgQQAKAHALAAQANAAABgKQgBgHgNgGQgYgHABgRQAAgMAJgHQAIgIAOAAQANAAALAFIgFAPQgJgFgKAAQgLAAABAKQgBAGAPAGQAXAHAAASQAAANgJAHQgKAHgQAAQgPAAgLgGg");
	this.shape_231.setTransform(437.4036,19.9757);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#295796").s().p("AgKA+IAAhWIAVAAIAABWgAgIgoQgDgEAAgFQAAgFADgDQAEgEAEAAQAGAAADAEQADADAAAFQAAAFgDAEQgDADgGAAQgEAAgEgDg");
	this.shape_232.setTransform(431.3786,18.1757);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#295796").s().p("AgWAhQgMgMAAgUQAAgTANgNQANgNAWAAQAKAAALAEIgEAQQgIgDgJAAQgMAAgGAIQgIAIABALQgBANAJAIQAGAHAMAAQAHAAAKgDIACAQQgIAEgQAAQgUAAgMgMg");
	this.shape_233.setTransform(425.2035,19.9757);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#295796").s().p("AASAtIAAgwQAAgXgRAAQgLAAgFANIgBAHIAAAzIgWAAIgBhXIATAAIABAOIABAAQADgHAHgDQAIgGAJAAQANAAAIAIQAKALAAASIAAA0g");
	this.shape_234.setTransform(415.9783,19.9007);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#295796").s().p("AgeAiQgNgNAAgVQAAgTANgNQAMgNATAAQATAAANANQALAMAAAUQAAAVgOANQgNAMgRgBQgSABgMgMgAgQgTQgEAIAAALQAAAMAFAJQAHAJAIgBQAJABAHgJQAFgIABgNQgBgLgEgIQgGgJgLAAQgKAAgGAJg");
	this.shape_235.setTransform(405.8532,20.0007);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#295796").s().p("AgWAhQgMgMAAgUQAAgTANgNQANgNAWAAQALAAAKAEIgEAQQgIgDgJAAQgMAAgGAIQgHAIAAALQAAANAHAIQAHAHALAAQAHAAALgDIADAQQgJAEgQAAQgTAAgNgMg");
	this.shape_236.setTransform(397.078,19.9757);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#295796").s().p("AgiA5IAFgSQAKAHAPAAQAYAAAAgaIAAgIIAAAAQgJANgQAAQgQAAgKgMQgKgLAAgSQAAgVAMgNQALgMAQAAQAQAAAIANIABgLIATAAIAABJQAAAdgNAKQgMALgVAAQgTAAgLgGgAgNgmQgGAIAAANQAAAMAFAGQAGAIAJAAQAOAAAEgNIABgHIgBgUQgEgOgOAAQgIAAgGAHg");
	this.shape_237.setTransform(383.9278,21.7508);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#295796").s().p("AASAtIAAgwQAAgXgRAAQgLAAgFANIgBAHIAAAzIgWAAIgBhXIATAAIACAOIAAAAQAIgPATgBQANAAAIAIQAKALAAASIAAA0g");
	this.shape_238.setTransform(373.9277,19.9007);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#295796").s().p("AgKA+IAAhWIAVAAIAABWgAgIgoQgEgEABgFQgBgFAEgDQADgEAFAAQAFAAAEAEQADADAAAFQAAAFgDAEQgEADgFAAQgFAAgDgDg");
	this.shape_239.setTransform(366.5744,18.1757);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#295796").s().p("AgeAnIAFgQQALAHAKAAQANAAABgKQgBgHgNgGQgXgHAAgRQAAgMAJgHQAIgIAOAAQANAAALAFIgFAPQgJgFgKAAQgLAAAAAKQABAGAOAGQAXAHAAASQAAANgJAHQgJAHgRAAQgPAAgLgGg");
	this.shape_240.setTransform(360.5525,19.9757);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#295796").s().p("AgmAGIAAgyIAVAAIAAAvQAAAXARAAQALABAFgMQABgCAAgFIAAg0IAWAAIAABXIgTAAIgBgOIAAAAQgKAPgRAAQgfABABgng");
	this.shape_241.setTransform(351.7523,20.1007);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#295796").s().p("AgXAtIgBhXIATAAIABARIABAAQAFgTARAAIAGABIAAAUIgHAAQgQAAgDAQIAAA0g");
	this.shape_242.setTransform(340.2272,19.9007);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#295796").s().p("AgbAhQgMgLAAgVQAAgSALgNQAMgOASAAQATAAALAOQAIALAAARIgBAIIg5AAQAAALAJAGQAHAGAKAAQANAAALgEIADAPQgMAFgSAAQgVAAgLgMgAgMgWQgFAGgBAIIAlAAQABgIgEgGQgFgHgKAAQgIAAgFAHg");
	this.shape_243.setTransform(332.052,19.9757);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#295796").s().p("AgfA0QgLgNAAgTQAAgUAMgNQALgNAQAAQAQAAAHAMIABAAIAAgxIAWAAIAAB+IgTAAIgBgPIgBAAQgIARgTgBQgQAAgKgMgAgOAAQgGAHAAAMQAAAMAGAIQAGAHAJAAQAPAAAEgPIABgUIgBgFQgDgPgQAAQgJABgGAIg");
	this.shape_244.setTransform(322.0009,18.1007);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#295796").s().p("AgKA+IAAhWIAVAAIAABWgAgIgoQgDgEAAgFQAAgFADgDQAEgEAEAAQAFAAAEAEQADADAAAFQAAAFgDAEQgEADgFAAQgFAAgDgDg");
	this.shape_245.setTransform(314.7768,18.1757);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#295796").s().p("AgeAnIAEgQQALAHAMAAQANAAAAgKQAAgHgOgGQgYgHAAgRQAAgMAJgHQAJgIAOAAQANAAAKAFIgEAPQgJgFgJAAQgMAAAAAKQAAAGAPAGQAXAHAAASQAAANgJAHQgKAHgQAAQgPAAgLgGg");
	this.shape_246.setTransform(308.7767,19.9757);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#295796").s().p("AASAtIAAgwQAAgXgRAAQgLAAgFANIgBAHIAAAzIgWAAIgBhXIATAAIABAOIABAAQAIgPATgBQANAAAIAIQAKALAAASIAAA0g");
	this.shape_247.setTransform(299.9265,19.9007);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#295796").s().p("AgfAiQgMgNAAgVQAAgTAMgNQANgNATAAQATAAAMANQAMAMAAAUQAAAVgOANQgMAMgSgBQgTABgMgMgAgPgTQgFAIgBALQABAMAFAJQAHAJAIgBQAKABAFgJQAHgJgBgMQAAgLgEgIQgGgJgKAAQgLAAgFAJg");
	this.shape_248.setTransform(289.8014,20.0007);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#295796").s().p("AgdAtQgRgPAAgdQAAgcATgRQARgRAcAAQATAAAKAFIgFASQgKgFgOAAQgSAAgLAMQgMAMAAATQAAAUALAMQAMAMASAAQANAAALgEIAEARQgKAFgVAAQgcAAgQgRg");
	this.shape_249.setTransform(279.8762,18.3007);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#DFDFDF").s().p("A5tCQIAAkfMAzbAAAIAAEfg");
	this.shape_250.setTransform(401.3531,17.4757);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#3C74BA").s().p("AgMAKIAAgTIAZAAIAAATg");
	this.shape_251.setTransform(257.6009,181.0032);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#3C74BA").s().p("AgMAKIAAgTIAZAAIAAATg");
	this.shape_252.setTransform(257.6009,178.3031);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#3C74BA").s().p("AgMAXIAAgtIAZAAIAAAtg");
	this.shape_253.setTransform(257.6009,174.2781);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AhlAFIAAgJIDLAAIAAAJg");
	this.shape_254.setTransform(251.1508,170.453);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AhqBhIAAjBIDVAAIAADBgAhgBXIDBAAIAAisIjBAAg");
	this.shape_255.setTransform(251.1508,176.4281);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#2A67B4").s().p("AgGBMIAAiXIANAAIAACXg");
	this.shape_256.setTransform(254.5509,178.0281);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#F3F9F8").s().p("AhlBcIAAi3IDLAAIAAC3g");
	this.shape_257.setTransform(251.1508,176.4281);

	this.instance_1 = new lib.Path();
	this.instance_1.setTransform(401.3,99.15,1,1,0,0,0,202.6,127);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,0.047)",-14,-7,22);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#F0F0F0").s().p("A6QPoIAA/PMA0hAAAIAAfPg");
	this.shape_258.setTransform(401.6031,100.027);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_258},{t:this.instance_1},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.menu_bg_sub, new cjs.Rectangle(0,-29.4,579.3,246.5), null);


(lib.menu_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.menuBG.cache(-600,-200,1250,450,1.2)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.menuBG = new lib.menu_bg_sub();
	this.menuBG.name = "menuBG";
	this.menuBG.setTransform(284.8,100,1,1,0,0,0,284.8,100);

	this.timeline.addTween(cjs.Tween.get(this.menuBG).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.menu_bg, new cjs.Rectangle(0,-29.4,579.3,246.5), null);


(lib.dropdown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#606061").s().p("AgeAnQgMgOgBgZQABgWANgPQANgPASAAQAUAAALAOQALAMAAAXIAAAHIhGAAQABAQAIAKQAIAJAPAAQAQAAAOgMIAAAQQgNAJgVAAQgVAAgLgNgAgQgeQgIAIgCANIA1AAQAAgNgHgIQgGgIgMAAQgKAAgIAIg");
	this.shape.setTransform(343.4,54.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#606061").s().p("AggAuIAAgRQANAKAQAAQAUAAAAgOQAAgEgCgDIgFgFIgHgEIgIgDIgMgGIgIgEIgFgIQgCgFAAgFQAAgIADgFQAEgGAFgDQAFgDAHgCQAHgCAGgBQANAAALAFIAAARQgLgIgPAAIgHABIgGADIgEAFIgBAFIABAGQABADADADIAHADIAIAEIAMAFIAJAFQADAEACAEQACAEAAAGQAAAHgDAGQgDAGgGADQgFAEgHACQgIABgGAAQgQABgLgHg");
	this.shape_1.setTransform(333.925,54.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#606061").s().p("AgeAsQgIgHAAgNQgBgcAigEIAdgEQgBgagUAAQgRAAgPAMIAAgQQAPgKASAAQAkAAAAAmIAABAIgQAAIAAgQIgBAAQgKASgUAAQgPABgIgJgAAAADQgLACgGADQgFAEAAALQgBAGAGAFQAFAFAJAAQALAAAHgIQAJgJAAgNIAAgJg");
	this.shape_2.setTransform(324.25,54.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#606061").s().p("AgfAnQgMgOABgZQgBgWANgPQAOgPASAAQAUAAALAOQALAMAAAXIAAAHIhGAAQABAQAIAKQAJAJANAAQASAAAOgMIAAAQQgNAJgWAAQgUAAgNgNgAgQgeQgIAIgCANIA1AAQAAgNgGgIQgHgIgMAAQgKAAgIAIg");
	this.shape_3.setTransform(314.3,54.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#606061").s().p("AgZAzIAAhjIAQAAIAAAUIAAAAQAEgKAGgGQAHgGAJAAQAGAAADACIAAAQQgEgDgIAAQgKAAgGAJQgHAKAAAQIAAAzg");
	this.shape_4.setTransform(306.525,54.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#606061").s().p("AgYAnQgMgPAAgVQAAgZANgPQAPgPAWAAQANABALAFIAAAQQgMgIgNAAQgOAAgJALQgKALAAARQAAASAJAJQAJALAPAAQANAAAMgJIAAAPQgMAIgQgBQgUABgOgOg");
	this.shape_5.setTransform(297.75,54.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#606061").s().p("AgfAnQgLgOgBgZQABgWANgPQANgPASAAQAUAAALAOQALAMAAAXIAAAHIhGAAQAAAQAJAKQAIAJAPAAQARAAAOgMIAAAQQgOAJgVAAQgVAAgMgNgAgQgeQgIAIgCANIA1AAQAAgNgHgIQgGgIgMAAQgKAAgIAIg");
	this.shape_6.setTransform(287.95,54.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#606061").s().p("AgiA+QgLgOAAgXQAAgZAMgOQANgPAUAAQAVAAAIARIABAAIAAg+IAQAAIAACTIgQAAIAAgRIgBAAQgKATgWAAQgUAAgLgNgAgUgEQgJAJABATQgBASAJAKQAHAKANAAQAOAAAIgKQAIgKAAgOIAAgPQAAgMgIgIQgIgIgNAAQgNAAgIALg");
	this.shape_7.setTransform(276.45,52.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggAnQgMgOAAgZQAAgWANgPQAOgPAUAAQAUAAALAOQAMANAAAYIAAAHIhEAAQAAAOAJAHQAIAIANAAQAQAAAOgKIAAATQgOAIgWAAQgWAAgMgNgAgOgcQgGAIgCALIAtAAQAAgMgFgHQgGgHgKAAQgIABgIAGg");
	this.shape_8.setTransform(345.25,54.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiAvIAAgVQAMAJAPAAQAUABAAgMQAAgEgCgDIgEgDIgHgEIgIgEIgLgFQgGgBgDgDQgDgEgCgEQgCgFABgGQAAgHADgGQADgFAGgEQAGgDAIgCQAGgCAIgBQAOAAAKAFIAAATQgLgGgNgBIgGABQgEABgDACIgDADQgCACAAAEQAAADACACIADAEIAHADIAIADIALAGQAFABAEAEQAEADACAFQACAEAAAHQgBAHgDAFQgDAHgHADQgFAEgIACQgIABgHAAQgRAAgLgFg");
	this.shape_9.setTransform(335.65,54.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghAsQgIgHAAgOQAAgbAggFIAdgEQAAgVgUgBQgRAAgOANIAAgUQAQgKATAAQAmAAAAAmIAABAIgWAAIAAgQIAAAAQgKASgUAAQgOABgJgJgAAAAEQgKABgEADQgGAEAAAJQABAGAEAEQAFAEAHAAQAJAAAHgHQAHgIAAgLIAAgIg");
	this.shape_10.setTransform(325.8,54.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AggAnQgNgOAAgZQAAgWAOgPQAOgPATAAQAVAAALAOQALANAAAYIAAAHIhCAAQgBAOAJAHQAIAIANAAQAQAAANgKIAAATQgNAIgXAAQgUAAgNgNgAgNgcQgHAIgBALIAtAAQgBgMgFgHQgGgHgKAAQgJABgGAGg");
	this.shape_11.setTransform(315.6,54.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcAzIAAhjIAXAAIAAAUIAAAAQADgKAGgGQAHgGAJAAQAGAAADACIAAAVQgEgCgIAAQgKgBgHAKQgFAIAAAPIAAAwg");
	this.shape_12.setTransform(307.375,54.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgYAnQgOgPAAgVQAAgZAPgPQAOgPAYAAQAOABAKAFIAAAUQgKgHgNgBQgOAAgIALQgJAJAAAPQAAAPAJAJQAHAKAPgBQAMABALgKIAAAUQgMAIgQgBQgWABgNgOg");
	this.shape_13.setTransform(298.35,54.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggAnQgNgOAAgZQAAgWAOgPQAOgPAUAAQAUAAALAOQAMANgBAYIAAAHIhCAAQAAAOAIAHQAIAIANAAQAQAAAOgKIAAATQgOAIgWAAQgWAAgMgNgAgNgcQgHAIgBALIAsAAQAAgMgFgHQgGgHgKAAQgJABgGAGg");
	this.shape_14.setTransform(288.35,54.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgkA+QgMgOAAgXQAAgZANgOQAMgPAUAAQATAAAKARIAAAAIAAg+IAWAAIAACTIgWAAIAAgRIAAAAQgLATgWAAQgTAAgKgNgAgRgBQgHAIgBARQAAAPAIAJQAGAJALAAQAMAAAHgIQAIgJAAgNIAAgNQAAgLgIgGQgHgIgLAAQgLAAgHAKg");
	this.shape_15.setTransform(276.6,52.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Mouseover
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#345699").s().p("A5tCdIAAk5MAzbAAAIAAE5g");
	this.shape_16.setTransform(398.1561,52.6762);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#32992C").ss(2,2,0,3).p("AgwALIAmAnIA7hl");
	this.shape_17.setTransform(258.3028,50.7496);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).wait(1));

	// Menu
	this.menubg = new lib.menu_bg();
	this.menubg.name = "menubg";
	this.menubg.setTransform(284.8,100,1,1,0,0,0,284.8,100);

	this.timeline.addTween(cjs.Tween.get(this.menubg).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-29.4,579.3,246.5);


(lib.Boxes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.boxes.cache(-100,-20,200,40,2)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.boxes = new lib.bxs_cache();
	this.boxes.name = "boxes";
	this.boxes.setTransform(94.2,5.9,1,1,0,0,0,44.5,5.9);

	this.timeline.addTween(cjs.Tween.get(this.boxes).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Boxes, new cjs.Rectangle(49.7,0,88.99999999999999,11.8), null);


(lib.bottom_icons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.icons.cache(-210,-10,420,20,2)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.icons = new lib.bottom_bar();
	this.icons.name = "icons";
	this.icons.setTransform(103,3.35,1,1,0,0,0,103,3.4);

	this.timeline.addTween(cjs.Tween.get(this.icons).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bottom_icons, new cjs.Rectangle(0,-0.1,206,6.8), null);


(lib.arrows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.arrows.cache(-10,-10,20,20,2)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.arrows = new lib.arrows_();
	this.arrows.name = "arrows";
	this.arrows.setTransform(2.4,2,1,1,0,0,0,2.4,2);

	this.timeline.addTween(cjs.Tween.get(this.arrows).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arrows, new cjs.Rectangle(0,0,4.8,4.1), null);


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
	this.arrow.setTransform(10.75,10.75);

	this.arrow_1 = new lib.cta_arrowmo();
	this.arrow_1.name = "arrow_1";
	this.arrow_1.setTransform(10.75,10.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arrow}]}).to({state:[{t:this.arrow_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,20.5,20.5);


(lib.UI_Top_bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.arrows();
	this.instance.setTransform(149.75,35.5,1,1,0,0,0,2.4,2);

	this.instance_1 = new lib.Share_txt();
	this.instance_1.setTransform(225.85,42.3,1,1,0,0,0,10.2,6.3);

	this.instance_2 = new lib.Comments_txt();
	this.instance_2.setTransform(271.95,42.3,1,1,0,0,0,17.6,6.3);

	this.instance_3 = new lib.Boxes();
	this.instance_3.setTransform(200.15,35.1,1,1,0,0,0,44.5,5.9);

	this.instance_4 = new lib.Top_right();
	this.instance_4.setTransform(274.1,13.1,1,1,0,0,0,20.3,3.1);

	this.instance_5 = new lib.ON_txt();
	this.instance_5.setTransform(43.95,19.5,1,1,0,0,0,6.3,6.2);

	this.instance_6 = new lib.top_left_icons();
	this.instance_6.setTransform(59.05,12.5,1,1,0,0,0,21.9,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#345699").s().p("AhWAGIAAgLICtAAIAAALg");
	this.shape.setTransform(17.05,40.575);

	this.instance_7 = new lib.Review_txt();
	this.instance_7.setTransform(138.7,42.65,1,1,0,0,0,17.3,7.1);

	this.instance_8 = new lib.AutoSave_txt();
	this.instance_8.setTransform(24,19.95,1,1,0,0,0,17.8,7);

	this.instance_9 = new lib.Excel_txt();
	this.instance_9.setTransform(146.5,21.6,1,1,0,0,0,13.5,8.6);

	this.instance_10 = new lib.Name_txt();
	this.instance_10.setTransform(233.25,19.8,1,1,0,0,0,25.6,6.8);

	this.instance_11 = new lib.Home_txt();
	this.instance_11.setTransform(19.35,42.75,0.9993,1,0,0,0,12.6,7.2);

	this.instance_12 = new lib.Insert_txt();
	this.instance_12.setTransform(47.45,42.65,1,1,0,0,0,11.5,7.1);

	this.instance_13 = new lib.PageLayout_txt();
	this.instance_13.setTransform(85.9,42.65,0.9999,1,0,0,0,22.4,7.1);

	this.instance_14 = new lib.Formulas_txt();
	this.instance_14.setTransform(106.65,42.65,1,1,0,0,0,17.2,7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F1F1").s().p("A3pBmIAAjLMAvTAAAIAADLg");
	this.shape_1.setTransform(149.8273,35.9505);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#345699").s().p("A3sCCIAAkDMAvZAAAIAAEDg");
	this.shape_2.setTransform(149.925,12.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UI_Top_bar, new cjs.Rectangle(-1.7,0,303.3,50.9), null);


(lib.UI_Bottom_bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Ready_txt();
	this.instance.setTransform(-133.8,8.2,1,1,0,0,0,11.5,6.7);

	this.instance_1 = new lib.Percentage_txt();
	this.instance_1.setTransform(138.55,8.6,1,1,0,0,0,10.1,6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_1
	this.instance_2 = new lib.bottom_icons();
	this.instance_2.setTransform(23,0.9,1,1,0,0,0,103,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3F2F1").s().p("A31BFIAAiJMAvrAAAIAACJg");
	this.shape.setTransform(-2.4,-0.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F1F1").s().p("A3bBGIAAiLMAu3AAAIAACLg");
	this.shape_1.setTransform(-0.0938,0.2616,0.9994,0.6746);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UI_Bottom_bar, new cjs.Rectangle(-155,-7.2,305.2,22.8), null);


(lib.CTA_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.arrow = new lib.arrowMain();
	this.arrow.name = "arrow";
	this.arrow.setTransform(-11.6,-0.65,0.85,0.85,0,0,0,13.6,10.7);

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(1));

	// CTA_text
	this.cta_glare = new lib.cta_glare();
	this.cta_glare.name = "cta_glare";
	this.cta_glare.setTransform(-42.75,-2.45,1,1,0,0,0,57.4,15.1);

	this.timeline.addTween(cjs.Tween.get(this.cta_glare).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0078D4").s().p("AoZCgIgFk/IQ4AAIAFE/g");
	this.shape.setTransform(-45.425,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA_btn, new cjs.Rectangle(-99.7,-17.5,108.60000000000001,32), null);


(lib.MainComposition = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DADBD8").ss(0.5,1,1).p("AgeuxIA9AAIAABDIg9AAgAgeOyIA9AAIAAhDIg9AAg");
	this.shape.setTransform(296.425,141.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5F5F5F").s().p("AgOOHIAdAAIgPAUgAgOuGIAOgUIAPAUg");
	this.shape_1.setTransform(296.4,141.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeOyIAAhDIA9AAIAABDgAAAObIAPgUIgdAAgAgetuIAAhDIA9AAIAABDgAgOuGIAdAAIgPgUg");
	this.shape_2.setTransform(296.425,141.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D9DAD7").s().p("AgeNwIAA7fIA9AAIAAbfg");
	this.shape_3.setTransform(296.425,141.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_2
	this.Bottom_bar = new lib.UI_Bottom_bar();
	this.Bottom_bar.name = "Bottom_bar";
	this.Bottom_bar.setTransform(150,243.45);

	this.Top_bar = new lib.UI_Top_bar();
	this.Top_bar.name = "Top_bar";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Top_bar},{t:this.Bottom_bar}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MainComposition, new cjs.Rectangle(-5,0,306.6,259.1), null);


(lib.screenAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_261 = function() {
		this.stop()
			exportRoot.tl1.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(261).call(this.frame_261).wait(1));

	// hand
	this.instance = new lib.pointer("single",0);
	this.instance.setTransform(340.05,137.8,1,1,0,0,0,14,16.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({_off:false},0).to({x:234,y:152.9},23,cjs.Ease.quadOut).wait(11).to({startPosition:0},0).wait(2).to({regX:14.1,x:234.1,startPosition:1},0).wait(4).to({regX:14,x:234,startPosition:0},0).wait(22).to({startPosition:0},0).to({x:186,y:188.9},15,cjs.Ease.quadInOut).wait(21).to({startPosition:0},0).wait(2).to({regX:14.1,x:186.1,startPosition:1},0).wait(4).to({regX:14,x:186,startPosition:0},0).wait(30).to({startPosition:0},0).to({x:334.2,y:216.65},21,cjs.Ease.cubicIn).to({_off:true},1).wait(60));

	// scroll_tab
	this.instance_1 = new lib.scroll_tab();
	this.instance_1.setTransform(296.4,65.35);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({y:119.1},23,cjs.Ease.quadInOut).wait(220));

	// UI
	this.UI = new lib.MainComposition();
	this.UI.name = "UI";
	this.UI.setTransform(150,304.1,1,1,0,0,0,150,304.1);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(262));

	// dropdown
	this.instance_2 = new lib.dropdown("single",0);
	this.instance_2.setTransform(129.4,197.15,0.5,0.5,0,0,0,284.8,100.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(82).to({_off:false},0).to({alpha:1},3).wait(34).to({startPosition:1},0).wait(31).to({startPosition:2},0).wait(44).to({startPosition:2},0).to({alpha:0},7).wait(61));

	// Overlay
	this.instance_3 = new lib.Overlay();
	this.instance_3.setTransform(142.9,120.1,1,1,0,0,0,155.2,130.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.Overlaycopy();
	this.instance_4.setTransform(142.9,120.1,1,1,0,0,0,155.2,130.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(82).to({_off:false},0).to({alpha:1},3).to({_off:true},65).wait(112));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(150).to({_off:false},0).wait(44).to({alpha:0},7).wait(61));

	// redDots
	this.instance_5 = new lib.reddots();
	this.instance_5.setTransform(210.85,237,1,1,0,0,0,26.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({x:209.85,y:144},23,cjs.Ease.quadInOut).to({_off:true},108).wait(112));

	// text
	this.instance_6 = new lib.textanimation("single",0);
	this.instance_6.setTransform(145.45,161.1,1,1,0,0,0,132.2,59.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({y:160.6},0).to({y:66.6},23,cjs.Ease.quadInOut).wait(108).to({startPosition:1},0).wait(112));

	// ScreenBG
	this.instance_7 = new lib.ScreenBG();
	this.instance_7.setTransform(150,163,1,1,0,0,0,150,98);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(262));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-27,436.7,627);


(lib.anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Logo
	this.logo_white = new lib.Microsoftlogo_rgb_cwhiteai();
	this.logo_white.name = "logo_white";
	this.logo_white.setTransform(104.15,458.55,0.205,0.205,0,0,0,434.9,2164.2);

	this.timeline.addTween(cjs.Tween.get(this.logo_white).wait(5));

	// Screen
	this.screenAnim = new lib.screenAnim();
	this.screenAnim.name = "screenAnim";
	this.screenAnim.setTransform(150,302.4,1,1,0,0,0,150,302.4);

	this.timeline.addTween(cjs.Tween.get(this.screenAnim).wait(5));

	// scene1
	this.scene_1 = new lib.scene_1();
	this.scene_1.name = "scene_1";
	this.scene_1.setTransform(136,218.5,1,1,0,0,0,683,337.5);

	this.timeline.addTween(cjs.Tween.get(this.scene_1).to({_off:true},1).wait(4));

	// Logo
	this.logo_grey = new lib.Microsoftlogo_rgb_cgrayai();
	this.logo_grey.name = "logo_grey";
	this.logo_grey.setTransform(49.7,22.45,0.205,0.205,0,0,0,169.3,36.4);

	this.timeline.addTween(cjs.Tween.get(this.logo_grey).wait(5));

	// scene3
	this.scene_3 = new lib.scene3();
	this.scene_3.name = "scene_3";
	this.scene_3.setTransform(200.2,236.1,1,1,0,0,0,200.2,236.1);

	this.timeline.addTween(cjs.Tween.get(this.scene_3).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-2.3,350.6,488);


(lib.mainMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// intro logo
	this.logo_intro = new lib.logos();
	this.logo_intro.name = "logo_intro";
	this.logo_intro.setTransform(57.55,19.65,0.312,0.312);

	this.timeline.addTween(cjs.Tween.get(this.logo_intro).wait(1));

	// replay
	this.replay_btn = new lib.replay_btn();
	this.replay_btn.name = "replay_btn";
	this.replay_btn.setTransform(283.6,4.3,0.3475,0.3475,0,0,180,-0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.replay_btn).wait(1));

	// CTA
	this.txtCta = new lib.cta();
	this.txtCta.name = "txtCta";
	this.txtCta.setTransform(242.15,220.15,1,1,0,0,0,0.7,0.1);

	this.timeline.addTween(cjs.Tween.get(this.txtCta).wait(1));

	// CTA_BG
	this.cta = new lib.CTA_btn();
	this.cta.name = "cta";
	this.cta.setTransform(293.5,221.7,0.9433,0.9433,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// Anim
	this.animMC = new lib.anim();
	this.animMC.name = "animMC";

	this.timeline.addTween(cjs.Tween.get(this.animMC).wait(1));

	// BG
	this.bg = new lib.whiteBG();
	this.bg.name = "bg";
	this.bg.setTransform(150,124.95,1,0.4141,0,0,0,150,301.7);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mainMC, new cjs.Rectangle(-49,-2.3,351.1,602.3), null);


// stage content:
(lib.M365_FY20Q4_RemoteWork_GigWorker_USA_300x250_BAN_Writer_EasyRemote_English_NA_NA_SBAN_BN_NA_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var mc = exportRoot.mainMC
		exportRoot.replayAnim = "inProgress"

		this.initBanner = function (data) {

			exportRoot.isReplay = false;

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
				if (mc.getTransformedBounds()) mc.cache(mc.getTransformedBounds().width*-1,mc.getTransformedBounds().height*-1,mc.getTransformedBounds().width*2,mc.getTransformedBounds().height*2,1.8)
				exportRoot.mainMC.animMC.addChild(mc);
				aVar.push(mc)
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


		this.runBanner = function() {




			exportRoot.tl1 = new TimelineLite();

			this.tl1.stop();
			mc.logo_intro.gotoAndPlay(1);

			//scene1 parallax
			exportRoot.tl1.from(mc.animMC.scene_1.fg, 2,{x:"+=100", ease:Power3.easeOut});
			exportRoot.tl1.from(mc.animMC.scene_1.bg, 2,{x:"+=50", ease:Power3.easeOut}, "-=2");

			//zoom in
			exportRoot.tl1.from(mc.animMC.screenAnim, 0.7,{alpha:0, scaleX:0.145, scaleY:0.165, x:119.55,y:186.95, skewX:-10.2,skewY:-3.7, ease: Power3.easeInOut}, "-=.4");
			exportRoot.tl1.to(mc.animMC.scene_1, 0.7,{ x:"+90", y:"+220", scaleX:6.5, scaleY:6.5, ease:Power3.easeInOut,onComplete: function(){mc.animMC.screenAnim.play(); mc.animMC.scene_1.alpha=0; exportRoot.tl1.stop();}}, "-=0.7");
			exportRoot.tl1.to(mc.animMC.logo_white, 0.7,{ scaleX:8, scaleY:8, ease:Power3.easeInOut}, "-=0.7");

			//final Scene
			exportRoot.tl1.to(mc.animMC.screenAnim, 0.7,{ x:"-=300", ease:Power3.easeIn});
			exportRoot.tl1.from(mc.animMC.scene_3.fg, 2,{ x:"+=100", ease:Power3.easeOut},"-=0.7");
			exportRoot.tl1.from(mc.animMC.scene_3.bg, 2,{ x:"+=50", ease:Power3.easeOut},"-=2");

			exportRoot.tl1.stop();
				for (var i = 0; i < exportRoot.headline1.length; i++) {
				if (i==0) exportRoot.tl1.from(exportRoot.headline1[i], 0.8, { x: "+=100", alpha: 0, ease:Power4.easeOut}, "-=1");
				if (i!=0) exportRoot.tl1.from(exportRoot.headline1[i], 0.8, { x: "+=100", alpha: 0, ease:Power4.easeOut}, "-=0.9");
			}
					for (var i = 0; i < exportRoot.headline2.length; i++) {
				if (i==0) exportRoot.tl1.from(exportRoot.headline2[i], 0.8, { x: "+=100", alpha: 0, ease:Power4.easeOut}, "-=0.8");
				if (i!=0) exportRoot.tl1.from(exportRoot.headline2[i], 0.8, { x: "+=100", alpha: 0, ease:Power4.easeOut}, "-=0.7");
			}

			exportRoot.tl1.from(mc.cta, 0.8, {x: "+=200", ease:Power4.easeOut}, "-=0.6");
			exportRoot.tl1.from(mc.txtCta, 0.8, {x: "+=200", ease:Power4.easeOut}, "-=0.8");
			exportRoot.tl1.from(mc.replay_btn, 0.8, {alpha: 0, onStart:function(){exportRoot.isReplay = true;}}, "-=0.7");



		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mainMC
	this.mainMC = new lib.mainMC();
	this.mainMC.name = "mainMC";
	this.mainMC.setTransform(0,0.1,1,1,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.mainMC).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(101,122.7,201.10000000000002,477.3);
// library properties:
lib.properties = {
	id: '90A26FE74B042E4A89CA750D1DA2DF1F',
	width: 300,
	height: 250,
	fps: 40,
	color: "#0078D4",
	opacity: 1.00,
	manifest: [
		{src:"images/M365_FY20Q4_RemoteWork_GigWorker_USA_300x250_BAN_Writer_EasyRemote_English_NA_NA_SBAN_BN_NA_1_atlas_.png?1588069246016", id:"M365_FY20Q4_RemoteWork_GigWorker_USA_300x250_BAN_Writer_EasyRemote_English_NA_NA_SBAN_BN_NA_1_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

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
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {
	var lastW, lastH, lastS=1;
	window.addEventListener('resize', resizeCanvas);
	resizeCanvas();
	function resizeCanvas() {
		var w = lib.properties.width, h = lib.properties.height;
		var iw = window.innerWidth, ih=window.innerHeight;
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
		if(isResp) {
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
				sRatio = lastS;
			}
			else if(!isScale) {
				if(iw<w || ih<h)
					sRatio = Math.min(xRatio, yRatio);
			}
			else if(scaleType==1) {
				sRatio = Math.min(xRatio, yRatio);
			}
			else if(scaleType==2) {
				sRatio = Math.max(xRatio, yRatio);
			}
		}
		domContainers[0].width = w * pRatio * sRatio;
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {
			container.style.width = w * sRatio + 'px';
			container.style.height = h * sRatio + 'px';
		});
		stage.scaleX = pRatio*sRatio;
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;
		stage.tickOnUpdate = false;
		stage.update();
		stage.tickOnUpdate = true;
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
