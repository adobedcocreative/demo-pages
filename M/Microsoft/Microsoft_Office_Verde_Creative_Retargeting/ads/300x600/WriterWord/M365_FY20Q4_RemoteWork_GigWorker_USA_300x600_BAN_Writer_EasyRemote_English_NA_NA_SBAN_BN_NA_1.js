(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"M365_FY20Q4_RemoteWork_GigWorker_USA_300x600_BAN_Writer_EasyRemote_English_NA_NA_SBAN_BN_NA_1_atlas_", frames: [[354,0,410,473],[766,0,200,264],[0,0,352,600],[354,475,300,196]]}
];


// symbols:



(lib._300x600_FG = function() {
	this.initialize(ss["M365_FY20Q4_RemoteWork_GigWorker_USA_300x600_BAN_Writer_EasyRemote_English_NA_NA_SBAN_BN_NA_1_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bush_300x600 = function() {
	this.initialize(ss["M365_FY20Q4_RemoteWork_GigWorker_USA_300x600_BAN_Writer_EasyRemote_English_NA_NA_SBAN_BN_NA_1_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.layeredFile_300x600 = function() {
	this.initialize(ss["M365_FY20Q4_RemoteWork_GigWorker_USA_300x600_BAN_Writer_EasyRemote_English_NA_NA_SBAN_BN_NA_1_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.wordImage_300x600 = function() {
	this.initialize(ss["M365_FY20Q4_RemoteWork_GigWorker_USA_300x600_BAN_Writer_EasyRemote_English_NA_NA_SBAN_BN_NA_1_atlas_"]);
	this.gotoAndStop(3);
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


(lib.whiteRect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whiteRect, new cjs.Rectangle(0,0,300,600), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("EhMKAalMAAAg1KMCYVAAAMAAAA1Kg");
	this.shape.setTransform(487.5,170.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.white, new cjs.Rectangle(0,0,975,340.3), null);


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
	this.txt = new cjs.Text("Research shows indoor plants help\nto decrease common toxins and\npollutants, such as benzene and formaldehyde, in the air. One\nstudy found that the snake plant\nabsorbs toxins, releases moisture\ninto the air, and lessens airborne allergens. Even if you’re using air\nfilters and purifiers, surrounding yourself with indoor plants can", "17px 'Segoe Pro'", "#454545");
	this.txt.name = "txt";
	this.txt.lineHeight = 25;
	this.txt.lineWidth = 280;
	this.txt.parent = this;
	this.txt.setTransform(0.15,0.2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_fix, new cjs.Rectangle(-1.8,-1.8,283.8,275.90000000000003), null);


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
	this.txt = new cjs.Text("Research shows indoor plants help to greatly decrease common\ntoxins and pollutants, such as benzene and formaldehyde, in the\nair. One study found that the\nsnake plant absorbs toxins,\nreleases moisture into the air, and lessens airborne allergens. Even if you’re using air filters and\npurifiers, surrounding yourself with indoor ", "17px 'Segoe Pro'", "#454545");
	this.txt.name = "txt";
	this.txt.lineHeight = 25;
	this.txt.lineWidth = 271;
	this.txt.parent = this;
	this.txt.setTransform(0.15,0.2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_1, new cjs.Rectangle(-1.8,-1.8,274.90000000000003,275.90000000000003), null);


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
	this.txt = new cjs.Text("8 Healthy Benefits of\nIndoor Plants", "26px 'Segoe Pro'", "#2B579A");
	this.txt.name = "txt";
	this.txt.lineHeight = 31;
	this.txt.lineWidth = 252;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.titletext, new cjs.Rectangle(0,0,255.9,70.1), null);


(lib.slide_tab = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B6B6B6").s().p("AgeELQgEAAgDgDQgDgDABgDIAAoCQAAgEADgDQADgDADAAIA9AAQAEAAACADQADADAAAEIAAICQgBADgCADQgDADgEAAgAgjkFQgCACAAADIAAICQgBAHAIAAIA8AAQAFAAADgHQgCAAACoCQAAgDgCgCQgCgDgDAAIg9AAQgDAAgCADg");
	this.shape.setTransform(-0.8333,16.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeEJQgDAAgCgCQgCgCAAgDIAAoDIAAgFQABgCAGAAIA8AAQAIAAAAAHIAAIDQAAAHgIAAg");
	this.shape_1.setTransform(-0.825,16.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.slide_tab, new cjs.Rectangle(-4.8,-10.4,8,53.4), null);


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


(lib.shadowOverlay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(55,69,30,0)","#4F4439","rgba(52,64,27,0)"],[0.192,0.471,0.741],0,-22.9,0,23).s().p("EgkAADmIAAnLMBIBAAAIAAHLg");
	this.shape.setTransform(230.475,22.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shadowOverlay, new cjs.Rectangle(0,0,461,46), null);


(lib.scene1_fg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.layeredFile_300x600();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scene1_fg, new cjs.Rectangle(0,0,352,600), null);


(lib.right_icons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglAgIAAg/IBLAAIAAA/gAADAaIAdAAIAAgmIg/AAIAAAmIAdAAIAAgaIgIAIIgFgEIAPgPIAQAPIgEAEIgJgIgAgfgSIA/AAIAAgHIg/AAg");
	this.shape.setTransform(3.8288,3.2752);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAfIAAgwIAMAAIAAgOIAxAAIAAAyIgMAAIAAAMgAgZAaIAnAAIAAgmIgnAAgAgMgRIAfAAIAAAeIAGAAIAAgmIglAAg");
	this.shape_1.setTransform(30.0792,3.3502);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAEIgcAdIgEgEIAdgdIgdgcIAEgEIAcAdIAdgdIAEAEIgdAcIAdAdIgEAEg");
	this.shape_2.setTransform(44.4544,3.3252);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeACIAAgDIA9AAIAAADg");
	this.shape_3.setTransform(17.479,3.2502);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.right_icons, new cjs.Rectangle(0,0,47.8,6.7), null);


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
	this.shape.graphics.f("#FD0201").s().p("AH4AIQgDgDAAgFQAAgDADgDQADgDAFAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgFAAgDgDgAHZAIQgDgDAAgFQAAgDADgDQADgDAFAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgFAAgDgDgAG6AIQgDgDAAgFQAAgDADgDQADgDAEAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDgAGbAIQgDgDAAgFQAAgDADgDQADgDAFAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgFAAgDgDgAF8AIQgDgDAAgFQAAgDADgDQADgDAEAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDgAFdAIQgDgDAAgFQAAgDADgDQADgDAFAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgFAAgDgDgAE+AIQgDgDAAgFQAAgDADgDQADgDAEAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDgAEfAIQgDgDAAgFQAAgDADgDQADgDAFAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgFAAgDgDgAEAAIQgDgDAAgFQAAgDADgDQADgDAEAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDgADhAIQgDgDAAgFQAAgDADgDQADgDAFAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgFAAgDgDgADCAIQgDgDAAgFQAAgDADgDQADgDAFAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgFAAgDgDgACjAIQgDgDAAgFQAAgDADgDQADgDAEAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDgACEAIQgDgDAAgFQAAgDADgDQADgDAFAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgFAAgDgDgABlAIQgDgDAAgFQAAgDADgDQADgDAEAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDgABGAIQgDgDAAgFQAAgDADgDQADgDAFAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgFAAgDgDgAAnAIQgDgDAAgFQAAgDADgDQADgDAEAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDgAAIAIQgDgDAAgFQAAgDADgDQADgDAFAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgFAAgDgDgAgWAIQgDgDAAgFQAAgDADgDQADgDAEAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDgAg1AIQgDgDAAgFQAAgDADgDQADgDAEAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDgAhUAIQgDgDAAgFQAAgDADgDQADgDAFAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgFAAgDgDgAhzAIQgDgDAAgFQAAgDADgDQADgDAEAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDgAiSAIQgDgDAAgFQAAgDADgDQADgDAFAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgFAAgDgDgAixAIQgDgDAAgFQAAgDADgDQADgDAEAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDgAjQAIQgDgDAAgFQAAgDADgDQADgDAFAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgFAAgDgDgAjvAIQgDgDAAgFQAAgDADgDQADgDAEAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDgAkOAIQgDgDAAgFQAAgDADgDQADgDAFAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgFAAgDgDgAktAIQgDgDAAgFQAAgDADgDQADgDAEAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDgAlMAIQgDgDAAgFQAAgDADgDQADgDAEAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDgAlrAIQgDgDAAgFQAAgDADgDQADgDAFAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgFAAgDgDgAmKAIQgDgDAAgFQAAgDADgDQADgDAEAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDgAmpAIQgDgDAAgFQAAgDADgDQADgDAFAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgFAAgDgDgAnIAIQgDgDAAgFQAAgDADgDQADgDAEAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDgAnnAIQgDgDAAgFQAAgDADgDQADgDAFAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgFAAgDgDgAoGAIQgDgDAAgFQAAgDADgDQADgDAEAAQAFAAADADQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDgAolAIQgDgDAAgFQAAgDADgDQADgDAFAAQAEAAADADQADADAAADQAAAFgDADQgDADgEAAQgFAAgDgDgAIXAHQgDgDAAgEQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape.setTransform(53.25,1.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.reddots, new cjs.Rectangle(-2,0.4,110.6,2.2), null);


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
	this.txt = new cjs.Text("Page 4 of 5  818 words", "7px 'Segoe Pro'", "#626262");
	this.txt.name = "txt";
	this.txt.lineHeight = 11;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ready_txt, new cjs.Rectangle(0,0,72.6,14.1), null);


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
	this.txt = new cjs.Text("150%", "7px 'Segoe Pro'", "#626262");
	this.txt.name = "txt";
	this.txt.lineHeight = 11;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Percentage_txt, new cjs.Rectangle(0,0,20.2,13.5), null);


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
	this.txt = new cjs.Text("Draw", "9px 'Segoe Pro'", "#494846");
	this.txt.name = "txt";
	this.txt.lineHeight = 13;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PageLayout_txt, new cjs.Rectangle(0,0,23.6,15.5), null);


(lib.Overlay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("EgZAAuaMAAJhczMAx5AAAMgAKBczgAx9P+IUXAAIAAjtI0XAAg");
	this.shape.setTransform(159.15,296.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.4)").s().p("EgZAAuaMAAJhczMAx5AAAMgAKBczgAyGP+ILnAAIAAjtIrnAAg");
	this.shape_1.setTransform(159.15,296.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,320.3,594);


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
	this.txt.lineHeight = 10;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ON_txt, new cjs.Rectangle(0,0,12.5,12.5), null);


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
	this.txt = new cjs.Text("Daniela Duarte", "7px 'Segoe Pro'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.lineHeight = 11;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Name_txt, new cjs.Rectangle(0,0,50.6,13.6), null);


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


(lib.left_icons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKANIAMgNIgMgMIAFgEIAQAQIgQARg");
	this.shape.setTransform(51.0765,5.2502);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhEAyQgVAAgOgOQgPgPAAgVQAAgTAPgPQAOgPAVAAICJAAQAVAAAPAPQAOAPAAATQAAAVgOAPQgPAOgVAAgAA1gPQgHAHAAAIQAAAKAHAHQAHAHAJAAQAKAAAHgHQAHgHAAgKQAAgIgHgHQgHgHgKAAQgJAAgHAHg");
	this.shape_1.setTransform(11.9259,5.0252);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiAzIgRgRIAAhUIBnAAIAABlgAAaAOIAAAfIATAAIAAhZIgNAAIAAAnIg/AAIAAgnIgOAAIAABMIAOANIAHAAIAAgfgAgSAtIAmAAIAAgZIgmAAgAgZgLIAzAAIAAghIgzAAg");
	this.shape_2.setTransform(36.0762,5.3253);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKANIAMgNIgMgMIAFgEIAQAQIgQARg");
	this.shape_3.setTransform(48.6264,5.2502);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.left_icons, new cjs.Rectangle(0,0,52.2,10.5), null);


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
	this.txt = new cjs.Text("Insert", "9px 'Segoe Pro'", "#494846");
	this.txt.name = "txt";
	this.txt.lineHeight = 13;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Insert_txt, new cjs.Rectangle(0,0,24.8,15.5), null);


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
	this.txt = new cjs.Text("Home", "9px 'Segoe Pro'", "#494846");
	this.txt.name = "txt";
	this.txt.lineHeight = 13;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Home_txt, new cjs.Rectangle(0,0,26.9,16), null);


(lib.greyicons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#345699").s().p("AgUANIgGAAIAAglIA2AAIAAAlIgjAAIgNAMgAgXAJIAHAAIAAAIIAIgIIAgAAIAAgeIgvAAg");
	this.shape.setTransform(89.0038,5.8507);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBE9E7").s().p("AjxA7QgFAAgDgDQgDgDAAgFIAAhfQAAgEADgDQADgEAFAAIHjAAQAFAAADAEQADADAAAEIAABfQAAAFgDADQgDADgFAAgAj3g1QgCADgBADIAABfQABADACADQACACAEAAIHjAAQAEAAACgCQACgDABgDIAAhfQgBgDgCgDQgCgDgEABInjAAQgEgBgCADg");
	this.shape_1.setTransform(107.3041,5.9007);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjnA7QgIAAgGgGQgHgGAAgKIAAhJQAAgJAHgHQAGgGAIAAIHPAAQAIAAAHAGQAGAHAAAJIAABJQAAAKgGAGQgHAGgIAAg");
	this.shape_2.setTransform(107.3041,5.9007);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#345699").s().p("AADAJIgGABIgHACIgHAEQgEACgBADIAAgEIABgHIACgGIAEgFIAFgEIAHgCIAGgBIAAgMIAVAUIgVAVgAgCgEIgDABIgFADIgDADIgEAEIgBAFIAKgFIALgBIAEAAIAAAGIALgMIgLgLIAAAGIgEAAg");
	this.shape_3.setTransform(51.2532,4.6757);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#345699").s().p("AgYATIAAglIADAAIAAAjIArAAIAAgUIADAAIAAAWg");
	this.shape_4.setTransform(50.1532,6.9257);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EBE9E7").s().p("AieA7QgFAAgDgDQgDgDAAgFIAAhfQAAgEADgDQADgEAFAAIE+AAQAEAAADAEQADADAAAEIAABfQAAAFgDADQgDADgEAAgAingvIAABfQAAAJAJgBIE+AAQADAAACgCQADgDAAgDIAAhfQAAgDgDgDQgCgDgDABIk+AAQgJAAAAAIg");
	this.shape_5.setTransform(60.6784,5.9007);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiUA7QgJAAgGgGQgGgGAAgKIAAhJQAAgJAGgHQAGgGAJAAIEpAAQAJAAAGAGQAGAHAAAJIAABJQAAAKgGAGQgGAGgJAAg");
	this.shape_6.setTransform(60.6784,5.9007);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#494846").s().p("AgQAUIATgUIgTgTIAHgHIAaAaIgaAbg");
	this.shape_7.setTransform(5.101,5.8337,1.0993,1.0993);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#494846").s().p("AgRAUIAVgUIgVgTIAHgHIAbAaIgbAbg");
	this.shape_8.setTransform(1.8306,5.8337,1.0993,1.0993);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.greyicons, new cjs.Rectangle(-0.1,0,132.7,11.8), null);


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
	this.txt = new cjs.Text("Design", "9px 'Segoe Pro'", "#494846");
	this.txt.name = "txt";
	this.txt.lineHeight = 13;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Formulas_txt, new cjs.Rectangle(0,0,29.7,15.5), null);


(lib.fore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib._300x600_FG();
	this.instance.setTransform(-87,3,0.9915,0.9915);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fore, new cjs.Rectangle(-87,0,407,472), null);


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
	this.txt = new cjs.Text("Word", "10px 'Segoe Pro'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.lineHeight = 15;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Excel_txt, new cjs.Rectangle(0,0,28.7,17.5), null);


(lib.docImage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.wordImage_300x600();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.docImage, new cjs.Rectangle(0,0,300,196), null);


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


(lib.bushes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-15.4,8.7,-15.4,28.9).s().p("EglmAHsIAAvXMBLNAAAIAAPXg");
	this.shape.setTransform(158.275,22.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance = new lib.bush_300x600();
	this.instance.setTransform(158,5,1.2064,1.2064);

	this.instance_1 = new lib.bush_300x600();
	this.instance_1.setTransform(-82,5,1.2064,1.2064);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bushes, new cjs.Rectangle(-82.4,-26.4,481.70000000000005,349.9), null);


(lib.bottom_icons_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#706F6F").s().p("AgEACIAAgCIAJAAIAAACg");
	this.shape.setTransform(68.3273,7.359);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#706F6F").s().p("AgKABIAAgBIAVAAIAAABg");
	this.shape_1.setTransform(70.5524,6.109);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#706F6F").s().p("AgKABIAAgCIAVAAIAAACg");
	this.shape_2.setTransform(70.5524,5.159);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#706F6F").s().p("AgKACIAAgCIAVAAIAAACg");
	this.shape_3.setTransform(70.5524,4.209);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#706F6F").s().p("AgKACIAAgCIAVAAIAAACg");
	this.shape_4.setTransform(70.5524,3.309);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#706F6F").s().p("AgKABIAAgBIAVAAIAAABg");
	this.shape_5.setTransform(70.5524,2.359);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#706F6F").s().p("AgKACIAAgDIAVAAIAAADg");
	this.shape_6.setTransform(70.5524,1.409);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#706F6F").s().p("AgKABIAAgBIAVAAIAAABg");
	this.shape_7.setTransform(66.1523,6.109);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#706F6F").s().p("AgKABIAAgCIAVAAIAAACg");
	this.shape_8.setTransform(66.1523,5.159);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#706F6F").s().p("AgKACIAAgCIAVAAIAAACg");
	this.shape_9.setTransform(66.1523,4.209);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#706F6F").s().p("AgKACIAAgCIAVAAIAAACg");
	this.shape_10.setTransform(66.1523,3.309);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#706F6F").s().p("AgKABIAAgBIAVAAIAAABg");
	this.shape_11.setTransform(66.1523,2.359);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#706F6F").s().p("AgKACIAAgDIAVAAIAAADg");
	this.shape_12.setTransform(66.1523,1.409);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#706F6F").s().p("AgEABIAAgBIAJAAIAAABg");
	this.shape_13.setTransform(68.3273,6.409);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#706F6F").s().p("AgEACIAAgDIAJAAIAAADg");
	this.shape_14.setTransform(68.3273,5.459);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#706F6F").s().p("AgEABIAAgBIAJAAIAAABg");
	this.shape_15.setTransform(68.3273,4.509);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#706F6F").s().p("AgEABIAAgBIAJAAIAAABg");
	this.shape_16.setTransform(68.3273,3.609);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#706F6F").s().p("AgEACIAAgDIAJAAIAAADg");
	this.shape_17.setTransform(68.3273,2.659);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#706F6F").s().p("AgEABIAAgBIAJAAIAAABg");
	this.shape_18.setTransform(68.3273,1.709);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#706F6F").s().p("AgBAkIAAhGIADAAIAABGg");
	this.shape_19.setTransform(68.3023,4.309);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#706F6F").s().p("AgEACIAAgDIAJAAIAAADg");
	this.shape_20.setTransform(68.3273,0.7589);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#706F6F").s().p("AgSAjIAAhEIAlAAIAAACIgiAAIAAA+IAiAAIAAAEg");
	this.shape_21.setTransform(65.9773,3.759);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#706F6F").s().p("AgSAjIAAgEIAiAAIAAg+IgiAAIAAgCIAlAAIAABEg");
	this.shape_22.setTransform(70.7024,3.759);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#706F6F").s().p("AgoAmIAAhLIBRAAIAABLgAglAjIBLAAIAAhFIhLAAg");
	this.shape_23.setTransform(84.8276,3.884);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#706F6F").s().p("AgfACIAAgDIA/AAIAAADg");
	this.shape_24.setTransform(84.8276,6.259);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#706F6F").s().p("AgfABIAAgBIA/AAIAAABg");
	this.shape_25.setTransform(84.8276,5.309);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#706F6F").s().p("AgfACIAAgDIA/AAIAAADg");
	this.shape_26.setTransform(84.8276,4.359);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#706F6F").s().p("AgfABIAAgBIA/AAIAAABg");
	this.shape_27.setTransform(84.8276,3.409);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#706F6F").s().p("AgfABIAAgCIA/AAIAAACg");
	this.shape_28.setTransform(84.8276,2.459);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#706F6F").s().p("AgfACIAAgCIA/AAIAAACg");
	this.shape_29.setTransform(84.8276,1.509);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#747474").s().p("AgjAhIAAhBIBHAAIAAAgIgDAAIAAgdIhCAAIAAA7IAgAAIAAADg");
	this.shape_30.setTransform(100.9778,3.334);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#747474").s().p("AgIACIAAgDIASAAIAAADg");
	this.shape_31.setTransform(99.5528,5.259);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#747474").s().p("AgLACIAAgCIAXAAIAAACg");
	this.shape_32.setTransform(99.8528,4.309);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#747474").s().p("AgQABIAAgCIAhAAIAAACg");
	this.shape_33.setTransform(100.3528,3.359);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#747474").s().p("AgXACIAAgCIAvAAIAAACg");
	this.shape_34.setTransform(100.9778,2.409);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#747474").s().p("AgXABIAAgCIAvAAIAAACg");
	this.shape_35.setTransform(100.9778,1.459);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#747474").s().p("AgPAQQgHgGAAgKQAAgJAHgGQAHgIAIABQAKgBAGAIQAHAGAAAJQAAAKgHAGQgGAIgKgBQgIABgHgIgAgTAAQAAAIAGAFQAGAGAHABIADgBIgBgGIgCgIQgBgFgDgBIgDgBQgEgCgBgFIAAgCIgCAAIAAgBQgFAHAAAFgAAGgPIgBACQgFAIAAABIAAADQAAACAEABIAOAFIAAAAIACgHQAAgMgLgEIgBAAg");
	this.shape_36.setTransform(103.3779,5.809);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#707070").s().p("AgUABIAAgBIAEgEIAAAAIACABIAKALIATgZIABAAIAAAAIAFADIAAABIgYAgg");
	this.shape_37.setTransform(7.0014,4.409);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#707070").s().p("AAAAkQAAgEgRAAIgXAAIAAhDIAPAAQAVAAAFAIQAFgIAUAAIAPAAIAAAOIgCAEIAAgPIgNAAQgYAAAAAKIAAA2QADgCAOAAIAUAAIAAgeIACgCIAAAiIgWAAQgRAAAAAEgAgmAeIAVAAQAPAAACACIAAg2QAAgKgZAAIgNAAg");
	this.shape_38.setTransform(4.1513,4.684);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#747474").s().p("AgQADIAAgFIAhAAIAAAFg");
	this.shape_39.setTransform(114.528,3.884);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CACAC9").s().p("AgCAPIAAgdIAFAAIAAAdg");
	this.shape_40.setTransform(150.3536,3.859);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#747474").s().p("AgNAjIAAhFIAaAAIAABFg");
	this.shape_41.setTransform(154.3536,3.559);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CACAC9").s().p("Ak3AFIAAgJIJvAAIAAAJg");
	this.shape_42.setTransform(150.6536,3.859);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#626262").s().p("AgCAXIAAgUIgUAAIAAgFIAUAAIAAgUIAFAAIAAAUIAUAAIAAAFIgUAAIAAAUg");
	this.shape_43.setTransform(185.8291,3.884);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bottom_icons_, new cjs.Rectangle(0,0,188.1,8.3), null);


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
	this.txt = new cjs.Text("AutoSave", "7px 'Segoe Pro'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.lineHeight = 11;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AutoSave_txt, new cjs.Rectangle(0,0,33.1,14), null);


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

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(-1.8,-1.8,274.90000000000003,275.90000000000003), null);


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

}).prototype = getMCSymbolPrototype(lib.txt_2, new cjs.Rectangle(-1.8,-1.8,283.8,275.90000000000003), null);


(lib.top_right = function(mode,startPosition,loop) {
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
	this.icons = new lib.right_icons();
	this.icons.name = "icons";
	this.icons.setTransform(23.9,3.3,1,1,0,0,0,23.9,3.3);

	this.timeline.addTween(cjs.Tween.get(this.icons).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.top_right, new cjs.Rectangle(0,0,47.8,6.7), null);


(lib.top_left = function(mode,startPosition,loop) {
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
		this.icons.cache(-55,-15,110,30,2)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.icons = new lib.left_icons();
	this.icons.name = "icons";
	this.icons.setTransform(26.1,5.2,1,1,0,0,0,26.1,5.2);

	this.timeline.addTween(cjs.Tween.get(this.icons).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.top_left, new cjs.Rectangle(0,0,52.2,10.5), null);


(lib.textanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// TextDynamic
	this.instance = new lib.txt1();
	this.instance.setTransform(148.45,297.75,1,1,0,0,0,144.8,43.5);

	this.instance_1 = new lib.txt_2();
	this.instance_1.setTransform(139.45,297.75,1,1,0,0,0,135.8,43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// TitleTextDynamic
	this.instance_2 = new lib.titletext();
	this.instance_2.setTransform(129.5,223.5,1,1,0,0,0,127.9,35.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,0,284.09999999999997,528.4);


(lib.slidebar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.tab = new lib.slide_tab();
	this.tab.name = "tab";
	this.tab.setTransform(3.1,10.4);

	this.timeline.addTween(cjs.Tween.get(this.tab).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.slidebar, new cjs.Rectangle(-1.7,0,8,53.4), null);


(lib.ScreenBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Image
	this.instance = new lib.docImage();
	this.instance.setTransform(150,88.3,1,1,0,0,0,150,98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.whiteRect();
	this.instance_1.setTransform(150,236,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ScreenBG, new cjs.Rectangle(0,-64,300,600), null);


(lib.scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.fg = new lib.fore();
	this.fg.name = "fg";
	this.fg.setTransform(172.85,230.4,0.9749,0.9749,0,0,0,160,236);

	this.timeline.addTween(cjs.Tween.get(this.fg).wait(1));

	// Layer_1
	this.bg = new lib.bushes();
	this.bg.name = "bg";
	this.bg.setTransform(205.5,165.1,0.9749,0.9749,0,0,0,199.5,132);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scene3, new cjs.Rectangle(-69.3,3.2,469.6,457.3), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:16.55,alpha:1},1).to({_off:true},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.3,0,32.199999999999996,30.6);


(lib.officeBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// table
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(159,139,125,0)","#553019","#876A50","rgba(109,130,111,0)"],[0.039,0.196,0.635,0.788],7.7,-27.6,7.3,63.7).s().p("AvOD6IAAnzIedAAIAAHzg");
	this.shape.setTransform(807.475,623.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance = new lib.shadowOverlay();
	this.instance.setTransform(284.6,132.9,1.3418,1,0,0,4.017,230.5,23.1);

	this.instance_1 = new lib.shadowOverlay();
	this.instance_1.setTransform(901.55,130.1,1.3429,1,0,0,-4.6502,230.5,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#453B37","#848481"],[0.055,0.471],-16.9,133.1,-14.7,-27.2).s().p("EhCFAMqIAyzDUAAAAATBBsgEzUAg2gCbAg3gCdIhkX5MhcpAHqg");
	this.shape_1.setTransform(774.975,57.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(153,133,119,0)","#938072","#8D7B6D","rgba(128,128,126,0)"],[0.055,0.204,0.8,0.894],0,46,0,-46).s().p("EggLgGjMBAXgDIIAAQPMhAXADIg");
	this.shape_2.setTransform(877.025,152.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(159,139,125,0)","#9B8779","#938072","#B7AFAA","#D0D9E0","#D3DBE2","#D1D9E0","#9EA09D","#ABB3BC","#A8AAA7","#5F5F5F","rgba(140,157,174,0.467)","rgba(153,181,197,0.549)","rgba(167,191,205,0)"],[0,0.039,0.102,0.161,0.204,0.263,0.298,0.333,0.376,0.4,0.459,0.518,0.549,0.647],-84.9,-1.8,85,1.7).s().p("EgQiBDVMACziHRIeSAoMgCzCHRg");
	this.shape_3.setTransform(746.025,595.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#6E5F54","#55473E","#53443A","rgba(50,50,43,0)"],[0.055,0.204,0.925,0.988],-129.6,-2.3,129.6,2.3).s().p("EgOwhKmIGuAUIAKAUQAHANOtAyQDrAMDsAKIHWAZMgCgCRnMgoxABQg");
	this.shape_4.setTransform(469.45,615.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFC","rgba(255,255,252,0)"],[0.498,0.616],-4.4,-82.6,-4.4,199.5).s().p("A4SLLIAA2VMAwlAAAIAAWVg");
	this.shape_5.setTransform(882.5,229.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer_7
	this.instance_2 = new lib.bush_300x600();
	this.instance_2.setTransform(722,279,1.6136,1.6136);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer_6
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#6E5F54","#8F7B6D","#6B5A4C"],[0.055,0.204,0.882],-343.8,-9,343.8,9.1).s().p("Eg1vBKnMAC+iNZMBhfgPoUgAGAAIADjBSPMADlBSegEAuuhSaIAAAAIAAAAg");
	this.shape_6.setTransform(819.975,429.5247);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.officeBG, new cjs.Rectangle(-23.9,-97.9,1233.9,1190.9), null);


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
	this.instance.setTransform(298.5,897.95,0.2,0.2,0,0,0,-39.8,1.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regX:-40,regY:1.4,scaleX:4.9325,scaleY:4.9325,x:298.4,y:897.45},13,cjs.Ease.quadOut).to({x:24.15},12,cjs.Ease.quadInOut).to({_off:true},1).wait(48));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("EgSYBKRIAAwpMBbuAAAIAAQpg");
	var mask_graphics_15 = new cjs.Graphics().p("EgSrBKRIAAwpMBbtAAAIAAQpg");
	var mask_graphics_16 = new cjs.Graphics().p("EgTlBKRIAAwpMBbuAAAIAAQpg");
	var mask_graphics_17 = new cjs.Graphics().p("EgVEBKRIAAwpMBbuAAAIAAQpg");
	var mask_graphics_18 = new cjs.Graphics().p("EgXJBKRIAAwpMBbuAAAIAAQpg");
	var mask_graphics_19 = new cjs.Graphics().p("EgZ1BKRIAAwpMBbuAAAIAAQpg");
	var mask_graphics_20 = new cjs.Graphics().p("EgdHBKRIAAwpMBbuAAAIAAQpg");
	var mask_graphics_21 = new cjs.Graphics().p("EggYBKRIAAwpMBbuAAAIAAQpg");
	var mask_graphics_22 = new cjs.Graphics().p("EgjEBKRIAAwpMBbuAAAIAAQpg");
	var mask_graphics_23 = new cjs.Graphics().p("EglJBKRIAAwpMBbuAAAIAAQpg");
	var mask_graphics_24 = new cjs.Graphics().p("EgmoBKRIAAwpMBbuAAAIAAQpg");
	var mask_graphics_25 = new cjs.Graphics().p("EgniBKRIAAwpMBbuAAAIAAQpg");
	var mask_graphics_26 = new cjs.Graphics().p("Egn1BKRIAAwpMBbuAAAIAAQpg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:469.3539,y:475.2595}).wait(1).to({graphics:mask_graphics_15,x:467.448,y:475.2595}).wait(1).to({graphics:mask_graphics_16,x:461.7303,y:475.2595}).wait(1).to({graphics:mask_graphics_17,x:452.2008,y:475.2595}).wait(1).to({graphics:mask_graphics_18,x:438.8594,y:475.2595}).wait(1).to({graphics:mask_graphics_19,x:421.7063,y:475.2595}).wait(1).to({graphics:mask_graphics_20,x:400.7414,y:475.2595}).wait(1).to({graphics:mask_graphics_21,x:379.7765,y:475.2595}).wait(1).to({graphics:mask_graphics_22,x:362.6233,y:475.2595}).wait(1).to({graphics:mask_graphics_23,x:349.282,y:475.2595}).wait(1).to({graphics:mask_graphics_24,x:339.7525,y:475.2595}).wait(1).to({graphics:mask_graphics_25,x:334.0348,y:475.2595}).wait(1).to({graphics:mask_graphics_26,x:332.1289,y:475.2595}).wait(1).to({graphics:null,x:0,y:0}).wait(48));

	// Layer_7
	this.instance_1 = new lib.MSFT_Logo_anim();
	this.instance_1.setTransform(-132.35,891.55,4.9325,4.9325,0,0,0,0.1,0.2);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({x:222.05},12,cjs.Ease.quadInOut).to({_off:true},24).wait(25));

	// white (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EhMKCXxMAAAkvhMCYVAAAMAAAEvhg");
	var mask_1_graphics_51 = new cjs.Graphics().p("EhMKCXxMAAAkvhMCYVAAAMAAAEvhg");
	var mask_1_graphics_52 = new cjs.Graphics().p("EhMKCXxMAAAkvhMCYVAAAMAAAEvhg");
	var mask_1_graphics_53 = new cjs.Graphics().p("EhMKCXxMAAAkvhMCYVAAAMAAAEvhg");
	var mask_1_graphics_54 = new cjs.Graphics().p("EhMKCXxMAAAkvhMCYVAAAMAAAEvhg");
	var mask_1_graphics_55 = new cjs.Graphics().p("EhMKCXxMAAAkvhMCYVAAAMAAAEvhg");
	var mask_1_graphics_56 = new cjs.Graphics().p("EhMKCXxMAAAkvhMCYVAAAMAAAEvhg");
	var mask_1_graphics_57 = new cjs.Graphics().p("EhMKCXxMAAAkvhMCYVAAAMAAAEvhg");
	var mask_1_graphics_58 = new cjs.Graphics().p("EhMKCXxMAAAkvhMCYVAAAMAAAEvhg");
	var mask_1_graphics_59 = new cjs.Graphics().p("EhMKCXxMAAAkvhMCYVAAAMAAAEvhg");
	var mask_1_graphics_60 = new cjs.Graphics().p("EhMKCXxMAAAkvhMCYVAAAMAAAEvhg");
	var mask_1_graphics_61 = new cjs.Graphics().p("EhMKCXxMAAAkvhMCYVAAAMAAAEvhg");
	var mask_1_graphics_62 = new cjs.Graphics().p("EhMKCXxMAAAkvhMCYVAAAMAAAEvhg");
	var mask_1_graphics_63 = new cjs.Graphics().p("EhMKCXxMAAAkvhMCYVAAAMAAAEvhg");
	var mask_1_graphics_64 = new cjs.Graphics().p("EhMKCXxMAAAkvhMCYVAAAMAAAEvhg");
	var mask_1_graphics_65 = new cjs.Graphics().p("EhMKCXxMAAAkvhMCYVAAAMAAAEvhg");
	var mask_1_graphics_66 = new cjs.Graphics().p("EhMKCXxMAAAkvhMCYVAAAMAAAEvhg");
	var mask_1_graphics_67 = new cjs.Graphics().p("EhMKCXxMAAAkvhMCYVAAAMAAAEvhg");
	var mask_1_graphics_68 = new cjs.Graphics().p("EhMKCXxMAAAkvhMCYVAAAMAAAEvhg");
	var mask_1_graphics_69 = new cjs.Graphics().p("EhMKCXxMAAAkvhMCYVAAAMAAAEvhg");
	var mask_1_graphics_70 = new cjs.Graphics().p("EhM1CXxMAAAkvhMCYVAAAMAAAEvhg");
	var mask_1_graphics_71 = new cjs.Graphics().p("EhTjCXxMAAAkvhMCYVAAAMAAAEvhg");
	var mask_1_graphics_72 = new cjs.Graphics().p("EhanCXxMAAAkvhMCYVAAAMAAAEvhg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:300.0574,y:903.7506}).wait(51).to({graphics:mask_1_graphics_51,x:300.0574,y:903.7506}).wait(1).to({graphics:mask_1_graphics_52,x:297.8521,y:903.7506}).wait(1).to({graphics:mask_1_graphics_53,x:291.2361,y:903.7506}).wait(1).to({graphics:mask_1_graphics_54,x:280.2095,y:903.7506}).wait(1).to({graphics:mask_1_graphics_55,x:264.7722,y:903.7506}).wait(1).to({graphics:mask_1_graphics_56,x:244.9242,y:903.7506}).wait(1).to({graphics:mask_1_graphics_57,x:220.6656,y:903.7506}).wait(1).to({graphics:mask_1_graphics_58,x:191.9963,y:903.7506}).wait(1).to({graphics:mask_1_graphics_59,x:158.9164,y:903.7506}).wait(1).to({graphics:mask_1_graphics_60,x:121.4258,y:903.7506}).wait(1).to({graphics:mask_1_graphics_61,x:79.5246,y:903.7506}).wait(1).to({graphics:mask_1_graphics_62,x:33.2127,y:903.7506}).wait(1).to({graphics:mask_1_graphics_63,x:-17.5099,y:903.7506}).wait(1).to({graphics:mask_1_graphics_64,x:-72.6431,y:903.7506}).wait(1).to({graphics:mask_1_graphics_65,x:-132.187,y:903.7506}).wait(1).to({graphics:mask_1_graphics_66,x:-196.1415,y:903.7506}).wait(1).to({graphics:mask_1_graphics_67,x:-264.5067,y:903.7506}).wait(1).to({graphics:mask_1_graphics_68,x:-337.2826,y:903.7506}).wait(1).to({graphics:mask_1_graphics_69,x:-414.4691,y:903.7506}).wait(1).to({graphics:mask_1_graphics_70,x:-491.7868,y:903.7506}).wait(1).to({graphics:mask_1_graphics_71,x:-534.7908,y:903.7506}).wait(1).to({graphics:mask_1_graphics_72,x:-580,y:903.7506}).wait(3));

	// Layer_9
	this.instance_2 = new lib.MSFT_Logo_anim();
	this.instance_2.setTransform(222.05,891.55,4.9325,4.9325,0,0,0,0.1,0.2);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50).to({_off:false},0).wait(25));

	// white
	this.instance_3 = new lib.white();
	this.instance_3.setTransform(297.95,2254.65,1,5.7086,0,0,0,485.4,406.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(51).to({regY:406.9,scaleY:5.7085,x:-674.6,y:2255.2},21,cjs.Ease.quadIn).wait(3));

	// white copy
	this.instance_4 = new lib.white();
	this.instance_4.setTransform(297.95,2255.25,1,5.7085,0,0,0,485.4,406.9);
	this.instance_4.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(53).to({x:-674.6},21,cjs.Ease.quadIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1160,-67.6,1947.6,1943.5);


(lib.menu_bg_sub = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAVQgGgIAAgNQABgLAFgIQAFgJAKAAQAKAAAHAJQAEAIAAALQABANgHAIQgFAIgKAAQgJAAgGgIg");
	this.shape.setTransform(294.3015,51.8262);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAVQgFgIgBgNQAAgLAGgIQAFgJAKAAQALAAAFAJQAGAIAAALQAAANgHAIQgFAIgKAAQgJAAgGgIg");
	this.shape_1.setTransform(284.2013,51.8262);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#606061").s().p("AgrAEIAAgIIBYAAIAAAIg");
	this.shape_2.setTransform(279.0012,184.9532);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#606061").s().p("AgaAhQgLgMAAgUQAAgSALgNQALgOARAAQATAAAKAPQAHAKAAAQIAAAGIg8AAQAAAPAJAIQAIAHAMAAQANAAAKgFIADAMQgMAFgRAAQgSAAgMgMgAgPgZQgGAHgBAKIAtAAQAAgJgEgHQgGgJgMAAQgKAAgGAIg");
	this.shape_3.setTransform(339.5271,178.8532);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#606061").s().p("AgUAsIgBhWIAOAAIABARIAAAAQAGgSARAAIAFAAIAAAPIgGAAQgIAAgGAFQgEAGgCAJIAAA0g");
	this.shape_4.setTransform(332.777,178.7532);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#606061").s().p("AgdAhQgMgMAAgVQAAgTAMgNQAMgMASAAQASAAAMANQALALAAAUQAAAWgNAMQgMALgRAAQgSAAgLgMgAgTgWQgGAKAAAMQAAAPAHAJQAIAKAKAAQALAAAIgKQAHgJAAgPQAAgMgGgJQgHgMgNAAQgMAAgHALg");
	this.shape_5.setTransform(324.4769,178.8532);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#606061").s().p("AAvA8IgGhoIAAAAQgHAXgIAWIgWA7IgKAAIgUg6QgLgfgDgPIAAAAIgFBoIgPAAIAIh3IAUAAIAUA6IAMAoIAAAAIAMgoIAWg6IAUAAIAIB3g");
	this.shape_6.setTransform(312.3017,177.1531);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#606061").s().p("AgaAhQgLgMAAgUQAAgSALgNQALgOASAAQASAAAKAPQAHAKAAAQIAAAGIg8AAQAAAPAJAIQAHAHAMAAQANAAALgFIADAMQgMAFgRAAQgSAAgMgMgAgPgZQgGAHgBAKIAtAAQAAgKgEgGQgGgJgMAAQgKAAgGAIg");
	this.shape_7.setTransform(296.9015,178.8532);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#606061").s().p("AgaAhQgLgMAAgUQAAgSAKgNQAMgOARAAQATAAAKAPQAHAKAAAQIgBAGIg7AAQAAAPAJAIQAIAHAMAAQANAAALgFIACAMQgMAFgQAAQgTAAgMgMgAgPgZQgGAHgBAKIAtAAQAAgKgEgGQgGgJgMAAQgKAAgGAIg");
	this.shape_8.setTransform(287.9514,178.8532);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#606061").s().p("AgkA2IAFgNQAMAIAQAAQAKAAAHgGQAHgFgBgKQAAgPgVgIQgggKAAgXQAAgOALgKQAKgJARAAQARAAAKAGIgFAMQgMgFgKAAQgLAAgGAFQgFAFAAAIQAAAIAGAFQAEAFANAFQAQAGAGAHQAJAIgBANQAAAPgKAJQgMALgSAAQgUAAgMgIg");
	this.shape_9.setTransform(278.9512,177.1531);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#606061").s().p("AgyAEIAAgIIBlAAIAAAIg");
	this.shape_10.setTransform(291.9264,153.4528);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#606061").s().p("AALgTIAQgCQgIAagJAPIgKACQAGgRAFgYgAgPgTIAQgCQgIAcgIANIgKACQAGgRAEgYg");
	this.shape_11.setTransform(544.4053,141.6276);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#606061").s().p("AgbAnIAEgMQAJAGALAAQAQAAAAgMQAAgKgPgGQgXgHAAgRQAAgLAIgHQAIgHANAAQAMAAAJAFIgEAMQgIgFgJAAQgGAAgEADQgEAEAAAFQAAAFAEADQAEADAIADQAWAIAAARQAAAMgIAHQgJAHgOAAQgOAAgKgGg");
	this.shape_12.setTransform(537.9302,147.3277);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#606061").s().p("AgbAnIADgMQAKAGALAAQAQAAAAgMQAAgKgPgGQgXgHAAgRQAAgLAIgHQAIgHANAAQAMAAAJAFIgEAMQgIgFgKAAQgNAAAAAMQAAAFAEADQADADAIADQAXAIAAARQAAAMgIAHQgJAHgOAAQgOAAgKgGg");
	this.shape_13.setTransform(530.8801,147.3277);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#606061").s().p("AgaAhQgLgMAAgTQAAgUALgNQALgNARAAQATAAAKAOQAHALAAAQIAAAGIg8AAQAAAPAJAIQAIAHAMAAQANAAAKgFIADAMQgMAFgRAAQgSAAgMgMgAgPgYQgGAHgBAKIAtAAQAAgKgEgHQgGgJgMAAQgKAAgGAJg");
	this.shape_14.setTransform(522.8799,147.3277);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#606061").s().p("AAVAsIAAgxQAAgZgUAAQgGAAgGAFQgFAEgDAHIgBAHIAAAzIgPAAIgBhVIAOAAIABAOIAAAAQAIgQAUAAQALAAAJAHQAKAKAAAUIAAAyg");
	this.shape_15.setTransform(513.4298,147.2277);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#606061").s().p("AgaAhQgLgMAAgTQAAgUALgNQALgNARAAQATAAAKAOQAHALAAAQIAAAGIg8AAQAAAPAJAIQAIAHAMAAQANAAALgFIACAMQgMAFgRAAQgSAAgMgMgAgPgYQgGAHgBAKIAtAAQAAgKgEgHQgGgJgMAAQgKAAgGAJg");
	this.shape_16.setTransform(504.0297,147.3277);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#606061").s().p("AgbAnIADgMQALAGAKAAQAQAAAAgMQAAgKgPgGQgXgHAAgRQAAgLAIgHQAJgHAMAAQANAAAJAFIgFAMQgIgFgKAAQgFAAgEADQgEAEAAAFQAAAFAEADQAEADAHADQAXAIAAARQAAAMgIAHQgJAHgOAAQgOAAgKgGg");
	this.shape_17.setTransform(496.0045,147.3277);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#606061").s().p("AgHA8IAAhVIAPAAIAABVgAgGgrQgDgCAAgEQAAgEADgDQADgDADAAQAKAAAAAKQAAAJgKAAQgDAAgDgDg");
	this.shape_18.setTransform(490.3795,145.6277);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#606061").s().p("AgVAhQgMgNAAgTQAAgUANgMQAMgNAUAAQAOAAAIAFIgEAMQgHgEgLAAQgNgBgIAKQgJAJABANQAAAPAIAJQAIAJAMAAQAKgBAKgEIADAMQgKAFgPAAQgSAAgMgMg");
	this.shape_19.setTransform(484.4044,147.3527);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#606061").s().p("AAWAsIAAgxQgBgZgTAAQgHAAgGAFQgGAEgCAHQgBADAAAEIAAAzIgQAAIAAhVIAOAAIABAOIAAAAQAJgQASAAQAMAAAIAHQALAKAAAUIAAAyg");
	this.shape_20.setTransform(475.3542,147.2277);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#606061").s().p("AgdAhQgMgMAAgUQAAgUANgNQALgMASAAQASAAALAMQAMAMAAAUQAAAWgOAMQgLALgRAAQgRAAgMgMgAgTgWQgGAKgBAMQABAPAHAJQAIAJAKAAQALAAAHgJQAIgKAAgOQAAgMgGgJQgHgLgMAAQgNAAgHAKg");
	this.shape_21.setTransform(465.5041,147.3277);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#606061").s().p("AgcAuQgRgQAAgdQAAgbASgSQARgRAbAAQASAAALAFIgEANQgKgFgOAAQgVAAgMANQgNANAAAWQAAAXAMANQAMANAVAAQAOAAALgFIADAMQgLAGgUAAQgaAAgQgQg");
	this.shape_22.setTransform(455.6789,145.6527);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#606061").s().p("AgdA0QgLgMAAgUQAAgUALgNQALgMARAAQARAAAIANIAAAAIAAgzIAQAAIABB9IgOAAIgBgPIgBAAQgIARgUAAQgQAAgKgMgAgRgDQgHAIAAAPQAAAOAGAIQAHAKALAAQAIAAAHgFQAGgFACgJIABgHIAAgPIgBgHQgBgGgGgFQgGgGgJAAQgLAAgHAKg");
	this.shape_23.setTransform(441.3777,145.4277);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#606061").s().p("AAVAsIAAgxQAAgZgUAAQgGAAgGAFQgFAEgCAHQgCADAAAEIAAAzIgPAAIgBhVIANAAIABAOIABAAQAIgQAUAAQALAAAJAHQAKAKAAAUIAAAyg");
	this.shape_24.setTransform(431.6536,147.2277);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#606061").s().p("AgbAlQgHgHAAgKQAAgfAzAAIAAgBQAAgUgSAAQgMAAgKAGIgEgKQALgIAQAAQAhAAAAAjIAAAgQAAALABAJIgNAAIgCgLIgBAAQgJANgQAAQgNAAgHgIgAgSATQAAAPAPAAQAPAAAFgPIABgFIAAgOIgDAAQghAAAAATg");
	this.shape_25.setTransform(422.1534,147.3277);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#606061").s().p("AgjAyQAIgDAGgFQAJgHAEgKIABgEIgBgEIgghPIASAAIASAzIAFARIAAAAIAXhEIARAAIgYA+QgQApgNAMQgKAJgJABg");
	this.shape_26.setTransform(410.1282,149.3027);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#606061").s().p("AgFAyQgGgHAAgQIAAguIgOAAIAAgMIAOAAIAAgUIAOgFIAAAZIAXAAIAAAMIgXAAIAAAtQAAASAMgBIAJgBIABAMQgFADgJAAQgLgBgFgGg");
	this.shape_27.setTransform(402.7281,146.2027);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#606061").s().p("AgHA8IAAhVIAPAAIAABVgAgGgrQgDgCAAgEQAAgEADgDQADgDADAAQAKAAAAAKQAAAEgDACQgCADgFAAQgDAAgDgDg");
	this.shape_28.setTransform(397.7316,145.6277);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#606061").s().p("AgUAsIAAhVIANAAIAAARIABAAQAGgTARAAIAEAAIAAAPIgEAAQgJAAgGAFQgEAGgBAJIgCAHIAAAtg");
	this.shape_29.setTransform(393.153,147.2277);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#606061").s().p("AgbAlQgGgHAAgKQAAgPANgHQAOgJAXAAIAAgBQAAgUgSAAQgMAAgLAGIgDgKQALgIAQAAQAhAAAAAjIAAAgQAAALABAJIgOAAIgBgLIgBAAQgIANgRAAQgNAAgHgIgAgSATQAAAHAFAEQAEAEAGAAQAPAAAFgPIABgFIAAgOIgEAAQggAAAAATg");
	this.shape_30.setTransform(385.2278,147.3277);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#606061").s().p("AgHA/IAAh9IAPAAIAAB9g");
	this.shape_31.setTransform(379.0278,145.3276);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#606061").s().p("AgbAuQgSgQABgdQAAgbARgSQARgRAbAAQATAAAKAFIgEANQgKgFgOAAQgVAAgNANQgMANAAAWQAAAXAMANQAMANAVAAQAOAAAMgFIADAMQgMAGgUAAQgZAAgQgQg");
	this.shape_32.setTransform(371.8026,145.6527);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#606061").s().p("AARgUIAKgBQgHASgEAXIgQACQAHgaAKgQgAgJgUIAJgBQgGASgDAXIgRACQAHgaAKgQg");
	this.shape_33.setTransform(363.8275,141.6276);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#606061").s().p("AgUAsIgBhVIAOAAIABARIAAAAQADgJAGgFQAGgFAIAAIAFAAIAAAPIgGAAQgIAAgGAFQgEAGgCAJIgBAHIAAAtg");
	this.shape_34.setTransform(355.8274,147.2277);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#606061").s().p("AgdAhQgMgMAAgUQAAgUAMgNQAMgMASAAQASAAAMAMQALAMAAAUQAAAWgNAMQgMALgRAAQgSAAgLgMgAgTgWQgGAKAAAMQAAAPAHAJQAIAJAKAAQALAAAIgJQAHgKAAgOQAAgMgGgJQgHgLgNAAQgMAAgHAKg");
	this.shape_35.setTransform(347.5273,147.3277);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#606061").s().p("AgPBAIAAhJIgMAAIAAgMIAMAAIAAgEQAAgVAKgJQAHgIANAAQAIAAAFACIgCAMQgFgCgFAAQgQAAAAAZIAAAFIAUAAIAAAMIgUAAIAABJg");
	this.shape_36.setTransform(340.7272,145.2276);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#606061").s().p("AgbAnIAEgMQAJAGALAAQAQAAAAgMQAAgKgPgGQgXgHAAgRQAAgLAIgHQAIgHANAAQAMAAAJAFIgEAMQgIgFgJAAQgOAAAAAMQAAAFAEADQAEADAIADQAWAIAAARQAAAMgIAHQgJAHgOAAQgOAAgKgGg");
	this.shape_37.setTransform(330.327,147.3277);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#606061").s().p("AAVAsIAAgxQAAgZgUAAQgGAAgGAFQgFAEgDAHIgBAHIAAAzIgPAAIgBhVIAOAAIABAOIAAAAQAIgQAUAAQALAAAJAHQAKAKAAAUIAAAyg");
	this.shape_38.setTransform(321.8269,147.2277);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#606061").s().p("AgdAhQgMgMAAgUQAAgUAMgNQAMgMASAAQASAAAMAMQALAMAAAUQAAAWgNAMQgMALgRAAQgSAAgLgMgAgTgWQgGAKAAAMQAAAPAHAJQAIAJAKAAQAMAAAHgJQAHgKAAgOQAAgMgGgJQgHgLgNAAQgMAAgHAKg");
	this.shape_39.setTransform(311.9767,147.3277);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#606061").s().p("AgHA8IAAhVIAPAAIAABVgAgGgrQgDgCAAgEQAAgEADgDQADgDADAAQAKAAAAAKQAAAEgDACQgCADgFAAQgDAAgDgDg");
	this.shape_40.setTransform(304.9802,145.6277);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#606061").s().p("AgGAyQgFgHAAgQIAAguIgOAAIAAgMIAOAAIAAgUIAOgFIAAAZIAXAAIAAAMIgXAAIAAAtQAAASAMgBIAJgBIABAMQgGADgJAAQgKgBgGgGg");
	this.shape_41.setTransform(299.9015,146.2027);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#606061").s().p("AgoA+IAAh5IAOAAIAAAPIABAAQAKgRATAAQAQAAALAMQAKANAAATQAAAVgMANQgLAMgQAAQgSAAgIgOIAAAAIAAAvgAgOgrQgHAGgCAIIgBAHIAAAPIABAGQACAHAGAFQAHAFAIAAQALAAAHgJQAHgIAAgPQAAgOgGgJQgHgKgMAAQgIABgGAFg");
	this.shape_42.setTransform(292.2264,149.0027);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#606061").s().p("AgnAtQgPgRAAgbQAAgbAQgSQAPgRAYAAQAYAAAPARQAPAQAAAbQAAAegQARQgPAQgYAAQgYAAgPgRgAgcgiQgKAOAAAUQABAVAJAOQAMAPAQAAQASgBALgPQAKgNAAgVQAAgTgKgOQgKgPgTAAQgRgBgLAPg");
	this.shape_43.setTransform(280.7013,145.6527);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#606061").s().p("AgwAFIAAgIIBhAAIAAAIg");
	this.shape_44.setTransform(291.4014,123.4023);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#606061").s().p("AgaAhQgLgMAAgTQAAgUALgNQALgNARAAQATAAAKAOQAHALAAAQIAAAGIg8AAQAAAPAJAIQAIAHALAAQAOAAAKgFIADAMQgMAFgRAAQgSAAgMgMgAgPgYQgGAHgBAKIAtAAQAAgKgEgHQgGgJgMAAQgKAAgGAJg");
	this.shape_45.setTransform(453.6789,117.2772);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#606061").s().p("AgkAGIAAgxIAQAAIAAAvQAAAbATAAQAHAAAGgEQAFgEACgGQABgDAAgFIAAg0IAQAAIABBVIgOAAIgBgOQgLAQgRAAQgeAAAAgmg");
	this.shape_46.setTransform(444.2787,117.3772);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#606061").s().p("AgbAnIADgMQAKAGALAAQAQAAAAgMQAAgLgPgFQgXgHAAgRQAAgLAIgHQAIgHANAAQAMAAAJAFIgEAMQgIgFgKAAQgFAAgEADQgEAEAAAEQAAAGAEADQADADAIADQAXAIAAARQAAAMgIAHQgJAHgOAAQgOAAgKgGg");
	this.shape_47.setTransform(435.8286,117.2772);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#606061").s().p("AgbAnIAEgMQAJAGALAAQAQAAAAgMQAAgLgPgFQgXgHAAgRQAAgLAIgHQAJgHAMAAQANAAAIAFIgEAMQgHgFgKAAQgGAAgEADQgEAEAAAEQAAAGAEADQAEADAIADQAWAIAAARQAAAMgIAHQgJAHgOAAQgOAAgKgGg");
	this.shape_48.setTransform(428.7285,117.2772);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#606061").s().p("AgHA8IAAhVIAPAAIAABVgAgGgrQgDgCAAgEQAAgKAJAAQAEAAADADQADADAAAEQAAAEgDACQgDADgEAAQgDAAgDgDg");
	this.shape_49.setTransform(423.1284,115.5772);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#606061").s().p("AgbAnIAEgMQAJAGALAAQAQAAAAgMQAAgLgPgFQgXgHAAgRQAAgLAIgHQAIgHANAAQAMAAAJAFIgEAMQgIgFgJAAQgGAAgEADQgEADAAAFQAAAGAEADQADADAJADQAWAIAAARQAAAMgIAHQgJAHgOAAQgOAAgKgGg");
	this.shape_50.setTransform(413.7283,117.2772);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#606061").s().p("AgHA8IAAhVIAPAAIAABVgAgGgrQgDgCAAgEQAAgEADgDQADgDADAAQAKAAAAAKQAAAEgDACQgCADgFAAQgDAAgDgDg");
	this.shape_51.setTransform(408.0818,115.5772);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#606061").s().p("AAVA/IAAgxQAAgZgUAAQgGAAgGAFQgGAEgCAGIgBAHIAAA0IgQAAIAAh9IAQAAIAAA1QAEgGAIgFQAIgEAHAAQALAAAIAHQALAKAAATIAAAzg");
	this.shape_52.setTransform(401.0781,115.2772);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#606061").s().p("AgFAxQgGgFAAgRIAAguIgOAAIAAgMIAOAAIAAgUIAOgFIAAAZIAXAAIAAAMIgXAAIAAAuQAAAQAMAAIAJgBIABAMQgFACgJABQgLAAgFgIg");
	this.shape_53.setTransform(393.078,116.1522);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#606061").s().p("AgUAsIgBhVIAOAAIABARIAAAAQADgJAGgFQAGgFAIAAIAFAAIAAAPIgGAAQgIAAgGAFQgEAGgCAJIAAA0g");
	this.shape_54.setTransform(383.9778,117.1772);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#606061").s().p("AgdAhQgMgMAAgUQAAgUAMgNQAMgMASAAQASAAAMAMQALAMAAAUQAAAWgNAMQgMALgRAAQgSAAgLgMgAgTgWQgGAKAAAMQAAAPAHAJQAIAJAKAAQALAAAIgJQAHgKAAgOQAAgMgGgJQgHgLgNAAQgMAAgHAKg");
	this.shape_55.setTransform(375.6777,117.2772);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#606061").s().p("AgPBAIAAhJIgMAAIAAgMIAMAAIAAgEQAAgUAKgKQAHgIANAAQAIAAAFACIgCAMQgFgCgFAAQgQAAAAAZIAAAFIAUAAIAAAMIgUAAIAABJg");
	this.shape_56.setTransform(368.8776,115.1772);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#606061").s().p("AARA/IgdgpIgIAJIAAAgIgPAAIAAh9IAPAAIAABOIABAAIAggmIATAAIghAiIAlAzg");
	this.shape_57.setTransform(358.5774,115.2772);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#606061").s().p("AgVAgQgMgLAAgVQAAgSAMgNQANgNAUAAQAOAAAIAFIgEALQgIgDgKAAQgNAAgIAJQgJAJABANQAAAOAIAKQAJAIALAAQAKAAAKgEIADAMQgLAFgOAAQgSAAgMgNg");
	this.shape_58.setTransform(349.7523,117.3022);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#606061").s().p("AgZAhQgMgMAAgTQAAgUALgNQALgNARAAQAUAAAJAOQAHALAAAQIAAAGIg8AAQAAAPAJAIQAIAHAMAAQAMAAALgFIADAMQgMAFgRAAQgSAAgLgMgAgPgYQgGAHgBAKIAtAAQAAgKgEgHQgGgJgMAAQgJAAgHAJg");
	this.shape_59.setTransform(341.2022,117.2772);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#606061").s().p("AAVA/IAAgxQAAgZgUAAQgGAAgGAFQgFAEgDAGIgBAHIAAA0IgQAAIAAh9IAQAAIAAA1QAEgGAIgFQAIgEAHAAQALAAAIAHQALAKAAATIAAAzg");
	this.shape_60.setTransform(331.777,115.2772);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#606061").s().p("AgVAgQgMgLAAgVQAAgSAMgNQANgNAVAAQAOAAAHAFIgDALQgIgDgKAAQgOAAgIAJQgIAJAAANQAAAPAIAJQAIAIANAAQAJAAAKgEIADAMQgLAFgOAAQgTAAgLgNg");
	this.shape_61.setTransform(322.9019,117.3022);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#606061").s().p("AgFAxQgGgFAAgRIAAguIgNAAIAAgMIANAAIAAgUIAOgFIAAAZIAWAAIAAAMIgWAAIAAAuQAAAQAMAAIAJgBIABAMQgFACgJABQgLAAgFgIg");
	this.shape_62.setTransform(312.0017,116.1522);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#606061").s().p("AgCgTIAPgCQgHAbgIAPIgKABQAGgRAEgYg");
	this.shape_63.setTransform(307.5767,111.5521);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#606061").s().p("AAVAsIAAgxQABgZgVAAQgGAAgGAFQgFAEgCAHQgBACAAAFIAAAzIgQAAIgBhVIAOAAIAAAOIABAAQAJgQATAAQALAAAJAHQAKAKAAAUIAAAyg");
	this.shape_64.setTransform(301.2516,117.1772);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#606061").s().p("AgdAhQgMgMAAgUQAAgUAMgNQAMgMASAAQASAAAMAMQALAMAAAUQAAAWgOAMQgMALgQAAQgSAAgLgMgAgTgWQgGAKAAAMQAAAPAHAJQAHAJALAAQALAAAIgJQAHgKAAgOQAAgMgGgJQgHgLgNAAQgMAAgHAKg");
	this.shape_65.setTransform(291.4264,117.2772);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#606061").s().p("AgwA7IAAh1QAPgCARAAQAhAAAQAPQAQAQABAbQAAAdgSARQgRARgjAAQgQAAgMgCgAghgvIAABfIAQABQAYAAANgOQANgNAAgYQAAgVgMgNQgNgMgWAAIgTABg");
	this.shape_66.setTransform(280.8513,115.6022);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#606061").s().p("AgUAEIAAgHIApAAIAAAHg");
	this.shape_67.setTransform(276.6762,91.4768);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#606061").s().p("AgZAhQgMgMAAgUQAAgSALgNQALgOARAAQATAAAKAPQAHALAAAPIAAAGIg8AAQABAPAIAIQAIAHALAAQANAAALgFIADAMQgLAFgSAAQgSAAgLgMgAgPgYQgFAHgCAKIAtAAQAAgKgEgGQgGgJgMAAQgJgBgHAJg");
	this.shape_68.setTransform(361.3525,85.3517);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#606061").s().p("AgVAhQgMgMAAgUQAAgTANgNQAMgNAVAAQAMAAAJAFIgDAMQgHgFgLABQgOAAgIAKQgIAIAAANQAAAPAIAJQAJAJAMAAQAKAAAJgFIADAMQgIAFgRAAQgTAAgLgMg");
	this.shape_69.setTransform(353.0524,85.3517);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#606061").s().p("AAUAsIAAgxQAAgZgSAAQgHAAgGAFQgEAEgCAHIgBAHIAAAzIgPAAIgBhVIANAAIABAOIAAAAQAJgQARAAQALAAAIAHQAKAKAAAUIAAAyg");
	this.shape_70.setTransform(343.8022,85.2767);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#606061").s().p("AgnAtQgPgRAAgbQAAgbAQgSQAPgRAYAAQAZAAAOARQAPARAAAbQAAAdgQARQgQAQgXAAQgYAAgPgRgAgcghQgJAOAAAUQAAAUAKAOQALAOAQAAQASAAALgOQAKgOAAgVQAAgTgKgOQgKgPgSAAQgSAAgLAPg");
	this.shape_71.setTransform(332.902,83.6767);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#606061").s().p("AgaAhQgLgLAAgVQAAgSAKgNQAMgOARAAQATAAAKAPQAHALAAAPIgBAGIg7AAQAAAPAJAIQAIAHAMAAQANAAALgFIACAMQgLAFgRAAQgTAAgMgMgAgQgYQgFAHgBAKIAtAAQAAgKgFgGQgFgJgMAAQgKgBgHAJg");
	this.shape_72.setTransform(318.5518,85.3517);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#606061").s().p("AgUAsIAAg6IgBgbIAOAAIABARIABAAQACgJAGgFQAGgFAIAAIAFAAIAAAPIgFAAQgRAAgEAUIAAA0g");
	this.shape_73.setTransform(311.7767,85.2767);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#606061").s().p("AgdAhQgMgMAAgUQAAgUAMgNQAMgMASAAQASAAAMAMQALAMAAAUQAAAWgNAMQgMALgRAAQgRAAgMgMgAgTgWQgGAKAAAMQAAAPAHAJQAIAJAKAAQAMAAAHgJQAHgKAAgOQAAgMgGgJQgHgLgNAAQgMAAgHAKg");
	this.shape_74.setTransform(303.4766,85.3767);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#606061").s().p("AAWAsIAAgxQAAgZgUAAQgPAAgGAQIgBAHIAAAzIgPAAIAAg+IgBgXIAOAAIABAOIAAAAQAIgQAUAAQALAAAJAHQAKAKAAAUIAAAyg");
	this.shape_75.setTransform(293.6264,85.2767);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#606061").s().p("AggA4IAEgMQALAHAPAAQAaAAAAgfIAAgJQgJAOgRAAQgQAAgLgMQgKgMAAgRQAAgVAMgNQALgMAQAAQARAAAJAPIABgNIANAAIAABJQAAAdgNALQgKAKgUAAQgSAAgLgHgAgQgoQgHAIAAAPQAAAOAGAHQAHAJALAAQAIAAAFgEQAHgEACgHQABgDAAgFIAAgQIgBgHQgFgQgRAAQgKAAgHAJg");
	this.shape_76.setTransform(283.5263,87.1268);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#606061").s().p("AgHA8IAAh3IAPAAIAAB3g");
	this.shape_77.setTransform(276.6762,83.6767);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#295796").s().p("AgbAhQgMgLAAgVQAAgSALgNQAMgOATAAQATAAAKAOQAIALAAARIgBAIIg5AAQABALAHAGQAIAGAKAAQANAAALgEIADAPQgMAFgSAAQgUAAgMgMgAgNgWQgEAGgBAIIAlAAQAAgIgDgGQgFgHgKAAQgIAAgGAHg");
	this.shape_78.setTransform(522.1799,19.9757);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#295796").s().p("AgiA5IAFgSQAKAHAPAAQAYAAAAgaIAAgIIgBAAQgIANgQAAQgPAAgLgMQgLgLAAgSQABgVALgNQAMgMAQAAQAQAAAIANIAAAAIABgLIAUAAIgBBJQAAAcgNALQgMALgVAAQgTAAgLgGgAgNgmQgGAIAAANQAAAMAFAGQAGAIAJAAQAOAAAEgNIABgHIAAgOIgBgGQgDgOgPAAQgIAAgGAHg");
	this.shape_79.setTransform(512.2048,21.7508);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#295796").s().p("AgdAlQgHgHAAgLQAAgfAyAAIAAgCQAAgPgRAAQgOAAgJAHIgEgPQAMgHASgBQAkAAAAAlIAAAfIABAVIgTAAIgCgKIAAAAQgKAMgPgBQgNABgHgJgAgPARQAAAMANAAQAMAAAEgMIABgEIAAgMIgEAAQgaAAAAAQg");
	this.shape_80.setTransform(502.5796,20.0007);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#295796").s().p("AgnAGIAAgyIAXAAIAAAvQgBAXARAAQAKABAFgMIACgHIAAg0IAWAAIAABXIgTAAIgBgOIAAAAQgJAPgSAAQgfABAAgng");
	this.shape_81.setTransform(493.2045,20.1007);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#295796").s().p("AgiA5IAFgSQAKAHAPAAQAYAAAAgaIAAgIQgIANgRAAQgQAAgKgMQgKgLAAgSQgBgVAMgNQAMgMAQAAQAQAAAIANIAAAAIABgLIATAAIAABJQAAAcgNALQgMALgVAAQgTAAgLgGgAgNgmQgGAIAAANQAAAMAGAGQAFAIAJAAQAOAAAEgNIABgHIAAgOIgBgGQgEgOgOAAQgIAAgGAHg");
	this.shape_82.setTransform(482.7543,21.7508);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#295796").s().p("AARAtIAAgwQAAgXgQAAQgLAAgFANIgBAHIAAAzIgWAAIgBhXIATAAIABAOIABAAQAJgPASgBQANAAAIAIQAKALAAASIAAA0g");
	this.shape_83.setTransform(472.7542,19.9007);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#295796").s().p("AgdAlQgIgHABgLQAAgfAzAAIAAgCQAAgPgRAAQgOAAgKAHIgEgPQAMgHASgBQAkAAAAAlIAAAfQAAAMABAJIgTAAIgBgKIgBAAQgJAMgQgBQgMABgIgJgAgPARQAAAMANAAQANAAADgMIABgEIAAgMIgDAAQgbAAAAAQg");
	this.shape_84.setTransform(462.904,20.0007);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#295796").s().p("AgKBAIAAh+IAVAAIAAB+g");
	this.shape_85.setTransform(456.3039,18.0007);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#295796").s().p("AgbAhQgMgLAAgVQAAgSALgNQALgOAUAAQASAAALAOQAIALAAARIgBAIIg5AAQABALAHAGQAIAGAKAAQANAAALgEIADAPQgMAFgTAAQgUAAgLgMgAgNgWQgEAGgBAIIAlAAQAAgIgDgGQgFgHgKAAQgIAAgGAHg");
	this.shape_86.setTransform(445.7538,19.9757);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#295796").s().p("AgeAnIAFgQQAKAHALAAQANAAABgKQgBgHgNgGQgYgHABgRQAAgMAJgHQAIgIAOAAQANAAALAFIgFAPQgJgFgKAAQgLAAABAKQgBAGAPAGQAXAHAAASQAAANgJAHQgKAHgQAAQgPAAgLgGg");
	this.shape_87.setTransform(437.4036,19.9757);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#295796").s().p("AgKA+IAAhWIAVAAIAABWgAgIgoQgDgEAAgFQAAgFADgDQAEgEAEAAQAGAAADAEQADADAAAFQAAAFgDAEQgDADgGAAQgEAAgEgDg");
	this.shape_88.setTransform(431.3786,18.1757);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#295796").s().p("AgWAhQgMgMAAgUQAAgTANgNQANgNAWAAQAKAAALAEIgEAQQgIgDgJAAQgMAAgGAIQgIAIABALQgBANAJAIQAGAHAMAAQAHAAAKgDIACAQQgIAEgQAAQgUAAgMgMg");
	this.shape_89.setTransform(425.2035,19.9757);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#295796").s().p("AASAtIAAgwQAAgXgRAAQgLAAgFANIgBAHIAAAzIgWAAIgBhXIATAAIABAOIABAAQADgHAHgDQAIgGAJAAQANAAAIAIQAKALAAASIAAA0g");
	this.shape_90.setTransform(415.9783,19.9007);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#295796").s().p("AgeAiQgNgNAAgVQAAgTANgNQAMgNATAAQATAAANANQALAMAAAUQAAAVgOANQgNAMgRgBQgSABgMgMgAgQgTQgEAIAAALQAAAMAFAJQAHAJAIgBQAJABAHgJQAFgIABgNQgBgLgEgIQgGgJgLAAQgKAAgGAJg");
	this.shape_91.setTransform(405.8532,20.0007);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#295796").s().p("AgWAhQgMgMAAgUQAAgTANgNQANgNAWAAQALAAAKAEIgEAQQgIgDgJAAQgMAAgGAIQgHAIAAALQAAANAHAIQAHAHALAAQAHAAALgDIADAQQgJAEgQAAQgTAAgNgMg");
	this.shape_92.setTransform(397.078,19.9757);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#295796").s().p("AgiA5IAFgSQAKAHAPAAQAYAAAAgaIAAgIIAAAAQgJANgQAAQgQAAgKgMQgKgLAAgSQAAgVAMgNQALgMAQAAQAQAAAIANIABgLIATAAIAABJQAAAdgNAKQgMALgVAAQgTAAgLgGgAgNgmQgGAIAAANQAAAMAFAGQAGAIAJAAQAOAAAEgNIABgHIgBgUQgEgOgOAAQgIAAgGAHg");
	this.shape_93.setTransform(383.9278,21.7508);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#295796").s().p("AASAtIAAgwQAAgXgRAAQgLAAgFANIgBAHIAAAzIgWAAIgBhXIATAAIACAOIAAAAQAIgPATgBQANAAAIAIQAKALAAASIAAA0g");
	this.shape_94.setTransform(373.9277,19.9007);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#295796").s().p("AgKA+IAAhWIAVAAIAABWgAgIgoQgEgEABgFQgBgFAEgDQADgEAFAAQAFAAAEAEQADADAAAFQAAAFgDAEQgEADgFAAQgFAAgDgDg");
	this.shape_95.setTransform(366.5744,18.1757);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#295796").s().p("AgeAnIAFgQQALAHAKAAQANAAABgKQgBgHgNgGQgXgHAAgRQAAgMAJgHQAIgIAOAAQANAAALAFIgFAPQgJgFgKAAQgLAAAAAKQABAGAOAGQAXAHAAASQAAANgJAHQgJAHgRAAQgPAAgLgGg");
	this.shape_96.setTransform(360.5525,19.9757);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#295796").s().p("AgmAGIAAgyIAVAAIAAAvQAAAXARAAQALABAFgMQABgCAAgFIAAg0IAWAAIAABXIgTAAIgBgOIAAAAQgKAPgRAAQgfABABgng");
	this.shape_97.setTransform(351.7523,20.1007);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#295796").s().p("AgXAtIgBhXIATAAIABARIABAAQAFgTARAAIAGABIAAAUIgHAAQgQAAgDAQIAAA0g");
	this.shape_98.setTransform(340.2272,19.9007);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#295796").s().p("AgbAhQgMgLAAgVQAAgSALgNQAMgOASAAQATAAALAOQAIALAAARIgBAIIg5AAQAAALAJAGQAHAGAKAAQANAAALgEIADAPQgMAFgSAAQgVAAgLgMgAgMgWQgFAGgBAIIAlAAQABgIgEgGQgFgHgKAAQgIAAgFAHg");
	this.shape_99.setTransform(332.052,19.9757);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#295796").s().p("AgfA0QgLgNAAgTQAAgUAMgNQALgNAQAAQAQAAAHAMIABAAIAAgxIAWAAIAAB+IgTAAIgBgPIgBAAQgIARgTgBQgQAAgKgMgAgOAAQgGAHAAAMQAAAMAGAIQAGAHAJAAQAPAAAEgPIABgUIgBgFQgDgPgQAAQgJABgGAIg");
	this.shape_100.setTransform(322.0009,18.1007);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#295796").s().p("AgKA+IAAhWIAVAAIAABWgAgIgoQgDgEAAgFQAAgFADgDQAEgEAEAAQAFAAAEAEQADADAAAFQAAAFgDAEQgEADgFAAQgFAAgDgDg");
	this.shape_101.setTransform(314.7768,18.1757);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#295796").s().p("AgeAnIAEgQQALAHAMAAQANAAAAgKQAAgHgOgGQgYgHAAgRQAAgMAJgHQAJgIAOAAQANAAAKAFIgEAPQgJgFgJAAQgMAAAAAKQAAAGAPAGQAXAHAAASQAAANgJAHQgKAHgQAAQgPAAgLgGg");
	this.shape_102.setTransform(308.7767,19.9757);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#295796").s().p("AASAtIAAgwQAAgXgRAAQgLAAgFANIgBAHIAAAzIgWAAIgBhXIATAAIABAOIABAAQAIgPATgBQANAAAIAIQAKALAAASIAAA0g");
	this.shape_103.setTransform(299.9265,19.9007);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#295796").s().p("AgfAiQgMgNAAgVQAAgTAMgNQANgNATAAQATAAAMANQAMAMAAAUQAAAVgOANQgMAMgSgBQgTABgMgMgAgPgTQgFAIgBALQABAMAFAJQAHAJAIgBQAKABAFgJQAHgJgBgMQAAgLgEgIQgGgJgKAAQgLAAgFAJg");
	this.shape_104.setTransform(289.8014,20.0007);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#295796").s().p("AgdAtQgRgPAAgdQAAgcATgRQARgRAcAAQATAAAKAFIgFASQgKgFgOAAQgSAAgLAMQgMAMAAATQAAAUALAMQAMAMASAAQANAAALgEIAEARQgKAFgVAAQgcAAgQgRg");
	this.shape_105.setTransform(279.8762,18.3007);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#DFDFDF").s().p("A5tCQIAAkfMAzbAAAIAAEfg");
	this.shape_106.setTransform(401.3531,17.4757);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#3C74BA").s().p("AgMAKIAAgTIAZAAIAAATg");
	this.shape_107.setTransform(257.6009,181.0032);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#3C74BA").s().p("AgMAKIAAgTIAZAAIAAATg");
	this.shape_108.setTransform(257.6009,178.3031);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#3C74BA").s().p("AgMAXIAAgtIAZAAIAAAtg");
	this.shape_109.setTransform(257.6009,174.2781);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AhlAFIAAgJIDLAAIAAAJg");
	this.shape_110.setTransform(251.1508,170.453);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AhqBhIAAjBIDVAAIAADBgAhgBXIDBAAIAAisIjBAAg");
	this.shape_111.setTransform(251.1508,176.4281);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#2A67B4").s().p("AgGBMIAAiXIANAAIAACXg");
	this.shape_112.setTransform(254.5509,178.0281);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#F3F9F8").s().p("AhlBcIAAi3IDLAAIAAC3g");
	this.shape_113.setTransform(251.1508,176.4281);

	this.instance = new lib.Path();
	this.instance.setTransform(401.3,99.15,1,1,0,0,0,202.6,127);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.047)",-14,-7,22);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#F0F0F0").s().p("A6QPoIAA/PMA0hAAAIAAfPg");
	this.shape_114.setTransform(401.6031,100.027);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_114},{t:this.instance},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.menu_bg_sub, new cjs.Rectangle(197.3,-29.4,381.99999999999994,244), null);


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

}).prototype = getMCSymbolPrototype(lib.menu_bg, new cjs.Rectangle(197.3,-29.4,381.99999999999994,244), null);


(lib.Grey_icons = function(mode,startPosition,loop) {
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
		this.icons.cache(-140,-15,280,30,2)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.icons = new lib.greyicons();
	this.icons.name = "icons";
	this.icons.setTransform(67.5,5.9,1,1,0,0,0,67.5,5.9);

	this.timeline.addTween(cjs.Tween.get(this.icons).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Grey_icons, new cjs.Rectangle(-0.1,0,132.7,11.8), null);


(lib.dropdown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#606061").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAIAAAGgFQAGgEAFgKIAPACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape.setTransform(343.9,53.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#606061").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_1.setTransform(334.375,53.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#606061").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAGgDQAEgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgGAEgCAKIgPgCQACgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgFACgCADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_2.setTransform(324.9,53.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#606061").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNASAAQAUAAAMANQALANAAAWIAAAEIhFAAQACAQAHAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgRgbQgHAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_3.setTransform(314.9,53.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#606061").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_4.setTransform(307.65,53.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#606061").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_5.setTransform(299.725,53.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#606061").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAIAAAGgFQAGgEAFgKIAPACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_6.setTransform(289.9,53.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#606061").s().p("AgTA8QgKgHgFgKQgGgMABgOQAAgOAEgLQAFgLAKgGQAIgGAMAAQAHAAAHAEQAHADAEAGIAAguIAQAAIAAB/IgPAAIAAgLQgJAOgRgBQgKAAgJgFgAgQgJQgHAJAAARQAAASAHAJQAIAIAJABQAKAAAIgJQAHgIAAgSQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_7.setTransform(279.6,52.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAhQgLgLAAgVQAAgNAFgKQAGgKAJgGQAJgGAKAAQASAAAKALQAKALAAATIAAAJIg5AAQAAALAHAHQAGAFALABQAIAAAGgDQAHgCAFgDIAAAPQgFAEgIABQgIACgJAAQgTAAgKgLgAgLgWQgGAFgBAJIAlAAQAAgKgEgFQgFgFgJAAQgGgBgGAHg");
	this.shape_8.setTransform(337.175,55.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQArIgLgDIAAgSQAFADAHACQAGACAFABQANgBAAgIQAAgEgCgBIgEgEIgKgGQgIgDgEgDQgEgDgCgEQgCgEAAgHQAAgLAJgIQAJgGANgBIAKABIAJADIAAASQgDgEgGgBIgKgBQgFAAgDACQgEADAAADQAAAFADADQADACAIAEQAMAFAFAFQAFAFAAAJQAAAMgJAHQgJAIgPgBIgLgBg");
	this.shape_9.setTransform(329.275,55.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbAmQgIgHAAgMQAAgLAHgIQAIgGANgCIAYgDQAAgSgQABQgHAAgHACQgIACgFAFIAAgRQAEgDAJgCQAKgDAGAAQAQAAAJAJQAIAIAAAQIAAA1IgTAAIAAgLQgJANgQAAQgMAAgHgGgAAAAEQgJABgDADQgEADAAAGQAAAGAEADQAEAEAGAAQAIgBAFgFQAGgHAAgIIAAgIg");
	this.shape_10.setTransform(321.225,55.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbAhQgLgLAAgVQAAgNAFgKQAGgKAJgGQAJgGAKAAQASAAAKALQAKALAAATIAAAJIg5AAQAAALAHAHQAGAFALABQAIAAAGgDQAHgCAFgDIAAAPQgFAEgIABQgIACgJAAQgTAAgKgLgAgLgWQgGAFgBAJIAlAAQAAgKgEgFQgFgFgJAAQgGgBgGAHg");
	this.shape_11.setTransform(312.725,55.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXArIAAhUIATAAIAAARQADgJAFgFQAFgEAIAAIAHABIAAATIgEgCIgGgBQgJAAgFAHQgEAHAAALIAAArg");
	this.shape_12.setTransform(305.9,55.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMAoQgJgGgGgKQgFgJAAgNQAAgNAFgKQAGgLALgGQAKgFANgBIALABIAJAEIAAASQgJgHgKAAQgMAAgHAIQgHAIAAAMQAAAOAHAIQAGAHAMAAQAFAAAFgCQAGgCAEgDIAAARQgJAGgPgBQgLAAgKgEg");
	this.shape_13.setTransform(298.15,55.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgbAhQgLgLAAgVQAAgNAFgKQAGgKAJgGQAJgGAKAAQASAAAKALQAKALAAATIAAAJIg5AAQAAALAHAHQAGAFALABQAIAAAGgDQAHgCAFgDIAAAPQgFAEgIABQgIACgJAAQgTAAgKgLgAgLgWQgGAFgBAJIAlAAQAAgKgEgFQgFgFgJAAQgGgBgGAHg");
	this.shape_14.setTransform(289.775,55.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgfA0QgJgLAAgUQAAgVAKgMQALgMARAAQAIAAAGADQAGAEAEAFIAAgzIATAAIAAB9IgTAAIAAgOQgJAQgSAAQgQAAgKgMgAgPgBQgGAHAAAPQAAANAGAHQAGAHAJAAQAKAAAGgHQAGgIAAgLIAAgJQAAgKgGgFQgGgHgJABQgKAAgGAHg");
	this.shape_15.setTransform(279.775,53.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#295796").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAIAAAGgFQAGgEAFgKIAPACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_16.setTransform(343.9,53.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#295796").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_17.setTransform(334.375,53.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#295796").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAGgDQAEgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgGAEgCAKIgPgCQACgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgFACgCADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_18.setTransform(324.9,53.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#295796").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNASAAQAUAAAMANQALANAAAWIAAAEIhFAAQACAQAHAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgRgbQgHAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_19.setTransform(314.9,53.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#295796").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_20.setTransform(307.65,53.725);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#295796").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_21.setTransform(299.725,53.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#295796").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAIAAAGgFQAGgEAFgKIAPACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_22.setTransform(289.9,53.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#295796").s().p("AgTA8QgKgHgFgKQgGgMABgOQAAgOAEgLQAFgLAKgGQAIgGAMAAQAHAAAHAEQAHADAEAGIAAguIAQAAIAAB/IgPAAIAAgLQgJAOgRgBQgKAAgJgFgAgQgJQgHAJAAARQAAASAHAJQAIAIAJABQAKAAAIgJQAHgIAAgSQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_23.setTransform(279.6,52.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).wait(1));

	// Mouseover
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgagxIA1AvIg1A0g");
	this.shape_24.setTransform(552.1048,54.3002);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1D4275").s().p("AiICVIAAkpIERAAIAAEpg");
	this.shape_25.setTransform(552.0298,54.3252);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#295796").s().p("A5tCdIAAk5MAzbAAAIAAE5g");
	this.shape_26.setTransform(401.7525,54.3252);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#32992C").ss(2,2,0,3).p("AgwALIAmAnIA7hl");
	this.shape_27.setTransform(258.3067,53.9504);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27}]},1).wait(1));

	// Menu
	this.menubg = new lib.menu_bg();
	this.menubg.name = "menubg";
	this.menubg.setTransform(284.8,100,1,1,0,0,0,284.8,100);

	this.timeline.addTween(cjs.Tween.get(this.menubg).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(197.3,-29.4,381.99999999999994,244);


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
		this.icons.cache(-200,-10,400,20,2)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.icons = new lib.bottom_icons_();
	this.icons.name = "icons";
	this.icons.setTransform(94,4.2,1,1,0,0,0,94,4.2);

	this.timeline.addTween(cjs.Tween.get(this.icons).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bottom_icons, new cjs.Rectangle(0,0,188.1,8.3), null);


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

	// Layer_2
	this.instance = new lib.Home_txt();
	this.instance.setTransform(21.6,50.85,1,1,0,0,0,12.4,7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#345699").s().p("AhoAGIAAgLIDRAAIAAALg");
	this.shape.setTransform(22.025,49.875);

	this.instance_1 = new lib.ON_txt();
	this.instance_1.setTransform(53.1,22.15,1,1,0,0,0,6.3,6.2);

	this.instance_2 = new lib.top_left();
	this.instance_2.setTransform(71.2,16.3,1,1,0,0,0,26.1,5.2);

	this.instance_3 = new lib.AutoSave_txt();
	this.instance_3.setTransform(27,23.85,1,1,0,0,0,17.8,7);

	this.instance_4 = new lib.Excel_txt();
	this.instance_4.setTransform(135.75,25.4,1,1,0,0,0,13.5,8.6);

	this.instance_5 = new lib.Name_txt();
	this.instance_5.setTransform(214.1,23.85,1,1,0,0,0,25.6,6.8);

	this.instance_6 = new lib.Insert_txt();
	this.instance_6.setTransform(58.85,50.8,1,1,0,0,0,11.3,7);

	this.instance_7 = new lib.PageLayout_txt();
	this.instance_7.setTransform(106.5,50.8,1,1,0,0,0,22.4,7);

	this.instance_8 = new lib.Formulas_txt();
	this.instance_8.setTransform(135.15,50.8,1,1,0,0,0,17.2,7);

	this.instance_9 = new lib.Share_txt();
	this.instance_9.setTransform(223.7,50.15,1,1,0,0,0,10.2,6.3);

	this.instance_10 = new lib.Comments_txt();
	this.instance_10.setTransform(270.05,50.1,1,1,0,0,0,17.6,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer_1
	this.instance_11 = new lib.top_right();
	this.instance_11.setTransform(267.15,16.05,1,1,0,0,0,23.9,3.3);

	this.instance_12 = new lib.Grey_icons();
	this.instance_12.setTransform(227,42.95,1,1,0,0,0,67.5,5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F1F1").s().p("A3bB0IAAjnMAu3AAAIAADng");
	this.shape_1.setTransform(150.0019,43.8492);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#345699").s().p("A3bChIAAlBMAu3AAAIAAFBg");
	this.shape_2.setTransform(150,16.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_12},{t:this.instance_11}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UI_Top_bar, new cjs.Rectangle(0,0,300,59.8), null);


(lib.UI_Bottom_bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Ready_txt();
	this.instance.setTransform(-131.25,7.8,1,1,0,0,0,11.5,6.7);

	this.instance_1 = new lib.Percentage_txt();
	this.instance_1.setTransform(136.35,7.8,1,1,0,0,0,10.1,6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_1
	this.instance_2 = new lib.bottom_icons();
	this.instance_2.setTransform(28.2,0.5,1,1,0,0,0,94,4.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3F2F1").s().p("A3bBhIAAjBMAu3AAAIAADBg");
	this.shape.setTransform(0.0023,0.559);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UI_Bottom_bar, new cjs.Rectangle(-150,-9.1,300,24.299999999999997), null);


(lib.scene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.fg = new lib.scene1_fg();
	this.fg.name = "fg";
	this.fg.setTransform(673,470,1,1,0,0,0,176,300);

	this.timeline.addTween(cjs.Tween.get(this.fg).wait(1));

	// Layer_6
	this.bg = new lib.officeBG();
	this.bg.name = "bg";
	this.bg.setTransform(618.1,620.55,1,1,0,0,0,617,595.5);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scene_1, new cjs.Rectangle(-293,-133,1504.1,1251.1), null);


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
	this.shape.graphics.f("#0078D4").s().p("AoSCjIAAlFIQlAAIAAFFg");
	this.shape.setTransform(-46.35,-1.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA_btn, new cjs.Rectangle(-99.4,-17.5,106.2,32.6), null);


(lib.MainComposition = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.Bottom_bar = new lib.UI_Bottom_bar();
	this.Bottom_bar.name = "Bottom_bar";
	this.Bottom_bar.setTransform(150,589.7);

	this.Top_bar = new lib.UI_Top_bar();
	this.Top_bar.name = "Top_bar";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Top_bar},{t:this.Bottom_bar}]}).wait(1));

	// Slide bar
	this.slide = new lib.slidebar();
	this.slide.name = "slide";
	this.slide.setTransform(295.95,119.35,1,1,0,0,0,3.1,10.4);

	this.timeline.addTween(cjs.Tween.get(this.slide).wait(1));

	// Scroll
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B4E4F").s().p("AgSgKIAlAAIgTAVg");
	this.shape.setTransform(295.131,576.3798);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B6B6B6").s().p("AgfArQgEAAgDgDQgCgCAAgFIAAhCQAAgDACgDQADgDAEAAIA/AAQAEAAADADQACADAAADIAABCQAAAFgCACQgDADgEAAgAgkgmQgCADgBACIAABCQABADACADQACACADAAIA/AAQADAAADgCQACgDAAgDIAAhCQAAgCgCgDQgDgCgDAAIg/AAQgDAAgCACg");
	this.shape_1.setTransform(295.106,576.0547);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfApQgDAAgCgCQgCgDgBgDIAAhCQABgCACgDQACgCADAAIA/AAQADAAADACQACADAAACIAABCQAAADgCADQgDACgDAAg");
	this.shape_2.setTransform(295.106,576.0547);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4B4E4F").s().p("AgSALIASgVIATAVg");
	this.shape_3.setTransform(295.081,59.476);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B6B6B6").s().p("AgfArQgEAAgDgDQgCgDAAgEIAAhBQAAgEACgDQADgDAEAAIA/AAQAEAAADADQACADAAAEIAABBQAAAEgCADQgDADgEAAgAgkgmQgCACgBAEIAABBQABAEACACQACACADAAIA/AAQADAAADgCQACgCAAgEIAAhBQAAgEgCgCQgDgCgDAAIg/AAQgDAAgCACg");
	this.shape_4.setTransform(295.106,59.801);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfApQgDAAgCgCQgCgCgBgEIAAhBQABgEACgCQACgCADAAIA/AAQADAAADACQACACAAAEIAABBQAAAEgCACQgDACgDAAg");
	this.shape_5.setTransform(295.106,59.801);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DADADA").s().p("EgAuApGMAAAhSLIBdAAMAAABSLg");
	this.shape_6.setTransform(295.25,318.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MainComposition, new cjs.Rectangle(0,0,300,604.9), null);


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
	this.instance.setTransform(340.05,437.8,1,1,0,0,0,14,16.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({_off:false},0).to({x:80.6,y:394},23,cjs.Ease.quadOut).wait(13).to({startPosition:1},0).wait(4).to({startPosition:0},0).wait(22).to({startPosition:0},0).to({x:87.7,y:446.65},15,cjs.Ease.quadInOut).wait(23).to({startPosition:1},0).wait(4).to({startPosition:0},0).wait(30).to({startPosition:0},0).to({x:334.2,y:461.2},21,cjs.Ease.cubicIn).to({_off:true},1).wait(60));

	// UI
	this.UI = new lib.MainComposition();
	this.UI.name = "UI";
	this.UI.setTransform(150,304.1,1,1,0,0,0,150,304.1);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(262));

	// dropdown
	this.instance_1 = new lib.dropdown("single",0);
	this.instance_1.setTransform(48.4,471.5,0.8235,0.8235,0,0,0,284.9,100.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(82).to({_off:false},0).to({alpha:1},3).wait(34).to({startPosition:1},0).wait(31).to({startPosition:2},0).wait(44).to({startPosition:2},0).to({alpha:0},7).wait(61));

	// Overlay
	this.instance_2 = new lib.Overlay("single",0);
	this.instance_2.setTransform(144.9,120.1,1,1,0,0,0,155.2,130.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(82).to({_off:false},0).to({alpha:1},3).wait(65).to({startPosition:1},0).wait(44).to({startPosition:1},0).to({alpha:0},7).wait(61));

	// redDots
	this.instance_3 = new lib.reddots();
	this.instance_3.setTransform(68.75,383.45,1.107,1,0,0,0,26.9,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},150).wait(112));

	// text
	this.instance_4 = new lib.textanimation("single",0);
	this.instance_4.setTransform(145.45,161.1,1,1,0,0,0,132.2,59.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(150).to({startPosition:1},0).wait(112));

	// ScreenBG
	this.instance_5 = new lib.ScreenBG();
	this.instance_5.setTransform(150,163,1,1,0,0,0,150,98);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(262));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.4,-10.2,384.7,640.1);


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
	this.logo_white.setTransform(122.85,487.45,0.2111,0.2111,0,0,0,434.4,2163.2);

	this.timeline.addTween(cjs.Tween.get(this.logo_white).wait(5));

	// Screen
	this.screenAnim = new lib.screenAnim();
	this.screenAnim.name = "screenAnim";
	this.screenAnim.setTransform(150,302.4,1,1,0,0,0,150,302.4);

	this.timeline.addTween(cjs.Tween.get(this.screenAnim).wait(5));

	// scene1
	this.scene_1 = new lib.scene_1();
	this.scene_1.name = "scene_1";
	this.scene_1.setTransform(121,510,1,1,0,0,0,668,629);

	this.timeline.addTween(cjs.Tween.get(this.scene_1).to({_off:true},1).wait(4));

	// Logo
	this.logo_grey = new lib.Microsoftlogo_rgb_cgrayai();
	this.logo_grey.name = "logo_grey";
	this.logo_grey.setTransform(66.85,38.45,0.2111,0.2111,0,0,0,169.1,36.3);

	this.timeline.addTween(cjs.Tween.get(this.logo_grey).wait(5));

	// scene3
	this.scene_3 = new lib.scene3();
	this.scene_3.name = "scene_3";
	this.scene_3.setTransform(176.9,404.15,0.9659,0.9659,0,0,0,199.8,236.1);

	this.timeline.addTween(cjs.Tween.get(this.scene_3).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-569.8,-191.9,1233.9,1191);


(lib.mainMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MSoftLogo
	this.logo_intro = new lib.logos();
	this.logo_intro.name = "logo_intro";
	this.logo_intro.setTransform(58.05,21,0.3087,0.3087,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.logo_intro).wait(1));

	// replay
	this.replay_btn = new lib.replay_btn();
	this.replay_btn.name = "replay_btn";
	this.replay_btn.setTransform(283.6,4.3,0.3475,0.3475,0,0,180,-0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.replay_btn).wait(1));

	// CTA
	this.txtCta = new lib.cta();
	this.txtCta.name = "txtCta";
	this.txtCta.setTransform(241.6,555.05,1,1,0,0,0,0.7,0.1);

	this.timeline.addTween(cjs.Tween.get(this.txtCta).wait(1));

	// CTA_BG
	this.cta = new lib.CTA_btn();
	this.cta.name = "cta";
	this.cta.setTransform(293.8,556.6,0.9433,0.9433,0,0,0,0.1,0.2);

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

}).prototype = getMCSymbolPrototype(lib.mainMC, new cjs.Rectangle(-569.8,-191.9,1233.9,1191), null);


// stage content:
(lib.M365_FY20Q4_RemoteWork_GigWorker_USA_300x600_BAN_Writer_EasyRemote_English_NA_NA_SBAN_BN_NA_1 = function(mode,startPosition,loop) {
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
			exportRoot.tl1.from(mc.animMC.screenAnim, 0.7,{alpha:0, scaleX:0.8745, scaleY:0.145, x:133.45,y:438.55, skewX:-10.5876,ease: Power3.easeInOut}, "+=1");
			exportRoot.tl1.to(mc.animMC.scene_1, 0.7,{ scaleX:8, scaleY:8, ease:Power3.easeInOut,onComplete: function(){mc.animMC.screenAnim.play(); mc.animMC.scene_1.alpha=0; exportRoot.tl1.stop();}}, "-=0.7");
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
p.nominalBounds = new cjs.Rectangle(-419.8,108.1,1083.9,891);
// library properties:
lib.properties = {
	id: '90A26FE74B042E4A89CA750D1DA2DF1F',
	width: 300,
	height: 600,
	fps: 40,
	color: "#0078D4",
	opacity: 1.00,
	manifest: [
		{src:"images/M365_FY20Q4_RemoteWork_GigWorker_USA_300x600_BAN_Writer_EasyRemote_English_NA_NA_SBAN_BN_NA_1_atlas_.png?1588082238303", id:"M365_FY20Q4_RemoteWork_GigWorker_USA_300x600_BAN_Writer_EasyRemote_English_NA_NA_SBAN_BN_NA_1_atlas_"}
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
