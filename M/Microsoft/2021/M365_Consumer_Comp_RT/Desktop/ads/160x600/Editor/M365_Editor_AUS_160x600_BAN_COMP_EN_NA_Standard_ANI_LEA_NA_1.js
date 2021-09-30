(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"M365_Editor_AUS_160x600_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_1_atlas_1", frames: [[506,0,229,240],[506,295,60,62],[0,0,504,396],[506,242,121,51]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bg_img = function() {
	this.initialize(ss["M365_Editor_AUS_160x600_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_1_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Editor_256x256 = function() {
	this.initialize(ss["M365_Editor_AUS_160x600_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_1_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.finalUI2x = function() {
	this.initialize(ss["M365_Editor_AUS_160x600_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_1_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.finalUI_noeditorbox = function() {
	this.initialize(ss["M365_Editor_AUS_160x600_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_1_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.word_text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.finalUI_noeditorbox();
	this.instance.setTransform(-147.55,67.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.word_text, new cjs.Rectangle(-147.5,67.6,60.5,25.5), null);


(lib.underline = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#322DA8").s().p("AibAFIAAgJIE3AAIAAAJg");
	this.shape.setTransform(15.7,13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.underline, new cjs.Rectangle(0.1,12.9,31.2,1), null);


(lib.UIshadow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("At/LSIAAxhIhNAAIAAlCIEpAAIAADSIZwAAIAATRg");
	this.shape.setTransform(97.275,72.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UIshadow, new cjs.Rectangle(0,0,194.6,144.4), null);


(lib.UI_score = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6F6F8").s().p("AjLBlIAAjJIGXAAIAADJg");
	this.shape.setTransform(20.4,10.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UI_score, new cjs.Rectangle(0,0,40.8,20.2), null);


(lib.txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#737373").s().p("AgiBMQgbgQgLgfQgKgdALgeQALgdAbgRQAbgQAfAEQAfAFAWAXIgWAUQgOgPgVgDQgVgDgSALQgSALgHAUQgHATAGAUQAHAUASALQASALAUgCQAWgDAOgPIAWAVQgWAXggADIgMABQgYAAgVgOg");
	this.shape.setTransform(2.0202,-0.7048,0.8766,0.8766,135.0007);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#737373").s().p("AgmgTIBNAAIgnAmg");
	this.shape_1.setTransform(-5.3,2.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.2,-7.8,18.4,15.8);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhMdCXQMAAAkufMCY7AAAMAAAEufg");
	this.shape.setTransform(0.975,555.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-488.4,-412.3,978.8,1936);


(lib.text_2_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

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

	// Layer_2
	this.txt = new cjs.Text("its seasons are the\nopposite of what\nwe have here.", "9px 'Segoe Pro'");
	this.txt.name = "txt";
	this.txt.lineHeight = 11;
	this.txt.lineWidth = 103;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text_2_2, new cjs.Rectangle(0,0,106.7,45.7), null);


(lib.text_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

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
	this.txt = new cjs.Text("its seasons is the\nopposite of what\nwe have here.", "9px 'Segoe Pro'");
	this.txt.name = "txt";
	this.txt.lineHeight = 11;
	this.txt.lineWidth = 87;
	this.txt.parent = this;
	this.txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text_1_2, new cjs.Rectangle(0,0,90.5,53.7), null);


(lib.spellcheck_box = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5B9EF").s().p("AidA8IAAh3IE7AAIAAB3g");
	this.shape.setTransform(15.75,6.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.spellcheck_box, new cjs.Rectangle(0,0,31.5,12.1), null);


(lib.PWCE_Text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.txt1.textBaseline = "alphabetic"
		this.txt2.textBaseline = "alphabetic"
		this.txt3.textBaseline = "alphabetic"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_3
	this.txt1 = new cjs.Text("Possible Word Choice Error", "8px 'Segoe Pro'", "#7E8283");
	this.txt1.name = "txt1";
	this.txt1.lineHeight = 12;
	this.txt1.lineWidth = 118;
	this.txt1.parent = this;
	this.txt1.setTransform(0,2.25);

	this.txt3 = new cjs.Text("Ignore ...", "10px 'Segoe Pro'");
	this.txt3.name = "txt3";
	this.txt3.lineHeight = 15;
	this.txt3.lineWidth = 61;
	this.txt3.parent = this;
	this.txt3.setTransform(0,29.7);

	this.txt2 = new cjs.Text("are the", "10px 'Segoe Pro'");
	this.txt2.name = "txt2";
	this.txt2.lineHeight = 15;
	this.txt2.lineWidth = 58;
	this.txt2.parent = this;
	this.txt2.setTransform(0,15.4502);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt2},{t:this.txt3},{t:this.txt1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PWCE_Text, new cjs.Rectangle(-2,0.3,121.8,44.2), null);


(lib.PWCE_Selected_C = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AiqCrQhHhHAAhkQAAhjBHhHQBHhHBjAAQBkAABHBHQBHBHAABjQAABkhHBHQhHBHhkAAQhjAAhHhHg");
	this.shape.setTransform(110.4824,7.6994,0.0234,0.0227);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AirCrQhHhHAAhkQAAhjBHhHQBHhHBkAAQBkAABIBHQBGBHAABjQAABkhGBHQhIBHhkAAQhkAAhHhHg");
	this.shape_1.setTransform(107.5095,7.6994,0.0234,0.0227);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AiqCrQhHhHAAhkQAAhjBHhHQBGhHBkAAQBkAABHBHQBHBHABBjQgBBkhHBHQhHBHhkAAQhjAAhHhHg");
	this.shape_2.setTransform(104.536,7.6994,0.0234,0.0227);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4F6F6").s().p("ApXA8IAAh3ISvAAIAAB3g");
	this.shape_3.setTransform(60,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PWCE_Selected_C, new cjs.Rectangle(0,0,120,12), null);


(lib.PWCE_BG_C = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApXDrIAAnVISvAAIAAHVg");
	this.shape.setTransform(60,23.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PWCE_BG_C, new cjs.Rectangle(0,0,120,47), null);


(lib.cta_arrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAqIAfgfIhJAAIAAgUIBJAAIggggIAaAAIAsApIgsAqg");
	this.shape.setTransform(0.175,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_arrow, new cjs.Rectangle(-5.4,-4.1,11.2,8.3), null);


(lib.cta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.main_bar_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D77D2").s().p("AnZAUQgFAAgDgDQgDgEgBgFIAAgQQABgEADgEQADgDAFAAIOzAAQAFAAADADQADAEABAEIAAAQQgBAFgDAEQgDADgFAAg");
	this.shape.setTransform(48.55,2.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.main_bar_bg, new cjs.Rectangle(0,0,97.1,4.1), null);


(lib.Icon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Editor_256x256();
	this.instance.setTransform(0,0,0.5722,0.5722);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Icon, new cjs.Rectangle(0,0,34.4,35.5), null);


(lib.ES_BG_C = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqBDbIAAm1IUDAAIAAG1g");
	this.shape.setTransform(64.2,21.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ES_BG_C, new cjs.Rectangle(0,0,128.4,43.8), null);


(lib.ms = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

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


(lib.logo_box = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

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


(lib.bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bg_img();
	this.instance.setTransform(-14.25,352.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-14.2,352.4,229,240), null);


(lib.bar_bg_c = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1DEED").s().p("AIRAUQgEAAgEgDQgDgEAAgFIAAgQQAAgEADgEQAEgDAEAAIAzAAQAFAAAEADQADAEAAAEIAAAQQAAAFgDAEQgEADgFAAgAHVAUQgEAAgDgDQgEgEAAgFIAAgQQAAgEAEgEQADgDAEAAIAgAAQAEAAAEADQAEAEgBAEIAAAQQABAFgEAEQgEADgEAAgAGQAUQgFAAgDgDQgEgEAAgFIAAgQQAAgEAEgEQADgDAFAAIAnAAQAFAAADADQAEAEAAAEIAAAQQAAAFgEAEQgDADgFAAgApDAUQgFAAgDgDQgEgEAAgFIAAgQQAAgEAEgEQADgDAFAAIOyAAQAFAAAEADQADAEAAAEIAAAQQAAAFgDAEQgEADgFAAg");
	this.shape.setTransform(59.2,2.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bar_bg_c, new cjs.Rectangle(0,0,118.4,4.1), null);


(lib.backCTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0078D4").s().p("ApgDXIAAmtITBAAIAAGtg");
	this.shape.setTransform(46.375,12.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.backCTA, new cjs.Rectangle(-14.5,-8.6,121.8,43), null);


(lib.arrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAqIAfgfIhJAAIAAgUIBJAAIggggIAaAAIAsApIgsAqg");
	this.shape.setTransform(5.625,4.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(0,0,11.3,8.4), null);


(lib.ui = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new lib.word_text();
	this.text.name = "text";
	this.text.setTransform(218.9,86.55,1,1,0,0,0,20.4,10.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// score blank
	this.UIscore = new lib.UI_score();
	this.UIscore.name = "UIscore";
	this.UIscore.setTransform(218.9,86.55,1,1,0,0,0,20.4,10.1);

	this.timeline.addTween(cjs.Tween.get(this.UIscore).wait(1));

	// Layer_1
	this.instance = new lib.finalUI2x();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.UIshadow();
	this.instance_1.setTransform(129.7,102.15,1.1439,1.1439,0,0,0,97.5,72.3);
	this.instance_1.alpha = 0.3008;
	this.instance_1.filters = [new cjs.BlurFilter(14, 14, 1)];
	this.instance_1.cache(-2,-2,199,148);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252,198);


(lib.replay_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {out:0,over:1,down:2,hit:3};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 6
	this.instance = new lib.Tween7("synched",0);
	this.instance.setTransform(-18,17,1.754,1.754);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},1).to({_off:true},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.1,0,32.2,30.9);


(lib.PWCE_Selected = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.selected.cache(0,0,120,13,2)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.selected = new lib.PWCE_Selected_C();
	this.selected.name = "selected";
	this.selected.setTransform(59.5,6.05,0.995,0.9756,0,0,0,59.8,6.2);

	this.timeline.addTween(cjs.Tween.get(this.selected).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PWCE_Selected, new cjs.Rectangle(0,0,119.4,11.7), null);


(lib.PWCE_BG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.bg.cache(0,0,120,47,2)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.bg = new lib.PWCE_BG_C();
	this.bg.name = "bg";
	this.bg.setTransform(60.05,23.4,1.0025,1.0011,0,0,0,59.9,23.4);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PWCE_BG, new cjs.Rectangle(0,0,120.3,47.1), null);


(lib.cta_arrowmo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

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


(lib.ES_BG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.bg.cache(0,0,130,45,2)
		this.txt1.textBaseline = "alphabetic"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_3
	this.txt1 = new cjs.Text("Editor Score", "9px 'Segoe Pro'");
	this.txt1.name = "txt1";
	this.txt1.lineHeight = 14;
	this.txt1.lineWidth = 69;
	this.txt1.parent = this;
	this.txt1.setTransform(6,12);

	this.timeline.addTween(cjs.Tween.get(this.txt1).wait(1));

	// bg
	this.bg = new lib.ES_BG_C();
	this.bg.name = "bg";
	this.bg.setTransform(64.2,21.9,1,1,0,0,0,64.2,21.9);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ES_BG, new cjs.Rectangle(0,0,128.4,43.8), null);


(lib.MSFT_logo_sq = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

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


(lib.MSFT_Logo_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

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
	this.ms.setTransform(13.45,1.05);

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

}).prototype = getMCSymbolPrototype(lib.MSFT_Logo_anim, new cjs.Rectangle(-50.8,-9.3,132.2,21.5), null);


(lib.logos = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_65 = function() {
		exportRoot.startAnim();
	}
	this.frame_98 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(65).call(this.frame_65).wait(33).call(this.frame_98).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("EgFJBJ2IAAqHMA3wAAAIAAKHg");
	var mask_graphics_15 = new cjs.Graphics().p("EgFUBJ2IAAqHMA3wAAAIAAKHg");
	var mask_graphics_16 = new cjs.Graphics().p("EgF3BJ2IAAqHMA3wAAAIAAKHg");
	var mask_graphics_17 = new cjs.Graphics().p("EgGxBJ2IAAqHMA3wAAAIAAKHg");
	var mask_graphics_18 = new cjs.Graphics().p("EgICBJ2IAAqHMA3wAAAIAAKHg");
	var mask_graphics_19 = new cjs.Graphics().p("EgJqBJ2IAAqHMA3wAAAIAAKHg");
	var mask_graphics_20 = new cjs.Graphics().p("EgLqBJ2IAAqHMA3wAAAIAAKHg");
	var mask_graphics_21 = new cjs.Graphics().p("EgNpBJ2IAAqHMA3wAAAIAAKHg");
	var mask_graphics_22 = new cjs.Graphics().p("EgPSBJ2IAAqHMA3xAAAIAAKHg");
	var mask_graphics_23 = new cjs.Graphics().p("EgQjBJ2IAAqHMA3wAAAIAAKHg");
	var mask_graphics_24 = new cjs.Graphics().p("EgRdBJ2IAAqHMA3xAAAIAAKHg");
	var mask_graphics_25 = new cjs.Graphics().p("EgR/BJ2IAAqHMA3wAAAIAAKHg");
	var mask_graphics_26 = new cjs.Graphics().p("EgSLBJ2IAAqHMA3wAAAIAAKHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:323.9456,y:472.6093}).wait(1).to({graphics:mask_graphics_15,x:322.7869,y:472.6093}).wait(1).to({graphics:mask_graphics_16,x:319.3108,y:472.6093}).wait(1).to({graphics:mask_graphics_17,x:313.5174,y:472.6093}).wait(1).to({graphics:mask_graphics_18,x:305.4067,y:472.6093}).wait(1).to({graphics:mask_graphics_19,x:294.9786,y:472.6093}).wait(1).to({graphics:mask_graphics_20,x:282.2331,y:472.6093}).wait(1).to({graphics:mask_graphics_21,x:269.4876,y:472.6093}).wait(1).to({graphics:mask_graphics_22,x:259.0595,y:472.6093}).wait(1).to({graphics:mask_graphics_23,x:250.9487,y:472.6093}).wait(1).to({graphics:mask_graphics_24,x:245.1553,y:472.6093}).wait(1).to({graphics:mask_graphics_25,x:241.6793,y:472.6093}).wait(1).to({graphics:mask_graphics_26,x:240.5206,y:472.6093}).wait(1).to({graphics:null,x:0,y:0}).wait(72));

	// Layer 3
	this.instance = new lib.MSFT_Logo_anim();
	this.instance.setTransform(-3.25,909.35,2.9988,2.9988,0,0,0,0.1,0.2);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({regX:0.2,x:212.45},12,cjs.Ease.quadInOut).wait(39).to({regX:0,regY:0.4,scaleX:2.3978,scaleY:2.3978,x:173.3,y:75.1},33,cjs.Ease.cubicInOut).wait(1));

	// Layer_2
	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.setTransform(250.1,334.7,0.608,1.0591,0,0,0,0.1,0.1);

	this.instance_2 = new lib.MSFT_logo_sq();
	this.instance_2.setTransform(258.7,913.05,0.1812,0.1812,0,0,0,-39.5,1.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},13).to({state:[{t:this.instance_2}]},12).to({state:[]},1).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({regX:-40,regY:1.4,scaleX:2.9988,scaleY:2.9988,x:258.6,y:912.95},13,cjs.Ease.quadOut).to({x:91.9},12,cjs.Ease.quadInOut).to({_off:true},1).wait(72));

	// Layer_6
	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.setTransform(250.1,334.7,0.608,1.0591,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(65).to({startPosition:0},0).to({alpha:0},33,cjs.Ease.cubicInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.9,-102.1,595.1,2050.5);


(lib.bar_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.bar.cache(0,0,120,4,2)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bar_bg
	this.bar = new lib.bar_bg_c();
	this.bar.name = "bar";
	this.bar.setTransform(59.2,2,1,1,0,0,0,59.2,2);

	this.timeline.addTween(cjs.Tween.get(this.bar).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bar_bg, new cjs.Rectangle(0,0,118.4,4.1), null);


(lib.bar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.bar.cache(0,0,100,4,2)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.bar = new lib.main_bar_bg();
	this.bar.name = "bar";
	this.bar.setTransform(48.6,2,1,1,0,0,0,48.6,2);

	this.timeline.addTween(cjs.Tween.get(this.bar).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bar, new cjs.Rectangle(0,0,97.1,4.1), null);


(lib.arrowMain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

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


(lib.animation_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_133 = function() {
		this.stop();
	}
	this.frame_134 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(133).call(this.frame_133).wait(1).call(this.frame_134).wait(1));

	// Line1_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AlTAzIAAhlIKnAAIAABlg");
	var mask_graphics_4 = new cjs.Graphics().p("AgXCZIAAhmIKnAAIAABmg");
	var mask_graphics_6 = new cjs.Graphics().p("AlTAzIAAhlIKnAAIAABlg");
	var mask_graphics_10 = new cjs.Graphics().p("AAbCZIAAhmIKoAAIAABmg");
	var mask_graphics_11 = new cjs.Graphics().p("AAxCZIAAhmIKoAAIAABmg");
	var mask_graphics_13 = new cjs.Graphics().p("ABICZIAAhmIKoAAIAABmg");
	var mask_graphics_14 = new cjs.Graphics().p("ABcCZIAAhmIKoAAIAABmg");
	var mask_graphics_15 = new cjs.Graphics().p("AB2CZIAAhmIKoAAIAABmg");
	var mask_graphics_17 = new cjs.Graphics().p("ACOCZIAAhmIKoAAIAABmg");
	var mask_graphics_18 = new cjs.Graphics().p("ACiCZIAAhmIKoAAIAABmg");
	var mask_graphics_20 = new cjs.Graphics().p("AC4CZIAAhmIKoAAIAABmg");
	var mask_graphics_21 = new cjs.Graphics().p("ADMCZIAAhmIKoAAIAABmg");
	var mask_graphics_23 = new cjs.Graphics().p("ADoCZIAAhmIKoAAIAABmg");
	var mask_graphics_24 = new cjs.Graphics().p("AEBCZIAAhmIKoAAIAABmg");
	var mask_graphics_25 = new cjs.Graphics().p("Al5AzIAAhlILzAAIAABlg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:94,y:25.4}).wait(3).to({graphics:mask_graphics_4,x:65.626,y:15.2503}).wait(2).to({graphics:mask_graphics_6,x:100.85,y:25.4}).wait(4).to({graphics:mask_graphics_10,x:70.676,y:15.2503}).wait(1).to({graphics:mask_graphics_11,x:72.9261,y:15.2503}).wait(2).to({graphics:mask_graphics_13,x:75.1761,y:15.2503}).wait(1).to({graphics:mask_graphics_14,x:77.1762,y:15.2503}).wait(1).to({graphics:mask_graphics_15,x:79.8262,y:15.2503}).wait(2).to({graphics:mask_graphics_17,x:82.2012,y:15.2503}).wait(1).to({graphics:mask_graphics_18,x:84.2013,y:15.2503}).wait(2).to({graphics:mask_graphics_20,x:86.4013,y:15.2503}).wait(1).to({graphics:mask_graphics_21,x:88.4013,y:15.2503}).wait(2).to({graphics:mask_graphics_23,x:91.2263,y:15.2503}).wait(1).to({graphics:mask_graphics_24,x:93.7264,y:15.2503}).wait(1).to({graphics:mask_graphics_25,x:162.75,y:25.4}).wait(110));

	// txt1_L1
	this.text_2 = new lib.text_1_2();
	this.text_2.name = "text_2";
	this.text_2.setTransform(181.5,61.4,1,1,0,0,0,57.5,35.4);
	this.text_2._off = true;

	var maskedShapeInstanceList = [this.text_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(1).to({_off:false},0).to({_off:true},133).wait(1));

	// Line2_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_27 = new cjs.Graphics().p("AgWDQIAAhnIKnAAIAABng");
	var mask_1_graphics_28 = new cjs.Graphics().p("AAFDQIAAhnIKoAAIAABng");
	var mask_1_graphics_29 = new cjs.Graphics().p("AAdDQIAAhnIKoAAIAABng");
	var mask_1_graphics_30 = new cjs.Graphics().p("AA2DQIAAhnIKoAAIAABng");
	var mask_1_graphics_31 = new cjs.Graphics().p("ABUDQIAAhnIKoAAIAABng");
	var mask_1_graphics_32 = new cjs.Graphics().p("ABkDQIAAhnIKoAAIAABng");
	var mask_1_graphics_33 = new cjs.Graphics().p("AB7DQIAAhnIKoAAIAABng");
	var mask_1_graphics_35 = new cjs.Graphics().p("AChDQIAAhnIKoAAIAABng");
	var mask_1_graphics_36 = new cjs.Graphics().p("ACzDQIAAhnIKoAAIAABng");
	var mask_1_graphics_39 = new cjs.Graphics().p("ADeDQIAAhnIKoAAIAABng");
	var mask_1_graphics_40 = new cjs.Graphics().p("AD2DQIAAhnIKoAAIAABng");
	var mask_1_graphics_41 = new cjs.Graphics().p("AEMDQIAAhnIKoAAIAABng");
	var mask_1_graphics_42 = new cjs.Graphics().p("AlxAzIAAhlILjAAIAABlg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_1_graphics_27,x:65.726,y:20.7504}).wait(1).to({graphics:mask_1_graphics_28,x:68.476,y:20.7504}).wait(1).to({graphics:mask_1_graphics_29,x:70.8761,y:20.7504}).wait(1).to({graphics:mask_1_graphics_30,x:73.3761,y:20.7504}).wait(1).to({graphics:mask_1_graphics_31,x:76.3762,y:20.7504}).wait(1).to({graphics:mask_1_graphics_32,x:78.0262,y:20.7504}).wait(1).to({graphics:mask_1_graphics_33,x:80.2762,y:20.7504}).wait(2).to({graphics:mask_1_graphics_35,x:84.1263,y:20.7504}).wait(1).to({graphics:mask_1_graphics_36,x:85.9013,y:20.7504}).wait(3).to({graphics:mask_1_graphics_39,x:90.1514,y:20.7504}).wait(1).to({graphics:mask_1_graphics_40,x:92.5764,y:20.7504}).wait(1).to({graphics:mask_1_graphics_41,x:94.8264,y:20.7504}).wait(1).to({graphics:mask_1_graphics_42,x:162.7,y:36.4}).wait(93));

	// txt1_L2
	this.text_2_1 = new lib.text_1_2();
	this.text_2_1.name = "text_2_1";
	this.text_2_1.setTransform(181.5,61.4,1,1,0,0,0,57.5,35.4);
	this.text_2_1._off = true;

	var maskedShapeInstanceList = [this.text_2_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.text_2_1).wait(27).to({_off:false},0).to({_off:true},107).wait(1));

	// Line3_mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_43 = new cjs.Graphics().p("AgQEEIAAhmIKoAAIAABmg");
	var mask_2_graphics_44 = new cjs.Graphics().p("AAGEEIAAhmIKoAAIAABmg");
	var mask_2_graphics_46 = new cjs.Graphics().p("AAsEEIAAhmIKoAAIAABmg");
	var mask_2_graphics_48 = new cjs.Graphics().p("ABBEEIAAhmIKoAAIAABmg");
	var mask_2_graphics_49 = new cjs.Graphics().p("ABZEEIAAhmIKoAAIAABmg");
	var mask_2_graphics_50 = new cjs.Graphics().p("ABvEEIAAhmIKoAAIAABmg");
	var mask_2_graphics_53 = new cjs.Graphics().p("AlTAzIAAhlIKnAAIAABlg");
	var mask_2_graphics_55 = new cjs.Graphics().p("ACtEEIAAhmIKoAAIAABmg");
	var mask_2_graphics_57 = new cjs.Graphics().p("AC9EEIAAhmIKoAAIAABmg");
	var mask_2_graphics_59 = new cjs.Graphics().p("ADTEEIAAhmIKoAAIAABmg");
	var mask_2_graphics_61 = new cjs.Graphics().p("AC6EEIAAhmILuAAIAABmg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(43).to({graphics:mask_2_graphics_43,x:66.351,y:26.0004}).wait(1).to({graphics:mask_2_graphics_44,x:68.601,y:26.0005}).wait(2).to({graphics:mask_2_graphics_46,x:72.3511,y:26.0005}).wait(2).to({graphics:mask_2_graphics_48,x:74.5011,y:26.0005}).wait(1).to({graphics:mask_2_graphics_49,x:76.8761,y:26.0005}).wait(1).to({graphics:mask_2_graphics_50,x:79.1262,y:26.0005}).wait(3).to({graphics:mask_2_graphics_53,x:131.75,y:46.9}).wait(2).to({graphics:mask_2_graphics_55,x:85.3013,y:26.0005}).wait(2).to({graphics:mask_2_graphics_57,x:86.8513,y:26.0005}).wait(2).to({graphics:mask_2_graphics_59,x:89.1014,y:26.0005}).wait(2).to({graphics:mask_2_graphics_61,x:93.6419,y:26.0005}).wait(74));

	// txt1_L3
	this.text_2_2 = new lib.text_1_2();
	this.text_2_2.name = "text_2_2";
	this.text_2_2.setTransform(181.5,61.4,1,1,0,0,0,57.5,35.4);
	this.text_2_2._off = true;

	var maskedShapeInstanceList = [this.text_2_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.text_2_2).wait(43).to({_off:false},0).to({_off:true},91).wait(1));

	// txt
	this.text_2_3 = new lib.text_2_2();
	this.text_2_3.name = "text_2_3";
	this.text_2_3.setTransform(181.5,61.4,1,1,0,0,0,57.5,35.4);
	this.text_2_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_2_3).wait(134).to({_off:false},0).wait(1));

	// purple_box
	this.spellchecker = new lib.spellcheck_box();
	this.spellchecker.name = "spellchecker";
	this.spellchecker.setTransform(169.45,24.65,0.0016,0.7421,0,0,0,0,6);
	this.spellchecker._off = true;

	this.timeline.addTween(cjs.Tween.get(this.spellchecker).wait(99).to({_off:false},0).to({regX:0.4,scaleX:0.7618,x:169.7},12,cjs.Ease.quadInOut).wait(23).to({regX:0.3,scaleX:0.9847},0).wait(1));

	// underline
	this.underline = new lib.underline();
	this.underline.name = "underline";
	this.underline.setTransform(169.9,30,0.0064,0.9702,0,0,0,0,13.5);
	this.underline._off = true;

	this.timeline.addTween(cjs.Tween.get(this.underline).wait(50).to({_off:false},0).to({regX:0.6,scaleX:0.7692,x:169.8},21,cjs.Ease.quadInOut).wait(63).to({regX:0.7,scaleX:1.0047,x:170},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,230.7,71.7);


(lib.PWCE_BOX = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.PWCE_Text();
	this.instance.setTransform(133.1,49.5,0.9981,1.0119,0,0,0,53.2,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// selected
	this.selected = new lib.PWCE_Selected();
	this.selected.name = "selected";
	this.selected.setTransform(137.9,45.3,1.0668,0.9756,0,0,0,59.9,6.2);

	this.timeline.addTween(cjs.Tween.get(this.selected).wait(1));

	// BG
	this.instance_1 = new lib.PWCE_BG();
	this.instance_1.setTransform(137.35,48.8,1.0558,1.0543,0,0,0,60,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PWCE_BOX, new cjs.Rectangle(74,24,127.4,53.599999999999994), null);


(lib.CTA_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// arrow
	this.arrow = new lib.arrowMain();
	this.arrow.name = "arrow";
	this.arrow.setTransform(-13.2,0.3,0.68,0.68,0,0,0,13.6,10.6);

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(1));

	// bg
	this.CTAbg = new lib.backCTA();
	this.CTAbg.name = "CTAbg";
	this.CTAbg.setTransform(-100.6,-13.6);

	this.timeline.addTween(cjs.Tween.get(this.CTAbg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA_btn, new cjs.Rectangle(-115.1,-22.2,121.8,43), null);


(lib.editor_score = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_41 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(41).call(this.frame_41).wait(1));

	// %
	this.text = new cjs.Text("%", "7px 'Segoe Pro'", "#3D77D2");
	this.text.lineHeight = 11;
	this.text.lineWidth = 6;
	this.text.parent = this;
	this.text.setTransform(110,155);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(42));

	// 89
	this.text_1 = new cjs.Text("75", "14px 'Segoe Pro'", "#3D77D2");
	this.text_1.lineHeight = 21;
	this.text_1.lineWidth = 16;
	this.text_1.parent = this;
	this.text_1.setTransform(94,154);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(5).to({text:"76"},0).wait(4).to({text:"77"},0).wait(2).to({text:"78"},0).wait(2).to({text:"79"},0).wait(2).to({text:"80"},0).wait(2).to({text:"81"},0).wait(2).to({text:"82"},0).wait(2).to({text:"83"},0).wait(2).to({text:"84"},0).wait(2).to({text:"85"},0).wait(4).to({text:"86"},0).wait(2).to({text:"87"},0).wait(3).to({text:"88"},0).wait(4).to({text:"89"},0).wait(4));

	// main_bar
	this.instance = new lib.bar();
	this.instance.setTransform(-5.9,186,0.8382,1,0,0,0,0.1,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1},40,cjs.Ease.quadInOut).wait(1));

	// Bar_BG
	this.instance_1 = new lib.bar_bg();
	this.instance_1.setTransform(53.2,186,1,1,0,0,0,59.2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(42));

	// bg
	this.instance_2 = new lib.ES_BG();
	this.instance_2.setTransform(54.2,171.9,1,1,0,0,0,64.2,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(42));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,150,128.4,43.80000000000001);


(lib.pop_ups = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icon
	this.icon = new lib.Icon();
	this.icon.name = "icon";
	this.icon.setTransform(67.05,73.1,0.7639,0.7827,0,0,0,0.2,35.6);

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(1));

	// PWCE_Box
	this.inner = new lib.PWCE_BOX();
	this.inner.name = "inner";
	this.inner.setTransform(51.15,75.25,0.75,0.7489,0,0,0,131.2,50.6);

	this.timeline.addTween(cjs.Tween.get(this.inner).wait(1));

	// Editor_Score
	this.score = new lib.editor_score();
	this.score.name = "score";
	this.score.setTransform(48.9,179.35,0.7877,0.7877,0,0,0,55.8,172);

	this.timeline.addTween(cjs.Tween.get(this.score).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pop_ups, new cjs.Rectangle(-51.7,5,155.4,191.5), null);


(lib.mainMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// introAnim
	this.logo_intro = new lib.logos();
	this.logo_intro.name = "logo_intro";
	this.logo_intro.setTransform(0.05,0,0.3087,0.3087,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.logo_intro).wait(1));

	// replay
	this.replay_btn = new lib.replay_btn();
	this.replay_btn.name = "replay_btn";
	this.replay_btn.setTransform(143.25,3.9,0.3475,0.3475,0,0,180,-0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.replay_btn).wait(1));

	// CTA
	this.txtCta = new lib.cta();
	this.txtCta.name = "txtCta";
	this.txtCta.setTransform(91.85,563.05,1,1,0,0,0,36.3,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.txtCta).wait(1));

	// CTA_BG
	this.cta = new lib.CTA_btn();
	this.cta.name = "cta";
	this.cta.setTransform(104.8,563.2,1,1,0,0,0,-49.1,0);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// txt
	this.txt = new lib.txt();
	this.txt.name = "txt";

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Pop_ups
	this.pop_ups = new lib.pop_ups();
	this.pop_ups.name = "pop_ups";
	this.pop_ups.setTransform(114.05,352.95,1,1,0,0,0,57.4,87.1);

	this.timeline.addTween(cjs.Tween.get(this.pop_ups).wait(1));

	// UI
	this.UI = new lib.ui();
	this.UI.name = "UI";
	this.UI.setTransform(78.75,353.95,0.6064,0.6064,0,0,0,126.2,99.2);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(1));

	// Animation_2
	this.text = new lib.animation_2();
	this.text.name = "text";
	this.text.setTransform(106.2,308.85,1,1,0,0,0,162.2,42.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// bg image
	this.bg_img = new lib.bg();
	this.bg_img.name = "bg_img";
	this.bg_img.setTransform(104.1,368.8,0.7817,0.7816,0,0,0,133.2,471.9);

	this.timeline.addTween(cjs.Tween.get(this.bg_img).wait(1));

	// bg color
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mainMC, new cjs.Rectangle(-14.5,-31.5,183.7,632.9), null);


// stage content:
(lib.M365_Editor_AUS_160x600_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
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
						} else if (id == "intr" && data[keys[i]].length > 1) {
							exportRoot['' + keys[i]] = new Array()
							exportRoot.fillIntro(data[keys[i]], exportRoot['' + keys[i]])
						} else if (id == "CTA" && data[keys[i]].length > 1) {
							exportRoot.fillCta(data[keys[i]])
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
		this.fillIntro = function (txtDetails, aVar) {
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
					var text = new createjs.Text(aSentenceLine[i][j].txt, "normal " + size + " Segoe Pro ", aSentenceLine[i][j].color);
					text.textAlign = "Left"
					text.x = txtWidth
					text.textBaseline = "alphabetic"
					txtWidth += (text.getTransformedBounds().width)
					mc.addChild(text)
				}
				if (align == "center") mc.x = mc.x - mc.getTransformedBounds().width / 2
				if (align == "right") mc.x = mc.x - mc.getTransformedBounds().width
				if (mc.getTransformedBounds()) mc.cache(mc.getTransformedBounds().width*-1,mc.getTransformedBounds().height*-1,mc.getTransformedBounds().width*2,mc.getTransformedBounds().height*2,1.8)
				exportRoot.mainMC.txt.addChild(mc);
				aVar.push(mc)
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
					var text = new createjs.Text(aSentenceLine[i][j].txt, "normal " + size + " Segoe Pro ", aSentenceLine[i][j].color);
					text.textAlign = "Left"
					text.x = txtWidth
					text.textBaseline = "alphabetic"
					txtWidth += (text.getTransformedBounds().width)
					mc.addChild(text)
				}
				if (align == "center") mc.x = mc.x - mc.getTransformedBounds().width / 2
				if (align == "right") mc.x = mc.x - mc.getTransformedBounds().width
				if (mc.getTransformedBounds()) mc.cache(mc.getTransformedBounds().width*-1,mc.getTransformedBounds().height*-1,mc.getTransformedBounds().width*2,mc.getTransformedBounds().height*2,1.8)
				exportRoot.mainMC.txt.addChild(mc);
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
		
		var mc = exportRoot.mainMC
		
		var text = mc.text
		var PWCE = mc.pop_ups.inner
		var pen = mc.pop_ups.icon
		
		var score = mc.pop_ups.score
		
		var sc = mc.text.spellchecker
		var ul = mc.text.underline
		
		var txt2 = mc.text.text_2_3
		
		var bg = mc.bg_img
		var selected = mc.pop_ups.inner.selected
		
		 
		
		this.runBanner = function() {	
			
				this.tl1 = gsap.timeline();
			
				this.tl1.from(exportRoot.headline1,{duration:0.8, x: "+=100", alpha: 0, stagger: 0.1, ease:Power4.easeOut}, "<+.3");
				this.tl1.from(exportRoot.headline2,{duration:0.8, x: "+=100", alpha: 0, stagger: 0.1, ease:Power4.easeOut}, ">-.7");
		
				this.tl1.from(text,{duration:1.5,  ease:Power4.easeOut, onStart:function(){mc.text.play(0);}}, ">+0.2");
				
				this.tl1.from(PWCE,{duration:1,scale: 0,  ease:Power4.easeOut}, ">+1");
				this.tl1.from(pen,{duration:0.7,scale: 0,  ease:Power4.easeOut}, ">-0.2");
				this.tl1.from(pen,{duration:1,x: "+=50",  ease:Power2.easeOut}, "<+.2");
				
				this.tl1.to(pen,{duration:0.1,rotation:+5,scale:.70,  ease:Power2.easeOut}, "<+1");
				this.tl1.to(pen,{duration:0.1,rotation:-5,scale:.76,  ease:Power2.easeOut, onStart:function(){mc.text.play(135);}}, ">.1");
				this.tl1.from(selected,{duration:0.1 ,alpha: 0,  ease:Power2.easeOut}, "<");
		
				this.tl1.to(bg,{duration:1, scale: 0.92,x: "+=7",y: "-=2", ease:Power2.easeInOut}, ">+1");
				this.tl1.to(text,{duration:1, scale: 1.17,x: "+=7",y: "-=13", ease:Power2.easeInOut}, "<");
				this.tl1.to(PWCE,{duration:1, scale: 0.783, x: "+=4",y: "-=10", ease:Power2.easeInOut}, "<");
				this.tl1.to(pen,{duration:1, x: "-=6",y: "-=10", ease:Power2.easeInOut}, "<");
				this.tl1.from(score,{duration:0.8 ,scale: 0,  ease:Power2.easeOut,onComplete:function(){score.play(0);}}, ">-0.2");
				
		// UI transition		
				this.tl1.to([mc.bg_img,txt2, sc,ul], {duration:1, alpha:0, ease:Power4.easeInOut},">+1.5");
				this.tl1.from(mc.UI,{duration:1.75, x: "+=160",  ease:Power4.easeInOut}, "<")
						.to(score, {duration:1, scale:0.65, x:"+=5", ease:Power2.easeInOut}, "<-0.1")
						.to(score, {duration:1.2, y:"-=160", ease:Power2.easeInOut}, "<")
						.to([PWCE,pen], {duration:1, scale:"-=0.04", x:"-=55", ease:Power2.easeInOut}, "<")
						.to([PWCE,pen], {duration:1.2, y:"+=102", ease:Power2.easeInOut}, "<")
		//popup out
				this.tl1.to(score,{duration:1.25,scale: 0, y:"+=65", x:"+=60", ease:Power4.easeIn}, "+=0")
						.to([txt2,sc,ul],{duration:1.25,alpha: 0,  ease:Power4.easeIn, onStart:function(){txt2.htmlText="are the"}}, "-=1.25")
						.to([PWCE,pen],{duration:1.25,scale: 0, y:"-=30", ease:Power4.easeIn}, "-=1.25")
						.to(mc.UI, {duration:2, scale: 1.053, x:"+=45", y:"+=7",  ease:Power4.easeInOut},"-=1")
						//.to([mc.UI,score,txt2,sc,ul,PWCE,pen], {duration:2, x:"+=45", y:"+=7",  ease:Power4.easeInOut},"<");
						.to([mc.UI,txt2,sc,ul], {duration:2, x:"+=45", y:"+=7",  ease:Power4.easeInOut},"<");								
				this.tl1.to(mc.UI.text,{duration:0.5, alpha:0, ease:Power4.easeIn}, "<+0.6")	
				this.tl1.to(mc.UI.UIscore,{duration:0.5, alpha:0, ease:Power4.easeIn}, "<")			
					
				this.tl1.from(mc.cta , 0.8, { x: "+=150", ease:Power4.easeOut}, "<+1.1");
				this.tl1.from(mc.txtCta, 0.8, { x: "+=150", alpha: 0, ease:Power4.easeOut}, "<0");
				this.tl1.from(mc.replay_btn, 0.7, { alpha: 0,ease:Power4.easeOut, onStart:function(){exportRoot.isReplay = true;}}, "<+.7");
				
				exportRoot.tl1.pause();
				
				this.startAnim = function() {
					this.tlMaster = gsap.timeline();
					this.tlMaster.to(exportRoot.tl1, {time:exportRoot.tl1.duration(), duration:exportRoot.tl1.duration(), 
					ease:Linear.easeNone},"+=.5");
		
				}
				
			mc.logo_intro.gotoAndPlay(1);
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

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(24,268.5,145.2,332.9);
// library properties:
lib.properties = {
	id: '90A26FE74B042E4A89CA750D1DA2DF1F',
	width: 160,
	height: 600,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/M365_Editor_AUS_160x600_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_1_atlas_1.png?1625248168962", id:"M365_Editor_AUS_160x600_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_1_atlas_1"}
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;