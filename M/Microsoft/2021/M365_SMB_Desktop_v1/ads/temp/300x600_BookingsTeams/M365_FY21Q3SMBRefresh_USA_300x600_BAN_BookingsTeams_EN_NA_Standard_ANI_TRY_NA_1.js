(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"M365_FY21Q3SMBRefresh_USA_300x600_BAN_BookingsTeams_EN_NA_Standard_ANI_TRY_NA_1_atlas_1", frames: [[389,0,390,1053],[781,782,241,163],[1024,782,176,191],[1173,0,29,29],[781,0,390,780],[0,0,387,1115]]}
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



(lib.bg_m2 = function() {
	this.initialize(ss["M365_FY21Q3SMBRefresh_USA_300x600_BAN_BookingsTeams_EN_NA_Standard_ANI_TRY_NA_1_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.calendarwpngcopy = function() {
	this.initialize(ss["M365_FY21Q3SMBRefresh_USA_300x600_BAN_BookingsTeams_EN_NA_Standard_ANI_TRY_NA_1_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.calendar = function() {
	this.initialize(ss["M365_FY21Q3SMBRefresh_USA_300x600_BAN_BookingsTeams_EN_NA_Standard_ANI_TRY_NA_1_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Ellipse1pngcopy = function() {
	this.initialize(ss["M365_FY21Q3SMBRefresh_USA_300x600_BAN_BookingsTeams_EN_NA_Standard_ANI_TRY_NA_1_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.fg_m = function() {
	this.initialize(ss["M365_FY21Q3SMBRefresh_USA_300x600_BAN_BookingsTeams_EN_NA_Standard_ANI_TRY_NA_1_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.woman_2 = function() {
	this.initialize(ss["M365_FY21Q3SMBRefresh_USA_300x600_BAN_BookingsTeams_EN_NA_Standard_ANI_TRY_NA_1_atlas_1"]);
	this.gotoAndStop(5);
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


(lib.womanHead = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoaVZIktuIIPsAIIg+g0QhAg0gJABQgdADgaABQgyACgLgGQgcgSgNgJQgfgXgRgZQgGgKgtgWQgrgUgWgrQgmhIgEgTQgMgoAUgvQAchCANgnQAUg5gBgZQAAgQAGhNQAEhDgCgJQgIgUgBgrIgBg5QgFguAFg5QAGg2AljKQAgi1ANg4QAMg3A3hkQBCh2A3gfQAogXAcgGQAOgDAFACQATgYAggIQAOgDA6gDQA/gEAVADQA2AHA8AbQBUAkA3A9QA4A+AwBPQAnA/ALAgQAOAsA0DMQA5DoAAAqQAAC3ADAjQACAbACCcIi9GFIjkSRg");
	mask.setTransform(133.85,607.3808);

	// Layer_1
	this.instance = new lib.woman_2();
	this.instance.setTransform(0,0,0.7752,0.7752);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.womanHead, new cjs.Rectangle(49.9,464.9,168,285), null);


(lib.woman = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.woman_2();
	this.instance.setTransform(-0.4,-231.05,0.7752,0.7752);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.woman, new cjs.Rectangle(-0.4,-231,300.4,864.4), null);


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


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("New Client Consultation", "5px 'Segoe UI'", "#292828");
	this.text.lineHeight = 9;
	this.text.lineWidth = 57;
	this.text.parent = this;
	this.text.setTransform(-28.7,-3.55);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.7,-5.5,61.4,11);


(lib.Tween11 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Brandon Lewis", "bold 7px 'Segoe UI'", "#3A3950");
	this.text.lineHeight = 12;
	this.text.lineWidth = 57;
	this.text.parent = this;
	this.text.setTransform(-28.7,-4.85);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.7,-6.8,61.4,13.6);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgiBMQgbgQgLgfQgKgdALgeQALgdAbgRQAbgQAfAEQAfAFAWAXIgWAUQgOgPgVgDQgVgDgSALQgSALgHAUQgHATAGAUQAHAUASALQASALAUgCQAWgDAOgPIAWAVQgWAXggADIgMABQgYAAgVgOg");
	this.shape.setTransform(2.0202,-0.7048,0.8766,0.8766,135.0007);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmgTIBNAAIgnAmg");
	this.shape_1.setTransform(-5.3,2.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.2,-7.8,18.4,15.8);


(lib.Symbol32 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#5C65D3").s().p("EgXbAvAMAAAhd/MAu3AAAMAAABd/g");
	this.shape.setTransform(150,300.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,0,300,601.6), null);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Ellipse1pngcopy();
	this.instance.setTransform(-14.5,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-14.5,-14.5,29,29), null);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.529)").s().p("AoEx9IQJAAMgH8Aj7g");
	this.shape.setTransform(90.2,71.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.698)").s().p("AtYNaIAA6zIaxAAIAAazg");
	this.shape_1.setTransform(112.975,-128.825);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(27.3,-214.6,171.39999999999998,401.5), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.fg_m();
	this.instance.setTransform(0,0,0.7692,0.7692);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,300,600), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqrLSQABgUAPgGIAAAAQAOgCgBgCIAAAAIJRgOIDoHVItTA2IgDnfgACOBvQh0gDhJhgIAAAAQgXgdgQgkIAAAAIgMgdIgNi1IAEgqIgmg7QgkALgTgCIAAAAQg6gEgJgDIAAAAIgvgOIAnleIBllIICFhaQBwAAACgGIAAAAQAPgzBBADIAAAAQAiABAdAMIAAAAIA2gPIC/AmICtBFQAxB9ABAKIAAAAIgTDHIgSB/QAmAygDAHIAAAAIgtBYIgXB6IgdAOQggAVgJAlIAAAAQABCkiEB9IAAAAQh6BziMAAIAAAAIgJAAg");
	mask.setTransform(150.6497,361.3252);

	// Layer_3
	this.instance = new lib.fg_m();
	this.instance.setTransform(0,-0.4,0.7692,0.7692);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(82.3,241.3,136.7,240.09999999999997), null);


(lib.overlay = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2C9F8C").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.overlay, new cjs.Rectangle(0,0,300,600), null);


(lib.ms_grey = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AFHA/QgGgHAAgPIAAguIghAAIAABJIgWAAIAAhJIgPAAIAAgSIAPAAIAAgOQAAgOAJgJQAKgJAPAAIAHAAIAFABIAAATIgEgBIgGgBQgGgBgEAFQgEAEAAAJIAAALIAhAAIAAgVIAVgHIAAAcIAWAAIAAASIgWAAIAAAqQAAAIAEADQACAEAHAAIAFgBIAEgCIAAASIgGACIgKABQgOABgHgIgACmA5QgNgMAAgWQAAgWANgNQANgNAXAAQAWAAAMAMQAMANAAAWQAAAWgNANQgNANgWAAQgVAAgNgNgAC3AAQgHAIAAAOQAAAPAGAIQAHAHAMAAQAMAAAGgHQAHgIAAgPQAAgPgHgHQgGgHgMAAQgMAAgGAHgABeBFIgMgDIAAgWQAGAEAHACQAHADAFAAQAIAAADgCQAEgCAAgFQAAgEgEgDQgDgEgLgEQgLgEgGgHQgFgGAAgKQAAgMAKgHQAKgJAQAAIALACIAKACIAAAVQgEgDgGgCQgGgCgGAAQgGAAgDACQgEADAAADQAAAEADADQADADAKAEQANAFAGAGQAFAIAAAIQAAANgKAJQgKAHgRAAIgNgBgAgJA5QgNgMAAgWQAAgXANgMQAMgNAXAAQAWAAAMAMQAMANAAAWQAAAWgNANQgNANgWAAQgWAAgLgNgAAGAAQgGAIAAAOQAAAPAGAIQAHAHAMAAQAMAAAGgHQAGgIAAgPQAAgPgGgHQgHgHgLAAQgMAAgHAHgAiZA5QgNgMAAgVQAAgVANgPQANgOAYAAQAGAAAHACIAKADIAAAVQgGgEgFgBQgFgCgGAAQgMgBgIAIQgIAJAAANQAAAOAHAJQAIAHANAAQAFAAAGgCIALgGIAAAVQgGACgGABQgHACgIAAQgUAAgNgNgAhNBEIAAhbIAWAAIAAAOIAAAAQADgHAGgFQAGgEAIAAIAFABIAEABIAAAVIgFgCIgIgBQgIAAgGAGQgFAGAAAPIAAAugAjLBEIAAhbIAWAAIAABbgAj2BEIAAhkIgBAAIgoBkIgOAAIgphkIgBAAIAABkIgUAAIAAiAIAgAAIAlBeIAAAAIAoheIAeAAIAACAgAjJgpQgEgEAAgFQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAFgEAEQgEAEgGgBQgFABgEgEg");
	this.shape.setTransform(-0.025,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah+DKIAAhDQArAcAqAAQArAAAbgWQAbgWAAgmQAAgkgbgVQgbgUgyAAQgWAAgxADIAPjiIDUAAIAAA8IiZAAIgIBsIAmgBQBEAAAlAjQAmAigBA9QAABAgrAnQgqAnhLAAQg/AAgegSg");
	this.shape_1.setTransform(64.1669,0.5765,0.2986,0.2986);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhoCqQgogzAAheQAAhLAXg3QAWg4ArgeQAqgfA2AAQAyAAAaAMIAAA/QgjgSgmAAQgzAAggArQggAtgBBKIACAAQANgYAagPQAagOAcAAQA4AAAiAkQAhAkAAA9QAAApgTAiQgTAigfATQghASgoAAQhDAAgog1gAgxAUQgUAXAAAfQgBAZAKAUQAJAVARANQAQAMAWAAQAhAAATgWQATgXAAgmQAAgngTgWQgTgVgiAAQgeAAgWAUg");
	this.shape_2.setTransform(55.0447,0.4645,0.2986,0.2986);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhWDYQgegHgOgKIAAhEQAUAQAbAJQAcAKAbAAQAoAAAYgUQAYgTAAggQAAgkgcgSQgcgTg0AAIgmAAIAAg5IAkAAQAuAAAYgRQAZgRAAghQAAgegTgRQgUgQgjAAQguAAgnAfIAAhAQASgKAcgIQAbgGAfAAQAmAAAcAOQAeANAPAYQAPAXAAAfQAAAqgWAbQgXAbgpAMIAAAAQAvAGAbAbQAbAbAAApQAAA8grAjQgqAkhJAAQggAAgbgHg");
	this.shape_3.setTransform(45.706,0.4645,0.2986,0.2986);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ms_grey, new cjs.Rectangle(-36.4,-6.9,104.4,14.100000000000001), null);


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
	this.shape.graphics.f("#666CDD").s().p("AgNAqIAfgfIhJAAIAAgUIBJAAIggggIAaAAIAsApIgsAqg");
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


(lib.aMask = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(141.5,32);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.aMask, new cjs.Rectangle(0,0,283,64), null);


(lib.manBG = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bg_m2();
	this.instance.setTransform(0,-210.75,0.7692,0.7692);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.manBG, new cjs.Rectangle(0,-210.7,300,810.7), null);


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


(lib.calendar_woman = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.calendarwpngcopy();
	this.instance.setTransform(-60.85,-82.3,0.5049,0.5049);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.calendar_woman, new cjs.Rectangle(-60.8,-82.3,121.69999999999999,82.3), null);


(lib.bg_calendar_woman = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.529)").s().p("AoEx9IQJAAMgH8Aj7g");
	this.shape.setTransform(-27.25,26.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.698)").s().p("AGpLuIwJAAImfAAIAA3bIf/AAIAAXbg");
	this.shape_1.setTransform(-18.05,-163.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_calendar_woman, new cjs.Rectangle(-120.4,-238.8,204.8,380), null);


(lib.Bg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#666CDD").s().p("AgNAqIAfgfIhJAAIAAgUIBJAAIggggIAaAAIAsApIgsAqg");
	this.shape.setTransform(5.625,4.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(0,0,11.3,8.4), null);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol32();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,300,601.6), null);


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


(lib.overlay_2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.overlay_2, new cjs.Rectangle(0,0,300,601.6), null);


(lib.new_client_solution = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween13("synched",0);
	this.instance.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.new_client_solution, new cjs.Rectangle(-30.7,-5.5,61.4,11.1), null);


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

	// Layer_1
	this.ms = new lib.ms_grey();
	this.ms.name = "ms";
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

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ms, new cjs.Rectangle(0,0,132.4,21.6), null);


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
		this.ms.cache(-135,-25,270,50,1.4)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.ms = new lib.ms();
	this.ms.name = "ms";
	this.ms.setTransform(109.5,53.6,1,1,0,0,0,66.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.ms).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MSFT_Logo_anim, new cjs.Rectangle(43.3,42.8,132.39999999999998,21.60000000000001), null);


(lib.brandon_lewis = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween11("synched",0);
	this.instance.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.brandon_lewis, new cjs.Rectangle(-30.7,-6.8,61.4,13.7), null);


(lib.bg_calendar_man = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.calendar();
	this.instance.setTransform(-94.45,-427.9,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.dot = new lib.Symbol14();
	this.dot.name = "dot";
	this.dot.setTransform(25.1,-358.45,0.6967,0.6967,0,0,0,-0.8,-1);

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol9();
	this.instance_1.setTransform(-56.25,-50.4,0.9762,0.9762,0,0,0,88.5,186.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_calendar_man, new cjs.Rectangle(-116,-442.1,167.4,391.90000000000003), null);


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


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// dot
	this.dot = new lib.Symbol14();
	this.dot.name = "dot";
	this.dot.setTransform(-73.5,-185.75,0.6186,0.6186,0,0,0,-1.1,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// txt1
	this.txt1 = new lib.new_client_solution();
	this.txt1.name = "txt1";
	this.txt1.setTransform(-21.3,-190.3,1.4118,1.4118);

	this.timeline.addTween(cjs.Tween.get(this.txt1).wait(1));

	// txt2
	this.txt2 = new lib.brandon_lewis();
	this.txt2.name = "txt2";
	this.txt2.setTransform(-21.65,-181.35,1.4118,1.4118);

	this.timeline.addTween(cjs.Tween.get(this.txt2).wait(1));

	// calendar_woman
	this.calendar_woman = new lib.calendar_woman();
	this.calendar_woman.name = "calendar_woman";
	this.calendar_woman.setTransform(-16.45,-169.1,1.4347,1.4347,0,0,0,0,-41.1);

	this.timeline.addTween(cjs.Tween.get(this.calendar_woman).wait(1));

	// Layer_1
	this.bg_calendar_woman = new lib.bg_calendar_woman();
	this.bg_calendar_woman.name = "bg_calendar_woman";
	this.bg_calendar_woman.setTransform(16.8,-9.1,1,1,0,0,0,16.8,-9.1);

	this.timeline.addTween(cjs.Tween.get(this.bg_calendar_woman).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-120.4,-238.8,204.8,380), null);


(lib.screenWoman = function(mode,startPosition,loop,reversed) {
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
	this.frame_38 = function() {
		this.stop();
	}
	this.frame_77 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(38).call(this.frame_38).wait(39).call(this.frame_77).wait(1));

	// mask_woman (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgCCAvDMAAAheFIZeAAMAAABeFg");
	var mask_graphics_1 = new cjs.Graphics().p("EgCDAvDMAAAheFIZfAAMAAABeFg");
	var mask_graphics_2 = new cjs.Graphics().p("EgCDAvDMAAAheFIZfAAMAAABeFg");
	var mask_graphics_3 = new cjs.Graphics().p("EgCFAvDMAAAheFIZhAAMAAABeFg");
	var mask_graphics_4 = new cjs.Graphics().p("EgCIAvDMAAAheFIZkAAMAAABeFg");
	var mask_graphics_5 = new cjs.Graphics().p("EgCNAvDMAAAheFIZpAAMAAABeFg");
	var mask_graphics_6 = new cjs.Graphics().p("EgCUAvDMAAAheFIZwAAMAAABeFg");
	var mask_graphics_7 = new cjs.Graphics().p("EgCfAvDMAAAheFIZ7AAMAAABeFg");
	var mask_graphics_8 = new cjs.Graphics().p("EgCtAvDMAAAheFIaJAAMAAABeFg");
	var mask_graphics_9 = new cjs.Graphics().p("EgC+AvDMAAAheFIaaAAMAAABeFg");
	var mask_graphics_10 = new cjs.Graphics().p("EgDVAvDMAAAheFIaxAAMAAABeFg");
	var mask_graphics_11 = new cjs.Graphics().p("EgDwAvDMAAAheFIbMAAMAAABeFg");
	var mask_graphics_12 = new cjs.Graphics().p("EgEQAvDMAAAheFIbsAAMAAABeFg");
	var mask_graphics_13 = new cjs.Graphics().p("EgE3AvDMAAAheFIcTAAMAAABeFg");
	var mask_graphics_14 = new cjs.Graphics().p("EgFkAvDMAAAheFIdAAAMAAABeFg");
	var mask_graphics_15 = new cjs.Graphics().p("EgGYAvDMAAAheFId0AAMAAABeFg");
	var mask_graphics_16 = new cjs.Graphics().p("EgHTAvDMAAAheFIevAAMAAABeFg");
	var mask_graphics_17 = new cjs.Graphics().p("EgIWAvDMAAAheFIfyAAMAAABeFg");
	var mask_graphics_18 = new cjs.Graphics().p("EgJiAvDMAAAheFMAg+AAAMAAABeFg");
	var mask_graphics_19 = new cjs.Graphics().p("EgK2AvDMAAAheFMAiSAAAMAAABeFg");
	var mask_graphics_20 = new cjs.Graphics().p("EgMKAvDMAAAheFMAjmAAAMAAABeFg");
	var mask_graphics_21 = new cjs.Graphics().p("EgNWAvDMAAAheFMAkyAAAMAAABeFg");
	var mask_graphics_22 = new cjs.Graphics().p("EgOZAvDMAAAheFMAl1AAAMAAABeFg");
	var mask_graphics_23 = new cjs.Graphics().p("EgPUAvDMAAAheFMAmwAAAMAAABeFg");
	var mask_graphics_24 = new cjs.Graphics().p("EgQIAvDMAAAheFMAnkAAAMAAABeFg");
	var mask_graphics_25 = new cjs.Graphics().p("EgQ1AvDMAAAheFMAoRAAAMAAABeFg");
	var mask_graphics_26 = new cjs.Graphics().p("EgRbAvDMAAAheFMAo3AAAMAAABeFg");
	var mask_graphics_27 = new cjs.Graphics().p("EgR8AvDMAAAheFMApZAAAMAAABeFg");
	var mask_graphics_28 = new cjs.Graphics().p("EgSXAvDMAAAheFMAp0AAAMAAABeFg");
	var mask_graphics_29 = new cjs.Graphics().p("EgSuAvDMAAAheFMAqLAAAMAAABeFg");
	var mask_graphics_30 = new cjs.Graphics().p("EgS/AvDMAAAheFMAqcAAAMAAABeFg");
	var mask_graphics_31 = new cjs.Graphics().p("EgTNAvDMAAAheFMAqqAAAMAAABeFg");
	var mask_graphics_32 = new cjs.Graphics().p("EgTYAvDMAAAheFMAq1AAAMAAABeFg");
	var mask_graphics_33 = new cjs.Graphics().p("EgTfAvDMAAAheFMAq8AAAMAAABeFg");
	var mask_graphics_34 = new cjs.Graphics().p("EgTkAvDMAAAheFMArBAAAMAAABeFg");
	var mask_graphics_35 = new cjs.Graphics().p("EgTnAvDMAAAheFMArEAAAMAAABeFg");
	var mask_graphics_36 = new cjs.Graphics().p("EgTpAvDMAAAheFMArGAAAMAAABeFg");
	var mask_graphics_37 = new cjs.Graphics().p("EgTpAvDMAAAheFMArGAAAMAAABeFg");
	var mask_graphics_38 = new cjs.Graphics().p("EgTpAvDMAAAheFMArGAAAMAAABeFg");
	var mask_graphics_39 = new cjs.Graphics().p("EgTpAvDMAAAheFMArGAAAMAAABeFg");
	var mask_graphics_40 = new cjs.Graphics().p("EgTpAvDMAAAheFMArGAAAMAAABeFg");
	var mask_graphics_41 = new cjs.Graphics().p("EgTpAvDMAAAheFMArGAAAMAAABeFg");
	var mask_graphics_42 = new cjs.Graphics().p("EgTpAvDMAAAheFMArGAAAMAAABeFg");
	var mask_graphics_43 = new cjs.Graphics().p("EgTpAvDMAAAheFMArGAAAMAAABeFg");
	var mask_graphics_44 = new cjs.Graphics().p("EgToAvDMAAAheFMArFAAAMAAABeFg");
	var mask_graphics_45 = new cjs.Graphics().p("EgToAvDMAAAheFMArFAAAMAAABeFg");
	var mask_graphics_46 = new cjs.Graphics().p("EgTnAvDMAAAheFMArEAAAMAAABeFg");
	var mask_graphics_47 = new cjs.Graphics().p("EgTmAvDMAAAheFMArDAAAMAAABeFg");
	var mask_graphics_48 = new cjs.Graphics().p("EgTlAvDMAAAheFMArCAAAMAAABeFg");
	var mask_graphics_49 = new cjs.Graphics().p("EgTjAvDMAAAheFMAq/AAAMAAABeFg");
	var mask_graphics_50 = new cjs.Graphics().p("EgThAvDMAAAheFMAq9AAAMAAABeFg");
	var mask_graphics_51 = new cjs.Graphics().p("EgTfAvDMAAAheFMAq7AAAMAAABeFg");
	var mask_graphics_52 = new cjs.Graphics().p("EgTcAvDMAAAheFMAq4AAAMAAABeFg");
	var mask_graphics_53 = new cjs.Graphics().p("EgTZAvDMAAAheFMAq1AAAMAAABeFg");
	var mask_graphics_54 = new cjs.Graphics().p("EgTWAvDMAAAheFMAqyAAAMAAABeFg");
	var mask_graphics_55 = new cjs.Graphics().p("EgTSAvDMAAAheFMAquAAAMAAABeFg");
	var mask_graphics_56 = new cjs.Graphics().p("EgTNAvDMAAAheFMAqpAAAMAAABeFg");
	var mask_graphics_57 = new cjs.Graphics().p("EgTIAvDMAAAheFMAqkAAAMAAABeFg");
	var mask_graphics_58 = new cjs.Graphics().p("EgTDAvDMAAAheFMAqfAAAMAAABeFg");
	var mask_graphics_59 = new cjs.Graphics().p("EgS+AvDMAAAheFMAqaAAAMAAABeFg");
	var mask_graphics_60 = new cjs.Graphics().p("EgS6AvDMAAAheFMAqWAAAMAAABeFg");
	var mask_graphics_61 = new cjs.Graphics().p("EgS2AvDMAAAheFMAqSAAAMAAABeFg");
	var mask_graphics_62 = new cjs.Graphics().p("EgSyAvDMAAAheFMAqOAAAMAAABeFg");
	var mask_graphics_63 = new cjs.Graphics().p("EgSvAvDMAAAheFMAqLAAAMAAABeFg");
	var mask_graphics_64 = new cjs.Graphics().p("EgStAvDMAAAheFMAqJAAAMAAABeFg");
	var mask_graphics_65 = new cjs.Graphics().p("EgSqAvDMAAAheFMAqGAAAMAAABeFg");
	var mask_graphics_66 = new cjs.Graphics().p("EgSpAvDMAAAheFMAqFAAAMAAABeFg");
	var mask_graphics_67 = new cjs.Graphics().p("EgSnAvDMAAAheFMAqDAAAMAAABeFg");
	var mask_graphics_68 = new cjs.Graphics().p("EgSmAvDMAAAheFMAqCAAAMAAABeFg");
	var mask_graphics_69 = new cjs.Graphics().p("EgSlAvDMAAAheFMAqBAAAMAAABeFg");
	var mask_graphics_70 = new cjs.Graphics().p("EgSkAvDMAAAheFMAqAAAAMAAABeFg");
	var mask_graphics_71 = new cjs.Graphics().p("EgSjAvDMAAAheFMAp/AAAMAAABeFg");
	var mask_graphics_72 = new cjs.Graphics().p("EgSjAvDMAAAheFMAp/AAAMAAABeFg");
	var mask_graphics_73 = new cjs.Graphics().p("EgSiAvDMAAAheFMAp+AAAMAAABeFg");
	var mask_graphics_74 = new cjs.Graphics().p("EgSiAvDMAAAheFMAp+AAAMAAABeFg");
	var mask_graphics_75 = new cjs.Graphics().p("EgSiAvDMAAAheFMAp+AAAMAAABeFg");
	var mask_graphics_76 = new cjs.Graphics().p("EgSiAvDMAAAheFMAp+AAAMAAABeFg");
	var mask_graphics_77 = new cjs.Graphics().p("EgSiAvDMAAAheFMAp+AAAMAAABeFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:150.0011,y:301.1204}).wait(1).to({graphics:mask_graphics_1,x:150.0011,y:301.1204}).wait(1).to({graphics:mask_graphics_2,x:150.0011,y:301.1204}).wait(1).to({graphics:mask_graphics_3,x:150.0012,y:301.1204}).wait(1).to({graphics:mask_graphics_4,x:150.0013,y:301.1204}).wait(1).to({graphics:mask_graphics_5,x:150.0016,y:301.1204}).wait(1).to({graphics:mask_graphics_6,x:150.0019,y:301.1204}).wait(1).to({graphics:mask_graphics_7,x:150.0024,y:301.1204}).wait(1).to({graphics:mask_graphics_8,x:150.0031,y:301.1204}).wait(1).to({graphics:mask_graphics_9,x:150.004,y:301.1204}).wait(1).to({graphics:mask_graphics_10,x:150.0051,y:301.1204}).wait(1).to({graphics:mask_graphics_11,x:150.0064,y:301.1204}).wait(1).to({graphics:mask_graphics_12,x:150.008,y:301.1204}).wait(1).to({graphics:mask_graphics_13,x:150.0098,y:301.1204}).wait(1).to({graphics:mask_graphics_14,x:150.012,y:301.1204}).wait(1).to({graphics:mask_graphics_15,x:150.0145,y:301.1204}).wait(1).to({graphics:mask_graphics_16,x:150.0174,y:301.1204}).wait(1).to({graphics:mask_graphics_17,x:150.0207,y:301.1204}).wait(1).to({graphics:mask_graphics_18,x:150.0243,y:301.1204}).wait(1).to({graphics:mask_graphics_19,x:150.0284,y:301.1204}).wait(1).to({graphics:mask_graphics_20,x:150.0325,y:301.1204}).wait(1).to({graphics:mask_graphics_21,x:150.0362,y:301.1204}).wait(1).to({graphics:mask_graphics_22,x:150.0395,y:301.1204}).wait(1).to({graphics:mask_graphics_23,x:150.0424,y:301.1204}).wait(1).to({graphics:mask_graphics_24,x:150.0449,y:301.1204}).wait(1).to({graphics:mask_graphics_25,x:150.0471,y:301.1204}).wait(1).to({graphics:mask_graphics_26,x:150.0489,y:301.1204}).wait(1).to({graphics:mask_graphics_27,x:150.0505,y:301.1204}).wait(1).to({graphics:mask_graphics_28,x:150.0518,y:301.1204}).wait(1).to({graphics:mask_graphics_29,x:150.0529,y:301.1204}).wait(1).to({graphics:mask_graphics_30,x:150.0538,y:301.1204}).wait(1).to({graphics:mask_graphics_31,x:150.0545,y:301.1204}).wait(1).to({graphics:mask_graphics_32,x:150.055,y:301.1204}).wait(1).to({graphics:mask_graphics_33,x:150.0553,y:301.1204}).wait(1).to({graphics:mask_graphics_34,x:150.0556,y:301.1204}).wait(1).to({graphics:mask_graphics_35,x:150.0557,y:301.1204}).wait(1).to({graphics:mask_graphics_36,x:150.0558,y:301.1204}).wait(1).to({graphics:mask_graphics_37,x:150.0558,y:301.1204}).wait(1).to({graphics:mask_graphics_38,x:150.0558,y:301.1204}).wait(1).to({graphics:mask_graphics_39,x:150.0558,y:301.1204}).wait(1).to({graphics:mask_graphics_40,x:150.0558,y:301.1204}).wait(1).to({graphics:mask_graphics_41,x:150.0557,y:301.1204}).wait(1).to({graphics:mask_graphics_42,x:150.0555,y:301.1204}).wait(1).to({graphics:mask_graphics_43,x:150.0552,y:301.1204}).wait(1).to({graphics:mask_graphics_44,x:150.0547,y:301.1204}).wait(1).to({graphics:mask_graphics_45,x:150.0541,y:301.1204}).wait(1).to({graphics:mask_graphics_46,x:150.0532,y:301.1204}).wait(1).to({graphics:mask_graphics_47,x:150.0521,y:301.1204}).wait(1).to({graphics:mask_graphics_48,x:150.0507,y:301.1204}).wait(1).to({graphics:mask_graphics_49,x:150.049,y:301.1204}).wait(1).to({graphics:mask_graphics_50,x:150.0469,y:301.1204}).wait(1).to({graphics:mask_graphics_51,x:150.0445,y:301.1204}).wait(1).to({graphics:mask_graphics_52,x:150.0417,y:301.1204}).wait(1).to({graphics:mask_graphics_53,x:150.0385,y:301.1204}).wait(1).to({graphics:mask_graphics_54,x:150.0347,y:301.1204}).wait(1).to({graphics:mask_graphics_55,x:150.0305,y:301.1204}).wait(1).to({graphics:mask_graphics_56,x:150.0258,y:301.1204}).wait(1).to({graphics:mask_graphics_57,x:150.0205,y:301.1204}).wait(1).to({graphics:mask_graphics_58,x:150.0148,y:301.1204}).wait(1).to({graphics:mask_graphics_59,x:150.0095,y:301.1204}).wait(1).to({graphics:mask_graphics_60,x:150.0048,y:301.1204}).wait(1).to({graphics:mask_graphics_61,x:150.0006,y:301.1204}).wait(1).to({graphics:mask_graphics_62,x:149.9969,y:301.1204}).wait(1).to({graphics:mask_graphics_63,x:149.9936,y:301.1204}).wait(1).to({graphics:mask_graphics_64,x:149.9908,y:301.1204}).wait(1).to({graphics:mask_graphics_65,x:149.9884,y:301.1204}).wait(1).to({graphics:mask_graphics_66,x:149.9863,y:301.1204}).wait(1).to({graphics:mask_graphics_67,x:149.9846,y:301.1204}).wait(1).to({graphics:mask_graphics_68,x:149.9832,y:301.1204}).wait(1).to({graphics:mask_graphics_69,x:149.9821,y:301.1204}).wait(1).to({graphics:mask_graphics_70,x:149.9812,y:301.1204}).wait(1).to({graphics:mask_graphics_71,x:149.9806,y:301.1204}).wait(1).to({graphics:mask_graphics_72,x:149.9801,y:301.1204}).wait(1).to({graphics:mask_graphics_73,x:149.9798,y:301.1204}).wait(1).to({graphics:mask_graphics_74,x:149.9796,y:301.1204}).wait(1).to({graphics:mask_graphics_75,x:149.9795,y:301.1204}).wait(1).to({graphics:mask_graphics_76,x:149.9795,y:301.1204}).wait(1).to({graphics:mask_graphics_77,x:150.0206,y:301.1204}).wait(1));

	// overlay2
	this.foregroundOverlay = new lib.Symbol32();
	this.foregroundOverlay.name = "foregroundOverlay";

	var maskedShapeInstanceList = [this.foregroundOverlay];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.foregroundOverlay).wait(78));

	// womanHead
	this.womanHead = new lib.womanHead();
	this.womanHead.name = "womanHead";
	this.womanHead.setTransform(149.6,201.15,1,1,0,0,0,150,432.2);

	var maskedShapeInstanceList = [this.womanHead];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.womanHead).wait(78));

	// bg_calendar_woman
	this.calendar = new lib.Symbol13();
	this.calendar.name = "calendar";
	this.calendar.setTransform(162.4,335.95,1,1,0,0,0,21.5,-5.2);

	var maskedShapeInstanceList = [this.calendar];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.calendar).wait(78));

	// woman
	this.woman = new lib.woman();
	this.woman.name = "woman";
	this.woman.setTransform(281.1,249.3,1,1,0,0,0,281.1,249.3);

	var maskedShapeInstanceList = [this.woman];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.woman).wait(78));

	// overlay_2
	this.backgroundOverlay = new lib.overlay_2();
	this.backgroundOverlay.name = "backgroundOverlay";

	var maskedShapeInstanceList = [this.backgroundOverlay];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.backgroundOverlay).wait(78));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(24.2,0,275.8,602.3);


