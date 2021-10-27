(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"M365_Editor_AUS_300x600_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_2_atlas_1", frames: [[0,0,400,382],[402,0,447,338],[851,53,60,62],[851,0,121,51]]}
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



(lib.BG = function() {
	this.initialize(ss["M365_Editor_AUS_300x600_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_2_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.editorUIbigger11 = function() {
	this.initialize(ss["M365_Editor_AUS_300x600_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_2_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Editor_256x256 = function() {
	this.initialize(ss["M365_Editor_AUS_300x600_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_2_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.finalUI_noeditorbox = function() {
	this.initialize(ss["M365_Editor_AUS_300x600_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_2_atlas_1"]);
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
	this.shape.graphics.f("#2F2F2F").s().p("AgiBMQgbgQgLgfQgKgdALgeQALgdAbgRQAbgQAfAEQAfAFAWAXIgWAUQgOgPgVgDQgVgDgSALQgSALgHAUQgHATAGAUQAHAUASALQASALAUgCQAWgDAOgPIAWAVQgWAXggADIgMABQgYAAgVgOg");
	this.shape.setTransform(2.0202,-0.7048,0.8766,0.8766,135.0007);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F2F2F").s().p("AgmgTIBNAAIgnAmg");
	this.shape_1.setTransform(-5.3,2.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.2,-7.8,18.4,15.8);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EhMtCX8MAAAkv3MCZbAAAMAAAEv3g");
	this.shape.setTransform(0.0046,0.0302);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-491,-972.3,982,1944.6999999999998);


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
	this.txt = new cjs.Text("its seasons are the\nopposite of what we\nhave here.", "9px 'Segoe Pro'");
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
	this.txt = new cjs.Text("its seasons is the\nopposite of what we\nhave here.", "9px 'Segoe Pro'");
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
	this.txt1 = new cjs.Text("Possible Word Choice Error", "6px 'Segoe Pro'", "#7E8283");
	this.txt1.name = "txt1";
	this.txt1.lineHeight = 10;
	this.txt1.lineWidth = 94;
	this.txt1.parent = this;
	this.txt1.setTransform(0,2.25);

	this.txt3 = new cjs.Text("Ignore ...", "8px 'Segoe Pro'");
	this.txt3.name = "txt3";
	this.txt3.lineHeight = 13;
	this.txt3.lineWidth = 34;
	this.txt3.parent = this;
	this.txt3.setTransform(0,29.25);

	this.txt2 = new cjs.Text("are the", "8px 'Segoe Pro'");
	this.txt2.name = "txt2";
	this.txt2.lineHeight = 13;
	this.txt2.lineWidth = 31;
	this.txt2.parent = this;
	this.txt2.setTransform(0,15.0002);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt2},{t:this.txt3},{t:this.txt1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PWCE_Text, new cjs.Rectangle(-2,0.3,98,42), null);


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
	this.instance = new lib.BG();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,400,382), null);


(lib.box_Cache = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F2F2F2").s().p("EgXbAvMMAAAheXMAu3AAAMAAABeXg");
	this.shape.setTransform(150,302.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.box_Cache, new cjs.Rectangle(0,0,300,604.1), null);


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


(lib.UI_Inner = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.editorUIbigger11();
	this.instance.setTransform(19.9,9.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.UIshadow();
	this.instance_1.setTransform(128.7,101.85,1.1046,1.1046,0,0,0,97.4,72.2);
	this.instance_1.alpha = 0.3008;
	this.instance_1.filters = [new cjs.BlurFilter(14, 14, 1)];
	this.instance_1.cache(-2,-2,199,148);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UI_Inner, new cjs.Rectangle(0,0,252,198), null);


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
	this.UI_Inner = new lib.UI_Inner();
	this.UI_Inner.name = "UI_Inner";
	this.UI_Inner.setTransform(126,99,1,1,0,0,0,126,99);

	this.timeline.addTween(cjs.Tween.get(this.UI_Inner).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.3,-52.9,384.90000000000003,302.2);


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
	this.instance.setTransform(-18.15,16.65,1.754,1.754);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-18.65,y:16.55,alpha:1},1).to({_off:true},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.8,0,32.699999999999996,30.6);


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
	this.frame_69 = function() {
		//exportRoot.tlicons.play()
	}
	this.frame_86 = function() {
		exportRoot.tl1.play()
		//exportRoot.mainMC.screen.play()
	}
	this.frame_100 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(69).call(this.frame_69).wait(17).call(this.frame_86).wait(14).call(this.frame_100).wait(10));

	// Layer_2
	this.instance = new lib.MSFT_logo_sq();
	this.instance.setTransform(298.45,338.35,0.2981,0.2981,0,0,0,-39.9,1.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regX:-40,regY:1.4,scaleX:4.9325,scaleY:4.9325,x:298.4},13,cjs.Ease.quadOut).to({x:24.15},12,cjs.Ease.quadInOut).to({_off:true},1).wait(83));

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

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:469.3539,y:195.7095}).wait(1).to({graphics:mask_graphics_15,x:467.448,y:195.7095}).wait(1).to({graphics:mask_graphics_16,x:461.7303,y:195.7095}).wait(1).to({graphics:mask_graphics_17,x:452.2008,y:195.7095}).wait(1).to({graphics:mask_graphics_18,x:438.8594,y:195.7095}).wait(1).to({graphics:mask_graphics_19,x:421.7063,y:195.7095}).wait(1).to({graphics:mask_graphics_20,x:400.7414,y:195.7095}).wait(1).to({graphics:mask_graphics_21,x:379.7765,y:195.7095}).wait(1).to({graphics:mask_graphics_22,x:362.6233,y:195.7095}).wait(1).to({graphics:mask_graphics_23,x:349.282,y:195.7095}).wait(1).to({graphics:mask_graphics_24,x:339.7525,y:195.7095}).wait(1).to({graphics:mask_graphics_25,x:334.0348,y:195.7095}).wait(1).to({graphics:mask_graphics_26,x:332.1289,y:195.7095}).wait(1).to({graphics:null,x:0,y:0}).wait(83));

	// Layer 3
	this.instance_1 = new lib.MSFT_Logo_anim();
	this.instance_1.setTransform(-132.35,332.45,4.9325,4.9325,0,0,0,0.1,0.2);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({x:222.05},12,cjs.Ease.quadInOut).wait(33).to({regX:0.2,scaleX:2.4168,scaleY:2.4168,x:38.65,y:-509.05},41,cjs.Ease.quadInOut).to({_off:true},1).wait(9));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhMtCX8MAAAkv3MCZbAAAMAAAEv3g");
	this.shape.setTransform(299.85,339.425);

	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.setTransform(299.85,339.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance_2}]},59).to({state:[{t:this.instance_2}]},41).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({alpha:0},41,cjs.Ease.cubicInOut).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191.1,-632.9,982,1944.6999999999998);


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
	this.txt1 = new cjs.Text("Editor Score", "8px 'Segoe Pro'");
	this.txt1.name = "txt1";
	this.txt1.lineHeight = 13;
	this.txt1.lineWidth = 60;
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


