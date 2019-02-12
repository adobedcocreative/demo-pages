(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib._300x250_MGMResortsLogo = function() {
	this.initialize(img._300x250_MGMResortsLogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,247,49);// helper functions:

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


(lib.textElement = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Limited Time Sale", "bold 14px 'Arial'", "#F5D342");
	this.text.name = "text";
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 143;
	this.text.parent = this;
	this.text.setTransform(73.5,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.textElement, new cjs.Rectangle(0,0,147,21.9), null);


(lib.offerElement = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.offer = new cjs.Text("20% OFF", "bold 24px 'Arial'", "#FFFFFF");
	this.offer.name = "offer";
	this.offer.textAlign = "center";
	this.offer.lineHeight = 29;
	this.offer.lineWidth = 143;
	this.offer.parent = this;
	this.offer.setTransform(73.5,2);

	this.timeline.addTween(cjs.Tween.get(this.offer).wait(1));

}).prototype = getMCSymbolPrototype(lib.offerElement, new cjs.Rectangle(0,0,147,30.9), null);


(lib.mc_secs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.seconds = new cjs.Text("00", "bold 12px 'Arial'", "#F5D342");
	this.seconds.name = "seconds";
	this.seconds.textAlign = "center";
	this.seconds.lineHeight = 15;
	this.seconds.lineWidth = 15;
	this.seconds.parent = this;
	this.seconds.setTransform(0,-11.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5D342").s().p("AgPAYQgGgEgBgKIALgBQABAGADACQADADAEAAQAGAAADgCQADgDAAgDQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAIgEgDIgIgDQgJgCgEgCQgFgFAAgHQAAgEACgEQADgEAEgBQAFgCAGgBQAKAAAGAFQAFAFABAHIgMABQgBgEgCgCQgDgCgEAAQgFAAgCACQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQADACAHACIANAEQAEACACADQACADAAAGQAAAEgDAFQgCAFgFACQgFABgIAAQgKABgFgGg");
	this.shape.setTransform(8.1,7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5D342").s().p("AgRAVQgHgHAAgNQAAgOAHgIQAIgIALAAQAKABAHAFQAEAEACAHIgMADQgBgEgDgDQgDgDgFAAQgFAAgEAEQgEAFAAAKQAAAKAEAFQAEAEAFABQAFAAADgDQADgEACgFIALADQgDAKgGAEQgGAEgJAAQgKABgIgJg");
	this.shape_1.setTransform(2.6,7.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5D342").s().p("AgVAdIAAg5IAqAAIAAAKIgeAAIAAANIAbAAIAAAJIgbAAIAAAPIAfAAIAAAKg");
	this.shape_2.setTransform(-2.8,7.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5D342").s().p("AgPAYQgGgEgBgKIALgBQABAGADACQADADAEAAQAGAAADgCQADgDAAgDQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAIgEgDIgIgDQgJgCgEgCQgFgFAAgHQAAgEACgEQADgEAEgBQAFgCAGgBQAKAAAGAFQAFAFABAHIgMABQgBgEgCgCQgDgCgEAAQgFAAgCACQgBAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQADACAHACIANAEQAEACACADQACADAAAGQAAAEgDAFQgCAFgFACQgFABgIAAQgKABgFgGg");
	this.shape_3.setTransform(-8.2,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.seconds}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_secs, new cjs.Rectangle(-13.9,-13.9,27.9,27.9), null);


(lib.mc_mins = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.minutes = new cjs.Text("00", "bold 12px 'Arial'", "#F5D342");
	this.minutes.name = "minutes";
	this.minutes.textAlign = "center";
	this.minutes.lineHeight = 15;
	this.minutes.lineWidth = 15;
	this.minutes.parent = this;
	this.minutes.setTransform(0,-11.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5D342").s().p("AgPAYQgGgEgBgKIALgBQABAGADACQADADAEAAQAGAAADgCQADgDAAgDQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAIgEgDIgIgDQgJgCgEgCQgFgFAAgHQAAgEACgEQADgEAEgBQAFgCAGgBQAKAAAGAFQAFAFABAHIgMABQgBgEgCgCQgDgCgEAAQgFAAgCACQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQADACAHACIANAEQAEACACADQACADAAAGQAAAEgDAFQgCAFgFACQgFABgIAAQgKABgFgGg");
	this.shape.setTransform(7.3,7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5D342").s().p("AALAdIgWglIAAAlIgLAAIAAg5IALAAIAXAmIAAgmIALAAIAAA5g");
	this.shape_1.setTransform(1.8,7.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5D342").s().p("AgFAdIAAg5IALAAIAAA5g");
	this.shape_2.setTransform(-2.2,7.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5D342").s().p("AARAdIAAgsIgLAsIgLAAIgLgsIAAAsIgLAAIAAg5IASAAIAJAnIAKgnIASAAIAAA5g");
	this.shape_3.setTransform(-6.6,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.minutes}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_mins, new cjs.Rectangle(-13.9,-13.9,27.9,27.9), null);


(lib.mc_hrs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.hours = new cjs.Text("00", "bold 12px 'Arial'", "#F5D342");
	this.hours.name = "hours";
	this.hours.textAlign = "center";
	this.hours.lineHeight = 15;
	this.hours.lineWidth = 15;
	this.hours.parent = this;
	this.hours.setTransform(0,-11.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5D342").s().p("AgPAYQgGgEgBgKIALgBQABAGADACQADADAEAAQAGAAADgCQADgDAAgDQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAIgEgDIgIgDQgJgCgEgCQgFgFAAgHQAAgEACgEQADgEAEgBQAFgCAGgBQAKAAAGAFQAFAFABAHIgMABQgBgEgCgCQgDgCgEAAQgFAAgCACQgBAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQADACAHACIANAEQAEACACADQACADAAAGQAAAEgDAFQgCAFgFACQgFABgIAAQgKABgFgGg");
	this.shape.setTransform(5.7,7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5D342").s().p("AAMAdIgJgNIgFgIIgDgCIgGgBIgCAAIAAAYIgMAAIAAg5IAYAAQAJAAAEACQAEACACAEQADADAAAGQAAAGgEAEQgEADgHABIAGAFIAHAKIAHALgAgNgDIAIAAIAKgBIADgCQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgCgCgDgBIgHAAIgJAAg");
	this.shape_1.setTransform(0.5,7.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5D342").s().p("AALAdIAAgZIgVAAIAAAZIgMAAIAAg5IAMAAIAAAXIAVAAIAAgXIAMAAIAAA5g");
	this.shape_2.setTransform(-5.5,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.hours}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_hrs, new cjs.Rectangle(-13.9,-13.9,27.9,27.9), null);


(lib.mc_Days = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.days = new cjs.Text("00", "bold 12px 'Arial'", "#F5D342");
	this.days.name = "days";
	this.days.textAlign = "center";
	this.days.lineHeight = 15;
	this.days.lineWidth = 15;
	this.days.parent = this;
	this.days.setTransform(-0.4,-11.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5D342").s().p("AgPAYQgGgEgBgKIALgBQABAGADACQADADAEAAQAGAAADgCQADgDAAgDQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAIgEgDIgIgDQgJgCgEgCQgFgFAAgHQAAgEACgEQADgEAEgBQAFgCAGgBQAKAAAGAFQAFAFABAHIgMABQgBgEgCgCQgDgCgEAAQgFAAgCACQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQADACAHACIANAEQAEACACADQACADAAAGQAAAEgDAFQgCAFgFACQgFABgIAAQgKABgFgGg");
	this.shape.setTransform(8.4,7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5D342").s().p("AgFAdIAAgYIgVghIAOAAIAMAXIANgXIAOAAIgVAhIAAAYg");
	this.shape_1.setTransform(3.1,7.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5D342").s().p("AAQAdIgFgNIgWAAIgEANIgNAAIAXg5IALAAIAXA5gAAHAGIgHgUIgHAUIAOAAg");
	this.shape_2.setTransform(-2.4,7.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5D342").s().p("AgXAdIAAg5IAVAAQAGAAAEACQAFABAEAEQADAEACAFQACAGAAAHQAAAHgCAFQgCAGgEAEQgDADgFACIgJABgAgLATIAIAAIAGAAIAFgDQABgCABgDQACgEAAgHQAAgFgCgEQgBgEgBgCQgCgCgEAAIgJgBIgEAAg");
	this.shape_3.setTransform(-8,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.days}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_Days, new cjs.Rectangle(-13.9,-13.9,27.9,27.9), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("A3bD6IAAnzMAu3AAAIAAHzg");
	this.shape.setTransform(150,27.5,1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,300,55), null);


(lib.intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTeMAAAgm7MAu3AAAMAAAAm7g");
	this.shape.setTransform(160,135,1.067,1.084);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("A1KAFIAAgJMAqVAAAIAAAJ");
	this.shape_1.setTransform(137.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.intro, new cjs.Rectangle(0,-1,320,271), null);


(lib.gradient = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,0.604],2.8,15,3.2,-112.9).s().p("ArtTiMAAAgnDIXbAAMAAAAnDg");
	this.shape.setTransform(75,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.gradient, new cjs.Rectangle(0,0,150,250), null);


(lib.colon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text(":", "bold 12px 'Arial'", "#F5D342");
	this.text.textAlign = "center";
	this.text.lineHeight = 15;
	this.text.lineWidth = 6;
	this.text.parent = this;
	this.text.setTransform(70.7,2);

	this.text_1 = new cjs.Text(":", "bold 12px 'Arial'", "#F5D342");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 15;
	this.text_1.lineWidth = 6;
	this.text_1.parent = this;
	this.text_1.setTransform(39.7,2);

	this.text_2 = new cjs.Text(":", "bold 12px 'Arial'", "#F5D342");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 15;
	this.text_2.lineWidth = 6;
	this.text_2.parent = this;
	this.text_2.setTransform(5,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.colon, new cjs.Rectangle(0,0,75.7,18.8), null);


(lib.carousel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("A3bQBMAAAggBMAu3AAAMAAAAgBg");
	this.shape.setTransform(150,125,1,1.22);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.carousel, new cjs.Rectangle(0,0,300,250), null);


(lib.btn_prev = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrABIBXhWIAAApIgvAsIAsAsIAAAqg");
	this.shape.setTransform(9.2,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhmCgIAAk/ICaAAQAzAAAAAyIAADbQAAAygzAAg");
	this.shape_1.setTransform(10.3,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AhmCgIAAk/ICaAAQAzAAAAAyIAADbQAAAygzAAg");
	this.shape_2.setTransform(10.3,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.5,32);


(lib.btn_next = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoAsIAsgsIgvgsIAAgpIBXBWIhUBVg");
	this.shape.setTransform(11.3,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgzCgQgzAAAAgyIAAjbQAAgyAzAAICaAAIAAE/g");
	this.shape_1.setTransform(10.3,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgzCgQgzAAAAgyIAAjbQAAgyAzAAICaAAIAAE/g");
	this.shape_2.setTransform(10.3,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.5,32);


(lib.btn_CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AARArIgRg/IgQA/IgTAAIgUhVIARAAIANA6IAQg6IAUAAIAPA7IANg7IARAAIgUBVg");
	this.shape.setTransform(82.8,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAhQgMgMAAgUQAAgMAEgKQADgGAFgFQAFgFAGgDQAJgDAJAAQATAAALAMQAMALAAAUQAAAVgMALQgLAMgTAAQgSABgLgMgAgQgVQgHAHAAAOQAAAPAHAHQAHAIAJAAQALAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgLAAQgKAAgGAIg");
	this.shape_1.setTransform(72.5,13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARArIgig3IAAA3IgQAAIAAhVIARAAIAiA4IAAg4IAQAAIAABVg");
	this.shape_2.setTransform(63.5,13.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAQArIgWgoIgOAOIAAAaIgSAAIAAhVIASAAIAAAmIAigmIAXAAIggAhIAiA0g");
	this.shape_3.setTransform(52,13.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdAhQgMgMAAgUQAAgMAEgKQADgGAFgFQAFgFAGgDQAJgDAJAAQATAAALAMQAMALAAAUQAAAVgMALQgLAMgTAAQgSABgLgMgAgQgVQgHAHAAAOQAAAPAHAHQAHAIAJAAQALAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgLAAQgKAAgGAIg");
	this.shape_4.setTransform(42.6,13.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAhQgMgMAAgUQAAgMAEgKQADgGAFgFQAFgFAGgDQAJgDAJAAQATAAALAMQAMALAAAUQAAAVgMALQgLAMgTAAQgSABgLgMgAgQgVQgHAHAAAOQAAAPAHAHQAHAIAJAAQALAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgLAAQgKAAgGAIg");
	this.shape_5.setTransform(33.3,13.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjArIAAhVIAiAAIAPABQAFABAEACQAEADACAEQADAFAAAFQAAAHgDAFQgEAFgFACQAIACAEAFQAEAFAAAIQAAAGgDAGQgCAFgFAEQgFACgHABIgUABgAgSAdIAQAAIALgBQAEgBADgDQACgCAAgFQAAgDgCgDQgCgDgDgBQgEgBgLgBIgOAAgAgSgHIAMAAIALgBQAFAAACgDQADgDAAgEQAAgEgCgCQgCgDgFgBIgOAAIgKAAg");
	this.shape_6.setTransform(24.5,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// background
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#D9B45C","#94752C"],[0,1],0.1,-12.6,0.1,12.7).s().p("AnzB+QgyAAAAgyIAAiXQAAgyAyAAIPnAAQAyAAAAAyIAACXQAAAygyAAg");
	this.shape_7.setTransform(55,12.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#EFB45C","#B5752C"],[0,1],0.1,-12.6,0.1,12.7).s().p("AnzB+QgyAAAAgyIAAiXQAAgyAyAAIPnAAQAyAAAAAyIAACXQAAAygyAAg");
	this.shape_8.setTransform(55,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,25.3);


(lib.prev = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// prevBtn
	this.instance = new lib.btn_prev();
	this.instance.parent = this;
	this.instance.setTransform(10.2,16,1,1,0,0,0,10.2,16);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btn_prev(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.prev, new cjs.Rectangle(0,0,20.5,32), null);


(lib.next = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// nextBtn
	this.instance = new lib.btn_next();
	this.instance.parent = this;
	this.instance.setTransform(10.2,16,1,1,0,0,0,10.2,16);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btn_next(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.next, new cjs.Rectangle(0,0,20.5,32), null);


(lib.mc_TimerPulse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// colon
	this.colon = new lib.colon();
	this.colon.name = "colon";
	this.colon.parent = this;
	this.colon.setTransform(34,9.3,1,1,0,0,0,34,9.3);

	this.instance = new lib.colon();
	this.instance.parent = this;
	this.instance.setTransform(34,9.3,1,1,0,0,0,34,9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.colon}]}).to({state:[{t:this.colon}]},23).to({state:[{t:this.instance}]},24).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.colon).to({alpha:0},23).to({_off:true,alpha:1},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75.7,18.8);


(lib.mc_Timer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(1));

	// seconds
	this.instance = new lib.mc_secs();
	this.instance.parent = this;
	this.instance.setTransform(48.5,0);
	this.instance.alpha = 0;

	this.secondsContainer = new lib.mc_secs();
	this.secondsContainer.name = "secondsContainer";
	this.secondsContainer.parent = this;
	this.secondsContainer.setTransform(48.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},6).to({state:[{t:this.secondsContainer}]},9).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:true,alpha:1},9).wait(3));

	// minutes
	this.instance_1 = new lib.mc_mins();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.5,0);
	this.instance_1.alpha = 0;

	this.minutesContainer = new lib.mc_mins();
	this.minutesContainer.name = "minutesContainer";
	this.minutesContainer.parent = this;
	this.minutesContainer.setTransform(16.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.minutesContainer}]},9).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:true,alpha:1},9).wait(5));

	// hours
	this.instance_2 = new lib.mc_hrs();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-15.5,0);
	this.instance_2.alpha = 0;

	this.hoursContainer = new lib.mc_hrs();
	this.hoursContainer.name = "hoursContainer";
	this.hoursContainer.parent = this;
	this.hoursContainer.setTransform(-15.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.hoursContainer}]},9).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:true,alpha:1},9).wait(7));

	// days
	this.instance_3 = new lib.mc_Days();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-47.5,0);
	this.instance_3.alpha = 0;

	this.daysContainer = new lib.mc_Days();
	this.daysContainer.name = "daysContainer";
	this.daysContainer.parent = this;
	this.daysContainer.setTransform(-47.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.daysContainer}]},9).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true,alpha:1},9).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.4,-13.9,123.9,27.9);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ctaBtn
	this.instance = new lib.btn_CTA();
	this.instance.parent = this;
	this.instance.setTransform(54.5,12.9,1,1,0,0,0,55,12.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btn_CTA(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(-0.5,0.3,110,25.3), null);


(lib.control = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// nav_btns
	this.next = new lib.next();
	this.next.name = "next";
	this.next.parent = this;
	this.next.setTransform(289.9,20,1,1,0,0,0,10,20);

	this.prev = new lib.prev();
	this.prev.name = "prev";
	this.prev.parent = this;
	this.prev.setTransform(10,20,1,1,0,0,0,10,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev},{t:this.next}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.control, new cjs.Rectangle(0,0,300.4,32), null);


(lib.content = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_47 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(47).call(this.frame_47).wait(1));

	// cta
	this.cta = new lib.cta();
	this.cta.name = "cta";
	this.cta.parent = this;
	this.cta.setTransform(75.5,147.4,1,1,0,0,0,55,12.6);
	this.cta.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(30).to({alpha:1},17).wait(1));

	// logo
	this.logo = new lib.logo();
	this.logo.name = "logo";
	this.logo.parent = this;
	this.logo.setTransform(-150,0);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(48));

	// footer
	this.footerText = new cjs.Text("Best Las Vegas\nRates Guaranteed", "bold 12px 'Arial'", "#FFFFFF");
	this.footerText.name = "footerText";
	this.footerText.textAlign = "center";
	this.footerText.lineHeight = 15;
	this.footerText.lineWidth = 115;
	this.footerText.parent = this;
	this.footerText.setTransform(86.5,213.2);

	this.timeline.addTween(cjs.Tween.get(this.footerText).wait(48));

	// text
	this.textElement = new lib.textElement();
	this.textElement.name = "textElement";
	this.textElement.parent = this;
	this.textElement.setTransform(73.5,63.6,1,1,0,0,0,73.5,11);
	this.textElement.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.textElement).wait(2).to({alpha:1},11).wait(35));

	// offer
	this.offerElement = new lib.offerElement();
	this.offerElement.name = "offerElement";
	this.offerElement.parent = this;
	this.offerElement.setTransform(73.5,86.9,1,1,0,0,0,73.5,15.4);
	this.offerElement.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.offerElement).wait(6).to({alpha:1},15).wait(27));

	// timer Pulse
	this.colons = new lib.mc_TimerPulse();
	this.colons.name = "colons";
	this.colons.parent = this;
	this.colons.setTransform(74.6,111.5,1,1,0,0,0,37.9,9.3);
	this.colons.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.colons).wait(15).to({alpha:1},13).wait(20));

	// timer
	this.timer = new lib.mc_Timer();
	this.timer.name = "timer";
	this.timer.parent = this;
	this.timer.setTransform(74.8,116.2);
	this.timer.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.timer).wait(15).to({alpha:1},13).wait(20));

	// gradient copy
	this.gradient1 = new lib.gradient();
	this.gradient1.name = "gradient1";
	this.gradient1.parent = this;
	this.gradient1.setTransform(75,38,1,1,0,0,0,75,125);

	this.timeline.addTween(cjs.Tween.get(this.gradient1).wait(48));

	// gradient
	this.gradient = new lib.gradient();
	this.gradient.name = "gradient";
	this.gradient.parent = this;
	this.gradient.setTransform(75,125,1,1,0,0,0,75,125);

	this.timeline.addTween(cjs.Tween.get(this.gradient).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-87,300,337);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//console.log(amo);
		var ad = (function(config) {
			var root = config.root;
			var loadedAssets = [];
			var loadAssets = function(list, callbackFunction, callbackData){ //loadAssets(list of URLs, callback function)
				if(list && typeof list == 'string') {
					var path = list;
					list = [];
					list.push(path);
				}
				if(list && typeof list == 'object' && list.length) {
					var loadCounter = [];
					var head = document.querySelector('head');
					function loadCheck(e) {
						loadCounter.push(this);
						if(loadCounter.length == list.length) {
							loadedAssets.concat(loadCounter);
							callbackFunction(loadCounter, callbackData); //This function is called when all the provided assets are loaded properly.
						}
					}
					list.forEach(function(path) {
						if(path && typeof path == 'string' && path.length) {
							if(path.indexOf('.js') > 0) { //For loading JS file
								var script = document.createElement('script');
								script.type = 'text/javascript';
								script.onload = loadCheck;
								script.src = path;
								head.appendChild(script);
							} else if(path.indexOf('.css') > 0) { //For loading CSS file
								var style = document.createElement('style');
								style.type = 'text/css';
								style.setAttribute('rel', 'stylesheet');
								style.onload = loadCheck;
								style.setAttribute('href', path);
								head.appendChild(style);
							} else {	//For loading Image file
								var image = new Image();
								image.crossOrigin = "Anonymous";
								image.onload = loadCheck;
								image.src = path;
							}
						}
					});
				}
			}
			var resetRegistrationPoint = function(instance) {
				if(instance && typeof instance == 'object') {
					instance.x -= instance.regX;
					instance.y -= instance.regY;
					instance.regX = 0;
					instance.regY = 0;
				}
			}
			var setText = function(selector, text, type) { //setText(selector or element, dynamic text, specify type - 'resize' or 'clip' text)
				type = type && typeof type == 'string' &&  type.length ? type : 'resize';
				var instance = typeof selector == 'string' && selector && selector.length && root[selector] ? root[selector] : selector;
				if(text && text.length && instance && typeof instance == 'object') {
					text = text.split('<br>').join('\n');
					var initialTextHeight = instance.getMeasuredHeight()
					var initialLineHeight = instance.getMeasuredLineHeight()
					instance.text = text;
					if(initialTextHeight < instance.getMeasuredHeight()) {
						if(type == 'clip') { //Clip extra text
							for(var i = text.length - 3; i > 0; i--) {
								instance.text = text.slice(0, i) + '...';
								if(initialTextHeight >= instance.getMeasuredHeight()) { break; }
							}
						} else { //Resize text to fit in the container
							var fontSize = parseFloat(instance.font.split(' ').map(function(props){ return props.indexOf('px') > 0 ? (parseFloat(props) - 1) : '' }).join(''));
							if(fontSize && fontSize > 1) {
								for(var i = fontSize; i > 0; i--) {
									instance.font = instance.font.split(' ').map(function(props){ return props.indexOf('px') > 0 ? i + 'px' : props }).join(' ');
									if(initialTextHeight >= instance.getMeasuredHeight()) { break; }
								}
							}
						}
					} else if(initialTextHeight > instance.getMeasuredHeight()) { //Center align text
						instance.regY = -(initialTextHeight - instance.getMeasuredHeight())/2;
					}
				}
			}
			var setImage = function(selector, imagePath, alignment) { //setImage(selector or element, image path, alignment - 'top left')
				alignment = alignment && typeof alignment == 'string' && alignment.length ? alignment : 'center';
		/*		var bitmap = 0;
				if(imagePath && imagePath.length) {
					var img = document.createElement("img");
					img.crossOrigin = "Anonymous";
					img.src = imagePath;
					bitmap = new createjs.Bitmap(img);
				}*/
				var bitmap = imagePath && imagePath.length ? new createjs.Bitmap(imagePath) : 0;
				var instance = typeof selector == 'string' && selector && selector.length && root[selector] ? root[selector] : selector;
				if(bitmap && instance && typeof instance == 'object') {
					instance.alignment = alignment;
					loadAssets(imagePath, function(images){ //load image and then scale, align
						var image = images[0];
						//alignment = instance.alignment;
						//console.log('name - ', instance.name, ', alignemnt - ', alignment);
						//if(alignment == 'top center') { debugger; }
						var bounds = instance.nominalBounds || instance.getBounds() || instance.getTransformedBounds();
						//var bounds = instance.getTransformedBounds();
						var scale = 1;
						var imageWidth = image.width, imageHeight = image.height;
						var outerWidth = bounds.width, outerHeight = bounds.height;
						if(image.width > bounds.width || image.height > bounds.height) {
							var ratio = bounds.width/image.width;
							ratio = image.height*ratio > bounds.height ? bounds.height/image.height : ratio;
							bitmap.scaleX = bitmap.scaleY = ratio; //scale image to fit the image container
							imageWidth = image.width*ratio, imageHeight = image.height*ratio;
						}
						var xCenter = (outerWidth - imageWidth)/2;
						var yCenter = (outerHeight - imageHeight)/2;
						var xRight = (outerWidth - imageWidth);
						var yBottom = (outerHeight - imageHeight);
						switch(alignment) {	//align image
							case 'center':
							case 'center center':	bitmap.x = xCenter;
													bitmap.y = yCenter;
													break;
							case 'top':
							case 'top center':
							case 'center top': 		bitmap.x = xCenter;
													bitmap.y = 0;
													break;
							case 'left':
							case 'left center':
							case 'center left': 	bitmap.x = 0;
													bitmap.y = yCenter;
													break;
							case 'bottom':
							case 'bottom center':
							case 'center bottom': 	bitmap.x = xCenter;
													bitmap.y = yBottom;
													break;
							case 'right':
							case 'right center':
							case 'center right': 	bitmap.x = xRight;
													bitmap.y = yCenter;
													break;
							case 'top left':
							case 'left top': 		bitmap.x = bitmap.y = 0;
													break;
							case 'top right':
							case 'right top': 		bitmap.x = xRight;
													bitmap.y = 0;
													break;
							case 'bottom left':
							case 'left bottom': 	bitmap.x = 0;
													bitmap.y = yBottom;
													break;
							case 'bottom right':
							case 'right bottom': 	bitmap.x = xRight;
													bitmap.y = yBottom;
													break;
							default: 				bitmap.x = xCenter;
													bitmap.y = yCenter;
						}

						instance.removeAllChildren();
						instance.setBounds(bounds.x, bounds.y, bounds.width, bounds.height);
						instance.addChild(bitmap);
					});
				}
			}
			var addClick = function(selector, url) { //addClick(selector or element, click through Url)
				url = url && typeof url == 'string' && url.length ? url : '';
				var instance = typeof selector == 'string' && selector && selector.length && root[selector] ? root[selector] : selector;
				if(url && instance && typeof instance == 'object') {
					instance.onClickFunction = function(){ window.open(url, '_blank'); }
					instance.addEventListener("click", instance.onClickFunction);
				} else { return false; }
				return true;
			}
			var removeClick = function(selector) { //removeClick(selector or element)
				var instance = typeof selector == 'string' && selector && selector.length && root[selector] ? root[selector] : selector;
				if(instance && typeof instance == 'object' && 'onClickFunction' in instance && instance.onClickFunction) {
					instance.removeEventListener("click", instance.onClickFunction);
				} else { return false; }
				return true;
			}
			return { //exposed parameters and methods
				root: root,
				loadAssets: function(list, callbackFunction) { return loadAssets(list, callbackFunction); },
				resetRegistrationPoint: function(instance) { return resetRegistrationPoint(instance); },
				setText: function(selector, text, type) { return setText(selector, text, type); },
				setImage: function(selector, imagePath, alignment) { return setImage(selector, imagePath, alignment); },
				addClick: function(selector, url){ return addClick(selector, url); }
			}
		})({
			root: this
		});
		var canvasContainer = document.querySelector('#animation_container');
		if(canvasContainer) { canvasContainer.style.cursor = 'pointer'; }
		createjs.Touch.enable(stage);
		stage.enableMouseOver(10);
		//createjs.Ticker.on("tick", stage);
		// OR
		//createjs.Ticker.addEventListener("tick", stage);
		// OR
		createjs.Ticker.on("tick", tick);
		function tick(event) { stage.update(event); }


		window.root = this;
		var resetRegistrationPoint = function(instance) {
			if(instance && typeof instance == 'object') {
				instance.x -= instance.regX;
				instance.y -= instance.regY;
				instance.regX = 0;
				instance.regY = 0;
			}
		}
		//var gallery = ad.root.gallery;
		//resetRegistrationPoint(gallery);
		//var galleryBounds = gallery.nominalBounds;
		var images = ['300x250_Circus_FB.png', '300x250_delano_brand.png', '300x250_Excalibur_Brand.png', '300x250_luxor_brand.png'];

		var carousel = (function(){
			var element, elementBounds, root, currentIndex = 0, data = [], next, prev;
			var container, currentContainer, prevContainer, nextContainer;
			var autoplay = false, loop = false, transition = 500, duration = 500, delay = 0, direction = 'horizontal';
			var delayTimer = false, autoplayTimer = false;
			var onBeforeChange = function(){}, onChange = function(){};
			var onAutoplayStart = function(){}, onAutoplayEnd = function(){};
			var map = {
				id: 'id',
				name: 'name',
				text: 'text',
				image: 'image',
				url: 'url'
			}
			var init = function(config) {
				if(config && 'element' in config && config.element && typeof config.element == 'object'
					&& 'data' in config && config.data && config.data.length) {
					element = config.element;
					ad.resetRegistrationPoint(element);
					elementBounds = element.nominalBounds;
					config.data.forEach(function(obj){
						//need to work here
					});
					data = config.data;
					root = 'root' in  config && typeof config.root != 'undefined' ? config.root : root;
					autoplay = 'autoplay' in  config && typeof config.autoplay != 'undefined' ? config.autoplay : autoplay;
					loop = 'loop' in  config && typeof config.loop != 'undefined' ? config.loop : loop;
					transition = 'transition' in  config && typeof config.transition != 'undefined' ? config.transition : transition;
					duration = 'duration' in  config && typeof config.duration != 'undefined' ? config.duration : duration;
					delay = 'delay' in  config && typeof config.delay != 'undefined' ? config.delay : delay;
					direction = 'direction' in  config && typeof config.direction != 'undefined' ? config.direction : direction;
					next = 'next' in  config && typeof config.next != 'undefined' ? config.next : next;
					prev = 'prev' in  config && typeof config.prev != 'undefined' ? config.prev : prev;
					onBeforeChange = 'onBeforeChange' in  config && typeof config.onBeforeChange != 'undefined' ? config.onBeforeChange : onBeforeChange;
					onChange = 'onChange' in  config && typeof config.onChange != 'undefined' ? config.onChange : onChange;
					onAutoplayStart = 'onAutoplayStart' in  config && typeof config.onAutoplayStart != 'undefined' ? config.onAutoplayStart : onAutoplayStart;
					onAutoplayEnd = 'onAutoplayEnd' in  config && typeof config.onAutoplayEnd != 'undefined' ? config.onAutoplayEnd : onAutoplayEnd;
					var shape = new createjs.Shape();
					shape.graphics.drawRect(element.x, element.y, elementBounds.width, elementBounds.height);
					element.mask = shape;
					stage.addChild(shape);
					container = new createjs.Container();
					//container.x = 0;
					//container.y = 0;
					container.regX = 0;
					container.regY = 0;
					var shape = new createjs.Shape();
					shape.graphics.drawRect(0, 0, elementBounds.width, elementBounds.height)
					container.mask = shape;

					prevContainer = new createjs.Container();
					//prevContainer.addChild(new createjs.Bitmap(images[0]));
					//ad.setImage(prevContainer, data[data.length-1].image);
					prevContainer.setBounds(0, 0, elementBounds.width, elementBounds.height);
					if(direction  == 'vertical') { prevContainer.y = -elementBounds.height; } else { prevContainer.x = -elementBounds.width; }
					container.addChild(prevContainer);

					currentContainer = new createjs.Container();
					//currentContainer.addChild(new createjs.Bitmap(images[1]));
					//ad.setImage(currentContainer, data[0].image);
					currentContainer.setBounds(0, 0, elementBounds.width, elementBounds.height);
					currentContainer.x = 0;
					container.addChild(currentContainer);

					nextContainer = new createjs.Container();
					//nextContainer.addChild(new createjs.Bitmap(images[2]));
					//ad.setImage(nextContainer, data[1].image);
					nextContainer.setBounds(0, 0, elementBounds.width, elementBounds.height);
					if(direction  == 'vertical') { nextContainer.y = elementBounds.height; } else { nextContainer.x = elementBounds.width; }
					container.addChild(nextContainer);
					element.addChild(container);
					move();
					if(data && data.length > 1) {
						prev.addEventListener("click", prevClick);
						next.addEventListener("click", nextClick);
						if(autoplay && root) { laodAutoplay(); }
					} else {
						prev.visible = false;
						next.visible = false;
					}
					if(typeof onBeforeChange != 'undefined') { onBeforeChange('', data[currentIndex], data[currentIndex], Boolean(delayTimer || autoplayTimer)); }
				}
			}
			var getPrevIndex = function() { return (currentIndex - 1) < 0 ? (data.length - 1) : (currentIndex - 1); }
			var getNextIndex = function() { return (currentIndex + 1) >= data.length ? 0 : (currentIndex + 1); }
			var move = function(action) {
				currentIndex = action == 'prev' ? getPrevIndex() : action == 'next' ? getNextIndex() : currentIndex;
				ad.setImage(prevContainer, data[getPrevIndex()].image);
				ad.setImage(currentContainer, data[currentIndex].image);
				ad.setImage(nextContainer, data[getNextIndex()].image);
				if(!loop) { prev.visible = Boolean(currentIndex > 0); next.visible = Boolean(currentIndex < data.length -1); }
				if(typeof onChange != 'undefined') { onChange(action, data[currentIndex]); }
			}
			var prevClick = function(e) {
				//if(e) { console.log('Prev Click'); }
				var parentWindow = window.parent.window;
				if(parentWindow && 'amoUtils' in parentWindow && 'onInteraction' in parentWindow.amoUtils) {
					try {
						parentWindow.amoUtils.onInteraction('BROWSE PREV', data[currentIndex]['name']);
					} catch(e) {  }
				}
				if(typeof onBeforeChange != 'undefined') { onBeforeChange('prev', data[currentIndex], data[getPrevIndex()]); }
				prev.removeEventListener("click", prevClick);
				createjs.Tween.get(container, {override:true}).to((direction == 'vertical' ? {y: elementBounds.height} : {x: elementBounds.width}), transition).call(function(){
					createjs.Tween.get(container, {override:true}).to((direction == 'vertical' ? {y: 0} : {x: 0}));
					move('prev');
					prev.addEventListener("click", prevClick);
				});
			}
			var nextClick = function(e) {
				//if(e) { console.log('Next Click'); }
				var parentWindow = window.parent.window;
				if(parentWindow && 'amoUtils' in parentWindow && 'onInteraction' in parentWindow.amoUtils) {
					try {
						parentWindow.amoUtils.onInteraction('BROWSE NEXT', data[currentIndex]['name']);
					} catch(e) {  }
				}
				if(typeof onBeforeChange != 'undefined') { onBeforeChange('next', data[currentIndex], data[getNextIndex()]); }
				next.removeEventListener("click", nextClick);
				createjs.Tween.get(container, {override:true}).to((direction == 'vertical' ? {y: -elementBounds.height} : {x: -elementBounds.width}), transition).call(function(){
					createjs.Tween.get(container, {override:true}).to((direction == 'vertical' ? {y: 0} : {x: 0}));
					move('next');
					next.addEventListener("click", nextClick);
				});
			}
			var getSelected = function() { return data[currentIndex]; }
			var laodAutoplay = function() {
				var autoplayCounter = data.length;
				onAutoplayStart();
				delayTimer = setTimeout(function() {
					autoplayTimer = setInterval(function() {
						if(typeof onBeforeChange != 'undefined') { onBeforeChange('next', data[currentIndex], data[getNextIndex()]); }
						prev.removeEventListener("click", prevClick);
						next.removeEventListener("click", nextClick);
						createjs.Tween.get(container, {override:true}).to((direction == 'vertical' ? {y: -elementBounds.height} : {x: -elementBounds.width}), transition).call(function(){
							createjs.Tween.get(container, {override:true}).to((direction == 'vertical' ? {y: 0} : {x: 0}));
							move('next');
							next.addEventListener("click", nextClick);
							prev.addEventListener("click", prevClick);
						});
						autoplayCounter--;
						if(!autoplayCounter) { removeTimer(); }
					}, duration);
				}, delay);
				var removeTimer = function() {
					clearTimeout(delayTimer);
					clearInterval(autoplayTimer);
					delayTimer = false;
					autoplayTimer = false;
					//onAutoplayEnd();
					root.removeEventListener('rollover', removeTimer);
					//element.removeEventListener('rollover', removeTimer);
					//prev.removeEventListener('rollover', removeTimer);
					//next.removeEventListener('rollover', removeTimer);
				}
				root.addEventListener('rollover', removeTimer);
				onAutoplayEnd();
				//element.addEventListener('rollover', removeTimer);
				//prev.addEventListener('rollover', removeTimer);
				//next.addEventListener('rollover', removeTimer);
			}
			return {
				init: function(config) { return init(config); },
				getSelected: function() { return getSelected(); }
			}
		})();
		var timer = (function() {
			var dateTimer, date = new Date(), timerCounter = 0;
			var get = function() {
				var time;
				if(date) {
					var endDate = date, remainingTime;
					time = {};
					time.timestamp = remainingTime = endDate.getTime() - new Date().getTime();
					if(time.timestamp > 0) {
						time.milliseconds = remainingTime%1000;
						remainingTime = Math.floor(remainingTime/1000);
						time.seconds = remainingTime%60;
						remainingTime = Math.floor(remainingTime/60);
						time.minutes = remainingTime%60;
						remainingTime = Math.floor(remainingTime/60);
						time.hours = remainingTime%24;
						remainingTime = Math.floor(remainingTime/24);
						time.days = remainingTime;
						/*time.days = remainingTime%7;
						remainingTime = Math.floor(remainingTime/7);
						time.weeks = remainingTime;*/
					} else {
						time.milliseconds = 0;
						time.seconds = 0;
						time.minutes = 0;
						time.hours = 0;
						time.days = 0;
					}
				}
				return time;
			}
			var set = function(dateText) {
				var flag = false;
				if(dateText && new Date(dateText) != 'Invalid Date') {
					date = new Date(dateText);
					flag = true;
				} else { date = ''; }
				return flag;
			}
			var display = function() {
				visibleFlag = false;
				if(date) {
					time = get(), visibleFlag = Boolean(time.timestamp > 0);
					ad.root.content.timer.daysContainer.days.text = (time.days < 10 ? '0' : '') + time.days;
					ad.root.content.timer.hoursContainer.hours.text = (time.hours < 10 ? '0' : '') + time.hours;
					ad.root.content.timer.minutesContainer.minutes.text = (time.minutes < 10 ? '0' : '') + time.minutes;
					ad.root.content.timer.secondsContainer.seconds.text = (time.seconds < 10 ? '0' : '') + time.seconds;
					timerCounter++;
					if(!visibleFlag || timerCounter > 1500) { clearInterval(dateTimer); timerCounter = 0; }
				}
				ad.root.content.timer.daysContainer.visible = visibleFlag;
				ad.root.content.timer.hoursContainer.visible = visibleFlag;
				ad.root.content.timer.minutesContainer.visible = visibleFlag;
				ad.root.content.timer.secondsContainer.visible = visibleFlag;
				ad.root.content.colons.colon.visible = visibleFlag;
			}
			var play = function() {
				clearInterval(dateTimer);
				timerCounter = 0;
				dateTimer = setInterval(display, 10);
			}
			var stop = function() {
				clearInterval(dateTimer);
				timerCounter = 0;
				ad.root.content.days.text = '00';
				ad.root.content.hours.text = '00';
				ad.root.content.minutes.text = '00';
				ad.root.content.seconds.text = '00';
			}
			return {
				get: function() {  },
				set: function(date) { return set(date); },
				play: function() { return play(); },
				stop: function() { return stop(); },
			}
		})();
		//**Search & Replace Macro value**//
		function replaceMacro(str) {
			var returnVal = str;
			if (returnVal.indexOf('!{') != -1) {
				try {
					for (var i = 0; i <= str.split('!{').length; i++) {
						returnVal = (returnVal["substring"](str.indexOf("{") + 1, returnVal.search("}")) + "")["toLowerCase"]();
		//                        returnVal = str.replace('!{' + returnVal + '}', amo.content[0][returnVal]);
						returnVal = str.replace('!{' + returnVal + '}', carousel.getSelected().feedData[returnVal]);
						str = returnVal;
					}
				} catch (e) {}
			}
			return returnVal;
		}
		function setData(data, cam) {
			data = data && data.length ? data: 0, assets = [];
			if(cam) {
				ad.setText(ad.root.content.footerText, 'footer' in cam && cam.footer && cam.footer.length ? cam.footer: '');
			}
			if(data) {
				data.forEach(function(obj) { assets.push(obj.image); assets.push(obj.logo); });
				ad.loadAssets(assets, function(assets){
					timer.play();
					carousel.init({
						element: ad.root.carousel,
						root: ad.root,
						data: data,
						map: {
							id: 'id',
							name: 'name',
							image: 'image'
						},
						autoplay: true,
						loop: true,
						transition: 300,
						duration: 2000,
						delay: 1000,
						//direction: 'vertical',
						next: ad.root.controls.next,
						prev: ad.root.controls.prev,
						onBeforeChange: function(action, current, next) {
							//console.log('onbeforechange : ', ' action - ', action, ', current - ', current, ', next - ', next);
							timer.set(next.date);
							timer.play();
							ad.setImage(ad.root.content.logo, next['logo'], 'top center');
							ad.setText(ad.root.content.textElement.text, next['text']);
							ad.setText(ad.root.content.offerElement.offer, next['offer']);
						},
						onChange: function(action, current) {
							//console.log('onchange : ', ' action - ', action, ', current - ', current);
						},
						onAutoplayStart: function() {
							ad.root.content.cta.visible = false;
							ad.root.content.gradient.visible = false;
							ad.root.content.timer.visible = false;
							ad.root.content.colons.visible = false;
							ad.root.content.textElement.text.visible = false;
							ad.root.content.offerElement.offer.visible = false;
						},
						onAutoplayEnd: function() {
							ad.root.content.gotoAndPlay(1);
							ad.root.content.cta.visible = true;
							ad.root.content.gradient.visible = true;
							ad.root.content.timer.visible = true;
							ad.root.content.colons.visible = true;
							ad.root.content.textElement.text.visible = true;
							ad.root.content.offerElement.offer.visible = true;
						}
					});
					if(ad.root) {
						ad.root.addEventListener("click", function(e) {
							//console.log('Click ', e);
							//if(e.target.parent.name == 'next' || e.target.parent.name == 'prev' || e.target.parent.name == 'cta') {
							if(e.target.parent.name == 'next' || e.target.parent.name == 'prev') {

							} else {
								amo.onDynAdClick(carousel.getSelected().feedData, "CLICK", replaceMacro(amo.variation['ClickURL']));
							}
						});
					}

					ad.root.gotoAndPlay(1);
				});
			}
		}
		function loadData() {
			var replaceMacro = function(text, data) {
				if(text.indexOf('!{') != -1 && text.indexOf('}') != -1) {
					text = text.split('!{');
					text = text.map(function(string){
						if(string.indexOf('}') != -1) {
							string = string.split('}');
							for(var key in data) { if(key == string[0]) { string[0] = data[key]; } }
							string = string.join('');
						}
						return string;
					}).join('');
				}
				return text.split('^').join(' ');
			}
			var contentD = [
				{
					"name": "Product Name1",
					//"description": "Cyber Week Starts Now",
					"brand": "20% OFF",
					"image_url2": "assets/300x250_image1.jpeg",
					"image_url5": "assets/300x250_logo1.png",
					"passthroughfield2": "March 10, 2018",
					"description": "LIMITED TIME SALE",
					"product_url": "https://www.mgmresorts.com/"
				},
				{
					"name": "Product Name2",
					//"description": "Cyber Week Starts Now",
					"brand": "50% OFF",
					"image_url2": "assets/300x250_image2.jpeg",
					"image_url5": "assets/300x250_logo2.png",
					"passthroughfield2": "NA",
					"description": "LIMITED TIME SALE",
					"product_url": "https://www.adobe.com/"
				},
				{
					"name": "Product Name3",
					//"description": "Cyber Week Starts Now",
					"brand": "10% OFF",
					"image_url2": "assets/300x250_image3.jpeg",
					"image_url5": "assets/300x250_logo3.png",
					"passthroughfield2": "January 22, 2016",
					"description": "LIMITED TIME SALE",
					"product_url": "https://www.facebook.com/"
				},
				{
					"name": "Product Name4",
					//"description": "Cyber Week Starts Now",
					"brand": "15% OFF",
					"image_url2": "assets/300x250_image4.jpeg",
					"image_url5": "assets/300x250_logo4.png",
					"passthroughfield2": "March 21, 2018",
					"description": "LIMITED TIME SALE",
					"product_url": "https://www.twitter.com/"
				}
			];
			if(contentD && contentD.length) { contentD.forEach(function(data) { amo.registerContent(data); }); }
			amo.registerVariation("EndTime", "!{passthroughfield2}");
			amo.registerVariation("CtaText", "BOOK NOW");
			amo.registerVariation("ClickURL", "!{product_url}");
			amo.registerVariation("Logo", "!{image_url5}");
			amo.registerVariation("Headline", "!{description}^!{brand}");
			amo.registerVariation("SubHeadline", "Best Las Vegas<br> Rates Guaranteed");
			amo.registerVariation("BgImage", "!{image_url2}");

			var content = [], cam = {};
			var cam = {
				dateFlag: amo.variation['DateFlag'],
				cta: amo.variation['CtaText'],
				url: amo.variation['ClickURL'],
				footer: amo.variation['FooterText']
			};
			var cam = {
				EndTime: amo.variation['EndTime'],
				cta: amo.variation['CtaText'],
				url: amo.variation['ClickURL'],
				logo: amo.variation['Logo'],
				headline: amo.variation['Headline'],
				footer: amo.variation['SubHeadline'],
				bgImage: amo.variation['BgImage']
			};
			if(amo.content && amo.content.length) {
				var sampleContent = amo.content[0], feedParameters = [];
				for(var key in sampleContent) { feedParameters.push(key); }
				amo.content.forEach(function(data) {
					//content.push({
					//	name: data.name,
					//	//description: data.description,
					//	image: data.image_url2,
					//	date: data.passthroughfield2,
					//	logo: data.image_url5,
					//	text: data.description,
					//	offer: data.brand,
					//	url: data.product_url,
					//	//camurl: amo.variation['ClickURL'].indexOf('!{') > 0 ? :
					//	feedData: data
					//});
					content.push({
						name: data.name,
						//description: data.description,
						image: cam.bgImage,
						date: cam.EndTime,
						logo: cam.logo,
						text: replaceMacro(cam.headline.split('^')[0], data),
						offer: replaceMacro(cam.headline.split('^')[1], data),
						url: cam.url,
						//camurl: amo.variation['ClickURL'].indexOf('!{') > 0 ? :
						feedData: data
					});
				});
				if(content && content.length) {
					content.map(function(data){
						for(var key in data) {
							if(typeof data[key] == 'string') {
								data[key] = replaceMacro(data[key], data.feedData);
							}
						}
					});
				}
			}
			setData(content, cam);
		}
		ad.root.stop();
		loadData();
	}
	this.frame_47 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(47).call(this.frame_47).wait(1));

	// intro
	this.intro = new lib.intro();
	this.intro.name = "intro";
	this.intro.parent = this;
	this.intro.setTransform(140,114.8,1,1,0,0,0,150,124.8);

	this.timeline.addTween(cjs.Tween.get(this.intro).to({x:150,y:124.8,alpha:0},23).to({_off:true},1).wait(24));

	// controls
	this.controls = new lib.control();
	this.controls.name = "controls";
	this.controls.parent = this;
	this.controls.setTransform(144.5,186.5,1,1,0,0,0,144.5,20);

	this.timeline.addTween(cjs.Tween.get(this.controls).wait(48));

	// content
	this.content = new lib.content();
	this.content.name = "content";
	this.content.parent = this;
	this.content.setTransform(225,125,1,1,0,0,0,75,125);

	this.timeline.addTween(cjs.Tween.get(this.content).wait(48));

	// MgmResortLogo
	this.instance = new lib._300x250_MGMResortsLogo();
	this.instance.parent = this;
	this.instance.setTransform(8,212,0.623,0.623);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48));

	// BottomPatch
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bDhIAAnBMAu3AAAIAAHBg");
	this.shape.setTransform(150,227.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(48));

	// carousel
	this.carousel = new lib.carousel();
	this.carousel.name = "carousel";
	this.carousel.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.carousel).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(140,38,320,347);
// library properties:
lib.properties = {
	id: 'BEC951EBBE0A422ABA5EFAFCA12DA765',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_300x250_MGMResortsLogo.png?1520228671425", id:"_300x250_MGMResortsLogo"}
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
an.compositions['BEC951EBBE0A422ABA5EFAFCA12DA765'] = {
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
