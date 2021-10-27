(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"M365_OneDriveDesktop_AUS_300x600_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_2_atlas_1", frames: [[668,173,221,174],[904,0,84,136],[0,0,376,282],[378,230,222,172],[160,284,144,238],[668,0,234,171],[891,173,94,140],[0,284,158,238],[378,0,288,228]]}
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



(lib.Excel11 = function() {
	this.initialize(ss["M365_OneDriveDesktop_AUS_300x600_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_2_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ExcelMobile300x600 = function() {
	this.initialize(ss["M365_OneDriveDesktop_AUS_300x600_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_2_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.M365_ComprehensionII_OneDrivePhotosUI = function() {
	this.initialize(ss["M365_OneDriveDesktop_AUS_300x600_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_2_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Outlook1 = function() {
	this.initialize(ss["M365_OneDriveDesktop_AUS_300x600_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_2_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.PhotosUImobile300x600 = function() {
	this.initialize(ss["M365_OneDriveDesktop_AUS_300x600_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_2_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.PPT = function() {
	this.initialize(ss["M365_OneDriveDesktop_AUS_300x600_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_2_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.PPTmobile300x600 = function() {
	this.initialize(ss["M365_OneDriveDesktop_AUS_300x600_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_2_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.wordmobile = function() {
	this.initialize(ss["M365_OneDriveDesktop_AUS_300x600_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_2_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Word11300x600 = function() {
	this.initialize(ss["M365_OneDriveDesktop_AUS_300x600_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_2_atlas_1"]);
	this.gotoAndStop(8);
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


(lib.WordMob = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.PPT();
	this.instance.setTransform(-4.4,24.9,0.37,0.37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WordMob, new cjs.Rectangle(-4.4,0,86.60000000000001,111.2), null);


(lib.wordmobile_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.wordmobile();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wordmobile_1, new cjs.Rectangle(0,0,79,119), null);


(lib.Word = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Word11300x600();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Word, new cjs.Rectangle(0,0,144,114), null);


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


(lib.PPTmob = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.PPTmobile300x600();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PPTmob, new cjs.Rectangle(0,0,47,70), null);


(lib.PhotosUImobile = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.PhotosUImobile300x600();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PhotosUImobile, new cjs.Rectangle(0,0,72,119), null);


(lib.PhotosUI = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.M365_ComprehensionII_OneDrivePhotosUI();
	this.instance.setTransform(30.6,-5,0.5949,0.595);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PhotosUI, new cjs.Rectangle(30.6,-5,223.70000000000002,167.8), null);


(lib.Outlook = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Outlook1();
	this.instance.setTransform(-17.8,-13.7,0.53,0.53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Outlook, new cjs.Rectangle(-17.8,-13.7,117.7,91.2), null);


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


(lib.txt_mc = function(mode,startPosition,loop,reversed) {
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


(lib.tile_sub = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("Ap6sQIT1AAQCWAAAACWIAAT1QAACWiWAAIz1AAQiWAAAAiWIAAz1QAAiWCWAAg");
	this.shape.setTransform(78.5,78.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ap6MRQiWAAAAiWIAAz1QAAiWCWAAIT1AAQCWAAAACWIAAT1QAACWiWAAg");
	this.shape_1.setTransform(78.5,78.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0.149)","rgba(0,0,0,0)"],[0,1],0.1,-8.4,0.1,8.5).s().p("AIdBXIwmAAIg2AAIAAisIEbAAIJbAAIEJAAIAACsg");
	this.shape_2.setTransform(77.6,157.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(0,0,0,0.149)","rgba(0,0,0,0)"],[0.412,0.976],0,0,0,0,0,31).s().p("AjVDWQhZhYAAh+QAAgXADgWIAAAjICtAAIAAkJQA6gbBEAAQB9AABZBZQBZBZAAB8QAABFgbA6IkaAAIAACsIA1AAQgXAEgYAAQh8AAhZhZg");
	this.shape_3.setTransform(20.7,136.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0.149)","rgba(0,0,0,0)"],[0,1],8.5,0.1,-8.4,0.1).s().p("AhWJAIAAgjIAAwrIAAgxICsAAIAAEWIAAJgIAAEJg");
	this.shape_4.setTransform(-0.6,77.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["rgba(0,0,0,0.149)","rgba(0,0,0,0)"],[0.412,0.976],0,0,0,0,0,31).s().p("AgtErIAjAAIAAisIkJAAQgbg6AAhFQAAh8BZhZQBZhZB8AAQBFAAA6AbIAAEWICtAAIAAgwQADAWAAAXQAAB+hYBYQhZBZh+AAQgXAAgWgEg");
	this.shape_5.setTransform(136.3,136.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(0,0,0,0.149)","rgba(0,0,0,0)"],[0,1],-8.5,-0.1,8.4,-0.1).s().p("AhVJAIAAkWIAApgIAAkJICsAAIAAAjIAAQrIAAAxg");
	this.shape_6.setTransform(157.65,79.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["rgba(0,0,0,0.149)","rgba(0,0,0,0)"],[0.412,0.976],0,0,0,0,0,31).s().p("AjVDWQhZhZAAh9QAAhEAbg6IEaAAIAAitIg0AAQAWgDAXAAQB+AABZBZQBYBZAAB8QAAAYgDAXIAAgkIitAAIAAEJQg6AbhFAAQh8AAhZhZg");
	this.shape_7.setTransform(136.3,20.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(0,0,0,0.149)","rgba(0,0,0,0)"],[0,1],-0.1,8.5,-0.1,-8.4).s().p("AElBXIpbAAIkJAAIAAitIAkAAIQmAAIA1AAIAACtg");
	this.shape_8.setTransform(79.4,-0.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["rgba(0,0,0,0.149)","rgba(0,0,0,0)"],[0.412,0.976],0,0,0,0,0,31).s().p("Ah+EUIAAkVIitAAIAAAwQgDgXAAgYQAAh8BZhZQBZhZB8AAQAYAAAXADIgkAAIAACtIEJAAQAbA6AABEQAAB9hZBZQhZBZh9AAQhEAAg6gbg");
	this.shape_9.setTransform(20.7,20.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tile_sub, new cjs.Rectangle(-9.6,-9.8,176.2,176.70000000000002), null);


(lib.tile_shadow_sub = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.149)","rgba(0,0,0,0)"],[0,1],0.1,11.9,0.1,28.8).s().p("AIdEhIwmAAIg2AAIAApBIB+AAIOVAAIBsAAIAAJBg");
	this.shape.setTransform(77.6,137.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(0,0,0,0.149)","rgba(0,0,0,0)"],[0.412,0.976],9.1,0,0,9.1,0,31).s().p("Ah5DWQhZhYAAh+QAAgXADgWIAAAjICtAAIAAkJQA5gbBFAAQBAAAA3AYIh+AAIAAJBIA1AAQgWAEgYAAQh9AAhYhZg");
	this.shape_1.setTransform(11.5125,136.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0.149)","rgba(0,0,0,0)"],[0,1],8.5,0.1,-8.4,0.1).s().p("AhWJAIAAgjIAAwrIAAgxICsAAIAAEWIAAJgIAAEJg");
	this.shape_2.setTransform(-0.6,77.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(0,0,0,0.149)","rgba(0,0,0,0)"],[0.412,0.976],-9.2,0,0,-9.2,0,31).s().p("AiJErIAjAAIAApBIhsAAQA3gYBAAAQBFAAA5AbIAAEWICtAAIAAgwQADAWAAAXQAAB+hYBYQhZBZh9AAQgYAAgWgEg");
	this.shape_3.setTransform(145.5,136.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0.149)","rgba(0,0,0,0)"],[0,1],-8.5,-0.1,8.4,-0.1).s().p("AhVJAIAAkWIAApgIAAkJICsAAIAAAjIAAQrIAAAxg");
	this.shape_4.setTransform(157.65,79.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["rgba(0,0,0,0.149)","rgba(0,0,0,0)"],[0.412,0.976],0,0,0,0,0,31).s().p("AjVDWQhZhZAAh9QAAhEAbg6IEaAAIAAitIg0AAQAWgDAXAAQB+AABZBZQBYBZAAB8QAAAYgDAXIAAgkIitAAIAAEJQg6AbhFAAQh8AAhZhZg");
	this.shape_5.setTransform(136.3,20.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(0,0,0,0.149)","rgba(0,0,0,0)"],[0,1],-0.1,8.5,-0.1,-8.4).s().p("AElBXIpbAAIkJAAIAAitIAkAAIQmAAIA1AAIAACtg");
	this.shape_6.setTransform(79.4,-0.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["rgba(0,0,0,0.149)","rgba(0,0,0,0)"],[0.412,0.976],0,0,0,0,0,31).s().p("Ah+EUIAAkVIitAAIAAAwQgDgXAAgYQAAh8BZhZQBZhZB8AAQAYAAAXADIgkAAIAACtIEJAAQAbA6AABEQAAB9hZBZQhZBZh9AAQhEAAg6gbg");
	this.shape_7.setTransform(20.7,20.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tile_shadow_sub, new cjs.Rectangle(-9.6,-9.8,176.2,176.70000000000002), null);


(lib.mask = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#33CC00").s().p("A2GFAIAAp/MAsNAAAIAAJ/g");
	this.shape.setTransform(141.5038,32.0005);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mask, new cjs.Rectangle(0,0,283,64), null);


(lib.bg_sub = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F2F2F2").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(80.0011,299.9992,0.5333,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_sub, new cjs.Rectangle(0,0,160,600), null);


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


(lib.ExcelMob = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ExcelMobile300x600();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ExcelMob, new cjs.Rectangle(0,0,42,68), null);


(lib.Excel = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Excel11();
	this.instance.setTransform(27.2,21.4,0.31,0.31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Excel, new cjs.Rectangle(27.2,21.4,68.5,54.00000000000001), null);


(lib.cta_glare = function(mode,startPosition,loop,reversed) {
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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:16.55,alpha:1},1).to({_off:true},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.3,0,32.199999999999996,30.6);


(lib.icon_teams = function(mode,startPosition,loop,reversed) {
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
		this.tile_sub.cache(0,0,157,157,1)
		this.shadow_sub.cache(-20,-20,197,197,1)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_5
	this.tile_sub = new lib.tile_sub();
	this.tile_sub.name = "tile_sub";
	this.tile_sub.setTransform(78.5,78.5,1,1,0,0,0,78.5,78.5);

	this.timeline.addTween(cjs.Tween.get(this.tile_sub).wait(1));

	// Layer_3
	this.shadow_sub = new lib.tile_shadow_sub();
	this.shadow_sub.name = "shadow_sub";
	this.shadow_sub.setTransform(78.5,78.5,1,1,0,0,0,78.5,78.5);

	this.timeline.addTween(cjs.Tween.get(this.shadow_sub).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon_teams, new cjs.Rectangle(-9.6,-9.8,176.2,176.70000000000002), null);


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

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.bg_sub.cache(0,0,160,600,1)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.bg_sub = new lib.bg_sub();
	this.bg_sub.name = "bg_sub";
	this.bg_sub.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.bg_sub).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,160,600), null);


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


(lib.ScreensAnim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 1 photos
	this.screen1 = new lib.PhotosUI();
	this.screen1.name = "screen1";
	this.screen1.setTransform(135.2,87.2,0.9356,0.9356,0,0,0,143.7,78.5);

	this.timeline.addTween(cjs.Tween.get(this.screen1).wait(1));

	// 2 photosmob
	this.screen2 = new lib.PhotosUImobile();
	this.screen2.name = "screen2";
	this.screen2.setTransform(14.95,90.6,0.9991,0.9999,0,0,0,34,56.6);

	this.timeline.addTween(cjs.Tween.get(this.screen2).wait(1));

	// bg
	this.bg = new lib.bg();
	this.bg.name = "bg";
	this.bg.setTransform(224.75,-80,1.6179,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	// word mobile
	this.wordM = new lib.wordmobile_1();
	this.wordM.name = "wordM";
	this.wordM.setTransform(190.2,-24.55,0.957,0.957,0,0,0,39.5,59.5);

	this.timeline.addTween(cjs.Tween.get(this.wordM).wait(1));

	// 3
	this.screen3 = new lib.PPTmob();
	this.screen3.name = "screen3";
	this.screen3.setTransform(112.4,-104.8,1,1,0,0,0,18.4,27.2);

	this.timeline.addTween(cjs.Tween.get(this.screen3).wait(1));

	// 4
	this.screen4 = new lib.Word();
	this.screen4.name = "screen4";
	this.screen4.setTransform(51.15,200.9,0.9229,0.9233,0,0,0,105.6,33.8);

	this.timeline.addTween(cjs.Tween.get(this.screen4).wait(1));

	// 5
	this.screen5 = new lib.Excel();
	this.screen5.name = "screen5";
	this.screen5.setTransform(188.9,220.05,1.8353,1.8358,0,0,0,63.7,48.5);

	this.timeline.addTween(cjs.Tween.get(this.screen5).wait(1));

	// 6
	this.screen6 = new lib.Outlook();
	this.screen6.name = "screen6";
	this.screen6.setTransform(107.4,327.85,1.033,1.033,0,0,0,41.1,31.8);

	this.timeline.addTween(cjs.Tween.get(this.screen6).wait(1));

	// 7
	this.screen7 = new lib.WordMob();
	this.screen7.name = "screen7";
	this.screen7.setTransform(48.1,-60.25,1.5058,1.5058,0,0,0,37.8,57.6);

	this.timeline.addTween(cjs.Tween.get(this.screen7).wait(1));

	// 8
	this.screen8 = new lib.ExcelMob();
	this.screen8.name = "screen8";
	this.screen8.setTransform(126.05,232.75,1,1.0004,0,0,0,16.6,26.9);

	this.timeline.addTween(cjs.Tween.get(this.screen8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ScreensAnim, new cjs.Rectangle(-46.3,-205,294,600), null);


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

	// Layer 3
	this.arrow = new lib.arrowMain();
	this.arrow.name = "arrow";
	this.arrow.setTransform(-25.6,4.1,0.8552,0.7846,0,0,0,13.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(1));

	// CTA_text
	this.cta_glare = new lib.cta_glare();
	this.cta_glare.name = "cta_glare";
	this.cta_glare.setTransform(-42.75,-2.45,1,1,0,0,0,57.4,15.1);

	this.timeline.addTween(cjs.Tween.get(this.cta_glare).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0078D4").s().p("AnRB7IAAj1IOjAAIAAD1g");
	this.shape.setTransform(-64.208,3.5267,1.1974,1.5814);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA_btn, new cjs.Rectangle(-120,-15.9,111.6,38.9), null);


(lib.tiletop = function(mode,startPosition,loop,reversed) {
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
	this.tile_sub = new lib.icon_teams();
	this.tile_sub.name = "tile_sub";
	this.tile_sub.setTransform(-62.7,61.15,0.7,0.7,0,0,0,77,79);

	this.timeline.addTween(cjs.Tween.get(this.tile_sub).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tiletop, new cjs.Rectangle(-123.3,-1,123.3,123.7), null);


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
	this.logo_intro.setTransform(58,195,0.3087,0.3087);

	this.timeline.addTween(cjs.Tween.get(this.logo_intro).wait(1));

	// CTA
	this.txtCta = new lib.cta();
	this.txtCta.name = "txtCta";
	this.txtCta.setTransform(190,549,1,1,0,0,0,0.7,0.1);

	this.timeline.addTween(cjs.Tween.get(this.txtCta).wait(1));

	// CTA_BG
	this.cta = new lib.CTA_btn();
	this.cta.name = "cta";
	this.cta.setTransform(309.75,544.9,1.136,1.136,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// txt
	this.txt = new lib.txt();
	this.txt.name = "txt";

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// replay
	this.replay_btn = new lib.replay_btn();
	this.replay_btn.name = "replay_btn";
	this.replay_btn.setTransform(283.8,4.2,0.3475,0.3475,0,0,180,-0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.replay_btn).wait(1));

	// Anim
	this.anim = new lib.ScreensAnim();
	this.anim.name = "anim";
	this.anim.setTransform(21,202,1.157,1.157);

	this.timeline.addTween(cjs.Tween.get(this.anim).wait(1));

	// Text
	this.txt_mc = new lib.txt_mc();
	this.txt_mc.name = "txt_mc";
	this.txt_mc.setTransform(70.5,70.55,1,1,0,0,0,70.5,70.5);

	this.timeline.addTween(cjs.Tween.get(this.txt_mc).wait(1));

	// bg
	this.bg = new lib.bg();
	this.bg.name = "bg";
	this.bg.setTransform(281.25,125,1.875,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mainMC, new cjs.Rectangle(-32.5,-35.1,340,694.2), null);


// stage content:
(lib.M365_OneDriveDesktop_AUS_300x600_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_2 = function(mode,startPosition,loop,reversed) {
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
			exportRoot.rolloverReady = false;
			
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
						} else if (id == "word") {
							exportRoot['' + keys[i]] = new Array()
							exportRoot.fillDocument(data[keys[i]], exportRoot['' + keys[i]])
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
				if (mc.getTransformedBounds()) mc.cache(mc.getTransformedBounds().width*-1,mc.getTransformedBounds().height*-1,mc.getTransformedBounds().width*2,mc.getTransformedBounds().height*2,1.6)
				exportRoot.mainMC.txt.addChild(mc);
				aVar.push(mc)
			}
		}
		this.fillDocument = function (txtDetails, aVar) {
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
				if (mc.getTransformedBounds()) mc.cache(mc.getTransformedBounds().width*-1,mc.getTransformedBounds().height*-1,mc.getTransformedBounds().width*2,mc.getTransformedBounds().height*2,1.6)
				exportRoot.mainMC.addChild(mc);
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
		
		
		
		
		mc.anim.bg.alpha=0
		
		this.runBanner = function() {
			
			    var mc = exportRoot.mainMC;
		    var screen1 = mc.anim.screen1;
		    var screen2 = mc.anim.screen2;
		    var screen3 = mc.anim.screen3;
		    var screen4 = mc.anim.screen4;
		    var screen5 = mc.anim.screen5;
		    var screen6 = mc.anim.screen6;
		    var screen7 = mc.anim.screen7;
		    var screen8 = mc.anim.screen8;
		    var word = mc.anim.wordM;
		    var fade = mc.anim.bg;
		    exportRoot.tl1 = gsap.timeline();
		
		    exportRoot.tl1.from(screen1, 1.3, { x: "+=100", alpha: 0, ease:Power4.easeOut}, "+=0")
		      .from(screen2, 1.3, { x: "-=100", y: "+=0", alpha: 0, ease:Power4.easeOut}, "-=1.3")
		      .from(screen3, 1.3, { x: "+=100", y: "-=90", alpha: 0, ease:Power4.easeOut}, "<+.1")
		      .from(screen4, 1.3, { x: "+=20", y: "+=130", alpha: 0, ease:Power4.easeOut}, "<+.1")
		      .from(screen5, 1.3, { x: "+=100", y: "+=20", alpha: 0, ease:Power4.easeOut}, "<+.1")
		      .from(screen6, 1.3, { x: "+=60", y: "-=100", alpha: 0, ease:Power4.easeOut}, "<+.1")
		      .from(screen7, 1.3, { x: "-=100", y: "+=10", alpha: 0, ease:Power4.easeOut}, "<+.1")
		      .from(screen8, 1.3, { x: "-=100", y: "-=10", alpha: 0, ease:Power4.easeOut}, "<+.1")
		        .from(word, 1.3, { x: "+=100", y: "-=10", alpha: 0, ease:Power4.easeOut}, "<+.1");
		
		    exportRoot.tl1.to(screen1, 1.3, { x: "+=34", y: "+=36",  ease:Power3.easeInOut}, "+=0.7")
		      .to(fade, 1.3, {alpha: 0.5, ease:Power3.easeInOut }, "<")
		      .to(screen2, 1.3, { x: "+=27", y: "+=32",  ease:Power3.easeInOut}, "<+.1")
		      .to(screen3, 1.3, { scale:1.12, x: "-=31", y: "+=105",  ease:Power3.easeInOut}, "<+.1")
		      .to(screen4, 1.3, { scale:1.05, x: "-=2", y: "+=1",  ease:Power3.easeInOut}, "<-.1")
		      .to(screen5, 1.3, { scale:1.31, x: "-=22", y: "+=5",  ease:Power3.easeInOut}, "<-.1")
		      .to(screen6, 1.3, { scale:1.11, x: "-=37", y: "-=10",  ease:Power3.easeInOut}, "<+.1")
		      .to(screen7, 1.3, { scale:1, x: "-=21", y: "+=88",  ease:Power3.easeInOut}, "<+.1")
		        .to(word, 1.3, { scale:.79, x: "+=28", y: "+=62",  ease:Power3.easeInOut}, "<+.1")
		      .to(screen8, 1.3, { scale:1.3, x: "-=22", y: "+=2",  ease:Power3.easeInOut, onComplete:function(){exportRoot.rolloverReady = true;}}, "<+.1");
		
		
		    exportRoot.tl1.from(exportRoot.headline1, 0.8, { x: "-=100", alpha: 0, ease:Power4.easeOut, stagger:0.1}, "-=0.3")
		        .from(exportRoot.headline2, 0.8, { x: "-=100", alpha: 0, ease:Power4.easeOut, stagger:0.1}, "-=0.6");
		
		
		    exportRoot.tl1.from(mc.txtCta, 0.7, { alpha: 0, x: "+=100",	ease:Power4.easeOut}, "-=0.5")
		        .from(mc.cta, 0.7, {alpha: 0, x: "+=100", ease:Power4.easeOut}, "-=0.7")
		        .from(mc.replay_btn, 0.7, { alpha: 0,ease:Power4.easeOut, onStart:function(){exportRoot.isReplay = true;}}, "-=.6");
		
		    exportRoot.tl1.pause();
		
		    exportRoot.tlRoll = gsap.timeline();
		
		    exportRoot.tlRoll.add('start');
		
		    exportRoot.tlRoll.to(screen1, .4, { scale:1.1, x:"-=0", y:"-=0", ease:Power3.easeInOut })
		        .to(screen2, .4, { scale:1.08, x:"-=12", y:"-=0", ease:Power3.easeInOut}, "<")
		        .to(screen3, .4, { x:"+=1", y:"-=5", ease:Power3.easeInOut}, "<")
		        .to(screen4, .4, { x:"-=0", y:"+=5", ease:Power3.easeInOut}, "<")
		        .to(screen5, .4, { x:"+=0", y:"+=10", ease:Power3.easeInOut}, "<")
		        .to(screen6, .4, { x:"+=0", y:"+=8", ease:Power3.easeInOut}, "<")
		        .to(screen7, .4, { x:"-=1", y:"-=4", ease:Power2.easeInOut}, "<")
		        .to(screen8, .4, { x:"-=1", y:"+=5", ease:Power2.easeInOut}, "<")
		        .to(word, .4, { x:"+=1", y:"-=5", ease:Power2.easeInOut}, "<");
		
		    exportRoot.tlRoll.add('end');
		
		    exportRoot.tlRoll.pause();
		
		
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
p.nominalBounds = new cjs.Rectangle(117.5,264.9,190,394.20000000000005);
// library properties:
lib.properties = {
	id: '90A26FE74B042E4A89CA750D1DA2DF1F',
	width: 300,
	height: 600,
	fps: 40,
	color: "#F5F5F5",
	opacity: 1.00,
	manifest: [
		{src:"images/M365_OneDriveDesktop_AUS_300x600_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_2_atlas_1.png?1634212674507", id:"M365_OneDriveDesktop_AUS_300x600_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_2_atlas_1"}
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