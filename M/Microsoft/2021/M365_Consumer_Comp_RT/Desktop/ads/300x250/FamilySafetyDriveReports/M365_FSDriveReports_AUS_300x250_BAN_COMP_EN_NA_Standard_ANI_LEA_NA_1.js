(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"M365_FSDriveReports_AUS_300x250_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_1_atlas_1", frames: [[0,632,43,57],[0,278,347,268],[349,278,195,377],[0,548,95,82],[0,0,363,276]]}
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



(lib.Layer36 = function() {
	this.initialize(ss["M365_FSDriveReports_AUS_300x250_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_1_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.popup = function() {
	this.initialize(ss["M365_FSDriveReports_AUS_300x250_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_1_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.uiEnd_m = function() {
	this.initialize(ss["M365_FSDriveReports_AUS_300x250_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_1_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.uiEnd_nopopup_300x250 = function() {
	this.initialize(ss["M365_FSDriveReports_AUS_300x250_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_1_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.womanTop300x250 = function() {
	this.initialize(ss["M365_FSDriveReports_AUS_300x250_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_1_atlas_1"]);
	this.gotoAndStop(4);
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


(lib.womanTop = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.womanTop300x250();
	this.instance.setTransform(42.2,-0.2,1.25,1.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.womanTop, new cjs.Rectangle(0,-0.2,496,393.2), null);


(lib.uiEnd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AphIcIAAw3ITDAAIAAQ3g");
	mask.setTransform(213,273);

	// Layer_2
	this.instance = new lib.uiEnd_m();
	this.instance.setTransform(-0.55,-0.5,1.427,1.427);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uiEnd, new cjs.Rectangle(0,0,278,538), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("EhMdBAtMAAAiBYMCY7AAAMAAACBYg");
	this.shape.setTransform(0.0296,0.0053);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-489.3,-414,978.7,828.1);


(lib.Shadow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("EgNwAn7MAAAg9rIlxAAIAAyKISWAAIAAMMIUtAAMAAABDpg");
	this.shape.setTransform(124.95,255.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Shadow, new cjs.Rectangle(0,0,249.9,510.9), null);


(lib.popUpNew = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.popup();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.popUpNew, new cjs.Rectangle(0,0,347,268), null);


(lib.pin = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Layer36();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pin, new cjs.Rectangle(0,0,43,57), null);


(lib.msLogoWhite = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFB900").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape.setTransform(21.2153,21.2153,0.3866,0.3866);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A4EF").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_1.setTransform(6.6111,21.2153,0.3866,0.3866);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7FBA00").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_2.setTransform(21.2153,6.6111,0.3866,0.3866);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F25022").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_3.setTransform(6.6111,6.6111,0.3866,0.3866);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#737373").s().p("AGoBSQgJgKAAgTIAAg9IgqAAIAABhIgdAAIAAhhIgUAAIAAgXIAUAAIAAgQQAAgTANgMQANgMASAAIAJABIAHABIAAAZIgEgDIgIgBQgJAAgFAFQgFAHAAAKIAAAOIAqAAIAAgbIAcgIIAAAjIAdAAIAAAXIgdAAIAAA3QABAMAEAEQADAFAJAAIAGgCIAGgDIAAAYIgJADIgMABQgSAAgJgJgADXBLQgRgQAAgdQAAgdARgRQARgSAeAAQAcABAPAQQAQARABAbQAAAdgRASQgRARgdAAQgcAAgQgQgADsAAQgIAKAAATQAAATAIAJQAJALAPAAQAQAAAJgLQAHgJAAgUQAAgTgIgJQgIgKgQABQgPgBgJAKgAB6BaIgQgFIAAgcQAIAFAJADQAKAEAGAAQAJAAAFgDQAFgDAAgGQAAgGgFgEQgEgEgOgFQgPgHgHgHQgGgJgBgNQAAgOANgLQANgLAVAAIAOACIANAEIAAAaIgNgGQgIgDgHAAQgIAAgEADQgFAEAAAEQAAAGAEADQADADAOAGQARAHAGAJQAIAIAAAMQgBARgNAKQgMAKgXAAIgQgBgAgMBLQgRgQAAgdQAAgdARgRQAPgSAfAAQAcABAQAQQAPARAAAbQAAAegQARQgSARgcAAQgdAAgOgQgAAIAAQgIAKAAATQAAATAIAJQAIALARAAQAPAAAHgLQAJgJAAgUQAAgSgJgKQgIgKgPABQgQgBgIAKgAjGBKQgRgQAAgaQAAgdARgSQARgTAeAAQAJAAAIACQAIACAFAEIAAAaQgHgEgHgDQgGgDgHABQgSAAgJAJQgLALAAASQAAATAKAJQAKALAQAAQAHAAAHgDQAIgDAHgFIAAAaQgHAEgIADIgTABQgbAAgQgRgAhkBZIAAh4IAcAAIAAAUIAAAAQAEgKAIgGQAIgFALgBIAGABIAFABIAAAdIgHgEQgEgBgGAAQgKAAgIAIQgHAIAAATIAAA9gAkHBZIAAh4IAcAAIAAB4gAk/BZIAAiDIAAAAIg0CDIgTAAIg2iDIAAAAIAACDIgbAAIAAinIApAAIAxB7IABAAIAyh7IAoAAIAACngAkFg1QgFgFAAgHQAAgHAFgFQAGgFAGABQAHgBAGAFQAEAFAAAHQAAAHgEAFQgGAEgHAAQgHAAgFgEg");
	this.shape_4.setTransform(83.4,13.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#737373").s().p("AhXDUQgegJgOgIIAAhDQAXARAYAHQAYAJAXgBQArABAagWQAagVAAglQAAgkgbgUQgbgUgxAAIhHAEIAPjkIDWAAIAAA+IiaAAIgHBqIATgCIATAAQBDAAAmAjQAlAjAAA8QAABBgrAnQgqAnhLAAQgfAAgcgIg");
	this.shape_5.setTransform(167.1227,14.0533,0.3866,0.3866);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#737373").s().p("AhrCrQgpg1AAheQAAh5A2g/QA3g+BQAAQAaAAATADQAWADAMAGIAABBQgRgJgUgFQgTgFgTAAQg1AAggAqQggAogBBKIACAAQAMgXAagNQAZgMAfAAQAzAAAlAiQAmAhgBBBQABBFgqAnQgrAng9AAQhFAAgpg0gAgyAVQgUAWAAAhQAAAlAVAaQAVAZAgAAQAfAAAVgWQATgWAAgmQAAgogTgVQgTgVgiAAQgfAAgWAVg");
	this.shape_6.setTransform(154.9154,13.9084,0.3866,0.3866);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#737373").s().p("AhXDZQgcgHgQgKIAAhGQAVAQAaAJQAcAJAbAAQAoAAAXgTQAXgTAAggQAAgigbgTQgcgSgyAAIgmAAIAAg6IAjAAQAvAAAWgRQAZgRAAghQAAgdgTgQQgTgRgiAAQgYAAgUAIQgWAIgUAPIAAhCQAVgLAagGQAagGAfAAQA3AAAlAdQAkAeAAAuQAAAqgWAbQgXAcgoAKIAAACQAuAFAbAaQAbAcAAApQAAA8grAjQgrAkhJAAQggAAgcgGg");
	this.shape_7.setTransform(142.4568,13.9084,0.3866,0.3866);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.msLogoWhite, new cjs.Rectangle(0,0,199.5,27.9), null);


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
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_sub, new cjs.Rectangle(0,0,300,250), null);


(lib.m4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#B5DDA2").s().p("AhCApIAAhRICFAAIAABRg");
	this.shape.setTransform(4.6417,2.864,0.6989,0.6989);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.m4, new cjs.Rectangle(0,0,9.3,5.8), null);


(lib.m3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#B5DDA2").s().p("AhCAiIAAhDICFAAIAABDg");
	this.shape.setTransform(4.6568,2.3441,0.6989,0.6989);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.m3, new cjs.Rectangle(0,0,9.3,4.7), null);


(lib.m2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#B5DDA2").s().p("AhHBHIAAiCIAZgLIB2AAIAAAZIhXAmIAAAUIAaAAIAAAfIg3AAIAAAbg");
	this.shape.setTransform(5.0075,4.9695,0.6989,0.6989);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.m2, new cjs.Rectangle(0,0,10.1,10), null);


(lib.m1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#B5DDA2").s().p("AA6DXIgHgXIAAhWIgbgHIgoAAIgYgSIAAhFIgfgdIhHgsIAAiZIAdAAIAJA7IAjAoICFBeIAnAgIASAcIAWAGIAAAqIgWAAIAABjIgSAdg");
	this.shape.setTransform(9.976,15.0489,0.6989,0.6989);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.m1, new cjs.Rectangle(0,0,20,30.1), null);


(lib.introBg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EhL7A/XMAAAh+tMCX3AAAMAAAB+tg");
	this.shape.setTransform(486,405.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.introBg, new cjs.Rectangle(0,0,972,811), null);


(lib.image_BG = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#C9C8C6","#CACAC8","#D1D1D1","#D3D3D3","#D2D2D2"],[0,0.165,0.459,0.792,1],-514.2,-283,391.6,154.6).s().p("Eg4rA25MAAAhtxMBxXAAAMAAABtxg");
	this.shape.setTransform(362.8,351.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_BG, new cjs.Rectangle(0,0,725.6,702.5), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("ArtTiMAAAgnDIXbAAMAAAAnDg");
	this.shape.setTransform(75,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.box_Cache, new cjs.Rectangle(0,0,150,250), null);


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
	this.shape.graphics.f("#0078D4").s().p("ApZDXIAAmtIS0AAIAAGtg");
	this.shape.setTransform(45.75,12.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.backCTA, new cjs.Rectangle(-14.5,-8.6,120.5,43), null);


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


(lib.woman1 = function(mode,startPosition,loop,reversed) {
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
		this.bg.cache(0,0,740,705,1)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.bg = new lib.image_BG();
	this.bg.name = "bg";
	this.bg.setTransform(362.8,348.6,1,1,0,0,0,362.8,351.2);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.woman1, new cjs.Rectangle(0,-2.6,725.6,703.6), null);


(lib.uiEnd_map = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.uiEnd_nopopup_300x250();
	this.instance.setTransform(153.75,222.35,1.248,1.248);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.uiEnd_m();
	this.instance_1.setTransform(-0.55,-0.5,1.427,1.427);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// shadow
	this.instance_2 = new lib.Shadow();
	this.instance_2.setTransform(137.7,284.45,1.0266,1.0266,0,0,0,125,255.6);
	this.instance_2.alpha = 0.3008;
	this.instance_2.filters = [new cjs.BlurFilter(15, 15, 1)];
	this.instance_2.cache(-2,-2,254,515);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uiEnd_map, new cjs.Rectangle(-0.5,-0.5,278.5,558.6), null);


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
		this.bg_sub.cache(0,0,300,250,1)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.bg_sub = new lib.bg_sub();
	this.bg_sub.name = "bg_sub";
	this.bg_sub.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.bg_sub).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,300,250), null);


(lib.mainAnim_Build = function(mode,startPosition,loop,reversed) {
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
	this.frame_98 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(98).call(this.frame_98).wait(1));

	// Layer_1
	this.instance = new lib.pin();
	this.instance.setTransform(-71.25,-168.25,0.6658,0.6658,0,0,0,21.8,28.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(53).to({_off:false},0).to({x:-84.5,y:-79.9},27,cjs.Ease.cubicOut).wait(19));

	// m3
	this.instance_1 = new lib.m3();
	this.instance_1.setTransform(-113,-106.5,1,0.1064,0,0,0,4.7,4.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(41).to({_off:false},0).to({scaleY:1},8,cjs.Ease.quartOut).wait(50));

	// m2
	this.instance_2 = new lib.m2();
	this.instance_2.setTransform(-96.75,-66.05,1,0.0754,0,0,0,5,10);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).to({scaleY:1,y:-66},8,cjs.Ease.quartOut).wait(52));

	// m1
	this.instance_3 = new lib.m1();
	this.instance_3.setTransform(-47.1,-51,1,0.0882,0,0,0,10,30.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(37).to({_off:false},0).to({scaleY:1},8,cjs.Ease.quartOut).wait(54));

	// m4
	this.instance_4 = new lib.m4();
	this.instance_4.setTransform(-39.85,-25.2,1,0.0783,0,0,0,4.7,5.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35).to({_off:false},0).to({scaleY:1,y:-25.15},8,cjs.Ease.quartOut).wait(56));

	// Layer_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_38 = new cjs.Graphics().p("AibCaQhBhAABhaQgBhZBBhAQBBg/BaAAQBbAABBA/QBBBAAABZQAABahBBAQhBBAhbgBQhaABhBhAg");
	var mask_graphics_39 = new cjs.Graphics().p("AjpEVQhghyAAijQAAiiBghzQBhhzCIAAQCJAABgBzQBhBzAACiQAACjhhByQhgB0iJAAQiIAAhhh0g");
	var mask_graphics_40 = new cjs.Graphics().p("AkyGKQh/ijAAjnQAAjnB/ikQB/ijCzAAQC0AAB/CjQB/CkAADnQAADnh/CjQh/Cli0AAQizAAh/ilg");
	var mask_graphics_41 = new cjs.Graphics().p("Al3H5QicjRAAkoQAAknCcjTQCbjRDcAAQDdAACbDRQCcDTAAEnQAAEoicDRQibDTjdAAQjcAAibjTg");
	var mask_graphics_42 = new cjs.Graphics().p("Am4JhQi2j8gBllQABlkC2j+QC2j8ECAAQEDAAC2D8QC3D+AAFkQAAFli3D8Qi2D+kDAAQkCAAi2j+g");
	var mask_graphics_43 = new cjs.Graphics().p("An1LDQjPkkgBmfQABmdDPkmQDPklEmABQEmgBDQElQDPEmAAGdQAAGfjPEkQjQElkmAAQkmAAjPklg");
	var mask_graphics_44 = new cjs.Graphics().p("AouMdQjmlKAAnTQAAnSDmlMQDnlKFHAAQFHAADnFKQDoFMgBHSQABHTjoFKQjnFMlHAAQlHAAjnlMg");
	var mask_graphics_45 = new cjs.Graphics().p("ApiNwQj9lsAAoEQAAoDD9lvQD9lsFlAAQFnAAD8FsQD9FvAAIDQAAIEj9FsQj8FvlnAAQllAAj9lvg");
	var mask_graphics_46 = new cjs.Graphics().p("AqSO+QkRmMAAoyQAAowERmPQEQmMGCAAQGDAAEQGMQERGPAAIwQAAIykRGMQkQGPmDgBQmCABkQmPg");
	var mask_graphics_47 = new cjs.Graphics().p("Aq+QEQkjmpAApbQAApaEjmsQEjmpGbAAQGdAAEiGpQEjGsAAJaQAAJbkjGpQkiGsmdAAQmbAAkjmsg");
	var mask_graphics_48 = new cjs.Graphics().p("ArmRDQk0nDAAqAQAAp/E0nHQEznDGzAAQG0AAEzHDQE0HHAAJ/QAAKAk0HDQkzHHm0AAQmzAAkznHg");
	var mask_graphics_49 = new cjs.Graphics().p("AsKR9QlCnbAAqiQAAqgFCnfQFCnbHIAAQHJAAFCHbQFCHfAAKgQAAKilCHbQlCHenJAAQnIAAlCneg");
	var mask_graphics_50 = new cjs.Graphics().p("AspSvQlPnwAAq/QAAq9FPn0QFPnwHaAAQHbAAFPHwQFPH0AAK9QAAK/lPHwQlPHznbAAQnaAAlPnzg");
	var mask_graphics_51 = new cjs.Graphics().p("AtFTaQlaoCAArYQAArXFaoGQFboCHqAAQHrAAFaICQFbIGAALXQAALYlbICQlaIGnrAAQnqAAlboGg");
	var mask_graphics_52 = new cjs.Graphics().p("AtcT/QljoRgBruQABrtFjoVQFkoRH4AAQH4AAFkIRQFlIVAALtQAALullIRQlkIVn4AAQn4AAlkoVg");
	var mask_graphics_53 = new cjs.Graphics().p("AtuUdQlsodAAsAQAAr+FsoiQFroeIDAAQIEAAFrIeQFsIiAAL+QAAMAlsIdQlrIioEAAQoDAAlroig");
	var mask_graphics_54 = new cjs.Graphics().p("At9U1QlyonAAsOQAAsMFyosQFyonILAAQIMAAFyInQFyIsAAMMQAAMOlyInQlyIroMAAQoLAAlyorg");
	var mask_graphics_55 = new cjs.Graphics().p("AuIVFQl2ouAAsXQAAsWF2oyQF2ovISAAQITAAF2IvQF2IyAAMWQAAMXl2IuQl2IzoTAAQoSAAl2ozg");
	var mask_graphics_56 = new cjs.Graphics().p("AuOVQQl4ozgBscQABsdF4o3QF4oyIWAAQIWAAF4IyQF5I3AAMdQAAMcl5IzQl4I2oWAAQoWAAl4o2g");
	var mask_graphics_57 = new cjs.Graphics().p("AuQVTQl6o0ABsfQgBseF6o4QF5o0IXAAQIXAAF6I0QF6I4AAMeQAAMfl6I0Ql6I4oXAAQoXAAl5o4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(38).to({graphics:mask_graphics_38,x:-86.35,y:-164.85}).wait(1).to({graphics:mask_graphics_39,x:-85.6,y:-145.525}).wait(1).to({graphics:mask_graphics_40,x:-84.9,y:-127.25}).wait(1).to({graphics:mask_graphics_41,x:-84.225,y:-110.025}).wait(1).to({graphics:mask_graphics_42,x:-83.6,y:-93.825}).wait(1).to({graphics:mask_graphics_43,x:-83,y:-78.7}).wait(1).to({graphics:mask_graphics_44,x:-82.45,y:-64.575}).wait(1).to({graphics:mask_graphics_45,x:-81.975,y:-51.525}).wait(1).to({graphics:mask_graphics_46,x:-81.5,y:-39.5}).wait(1).to({graphics:mask_graphics_47,x:-81.075,y:-28.55}).wait(1).to({graphics:mask_graphics_48,x:-80.7,y:-18.625}).wait(1).to({graphics:mask_graphics_49,x:-80.325,y:-9.75}).wait(1).to({graphics:mask_graphics_50,x:-80.025,y:-1.925}).wait(1).to({graphics:mask_graphics_51,x:-79.775,y:4.875}).wait(1).to({graphics:mask_graphics_52,x:-79.55,y:10.625}).wait(1).to({graphics:mask_graphics_53,x:-79.375,y:15.325}).wait(1).to({graphics:mask_graphics_54,x:-79.225,y:18.975}).wait(1).to({graphics:mask_graphics_55,x:-79.125,y:21.575}).wait(1).to({graphics:mask_graphics_56,x:-79.05,y:23.15}).wait(1).to({graphics:mask_graphics_57,x:-79.05,y:23.675}).wait(42));

	// green
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC66").s().p("AhEUsQgfi9gdjSQgYixgHhHQgKhlAFh/QAChJANiaQATjpANhuQAVjBAfiYQAQhRAliaQAdh2AThcQBsoHg8oKIA8gIQA+IWhuIQQgQBMghCIQgmCbgOBNQgeCWgWC/QgNB0gSDgQgMCVgDBJQgFB9AJBiQAYDtBHGsQBWIGAzBGIgxAkQg+hVhaoog");
	this.shape.setTransform(-86.4653,-12.3793,0.6989,0.6989);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#02BA65").s().p("AgvOdQgViEgViTQgRh7gFgyQgHhGAEhaQABgyAJhsQAOijAJhMQAPiIAVhpQALg5AahsQAUhSAOhAQBLlrgqltIAqgFQArF1hNFwQgLA2gXBeQgaBtgKA2QgVBpgPCFQgJBRgNCdQgJBngCA0QgDBXAHBEQAQCmAyErQA8FrAjAwIgiAZQgrg7g/mCg");
	this.shape_1.setTransform(-86.4629,-12.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#04AA65").s().p("AgvOdQgViEgViTQgRh7gFgyQgHhGAEhaQABgyAJhsQAOijAJhMQAPiIAVhpQALg5AahsQAUhSAOhAQBLlrgqltIAqgFQArF1hNFwQgLA2gXBeQgaBtgKA2QgVBpgPCFQgJBRgNCdQgJBngCA0QgDBXAHBEQAQCmAyErQA8FrAjAwIgiAZQgrg7g/mCg");
	this.shape_2.setTransform(-86.4629,-12.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#059D64").s().p("AgvOdQgViEgViTQgRh7gFgyQgHhGAEhaQABgyAJhsQAOijAJhMQAPiIAVhpQALg5AahsQAUhSAOhAQBLlrgqltIAqgFQArF1hNFwQgLA2gXBeQgaBtgKA2QgVBpgPCFQgJBRgNCdQgJBngCA0QgDBXAHBEQAQCmAyErQA8FrAjAwIgiAZQgrg7g/mCg");
	this.shape_3.setTransform(-86.4629,-12.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#069264").s().p("AgvOdQgViEgViTQgRh7gFgyQgHhGAEhaQABgyAJhsQAOijAJhMQAPiIAVhpQALg5AahsQAUhSAOhAQBLlrgqltIAqgFQArF1hNFwQgLA2gXBeQgaBtgKA2QgVBpgPCFQgJBRgNCdQgJBngCA0QgDBXAHBEQAQCmAyErQA8FrAjAwIgiAZQgrg7g/mCg");
	this.shape_4.setTransform(-86.4629,-12.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#078864").s().p("AgvOdQgViEgViTQgRh7gFgyQgHhGAEhaQABgyAJhsQAOijAJhMQAPiIAVhpQALg5AahsQAUhSAOhAQBLlrgqltIAqgFQArF1hNFwQgLA2gXBeQgaBtgKA2QgVBpgPCFQgJBRgNCdQgJBngCA0QgDBXAHBEQAQCmAyErQA8FrAjAwIgiAZQgrg7g/mCg");
	this.shape_5.setTransform(-86.4629,-12.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#088164").s().p("AgvOdQgViEgViTQgRh7gFgyQgHhGAEhaQABgyAJhsQAOijAJhMQAPiIAVhpQALg5AahsQAUhSAOhAQBLlrgqltIAqgFQArF1hNFwQgLA2gXBeQgaBtgKA2QgVBpgPCFQgJBRgNCdQgJBngCA0QgDBXAHBEQAQCmAyErQA8FrAjAwIgiAZQgrg7g/mCg");
	this.shape_6.setTransform(-86.4629,-12.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#097C63").s().p("AgvOdQgViEgViTQgRh7gFgyQgHhGAEhaQABgyAJhsQAOijAJhMQAPiIAVhpQALg5AahsQAUhSAOhAQBLlrgqltIAqgFQArF1hNFwQgLA2gXBeQgaBtgKA2QgVBpgPCFQgJBRgNCdQgJBngCA0QgDBXAHBEQAQCmAyErQA8FrAjAwIgiAZQgrg7g/mCg");
	this.shape_7.setTransform(-86.4629,-12.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#097763").s().p("AgvOdQgViEgViTQgRh7gFgyQgHhGAEhaQABgyAJhsQAOijAJhMQAPiIAVhpQALg5AahsQAUhSAOhAQBLlrgqltIAqgFQArF1hNFwQgLA2gXBeQgaBtgKA2QgVBpgPCFQgJBRgNCdQgJBngCA0QgDBXAHBEQAQCmAyErQA8FrAjAwIgiAZQgrg7g/mCg");
	this.shape_8.setTransform(-86.4629,-12.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0A7463").s().p("AgvOdQgViEgViTQgRh7gFgyQgHhGAEhaQABgyAJhsQAOijAJhMQAPiIAVhpQALg5AahsQAUhSAOhAQBLlrgqltIAqgFQArF1hNFwQgLA2gXBeQgaBtgKA2QgVBpgPCFQgJBRgNCdQgJBngCA0QgDBXAHBEQAQCmAyErQA8FrAjAwIgiAZQgrg7g/mCg");
	this.shape_9.setTransform(-86.4629,-12.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0A7263").s().p("AgvOdQgViEgViTQgRh7gFgyQgHhGAEhaQABgyAJhsQAOijAJhMQAPiIAVhpQALg5AahsQAUhSAOhAQBLlrgqltIAqgFQArF1hNFwQgLA2gXBeQgaBtgKA2QgVBpgPCFQgJBRgNCdQgJBngCA0QgDBXAHBEQAQCmAyErQA8FrAjAwIgiAZQgrg7g/mCg");
	this.shape_10.setTransform(-86.4629,-12.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0A7163").s().p("AgvOdQgViEgViTQgRh7gFgyQgHhGAEhaQABgyAJhsQAOijAJhMQAPiIAVhpQALg5AahsQAUhSAOhAQBLlrgqltIAqgFQArF1hNFwQgLA2gXBeQgaBtgKA2QgVBpgPCFQgJBRgNCdQgJBngCA0QgDBXAHBEQAQCmAyErQA8FrAjAwIgiAZQgrg7g/mCg");
	this.shape_11.setTransform(-86.4629,-12.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0A7063").s().p("AgvOdQgViEgViTQgRh7gFgyQgHhGAEhaQABgyAJhsQAOijAJhMQAPiIAVhpQALg5AahsQAUhSAOhAQBLlrgqltIAqgFQArF1hNFwQgLA2gXBeQgaBtgKA2QgVBpgPCFQgJBRgNCdQgJBngCA0QgDBXAHBEQAQCmAyErQA8FrAjAwIgiAZQgrg7g/mCg");
	this.shape_12.setTransform(-86.4629,-12.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0A7063").s().p("AhEUsQgfi9gdjSQgYixgHhHQgKhlAFh/QAChJANiaQATjpANhuQAVjBAfiYQAQhRAliaQAdh2AThcQBsoHg8oKIA8gIQA+IWhuIQQgQBMghCIQgmCbgOBNQgeCWgWC/QgNB0gSDgQgMCVgDBJQgFB9AJBiQAYDtBHGsQBWIGAzBGIgxAkQg+hVhaoog");
	this.shape_13.setTransform(-86.4653,-12.3793,0.6989,0.6989);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},38).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).wait(47));

	// Layer_9 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_35 = new cjs.Graphics().p("AhfBfQgngnAAg4QAAg3AngoQAognA3AAQA4AAAnAnQAoAoAAA3QAAA4goAnQgnAog4AAQg3AAgogog");
	var mask_1_graphics_36 = new cjs.Graphics().p("AinCoQhGhGAAhiQAAhiBGhGQBFhGBiAAQBiAABGBGQBGBGAABiQAABihGBGQhGBHhigBQhiABhFhHg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AjqDsQhhhiAAiKQAAiJBhhiQBhhhCJAAQCKAABhBhQBhBiAACJQAACKhhBiQhhBhiKAAQiJAAhhhhg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AkmEoQh6h7AAitQAAitB6h6QB6h7CsAAQCtAAB6B7QB6B6AACtQAACth6B7Qh6B6itAAQisAAh6h6g");
	var mask_1_graphics_39 = new cjs.Graphics().p("AlcFeQiQiRAAjNQAAjMCQiRQCQiRDMAAQDNAACQCRQCQCRAADMQAADNiQCRQiQCRjNAAQjMAAiQiRg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AmLGOQililAAjpQAAjoClilQCkikDnAAQDpAACkCkQCkClAADoQAADpikClQikCljpAAQjnAAikilg");
	var mask_1_graphics_41 = new cjs.Graphics().p("Am1G3Qi1i1AAkCQAAkAC1i2QC1i2EAAAQEBAAC1C2QC1C2AAEAQAAECi1C1Qi1C2kBAAQkAAAi1i2g");
	var mask_1_graphics_42 = new cjs.Graphics().p("AnXHaQjEjDAAkXQAAkVDEjEQDDjEEUgBQEWABDDDEQDDDEAAEVQAAEXjDDDQjDDFkWgBQkUABjDjFg");
	var mask_1_graphics_43 = new cjs.Graphics().p("An0H3QjQjQAAknQAAklDQjRQDPjQElAAQEmAADPDQQDPDRABElQgBEnjPDQQjPDQkmAAQklAAjPjQg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AoKIOQjZjaAAk0QAAkzDZjZQDYjZEyAAQEzAADYDZQDZDZAAEzQAAE0jZDaQjYDZkzAAQkyAAjYjZg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AoaIdQjfjfAAk+QAAk8DfjgQDfjgE7AAQE9AADeDgQDfDgAAE8QAAE+jfDfQjeDgk9AAQk7AAjfjgg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AojInQjkjkAAlDQAAlCDkjkQDijkFBAAQFCAADjDkQDjDkAAFCQAAFDjjDkQjjDjlCABQlBgBjijjg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AonIqQjkjlAAlFQAAlEDkjlQDljlFCAAQFEAADkDlQDkDlAAFEQAAFFjkDlQjkDllEAAQlCAAjljlg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(35).to({graphics:mask_1_graphics_35,x:-45.7,y:-34.35}).wait(1).to({graphics:mask_1_graphics_36,x:-42.65,y:-29.6}).wait(1).to({graphics:mask_1_graphics_37,x:-39.9,y:-25.3}).wait(1).to({graphics:mask_1_graphics_38,x:-37.425,y:-21.4}).wait(1).to({graphics:mask_1_graphics_39,x:-35.175,y:-17.9}).wait(1).to({graphics:mask_1_graphics_40,x:-33.2,y:-14.8}).wait(1).to({graphics:mask_1_graphics_41,x:-31.475,y:-12.15}).wait(1).to({graphics:mask_1_graphics_42,x:-30.05,y:-9.9}).wait(1).to({graphics:mask_1_graphics_43,x:-28.85,y:-8.05}).wait(1).to({graphics:mask_1_graphics_44,x:-27.925,y:-6.6}).wait(1).to({graphics:mask_1_graphics_45,x:-27.275,y:-5.55}).wait(1).to({graphics:mask_1_graphics_46,x:-26.9,y:-4.95}).wait(1).to({graphics:mask_1_graphics_47,x:-26.75,y:-4.75}).wait(52));

	// yellow3
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C9C07F").s().p("ABCB2QgwjRgwhIQgNgUgQgVQglgxgbgyQgKgTgKgNQgRgagFgPQgIgbAJggIAvAOQgFASAEAMQACAJAOATQAKAPANAXQAbAyAhAqIAcAqQA3BRA0DiQAoCyAOCJIgxAFQgNiNgqixg");
	this.shape_14.setTransform(-19.2278,8.167,0.6989,0.6989);
	this.shape_14._off = true;

	var maskedShapeInstanceList = [this.shape_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(35).to({_off:false},0).wait(64));

	// Layer_11 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_27 = new cjs.Graphics().p("Ai0BmQhLgrAAg7QAAg7BLgqQBLgqBpAAQBqAABLAqQBLAqAAA7QAAA7hLArQhLAqhqAAQhpAAhLgqg");
	var mask_2_graphics_28 = new cjs.Graphics().p("AllFxQiWiZAAjYQAAjXCWiaQCUiZDRAAQDSAACVCZQCUCaAADXQAADYiUCZQiVCajSAAQjRAAiUiag");
	var mask_2_graphics_29 = new cjs.Graphics().p("AoDJcQjVj6AAliQAAlhDVj9QDWj6EtAAQEuAADWD6QDVD9AAFhQAAFijVD6QjWD9kuAAQktAAjWj9g");
	var mask_2_graphics_30 = new cjs.Graphics().p("AqMMrQkPlQABnbQgBnaEPlTQEPlQF9AAQF+AAEPFQQEOFTAAHaQAAHbkOFQQkPFTl+AAQl9AAkPlTg");
	var mask_2_graphics_31 = new cjs.Graphics().p("AsDPdQlAmZAApEQAApDFAmeQFAmaHDAAQHEAAFAGaQFAGeAAJDQAAJElAGZQlAGenEAAQnDAAlAmeg");
	var mask_2_graphics_32 = new cjs.Graphics().p("AtpR3QlqnZAAqeQAAqcFqnfQFqnZH/AAQIAAAFqHZQFqHfAAKcQAAKelqHZQlqHeoAAAQn/AAlqneg");
	var mask_2_graphics_33 = new cjs.Graphics().p("AvAT4QmNoOAArqQAArpGNoVQGPoOIxAAQIzAAGNIOQGPIVAALpQAALqmPIOQmNIVozAAQoxAAmPoVg");
	var mask_2_graphics_34 = new cjs.Graphics().p("AwHVlQmso8AAspQAAsoGspDQGso7JbAAQJdAAGsI7QGrJDAAMoQAAMpmrI8QmsJCpdAAQpbAAmspCg");
	var mask_2_graphics_35 = new cjs.Graphics().p("AxCW9QnFpgAAtdQAAtcHFpnQHEpgJ+AAQJ/AAHEJgQHFJngBNcQABNdnFJgQnEJnp/AAQp+AAnEpng");
	var mask_2_graphics_36 = new cjs.Graphics().p("AxxYEQnZp9AAuHQAAuGHZqFQHXp9KaAAQKbAAHYJ9QHYKFgBOGQABOHnYJ9QnYKFqbAAQqaAAnXqFg");
	var mask_2_graphics_37 = new cjs.Graphics().p("AyWY7QnnqUAAunQAAumHnqcQHnqUKvAAQKwAAHnKUQHnKcAAOmQAAOnnnKUQnnKcqwAAQqvAAnnqcg");
	var mask_2_graphics_38 = new cjs.Graphics().p("AyyZlQnzqlAAvAQAAu+HzquQHyqlLAAAQLAAAHzKlQHyKuAAO+QAAPAnyKlQnzKtrAAAQrAAAnyqtg");
	var mask_2_graphics_39 = new cjs.Graphics().p("AzGaCQn6qxgBvRQABvQH6q6QH7qxLLAAQLMAAH7KxQH6K6AAPQQAAPRn6KxQn7K7rMAAQrLAAn7q7g");
	var mask_2_graphics_40 = new cjs.Graphics().p("AzTaXQoAq6AAvdQAAvbIArDQIAq6LTAAQLUAAIAK6QIALDAAPbQAAPdoAK6QoALCrUAAQrTAAoArCg");
	var mask_2_graphics_41 = new cjs.Graphics().p("AzbaiQoEq+AAvkQAAvjIErHQIEq/LXAAQLZAAIDK/QIELHAAPjQAAPkoEK+QoDLIrZAAQrXAAoErIg");
	var mask_2_graphics_42 = new cjs.Graphics().p("AzgapQoErCAAvnQAAvmIErKQIGrCLaAAQLbAAIFLCQIGLKgBPmQABPnoGLCQoFLKrbAAQraAAoGrKg");
	var mask_2_graphics_43 = new cjs.Graphics().p("AzgarQoHrCAAvpQAAvoIHrLQIFrCLbAAQLcAAIGLCQIFLLABPoQgBPpoFLCQoGLLrcAAQrbAAoFrLg");
	var mask_2_graphics_44 = new cjs.Graphics().p("AzhasQoGrDAAvpQAAvoIGrLQIGrCLbAAQLcAAIGLCQIGLLAAPoQAAPpoGLDQoGLLrcgBQrbABoGrLg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_2_graphics_27,x:13.2,y:-159.4}).wait(1).to({graphics:mask_2_graphics_28,x:9.2,y:-151.825}).wait(1).to({graphics:mask_2_graphics_29,x:5.675,y:-145.125}).wait(1).to({graphics:mask_2_graphics_30,x:2.6,y:-139.275}).wait(1).to({graphics:mask_2_graphics_31,x:-0.075,y:-134.2}).wait(1).to({graphics:mask_2_graphics_32,x:-2.375,y:-129.85}).wait(1).to({graphics:mask_2_graphics_33,x:-4.3,y:-126.15}).wait(1).to({graphics:mask_2_graphics_34,x:-5.925,y:-123.075}).wait(1).to({graphics:mask_2_graphics_35,x:-7.25,y:-120.575}).wait(1).to({graphics:mask_2_graphics_36,x:-8.3,y:-118.55}).wait(1).to({graphics:mask_2_graphics_37,x:-9.125,y:-116.975}).wait(1).to({graphics:mask_2_graphics_38,x:-9.75,y:-115.825}).wait(1).to({graphics:mask_2_graphics_39,x:-10.2,y:-114.95}).wait(1).to({graphics:mask_2_graphics_40,x:-10.475,y:-114.4}).wait(1).to({graphics:mask_2_graphics_41,x:-10.675,y:-114.05}).wait(1).to({graphics:mask_2_graphics_42,x:-10.75,y:-113.875}).wait(1).to({graphics:mask_2_graphics_43,x:-10.8,y:-113.8}).wait(1).to({graphics:mask_2_graphics_44,x:-10.8,y:-113.8}).wait(55));

	// yellow2
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC00").s().p("Aqad6QATgJAqhPQBGiCBukcQBDitBLjTIA+ixQAPgtAIg6QAFgjAFhKQAFhQAOhSQANg9AchIQARgtAkhSQAqhdASgyQAkhkAYiGQANhQAUiiQAUimAKg4QA0k+CZl0QBbjdDWmsIAxAZQjUGohaDaQiXFwg0E5QgLBEgSCYQgUCkgOBSQgZCJgmBoQgOApguBqQgmBUgPAoQgaBEgMA5QgNBNgFBOQgFBMgFAlQgJA/gRAxIg+CzQhLDThDCuQh9FAhKB/QgoBGgfAPg");
	this.shape_15.setTransform(-19.397,-54.3628,0.6989,0.6989);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F2C920").s().p("AnSU6QAPgHAdg3QAxhbBNjGQAuh5A1iTIArh8QALgfAFgpQAEgYADg0QADg4ALg5QAIgrAUgzQAMgfAZg5QAdhBANgjQAYhGARheQAKg3ANhxQAPh0AGgnQAljfBrkEQA/iaCWkrIAjARQiVEog/CZQhqEBgkDbQgIAvgMBqQgOBzgKA5QgRBggaBJQgLAcggBKQgaA7gKAcQgTAvgIAoQgJA2gDA2QgFA1gDAaQgGAtgLAiIgsB9Qg0CTgvB6QhYDggzBYQgcAxgWAKg");
	this.shape_16.setTransform(-19.4,-54.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E7C739").s().p("AnSU6QAPgHAdg3QAxhbBNjGQAuh5A1iTIArh8QALgfAFgpQAEgYADg0QADg4ALg5QAIgrAUgzQAMgfAZg5QAdhBANgjQAYhGARheQAKg3ANhxQAPh0AGgnQAljfBrkEQA/iaCWkrIAjARQiVEog/CZQhqEBgkDbQgIAvgMBqQgOBzgKA5QgRBggaBJQgLAcggBKQgaA7gKAcQgTAvgIAoQgJA2gDA2QgFA1gDAaQgGAtgLAiIgsB9Qg0CTgvB6QhYDggzBYQgcAxgWAKg");
	this.shape_17.setTransform(-19.4,-54.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DEC54E").s().p("AnSU6QAPgHAdg3QAxhbBNjGQAuh5A1iTIArh8QALgfAFgpQAEgYADg0QADg4ALg5QAIgrAUgzQAMgfAZg5QAdhBANgjQAYhGARheQAKg3ANhxQAPh0AGgnQAljfBrkEQA/iaCWkrIAjARQiVEog/CZQhqEBgkDbQgIAvgMBqQgOBzgKA5QgRBggaBJQgLAcggBKQgaA7gKAcQgTAvgIAoQgJA2gDA2QgFA1gDAaQgGAtgLAiIgsB9Qg0CTgvB6QhYDggzBYQgcAxgWAKg");
	this.shape_18.setTransform(-19.4,-54.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D7C35E").s().p("AnSU6QAPgHAdg3QAxhbBNjGQAuh5A1iTIArh8QALgfAFgpQAEgYADg0QADg4ALg5QAIgrAUgzQAMgfAZg5QAdhBANgjQAYhGARheQAKg3ANhxQAPh0AGgnQAljfBrkEQA/iaCWkrIAjARQiVEog/CZQhqEBgkDbQgIAvgMBqQgOBzgKA5QgRBggaBJQgLAcggBKQgaA7gKAcQgTAvgIAoQgJA2gDA2QgFA1gDAaQgGAtgLAiIgsB9Qg0CTgvB6QhYDggzBYQgcAxgWAKg");
	this.shape_19.setTransform(-19.4,-54.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D2C26A").s().p("AnSU6QAPgHAdg3QAxhbBNjGQAuh5A1iTIArh8QALgfAFgpQAEgYADg0QADg4ALg5QAIgrAUgzQAMgfAZg5QAdhBANgjQAYhGARheQAKg3ANhxQAPh0AGgnQAljfBrkEQA/iaCWkrIAjARQiVEog/CZQhqEBgkDbQgIAvgMBqQgOBzgKA5QgRBggaBJQgLAcggBKQgaA7gKAcQgTAvgIAoQgJA2gDA2QgFA1gDAaQgGAtgLAiIgsB9Qg0CTgvB6QhYDggzBYQgcAxgWAKg");
	this.shape_20.setTransform(-19.4,-54.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CEC173").s().p("AnSU6QAPgHAdg3QAxhbBNjGQAuh5A1iTIArh8QALgfAFgpQAEgYADg0QADg4ALg5QAIgrAUgzQAMgfAZg5QAdhBANgjQAYhGARheQAKg3ANhxQAPh0AGgnQAljfBrkEQA/iaCWkrIAjARQiVEog/CZQhqEBgkDbQgIAvgMBqQgOBzgKA5QgRBggaBJQgLAcggBKQgaA7gKAcQgTAvgIAoQgJA2gDA2QgFA1gDAaQgGAtgLAiIgsB9Qg0CTgvB6QhYDggzBYQgcAxgWAKg");
	this.shape_21.setTransform(-19.4,-54.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCC179").s().p("AnSU6QAPgHAdg3QAxhbBNjGQAuh5A1iTIArh8QALgfAFgpQAEgYADg0QADg4ALg5QAIgrAUgzQAMgfAZg5QAdhBANgjQAYhGARheQAKg3ANhxQAPh0AGgnQAljfBrkEQA/iaCWkrIAjARQiVEog/CZQhqEBgkDbQgIAvgMBqQgOBzgKA5QgRBggaBJQgLAcggBKQgaA7gKAcQgTAvgIAoQgJA2gDA2QgFA1gDAaQgGAtgLAiIgsB9Qg0CTgvB6QhYDggzBYQgcAxgWAKg");
	this.shape_22.setTransform(-19.4,-54.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CAC07C").s().p("AnSU6QAPgHAdg3QAxhbBNjGQAuh5A1iTIArh8QALgfAFgpQAEgYADg0QADg4ALg5QAIgrAUgzQAMgfAZg5QAdhBANgjQAYhGARheQAKg3ANhxQAPh0AGgnQAljfBrkEQA/iaCWkrIAjARQiVEog/CZQhqEBgkDbQgIAvgMBqQgOBzgKA5QgRBggaBJQgLAcggBKQgaA7gKAcQgTAvgIAoQgJA2gDA2QgFA1gDAaQgGAtgLAiIgsB9Qg0CTgvB6QhYDggzBYQgcAxgWAKg");
	this.shape_23.setTransform(-19.4,-54.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C9C07E").s().p("AnSU6QAPgHAdg3QAxhbBNjGQAuh5A1iTIArh8QALgfAFgpQAEgYADg0QADg4ALg5QAIgrAUgzQAMgfAZg5QAdhBANgjQAYhGARheQAKg3ANhxQAPh0AGgnQAljfBrkEQA/iaCWkrIAjARQiVEog/CZQhqEBgkDbQgIAvgMBqQgOBzgKA5QgRBggaBJQgLAcggBKQgaA7gKAcQgTAvgIAoQgJA2gDA2QgFA1gDAaQgGAtgLAiIgsB9Qg0CTgvB6QhYDggzBYQgcAxgWAKg");
	this.shape_24.setTransform(-19.4,-54.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C9C07F").s().p("AnSU6QAPgHAdg3QAxhbBNjGQAuh5A1iTIArh8QALgfAFgpQAEgYADg0QADg4ALg5QAIgrAUgzQAMgfAZg5QAdhBANgjQAYhGARheQAKg3ANhxQAPh0AGgnQAljfBrkEQA/iaCWkrIAjARQiVEog/CZQhqEBgkDbQgIAvgMBqQgOBzgKA5QgRBggaBJQgLAcggBKQgaA7gKAcQgTAvgIAoQgJA2gDA2QgFA1gDAaQgGAtgLAiIgsB9Qg0CTgvB6QhYDggzBYQgcAxgWAKg");
	this.shape_25.setTransform(-19.4,-54.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C9C07F").s().p("Aqad6QATgJAqhPQBGiCBukcQBDitBLjTIA+ixQAPgtAIg6QAFgjAFhKQAFhQAOhSQANg9AchIQARgtAkhSQAqhdASgyQAkhkAYiGQANhQAUiiQAUimAKg4QA0k+CZl0QBbjdDWmsIAxAZQjUGohaDaQiXFwg0E5QgLBEgSCYQgUCkgOBSQgZCJgmBoQgOApguBqQgmBUgPAoQgaBEgMA5QgNBNgFBOQgFBMgFAlQgJA/gRAxIg+CzQhLDThDCuQh9FAhKB/QgoBGgfAPg");
	this.shape_26.setTransform(-19.397,-54.3628,0.6989,0.6989);

	var maskedShapeInstanceList = [this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15}]},27).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).wait(61));

	// Layer_13 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_24 = new cjs.Graphics().p("AjICfQhThCAAhdQAAhcBThBQBThCB1AAQB1AABTBCQBUBBAABcQAABdhUBCQhTBBh1AAQh1AAhThBg");
	var mask_3_graphics_25 = new cjs.Graphics().p("AkOEcQhvh2AAimQAAimBvh0QBxh1CdAAQCeAABwB1QBwB0AACmQAACmhwB2QhwB0ieABQidgBhxh0g");
	var mask_3_graphics_26 = new cjs.Graphics().p("AlMGMQiKikAAjoQAAjnCKikQCKikDCAAQDDAACKCkQCKCkAADnQAADoiKCkQiKCkjDAAQjCAAiKikg");
	var mask_3_graphics_27 = new cjs.Graphics().p("AmFHyQihjOAAkkQAAkjChjNQCijODjAAQDkAAChDOQCiDNAAEjQAAEkiiDOQihDMjkAAQjjAAiijMg");
	var mask_3_graphics_28 = new cjs.Graphics().p("Am4JMQi1jzAAlZQAAlYC1jzQC3jzEBAAQEBAAC2DzQC3DzAAFYQAAFZi3DzQi2DzkBAAQkBAAi3jzg");
	var mask_3_graphics_29 = new cjs.Graphics().p("AnlKdQjIkVAAmIQAAmHDIkUQDKkVEbAAQEbAADJEVQDKEUAAGHQAAGIjKEVQjJEUkbAAQkbAAjKkUg");
	var mask_3_graphics_30 = new cjs.Graphics().p("AoMLkQjZkyAAmyQAAmxDZkyQDakyEyAAQEzAADZEyQDaEyAAGxQAAGyjaEyQjZEykzAAQkyAAjakyg");
	var mask_3_graphics_31 = new cjs.Graphics().p("AowMjQjnlLAAnYQAAnWDnlMQDplMFHAAQFIAADnFMQDpFMAAHWQAAHYjpFLQjnFMlIAAQlHAAjplMg");
	var mask_3_graphics_32 = new cjs.Graphics().p("ApPNbQjzljAAn4QAAn3DzljQD3liFYAAQFaAADzFiQD2FjABH3QgBH4j2FjQjzFilaAAQlYAAj3lig");
	var mask_3_graphics_33 = new cjs.Graphics().p("ApqOLQj/l3AAoUQAAoTD/l3QECl3FoAAQFpAAEAF3QEBF3AAITQAAIUkBF3QkAF3lpAAQloAAkCl3g");
	var mask_3_graphics_34 = new cjs.Graphics().p("AqBO1QkJmIAAotQAAorEJmJQELmIF2AAQF3AAEJGIQELGJAAIrQAAItkLGIQkJGIl3AAQl2AAkLmIg");
	var mask_3_graphics_35 = new cjs.Graphics().p("AqVPZQkRmXAApCQAApBERmXQETmXGCAAQGDAAERGXQETGXAAJBQAAJCkTGXQkRGXmDAAQmCAAkTmXg");
	var mask_3_graphics_36 = new cjs.Graphics().p("AqmP4QkYmkAApUQAApTEYmkQEamkGMAAQGNAAEYGkQEbGkAAJTQAAJUkbGkQkYGkmNAAQmMAAkamkg");
	var mask_3_graphics_37 = new cjs.Graphics().p("Aq1QSQkemuAApkQAApjEemuQEhmuGUgBQGWABEeGuQEgGuAAJjQAAJkkgGuQkeGumWAAQmUAAkhmug");
	var mask_3_graphics_38 = new cjs.Graphics().p("ArBQoQkjm4AApwQAApvEjm4QEmm4GbAAQGdAAEjG4QElG4AAJvQAAJwklG4QkjG4mdgBQmbABkmm4g");
	var mask_3_graphics_39 = new cjs.Graphics().p("ArLQ6Qkom/AAp7QAAp6Eom/QEqm/GhAAQGiAAEoG/QEpG/ABJ6QgBJ7kpG/QkoG/miAAQmhAAkqm/g");
	var mask_3_graphics_40 = new cjs.Graphics().p("ArTRJQkrnFAAqEQAAqDErnEQEtnGGmAAQGnAAErHGQEtHEAAKDQAAKEktHFQkrHFmnAAQmmAAktnFg");
	var mask_3_graphics_41 = new cjs.Graphics().p("AraRVQkunKAAqLQAAqKEunKQEwnKGqAAQGrAAEuHKQEwHKAAKKQAAKLkwHKQkuHKmrAAQmqAAkwnKg");
	var mask_3_graphics_42 = new cjs.Graphics().p("ArfReQkwnOAAqQQAAqPEwnOQExnOGuAAQGuAAEwHOQEyHOAAKPQAAKQkyHOQkwHOmuAAQmuAAkxnOg");
	var mask_3_graphics_43 = new cjs.Graphics().p("ArjRmQkynSAAqUQAAqUEynQQE0nSGvAAQGxAAExHSQE0HQAAKUQAAKUk0HSQkxHRmxAAQmvAAk0nRg");
	var mask_3_graphics_44 = new cjs.Graphics().p("ArmRrQk0nTABqYQgBqXE0nTQE1nUGxAAQGyAAE0HUQE1HTgBKXQABKYk1HTQk0HUmyAAQmxAAk1nUg");
	var mask_3_graphics_45 = new cjs.Graphics().p("ArpRwQk0nWAAqaQAAqZE0nVQE2nWGzAAQG0AAEzHWQE2HVAAKZQAAKak2HWQkzHVm0AAQmzAAk2nVg");
	var mask_3_graphics_46 = new cjs.Graphics().p("ArrRyQk0nWAAqcQAAqbE0nXQE3nWG0AAQG1AAE0HWQE3HXAAKbQAAKck3HWQk0HXm1AAQm0AAk3nXg");
	var mask_3_graphics_47 = new cjs.Graphics().p("ArsR1Qk1nYAAqdQAAqcE1nYQE3nXG1AAQG2AAE0HXQE4HYAAKcQAAKdk4HYQk0HXm2AAQm1AAk3nXg");
	var mask_3_graphics_48 = new cjs.Graphics().p("ArsR2Qk2nYAAqeQAAqdE2nYQE3nYG1AAQG2AAE1HYQE4HYAAKdQAAKek4HYQk1HYm2AAQm1AAk3nYg");
	var mask_3_graphics_49 = new cjs.Graphics().p("ArtR3Qk1nYAAqfQAAqeE1nYQE4nYG1AAQG2AAE2HYQE3HYAAKeQAAKfk3HYQk2HYm2AAQm1AAk4nYg");
	var mask_3_graphics_50 = new cjs.Graphics().p("ArtR3Qk2nYAAqfQAAqeE2nYQE3nYG2AAQG2AAE2HYQE4HYAAKeQAAKfk4HYQk2HZm2AAQm2AAk3nZg");
	var mask_3_graphics_51 = new cjs.Graphics().p("ArtR3Qk2nYAAqfQAAqeE2nYQE3nZG2AAQG2AAE2HZQE4HYAAKeQAAKfk4HYQk2HZm2AAQm2AAk3nZg");
	var mask_3_graphics_52 = new cjs.Graphics().p("ArtR4Qk2nZAAqfQAAqeE2nYQE3nZG2AAQG2AAE2HZQE4HYAAKeQAAKfk4HZQk2HYm2AAQm2AAk3nYg");
	var mask_3_graphics_53 = new cjs.Graphics().p("ArtR4Qk2nZAAqfQAAqeE2nYQE3nZG2AAQG2AAE2HZQE4HYAAKeQAAKfk4HZQk2HYm2AAQm2AAk3nYg");
	var mask_3_graphics_54 = new cjs.Graphics().p("ArtR4Qk2nZAAqfQAAqeE2nYQE3nZG2AAQG2AAE2HZQE4HYAAKeQAAKfk4HZQk2HYm2AAQm2AAk3nYg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(24).to({graphics:mask_3_graphics_24,x:-112,y:-158.6}).wait(1).to({graphics:mask_3_graphics_25,x:-115.175,y:-140.35}).wait(1).to({graphics:mask_3_graphics_26,x:-118.05,y:-123.875}).wait(1).to({graphics:mask_3_graphics_27,x:-120.625,y:-109.1}).wait(1).to({graphics:mask_3_graphics_28,x:-122.925,y:-95.875}).wait(1).to({graphics:mask_3_graphics_29,x:-124.975,y:-84.075}).wait(1).to({graphics:mask_3_graphics_30,x:-126.825,y:-73.625}).wait(1).to({graphics:mask_3_graphics_31,x:-128.425,y:-64.4}).wait(1).to({graphics:mask_3_graphics_32,x:-129.85,y:-56.275}).wait(1).to({graphics:mask_3_graphics_33,x:-131.075,y:-49.225}).wait(1).to({graphics:mask_3_graphics_34,x:-132.125,y:-43.1}).wait(1).to({graphics:mask_3_graphics_35,x:-133.075,y:-37.8}).wait(1).to({graphics:mask_3_graphics_36,x:-133.85,y:-33.3}).wait(1).to({graphics:mask_3_graphics_37,x:-134.5,y:-29.5}).wait(1).to({graphics:mask_3_graphics_38,x:-135.075,y:-26.3}).wait(1).to({graphics:mask_3_graphics_39,x:-135.55,y:-23.65}).wait(1).to({graphics:mask_3_graphics_40,x:-135.925,y:-21.5}).wait(1).to({graphics:mask_3_graphics_41,x:-136.225,y:-19.725}).wait(1).to({graphics:mask_3_graphics_42,x:-136.45,y:-18.325}).wait(1).to({graphics:mask_3_graphics_43,x:-136.65,y:-17.25}).wait(1).to({graphics:mask_3_graphics_44,x:-136.8,y:-16.425}).wait(1).to({graphics:mask_3_graphics_45,x:-136.9,y:-15.825}).wait(1).to({graphics:mask_3_graphics_46,x:-136.975,y:-15.375}).wait(1).to({graphics:mask_3_graphics_47,x:-137.025,y:-15.075}).wait(1).to({graphics:mask_3_graphics_48,x:-137.075,y:-14.875}).wait(1).to({graphics:mask_3_graphics_49,x:-137.075,y:-14.75}).wait(1).to({graphics:mask_3_graphics_50,x:-137.075,y:-14.7}).wait(1).to({graphics:mask_3_graphics_51,x:-137.1,y:-14.675}).wait(1).to({graphics:mask_3_graphics_52,x:-137.1,y:-14.65}).wait(1).to({graphics:mask_3_graphics_53,x:-137.1,y:-14.65}).wait(1).to({graphics:mask_3_graphics_54,x:-137.1,y:-14.65}).wait(45));

	// mainyellow
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCC00").s().p("Ah8edQAWi2gboaQgQk4grpfQgWkvgEhQQgNj8Apj4QApj4BejrQASgrAvhsQAohaAUgyQAghOAUhBQAghtAFhjQAGiDgshoIAzgVQAqBjABB7QABB7gpCHQgVBEggBPQgWA2goBYQgxBwgPAmQhbDkgpDyQgoDzAND1QAEBSAWEtQAsJoAPEzQAbIegWC4g");
	this.shape_27.setTransform(-120.2267,-17.7954,0.6989,0.6989);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FACB0C").s().p("AhWVSQAPh/gTl4QgLjbgemnIgTkMQgJiwAdiuQAditBCijQAMgfAghLQAdg/AOgjQAWg3AOgtQAWhMAEhFQAEhcgfhIIAkgPQAdBFABBWQAABVgcBfQgPAwgWA4IgsBjIgsBoQhACggcCpQgcCqAJCrQADA4APDTQAfGuALDXQASF6gPCCg");
	this.shape_28.setTransform(-120.2311,-17.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F5CA17").s().p("AhWVSQAPh/gTl4QgLjbgemnIgTkMQgJiwAdiuQAditBCijQAMgfAghLQAdg/AOgjQAWg3AOgtQAWhMAEhFQAEhcgfhIIAkgPQAdBFABBWQAABVgcBfQgPAwgWA4IgsBjIgsBoQhACggcCpQgcCqAJCrQADA4APDTQAfGuALDXQASF6gPCCg");
	this.shape_29.setTransform(-120.2311,-17.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F1C922").s().p("AhWVSQAPh/gTl4QgLjbgemnIgTkMQgJiwAdiuQAditBCijQAMgfAghLQAdg/AOgjQAWg3AOgtQAWhMAEhFQAEhcgfhIIAkgPQAdBFABBWQAABVgcBfQgPAwgWA4IgsBjIgsBoQhACggcCpQgcCqAJCrQADA4APDTQAfGuALDXQASF6gPCCg");
	this.shape_30.setTransform(-120.2311,-17.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#ECC82C").s().p("AhWVSQAPh/gTl4QgLjbgemnIgTkMQgJiwAdiuQAditBCijQAMgfAghLQAdg/AOgjQAWg3AOgtQAWhMAEhFQAEhcgfhIIAkgPQAdBFABBWQAABVgcBfQgPAwgWA4IgsBjIgsBoQhACggcCpQgcCqAJCrQADA4APDTQAfGuALDXQASF6gPCCg");
	this.shape_31.setTransform(-120.2311,-17.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E8C735").s().p("AhWVSQAPh/gTl4QgLjbgemnIgTkMQgJiwAdiuQAditBCijQAMgfAghLQAdg/AOgjQAWg3AOgtQAWhMAEhFQAEhcgfhIIAkgPQAdBFABBWQAABVgcBfQgPAwgWA4IgsBjIgsBoQhACggcCpQgcCqAJCrQADA4APDTQAfGuALDXQASF6gPCCg");
	this.shape_32.setTransform(-120.2311,-17.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E5C63E").s().p("AhWVSQAPh/gTl4QgLjbgemnIgTkMQgJiwAdiuQAditBCijQAMgfAghLQAdg/AOgjQAWg3AOgtQAWhMAEhFQAEhcgfhIIAkgPQAdBFABBWQAABVgcBfQgPAwgWA4IgsBjIgsBoQhACggcCpQgcCqAJCrQADA4APDTQAfGuALDXQASF6gPCCg");
	this.shape_33.setTransform(-120.2311,-17.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E1C547").s().p("AhWVSQAPh/gTl4QgLjbgemnIgTkMQgJiwAdiuQAditBCijQAMgfAghLQAdg/AOgjQAWg3AOgtQAWhMAEhFQAEhcgfhIIAkgPQAdBFABBWQAABVgcBfQgPAwgWA4IgsBjIgsBoQhACggcCpQgcCqAJCrQADA4APDTQAfGuALDXQASF6gPCCg");
	this.shape_34.setTransform(-120.2311,-17.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DEC54E").s().p("AhWVSQAPh/gTl4QgLjbgemnIgTkMQgJiwAdiuQAditBCijQAMgfAghLQAdg/AOgjQAWg3AOgtQAWhMAEhFQAEhcgfhIIAkgPQAdBFABBWQAABVgcBfQgPAwgWA4IgsBjIgsBoQhACggcCpQgcCqAJCrQADA4APDTQAfGuALDXQASF6gPCCg");
	this.shape_35.setTransform(-120.2311,-17.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DBC456").s().p("AhWVSQAPh/gTl4QgLjbgemnIgTkMQgJiwAdiuQAditBCijQAMgfAghLQAdg/AOgjQAWg3AOgtQAWhMAEhFQAEhcgfhIIAkgPQAdBFABBWQAABVgcBfQgPAwgWA4IgsBjIgsBoQhACggcCpQgcCqAJCrQADA4APDTQAfGuALDXQASF6gPCCg");
	this.shape_36.setTransform(-120.2311,-17.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D8C35C").s().p("AhWVSQAPh/gTl4QgLjbgemnIgTkMQgJiwAdiuQAditBCijQAMgfAghLQAdg/AOgjQAWg3AOgtQAWhMAEhFQAEhcgfhIIAkgPQAdBFABBWQAABVgcBfQgPAwgWA4IgsBjIgsBoQhACggcCpQgcCqAJCrQADA4APDTQAfGuALDXQASF6gPCCg");
	this.shape_37.setTransform(-120.2311,-17.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D5C362").s().p("AhWVSQAPh/gTl4QgLjbgemnIgTkMQgJiwAdiuQAditBCijQAMgfAghLQAdg/AOgjQAWg3AOgtQAWhMAEhFQAEhcgfhIIAkgPQAdBFABBWQAABVgcBfQgPAwgWA4IgsBjIgsBoQhACggcCpQgcCqAJCrQADA4APDTQAfGuALDXQASF6gPCCg");
	this.shape_38.setTransform(-120.2311,-17.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D3C268").s().p("AhWVSQAPh/gTl4QgLjbgemnIgTkMQgJiwAdiuQAditBCijQAMgfAghLQAdg/AOgjQAWg3AOgtQAWhMAEhFQAEhcgfhIIAkgPQAdBFABBWQAABVgcBfQgPAwgWA4IgsBjIgsBoQhACggcCpQgcCqAJCrQADA4APDTQAfGuALDXQASF6gPCCg");
	this.shape_39.setTransform(-120.2311,-17.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D1C26D").s().p("AhWVSQAPh/gTl4QgLjbgemnIgTkMQgJiwAdiuQAditBCijQAMgfAghLQAdg/AOgjQAWg3AOgtQAWhMAEhFQAEhcgfhIIAkgPQAdBFABBWQAABVgcBfQgPAwgWA4IgsBjIgsBoQhACggcCpQgcCqAJCrQADA4APDTQAfGuALDXQASF6gPCCg");
	this.shape_40.setTransform(-120.2311,-17.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CFC171").s().p("AhWVSQAPh/gTl4QgLjbgemnIgTkMQgJiwAdiuQAditBCijQAMgfAghLQAdg/AOgjQAWg3AOgtQAWhMAEhFQAEhcgfhIIAkgPQAdBFABBWQAABVgcBfQgPAwgWA4IgsBjIgsBoQhACggcCpQgcCqAJCrQADA4APDTQAfGuALDXQASF6gPCCg");
	this.shape_41.setTransform(-120.2311,-17.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CDC175").s().p("AhWVSQAPh/gTl4QgLjbgemnIgTkMQgJiwAdiuQAditBCijQAMgfAghLQAdg/AOgjQAWg3AOgtQAWhMAEhFQAEhcgfhIIAkgPQAdBFABBWQAABVgcBfQgPAwgWA4IgsBjIgsBoQhACggcCpQgcCqAJCrQADA4APDTQAfGuALDXQASF6gPCCg");
	this.shape_42.setTransform(-120.2311,-17.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CCC178").s().p("AhWVSQAPh/gTl4QgLjbgemnIgTkMQgJiwAdiuQAditBCijQAMgfAghLQAdg/AOgjQAWg3AOgtQAWhMAEhFQAEhcgfhIIAkgPQAdBFABBWQAABVgcBfQgPAwgWA4IgsBjIgsBoQhACggcCpQgcCqAJCrQADA4APDTQAfGuALDXQASF6gPCCg");
	this.shape_43.setTransform(-120.2311,-17.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CBC07A").s().p("AhWVSQAPh/gTl4QgLjbgemnIgTkMQgJiwAdiuQAditBCijQAMgfAghLQAdg/AOgjQAWg3AOgtQAWhMAEhFQAEhcgfhIIAkgPQAdBFABBWQAABVgcBfQgPAwgWA4IgsBjIgsBoQhACggcCpQgcCqAJCrQADA4APDTQAfGuALDXQASF6gPCCg");
	this.shape_44.setTransform(-120.2311,-17.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CAC07C").s().p("AhWVSQAPh/gTl4QgLjbgemnIgTkMQgJiwAdiuQAditBCijQAMgfAghLQAdg/AOgjQAWg3AOgtQAWhMAEhFQAEhcgfhIIAkgPQAdBFABBWQAABVgcBfQgPAwgWA4IgsBjIgsBoQhACggcCpQgcCqAJCrQADA4APDTQAfGuALDXQASF6gPCCg");
	this.shape_45.setTransform(-120.2311,-17.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C9C07E").s().p("AhWVSQAPh/gTl4QgLjbgemnIgTkMQgJiwAdiuQAditBCijQAMgfAghLQAdg/AOgjQAWg3AOgtQAWhMAEhFQAEhcgfhIIAkgPQAdBFABBWQAABVgcBfQgPAwgWA4IgsBjIgsBoQhACggcCpQgcCqAJCrQADA4APDTQAfGuALDXQASF6gPCCg");
	this.shape_46.setTransform(-120.2311,-17.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C9C07F").s().p("AhWVSQAPh/gTl4QgLjbgemnIgTkMQgJiwAdiuQAditBCijQAMgfAghLQAdg/AOgjQAWg3AOgtQAWhMAEhFQAEhcgfhIIAkgPQAdBFABBWQAABVgcBfQgPAwgWA4IgsBjIgsBoQhACggcCpQgcCqAJCrQADA4APDTQAfGuALDXQASF6gPCCg");
	this.shape_47.setTransform(-120.2311,-17.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#C9C07F").s().p("Ah8edQAWi2gboaQgQk4grpfQgWkvgEhQQgNj8Apj4QApj4BejrQASgrAvhsQAohaAUgyQAghOAUhBQAghtAFhjQAGiDgshoIAzgVQAqBjABB7QABB7gpCHQgVBEggBPQgWA2goBYQgxBwgPAmQhbDkgpDyQgoDzAND1QAEBSAWEtQAsJoAPEzQAbIegWC4g");
	this.shape_48.setTransform(-120.2267,-17.7954,0.6989,0.6989);

	var maskedShapeInstanceList = [this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27}]},24).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).wait(54));

	// Layer_1
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#929393").s().p("AgFBPIAAidIALAAIAACdg");
	this.shape_49.setTransform(-69.6794,-150.3153,0.6989,0.6989);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#929393").s().p("AgdApQgWgeAAgwIAEgtIANADIgFApQABAsATAcQAXAhAwADIgBANQg1gGgbgkg");
	this.shape_50.setTransform(29.4703,-150.1406,0.6989,0.6989);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#929393").s().p("AgFBAIAAh+IALAAIAAB+g");
	this.shape_51.setTransform(-14.3129,-160.2565,0.6989,0.6989);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#929393").s().p("AgFBPIAAidIALAAIAACdg");
	this.shape_52.setTransform(-30.4563,-150.3153,0.6989,0.6989);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#929393").s().p("AnFC2QhdgBgvgDQhPgGg9gSQhvgfh5hfQiAhjgvhoIAcgMQArBgB7BfQB0BbBpAeQA7ARBMAFQAuAEBcAAIY5AHIAAAeg");
	this.shape_53.setTransform(-27.0145,-178.0597,0.6989,0.6989);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#929393").s().p("AxQAGIAAgLMAihAAAIAAALg");
	this.shape_54.setTransform(-25.9837,-155.8362,0.6989,0.6989);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#929393").s().p("AxQAGIAAgLMAihAAAIAAALg");
	this.shape_55.setTransform(-27.4163,-144.7944,0.6989,0.6989);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]}).wait(99));

	// Layer_16
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AgDEQIAAofIAHAAIAAIfg");
	this.shape_56.setTransform(-82.375,-141.825);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#454545").s().p("AgDFXIAAqsIAHAAIAAKsg");
	this.shape_57.setTransform(-82.375,-134.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#555555").s().p("AgDGSIAAsjIAHAAIAAMjg");
	this.shape_58.setTransform(-82.375,-128.875);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#616262").s().p("AgDHDIAAuFIAHAAIAAOFg");
	this.shape_59.setTransform(-82.375,-123.95);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#6C6C6C").s().p("AgDHsIAAvXIAHAAIAAPXg");
	this.shape_60.setTransform(-82.375,-119.875);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#747575").s().p("AgDINIAAwZIAHAAIAAQZg");
	this.shape_61.setTransform(-82.375,-116.55);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#7B7C7C").s().p("AgDIoIAAxPIAHAAIAARPg");
	this.shape_62.setTransform(-82.375,-113.825);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#818282").s().p("AgDI+IAAx7IAHAAIAAR7g");
	this.shape_63.setTransform(-82.375,-111.675);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#858686").s().p("AgDJPIAAydIAHAAIAASdg");
	this.shape_64.setTransform(-82.375,-109.95);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#898A8A").s().p("AgDJcIAAy3IAHAAIAAS3g");
	this.shape_65.setTransform(-82.375,-108.625);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#8C8D8D").s().p("AgDJmIAAzLIAHAAIAATLg");
	this.shape_66.setTransform(-82.375,-107.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#8E8F8F").s().p("AgDJuIAAzbIAHAAIAATbg");
	this.shape_67.setTransform(-82.375,-106.825);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#8F9090").s().p("AgDJ0IAAznIAHAAIAATng");
	this.shape_68.setTransform(-82.375,-106.275);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#909191").s().p("AgDJ4IAAzvIAHAAIAATvg");
	this.shape_69.setTransform(-82.375,-105.875);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#919292").s().p("AgDJ7IAAz1IAHAAIAAT1g");
	this.shape_70.setTransform(-82.375,-105.575);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#919292").s().p("AgDJ8IAAz3IAHAAIAAT3g");
	this.shape_71.setTransform(-82.375,-105.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#929393").s().p("AgDJ+IAAz7IAHAAIAAT7g");
	this.shape_72.setTransform(-82.375,-105.275);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#929393").s().p("AgDJ/IAAz8IAHAAIAAT8g");
	this.shape_73.setTransform(-82.375,-105.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#929393").s().p("AgDJ/IAAz9IAHAAIAAT9g");
	this.shape_74.setTransform(-82.375,-105.15);
	this.shape_74._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_56}]},13).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.shape_74).wait(31).to({_off:false},0).wait(2).to({y:-105.125},0).wait(66));

	// Layer_17
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#333333").s().p("AgVAnIAAhNIArAAIAABNg");
	this.shape_75.setTransform(34.5,74.125);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#464646").s().p("AgVCMIAAkXIArAAIAAEXg");
	this.shape_76.setTransform(34.5,64.025);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#565656").s().p("AgVDgIAAm/IArAAIAAG/g");
	this.shape_77.setTransform(34.5,55.625);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#636363").s().p("AgVEmIAApLIArAAIAAJLg");
	this.shape_78.setTransform(34.5,48.675);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#6D6E6E").s().p("AgVFfIAAq9IArAAIAAK9g");
	this.shape_79.setTransform(34.5,42.975);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#767777").s().p("AgVGNIAAsZIArAAIAAMZg");
	this.shape_80.setTransform(34.5,38.35);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#7D7E7E").s().p("AgVGyIAAtjIArAAIAANjg");
	this.shape_81.setTransform(34.5,34.675);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#838383").s().p("AgVHPIAAudIArAAIAAOdg");
	this.shape_82.setTransform(34.5,31.75);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#878888").s().p("AgVHmIAAvLIArAAIAAPLg");
	this.shape_83.setTransform(34.5,29.475);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#8A8B8B").s().p("AgVH3IAAvtIArAAIAAPtg");
	this.shape_84.setTransform(34.5,27.725);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#8D8D8D").s().p("AgVIEIAAwHIArAAIAAQHg");
	this.shape_85.setTransform(34.5,26.425);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#8E8F8F").s().p("AgVIOIAAwbIArAAIAAQbg");
	this.shape_86.setTransform(34.5,25.45);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#909191").s().p("AgVIVIAAwpIArAAIAAQpg");
	this.shape_87.setTransform(34.5,24.775);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#919292").s().p("AgVIaIAAwzIArAAIAAQzg");
	this.shape_88.setTransform(34.5,24.275);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#919292").s().p("AgVIdIAAw5IArAAIAAQ5g");
	this.shape_89.setTransform(34.5,23.975);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#929393").s().p("AgVIfIAAw9IArAAIAAQ9g");
	this.shape_90.setTransform(34.5,23.75);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#929393").s().p("AgVIgIAAw/IArAAIAAQ/g");
	this.shape_91.setTransform(34.5,23.625);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#929393").s().p("AgVIhIAAxBIArAAIAARBg");
	this.shape_92.setTransform(34.5,23.55);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#929393").s().p("AgVIhIAAxCIArAAIAARCg");
	this.shape_93.setTransform(34.5,23.5);
	this.shape_93._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_75}]},14).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92,p:{y:23.55}}]},1).to({state:[{t:this.shape_92,p:{y:23.525}}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_93}]},1).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.shape_93).wait(33).to({_off:false},0).wait(66));

	// Layer_18
	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AgDAPIAAgdIAHAAIAAAdg");
	this.shape_94.setTransform(-58.8,-58.475);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#525353").s().p("AgDAyIAAhjIAHAAIAABjg");
	this.shape_95.setTransform(-58.8,-54.95);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#696969").s().p("AgDBLIAAiVIAHAAIAACVg");
	this.shape_96.setTransform(-58.8,-52.45);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#787979").s().p("AgDBcIAAi3IAHAAIAAC3g");
	this.shape_97.setTransform(-58.8,-50.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#838484").s().p("AgDBoIAAjPIAHAAIAADPg");
	this.shape_98.setTransform(-58.8,-49.525);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#8A8B8B").s().p("AgDBwIAAjfIAHAAIAADfg");
	this.shape_99.setTransform(-58.8,-48.775);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#8E8F8F").s().p("AgDB1IAAjoIAHAAIAADog");
	this.shape_100.setTransform(-58.8,-48.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#909191").s().p("AgDB3IAAjtIAHAAIAADtg");
	this.shape_101.setTransform(-58.8,-48.05);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#919292").s().p("AgDB4IAAjvIAHAAIAADvg");
	this.shape_102.setTransform(-58.8,-47.925);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#929393").s().p("AgDB5IAAjxIAHAAIAADxg");
	this.shape_103.setTransform(-58.8,-47.85);
	this.shape_103._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_94}]},16).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_103}]},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.shape_103).wait(25).to({_off:false},0).wait(1).to({y:-47.825},0).wait(73));

	// Layer_19
	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#333333").s().p("AgDAPIAAgdIAIAAIAAAdg");
	this.shape_104.setTransform(0.6,-58.475);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#525353").s().p("AgDAyIAAhjIAIAAIAABjg");
	this.shape_105.setTransform(0.6,-54.95);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#696969").s().p("AgDBLIAAiVIAIAAIAACVg");
	this.shape_106.setTransform(0.6,-52.45);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#787979").s().p("AgDBcIAAi3IAIAAIAAC3g");
	this.shape_107.setTransform(0.6,-50.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#838484").s().p("AgDBoIAAjPIAIAAIAADPg");
	this.shape_108.setTransform(0.6,-49.525);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#8A8B8B").s().p("AgDBwIAAjfIAIAAIAADfg");
	this.shape_109.setTransform(0.6,-48.775);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#8E8F8F").s().p("AgDB1IAAjoIAIAAIAADog");
	this.shape_110.setTransform(0.6,-48.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#909191").s().p("AgDB3IAAjtIAIAAIAADtg");
	this.shape_111.setTransform(0.6,-48.05);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#919292").s().p("AgDB4IAAjvIAIAAIAADvg");
	this.shape_112.setTransform(0.6,-47.925);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#929393").s().p("AgDB5IAAjxIAIAAIAADxg");
	this.shape_113.setTransform(0.6,-47.85);
	this.shape_113._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_104}]},16).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_113}]},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.shape_113).wait(25).to({_off:false},0).wait(1).to({y:-47.825},0).wait(73));

	// Layer_20
	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#333333").s().p("AgzAWIAAgrIBnAAIAAArg");
	this.shape_114.setTransform(-98.4,-98.725);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#4B4B4B").s().p("AhWAWIAAgrICtAAIAAArg");
	this.shape_115.setTransform(-101.9,-98.725);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#5E5E5E").s().p("AhyAWIAAgrIDlAAIAAArg");
	this.shape_116.setTransform(-104.75,-98.725);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#6D6E6E").s().p("AiJAWIAAgrIETAAIAAArg");
	this.shape_117.setTransform(-107.025,-98.725);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#7A7A7A").s().p("AibAWIAAgrIE3AAIAAArg");
	this.shape_118.setTransform(-108.8,-98.725);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#838383").s().p("AioAWIAAgrIFRAAIAAArg");
	this.shape_119.setTransform(-110.15,-98.725);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#898A8A").s().p("AiyAWIAAgrIFlAAIAAArg");
	this.shape_120.setTransform(-111.1,-98.725);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#8D8E8E").s().p("Ai5AWIAAgrIFyAAIAAArg");
	this.shape_121.setTransform(-111.75,-98.725);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#909191").s().p("Ai9AWIAAgrIF6AAIAAArg");
	this.shape_122.setTransform(-112.15,-98.725);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#919292").s().p("Ai+AWIAAgrIF9AAIAAArg");
	this.shape_123.setTransform(-112.35,-98.725);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#929393").s().p("Ai/AWIAAgrIF/AAIAAArg");
	this.shape_124.setTransform(-112.425,-98.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_114}]},20).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_124}]},1).wait(68));

	// Layer_21
	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#333333").s().p("AgZAWIAAgrIA0AAIAAArg");
	this.shape_125.setTransform(-108.15,-62.15);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#494949").s().p("AhAAWIAAgrICBAAIAAArg");
	this.shape_126.setTransform(-111.95,-62.15);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#5B5B5B").s().p("AhfAWIAAgrIC/AAIAAArg");
	this.shape_127.setTransform(-115.125,-62.15);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#6A6B6B").s().p("Ah5AWIAAgrIDzAAIAAArg");
	this.shape_128.setTransform(-117.725,-62.15);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#767777").s().p("AiOAWIAAgrIEdAAIAAArg");
	this.shape_129.setTransform(-119.825,-62.15);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#7F8080").s().p("AieAWIAAgrIE9AAIAAArg");
	this.shape_130.setTransform(-121.425,-62.15);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#868787").s().p("AiqAWIAAgrIFWAAIAAArg");
	this.shape_131.setTransform(-122.65,-62.15);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#8B8C8C").s().p("AizAWIAAgrIFnAAIAAArg");
	this.shape_132.setTransform(-123.525,-62.15);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#8E8F8F").s().p("Ai5AWIAAgrIFzAAIAAArg");
	this.shape_133.setTransform(-124.1,-62.15);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#919292").s().p("Ai9AWIAAgrIF7AAIAAArg");
	this.shape_134.setTransform(-124.475,-62.15);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#929393").s().p("Ai/AWIAAgrIF/AAIAAArg");
	this.shape_135.setTransform(-124.65,-62.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_125}]},17).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135,p:{x:-124.65}}]},1).to({state:[{t:this.shape_135,p:{x:-124.725}}]},1).to({state:[{t:this.shape_135,p:{x:-124.725}}]},1).wait(70));

	// Layer_22
	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#929393").s().p("AgeAWIAAgrIA9AAIAAArg");
	this.shape_136.setTransform(46.7,-30.85);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#929393").s().p("AhWAWIAAgrICsAAIAAArg");
	this.shape_137.setTransform(41.15,-30.85);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#929393").s().p("AiIAWIAAgrIERAAIAAArg");
	this.shape_138.setTransform(36.075,-30.85);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#929393").s().p("Ai2AWIAAgrIFtAAIAAArg");
	this.shape_139.setTransform(31.475,-30.85);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#929393").s().p("AjfAWIAAgrIG/AAIAAArg");
	this.shape_140.setTransform(27.375,-30.85);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#929393").s().p("AkEAWIAAgrIIIAAIAAArg");
	this.shape_141.setTransform(23.75,-30.85);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#929393").s().p("AkjAWIAAgrIJHAAIAAArg");
	this.shape_142.setTransform(20.6,-30.85);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#929393").s().p("Ak9AWIAAgrIJ7AAIAAArg");
	this.shape_143.setTransform(17.95,-30.85);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#929393").s().p("AlTAWIAAgrIKnAAIAAArg");
	this.shape_144.setTransform(15.775,-30.85);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#929393").s().p("AlkAWIAAgrILJAAIAAArg");
	this.shape_145.setTransform(14.075,-30.85);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#929393").s().p("AlwAWIAAgrILhAAIAAArg");
	this.shape_146.setTransform(12.875,-30.85);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#929393").s().p("Al3AWIAAgrILvAAIAAArg");
	this.shape_147.setTransform(12.15,-30.85);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#929393").s().p("Al6AWIAAgrIL1AAIAAArg");
	this.shape_148.setTransform(11.9,-30.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_136}]},14).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).wait(73));

	// maskC (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_15 = new cjs.Graphics().p("AhOBPQghghAAguQAAgtAhghQAgghAuAAQAvAAAgAhQAhAhAAAtQAAAughAhQggAhgvAAQguAAggghg");
	var mask_4_graphics_16 = new cjs.Graphics().p("AiFC/Qg3hPABhwQgBhvA3hRQA3hOBOAAQBPAAA2BOQA4BRAABvQAABwg4BPQg2BQhPAAQhOAAg3hQg");
	var mask_4_graphics_17 = new cjs.Graphics().p("Ai4EoQhMh6AAiuQAAiuBMh7QBMh6BsAAQBsAABMB6QBNB7AACuQAACuhNB6QhMB8hsAAQhsAAhMh8g");
	var mask_4_graphics_18 = new cjs.Graphics().p("AjoGLQhfijAAjoQAAjnBfimQBgiiCIAAQCIAABfCiQBhCmAADnQAADohhCjQhfCliIAAQiIAAhgilg");
	var mask_4_graphics_19 = new cjs.Graphics().p("AkUHnQhyjJAAkeQAAkdByjMQByjICiAAQCiAAByDIQBzDMAAEdQAAEehzDJQhyDLiiAAQiiAAhyjLg");
	var mask_4_graphics_20 = new cjs.Graphics().p("Ak+I7QiCjrAAlQQAAlPCCjvQCEjrC6AAQC7AACCDrQCEDvAAFPQAAFQiEDrQiCDvi7AAQi6AAiEjvg");
	var mask_4_graphics_21 = new cjs.Graphics().p("AlkKKQiRkLAAl/QAAl9CRkQQCVkLDPAAQDRAACRELQCVEQAAF9QAAF/iVELQiREPjRAAQjPAAiVkPg");
	var mask_4_graphics_22 = new cjs.Graphics().p("AmHLRQigkoAAmpQAAmnCgkuQCjkoDkAAQDlAACgEoQCiEuAAGnQAAGpiiEoQigEtjlAAQjkAAijktg");
	var mask_4_graphics_23 = new cjs.Graphics().p("AmmMSQitlDABnPQgBnNCtlIQCwlED2AAQD4AACsFEQCwFIAAHNQAAHPiwFDQisFIj4AAQj2AAiwlIg");
	var mask_4_graphics_24 = new cjs.Graphics().p("AnCNLQi4laAAnxQAAnvC4lhQC8lbEGAAQEHAAC5FbQC7FhAAHvQAAHxi7FaQi5FhkHAAQkGAAi8lhg");
	var mask_4_graphics_25 = new cjs.Graphics().p("AnaN+QjDlvAAoPQAAoODDl1QDFlwEVAAQEWAADCFwQDGF1AAIOQAAIPjGFvQjCF2kWAAQkVAAjFl2g");
	var mask_4_graphics_26 = new cjs.Graphics().p("AnwOqQjLmCAAooQAAonDLmJQDPmBEhgBQEjABDLGBQDOGJABInQgBIojOGCQjLGJkjAAQkhAAjPmJg");
	var mask_4_graphics_27 = new cjs.Graphics().p("AoCPPQjTmQAAo/QAAo9DTmYQDWmREsgBQEuABDSGRQDWGYAAI9QAAI/jWGQQjSGZkuAAQksAAjWmZg");
	var mask_4_graphics_28 = new cjs.Graphics().p("AoRPuQjZmeAApQQAApPDZmlQDcmeE1AAQE2AADZGeQDcGlAAJPQAAJQjcGeQjZGlk2AAQk1AAjcmlg");
	var mask_4_graphics_29 = new cjs.Graphics().p("AocQGQjemoAApeQAApdDemuQDgmpE8ABQE9gBDdGpQDhGuAAJdQAAJejhGoQjdGuk9AAQk8AAjgmug");
	var mask_4_graphics_30 = new cjs.Graphics().p("AolQXQjhmvABpoQgBpnDhm2QDkmuFBgBQFCABDgGuQDkG2ABJnQgBJojkGvQjgG1lCAAQlBAAjkm1g");
	var mask_4_graphics_31 = new cjs.Graphics().p("AoqQhQjimyAApvQAApuDim5QDnmzFDAAQFEAADjGzQDnG5AAJuQAAJvjnGyQjjG6lEAAQlDAAjnm6g");
	var mask_4_graphics_32 = new cjs.Graphics().p("AorQlQjkm0AApxQAApwDkm7QDmm0FFAAQFFAADkG0QDnG7AAJwQAAJxjnG0QjkG7lFAAQlFAAjmm7g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_4_graphics_15,x:-77.2,y:5.4}).wait(1).to({graphics:mask_4_graphics_16,x:-77.2,y:5.4}).wait(1).to({graphics:mask_4_graphics_17,x:-77.2,y:5.425}).wait(1).to({graphics:mask_4_graphics_18,x:-77.2,y:5.4}).wait(1).to({graphics:mask_4_graphics_19,x:-77.2,y:5.4}).wait(1).to({graphics:mask_4_graphics_20,x:-77.2,y:5.425}).wait(1).to({graphics:mask_4_graphics_21,x:-77.2,y:5.425}).wait(1).to({graphics:mask_4_graphics_22,x:-77.2,y:5.425}).wait(1).to({graphics:mask_4_graphics_23,x:-77.2,y:5.425}).wait(1).to({graphics:mask_4_graphics_24,x:-77.2,y:5.425}).wait(1).to({graphics:mask_4_graphics_25,x:-77.2,y:5.45}).wait(1).to({graphics:mask_4_graphics_26,x:-77.2,y:5.45}).wait(1).to({graphics:mask_4_graphics_27,x:-77.2,y:5.45}).wait(1).to({graphics:mask_4_graphics_28,x:-77.2,y:5.45}).wait(1).to({graphics:mask_4_graphics_29,x:-77.2,y:5.45}).wait(1).to({graphics:mask_4_graphics_30,x:-77.2,y:5.45}).wait(1).to({graphics:mask_4_graphics_31,x:-77.2,y:5.45}).wait(1).to({graphics:mask_4_graphics_32,x:-77.2,y:5.45}).wait(67));

	// curve1
	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#929393").s().p("AhyC7QgDjPAKirQAFhiAQg5QAYhYA6gvQARgPAPgLQATgMAPgMQAlgfgBgiIARAAQABAqgrAkQgSAPgRALQgPAKgSAOQgzAsgYBSQgJAigFApQgEAdgCAwQgKCqAEDPQADDQAQDJIgRABQgQjJgEjRg");
	this.shape_149.setTransform(-71.5349,-72.45);
	this.shape_149._off = true;

	var maskedShapeInstanceList = [this.shape_149];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_149).wait(15).to({_off:false},0).wait(84));

	// Layer_25
	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#333333").s().p("Ag1AEIAAgHIBrAAIAAAHg");
	this.shape_150.setTransform(-97.8,-59.925);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#474747").s().p("AjOAEIAAgHIGdAAIAAAHg");
	this.shape_151.setTransform(-82.475,-59.925);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#585959").s().p("AlQAEIAAgHIKhAAIAAAHg");
	this.shape_152.setTransform(-69.5,-59.925);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#676767").s().p("Am8AEIAAgHIN5AAIAAAHg");
	this.shape_153.setTransform(-58.675,-59.925);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#727373").s().p("AoVAEIAAgHIQrAAIAAAHg");
	this.shape_154.setTransform(-49.8,-59.925);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#7C7D7D").s().p("ApcAEIAAgHIS5AAIAAAHg");
	this.shape_155.setTransform(-42.725,-59.925);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#838484").s().p("AqTAEIAAgHIUnAAIAAAHg");
	this.shape_156.setTransform(-37.2,-59.925);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#898A8A").s().p("Aq9AEIAAgHIV7AAIAAAHg");
	this.shape_157.setTransform(-33.025,-59.925);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#8D8E8E").s().p("ArbAEIAAgHIW3AAIAAAHg");
	this.shape_158.setTransform(-30.05,-59.925);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#8F9090").s().p("AruAEIAAgHIXdAAIAAAHg");
	this.shape_159.setTransform(-28.075,-59.925);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#919292").s().p("Ar7AEIAAgHIX3AAIAAAHg");
	this.shape_160.setTransform(-26.85,-59.925);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#929393").s().p("AsBAEIAAgHIYDAAIAAAHg");
	this.shape_161.setTransform(-26.225,-59.925);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#929393").s().p("AsDAEIAAgHIYHAAIAAAHg");
	this.shape_162.setTransform(-26,-59.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_150}]},15).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162,p:{x:-26}}]},1).to({state:[{t:this.shape_162,p:{x:-25.975}}]},1).wait(71));

	// Layer_26
	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#333333").s().p("Ah9AEIAAgHID7AAIAAAGIhYAAIAAABg");
	this.shape_163.setTransform(-89.825,-54.125);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#474747").s().p("Aj+AEIgJgEIAAgDIIGAAIAJAEIAAABIgBABIizAAIgBABg");
	this.shape_164.setTransform(-76.025,-54.125);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#585959").s().p("AlsAEIgQgEIAAgDILoAAIARADIAAABIgBADIkBAAIgCAAg");
	this.shape_165.setTransform(-64.35,-54.125);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#676767").s().p("AnGAEIgXgDIAAgEIOkAAIAXADIAAABIAAADIlCAAIgDAAg");
	this.shape_166.setTransform(-54.625,-54.125);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#727373").s().p("AoRAEIgcgCIAAgFIQ+AAIAdACIAAABIgBAEIl2AAIgEAAg");
	this.shape_167.setTransform(-46.65,-54.125);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#7C7D7D").s().p("AptADIAAgGITbABIAAACIgBAEg");
	this.shape_168.setTransform(-40.275,-54.125);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#838484").s().p("AqeADIAAgGIU+ABIAAACIgBAEg");
	this.shape_169.setTransform(-35.3,-54.125);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#898A8A").s().p("ArEAEIAAgHIWJAAIAAAHg");
	this.shape_170.setTransform(-31.575,-54.125);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#8D8E8E").s().p("AreAEIAAgHIW9AAIAAAHg");
	this.shape_171.setTransform(-28.9,-54.125);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#8F9090").s().p("ArwAEIAAgHIXhAAIAAAHg");
	this.shape_172.setTransform(-27.1,-54.125);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#919292").s().p("Ar7AEIAAgHIX3AAIAAAHg");
	this.shape_173.setTransform(-26.025,-54.125);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#929393").s().p("AsBAEIAAgHIYDAAIAAAHg");
	this.shape_174.setTransform(-25.45,-54.125);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#929393").s().p("AsDAEIAAgHIYHAAIAAAHg");
	this.shape_175.setTransform(-25.25,-54.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_163}]},15).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175,p:{x:-25.25}}]},1).to({state:[{t:this.shape_175,p:{x:-25.225}}]},1).wait(71));

	// Layer_27
	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#929393").s().p("AhRAEIAAgHICjAAIAAAHg");
	this.shape_176.setTransform(-94.225,-43.925);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#929393").s().p("Ak1AEIAAgHIJrAAIAAAHg");
	this.shape_177.setTransform(-71.475,-43.925);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#929393").s().p("AnYAEIAAgHIOxAAIAAAHg");
	this.shape_178.setTransform(-55.15,-43.925);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#929393").s().p("ApJAEIAAgHISTAAIAAAHg");
	this.shape_179.setTransform(-43.8,-43.925);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#929393").s().p("AqVAEIAAgHIUsAAIAAAHg");
	this.shape_180.setTransform(-36.2,-43.925);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#929393").s().p("ArGAEIAAgHIWNAAIAAAHg");
	this.shape_181.setTransform(-31.325,-43.925);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#929393").s().p("ArkAEIAAgHIXJAAIAAAHg");
	this.shape_182.setTransform(-28.35,-43.925);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#929393").s().p("Ar1AEIAAgHIXrAAIAAAHg");
	this.shape_183.setTransform(-26.675,-43.925);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#929393").s().p("Ar9AEIAAgHIX7AAIAAAHg");
	this.shape_184.setTransform(-25.8,-43.925);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#929393").s().p("AsBAEIAAgHIYDAAIAAAHg");
	this.shape_185.setTransform(-25.425,-43.925);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#929393").s().p("AsDAEIAAgHIYHAAIAAAHg");
	this.shape_186.setTransform(-25.275,-43.925);
	this.shape_186._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_176}]},14).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_186}]},1).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.shape_186).wait(24).to({_off:false},0).wait(1).to({x:-25.225},0).wait(74));

	// Layer_28
	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#929393").s().p("AiZAEIAAgHIEzAAIAAAHg");
	this.shape_187.setTransform(-87.025,-35.725);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#929393").s().p("AllAEIAAgHILLAAIAAAHg");
	this.shape_188.setTransform(-66.65,-35.725);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#929393").s().p("An3AEIAAgHIPvAAIAAAHg");
	this.shape_189.setTransform(-52.025,-35.725);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#929393").s().p("ApdAEIAAgHIS7AAIAAAHg");
	this.shape_190.setTransform(-41.875,-35.725);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#929393").s().p("AqhAEIAAgHIVDAAIAAAHg");
	this.shape_191.setTransform(-35.05,-35.725);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#929393").s().p("ArNAEIAAgHIWbAAIAAAHg");
	this.shape_192.setTransform(-30.675,-35.725);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#929393").s().p("ArnAEIAAgHIXPAAIAAAHg");
	this.shape_193.setTransform(-28.025,-35.725);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#929393").s().p("Ar2AEIAAgHIXtAAIAAAHg");
	this.shape_194.setTransform(-26.525,-35.725);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#929393").s().p("Ar+AEIAAgHIX9AAIAAAHg");
	this.shape_195.setTransform(-25.75,-35.725);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#929393").s().p("AsBAEIAAgHIYEAAIAAAHg");
	this.shape_196.setTransform(-25.4,-35.725);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#929393").s().p("AsDAEIAAgHIYHAAIAAAHg");
	this.shape_197.setTransform(-25.275,-35.725);
	this.shape_197._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_187}]},14).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_197}]},1).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.shape_197).wait(24).to({_off:false},0).wait(1).to({x:-25.225},0).wait(74));

	// g3V
	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#333333").s().p("AgDF0IAArnIAHAAIAALng");
	this.shape_198.setTransform(-93.175,-139.025);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#3C3C3C").s().p("AgDGdIAAs5IAHAAIAAM5g");
	this.shape_199.setTransform(-93.175,-134.975);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#444444").s().p("AgDHFIAAuJIAHAAIAAOJg");
	this.shape_200.setTransform(-93.175,-130.925);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#4D4D4D").s().p("AgDHtIAAvZIAHAAIAAPZg");
	this.shape_201.setTransform(-93.175,-126.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#565656").s().p("AgDIWIAAwrIAHAAIAAQrg");
	this.shape_202.setTransform(-93.175,-122.85);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#5E5F5F").s().p("AgDI+IAAx7IAHAAIAAR7g");
	this.shape_203.setTransform(-93.175,-118.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#676767").s().p("AgDJnIAAzNIAHAAIAATNg");
	this.shape_204.setTransform(-93.175,-114.75);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#6F7070").s().p("AgDKPIAA0dIAHAAIAAUdg");
	this.shape_205.setTransform(-93.175,-110.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#787979").s().p("AgDK4IAA1vIAHAAIAAVvg");
	this.shape_206.setTransform(-93.175,-106.65);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#818282").s().p("AgDLgIAA2/IAHAAIAAW/g");
	this.shape_207.setTransform(-93.175,-102.625);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#898A8A").s().p("AgDMJIAA4RIAHAAIAAYRg");
	this.shape_208.setTransform(-93.175,-98.575);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#929393").s().p("AgDMxIAA5hIAHAAIAAZhg");
	this.shape_209.setTransform(-93.175,-94.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_198}]},12).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).wait(76));

	// g2
	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#333333").s().p("AkWAWIAAgrIIsAAIAAArg");
	this.shape_210.setTransform(6.65,-11.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#494949").s().p("AmjAWIAAgrINGAAIAAArg");
	this.shape_211.setTransform(-7.45,-11.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#5B5B5B").s().p("AoYAWIAAgrIQxAAIAAArg");
	this.shape_212.setTransform(-19.2,-11.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#6A6B6B").s().p("Ap4AWIAAgrITxAAIAAArg");
	this.shape_213.setTransform(-28.825,-11.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#767777").s().p("ArGAWIAAgrIWMAAIAAArg");
	this.shape_214.setTransform(-36.55,-11.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#7F8080").s().p("AsCAWIAAgrIYEAAIAAArg");
	this.shape_215.setTransform(-42.55,-11.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#868787").s().p("AsvAWIAAgrIZeAAIAAArg");
	this.shape_216.setTransform(-47.05,-11.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#8B8C8C").s().p("AtPAWIAAgrIafAAIAAArg");
	this.shape_217.setTransform(-50.275,-11.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#8E8F8F").s().p("AtlAWIAAgrIbKAAIAAArg");
	this.shape_218.setTransform(-52.45,-11.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#919292").s().p("AtyAWIAAgrIblAAIAAArg");
	this.shape_219.setTransform(-53.775,-11.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#929393").s().p("At4AWIAAgrIbxAAIAAArg");
	this.shape_220.setTransform(-54.45,-11.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#929393").s().p("At7AWIAAgrIb3AAIAAArg");
	this.shape_221.setTransform(-54.7,-11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_210}]},12).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221,p:{x:-54.7}}]},1).to({state:[{t:this.shape_221,p:{x:-54.725}}]},1).wait(75));

	// g1
	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#333333").s().p("AgVBVIAAipIArAAIAACpg");
	this.shape_222.setTransform(-104.675,-143.475);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#474747").s().p("AgVFkIAArHIArAAIAALHg");
	this.shape_223.setTransform(-104.675,-116.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#585959").s().p("AgVJJIAAyRIArAAIAASRg");
	this.shape_224.setTransform(-104.675,-93.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#676767").s().p("AgVMIIAA4PIArAAIAAYPg");
	this.shape_225.setTransform(-104.675,-74.4);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#727373").s().p("AgVOkIAA9HIArAAIAAdHg");
	this.shape_226.setTransform(-104.675,-58.775);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#7C7D7D").s().p("AgVQhMAAAghCIArAAMAAAAhCg");
	this.shape_227.setTransform(-104.675,-46.25);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#838484").s().p("AgVSDMAAAgkFIArAAMAAAAkFg");
	this.shape_228.setTransform(-104.675,-36.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#898A8A").s().p("AgVTMMAAAgmXIArAAMAAAAmXg");
	this.shape_229.setTransform(-104.675,-29.175);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#8D8E8E").s().p("AgVUBMAAAgoBIArAAMAAAAoBg");
	this.shape_230.setTransform(-104.675,-23.925);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#8F9090").s().p("AgVUkMAAAgpHIArAAMAAAApHg");
	this.shape_231.setTransform(-104.675,-20.4);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#919292").s().p("AgVU5MAAAgpyIArAAMAAAApyg");
	this.shape_232.setTransform(-104.675,-18.25);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#929393").s().p("AgVVFMAAAgqJIArAAMAAAAqJg");
	this.shape_233.setTransform(-104.675,-17.15);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#929393").s().p("AgVVJMAAAgqRIArAAMAAAAqRg");
	this.shape_234.setTransform(-104.675,-16.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_222}]}).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234,p:{y:-16.75}}]},1).to({state:[{t:this.shape_234,p:{y:-16.7}}]},1).wait(86));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.9,-191.6,196.7,316.3);


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
	this.frame_99 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(65).call(this.frame_65).wait(34).call(this.frame_99).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:469.3539,y:195.7095}).wait(1).to({graphics:mask_graphics_15,x:467.448,y:195.7095}).wait(1).to({graphics:mask_graphics_16,x:461.7303,y:195.7095}).wait(1).to({graphics:mask_graphics_17,x:452.2008,y:195.7095}).wait(1).to({graphics:mask_graphics_18,x:438.8595,y:195.7095}).wait(1).to({graphics:mask_graphics_19,x:421.7063,y:195.7095}).wait(1).to({graphics:mask_graphics_20,x:400.7414,y:195.7095}).wait(1).to({graphics:mask_graphics_21,x:379.7765,y:195.7095}).wait(1).to({graphics:mask_graphics_22,x:362.6233,y:195.7095}).wait(1).to({graphics:mask_graphics_23,x:349.282,y:195.7095}).wait(1).to({graphics:mask_graphics_24,x:339.7525,y:195.7095}).wait(1).to({graphics:mask_graphics_25,x:334.0348,y:195.7095}).wait(1).to({graphics:mask_graphics_26,x:332.1289,y:195.7095}).wait(1).to({graphics:null,x:0,y:0}).wait(73));

	// Layer 3
	this.instance = new lib.MSFT_Logo_anim();
	this.instance.setTransform(-132.35,332.45,4.9325,4.9325,0,0,0,0.1,0.2);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({x:222.05},12,cjs.Ease.quadInOut).wait(39).to({regX:0,regY:0.4,scaleX:4.9322,scaleY:4.935,x:221.55,y:333.4,alpha:0},33,cjs.Ease.cubicInOut).to({_off:true},1).wait(1));

	// Layer_2
	this.introBg = new lib.introBg();
	this.introBg.name = "introBg";
	this.introBg.setTransform(300.05,337.5,1,1,0,0,0,486,405.4);

	this.instance_1 = new lib.MSFT_logo_sq();
	this.instance_1.setTransform(298.45,338.35,0.2981,0.2981,0,0,0,-39.9,1.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.introBg}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},13).to({state:[{t:this.instance_1}]},12).to({state:[]},1).to({state:[]},72).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({regX:-40,regY:1.4,scaleX:4.9325,scaleY:4.9325,x:298.4},13,cjs.Ease.quadOut).to({x:24.15},12,cjs.Ease.quadInOut).to({_off:true},1).wait(73));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhMdBAtMAAAiBYMCY7AAAMAAACBYg");
	this.shape.setTransform(301.475,344.45);

	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.setTransform(301.45,344.45);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance_2}]},65).to({state:[{t:this.instance_2}]},33).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(65).to({_off:false},0).to({alpha:0},33,cjs.Ease.cubicInOut).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.9,-69.6,978.8,828.1);