(lib.box_c = function(mode,startPosition,loop,reversed) {
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
		this.box.cache(0,0,300,605,2)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.box = new lib.box_Cache();
	this.box.name = "box";
	this.box.setTransform(155,307.1,1,1,0,0,0,155,307.1);

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.box_c, new cjs.Rectangle(0,0,300,604.1), null);


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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(133).call(this.frame_133).wait(1).call(this.frame_134).wait(4));

	// Line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,1).p("AAAgmIAABN");
	this.shape.setTransform(126.3019,220.1284);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3).to({x:135.85,y:220.125},0).wait(6).to({x:145.5},0).wait(1).to({x:151.75},0).wait(2).to({x:158},0).wait(1).to({x:163.6},0).wait(1).to({x:171},0).wait(2).to({x:177.6},0).wait(1).to({x:183.15},0).wait(2).to({x:189.3},0).wait(1).to({x:194.85},0).wait(2).to({x:202.75},0).wait(1).to({x:209.7},0).wait(1).to({x:212.95},0).wait(1).to({x:216.45},0).wait(1).to({x:131.7,y:235.825},0).wait(1).to({x:139.35},0).wait(1).to({x:146.05},0).wait(1).to({x:153.05},0).wait(1).to({x:161.35},0).wait(1).to({x:165.95},0).wait(1).to({x:172.35},0).wait(2).to({x:182.85},0).wait(1).to({x:187.95},0).wait(3).to({x:199.75},0).wait(1).to({x:206.45},0).wait(1).to({x:215.75},0).wait(1).to({x:227.15},0).wait(1).to({x:241.15},0).wait(2).to({x:124.95,y:250.275},0).wait(2).to({x:130.95},0).wait(1).to({x:137.45},0).wait(1).to({x:143.85},0).wait(3).to({x:154.25},0).wait(2).to({x:160.95},0).wait(2).to({x:165.25},0).wait(2).to({x:171.75},0).wait(2).to({x:179.25},0).wait(4).to({x:183.25},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},9).wait(7).to({_off:false},0).to({_off:true},6).wait(10).to({_off:false},0).to({_off:true},5).wait(29));

	// Line1_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AnZBHIAAiNIOzAAIAACNg");
	var mask_graphics_4 = new cjs.Graphics().p("AnZBHIAAiNIOyAAIAACNg");
	var mask_graphics_6 = new cjs.Graphics().p("AnZBHIAAiNIOzAAIAACNg");
	var mask_graphics_10 = new cjs.Graphics().p("AnZBHIAAiNIOzAAIAACNg");
	var mask_graphics_11 = new cjs.Graphics().p("AnZBHIAAiNIOyAAIAACNg");
	var mask_graphics_13 = new cjs.Graphics().p("AnYBHIAAiNIOyAAIAACNg");
	var mask_graphics_14 = new cjs.Graphics().p("AnYBHIAAiNIOxAAIAACNg");
	var mask_graphics_15 = new cjs.Graphics().p("AnZBHIAAiNIOzAAIAACNg");
	var mask_graphics_17 = new cjs.Graphics().p("AnZBHIAAiNIOzAAIAACNg");
	var mask_graphics_18 = new cjs.Graphics().p("AnZBHIAAiNIOyAAIAACNg");
	var mask_graphics_20 = new cjs.Graphics().p("AnZBHIAAiNIOzAAIAACNg");
	var mask_graphics_21 = new cjs.Graphics().p("AnZBHIAAiNIOyAAIAACNg");
	var mask_graphics_23 = new cjs.Graphics().p("AnZBHIAAiNIOzAAIAACNg");
	var mask_graphics_24 = new cjs.Graphics().p("AnZBHIAAiNIOyAAIAACNg");
	var mask_graphics_25 = new cjs.Graphics().p("AoOBHIAAiNIQcAAIAACNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:78.925,y:220.8}).wait(3).to({graphics:mask_graphics_4,x:83.45,y:220.8}).wait(2).to({graphics:mask_graphics_6,x:88.475,y:220.8}).wait(4).to({graphics:mask_graphics_10,x:97.525,y:220.8}).wait(1).to({graphics:mask_graphics_11,x:103.8,y:220.8}).wait(2).to({graphics:mask_graphics_13,x:110.05,y:220.8}).wait(1).to({graphics:mask_graphics_14,x:115.65,y:220.8}).wait(1).to({graphics:mask_graphics_15,x:123.025,y:220.8}).wait(2).to({graphics:mask_graphics_17,x:129.65,y:220.8}).wait(1).to({graphics:mask_graphics_18,x:135.2,y:220.8}).wait(2).to({graphics:mask_graphics_20,x:141.35,y:220.8}).wait(1).to({graphics:mask_graphics_21,x:146.9,y:220.8}).wait(2).to({graphics:mask_graphics_23,x:154.775,y:220.8}).wait(1).to({graphics:mask_graphics_24,x:161.75,y:220.8}).wait(1).to({graphics:mask_graphics_25,x:174.7,y:220.8}).wait(113));

	// txt1_L1
	this.text_2 = new lib.text_1_2();
	this.text_2.name = "text_2";
	this.text_2.setTransform(200.8,271,1.3929,1.3929,0,0,0,57.6,35.5);
	this.text_2._off = true;

	var maskedShapeInstanceList = [this.text_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(1).to({_off:false},0).to({_off:true},133).wait(4));

	// Line2_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_27 = new cjs.Graphics().p("AnZBHIAAiNIOzAAIAACNg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AnZBHIAAiNIOzAAIAACNg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AnYBHIAAiNIOxAAIAACNg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AnZBHIAAiNIOyAAIAACNg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AnYBHIAAiNIOxAAIAACNg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AnYBHIAAiNIOxAAIAACNg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AnZBHIAAiNIOzAAIAACNg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AnYBHIAAiNIOxAAIAACNg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AnYBHIAAiNIOxAAIAACNg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AnZBHIAAiNIOzAAIAACNg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AnYBHIAAiNIOyAAIAACNg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AnZBHIAAiNIOzAAIAACNg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AoCBHIAAiNIQFAAIAACNg");
	var mask_1_graphics_43 = new cjs.Graphics().p("ApLBHIAAiNISXAAIAACNg");
	var mask_1_graphics_45 = new cjs.Graphics().p("ApLBHIAAiNISXAAIAACNg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_1_graphics_27,x:83.75,y:236.1}).wait(1).to({graphics:mask_1_graphics_28,x:91.4,y:236.1}).wait(1).to({graphics:mask_1_graphics_29,x:98.1,y:236.1}).wait(1).to({graphics:mask_1_graphics_30,x:105.05,y:236.1}).wait(1).to({graphics:mask_1_graphics_31,x:113.4,y:236.1}).wait(1).to({graphics:mask_1_graphics_32,x:118,y:236.1}).wait(1).to({graphics:mask_1_graphics_33,x:124.275,y:236.1}).wait(2).to({graphics:mask_1_graphics_35,x:135,y:236.1}).wait(1).to({graphics:mask_1_graphics_36,x:139.95,y:236.1}).wait(3).to({graphics:mask_1_graphics_39,x:151.775,y:236.1}).wait(1).to({graphics:mask_1_graphics_40,x:158.55,y:236.1}).wait(1).to({graphics:mask_1_graphics_41,x:167.8,y:236.1}).wait(1).to({graphics:mask_1_graphics_42,x:175.025,y:236.1}).wait(1).to({graphics:mask_1_graphics_43,x:181.95,y:236.1}).wait(2).to({graphics:mask_1_graphics_45,x:181.95,y:236.1}).wait(93));

	// txt1_L2
	this.text_2_1 = new lib.text_1_2();
	this.text_2_1.name = "text_2_1";
	this.text_2_1.setTransform(200.8,271,1.3929,1.3929,0,0,0,57.6,35.5);
	this.text_2_1._off = true;

	var maskedShapeInstanceList = [this.text_2_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.text_2_1).wait(27).to({_off:false},0).to({_off:true},107).wait(4));

	// Line3_mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_45 = new cjs.Graphics().p("AnZBHIAAiNIOzAAIAACNg");
	var mask_2_graphics_47 = new cjs.Graphics().p("AnZBHIAAiNIOzAAIAACNg");
	var mask_2_graphics_48 = new cjs.Graphics().p("AnZBHIAAiNIOzAAIAACNg");
	var mask_2_graphics_49 = new cjs.Graphics().p("AnZBHIAAiNIOzAAIAACNg");
	var mask_2_graphics_52 = new cjs.Graphics().p("AnYBHIAAiNIOxAAIAACNg");
	var mask_2_graphics_54 = new cjs.Graphics().p("AnZBHIAAiNIOzAAIAACNg");
	var mask_2_graphics_56 = new cjs.Graphics().p("AnZBHIAAiNIOzAAIAACNg");
	var mask_2_graphics_58 = new cjs.Graphics().p("AnYBHIAAiNIOxAAIAACNg");
	var mask_2_graphics_60 = new cjs.Graphics().p("AoKBHIAAiNIQVAAIAACNg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(45).to({graphics:mask_2_graphics_45,x:77,y:250.725}).wait(2).to({graphics:mask_2_graphics_47,x:82.975,y:250.725}).wait(1).to({graphics:mask_2_graphics_48,x:89.6,y:250.725}).wait(1).to({graphics:mask_2_graphics_49,x:95.875,y:250.725}).wait(3).to({graphics:mask_2_graphics_52,x:106.3,y:250.725}).wait(2).to({graphics:mask_2_graphics_54,x:113.075,y:250.725}).wait(2).to({graphics:mask_2_graphics_56,x:117.4,y:250.725}).wait(2).to({graphics:mask_2_graphics_58,x:123.65,y:250.725}).wait(2).to({graphics:mask_2_graphics_60,x:131.425,y:250.725}).wait(78));

	// txt1_L3
	this.text_2_2 = new lib.text_1_2();
	this.text_2_2.name = "text_2_2";
	this.text_2_2.setTransform(200.8,271,1.3929,1.3929,0,0,0,57.6,35.5);
	this.text_2_2._off = true;

	var maskedShapeInstanceList = [this.text_2_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.text_2_2).wait(45).to({_off:false},0).to({_off:true},89).wait(4));

	// txt
	this.text_2_3 = new lib.text_2_2();
	this.text_2_3.name = "text_2_3";
	this.text_2_3.setTransform(200.8,271,1.3929,1.3929,0,0,0,57.6,35.5);
	this.text_2_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_2_3).wait(134).to({_off:false},0).to({_off:true},1).wait(3));

	// purple_box
	this.spellchecker = new lib.spellcheck_box();
	this.spellchecker.name = "spellchecker";
	this.spellchecker.setTransform(183.9,219.85,0.0021,1.0337,0,0,0,0,6.2);
	this.spellchecker._off = true;

	this.timeline.addTween(cjs.Tween.get(this.spellchecker).wait(99).to({_off:false},0).to({regX:0.4,scaleX:1.0611,x:184.2},12,cjs.Ease.quadInOut).wait(23).to({scaleX:1.3716,x:184.35},0).to({_off:true},1).wait(3));

	// underline
	this.underline = new lib.underline();
	this.underline.name = "underline";
	this.underline.setTransform(184.55,227.3,0.0088,1.3513,0,0,0,11.3,13.6);
	this.underline._off = true;

	this.timeline.addTween(cjs.Tween.get(this.underline).wait(50).to({_off:false},0).to({regX:0.6,regY:13.5,scaleX:1.0714,x:184.4,y:227.15},21,cjs.Ease.quadInOut).wait(63).to({regX:0.7,scaleX:1.3994,x:184.65},0).to({_off:true},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,269.2,285.2);


(lib.white_boxes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// box_1
	this.box_1 = new lib.box_c();
	this.box_1.name = "box_1";
	this.box_1.setTransform(75,125,1,1,0,0,0,75,125);

	this.timeline.addTween(cjs.Tween.get(this.box_1).wait(1));

	// box_2
	this.box_2 = new lib.box_c();
	this.box_2.name = "box_2";
	this.box_2.setTransform(145,295.1,1,1,0,0,0,145,295.1);
	this.box_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.box_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.white_boxes, new cjs.Rectangle(0,0,300,604.1), null);


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
	this.selected.setTransform(134.1,45.3,1.0033,0.9756,0,0,0,59.9,6.2);

	this.timeline.addTween(cjs.Tween.get(this.selected).wait(1));

	// BG
	this.instance_1 = new lib.PWCE_BG();
	this.instance_1.setTransform(134.05,47.4,1.0025,1.0011,0,0,0,59.9,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PWCE_BOX, new cjs.Rectangle(74,24,120.6,51.3), null);


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
	this.icon.setTransform(51.7,243.75,0.9898,1.0141,0,0,0,0,35.5);

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(1));

	// PWCE_Box
	this.inner = new lib.PWCE_BOX();
	this.inner.name = "inner";
	this.inner.setTransform(33.6,247.4,1.0025,1.0011,0,0,0,131.2,50.6);

	this.timeline.addTween(cjs.Tween.get(this.inner).wait(1));

	// Editor_Score
	this.score = new lib.editor_score();
	this.score.name = "score";
	this.score.setTransform(26.6,379.25,0.9969,1.0046,0,0,0,55.6,171.7);

	this.timeline.addTween(cjs.Tween.get(this.score).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pop_ups, new cjs.Rectangle(-117.4,43.9,280,357.5), null);


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

	// MSoftLogo
	this.logo_intro = new lib.logos();
	this.logo_intro.name = "logo_intro";
	this.logo_intro.setTransform(58.05,196,0.3087,0.3087,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.logo_intro).wait(1));

	// replay
	this.replay_btn = new lib.replay_btn();
	this.replay_btn.name = "replay_btn";
	this.replay_btn.setTransform(283.6,4.3,0.3475,0.3475,0,0,180,-0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.replay_btn).wait(1));

	// CTA
	this.txtCta = new lib.cta();
	this.txtCta.name = "txtCta";
	this.txtCta.setTransform(233.2,548.1,1,1,0,0,0,36.3,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.txtCta).wait(1));

	// CTA_BG
	this.cta = new lib.CTA_btn();
	this.cta.name = "cta";
	this.cta.setTransform(246.15,548.25,1,1,0,0,0,-49.1,0);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// txt
	this.txt = new lib.txt();
	this.txt.name = "txt";

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Pop_ups
	this.pop_ups = new lib.pop_ups();
	this.pop_ups.name = "pop_ups";
	this.pop_ups.setTransform(199.9,79.4,1,1,0,0,0,59.9,23.4);

	this.timeline.addTween(cjs.Tween.get(this.pop_ups).wait(1));

	// UI
	this.UI = new lib.ui("synched",0);
	this.UI.name = "UI";
	this.UI.setTransform(142.65,323.55,1,1,0,0,0,126,99);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(1));

	// White_box
	this.boxes = new lib.white_boxes();
	this.boxes.name = "boxes";
	this.boxes.setTransform(75,125,1,1,0,0,0,75,125);

	this.timeline.addTween(cjs.Tween.get(this.boxes).wait(1));

	// Animation_3
	this.text = new lib.animation_2();
	this.text.name = "text";
	this.text.setTransform(148.8,146.8,1,1,0,0,0,148.8,146.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// bg image
	this.instance = new lib.bg();
	this.instance.setTransform(113.05,286.75,0.7536,0.7536,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mainMC, new cjs.Rectangle(-1,0,303.1,604.1), null);


// stage content:
(lib.M365_Editor_AUS_300x600_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_2 = function(mode,startPosition,loop,reversed) {
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
		
		var box1 = mc.boxes.box_1
		var box2 = mc.boxes.box_2
		
		var text = mc.text
		var PWCE = mc.pop_ups.inner
		var pen = mc.pop_ups.icon
		
		var score = mc.pop_ups.score
		
		var sc = mc.text.spellchecker
		var ul = mc.text.underline
		
		var txt2 = mc.text.text_2_3
		
		var selected = mc.pop_ups.inner.selected
		
		
		this.runBanner = function() {	
			
				this.tl1 = gsap.timeline();
			
					this.tl1.from(exportRoot.headline1,{duration:0.8, x: "+=100", alpha: 0, stagger: 0.1, ease:Power4.easeOut}, "<+.3");
				this.tl1.from(exportRoot.headline2,{duration:0.8, x: "+=100", alpha: 0, stagger: 0.1, ease:Power4.easeOut}, ">-.7");
		
					
				this.tl1.from(text,{duration:1.5,  ease:Power4.easeOut, onStart:function(){mc.text.play(0);}}, ">+0.2");
				
				this.tl1.from(PWCE,{duration:1,scale: 0,  ease:Power4.easeOut}, "<0.75");
				this.tl1.from(pen,{duration:0.7,scale: 0,  ease:Power4.easeOut}, ">-0.2");
				this.tl1.from(pen,{duration:1,x: "+=50",  ease:Power2.easeOut}, "<+.2");
			//	this.tl1.from(pen,{duration:1,x: "+=200",  ease:Power4.easeOut}, ">-0.3");
			//	this.tl1.from(pen,{duration:0.7,y: "+=100",  ease:Power2.easeOut}, "<+.1");
				
				this.tl1.to(pen,{duration:0.1,rotation:+5,scale:.95,  ease:Power2.easeOut}, "<+2.5");
				this.tl1.to(pen,{duration:0.1,rotation:-5,scale:1,  ease:Power2.easeOut, onStart:function(){mc.text.play(134);}}, ">.1")
						.from(selected,{duration:0.1 ,alpha: 0,  ease:Power2.easeOut}, ">-0.2");
				this.tl1.from(score,{duration:0.8 ,scale: 0,  ease:Power2.easeOut,onComplete:function(){score.play(0);}}, ">-0.2");
				
				
				this.tl1.from([box2, box1, mc.UI],{duration:1.75, x: "+=300",  ease:Power4.easeInOut, stagger:0.2}, ">+1.5")
						.to(score, {duration:1, scaleX:0.566, scaleY:0.571, x:"+=44", ease:Power2.easeInOut}, "<")
						.to(score, {duration:1.2, y:"-=96", ease:Power2.easeInOut}, "<")
						.to([PWCE,pen], {duration:1, scale:1.07, x:"-=90", ease:Power2.easeInOut}, "<")
						.to([PWCE,pen], {duration:1.2, y:"+=121", ease:Power2.easeInOut}, "<")
				
				
			//	this.tl1.to(pen,{duration:1,x: "+=200",  ease:Power4.easeIn}, "<");
				this.tl1.to(score,{duration:1.25,scale: 0,x:"+=95", y:"-=32", ease:Power4.easeIn}, "+=0");
				this.tl1.to([txt2,sc,ul],{duration:1.25,alpha: 0,  ease:Power4.easeIn, onStart:function(){txt2.htmlText="are the"}}, "-=1.25");
			//	this.tl1.to(sc,{duration:0.75,alpha: 0,  ease:Power4.easeIn}, "<");
			//	this.tl1.to(ul,{duration:0.75,alpha: 0,  ease:Power4.easeIn}, "<");
				this.tl1.to([PWCE,pen],{duration:1.25,scale: 0, x:"+=27", y:"-=13", ease:Power4.easeIn}, "-=1.25");
				this.tl1.to([mc.UI,txt2,sc,ul], {duration:2, x:"+=68", y:"+=21", ease:Power4.easeInOut},"-=1");
				this.tl1.to(mc.UI, {duration:2, scale: 1.7,  ease:Power4.easeInOut},"-=2");
				//this.tl1.to(pen,{duration:0.8,scale: 0,x: "-=10",  ease:Power4.easeIn}, "<");
				this.tl1.to(mc.UI.text,{duration:0.5, alpha:0, ease:Power4.easeIn}, "<+0.6")	
				this.tl1.to(mc.UI.UIscore,{duration:0.5, alpha:0, ease:Power4.easeIn}, "<")			
				
			
				this.tl1.from(mc.cta , 0.8, { x: "+=150", ease:Power4.easeOut}, "<.1");
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
p.nominalBounds = new cjs.Rectangle(149,300,153.10000000000002,304.1);
// library properties:
lib.properties = {
	id: '90A26FE74B042E4A89CA750D1DA2DF1F',
	width: 300,
	height: 600,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/M365_Editor_AUS_300x600_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_2_atlas_1.png?1635157514528", id:"M365_Editor_AUS_300x600_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_2_atlas_1"}
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