(lib.screenMan = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// foregroundOverlay
	this.foregroundOverlay = new lib.overlay();
	this.foregroundOverlay.name = "foregroundOverlay";
	this.foregroundOverlay.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.foregroundOverlay).wait(1));

	// man_head
	this.manHead = new lib.Symbol4();
	this.manHead.name = "manHead";
	this.manHead.setTransform(0.2,0.2,1,1,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.manHead).wait(1));

	// calendar
	this.calendar = new lib.bg_calendar_man();
	this.calendar.name = "calendar";
	this.calendar.setTransform(163.25,514.45,1,1,0,0,0,0.4,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.calendar).wait(1));

	// man_2
	this.man = new lib.Symbol6();
	this.man.name = "man";
	this.man.setTransform(150,229,1,1,0,0,0,150,229);

	this.timeline.addTween(cjs.Tween.get(this.man).wait(1));

	// overlay
	this.backgroundOverlay = new lib.overlay();
	this.backgroundOverlay.name = "backgroundOverlay";
	this.backgroundOverlay.setTransform(152.5,128,1,1,0,0,0,152.5,128);
	this.backgroundOverlay.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.backgroundOverlay).wait(1));

	// Man
	this.manBG = new lib.manBG();
	this.manBG.name = "manBG";
	this.manBG.setTransform(150,250,1,1,0,0,0,150,250);

	this.timeline.addTween(cjs.Tween.get(this.manBG).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.screenMan, new cjs.Rectangle(0,-210.7,300,810.7), null);


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
	this.arrow.setTransform(-33,3.95,0.6158,0.5649,0,0,0,13.6,10.7);

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(1));

	// CTA_text
	this.cta_glare = new lib.cta_glare();
	this.cta_glare.name = "cta_glare";
	this.cta_glare.setTransform(-42.75,-2.45,1,1,0,0,0,57.4,15.1);

	this.timeline.addTween(cjs.Tween.get(this.cta_glare).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnDCRIAAkhIOHAAIAAEhg");
	this.shape.setTransform(-62.975,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA_btn, new cjs.Rectangle(-108.1,-11.5,90.3,29.1), null);


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

	// replay
	this.replay_btn = new lib.replay_btn();
	this.replay_btn.name = "replay_btn";
	this.replay_btn.setTransform(284.3,4,0.3475,0.3475,0,0,180,-0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.replay_btn).wait(1));

	// Logo
	this.instance = new lib.MSFT_Logo_anim();
	this.instance.setTransform(0.05,0.3,0.7455,0.7455,0,0,0,0.1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// txt
	this.txt = new lib.txt_mc();
	this.txt.name = "txt";
	this.txt.setTransform(70.5,70.5,1,1,0,0,0,70.5,70.5);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// txt_CTA
	this.txtCta = new lib.cta();
	this.txtCta.name = "txtCta";
	this.txtCta.setTransform(13.85,551.95,1.2856,1.2856,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.txtCta).wait(1));

	// CTA
	this.cta = new lib.CTA_btn();
	this.cta.name = "cta";
	this.cta.setTransform(130.7,546.8,1.2127,1.2127,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// womanScene
	this.womanScene = new lib.screenWoman();
	this.womanScene.name = "womanScene";
	this.womanScene.setTransform(150,134.2,1,1,0,0,0,150,134.2);

	this.timeline.addTween(cjs.Tween.get(this.womanScene).wait(1));

	// manScene
	this.manScene = new lib.screenMan();
	this.manScene.name = "manScene";
	this.manScene.setTransform(150,134.2,1,1,0,0,0,150,134.2);

	this.timeline.addTween(cjs.Tween.get(this.manScene).wait(1));

	// BG
	this.Bg = new lib.Bg();
	this.Bg.name = "Bg";
	this.Bg.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.Bg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mainMC, new cjs.Rectangle(-0.7,-231,300.8,864.3), null);