(lib.bg_1 = function(mode,startPosition,loop,reversed) {
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
	this.frame_129 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(129).call(this.frame_129).wait(1));

	// Layer_1
	this.instance = new lib.woman1();
	this.instance.setTransform(134.95,118.9,0.5847,0.5847,0,0,0,350.5,350.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(116).to({alpha:0},13).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-87.5,424.3,410.8);


(lib.boxSign = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.popUpNew();
	this.instance.setTransform(70.2,54.2,0.403,0.403,0,0,0,174.2,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.boxSign, new cjs.Rectangle(0,0,139.9,108), null);


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
		this.box.cache(0,0,150,250,2)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.box = new lib.box_Cache();
	this.box.name = "box";
	this.box.setTransform(75,125,1,1,0,0,0,75,125);

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.box_c, new cjs.Rectangle(0,0,150,250), null);


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

	// msLogo
	this.logo = new lib.msLogoWhite();
	this.logo.name = "logo";
	this.logo.setTransform(67.75,24.35,0.5764,0.5764,0,0,0,86.5,14.7);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// box_1
	this.box_1 = new lib.box_c();
	this.box_1.name = "box_1";
	this.box_1.setTransform(75,125,1,1,0,0,0,75,125);
	this.box_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.box_1).wait(1));

	// box_2
	this.box_2 = new lib.box_c();
	this.box_2.name = "box_2";
	this.box_2.setTransform(75,125,1,1,0,0,0,75,125);
	this.box_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.box_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.white_boxes, new cjs.Rectangle(0,0,150,250), null);


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

}).prototype = getMCSymbolPrototype(lib.CTA_btn, new cjs.Rectangle(-115.1,-22.2,120.5,43), null);


