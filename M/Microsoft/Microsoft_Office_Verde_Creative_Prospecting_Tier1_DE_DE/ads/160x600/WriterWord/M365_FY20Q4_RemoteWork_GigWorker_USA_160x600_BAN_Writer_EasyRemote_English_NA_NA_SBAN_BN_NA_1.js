(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"M365_FY20Q4_RemoteWork_GigWorker_USA_160x600_BAN_Writer_EasyRemote_English_NA_NA_SBAN_BN_NA_1_atlas_", frames: [[676,0,200,264],[354,0,320,472],[676,266,160,229],[0,0,352,600]]}
];


// symbols:



(lib.bush_300x600 = function() {
	this.initialize(ss["M365_FY20Q4_RemoteWork_GigWorker_USA_160x600_BAN_Writer_EasyRemote_English_NA_NA_SBAN_BN_NA_1_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.frontShot_300x600 = function() {
	this.initialize(ss["M365_FY20Q4_RemoteWork_GigWorker_USA_160x600_BAN_Writer_EasyRemote_English_NA_NA_SBAN_BN_NA_1_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._img = function() {
	this.initialize(ss["M365_FY20Q4_RemoteWork_GigWorker_USA_160x600_BAN_Writer_EasyRemote_English_NA_NA_SBAN_BN_NA_1_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.layeredFile_300x600 = function() {
	this.initialize(ss["M365_FY20Q4_RemoteWork_GigWorker_USA_160x600_BAN_Writer_EasyRemote_English_NA_NA_SBAN_BN_NA_1_atlas_"]);
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
	this.shape.graphics.f("#FFFFFF").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whiteRect, new cjs.Rectangle(0,0,160,600), null);


(lib.whiteBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgMfBxMMAAAjiXIY/AAMAAADiXg");
	this.shape.setTransform(80,724.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whiteBG, new cjs.Rectangle(0,0,160,1448.8), null);


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
	this.txt = new cjs.Text("Research shows that\nindoor plants help to \ndecrease common toxins and indoor pollutants such as\nbenzene and formalde\nhyde. One study found\nthat the snake plant\nabsorbs toxins, releases moisture in the air and lessens airborne allergens. Even if you’re using the air filters and purifiers, surrounding yourself with indoor ", "18px 'Segoe Pro'", "#454545");
	this.txt.name = "txt";
	this.txt.lineHeight = 24;
	this.txt.lineWidth = 271;
	this.txt.parent = this;
	this.txt.setTransform(0.15,0.2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_fix, new cjs.Rectangle(-1.8,-1.8,274.90000000000003,317), null);


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
	this.txt = new cjs.Text("Research shows that\nindoor plants help to \ngreatly decrease common toxins and indoor pollutants such as\nbenzene and formalde\nhyde. One study found\nthat the snake plant\nabsorbs toxins, releases moisture in the air and lessens airborne allergens. Even if you’re using the air filters and purifiers, surrounding yourself with indoor ", "18px 'Segoe Pro'", "#454545");
	this.txt.name = "txt";
	this.txt.lineHeight = 24;
	this.txt.lineWidth = 271;
	this.txt.parent = this;
	this.txt.setTransform(0.15,0.2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_1, new cjs.Rectangle(-1.8,-1.8,274.90000000000003,317), null);


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
	this.txt = new cjs.Text("8 Healthy Benefits\nof Indoor Plants", "26px 'Segoe Pro'", "#2B579A");
	this.txt.name = "txt";
	this.txt.lineHeight = 31;
	this.txt.lineWidth = 252;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.titletext, new cjs.Rectangle(0,0,255.9,101.2), null);


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
	this.txt = new cjs.Text("Page 4 of 5  818 words", "10px 'Segoe Pro'", "#626262");
	this.txt.name = "txt";
	this.txt.lineHeight = 15;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ready_txt, new cjs.Rectangle(0,0,97.6,18.8), null);


(lib.pointer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("AgWCGIBoAAQACAAABgCIAAgfQAAgFACgFIARgiIAAACQAAgDAAgEIAAhkQAAgHgEgDQgDgFgHAAQgGAAgFAFQgFADAAAHIAAAnQAAABgCACQAAACgCAAQgBAAgBgCQgCgCAAgBIAAgyQAAgIgGgCQgCgFgIAAQgGAAgFAFQgFACAAAIIAAAoQgBABgCAAQgCAAgBgBIAAg1QAAgFgFgFQgEgEgHAAQgHAAgDAEQgCAAAAABQgEAEAAAFIAAAzQAAACAAABQgBAAgCAAQgCAAgBAAQAAgBAAgCIAAhiQAAgHgFgCQgFgFgHAAQgHAAgDAFQgEACAAAHIAACJQAAACgCAAIgBAAQgDADgCgDQgCgCgCgFIgEgMQAAgBgBAAIgNgPQgOgKgKAHIAAADQgGAEgBAFQgCAGADAGIBFBXIADACQACAFAAAGIAAAZQAAABACAAQABACACAAg");
	this.shape.setTransform(14.1886,16.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWCGQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgZQAAgGgCgFIgDgCIhFhXQgDgGACgGQABgFAGgEIAAgDQAKgHAOAKIANAPQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIAEAMIAEAHQAAABABAAQAAABABAAQABAAAAgBQABAAABgBIABAAQAAAAAAAAQABAAAAAAQAAgBAAAAQABgBAAAAIAAiJQAAgHAEgCQADgFAHAAQAHAAAFAFQAFACAAAHIAABiIAAADIADAAIADAAIAAgDIAAgzQAAgFAEgEQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAABAAQADgEAHAAQAHAAAEAEQAFAFAAAFIAAA1IADABIADgBIAAgoQAAgIAFgCQAFgFAGAAQAIAAACAFQAGACAAAIIAAAyIACADIACACQAAAAABAAQAAAAAAAAQAAgBABAAQAAgBAAAAIACgDIAAgnQAAgHAFgDQAFgFAGAAQAHAAADAFQAEADAAAHIAABkIAAAHIAAgCIgRAiIgCAKIAAAfQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_1.setTransform(14.1886,16.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1.5,1,1).p("AgWB3IBoAAQACAAABgCIAAgfQAAgFACgFIARgjIAAADQAAgDAAgEIAAhdQAAgGgEgEIAAgBQgDgDgHAAQgGAAgFADIAAABQgFAEAAAGIAAAgQAAABgCABQAAADgCAAQgBAAgBgDQgCgBAAgBIAAgrQAAgGgGgEIAAgBQgCgFgIAAQgGAAgFAFIAAABQgFAEAAAGIAAAhQgBABgCAAQgCAAgBgBIAAgsQAAgHgFgFQgEgCgHAAQgHAAgDACIgCAAQgEAFAAAHIAAAqQAAACAAABQgBAAgCAAQgCAAgBAAQAAgBAAgCIAAhCQAAgGgFgGQgFgEgHAAQgFAAgFAEQgEAGAAAGIAABpQAAACgCAAIgBAAQgDADgCgDQgCgCgCgFIgEgLQAAgBgBAAIgNgRQgOgKgKAIIAAACQgGAFgBAEQgCAIADAGIBFBWIADACQACAFAAAGIAAAZQAAABACAAQABACACAAg");
	this.shape_2.setTransform(14.1886,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#BCBCBC","#FCFCFC","#FFFFFF"],[0,0.259,1],-5.9,-11.6,1.4,7.7).s().p("AgWB3QAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAIAAgZQAAgGgCgFIgDgCIhFhWQgDgGACgHQABgFAGgEIAAgDQAKgIAOALIANAQQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAEAMIAEAGQAAABABAAQAAAAABAAQABAAAAAAQABAAABgBIABAAQAAAAAAAAQABAAAAgBQAAAAAAAAQABgBAAgBIAAhoQAAgGAEgGQAFgEAFAAQAHAAAFAEQAFAGAAAGIAABCIAAADIADAAIADAAIAAgDIAAgqQAAgHAEgFIACAAQADgCAHAAQAHAAAEACQAFAFAAAHIAAAsIADABIADgBIAAghQAAgGAFgEIAAgBQAFgFAGAAQAIAAACAFIAAABQAGAEAAAGIAAArIACADIACACQAAAAABAAQAAAAAAgBQAAAAABAAQAAgBAAAAIACgDIAAgfQAAgHAFgDIAAgCQAFgDAGAAQAHAAADADIAAACQAEADAAAHIAABcIAAAHIAAgCIgRAhIgCALIAAAfQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_3.setTransform(14.1886,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.8,2.2,22.8,29.2);


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
	this.txt = new cjs.Text("Draw", "11px 'Segoe Pro'", "#494846");
	this.txt.name = "txt";
	this.txt.lineHeight = 16;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PageLayout_txt, new cjs.Rectangle(0,0,28.1,18.2), null);


(lib.Overlaycopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("EgOcAuaMAAJhczIcxAAMgALBczgEgK7AhXIL6AAIAAjoIr6AAg");
	this.shape.setTransform(91.55,283.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Overlaycopy, new cjs.Rectangle(-1,-13.4,185.1,594), null);


(lib.Overlay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("EgOcAuaMAAJhczIcxAAMgALBczgEgK7AhXIVdAAIAAjoI1dAAg");
	this.shape.setTransform(91.55,283.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Overlay, new cjs.Rectangle(-1,-13.4,185.1,594), null);


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
	this.shape.setTransform(52.726,57.0011,1.0037,1.0037);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#39A4EE").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_1.setTransform(14.8126,57.0011,1.0037,1.0037);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#83BB1E").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_2.setTransform(52.726,19.0877,1.0037,1.0037);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA4E17").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_3.setTransform(14.8126,19.0877,1.0037,1.0037);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ARIDTQgXgYAAgyIAAieIhtAAIAAD5IhJAAIAAj5Ig0AAIAAg8IA0AAIAAgrQAAgwAfggQAggfAyAAIAXABIATAEIAAA/IgNgFQgJgDgMAAQgWAAgNAPQgNAPAAAbIAAAlIBtAAIAAhFIBJgXIAABcIBKAAIAAA8IhKAAIAACQQAAAcALAMQAKAMAWAAQAHAAAJgDQALgEAEgDIAAA8QgHAEgQADQgTAEgNAAQguAAgXgZgAIrDBQgqgqAAhJQAAhNArgsQAsgtBNAAQBJAAAoArQApArAABJQAABMgrAsQgsAthKAAQhHAAgsgrgAJjAAQgWAaAAAxQAAAwAWAaQAWAaApAAQAoAAAUgaQAVgZAAgzQAAgygVgYQgWgZgnAAQgoAAgWAagAE7DnQgYgFgQgHIAAhIQASANAZAJQAWAIATAAQAaAAALgHQAMgGAAgRQAAgPgNgKQgMgLgigNQgngQgSgWQgRgVAAghQAAgpAhgbQAigbA1AAQAPAAAVAEQARADARAGIAABGQgOgKgUgHQgUgHgSAAQgVAAgMAIQgLAJAAANQAAAPAKAJQAJAJAjAOQArARASAWQASAXAAAeQAAArgiAbQgiAbg5AAQgQAAgagFgAgiDBQgrgqAAhJQAAhNAsgsQArgtBMAAQBJAAApArQAoAsAABIQAABLgrAtQgrAthLAAQhIAAgpgrgAAUAAQgVAaAAAxQAAAwAVAaQAWAaApAAQAoAAAVgaQAVgZAAgzQAAgxgWgZQgVgZgnAAQgpAAgWAagAoDDAQgrgrAAhDQAAhKAsgwQAsgxBQAAQATAAAWAGQAVAFAMAHIAABGQgRgNgRgGQgSgHgSAAQgrAAgbAbQgaAdAAAvQAAAvAZAaQAaAaArAAQARAAATgIQAUgHAQgMIAABDQgTALgUAEQgYAGgZAAQhEAAgrgsgAkFDkIAAk1IBJAAIAAAxIABAAQAKgZAUgPQAUgOAdAAIAQABIALADIAABKQgEgDgMgFQgMgEgPAAQgbAAgSAWQgTAWAAAwIAACcgAqqDkIAAk1IBJAAIAAE1gAs7DkIAAlSIgBAAIiGFSIgyAAIiJlSIgBAAIAAFSIhFAAIAAmvIBrAAIB8E/IACAAICDk/IBnAAIAAGvgAqkiMQgNgNAAgRQAAgSANgMQANgNASAAQATAAANANQANANAAARQAAASgNAMQgNAMgTAAQgSAAgNgMg");
	this.shape_4.setTransform(214.0646,36.8525,1.0037,1.0037);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah+DKIAAhDQArAcAqAAQArAAAbgWQAbgWAAgmQAAgkgbgVQgbgUgyAAQgWAAgxADIAPjiIDUAAIAAA8IiZAAIgIBsIAmgBQBEAAAlAjQAmAigBA9QAABAgrAnQgqAnhLAAQg/AAgegSg");
	this.shape_5.setTransform(429.8412,38.4584,1.0037,1.0037);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhoCqQgogzAAheQAAhLAXg3QAWg4ArgeQAqgfA2AAQAyAAAaAMIAAA/QgjgSgmAAQgzAAggArQggAtgBBKIACAAQANgYAagPQAagOAcAAQA4AAAiAkQAhAkAAA9QAAApgTAiQgTAigfATQghASgoAAQhDAAgog1gAgxAUQgUAXAAAfQgBAZAKAUQAJAVARANQAQAMAWAAQAhAAATgWQATgXAAgmQAAgngTgWQgTgVgiAAQgeAAgWAUg");
	this.shape_6.setTransform(399.1794,38.082,1.0037,1.0037);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhWDYQgegHgOgKIAAhEQAUAQAbAJQAcAKAbAAQAoAAAYgUQAYgTAAggQAAgkgcgSQgcgTg0AAIgmAAIAAg5IAkAAQAuAAAYgRQAZgRAAghQAAgegTgRQgUgQgjAAQguAAgnAfIAAhAQASgKAcgIQAbgGAfAAQAmAAAcAOQAeANAPAYQAPAXAAAfQAAAqgWAbQgXAbgpAMIAAAAQAvAGAbAbQAbAbAAApQAAA8grAjQgqAkhJAAQggAAgbgHg");
	this.shape_7.setTransform(367.7898,38.082,1.0037,1.0037);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,1.9,445,72.3);


(lib.Microsoftlogo_rgb_cgrayai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9B90E").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape.setTransform(52.726,57.0011,1.0037,1.0037);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#39A4EE").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_1.setTransform(14.8126,57.0011,1.0037,1.0037);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#83BB1E").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_2.setTransform(52.726,19.0877,1.0037,1.0037);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA4E17").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_3.setTransform(14.8126,19.0877,1.0037,1.0037);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#737373").s().p("ARIDTQgXgYAAgyIAAieIhtAAIAAD5IhJAAIAAj5Ig0AAIAAg8IA0AAIAAgrQAAgwAfggQAggfAyAAIAXABIATAEIAAA/IgNgFQgJgDgMAAQgWAAgNAPQgNAPAAAbIAAAlIBtAAIAAhFIBJgXIAABcIBKAAIAAA8IhKAAIAACQQAAAcALAMQAKAMAWAAQAHAAAJgDQALgEAEgDIAAA8QgHAEgQADQgTAEgNAAQguAAgXgZgAIrDBQgqgqAAhJQAAhNArgsQAsgtBNAAQBJAAAoArQApArAABJQAABMgrAsQgsAthKAAQhHAAgsgrgAJjAAQgWAaAAAxQAAAwAWAaQAWAaApAAQAoAAAUgaQAVgZAAgzQAAgygVgYQgWgZgnAAQgoAAgWAagAE7DnQgYgFgQgHIAAhIQASANAZAJQAWAIATAAQAaAAALgHQAMgGAAgRQAAgPgNgKQgMgLgigNQgngQgSgWQgRgVAAghQAAgpAhgbQAigbA1AAQAPAAAVAEQARADARAGIAABGQgOgKgUgHQgUgHgSAAQgVAAgMAIQgLAJAAANQAAAPAKAJQAJAJAjAOQArARASAWQASAXAAAeQAAArgiAbQgiAbg5AAQgQAAgagFgAgiDBQgrgqAAhJQAAhNAsgsQArgtBMAAQBJAAApArQAoAsAABIQAABLgrAtQgrAthLAAQhIAAgpgrgAAUAAQgVAaAAAxQAAAwAVAaQAWAaApAAQAoAAAVgaQAVgZAAgzQAAgxgWgZQgVgZgnAAQgpAAgWAagAoDDAQgrgrAAhDQAAhKAsgwQAsgxBQAAQATAAAWAGQAVAFAMAHIAABGQgRgNgRgGQgSgHgSAAQgrAAgbAbQgaAdAAAvQAAAvAZAaQAaAaArAAQARAAATgIQAUgHAQgMIAABDQgTALgUAEQgYAGgZAAQhEAAgrgsgAkFDkIAAk1IBJAAIAAAxIABAAQAKgZAUgPQAUgOAdAAIAQABIALADIAABKQgEgDgMgFQgMgEgPAAQgbAAgSAWQgTAWAAAwIAACcgAqqDkIAAk1IBJAAIAAE1gAs7DkIAAlSIgBAAIiGFSIgyAAIiJlSIgBAAIAAFSIhFAAIAAmvIBrAAIB8E/IACAAICDk/IBnAAIAAGvgAqkiMQgNgNAAgRQAAgSANgMQANgNASAAQATAAANANQANANAAARQAAASgNAMQgNAMgTAAQgSAAgNgMg");
	this.shape_4.setTransform(214.0646,36.8525,1.0037,1.0037);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#737373").s().p("Ah+DKIAAhDQArAcAqAAQArAAAbgWQAbgWAAgmQAAgkgbgVQgbgUgyAAQgWAAgxADIAPjiIDUAAIAAA8IiZAAIgIBsIAmgBQBEAAAlAjQAmAigBA9QAABAgrAnQgqAnhLAAQg/AAgegSg");
	this.shape_5.setTransform(429.8412,38.4584,1.0037,1.0037);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#737373").s().p("AhoCqQgogzAAheQAAhLAXg3QAWg4ArgeQAqgfA2AAQAyAAAaAMIAAA/QgjgSgmAAQgzAAggArQggAtgBBKIACAAQANgYAagPQAagOAcAAQA4AAAiAkQAhAkAAA9QAAApgTAiQgTAigfATQghASgoAAQhDAAgog1gAgxAUQgUAXAAAfQgBAZAKAUQAJAVARANQAQAMAWAAQAhAAATgWQATgXAAgmQAAgngTgWQgTgVgiAAQgeAAgWAUg");
	this.shape_6.setTransform(399.1794,38.082,1.0037,1.0037);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#737373").s().p("AhWDYQgegHgOgKIAAhEQAUAQAbAJQAcAKAbAAQAoAAAYgUQAYgTAAggQAAgkgcgSQgcgTg0AAIgmAAIAAg5IAkAAQAuAAAYgRQAZgRAAghQAAgegTgRQgUgQgjAAQguAAgnAfIAAhAQASgKAcgIQAbgGAfAAQAmAAAcAOQAeANAPAYQAPAXAAAfQAAAqgWAbQgXAbgpAMIAAAAQAvAGAbAbQAbAbAAApQAAA8grAjQgqAkhJAAQggAAgbgHg");
	this.shape_7.setTransform(367.7898,38.082,1.0037,1.0037);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,1.9,445,72.3);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxQPwIAA/fMAihAAAIAAffg");
	this.shape.setTransform(147.125,130.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(36.6,29.4,221.1,201.6), null);


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
	this.txt = new cjs.Text("Insert", "11px 'Segoe Pro'", "#494846");
	this.txt.name = "txt";
	this.txt.lineHeight = 16;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Insert_txt, new cjs.Rectangle(0,0,29.7,18.2), null);


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
	this.txt = new cjs.Text("Home", "11px 'Segoe Pro'", "#494846");
	this.txt.name = "txt";
	this.txt.lineHeight = 16;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Home_txt, new cjs.Rectangle(0,0,32.2,18.2), null);


(lib.fore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.frontShot_300x600();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fore, new cjs.Rectangle(0,0,320,472), null);


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
	this.txt = new cjs.Text("Word", "12px 'Segoe Pro'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.lineHeight = 18;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Excel_txt, new cjs.Rectangle(0,0,33.6,20.2), null);


(lib.docImage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.docImage, new cjs.Rectangle(0,0,160,229), null);


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


(lib.bushes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bush_300x600();
	this.instance.setTransform(199,0);

	this.instance_1 = new lib.bush_300x600();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bushes, new cjs.Rectangle(0,0,399,264), null);


(lib.book = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#707070").s().p("AgUABIAAgBIAEgEIAAAAIACABIAKALIATgZIABAAIAAAAIAFADIAAABIgYAgg");
	this.shape.setTransform(8.9809,4.3157,1.2856,1.2856);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#707070").s().p("AAAAkQAAgEgRAAIgXAAIAAhDIAPAAQAVAAAFAIQAFgIAUAAIAPAAIAAAOIgCAEIAAgPIgNAAQgYAAAAAKIAAA2QADgCAOAAIAUAAIAAgeIACgCIAAAiIgWAAQgRAAAAAEgAgmAeIAVAAQAPAAACACIAAg2QAAgKgZAAIgNAAg");
	this.shape_1.setTransform(5.317,4.6692,1.2856,1.2856);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.book, new cjs.Rectangle(0,0,11.7,9.4), null);


(lib.arrows_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494846").s().p("AgQAUIATgUIgTgTIAHgHIAaAaIgaAbg");
	this.shape.setTransform(5.1314,2.9909,1.0994,1.0994);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#494846").s().p("AgRAUIAVgUIgVgTIAHgHIAbAaIgbAbg");
	this.shape_1.setTransform(1.8605,2.9909,1.0994,1.0994);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arrows_1, new cjs.Rectangle(0,0,7.1,6), null);


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
		this.txt_1.cache(0,-300,160,600,1.6)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.txt_1 = new lib.txt_1();
	this.txt_1.name = "txt_1";
	this.txt_1.setTransform(144.8,43.5,1,1,0,0,0,144.8,43.5);

	this.timeline.addTween(cjs.Tween.get(this.txt_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(-1.8,-1.8,274.90000000000003,317), null);


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
		this.txt_fix.cache(-10,-300,160,600,1.6)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.txt_fix = new lib.txt_fix();
	this.txt_fix.name = "txt_fix";
	this.txt_fix.setTransform(135.8,43.5,1,1,0,0,0,135.8,43.5);

	this.timeline.addTween(cjs.Tween.get(this.txt_fix).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_2, new cjs.Rectangle(-1.8,-1.8,274.90000000000003,317), null);


(lib.top_arrows = function(mode,startPosition,loop) {
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
	this.arrows = new lib.arrows_1();
	this.arrows.name = "arrows";
	this.arrows.setTransform(3.6,3,1,1,0,0,0,3.6,3);

	this.timeline.addTween(cjs.Tween.get(this.arrows).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.top_arrows, new cjs.Rectangle(0,0,7.1,6), null);


(lib.title_text = function(mode,startPosition,loop) {
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
		this.txt_header.cache(-10,-300,160,600,1.6)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.txt_header = new lib.titletext();
	this.txt_header.name = "txt_header";
	this.txt_header.setTransform(0,-15.45,1,1,0,0,0,127.9,35.1);

	this.timeline.addTween(cjs.Tween.get(this.txt_header).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.title_text, new cjs.Rectangle(-127.9,-50.5,255.9,101.1), null);


(lib.textanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// TextDynamic
	this.instance = new lib.txt1();
	this.instance.setTransform(148.8,311.5,1,1,0,0,0,144.8,43.5);

	this.instance_1 = new lib.txt_2();
	this.instance_1.setTransform(139.8,311.5,1,1,0,0,0,135.8,43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// TitleTextDynamic
	this.instance_2 = new lib.title_text();
	this.instance_2.setTransform(128.9,238.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,188.4,276.1,394.80000000000007);


(lib.ScreenBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Image
	this.instance = new lib.docImage();
	this.instance.setTransform(150,123.5,1,1,0,0,0,150,98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.whiteRect();
	this.instance_1.setTransform(150,236,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ScreenBG, new cjs.Rectangle(0,-64,160,600), null);


(lib.scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.fg = new lib.fore();
	this.fg.name = "fg";
	this.fg.setTransform(166,236,1,1,0,0,0,160,236);

	this.timeline.addTween(cjs.Tween.get(this.fg).wait(1));

	// Layer_1
	this.bg = new lib.bushes();
	this.bg.name = "bg";
	this.bg.setTransform(199.5,169,1,1,0,0,0,199.5,132);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scene3, new cjs.Rectangle(0,0,399,472), null);


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
	this.instance.setTransform(66.5,886.1,0.1849,0.1849,0,0,0,-39.5,1.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regX:-40,regY:1.4,scaleX:3.0594,scaleY:3.0594,x:66.4},13,cjs.Ease.quadOut).to({x:-103.6},12,cjs.Ease.quadInOut).to({_off:true},1).wait(48));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("EgUrBHzIAAqUMA45AAAIAAKUg");
	var mask_graphics_15 = new cjs.Graphics().p("EgU3BHzIAAqUMA45AAAIAAKUg");
	var mask_graphics_16 = new cjs.Graphics().p("EgVaBHzIAAqUMA44AAAIAAKUg");
	var mask_graphics_17 = new cjs.Graphics().p("EgWVBHzIAAqUMA44AAAIAAKUg");
	var mask_graphics_18 = new cjs.Graphics().p("EgXoBHzIAAqUMA44AAAIAAKUg");
	var mask_graphics_19 = new cjs.Graphics().p("EgZSBHzIAAqUMA44AAAIAAKUg");
	var mask_graphics_20 = new cjs.Graphics().p("EgbUBHzIAAqUMA44AAAIAAKUg");
	var mask_graphics_21 = new cjs.Graphics().p("EgccBHzIAAqUMA45AAAIAAKUg");
	var mask_graphics_22 = new cjs.Graphics().p("EgccBHzIAAqUMA45AAAIAAKUg");
	var mask_graphics_23 = new cjs.Graphics().p("EgccBHzIAAqUMA45AAAIAAKUg");
	var mask_graphics_24 = new cjs.Graphics().p("EgccBHzIAAqUMA45AAAIAAKUg");
	var mask_graphics_25 = new cjs.Graphics().p("EgccBHzIAAqUMA45AAAIAAKUg");
	var mask_graphics_26 = new cjs.Graphics().p("EgccBHzIAAqUMA45AAAIAAKUg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:231.7572,y:459.506}).wait(1).to({graphics:mask_graphics_15,x:230.575,y:459.506}).wait(1).to({graphics:mask_graphics_16,x:227.0284,y:459.506}).wait(1).to({graphics:mask_graphics_17,x:221.1174,y:459.506}).wait(1).to({graphics:mask_graphics_18,x:212.842,y:459.506}).wait(1).to({graphics:mask_graphics_19,x:202.2023,y:459.506}).wait(1).to({graphics:mask_graphics_20,x:189.1981,y:459.506}).wait(1).to({graphics:mask_graphics_21,x:170.3212,y:459.506}).wait(1).to({graphics:mask_graphics_22,x:149.0417,y:459.506}).wait(1).to({graphics:mask_graphics_23,x:132.491,y:459.506}).wait(1).to({graphics:mask_graphics_24,x:120.669,y:459.506}).wait(1).to({graphics:mask_graphics_25,x:113.5758,y:459.506}).wait(1).to({graphics:mask_graphics_26,x:111.3476,y:459.506}).wait(1).to({graphics:null,x:0,y:0}).wait(48));

	// Layer_7
	this.instance_1 = new lib.MSFT_Logo_anim();
	this.instance_1.setTransform(-200.65,882.4,3.0594,3.0594,0,0,0,0.1,0.2);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({x:19.15},12,cjs.Ease.quadInOut).to({_off:true},24).wait(25));

	// white (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EgpDCaqMAAAk1TMBSHAAAMAAAE1Tg");
	var mask_1_graphics_51 = new cjs.Graphics().p("EgpDCaqMAAAk1TMBSHAAAMAAAE1Tg");
	var mask_1_graphics_52 = new cjs.Graphics().p("EgpDCaqMAAAk1TMBSHAAAMAAAE1Tg");
	var mask_1_graphics_53 = new cjs.Graphics().p("EgpDCaqMAAAk1TMBSHAAAMAAAE1Tg");
	var mask_1_graphics_54 = new cjs.Graphics().p("EgpDCaqMAAAk1TMBSHAAAMAAAE1Tg");
	var mask_1_graphics_55 = new cjs.Graphics().p("EgpDCaqMAAAk1TMBSHAAAMAAAE1Tg");
	var mask_1_graphics_56 = new cjs.Graphics().p("EgpDCaqMAAAk1TMBSHAAAMAAAE1Tg");
	var mask_1_graphics_57 = new cjs.Graphics().p("EgpDCaqMAAAk1TMBSHAAAMAAAE1Tg");
	var mask_1_graphics_58 = new cjs.Graphics().p("EgpDCaqMAAAk1TMBSHAAAMAAAE1Tg");
	var mask_1_graphics_59 = new cjs.Graphics().p("EgpDCaqMAAAk1TMBSHAAAMAAAE1Tg");
	var mask_1_graphics_60 = new cjs.Graphics().p("EgpDCaqMAAAk1TMBSHAAAMAAAE1Tg");
	var mask_1_graphics_61 = new cjs.Graphics().p("EgpDCaqMAAAk1TMBSHAAAMAAAE1Tg");
	var mask_1_graphics_62 = new cjs.Graphics().p("EgpDCaqMAAAk1TMBSHAAAMAAAE1Tg");
	var mask_1_graphics_63 = new cjs.Graphics().p("EgpDCaqMAAAk1TMBSHAAAMAAAE1Tg");
	var mask_1_graphics_64 = new cjs.Graphics().p("EgpDCaqMAAAk1TMBSHAAAMAAAE1Tg");
	var mask_1_graphics_65 = new cjs.Graphics().p("EgpDCaqMAAAk1TMBSHAAAMAAAE1Tg");
	var mask_1_graphics_66 = new cjs.Graphics().p("EgpDCaqMAAAk1TMBSHAAAMAAAE1Tg");
	var mask_1_graphics_67 = new cjs.Graphics().p("EgpDCaqMAAAk1TMBSHAAAMAAAE1Tg");
	var mask_1_graphics_68 = new cjs.Graphics().p("EgqKCaqMAAAk1TMBSIAAAMAAAE1Tg");
	var mask_1_graphics_69 = new cjs.Graphics().p("EgtbCaqMAAAk1TMBSIAAAMAAAE1Tg");
	var mask_1_graphics_70 = new cjs.Graphics().p("Egw4CaqMAAAk1TMBSIAAAMAAAE1Tg");
	var mask_1_graphics_71 = new cjs.Graphics().p("Eg0hCaqMAAAk1TMBSIAAAMAAAE1Tg");
	var mask_1_graphics_72 = new cjs.Graphics().p("Eg4UCaqMAAAk1TMBSHAAAMAAAE1Tg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:68.2273,y:916.1858}).wait(51).to({graphics:mask_1_graphics_51,x:68.2273,y:916.1858}).wait(1).to({graphics:mask_1_graphics_52,x:67.0331,y:916.1858}).wait(1).to({graphics:mask_1_graphics_53,x:63.4503,y:916.1858}).wait(1).to({graphics:mask_1_graphics_54,x:57.479,y:916.1858}).wait(1).to({graphics:mask_1_graphics_55,x:49.1193,y:916.1858}).wait(1).to({graphics:mask_1_graphics_56,x:38.371,y:916.1858}).wait(1).to({graphics:mask_1_graphics_57,x:25.2342,y:916.1858}).wait(1).to({graphics:mask_1_graphics_58,x:9.7088,y:916.1858}).wait(1).to({graphics:mask_1_graphics_59,x:-8.205,y:916.1858}).wait(1).to({graphics:mask_1_graphics_60,x:-28.5073,y:916.1858}).wait(1).to({graphics:mask_1_graphics_61,x:-51.1982,y:916.1858}).wait(1).to({graphics:mask_1_graphics_62,x:-76.2775,y:916.1858}).wait(1).to({graphics:mask_1_graphics_63,x:-103.7454,y:916.1858}).wait(1).to({graphics:mask_1_graphics_64,x:-133.6018,y:916.1858}).wait(1).to({graphics:mask_1_graphics_65,x:-165.8467,y:916.1858}).wait(1).to({graphics:mask_1_graphics_66,x:-200.4801,y:916.1858}).wait(1).to({graphics:mask_1_graphics_67,x:-237.502,y:916.1858}).wait(1).to({graphics:mask_1_graphics_68,x:-269.8699,y:916.1858}).wait(1).to({graphics:mask_1_graphics_69,x:-290.7693,y:916.1858}).wait(1).to({graphics:mask_1_graphics_70,x:-312.8631,y:916.1858}).wait(1).to({graphics:mask_1_graphics_71,x:-336.151,y:916.1858}).wait(1).to({graphics:mask_1_graphics_72,x:-360.525,y:916.1858}).wait(3));

	// Layer_9
	this.instance_2 = new lib.MSFT_Logo_anim();
	this.instance_2.setTransform(19.15,882.4,3.0594,3.0594,0,0,0,0.1,0.2);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50).to({_off:false},0).wait(25));

	// white
	this.instance_3 = new lib.white();
	this.instance_3.setTransform(68.2,2281.7,0.5414,5.7885,0,0,0,485.4,406.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(51).to({scaleY:5.7403,y:2262.05},0).to({regX:484.9,x:-458.55},21,cjs.Ease.quadIn).wait(3));

	// white copy
	this.instance_4 = new lib.white();
	this.instance_4.setTransform(68.2,2281.7,0.5414,5.7885,0,0,0,485.4,406.9);
	this.instance_4.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(51).to({scaleY:5.741,y:2262.35},0).wait(2).to({regX:484.9,scaleY:5.7885,x:-458.55,y:2281.7},21,cjs.Ease.quadIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-721,-73.6,1052.1,1979.6);


(lib.menu_bg_sub = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#606061").s().p("AgrAEIAAgHIBXAAIAAAHg");
	this.shape.setTransform(258.8759,186.5283);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#606061").s().p("AgaAhQgKgMgBgTQAAgTALgNQALgNASAAQASAAAKAOQAGALABAPIgCAGIg5AAQAAAPAIAHQAIAHALAAQANAAALgEIACALQgLAFgRAAQgSAAgMgLgAgPgYQgFAHgBAKIAsAAQAAgKgFgGQgFgJgMAAQgJAAgHAIg");
	this.shape_1.setTransform(318.2018,180.5282);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#606061").s().p("AgTArIgBhTIANAAIABAQIAAAAQADgIAGgFQAGgFAIAAIAEAAIAAAPIgFgBQgQAAgEAUIAAAzg");
	this.shape_2.setTransform(311.5767,180.4282);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#606061").s().p("AgdAhQgMgMABgUQgBgUAMgMQAMgMASAAQASAAALAMQALAMAAATQAAAVgNANQgMAKgQAAQgRAAgMgLgAgTgVQgGAJAAAMQAAAOAHAJQAIAKAKAAQALAAAHgJQAIgKgBgOQAAgMgFgJQgIgLgMAAQgLAAgIALg");
	this.shape_3.setTransform(303.4516,180.5282);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#606061").s().p("AAtA7IgDg0IgCgyIAAAAIgPAsIgVA5IgKAAIgTg4IgOgtIgGBmIgOAAIAIh1IATAAIAUA5IAMAnIAAAAQADgMAJgbIAVg5IAUAAIAHB1g");
	this.shape_4.setTransform(291.5264,178.8782);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#606061").s().p("AgZAhQgLgMAAgTQAAgTAKgNQALgNARAAQATAAAJAOQAHALAAAPIAAAGIg7AAQABAdAbAAQANAAALgEIACALQgMAFgQAAQgSAAgLgLgAgPgYQgFAHgCAKIAsAAQABgJgFgHQgFgJgMAAQgKAAgGAIg");
	this.shape_5.setTransform(276.4262,180.5282);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#606061").s().p("AgZAhQgLgMAAgTQgBgTALgNQALgNASAAQASAAAJAOQAIALAAAPIgBAGIg7AAQAAAPAJAHQAIAHALAAQANAAALgEIACALQgMAFgQAAQgSAAgLgLgAgPgYQgGAHgBAKIAsAAQAAgKgDgGQgHgJgLAAQgJAAgHAIg");
	this.shape_6.setTransform(267.6511,180.5282);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#606061").s().p("AgjA1IAEgNQAMAIAPAAQALAAAHgFQAGgGAAgJQAAgIgFgGQgFgFgLgEQgfgLAAgWQAAgOAKgJQALgJAQAAQARAAAJAGIgEAMQgLgFgMAAQgKAAgGAGQgFAEAAAHQAAAIAGAFQAFAFAMAFQAPAGAHAHQAIAIAAANQAAAOgKAKQgMAKgTAAQgSAAgMgIg");
	this.shape_7.setTransform(258.8259,178.8782);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#345699").s().p("AgcAhQgLgLAAgVQAAgMAFgKQAGgKAJgGQAKgGALAAQASAAAKALQAKALAAATIAAAJIg1AAQABATAUAAQAOAAALgHIAAATQgMAGgSAAQgUAAgLgLgAgIgUQgFAFgBAIIAeAAQAAgSgOAAQgGAAgEAFg");
	this.shape_8.setTransform(415.225,19.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#345699").s().p("AgjA6IAAgWQANAHANAAQAMAAAHgGQAHgHAAgMIAAgHQgJAOgQAAQgQAAgJgLQgJgLAAgSQAAgVAKgMQAKgNARAAQAPAAAHAMIAAgKIAaAAIAABJQAAAXgNANQgOAMgYAAQgRAAgKgEgAgLgjQgFAHAAAMQAAALAEAFQAFAGAHAAQAIAAAFgGQAFgGAAgKIAAgGQAAgIgFgGQgFgFgHAAQgIAAgEAGg");
	this.shape_9.setTransform(405.275,21.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#345699").s().p("AgeAlQgHgHAAgLQAAgYAdgDIAWgDQAAgOgOAAQgPAAgNAJIAAgUQAEgCAKgCQAKgDAGAAQAkAAAAAkIAAAxIgYAAIAAgMIgBAAQgIAOgQAAQgMAAgHgHgAAAAEQgNACAAAKQAAAEADADQADADAFAAQAGAAAFgFQAFgFAAgIIAAgGg");
	this.shape_10.setTransform(395.625,19.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#345699").s().p("AgnAIIAAgxIAZAAIAAAuQAAASAOAAQAGAAAEgFQAFgFAAgIIAAguIAZAAIAABRIgZAAIAAgMIgBAAQgJAOgPAAQgdAAAAgig");
	this.shape_11.setTransform(386.325,19.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#345699").s().p("AgjA6IAAgWQANAHANAAQAMAAAHgGQAHgHAAgMIAAgHQgJAOgQAAQgQAAgJgLQgJgLAAgSQAAgVAKgMQAKgNARAAQAPAAAHAMIAAgKIAaAAIAABJQAAAXgNANQgOAMgYAAQgRAAgKgEgAgLgjQgFAHAAAMQAAALAEAFQAFAGAHAAQAIAAAFgGQAFgGAAgKIAAgGQAAgIgFgGQgFgFgHAAQgIAAgEAGg");
	this.shape_12.setTransform(375.975,21.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#345699").s().p("AAPArIAAguQAAgTgOAAQgGAAgEAFQgFAFABAIIAAAvIgaAAIAAhSIAaAAIAAANIAAAAQAJgQARAAQAbAAAAAjIAAAyg");
	this.shape_13.setTransform(366.1,19.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#345699").s().p("AgeAlQgHgHAAgLQAAgYAdgDIAWgDQAAgOgOAAQgPAAgNAJIAAgUQAEgCAKgCQAKgDAGAAQAkAAAAAkIAAAxIgYAAIAAgMIgBAAQgIAOgQAAQgMAAgHgHgAAAAEQgNACAAAKQAAAEADADQADADAFAAQAGAAAFgFQAFgFAAgIIAAgGg");
	this.shape_14.setTransform(356.275,19.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#345699").s().p("AgMA9IAAh5IAZAAIAAB5g");
	this.shape_15.setTransform(349.675,17.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#345699").s().p("AgcAhQgLgLAAgVQAAgMAFgKQAGgKAJgGQAKgGALAAQASAAAKALQAKALAAATIAAAJIg1AAQABATAUAAQAOAAALgHIAAATQgMAGgSAAQgUAAgLgLgAgIgUQgFAFgBAIIAeAAQAAgSgOAAQgGAAgEAFg");
	this.shape_16.setTransform(339.025,19.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#345699").s().p("AgdAoIAAgVQAMAHALAAQALAAABgHIgBgEIgFgDIgJgFQgLgDgFgFQgEgGAAgJQAAgMAJgHQAKgIAPAAQAKAAAKAEIAAAUQgKgGgKAAQgJAAAAAHIABAEIADADIAIAEQAMAEAFAFQAGAGAAAIQAAANgLAHQgJAIgQAAQgNAAgLgEg");
	this.shape_17.setTransform(330.9,19.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#345699").s().p("AgMA9IAAhRIAZAAIAABRgAgKgmQgEgEAAgGQAAgFAFgEQAEgDAFAAQAHAAAEADQAEAEAAAFQAAAGgEAEQgEAEgHAAQgGAAgEgEg");
	this.shape_18.setTransform(324.725,17.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#345699").s().p("AgNAnQgJgGgFgJQgGgKAAgMQAAgUAMgMQANgNAUAAQAQAAAGAEIAAAWQgIgGgKAAQgMAAgEAHQgHAGAAAKQAAALAGAHQAFAGALAAQAKAAAJgGIAAAVQgJAFgQAAQgMAAgKgFg");
	this.shape_19.setTransform(318.35,19.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#345699").s().p("AAPArIAAguQAAgTgOAAQgGAAgEAFQgFAFABAIIAAAvIgaAAIAAhSIAaAAIAAANIAAAAQAJgQARAAQAbAAAAAjIAAAyg");
	this.shape_20.setTransform(309.4,19.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#345699").s().p("AggAgQgMgLAAgVQAAgTAMgMQAMgMAVAAQAUAAAMAMQAMAMAAATQAAAUgNAMQgMAMgUAAQgUAAgMgMgAgNgRQgFAHAAAKQAAAYATAAQASAAAAgYQAAgXgTAAQgIAAgFAGg");
	this.shape_21.setTransform(299.25,19.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#345699").s().p("AgMAnQgKgGgGgJQgFgKAAgMQAAgUANgMQAMgNAVAAQAOAAAHAEIAAAWQgIgGgKAAQgLAAgGAHQgGAGAAAKQAAALAGAHQAFAGALAAQAJAAAKgGIAAAVQgJAFgQAAQgLAAgKgFg");
	this.shape_22.setTransform(290.15,19.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#345699").s().p("AgcAhQgLgLAAgVQAAgMAFgKQAGgKAJgGQAKgGALAAQASAAAKALQAKALAAATIAAAJIg1AAQABATAUAAQAOAAALgHIAAATQgMAGgSAAQgUAAgLgLgAgIgUQgFAFgBAIIAeAAQAAgSgOAAQgGAAgEAFg");
	this.shape_23.setTransform(277.875,19.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#345699").s().p("AgeAoIAAgVQANAHAMAAQAKAAAAgHIgBgEIgDgDIgKgFQgLgDgEgFQgFgGgBgJQAAgMAKgHQAKgIAOAAQALAAALAEIAAAUQgKgGgLAAQgJAAAAAHIABAEIADADIAIAEQAMAEAFAFQAFAGAAAIQABANgLAHQgKAIgPAAQgNAAgMgEg");
	this.shape_24.setTransform(269.75,19.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#345699").s().p("AgvAIIAAhCIAaAAIAABCQAAAdAVAAQAWAAAAgcIAAhDIAaAAIAABBQAAA0gwAAQgvAAAAgzg");
	this.shape_25.setTransform(259.925,17.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#606061").s().p("AgxAEIAAgHIBjAAIAAAHg");
	this.shape_26.setTransform(270.9261,154.9778);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#606061").s().p("AAKgTIAQgBQgHAagJAOIgKABQAHgSADgWgAgPgTIAPgBQgGAagKAOIgJABQAHgVADgTg");
	this.shape_27.setTransform(436.0536,143.3776);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#606061").s().p("AgbAnIAEgMQAJAGALAAQAQAAAAgNQAAgKgPgFQgWgHAAgQQAAgLAIgHQAIgHAMAAQAMAAAJAFIgEALQgHgEgKAAQgOAAAAALQAAAFAEADQADADAIADQAXAIAAARQAAALgIAHQgJAHgOAAQgOAAgKgFg");
	this.shape_28.setTransform(429.6785,148.9777);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#606061").s().p("AgbAnIAEgMQAJAGAMAAQAPAAAAgNQAAgKgPgFQgWgHAAgQQAAgLAIgHQAIgHAMAAQANAAAIAFIgEALQgIgEgJAAQgNAAAAALQAAAFAEADQADADAIADQAWAIAAARQAAALgIAHQgJAHgOAAQgOAAgKgFg");
	this.shape_29.setTransform(422.7284,148.9777);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#606061").s().p("AgZAhQgLgMAAgTQAAgTAKgNQALgNARAAQATAAAJAOQAHALAAAPIAAAGIg7AAQABAPAIAHQAIAHALAAQAPAAAJgEIACALQgKAFgSAAQgSAAgLgLgAgPgXQgFAHgBAJIArAAQABgJgFgHQgFgJgMAAQgJAAgHAJg");
	this.shape_30.setTransform(414.9283,148.9777);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#606061").s().p("AAVAsIAAgxQAAgZgUABQgGgBgGAFQgFAFgCAGQgBACAAAFIAAAzIgQAAIAAhVIANAAIABAPQAJgQASgBQAMAAAIAIQAKAJAAAUIAAAyg");
	this.shape_31.setTransform(405.6782,148.9027);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#606061").s().p("AgZAhQgLgMAAgTQAAgTALgNQALgNAQAAQATAAAJAOQAIALAAAPIgBAGIg7AAQABAPAIAHQAIAHAMAAQAOAAAJgEIACALQgKAFgSAAQgSAAgLgLgAgPgXQgFAGgCAKIAsAAQAAgZgVAAQgJAAgHAJg");
	this.shape_32.setTransform(396.453,148.9777);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#606061").s().p("AgbAnIAEgMQAJAGAMAAQAPAAAAgNQAAgKgPgFQgWgHAAgQQAAgLAIgHQAIgHAMAAQANAAAIAFIgEALQgIgEgJAAQgNAAAAALQAAAFAEADQADADAIADQAWAIAAARQAAALgIAHQgJAHgOAAQgOAAgKgFg");
	this.shape_33.setTransform(388.5779,148.9777);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#606061").s().p("AgHA7IAAhUIAPAAIAABUgAgGgqQgDgCAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDACQgDADgEAAQgDAAgDgDg");
	this.shape_34.setTransform(383.0778,147.3277);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#606061").s().p("AgVAhQgMgNAAgTQAAgTANgMQAMgNAUAAQAOAAAIAFIgEALQgHgEgLAAQgMAAgJAKQgHAIAAANQAAAPAIAJQAIAIALAAQAKAAAJgFIADAMQgIAFgQAAQgSAAgMgLg");
	this.shape_35.setTransform(377.2027,149.0027);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#606061").s().p("AAVAsIAAgxQAAgZgTABQgPAAgGAPIgBAHIAAAzIgPAAIAAhVIANAAIABAPIAAAAQAJgQASgBQAMAAAIAIQALAJAAAUIAAAyg");
	this.shape_36.setTransform(368.3526,148.9027);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#606061").s().p("AgdAhQgMgMABgVQgBgTAMgNQANgLAQgBQATAAALANQALAMAAATQABAVgOANQgMALgQgBQgSABgLgMgAgTgVQgGAJAAAMQAAAOAHAJQAIAKAKAAQALgBAHgIQAHgKAAgOQAAgMgFgIQgIgMgMAAQgLAAgIALg");
	this.shape_37.setTransform(358.7024,149.0027);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#606061").s().p("AgbAtQgRgQAAgcQAAgaARgSQARgRAbAAQASAAAKAFIgEANQgKgFgOAAQgTAAgNANQgNANABAWQgBAWAMAMQAMANAVAAQAOAAALgFIACAMQgKAGgUAAQgZAAgQgQg");
	this.shape_38.setTransform(349.0523,147.3277);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#606061").s().p("AAQgTIAKgBQgHASgDAWIgQABQAGgXAKgRgAgJgTIAJgBQgGASgDAWIgQABQAHgaAJgOg");
	this.shape_39.setTransform(341.3772,143.3776);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#606061").s().p("AgUAsIAAhVIANAAIABARIAAAAQADgIAGgFQAGgGAIAAIAEABIAAAPIgFAAQgQAAgEATIAAA0g");
	this.shape_40.setTransform(333.5271,148.9027);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#606061").s().p("AgdAhQgMgMABgVQgBgTAMgNQANgLAQgBQATAAALANQALAMAAATQAAAVgNANQgMALgQgBQgSABgLgMgAgTgVQgGAJAAAMQAAAOAHAJQAIAKAKAAQALgBAHgIQAHgKAAgOQAAgMgFgIQgIgMgMAAQgLAAgIALg");
	this.shape_41.setTransform(325.4019,149.0027);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#606061").s().p("AgPA/IAAhIIgMAAIAAgMIAMAAIAAgEQAAgUAKgJQAHgIANAAQAFAAAIACIgCAMQgFgCgFAAQgQAAAAAZIAAAEIAUAAIAAAMIgUAAIAABIg");
	this.shape_42.setTransform(318.7268,146.9277);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#606061").s().p("AgbAnIAEgMQAJAGAMAAQAPAAAAgNQAAgKgPgFQgWgHAAgQQAAgLAIgHQAIgHAMAAQANAAAIAFIgEALQgIgEgJAAQgNAAAAALQAAAFAEADQADADAIADQAWAIAAARQAAALgIAHQgJAHgOAAQgOAAgKgFg");
	this.shape_43.setTransform(308.5267,148.9777);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#606061").s().p("AAVAsIAAgxQAAgZgUABQgGgBgGAFQgFAFgCAGIgBAHIAAAzIgQAAIAAhVIANAAIABAPQAJgQASgBQAMAAAIAIQAKAJAAAUIAAAyg");
	this.shape_44.setTransform(300.2266,148.9027);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#606061").s().p("AgdAhQgLgMAAgVQAAgTAMgNQAMgLARgBQASAAALANQALAMAAATQAAAWgNAMQgMALgQgBQgRABgMgMgAgSgVQgHAJAAAMQAAAOAHAJQAIAKAKAAQALgBAHgIQAIgKAAgOQAAgMgGgIQgHgMgNAAQgLAAgHALg");
	this.shape_45.setTransform(290.5764,149.0027);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#606061").s().p("AgHA7IAAhUIAPAAIAABUgAgGgqQgDgCAAgEQAAgKAJAAQAJAAAAAKQABAEgDACQgDADgEAAQgDAAgDgDg");
	this.shape_46.setTransform(283.7049,147.3277);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#606061").s().p("AgFAxQgGgHAAgPIAAgtIgNAAIAAgMIANAAIAAgUIAOgEIAAAYIAWAAIAAAMIgWAAIAAAsQAAARAMAAIAIgBIABALQgGACgHAAQgLAAgFgGg");
	this.shape_47.setTransform(278.7262,147.8777);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#606061").s().p("AgnA9IAAh3IANAAIABAPIAAAAQAKgRAUAAQAPAAAKAMQALAMAAAUQAAAUgMANQgLALgQAAQgRAAgIgNIgBAAIAAAugAgOgqQgGAFgCAJIgCAGIABAVQACAHAGAFQAHAFAIAAQALAAAHgJQAHgIAAgPQAAgNgHgJQgGgJgMAAQgHAAgHAFg");
	this.shape_48.setTransform(271.2011,150.6277);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#606061").s().p("AgmAtQgPgSAAgaQAAgbAPgRQAQgRAXAAQAYAAAOARQAPAQAAAbQAAAcgQARQgPAQgXAAQgYAAgOgQgAgbghQgKANAAAVQAAATALAOQAJAOARAAQARAAALgOQAKgOAAgUQAAgTgJgOQgLgPgRAAQgSAAgKAPg");
	this.shape_49.setTransform(259.9009,147.3527);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#606061").s().p("AgvAEIAAgHIBfAAIAAAHg");
	this.shape_50.setTransform(270.8011,123.4273);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#606061").s().p("AgZAhQgMgMAAgTQABgTAKgNQALgNASAAQASAAAKAOQAGALABAPIgBAGIg6AAQAAAdAbAAQANAAALgEIACALQgMAFgPAAQgTAAgLgLgAgPgYQgFAHgBAKIAsAAQAAgKgFgGQgFgJgMAAQgJAAgHAIg");
	this.shape_51.setTransform(429.8035,117.4272);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#606061").s().p("AgjAGIAAgwIAQAAIAAAuQAAAbATAAQAMAAAGgOQACgEAAgEIAAgzIAPAAIABBTIgNAAIgBgNIgBAAQgKAPgRAAQgdAAAAglg");
	this.shape_52.setTransform(420.6034,117.5272);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#606061").s().p("AgaAmIADgLQAJAGAMAAQAPAAAAgNQAAgKgPgFQgXgHAAgQQAAgLAIgHQAJgHAMAAQAMAAAJAFIgEALQgJgFgJAAQgFAAgEAEQgEADABAFQgBAIAQAGQAVAIAAARQABALgJAHQgIAHgOAAQgOAAgJgGg");
	this.shape_53.setTransform(412.3033,117.4272);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#606061").s().p("AgbAmIAEgLQAJAGALAAQAQAAAAgNQAAgKgPgFQgWgHAAgQQAAgLAIgHQAIgHAMAAQANAAAIAFIgEALQgIgFgJAAQgGAAgEAEQgEADAAAFQAAAJAQAFQAWAIAAARQAAALgIAHQgJAHgOAAQgNAAgLgGg");
	this.shape_54.setTransform(405.3782,117.4272);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#606061").s().p("AgHA7IAAhTIAPAAIAABTgAgJgxQAAgDADgDQADgDADAAQAJAAAAAJQABAEgDAEQgDACgEAAQgJAAAAgKg");
	this.shape_55.setTransform(399.8566,115.7522);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#606061").s().p("AgbAmIAEgLQAJAGALAAQAQAAAAgNQAAgKgPgFQgWgHAAgQQAAgLAHgHQAIgHANAAQANAAAHAFIgDALQgJgFgIAAQgGAAgEAEQgDADgBAFQABAIAPAGQAWAIgBARQAAALgHAHQgJAHgOAAQgOAAgKgGg");
	this.shape_56.setTransform(390.6529,117.4272);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#606061").s().p("AgHA7IAAhTIAOAAIAABTgAgJgxQABgDACgDQADgDADAAQAJAAAAAJQAAAKgJAAQgIAAgBgKg");
	this.shape_57.setTransform(385.1529,115.7522);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#606061").s().p("AAVA+IAAgwQAAgYgUgBQgGABgGAEQgFAEgDAGIgBAHIAAAzIgPAAIAAh7IAPAAIAAA1IABAAQAEgHAHgEQAIgFAGABQAMAAAIAGQAKALAAASIAAAyg");
	this.shape_58.setTransform(378.2777,115.4522);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#606061").s().p("AgFAxQgGgGAAgQIAAgtIgNAAIAAgMIANAAIAAgUIAOgEIAAAYIAWAAIAAAMIgWAAIAAAtQAAAQAMAAIAJgBIAAAMQgGACgHAAQgLgBgFgGg");
	this.shape_59.setTransform(370.4276,116.3022);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#606061").s().p("AgUArIAAhTIANAAIABAQIAAAAQAGgSARAAIAEAAIAAAPIgFgBQgIAAgGAGQgEAFgCAJIAAAzg");
	this.shape_60.setTransform(361.5275,117.3272);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#606061").s().p("AgdAhQgLgMAAgUQAAgUAMgMQAMgMARAAQASAAALAMQALAMAAATQAAAVgNANQgMAKgQAAQgRAAgMgLgAgSgVQgHAJAAAMQAAAOAHAJQAIAKAKAAQALAAAHgJQAIgKAAgOQAAgMgGgJQgHgLgNAAQgLAAgHALg");
	this.shape_61.setTransform(353.3774,117.4272);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#606061").s().p("AgPA/IAAhIIgMAAIAAgLIAMAAIAAgFQAAgUAKgJQAHgIANAAQAFAAAIACIgCANQgFgCgFAAQgQAAAAAYIAAAFIAUAAIAAALIgUAAIAABIg");
	this.shape_62.setTransform(346.7273,115.3522);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#606061").s().p("AARA+IgdgoIgHAJIAAAfIgPAAIAAh7IAPAAIAABNIAfglIATAAIgfAiIAkAxg");
	this.shape_63.setTransform(336.6021,115.4522);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#606061").s().p("AgVAgQgMgMAAgTQAAgTANgNQAMgMAUAAQAOAAAHAEIgDAMQgHgEgLAAQgNAAgIAJQgIAKAAAMQAAAOAJAJQAIAIALABQAKgBAJgDIADALQgKAFgOAAQgSAAgMgMg");
	this.shape_64.setTransform(327.952,117.4522);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#606061").s().p("AgaAhQgLgMABgTQAAgTAKgNQALgNARAAQATAAAJAOQAIALgBAPIgBAGIg6AAQAAAPAJAHQAIAHAMAAQAMAAAKgEIAEALQgMAFgRAAQgTAAgLgLgAgPgYQgFAHgCAKIAsAAQAAgKgEgGQgGgJgLAAQgKAAgGAIg");
	this.shape_65.setTransform(319.6019,117.4272);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#606061").s().p("AAVA+IAAgwQAAgYgUgBQgOAAgFAPIgBAHIAAAzIgQAAIAAh7IAQAAIAAA1IAAAAQAEgIAHgDQAIgFAHABQAKAAAJAGQAKALAAASIAAAyg");
	this.shape_66.setTransform(310.3517,115.4522);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#606061").s().p("AgVAgQgLgMAAgTQAAgTAMgNQANgMATAAQAOAAAHAEIgDAMQgHgEgLAAQgNAAgJAJQgHAKAAAMQAAAOAIAJQAJAIAMABQAKgBAJgDIACALQgKAFgOAAQgSAAgMgMg");
	this.shape_67.setTransform(301.6516,117.4522);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#606061").s().p("AgFAxQgGgGAAgQIAAgtIgNAAIAAgMIANAAIAAgUIAOgEIAAAYIAWAAIAAAMIgWAAIAAAtQAAAQAMAAIAJgBIAAAMQgGACgHAAQgLgBgFgGg");
	this.shape_68.setTransform(290.9764,116.3022);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#606061").s().p("AgCgTIAPgBQgHAagIAOIgKABQAHgSADgWg");
	this.shape_69.setTransform(286.6264,111.8271);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#606061").s().p("AAVArIAAgvQAAgZgUAAQgOAAgFAPIgBAIIAAAxIgQAAIAAhTIANAAIABAOIABAAQAHgQAUAAQALAAAIAHQAKAJAAAUIAAAxg");
	this.shape_70.setTransform(280.4513,117.3272);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#606061").s().p("AgdAhQgMgMAAgUQABgUALgMQAMgMASAAQASAAALAMQALAMAAATQAAAVgNANQgMAKgQAAQgRAAgMgLgAgSgVQgHAJAAAMQAAAOAIAJQAHAKAKAAQALAAAHgJQAIgKAAgOQgBgMgFgJQgIgLgMAAQgMAAgGALg");
	this.shape_71.setTransform(270.8011,117.4272);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#606061").s().p("AgwA7IAAhzQARgDAQAAQAgAAAOAPQARAPAAAbQAAAcgRARQgQARgjAAgAgggtIAABcQADABAMAAQAYAAANgNQAMgNAAgXQAAgWgMgLQgLgNgYAAQgLAAgGACg");
	this.shape_72.setTransform(260.451,115.7772);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#606061").s().p("AgUAFIAAgIIApAAIAAAIg");
	this.shape_73.setTransform(255.9759,91.8518);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#606061").s().p("AgaAhQgLgMABgTQAAgTAKgNQALgNARAAQATAAAJAOQAIAKgBAQIAAAGIg7AAQAAAOAJAIQAIAHAMAAQAOAAAJgEIADALQgLAFgSAAQgSAAgMgLgAgPgXQgFAGgCAKIAsAAQAAgJgEgHQgGgJgLAAQgKAAgGAJg");
	this.shape_74.setTransform(338.9521,85.8517);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#606061").s().p("AgVAhQgLgNAAgTQAAgTAMgMQANgNATAAQAOAAAHAEIgDAMQgHgEgLAAQgNAAgIAKQgIAJAAAMQAAAOAJAJQAIAJAMAAQAJAAAJgFIADAMQgIAFgQAAQgSAAgMgLg");
	this.shape_75.setTransform(330.827,85.8517);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#606061").s().p("AAVArIAAgwQAAgZgUAAQgGAAgFAFQgGAEgCAHQgBACAAAFIAAAyIgQAAIAAhUIAOAAIAAAOIABAAQAIgPATAAQALAAAIAHQAKAJAAAUIAAAxg");
	this.shape_76.setTransform(321.9519,85.7767);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#606061").s().p("AgmAsQgPgQAAgbQAAgbAQgRQAPgRAXAAQAYAAAOAQQAPARAAAbQAAAcgQARQgPAQgXAAQgXAAgPgRgAgbghQgKAOAAATQAAAVAKANQALAOAQAAQASAAAKgOQAKgNAAgVQAAgTgJgOQgLgOgSAAQgRAAgKAOg");
	this.shape_77.setTransform(311.0767,84.2017);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#606061").s().p("AgZAhQgLgMAAgTQAAgTAKgNQALgNARAAQATAAAJAOQAIAKgBAQIAAAGIg7AAQAAAOAJAIQAIAHAMAAQAOAAAJgEIACALQgKAFgSAAQgTAAgKgLgAgPgXQgGAGgBAKIAsAAQAAgZgVAAQgJAAgHAJg");
	this.shape_78.setTransform(297.0015,85.8517);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#606061").s().p("AgTArIgBhUIANAAIABARIABAAQACgIAGgFQAGgFAIAAIAEAAIAAAPIgFgBQgQAAgEAUIAAAzg");
	this.shape_79.setTransform(290.3764,85.7767);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#606061").s().p("AgcAgQgNgMAAgTQAAgUANgMQAMgMARAAQASAAALAMQAMAMAAATQAAAVgOAMQgMALgQAAQgSAAgKgMgAgSgVQgHAIAAANQAAAOAIAJQAHAKAKAAQALAAAHgKQAIgJAAgOQgBgMgFgJQgHgLgMAAQgNAAgGALg");
	this.shape_80.setTransform(282.2513,85.8767);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#606061").s().p("AAVArIAAgwQAAgZgTAAQgPAAgFAQIgCAHIAAAyIgPAAIAAhUIANAAIABAOIAAAAQAJgPASAAQAMAAAIAHQALAJAAAUIAAAxg");
	this.shape_81.setTransform(272.6011,85.7767);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#606061").s().p("AggA3IAFgMQAKAGAOAAQAaAAAAgdIAAgKQgJAPgRAAQgPAAgLgNQgJgLgBgRQAAgUAMgNQALgMAQAAQAQAAAJAPIABAAIAAgNIANAAIAABHQAAAdgMALQgLAJgTABQgSgBgLgGgAgQgoQgHAJAAAPQAAAMAHAIQAGAJALAAQAQAAAFgPIABgIIAAgPIgBgIQgEgQgRAAQgKAAgHAJg");
	this.shape_82.setTransform(262.701,87.6018);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#606061").s().p("AgHA7IAAh1IAPAAIAAB1g");
	this.shape_83.setTransform(255.9759,84.2017);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#E0E0E0").s().p("AxCCQIAAkfMAiFAAAIAAEfg");
	this.shape_84.setTransform(345.3022,17.4257);

	this.instance = new lib.Path_2();
	this.instance.setTransform(345.25,102.3,1,1,0,0,0,147.1,130.2);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.047)",-14,-7,22);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F0F0F0").s().p("AxlQHMAAAggNMAjKAAAMAAAAgNg");
	this.shape_85.setTransform(345.5523,103.102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85},{t:this.instance},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.menu_bg_sub, new cjs.Rectangle(196.8,-29.5,382.49999999999994,251), null);


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

}).prototype = getMCSymbolPrototype(lib.menu_bg, new cjs.Rectangle(196.8,-29.5,271,251), null);


(lib.dropdown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#606061").s().p("AgbAhQgLgLAAgWQAAgSAMgNQAMgNAQAAQASAAAJAMQAKALAAAUIAAAGIg5AAQAAAMAHAGQAHAHALAAQAOAAALgIIAAAPQgMAIgTgBQgRAAgLgLgAgLgXQgGAGgBAJIAmAAQAAgKgFgFQgFgHgIAAQgHABgGAGg");
	this.shape.setTransform(316.825,53.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#606061").s().p("AgdAoIAAgSQALAIANAAQAQAAAAgKQAAgDgBgCIgEgDIgGgEIgHgCIgJgEQgFgCgCgDQgDgDgCgEIgBgJQAAgFADgFQADgFAFgDQAFgEAGgBIAMgCQAMAAAJAEIAAARQgJgGgMAAIgFAAIgFACIgEAEIgBAEIABAFIAEADIAFACIAHADIAKAFIAHAEIAFAHQABAEAAAFQAAAGgDAGQgDAEgFAEQgFADgGABQgHABgGAAQgOABgKgFg");
	this.shape_1.setTransform(308.625,53.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#606061").s().p("AgcAmQgHgHAAgLQAAgXAcgFIAYgDQAAgSgRAAQgPAAgLAKIAAgRQANgHARgBQAgAAAAAgIAAA2IgTAAIAAgNQgJAPgQAAQgMAAgIgGgAAAADQgIABgEADQgFADABAHQAAAGADADQAEAEAHAAQAHAAAHgHQAFgGAAgJIAAgIg");
	this.shape_2.setTransform(300.25,53.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#606061").s().p("AgbAhQgLgLAAgWQAAgSAMgNQAMgNAQAAQASAAAJAMQAKALAAAUIAAAGIg5AAQAAAMAHAGQAHAHALAAQAOAAALgIIAAAPQgMAIgTgBQgRAAgLgLgAgLgXQgGAGgBAJIAmAAQAAgKgFgFQgFgHgIAAQgHABgGAGg");
	this.shape_3.setTransform(291.575,53.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#606061").s().p("AgYArIAAhUIAUAAIAAASQADgJAFgFQAFgFAIAAQAFAAADABIAAATQgEgDgGAAQgJAAgGAIQgEAHAAANIAAAog");
	this.shape_4.setTransform(284.575,53.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#606061").s().p("AgVAgQgLgLAAgTQAAgUAMgMQANgOAUAAQALABAJAEIAAASQgJgHgKAAQgMAAgHAIQgIAIAAAMQAAAOAIAIQAGAHANAAQAKAAAJgHIAAARQgKAFgOAAQgSAAgMgMg");
	this.shape_5.setTransform(276.875,53.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#606061").s().p("AgbAhQgLgLAAgWQAAgSAMgNQAMgNAQAAQASAAAJAMQAKALAAAUIAAAGIg5AAQAAAMAHAGQAHAHALAAQAOAAALgIIAAAPQgMAIgTgBQgRAAgLgLgAgLgXQgGAGgBAJIAmAAQAAgKgFgFQgFgHgIAAQgHABgGAGg");
	this.shape_6.setTransform(268.375,53.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#606061").s().p("AgfA1QgJgMAAgUQAAgUAKgNQAKgMARAAQARAAAHAOIABAAIAAg1IATAAIAAB9IgTAAIAAgOIgBAAQgJAQgSAAQgQAAgJgLgAgOAAQgHAGAAAOQAAANAGAIQAGAHAJAAQAKABAGgIQAGgHAAgLIAAgLQABgJgHgGQgGgFgIAAQgLAAgFAIg");
	this.shape_7.setTransform(258.4,51.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAhQgLgLAAgWQAAgSAMgNQAMgNAQAAQASAAAJAMQAKALAAAUIAAAGIg5AAQAAAMAHAGQAHAHALAAQAOAAALgIIAAAPQgMAIgTgBQgRAAgLgLgAgLgXQgGAGgBAJIAmAAQAAgKgFgFQgFgHgIAAQgHABgGAGg");
	this.shape_8.setTransform(316.825,53.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAoIAAgSQALAIANAAQAQAAAAgKQAAgDgBgCIgEgDIgGgEIgHgCIgJgEQgFgCgCgDQgDgDgCgEIgBgJQAAgFADgFQADgFAFgDQAFgEAGgBIAMgCQAMAAAJAEIAAARQgJgGgMAAIgFAAIgFACIgEAEIgBAEIABAFIAEADIAFACIAHADIAKAFIAHAEIAFAHQABAEAAAFQAAAGgDAGQgDAEgFAEQgFADgGABQgHABgGAAQgOABgKgFg");
	this.shape_9.setTransform(308.625,53.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgcAmQgHgHAAgLQAAgXAcgFIAYgDQAAgSgRAAQgPAAgLAKIAAgRQANgHARgBQAgAAAAAgIAAA2IgTAAIAAgNQgJAPgQAAQgMAAgIgGgAAAADQgIABgEADQgFADABAHQAAAGADADQAEAEAHAAQAHAAAHgHQAFgGAAgJIAAgIg");
	this.shape_10.setTransform(300.25,53.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbAhQgLgLAAgWQAAgSAMgNQAMgNAQAAQASAAAJAMQAKALAAAUIAAAGIg5AAQAAAMAHAGQAHAHALAAQAOAAALgIIAAAPQgMAIgTgBQgRAAgLgLgAgLgXQgGAGgBAJIAmAAQAAgKgFgFQgFgHgIAAQgHABgGAGg");
	this.shape_11.setTransform(291.575,53.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYArIAAhUIAUAAIAAASQADgJAFgFQAFgFAIAAQAFAAADABIAAATQgEgDgGAAQgJAAgGAIQgEAHAAANIAAAog");
	this.shape_12.setTransform(284.575,53.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAgQgLgLAAgTQAAgUAMgMQANgOAUAAQALABAJAEIAAASQgJgHgKAAQgMAAgHAIQgIAIAAAMQAAAOAIAIQAGAHANAAQAKAAAJgHIAAARQgKAFgOAAQgSAAgMgMg");
	this.shape_13.setTransform(276.875,53.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgbAhQgLgLAAgWQAAgSAMgNQAMgNAQAAQASAAAJAMQAKALAAAUIAAAGIg5AAQAAAMAHAGQAHAHALAAQAOAAALgIIAAAPQgMAIgTgBQgRAAgLgLgAgLgXQgGAGgBAJIAmAAQAAgKgFgFQgFgHgIAAQgHABgGAGg");
	this.shape_14.setTransform(268.375,53.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgfA1QgJgMAAgUQAAgUAKgNQAKgMARAAQARAAAHAOIABAAIAAg1IATAAIAAB9IgTAAIAAgOIgBAAQgJAQgSAAQgQAAgJgLgAgOAAQgHAGAAAOQAAANAGAIQAGAHAJAAQAKABAGgIQAGgHAAgLIAAgLQABgJgHgGQgGgFgIAAQgLAAgFAIg");
	this.shape_15.setTransform(258.4,51.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#345699").s().p("AxCCUIAAknMAiFAAAIAAEng");
	this.shape_16.setTransform(345.3023,51.0762);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgQArIgLgDIAAgTQAFAEAHADQAGABAFAAQANABAAgKQAAgDgCgCIgEgEIgKgFQgIgDgEgDQgEgDgCgEQgCgFAAgFQAAgMAJgHQAJgIANABIAKABIAJACIAAARQgDgDgGgBIgKgCQgFAAgDADQgEACAAAEQAAAFADACQADADAIAEQAMAFAFAEQAFAHAAAIQAAAMgJAIQgJAGgPABIgLgCg");
	this.shape_17.setTransform(373.475,51.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgMAdIAAgrIgOAAIAAgQIAOAAIAAgTIASgGIAAAZIAVAAIAAAQIgVAAIAAAoQAAAIAEADQACAEAHAAIAEgBIAEgCIAAAPIgGACIgJABQgYAAAAgbg");
	this.shape_18.setTransform(366.75,50.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AATArIAAguQAAgMgEgGQgEgGgJAAQgIAAgGAHQgFAGAAAKIAAAvIgUAAIAAhTIAUAAIAAANQAJgPARAAQAOAAAHAIQAIAIAAATIAAAyg");
	this.shape_19.setTransform(358.775,51.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgbAmQgIgHAAgLQAAgMAHgIQAIgGANgCIAYgDQAAgRgQgBQgHAAgHADQgIACgFAFIAAgRQAEgDAJgCQAKgCAGAAQAQAAAJAIQAIAJAAAPIAAA1IgTAAIAAgLQgJAOgQAAQgMAAgHgHgAAAADQgJACgDADQgEADAAAHQAAAFAEADQAEADAGAAQAIABAFgHQAGgFAAgJIAAgIg");
	this.shape_20.setTransform(349.225,51.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJA/IAAh9IATAAIAAB9g");
	this.shape_21.setTransform(342.875,49.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgoA/IAAh7IATAAIAAANQAKgPASAAQAQAAAJAMQAJAKAAAVQAAAUgKANQgLAMgSAAQgOAAgJgMIAAAxgAgPgnQgGAGAAAMIAAALQAAAJAGAGQAGAFAIAAQAKAAAGgHQAHgIAAgPQAAgMgGgHQgGgIgKAAQgJAAgGAIg");
	this.shape_22.setTransform(335.775,53.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgXArIAAhUIATAAIAAARQADgJAFgFQAFgEAIAAIAHABIAAATIgFgCIgFgBQgJAAgFAHQgEAHAAALIAAArg");
	this.shape_23.setTransform(323.8,51.875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgfAhQgLgMAAgUQAAgUAMgNQALgMAVABQATAAALALQALAMAAAUQAAAUgLAMQgMANgUAAQgTAAgMgMgAgQgUQgHAHAAAOQAAANAHAHQAGAIALAAQALAAAGgIQAGgHAAgOQAAgNgHgIQgGgHgKAAQgLAAgGAIg");
	this.shape_24.setTransform(315,51.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgfAhQgMgMAAgUQAAgUANgNQALgMAUABQAVAAALALQALAMgBAUQAAAUgLAMQgMANgUAAQgTAAgMgMgAgRgUQgGAHAAAOQAAANAGAHQAHAIAKAAQAMAAAGgIQAGgHAAgOQAAgNgHgIQgFgHgMAAQgKAAgHAIg");
	this.shape_25.setTransform(304.9,51.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgfA1QgJgMAAgUQAAgUAKgMQALgNARAAQAIAAAGADQAGADAEAHIAAg0IATAAIAAB9IgTAAIAAgOQgJAQgSAAQgQAAgKgLgAgPAAQgGAGAAAPQAAANAGAHQAGAIAJgBQAKABAGgIQAGgHAAgMIAAgKQAAgIgGgGQgGgGgJgBQgKAAgGAJg");
	this.shape_26.setTransform(294.425,50);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AATArIAAguQAAgMgEgGQgEgGgJAAQgIAAgGAHQgFAGAAAKIAAAvIgUAAIAAhTIAUAAIAAANQAJgPARAAQAOAAAHAIQAIAIAAATIAAAyg");
	this.shape_27.setTransform(284.725,51.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgJA/IAAhUIATAAIAABUgAgHgrQgEgDAAgFQAAgFAEgDQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDADQgEADgFAAQgEAAgDgDg");
	this.shape_28.setTransform(277.425,49.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[]},1).wait(1));

	// Mouseover
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#32992C").ss(2,2,0,3).p("AgwALIAmAnIA7hl");
	this.shape_29.setTransform(245.6528,51.8996);
	this.shape_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(2).to({_off:false},0).wait(1));

	// Menu
	this.menubg = new lib.menu_bg();
	this.menubg.name = "menubg";
	this.menubg.setTransform(284.8,100,1,1,0,0,0,284.8,100);

	this.timeline.addTween(cjs.Tween.get(this.menubg).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(196.8,-29.5,271,251);


(lib.book_icon = function(mode,startPosition,loop) {
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
		this.icon.cache(-15,-15,30,30,2)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.icon = new lib.book();
	this.icon.name = "icon";
	this.icon.setTransform(5.9,4.7,1,1,0,0,0,5.9,4.7);

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.book_icon, new cjs.Rectangle(0,0,11.7,9.4), null);


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

	// Layer_4
	this.instance = new lib.Home_txt();
	this.instance.setTransform(24.65,61.9,1,1,0,0,0,12.4,7);

	this.instance_1 = new lib.Insert_txt();
	this.instance_1.setTransform(70.35,61.9,1,1,0,0,0,11.3,7);

	this.instance_2 = new lib.PageLayout_txt();
	this.instance_2.setTransform(120.9,61.9,1,1,0,0,0,22.4,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_2
	this.instance_3 = new lib.Excel_txt();
	this.instance_3.setTransform(75.3,29.8,1,1,0,0,0,13.5,8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer_1
	this.instance_4 = new lib.top_arrows();
	this.instance_4.setTransform(145.5,53.05,1,1,0,0,0,3.6,3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#345699").s().p("AiUAHIAAgNIEpAAIAAANg");
	this.shape.setTransform(28.874,60.0768);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F1F1").s().p("AtvCZIgBkwIbgAAIABEwg");
	this.shape_1.setTransform(76.1497,53.4017);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#345699").s().p("At3C+IAAl7IbvAAIAAF7g");
	this.shape_2.setTransform(75.425,19.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UI_Top_bar, new cjs.Rectangle(-96,0.1,260.3,657.9), null);


(lib.UI_Bottom_bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Ready_txt();
	this.instance.setTransform(20.75,594.45,1,1,0,0,0,11.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.book_icon();
	this.instance_1.setTransform(117.65,586.15,1,1,0,0,0,5.9,4.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3F2F1").s().p("AtLCVIAAkpIaXAAIAAEpg");
	this.shape.setTransform(77.7013,585.1339);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UI_Bottom_bar, new cjs.Rectangle(-6.7,570.3,168.79999999999998,36.30000000000007), null);


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
	this.shape.graphics.f("#0078D4").s().p("AoKCgIAAk/IQWAAIAAE/g");
	this.shape.setTransform(-45.25,-1.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA_btn, new cjs.Rectangle(-97.6,-17.5,104.69999999999999,31.9), null);


(lib.MainComposition = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.Bottom_bar = new lib.UI_Bottom_bar();
	this.Bottom_bar.name = "Bottom_bar";

	this.Top_bar = new lib.UI_Top_bar();
	this.Top_bar.name = "Top_bar";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Top_bar},{t:this.Bottom_bar}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MainComposition, new cjs.Rectangle(-13.4,0.1,177.70000000000002,606.5), null);


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
	this.instance.setTransform(237.65,512.2,1,1,0,0,0,14,16.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({_off:false},0).to({x:68,y:485.45},23,cjs.Ease.quadOut).wait(13).to({startPosition:1},0).wait(4).to({startPosition:0},0).wait(22).to({startPosition:0},0).to({x:57.85,y:537.2},15,cjs.Ease.quadInOut).wait(23).to({startPosition:1},0).wait(4).to({startPosition:0},0).wait(30).to({startPosition:0},0).to({x:209.4,y:524.7},21,cjs.Ease.cubicIn).to({_off:true},1).wait(60));

	// UI
	this.UI = new lib.MainComposition();
	this.UI.name = "UI";
	this.UI.setTransform(150,304.1,1,1,0,0,0,150,304.1);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(262));

	// dropdown
	this.instance_1 = new lib.dropdown("single",0);
	this.instance_1.setTransform(37.9,557.5,0.7,0.7,0,0,0,284.8,100.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(82).to({_off:false},0).to({alpha:1},3).wait(34).to({startPosition:1},0).wait(31).to({startPosition:2},0).wait(44).to({startPosition:2},0).to({alpha:0},7).wait(61));

	// Overlay
	this.instance_2 = new lib.Overlay();
	this.instance_2.setTransform(142.9,120.1,1,1,0,0,0,155.2,130.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.Overlaycopy();
	this.instance_3.setTransform(142.9,120.1,1,1,0,0,0,155.2,130.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(82).to({_off:false},0).to({alpha:1},3).to({_off:true},65).wait(112));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(150).to({_off:false},0).wait(44).to({alpha:0},7).wait(61));

	// redDots
	this.instance_4 = new lib.reddots();
	this.instance_4.setTransform(46.6,484.65,1.1918,1,0,0,0,26.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},150).wait(112));

	// text
	this.instance_5 = new lib.textanimation("single",0);
	this.instance_5.setTransform(139.85,224.6,1,1,0,0,0,132.2,59.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(150).to({startPosition:1},0).wait(112));

	// ScreenBG
	this.instance_6 = new lib.ScreenBG();
	this.instance_6.setTransform(150,163,1,1,0,0,0,150,98);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(262));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.1,-23.6,319.90000000000003,771.8000000000001);


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
	this.logo_white.setTransform(108.2,472.65,0.2111,0.2111,0,0,0,434.4,2163.2);

	this.timeline.addTween(cjs.Tween.get(this.logo_white).wait(5));

	// Screen
	this.screenAnim = new lib.screenAnim();
	this.screenAnim.name = "screenAnim";
	this.screenAnim.setTransform(150,302.4,1,1,0,0,0,150,302.4);

	this.timeline.addTween(cjs.Tween.get(this.screenAnim).wait(5));

	// scene1
	this.scene_1 = new lib.scene_1();
	this.scene_1.name = "scene_1";
	this.scene_1.setTransform(31.35,481.2,0.85,0.85,0,0,0,667.8,628.9);

	this.timeline.addTween(cjs.Tween.get(this.scene_1).to({_off:true},1).wait(4));

	// Logo
	this.logo_grey = new lib.Microsoftlogo_rgb_cgrayai();
	this.logo_grey.name = "logo_grey";
	this.logo_grey.setTransform(52.2,23.65,0.2111,0.2111,0,0,0,169.1,36.3);

	this.timeline.addTween(cjs.Tween.get(this.logo_grey).wait(5));

	// scene3
	this.scene_3 = new lib.scene3();
	this.scene_3.name = "scene_3";
	this.scene_3.setTransform(74.2,436,0.7,0.7,0,0,0,199.7,236.2);

	this.timeline.addTween(cjs.Tween.get(this.scene_3).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-555.6,-115.3,1048.8,1012.3);


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
	this.replay_btn.setTransform(143.6,4.3,0.3475,0.3475,0,0,180,-0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.replay_btn).wait(1));

	// CTA
	this.txtCta = new lib.cta();
	this.txtCta.name = "txtCta";
	this.txtCta.setTransform(100.85,568.8,1,1,0,0,0,0.7,0.1);

	this.timeline.addTween(cjs.Tween.get(this.txtCta).wait(1));

	// CTA_BG
	this.cta = new lib.CTA_btn();
	this.cta.name = "cta";
	this.cta.setTransform(153.85,570.35,0.9433,0.9433,0,0,0,0.1,0.2);

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

}).prototype = getMCSymbolPrototype(lib.mainMC, new cjs.Rectangle(-555.6,-115.3,1048.8,1012.3), null);


// stage content:
(lib.M365_FY20Q4_RemoteWork_GigWorker_USA_160x600_BAN_Writer_EasyRemote_English_NA_NA_SBAN_BN_NA_1 = function(mode,startPosition,loop) {
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
			exportRoot.tl1.from(mc.animMC.screenAnim, 0.7,{alpha:0, scaleX:0.8745, scaleY:0.145, x:133.45,y:438.55, skewX:-10.5876,ease: Power3.easeInOut}, "-=.3");
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
		
			exportRoot.tl1.from(mc.cta, 0.8, {x: "+=150", ease:Power4.easeOut}, "-=0.6");
			exportRoot.tl1.from(mc.txtCta, 0.8, {x: "+=150", ease:Power4.easeOut}, "-=0.8");
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
p.nominalBounds = new cjs.Rectangle(-475.6,184.7,968.8,712.3);
// library properties:
lib.properties = {
	id: '90A26FE74B042E4A89CA750D1DA2DF1F',
	width: 160,
	height: 600,
	fps: 40,
	color: "#0078D4",
	opacity: 1.00,
	manifest: [
		{src:"images/M365_FY20Q4_RemoteWork_GigWorker_USA_160x600_BAN_Writer_EasyRemote_English_NA_NA_SBAN_BN_NA_1_atlas_.png?1588069017505", id:"M365_FY20Q4_RemoteWork_GigWorker_USA_160x600_BAN_Writer_EasyRemote_English_NA_NA_SBAN_BN_NA_1_atlas_"}
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