// stage content:
(lib.M365_FY21Q3SMBRefresh_USA_300x600_BAN_BookingsTeams_EN_NA_Standard_ANI_TRY_NA_1 = function(mode,startPosition,loop,reversed) {
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
			exportRoot.shadowReplay = false;
			
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
		
		var mc = exportRoot.mainMC;
		mc.visible = false;
		mc.replay_btn.alpha=0
		
		this.runBanner = function() {
			
				mc.visible = true;
				mc.replay_btn.alpha=1
		
				this.tlMain = gsap.timeline();
				
				this.tlMain.to(mc.manScene.foregroundOverlay, 1, {alpha:.6, ease:Power3.easeOut});
			
				this.tlMain.from(exportRoot.headline1,{duration:0.8, y: "+=10", alpha: 0, ease:Power4.easeOut}, "<");
				this.tlMain.to(exportRoot.headline1,{duration:0.8, y: "-=10", alpha: 0, ease:Power4.easeIn}, "+=0.2");
				
				this.tlMain.from(exportRoot.headline2,{duration:0.8, y: "+=10", alpha: 0, ease:Power4.easeOut}, "+=0");
				this.tlMain.to(exportRoot.headline2,{duration:0.8, y: "-=10", alpha: 0, ease:Power4.easeIn}, "+=0.2");
				
				this.tlMain.to(mc.manScene.foregroundOverlay, 1, {x:"-=300", ease:Power3.easeIn}, "<");
				this.tlMain.from(mc.manScene.backgroundOverlay, 1, {x:"+=300", ease:Power3.easeOut}, "<+.9");
		
				this.tlMain.from(mc.manScene.calendar, .6, {y:"+=10", rotation:"-=10", alpha:0, ease:Back.easeOut}, "<+.9");
				this.tlMain.from(mc.manScene.calendar.dot, .6, {scaleX:0, scaleY:0, ease:Back.easeOut}, "<+.3");
		
				this.tlMain.to(mc.manScene, 1, {x:"-=150", ease:Power3.easeInOut},"+=.5");
				this.tlMain.to(mc.manScene.foregroundOverlay, 0, {x:"+=300", alpha:0}, "<");		
				this.tlMain.to(mc.manScene.foregroundOverlay, 1, {alpha:.8, ease:Power3.easeInOut},"<");
				this.tlMain.from(mc.womanScene, 1, {x:"+=300", ease:Power3.easeInOut, onStart:function(){mc.womanScene.play();}}, "<");
				
				this.tlMain.from(mc.womanScene.calendar, .6, {y:"+=10", rotation:"-=10", alpha:0, ease:Back.easeOut}, "<+.9");
				this.tlMain.from(mc.womanScene.calendar.dot, .6, {scaleX:0, scaleY:0, ease:Back.easeOut}, "<+.3");
				this.tlMain.from(mc.womanScene.calendar.txt1, .6, {x:"+=10", alpha:0, ease:Power3.easeOut}, "<+.3");
				this.tlMain.from(mc.womanScene.calendar.txt2, .6, {x:"+=10", alpha:0, ease:Power3.easeOut}, "<+.1");
		
				this.tlMain.to(mc.womanScene.calendar, .6, {y:"+=10", scaleX:.5, scaleY:.5, alpha:0, ease:Power3.easeInOut}, "+=.8");
				this.tlMain.to(mc.womanScene.womanHead, .6, {alpha:0, ease:Power3.easeInOut}, "+=.8");
				//this.tlMain.to(mc.womanScene.woman, 1, {x:"-=25", scaleX:1.3, scaleY:1.3, ease:Power3.easeInOut}, "<");
				
				this.tlMain.fromTo(mc.womanScene.foregroundOverlay, 1, {alpha:0}, {alpha:.8, ease:Power3.easeOut}, "<");
		
				this.tlMain.from(exportRoot.headline3,{duration:0.8, y: "+=10", alpha: 0, ease:Power4.easeOut}, "<+.5");
				this.tlMain.to(exportRoot.headline3,{duration:0.8, y: "-=10", alpha: 0, ease:Power4.easeIn}, "+=0.2");
				
				this.tlMain.from(exportRoot.headline4,{duration:0.8, y: "+=10", alpha: 0, ease:Power4.easeOut}, "+=0");
				this.tlMain.to(exportRoot.headline4,{duration:0.8, y: "-=10", alpha: 0, ease:Power4.easeIn}, "+=0.2");
				
				this.tlMain.to(mc.womanScene, 1, {x:"+=118.5", ease:Power3.easeInOut, onStart:function(){mc.womanScene.play();}}, "<+.6");
				this.tlMain.to(mc.womanScene.woman, 1, {x:"-=68", y:"+=66", scaleX:0.8, scaleY:0.8, ease:Power3.easeInOut}, "<");
				this.tlMain.to(mc.womanScene.foregroundOverlay, 1, {alpha:0, ease:Power3.easeInOut}, "<");
				this.tlMain.to(mc.manScene, 1, {x:"+=62", ease:Power3.easeInOut}, "<");
				this.tlMain.to(mc.manScene.man, 1, {y:"+=74",x:"-=08", scaleX:.8, scaleY:.8, ease:Power3.easeInOut, onStart:function(){mc.manScene.manHead.visible=false; mc.manScene.calendar.visible=false;}}, "<");
				this.tlMain.to(mc.manScene.manBG, 1, {y:"+=74",x:"-=08", scaleX:.8, scaleY:.8, ease:Power3.easeInOut}, "<");
				this.tlMain.to(mc.manScene.foregroundOverlay, 1, {alpha:0, ease:Power3.easeInOut},"<");
		
				
				this.tlMain.from(exportRoot.headline5,{duration:0.8, y: "+=30", alpha: 0, ease:Power4.easeOut}, "<+.1");
				this.tlMain.from(exportRoot.headline6,{duration:0.8, y: "+=30", alpha: 0, ease:Power4.easeOut}, "<+.1");		
				this.tlMain.from(exportRoot.headline7,{duration:0.8, y: "+=30", alpha: 0, ease:Power4.easeOut}, "<+.1");
				this.tlMain.from(exportRoot.headline8,{duration:0.8, y: "+=30", alpha: 0, ease:Power4.easeOut}, "<+.1");		
				this.tlMain.from(exportRoot.headline9,{duration:0.8, y: "+=30", alpha: 0, ease:Power4.easeOut}, "<+.1");		
				
				this.tlMain.from(mc.cta, { duration: 0.6, x: "-=150"}, "-=0.7");
				this.tlMain.from(mc.txtCta, { duration: 0.6, x: "-=150"}, "-=0.7");
				this.tlMain.from(mc.replay_btn, { alpha: 0, onStart:function(){exportRoot.isReplay = true;}}, "-=0.6");
				
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mainMC
	this.mainMC = new lib.mainMC();
	this.mainMC.name = "mainMC";
	this.mainMC.setTransform(0,0.1,1,0.9996,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.mainMC).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(149.3,69.1,150.7,564);
// library properties:
lib.properties = {
	id: '90A26FE74B042E4A89CA750D1DA2DF1F',
	width: 300,
	height: 600,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/M365_FY21Q3SMBRefresh_USA_300x600_BAN_BookingsTeams_EN_NA_Standard_ANI_TRY_NA_1_atlas_1.png?1607011761047", id:"M365_FY21Q3SMBRefresh_USA_300x600_BAN_BookingsTeams_EN_NA_Standard_ANI_TRY_NA_1_atlas_1"}
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;