(lib.mainAnim_Build2 = function(mode,startPosition,loop,reversed) {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(495));

	// boxSign
	this.boxSign = new lib.boxSign();
	this.boxSign.name = "boxSign";
	this.boxSign.setTransform(-64.65,-88.35,0.1895,0.1895,45,0,0,15.8,46.1);
	this.boxSign.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.boxSign).wait(84).to({visible:true},0).to({regX:15.5,scaleX:0.6,scaleY:0.6018,rotation:0,x:-63.7,y:-79.25},13,cjs.Ease.cubicOut).wait(21).to({regX:15.2,regY:46,scaleX:1.1646,scaleY:1.1681,rotation:-28.989,x:-12.45,y:40.4},48,cjs.Ease.quintOut).wait(105).to({_off:true},1).wait(223));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-187.3,248.6,299.70000000000005);


(lib.buildZoom = function(mode,startPosition,loop,reversed) {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(280));

	// mainAnim_Build2
	this.mainAnim_Build = new lib.mainAnim_Build2("synched",0,false);
	this.mainAnim_Build.name = "mainAnim_Build";
	this.mainAnim_Build.setTransform(104.5,88.7,1,1,0,0,0,-45.5,-36.3);

	this.timeline.addTween(cjs.Tween.get(this.mainAnim_Build).wait(190).to({startPosition:190},0).wait(1).to({regX:37.3,regY:2.7,scaleX:0.9977,scaleY:0.9977,rotation:0.0844,x:187.4,y:127.85,alpha:0.9255,startPosition:191},0).wait(1).to({scaleX:0.9934,scaleY:0.9934,rotation:0.2416,x:187.7,y:128.15,alpha:0.8519,startPosition:192},0).wait(1).to({scaleX:0.9869,scaleY:0.9869,rotation:0.4815,x:188.1,y:128.55,alpha:0.78,startPosition:193},0).wait(1).to({scaleX:0.9778,scaleY:0.9778,rotation:0.8162,x:188.6,y:129.15,alpha:0.7107,startPosition:194},0).wait(1).to({scaleX:0.9657,scaleY:0.9657,rotation:1.2598,x:189.35,y:129.9,alpha:0.6447,startPosition:195},0).wait(1).to({scaleX:0.9501,scaleY:0.9501,rotation:1.8287,x:190.25,y:130.9,alpha:0.5826,startPosition:196},0).wait(1).to({scaleX:0.9307,scaleY:0.9307,rotation:2.5423,x:191.5,y:132.05,alpha:0.5248,startPosition:197},0).wait(1).to({scaleX:0.9067,scaleY:0.9067,rotation:3.4216,x:192.95,y:133.4,alpha:0.4715,startPosition:198},0).wait(1).to({scaleX:0.8776,scaleY:0.8776,rotation:4.4884,x:194.75,y:135,alpha:0.4225,startPosition:199},0).wait(1).to({scaleX:0.8429,scaleY:0.8429,rotation:5.7604,x:196.95,y:136.75,alpha:0.3779,startPosition:200},0).wait(1).to({scaleX:0.8024,scaleY:0.8024,rotation:7.2448,x:199.6,y:138.6,alpha:0.3373,startPosition:201},0).wait(1).to({scaleX:0.7566,scaleY:0.7566,rotation:8.9267,x:202.65,y:140.55,alpha:0.3005,startPosition:202},0).wait(1).to({scaleX:0.7066,scaleY:0.7066,rotation:10.7606,x:206.05,y:142.3,alpha:0.2672,startPosition:203},0).wait(1).to({scaleX:0.6545,scaleY:0.6545,rotation:12.6711,x:209.7,y:143.85,alpha:0.2371,startPosition:204},0).wait(1).to({scaleX:0.6027,scaleY:0.6027,rotation:14.5699,x:213.5,y:145.15,alpha:0.2098,startPosition:205},0).wait(1).to({scaleX:0.5533,scaleY:0.5533,rotation:16.3805,x:217.3,y:146.15,alpha:0.1852,startPosition:206},0).wait(1).to({scaleX:0.5077,scaleY:0.5077,rotation:18.0532,x:220.9,y:146.8,alpha:0.163,startPosition:207},0).wait(1).to({scaleX:0.4664,scaleY:0.4664,rotation:19.566,x:224.3,y:147.25,alpha:0.143,startPosition:208},0).wait(1).to({scaleX:0.4296,scaleY:0.4296,rotation:20.9164,x:227.4,y:147.45,alpha:0.1249,startPosition:209},0).wait(1).to({scaleX:0.397,scaleY:0.397,rotation:22.1127,x:230.25,y:147.55,alpha:0.1086,startPosition:210},0).wait(1).to({scaleX:0.3682,scaleY:0.3682,rotation:23.1682,x:232.85,alpha:0.094,startPosition:211},0).wait(1).to({scaleX:0.3429,scaleY:0.3429,rotation:24.0971,x:235.1,y:147.5,alpha:0.0808,startPosition:212},0).wait(1).to({scaleX:0.3206,scaleY:0.3206,rotation:24.9134,x:237.25,alpha:0.069,startPosition:213},0).wait(1).to({scaleX:0.3011,scaleY:0.3011,rotation:25.6295,x:239.1,y:147.35,alpha:0.0585,startPosition:214},0).wait(1).to({scaleX:0.284,scaleY:0.284,rotation:26.2565,x:240.75,y:147.25,alpha:0.0491,startPosition:215},0).wait(1).to({scaleX:0.269,scaleY:0.269,rotation:26.8041,x:242.2,y:147.05,alpha:0.0407,startPosition:216},0).wait(1).to({scaleX:0.256,scaleY:0.256,rotation:27.2805,x:243.55,y:146.95,alpha:0.0334,startPosition:217},0).wait(1).to({scaleX:0.2448,scaleY:0.2448,rotation:27.693,x:244.7,y:146.85,alpha:0.0269,startPosition:218},0).wait(1).to({scaleX:0.2351,scaleY:0.2351,rotation:28.0478,x:245.65,y:146.7,alpha:0.0213,startPosition:219},0).wait(1).to({scaleX:0.2269,scaleY:0.2269,rotation:28.3503,x:246.5,y:146.65,alpha:0.0164,startPosition:220},0).wait(1).to({scaleX:0.2199,scaleY:0.2199,rotation:28.6052,x:247.2,y:146.55,alpha:0.0123,startPosition:221},0).wait(1).to({scaleX:0.2141,scaleY:0.2141,rotation:28.8166,x:247.8,y:146.45,alpha:0.0088,startPosition:222},0).wait(1).to({scaleX:0.2095,scaleY:0.2095,rotation:28.9881,x:248.35,alpha:0.006,startPosition:223},0).wait(1).to({scaleX:0.2058,scaleY:0.2058,rotation:29.1229,x:248.7,y:146.4,alpha:0.0038,startPosition:224},0).wait(1).to({scaleX:0.203,scaleY:0.203,rotation:29.2237,x:249,y:146.35,alpha:0.0021,startPosition:225},0).wait(1).to({scaleX:0.2011,scaleY:0.2011,rotation:29.2931,x:249.2,y:146.25,alpha:0.0009,startPosition:226},0).wait(1).to({scaleX:0.2,scaleY:0.2,rotation:29.3333,x:249.3,alpha:0.0002,startPosition:227},0).wait(1).to({regX:-44.8,regY:-36.2,scaleX:0.1997,scaleY:0.1997,rotation:29.3463,x:238.75,y:131.4,alpha:0,startPosition:220},0).wait(16).to({startPosition:236},0).to({_off:true},1).wait(35));

	// endUi copy 2
	this.instance = new lib.uiEnd();
	this.instance.setTransform(119.1,155.1,0.5119,0.5119,-28.7468,0,0,138.9,269.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(190).to({_off:false},0).wait(1).to({regX:213,regY:273,rotation:-28.6641,x:153.6,y:138.55},0).wait(1).to({rotation:-28.5101,x:154.2,y:138.7},0).wait(1).to({scaleX:0.5117,scaleY:0.5117,rotation:-28.275,x:155.1,y:138.9},0).wait(1).to({scaleX:0.5116,scaleY:0.5116,rotation:-27.9472,x:156.3,y:139.15},0).wait(1).to({scaleX:0.5114,scaleY:0.5114,rotation:-27.5127,x:157.95,y:139.5},0).wait(1).to({scaleX:0.5112,scaleY:0.5112,rotation:-26.9553,x:160.05,y:139.9},0).wait(1).to({scaleX:0.5109,scaleY:0.5109,rotation:-26.2563,x:162.65,y:140.45},0).wait(1).to({scaleX:0.5105,scaleY:0.5105,rotation:-25.3949,x:165.9,y:141.1},0).wait(1).to({scaleX:0.5101,scaleY:0.5101,rotation:-24.3499,x:169.8,y:141.9},0).wait(1).to({scaleX:0.5096,scaleY:0.5096,rotation:-23.1038,x:174.5,y:142.9},0).wait(1).to({scaleX:0.509,scaleY:0.509,rotation:-21.6498,x:179.85,y:144.05},0).wait(1).to({scaleX:0.5083,scaleY:0.5083,rotation:-20.0022,x:185.95,y:145.35},0).wait(1).to({scaleX:0.5075,scaleY:0.5075,rotation:-18.2056,x:192.6,y:146.75},0).wait(1).to({scaleX:0.5068,scaleY:0.5068,rotation:-16.3341,x:199.45,y:148.25},0).wait(1).to({scaleX:0.506,scaleY:0.506,rotation:-14.4741,x:206.15,y:149.75},0).wait(1).to({scaleX:0.5053,scaleY:0.5053,rotation:-12.7005,x:212.6,y:151.2},0).wait(1).to({scaleX:0.5046,scaleY:0.5046,rotation:-11.0619,x:218.55,y:152.55},0).wait(1).to({scaleX:0.504,scaleY:0.504,rotation:-9.5799,x:223.85,y:153.7},0).wait(1).to({regX:139,regY:269.2,scaleX:0.5034,scaleY:0.5034,rotation:-8.2571,x:191.4,y:158.25},0).wait(1).to({regX:213,regY:273,scaleX:0.5029,scaleY:0.5029,rotation:-7.0853,x:232.7,y:155.75,alpha:0.1419},0).wait(1).to({scaleX:0.5025,scaleY:0.5025,rotation:-6.0514,x:236.35,y:156.5,alpha:0.2671},0).wait(1).to({scaleX:0.5021,scaleY:0.5021,rotation:-5.1415,x:239.55,y:157.2,alpha:0.3773},0).wait(1).to({scaleX:0.5018,scaleY:0.5018,rotation:-4.342,x:242.3,y:157.9,alpha:0.4741},0).wait(1).to({scaleX:0.5015,scaleY:0.5015,rotation:-3.6406,x:244.8,y:158.45,alpha:0.5591},0).wait(1).to({scaleX:0.5013,scaleY:0.5013,rotation:-3.0265,x:246.95,y:158.95,alpha:0.6335},0).wait(1).to({scaleX:0.501,scaleY:0.501,rotation:-2.4901,x:248.85,y:159.35,alpha:0.6984},0).wait(1).to({scaleX:0.5008,scaleY:0.5008,rotation:-2.0234,x:250.45,y:159.75,alpha:0.7549},0).wait(1).to({scaleX:0.5007,scaleY:0.5007,rotation:-1.6194,x:251.85,y:160.05,alpha:0.8039},0).wait(1).to({scaleX:0.5005,scaleY:0.5005,rotation:-1.2718,x:253.1,y:160.35,alpha:0.846},0).wait(1).to({scaleX:0.5004,scaleY:0.5004,rotation:-0.9755,x:254.05,y:160.6,alpha:0.8819},0).wait(1).to({scaleX:0.5003,scaleY:0.5003,rotation:-0.7259,x:255,y:160.75,alpha:0.9121},0).wait(1).to({scaleX:0.5002,scaleY:0.5002,rotation:-0.5188,x:255.7,y:160.95,alpha:0.9372},0).wait(1).to({rotation:-0.3508,x:256.3,y:161.1,alpha:0.9575},0).wait(1).to({scaleX:0.5001,scaleY:0.5001,rotation:-0.2188,x:256.7,y:161.15,alpha:0.9735},0).wait(1).to({rotation:-0.1201,x:257.1,y:161.25,alpha:0.9855},0).wait(1).to({scaleX:0.5,scaleY:0.5,rotation:-0.0521,x:257.3,y:161.3,alpha:0.9937},0).wait(1).to({rotation:-0.0127,x:257.45,y:161.35,alpha:0.9985},0).wait(1).to({regX:139,regY:269,rotation:0,x:220.5,y:159.5,alpha:1},0).wait(16).to({_off:true},1).wait(35));

	// endUi
	this.instance_1 = new lib.uiEnd_map();
	this.instance_1.setTransform(242.15,363.15,0.5119,0.5119,-28.7468,0,0,138.9,269.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120).to({_off:false},0).to({x:119.1,y:155.1},58,cjs.Ease.quintOut).wait(13).to({regX:138.6,regY:277.6,rotation:-28.6641,x:121.3,y:158.9},0).wait(1).to({rotation:-28.5101,x:121.85,y:158.95},0).wait(1).to({scaleX:0.5117,scaleY:0.5117,rotation:-28.275,x:122.65,y:159},0).wait(1).to({scaleX:0.5116,scaleY:0.5116,rotation:-27.9472,x:123.8},0).wait(1).to({scaleX:0.5114,scaleY:0.5114,rotation:-27.5127,x:125.3,y:159.1},0).wait(1).to({scaleX:0.5112,scaleY:0.5112,rotation:-26.9554,x:127.25,y:159.25},0).wait(1).to({scaleX:0.5109,scaleY:0.5109,rotation:-26.2564,x:129.6,y:159.35},0).wait(1).to({scaleX:0.5106,scaleY:0.5106,rotation:-25.395,x:132.55,y:159.5},0).wait(1).to({scaleX:0.5101,scaleY:0.5101,rotation:-24.3501,x:136.2,y:159.7},0).wait(1).to({scaleX:0.5096,scaleY:0.5096,rotation:-23.104,x:140.45,y:159.9},0).wait(1).to({scaleX:0.509,scaleY:0.509,rotation:-21.65,x:145.55,y:160.15},0).wait(1).to({scaleX:0.5083,scaleY:0.5083,rotation:-20.0024,x:151.2,y:160.45},0).wait(1).to({scaleX:0.5076,scaleY:0.5076,rotation:-18.2059,x:157.45,y:160.75},0).wait(1).to({scaleX:0.5068,scaleY:0.5068,rotation:-16.3345,x:163.85,y:161.1},0).wait(1).to({scaleX:0.506,scaleY:0.506,rotation:-14.4745,x:170.3,y:161.35},0).wait(1).to({scaleX:0.5053,scaleY:0.5053,rotation:-12.7009,x:176.45,y:161.7},0).wait(1).to({scaleX:0.5046,scaleY:0.5046,rotation:-11.0624,x:182.15,y:161.95},0).wait(1).to({scaleX:0.504,scaleY:0.504,rotation:-9.5805,x:187.25,y:162.15},0).wait(1).to({scaleX:0.5034,scaleY:0.5034,rotation:-8.2577,x:191.75,y:162.4},0).wait(1).to({scaleX:0.5029,scaleY:0.5029,rotation:-7.0858,x:195.85,y:162.6},0).wait(1).to({scaleX:0.5025,scaleY:0.5025,rotation:-6.0519,x:199.4,y:162.7},0).wait(1).to({scaleX:0.5021,scaleY:0.5021,rotation:-5.1419,x:202.55,y:162.9},0).wait(1).to({scaleX:0.5018,scaleY:0.5018,rotation:-4.3424,x:205.35,y:163},0).wait(1).to({scaleX:0.5015,scaleY:0.5015,rotation:-3.6409,x:207.75,y:163.15},0).wait(1).to({scaleX:0.5013,scaleY:0.5013,rotation:-3.0267,x:209.9,y:163.2},0).wait(1).to({scaleX:0.501,scaleY:0.501,rotation:-2.4903,x:211.75,y:163.3},0).wait(1).to({scaleX:0.5008,scaleY:0.5008,rotation:-2.0236,x:213.3,y:163.35},0).wait(1).to({scaleX:0.5007,scaleY:0.5007,rotation:-1.6195,x:214.75,y:163.45},0).wait(1).to({scaleX:0.5005,scaleY:0.5005,rotation:-1.2719,x:215.95},0).wait(1).to({scaleX:0.5004,scaleY:0.5004,rotation:-0.9756,x:216.95,y:163.5},0).wait(1).to({scaleX:0.5003,scaleY:0.5003,rotation:-0.7259,x:217.8},0).wait(1).to({scaleX:0.5002,scaleY:0.5002,rotation:-0.5188,x:218.55,y:163.55},0).wait(1).to({rotation:-0.3509,x:219.1,y:163.65},0).wait(1).to({scaleX:0.5001,scaleY:0.5001,rotation:-0.2189,x:219.6,y:163.6},0).wait(1).to({rotation:-0.1201,x:219.9},0).wait(1).to({scaleX:0.5,scaleY:0.5,rotation:-0.0521,x:220.1,y:163.65},0).wait(1).to({rotation:-0.0127,x:220.3},0).wait(1).to({regX:139,regY:269,rotation:0,x:220.5,y:159.5},0).wait(16).to({_off:true},1).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-0.1,389,532);


