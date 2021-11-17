(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



(lib.CliftonCoffee_300x600 = function() {
	this.initialize(img.CliftonCoffee_300x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,290,601);


(lib.HouseOfLilac_300x600 = function() {
	this.initialize(img.HouseOfLilac_300x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,290,601);


(lib.ThinkUp_300x600 = function() {
	this.initialize(img.ThinkUp_300x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,290,601);


(lib.TonysChoco_300x600 = function() {
	this.initialize(img.TonysChoco_300x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,290,601);// helper functions:

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


(lib.video = function(mode,startPosition,loop,reversed) {
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


(lib.navdot = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#505050").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(-0.05,-0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#505050").s().p("AhPBNIAAiZICfAAIAACZg");
	this.shape_1.setTransform(-0.0249,0.0001);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-7.7,16,15.4);


(lib.navarrow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#505050").s().p("AgrAdQgDAAgCgDQgCgCAAgDQAAgDACgCIAugqQACgCADAAQACAAADACIApAqQACACAAADQAAADgCACQgCADgDAAQgDAAgCgDIglgkIgoAlQgCACgDAAIAAAAg");
	this.shape.setTransform(9.0247,5.6751);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#505050").s().p("AheA7IAAh1IC9AAIAAB1g");
	this.shape_1.setTransform(9.5,5.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19,11.9);


(lib.mute4_wht = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,2,0,3).p("AACguQgGAEgHAHQgJALgDANQgBAFAAAGQAAAHABAGQADAMAIAKQAFAIAGADAAXgaQgEACgEAEQgJAIABAMQAAANAHAIQADAFAEAB");
	this.shape.setTransform(-6.3219,0.3549);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgohNIA5AyIAYAAIAAA3IgYAAIg5Ayg");
	this.shape_1.setTransform(2.65,0.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-7.5,16.7,15.5);


(lib.mute4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1.5,2,0,3).p("AACguQgGAEgHAHQgJALgDANQgBAFAAAGQAAAHABAGQADAMAIAKQAFAIAGADAAXgaQgEACgEAEQgJAIABAMQAAANAHAIQADAFAEAB");
	this.shape.setTransform(-6.3219,0.3549);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgohNIA5AyIAYAAIAAA3IgYAAIg5Ayg");
	this.shape_1.setTransform(2.65,0.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-7.5,16.7,15.5);


(lib.mute3_wht = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,2,0,3).p("AAXgaQgEACgEAEQgJAIABAMQAAANAHAIQADAFAEABAACguQgGAEgHAHQgJALgDANQgBAFAAAGQAAAHABAGQADAMAIAKQAFAIAGAD");
	this.shape.setTransform(-6.3219,0.3549);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgohNIA5AyIAYAAIAAA3IgYAAIg5Ayg");
	this.shape_1.setTransform(2.65,0.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-7.5,16.7,15.5);


(lib.mute3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1.5,2,0,3).p("AACguQgGAEgHAHQgJALgDANQgBAFAAAGQAAAHABAGQADAMAIAKQAFAIAGADAAXgaQgEACgEAEQgJAIABAMQAAANAHAIQADAFAEAB");
	this.shape.setTransform(-6.3219,0.3549);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgohNIA5AyIAYAAIAAA3IgYAAIg5Ayg");
	this.shape_1.setTransform(2.65,0.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-7.5,16.7,15.5);


(lib.mute2_wht = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(2,2,0,3).p("AgSATIASgTIgTgSAAUASIgUgSIASgT");
	this.shape.setTransform(-7.0247,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgohNIA5AyIAYAAIAAA3IgYAAIg5Ayg");
	this.shape_1.setTransform(2.65,0.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,-7.5,17.2,15.5);


(lib.mute2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,2,0,3).p("AAUASIgUgSIASgTAgSATIASgTIgTgS");
	this.shape.setTransform(-7.0247,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgohNIA5AyIAYAAIAAA3IgYAAIg5Ayg");
	this.shape_1.setTransform(2.65,0.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,-7.5,17.2,15.5);


(lib.mute_1_wht = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(2,2,0,3).p("AgSATIASgTIgTgSAAUASIgUgSIASgT");
	this.shape.setTransform(-7.0247,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgohNIA5AyIAYAAIAAA3IgYAAIg5Ayg");
	this.shape_1.setTransform(2.65,0.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,-7.5,17.2,15.5);


(lib.mute_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,2,0,3).p("AAUASIgUgSIASgTAgSATIASgTIgTgS");
	this.shape.setTransform(-7.0247,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgohNIA5AyIAYAAIAAA3IgYAAIg5Ayg");
	this.shape_1.setTransform(2.65,0.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,-7.5,17.2,15.5);


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
	this.shape.setTransform(21.2128,21.2128,0.3866,0.3866);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A4EF").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_1.setTransform(6.6103,21.2128,0.3866,0.3866);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7FBA00").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_2.setTransform(21.2128,6.6103,0.3866,0.3866);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F25022").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_3.setTransform(6.6103,6.6103,0.3866,0.3866);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#737373").s().p("AGoBSQgJgKAAgTIAAg9IgqAAIAABhIgdAAIAAhhIgUAAIAAgXIAUAAIAAgQQAAgTANgMQANgMASAAIAJABIAHABIAAAZIgEgDIgIgBQgJAAgFAFQgFAHAAAKIAAAOIAqAAIAAgbIAcgIIAAAjIAdAAIAAAXIgdAAIAAA3QABAMAEAEQADAFAJAAIAGgCIAGgDIAAAYIgJADIgMABQgSAAgJgJgADXBLQgRgQAAgdQAAgdARgRQARgSAeAAQAcABAPAQQAQARABAbQAAAdgRASQgRARgdAAQgcAAgQgQgADsAAQgIAKAAATQAAATAIAJQAJALAPAAQAQAAAJgLQAHgJAAgUQAAgTgIgJQgIgKgQABQgPgBgJAKgAB6BaIgQgFIAAgcQAIAFAJADQAKAEAGAAQAJAAAFgDQAFgDAAgGQAAgGgFgEQgEgEgOgFQgPgHgHgHQgGgJgBgNQAAgOANgLQANgLAVAAIAOACIANAEIAAAaIgNgGQgIgDgHAAQgIAAgEADQgFAEAAAEQAAAGAEADQADADAOAGQARAHAGAJQAIAIAAAMQgBARgNAKQgMAKgXAAIgQgBgAgMBLQgRgQAAgdQAAgdARgRQAPgSAfAAQAcABAQAQQAPARAAAbQAAAegQARQgSARgcAAQgdAAgOgQgAAIAAQgIAKAAATQAAATAIAJQAIALARAAQAPAAAHgLQAJgJAAgUQAAgSgJgKQgIgKgPABQgQgBgIAKgAjGBKQgRgQAAgaQAAgdARgSQARgTAeAAQAJAAAIACQAIACAFAEIAAAaQgHgEgHgDQgGgDgHABQgSAAgJAJQgLALAAASQAAATAKAJQAKALAQAAQAHAAAHgDQAIgDAHgFIAAAaQgHAEgIADIgTABQgbAAgQgRgAhkBZIAAh4IAcAAIAAAUIAAAAQAEgKAIgGQAIgFALgBIAGABIAFABIAAAdIgHgEQgEgBgGAAQgKAAgIAIQgHAIAAATIAAA9gAkHBZIAAh4IAcAAIAAB4gAk/BZIAAiDIAAAAIg0CDIgTAAIg2iDIAAAAIAACDIgbAAIAAinIApAAIAxB7IABAAIAyh7IAoAAIAACngAkFg1QgFgFAAgHQAAgHAFgFQAGgFAGABQAHgBAGAFQAEAFAAAHQAAAHgEAFQgGAEgHAAQgHAAgFgEg");
	this.shape_4.setTransform(83.4,13.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#737373").s().p("AhXDUQgegJgOgIIAAhDQAXARAYAHQAYAJAXgBQArABAagWQAagVAAglQAAgkgbgUQgbgUgxAAIhHAEIAPjkIDWAAIAAA+IiaAAIgHBqIATgCIATAAQBDAAAmAjQAlAjAAA8QAABBgrAnQgqAnhLAAQgfAAgcgIg");
	this.shape_5.setTransform(167.1029,14.0517,0.3866,0.3866);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#737373").s().p("AhrCrQgpg1AAheQAAh5A2g/QA3g+BQAAQAaAAATADQAWADAMAGIAABBQgRgJgUgFQgTgFgTAAQg1AAggAqQggAogBBKIACAAQAMgXAagNQAZgMAfAAQAzAAAlAiQAmAhgBBBQABBFgqAnQgrAng9AAQhFAAgpg0gAgyAVQgUAWAAAhQAAAlAVAaQAVAZAgAAQAfAAAVgWQATgWAAgmQAAgogTgVQgTgVgiAAQgfAAgWAVg");
	this.shape_6.setTransform(154.8971,13.9067,0.3866,0.3866);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#737373").s().p("AhXDZQgcgHgQgKIAAhGQAVAQAaAJQAcAJAbAAQAoAAAXgTQAXgTAAggQAAgigbgTQgcgSgyAAIgmAAIAAg6IAjAAQAvAAAWgRQAZgRAAghQAAgdgTgQQgTgRgiAAQgYAAgUAIQgWAIgUAPIAAhCQAVgLAagGQAagGAfAAQA3AAAlAdQAkAeAAAuQAAAqgWAbQgXAcgoAKIAAACQAuAFAbAaQAbAcAAApQAAA8grAjQgrAkhJAAQggAAgcgGg");
	this.shape_7.setTransform(142.44,13.9067,0.3866,0.3866);

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


(lib.img4 = function(mode,startPosition,loop,reversed) {
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
	this.frame_29 = function() {
		this.stop();
		this.alpha=0;
	}
	this.frame_30 = function() {
		this.alpha=1;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1).call(this.frame_30).wait(30));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_1 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_2 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_3 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_4 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_5 = new cjs.Graphics().p("EgVGAsjMAAAhZFMAqMAAAMAAABZFg");
	var mask_graphics_6 = new cjs.Graphics().p("EgVGAsjMAAAhZFMAqNAAAMAAABZFg");
	var mask_graphics_7 = new cjs.Graphics().p("EgVHAskMAAAhZHMAqOAAAMAAABZHg");
	var mask_graphics_8 = new cjs.Graphics().p("EgVIAslMAAAhZJMAqRAAAMAAABZJg");
	var mask_graphics_9 = new cjs.Graphics().p("EgVJAsnMAAAhZMMAqUAAAMAAABZMg");
	var mask_graphics_10 = new cjs.Graphics().p("EgVMAspMAAAhZRMAqZAAAMAAABZRg");
	var mask_graphics_11 = new cjs.Graphics().p("EgVPAssMAAAhZXMAqfAAAMAAABZXg");
	var mask_graphics_12 = new cjs.Graphics().p("EgVTAswMAAAhZfMAqnAAAMAAABZfg");
	var mask_graphics_13 = new cjs.Graphics().p("EgVYAs2MAAAhZqMAqxAAAMAAABZqg");
	var mask_graphics_14 = new cjs.Graphics().p("EgVfAs8MAAAhZ3MAq/AAAMAAABZ3g");
	var mask_graphics_15 = new cjs.Graphics().p("EgVnAtEMAAAhaHMArPAAAMAAABaHg");
	var mask_graphics_16 = new cjs.Graphics().p("EgVtAtKMAAAhaTMArcAAAMAAABaTg");
	var mask_graphics_17 = new cjs.Graphics().p("EgVzAtQMAAAhafMArnAAAMAAABafg");
	var mask_graphics_18 = new cjs.Graphics().p("EgV3AtUMAAAhanMArvAAAMAAABang");
	var mask_graphics_19 = new cjs.Graphics().p("EgV6AtXMAAAhatMAr1AAAMAAABatg");
	var mask_graphics_20 = new cjs.Graphics().p("EgV9AtaMAAAhazMAr6AAAMAAABazg");
	var mask_graphics_21 = new cjs.Graphics().p("EgV+AtbMAAAha1MAr9AAAMAAABa1g");
	var mask_graphics_22 = new cjs.Graphics().p("EgV/AtcMAAAha3MAsAAAAMAAABa3g");
	var mask_graphics_23 = new cjs.Graphics().p("EgWAAtdMAAAha5MAsBAAAMAAABa5g");
	var mask_graphics_24 = new cjs.Graphics().p("EgWAAtdMAAAha5MAsCAAAMAAABa5g");
	var mask_graphics_25 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_26 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_27 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_28 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_29 = new cjs.Graphics().p("EgVUAuLMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_30 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_31 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_32 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_33 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_34 = new cjs.Graphics().p("EgWAAtdMAAAha5MAsCAAAMAAABa5g");
	var mask_graphics_35 = new cjs.Graphics().p("EgWAAtdMAAAha5MAsBAAAMAAABa5g");
	var mask_graphics_36 = new cjs.Graphics().p("EgV/AtcMAAAha3MAsAAAAMAAABa3g");
	var mask_graphics_37 = new cjs.Graphics().p("EgV+AtcMAAAha2MAr+AAAMAAABa2g");
	var mask_graphics_38 = new cjs.Graphics().p("EgV9AtaMAAAhazMAr7AAAMAAABazg");
	var mask_graphics_39 = new cjs.Graphics().p("EgV7AtYMAAAhavMAr3AAAMAAABavg");
	var mask_graphics_40 = new cjs.Graphics().p("EgV5AtVMAAAhaqMArzAAAMAAABaqg");
	var mask_graphics_41 = new cjs.Graphics().p("EgV0AtSMAAAhaiMArpAAAMAAABaig");
	var mask_graphics_42 = new cjs.Graphics().p("EgVwAtNMAAAhaZMArhAAAMAAABaZg");
	var mask_graphics_43 = new cjs.Graphics().p("EgVqAtHMAAAhaNMArVAAAMAAABaNg");
	var mask_graphics_44 = new cjs.Graphics().p("EgVjAtAMAAAhZ/MArHAAAMAAABZ/g");
	var mask_graphics_45 = new cjs.Graphics().p("EgVcAs5MAAAhZxMAq5AAAMAAABZxg");
	var mask_graphics_46 = new cjs.Graphics().p("EgVWAszMAAAhZlMAqtAAAMAAABZlg");
	var mask_graphics_47 = new cjs.Graphics().p("EgVRAsvMAAAhZcMAqkAAAMAAABZcg");
	var mask_graphics_48 = new cjs.Graphics().p("EgVOAsqMAAAhZUMAqcAAAMAAABZUg");
	var mask_graphics_49 = new cjs.Graphics().p("EgVLAsoMAAAhZPMAqXAAAMAAABZPg");
	var mask_graphics_50 = new cjs.Graphics().p("EgVJAsmMAAAhZLMAqTAAAMAAABZLg");
	var mask_graphics_51 = new cjs.Graphics().p("EgVHAslMAAAhZIMAqPAAAMAAABZIg");
	var mask_graphics_52 = new cjs.Graphics().p("EgVHAskMAAAhZHMAqOAAAMAAABZHg");
	var mask_graphics_53 = new cjs.Graphics().p("EgVGAsjMAAAhZFMAqNAAAMAAABZFg");
	var mask_graphics_54 = new cjs.Graphics().p("EgVGAsjMAAAhZFMAqMAAAMAAABZFg");
	var mask_graphics_55 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_56 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_57 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_58 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_59 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:150,y:300}).wait(1).to({graphics:mask_graphics_1,x:150,y:300}).wait(1).to({graphics:mask_graphics_2,x:150,y:300}).wait(1).to({graphics:mask_graphics_3,x:150,y:300}).wait(1).to({graphics:mask_graphics_4,x:150,y:300}).wait(1).to({graphics:mask_graphics_5,x:150,y:300}).wait(1).to({graphics:mask_graphics_6,x:150,y:300}).wait(1).to({graphics:mask_graphics_7,x:150,y:300}).wait(1).to({graphics:mask_graphics_8,x:150,y:300}).wait(1).to({graphics:mask_graphics_9,x:150,y:300}).wait(1).to({graphics:mask_graphics_10,x:150,y:300}).wait(1).to({graphics:mask_graphics_11,x:150,y:300}).wait(1).to({graphics:mask_graphics_12,x:150,y:300}).wait(1).to({graphics:mask_graphics_13,x:150,y:300}).wait(1).to({graphics:mask_graphics_14,x:150,y:300}).wait(1).to({graphics:mask_graphics_15,x:150,y:300}).wait(1).to({graphics:mask_graphics_16,x:150,y:300}).wait(1).to({graphics:mask_graphics_17,x:150,y:300}).wait(1).to({graphics:mask_graphics_18,x:150,y:300}).wait(1).to({graphics:mask_graphics_19,x:150,y:300}).wait(1).to({graphics:mask_graphics_20,x:150,y:300}).wait(1).to({graphics:mask_graphics_21,x:150,y:300}).wait(1).to({graphics:mask_graphics_22,x:150,y:300}).wait(1).to({graphics:mask_graphics_23,x:150,y:300}).wait(1).to({graphics:mask_graphics_24,x:150,y:300}).wait(1).to({graphics:mask_graphics_25,x:150,y:300}).wait(1).to({graphics:mask_graphics_26,x:150,y:300}).wait(1).to({graphics:mask_graphics_27,x:150,y:300}).wait(1).to({graphics:mask_graphics_28,x:150,y:300}).wait(1).to({graphics:mask_graphics_29,x:145.5022,y:295.5084}).wait(1).to({graphics:mask_graphics_30,x:150,y:300}).wait(1).to({graphics:mask_graphics_31,x:150,y:300}).wait(1).to({graphics:mask_graphics_32,x:150,y:300}).wait(1).to({graphics:mask_graphics_33,x:150,y:300}).wait(1).to({graphics:mask_graphics_34,x:150,y:300}).wait(1).to({graphics:mask_graphics_35,x:150,y:300}).wait(1).to({graphics:mask_graphics_36,x:150,y:300}).wait(1).to({graphics:mask_graphics_37,x:150,y:300}).wait(1).to({graphics:mask_graphics_38,x:150,y:300}).wait(1).to({graphics:mask_graphics_39,x:150,y:300}).wait(1).to({graphics:mask_graphics_40,x:150,y:300}).wait(1).to({graphics:mask_graphics_41,x:150,y:300}).wait(1).to({graphics:mask_graphics_42,x:150,y:300}).wait(1).to({graphics:mask_graphics_43,x:150,y:300}).wait(1).to({graphics:mask_graphics_44,x:150,y:300}).wait(1).to({graphics:mask_graphics_45,x:150,y:300}).wait(1).to({graphics:mask_graphics_46,x:150,y:300}).wait(1).to({graphics:mask_graphics_47,x:150,y:300}).wait(1).to({graphics:mask_graphics_48,x:150,y:300}).wait(1).to({graphics:mask_graphics_49,x:150,y:300}).wait(1).to({graphics:mask_graphics_50,x:150,y:300}).wait(1).to({graphics:mask_graphics_51,x:150,y:300}).wait(1).to({graphics:mask_graphics_52,x:150,y:300}).wait(1).to({graphics:mask_graphics_53,x:150,y:300}).wait(1).to({graphics:mask_graphics_54,x:150,y:300}).wait(1).to({graphics:mask_graphics_55,x:150,y:300}).wait(1).to({graphics:mask_graphics_56,x:150,y:300}).wait(1).to({graphics:mask_graphics_57,x:150,y:300}).wait(1).to({graphics:mask_graphics_58,x:150,y:300}).wait(1).to({graphics:mask_graphics_59,x:150,y:300}).wait(1));

	// Layer_2
	this.instance = new lib.HouseOfLilac_300x600();
	this.instance.setTransform(9.1,8.9,0.9716,0.9691);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bdsMAAAg7XMAu3AAAMAAAA7Xg");
	this.shape.setTransform(150.0023,300.0003,1,1.5789);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-444.1,-0.1,873.6,803.6);


(lib.img3 = function(mode,startPosition,loop,reversed) {
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
	this.frame_29 = function() {
		this.stop();
		this.alpha=0;
	}
	this.frame_30 = function() {
		this.alpha=1;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1).call(this.frame_30).wait(30));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_1 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_2 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_3 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_4 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_5 = new cjs.Graphics().p("EgVGAsjMAAAhZFMAqMAAAMAAABZFg");
	var mask_graphics_6 = new cjs.Graphics().p("EgVGAsjMAAAhZFMAqNAAAMAAABZFg");
	var mask_graphics_7 = new cjs.Graphics().p("EgVHAskMAAAhZHMAqOAAAMAAABZHg");
	var mask_graphics_8 = new cjs.Graphics().p("EgVIAslMAAAhZJMAqRAAAMAAABZJg");
	var mask_graphics_9 = new cjs.Graphics().p("EgVJAsnMAAAhZMMAqUAAAMAAABZMg");
	var mask_graphics_10 = new cjs.Graphics().p("EgVMAspMAAAhZRMAqZAAAMAAABZRg");
	var mask_graphics_11 = new cjs.Graphics().p("EgVPAssMAAAhZXMAqfAAAMAAABZXg");
	var mask_graphics_12 = new cjs.Graphics().p("EgVTAswMAAAhZfMAqnAAAMAAABZfg");
	var mask_graphics_13 = new cjs.Graphics().p("EgVYAs2MAAAhZqMAqxAAAMAAABZqg");
	var mask_graphics_14 = new cjs.Graphics().p("EgVfAs8MAAAhZ3MAq/AAAMAAABZ3g");
	var mask_graphics_15 = new cjs.Graphics().p("EgVnAtEMAAAhaHMArPAAAMAAABaHg");
	var mask_graphics_16 = new cjs.Graphics().p("EgVtAtKMAAAhaTMArcAAAMAAABaTg");
	var mask_graphics_17 = new cjs.Graphics().p("EgVzAtQMAAAhafMArnAAAMAAABafg");
	var mask_graphics_18 = new cjs.Graphics().p("EgV3AtUMAAAhanMArvAAAMAAABang");
	var mask_graphics_19 = new cjs.Graphics().p("EgV6AtXMAAAhatMAr1AAAMAAABatg");
	var mask_graphics_20 = new cjs.Graphics().p("EgV9AtaMAAAhazMAr6AAAMAAABazg");
	var mask_graphics_21 = new cjs.Graphics().p("EgV+AtbMAAAha1MAr9AAAMAAABa1g");
	var mask_graphics_22 = new cjs.Graphics().p("EgV/AtcMAAAha3MAsAAAAMAAABa3g");
	var mask_graphics_23 = new cjs.Graphics().p("EgWAAtdMAAAha5MAsBAAAMAAABa5g");
	var mask_graphics_24 = new cjs.Graphics().p("EgWAAtdMAAAha5MAsCAAAMAAABa5g");
	var mask_graphics_25 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_26 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_27 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_28 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_29 = new cjs.Graphics().p("EgVUAuLMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_30 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_31 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_32 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_33 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_34 = new cjs.Graphics().p("EgWAAtdMAAAha5MAsCAAAMAAABa5g");
	var mask_graphics_35 = new cjs.Graphics().p("EgWAAtdMAAAha5MAsBAAAMAAABa5g");
	var mask_graphics_36 = new cjs.Graphics().p("EgV/AtcMAAAha3MAsAAAAMAAABa3g");
	var mask_graphics_37 = new cjs.Graphics().p("EgV+AtcMAAAha2MAr+AAAMAAABa2g");
	var mask_graphics_38 = new cjs.Graphics().p("EgV9AtaMAAAhazMAr7AAAMAAABazg");
	var mask_graphics_39 = new cjs.Graphics().p("EgV7AtYMAAAhavMAr3AAAMAAABavg");
	var mask_graphics_40 = new cjs.Graphics().p("EgV5AtVMAAAhaqMArzAAAMAAABaqg");
	var mask_graphics_41 = new cjs.Graphics().p("EgV0AtSMAAAhaiMArpAAAMAAABaig");
	var mask_graphics_42 = new cjs.Graphics().p("EgVwAtNMAAAhaZMArhAAAMAAABaZg");
	var mask_graphics_43 = new cjs.Graphics().p("EgVqAtHMAAAhaNMArVAAAMAAABaNg");
	var mask_graphics_44 = new cjs.Graphics().p("EgVjAtAMAAAhZ/MArHAAAMAAABZ/g");
	var mask_graphics_45 = new cjs.Graphics().p("EgVcAs5MAAAhZxMAq5AAAMAAABZxg");
	var mask_graphics_46 = new cjs.Graphics().p("EgVWAszMAAAhZlMAqtAAAMAAABZlg");
	var mask_graphics_47 = new cjs.Graphics().p("EgVRAsvMAAAhZcMAqkAAAMAAABZcg");
	var mask_graphics_48 = new cjs.Graphics().p("EgVOAsqMAAAhZUMAqcAAAMAAABZUg");
	var mask_graphics_49 = new cjs.Graphics().p("EgVLAsoMAAAhZPMAqXAAAMAAABZPg");
	var mask_graphics_50 = new cjs.Graphics().p("EgVJAsmMAAAhZLMAqTAAAMAAABZLg");
	var mask_graphics_51 = new cjs.Graphics().p("EgVHAslMAAAhZIMAqPAAAMAAABZIg");
	var mask_graphics_52 = new cjs.Graphics().p("EgVHAskMAAAhZHMAqOAAAMAAABZHg");
	var mask_graphics_53 = new cjs.Graphics().p("EgVGAsjMAAAhZFMAqNAAAMAAABZFg");
	var mask_graphics_54 = new cjs.Graphics().p("EgVGAsjMAAAhZFMAqMAAAMAAABZFg");
	var mask_graphics_55 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_56 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_57 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_58 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_59 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:150,y:300}).wait(1).to({graphics:mask_graphics_1,x:150,y:300}).wait(1).to({graphics:mask_graphics_2,x:150,y:300}).wait(1).to({graphics:mask_graphics_3,x:150,y:300}).wait(1).to({graphics:mask_graphics_4,x:150,y:300}).wait(1).to({graphics:mask_graphics_5,x:150,y:300}).wait(1).to({graphics:mask_graphics_6,x:150,y:300}).wait(1).to({graphics:mask_graphics_7,x:150,y:300}).wait(1).to({graphics:mask_graphics_8,x:150,y:300}).wait(1).to({graphics:mask_graphics_9,x:150,y:300}).wait(1).to({graphics:mask_graphics_10,x:150,y:300}).wait(1).to({graphics:mask_graphics_11,x:150,y:300}).wait(1).to({graphics:mask_graphics_12,x:150,y:300}).wait(1).to({graphics:mask_graphics_13,x:150,y:300}).wait(1).to({graphics:mask_graphics_14,x:150,y:300}).wait(1).to({graphics:mask_graphics_15,x:150,y:300}).wait(1).to({graphics:mask_graphics_16,x:150,y:300}).wait(1).to({graphics:mask_graphics_17,x:150,y:300}).wait(1).to({graphics:mask_graphics_18,x:150,y:300}).wait(1).to({graphics:mask_graphics_19,x:150,y:300}).wait(1).to({graphics:mask_graphics_20,x:150,y:300}).wait(1).to({graphics:mask_graphics_21,x:150,y:300}).wait(1).to({graphics:mask_graphics_22,x:150,y:300}).wait(1).to({graphics:mask_graphics_23,x:150,y:300}).wait(1).to({graphics:mask_graphics_24,x:150,y:300}).wait(1).to({graphics:mask_graphics_25,x:150,y:300}).wait(1).to({graphics:mask_graphics_26,x:150,y:300}).wait(1).to({graphics:mask_graphics_27,x:150,y:300}).wait(1).to({graphics:mask_graphics_28,x:150,y:300}).wait(1).to({graphics:mask_graphics_29,x:145.5022,y:295.5084}).wait(1).to({graphics:mask_graphics_30,x:150,y:300}).wait(1).to({graphics:mask_graphics_31,x:150,y:300}).wait(1).to({graphics:mask_graphics_32,x:150,y:300}).wait(1).to({graphics:mask_graphics_33,x:150,y:300}).wait(1).to({graphics:mask_graphics_34,x:150,y:300}).wait(1).to({graphics:mask_graphics_35,x:150,y:300}).wait(1).to({graphics:mask_graphics_36,x:150,y:300}).wait(1).to({graphics:mask_graphics_37,x:150,y:300}).wait(1).to({graphics:mask_graphics_38,x:150,y:300}).wait(1).to({graphics:mask_graphics_39,x:150,y:300}).wait(1).to({graphics:mask_graphics_40,x:150,y:300}).wait(1).to({graphics:mask_graphics_41,x:150,y:300}).wait(1).to({graphics:mask_graphics_42,x:150,y:300}).wait(1).to({graphics:mask_graphics_43,x:150,y:300}).wait(1).to({graphics:mask_graphics_44,x:150,y:300}).wait(1).to({graphics:mask_graphics_45,x:150,y:300}).wait(1).to({graphics:mask_graphics_46,x:150,y:300}).wait(1).to({graphics:mask_graphics_47,x:150,y:300}).wait(1).to({graphics:mask_graphics_48,x:150,y:300}).wait(1).to({graphics:mask_graphics_49,x:150,y:300}).wait(1).to({graphics:mask_graphics_50,x:150,y:300}).wait(1).to({graphics:mask_graphics_51,x:150,y:300}).wait(1).to({graphics:mask_graphics_52,x:150,y:300}).wait(1).to({graphics:mask_graphics_53,x:150,y:300}).wait(1).to({graphics:mask_graphics_54,x:150,y:300}).wait(1).to({graphics:mask_graphics_55,x:150,y:300}).wait(1).to({graphics:mask_graphics_56,x:150,y:300}).wait(1).to({graphics:mask_graphics_57,x:150,y:300}).wait(1).to({graphics:mask_graphics_58,x:150,y:300}).wait(1).to({graphics:mask_graphics_59,x:150,y:300}).wait(1));

	// Layer_2
	this.instance = new lib.ThinkUp_300x600();
	this.instance.setTransform(8.9,9.1,0.9731,0.9679);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bdsMAAAg7XMAu3AAAMAAAA7Xg");
	this.shape.setTransform(150.0023,300.0003,1,1.5789);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-444.1,0,892.6,803.5);


(lib.img2 = function(mode,startPosition,loop,reversed) {
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
	this.frame_29 = function() {
		this.stop();
		this.alpha=0;
	}
	this.frame_30 = function() {
		this.alpha=1;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1).call(this.frame_30).wait(30));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_1 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_2 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_3 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_4 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_5 = new cjs.Graphics().p("EgVGAsjMAAAhZFMAqMAAAMAAABZFg");
	var mask_graphics_6 = new cjs.Graphics().p("EgVGAsjMAAAhZFMAqNAAAMAAABZFg");
	var mask_graphics_7 = new cjs.Graphics().p("EgVHAskMAAAhZHMAqOAAAMAAABZHg");
	var mask_graphics_8 = new cjs.Graphics().p("EgVIAslMAAAhZJMAqRAAAMAAABZJg");
	var mask_graphics_9 = new cjs.Graphics().p("EgVJAsnMAAAhZMMAqUAAAMAAABZMg");
	var mask_graphics_10 = new cjs.Graphics().p("EgVMAspMAAAhZRMAqZAAAMAAABZRg");
	var mask_graphics_11 = new cjs.Graphics().p("EgVPAssMAAAhZXMAqfAAAMAAABZXg");
	var mask_graphics_12 = new cjs.Graphics().p("EgVTAswMAAAhZfMAqnAAAMAAABZfg");
	var mask_graphics_13 = new cjs.Graphics().p("EgVYAs2MAAAhZqMAqxAAAMAAABZqg");
	var mask_graphics_14 = new cjs.Graphics().p("EgVfAs8MAAAhZ3MAq/AAAMAAABZ3g");
	var mask_graphics_15 = new cjs.Graphics().p("EgVnAtEMAAAhaHMArPAAAMAAABaHg");
	var mask_graphics_16 = new cjs.Graphics().p("EgVtAtKMAAAhaTMArcAAAMAAABaTg");
	var mask_graphics_17 = new cjs.Graphics().p("EgVzAtQMAAAhafMArnAAAMAAABafg");
	var mask_graphics_18 = new cjs.Graphics().p("EgV3AtUMAAAhanMArvAAAMAAABang");
	var mask_graphics_19 = new cjs.Graphics().p("EgV6AtXMAAAhatMAr1AAAMAAABatg");
	var mask_graphics_20 = new cjs.Graphics().p("EgV9AtaMAAAhazMAr6AAAMAAABazg");
	var mask_graphics_21 = new cjs.Graphics().p("EgV+AtbMAAAha1MAr9AAAMAAABa1g");
	var mask_graphics_22 = new cjs.Graphics().p("EgV/AtcMAAAha3MAsAAAAMAAABa3g");
	var mask_graphics_23 = new cjs.Graphics().p("EgWAAtdMAAAha5MAsBAAAMAAABa5g");
	var mask_graphics_24 = new cjs.Graphics().p("EgWAAtdMAAAha5MAsCAAAMAAABa5g");
	var mask_graphics_25 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_26 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_27 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_28 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_29 = new cjs.Graphics().p("EgVUAuLMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_30 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_31 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_32 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_33 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_34 = new cjs.Graphics().p("EgWAAtdMAAAha5MAsCAAAMAAABa5g");
	var mask_graphics_35 = new cjs.Graphics().p("EgWAAtdMAAAha5MAsBAAAMAAABa5g");
	var mask_graphics_36 = new cjs.Graphics().p("EgV/AtcMAAAha3MAsAAAAMAAABa3g");
	var mask_graphics_37 = new cjs.Graphics().p("EgV+AtcMAAAha2MAr+AAAMAAABa2g");
	var mask_graphics_38 = new cjs.Graphics().p("EgV9AtaMAAAhazMAr7AAAMAAABazg");
	var mask_graphics_39 = new cjs.Graphics().p("EgV7AtYMAAAhavMAr3AAAMAAABavg");
	var mask_graphics_40 = new cjs.Graphics().p("EgV5AtVMAAAhaqMArzAAAMAAABaqg");
	var mask_graphics_41 = new cjs.Graphics().p("EgV0AtSMAAAhaiMArpAAAMAAABaig");
	var mask_graphics_42 = new cjs.Graphics().p("EgVwAtNMAAAhaZMArhAAAMAAABaZg");
	var mask_graphics_43 = new cjs.Graphics().p("EgVqAtHMAAAhaNMArVAAAMAAABaNg");
	var mask_graphics_44 = new cjs.Graphics().p("EgVjAtAMAAAhZ/MArHAAAMAAABZ/g");
	var mask_graphics_45 = new cjs.Graphics().p("EgVcAs5MAAAhZxMAq5AAAMAAABZxg");
	var mask_graphics_46 = new cjs.Graphics().p("EgVWAszMAAAhZlMAqtAAAMAAABZlg");
	var mask_graphics_47 = new cjs.Graphics().p("EgVRAsvMAAAhZcMAqkAAAMAAABZcg");
	var mask_graphics_48 = new cjs.Graphics().p("EgVOAsqMAAAhZUMAqcAAAMAAABZUg");
	var mask_graphics_49 = new cjs.Graphics().p("EgVLAsoMAAAhZPMAqXAAAMAAABZPg");
	var mask_graphics_50 = new cjs.Graphics().p("EgVJAsmMAAAhZLMAqTAAAMAAABZLg");
	var mask_graphics_51 = new cjs.Graphics().p("EgVHAslMAAAhZIMAqPAAAMAAABZIg");
	var mask_graphics_52 = new cjs.Graphics().p("EgVHAskMAAAhZHMAqOAAAMAAABZHg");
	var mask_graphics_53 = new cjs.Graphics().p("EgVGAsjMAAAhZFMAqNAAAMAAABZFg");
	var mask_graphics_54 = new cjs.Graphics().p("EgVGAsjMAAAhZFMAqMAAAMAAABZFg");
	var mask_graphics_55 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_56 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_57 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_58 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_59 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:150,y:300}).wait(1).to({graphics:mask_graphics_1,x:150,y:300}).wait(1).to({graphics:mask_graphics_2,x:150,y:300}).wait(1).to({graphics:mask_graphics_3,x:150,y:300}).wait(1).to({graphics:mask_graphics_4,x:150,y:300}).wait(1).to({graphics:mask_graphics_5,x:150,y:300}).wait(1).to({graphics:mask_graphics_6,x:150,y:300}).wait(1).to({graphics:mask_graphics_7,x:150,y:300}).wait(1).to({graphics:mask_graphics_8,x:150,y:300}).wait(1).to({graphics:mask_graphics_9,x:150,y:300}).wait(1).to({graphics:mask_graphics_10,x:150,y:300}).wait(1).to({graphics:mask_graphics_11,x:150,y:300}).wait(1).to({graphics:mask_graphics_12,x:150,y:300}).wait(1).to({graphics:mask_graphics_13,x:150,y:300}).wait(1).to({graphics:mask_graphics_14,x:150,y:300}).wait(1).to({graphics:mask_graphics_15,x:150,y:300}).wait(1).to({graphics:mask_graphics_16,x:150,y:300}).wait(1).to({graphics:mask_graphics_17,x:150,y:300}).wait(1).to({graphics:mask_graphics_18,x:150,y:300}).wait(1).to({graphics:mask_graphics_19,x:150,y:300}).wait(1).to({graphics:mask_graphics_20,x:150,y:300}).wait(1).to({graphics:mask_graphics_21,x:150,y:300}).wait(1).to({graphics:mask_graphics_22,x:150,y:300}).wait(1).to({graphics:mask_graphics_23,x:150,y:300}).wait(1).to({graphics:mask_graphics_24,x:150,y:300}).wait(1).to({graphics:mask_graphics_25,x:150,y:300}).wait(1).to({graphics:mask_graphics_26,x:150,y:300}).wait(1).to({graphics:mask_graphics_27,x:150,y:300}).wait(1).to({graphics:mask_graphics_28,x:150,y:300}).wait(1).to({graphics:mask_graphics_29,x:145.5022,y:295.5084}).wait(1).to({graphics:mask_graphics_30,x:150,y:300}).wait(1).to({graphics:mask_graphics_31,x:150,y:300}).wait(1).to({graphics:mask_graphics_32,x:150,y:300}).wait(1).to({graphics:mask_graphics_33,x:150,y:300}).wait(1).to({graphics:mask_graphics_34,x:150,y:300}).wait(1).to({graphics:mask_graphics_35,x:150,y:300}).wait(1).to({graphics:mask_graphics_36,x:150,y:300}).wait(1).to({graphics:mask_graphics_37,x:150,y:300}).wait(1).to({graphics:mask_graphics_38,x:150,y:300}).wait(1).to({graphics:mask_graphics_39,x:150,y:300}).wait(1).to({graphics:mask_graphics_40,x:150,y:300}).wait(1).to({graphics:mask_graphics_41,x:150,y:300}).wait(1).to({graphics:mask_graphics_42,x:150,y:300}).wait(1).to({graphics:mask_graphics_43,x:150,y:300}).wait(1).to({graphics:mask_graphics_44,x:150,y:300}).wait(1).to({graphics:mask_graphics_45,x:150,y:300}).wait(1).to({graphics:mask_graphics_46,x:150,y:300}).wait(1).to({graphics:mask_graphics_47,x:150,y:300}).wait(1).to({graphics:mask_graphics_48,x:150,y:300}).wait(1).to({graphics:mask_graphics_49,x:150,y:300}).wait(1).to({graphics:mask_graphics_50,x:150,y:300}).wait(1).to({graphics:mask_graphics_51,x:150,y:300}).wait(1).to({graphics:mask_graphics_52,x:150,y:300}).wait(1).to({graphics:mask_graphics_53,x:150,y:300}).wait(1).to({graphics:mask_graphics_54,x:150,y:300}).wait(1).to({graphics:mask_graphics_55,x:150,y:300}).wait(1).to({graphics:mask_graphics_56,x:150,y:300}).wait(1).to({graphics:mask_graphics_57,x:150,y:300}).wait(1).to({graphics:mask_graphics_58,x:150,y:300}).wait(1).to({graphics:mask_graphics_59,x:150,y:300}).wait(1));

	// NewImage
	this.instance = new lib.TonysChoco_300x600();
	this.instance.setTransform(9.5,8.75,0.9704,0.9704);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bdsMAAAg7XMAu3AAAMAAAA7Xg");
	this.shape.setTransform(150.0023,300.0003,1,1.5789);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-444.1,0,888.6,803.5);


(lib.img1 = function(mode,startPosition,loop,reversed) {
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
	this.frame_29 = function() {
		this.stop();
		this.alpha=0;
	}
	this.frame_30 = function() {
		this.alpha=1;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1).call(this.frame_30).wait(30));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_1 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_2 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_3 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_4 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_5 = new cjs.Graphics().p("EgVGAsjMAAAhZFMAqMAAAMAAABZFg");
	var mask_graphics_6 = new cjs.Graphics().p("EgVGAsjMAAAhZFMAqNAAAMAAABZFg");
	var mask_graphics_7 = new cjs.Graphics().p("EgVHAskMAAAhZHMAqOAAAMAAABZHg");
	var mask_graphics_8 = new cjs.Graphics().p("EgVIAslMAAAhZJMAqRAAAMAAABZJg");
	var mask_graphics_9 = new cjs.Graphics().p("EgVJAsnMAAAhZMMAqUAAAMAAABZMg");
	var mask_graphics_10 = new cjs.Graphics().p("EgVMAspMAAAhZRMAqZAAAMAAABZRg");
	var mask_graphics_11 = new cjs.Graphics().p("EgVPAssMAAAhZXMAqfAAAMAAABZXg");
	var mask_graphics_12 = new cjs.Graphics().p("EgVTAswMAAAhZfMAqnAAAMAAABZfg");
	var mask_graphics_13 = new cjs.Graphics().p("EgVYAs2MAAAhZqMAqxAAAMAAABZqg");
	var mask_graphics_14 = new cjs.Graphics().p("EgVfAs8MAAAhZ3MAq/AAAMAAABZ3g");
	var mask_graphics_15 = new cjs.Graphics().p("EgVnAtEMAAAhaHMArPAAAMAAABaHg");
	var mask_graphics_16 = new cjs.Graphics().p("EgVtAtKMAAAhaTMArcAAAMAAABaTg");
	var mask_graphics_17 = new cjs.Graphics().p("EgVzAtQMAAAhafMArnAAAMAAABafg");
	var mask_graphics_18 = new cjs.Graphics().p("EgV3AtUMAAAhanMArvAAAMAAABang");
	var mask_graphics_19 = new cjs.Graphics().p("EgV6AtXMAAAhatMAr1AAAMAAABatg");
	var mask_graphics_20 = new cjs.Graphics().p("EgV9AtaMAAAhazMAr6AAAMAAABazg");
	var mask_graphics_21 = new cjs.Graphics().p("EgV+AtbMAAAha1MAr9AAAMAAABa1g");
	var mask_graphics_22 = new cjs.Graphics().p("EgV/AtcMAAAha3MAsAAAAMAAABa3g");
	var mask_graphics_23 = new cjs.Graphics().p("EgWAAtdMAAAha5MAsBAAAMAAABa5g");
	var mask_graphics_24 = new cjs.Graphics().p("EgWAAtdMAAAha5MAsCAAAMAAABa5g");
	var mask_graphics_25 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_26 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_27 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_28 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_29 = new cjs.Graphics().p("EgVUAuLMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_30 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_31 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_32 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_33 = new cjs.Graphics().p("EgWBAteMAAAha7MAsDAAAMAAABa7g");
	var mask_graphics_34 = new cjs.Graphics().p("EgWAAtdMAAAha5MAsCAAAMAAABa5g");
	var mask_graphics_35 = new cjs.Graphics().p("EgWAAtdMAAAha5MAsBAAAMAAABa5g");
	var mask_graphics_36 = new cjs.Graphics().p("EgV/AtcMAAAha3MAsAAAAMAAABa3g");
	var mask_graphics_37 = new cjs.Graphics().p("EgV+AtcMAAAha2MAr+AAAMAAABa2g");
	var mask_graphics_38 = new cjs.Graphics().p("EgV9AtaMAAAhazMAr7AAAMAAABazg");
	var mask_graphics_39 = new cjs.Graphics().p("EgV7AtYMAAAhavMAr3AAAMAAABavg");
	var mask_graphics_40 = new cjs.Graphics().p("EgV5AtVMAAAhaqMArzAAAMAAABaqg");
	var mask_graphics_41 = new cjs.Graphics().p("EgV0AtSMAAAhaiMArpAAAMAAABaig");
	var mask_graphics_42 = new cjs.Graphics().p("EgVwAtNMAAAhaZMArhAAAMAAABaZg");
	var mask_graphics_43 = new cjs.Graphics().p("EgVqAtHMAAAhaNMArVAAAMAAABaNg");
	var mask_graphics_44 = new cjs.Graphics().p("EgVjAtAMAAAhZ/MArHAAAMAAABZ/g");
	var mask_graphics_45 = new cjs.Graphics().p("EgVcAs5MAAAhZxMAq5AAAMAAABZxg");
	var mask_graphics_46 = new cjs.Graphics().p("EgVWAszMAAAhZlMAqtAAAMAAABZlg");
	var mask_graphics_47 = new cjs.Graphics().p("EgVRAsvMAAAhZcMAqkAAAMAAABZcg");
	var mask_graphics_48 = new cjs.Graphics().p("EgVOAsqMAAAhZUMAqcAAAMAAABZUg");
	var mask_graphics_49 = new cjs.Graphics().p("EgVLAsoMAAAhZPMAqXAAAMAAABZPg");
	var mask_graphics_50 = new cjs.Graphics().p("EgVJAsmMAAAhZLMAqTAAAMAAABZLg");
	var mask_graphics_51 = new cjs.Graphics().p("EgVHAslMAAAhZIMAqPAAAMAAABZIg");
	var mask_graphics_52 = new cjs.Graphics().p("EgVHAskMAAAhZHMAqOAAAMAAABZHg");
	var mask_graphics_53 = new cjs.Graphics().p("EgVGAsjMAAAhZFMAqNAAAMAAABZFg");
	var mask_graphics_54 = new cjs.Graphics().p("EgVGAsjMAAAhZFMAqMAAAMAAABZFg");
	var mask_graphics_55 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_56 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_57 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_58 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");
	var mask_graphics_59 = new cjs.Graphics().p("EgVFAsiMAAAhZDMAqLAAAMAAABZDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:150,y:300}).wait(1).to({graphics:mask_graphics_1,x:150,y:300}).wait(1).to({graphics:mask_graphics_2,x:150,y:300}).wait(1).to({graphics:mask_graphics_3,x:150,y:300}).wait(1).to({graphics:mask_graphics_4,x:150,y:300}).wait(1).to({graphics:mask_graphics_5,x:150,y:300}).wait(1).to({graphics:mask_graphics_6,x:150,y:300}).wait(1).to({graphics:mask_graphics_7,x:150,y:300}).wait(1).to({graphics:mask_graphics_8,x:150,y:300}).wait(1).to({graphics:mask_graphics_9,x:150,y:300}).wait(1).to({graphics:mask_graphics_10,x:150,y:300}).wait(1).to({graphics:mask_graphics_11,x:150,y:300}).wait(1).to({graphics:mask_graphics_12,x:150,y:300}).wait(1).to({graphics:mask_graphics_13,x:150,y:300}).wait(1).to({graphics:mask_graphics_14,x:150,y:300}).wait(1).to({graphics:mask_graphics_15,x:150,y:300}).wait(1).to({graphics:mask_graphics_16,x:150,y:300}).wait(1).to({graphics:mask_graphics_17,x:150,y:300}).wait(1).to({graphics:mask_graphics_18,x:150,y:300}).wait(1).to({graphics:mask_graphics_19,x:150,y:300}).wait(1).to({graphics:mask_graphics_20,x:150,y:300}).wait(1).to({graphics:mask_graphics_21,x:150,y:300}).wait(1).to({graphics:mask_graphics_22,x:150,y:300}).wait(1).to({graphics:mask_graphics_23,x:150,y:300}).wait(1).to({graphics:mask_graphics_24,x:150,y:300}).wait(1).to({graphics:mask_graphics_25,x:150,y:300}).wait(1).to({graphics:mask_graphics_26,x:150,y:300}).wait(1).to({graphics:mask_graphics_27,x:150,y:300}).wait(1).to({graphics:mask_graphics_28,x:150,y:300}).wait(1).to({graphics:mask_graphics_29,x:145.5022,y:295.5084}).wait(1).to({graphics:mask_graphics_30,x:150,y:300}).wait(1).to({graphics:mask_graphics_31,x:150,y:300}).wait(1).to({graphics:mask_graphics_32,x:150,y:300}).wait(1).to({graphics:mask_graphics_33,x:150,y:300}).wait(1).to({graphics:mask_graphics_34,x:150,y:300}).wait(1).to({graphics:mask_graphics_35,x:150,y:300}).wait(1).to({graphics:mask_graphics_36,x:150,y:300}).wait(1).to({graphics:mask_graphics_37,x:150,y:300}).wait(1).to({graphics:mask_graphics_38,x:150,y:300}).wait(1).to({graphics:mask_graphics_39,x:150,y:300}).wait(1).to({graphics:mask_graphics_40,x:150,y:300}).wait(1).to({graphics:mask_graphics_41,x:150,y:300}).wait(1).to({graphics:mask_graphics_42,x:150,y:300}).wait(1).to({graphics:mask_graphics_43,x:150,y:300}).wait(1).to({graphics:mask_graphics_44,x:150,y:300}).wait(1).to({graphics:mask_graphics_45,x:150,y:300}).wait(1).to({graphics:mask_graphics_46,x:150,y:300}).wait(1).to({graphics:mask_graphics_47,x:150,y:300}).wait(1).to({graphics:mask_graphics_48,x:150,y:300}).wait(1).to({graphics:mask_graphics_49,x:150,y:300}).wait(1).to({graphics:mask_graphics_50,x:150,y:300}).wait(1).to({graphics:mask_graphics_51,x:150,y:300}).wait(1).to({graphics:mask_graphics_52,x:150,y:300}).wait(1).to({graphics:mask_graphics_53,x:150,y:300}).wait(1).to({graphics:mask_graphics_54,x:150,y:300}).wait(1).to({graphics:mask_graphics_55,x:150,y:300}).wait(1).to({graphics:mask_graphics_56,x:150,y:300}).wait(1).to({graphics:mask_graphics_57,x:150,y:300}).wait(1).to({graphics:mask_graphics_58,x:150,y:300}).wait(1).to({graphics:mask_graphics_59,x:150,y:300}).wait(1));

	// Layer_2
	this.instance = new lib.CliftonCoffee_300x600();
	this.instance.setTransform(8.7,8.8,0.9768,0.9692);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bdsMAAAg7XMAu3AAAMAAAA7Xg");
	this.shape.setTransform(150.0023,300.0003,1,1.5789);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.5,0,600,600);


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


(lib.clicktagbutton = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00FFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAAAh7IlvAAIAAabIFvAAIAAaFIlvAAIAAHUg");
	this.shape.setTransform(150,300);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.BG = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F2F2F2").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BG, new cjs.Rectangle(0,0,300,600), null);


(lib.barofloadingbar = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0278D4").s().p("AqKAvIAAhdIUVAAIAABdg");
	this.shape.setTransform(65.05,4.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.barofloadingbar, new cjs.Rectangle(0,0,130.1,9.5), null);


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


(lib.aHit = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ai9ClIAAlJIF7AAIAAFJg");
	this.shape.setTransform(-19,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.aHit, new cjs.Rectangle(-38,-16.5,38,33), null);


(lib.slides = function(mode,startPosition,loop,reversed) {
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
	this.slide4 = new lib.img4();
	this.slide4.name = "slide4";
	this.slide4.setTransform(187.5,2075,1,1,0,0,0,187.5,125);

	this.slide3 = new lib.img3();
	this.slide3.name = "slide3";
	this.slide3.setTransform(187.5,1425,1,1,0,0,0,187.5,125);

	this.slide2 = new lib.img2();
	this.slide2.name = "slide2";
	this.slide2.setTransform(139.2,1005.4,1,1,0,0,0,139.2,355.4);

	this.slide1 = new lib.img1();
	this.slide1.name = "slide1";
	this.slide1.setTransform(187.5,125,1,1,0,0,0,187.5,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slide1},{t:this.slide2},{t:this.slide3},{t:this.slide4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.slides, new cjs.Rectangle(0,0,300,2550), null);


(lib.nav = function(mode,startPosition,loop,reversed) {
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
	this.arrow_down = new lib.navarrow();
	this.arrow_down.name = "arrow_down";
	this.arrow_down.setTransform(9.7,97.3,1,1,180,0,0,4.4,2.1);
	this.arrow_down.shadow = new cjs.Shadow("rgba(0,0,0,0)",0,3,5);
	new cjs.ButtonHelper(this.arrow_down, 0, 1, 2, false, new lib.navarrow(), 3);

	this.arrow_up = new lib.navarrow();
	this.arrow_up.name = "arrow_up";
	this.arrow_up.setTransform(0.55,-1.2,1,1,0,0,0,4.4,2.1);
	this.arrow_up.shadow = new cjs.Shadow("rgba(0,0,0,0)",0,3,5);
	new cjs.ButtonHelper(this.arrow_up, 0, 1, 2, false, new lib.navarrow(), 3);

	this.dot_1 = new lib.navdot();
	this.dot_1.name = "dot_1";
	this.dot_1.setTransform(5.2,21.4);
	this.dot_1.alpha = 0.3984;
	this.dot_1.shadow = new cjs.Shadow("rgba(0,0,0,0)",0,3,5);
	new cjs.ButtonHelper(this.dot_1, 0, 1, 2, false, new lib.navdot(), 3);

	this.dot_4 = new lib.navdot();
	this.dot_4.name = "dot_4";
	this.dot_4.setTransform(5.2,76.2);
	this.dot_4.alpha = 0.3984;
	this.dot_4.shadow = new cjs.Shadow("rgba(0,0,0,0)",0,3,5);
	new cjs.ButtonHelper(this.dot_4, 0, 1, 2, false, new lib.navdot(), 3);

	this.dot_3 = new lib.navdot();
	this.dot_3.name = "dot_3";
	this.dot_3.setTransform(5.2,57.35);
	this.dot_3.alpha = 0.3984;
	this.dot_3.shadow = new cjs.Shadow("rgba(0,0,0,0)",0,3,5);
	new cjs.ButtonHelper(this.dot_3, 0, 1, 2, false, new lib.navdot(), 3);

	this.dot_2 = new lib.navdot();
	this.dot_2.name = "dot_2";
	this.dot_2.setTransform(5.2,40.3);
	this.dot_2.alpha = 0.3984;
	this.dot_2.shadow = new cjs.Shadow("rgba(0,0,0,0)",0,3,5);
	new cjs.ButtonHelper(this.dot_2, 0, 1, 2, false, new lib.navdot(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dot_2},{t:this.dot_3},{t:this.dot_4},{t:this.dot_1},{t:this.arrow_up},{t:this.arrow_down}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-3.5,26,113.4);


(lib.mute_btn_wht = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {out_mute:0,over_mute:1,out_muteOff:2,over_muteOff:3};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_2
	this.instance = new lib.aHit();
	this.instance.setTransform(-18.5,16.5,1,1,0,0,0,-19,0);
	this.instance.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer 6
	this.instance_1 = new lib.mute_1_wht("synched",0);
	this.instance_1.setTransform(-18,17,1.754,1.754);

	this.instance_2 = new lib.mute2_wht("synched",0);
	this.instance_2.setTransform(-18,17,1.754,1.754);
	this.instance_2.alpha = 0.5;

	this.instance_3 = new lib.mute3_wht("synched",0);
	this.instance_3.setTransform(-18,17,1.754,1.754);

	this.instance_4 = new lib.mute4_wht("synched",0);
	this.instance_4.setTransform(-18,17,1.754,1.754);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,alpha:0.5},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,0,38,33);


(lib.mute_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"out_mute":0,"over_mute":1,"out_muteOff":2,"over_muteOff":3};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_2
	this.instance = new lib.aHit();
	this.instance.setTransform(-18.5,16.5,1,1,0,0,0,-19,0);
	this.instance.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer 6
	this.instance_1 = new lib.mute_1("synched",0);
	this.instance_1.setTransform(-18,17,1.754,1.754);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.mute2("synched",0);
	this.instance_2.setTransform(-18,17,1.754,1.754);

	this.instance_3 = new lib.mute3("synched",0);
	this.instance_3.setTransform(-18,17,1.754,1.754);
	this.instance_3.alpha = 0.5;

	this.instance_4 = new lib.mute4("synched",0);
	this.instance_4.setTransform(-18,17,1.754,1.754);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,alpha:1},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,0,38,33);


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


(lib.loadingbar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bar
	this.instance = new lib.barofloadingbar();
	this.instance.setTransform(0,0,0.75,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AqKAvIAAhdIUVAAIAABdg");
	this.shape.setTransform(65.05,4.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.loadingbar, new cjs.Rectangle(0,0,130.1,9.5), null);


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
	this.frame_1 = function() {
		exportRoot.mainMC.init2.alpha=0;
	}
	this.frame_84 = function() {
		exportRoot.tlAnim.play();
	}
	this.frame_99 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(83).call(this.frame_84).wait(15).call(this.frame_99).wait(2));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("EgSVBK7IAAwoMBbuAAAIAAQog");
	var mask_graphics_15 = new cjs.Graphics().p("EgSoBK7IAAwoMBbuAAAIAAQog");
	var mask_graphics_16 = new cjs.Graphics().p("EgThBK7IAAwoMBbuAAAIAAQog");
	var mask_graphics_17 = new cjs.Graphics().p("EgVBBK7IAAwoMBbuAAAIAAQog");
	var mask_graphics_18 = new cjs.Graphics().p("EgXGBK7IAAwoMBbuAAAIAAQog");
	var mask_graphics_19 = new cjs.Graphics().p("EgZyBK7IAAwoMBbuAAAIAAQog");
	var mask_graphics_20 = new cjs.Graphics().p("EgdDBK7IAAwoMBbuAAAIAAQog");
	var mask_graphics_21 = new cjs.Graphics().p("EggVBK7IAAwoMBbuAAAIAAQog");
	var mask_graphics_22 = new cjs.Graphics().p("EgjABK7IAAwoMBbtAAAIAAQog");
	var mask_graphics_23 = new cjs.Graphics().p("EglGBK7IAAwoMBbuAAAIAAQog");
	var mask_graphics_24 = new cjs.Graphics().p("EgmlBK7IAAwoMBbuAAAIAAQog");
	var mask_graphics_25 = new cjs.Graphics().p("EgneBK7IAAwoMBbuAAAIAAQog");
	var mask_graphics_26 = new cjs.Graphics().p("EgnxBK7IAAwoMBbuAAAIAAQog");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:469.6789,y:479.5095}).wait(1).to({graphics:mask_graphics_15,x:467.773,y:479.5095}).wait(1).to({graphics:mask_graphics_16,x:462.0553,y:479.5095}).wait(1).to({graphics:mask_graphics_17,x:452.5258,y:479.5095}).wait(1).to({graphics:mask_graphics_18,x:439.1845,y:479.5095}).wait(1).to({graphics:mask_graphics_19,x:422.0313,y:479.5095}).wait(1).to({graphics:mask_graphics_20,x:401.0664,y:479.5095}).wait(1).to({graphics:mask_graphics_21,x:380.1015,y:479.5095}).wait(1).to({graphics:mask_graphics_22,x:362.9483,y:479.5095}).wait(1).to({graphics:mask_graphics_23,x:349.607,y:479.5095}).wait(1).to({graphics:mask_graphics_24,x:340.0775,y:479.5095}).wait(1).to({graphics:mask_graphics_25,x:334.3598,y:479.5095}).wait(1).to({graphics:mask_graphics_26,x:332.4539,y:479.5095}).wait(1).to({graphics:null,x:0,y:0}).wait(74));

	// logo text
	this.instance = new lib.MSFT_Logo_anim();
	this.instance.setTransform(-131.7,900.05,4.9325,4.9325,0,0,0,0.1,0.2);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({x:222.7},12,cjs.Ease.quadInOut).wait(39).to({alpha:0},33,cjs.Ease.cubicInOut).to({_off:true},1).wait(2));

	// widows icon
	this.instance_1 = new lib.MSFT_logo_sq();
	this.instance_1.setTransform(299.1,905.95,0.2981,0.2981,0,0,0,-39.9,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-40,regY:1.4,scaleX:4.9325,scaleY:4.9325,x:299.05},14,cjs.Ease.quadOut).to({x:24.8},12,cjs.Ease.quadInOut).to({_off:true},1).wait(74));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhMdBAtMAAAiBYMCY7AAAMAAACBYg");
	this.shape.setTransform(301.4796,904.4373,1,2.3526);

	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.setTransform(301.45,904.4,1,2.3526);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},2).to({state:[{t:this.instance_2}]},65).to({state:[{t:this.instance_2}]},33).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(67).to({_off:false},0).to({alpha:0},33,cjs.Ease.cubicInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.9,-69.7,978.8,1948.2);


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


(lib.superslide = function(mode,startPosition,loop,reversed) {
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
	this.sub_slides = new lib.slides();
	this.sub_slides.name = "sub_slides";

	this.timeline.addTween(cjs.Tween.get(this.sub_slides).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.superslide, new cjs.Rectangle(0,0,300,2550), null);


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
	this.arrow.setTransform(-26.65,2.6,0.6158,0.5649,0,0,0,13.6,10.7);

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(1));

	// CTA_text
	this.cta_glare = new lib.cta_glare();
	this.cta_glare.name = "cta_glare";
	this.cta_glare.setTransform(-42.75,-2.45,1,1,0,0,0,57.4,15.1);

	this.timeline.addTween(cjs.Tween.get(this.cta_glare).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0078D4").s().p("AoICZIAAkxIQRAAIAAExg");
	this.shape.setTransform(-61.825,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA_btn, new cjs.Rectangle(-113.9,-13.1,104.2,30.700000000000003), null);


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

	// init2
	this.init2 = new lib.BG();
	this.init2.name = "init2";
	this.init2.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.init2).wait(1));

	// click tag
	this.click_tag = new lib.clicktagbutton();
	this.click_tag.name = "click_tag";
	this.click_tag.setTransform(150.2,125,1,1,0,0,0,150.2,125);
	new cjs.ButtonHelper(this.click_tag, 0, 1, 2, false, new lib.clicktagbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.click_tag).wait(1));

	// intro logo
	this.logo_intro = new lib.logos();
	this.logo_intro.name = "logo_intro";
	this.logo_intro.setTransform(58.05,21,0.3087,0.3087,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.logo_intro).wait(1));

	// logo
	this.logo = new lib.msLogoWhite();
	this.logo.name = "logo";
	this.logo.setTransform(81.85,40.45,0.5764,0.5764,0,0,0,86.5,14.7);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// sound icon
	this.mute_btn_wht = new lib.mute_btn_wht();
	this.mute_btn_wht.name = "mute_btn_wht";
	this.mute_btn_wht.setTransform(278.85,569.45,0.7758,0.7758,0,0,180,-18.6,16.6);

	this.mute_btn_blk = new lib.mute_btn();
	this.mute_btn_blk.name = "mute_btn_blk";
	this.mute_btn_blk.setTransform(278.85,569.45,0.7758,0.7758,0,0,180,-18.6,16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mute_btn_blk},{t:this.mute_btn_wht}]}).wait(1));

	// txt
	this.txt = new lib.txt_mc();
	this.txt.name = "txt";
	this.txt.setTransform(70.5,70.55,1,1,0,0,0,70.5,70.5);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// CTA
	this.txtCta = new lib.cta();
	this.txtCta.name = "txtCta";
	this.txtCta.setTransform(14.55,551.3,1,1,0,0,0,0.7,0.1);

	this.timeline.addTween(cjs.Tween.get(this.txtCta).wait(1));

	// CTA_BG
	this.cta = new lib.CTA_btn();
	this.cta.name = "cta";
	this.cta.setTransform(57.1,553.15,1.136,1.136,0,0,0,-63,4);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// nav
	this.nav = new lib.nav("synched",0);
	this.nav.name = "nav";
	this.nav.setTransform(279.3,300.1,1.5242,1.5242,0,0,0,4.4,48);

	this.timeline.addTween(cjs.Tween.get(this.nav).wait(1));

	// loading bar
	this.loading_bar = new lib.loadingbar();
	this.loading_bar.name = "loading_bar";
	this.loading_bar.setTransform(182.85,219.95,1,1,0,0,0,65,4.7);

	this.timeline.addTween(cjs.Tween.get(this.loading_bar).wait(1));

	// Video
	this.aVid = new lib.video();
	this.aVid.name = "aVid";

	this.timeline.addTween(cjs.Tween.get(this.aVid).wait(1));

	// images
	this.slides = new lib.superslide();
	this.slides.name = "slides";

	this.timeline.addTween(cjs.Tween.get(this.slides).wait(1));

	// BG
	this.bg = new lib.BG();
	this.bg.name = "bg";
	this.bg.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mainMC, new cjs.Rectangle(-233.4,-0.5,533.4,2550.5), null);


// stage content:
(lib.M365_FY22Q2SMB_USA_300x600_BAN_INTCarouselCS_EN_NA_Standard_ANI_WACM_NA_1 = function(mode,startPosition,loop,reversed) {
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
		frame0();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mainMC
	this.mainMC = new lib.mainMC();
	this.mainMC.name = "mainMC";
	this.mainMC.setTransform(0,0.1,0.9968,0.9997,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.mainMC).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(149.2,300,149.90000000000003,2249.1);
// library properties:
lib.properties = {
	id: '90A26FE74B042E4A89CA750D1DA2DF1F',
	width: 300,
	height: 600,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CliftonCoffee_300x600.jpg?1636669169886", id:"CliftonCoffee_300x600"},
		{src:"images/HouseOfLilac_300x600.jpg?1636669169886", id:"HouseOfLilac_300x600"},
		{src:"images/ThinkUp_300x600.jpg?1636669169886", id:"ThinkUp_300x600"},
		{src:"images/TonysChoco_300x600.jpg?1636669169886", id:"TonysChoco_300x600"}
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