(lib.animation = function(mode,startPosition,loop,reversed) {
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
	this.frame_1 = function() {
		this.mainAnim_Build.play();
		this.buildZoom.play();
		exportRoot.mainMC.bg.play();
	}
	this.frame_199 = function() {
		exportRoot.tl2.play();
	}
	this.frame_243 = function() {
		this.stop();
	}
	this.frame_244 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(198).call(this.frame_199).wait(44).call(this.frame_243).wait(1).call(this.frame_244).wait(1));

	// buildZoom
	this.buildZoom = new lib.buildZoom("synched",0,false);
	this.buildZoom.name = "buildZoom";
	this.buildZoom.setTransform(92.5,58.5,1,1,0,0,0,91.5,58.5);

	this.instance = new lib.buildZoom("synched",109,false);
	this.instance.setTransform(92.5,58.5,1,1,0,0,0,91.5,58.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.buildZoom}]}).to({state:[{t:this.instance}]},109).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},80).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(109).to({_off:false},0).wait(1).to({regX:182.5,regY:263,scaleX:1.0089,scaleY:1.0089,x:184.3,y:264.6,startPosition:110},0).wait(1).to({scaleX:1.0179,scaleY:1.0179,x:185.25,y:266.2,startPosition:111},0).wait(1).to({scaleX:1.0269,scaleY:1.0269,x:186.15,y:267.85,startPosition:112},0).wait(1).to({scaleX:1.0359,scaleY:1.0359,x:187.05,y:269.4,startPosition:113},0).wait(1).to({scaleX:1.0446,scaleY:1.0446,x:187.9,y:270.95,startPosition:114},0).wait(1).to({scaleX:1.0532,scaleY:1.0532,x:188.7,y:272.5,startPosition:115},0).wait(1).to({scaleX:1.0614,scaleY:1.0614,x:189.55,y:273.95,startPosition:116},0).wait(1).to({scaleX:1.0693,scaleY:1.0693,x:190.3,y:275.3,startPosition:117},0).wait(1).to({scaleX:1.0767,scaleY:1.0767,x:191.05,y:276.7,startPosition:118},0).wait(1).to({scaleX:1.0838,scaleY:1.0838,x:191.75,y:277.95,startPosition:119},0).wait(1).to({scaleX:1.0903,scaleY:1.0903,x:192.4,y:279.05,startPosition:120},0).wait(1).to({scaleX:1.0965,scaleY:1.0965,x:192.95,y:280.15,startPosition:121},0).wait(1).to({scaleX:1.1022,scaleY:1.1022,x:193.5,y:281.15,startPosition:122},0).wait(1).to({scaleX:1.1074,scaleY:1.1074,x:194.05,y:282.1,startPosition:123},0).wait(1).to({scaleX:1.1123,scaleY:1.1123,x:194.5,y:283,startPosition:124},0).wait(1).to({scaleX:1.1167,scaleY:1.1167,x:194.95,y:283.75,startPosition:125},0).wait(1).to({scaleX:1.1208,scaleY:1.1208,x:195.35,y:284.5,startPosition:126},0).wait(1).to({scaleX:1.1246,scaleY:1.1246,x:195.75,y:285.15,startPosition:127},0).wait(1).to({scaleX:1.1279,scaleY:1.1279,x:196.05,y:285.75,startPosition:128},0).wait(1).to({scaleX:1.131,scaleY:1.131,x:196.35,y:286.3,startPosition:129},0).wait(1).to({scaleX:1.1338,scaleY:1.1338,x:196.6,y:286.8,startPosition:130},0).wait(1).to({scaleX:1.1363,scaleY:1.1363,x:196.85,y:287.25,startPosition:131},0).wait(1).to({scaleX:1.1385,scaleY:1.1385,x:197.1,y:287.65,startPosition:132},0).wait(1).to({scaleX:1.1405,scaleY:1.1405,x:197.3,y:288,startPosition:133},0).wait(1).to({scaleX:1.1422,scaleY:1.1422,x:197.45,y:288.3,startPosition:134},0).wait(1).to({scaleX:1.1438,scaleY:1.1438,x:197.6,y:288.55,startPosition:135},0).wait(1).to({scaleX:1.1451,scaleY:1.1451,x:197.75,y:288.8,startPosition:136},0).wait(1).to({scaleX:1.1462,scaleY:1.1462,x:197.85,y:289,startPosition:137},0).wait(1).to({scaleX:1.1472,scaleY:1.1472,x:197.9,y:289.2,startPosition:138},0).wait(1).to({scaleX:1.1479,scaleY:1.1479,x:198,y:289.3,startPosition:139},0).wait(1).to({regX:91.7,regY:58.4,scaleX:1.1485,scaleY:1.1485,x:93.55,y:54.5,startPosition:140},0).to({regX:91.5,regY:58.5,scaleX:1,scaleY:1,x:92.5,y:58.5,startPosition:220},80,cjs.Ease.quadOut).wait(25));

	// womanTop
	this.womanTop = new lib.womanTop();
	this.womanTop.name = "womanTop";
	this.womanTop.setTransform(137.65,155.25,0.6971,0.6971,0,0,0,247.7,196.9);

	this.timeline.addTween(cjs.Tween.get(this.womanTop).wait(116).to({alpha:0},13).wait(116));

	// mainAnim_Build
	this.mainAnim_Build = new lib.mainAnim_Build("synched",0,false);
	this.mainAnim_Build.name = "mainAnim_Build";
	this.mainAnim_Build.setTransform(104.5,88.7,1,1,0,0,0,-45.5,-36.3);

	this.timeline.addTween(cjs.Tween.get(this.mainAnim_Build).wait(116).to({startPosition:98},0).to({regY:-36.2,scaleX:0.75,scaleY:0.75,rotation:-27.6943,x:120.85,y:144.8,alpha:0},22,cjs.Ease.quadOut).wait(107));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.9,-66.6,421.4,624.6);


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
	this.txtCta.setTransform(52.9,211.95,1,1,0,0,0,36.3,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.txtCta).wait(1));

	// CTA_BG
	this.cta = new lib.CTA_btn();
	this.cta.name = "cta";
	this.cta.setTransform(65.85,213.1,1,1,0,0,0,-49.1,0);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// txt
	this.txt = new lib.txt();
	this.txt.name = "txt";
	this.txt.setTransform(-150,0);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// White_box
	this.boxes = new lib.white_boxes();
	this.boxes.name = "boxes";
	this.boxes.setTransform(75,125,1,1,0,0,0,75,125);

	this.timeline.addTween(cjs.Tween.get(this.boxes).wait(1));

	// Animation
	this.animation = new lib.animation();
	this.animation.name = "animation";
	this.animation.setTransform(148.8,146.8,1,1,0,0,0,148.8,146.8);

	this.timeline.addTween(cjs.Tween.get(this.animation).wait(1));

	// bg image
	this.bg = new lib.bg_1();
	this.bg.name = "bg";
	this.bg.setTransform(150,124,0.84,0.84,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	// bg
	this.bg_1 = new lib.bg();
	this.bg_1.name = "bg_1";
	this.bg_1.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.bg_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mainMC, new cjs.Rectangle(-34.7,-66.2,356.4,356.8), null);


// stage content:
(lib.M365_FSDriveReports_AUS_300x250_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_1 = function(mode,startPosition,loop,reversed) {
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
		var logo = mc.boxes.logo
		var boxSign = mc.animation.mainAnim_Build.boxSign
		var animation = mc.animation
		var bg = mc.bg
		//var PWCE = mc.pop_ups.inner
		//var pen = mc.pop_ups.icon
		
		// var score = mc.pop_ups.score
		
		var sc = mc.animation.spellchecker
		var ul = mc.animation.underline
		
		var txt2 = mc.animation.text_2
		
		// var selected = mc.pop_ups.inner.selected
		
		
		this.runBanner = function() {	
			
				this.tl1 = gsap.timeline();
			
					
				this.tl1.from(animation,{duration:4.5,  ease:Power4.easeOut, onStart:function(){mc.animation.play(0);}}, ">+0.4");
				
			//	this.tl1.from(PWCE,{duration:1,scale: 0,  ease:Power4.easeOut}, ">+1");
			//	this.tl1.from(pen,{duration:0.7,scale: 0,  ease:Power4.easeOut}, ">-0.2");
			//	this.tl1.from(pen,{duration:1,x: "+=50",  ease:Power2.easeOut}, "<+.2");
			//	this.tl1.from(pen,{duration:1,x: "+=200",  ease:Power4.easeOut}, ">-0.3");
			//	this.tl1.from(pen,{duration:0.7,y: "+=100",  ease:Power2.easeOut}, "<+.1");
				
			//	this.tl1.to(pen,{duration:0.1,rotation:+5,scale:.95,  ease:Power2.easeOut}, "<+1");
			//	this.tl1.to(pen,{duration:0.1,rotation:-5,scale:1,  ease:Power2.easeOut, onStart:function(){mc.text.play(135);}}, ">.1");
				
			//	this.tl1.from(selected,{duration:0.1 ,alpha: 0,  ease:Power2.easeOut}, ">-0.2");
			//	this.tl1.from(score,{duration:0.8 ,scale: 0,  ease:Power2.easeOut,onComplete:function(){score.play(0);}}, ">-0.2");
				
			//	this.tl1.to(PWCE,{duration:1,scale: 0,  ease:Power4.easeIn}, ">+1.5");
			//	this.tl1.to(pen,{duration:1,scale: 0,x: "-=10",  ease:Power4.easeIn}, "<");
			//	this.tl1.to(pen,{duration:1,x: "+=200",  ease:Power4.easeIn}, "<");
			//	this.tl1.to(score,{duration:1,scale: 0,  ease:Power4.easeIn}, "<0.1");
			//	this.tl1.to(txt2,{duration:1,alpha: 0,  ease:Power4.easeIn}, "<");
			//	this.tl1.to(sc,{duration:1,alpha: 0,  ease:Power4.easeIn}, "<");
			//	this.tl1.to(ul,{duration:1,alpha: 0,  ease:Power4.easeIn}, "<");
				
				
				//this.tl1.to(animation,{duration:1, x:"+=45", y:"+=0", ease:Power3.easeInOut}, ">-2");
				//this.tl1.to(bg,{duration:1, x:"+=45", y:"+=0", ease:Power3.easeInOut}, "<");
				//this.tl1.to(boxSign,{duration:.6,alpha: 0}, "<");
				
				exportRoot.tl1.pause();
				
				this.tl2 = gsap.timeline();	
				
				//this.tl2.from(box2,{duration:1, x: "-=150",  ease:Power4.easeOut}, ">+.3");
				//this.tl2.from(box1,{duration:1, x: "-=150",  ease:Power4.easeOut}, ">-.8");
				this.tl2.from(logo,{duration:1, alpha: 0,  ease:Power4.easeOut}, ">-0");
				
				this.tl2.from(exportRoot.headline1,{duration:0.8, x: "-=100", alpha: 0, stagger: 0.1, ease:Power4.easeOut}, "<+.2");
				this.tl2.from(exportRoot.headline2,{duration:0.8, x: "-=100", alpha: 0, stagger: 0.1, ease:Power4.easeOut}, ">-.6");
				this.tl2.from(exportRoot.headline3,{duration:0.8, x: "-=100", alpha: 0, stagger: 0.1, ease:Power4.easeOut}, ">-.6");
			
				this.tl2.from(mc.cta , 0.8, { x: "-=200", ease:Power4.easeOut}, ">-0.6");
				this.tl2.from(mc.txtCta, 0.8, { x: "-=150", alpha: 0, ease:Power4.easeOut}, ">-0.8");
				this.tl2.from(mc.replay_btn, 0.7, { alpha: 0,ease:Power4.easeOut, onStart:function(){exportRoot.isReplay = true;}}, "<+.7");
				
				this.tl2.pause();
				
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
p.nominalBounds = new cjs.Rectangle(0,58.8,321.7,231.8);
// library properties:
lib.properties = {
	id: '90A26FE74B042E4A89CA750D1DA2DF1F',
	width: 300,
	height: 250,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/M365_FSDriveReports_AUS_300x250_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_1_atlas_1.png?1625249103829", id:"M365_FSDriveReports_AUS_300x250_BAN_COMP_EN_NA_Standard_ANI_LEA_NA_1_atlas_1"}
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