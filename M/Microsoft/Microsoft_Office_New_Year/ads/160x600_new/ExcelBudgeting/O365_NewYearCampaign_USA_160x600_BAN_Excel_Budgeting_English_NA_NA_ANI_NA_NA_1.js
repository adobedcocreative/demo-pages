(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"O365_NewYearCampaign_USA_160x600_BAN_Excel_Budgeting_English_NA_NA_ANI_NA_NA_1_atlas_", frames: [[91,209,12,1],[105,209,12,1],[71,209,18,12],[0,156,336,51],[0,209,69,69],[0,0,757,115],[0,330,266,43],[0,117,639,37],[338,156,93,172]]}
];


// symbols:



(lib.Path = function() {
	this.initialize(ss["O365_NewYearCampaign_USA_160x600_BAN_Excel_Budgeting_English_NA_NA_ANI_NA_NA_1_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Path_3 = function() {
	this.initialize(ss["O365_NewYearCampaign_USA_160x600_BAN_Excel_Budgeting_English_NA_NA_ANI_NA_NA_1_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Path_7 = function() {
	this.initialize(ss["O365_NewYearCampaign_USA_160x600_BAN_Excel_Budgeting_English_NA_NA_ANI_NA_NA_1_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.initialize(ss["O365_NewYearCampaign_USA_160x600_BAN_Excel_Budgeting_English_NA_NA_ANI_NA_NA_1_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ExcelIcon = function() {
	this.initialize(ss["O365_NewYearCampaign_USA_160x600_BAN_Excel_Budgeting_English_NA_NA_ANI_NA_NA_1_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.laptopshadow = function() {
	this.initialize(ss["O365_NewYearCampaign_USA_160x600_BAN_Excel_Budgeting_English_NA_NA_ANI_NA_NA_1_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.phoneshadow = function() {
	this.initialize(ss["O365_NewYearCampaign_USA_160x600_BAN_Excel_Budgeting_English_NA_NA_ANI_NA_NA_1_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.phonetopbar = function() {
	this.initialize(ss["O365_NewYearCampaign_USA_160x600_BAN_Excel_Budgeting_English_NA_NA_ANI_NA_NA_1_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.phone = function() {
	this.initialize(ss["O365_NewYearCampaign_USA_160x600_BAN_Excel_Budgeting_English_NA_NA_ANI_NA_NA_1_atlas_"]);
	this.gotoAndStop(8);
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


(lib.white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhL2AauMAAAg1bMCXtAAAMAAAA1bg");
	this.shape.setTransform(485.475,171);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.white, new cjs.Rectangle(0,0,971,342), null);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2F2F").s().p("ABNA/YgaAagnAIghgOYgigOgWghAAgkYAAglAXghAigNYAigNAnAJAZAbIgWAUYgRgSgagGgWAJYgXAJgPAWAAAYYAAAYAOAWAXAKYAWAJAagFARgSg");
	this.shape.setTransform(1.25,0.05,0.8766,0.8766,135.0007,0,0,1.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F2F2F").s().p("AgmgTIBNAAIgnAmg");
	this.shape_1.setTransform(-5.3,2.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.2,-7.8,18.4,15.8);


(lib.shadowcache = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.instance = new lib.laptopshadow();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.2549,1.2549);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadowcache, new cjs.Rectangle(0,0,950,144.3), null);


(lib.phonecache = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// screen blank
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjDFdIAAq5IGHAAIAAK5g");
	this.shape.setTransform(67.525,42.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// phone
	this.instance = new lib.phone();
	this.instance.parent = this;
	this.instance.setTransform(44.9,0,0.4913,0.4913);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.phoneshadow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,65.9,0.5071,0.5071);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.phonecache, new cjs.Rectangle(0,0,134.9,87.7), null);


(lib.ms = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#737373").s().p("AANApIAAgvIggAAIAABKIgVAAIAAhKIgQAAIAAgSIAQAAIAAgMQAAgJADgJQAFgIAHgDQAIgEAKgBQAGAAAFACIABAAIAAATIgBAAQgFgCgEgBQgGABgEAEQgDADgBAJIAAALIAgAAIAAgUIABgBIAUgGIABAAIAAAbIAWAAIAAASIgWAAIAAArQAAAJADADQADADAHABIAIgDIABgBIAAASIAAABIgHACIgJABQgcgBAAgdg");
	this.shape.setTransform(30.7515,0.0002);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#737373").s().p("AgiAjQgMgMAAgWQAAgXAMgMQANgOAWAAQAWAAAMANQAMAMAAAXQABAVgNAOQgNAOgWAAQgVgBgNgNgAgRgWQgHAIAAAPQAAAOAHAHQAGAJALAAQANAAAGgJQAGgHAAgPQAAgNgGgJQgHgHgMgBQgLAAgGAIg");
	this.shape_1.setTransform(20.1013,2.2002);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#737373").s().p("AgSAvIgMgEIAAgVIABAAQAFAEAHADQAGACAGAAQAOAAAAgJQAAgDgCgDIgFgDIgKgGQgJgDgEgEQgEgCgDgFQgCgFAAgHQAAgNAKgHQAKgJAPAAIAKABIAKAEIABAAIAAAUIgBgBQgEgDgGgCIgLgBQgGAAgCACQgEACAAAFQAAAEADADQACADAKAEQANAGAFAFQAGAGAAAKQAAAMgKAIQgKAJgQAAIgNgCg");
	this.shape_2.setTransform(11.3262,2.2002);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#737373").s().p("AgiAjQgMgMAAgWQAAgXANgMQAMgOAWAAQAWAAAMANQAMANAAAWQABAVgNAOQgOAOgVAAQgVgBgNgNgAgRgWQgHAIAAAPQAAAOAHAHQAGAJAMAAQALAAAHgJQAGgIAAgOQAAgNgHgJQgGgHgMgBQgLAAgGAIg");
	this.shape_3.setTransform(2.451,2.2002);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#737373").s().p("AgaAvIAAhcIAWAAIAAARIAAAAQADgIAEgEQAHgGAIAAQAFAAADABIABAAIAAAXIgBgBIgFgCIgHgBQgIAAgGAHQgEAJAAAKIAAAvg");
	this.shape_4.setTransform(-5.1241,2.1002);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#737373").s().p("AgNAqQgLgFgFgLQgGgKAAgNQAAgOAGgMQAGgMALgGQALgGAPgBIAMACIAKADIAAABIAAAUIgBAAQgKgIgLAAQgMAAgHAJQgIAIAAAOQAAANAIAIQAGAJANAAQAFAAAGgCIAKgGIABgBIAAAUIAAAAQgLAHgPAAQgNAAgKgHg");
	this.shape_5.setTransform(-13.0742,2.2002);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#737373").s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgDAFgBQAGABAEADQADADAAAFQAAAFgEAEQgDADgGABQgFgBgDgDg");
	this.shape_6.setTransform(-19.2743,-5.0999);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#737373").s().p("AgKAuIAAhbIAVAAIAABbg");
	this.shape_7.setTransform(-19.2993,2.1752);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#737373").s().p("AAwBAIABhoIgBAAIgCALIgnBdIgOAAIgmhcIgDgMIgBAAIABBoIgVAAIAAh/IAgAAIAlBhIAohhIAeAAIAAB/g");
	this.shape_8.setTransform(-29.4745,0.3502);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#737373").s().p("AhlB4QgmgqAAhNQAAhHAqgtQAqgtA/gBQA/AAAjApQAiApABBIIAAAaIjSAAQABArAaAXQAYAXArAAQAzAAAogeIAAA5QgqAahFAAQhDAAgngpgAgrhXQgUAVgGAkICOAAQAAglgSgVQgRgVgfAAQgdAAgVAWg");
	this.shape_9.setTransform(86.031,2.1774,0.2949,0.2949);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#737373").s().p("AhNB3QgrgrABhFQAAhLAtguQAtgvBLAAQApAAAiAPIAABBQghgYgkAAQgsAAgcAeQgdAeABAwQAAAwAbAbQAZAcAtAAQAmAAAhgbIAAA9QglAVgyAAQhEAAgqgqg");
	this.shape_10.setTransform(77.7736,2.1774,0.2949,0.2949);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#737373").s().p("AgjDjIAAk1IBFAAIAAE1gAgdidQgMgLAAgRQAAgSAMgMQAMgKARgBQASABAMAKQAMAMAAASQAAAQgMAMQgNALgRAAQgQAAgNgLg");
	this.shape_11.setTransform(71.9935,0.054,0.2949,0.2949);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#737373").s().p("AgxDoIAAj9Ig1AAIAAg3IA1AAIAAgyQAAgxAggcQAfgcAwAAQAZAAAQAFIAAA7QgPgJgRABQgzAAAAA5IAAAqIBHAAIAAA3IhHAAIAAD9g");
	this.shape_12.setTransform(67.1201,-0.1082,0.2949,0.2949);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#737373").s().p("AgxDoIAAj9Ig1AAIAAg3IA1AAIAAgyQAAgwAggdQAfgcAwAAQAZAAAQAFIAAA7QgPgJgSABQgyAAAAA5IAAAqIBHAAIAAA3IhHAAIAAD9g");
	this.shape_13.setTransform(61.4137,-0.1082,0.2949,0.2949);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#737373").s().p("AiXCjQg4g9AAhhQAAhnA5g+QA6g+BhAAQBbAAA4A8QA3A9AABhQAABog4A+Qg5A9hfAAQheAAg4g8gAhehzQgmAsAABIQAABIAlAsQAlAsA6AAQA8AAAlgqQAjgqAAhMQAAhMgigqQgkgqg9AAQg6AAglAsg");
	this.shape_14.setTransform(51.9693,0.3563,0.2949,0.2949);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#737373").s().p("Ah/DKIAAhDQArAdAsAAQAqgBAbgWQAbgWAAglQAAglgbgVQgbgVgyABQgOAAg5ADIAQjiIDTAAIAAA8IiaAAIgHBsIAmgBQBEAAAlAjQAlAjAAA8QAABBgqAmQgrAnhKAAQhAAAgfgSg");
	this.shape_15.setTransform(117.5565,0.4816,0.2949,0.2949);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#737373").s().p("AhoCrQgog1AAhdQAAhKAXg4QAWg4ArgfQArgeA1AAQAzAAAaAMIAAA/QglgTgkAAQg1AAgfAtQggAsAABKIACAAQANgZAZgOQAYgOAdAAQA6AAAgAkQAiAjAAA+QAAAqgSAiQgTAhghATQgfASgpAAQhDAAgog0gAgxAVQgUAVAAAhQAAAXAJAWQAKAWAQALQAQANAWAAQAhAAATgXQASgXABglQAAgogTgWQgTgVgiAAQgfAAgVAVg");
	this.shape_16.setTransform(108.5472,0.3711,0.2949,0.2949);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#737373").s().p("AhWDYQgegGgOgKIAAhFQATAQAcAKQAcAJAbAAQAoAAAXgTQAYgUAAghQAAgjgbgSQgcgTg0AAIgmAAIAAg4IAkAAQAtAAAZgSQAZgRAAghQAAgegUgRQgTgRgjAAQgtAAgoAfIAAg/QAUgLAbgHQAdgGAbAAQAnAAAdANQAdAOAPAYQAPAYAAAeQAAAqgWAbQgXAbgpALIAAACQAvAFAbAaQAcAcgBApQABA6gsAlQgrAkhJAAQgcAAgegHg");
	this.shape_17.setTransform(99.3313,0.3711,0.2949,0.2949);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.4,-7,157.7,14.1);


(lib.cta_arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYBIIA4g1IiBAAIAAgkICBAAIg5g2IAuAAIBNBHIhNBIg");
	this.shape.setTransform(0.1794,0.0354,0.576,0.576);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_arrow, new cjs.Rectangle(-5.4,-4.1,11.2,8.3), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


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

}).prototype = getMCSymbolPrototype(lib.logo_box, new cjs.Rectangle(-10.8,-10.7,21.6,21.5), null);


(lib.Path_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAQIAAgfQANAAAJAKQAJAIAAANg");
	this.shape.setTransform(1.625,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_0, new cjs.Rectangle(0,0,3.3,3.2), null);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAIIAAgPQAIAAADAFQAGADAAAHg");
	this.shape.setTransform(0.85,0.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,1.7,1.7), null);


(lib.icon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ExcelIcon();
	this.instance.parent = this;
	this.instance.setTransform(-51.75,-51.75,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.icon, new cjs.Rectangle(-51.7,-51.7,103.5,103.5), null);


(lib.halfpie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4CA067").s().p("ACDQ5QjShZiiiiQijijhZjTQhcjZAAjvQAAjuBcjZQBZjTCjijQCiiiDShZQDZhcDugBMAAAAkrQjugBjZhcg");
	this.shape.setTransform(58.6254,117.3527);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.halfpie, new cjs.Rectangle(0,0,117.3,234.7), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhJWAdDMAAAg6FMCStAAAMAAAA6Fg");
	mask.setTransform(469.5,185.875);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,0,0), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag/BdIAAi5IB/AAIAAC5g");
	mask.setTransform(6.375,9.275);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLBdIgHgBIgFgEIgEgGQgBgDAAgDIAAgYQAAgJgEgLQgEgIgIgIQgJgJgFgLQgFgLAAgNQAAgJACgIQADgIAEgHQAEgHAGgGIANgKQAIgFAHgCQAHgCAJAAQAJAAAIACIAPAHIANAKIAKANQAEAIACAHQADAJAAAIQAAAOgFAKQgGALgIAJQgHAGgFAKQgEALAAAJIAAAYIgBAGIgEAGIgGAEIgHABgAgRBMQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQABAAAAAAQAAABABAAQABAAAAAAQABAAAAAAIAWAAQABAAAAAAQABAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAgBAAAAQAAgBAAAAIAAgSIgiAAgAgThMQgKAEgHAHQgIAIgDAJQgEAIAAAMQAAAMAEAIQADAIAIAIQAIAIAFAJQAFAKABAMIAjAAQAAgMAGgKQAEgIAJgJQAGgIAFgIQAEgKAAgKQAAgKgEgKQgFgLgGgGQgGgGgLgFQgKgEgKAAQgKAAgJAEg");
	this.shape.setTransform(6.375,9.275);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,12.8,18.6), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AiMBiIAAjDIEZAAIAADDg");
	mask_1.setTransform(14.1,9.75);

	// Livello_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A184C3").s().p("AgYAiIAAgGIAlg1IghAAIAAgIIAsAAIAAAGIgkA1IAAABIAkAAIAAAHg");
	this.shape_1.setTransform(2.45,16.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#75A7DD").s().p("AATAiIgHgWIgYAAIgHAWIgIAAIAXhDIAJAAIAXBDgAgKAGIAUAAIgKgfg");
	this.shape_2.setTransform(2.8,4.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").p("ABahQIhLBeIAAA1QAAAFgDAEQgEADgFAAIgFAAQgFAAgDgDQgEgEAAgFIAAg1IhLhe");
	this.shape_3.setTransform(18.7,10.5951);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").p("ABaAAQAAAJgaAGQgaAFgmAAQglAAgagFQgagGAAgJQAAgHAagGQAbgGAkAAQAlAAAbAGQAaAGAAAHg");
	this.shape_4.setTransform(18.7,2.5);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,28.2,19.5), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Ah7BuIAAjbID3AAIAADbg");
	mask_2.setTransform(12.425,11);

	// Livello_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXgKIAFgEIASAUIATgUIAFAEIgYAZg");
	this.shape_5.setTransform(22.475,19.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").p("AAAhgIAADB");
	this.shape_6.setTransform(22.5,10.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").p("AgEAAIAJAA");
	this.shape_7.setTransform(17.5,14.5);

	this.instance = new lib.Path_3();
	this.instance.parent = this;
	this.instance.setTransform(4.1,14);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").p("AgEAAIAJAA");
	this.shape_8.setTransform(1.5,14.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#346535").p("ABLgnIiVAAQgFAAgCADQgDADAAAEIAABFICpAAIAAhFQAAgEgDgDQgDgDgEAAg");
	this.shape_9.setTransform(9,4.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8FB8A0").s().p("AhUAoIAAhFQAAgEADgDQACgDAFAAICVAAQAEAAADADQADADAAAEIAABFg");
	this.shape_10.setTransform(9,4.5);

	this.instance_1 = new lib.Path_7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,10.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").p("AAIgCIgKAAIAAAK");
	this.shape_11.setTransform(0.75,8.75);

	var maskedShapeInstanceList = [this.shape_5,this.shape_6,this.shape_7,this.instance,this.shape_8,this.shape_9,this.shape_10,this.instance_1,this.shape_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.instance_1},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,24.9,22), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah8BsIAAjXID5AAIAADXg");
	mask.setTransform(12.5,10.75);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("AB4BQIjvAAIAAifIDvAAg");
	this.shape.setTransform(12.5,8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").p("Ah3AAIDvAA");
	this.shape_1.setTransform(12.5,8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").p("AAAhPIAACf");
	this.shape_2.setTransform(13,8);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(0,0,25,17.5), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Ah8BsIAAjXID5AAIAADXg");
	mask_3.setTransform(12.5,10.75);

	// Livello_3
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").p("AAtAUIhZAAIAAgnIBZAAg");
	this.shape_12.setTransform(5,19);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").p("AAtAUIhZAAIAAgnIBZAAg");
	this.shape_13.setTransform(15,19);

	var maskedShapeInstanceList = [this.shape_12,this.shape_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,16,20.5,5.5), null);


(lib.ClipGroup_51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	mask.setTransform(683,384);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#787878").s().p("AgigRIBFAAIgjAjg");
	this.shape.setTransform(1352.75,665.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ABABAB").s().p("AhKBLIAAiVICVAAIAACVgAhABBICBAAIAAiBIiBAAg");
	this.shape_1.setTransform(1352.75,664.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhFBGIAAiLICLAAIAACLg");
	this.shape_2.setTransform(1352.75,664.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#787878").s().p("AgiASIAigjIAjAjg");
	this.shape_3.setTransform(1352.75,125.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ABABAB").s().p("AhKBLIAAiVICVAAIAACVgAhABBICBAAIAAiBIiBAAg");
	this.shape_4.setTransform(1352.75,125.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhFBGIAAiLICLAAIAACLg");
	this.shape_5.setTransform(1352.75,125.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ABABAB").s().p("AhKfhMAAAg/BICVAAMAAAA/BgAhAfXICBAAMAAAg+tIiBAAg");
	this.shape_6.setTransform(1352.75,334.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhFfcMAAAg+3ICLAAMAAAA+3g");
	this.shape_7.setTransform(1352.75,334.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DBDBDB").s().p("EgBKAn4MAAAhPvICVAAMAAABPvg");
	this.shape_8.setTransform(1352.75,416.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CACACA").s().p("AgVAtQgMgRgXgOQgDgCABgLQABgJAFAAQAIACALAHIAVARQAMgSAVgVQAVgVAKgGQAGgEABALQACAKgFAEQgWAVgYAbIgRAZQgDAEgEAAQgEAAgDgFg");
	this.shape_9.setTransform(192.1798,93.7752);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#777777").ss(0.5).p("AAegbQABAAAAACIgCAHQAAABgBAAIgTAAQgIAigDAMQgMAngSAAQgLAAAAgIQAAgHAGAAQAFAAABAHQAAACACAAQAJAAAIglIAKgqIgRAAQgBAAAAgBIABgHQABgCABAAIARAAQAHgWAGgIQAIgKAKAAQANAAAAAJQAAAHgGAAQgFAAgBgGQAAgFgEAAQgGAAgFANQgCAFgEARg");
	this.shape_10.setTransform(225.975,93.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#777777").s().p("AgrA8QAAgIAGABQAFAAABAHQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAAAQAJAAAIglIAKgqIgRAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIABgHIACgBIARAAQAHgYAGgIQAIgJAKAAQANAAAAAJQAAAHgGAAQgFAAgBgHQAAgEgEAAQgGAAgFAMQgCAGgEASIATAAIABABIgCAHQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgTAAQgIAigDAMQgMAngSAAQgLAAAAgIg");
	this.shape_11.setTransform(225.975,93.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#777777").ss(0.8).p("AgCgXIADAFIADAKIAFgHQACgDACgCIAFgDIACAAQADAAABABIABADIAAADQgCABgCAAIgCAAQgCgBgBAAIgDABQgEADgEAIIAGAWIABABIADgCQACgCADgEIABABQgDAGgFAEQgDADgCAAQgDAAgCgEIgDgRQgJAOgEAEQgEADgCAAQgDAAgBgCIgCgDQAAgCACgBQAAgBACAAQACAAACACQABABABAAIACgBQADgDADgGIAGgJIgDgNQgCgEgCgBQgCgBgDAAIgDAAIAAgCg");
	this.shape_12.setTransform(230.0081,95.3264);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#777777").s().p("AADAVIgDgSQgIAPgFAEQgDADgDAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAIgCgDQAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAIADgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABIACAAIACAAQADgDADgGIAHgJIgEgNIgEgFIgFgBIgDAAIAAgCIAOgDIADAGIADAKIAFgHIAFgFIAEgDIACgBQABAAABABQAAAAABAAQAAAAABAAQAAABABAAIABADIgBACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCgBIgDgBIgDACQgEADgEAHIAGAXIABAAIADgBIAFgGIABABQgDAGgEAEIgGADQgCAAgDgEg");
	this.shape_13.setTransform(230,95.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CACACA").s().p("AgsAvQgHgDABgKQADgRAkgZIgdgYQgIgGABgEQAAgEAJAAQAPAAAXAZQAWgSAYgBIAFAAQgGADggAdQATAWAPAZIgDAHQgEgGgLgLQgNgPgPgMQgLALgLAQIgKAOQgFAEgEAAIgEAAg");
	this.shape_14.setTransform(155.7933,93.7474);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5F6161").s().p("AgngTIBPAAIgoAng");
	this.shape_15.setTransform(96.15,92.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#777777").s().p("AglgOIAJgJIAcAcIAdgcIAJAJIgmAlg");
	this.shape_16.setTransform(1352.575,92.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B3B3B3").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_17.setTransform(121.975,97.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B3B3B3").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_18.setTransform(121.975,93.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B3B3B3").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_19.setTransform(121.975,89.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C6C6C6").s().p("EhWyACEIAAkHMCtlAAAIAAEHgEhWoAB6MCtRAAAIAAjzMitRAAAg");
	this.shape_20.setTransform(805.525,93.475);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("EhWtAB/IAAj9MCtbAAAIAAD9g");
	this.shape_21.setTransform(805.525,93.475);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C6C6C6").s().p("AooCEIAAkHIRRAAIAAEHgAoeB6IQ9AAIAAjzIw9AAg");
	this.shape_22.setTransform(191.575,93.475);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AojB/IAAj9IRHAAIAAD9g");
	this.shape_23.setTransform(191.575,93.475);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C6C6C6").s().p("An+CEIAAkHIP9AAIAAEHgAn0B6IPpAAIAAjzIvpAAg");
	this.shape_24.setTransform(56,93.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("An5B/IAAj9IPzAAIAAD9g");
	this.shape_25.setTransform(56,93.475);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#51906E").s().p("AgzARQgIgIgEgJQgEgLAAgKQAAgIACgGIAFgNIAJgLQAEgFAHgEQAIgEAFgBQAGgCAIAAIAMABIAKADIAIAFIApAmIAAg1IAKAAIAABGIhFAAIAAgKIA0AAIgmgjQgGgFgGgCQgEgCgKAAQgJAAgIADQgIAEgGAGQgGAFgEAJQgDAHAAAKQAAAKADAHQADAGAHAHIBABCIgHAHg");
	this.shape_26.setTransform(205.075,18.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgTBLIBAhCQAGgFAEgIQADgJAAgIQAAgIgDgJQgEgIgGgGQgGgGgIgEQgIgDgKAAQgJAAgEACQgGACgGAFIgLAJIgbAaIA0AAIAAAKIhFAAIAAhGIAKAAIAAA1IAZgXIAIgIIAIgHIAIgFIAJgDIAMgBQAJAAAGACQAGABAHAEQAIAFADAEQAFAFAEAGIAFANIACAOQAAALgEAKQgDAIgJAJIhABBg");
	this.shape_27.setTransform(169.775,18.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAqAyIgqgrIgpArIgHAAIAAgBIAAgGIAqgrIgqgqIAAgGIAAAAIAHAAIApAqIAqgqIAHAAIABAAIAAAGIgrAqIArArIAAAGIgBABg");
	this.shape_28.setTransform(1343.15,16.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgxA0IAAhSIAUAAIAAgVIBPAAIAABTIgUAAIAAAUgAgnAqIA7AAIAAg/Ig7AAgAgUgeIAyAAIAAA0IAKAAIAAg/Ig8AAg");
	this.shape_29.setTransform(1297.025,16.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgxAFIAAgJIBjAAIAAAJg");
	this.shape_30.setTransform(1250.975,16.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgEAfIAAgsIgMALIgGgGIAWgWIAXAWIgGAGIgMgLIAAAsg");
	this.shape_31.setTransform(1204.475,17.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhAAyIAAhjICBAAIAABjgAg4ArIBwAAIAAg9IhwAAgAg4gaIBwAAIAAgQIhwAAg");
	this.shape_32.setTransform(1204.5,16.05);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag+BVIgWgWIAAiTICpAAIAAA8IgMAAIAAgwIgMAAIAAAwIgNAAIAAgwIhfAAIAAA9IAqAAQgHAGgEAFIgrAAIAAhIIgNAAIAACCIAPAPIAKAAIAAgxIAWAAIgBAMIgJAAIAAAlIAJAAIAAAMg");
	this.shape_33.setTransform(141.475,18.425);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgOAuQgHgCgHgEIgKgLIAAAKIgKAAIAAgdIAdAAIAAAJIgOAAQADAGADADIAIAGIAKAEIAJABQAIAAAFgCQAHgDAFgEQAFgEADgFQADgFACgHIAKACQgCAHgFAIQgEAHgGAFQgJAGgGACQgHADgJAAQgGAAgIgDgAgvgKQADgJAEgGQAEgHAGgFQAJgHAGgBQAHgDAIAAQAHAAAIADQAIACAGAEIAKALIAAgKIAKAAIAAAdIgdAAIAAgJIAOAAQgDgGgDgCIgIgHIgKgEIgKgBQgGAAgGACQgHADgEAEQgFADgEAGQgEAHgBAFg");
	this.shape_34.setTransform(145.175,22);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_51, new cjs.Rectangle(4.9,10,1356.1999999999998,662.2), null);


(lib.ClipGroup_50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	mask.setTransform(683,384);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#257247").s().p("AAGATQgHAAgHABIgOAEIgMAIQgGADgFAGIAAgHQAAgIACgGIAFgNQADgGAEgDIALgIQAEgDAIgDIAOgCIAAgWIAoAoIgoApgAgFgJIgGACIgJAGQgEABgEAFIgGAJQgCAEgBAGQAJgGALgDQALgEAMAAIAHAAIAAAMIAXgXIgXgWIAAAMIgGAAg");
	this.shape.setTransform(1190.2,53.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#257247").s().p("AgvAmIAAhLIAFAAIAABGIBVAAIAAgoIAFAAIAAAtg");
	this.shape_1.setTransform(1188.05,57.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EBE9E7").s().p("Ak7B0QgIAAgHgGQgFgGAAgJIAAi9QAAgJAFgGQAHgGAIAAIJ2AAQAJAAAHAGQAFAGABAJIAAC9QgBAJgFAGQgHAGgJAAgAlGhpQgFAEAAAHIAAC9QAAAHAFAFQAFAEAGAAIJ2AAQAIAAAEgEQAEgFABgHIAAi9QgBgHgEgEQgFgFgHAAIp2AAQgGAAgFAFg");
	this.shape_2.setTransform(1208.85,55.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ak7ByQgHAAgFgGQgGgFAAgIIAAi9QAAgIAGgFQAFgGAHAAIJ2AAQAIAAAGAGQAFAFAAAIIAAC9QAAAIgFAFQgGAGgIAAg");
	this.shape_3.setTransform(1208.85,55.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AhDBEQAAAAgBgBQAAAAAAgBQAAAAAAgBQABAAAAgBIAygxQgNgPAAgSQAAgUAPgPQAOgPAUAAQAUAAAPAPQAPAPAAAUQAAAUgPAPQgPAOgUAAQgTAAgOgNIgyAyIgBABgAgMgyQgNANAAATQAAASANANQAMANATAAQATAAANgNQANgNAAgSQAAgTgNgNQgOgNgSAAQgTAAgMANg");
	this.shape_4.setTransform(625.625,56.3);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_50, new cjs.Rectangle(618.8,44,623.7,23.299999999999997), null);


(lib.ClipGroup_49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	mask.setTransform(683,384);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#257247").s().p("AgoAZIgOAAIAAhKIBsAAIAABKIhEAAIgaAZgAgvASIAOAAIAAAQIAPgQIBCAAIAAg8IhfAAg");
	this.shape.setTransform(1264.85,55.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBE9E7").s().p("AneB0QgIAAgHgGQgGgGAAgJIAAi9QAAgJAGgGQAHgGAIAAIO8AAQAJAAAHAGQAGAGAAAJIAAC9QAAAJgGAGQgHAGgJAAgAnphpQgFAEAAAHIAAC9QAAAHAFAFQAFAEAGAAIO8AAQAHAAAFgEQAFgFAAgHIAAi9QAAgHgFgEQgFgFgHAAIu8AAQgGAAgFAFg");
	this.shape_1.setTransform(1301.025,55.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AneByQgIAAgFgGQgFgFAAgIIAAi9QAAgIAFgFQAFgGAIAAIO8AAQAIAAAGAGQAFAFAAAIIAAC9QAAAIgFAFQgGAGgIAAg");
	this.shape_2.setTransform(1301.025,55.625);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_49, new cjs.Rectangle(1251.1,44,99.90000000000009,23.299999999999997), null);


(lib.ClipGroup_45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag4AZIAAgkQAAgFADgEQADgEAFAAIBHAAQAHAAAFAFIATATIgRATQgGAGgIAAg");
	mask.setTransform(5.8,2.5);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F9D04C","#F9D04C"],[0,1],-5.7,0,7.2,0).s().p("Ag5AZIAAgxIBzAAIAAAxg");
	this.shape.setTransform(5.75,2.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_45, new cjs.Rectangle(0.1,0,11.4,5), null);


(lib.ClipGroup_43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEBkIAAjHIAJAAIAADHg");
	mask.setTransform(0.55,10);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],0,10,0,-10).s().p("AgEBkIAAjHIAJAAIAADHg");
	this.shape.setTransform(0.525,10);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_43, new cjs.Rectangle(0.1,0,1,20), null);


(lib.ClipGroup_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEBkIAAjHIAJAAIAADHg");
	mask.setTransform(0.55,10);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],0,10,0,-10).s().p("AgEBkIAAjHIAJAAIAADHg");
	this.shape.setTransform(0.525,10);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_42, new cjs.Rectangle(0.1,0,1,20), null);


(lib.ClipGroup_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah8AFIAAgJID5AAIAAAJg");
	mask.setTransform(12.5,0.5);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],12.5,0,-12.5,0).s().p("Ah8AFIAAgJID5AAIAAAJg");
	this.shape.setTransform(12.5,0.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_41, new cjs.Rectangle(0,0,25,1), null);


(lib.ClipGroup_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah8AFIAAgJID5AAIAAAJg");
	mask.setTransform(12.5,0.5);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],12.5,0,-12.5,0).s().p("Ah8AFIAAgJID5AAIAAAJg");
	this.shape.setTransform(12.5,0.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_40, new cjs.Rectangle(0,0,25,1), null);


(lib.ClipGroup_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah8AFIAAgJID5AAIAAAJg");
	mask.setTransform(12.5,0.5);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],12.5,0,-12.5,0).s().p("Ah8AFIAAgJID5AAIAAAJg");
	this.shape.setTransform(12.5,0.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_39, new cjs.Rectangle(0,0,25,1), null);


(lib.ClipGroup_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah8AFIAAgJID5AAIAAAJg");
	mask.setTransform(12.5,0.5);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],12.5,0,-12.5,0).s().p("Ah8AFIAAgJID5AAIAAAJg");
	this.shape.setTransform(12.5,0.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_38, new cjs.Rectangle(0,0,25,1), null);


(lib.ClipGroup_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah8AFIAAgJID5AAIAAAJg");
	mask.setTransform(12.5,0.5);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],12.5,0,-12.5,0).s().p("Ah8AFIAAgJID5AAIAAAJg");
	this.shape.setTransform(12.5,0.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_37, new cjs.Rectangle(0,0,25,1), null);


(lib.ClipGroup_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah8AFIAAgJID5AAIAAAJg");
	mask.setTransform(12.5,0.5);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],12.5,0,-12.5,0).s().p("Ah8AFIAAgJID5AAIAAAJg");
	this.shape.setTransform(12.5,0.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_36, new cjs.Rectangle(0,0,25,1), null);


(lib.ClipGroup_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah8AFIAAgJID5AAIAAAJg");
	mask.setTransform(12.5,0.5);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],12.5,0,-12.5,0).s().p("Ah8AFIAAgJID5AAIAAAJg");
	this.shape.setTransform(12.5,0.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_35, new cjs.Rectangle(0,0,25,1), null);


(lib.ClipGroup_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah8AFIAAgJID5AAIAAAJg");
	mask.setTransform(12.5,0.5);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],12.5,0,-12.5,0).s().p("Ah8AFIAAgJID5AAIAAAJg");
	this.shape.setTransform(12.5,0.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_34, new cjs.Rectangle(0,0,25,1), null);


(lib.ClipGroup_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah8AFIAAgJID5AAIAAAJg");
	mask.setTransform(12.5,0.5);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],12.5,0,-12.5,0).s().p("Ah8AFIAAgJID5AAIAAAJg");
	this.shape.setTransform(12.5,0.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_33, new cjs.Rectangle(0,0,25,1), null);


(lib.ClipGroup_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah8AFIAAgJID5AAIAAAJg");
	mask.setTransform(12.5,0.5);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],12.5,0,-12.5,0).s().p("Ah8AFIAAgJID5AAIAAAJg");
	this.shape.setTransform(12.5,0.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_32, new cjs.Rectangle(0,0,25,1), null);


(lib.ClipGroup_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah8AFIAAgJID5AAIAAAJg");
	mask.setTransform(12.5,0.5);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],12.5,0,-12.5,0).s().p("Ah8AFIAAgJID5AAIAAAJg");
	this.shape.setTransform(12.5,0.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_31, new cjs.Rectangle(0,0,25,1), null);


(lib.ClipGroup_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah8AFIAAgJID5AAIAAAJg");
	mask.setTransform(12.5,0.5);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],12.5,0,-12.5,0).s().p("Ah8AFIAAgJID5AAIAAAJg");
	this.shape.setTransform(12.5,0.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_30, new cjs.Rectangle(0,0,25,1), null);


(lib.ClipGroup_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah8AFIAAgJID5AAIAAAJg");
	mask.setTransform(12.5,0.5);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],12.5,0,-12.5,0).s().p("Ah8AFIAAgJID5AAIAAAJg");
	this.shape.setTransform(12.5,0.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_29, new cjs.Rectangle(0,0,25,1), null);


(lib.ClipGroup_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah8AFIAAgJID5AAIAAAJg");
	mask.setTransform(12.5,0.5);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],12.5,0,-12.5,0).s().p("Ah8AFIAAgJID5AAIAAAJg");
	this.shape.setTransform(12.5,0.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_28, new cjs.Rectangle(0,0,25,1), null);


(lib.ClipGroup_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah8AFIAAgJID5AAIAAAJg");
	mask.setTransform(12.5,0.5);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],12.5,0,-12.5,0).s().p("Ah8AFIAAgJID5AAIAAAJg");
	this.shape.setTransform(12.5,0.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_27, new cjs.Rectangle(0,0,25,1), null);


(lib.ClipGroup_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah8AFIAAgJID5AAIAAAJg");
	mask.setTransform(12.5,0.5);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],12.5,0,-12.5,0).s().p("Ah8AFIAAgJID5AAIAAAJg");
	this.shape.setTransform(12.5,0.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_26, new cjs.Rectangle(0,0,25,1), null);


(lib.ClipGroup_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah8AFIAAgJID5AAIAAAJg");
	mask.setTransform(12.5,0.5);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],12.5,0,-12.5,0).s().p("Ah8AFIAAgJID5AAIAAAJg");
	this.shape.setTransform(12.5,0.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_25, new cjs.Rectangle(0,0,25,1), null);


(lib.ClipGroup_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah8AFIAAgJID5AAIAAAJg");
	mask.setTransform(12.5,0.5);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],12.5,0,-12.5,0).s().p("Ah8AFIAAgJID5AAIAAAJg");
	this.shape.setTransform(12.5,0.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_24, new cjs.Rectangle(0,0,25,1), null);


(lib.ClipGroup_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah8AFIAAgJID5AAIAAAJg");
	mask.setTransform(12.5,0.5);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],12.5,0,-12.5,0).s().p("Ah8AFIAAgJID5AAIAAAJg");
	this.shape.setTransform(12.5,0.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_23, new cjs.Rectangle(0,0,25,1), null);


(lib.ClipGroup_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah8AFIAAgJID5AAIAAAJg");
	mask.setTransform(12.5,0.5);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],12.5,0,-12.5,0).s().p("Ah8AFIAAgJID5AAIAAAJg");
	this.shape.setTransform(12.5,0.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_22, new cjs.Rectangle(0,0,25,1), null);


(lib.ClipGroup_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah8AFIAAgJID5AAIAAAJg");
	mask.setTransform(12.5,0.5);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],12.5,0,-12.5,0).s().p("Ah8AFIAAgJID5AAIAAAJg");
	this.shape.setTransform(12.5,0.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_21, new cjs.Rectangle(0,0,25,1), null);


(lib.ClipGroup_20_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah8AFIAAgJID5AAIAAAJg");
	mask.setTransform(12.5,0.5);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],12.5,0,-12.5,0).s().p("Ah8AFIAAgJID5AAIAAAJg");
	this.shape.setTransform(12.5,0.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20_0, new cjs.Rectangle(0,0,25,1), null);


(lib.ClipGroup_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhGBfIAAi9ICNgZIAADvg");
	mask.setTransform(7.1,12);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#1A171B"],[0,1],-6.9,0,6.9,0).s().p("AhGB4IAAjvICNAAIAADvg");
	this.shape.setTransform(7.1,12);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20, new cjs.Rectangle(0,0,14.2,24), null);


(lib.ClipGroup_19_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEBkIAAjHIAJAAIAADHg");
	mask.setTransform(0.55,10);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],0,10,0,-10).s().p("AgEBkIAAjHIAJAAIAADHg");
	this.shape.setTransform(0.525,10);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19_0, new cjs.Rectangle(0.1,0,1,20), null);


(lib.ClipGroup_18_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEBkIAAjHIAJAAIAADHg");
	mask.setTransform(0.55,10);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],0,10,0,-10).s().p("AgEBkIAAjHIAJAAIAADHg");
	this.shape.setTransform(0.525,10);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18_0, new cjs.Rectangle(0.1,0,1,20), null);


(lib.ClipGroup_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjvDIIAAmPIHfAAIAAGPg");
	mask.setTransform(24,20);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3677B9").s().p("AjvDIIAAmPIHfAAIAAGPg");
	this.shape.setTransform(24,20);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18, new cjs.Rectangle(0,0,48,40), null);


(lib.ClipGroup_17_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEBkIAAjHIAJAAIAADHg");
	mask.setTransform(0.55,10);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],0,10,0,-10).s().p("AgEBkIAAjHIAJAAIAADHg");
	this.shape.setTransform(0.525,10);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17_0, new cjs.Rectangle(0.1,0,1,20), null);


(lib.ClipGroup_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjvDIIAAmPIHfAAIAAGPg");
	mask.setTransform(24,20);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjvDIIAAmPIHfAAIAAGPg");
	this.shape.setTransform(24,20);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17, new cjs.Rectangle(0,0,48,40), null);


(lib.ClipGroup_16_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEBkIAAjHIAJAAIAADHg");
	mask.setTransform(0.55,10);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],0,10,0,-10).s().p("AgEBkIAAjHIAJAAIAADHg");
	this.shape.setTransform(0.525,10);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16_0, new cjs.Rectangle(0.1,0,1,20), null);


(lib.ClipGroup_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah3B4IAAjvIDvAAIAADvg");
	mask.setTransform(12,12);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhUBVQgjgjAAgyQAAgwAjgkQAkgjAwAAQAyAAAjAjQAjAkAAAwQAAAygjAjQgjAjgyAAQgwAAgkgjgAhIhIQgfAeAAAqQAAArAfAfQAeAeAqAAQArAAAegeQAfgfgBgrQABgqgfgeQgegegrAAQgqAAgeAeg");
	this.shape.setTransform(12,12);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16, new cjs.Rectangle(0,0,24,24), null);


(lib.ClipGroup_15_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEBkIAAjHIAJAAIAADHg");
	mask.setTransform(0.55,10);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],0,10,0,-10).s().p("AgEBkIAAjHIAJAAIAADHg");
	this.shape.setTransform(0.525,10);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15_0, new cjs.Rectangle(0.1,0,1,20), null);


(lib.ClipGroup_14_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEBkIAAjHIAJAAIAADHg");
	mask.setTransform(0.55,10);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],0,10,0,-10).s().p("AgEBkIAAjHIAJAAIAADHg");
	this.shape.setTransform(0.525,10);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14_0, new cjs.Rectangle(0.1,0,1,20), null);


(lib.ClipGroup_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag2BQIAAifIBtAAIAACfg");
	mask.setTransform(5.5,8);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYBQIAAgKIAUAAIAAgKIgSAAQgIAAgEgCQgFgCgFgFIgHgKQgDgGAAgGIAAgdIAKAAIAAAVIABALQABAFACAEQACAEAFADQADACAIAAIAtAAQAIAAADgCQAFgCACgFQADgFABgEIABgLIgBgVIAKAAIAAAdQAAAHgDAFQgBAFgFAFQgFAFgFACQgFACgIAAIgSAAIAAAKIAUAAIAAAKgAgTAoIgFgBIgGgDQgCgCAAgDIgCgGIAAhZQAAgDACgCQAAgDACgDQADgCADAAQACgCADAAIAnAAIAGACQADABACABIADAGIABAFIAABZIgBAGIgDAFIgFADIgGABgAgXhDQAAAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAIAABZQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABAAAAAAIAnAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAAhZQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgnAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABg");
	this.shape.setTransform(5.5,8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14, new cjs.Rectangle(0,0,11,16), null);


(lib.ClipGroup_13_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEBkIAAjHIAJAAIAADHg");
	mask.setTransform(0.55,10);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],0,10,0,-10).s().p("AgEBkIAAjHIAJAAIAADHg");
	this.shape.setTransform(0.525,10);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13_0, new cjs.Rectangle(0.1,0,1,20), null);


(lib.ClipGroup_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjvDIIAAmPIHfAAIAAGPg");
	mask.setTransform(24,20);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjvDIIAAmPIHfAAIAAGPg");
	this.shape.setTransform(24,20);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13, new cjs.Rectangle(0,0,48,40), null);


(lib.ClipGroup_12_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEBkIAAjHIAJAAIAADHg");
	mask.setTransform(0.55,10);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],0,10,0,-10).s().p("AgEBkIAAjHIAJAAIAADHg");
	this.shape.setTransform(0.525,10);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12_0, new cjs.Rectangle(0.1,0,1,20), null);


(lib.ClipGroup_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AifDIIAAmPIE/AAIAAGPg");
	mask.setTransform(16,20);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AifDIIAAmPIE/AAIAAGPg");
	this.shape.setTransform(16,20);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, new cjs.Rectangle(0,0,32,40), null);


(lib.ClipGroup_11_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEBkIAAjHIAJAAIAADHg");
	mask.setTransform(0.55,10);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],0,10,0,-10).s().p("AgEBkIAAjHIAJAAIAADHg");
	this.shape.setTransform(0.525,10);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11_0, new cjs.Rectangle(0.1,0,1,20), null);


(lib.ClipGroup_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgSBOIAAibIAlAAIAACbg");
	mask.setTransform(1.975,7.825);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBIQAcgeAAgqQAAgpgcgeIAHgGQAeAgAAAtQAAAugeAgg");
	this.shape.setTransform(1.925,7.825);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(0.1,0,3.8,15.7), null);


(lib.ClipGroup_10_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEBkIAAjHIAJAAIAADHg");
	mask.setTransform(0.5,10);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],0,10,0,-10).s().p("AgEBkIAAjHIAJAAIAADHg");
	this.shape.setTransform(0.5,10);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_0, new cjs.Rectangle(0,0,1,20), null);


(lib.ClipGroup_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AifDIIAAmPIE/AAIAAGPg");
	mask.setTransform(16,20);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AifDIIAAmPIE/AAIAAGPg");
	this.shape.setTransform(16,20);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(0,0,32,40), null);


(lib.ClipGroup_9_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEBkIAAjHIAJAAIAADHg");
	mask.setTransform(0.55,10);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],0,10,0,-10).s().p("AgEBkIAAjHIAJAAIAADHg");
	this.shape.setTransform(0.525,10);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_0, new cjs.Rectangle(0.1,0,1,20), null);


(lib.ClipGroup_8_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEBkIAAjHIAJAAIAADHg");
	mask.setTransform(0.5,10);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],0,10,0,-10).s().p("AgEBkIAAjHIAJAAIAADHg");
	this.shape.setTransform(0.5,10);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_0, new cjs.Rectangle(0,0,1,20), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag2A3IAAhtIBtAAIAABtg");
	mask.setTransform(5.5,5.5);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AgxA3QAAgrAegeQAegfAsAA");
	this.shape.setTransform(5.5,5.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(0,0,11,11), null);


(lib.ClipGroup_7_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEBkIAAjHIAJAAIAADHg");
	mask.setTransform(0.5,10);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],0,10,0,-10).s().p("AgEBkIAAjHIAJAAIAADHg");
	this.shape.setTransform(0.5,10);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_0, new cjs.Rectangle(0,0,1,20), null);


(lib.ClipGroup_6_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEBkIAAjHIAJAAIAADHg");
	mask.setTransform(0.5,10);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#D3D3D3"],[0,1],0,10,0,-10).s().p("AgEBkIAAjHIAJAAIAADHg");
	this.shape.setTransform(0.5,10);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_0, new cjs.Rectangle(0,0,1,20), null);


(lib.ClipGroup_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	mask.setTransform(683,384);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#247247").s().p("AnCAKIAAgTIOFAAIAAATg");
	this.shape.setTransform(145.125,698.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnCB2IAAjrIOFAAIAADrg");
	this.shape_1.setTransform(145.125,685.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#787878").s().p("AgTgkIAnAkIgnAlg");
	this.shape_2.setTransform(58.1,687.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#787878").s().p("AgTABIAnglIAABJg");
	this.shape_3.setTransform(28.725,687.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#787878").s().p("Ag4A5QgYgYAAghQAAghAYgXQAYgYAgAAQAiAAAXAYQAYAXAAAhQAAAhgYAYQgXAYgiAAQggAAgYgYgAgvgvQgUAUAAAbQAAAcAUAUQAUAUAbAAQAcAAAUgUQAUgUAAgcQAAgbgUgUQgUgUgcAAQgbAAgUAUg");
	this.shape_4.setTransform(211.225,687.625);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_0, new cjs.Rectangle(26.7,673.6,192.60000000000002,25.699999999999932), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AifDIIAAmPIE/AAIAAGPg");
	mask.setTransform(16,20);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AifDIIAAmPIE/AAIAAGPg");
	this.shape.setTransform(16,20);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,0,32,40), null);


(lib.ClipGroup_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	mask.setTransform(683,384);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgEB1IAAjpIAJAAIAADpg");
	this.shape.setTransform(189.75,685.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgEB1IAAjpIAJAAIAADpg");
	this.shape_1.setTransform(100.5,685.525);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_0, new cjs.Rectangle(100,673.8,90.30000000000001,23.5), null);


(lib.ClipGroup_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	mask.setTransform(683,384);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#707070").s().p("AhBAEIAAgHICDAAIAAAHg");
	this.shape.setTransform(1098.45,714.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#707070").s().p("AhBAEIAAgHICDAAIAAAHg");
	this.shape_1.setTransform(1098.45,710.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#707070").s().p("AgDA+IAAh7IAHAAIAAB7g");
	this.shape_2.setTransform(1100.5,712.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#707070").s().p("AgDA+IAAh7IAHAAIAAB7g");
	this.shape_3.setTransform(1096.4,712.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#707070").s().p("AhBBBIAAiBICDAAIAACBgAg6A5IB0AAIAAhxIh0AAg");
	this.shape_4.setTransform(1098.4,712.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#707070").p("AAAgkIAABJ");
	this.shape_5.setTransform(1172.6,709.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#707070").s().p("AgtAmIAAhLIBbAAIAABLgAgkAeIBJAAIAAg6IhJAAg");
	this.shape_6.setTransform(1172.55,709.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#707070").s().p("AhEBCIAAiDICJAAIAACDgAg7A5IB4AAIAAhxIh4AAg");
	this.shape_7.setTransform(1174.85,712.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#707070").p("AgQAAIAgAA");
	this.shape_8.setTransform(1136.8,713.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#707070").p("AgQAAIAgAA");
	this.shape_9.setTransform(1136.8,712.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#707070").p("AgQAAIAgAA");
	this.shape_10.setTransform(1136.8,710.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#707070").p("AAgArIg/AAIAAhVIA/AAg");
	this.shape_11.setTransform(1136.775,712.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#707070").s().p("AhEBBIAAiBICJAAIAACBgAg8A5IB4AAIAAhxIh4AAg");
	this.shape_12.setTransform(1136.8,712.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#747474").s().p("AgXA8IAAh3IAvAAIAAB3g");
	this.shape_13.setTransform(1259.325,712.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#ABABAB").p("An0AAIPpAA");
	this.shape_14.setTransform(1258.575,713.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#747474").s().p("AgeAJIAAgRIA9AAIAAARg");
	this.shape_15.setTransform(1201.925,712.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#747474").s().p("AgIAjIAAgaIgaAAIAAgRIAaAAIAAgbIARAAIAAAbIAaAAIAAARIgaAAIAAAag");
	this.shape_16.setTransform(1315.9,712.85);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0, new cjs.Rectangle(1091.8,704.8,227.70000000000005,14.100000000000023), null);


(lib.ClipGroup_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AifDIIAAmPIE/AAIAAGPg");
	mask_1.setTransform(16,20);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AifDIIAAmPIE/AAIAAGPg");
	this.shape.setTransform(16,20);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_1, new cjs.Rectangle(0,0,32,40), null);


(lib.ClipGroup_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	mask.setTransform(683,384);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#505050").s().p("AAAAaIgPAMIgIgFIACgUIgTgIQgBgFABgEIATgIIgCgUIAIgFIAPAMIARgMIAIAFIgCAUIASAIIAAAJIgSAIIACAUIgIAFgAgJgJQgEAEAAAFQAAAFAEAFQAEAEAFAAQAGAAAEgEQAEgFAAgFQAAgFgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape.setTransform(972.5375,716.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AAAAjIgOAMIgOgHIgEgEIACgTIgRgHIgBgFQgBgFABgFIABgFIARgHIgCgTIAJgGIAJgEIAOALIAQgLIAEABQAGADAEADIADADIAQAaIAAAFIAAAKIAAAFIgSAHIACATIgDAEIgOAHgAgFAAQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAQAAAAABABQAAAAABAAQAAABABAAQAAAAAAAAQAGAAAAgGQAAgFgGAAQgFAAAAAFg");
	this.shape_1.setTransform(972.5375,716.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#505050").ss(0.5).p("AAAgOIAAAd");
	this.shape_2.setTransform(967.2,717.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#505050").ss(1,1).p("AgtAAIBbAA");
	this.shape_3.setTransform(968.6,718.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#505050").s().p("AhCAxQgFAAgDgCQgDgEAAgEIAAhOQAAgDADgDQADgEAFAAICGAAQAEAAADAEQADADAAADIAABOQAAAEgDAEQgDACgEAAg");
	this.shape_4.setTransform(968.1,710.3);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0, new cjs.Rectangle(960.3,705.4,17.200000000000045,15.600000000000023), null);


(lib.ClipGroup_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	mask.setTransform(683,384);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjgSIBHAAIgkAlg");
	this.shape.setTransform(793.1,17.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhuBOQgfAAgYgXQgWgWAAghQAAgfAWgXQAXgXAgAAIDcAAQAhAAAXAXQAXAXAAAfQAAAggXAXQgXAXghAAgABUgaQgLALAAAPQAAAQALALQALALAQAAQAQAAALgLQALgLAAgQQAAgPgLgLQgLgLgQAAQgQAAgLALg");
	this.shape_1.setTransform(99.1,15.825);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0, new cjs.Rectangle(80.3,8,716.4000000000001,15.7), null);


(lib.ClipGroup_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AifDIIAAmPIE/AAIAAGPg");
	mask_1.setTransform(16,20);

	// Livello_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AifDIIAAmPIE/AAIAAGPg");
	this.shape_3.setTransform(16,20);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_2, new cjs.Rectangle(0,0,32,40), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhqtADIIAAmPMDVbAAAIAAGPg");
	mask.setTransform(683,20);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhqtADIIAAmPMDVbAAAIAAGPg");
	this.shape.setTransform(683,20);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,1366,40), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("EgvvAFoIAArPMBfeAAAIAALPg");
	mask_4.setTransform(305.55,36);

	// Layer_3
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#737373").s().p("AhlB3QgngpAAhNQAAhGArguQAqgtA/AAQA/gBAjApQAjApAABIIAAAaIjSAAQACArAZAXQAZAYArAAQAxgBApgdIAAA4QgpAahGABQhDgBgngqgAgrhXQgVAXgFAiICOAAQAAglgSgVQgRgVgfAAQgdAAgVAWg");
	this.shape_14.setTransform(491.425,42.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#737373").s().p("AhNB3QgrgrAAhEQAAhMAuguQAugvBKABQArgBAgAQIAABBQgggZglAAQgsAAgcAeQgcAfAAAvQAAAwAbAcQAZAbAtAAQAmAAAhgaIAAA8QglAWgyAAQhFgBgpgqg");
	this.shape_15.setTransform(463.425,42.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#737373").s().p("AgjDiIAAkzIBFAAIAAEzgAgdidQgMgMAAgRQAAgQAMgMQANgLAQAAQARAAANALQAMAMAAAQQAAAQgMAMQgNAMgRAAQgRAAgMgLg");
	this.shape_16.setTransform(443.825,34.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#737373").s().p("AgxDoIAAj9Ig1AAIAAg3IA1AAIAAgxQAAgyAggcQAfgcAwAAQAaAAAPAGIAAA6QgOgIgTAAQgyAAAAA6IAAApIBHAAIAAA3IhHAAIAAD9g");
	this.shape_17.setTransform(427.325,34.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#737373").s().p("AgxDoIAAj9Ig1AAIAAg3IA1AAIAAgxQAAgyAggcQAfgcAwAAQAaAAAPAGIAAA6QgOgIgTAAQgzAAAAA6IAAApIBIAAIAAA3IhHAAIAAD9g");
	this.shape_18.setTransform(407.975,34.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#737373").s().p("AiWCjQg4g9gBhhQABhnA5g+QA5g+BiAAQBaAAA4A8QA4A8gBBiQAABog4A+Qg5A9heAAQheAAg4g8gAhehzQglAtAABHQAABIAkAsQAkAsA7AAQA9AAAkgqQAkgqAAhLQgBhMgigrQgjgqg9AAQg7AAglAsg");
	this.shape_19.setTransform(375.9,35.975);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F9B90E").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_20.setTransform(54.875,54.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#39A4EE").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_21.setTransform(17.1,54.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#83BB1E").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_22.setTransform(54.875,17.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EA4E17").s().p("AiqCrIAAlVIFVAAIAAFVg");
	this.shape_23.setTransform(17.1,17.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#737373").s().p("ARIDTQgXgYAAgyIAAieIhtAAIAAD5IhJAAIAAj5Ig0AAIAAg8IA0AAIAAgrQAAgwAfggQAggfAyAAIAXABIATAEIAAA/IgNgFQgJgDgMAAQgWAAgNAPQgNAPAAAbIAAAlIBtAAIAAhFIBJgXIAABcIBKAAIAAA8IhKAAIAACQQAAAcALAMQAKAMAWAAQAHAAAJgDQALgEAEgDIAAA8QgHAEgQADQgTAEgNAAQguAAgXgZgAIrDBQgqgqAAhJQAAhNArgsQAsgtBNAAQBJAAAoArQApArAABJQAABMgrAsQgsAthKAAQhHAAgsgrgAJjAAQgWAaAAAxQAAAwAWAaQAWAaApAAQAoAAAUgaQAVgZAAgzQAAgygVgYQgWgZgnAAQgoAAgWAagAE7DnQgYgFgQgHIAAhIQASANAZAJQAWAIATAAQAaAAALgHQAMgGAAgRQAAgPgNgKQgMgLgigNQgngQgSgWQgRgVAAghQAAgpAhgbQAigbA1AAQAPAAAVAEQARADARAGIAABGQgOgKgUgHQgUgHgSAAQgVAAgMAIQgLAJAAANQAAAPAKAJQAJAJAjAOQArARASAWQASAXAAAeQAAArgiAbQgiAbg5AAQgQAAgagFgAgiDBQgrgqAAhJQAAhNAsgsQArgtBMAAQBJAAApArQAoAsAABIQAABLgrAtQgrAthLAAQhIAAgpgrgAAUAAQgVAaAAAxQAAAwAVAaQAWAaApAAQAoAAAVgaQAVgZAAgzQAAgxgWgZQgVgZgnAAQgpAAgWAagAoDDAQgrgrAAhDQAAhKAsgwQAsgxBQAAQATAAAWAGQAVAFAMAHIAABGQgRgNgRgGQgSgHgSAAQgrAAgbAbQgaAdAAAvQAAAvAZAaQAaAaArAAQARAAATgIQAUgHAQgMIAABDQgTALgUAEQgYAGgZAAQhEAAgrgsgAkFDkIAAk1IBJAAIAAAxIABAAQAKgZAUgPQAUgOAdAAIAQABIALADIAABKQgEgDgMgFQgMgEgPAAQgbAAgSAWQgTAWAAAwIAACcgAqqDkIAAk1IBJAAIAAE1gAs7DkIAAlSIgBAAIiGFSIgyAAIiJlSIgBAAIAAFSIhFAAIAAmvIBrAAIB8E/IACAAICDk/IBnAAIAAGvgAqkiMQgNgNAAgRQAAgSANgMQANgNASAAQATAAANANQANANAAARQAAASgNAMQgNAMgTAAQgSAAgNgMg");
	this.shape_24.setTransform(215.625,34.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#737373").s().p("Ah+DKIAAhDQArAcAqAAQArAAAbgWQAbgWAAgmQAAgkgbgVQgbgUgyAAQgWAAgxADIAPjiIDUAAIAAA8IiZAAIgIBsIAmgBQBEAAAlAjQAmAigBA9QAABAgrAnQgqAnhLAAQg/AAgegSg");
	this.shape_25.setTransform(598.35,36.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#737373").s().p("AhoCqQgogzAAheQAAhLAXg3QAWg4ArgeQAqgfA2AAQAyAAAaAMIAAA/QgjgSgmAAQgzAAggArQggAtgBBKIACAAQANgYAagPQAagOAcAAQA4AAAiAkQAhAkAAA9QAAApgTAiQgTAigfATQghASgoAAQhDAAgog1gAgxAUQgUAXAAAfQgBAZAKAUQAJAVARANQAQAMAWAAQAhAAATgWQATgXAAgmQAAgngTgWQgTgVgiAAQgeAAgWAUg");
	this.shape_26.setTransform(567.8,36.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#737373").s().p("AhWDYQgegHgOgKIAAhEQAUAQAbAJQAcAKAbAAQAoAAAYgUQAYgTAAggQAAgkgcgSQgcgTg0AAIgmAAIAAg5IAkAAQAuAAAYgRQAZgRAAghQAAgegTgRQgUgQgjAAQguAAgnAfIAAhAQASgKAcgIQAbgGAfAAQAmAAAcAOQAeANAPAYQAPAXAAAfQAAAqgWAbQgXAbgpAMIAAAAQAvAGAbAbQAbAbAAApQAAA8grAjQgqAkhJAAQggAAgbgHg");
	this.shape_27.setTransform(536.525,36.05);

	var maskedShapeInstanceList = [this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0,0,611.1,72), null);


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

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114.7,30.3);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYBIIA4g1IiBAAIAAgkICBAAIg5g2IAuAAIBNBHIhNBIg");
	this.shape.setTransform(5.6294,4.1854,0.576,0.576);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(0,0,11.3,8.4), null);


(lib.replay_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{out:0,over:1,down:2,hit:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 6
	this.instance = new lib.Tween7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-18.15,16.65,1.754,1.754);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:16.55,alpha:1},1).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.3,0,32.199999999999996,30.6);


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
	this.instance.parent = this;
	this.instance.setTransform(-18.15,0.05,1,1,0,0,0,5.6,4.2);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({x:2.15},8,cjs.Ease.get(1)).wait(1).to({x:2},0).wait(1).to({x:1.35},0).wait(1).to({x:0.4},0).wait(1).to({x:-0.4},0).wait(1).to({x:-0.9},0).wait(1).to({x:-1.05},0).wait(1).to({x:-0.95},0).wait(1).to({x:-0.6},0).wait(1).to({x:-0.15},0).wait(1).to({x:0.25},0).wait(1).to({x:0.5},0).wait(1).to({x:0.55},0).wait(2).to({x:0.4},0).wait(1).to({x:0.25},0).wait(1).to({x:0.1},0).wait(1).to({x:0},0).wait(1).to({x:-0.05},0).wait(1).to({x:0},0).wait(1).to({x:0.05},0).wait(1).to({x:0.1},0).wait(1).to({x:0.15},0).wait(11));

	// Layer 2
	this.instance_1 = new lib.arrow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.15,0.05,1,1,0,0,0,5.6,4.2);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-1.15},8,cjs.Ease.get(1)).wait(2).to({x:19.85},8,cjs.Ease.get(-1)).to({_off:true},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-4.1,20.5,8.3);


(lib.MSFT_logo_sq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.logo_box.cache(-22,-22,44,44,2)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.logo_box = new lib.logo_box();
	this.logo_box.name = "logo_box";
	this.logo_box.parent = this;
	this.logo_box.setTransform(-40,1.4);

	this.timeline.addTween(cjs.Tween.get(this.logo_box).wait(1));

}).prototype = getMCSymbolPrototype(lib.MSFT_logo_sq, new cjs.Rectangle(-50.8,-9.3,21.599999999999998,21.5), null);


(lib.MSFT_Logo_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.ms.cache(-73,-14,146,28,2);
		this.ms.gotoAndStop(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.ms = new lib.ms();
	this.ms.name = "ms";
	this.ms.parent = this;
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

}).prototype = getMCSymbolPrototype(lib.MSFT_Logo_anim, new cjs.Rectangle(-50.8,-9.3,100.9,21.5), null);


(lib.logos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_54 = function() {
		exportRoot.tl1.play()
	}
	this.frame_75 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(54).call(this.frame_54).wait(21).call(this.frame_75).wait(1));

	// Layer_2
	this.instance = new lib.MSFT_logo_sq();
	this.instance.parent = this;
	this.instance.setTransform(89.85,885.5,0.2413,0.2413,0,0,0,-39.6,2.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regX:-40,regY:1.4,scaleX:3.9935,scaleY:3.9935,x:89.75,y:885.4},13,cjs.Ease.quadOut).to({x:-92.1},12,cjs.Ease.quadInOut).to({_off:true},1).wait(49));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("EgOjBIlIAAteMAyuAAAIAANeg");
	var mask_graphics_15 = new cjs.Graphics().p("EgOvBIlIAAteMAyuAAAIAANeg");
	var mask_graphics_16 = new cjs.Graphics().p("EgPWBIlIAAteMAyvAAAIAANeg");
	var mask_graphics_17 = new cjs.Graphics().p("EgQVBIlIAAteMAyuAAAIAANeg");
	var mask_graphics_18 = new cjs.Graphics().p("EgRuBIlIAAteMAyuAAAIAANeg");
	var mask_graphics_19 = new cjs.Graphics().p("EgTgBIlIAAteMAyuAAAIAANeg");
	var mask_graphics_20 = new cjs.Graphics().p("EgVsBIlIAAteMAyuAAAIAANeg");
	var mask_graphics_21 = new cjs.Graphics().p("EgX3BIlIAAteMAyuAAAIAANeg");
	var mask_graphics_22 = new cjs.Graphics().p("EgZXBIlIAAteMAyvAAAIAANeg");
	var mask_graphics_23 = new cjs.Graphics().p("EgZXBIlIAAteMAyvAAAIAANeg");
	var mask_graphics_24 = new cjs.Graphics().p("EgZXBIlIAAteMAyvAAAIAANeg");
	var mask_graphics_25 = new cjs.Graphics().p("EgZXBIlIAAteMAyvAAAIAANeg");
	var mask_graphics_26 = new cjs.Graphics().p("EgZXBIlIAAteMAyvAAAIAANeg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:231.5413,y:464.5033}).wait(1).to({graphics:mask_graphics_15,x:230.2719,y:464.5033}).wait(1).to({graphics:mask_graphics_16,x:226.4635,y:464.5033}).wait(1).to({graphics:mask_graphics_17,x:220.1163,y:464.5033}).wait(1).to({graphics:mask_graphics_18,x:211.2302,y:464.5033}).wait(1).to({graphics:mask_graphics_19,x:199.8052,y:464.5033}).wait(1).to({graphics:mask_graphics_20,x:185.8413,y:464.5033}).wait(1).to({graphics:mask_graphics_21,x:171.8774,y:464.5033}).wait(1).to({graphics:mask_graphics_22,x:158.5444,y:464.5033}).wait(1).to({graphics:mask_graphics_23,x:140.7722,y:464.5033}).wait(1).to({graphics:mask_graphics_24,x:128.0778,y:464.5033}).wait(1).to({graphics:mask_graphics_25,x:120.4611,y:464.5033}).wait(1).to({graphics:mask_graphics_26,x:117.9222,y:464.5033}).wait(1).to({graphics:null,x:0,y:0}).wait(49));

	// Layer 3
	this.instance_1 = new lib.MSFT_Logo_anim();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-67.95,881,3.9935,3.9935,0,0,0,0.1,0.3);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({regX:0.2,x:68.55},12,cjs.Ease.quadInOut).to({_off:true},25).wait(25));

	// white (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_51 = new cjs.Graphics().p("EgojCX1MAAAkvpMBRHAAAMAAAEvpg");
	var mask_1_graphics_52 = new cjs.Graphics().p("EgojCX1MAAAkvpMBRHAAAMAAAEvpg");
	var mask_1_graphics_53 = new cjs.Graphics().p("EgojCX1MAAAkvpMBRHAAAMAAAEvpg");
	var mask_1_graphics_54 = new cjs.Graphics().p("EgojCX1MAAAkvpMBRHAAAMAAAEvpg");
	var mask_1_graphics_55 = new cjs.Graphics().p("EgojCX1MAAAkvpMBRHAAAMAAAEvpg");
	var mask_1_graphics_56 = new cjs.Graphics().p("EgojCX1MAAAkvpMBRHAAAMAAAEvpg");
	var mask_1_graphics_57 = new cjs.Graphics().p("EgojCX1MAAAkvpMBRHAAAMAAAEvpg");
	var mask_1_graphics_58 = new cjs.Graphics().p("EgojCX1MAAAkvpMBRHAAAMAAAEvpg");
	var mask_1_graphics_59 = new cjs.Graphics().p("EgojCX1MAAAkvpMBRHAAAMAAAEvpg");
	var mask_1_graphics_60 = new cjs.Graphics().p("EgojCX1MAAAkvpMBRHAAAMAAAEvpg");
	var mask_1_graphics_61 = new cjs.Graphics().p("EgojCX1MAAAkvpMBRHAAAMAAAEvpg");
	var mask_1_graphics_62 = new cjs.Graphics().p("EgojCX1MAAAkvpMBRHAAAMAAAEvpg");
	var mask_1_graphics_63 = new cjs.Graphics().p("EgojCX1MAAAkvpMBRHAAAMAAAEvpg");
	var mask_1_graphics_64 = new cjs.Graphics().p("EgojCX1MAAAkvpMBRHAAAMAAAEvpg");
	var mask_1_graphics_65 = new cjs.Graphics().p("EgojCX1MAAAkvpMBRHAAAMAAAEvpg");
	var mask_1_graphics_66 = new cjs.Graphics().p("EgojCX1MAAAkvpMBRHAAAMAAAEvpg");
	var mask_1_graphics_67 = new cjs.Graphics().p("EgojCX1MAAAkvpMBRHAAAMAAAEvpg");
	var mask_1_graphics_68 = new cjs.Graphics().p("EgpXCX1MAAAkvpMBRIAAAMAAAEvpg");
	var mask_1_graphics_69 = new cjs.Graphics().p("EgsmCX1MAAAkvpMBRHAAAMAAAEvpg");
	var mask_1_graphics_70 = new cjs.Graphics().p("EgwBCX1MAAAkvpMBRIAAAMAAAEvpg");
	var mask_1_graphics_71 = new cjs.Graphics().p("EgzoCX1MAAAkvpMBRIAAAMAAAEvpg");
	var mask_1_graphics_72 = new cjs.Graphics().p("Eg3aCX1MAAAkvpMBRHAAAMAAAEvpg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(51).to({graphics:mask_1_graphics_51,x:72.0698,y:904.2045}).wait(1).to({graphics:mask_1_graphics_52,x:70.8863,y:904.2045}).wait(1).to({graphics:mask_1_graphics_53,x:67.336,y:904.2045}).wait(1).to({graphics:mask_1_graphics_54,x:61.4188,y:904.2045}).wait(1).to({graphics:mask_1_graphics_55,x:53.1346,y:904.2045}).wait(1).to({graphics:mask_1_graphics_56,x:42.4836,y:904.2045}).wait(1).to({graphics:mask_1_graphics_57,x:29.4657,y:904.2045}).wait(1).to({graphics:mask_1_graphics_58,x:14.0809,y:904.2045}).wait(1).to({graphics:mask_1_graphics_59,x:-3.6708,y:904.2045}).wait(1).to({graphics:mask_1_graphics_60,x:-23.7894,y:904.2045}).wait(1).to({graphics:mask_1_graphics_61,x:-46.2749,y:904.2045}).wait(1).to({graphics:mask_1_graphics_62,x:-71.1273,y:904.2045}).wait(1).to({graphics:mask_1_graphics_63,x:-98.3465,y:904.2045}).wait(1).to({graphics:mask_1_graphics_64,x:-127.9327,y:904.2045}).wait(1).to({graphics:mask_1_graphics_65,x:-159.8858,y:904.2045}).wait(1).to({graphics:mask_1_graphics_66,x:-194.2057,y:904.2045}).wait(1).to({graphics:mask_1_graphics_67,x:-230.8926,y:904.2045}).wait(1).to({graphics:mask_1_graphics_68,x:-264.783,y:904.2045}).wait(1).to({graphics:mask_1_graphics_69,x:-285.4934,y:904.2045}).wait(1).to({graphics:mask_1_graphics_70,x:-307.3871,y:904.2045}).wait(1).to({graphics:mask_1_graphics_71,x:-330.4643,y:904.2045}).wait(1).to({graphics:mask_1_graphics_72,x:-354.725,y:904.2045}).wait(4));

	// Layer 3
	this.instance_2 = new lib.MSFT_Logo_anim();
	this.instance_2.parent = this;
	this.instance_2.setTransform(68.55,881,3.9935,3.9935,0,0,0,0.2,0.3);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50).to({_off:false},0).to({_off:true},25).wait(1));

	// white
	this.instance_3 = new lib.white();
	this.instance_3.parent = this;
	this.instance_3.setTransform(72,2244.65,0.5348,5.6822,0,0,0,485.4,406.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(51).to({x:-449.9},21,cjs.Ease.quadIn).to({_off:true},3).wait(1));

	// white copy
	this.instance_4 = new lib.white();
	this.instance_4.parent = this;
	this.instance_4.setTransform(72,2244.65,0.5348,5.6822,0,0,0,485.4,406.9);
	this.instance_4.alpha = 0.6016;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(53).to({_off:false},0).to({x:-449.9},21,cjs.Ease.quadIn).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-709.4,-67.4,1041.1,1943.4);


(lib.laptop_vector = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camera
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D0D0D").s().p("AgKAMQgFgFAAgHQAAgGAFgEQAFgFAFAAQAGAAAFAFQAFAEAAAGQAAAGgFAGQgFAEgGAAQgFAAgFgEg");
	this.shape.setTransform(399,12.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6D6E6E").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_1.setTransform(399,12.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#A1A1A2").ss(0.3,1).p("AgPgPQANAAAIAKQAKAIAAAN");
	this.shape_2.setTransform(400.6,10.45);

	this.instance = new lib.Path_3_0();
	this.instance.parent = this;
	this.instance.setTransform(400.55,10.45,1,1,0,0,0,1.6,1.6);
	this.instance.alpha = 0.25;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#272C2E").s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNg");
	this.shape_3.setTransform(399,12.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D0D0D").s().p("AgFAGQgCgDgBgDQABgDACgCQACgDADAAQAEAAACADQACACABADQgBADgCADQgCACgEAAQgDAAgCgCg");
	this.shape_4.setTransform(379.75,12.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6D6E6E").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_5.setTransform(379.75,12.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#A1A1A2").ss(0.3,1).p("AgIgHQAHAAAEAFQAFADAAAH");
	this.shape_6.setTransform(380.6,11.225);

	this.instance_1 = new lib.Path_3_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(380.55,11.2,1,1,0,0,0,0.8,0.8);
	this.instance_1.alpha = 0.25;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#272C2E").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAHgHAIAAQAKAAAGAHQAHAHAAAIQAAAKgHAGQgGAHgKAAQgIAAgHgHg");
	this.shape_7.setTransform(379.75,12.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.instance_1},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Screen
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D0D0D").s().p("Eg4oAj7QhXAAg+g9Qg+g+AAhXMAAAhBbQAAhTA7g6QA6g7BTAAMBxNAAAQBeAABCBCQBCBCAABeMAAABAzQAABdhCBCQhBBBhdAAgEg5UggcMAAABAiQAAAEAEAAMByvAAAQAEAAABgEMAAAhAiQgBgEgEAAMhyvAAAQgEAAAAAEg");
	this.shape_8.setTransform(413.8,232.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6D7680").s().p("Eg4pAkWQhpAAhLhLQhLhKAAhpMAAAhA5QAAhlBIhHQBIhIBkAAMBxPAAAQBvAABQBPQBPBPAABwMAAABARQAABvhPBPQhPBOhuAAgEg5+AghMB0MAAAMAAAhBZMh0MAAAg");
	this.shape_9.setTransform(414.35,232.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Keyboard
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ACB6BF").s().p("AjOAjQgFAAgBgGIgFgYQgBgEgBAAIgDgFIgEgaQgCgFAGAAIGsABQAFAAABAGIAFAXIACAFQACAAABAFIAFAZQACAGgGAAg");
	this.shape_10.setTransform(703.4,504.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ACB6BF").s().p("AjMAiQgGAAgCgFIgRg5QgCgGAGAAIGrABQAGAAACAFIAUA5QACAGgGAAg");
	this.shape_11.setTransform(749.9017,504.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#ACB6BF").s().p("AjOAiQgGAAgBgGIgMg4IAAgEQAAgBABAAQAAAAAAAAQABgBAAAAQABAAABAAIGrABQAGAAABAGIANA4QACAGgGAAg");
	this.shape_12.setTransform(656.5917,504.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#ACB6BF").s().p("AjSAiQgGAAgBgFIgJg5QgBgFAFAAIGsAAQAGAAABAFIAOA5QACAFgGAAg");
	this.shape_13.setTransform(610.1923,504.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#ACB6BF").s().p("AjSAiQgFAAgBgFIgHg5QgBgFAGAAIGvAAQAGAAAAAFIAFA5QAAAFgFAAg");
	this.shape_14.setTransform(563.3173,504.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#ACB6BF").s().p("A11AiQgEAAAAgFIAGg5QABgFAFAAMArcAAAQAFAAABAFIAGA5QgBAFgFAAg");
	this.shape_15.setTransform(398.9,504.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#ACB6BF").s().p("AjsAiQgFAAABgFIAOg5QABgFAFAAIHJAAQAGAAgBAFIgJA5QAAAFgGAAg");
	this.shape_16.setTransform(232.5995,504.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#ACB6BF").s().p("AjtAiQgGAAABgFIAOg5QACgFAFAAIHMAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgOA5QgCAFgFAAg");
	this.shape_17.setTransform(183.0373,504.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#ACB6BF").s().p("AjvAiQgGAAABgFIAOg5QACgFAFAAIHPAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABgBAAIgUA5QgBAFgGAAg");
	this.shape_18.setTransform(133.6623,504.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#ACB6BF").s().p("AkAAiQgFAAABgFIARg5QABgFAGAAIHtAAQAGAAgCAFIgUA5QgCAFgFAAg");
	this.shape_19.setTransform(82.1433,504.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#63717F").s().p("AjRArQgFAAgCgFIgSg5IABgDIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgCIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAAAIAAgBIAAgBIABAAIAAAAIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAgBQABAAAAgBQAAAAABAAQAAgBABAAQABAAAAAAIGsABQAFAAACAFIAUA5IAAADIAAABIAAAAIAAABIgBABIAAAAIAAAAIAAABIgBABIAAABIAAAAIAAAAIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBABIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAAAQAAABgBABQAAAAgBAAQAAABAAAAQgBAAgBAAg");
	this.shape_20.setTransform(749.4625,505.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#63717F").s().p("AjUAsQgFAAgCgFIgFgaQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQgEgBgBgEIgFgYQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBIAAAAIAAAAIAAgBIABAAIAAgBIAAAAIAAAAIABgBIAAAAIAAAAIAAAAIABgBIAAgBIABgBIAAAAIABgBIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAAAIAAgBIAAAAIABAAIAAgBIAAAAIAAgBIABAAIAAAAIAAAAIAAgBIABAAIAAAAIAAAAIAAgBIABAAIAAgBIAAAAIAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAIGsABQAFAAABAGIAGAaQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAIAAAAQAEACABAEIAGAYIAAADIAAAAIAAAGIABABIAAAFIAAAAIAAADQAAAFgEgBg");
	this.shape_21.setTransform(702.8688,505.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#63717F").s().p("AjVAsQgGAAgBgFIgNg2IAAgCIABgBIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgCIABAAIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgCIABAAIAAgBIAAAAIAAgCIABAAIAAgBIAAgBIAAgBIABAAIAAgBQABgEADAAIGsABQAGAAABAGIAAABIAAAAIAAABIABAAIAAACIAAAAIAAACIABAAIAAABIAAAAIAAACIABAAIAAACIAAAAIAAABIABAAIAAACIAAAAIAAACIABAAIAAABIAAABIAAABIABAAIAAACIAAAAIAAABIABABIANA1QABAGgGAAg");
	this.shape_22.setTransform(656.5327,505.175);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#63717F").s().p("AjXAuQgFAAgBgGIgKg4IAAgDIABAAIAAgBIAAAAIAAgCIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgCIAAAAIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIAAgBIABgBIAAgBQABgDADAAIGsAAQAGAAABAFIAOA5IABABIAAAMIAAAAIAAAMQABAEgFAAg");
	this.shape_23.setTransform(609.8583,505.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#63717F").s().p("AjYAsQgGAAAAgFIgHg5IABgDIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAAAIABgBIAAAAIAAgBIAAAAIABgBIAAAAIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAAAIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIGvAAQAGAAAAAFIAAACIABAAIAAAEIAAAAIAAADIABAAIAAAFIAAAAIAAADIABAAIAAADIAEA5QAAAFgFAAg");
	this.shape_24.setTransform(562.925,505.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#63717F").s().p("A17AsQgFAAAAgFIAHg5IAAgBIAAAAIABAAIAAgCIAAAAIAAgBIABgBIAAgCIAAAAIAAgCIABAAIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgCIABgBIAAgBIAAAAIAAgCIABAAIAAgBIAAAAIAAgBQABgFAFAAMArcAAAQAEAAACAFIAAABIAAAAIAAACIABAAIAAABIAAAAIAAACIABAAIAAACIAAAAIAAABIABAAIAAACIAAAAIAAAAIABABIAAABIAAAAIAAABIABABIAAABIAAABIAAABIABAAIAAABIAAABIAAAAIABABIAFA5QABAFgGAAg");
	this.shape_25.setTransform(398.9321,505.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#63717F").s().p("AjxAsQgFAAABgFIAAAAIAAgBIAAgCIABAAIAAgCIAAAAIAAgCIABAAIAAgCIAAAAIAAgDIABAAIAAgCIAAAAIAAgCIABAAIAAgCIAAAAIAAgDIAOg4QABgGAGAAIHIAAQAEAAABAEIAAACIABAAIAAABIAAABIAAABIABABIAAACIAAAAIAAACIABAAIAAACIAAAAIAAABIABAAIAAACIAAAAIAAADIABAAIAAACIAAAAIAAACIgIA5QgBAFgFAAg");
	this.shape_26.setTransform(232.6173,505.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#63717F").s().p("Aj4AsQgGAAABgFIAOg5IAAgBIABAAIAAgBIAAAAIAAgCIABAAIAAgBIAAAAIAAgCIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBQACgFAFAAIHMAAQABAAAAABQABAAAAAAQABAAAAABQAAAAAAABIABAAIAAAAIAAABIAAAAIABAAIAAABIAAAAIAAABIABAAIAAAAIAAAAIAAABIABAAIAAAAIAAABIAAAAIABAAIAAABIAAAAIAAABIABAAIAAAAIAAABIAAABIABAAIAAABIAAAAIAAAAIABABIAAAAIAAAAIAAABIABAAIAAABIAAAAIAAAAIABAAIAAABIAAAAIAAAAIABABIAAAAIAAAAIAAABIABAAIAAABIAAAAIAAABIABAAIAAABIAAAAIAAABIABAAIAAADIgOA5QgBAFgFAAg");
	this.shape_27.setTransform(183.3006,505.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#63717F").s().p("Aj9AsQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBIAAgBIgBAAIAAgBIgBgBIAAgBIAAgBIAAgBIgBAAIAAgBIAAAAIAAgBIgBAAIAAgCIAAAAIAAgBIgBAAIAAgBIAAgBIAAgBIgBgBIAAgBIAAAAIAAgBIAAAAIAAgBIgBAAIAAgCIAAAAIAAgEIAQg4QABgGAGAAIHtAAQABAAABABQAAAAABAAQAAAAAAABQABAAAAABIAAABIABAAIAAABIAAAAIAAABIABAAIAAABIAAABIAAABIAAAAIAAABIABAAIAAACIAAAAIAAACIABAAIAAABIAAAAIAAABIABAAIAAABIAAABIAAABIABAAIAAACIAAAAIAAABIABAAIAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgTA5QgCAFgFAAg");
	this.shape_28.setTransform(82.5,505.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#63717F").s().p("Aj5AsQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAIAAgEIANg5IABgCIAAAAIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAAAIABgBIAAgBIAAAAIAAAAIABgBIAAAAIAAAAIAAgBIABAAIAAgBIAAAAIAAAAIABAAIAAgBIAAAAIAAgBIABAAIAAAAIAAgBIAAAAIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAAAIABgBIAAAAIAAAAIAAgBIABAAIAAAAIAAAAIAAgBIABAAIAAgBQACgEAEAAIHPAAQABAAABABQAAAAABAAQAAAAABABQAAAAAAABIAAABIABAAIAAACIAAAAIAAABIABAAIAAABIAAAAIAAACIABAAIAAACIAAAAIAAABIABAAIAAACIAAAAIAAABIABAAIAAABIAAAAIAAACIABAAIAAACIAAAAIAAABIABAAIAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgUA5QgCAFgFAAg");
	this.shape_29.setTransform(133.3667,505.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#ACB6BF").s().p("Ap0AcQgGgBgBgFIgGgrQgBgGAFABITpAAQAFgBACAGIAPArQACAFgGABg");
	this.shape_30.setTransform(706.569,497.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#ACB6BF").s().p("AjYAcQgGgBgBgFIgGgrQgBgGAGABIG2AAQAGgBABAGIAJArQABAFgGABg");
	this.shape_31.setTransform(618.1505,497.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#ACB6BF").s().p("AjcAbQgGABAAgGIgCgrQgBgFAGgBIG6AAQAFABABAFIAFArQAAAGgFgBg");
	this.shape_32.setTransform(569.9429,497.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#ACB6BF").s().p("AjeAcQgFgBAAgFIAAgrQAAgGAFABIG4AAQAGgBAAAGIAEArQAAAFgFABg");
	this.shape_33.setTransform(521.925,497.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#ACB6BF").s().p("AjdAbQgGAAAAgFIgBgrQAAgFAGgBIG6AAQAFABABAFIADArQAAAFgGAAg");
	this.shape_34.setTransform(474.425,497.75);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#ACB6BF").s().p("AjeAbQgFAAAAgFIACgrQAAgFAGgBIG6AAQAFABAAAFIAAArQAAAFgFAAg");
	this.shape_35.setTransform(426.325,497.75);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#ACB6BF").s().p("AjeAbQgGAAABgFIADgrQAAgFAGgBIG5AAQAFABAAAFIAAArQAAAFgFAAg");
	this.shape_36.setTransform(378.6429,497.75);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#ACB6BF").s().p("AjgAbQgGAAABgFIAGgrQAAgFAGgBIG6AAQAFABAAAFIgEArQAAAFgGAAg");
	this.shape_37.setTransform(330.2173,497.75);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#ACB6BF").s().p("AjgAbQgFAAAAgFIAGgrQAAgFAGgBIG6AAQAGABgBAFIgGArQAAAFgGAAg");
	this.shape_38.setTransform(282.5321,497.75);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#ACB6BF").s().p("AjiAbQgFAAAAgFIAHgrQABgFAFgBIG9AAQAGABgBAFIgKArQgBAFgFAAg");
	this.shape_39.setTransform(234.75,497.75);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#ACB6BF").s().p("AjkAbQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAIgBgEIAMgrQACgFAFgBIG5AAQABABABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAgBABIgLArQgCAFgFAAg");
	this.shape_40.setTransform(186.5617,497.75);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#ACB6BF").s().p("AoFAbQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAQgsQADgFAFgBIP2AAQAGABgCAFIgMArQgBAFgGAAg");
	this.shape_41.setTransform(110.2167,497.75);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#63717F").s().p("Ap6ApQgFAAgBgFIgHgrIAAgDIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAAAIABgBIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABgBIAAAAIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIABgBIAAAAIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAAAIAAgBQABgDAEAAITpAAQAFAAABAFIAJArIAHADIAAABIgBAAIAAABIAAAAIAAABIgBABIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBABIAAAAIAAABIAAABIgBAAIAAABIAAAAIAAACIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAABIAAAAIgBABIAAABIAAAAIAAABIgBAAIAAABIAAABIAAAAIgBABIAAABIAAAAIAAABIgBAAIAAABIAAAAQgBABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_42.setTransform(706.025,498.925);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#63717F").s().p("AjdApQgFAAgBgFIgGgrIAAgDIAAgBIAAgBIABAAIAAgBIAAAAIAAgCIABAAIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIAAgBIABgBIAAgBIAAAAIAAgBIABAAIAAgCIAAAAIAAgBIABAAIAAgBIABgBIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIABgBIAAgBQABgDADAAIG3AAQAFAAACAFIAJArIgBADIAAABIAAAAIAAABIgBABIAAABIAAAAIAAABIgBABIAAABIAAAAIAAABIgBABIAAABIgBAAIAAABIAAAAIAAACIgBAAIAAABIAAABIAAABIgBAAIAAABIAAABIAAABIgBAAIAAABIAAAAIAAACIgBAAIAAABIAAAAIAAACIAAAAIAAABIgBAAIAAABQgBADgEAAg");
	this.shape_43.setTransform(617.7,498.925);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#63717F").s().p("AjjArQgGAAAAgGIgDgtIABAAIAAgCIAAAAIAAgCIABgBIAAgCIAAAAIAAgCIABgBIAAgCIAAAAIAAgCIABAAIAAgCIAAgBIAAgCIABAAIAAgCIAAAAIAAgCIABgBIAAgCIAAAAIAAgCIABAAIAAgBQABgFAEAAIG6AAQAEAAACAFIAAABIAAABIAAABIABABIAAACIAAAAIAAACIABAAIAAABIAAABIAAABIABABIAAABIAAABIAAABIABAAIAAACIAAAAIAAACIABABIAAABIAAAAIAAACIABAAIAAACIAAAAIAAACIABAAIAAACIAAAAIAAABIABABIAEArQABAGgFAAg");
	this.shape_44.setTransform(570.0077,498.925);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#63717F").s().p("AjnArQgGAAAAgGIAAgqIABgDIAAAAIAAgBIAAAAIABgBIAAgBIAAAAIAAgBIABAAIAAgCIAAgBIAAAAIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgCIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgCIAAAAIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIABgBQABgEAEAAIG3AAQAFAAABAFIAAABIABAAIAAACIAAAAIAAACIABAAIAAACIAAAAIAAACIABAAIAAACIAAAAIAAABIABABIAAABIAAABIAAACIABAAIAAACIAAAAIAAABIABAAIAAACIAAAAIAAACIABABIAAABIAAABIAAABIABAAIAAACIAAAAIAAACIAEAqQABAGgGAAg");
	this.shape_45.setTransform(521.7571,499.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#63717F").s().p("AjlApQgFAAAAgGIgBgqIAAgCIAAgBIABAAIAAgBIAAgBIAAgBIABgBIAAgBIAAAAIAAgCIABAAIAAgBIAAAAIAAgCIABAAIAAgCIAAgBIAAgBIABAAIAAgCIAAAAIAAgBIABAAIAAgCIAAAAIAAgBIABgBIAAgCIAAAAIAAgBIABgBIAAgBQABgEAEAAIG7AAQAEAAABAEIABABIAAABIAAABIAAABIABABIAAACIAAAAIAAACIABAAIAAABIAAABIAAABIABABIAAABIAAABIAAABIABABIAAABIAAAAIAAACIABAAIAAACIAAAAIAAACIABABIAAABIAAABIAAAAIABACIACAqQAAAGgFAAg");
	this.shape_46.setTransform(474.375,499.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#63717F").s().p("AjmApQgFAAAAgGIACgsIABAAIAAgBIAAAAIAAgCIABgBIAAgBIAAgBIAAgBIAAAAIAAgCIABAAIAAgBIAAgBIAAgBIABAAIAAgCIAAAAIAAgCIABgBIAAAAIAAgBIAAgBIABAAIAAgCIAAAAIAAgCIABgBIAAgBIABAAIAAgCQACgEADAAIG6AAQAFAAABAEIAAABIAAABIAAABIABAAIAAACIAAAAIAAACIABAAIAAACIAAAAIAAABIABAAIAAACIAAAAIAAABIABABIAAACIABAAIAAABIAAABIAAABIABAAIAAABIAAABIAAABIABAAIAAACIAAABIAAABIABAAIAAABIAAACIAAAqQAAAGgGAAg");
	this.shape_47.setTransform(426.35,499.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#63717F").s().p("AjmApQgFAAAAgGIADgqIAAgCIAAAAIABgBIAAgBIAAAAIAAgCIABgBIAAgBIAAAAIAAgCIABAAIAAgBIAAgBIAAgBIABAAIAAgCIAAAAIAAgCIABAAIAAgCIAAAAIAAgBIABAAIAAgBIAAgBIAAgBIABgBIAAgCIAAAAIAAgBIABgBIAAgBQABgEAFAAIG5AAQAEAAABAEIAAABIABAAIAAACIAAAAIAAACIABABIAAABIAAABIAAABIABAAIAAABIAAABIAAABIABABIAAACIAAAAIAAACIABAAIAAABIAAAAIAAACIABAAIAAACIAAAAIAAACIABAAIAAACIAAAAIAAABIABACIAAAqQAAAGgGAAg");
	this.shape_48.setTransform(378.625,499.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#63717F").s().p("AjoApQgEAAAAgFIAFgrIABgCIAAAAIAAgBIABAAIAAgCIAAAAIAAgCIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIAAgBIAAgBIAAgBIABAAIAAgBIAAAAIAAgCIABAAIAAgBIAAgBIAAgBIABgBIAAgBIAAAAIAAgCIABAAIAAgBQACgEAEAAIG6AAQADAAACAEIAAAAIAAACIAAAAIAAACIABAAIAAACIAAABIAAABIABABIAAABIAAAAIAAACIABAAIAAADIAAAAIAAACIABAAIAAABIAAABIAAABIABABIAAACIABAAIAAACIAAAAIAAACIABACIgEArQAAAFgFAAg");
	this.shape_49.setTransform(330.1,499.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#63717F").s().p("AjnApQgFAAABgFIAFgrIAAgCIABAAIAAgBIAAAAIAAgBIABgBIAAgCIAAAAIAAgCIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIAAgBIABgBIAAgBIAAAAIAAgCIABAAIAAgBIAAgBIAAgBIABAAIAAgCIAAgBIAAgBIABAAIAAgCIAAAAIAAgBQABgEAFAAIG6AAQAEAAABAEIAAABIAAAAIAAACIABABIAAACIAAAAIAAACIABABIAAABIAAABIAAACIABAAIAAADIAAAAIAAACIABAAIAAACIAAAAIAAACIABAAIAAADIAAAAIAAACIABACIgGArQgBAFgFAAg");
	this.shape_50.setTransform(282.4423,499.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#63717F").s().p("AjoApQgGAAABgFIAHgrIAAgBIAAgBIABgBIAAgBIAAgBIAAgCIABAAIAAgCIAAAAIAAgCIABAAIAAgBIAAAAIAAgCIABAAIAAgCIAAgBIAAgBIABgBIAAgBIAAAAIAAgCIABAAIAAgBIAAgBIAAgCIABAAIAAgCIAAAAIAAgBQABgEAFAAIG9AAQAEAAABAEIAAABIAAAAIAAACIABAAIAAADIAAABIAAACIABAAIAAABIAAABIAAACIABABIAAACIAAAAIAAACIABAAIAAADIAAAAIAAACIABABIAAACIAAAAIAAADIgJArQgBAFgGAAg");
	this.shape_51.setTransform(234.6429,499.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#63717F").s().p("AjfApQgFAAAAgDIAAgBIAAAAIAAgBIgBgBIAAAAIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAAAIAAgCIgBAAIAAgBIAAAAIAAgCIgBAAIAAgBIAAgBIAAgCIgBAAIAAgCIAAAAIAAgBIgBAAIAAgBIAAgBIAAgBIgBAAIAAgCIgBgBIAAgDIAMgrQACgFAFAAIG6AAQADAAAAAEIABAAIAAABIAAAAIAAACIABAAIAAABIAAABIAAACIABAAIAAABIAAABIAAABIABAAIAAABIABABIAAABIAAAAIAAACIABAAIAAACIAAAAIAAABIABABIAAABIAAAAIAAACIABAAIAAACIAAAAIAAACIAAAAIAAADIgLArQgBAFgGAAg");
	this.shape_52.setTransform(186.95,499.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#63717F").s().p("AoCAnQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBIAAAAIgBAAIAAgCIAAAAIAAgBIgBgBIAAgBIAAgBIAAgBIgBAAIAAgCIAAAAIAAgBIgBgBIAAgBIAAAAIAAgCIgBAAIAAgCIAAAAIAAgBIgBgBIAAgBIAAAAIAAgCIgBAAIAAgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAQgrQADgGAFAAIP2AAQAEAAAAADIABAAIAAACIAAAAIAAABIABABIAAABIAAABIAAABIABAAIAAACIAAAAIAAABIABABIAAABIAAAAIAAACIABAAIAAACIAAAAIAAABIABABIAAABIAAAAIAAACIABAAIAAABIAAADIgNArQgBAGgGAAg");
	this.shape_53.setTransform(110.525,498.875);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#ACB6BF").s().p("Am+AbQgFAAgBgFIgKgrQgBgFAGAAIN4AAQAFAAADAFIAXAsQADAEgGAAg");
	this.shape_54.setTransform(722.1314,491.825);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#ACB6BF").s().p("AjYAbQgGAAgBgFIgGgrQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIG2AAQAGAAABAFIAJArQABAFgGAAg");
	this.shape_55.setTransform(651.4014,491.825);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#ACB6BF").s().p("AjYAbQgFAAgBgFIgHgrQgBgFAGAAIG3AAQAFAAABAFIAJArQABAFgGAAg");
	this.shape_56.setTransform(603.9323,491.825);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#ACB6BF").s().p("AjcAbQgGAAAAgFIgDgrQAAgFAGAAIG5AAQAGAAABAFIAEArQABAFgGAAg");
	this.shape_57.setTransform(556.2571,491.825);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#ACB6BF").s().p("AjeAbQgFAAAAgFIAAgrQAAgFAFAAIG4AAQAFAAABAFIAEArQAAAFgFAAg");
	this.shape_58.setTransform(508.7,491.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#ACB6BF").s().p("AjdAbQgGAAAAgFIgBgrQAAgFAGAAIG6AAQAGAAAAAFIADArQAAAFgFAAg");
	this.shape_59.setTransform(461.175,491.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#ACB6BF").s().p("AjeAbQgGAAABgFIACgrQABgFAFAAIG6AAQAFAAAAAFIAAArQAAAFgFAAg");
	this.shape_60.setTransform(413.3929,491.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#ACB6BF").s().p("AjeAbQgFAAAAgFIADgrQAAgFAFAAIG6AAQAFAAAAAFIAAArQAAAFgFAAg");
	this.shape_61.setTransform(365.525,491.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#ACB6BF").s().p("AjgAbQgFAAAAgFIAGgrQAAgFAGAAIG5AAQAGAAAAAFIgDArQgBAFgGAAg");
	this.shape_62.setTransform(318.15,491.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#ACB6BF").s().p("AjgAbQgFAAAAgFIAGgrQABgFAFAAIG6AAQAGAAgCAFIgFArQgBAFgFAAg");
	this.shape_63.setTransform(270.2,491.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#ACB6BF").s().p("AjiAbQgGAAABgFIAHgrQABgFAFAAIG9AAQAGAAgBAFIgKArQgBAFgFAAg");
	this.shape_64.setTransform(222.6255,491.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#ACB6BF").s().p("AjkAbQgFAAABgFIAMgrQACgFAFAAIG5AAQABAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABgBAAIgLArQgCAFgFAAg");
	this.shape_65.setTransform(174.8117,491.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#ACB6BF").s().p("AnAAbQgGAAACgFIAQgsQACgEAGAAINtAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgNArQgCAFgFAAg");
	this.shape_66.setTransform(105.5183,491.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#63717F").s().p("AnDApQgGAAgBgGIgJgqQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAgBIABAAIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgCIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgCIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABgBIAAgCIAAAAIAAgBQABgDAEAAIN4AAQAFAAABAGIAbAqQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAACIAAAAIAAABIgBAAIAAACIAAAAIAAABIgBABIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAACIgBAAIAAACIAAAAIAAABIgBAAIAAACIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAACIAAABIAAABIgBAAQgBADgDAAg");
	this.shape_67.setTransform(721.725,493.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#63717F").s().p("AjeApQgEAAgBgGIgHgqQAAAAAAgBQgBAAAAAAQAAgBABAAQAAAAAAgBIAAAAIAAgBIAAgBIABAAIAAAAIAAgBIAAAAIABgBIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIABAAIAAgBIABgBIAAgBIAAAAIAAAAIABgBIAAgBIAAAAIAAgBIABAAIAAgCIAAAAIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAAAIAAAAIAAgBIAAgBIAAgBIABAAIAAgCIAAAAIAAgBIABAAQABgDAEAAIG2AAQAGAAAAAGIAJAqIAAAEIAAAAIgBABIAAAAIAAAAIAAABIgBABIAAABIAAAAIAAABIgBAAIAAACIAAAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAABIAAABIgBAAIAAACIAAAAIAAABIgBAAIAAABIgBAAIAAABIAAABIAAAAIgBAAIAAABIAAAAIAAABIgBABIAAABIAAABIAAAAIgBABIAAABQgBACgDAAg");
	this.shape_68.setTransform(650.85,493.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#63717F").s().p("AjdApQgFAAgBgGIgHgqIABgDIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIAAgBIABgBIAAgBIAAAAIAAgBIABgBIAAAAIAAgBIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgCIAAAAIAAgBIABAAIAAgBIAAAAIAAgCIABAAIAAgBIAAAAIAAgCIABgBQABgDADAAIG3AAQAGAAABAGIAIAqQABABAAAAQAAAAAAABQAAAAAAAAQAAAAgBABIAAABIAAAAIAAABIgBAAIAAABIAAABIAAABIgBAAIAAABIAAABIAAABIgBAAIAAABIAAABIAAABIgBAAIAAABIAAAAIAAABIgBABIAAABIAAAAIAAACIgBAAIAAACIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBABIAAABIAAAAIAAACIgBAAIAAABQgBADgDAAg");
	this.shape_69.setTransform(603.475,493.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#63717F").s().p("AjkArQgFgBAAgFIgDguIABAAIAAgBIAAgBIAAgCIABAAIAAgDIAAAAIAAgCIABgBIAAgBIAAAAIAAgDIABAAIAAgCIAAgBIAAgCIABAAIAAgBIAAgBIAAgCIABgBIAAgCIAAAAIAAgBIABgBQAAgFAFAAIG5AAQAFAAABAFIAAABIABAAIAAABIAAAAIAAACIABAAIAAACIAAABIAAABIABABIAAABIAAAAIAAACIABAAIAAACIAAABIAAABIABABIAAABIAAAAIAAABIABABIAAACIAAAAIAAACIABAAIAAACIAAAAIAAABIABABIAAABIAAABIAAABIAFArQABAGgGAAg");
	this.shape_70.setTransform(556.3571,493.35);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#63717F").s().p("AjnArQgGAAAAgGIAAgqIABgDIAAAAIAAAAIAAgCIABAAIAAAAIAAgBIAAgBIABAAIAAgBIAAAAIAAgCIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgCIAAAAIAAgBIABgBIAAAAIAAgBIAAAAIABgBIAAgBIAAAAIAAgBIABAAIAAgCIAAgBIAAAAIABgBIAAgBIAAAAIAAAAIABgBIAAgBQACgEADAAIG4AAQAEAAABAFIABAAIAAACIAAAAIAAACIABAAIAAACIAAABIAAABIABAAIAAACIAAAAIAAABIABABIAAABIAAABIAAACIABAAIAAACIAAAAIAAABIABABIAAABIAAAAIAAADIABAAIAAABIAAABIAAABIABABIAAABIAAABIAAAAIABACIAEAqQAAAGgFAAg");
	this.shape_71.setTransform(508.525,493.35);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#63717F").s().p("AjkApQgFAAgCgFIAAgtIAAAAIAAgCIABAAIAAgCIAAAAIAAgBIABgBIAAgBIAAgBIAAAAIABgBIAAgBIABgBIAAgCIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIABAAIAAgCIAAAAIAAgCIABAAIAAgCIAAAAIAAgCIAAAAIAAgBIABAAQABgFAEAAIG7AAQAEAAACAFIAAABIAAAAIAAABIABABIAAABIAAABIAAACIABAAIAAACIAAAAIAAABIABABIAAABIAAABIAAACIAAAAIAAACIABAAIAAABIAAAAIAAACIABAAIAAACIAAAAIAAACIABABIAAABIAAABIADAsQAAAFgFAAg");
	this.shape_72.setTransform(461.15,493.15);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#63717F").s().p("AjmApQgFAAAAgFIACgrIABgBIAAgBIAAgBIAAgBIAAgBIAAgCIABAAIAAgBIAAgBIAAgBIABAAIAAgCIAAAAIAAgBIABgBIAAgBIAAgBIAAgCIABAAIAAgBIAAAAIAAgBIABgBIAAgBIABgBIAAgCIAAAAIAAgBIABgBIAAAAIAAgBIAAAAQABgFAEAAIG7AAQAEAAABAFIAAAAIAAAAIAAABIABABIAAABIAAAAIAAACIABABIAAABIAAABIAAABIABAAIAAABIABAAIAAACIAAAAIAAABIABABIAAACIAAAAIAAABIABABIAAABIAAAAIAAACIABAAIAAABIAAABIAAABIAAABIAAABIABAAIAAAtQAAAFgGAAg");
	this.shape_73.setTransform(413.4,493.15);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#63717F").s().p("AjmApQgGAAABgFIADgsIAAAAIAAgCIABAAIAAgBIAAgBIAAgCIABAAIAAgCIAAAAIAAgBIABAAIAAgCIAAAAIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAAAIAAgBIAAgBIABgBIAAgBIAAAAIAAgCIABgBIAAgBIAAAAIAAgBIABAAIAAgBQABgFAEAAIG6AAQAEAAABAFIAAABIABAAIAAABIAAABIAAABIABABIAAACIAAAAIAAACIABAAIAAABIAAAAIAAACIABAAIAAACIAAABIAAABIABAAIAAACIAAAAIAAABIABABIAAABIAAABIAAABIABABIAAABIAAABIAAABIABABIAAArQAAAFgGAAg");
	this.shape_74.setTransform(365.5179,493.15);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#63717F").s().p("AjnApQgGAAABgFIAFgrIABgBIAAgBIAAAAIAAgBIABgBIAAgCIAAAAIAAgBIABAAIAAgCIAAAAIAAgBIABAAIAAgCIAAAAIAAgBIABAAIAAgCIAAAAIAAgCIABAAIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgCIABgBIAAgBIAAAAIAAgBIABgBIAAAAIAAgBIAAAAQABgFAFAAIG6AAQAEAAABAEIAAABIAAABIABAAIAAACIAAABIAAACIABAAIAAACIAAAAIAAACIABAAIAAABIAAABIAAACIABABIAAABIAAABIAAABIABAAIAAACIAAAAIAAACIABAAIAAADIAAAAIAAABIABACIgEArQAAAFgGAAg");
	this.shape_75.setTransform(318.0429,493.15);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#63717F").s().p("AjmApQgGAAABgFIAFgrIABgBIAAgBIAAgBIAAgBIABAAIAAgCIAAgBIAAgBIABAAIAAgCIAAAAIAAgBIABgBIAAgBIAAAAIAAgCIABAAIAAgCIAAAAIAAgBIABAAIAAgCIAAAAIAAgCIABAAIAAgCIAAAAIAAgCIABAAIAAgBIAAAAIAAgBQACgFAEAAIG6AAQAEAAABAEIAAABIAAAAIAAABIABABIAAACIAAAAIAAADIABAAIAAACIAAAAIAAACIABAAIAAACIAAABIAAACIABABIAAABIAAAAIAAACIABABIAAACIAAABIAAACIABAAIAAACIgGArQAAAFgGAAg");
	this.shape_76.setTransform(270.0929,493.15);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#63717F").s().p("AjoApQgGAAABgFIAHgrIAAgBIAAgBIAAgBIABAAIAAgDIAAAAIAAgCIABAAIAAgBIAAgBIAAgBIABAAIAAgCIAAAAIAAgCIABAAIAAgCIAAAAIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBQACgFAEAAIG9AAQAEAAABAEIAAACIAAAAIAAACIABAAIAAADIAAAAIAAACIABABIAAABIAAABIAAACIABAAIAAADIAAAAIAAACIABAAIAAACIAAABIAAACIABAAIAAADIAAACIgJArQgBAFgGAAg");
	this.shape_77.setTransform(222.5423,493.15);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#63717F").s().p("AjgApQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAgBIgBAAIAAgBIAAAAIAAgCIgBAAIAAgBIAAgBIAAgBIgBgBIAAgBIgBgBIAAgBIAAAAIAAgBIgBgBIAAgBIAAAAIAAgCIgBgBIAAgBIAAAAIAAgBIgBAAIAAgCIAAAAIAAgBIgBgBIAAgCIAAAAIAAgBIAAgBIAAgCIALgrQACgGAFAAIG5AAQAEAAABAEIAAAAIAAABIABABIAAAAIAAABIAAABIABAAIAAACIAAABIAAABIABABIAAABIAAAAIAAABIAAABIAAABIABAAIAAACIAAAAIAAACIABAAIAAACIAAAAIAAABIABAAIAAABIAAABIAAABIABAAIAAACIAAABIAAADIgLArQgCAFgFAAg");
	this.shape_78.setTransform(175.2,493.15);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#63717F").s().p("Am9AnQgBAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBIAAAAIAAgCIgBAAIAAgBIAAAAIAAgCIgBAAIAAgCIAAAAIAAgBIgBgBIAAgBIAAAAIAAgCIgBAAIAAgBIAAgBIAAgBIgBgBIAAgBIAAAAIAAgCIgBAAIAAgBIAAgBIAAgBIAAgDIAQgsQACgFAFAAINtAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABIABAAIAAACIAAAAIAAACIABAAIAAABIAAAAIAAACIABAAIAAACIAAAAIAAABIABABIAAABIAAAAIAAACIABAAIAAABIAAABIAAABIABAAIAAACIAAAAIAAACIABAAIAAABQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAIgNArQgBAGgGAAg");
	this.shape_79.setTransform(105.8625,492.925);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#ACB6BF").s().p("Aj9AcQgEAAgCgGIgNgrQgCgGAGAAIIIAAQAEABACAEIAPAsQACAGgGAAg");
	this.shape_80.setTransform(739.45,486);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#ACB6BF").s().p("AjWAcQgGAAgBgGIgKgrQAAgGAFAAIG6AAQAFAAACAGIAJArQABAGgGAAg");
	this.shape_81.setTransform(687.9,486);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#ACB6BF").s().p("AjYAcQgFAAgBgGIgHgrQgBgGAGAAIG3AAQAFAAABAGIAJArQABAGgFAAg");
	this.shape_82.setTransform(640.1,486);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#ACB6BF").s().p("AjYAcQgFAAgBgGIgHgrQgBgGAGAAIG3AAQAFAAABAGIAJArQABAGgGAAg");
	this.shape_83.setTransform(592.125,486);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#ACB6BF").s().p("AjcAcQgGAAAAgGIgCgrQgBgGAGAAIG6AAQAFAAABAGIAEArQABAGgFAAg");
	this.shape_84.setTransform(544.2255,486);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#ACB6BF").s().p("AjeAcQgFAAAAgGIAAgrQAAgGAFAAIG4AAQAFAAABAGIAEArQABAGgGAAg");
	this.shape_85.setTransform(496.7071,486);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#ACB6BF").s().p("AjdAcQgGAAAAgGIgBgrQAAgGAGAAIG6AAQAFAAABAGIADArQAAAGgGAAg");
	this.shape_86.setTransform(448.775,486);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#ACB6BF").s().p("AjeAcQgFAAAAgGIACgrQAAgGAFAAIG7AAQAFAAAAAGIAAArQAAAGgFAAg");
	this.shape_87.setTransform(400.725,486);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#ACB6BF").s().p("AjeAcQgFAAAAgGIACgrQAAgGAHAAIG5AAQAFAAAAAGIAAArQAAAGgFAAg");
	this.shape_88.setTransform(352.85,486);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#ACB6BF").s().p("AjgAcQgGAAABgGIAGgrQABgGAFAAIG6AAQAFAAAAAGIgEArQAAAGgFAAg");
	this.shape_89.setTransform(305.0173,486);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#ACB6BF").s().p("AjgAcQgFAAAAgGIAGgrQABgGAFAAIG6AAQAGAAgCAGIgFArQgBAGgFAAg");
	this.shape_90.setTransform(257.25,486);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#ACB6BF").s().p("AjiAcQgGAAACgGIAFgrQABgGAGAAIG9AAQAFAAgBAGIgJArQgBAGgGAAg");
	this.shape_91.setTransform(209.5,486);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#ACB6BF").s().p("AjjAcQgGAAABgGIAMgrQABgGAGAAIG5AAQAGAAgBAGIgMArQgBAGgGAAg");
	this.shape_92.setTransform(161.675,486);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#ACB6BF").s().p("AlyAcQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIARgsQACgEAFgBILQAAQABAAABABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAABgBAAIgMArQgCAGgFAAg");
	this.shape_93.setTransform(99.5617,486);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#63717F").s().p("AkAAsQgHAAAAgGIgOgrIAAgDIABgBIAAgBIAAAAIAAgCIABAAIAAgCIABAAIAAgCIAAAAIAAgCIABAAIAAgCIAAAAIAAgCIABAAIAAgCIAAAAIAAgCIABAAIAAgCIAAAAIAAgCIAAAAIAAgCIABAAIAAgCIAAAAIAAgCIABAAIAAgCIAAAAIAAgBQABgEAEAAIIIAAQAEAAACAFIAPAsQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIAAABIAAAAIAAACIgBAAIAAACIAAAAIAAACIgBAAIAAACIAAAAIAAACIgBAAIAAACIAAAAIAAACIgBAAIAAACIgBAAIAAACIAAAAIAAACIgBAAIAAABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIAAABIAAABQgBADgDAAg");
	this.shape_94.setTransform(739.05,487.625);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#63717F").s().p("AjbApQgGAAgBgFIgJgrQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgBIABAAIAAgBIAAgBIAAAAIABAAIAAgBIAAgBIAAgBIABAAIAAgCIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgCIAAAAIAAgBIABAAIAAgCIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABgBIAAgBIAAgBIAAgBQABgDAEAAIG6AAQAFAAACAGIAIAqIAAADIAAABIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAACIAAAAIAAACIgBAAIAAABIAAAAIAAACIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAACIgBABIAAABIAAAAIAAABIgBAAIAAABIAAABIAAABIgBAAIAAABIAAAAIAAABIgBABIAAABIAAABIAAAAQgBADgEAAg");
	this.shape_95.setTransform(687.425,487.35);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#63717F").s().p("AjdApQgGAAgBgGIgHgqIABgDIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAgBIABgBIAAAAIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAAAIABgBIAAgBIABAAIAAgBIAAAAIAAgCIABAAIAAgBQAAgDAEAAIG3AAQAGAAABAGIAJAqIgBAEIAAAAIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBABIAAABIgBAAIAAABIAAABIAAAAIgBABIAAABIAAAAIAAABIgBABIAAAAIAAAAIAAABIgBAAIAAABIAAABIAAABIgBABIAAAAIAAABIAAABIAAAAIAAABIgBAAIAAAAIAAABIAAABIgBAAIAAABIAAABIAAABIgBAAIAAABIAAAAIAAABIgBABQAAAAgBABQAAAAAAAAQgBABgBAAQAAAAgBAAg");
	this.shape_96.setTransform(639.55,487.35);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#63717F").s().p("AjcApQgGAAgBgGIgHgqIABgDIAAgBIAAAAIAAgBIABgBIAAAAIABgBIAAgBIAAAAIAAgBIABgBIAAgBIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgCIAAAAIAAgBIAAAAIAAgCIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAAAIAAgCIABAAIAAgBQABgDAEAAIG3AAQAFAAABAGIAIAqIAAAEIAAAAIAAABIgBAAIAAABIAAABIAAABIgBAAIAAABIAAAAIAAACIgBABIAAABIAAAAIAAABIAAAAIAAABIgBAAIAAABIAAABIAAABIgBAAIAAACIAAAAIAAABIgBABIAAABIAAAAIAAABIgBAAIAAABIAAABIAAABIgBAAIAAACIgBAAIAAABQAAADgEAAg");
	this.shape_97.setTransform(591.65,487.35);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#63717F").s().p("AjjArQgGAAAAgGIgDgtIABgBIAAgCIAAAAIAAgCIABAAIAAgCIAAgBIAAgCIABAAIAAgCIAAAAIAAgCIABgBIAAgCIAAAAIAAgCIABAAIAAgCIAAgBIAAgCIABAAIAAgCIAAgBIAAgCIABAAIAAAAQAAgFAFAAIG6AAQAEAAABAFIABAAIAAACIAAAAIAAACIABAAIAAACIAAAAIAAACIABAAIAAACIAAAAIAAACIABAAIAAABIAAABIAAABIABABIAAABIAAABIAAABIABABIAAABIAAABIAAABIABABIAAABIAAABIAAABIABAAIAAACIAAAAIAAABIABABIAEArQABAGgGAAg");
	this.shape_98.setTransform(544.3071,487.525);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#63717F").s().p("AjnArQgGAAAAgFIAAgrIABgCIAAgBIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgCIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABgBIAAAAIAAgBIAAgCIABAAIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAAAIABgBIAAgBIAAAAIAAgCIABAAIAAgBIAAgBQABgDAEAAIG4AAQAEAAACAEIAAACIAAABIAAACIABAAIAAABIAAABIAAABIABABIAAACIAAAAIAAABIABABIAAABIAAABIAAABIABAAIAAACIAAAAIAAACIABABIAAABIAAABIAAABIABAAIAAABIAAABIAAABIABABIAAACIAAABIAAABIABAAIAEAsQABAFgGAAg");
	this.shape_99.setTransform(496.5321,487.55);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#63717F").s().p("AjlApQgFAAAAgGIgBgqIAAgCIAAgBIABAAIAAgCIAAAAIAAgBIABAAIAAgCIAAAAIAAgBIABgBIAAgCIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAAAIAAgCIABAAIAAgBIAAAAIAAgCIABAAIAAgCQABgEAEAAIG7AAQAEAAABAEIABABIAAACIAAAAIAAACIABAAIAAABIAAAAIAAACIABAAIAAADIAAAAIAAABIABABIAAABIAAABIAAABIABAAIAAACIAAAAIAAACIABAAIAAACIAAAAIAAACIABAAIAAACIAAAAIAAABIABACIACAqQAAAGgFAAg");
	this.shape_100.setTransform(448.725,487.35);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#63717F").s().p("AjmApQgGAAABgGIACgqIAAgCIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgCIAAAAIAAgBIABgBIAAgBIAAgBIAAgCIABAAIAAgBIAAAAIAAgBIABgBIAAgBIAAgBIAAgCIABAAIAAgBIAAgBIAAgBIABAAIAAgCIAAAAIAAgBIABgBIAAgBQABgEAEAAIG7AAQAEAAABAEIAAABIAAABIABABIAAABIAAAAIAAABIABABIAAABIAAAAIAAACIABAAIAAACIAAABIAAABIABAAIAAACIAAAAIAAABIABAAIAAABIAAABIAAACIABAAIAAABIAAABIAAABIABAAIAAABIAAABIAAABIABABIAAAsQAAAGgGAAg");
	this.shape_101.setTransform(400.7179,487.35);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#63717F").s().p("AjmApQgFAAAAgGIADgqIAAgCIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgCIAAgBIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgCIAAAAIAAgCIABAAIAAgCIAAAAIAAgBIABgBIAAgBIAAAAIAAgCIABAAIAAgCQACgEAEAAIG5AAQAEAAABAEIAAABIABAAIAAACIAAAAIAAACIABAAIAAABIAAABIAAABIABAAIAAADIAAAAIAAABIABABIAAABIAAABIAAAAIABABIAAABIAAABIAAACIABAAIAAACIAAAAIAAABIABABIAAABIAAAAIAAACIABAAIAAAsQAAAGgGAAg");
	this.shape_102.setTransform(352.825,487.35);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#63717F").s().p("AjoApQgFAAABgGIAFgqIAAgCIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIAAgBIABgBIAAgBIAAAAIAAgBIABAAIAAgCIAAAAIAAgBIABgBIAAgBIAAgBIAAgBIABAAIAAgCIAAAAIAAgBIABAAIAAgBIAAAAIAAgCIABAAIAAgCQACgEAEAAIG6AAQADAAACADIAAADIAAAAIAAACIABAAIAAABIAAABIAAACIABAAIAAACIAAAAIAAACIABAAIAAACIAAAAIAAACIABAAIAAACIAAAAIAAADIABAAIAAACIAAAAIAAABIABAAIAAACIAAABIAAACIgDAqQgBAGgFAAg");
	this.shape_103.setTransform(304.9173,487.35);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#63717F").s().p("AjmApQgGAAABgGIAFgqIABgCIAAgBIAAAAIAAgCIABAAIAAgBIAAAAIAAgCIABAAIAAgBIAAgBIAAgBIABgBIAAgBIAAAAIAAgCIABAAIAAgBIAAgBIAAgBIABAAIAAgCIAAgBIAAgBIABAAIAAgCIAAAAIAAgBIABAAIAAgCIAAAAIAAgCQACgEAEAAIG6AAQAEAAABADIAAABIAAAAIAAADIABAAIAAACIAAAAIAAACIABABIAAACIAAAAIAAACIABABIAAACIAAAAIAAACIABAAIAAADIAAAAIAAACIABAAIAAABIAAABIAAACIABAAIAAADIgGAqQAAAGgGAAg");
	this.shape_104.setTransform(257.1429,487.35);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#63717F").s().p("AjoApQgGAAABgGIAHgqIAAgCIAAgBIABAAIAAgCIAAAAIAAgBIABAAIAAgCIAAAAIAAgDIABAAIAAgBIAAgBIAAgBIABAAIAAgCIAAAAIAAgCIABAAIAAgCIAAAAIAAgCIABAAIAAgCIAAAAIAAgBIABgBIAAgBIAAAAIAAgCQABgEAFAAIG9AAQAEAAABADIAAACIAAAAIAAACIABABIAAABIAAABIAAACIABAAIAAADIAAAAIAAACIABABIAAABIAAABIAAACIABAAIAAADIAAAAIAAACIABAAIAAACIAAABIAAADIgJArQgBAFgGAAg");
	this.shape_105.setTransform(209.3929,487.35);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#63717F").s().p("AjfApQgEAAgBgDIAAgBIAAAAIAAgCIgBAAIAAgCIAAAAIAAgBIgBgBIAAgBIAAAAIAAgCIgBAAIAAgCIAAAAIAAgCIgBAAIAAgBIAAAAIAAgBIgBgBIAAgBIAAAAIAAgCIgBgBIAAgBIAAAAIAAgCIgBAAIAAgBIAAAAIAAgCIgBAAIAAgDIAMgqQABgGAGAAIG5AAQAEAAABADIAAABIAAAAIAAACIABABIAAABIAAAAIAAABIABABIAAABIAAAAIAAACIABAAIAAACIAAAAIAAACIABAAIAAABIAAABIAAABIABAAIAAABIAAABIAAABIABABIAAABIAAABIAAABIABAAIAAABIAAAAIAAACQAAABABAAQAAAAAAAAQAAABAAAAQgBAAAAABIgLArQgBAFgGAAg");
	this.shape_106.setTransform(162.075,487.35);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#63717F").s().p("AluAnQgBAAgBAAQgBgBAAAAQgBAAAAgBQAAAAgBgBIAAgBIAAAAIAAgCIgBAAIAAgBIAAgBIAAgBIgBgBIAAgBIAAAAIAAgCIAAAAIAAgBIgBgBIAAgBIAAAAIAAgCIgBAAIAAgCIAAAAIAAgBIgBgBIAAgBIAAAAIAAgCIgBAAIAAgDIAQgsQACgFAGAAILQAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABIAAAAIABABIAAABIAAAAIAAACIABAAIAAACIAAAAIAAABIABABIAAABIAAAAIAAACIAAAAIAAACIABAAIAAABIAAABIAAABIABAAIAAACIAAAAIAAABIABABIAAABIAAAAIAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAIgMArQgCAGgFAAg");
	this.shape_107.setTransform(99.9,487.125);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#ACB6BF").s().p("AoJAbQgFAAgBgFIgIgrQgBgFAGAAIQXAAQAGAAABAFIALArQABABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAg");
	this.shape_108.setTransform(711.0623,480.325);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#63717F").s().p("AoNApQgFAAgBgFIgHgrQAAgBgBAAQAAAAAAAAQAAgBAAAAQABAAAAAAIAAgCIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgCIABAAIAAgCIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgCIABAAIAAgCIAAAAIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgBQAAgEAEAAIQYAAQAFAAACAFIALAsIAAADIgBAAIAAABIAAAAIAAABIgBABIAAACIAAAAIAAABIgBABIAAABIAAAAIAAABIgBABIAAABIAAAAIAAACIgBAAIAAABIAAABIAAABIgBAAIAAABIAAABIAAABIgBAAIAAACIAAAAIAAACIgBAAIAAACIAAAAIAAABQgBADgEAAg");
	this.shape_109.setTransform(710.625,481.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#ACB6BF").s().p("AjOAbQgFAAgBgFIgHgrQgBgFAFAAIGnAAQAFAAABAFIAHArQAAAFgFAAg");
	this.shape_110.setTransform(633.9923,480.325);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#63717F").s().p("AjQApQgGAAgBgFIgHgrQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAAgDIABAAIAAgDIABAAIAAgCIAAgBIAAgDIABAAIAAgDIAAAAIAAgCIABAAIAAgEIAAAAIAAgCIABgBIAAgCIAAgBIAAAAQABgEADAAIGnAAQAFAAABAGIAHAqIAAADIAAABIgBABIAAACIAAABIAAADIgBABIAAACIAAAAIAAACIgBABIAAADIAAABIAAACIgBAAIAAACIgBACIAAACIAAABQAAADgEAAg");
	this.shape_111.setTransform(633.75,481.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#ACB6BF").s().p("AjPAbQgFAAgBgFIgGgrQgBgFAGAAIGmAAQAGAAABAFIAEArQABAFgFAAg");
	this.shape_112.setTransform(588.3505,480.325);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#63717F").s().p("AjSApQgFAAgBgFIgGgrIAAgCIAAgCIABAAIAAgCIAAAAIAAgCIABAAIAAgBIAAAAIAAgCIABAAIAAgCIAAgBIAAgBIABgBIAAgBIAAAAIAAgCIABAAIAAgBIAAgBIAAgCIABAAIAAgBIAAgBIAAgBIABAAIAAgCIAAAAIAAgBQABgEAEAAIGmAAQAGAAABAGIAEAqIAAADIAAABIAAAAIgBABIAAABIAAABIAAACIgBAAIAAACIAAAAIAAABIgBAAIAAACIAAAAIAAACIgBAAIAAACIAAAAIAAACIgBABIAAAAIAAABIAAABIgBABIAAABIAAAAIAAADIgBAAIAAACQgBADgEAAg");
	this.shape_113.setTransform(587.975,481.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#ACB6BF").s().p("AjPAbQgFAAgBgFIgGgrQgBgFAGAAIGmAAQAGAAABAFIAEArQABAFgFAAg");
	this.shape_114.setTransform(543.0505,480.325);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#63717F").s().p("AjTAmQgFAAgBgFIgFgrIAAgDIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgBQABgDAEAAIGmAAQAGAAABAFIAEArIAAACIAAABIAAABIgBAAIAAABIAAABIAAABIgBAAIAAABIAAABIAAABIgBAAIAAABIAAAAIAAABIgBABIAAABIAAAAIAAABIgBABIAAABIAAAAIAAABIgBABIAAABIAAAAIAAABIgBAAIAAABIAAABIAAABQgBADgEAAg");
	this.shape_115.setTransform(542.675,481.425);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#ACB6BF").s().p("AjRAbQgFAAAAgFIgDgrQgBgFAGAAIGnAAQAFAAAAAFIACArQAAAFgFAAg");
	this.shape_116.setTransform(497.0929,480.325);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#63717F").s().p("AjXAmQgGAAAAgFIgCguIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABgBIAAgBIABAAIAAgBIAAAAIAAgBQABgDAEAAIGmAAQAFAAABAEIAAABIABABIAAACIAAAAIAAACIAAABIAAACIABAAIAAACIAAAAIAAADIABAAIAAACIAAAAIAAACIABABIAAACIAAAAIADAtQAAAFgGAAg");
	this.shape_117.setTransform(496.9,481.425);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#ACB6BF").s().p("AjRAbQgFAAgBgFIgCgrQAAgFAFAAIGpAAQAFAAAAAFIAAArQAAAFgFAAg");
	this.shape_118.setTransform(451.475,480.325);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#63717F").s().p("AjVApQgGAAAAgFIgDgrIABgBIAAgDIAAAAIAAgCIABAAIAAgCIAAAAIAAgCIABAAIAAgCIAAgBIAAgBIABgBIAAgCIAAAAIAAgBIABgBIAAgBIAAgBIAAgCIABgBIAAgBIAAAAIAAgCIABAAIAAgCQABgEAEAAIGpAAQAFAAAAAGIAAADIABAAIAAAFIAAAAIAAAFIABAAIAAAFIAAABIAAADIABABIAAAvQAAAFgGAAg");
	this.shape_119.setTransform(451.275,481.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#ACB6BF").s().p("AjSAbQgGAAABgFIACgrQAAgFAGAAIGiAAQAGAAAAAFIAAArQAAAFgGAAg");
	this.shape_120.setTransform(405.7929,480.325);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#63717F").s().p("AjZApQgFAAAAgFIADgtIAAAAIAAgCIABgBIAAgBIAAAAIAAgCIABAAIAAgBIAAgBIAAgBIAAgBIAAgCIABAAIAAgCIAAAAIAAgBIABgBIAAgBIAAAAIAAgCIABgBIAAgBIAAgBIAAgBIABAAIAAgCIABAAIAAgBQABgFAEAAIGjAAQAFAAAAAFIAAABIABABIAAACIABAAIAAACIAAAAIAAADIABAAIAAACIAAAAIAAADIABAAIAAADIAAAAIAAACIABABIAAABIAAABIAAACIAAAAIAAADIABABIAAArQAAAFgGAAg");
	this.shape_121.setTransform(405.7,481.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#ACB6BF").s().p("AjUAbQgFAAAAgFIACgrQABgFAFAAIGmAAQAFAAAAAFIgDArQAAAFgGAAg");
	this.shape_122.setTransform(360.275,480.325);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#63717F").s().p("AjaApQgGAAAAgFIACgrIABgBIAAgBIAAAAIAAgCIABAAIAAgCIAAAAIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgCIAAAAIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIAAgBIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAgBIABAAQABgFAEAAIGnAAQAEAAABAFIAAABIAAABIAAADIABAAIAAADIAAABIAAADIABAAIAAADIAAABIAAAEIABAAIAAADIAAAAIAAAEIABABIgDArQgBAFgFAAg");
	this.shape_123.setTransform(360.025,481.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#ACB6BF").s().p("AjVAbQgFAAABgFIADgrQABgFAGAAIGlAAQAFAAgBAFIgDArQgBAFgFAAg");
	this.shape_124.setTransform(314.6,480.325);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#63717F").s().p("AjdApQgGAAABgFIAEgrIAAgBIAAgBIAAgCIABAAIAAgCIAAAAIAAgCIABAAIAAgBIAAAAIAAgCIABAAIAAgCIAAgBIAAgBIABgBIAAgBIAAAAIAAgCIABAAIAAgCIAAAAIAAgCIABAAIAAgCIAAAAIAAgBIABgBIAAgBQACgFAEAAIGlAAQAEAAABAEIAAAAIAAABIAAABIABAAIAAABIAAAAIAAABIABAAIAAABIAAAAIAAABIABAAIAAABIAAABIAAABIABABIAAABIAAAAIAAABIABAAIAAABIAAAAIAAABIABABIAAABIAAAAIAAABIABAAIAAABIAAABIAAABIABAAIAAABIAAAAIAAABIABAAIAAABIAAABIAAABIABAAIAAACIAAACIgEArQAAAFgGAAg");
	this.shape_125.setTransform(314.7679,481.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#ACB6BF").s().p("AjVAbQgGAAABgFIAIgrQABgFAGAAIGhAAQAGAAgBAFIgFArQgBAFgFAAg");
	this.shape_126.setTransform(268.7745,480.325);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#63717F").s().p("AjeApQgHAAACgFIAIgrIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAAAIAAgCIABAAIAAgBIAAAAIAAgBIABgBIAAgBIAAgBIAAgBIABAAIAAgCIAAAAIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgCIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIABAAIAAgCIAAAAIAAAAQACgFAEAAIGhAAQAEAAABAEIAAAAIABABIAAABIAAAAIAAABIABABIAAAAIAAAAIAAABIABABIAAABIAAABIAAABIABAAIAAACIAAAAIAAABIABAAIAAABIAAAAIAAACIABAAIAAABIAAAAIAAACIABAAIAAACIAAAAIAAABIABAAIAAABIAAAAIAAABIABABIAAABIAAAAIAAACIABACIgFArQAAAFgGAAg");
	this.shape_127.setTransform(268.8015,481.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#ACB6BF").s().p("AjVAbQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAIgrQABgFAGAAIGhAAQAGAAgBAFIgFArQgBAFgFAAg");
	this.shape_128.setTransform(223.2259,480.325);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#63717F").s().p("AjRApQgDAAgCgDIAAgBIAAAAIAAgCIAAAAIAAgCIgBAAIAAgBIAAgBIAAgBIgBAAIAAgBIAAgBIAAgBIgBAAIAAgCIAAgBIAAgBIgBAAIAAgCIAAAAIAAgBIgBAAIAAgBIgBgBIAAgBIAAAAIAAgCIgBAAIAAgCIAAAAIAAgBIgBAAIAAgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAIgrQACgFAFAAIGhAAQADAAACAEIAAABIABAAIAAACIAAAAIAAABIAAAAIAAACIABAAIAAABIAAABIAAABIABABIAAABIAAAAIAAABIABABIAAABIAAAAIAAABIABABIAAACIAAAAIAAABIABABIAAABIABAAIAAABIAAAAIAAACIABAAIAAACIAAAAIAAADIgFArQgBAFgEAAg");
	this.shape_129.setTransform(223.6,481.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#ACB6BF").s().p("AjYAbQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAMgrQACgFAFAAIGhAAQAGAAgBAFIgJArQgCAFgFAAg");
	this.shape_130.setTransform(177.5744,480.325);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#63717F").s().p("AjUApQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBgBIAAAAIAAAAIAAgCIgBAAIAAgBIAAgBIAAgBIgBgBIAAgBIAAAAIAAgBIgBgBIAAgBIAAAAIAAgBIgBgBIAAgBIAAAAIAAgCIgBAAIAAgBIAAgBIAAgBIgBAAIAAgBIAAAAIAAgCIgBAAIAAgCIAAAAIAAgBIgBgBIAAgBIAAAAIAAAAIAAgDIAMgsQABgFAGAAIGhAAQAEAAAAADIAAABIABABIAAABIAAAAIAAABIABABIAAABIAAAAIAAABIABAAIAAACIAAABIAAABIABAAIAAABIAAABIAAAAIABABIAAABIAAAAIAAACIABAAIAAACIAAAAIAAABIABAAIAAACIAAAAIAAABIABAAIAAABIAAABIAAABIABAAIAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIgJArQgBAFgFAAg");
	this.shape_131.setTransform(178.0125,481.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#ACB6BF").s().p("AjaAbQgFAAACgFIAPgrQABgFAGAAIGhAAQAGAAgCAFIgLArQgCAFgFAAg");
	this.shape_132.setTransform(132.1238,480.325);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#63717F").s().p("AjYApQgDAAgBgDIAAgDIAAAAIAAgEIgBAAIAAgDIAAAAIAAgEIgBAAIAAgDIAAAAIAAgDIgBAAIAAgEIAAAAIAAgCIgBgBIAAAAIABgCIAPgsQABgFAGAAIGhAAQAEAAABAEIAAADIAAAAIAAACIABABIAAADIAAAAIAAADIABAAIAAADIAAABIAAADIABAAIAAADIAAAAIAAADIABAAIAAAEIgMArQgBAFgGAAg");
	this.shape_133.setTransform(132.325,481.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#ACB6BF").s().p("AjYAbQgFAAABgFIAQgrQACgFAGAAIGdAAQAFAAgBAFIgNArQgBAFgGAAg");
	this.shape_134.setTransform(86.291,480.325);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#63717F").s().p("AjSApQAAAAgBAAQgBAAAAgBQAAAAgBAAQAAgBAAgBIgBAAIAAAAIAAgBIAAAAIgBgBIAAAAIAAgBIAAAAIgBgBIAAgBIAAAAIAAgBIgBAAIAAgBIAAAAIAAgBIgBAAIAAgBIAAAAIAAgBIgBAAIAAgBIAAAAIAAgBIgBAAIAAgBIAAgBIAAAAIgBgBIAAAAIAAgBIAAAAIgBgBIAAgBIAAAAIAAAAIgBAAIAAgBIAAAAIAAgBIgBAAIAAgBIAAAAIAAgCIgBAAIAAgBIAAAAIAAgBIgBAAIAAgBIAAAAIAAAAIAAgDIAQgsQABgFAGAAIGeAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAIABAAIAAACIAAAAIAAABIABAAIAAABIAAAAIAAABIABAAIAAABIAAAAIAAAAIABAAIAAABIAAAAIAAABIABAAIAAABIAAAAIAAACIABAAIAAABIAAAAIAAABIABAAIAAABIAAAAIAAABIABAAIAAABIAAAAIAAABIABAAIAAABIAAAAIAAABIABAAIAAABIAAAAIAAABIABABIAAAAIAAABIAAAAIABAAIAAABIAAAAIAAABIABAAIAAABIAAAAIAAABIABAEIgNArQgCAFgFAAg");
	this.shape_135.setTransform(86.9375,481.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#ACB6BF").s().p("AjpAQQgFAAABgFIAHgVQACgFAFAAIHIAAQAGAAgBAFIgEAVQgBAFgFAAg");
	this.shape_136.setTransform(90.1744,475.225);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#63717F").s().p("AjiAfQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBIgBAAIAAgBIAAAAIAAgBIgBAAIAAgBIAAAAIAAAAIgBgBIAAAAIAAgBIAAAAIgBAAIAAgBIAAgBIAAgBIgBAAIAAgBIAAAAIAAgBIgBAAIAAgBIAAAAIAAAAIgBgBIAAAAIAAgBIAAAAIgBgBIAAAAIAAAAIAAgBIgBgBIAAgBIAAAAIAAgBIgBAAIAAgBIAAAAIAAgBIgBAAIAAgBIAAAAIAAAAIgBgBIAAAAIAAgBIAAAAIgBAAIAAgBIAAgBIAAgBIgBAAIAAgBIAAAAIAAgBIgBAAIAAAAIAAgCIAHgXQACgFAFAAIHIAAQADAAABADIAAAAIABAAIAAABIAAAAIAAABIABABIAAAAIABACIAAABIAAAAIAAABIABAAIAAABIAAAAIAAAAIABABIAAABIABAAIAAABIAAAAIAAABIABACIAAABIABAAIAAABIAAAAIAAABIABAAIAAAAIABABIAAABIAAAAIAAABIABAAIAAABIABACIAAAAIAAABIAAABIABAAIAAABIAAAAIAAAAIABABIAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABIgEAVQgBAGgFAAg");
	this.shape_137.setTransform(90.92,476.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#ACB6BF").s().p("AjjAQQgFAAgCgFIgFgVQgBgFAFAAIHPAAQAFAAACAFIAFAVQAAABAAAAQABABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAg");
	this.shape_138.setTransform(739.2367,475.225);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#63717F").s().p("AjpAhQgFAAgCgGIgFgWIAAgDIAAgBIABAAIAAgBIAAAAIAAAAIAAAAIAAgCIABAAIAAgBIAAAAIAAgBIABgBIAAAAIAAgBIAAgBIABAAIAAgBIAAgBIAAAAIABgBIAAgBIAAAAIAAgBIABgBIAAAAIABgBIAAgBIAAAAIAAgBIABgBIAAAAIAAgBIAAgBIABAAIAAgBIAAgBIAAAAIABgBIAAgBIAAAAIAAgBIAAAAIAAgCIABAAIAAgBIAAAAIAAgBIABAAIAAgBQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAIHPAAQAFAAACAGIAGAWIAAADIgBAAIAAABIgBAAIAAAAIAAAAIAAACIgBAAIAAABIAAAAIAAABIgBABIAAAAIAAABIAAABIgBAAIAAABIAAABIAAAAIgBABIAAABIAAAAIAAABIAAABIAAAAIgBABIAAABIAAAAIAAABIgBABIAAAAIAAABIAAABIgBAAIAAABIAAAAIAAABIgBABIAAABIgBAAIAAABIAAAAIAAACIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAABQgBADgDAAg");
	this.shape_139.setTransform(738.6,476.875);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#ACB6BF").s().p("AjkAQQgGAAgBgFIgDgVQgBgFAGAAIHPAAQAFAAABAFIADAVQABAFgFAAg");
	this.shape_140.setTransform(689.1255,475.225);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#63717F").s().p("AjqAhQgFAAgBgGIgEgWIAAgCIABgBIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgCIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIABAAIAAgCIAAAAIAAgBIAAgBIAAAAIABgBIAAgBIAAAAIAAgCIABAAIAAgBIAAgBIAAAAIABgBIAAgBIAAgBIAAgBIABAAIAAgBIAAAAIAAgCIABAAIAAgBIABgBIAAgBIAAAAIAAgBIABAAQAAgEAEAAIHPAAQAFAAABAGIAEAVIAAADIgBAAIAAABIAAABIAAAAIgBAAIAAABIAAABIAAABIgBAAIAAACIgBAAIAAABIAAAAIAAABIgBABIAAABIAAAAIAAABIgBABIAAABIAAAAIAAABIgBABIAAABIAAAAIAAABIgBABIAAABIAAAAIAAACIAAAAIAAABIgBAAIAAABIAAABIAAABIgBAAIAAACIAAAAIAAABIgBAAIAAABIAAABIAAAAQgCAEgDAAg");
	this.shape_141.setTransform(688.6,476.875);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#ACB6BF").s().p("AjkAQQgGAAgBgFIgDgVQgBgFAGAAIHOAAQAGAAABAFIADAVQABAFgFAAg");
	this.shape_142.setTransform(639.3255,475.225);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#63717F").s().p("AjqAfQgFAAgBgFIgDgWQgBgBAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABgBIAAAAIAAgBIAAgBIABAAIAAgBIAAgBIAAAAIABgBIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAgBIABAAQABgDADAAIHPAAQAFAAABAFIAEAWIAAACIgBABIAAAAIAAAAIAAABIgBAAIAAABIAAABIAAABIgBAAIAAABIAAAAIAAABIgBABIAAABIAAAAIAAABIgBAAIAAACIAAAAIAAABIgBAAIAAABIAAABIAAABIgBAAIAAABIAAAAIAAACIgBAAIAAABIAAAAIAAABIgBAAIAAACIAAAAIAAABIgBAAIAAABIAAABIAAABIgBAAIAAABIAAAAIAAABQgBADgEAAg");
	this.shape_143.setTransform(638.775,476.725);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#ACB6BF").s().p("AjkAQQgGAAgBgFIgDgVQgBgFAFAAIHPAAQAGAAABAFIADAVQABAFgGAAg");
	this.shape_144.setTransform(589.4745,475.225);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#63717F").s().p("AjrAfQgFAAgBgFIgEgWIABgDIAAgBIAAAAIABAAIAAAAIAAgBIAAAAIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAAAIABgBIAAAAIAAgBIAAAAIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAAAIABgBIAAAAIAAgBIAAAAIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAAAIABgBIAAAAIAAgBIAAAAIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIHPAAQAFAAABAFIAEAWIAAAeQAAAEgFAAg");
	this.shape_145.setTransform(588.825,476.725);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#ACB6BF").s().p("AjnAQQgGAAAAgFIAAgVQAAgFAGAAIHPAAQAFAAAAAFIAAAVQAAAFgFAAg");
	this.shape_146.setTransform(539.65,475.225);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#63717F").s().p("AjtAhQgFAAAAgGIAAgWIAAgCIAAAAIAAgBIAAgBIABAAIAAgBIAAAAIAAAAIABgBIAAgBIAAAAIAAgBIABgBIAAAAIAAgBIAAgBIABAAIAAgBIAAgBIAAAAIABgBIAAgBIABAAIAAgBIAAgBIAAAAIABgBIAAgBIAAAAIAAgBIABgBIAAAAIAAgBIAAgBIABAAIAAgBIAAgBIAAAAIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIABgBIAAAAQACgEADAAIHPAAQAFAAAAAGIAAAdIAAAAIAAANIAAAAIAAALQgBAGgFAAg");
	this.shape_147.setTransform(539.05,476.875);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#ACB6BF").s().p("AjnAQQgFAAAAgFIAAgVQAAgFAFAAIHPAAQAGAAAAAFIAAAVQAAAFgGAAg");
	this.shape_148.setTransform(489.85,475.225);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#63717F").s().p("AjuAhQgFAAAAgGIAAgWIAAgCIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIABgBIAAAAIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAAAIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABgBIAAAAIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAAAIABgBIAAAAQACgEADAAIHPAAQAFAAAAAGIAAAVIAAADIAAAAIgBABIAAAAIAAABIAAAAIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAABIAAAAIgBABIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBABIAAAAIAAAAIAAABIgBABIAAAAIAAABIAAABIgBAAIAAABIAAAAIAAABIgBABIAAAAIAAABIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAABIAAAAIgBABIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABQgBAEgEAAg");
	this.shape_149.setTransform(489.175,476.875);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#ACB6BF").s().p("AjnAQQgGAAABgFIAAgVQgBgFAGAAIHPAAQAGAAAAAFIAAAVQAAAFgGAAg");
	this.shape_150.setTransform(439.8,475.225);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#63717F").s().p("AjqAeQgGAAAAgFIAAgXIABAAIAAgCIAAAAIAAgBIABgBIAAgCIAAAAIAAgCIABAAIAAgCIAAAAIAAgCIABgBIAAgBIAAgBIAAgBIABAAIAAgCIAAgBIAAgCIABAAIAAgCIAAAAIAAgCIABAAIAAgCQABgEAEgBIHPAAQAGABAAAFIAAAXIgBAAIAAABIAAABIAAACIgBAAIAAABIAAABIAAABIgBABIAAACIAAAAIAAADIgBAAIAAABIAAAAIAAACIgBABIAAACIAAAAIAAACIgBABIAAABIAAAAIAAACIgBAAIAAACQgBAEgEAAg");
	this.shape_151.setTransform(439.475,476.65);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#ACB6BF").s().p("AjoAQQgGAAABgFIADgVQABgFAFAAIHLAAQAFAAABAFIABAVQAAAFgGAAg");
	this.shape_152.setTransform(389.7673,475.225);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#63717F").s().p("Aj0AeQgFAAABgFIADgWIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAAAIABgBIAAgBIAAgBIAAAAIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgCIABAAIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBQACgEAEgBIHLAAQAEABABADIAAABIABAAIAAABIAAABIAAAAIABAAIAAABIAAABIAAAAIABABIAAABIAAAAIAAABIABABIAAABIAAAAIAAABIABAAIAAABIAAAAIAAABIABAAIAAABIAAABIAAAAIABABIAAABIAAAAIAAACIABAAIAAABIAAAAIAAABIABAAIAAABIAAAAIAAABIABAAIAAABIAAAAIAAABIABABIAAAAIAAAAIAAABIABADIABAVQAAAFgFAAg");
	this.shape_153.setTransform(389.7673,476.65);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#ACB6BF").s().p("AjqAQQgFAAABgFIAGgVQACgFAFAAIHLAAQAFAAAAAFIgCAVQAAAFgGAAg");
	this.shape_154.setTransform(339.7089,475.225);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#63717F").s().p("AjyAeQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIAAgEIAGgWIAAAAIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAAAIABgBIAAgBIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBQACgGAFAAIHKAAQAEABABADIAAACIABAAIAAACIAAAAIAAACIABAAIAAACIAAABIAAACIABAAIAAABIAAAAIAAACIABABIAAABIAAABIAAACIABAAIAAACIAAAAIAAACIABAAIAAACIAAAAIAAACIABAAIAAADIgCAVQAAAFgGAAg");
	this.shape_155.setTransform(339.4917,476.65);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#ACB6BF").s().p("AjqAQQgFAAABgFIAHgVQABgFAGAAIHKAAQAGAAgBAFIgCAVQAAAFgGAAg");
	this.shape_156.setTransform(289.9161,475.225);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#63717F").s().p("AjyAeQgFAAABgFIAHgWIAAAAIAAgBIABAAIAAgBIAAgBIAAAAIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgCIAAAAIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgCIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAAAQABgGAGAAIHKAAQAFABAAAEIAAABIAAAAIAAACIABAAIAAADIAAAAIAAADIABAAIAAACIAAABIAAACIABAAIAAADIAAAAIAAADIABAAIAAACIAAAAIAAACIABABIAAACIAAAAIAAACIgCAVQgBAFgFAAg");
	this.shape_157.setTransform(289.6417,476.65);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#ACB6BF").s().p("AjrAQQgFAAACgFIAHgVQACgFAGAAIHKAAQAGAAgBAFIgEAVQgBAFgFAAg");
	this.shape_158.setTransform(240.0398,475.225);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#63717F").s().p("Aj3AeQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAABgBIAIgWIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAAAIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAAAIABgBIAAAAIAAgBIAAAAIABgBIAAAAIAAAAIAAgBIABAAIAAgCIAAAAIAAgBIABgBIAAAAIABgBIAAgBIAAAAIAAAAIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABgBIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAAAIAAgBQACgEAFgBIHKAAQAEABABADIAAACIABAAIAAABIAAAAIAAABIABABIAAABIAAAAIAAABIABABIAAACIAAAAIAAABIABAAIAAABIAAABIAAABIABAAIAAABIAAABIAAACIABAAIAAABIAAAAIAAACIABAAIAAABIAAAAIAAABIABABIAAABIAAABIAAAAIABABIAAACIgEAWQgBAFgFAAg");
	this.shape_159.setTransform(239.6917,476.65);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#ACB6BF").s().p("AjrAQQgFAAABgFIAIgVQACgFAGAAIHKAAQAFAAAAAFIgEAVQgBAFgFAAg");
	this.shape_160.setTransform(190.3089,475.225);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#63717F").s().p("AjuAeQgEAAAAgDIAAgdIAIgWQACgGAGAAIHKAAQAEABAAADIABABIAAACIAAAAIAAACIABAAIAAACIAAAAIAAADIABAAIAAACIAAAAIAAACIABAAIAAADIAAAAIAAACIABABIAAACIAAAAIAAACIABAAIAAACIAAAAIAAABQAAAAABAAQAAABAAAAQAAAAAAAAQgBABAAAAIgDAWQgBAFgFAAg");
	this.shape_161.setTransform(190.625,476.65);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#ACB6BF").s().p("AjoAQQgGAAACgFIAGgVQACgFAGAAIHHAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIABAEIgEAVQgBAFgFAAg");
	this.shape_162.setTransform(140.3923,475.225);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#63717F").s().p("AjnAhQgDAAgBgEIAAgEIgBAAIAAgGIAAAAIAAgFIgBgBIAAgFIAAAAIAAgGIgBAAIAAgEQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIAHgXQACgFAFAAIHIAAQAFAAAAAFIAAAEIAAABIAAAFIABABIAAAFIAAAAIAAAFIABAAIAAAGIAAAAIAAAFIgDAWQgBAGgGAAg");
	this.shape_163.setTransform(140.525,476.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(1));

	// Base
	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#CCD1D6").s().p("Eg9IABfIgOgBQgzgFgygPQhSgYglgqIABhmQAGAJAdAJQA7ASB1AAMB8ngABQBegEAIgTIAEApQABAvgKAhQgCAFgFADQgbAQgqAMQhFAUhZAAg");
	this.shape_164.setTransform(414.7094,544.625);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#BFC5CC").s().p("Eg9/AF6QhygEgrgXQgVgMACgLID9qLQAMgeBbgOQAtgHArgBITOAAUBeOgAEACqAAEQBrADArAeQAWAQAAAOIDwKCQALAdhBANIhEAGg");
	this.shape_165.setTransform(414.5991,502.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_165},{t:this.shape_164}]}).wait(1));

	// white screen
	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("Eg6nAhgMAAAhC+MB1PAAAMAAABC+g");
	this.shape_166.setTransform(415.625,235.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_166).wait(1));

	// Shadow
	this.instance_2 = new lib.Bitmap3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-15.1,450.85,2.603,2.603);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.laptop_vector, new cjs.Rectangle(-15.1,0,874.6,583.6), null);


(lib.laptopshadow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.shadow.cache(-950,-145,1900,290,2)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Livello_1
	this.shadow = new lib.shadowcache();
	this.shadow.name = "shadow";
	this.shadow.parent = this;
	this.shadow.setTransform(474.9,72.2,1,1,0,0,0,474.9,72.2);

	this.timeline.addTween(cjs.Tween.get(this.shadow).wait(1));

}).prototype = getMCSymbolPrototype(lib.laptopshadow_1, new cjs.Rectangle(0,0,950,144.3), null);


(lib.laptop_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.laptop = new lib.laptop_vector();
	this.laptop.name = "laptop";
	this.laptop.parent = this;
	this.laptop.setTransform(0.2,-0.05,0.6058,0.6058,0,0,0,0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.laptop).wait(1));

}).prototype = getMCSymbolPrototype(lib.laptop_mc, new cjs.Rectangle(-9.1,0,529.8000000000001,353.5), null);


(lib.laptop_ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.laptop.cache(-560,-555,1120,1110,2)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgjIATlMAAAgnJMBGRAAAMAAAAnJg");
	mask.setTransform(251.125,140.375);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgmMAW0MAAAgtnMBMZAAAMAAAAtng");
	this.shape.setTransform(252.5,140.075);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.laptop = new lib.laptop_mc();
	this.laptop.name = "laptop";
	this.laptop.parent = this;
	this.laptop.setTransform(156.3,106.5,1,1,0,0,0,156.3,106.5);

	this.timeline.addTween(cjs.Tween.get(this.laptop).wait(1));

}).prototype = getMCSymbolPrototype(lib.laptop_ai, new cjs.Rectangle(-9.1,0,529.8000000000001,353.5), null);


(lib.graphsphone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		//number setup
		
		
		
		//txt setup
		this.txt1.textBaseline = "alphabetic";
		this.txt2.textBaseline = "alphabetic";
		
		this.txt4.textBaseline = "alphabetic";
		this.txt5.textBaseline = "alphabetic";
		this.txt6.textBaseline = "alphabetic";
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(1));

	// big number
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#357248").s().p("AjYEgIFWoLQg9AOhWAAIgTAAQAVAeAAAiQAAAwgiAmQghAmg3AAQgzAAgjgjQgjgkAAgyQAAgiAQgbQAQgcAdgRQAdgRAfAAQANAAAdAGQAvAKA0AAQAoAAAigFQAjgFA5gQIApAAIl5I/gAjDjRQgXAWABAgQgBAgAXAXQAXAWAfAAQAhAAAXgWQAWgXAAggQAAgggWgWQgXgXghAAQgfAAgXAXgAA3DoQgjgkAAgyQAAgzAjgjQAlgkAyAAQAyAAAjAkQAkAjAAAzQAAAygkAkQgjAjgyAAQgyAAglgjgABXBbQgWAWgBAhQABAgAWAWQAXAXAgAAQAfAAAXgXQAXgWAAggQAAghgXgWQgXgXgfAAQggAAgXAXg");
	this.shape.setTransform(127.95,178.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#357248").s().p("AhyDpQgsgngOhKIAzAAQANAzAZAWQAgAcAxAAQA4AAAhghQAjgjAAgsQAAgfgRgaQgRgbgdgNQgcgMg8gEIAAgvQAjAAAdgMQAdgNAOgTQAMgUAAgWQAAgigagZQgbgZgoAAQgiAAgYATQgYATgRAtIg1AAQAPg/AogjQApgiA4AAQAnAAAjASQAjATATAeQAUAggBAiQAABChCAoQAlAPAYAcQAiApAAAzQAAAsgYAoQgXAognAWQgpAVgwAAQhDAAgtgmg");
	this.shape_1.setTransform(80,177.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#357248").s().p("AiuEJIDEjWQA8g/ATgfQASgfAAgjQAAgrghggQghgfgvAAQgwgBghAiQghAhgEA8IgyAAQAChNAxgxQAxgxBHAAQBHAAAsAuQAsAuAAA+QAAAtgUAmQgVAmg9BBIiACLIDuAAIAAAyg");
	this.shape_2.setTransform(39.95,177.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#357248").s().p("ABDEJIAAh4Ij2AAIEfmZIAKAAIAAFnIA+AAIAAAyIg+AAIAAB4gAhWBfICZAAIAAjYg");
	this.shape_3.setTransform(80.05,177.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#357248").s().p("AhQD7QglgUgUgmQgWglAAgqQABghANgiQAMgkAhgvICcjqIArAbIiLDUQAcgKAXAAQA/AAArAsQArAsAABBQAAAtgWAkQgUAkgmAWQgnAUgqAAQgrABgkgVgAhMAkQggAfAAAtQAAAuAgAfQAfAgAtAAQAtAAAfggQAhgfgBguQABgtghgfQgfgggtgBQgsABggAgg");
	this.shape_4.setTransform(80.95,177.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#357248").s().p("AjYEgIFXoLQg+AOhXAAIgTAAQAWAeAAAiQAAAwghAmQgiAmg3AAQgzAAgjgjQgjgkAAgyQAAgiAQgbQAQgcAdgRQAdgRAfAAQANAAAeAGQAtAKA1AAQAnAAAkgFQAigFA4gQIAqAAIl4I/gAjDjRQgWAWgBAgQABAgAWAXQAXAWAgAAQAfAAAXgWQAXgXAAggQAAgggXgWQgXgXgfAAQggAAgXAXgAA4DoQgkgkAAgyQAAgzAkgjQAjgkAzAAQAyAAAkAkQAjAjAAAzQAAAygjAkQgkAjgyAAQgzAAgjgjgABXBbQgXAWABAhQgBAgAXAWQAWAXAgAAQAhAAAWgXQAXgWAAggQAAghgXgWQgWgXghAAQggAAgWAXg");
	this.shape_5.setTransform(128.35,178.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#357248").s().p("AiuEJIDEjWQA8g/ASgfQATgfgBgjQABgrghggQgggfgwAAQgwgBghAiQghAhgEA8IgyAAQAChNAxgxQAxgxBHAAQBIAAArAuQAsAuABA+QgBAtgUAmQgWAmg8BBIiACLIDuAAIAAAyg");
	this.shape_6.setTransform(80.25,177.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#357248").s().p("AhyDpQgsgngOhKIAzAAQANAzAZAWQAgAcAxAAQA4AAAhghQAjgjAAgsQAAgfgRgaQgSgbgcgNQgdgMg7gEIAAgvQAjAAAdgMQAdgNANgTQAOgUAAgWQAAgigbgZQgcgZgoAAQghAAgYATQgZATgQAtIg1AAQAPg/AogjQApgiA3AAQAoAAAjASQAjATATAeQAUAgAAAiQAABChDAoQAlAPAYAcQAiApAAAzQAAAsgYAoQgXAogoAWQgoAVgxAAQhCAAgtgmg");
	this.shape_7.setTransform(40.5,177.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#357248").s().p("Ah0DiQgsgmgIg9IA1AAQAGAdAOAUQAOASAYALQAYAMAaAAQAyAAAkgnQAlgmAAg6QAAg0ghggQghghg2AAQguAAhBAcIAwkBIDfAAIAAAxIi3AAIgaCNQAigKAaAAQBGAAAuAvQAuAvAABJQAAAzgXArQgYAqgoAXQgoAXg0AAQg/AAgrgng");
	this.shape_8.setTransform(79.975,178.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#357248").s().p("AhyDpQgtgngNhKIAyAAQAOAzAZAWQAgAcAyAAQA2AAAjghQAigjAAgsQAAgfgRgaQgSgbgcgNQgdgMg6gEIAAgvQAiAAAdgMQAdgNAOgTQANgUgBgWQABgigbgZQgbgZgoAAQgiAAgYATQgZATgQAtIg1AAQAOg/ApgjQApgiA4AAQAnAAAjASQAjATATAeQATAgAAAiQAABChCAoQAlAPAYAcQAiApAAAzQAAAsgXAoQgXAogoAWQgpAVgwAAQhDAAgtgmg");
	this.shape_9.setTransform(40.1,177.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#357248").s().p("ABDEJIAAh4Ij2AAIEfmZIAKAAIAAFnIA/AAIAAAyIg/AAIAAB4gAhWBfICZAAIAAjYg");
	this.shape_10.setTransform(40.15,177.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#357248").s().p("AhcDzQgngdgWg3QgXg6ABhlQAAhlAVg4QAWg4AogdQAogdAyABQAxAAApAcQApAdAYA7QAYA5gBBhQABBhgYA6QgYA6gpAeQgpAcgxAAQgyABgogdgAhBjGQgeAWgQAtQgQAtAABXQAABXAQAuQAPAtAfAWQAeAYAjAAQAhAAAegXQAegWAQguQATg3AAhOQAAhNgRgyQgRgygfgWQgfgYggAAQgjAAgeAYg");
	this.shape_11.setTransform(80.1,177.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#357248").s().p("AhQD7QglgUgVgmQgUglAAgqQgBghANgiQANgkAhgvICdjqIAqAbIiLDUQAcgKAYAAQA9AAAsAsQAqAsAABBQABAtgWAkQgUAkgnAWQglAUgsAAQgqABgkgVgAhMAkQggAfAAAtQAAAuAgAfQAgAgAsAAQAtAAAfggQAggfABguQgBgtgggfQgfgggtgBQgtABgfAgg");
	this.shape_12.setTransform(41.05,177.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#357248").s().p("AiaDzIDtnKIj2AAIAAgxIFHAAIkUIRg");
	this.shape_13.setTransform(41.8,178.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#357248").s().p("AAPEDIAAnSIhQAAIAegzIBlAAIAAIFg");
	this.shape_14.setTransform(77.025,177.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#357248").s().p("AivEJIDFjWQA8g/ATgfQARgfABgjQgBgrggggQghgfgvAAQgxgBggAiQghAhgFA8IgxAAQAChNAxgxQAxgxBHAAQBIAAAsAuQArAuAAA+QABAtgWAmQgUAmg9BBIiACLIDtAAIAAAyg");
	this.shape_15.setTransform(79.85,177.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_4},{t:this.shape}]},3).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},3).to({state:[{t:this.shape_9},{t:this.shape_8,p:{x:79.975}},{t:this.shape}]},3).to({state:[{t:this.shape_10},{t:this.shape_4},{t:this.shape}]},5).to({state:[{t:this.shape_8,p:{x:40.075}},{t:this.shape_11},{t:this.shape}]},4).to({state:[{t:this.shape_12},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_13},{t:this.shape_11},{t:this.shape}]},3).to({state:[{t:this.shape_13},{t:this.shape_14},{t:this.shape}]},5).to({state:[{t:this.shape_13},{t:this.shape_15},{t:this.shape}]},4).to({state:[{t:this.shape_13},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_13},{t:this.shape_3},{t:this.shape}]},1).wait(1));

	// pie white
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AliNJQikhGh+h+Qh+h+hFikQhIipAAi6QAAi5BIipQBFikB+h+QB+h+CkhGQCqhHC4AAQC6AACpBHQCkBGB+B+QB+B+BGCkQBHCpAAC5QAAC6hHCpQhGCkh+B+Qh+B+ikBGQipBHi6AAQi4AAiqhHg");
	this.shape_16.setTransform(86.8512,174.6041,0.9096,0.9096);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(40));

	// pie mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AqcS4MAAAglvIU5AAMAAAAlvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:19.825,y:173.425}).wait(19).to({graphics:null,x:0,y:0}).wait(21));

	// pie animation 1
	this.instance = new lib.halfpie();
	this.instance.parent = this;
	this.instance.setTransform(86.4,174.75,1,1,99.6975,0,0,118.1,118.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:118,regY:118.2,rotation:0,x:87.5,y:175.45},19).wait(21));

	// pie animation 2
	this.instance_1 = new lib.halfpie();
	this.instance_1.parent = this;
	this.instance_1.setTransform(87.5,175.45,1,1,0,0,0,118,118.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({rotation:-82.4525,x:87.6,y:175.4},20,cjs.Ease.quartOut).wait(1));

	// pie bg
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#357347").s().p("An1SlQjnhiizizQizizhijnQhljwAAkGQAAkFBljwQBijoCziyQCzizDnhiQDvhlEGAAQEGAADwBlQDoBiCyCzQCyCyBiDoQBmDwAAEFQAAEGhmDwQhiDniyCzQiyCzjoBiQjwBlkGAAQkGAAjvhlg");
	this.shape_17.setTransform(86.8512,174.6041,0.9096,0.9096);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(40));

	// bg
	this.txt2 = new cjs.Text("Percentage of income spent", "15px 'Segoe Pro'", "#B7B2A6");
	this.txt2.name = "txt2";
	this.txt2.lineHeight = 22;
	this.txt2.parent = this;
	this.txt2.setTransform(-30.85,31.6);

	this.txt1 = new cjs.Text("Budget Overview", "34px 'Segoe Pro'", "#357147");
	this.txt1.name = "txt1";
	this.txt1.lineHeight = 52;
	this.txt1.parent = this;
	this.txt1.setTransform(-30.85,10.75);

	this.txt6 = new cjs.Text("Total monthly expenses", "18px 'Segoe Pro'", "#357147");
	this.txt6.name = "txt6";
	this.txt6.lineHeight = 28;
	this.txt6.parent = this;
	this.txt6.setTransform(-32.15,409.1);

	this.txt5 = new cjs.Text("$3,750", "29px 'Segoe Pro'", "#357147");
	this.txt5.name = "txt5";
	this.txt5.lineHeight = 45;
	this.txt5.parent = this;
	this.txt5.setTransform(-30.55,370.1);

	this.txt4 = new cjs.Text("Total monthly income", "18px 'Segoe Pro'", "#357147");
	this.txt4.name = "txt4";
	this.txt4.lineHeight = 28;
	this.txt4.parent = this;
	this.txt4.setTransform(-30.55,332);

	this.instance_2 = new lib.ClipGroup_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(469.5,183.5,1,1,0,0,0,469.5,183.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.txt4},{t:this.txt5},{t:this.txt6},{t:this.txt1},{t:this.txt2}]}).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.3,-145.9,1018.3,613.7);


(lib.graphs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// small number
	this.smallNumber = new cjs.Text("$2,786", "29px 'Segoe Pro'", "#357147");
	this.smallNumber.name = "smallNumber";
	this.smallNumber.lineHeight = 45;
	this.smallNumber.parent = this;
	this.smallNumber.setTransform(360.8,177);

	this.timeline.addTween(cjs.Tween.get(this.smallNumber).wait(1));

	// chart
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4CA067").s().p("AnTMsIAA5XIOnAAIAAZXg");
	this.shape.setTransform(870.3883,213.9887,1,1.3003);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// big number
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#357248").s().p("AjqE4IFzo3QhCAQhfAAIgUAAQAXAgAAAlQAAA0gkApQgkApg8AAQg3AAgmgmQgmgmAAg3QAAglARgdQASgeAfgTQAggSAhAAQAOAAAgAHQAyAKA5AAQArAAAlgFQAngGA8gRIAtAAImYJvgAjTjjQgZAYAAAjQAAAjAZAYQAYAZAjAAQAiAAAZgZQAYgYAAgjQAAgjgYgYQgZgZgiAAQgjAAgYAZgAA8D7QgmgnAAg2QAAg3AmgmQAngnA3AAQA2AAAnAnQAmAmAAA3QAAA2gmAnQgnAng2AAQg3AAgngngABeBiQgYAZAAAjQAAAjAYAYQAZAYAiAAQAjAAAZgYQAYgYAAgjQAAgjgYgZQgZgYgjAAQgiAAgZAYg");
	this.shape_1.setTransform(173.275,213.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#357248").s().p("ABIEfIAAiCIkLAAIE3m7IAMAAIAAGGIBEAAIAAA1IhEAAIAACCgAhdBoIClAAIAAjrg");
	this.shape_2.setTransform(121.375,211.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#357248").s().p("AioEHIECnwIkLAAIAAg1IFjAAIkrI9g");
	this.shape_3.setTransform(79.975,213.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// pie white
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AliNJQikhGh+h+Qh+h+hFikQhIipAAi6QAAi5BIipQBFikB+h+QB+h+CkhGQCqhHC4AAQC6AACpBHQCkBGB+B+QB+B+BGCkQBHCpAAC5QAAC6hHCpQhGCkh+B+Qh+B+ikBGQipBHi6AAQi4AAiqhHg");
	this.shape_4.setTransform(128.7505,209.2482,0.9853,0.9853);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// pie animation 1
	this.instance = new lib.halfpie();
	this.instance.parent = this;
	this.instance.setTransform(129.4,210.15,1.0833,1.0833,0,0,0,118,118.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// pie animation 2
	this.instance_1 = new lib.halfpie();
	this.instance_1.parent = this;
	this.instance_1.setTransform(129.6,210.1,1.0833,1.0833,-82.453,0,0,118,118.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// pie bg
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#357347").s().p("An1SlQjnhiizizQizizhijnQhljwAAkGQAAkFBljwQBijoCziyQCzizDnhiQDvhlEGAAQEGAADwBlQDoBiCyCzQCyCyBiDoQBmDwAAEFQAAEGhmDwQhiDniyCzQiyCzjoBiQjwBlkGAAQkGAAjvhlg");
	this.shape_5.setTransform(128.7505,209.2482,0.9853,0.9853);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// bg
	this.txt3 = new cjs.Text("Summary", "18px 'Segoe Pro'", "#357147");
	this.txt3.name = "txt3";
	this.txt3.lineHeight = 28;
	this.txt3.parent = this;
	this.txt3.setTransform(360.8,22.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E2DDD1").p("AR4AAMgjvAAA");
	this.shape_6.setTransform(824.575,322.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#E2DDD1").p("AAA4eMAAAAw8");
	this.shape_7.setTransform(710.15,165.5);

	this.txt2 = new cjs.Text("Percentage of income spent", "15px 'Segoe Pro'", "#B7B2A6");
	this.txt2.name = "txt2";
	this.txt2.lineHeight = 22;
	this.txt2.parent = this;
	this.txt2.setTransform(0,57.25);

	this.txt1 = new cjs.Text("Budget Overview", "34px 'Segoe Pro'", "#357147");
	this.txt1.name = "txt1";
	this.txt1.lineHeight = 52;
	this.txt1.parent = this;
	this.txt1.setTransform(0,25.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4CA067").s().p("AhBBCIAAiDICDAAIAACDg");
	this.shape_8.setTransform(833.45,359.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#357347").s().p("AhBBCIAAiDICDAAIAACDg");
	this.shape_9.setTransform(726.625,359.05);

	this.txt21 = new cjs.Text("Expense", "18px 'Segoe Pro'", "#B7B2A6");
	this.txt21.name = "txt21";
	this.txt21.lineHeight = 28;
	this.txt21.parent = this;
	this.txt21.setTransform(845.9,367.9);

	this.txt20 = new cjs.Text("Income", "18px 'Segoe Pro'", "#B7B2A6");
	this.txt20.name = "txt20";
	this.txt20.lineHeight = 28;
	this.txt20.parent = this;
	this.txt20.setTransform(739.4,367.25);

	this.txt19 = new cjs.Text("$0", "14px 'Segoe Pro'", "#357147");
	this.txt19.name = "txt19";
	this.txt19.lineHeight = 21;
	this.txt19.parent = this;
	this.txt19.setTransform(688.7,324.65);

	this.txt18 = new cjs.Text("$500", "14px 'Segoe Pro'", "#357147");
	this.txt18.name = "txt18";
	this.txt18.lineHeight = 21;
	this.txt18.parent = this;
	this.txt18.setTransform(674.7,287.7);

	this.txt17 = new cjs.Text("$1,000", "14px 'Segoe Pro'", "#357147");
	this.txt17.name = "txt17";
	this.txt17.lineHeight = 21;
	this.txt17.parent = this;
	this.txt17.setTransform(664.7,250.8);

	this.txt16 = new cjs.Text("$1,500", "14px 'Segoe Pro'", "#357147");
	this.txt16.name = "txt16";
	this.txt16.lineHeight = 21;
	this.txt16.parent = this;
	this.txt16.setTransform(664.7,213.85);

	this.txt15 = new cjs.Text("$2,000", "14px 'Segoe Pro'", "#357147");
	this.txt15.name = "txt15";
	this.txt15.lineHeight = 21;
	this.txt15.parent = this;
	this.txt15.setTransform(664.7,176.9);

	this.txt14 = new cjs.Text("$2,500", "14px 'Segoe Pro'", "#357147");
	this.txt14.name = "txt14";
	this.txt14.lineHeight = 21;
	this.txt14.parent = this;
	this.txt14.setTransform(664.7,139.95);

	this.txt13 = new cjs.Text("$3,000", "14px 'Segoe Pro'", "#357147");
	this.txt13.name = "txt13";
	this.txt13.lineHeight = 21;
	this.txt13.parent = this;
	this.txt13.setTransform(664.7,103.05);

	this.txt12 = new cjs.Text("$3,500", "14px 'Segoe Pro'", "#357147");
	this.txt12.name = "txt12";
	this.txt12.lineHeight = 21;
	this.txt12.parent = this;
	this.txt12.setTransform(664.7,66.1);

	this.txt11 = new cjs.Text("$4,000", "14px 'Segoe Pro'", "#357147");
	this.txt11.name = "txt11";
	this.txt11.lineHeight = 21;
	this.txt11.parent = this;
	this.txt11.setTransform(664.7,29.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#357347").s().p("AnTWbMAAAgs1IOnAAMAAAAs1g");
	this.shape_10.setTransform(776.725,176.05);

	this.txt10 = new cjs.Text("$414", "29px 'Segoe Pro'", "#357147");
	this.txt10.name = "txt10";
	this.txt10.lineHeight = 45;
	this.txt10.parent = this;
	this.txt10.setTransform(360.8,340.9);

	this.txt9 = new cjs.Text("Cash balance", "18px 'Segoe Pro'", "#357147");
	this.txt9.name = "txt9";
	this.txt9.lineHeight = 28;
	this.txt9.parent = this;
	this.txt9.setTransform(360.8,312.8);

	this.txt8 = new cjs.Text("$550", "29px 'Segoe Pro'", "#357147");
	this.txt8.name = "txt8";
	this.txt8.lineHeight = 45;
	this.txt8.parent = this;
	this.txt8.setTransform(360.8,258.1);

	this.txt7 = new cjs.Text("Total monthly savings", "18px 'Segoe Pro'", "#357147");
	this.txt7.name = "txt7";
	this.txt7.lineHeight = 28;
	this.txt7.parent = this;
	this.txt7.setTransform(360.8,230);

	this.txt6 = new cjs.Text("Total monthly expenses", "18px 'Segoe Pro'", "#357147");
	this.txt6.name = "txt6";
	this.txt6.lineHeight = 28;
	this.txt6.parent = this;
	this.txt6.setTransform(360.8,147.2);

	this.txt5 = new cjs.Text("$3,750", "29px 'Segoe Pro'", "#357147");
	this.txt5.name = "txt5";
	this.txt5.lineHeight = 45;
	this.txt5.parent = this;
	this.txt5.setTransform(360.8,92.45);

	this.txt4 = new cjs.Text("Total monthly income", "18px 'Segoe Pro'", "#357147");
	this.txt4.name = "txt4";
	this.txt4.lineHeight = 28;
	this.txt4.parent = this;
	this.txt4.setTransform(360.8,64.35);

	this.instance_2 = new lib.ClipGroup_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(469.5,183.5,1,1,0,0,0,469.5,183.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.txt4},{t:this.txt5},{t:this.txt6},{t:this.txt7},{t:this.txt8},{t:this.txt9},{t:this.txt10},{t:this.shape_10},{t:this.txt11},{t:this.txt12},{t:this.txt13},{t:this.txt14},{t:this.txt15},{t:this.txt16},{t:this.txt17},{t:this.txt18},{t:this.txt19},{t:this.txt20},{t:this.txt21},{t:this.shape_9},{t:this.shape_8},{t:this.txt1},{t:this.txt2},{t:this.shape_7},{t:this.shape_6},{t:this.txt3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.graphs, new cjs.Rectangle(-14.1,0,954.1,394.3), null);


(lib.excelphoneversion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//top
		
		
		this.topTxt3.textBaseline = "alphabetic";
		this.topTxt5.textBaseline = "alphabetic";
		
		
		
		//cell
		this.cellTxt1.textBaseline = "alphabetic";
		this.cellTxt2.textBaseline = "alphabetic";
		this.cellTxt3.textBaseline = "alphabetic";
		this.cellTxt4.textBaseline = "alphabetic";
		this.cellTxt5.textBaseline = "alphabetic";
		this.cellTxt6.textBaseline = "alphabetic";
		this.cellTxt7.textBaseline = "alphabetic";
		this.cellTxt8.textBaseline = "alphabetic";
		this.cellTxt9.textBaseline = "alphabetic";
		this.cellTxt10.textBaseline = "alphabetic";
		this.cellTxt11.textBaseline = "alphabetic";
		this.cellTxt12.textBaseline = "alphabetic";
		this.cellTxt13.textBaseline = "alphabetic";
		this.cellTxt14.textBaseline = "alphabetic";
		this.cellTxt15.textBaseline = "alphabetic";
		this.cellTxt16.textBaseline = "alphabetic";
		this.cellTxt17.textBaseline = "alphabetic";
		this.cellTxt18.textBaseline = "alphabetic";
		this.cellTxt19.textBaseline = "alphabetic";
		this.cellTxt20.textBaseline = "alphabetic";
		this.cellTxt21.textBaseline = "alphabetic";
		this.cellTxt22.textBaseline = "alphabetic";
		this.cellTxt23.textBaseline = "alphabetic";
		this.cellTxt24.textBaseline = "alphabetic";
		this.cellTxt25.textBaseline = "alphabetic";
		this.cellTxt26.textBaseline = "alphabetic";
		this.cellTxt27.textBaseline = "alphabetic";
		this.cellTxt28.textBaseline = "alphabetic";
		this.cellTxt29.textBaseline = "alphabetic";
		this.cellTxt30.textBaseline = "alphabetic";
		this.cellTxt31.textBaseline = "alphabetic";
		this.cellTxt32.textBaseline = "alphabetic";
		this.cellTxt33.textBaseline = "alphabetic";
		this.cellTxt34.textBaseline = "alphabetic";
		this.cellTxt35.textBaseline = "alphabetic";
		this.cellTxt36.textBaseline = "alphabetic";
		this.cellTxt37.textBaseline = "alphabetic";
		this.cellTxt38.textBaseline = "alphabetic";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	mask.setTransform(683,384);

	// FlashAICB
	this.topTxt5 = new cjs.Text("Personal Care", "18px 'Segoe Pro'", "#999999");
	this.topTxt5.name = "topTxt5";
	this.topTxt5.lineHeight = 27;
	this.topTxt5.parent = this;
	this.topTxt5.setTransform(53.2,103.9);

	this.cellTxt18 = new cjs.Text("1", "14px 'Segoe Pro'", "#212120");
	this.cellTxt18.name = "cellTxt18";
	this.cellTxt18.lineHeight = 21;
	this.cellTxt18.parent = this;
	this.cellTxt18.setTransform(9.95,151.05);

	this.cellTxt19 = new cjs.Text("2", "14px 'Segoe Pro'", "#212120");
	this.cellTxt19.name = "cellTxt19";
	this.cellTxt19.lineHeight = 21;
	this.cellTxt19.parent = this;
	this.cellTxt19.setTransform(10,175.65);

	this.cellTxt20 = new cjs.Text("3", "14px 'Segoe Pro'", "#212120");
	this.cellTxt20.name = "cellTxt20";
	this.cellTxt20.lineHeight = 21;
	this.cellTxt20.parent = this;
	this.cellTxt20.setTransform(10,201.05);

	this.cellTxt21 = new cjs.Text("4", "14px 'Segoe Pro'", "#212120");
	this.cellTxt21.name = "cellTxt21";
	this.cellTxt21.lineHeight = 21;
	this.cellTxt21.parent = this;
	this.cellTxt21.setTransform(9.65,226.4);

	this.cellTxt22 = new cjs.Text("5", "14px 'Segoe Pro'", "#212120");
	this.cellTxt22.name = "cellTxt22";
	this.cellTxt22.lineHeight = 21;
	this.cellTxt22.parent = this;
	this.cellTxt22.setTransform(9.3,251.4);

	this.cellTxt23 = new cjs.Text("6", "14px 'Segoe Pro'", "#212120");
	this.cellTxt23.name = "cellTxt23";
	this.cellTxt23.lineHeight = 21;
	this.cellTxt23.parent = this;
	this.cellTxt23.setTransform(10,276.35);

	this.cellTxt24 = new cjs.Text("7", "14px 'Segoe Pro'", "#212120");
	this.cellTxt24.name = "cellTxt24";
	this.cellTxt24.lineHeight = 21;
	this.cellTxt24.lineWidth = 8;
	this.cellTxt24.parent = this;
	this.cellTxt24.setTransform(10,301.4);

	this.cellTxt25 = new cjs.Text("8", "14px 'Segoe Pro'", "#212120");
	this.cellTxt25.name = "cellTxt25";
	this.cellTxt25.lineHeight = 21;
	this.cellTxt25.lineWidth = 8;
	this.cellTxt25.parent = this;
	this.cellTxt25.setTransform(10,325.95);

	this.cellTxt26 = new cjs.Text("9", "14px 'Segoe Pro'", "#212120");
	this.cellTxt26.name = "cellTxt26";
	this.cellTxt26.lineHeight = 21;
	this.cellTxt26.lineWidth = 8;
	this.cellTxt26.parent = this;
	this.cellTxt26.setTransform(10.4,351.35);

	this.cellTxt27 = new cjs.Text("10", "14px 'Segoe Pro'", "#212120");
	this.cellTxt27.name = "cellTxt27";
	this.cellTxt27.lineHeight = 21;
	this.cellTxt27.lineWidth = 15;
	this.cellTxt27.parent = this;
	this.cellTxt27.setTransform(6.2,376);

	this.cellTxt28 = new cjs.Text("11", "14px 'Segoe Pro'", "#212120");
	this.cellTxt28.name = "cellTxt28";
	this.cellTxt28.lineHeight = 21;
	this.cellTxt28.lineWidth = 15;
	this.cellTxt28.parent = this;
	this.cellTxt28.setTransform(5.85,401.4);

	this.cellTxt29 = new cjs.Text("12", "14px 'Segoe Pro'", "#212120");
	this.cellTxt29.name = "cellTxt29";
	this.cellTxt29.lineHeight = 21;
	this.cellTxt29.lineWidth = 15;
	this.cellTxt29.parent = this;
	this.cellTxt29.setTransform(6.2,426);

	this.cellTxt30 = new cjs.Text("13", "14px 'Segoe Pro'", "#212120");
	this.cellTxt30.name = "cellTxt30";
	this.cellTxt30.lineHeight = 21;
	this.cellTxt30.lineWidth = 15;
	this.cellTxt30.parent = this;
	this.cellTxt30.setTransform(5.85,451);

	this.cellTxt31 = new cjs.Text("14", "14px 'Segoe Pro'", "#212120");
	this.cellTxt31.name = "cellTxt31";
	this.cellTxt31.lineHeight = 21;
	this.cellTxt31.lineWidth = 15;
	this.cellTxt31.parent = this;
	this.cellTxt31.setTransform(5.85,476.8);

	this.cellTxt32 = new cjs.Text("15", "14px 'Segoe Pro'", "#212120");
	this.cellTxt32.name = "cellTxt32";
	this.cellTxt32.lineHeight = 21;
	this.cellTxt32.lineWidth = 15;
	this.cellTxt32.parent = this;
	this.cellTxt32.setTransform(5.85,501.4);

	this.cellTxt33 = new cjs.Text("16", "14px 'Segoe Pro'", "#212120");
	this.cellTxt33.name = "cellTxt33";
	this.cellTxt33.lineHeight = 21;
	this.cellTxt33.lineWidth = 15;
	this.cellTxt33.parent = this;
	this.cellTxt33.setTransform(6.2,526.4);

	this.cellTxt34 = new cjs.Text("17", "14px 'Segoe Pro'", "#212120");
	this.cellTxt34.name = "cellTxt34";
	this.cellTxt34.lineHeight = 21;
	this.cellTxt34.lineWidth = 15;
	this.cellTxt34.parent = this;
	this.cellTxt34.setTransform(6.2,551.4);

	this.cellTxt35 = new cjs.Text("18", "14px 'Segoe Pro'", "#212120");
	this.cellTxt35.name = "cellTxt35";
	this.cellTxt35.lineHeight = 21;
	this.cellTxt35.lineWidth = 15;
	this.cellTxt35.parent = this;
	this.cellTxt35.setTransform(6.2,576.4);

	this.cellTxt36 = new cjs.Text("19", "14px 'Segoe Pro'", "#212120");
	this.cellTxt36.name = "cellTxt36";
	this.cellTxt36.lineHeight = 21;
	this.cellTxt36.lineWidth = 15;
	this.cellTxt36.parent = this;
	this.cellTxt36.setTransform(6.2,601.4);

	this.cellTxt37 = new cjs.Text("20", "14px 'Segoe Pro'", "#212120");
	this.cellTxt37.name = "cellTxt37";
	this.cellTxt37.lineHeight = 21;
	this.cellTxt37.lineWidth = 15;
	this.cellTxt37.parent = this;
	this.cellTxt37.setTransform(5.85,626.35);

	this.cellTxt38 = new cjs.Text("21", "14px 'Segoe Pro'", "#212120");
	this.cellTxt38.name = "cellTxt38";
	this.cellTxt38.lineHeight = 21;
	this.cellTxt38.lineWidth = 15;
	this.cellTxt38.parent = this;
	this.cellTxt38.setTransform(6.2,651.75);

	this.cellTxt1 = new cjs.Text("A", "14px 'Segoe Pro'", "#212120");
	this.cellTxt1.name = "cellTxt1";
	this.cellTxt1.lineHeight = 21;
	this.cellTxt1.parent = this;
	this.cellTxt1.setTransform(58.8,128.7);

	this.cellTxt2 = new cjs.Text("B", "14px 'Segoe Pro'", "#212120");
	this.cellTxt2.name = "cellTxt2";
	this.cellTxt2.lineHeight = 21;
	this.cellTxt2.parent = this;
	this.cellTxt2.setTransform(134.15,128.65);

	this.cellTxt3 = new cjs.Text("C", "14px 'Segoe Pro'", "#212120");
	this.cellTxt3.name = "cellTxt3";
	this.cellTxt3.lineHeight = 21;
	this.cellTxt3.parent = this;
	this.cellTxt3.setTransform(208.75,128.3);

	this.cellTxt4 = new cjs.Text("D", "14px 'Segoe Pro'", "#212120");
	this.cellTxt4.name = "cellTxt4";
	this.cellTxt4.lineHeight = 21;
	this.cellTxt4.parent = this;
	this.cellTxt4.setTransform(283,128.3);

	this.cellTxt5 = new cjs.Text("E", "14px 'Segoe Pro'", "#212120");
	this.cellTxt5.name = "cellTxt5";
	this.cellTxt5.lineHeight = 21;
	this.cellTxt5.parent = this;
	this.cellTxt5.setTransform(359.55,128.3);

	this.cellTxt6 = new cjs.Text("F", "14px 'Segoe Pro'", "#212120");
	this.cellTxt6.name = "cellTxt6";
	this.cellTxt6.lineHeight = 21;
	this.cellTxt6.parent = this;
	this.cellTxt6.setTransform(434.85,127.9);

	this.cellTxt7 = new cjs.Text("G", "14px 'Segoe Pro'", "#212120");
	this.cellTxt7.name = "cellTxt7";
	this.cellTxt7.lineHeight = 21;
	this.cellTxt7.parent = this;
	this.cellTxt7.setTransform(507.95,128.3);

	this.cellTxt8 = new cjs.Text("H", "14px 'Segoe Pro'", "#212120");
	this.cellTxt8.name = "cellTxt8";
	this.cellTxt8.lineHeight = 21;
	this.cellTxt8.parent = this;
	this.cellTxt8.setTransform(582.2,128.65);

	this.cellTxt9 = new cjs.Text("I", "14px 'Segoe Pro'", "#212120");
	this.cellTxt9.name = "cellTxt9";
	this.cellTxt9.lineHeight = 21;
	this.cellTxt9.parent = this;
	this.cellTxt9.setTransform(660.2,129.45);

	this.cellTxt10 = new cjs.Text("J", "14px 'Segoe Pro'", "#212120");
	this.cellTxt10.name = "cellTxt10";
	this.cellTxt10.lineHeight = 21;
	this.cellTxt10.parent = this;
	this.cellTxt10.setTransform(734.4,128.3);

	this.cellTxt11 = new cjs.Text("K", "14px 'Segoe Pro'", "#212120");
	this.cellTxt11.name = "cellTxt11";
	this.cellTxt11.lineHeight = 21;
	this.cellTxt11.parent = this;
	this.cellTxt11.setTransform(808.25,128.65);

	this.cellTxt12 = new cjs.Text("L", "14px 'Segoe Pro'", "#212120");
	this.cellTxt12.name = "cellTxt12";
	this.cellTxt12.lineHeight = 21;
	this.cellTxt12.lineWidth = 7;
	this.cellTxt12.parent = this;
	this.cellTxt12.setTransform(883.55,128.3);

	this.cellTxt13 = new cjs.Text("M", "14px 'Segoe Pro'", "#212120");
	this.cellTxt13.name = "cellTxt13";
	this.cellTxt13.lineHeight = 21;
	this.cellTxt13.lineWidth = 13;
	this.cellTxt13.parent = this;
	this.cellTxt13.setTransform(955.5,128.3);

	this.cellTxt14 = new cjs.Text("N", "14px 'Segoe Pro'", "#212120");
	this.cellTxt14.name = "cellTxt14";
	this.cellTxt14.lineHeight = 21;
	this.cellTxt14.lineWidth = 13;
	this.cellTxt14.parent = this;
	this.cellTxt14.setTransform(1031.65,128.3);

	this.cellTxt16 = new cjs.Text("P", "14px 'Segoe Pro'", "#212120");
	this.cellTxt16.name = "cellTxt16";
	this.cellTxt16.lineHeight = 21;
	this.cellTxt16.lineWidth = 13;
	this.cellTxt16.parent = this;
	this.cellTxt16.setTransform(1183.5,128.65);

	this.cellTxt15 = new cjs.Text("O", "14px 'Segoe Pro'", "#212120");
	this.cellTxt15.name = "cellTxt15";
	this.cellTxt15.lineHeight = 21;
	this.cellTxt15.lineWidth = 13;
	this.cellTxt15.parent = this;
	this.cellTxt15.setTransform(1106.65,128.3);

	this.cellTxt17 = new cjs.Text("Q", "14px 'Segoe Pro'", "#212120");
	this.cellTxt17.name = "cellTxt17";
	this.cellTxt17.lineHeight = 21;
	this.cellTxt17.lineWidth = 13;
	this.cellTxt17.parent = this;
	this.cellTxt17.setTransform(1256.65,128.65);

	this.topTxt3 = new cjs.Text("Fitness Vision – Saved to OneDrive", "13px 'Segoe Pro'", "#FFFFFF");
	this.topTxt3.name = "topTxt3";
	this.topTxt3.lineHeight = 20;
	this.topTxt3.parent = this;
	this.topTxt3.setTransform(122.6,36);

	var maskedShapeInstanceList = [this.topTxt5,this.cellTxt18,this.cellTxt19,this.cellTxt20,this.cellTxt21,this.cellTxt22,this.cellTxt23,this.cellTxt24,this.cellTxt25,this.cellTxt26,this.cellTxt27,this.cellTxt28,this.cellTxt29,this.cellTxt30,this.cellTxt31,this.cellTxt32,this.cellTxt33,this.cellTxt34,this.cellTxt35,this.cellTxt36,this.cellTxt37,this.cellTxt38,this.cellTxt1,this.cellTxt2,this.cellTxt3,this.cellTxt4,this.cellTxt5,this.cellTxt6,this.cellTxt7,this.cellTxt8,this.cellTxt9,this.cellTxt10,this.cellTxt11,this.cellTxt12,this.cellTxt13,this.cellTxt14,this.cellTxt16,this.cellTxt15,this.cellTxt17,this.topTxt3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.topTxt3},{t:this.cellTxt17},{t:this.cellTxt15},{t:this.cellTxt16},{t:this.cellTxt14},{t:this.cellTxt13},{t:this.cellTxt12},{t:this.cellTxt11},{t:this.cellTxt10},{t:this.cellTxt9},{t:this.cellTxt8},{t:this.cellTxt7},{t:this.cellTxt6},{t:this.cellTxt5},{t:this.cellTxt4},{t:this.cellTxt3},{t:this.cellTxt2},{t:this.cellTxt1},{t:this.cellTxt38},{t:this.cellTxt37},{t:this.cellTxt36},{t:this.cellTxt35},{t:this.cellTxt34},{t:this.cellTxt33},{t:this.cellTxt32},{t:this.cellTxt31},{t:this.cellTxt30},{t:this.cellTxt29},{t:this.cellTxt28},{t:this.cellTxt27},{t:this.cellTxt26},{t:this.cellTxt25},{t:this.cellTxt24},{t:this.cellTxt23},{t:this.cellTxt22},{t:this.cellTxt21},{t:this.cellTxt20},{t:this.cellTxt19},{t:this.cellTxt18},{t:this.topTxt5}]}).wait(1));

	// FlashAICB
	this.instance = new lib.phonetopbar();
	this.instance.parent = this;
	this.instance.setTransform(22.3,1.05,0.57,0.57);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjyB0IAAjnIHOAAIAABdIAXAAIAAAtIgXAAIAABdgAjbBcIGfAAIAAi3ImfAAgAjEBGIAAiLIDnAAIAACLg");
	this.shape.setTransform(405.4441,13.3092,0.49,0.49);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AB0B0IAAjnIAuAAIAADngAAuB0IAAi5IAuAAIAAC5gAgWB0IAAiKIAtAAIAACKgAhcB0IAAhdIAvAAIAABdgAihB0IAAguIAuAAIAAAug");
	this.shape_1.setTransform(11.6904,11.2629,0.46,0.46);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiJC4IAAgXIChAAQAPAAAQgEQAQgFALgHQAOgHAKgLQALgLAHgMQAIgOADgOQAFgOAAgRQAAgPgFgPQgDgPgIgMQgHgMgLgLQgKgLgOgHQgLgHgQgFQgQgEgPAAIiTAAIBNBMIgOANIhmhkIBmhnIAOAOIhNBNICTAAQAagBAbALQAYAKAVAUQAUAUAKAZQALAZAAAbQAAAUgFARQgGASgIAQQgJAPgNANQgNANgPAIQgOAJgTAGQgRAEgUAAg");
	this.shape_2.setTransform(205.4251,56.2251,0.6805,0.6807);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAuBDIhwhvQgEgFAAgGQAAgGAEgFQAFgEAGAAQAGAAAEAEIBwBvQAEAFAAAGQAAAGgEAFQgEAEgHAAQgGAAgEgEg");
	this.shape_3.setTransform(312.491,64.7053,0.5689,0.5689);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiECFQg4g2AAhPQAAhNA4g3QA2g4BOAAQBOAAA3A4QA4A3AABNQAABPg4A2Qg3A4hOAAQhOAAg2g4gAhvhvQgvAuAABBQAABCAvAuQAuAvBBAAQBCAAAugvQAvguAAhCQAAhBgvguQgugvhCAAQhBAAguAvg");
	this.shape_4.setTransform(302.2515,54.4515,0.5689,0.5689);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABFAWIgIgGIgFgHQgCgFAAgEIACgIIAFgHQADgDAFgCQADgCAGAAQAFAAAEACQAEACADADQADADACAEQACAEAAAEQAAAFgCAEQgCAFgDACIgHAGIgJABQgFAAgEgBgAgIAWIgHgGQgEgCgBgFQgCgEAAgFQAAgEACgEQACgEADgDQACgDAFgCQAEgCAEAAQAFAAAEACQAFACACADIAFAHIACAIQAAAFgCAEIgFAHIgHAGQgEABgFAAIgIgBgAhWAWIgHgGIgFgHQgCgEAAgFIACgIIAFgHQACgDAFgCQAEgCAFAAQAFAAAEACQAFACACADQAEADABAEQACAEAAAEQAAAFgCAEQgBAFgEACIgHAGIgJABQgFAAgEgBg");
	this.shape_5.setTransform(402.281,56.2113);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AjYDEIAAkXIAcAAIAAD7IEXAAIAAgcIAcgcIAABUgAA/AcQgcAAgbAGQgYAFgbALQgZALgXAQQgWAQgTATIAAgcQAAgcAHgYQAHgYANgWQALgTATgVQATgRAVgNQAVgMAZgIQAagHAaAAIAAhUICaCaIiaCZgABbhTIgzACQgJABgLADQgMACgKAFQgRAHgSAOQgPAKgOASQgPARgGAQQgJASgFAUQAmgZApgMQAqgNArAAIAcAAIAAAsIBWhVIhWhWg");
	this.shape_6.setTransform(354.6992,56.2,0.6382,0.6378);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhvDMIDhjhQAKgJALgEQAKgEAOAAQAOAAALAFQAMAFAIAHQAIAJAFALQAFAJAAAOQAAANgFALQgFANgJAIIjhDiIh2AdgACWACIgHAEIjZDaIgLArIArgLIDZjZQAGgHAAgKQAAgKgGgFQgGgGgKAAgAjdApIB5lqIAoAAIBnE3IghAgIgUg9IiMAAIgbBQgAiJhPIByAAIg5iqg");
	this.shape_7.setTransform(257.4914,56.2308,0.51,0.51);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhiAAIC1i1IAQARIikCkICkCmIgQAPg");
	this.shape_8.setTransform(18.8636,56.2233,0.69,0.69);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AuLDgIAAm/IcWAAIAAG/g");
	this.shape_9.setTransform(233.2946,756.1295,0.1653,0.1116);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgSBIQgKgEgGgHQgHgHgEgJQgEgJAAgLQAAgNAHgMIAqhLIArBKQADAEACAIQACAGAAAIQAAAKgEAJQgEAJgGAIQgIAHgIAEQgIAEgMAAQgKAAgIgEg");
	this.shape_10.setTransform(242.0217,746.2399,0.5795,0.5795);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AiFAeIBwhwIAAgnQAAgFADgHQADgHAEgDQAFgGAFgBQAGgDAGAAQAGAAAGADQAGABAFAGQAFAFACAFQACAHAAAFIAABtIgVAAIAAhtQAAgEgEgDQgDgDgEAAQgFAAgDADQgDAEAAADIAAAwIhnBnIBdBdIByhyIgkgjIAPgPIAzAyIiQCRg");
	this.shape_11.setTransform(233.8798,739.4743,0.5795,0.5795);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgKApQgFgCgEgEIgGgJQgCgFAAgHQAAgIAEgGIAXgqIAYApQAEAGAAAIQAAAFgCAHQgCAGgEADQgDAFgFACQgFACgHAAQgFAAgFgCg");
	this.shape_12.setTransform(426.8754,613.5754);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ABFAWIgIgGIgFgHQgCgFAAgEIACgIIAFgHQADgDAFgCQADgCAGAAQAFAAAEACQAEACADADQADADACAEQACAEAAAEQAAAFgCAEQgCAFgDACIgHAGIgJABQgFAAgEgBgAgIAWIgHgGQgEgCgBgFQgCgEAAgFQAAgEACgEQACgEADgDQACgDAFgCQAEgCAEAAQAFAAAEACQAFACACADIAFAHIACAIQAAAFgCAEIgFAHIgHAGQgEABgFAAIgIgBgAhWAWIgHgGIgFgHQgCgEAAgFIACgIIAFgHQACgDAFgCQAEgCAFAAQAFAAAEACQAFACACADQAEADABAEQACAEAAAEQAAAFgCAEQgBAFgEACIgHAGIgJABQgFAAgEgBg");
	this.shape_13.setTransform(393.125,743.4);

	this.instance_1 = new lib.ClipGroup();
	this.instance_1.parent = this;
	this.instance_1.setTransform(302.1,743.45,1.3,1.3025,0,0,0,6.4,9.3);

	this.instance_2 = new lib.ClipGroup_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(167.2,744.1,1.0885,1.0895,0,0,0,14.1,9.8);

	this.instance_3 = new lib.ClipGroup_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(102.05,743.05,0.9618,0.9628,0,0,0,12.4,11.3);

	this.instance_4 = new lib.Path();
	this.instance_4.parent = this;
	this.instance_4.setTransform(92.65,740.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").p("AADAIIAAgKIgKAA");
	this.shape_14.setTransform(107.3503,740.9001);

	this.instance_5 = new lib.ClipGroup_4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(33.1,743.8,1.2542,1.2542,0,0,0,12.5,10.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8EB8A3").s().p("AgsAUIAAgnIBZAAIAAAng");
	this.shape_15.setTransform(36.2125,754.0791,1.2542,1.2542);

	this.instance_6 = new lib.ClipGroup_1_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(33.1,743.4,1.2542,1.2542,0,0,0,12.5,10.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#777777").ss(0.5).p("AAegbQABAAAAACIgCAHQAAABgBAAIgTAAQgIAigDAMQgMAngSAAQgLAAAAgIQAAgHAGAAQAFAAABAHQAAACACAAQAJAAAIglIAKgqIgRAAQgBAAAAgBIABgHQABgCABAAIARAAQAHgWAGgIQAIgKAKAAQANAAAAAJQAAAHgGAAQgFAAgBgGQAAgFgEAAQgGAAgFANQgCAFgEARg");
	this.shape_16.setTransform(25.9952,98.0506,1.659,1.659);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#777777").s().p("AgrA8QAAgIAGABQAFAAABAHQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAAAQAJAAAIglIAKgqIgRAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIABgHIACgBIARAAQAHgYAGgIQAIgJAKAAQANAAAAAJQAAAHgGAAQgFAAgBgHQAAgEgEAAQgGAAgFAMQgCAGgEASIATAAIABABIgCAHQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgTAAQgIAigDAMQgMAngSAAQgLAAAAgIg");
	this.shape_17.setTransform(25.9952,98.0506,1.659,1.659);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#777777").ss(0.8).p("AgCgXIADAFIADAKIAFgHQACgDACgCIAFgDIACAAQADAAABABIABADIAAADQgCABgCAAIgCAAQgCgBgBAAIgDABQgEADgEAIIAGAWIABABIADgCQACgCADgEIABABQgDAGgFAEQgDADgCAAQgDAAgCgEIgDgRQgJAOgEAEQgEADgCAAQgDAAgBgCIgCgDQAAgCACgBQAAgBACAAQACAAACACQABABABAAIACgBQADgDADgGIAGgJIgDgNQgCgEgCgBQgCgBgDAAIgDAAIAAgCg");
	this.shape_18.setTransform(32.6862,100.9976,1.659,1.659);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#777777").s().p("AADAVIgDgSQgIAPgFAEQgDADgDAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAIgCgDQAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAIADgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABIACAAIACAAQADgDADgGIAHgJIgEgNIgEgFIgFgBIgDAAIAAgCIAOgDIADAGIADAKIAFgHIAFgFIAEgDIACgBQABAAABABQAAAAABAAQAAAAABAAQAAABABAAIABADIgBACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCgBIgDgBIgDACQgEADgEAHIAGAXIABAAIADgBIAFgGIABABQgDAGgEAEIgGADQgCAAgDgEg");
	this.shape_19.setTransform(32.6727,101.0368,1.659,1.659);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#787878").s().p("AgigRIBFAAIgjAjg");
	this.shape_20.setTransform(1352.75,665.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#ABABAB").s().p("AhKBLIAAiVICVAAIAACVgAhABBICBAAIAAiBIiBAAg");
	this.shape_21.setTransform(1352.75,664.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhFBGIAAiLICLAAIAACLg");
	this.shape_22.setTransform(1352.75,664.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#787878").s().p("AgiASIAigjIAjAjg");
	this.shape_23.setTransform(1352.75,125.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#ABABAB").s().p("AhKBLIAAiVICVAAIAACVgAhABBICBAAIAAiBIiBAAg");
	this.shape_24.setTransform(1352.75,125.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhFBGIAAiLICLAAIAACLg");
	this.shape_25.setTransform(1352.75,125.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#ABABAB").s().p("AhKfhMAAAg/BICVAAMAAAA/BgAhAfXICBAAMAAAg+tIiBAAg");
	this.shape_26.setTransform(1352.75,334.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhFfcMAAAg+3ICLAAMAAAA+3g");
	this.shape_27.setTransform(1352.75,334.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#DBDBDB").s().p("EgBKAn4MAAAhPvICVAAMAAABPvg");
	this.shape_28.setTransform(1352.75,416.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgaADIAAgFIA1AAIAAAFg");
	this.shape_29.setTransform(239.425,14.725);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#257247").s().p("EhqtACoIAAlQMDVbAAAIAAFQg");
	this.shape_30.setTransform(224.0468,38.7751,0.328,2.3012);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BFBFBF").s().p("EhqtAAFIAAgJMDVbAAAIAAAJg");
	this.shape_31.setTransform(683,702.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("EhoXAAFIAAgJMDQvAAAIAAAJg");
	this.shape_32.setTransform(668.0102,701.8603);

	this.instance_7 = new lib.ClipGroup_6_0();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1299.25,134.3,1,1,0,0,0,0.5,10);

	this.instance_8 = new lib.ClipGroup_7_0();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1224.35,134.3,1,1,0,0,0,0.5,10);

	this.instance_9 = new lib.ClipGroup_8_0();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1149.4,134.3,1,1,0,0,0,0.5,10);

	this.instance_10 = new lib.ClipGroup_9_0();
	this.instance_10.parent = this;
	this.instance_10.setTransform(1074.45,134.3,1,1,0,0,0,0.5,10);

	this.instance_11 = new lib.ClipGroup_10_0();
	this.instance_11.parent = this;
	this.instance_11.setTransform(999.4,134.3,1,1,0,0,0,0.5,10);

	this.instance_12 = new lib.ClipGroup_11_0();
	this.instance_12.parent = this;
	this.instance_12.setTransform(924.45,134.3,1,1,0,0,0,0.5,10);

	this.instance_13 = new lib.ClipGroup_12_0();
	this.instance_13.parent = this;
	this.instance_13.setTransform(849.45,134.3,1,1,0,0,0,0.5,10);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D1D2D2").s().p("AgEBkIAAjHIAJAAIAADHg");
	this.shape_33.setTransform(774.5,134.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D1D2D2").s().p("AgEBkIAAjHIAJAAIAADHg");
	this.shape_34.setTransform(699.5,134.3);

	this.instance_14 = new lib.ClipGroup_13_0();
	this.instance_14.parent = this;
	this.instance_14.setTransform(624.45,134.3,1,1,0,0,0,0.5,10);

	this.instance_15 = new lib.ClipGroup_14_0();
	this.instance_15.parent = this;
	this.instance_15.setTransform(549.45,134.3,1,1,0,0,0,0.5,10);

	this.instance_16 = new lib.ClipGroup_15_0();
	this.instance_16.parent = this;
	this.instance_16.setTransform(475.45,134.3,1,1,0,0,0,0.5,10);

	this.instance_17 = new lib.ClipGroup_16_0();
	this.instance_17.parent = this;
	this.instance_17.setTransform(400.45,134.3,1,1,0,0,0,0.5,10);

	this.instance_18 = new lib.ClipGroup_17_0();
	this.instance_18.parent = this;
	this.instance_18.setTransform(325.45,134.3,1,1,0,0,0,0.5,10);

	this.instance_19 = new lib.ClipGroup_18_0();
	this.instance_19.parent = this;
	this.instance_19.setTransform(250.45,134.3,1,1,0,0,0,0.5,10);

	this.instance_20 = new lib.ClipGroup_19_0();
	this.instance_20.parent = this;
	this.instance_20.setTransform(175.45,134.3,1,1,0,0,0,0.5,10);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B4B4B4").s().p("Ag7A8IB3h3IAAB3g");
	this.shape_35.setTransform(16,135.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("EhmbAAFIAAgJMDM3AAAIAAAJg");
	this.shape_36.setTransform(680.625,144.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("EgAEApzMAAAhVpIAJAAMAAABXtg");
	this.shape_37.setTransform(25.5,425.025);

	this.instance_21 = new lib.ClipGroup_20_0();
	this.instance_21.parent = this;
	this.instance_21.setTransform(12.5,669.8,1,1,0,0,0,12.5,0.5);

	this.instance_22 = new lib.ClipGroup_21();
	this.instance_22.parent = this;
	this.instance_22.setTransform(12.5,644.8,1,1,0,0,0,12.5,0.5);

	this.instance_23 = new lib.ClipGroup_22();
	this.instance_23.parent = this;
	this.instance_23.setTransform(12.5,619.8,1,1,0,0,0,12.5,0.5);

	this.instance_24 = new lib.ClipGroup_23();
	this.instance_24.parent = this;
	this.instance_24.setTransform(12.5,594.8,1,1,0,0,0,12.5,0.5);

	this.instance_25 = new lib.ClipGroup_24();
	this.instance_25.parent = this;
	this.instance_25.setTransform(12.5,569.8,1,1,0,0,0,12.5,0.5);

	this.instance_26 = new lib.ClipGroup_25();
	this.instance_26.parent = this;
	this.instance_26.setTransform(12.5,544.8,1,1,0,0,0,12.5,0.5);

	this.instance_27 = new lib.ClipGroup_26();
	this.instance_27.parent = this;
	this.instance_27.setTransform(12.5,519.8,1,1,0,0,0,12.5,0.5);

	this.instance_28 = new lib.ClipGroup_27();
	this.instance_28.parent = this;
	this.instance_28.setTransform(12.5,494.8,1,1,0,0,0,12.5,0.5);

	this.instance_29 = new lib.ClipGroup_28();
	this.instance_29.parent = this;
	this.instance_29.setTransform(12.5,469.8,1,1,0,0,0,12.5,0.5);

	this.instance_30 = new lib.ClipGroup_29();
	this.instance_30.parent = this;
	this.instance_30.setTransform(12.5,444.8,1,1,0,0,0,12.5,0.5);

	this.instance_31 = new lib.ClipGroup_30();
	this.instance_31.parent = this;
	this.instance_31.setTransform(12.5,419.8,1,1,0,0,0,12.5,0.5);

	this.instance_32 = new lib.ClipGroup_31();
	this.instance_32.parent = this;
	this.instance_32.setTransform(12.5,394.8,1,1,0,0,0,12.5,0.5);

	this.instance_33 = new lib.ClipGroup_32();
	this.instance_33.parent = this;
	this.instance_33.setTransform(12.5,369.8,1,1,0,0,0,12.5,0.5);

	this.instance_34 = new lib.ClipGroup_33();
	this.instance_34.parent = this;
	this.instance_34.setTransform(12.5,344.8,1,1,0,0,0,12.5,0.5);

	this.instance_35 = new lib.ClipGroup_34();
	this.instance_35.parent = this;
	this.instance_35.setTransform(12.5,319.8,1,1,0,0,0,12.5,0.5);

	this.instance_36 = new lib.ClipGroup_35();
	this.instance_36.parent = this;
	this.instance_36.setTransform(12.5,294.8,1,1,0,0,0,12.5,0.5);

	this.instance_37 = new lib.ClipGroup_36();
	this.instance_37.parent = this;
	this.instance_37.setTransform(12.5,269.8,1,1,0,0,0,12.5,0.5);

	this.instance_38 = new lib.ClipGroup_37();
	this.instance_38.parent = this;
	this.instance_38.setTransform(12.5,244.8,1,1,0,0,0,12.5,0.5);

	this.instance_39 = new lib.ClipGroup_38();
	this.instance_39.parent = this;
	this.instance_39.setTransform(12.5,219.8,1,1,0,0,0,12.5,0.5);

	this.instance_40 = new lib.ClipGroup_39();
	this.instance_40.parent = this;
	this.instance_40.setTransform(12.5,194.85,1,1,0,0,0,12.5,0.5);

	this.instance_41 = new lib.ClipGroup_40();
	this.instance_41.parent = this;
	this.instance_41.setTransform(12.5,169.8,1,1,0,0,0,12.5,0.5);

	this.instance_42 = new lib.ClipGroup_41();
	this.instance_42.parent = this;
	this.instance_42.setTransform(12.5,144.8,1,1,0,0,0,12.5,0.5);

	this.instance_43 = new lib.ClipGroup_42();
	this.instance_43.parent = this;
	this.instance_43.setTransform(100.45,134.3,1,1,0,0,0,0.5,10);

	this.instance_44 = new lib.ClipGroup_43();
	this.instance_44.parent = this;
	this.instance_44.setTransform(25.45,134.3,1,1,0,0,0,0.5,10);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#999999").s().p("EgAEAqkMAAAhVHIAJAAMAAABVHg");
	this.shape_38.setTransform(1335.8,417.25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Ehm0AqDMAAAhUFMDNpAAAMAAABUFg");
	this.shape_39.setTransform(680.1452,410.4855,0.9954,1.0885);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#707070").s().p("AgEDIIAAmPIAJAAIAAGPg");
	this.shape_40.setTransform(1362.5,748);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EBE9E7").s().p("Ak7B0QgIAAgHgGQgFgGAAgJIAAi9QAAgJAFgGQAHgGAIAAIJ2AAQAJAAAHAGQAFAGABAJIAAC9QgBAJgFAGQgHAGgJAAgAlGhpQgFAEAAAHIAAC9QAAAHAFAFQAFAEAGAAIJ2AAQAIAAAEgEQAEgFABgHIAAi9QgBgHgEgEQgFgFgHAAIp2AAQgGAAgFAFg");
	this.shape_41.setTransform(1208.85,55.625);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#999999").ss(1,1,1).p("A3eifMAu9AAAQA7AAAAA7IAADJQAAA7g7AAMgu9AAAQg7AAAAg7IAAjJQAAg7A7AAg");
	this.shape_42.setTransform(218.0556,98.2014,1.3013,1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("A3eCgQg7AAAAg7IAAjJQAAg7A7AAMAu9AAAQA7AAAAA7IAADJQAAA7g7AAg");
	this.shape_43.setTransform(218.0556,98.2014,1.3013,1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E6E6E6").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	this.shape_44.setTransform(683,384);

	var maskedShapeInstanceList = [this.instance,this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.shape_14,this.instance_5,this.shape_15,this.instance_6,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.shape_33,this.shape_34,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.instance_18,this.instance_19,this.instance_20,this.shape_35,this.shape_36,this.shape_37,this.instance_21,this.instance_22,this.instance_23,this.instance_24,this.instance_25,this.instance_26,this.instance_27,this.instance_28,this.instance_29,this.instance_30,this.instance_31,this.instance_32,this.instance_33,this.instance_34,this.instance_35,this.instance_36,this.instance_37,this.instance_38,this.instance_39,this.instance_40,this.instance_41,this.instance_42,this.instance_43,this.instance_44,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.shape_34},{t:this.shape_33},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance_6},{t:this.shape_15},{t:this.instance_5},{t:this.shape_14},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.excelphoneversion, new cjs.Rectangle(-4.6,0,1370.6,768), null);


(lib.Group_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.instance = new lib.ClipGroup_13();
	this.instance.parent = this;
	this.instance.setTransform(24,20,1,1,0,0,0,24,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(0,0,48,40), null);


(lib.Group_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.instance = new lib.ClipGroup_12();
	this.instance.parent = this;
	this.instance.setTransform(16,20,1,1,0,0,0,16,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(0,0,32,40), null);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.instance = new lib.ClipGroup_1_2();
	this.instance.parent = this;
	this.instance.setTransform(16,20,1,1,0,0,0,16,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0,0,32,40), null);


(lib.Group_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.instance = new lib.ClipGroup_14();
	this.instance.parent = this;
	this.instance.setTransform(5.5,8,1,1,0,0,0,5.5,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5_0, new cjs.Rectangle(0,0,11,16), null);


(lib.Group_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.instance = new lib.ClipGroup_16();
	this.instance.parent = this;
	this.instance.setTransform(12,12,1,1,0,0,0,12,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3_0, new cjs.Rectangle(0,0,24,24), null);


(lib.Group_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.instance = new lib.ClipGroup_17();
	this.instance.parent = this;
	this.instance.setTransform(24,20,1,1,0,0,0,24,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2_0, new cjs.Rectangle(0,0,48,40), null);


(lib.Group_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.instance = new lib.ClipGroup_18();
	this.instance.parent = this;
	this.instance.setTransform(24,20,1,1,0,0,0,24,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_0, new cjs.Rectangle(0,0,48,40), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.instance = new lib.ClipGroup_11();
	this.instance.parent = this;
	this.instance.setTransform(1.9,7.8,1,1,0,0,0,1.9,7.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,3.9,15.7), null);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.instance = new lib.ClipGroup_8();
	this.instance.parent = this;
	this.instance.setTransform(5.6,5.8,1,1,0,0,0,5.6,5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(-0.2,0,11.7,11.5), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(683,20,1,1,0,0,0,683,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,1366,40), null);


(lib.ClipGroup_48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	mask.setTransform(683,384);

	// Livello_3
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(683,748,1,1,0,0,0,683,20);
	this.instance.alpha = 0.8984;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_48, new cjs.Rectangle(0,728,1366,40), null);


(lib.ClipGroup_46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	mask.setTransform(683,384);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABABQIAAhLIALAAIAABLgAAVBQIAAgVIhfAAIAAAVIgKAAIAAggIB0AAIAAAggAhUAlIAAhJIB0AAIAABJgAhKAbIBfAAIAAg1IhfAAgAA/gGQgCAAgDgDQgDgDAAgCIgCgGQAAgEACgDIADgFIAFgDIAGgBIAHABIAFADIADAFIABAHIgBAGIgDAFIgFADQgDACgEAAIgGgCgABAgvIAAggIALAAIAAAggAhUgvIAAggIAKAAIAAAVIBfAAIAAgVIALAAIAAAgg");
	this.shape.setTransform(415.975,748.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggAWIAAg1IBBAAIAAA/g");
	this.shape_1.setTransform(19.275,751.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpAaIAAg/IBTAAIAABLg");
	this.shape_2.setTransform(27.725,752.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggAeIAAgyIBBgJIAAA7g");
	this.shape_3.setTransform(19.275,744.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpAlIAAg9IBTgMIAABJg");
	this.shape_4.setTransform(27.725,743.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAABLQAAgGgBgGQgCgEgFgGQgFgEgEgCQgGgCgGAAQgIAAgEACIgKAGQgEAGgCAEQgCAFAAAHIgKAAIABgLQACgGADgEQACgEAFgFIAJgGQgGgEgDgHQgDgGAAgHQAAgHACgFQACgDAEgGIAKgFQAEgDAIAAQAHAAAGADQAGAEAFAFQADgGAEgEQAEgFAGgDQgGgEgDgGQgDgHAAgHQAAgHACgEQABgFAGgFIAJgHQAFgCAHAAQAGAAAFACQAGACAEAFQAFAFABAFQADAFAAAGQAAAFgEAJQgCAGgHAEIAJAGQAGAFACAEQACAFACAEIACALIgKAAQAAgFgDgHQgBgDgFgGQgEgDgGgCQgFgDgGAAQgHAAgFADIgJAFQgGAGgBADQgCAFAAAHQAAAGgDAHQgCAHgHAEIAJAGQAFAFABAEQADAEACAGIACALgAglgCQgDABgDACIgFAGIgBAIIABAIIAFAGIAGAFIAIABIAHgBIAHgFIAEgGIACgIIgCgIIgEgGQgDgCgEgBIgHgCIgIACgAAWg/QgEACgCADIgFAGIgBAIIABAIIAFAGIAGAEIAIACIAIgCIAGgEIAEgGIACgIIgCgIIgEgGQgDgDgDgCIgIgBIgIABg");
	this.shape_5.setTransform(1074,747.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAyIgyAAIAAiBICfAAIAACBIgyAAIgeAegAhFAoIAsAAIAZAaIAZgaIAtAAIAAhtIiLAAg");
	this.shape_6.setTransform(1338,748);

	this.instance = new lib.Group_8();
	this.instance.parent = this;
	this.instance.setTransform(1338,748,1,1,0,0,0,24,20);
	this.instance.alpha = 0;

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_46, new cjs.Rectangle(16,728,1346,40), null);


(lib.ClipGroup_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhGB4IAAjvICNAAIAADvg");
	mask.setTransform(7.1,12);

	// Livello_3
	this.instance = new lib.ClipGroup_20();
	this.instance.parent = this;
	this.instance.setTransform(7.1,12,1,1,0,0,0,7.1,12);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19, new cjs.Rectangle(0,0,14.2,24), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AifDIIAAmPIE/AAIAAGPg");
	mask.setTransform(16,20);

	// Livello_3
	this.instance = new lib.ClipGroup_10();
	this.instance.parent = this;
	this.instance.setTransform(16,20,1,1,0,0,0,16,20);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(0,0,32,40), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag2A3IAAhtIBtAAIAABtg");
	mask.setTransform(5.5,5.5);

	// Livello_3
	this.instance = new lib.Group_0();
	this.instance.parent = this;
	this.instance.setTransform(5.6,5.8,1,1,0,0,0,5.6,5.8);
	this.instance.alpha = 0.8008;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(0,0,11,11), null);


(lib.ClipGroup_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag2A3IAAhtIBtAAIAABtg");
	mask.setTransform(5.5,5.5);

	// Livello_3
	this.instance = new lib.ClipGroup_7();
	this.instance.parent = this;
	this.instance.setTransform(5.6,5.8,1,1,0,0,0,5.6,5.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_1, new cjs.Rectangle(0,0,11,11), null);


(lib.ClipGroup_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AifDIIAAmPIE/AAIAAGPg");
	mask.setTransform(16,20);

	// Livello_3
	this.instance = new lib.ClipGroup_5();
	this.instance.parent = this;
	this.instance.setTransform(16,20,1,1,0,0,0,16,20);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_1, new cjs.Rectangle(0,0,32,40), null);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AifDIIAAmPIE/AAIAAGPg");
	mask.setTransform(16,20);

	// Livello_3
	this.instance = new lib.ClipGroup_3_1();
	this.instance.parent = this;
	this.instance.setTransform(16,20,1,1,0,0,0,16,20);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(0,0,32,40), null);


(lib.logocopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_6();
	this.instance.parent = this;
	this.instance.setTransform(51.3,0.35,0.33,0.33,0,0,0,307,34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logocopy, new cjs.Rectangle(-50.4,-11,202.1,24.1), null);


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
	this.arrow.parent = this;
	this.arrow.setTransform(10.75,10.75);

	this.arrow_1 = new lib.cta_arrowmo();
	this.arrow_1.name = "arrow_1";
	this.arrow_1.parent = this;
	this.arrow_1.setTransform(10.75,10.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arrow}]}).to({state:[{t:this.arrow_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,20.5,20.5);


(lib.softwarevectorphoneversion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.excel.cache(-1366,-768,2732,1536,1.5)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Livello_1
	this.excel = new lib.excelphoneversion();
	this.excel.name = "excel";
	this.excel.parent = this;
	this.excel.setTransform(591.9,332.7,0.8667,0.8667,0,0,0,683,383.9);

	this.timeline.addTween(cjs.Tween.get(this.excel).wait(1));

}).prototype = getMCSymbolPrototype(lib.softwarevectorphoneversion, new cjs.Rectangle(0,0,1183.9,665.6), null);


(lib.screen_new_phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graphs
	this.graphs = new lib.graphsphone();
	this.graphs.name = "graphs";
	this.graphs.parent = this;
	this.graphs.setTransform(486.85,166.45,1.0889,1.0889,0,0,0,468.7,181.3);

	this.timeline.addTween(cjs.Tween.get(this.graphs).wait(1));

	// software
	this.instance = new lib.softwarevectorphoneversion();
	this.instance.parent = this;
	this.instance.setTransform(483.1,144.15,1,1,0,0,0,591.9,332.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.screen_new_phone, new cjs.Rectangle(-108.8,-188.6,1183.8999999999999,665.6), null);


(lib.phonenew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.phone.cache(-45,0,270,180,2)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// icon
	this.icon = new lib.icon();
	this.icon.name = "icon";
	this.icon.parent = this;
	this.icon.setTransform(3.5,3.9,0.1842,0.1831,0,0,0,0,0.6);

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai2GCIAAq6IGKAAIAAK6g");
	mask.setTransform(21.1824,38.6006);

	// screen
	this.screen = new lib.screen_new_phone();
	this.screen.name = "screen";
	this.screen.parent = this;
	this.screen.setTransform(63.9,46.4,0.1053,0.1053,0,0,0,469.8,182.4);

	var maskedShapeInstanceList = [this.screen];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.screen).wait(1));

	// Livello_1
	this.phone = new lib.phonecache();
	this.phone.name = "phone";
	this.phone.parent = this;
	this.phone.setTransform(22.6,43.9,1,1,0,0,0,67.5,43.9);

	this.timeline.addTween(cjs.Tween.get(this.phone).wait(1));

}).prototype = getMCSymbolPrototype(lib.phonenew, new cjs.Rectangle(-44.9,-5.7,134.9,93.4), null);


(lib.CTA_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.arrow = new lib.arrowMain();
	this.arrow.name = "arrow";
	this.arrow.parent = this;
	this.arrow.setTransform(6.05,0.2,0.85,0.85,0,0,0,13.6,10.7);

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(1));

	// CTA_text
	this.cta_glare = new lib.cta_glare();
	this.cta_glare.name = "cta_glare";
	this.cta_glare.parent = this;
	this.cta_glare.setTransform(-42.75,-2.45,1,1,0,0,0,57.4,15.1);

	this.timeline.addTween(cjs.Tween.get(this.cta_glare).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A7041").s().p("AoqCgIAAk+IRVAAIAAE+g");
	this.shape.setTransform(-25.725,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CTA_btn, new cjs.Rectangle(-81.2,-16.1,111,31.900000000000002), null);


(lib.Group_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.instance = new lib.ClipGroup_19();
	this.instance.parent = this;
	this.instance.setTransform(7.1,12,1,1,0,0,0,7.1,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(0,0,14.2,24), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.instance = new lib.ClipGroup_2_1();
	this.instance.parent = this;
	this.instance.setTransform(16,20,1,1,0,0,0,16,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0,32,40), null);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.instance = new lib.ClipGroup_4_1();
	this.instance.parent = this;
	this.instance.setTransform(16,20,1,1,0,0,0,16,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,32,40), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.instance = new lib.ClipGroup_6_1();
	this.instance.parent = this;
	this.instance.setTransform(5.6,5.8,1,1,0,0,0,5.6,5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(-0.2,0,11.7,11.5), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_1
	this.instance = new lib.ClipGroup_9();
	this.instance.parent = this;
	this.instance.setTransform(16,20,1,1,0,0,0,16,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,32,40), null);


(lib.ClipGroup_47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	mask.setTransform(683,384);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAgVIg2A2IgFgGIA7g7IA8A7IgFAGg");
	this.shape.setTransform(1109.95,748.025);

	this.instance = new lib.Group_7();
	this.instance.parent = this;
	this.instance.setTransform(1110,748,1,1,0,0,0,16,20);
	this.instance.alpha = 0;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUA8IgdgeIgUAAIAAg7IAUAAIAdgeIAKAAIAAB3gAgTAUIAOAAIAZAaIAAhaIgWAWIgDADIgOAAg");
	this.shape_1.setTransform(1201,748);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKAeQALgNAAgRQAAgQgLgNIAHgHQAOAPAAAVQAAAWgOAPg");
	this.shape_2.setTransform(1206.9,748.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOAzQATgVAAgeQAAgdgTgVIAHgHQAWAYAAAhQAAAigWAYg");
	this.shape_3.setTransform(1209.475,748.025);

	this.instance_1 = new lib.Group_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1212,748,1,1,0,0,0,1.9,7.8);
	this.instance_1.alpha = 0.3984;

	this.instance_2 = new lib.Group_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1206,748,1,1,0,0,0,16,20);
	this.instance_2.alpha = 0;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAAQAAgJAJAAQAEAAADADQADADAAADQAAAFgDADQgDACgEAAQgJAAAAgKg");
	this.shape_4.setTransform(1179,753);

	this.instance_3 = new lib.Group_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1174.6,748.8,1,1,0,0,0,5.6,5.8);
	this.instance_3.alpha = 0.3984;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").p("AgiAoQAAgfAWgVQAVgWAfAA");
	this.shape_5.setTransform(1176,750);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").p("AgTAZQAAgTANgLQANgOASAA");
	this.shape_6.setTransform(1177.5,751.5);

	this.instance_4 = new lib.Group_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1174,748,1,1,0,0,0,16,20);
	this.instance_4.alpha = 0;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag1AUIAAgnIBrAAIAAAng");
	this.shape_7.setTransform(1141.4,748.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHAKIAAgTIAPAAIAAATg");
	this.shape_8.setTransform(1149.25,748);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhKAoIAAhPICVAAIAABPgAhAAeICBAAIAAg7IiBAAg");
	this.shape_9.setTransform(1141.5,748);

	this.instance_5 = new lib.Group_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1142,748,1,1,0,0,0,16,20);
	this.instance_5.alpha = 0;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfBRIgCgEIACgFIADgFQgCgDAAgEIAAgOIABgCIAthcIgFgCIgSAmIgCACIgDABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIABgDIASgmIADgEIAFgCIAGABIAFADIAFgLIACgDIADAAIACAAIAEgHIADgDIAEgBQADAAACACIAHADIAEAEIACAFIgBAFIgDAFIACACIABACIAAABIgBACIg5BxIgCACIgNAHIgFABIgCAAIgEAIIgCACIgCABIgEgCgAgUAwIAAAMIABABIACABIABAAIACgCIADgBIAHgEIA1hqIgQgIgAAqhCIAHADIACgFIgHgDgAgtBTQgIAAgGgDQgIgEgEgEQgEgEgEgIQgDgGAAgIQAAgHADgHQADgGAFgFQAFgFAHgDQAGgDAIAAIASAAIgGALIgMAAQgGAAgEACIgJAFQgDADgCAFQgCAFAAAFQAAAGACAEQACAGADADQAEADAFACQAEACAGAAIADAAIgBADIAAAFIABADgAAnAVIAFgLIASAAIAEAAIADgDIACgDIABgEIgBgDIgCgDIgDgDIgEAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAEAAAEACIAGAEQADADACAEQACADAAAEQAAAFgCADQgCAEgDADIgGAEQgEACgEAAg");
	this.shape_10.setTransform(1237.975,748.025);

	this.instance_6 = new lib.Group_6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1238,748,1,1,0,0,0,16,20);
	this.instance_6.alpha = 0;

	var maskedShapeInstanceList = [this.shape,this.instance,this.shape_1,this.shape_2,this.shape_3,this.instance_1,this.instance_2,this.shape_4,this.instance_3,this.shape_5,this.shape_6,this.instance_4,this.shape_7,this.shape_8,this.shape_9,this.instance_5,this.shape_10,this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.shape_10},{t:this.instance_5},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance_4},{t:this.shape_6},{t:this.shape_5},{t:this.instance_3},{t:this.shape_4},{t:this.instance_2},{t:this.instance_1},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_47, new cjs.Rectangle(1094,728,160,40), null);


(lib.ClipGroup_44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	mask.setTransform(683,384);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAOAuIgOgfIAAgCIAAgBIAAgCIAAAAIAAABIgCAFIgNAdIgTgCIAWgrIgVgqIAUgBIALAaIABACIABAFIABgFIANgeIAVgCIgZAvIAaAwg");
	this.shape.setTransform(603.3,748);

	this.instance = new lib.Group_9();
	this.instance.parent = this;
	this.instance.setTransform(603.7,748.05,1,1,0,0,0,7.1,12);
	this.instance.alpha = 0.0508;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#247247").s().p("AhGBfIAAi9ICNgZIAADvg");
	this.shape_1.setTransform(603.7,748.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#247247").s().p("AgNAHIAAgNIAbAAIAAANg");
	this.shape_2.setTransform(612.225,753.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#247247").s().p("AgNAHIAAgNIAbAAIAAANg");
	this.shape_3.setTransform(612.225,750.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#247247").s().p("AgNAHIAAgNIAbAAIAAANg");
	this.shape_4.setTransform(612.225,748.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#247247").s().p("AgNAHIAAgNIAbAAIAAANg");
	this.shape_5.setTransform(612.225,745.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#247247").s().p("AgNAHIAAgNIAbAAIAAANg");
	this.shape_6.setTransform(612.225,742.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#247247").s().p("AgNAHIAAgNIAbAAIAAANg");
	this.shape_7.setTransform(616.475,753.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#247247").s().p("AgNAHIAAgNIAbAAIAAANg");
	this.shape_8.setTransform(616.475,750.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#247247").s().p("AgNAHIAAgNIAbAAIAAANg");
	this.shape_9.setTransform(616.475,748.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#247247").s().p("AgNAHIAAgNIAbAAIAAANg");
	this.shape_10.setTransform(616.475,745.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#247247").s().p("AgNAHIAAgNIAbAAIAAANg");
	this.shape_11.setTransform(616.475,742.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#247247").s().p("Ag+BeQgJAAAAgJIAAipQAAgJAJAAIB+AAQADAAACADQADACAAAEIAACpQAAAEgDACQgCADgDAAgAg+BVIB+AAIAAipIh+AAg");
	this.shape_12.setTransform(613,748.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag+BZQgFAAAAgEIAAipQAAgEAFAAIB+AAQAEAAAAAEIAACpQAAAEgEAAg");
	this.shape_13.setTransform(612.975,748.025);

	this.instance_1 = new lib.Group_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(608,748,1,1,0,0,0,24,20);
	this.instance_1.alpha = 0;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7AB9EB").s().p("AjvAKIAAgTIHfAAIAAATg");
	this.shape_14.setTransform(608,767);

	this.instance_2 = new lib.Group_2_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(608,748,1,1,0,0,0,24,20);
	this.instance_2.alpha = 0.1992;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhJBKQgfgeAAgsQAAgrAfgeQAfgfAqAAQArAAAgAfQAeAeAAArQAAAsgeAeQggAfgrAAQgqAAgfgfgAg6g7QgaAZAAAiQAAAjAaAZQAYAYAiAAQAkAAAYgYQAYgZABgjQgBgigYgZQgZgYgjAAQgiAAgYAYg");
	this.shape_15.setTransform(67.95,748.025);

	this.instance_3 = new lib.Group_3_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(67.95,748,1,1,0,0,0,12,12);
	this.instance_3.alpha = 0.3984;

	this.instance_4 = new lib.Group_5_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(369.4,748,1,1,0,0,0,5.5,8);
	this.instance_4.alpha = 0.8008;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FAFAFA").s().p("A63DIIAAmPMA1vAAAIAAGPg");
	this.shape_16.setTransform(219.925,748);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3977BA").s().p("Ag2BdQgcgcAAgmQAAgeARgXQAPgXAbgLQgOAPgDAXIBUAAQAAgzgwAAQgdAAgeARQgeARgRAbQAGgvAegdQAfgeAugBQAvABAeAfQAfAgAAAxIAAAaIiWAAQAAAYASAOQASAMAbAAQAlAAAdgSIAAAzQghARgpAAQgqAAgcgbg");
	this.shape_17.setTransform(559.975,748);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7FB91D").s().p("AgXAYIAAgvIAvAAIAAAvg");
	this.shape_18.setTransform(514.425,747.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FCB926").s().p("AgXAYIAAgvIAvAAIAAAvg");
	this.shape_19.setTransform(514.425,753.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EF522D").s().p("AgYAYIAAgvIAxAAIAAAvg");
	this.shape_20.setTransform(508.55,747.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#26A5ED").s().p("AgYAYIAAgvIAxAAIAAAvg");
	this.shape_21.setTransform(508.55,753.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AheBxQgHAAgGgFQgFgFAAgHIAAiVIBFAAIAAgOQAAgTANgNQANgNARAAQASAAANANQANANAAATIAAAOIALAAIAAgFIgBgKQAAgNgGgLQAPALAAAXIAAAFIAyAAIAACVQAAAHgFAFQgFAFgHAAgAAIhbQgKAEgGAJQgHAJAAALIAAAFIAxAAIAAgOQAAgOgKgLQgKgKgOAAQgNAAgKAKQgKALAAAOIAAAOIALAAIAAgFQAAgUAPgMQAEgCADAAIAIABg");
	this.shape_22.setTransform(511.475,747.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#45B5E4").s().p("AAeAtIAAgxIg7AAIAAAxIgoAAIAAhMQAAgGAEgDQADgEAGAAIBwAAQAGAAAEAEQAEADAAAGIAABMg");
	this.shape_23.setTransform(464,753);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#45B5E4").s().p("AgEAHIAAgNIAJAAIAAANg");
	this.shape_24.setTransform(455.5,740.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgUAHIAAgNIApAAIAAANg");
	this.shape_25.setTransform(457.875,740.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FDE797").s().p("AhiBQQgFAAgDgDQgDgEAAgEIAAiAIBTAAQAJAAAFgFIANgPIBhAAQAFAAAEAEQADADAAAGIAACHQAAAEgDAEQgEADgFAAg");
	this.shape_26.setTransform(464,748.5);

	var maskedShapeInstanceList = [this.shape,this.instance,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.instance_1,this.shape_14,this.instance_2,this.shape_15,this.instance_3,this.instance_4,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance_4},{t:this.instance_3},{t:this.shape_15},{t:this.instance_2},{t:this.shape_14},{t:this.instance_1},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_44, new cjs.Rectangle(48,728,584,40), null);


(lib.ClipGroup_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//top
		this.topTxt1.textBaseline = "alphabetic";
		this.topTxt2.textBaseline = "alphabetic";
		this.topTxt3.textBaseline = "alphabetic";
		this.topTxt4.textBaseline = "alphabetic";
		
		//menu
		this.menuTxt1.textBaseline = "alphabetic";
		this.menuTxt2.textBaseline = "alphabetic";
		this.menuTxt3.textBaseline = "alphabetic";
		this.menuTxt4.textBaseline = "alphabetic";
		this.menuTxt5.textBaseline = "alphabetic";
		this.menuTxt6.textBaseline = "alphabetic";
		this.menuTxt7.textBaseline = "alphabetic";
		this.menuTxt8.textBaseline = "alphabetic";
		this.menuTxt9.textBaseline = "alphabetic";
		this.menuTxt10.textBaseline = "alphabetic";
		this.menuTxt11.textBaseline = "alphabetic";
		this.menuTxt12.textBaseline = "alphabetic";
		
		
		//cell
		this.cellTxt1.textBaseline = "alphabetic";
		this.cellTxt2.textBaseline = "alphabetic";
		this.cellTxt3.textBaseline = "alphabetic";
		this.cellTxt4.textBaseline = "alphabetic";
		this.cellTxt5.textBaseline = "alphabetic";
		this.cellTxt6.textBaseline = "alphabetic";
		this.cellTxt7.textBaseline = "alphabetic";
		this.cellTxt8.textBaseline = "alphabetic";
		this.cellTxt9.textBaseline = "alphabetic";
		this.cellTxt10.textBaseline = "alphabetic";
		this.cellTxt11.textBaseline = "alphabetic";
		this.cellTxt12.textBaseline = "alphabetic";
		this.cellTxt13.textBaseline = "alphabetic";
		this.cellTxt14.textBaseline = "alphabetic";
		this.cellTxt15.textBaseline = "alphabetic";
		this.cellTxt16.textBaseline = "alphabetic";
		this.cellTxt17.textBaseline = "alphabetic";
		this.cellTxt18.textBaseline = "alphabetic";
		this.cellTxt19.textBaseline = "alphabetic";
		this.cellTxt20.textBaseline = "alphabetic";
		this.cellTxt21.textBaseline = "alphabetic";
		this.cellTxt22.textBaseline = "alphabetic";
		this.cellTxt23.textBaseline = "alphabetic";
		this.cellTxt24.textBaseline = "alphabetic";
		this.cellTxt25.textBaseline = "alphabetic";
		this.cellTxt26.textBaseline = "alphabetic";
		this.cellTxt27.textBaseline = "alphabetic";
		this.cellTxt28.textBaseline = "alphabetic";
		this.cellTxt29.textBaseline = "alphabetic";
		this.cellTxt30.textBaseline = "alphabetic";
		this.cellTxt31.textBaseline = "alphabetic";
		this.cellTxt32.textBaseline = "alphabetic";
		this.cellTxt33.textBaseline = "alphabetic";
		this.cellTxt34.textBaseline = "alphabetic";
		this.cellTxt35.textBaseline = "alphabetic";
		this.cellTxt36.textBaseline = "alphabetic";
		this.cellTxt37.textBaseline = "alphabetic";
		this.cellTxt38.textBaseline = "alphabetic";
		this.cellTxt39.textBaseline = "alphabetic";
		
		//other
		this.oTxt1.textBaseline = "alphabetic";
		this.oTxt2.textBaseline = "alphabetic";
		this.oTxt3.textBaseline = "alphabetic";
		this.oTxt4.textBaseline = "alphabetic";
		this.oTxt5.textBaseline = "alphabetic";
		this.oTxt6.textBaseline = "alphabetic";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Livello_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	mask_5.setTransform(683,384);

	// FlashAICB
	this.cellTxt18 = new cjs.Text("1", "14px 'Segoe Pro'", "#212120");
	this.cellTxt18.name = "cellTxt18";
	this.cellTxt18.lineHeight = 21;
	this.cellTxt18.parent = this;
	this.cellTxt18.setTransform(9.95,151.05);

	this.cellTxt19 = new cjs.Text("2", "14px 'Segoe Pro'", "#212120");
	this.cellTxt19.name = "cellTxt19";
	this.cellTxt19.lineHeight = 21;
	this.cellTxt19.parent = this;
	this.cellTxt19.setTransform(10,175.65);

	this.cellTxt20 = new cjs.Text("3", "14px 'Segoe Pro'", "#212120");
	this.cellTxt20.name = "cellTxt20";
	this.cellTxt20.lineHeight = 21;
	this.cellTxt20.parent = this;
	this.cellTxt20.setTransform(10,201.05);

	this.cellTxt21 = new cjs.Text("4", "14px 'Segoe Pro'", "#212120");
	this.cellTxt21.name = "cellTxt21";
	this.cellTxt21.lineHeight = 21;
	this.cellTxt21.parent = this;
	this.cellTxt21.setTransform(9.65,226.4);

	this.cellTxt22 = new cjs.Text("5", "14px 'Segoe Pro'", "#212120");
	this.cellTxt22.name = "cellTxt22";
	this.cellTxt22.lineHeight = 21;
	this.cellTxt22.parent = this;
	this.cellTxt22.setTransform(9.3,251.4);

	this.cellTxt23 = new cjs.Text("6", "14px 'Segoe Pro'", "#212120");
	this.cellTxt23.name = "cellTxt23";
	this.cellTxt23.lineHeight = 21;
	this.cellTxt23.parent = this;
	this.cellTxt23.setTransform(10,276.35);

	this.cellTxt24 = new cjs.Text("7", "14px 'Segoe Pro'", "#212120");
	this.cellTxt24.name = "cellTxt24";
	this.cellTxt24.lineHeight = 21;
	this.cellTxt24.lineWidth = 8;
	this.cellTxt24.parent = this;
	this.cellTxt24.setTransform(10,301.4);

	this.cellTxt25 = new cjs.Text("8", "14px 'Segoe Pro'", "#212120");
	this.cellTxt25.name = "cellTxt25";
	this.cellTxt25.lineHeight = 21;
	this.cellTxt25.lineWidth = 8;
	this.cellTxt25.parent = this;
	this.cellTxt25.setTransform(10,325.95);

	this.cellTxt26 = new cjs.Text("9", "14px 'Segoe Pro'", "#212120");
	this.cellTxt26.name = "cellTxt26";
	this.cellTxt26.lineHeight = 21;
	this.cellTxt26.lineWidth = 8;
	this.cellTxt26.parent = this;
	this.cellTxt26.setTransform(10.4,351.35);

	this.cellTxt27 = new cjs.Text("10", "14px 'Segoe Pro'", "#212120");
	this.cellTxt27.name = "cellTxt27";
	this.cellTxt27.lineHeight = 21;
	this.cellTxt27.lineWidth = 15;
	this.cellTxt27.parent = this;
	this.cellTxt27.setTransform(6.2,376);

	this.cellTxt28 = new cjs.Text("11", "14px 'Segoe Pro'", "#212120");
	this.cellTxt28.name = "cellTxt28";
	this.cellTxt28.lineHeight = 21;
	this.cellTxt28.lineWidth = 15;
	this.cellTxt28.parent = this;
	this.cellTxt28.setTransform(5.85,401.4);

	this.cellTxt29 = new cjs.Text("12", "14px 'Segoe Pro'", "#212120");
	this.cellTxt29.name = "cellTxt29";
	this.cellTxt29.lineHeight = 21;
	this.cellTxt29.lineWidth = 15;
	this.cellTxt29.parent = this;
	this.cellTxt29.setTransform(6.2,426);

	this.cellTxt30 = new cjs.Text("13", "14px 'Segoe Pro'", "#212120");
	this.cellTxt30.name = "cellTxt30";
	this.cellTxt30.lineHeight = 21;
	this.cellTxt30.lineWidth = 15;
	this.cellTxt30.parent = this;
	this.cellTxt30.setTransform(5.85,451);

	this.cellTxt31 = new cjs.Text("14", "14px 'Segoe Pro'", "#212120");
	this.cellTxt31.name = "cellTxt31";
	this.cellTxt31.lineHeight = 21;
	this.cellTxt31.lineWidth = 15;
	this.cellTxt31.parent = this;
	this.cellTxt31.setTransform(5.85,476.8);

	this.cellTxt32 = new cjs.Text("15", "14px 'Segoe Pro'", "#212120");
	this.cellTxt32.name = "cellTxt32";
	this.cellTxt32.lineHeight = 21;
	this.cellTxt32.lineWidth = 15;
	this.cellTxt32.parent = this;
	this.cellTxt32.setTransform(5.85,501.4);

	this.cellTxt33 = new cjs.Text("16", "14px 'Segoe Pro'", "#212120");
	this.cellTxt33.name = "cellTxt33";
	this.cellTxt33.lineHeight = 21;
	this.cellTxt33.lineWidth = 15;
	this.cellTxt33.parent = this;
	this.cellTxt33.setTransform(6.2,526.4);

	this.cellTxt34 = new cjs.Text("17", "14px 'Segoe Pro'", "#212120");
	this.cellTxt34.name = "cellTxt34";
	this.cellTxt34.lineHeight = 21;
	this.cellTxt34.lineWidth = 15;
	this.cellTxt34.parent = this;
	this.cellTxt34.setTransform(6.2,551.4);

	this.cellTxt35 = new cjs.Text("18", "14px 'Segoe Pro'", "#212120");
	this.cellTxt35.name = "cellTxt35";
	this.cellTxt35.lineHeight = 21;
	this.cellTxt35.lineWidth = 15;
	this.cellTxt35.parent = this;
	this.cellTxt35.setTransform(6.2,576.4);

	this.cellTxt36 = new cjs.Text("19", "14px 'Segoe Pro'", "#212120");
	this.cellTxt36.name = "cellTxt36";
	this.cellTxt36.lineHeight = 21;
	this.cellTxt36.lineWidth = 15;
	this.cellTxt36.parent = this;
	this.cellTxt36.setTransform(6.2,601.4);

	this.cellTxt37 = new cjs.Text("20", "14px 'Segoe Pro'", "#212120");
	this.cellTxt37.name = "cellTxt37";
	this.cellTxt37.lineHeight = 21;
	this.cellTxt37.lineWidth = 15;
	this.cellTxt37.parent = this;
	this.cellTxt37.setTransform(5.85,626.35);

	this.cellTxt38 = new cjs.Text("21", "14px 'Segoe Pro'", "#212120");
	this.cellTxt38.name = "cellTxt38";
	this.cellTxt38.lineHeight = 21;
	this.cellTxt38.lineWidth = 15;
	this.cellTxt38.parent = this;
	this.cellTxt38.setTransform(6.2,651.75);

	this.cellTxt1 = new cjs.Text("A", "14px 'Segoe Pro'", "#212120");
	this.cellTxt1.name = "cellTxt1";
	this.cellTxt1.lineHeight = 21;
	this.cellTxt1.parent = this;
	this.cellTxt1.setTransform(58.8,128.7);

	this.cellTxt2 = new cjs.Text("B", "14px 'Segoe Pro'", "#212120");
	this.cellTxt2.name = "cellTxt2";
	this.cellTxt2.lineHeight = 21;
	this.cellTxt2.parent = this;
	this.cellTxt2.setTransform(134.15,128.65);

	this.cellTxt3 = new cjs.Text("C", "14px 'Segoe Pro'", "#212120");
	this.cellTxt3.name = "cellTxt3";
	this.cellTxt3.lineHeight = 21;
	this.cellTxt3.parent = this;
	this.cellTxt3.setTransform(208.75,128.3);

	this.cellTxt4 = new cjs.Text("D", "14px 'Segoe Pro'", "#212120");
	this.cellTxt4.name = "cellTxt4";
	this.cellTxt4.lineHeight = 21;
	this.cellTxt4.parent = this;
	this.cellTxt4.setTransform(283,128.3);

	this.cellTxt5 = new cjs.Text("E", "14px 'Segoe Pro'", "#212120");
	this.cellTxt5.name = "cellTxt5";
	this.cellTxt5.lineHeight = 21;
	this.cellTxt5.parent = this;
	this.cellTxt5.setTransform(359.55,128.3);

	this.cellTxt6 = new cjs.Text("F", "14px 'Segoe Pro'", "#212120");
	this.cellTxt6.name = "cellTxt6";
	this.cellTxt6.lineHeight = 21;
	this.cellTxt6.parent = this;
	this.cellTxt6.setTransform(434.85,127.9);

	this.cellTxt7 = new cjs.Text("G", "14px 'Segoe Pro'", "#212120");
	this.cellTxt7.name = "cellTxt7";
	this.cellTxt7.lineHeight = 21;
	this.cellTxt7.parent = this;
	this.cellTxt7.setTransform(507.95,128.3);

	this.cellTxt8 = new cjs.Text("H", "14px 'Segoe Pro'", "#212120");
	this.cellTxt8.name = "cellTxt8";
	this.cellTxt8.lineHeight = 21;
	this.cellTxt8.parent = this;
	this.cellTxt8.setTransform(582.2,128.65);

	this.cellTxt9 = new cjs.Text("I", "14px 'Segoe Pro'", "#212120");
	this.cellTxt9.name = "cellTxt9";
	this.cellTxt9.lineHeight = 21;
	this.cellTxt9.parent = this;
	this.cellTxt9.setTransform(660.2,129.45);

	this.cellTxt10 = new cjs.Text("J", "14px 'Segoe Pro'", "#212120");
	this.cellTxt10.name = "cellTxt10";
	this.cellTxt10.lineHeight = 21;
	this.cellTxt10.parent = this;
	this.cellTxt10.setTransform(734.4,128.3);

	this.cellTxt11 = new cjs.Text("K", "14px 'Segoe Pro'", "#212120");
	this.cellTxt11.name = "cellTxt11";
	this.cellTxt11.lineHeight = 21;
	this.cellTxt11.parent = this;
	this.cellTxt11.setTransform(808.25,128.65);

	this.cellTxt12 = new cjs.Text("L", "14px 'Segoe Pro'", "#212120");
	this.cellTxt12.name = "cellTxt12";
	this.cellTxt12.lineHeight = 21;
	this.cellTxt12.lineWidth = 7;
	this.cellTxt12.parent = this;
	this.cellTxt12.setTransform(883.55,128.3);

	this.cellTxt13 = new cjs.Text("M", "14px 'Segoe Pro'", "#212120");
	this.cellTxt13.name = "cellTxt13";
	this.cellTxt13.lineHeight = 21;
	this.cellTxt13.lineWidth = 13;
	this.cellTxt13.parent = this;
	this.cellTxt13.setTransform(955.5,128.3);

	this.cellTxt14 = new cjs.Text("N", "14px 'Segoe Pro'", "#212120");
	this.cellTxt14.name = "cellTxt14";
	this.cellTxt14.lineHeight = 21;
	this.cellTxt14.lineWidth = 13;
	this.cellTxt14.parent = this;
	this.cellTxt14.setTransform(1031.65,128.3);

	this.cellTxt16 = new cjs.Text("P", "14px 'Segoe Pro'", "#212120");
	this.cellTxt16.name = "cellTxt16";
	this.cellTxt16.lineHeight = 21;
	this.cellTxt16.lineWidth = 13;
	this.cellTxt16.parent = this;
	this.cellTxt16.setTransform(1183.5,128.65);

	this.cellTxt15 = new cjs.Text("O", "14px 'Segoe Pro'", "#212120");
	this.cellTxt15.name = "cellTxt15";
	this.cellTxt15.lineHeight = 21;
	this.cellTxt15.lineWidth = 13;
	this.cellTxt15.parent = this;
	this.cellTxt15.setTransform(1106.65,128.3);

	this.cellTxt17 = new cjs.Text("Q", "14px 'Segoe Pro'", "#212120");
	this.cellTxt17.name = "cellTxt17";
	this.cellTxt17.lineHeight = 21;
	this.cellTxt17.lineWidth = 13;
	this.cellTxt17.parent = this;
	this.cellTxt17.setTransform(1256.65,128.65);

	this.menuTxt10 = new cjs.Text("Search", "13px 'Segoe Pro'", "#494846");
	this.menuTxt10.name = "menuTxt10";
	this.menuTxt10.lineHeight = 20;
	this.menuTxt10.lineWidth = 44;
	this.menuTxt10.parent = this;
	this.menuTxt10.setTransform(644.1,64.25);

	this.menuTxt9 = new cjs.Text("Help", "13px 'Segoe Pro'", "#494846");
	this.menuTxt9.name = "menuTxt9";
	this.menuTxt9.lineHeight = 20;
	this.menuTxt9.lineWidth = 44;
	this.menuTxt9.parent = this;
	this.menuTxt9.setTransform(563.85,64.25);

	this.menuTxt8 = new cjs.Text("View", "13px 'Segoe Pro'", "#494846");
	this.menuTxt8.name = "menuTxt8";
	this.menuTxt8.lineHeight = 20;
	this.menuTxt8.lineWidth = 44;
	this.menuTxt8.parent = this;
	this.menuTxt8.setTransform(507.4,64.25);

	this.menuTxt7 = new cjs.Text("Review", "13px 'Segoe Pro'", "#494846");
	this.menuTxt7.name = "menuTxt7";
	this.menuTxt7.lineHeight = 20;
	this.menuTxt7.lineWidth = 44;
	this.menuTxt7.parent = this;
	this.menuTxt7.setTransform(440.35,64.25);

	this.menuTxt6 = new cjs.Text("Data", "13px 'Segoe Pro'", "#494846");
	this.menuTxt6.name = "menuTxt6";
	this.menuTxt6.lineHeight = 20;
	this.menuTxt6.lineWidth = 27;
	this.menuTxt6.parent = this;
	this.menuTxt6.setTransform(384.3,64.25);

	this.menuTxt5 = new cjs.Text("Formulas", "13px 'Segoe Pro'", "#494846");
	this.menuTxt5.name = "menuTxt5";
	this.menuTxt5.lineHeight = 20;
	this.menuTxt5.parent = this;
	this.menuTxt5.setTransform(302.9,64.25);

	this.menuTxt4 = new cjs.Text("Page Layout", "13px 'Segoe Pro'", "#494846");
	this.menuTxt4.name = "menuTxt4";
	this.menuTxt4.lineHeight = 20;
	this.menuTxt4.parent = this;
	this.menuTxt4.setTransform(201.05,64.25);

	this.menuTxt3 = new cjs.Text("Insert", "13px 'Segoe Pro'", "#494846");
	this.menuTxt3.name = "menuTxt3";
	this.menuTxt3.lineHeight = 20;
	this.menuTxt3.parent = this;
	this.menuTxt3.setTransform(138.2,64.25);

	this.menuTxt2 = new cjs.Text("Home", "13px 'Segoe Pro'", "#494846");
	this.menuTxt2.name = "menuTxt2";
	this.menuTxt2.lineHeight = 20;
	this.menuTxt2.parent = this;
	this.menuTxt2.setTransform(73.85,64.25);

	this.menuTxt1 = new cjs.Text("File", "13px 'Segoe Pro'", "#494846");
	this.menuTxt1.name = "menuTxt1";
	this.menuTxt1.lineHeight = 20;
	this.menuTxt1.parent = this;
	this.menuTxt1.setTransform(20.45,63.9);

	this.topTxt2 = new cjs.Text("On", "11px 'Segoe Pro'", "#257147");
	this.topTxt2.name = "topTxt2";
	this.topTxt2.lineHeight = 17;
	this.topTxt2.parent = this;
	this.topTxt2.setTransform(85.15,22.2);

	this.topTxt1 = new cjs.Text("AutoSave", "13px 'Segoe Pro'", "#FFFFFF");
	this.topTxt1.name = "topTxt1";
	this.topTxt1.lineHeight = 20;
	this.topTxt1.parent = this;
	this.topTxt1.setTransform(21.2,21.45);

	this.oTxt4 = new cjs.Text("100%", "12px 'Segoe Pro'", "#505050");
	this.oTxt4.name = "oTxt4";
	this.oTxt4.lineHeight = 18;
	this.oTxt4.parent = this;
	this.oTxt4.setTransform(1330,720.6);

	this.oTxt1 = new cjs.Text("Ready", "12px 'Segoe Pro'", "#505050");
	this.oTxt1.name = "oTxt1";
	this.oTxt1.lineHeight = 19;
	this.oTxt1.parent = this;
	this.oTxt1.setTransform(8.05,716.15);

	this.oTxt2 = new cjs.Text("Type here to search", "15px 'Segoe Pro'");
	this.oTxt2.name = "oTxt2";
	this.oTxt2.lineHeight = 23;
	this.oTxt2.parent = this;
	this.oTxt2.setTransform(87.95,753.2);

	this.oTxt6 = new cjs.Text("4/1/2019", "12px 'Segoe Pro'", "#FFFFFF");
	this.oTxt6.name = "oTxt6";
	this.oTxt6.lineHeight = 19;
	this.oTxt6.parent = this;
	this.oTxt6.setTransform(1263.45,762.35);

	this.oTxt5 = new cjs.Text("10:10 AM", "12px 'Segoe Pro'", "#FFFFFF");
	this.oTxt5.name = "oTxt5";
	this.oTxt5.lineHeight = 19;
	this.oTxt5.parent = this;
	this.oTxt5.setTransform(1262.5,746.4);

	this.oTxt3 = new cjs.Text("Display Settings", "12px 'Segoe Pro'", "#505050");
	this.oTxt3.name = "oTxt3";
	this.oTxt3.lineHeight = 18;
	this.oTxt3.parent = this;
	this.oTxt3.setTransform(978.2,721.35);

	this.cellTxt39 = new cjs.Text("Fitness", "16px 'Segoe Pro'", "#257247");
	this.cellTxt39.name = "cellTxt39";
	this.cellTxt39.lineHeight = 25;
	this.cellTxt39.parent = this;
	this.cellTxt39.setTransform(120.55,685.4);

	this.topTxt4 = new cjs.Text("Daniella Duarte", "12px 'Segoe Pro'", "#FFFFFF");
	this.topTxt4.name = "topTxt4";
	this.topTxt4.lineHeight = 19;
	this.topTxt4.parent = this;
	this.topTxt4.setTransform(1089.7,22.4);

	this.topTxt3 = new cjs.Text("Fitness Vision – Saved to OneDrive", "13px 'Segoe Pro'", "#FFFFFF");
	this.topTxt3.name = "topTxt3";
	this.topTxt3.lineHeight = 20;
	this.topTxt3.parent = this;
	this.topTxt3.setTransform(577.45,20.7);

	this.menuTxt12 = new cjs.Text("Comments", "13px 'Segoe Pro'", "#257247");
	this.menuTxt12.name = "menuTxt12";
	this.menuTxt12.lineHeight = 19;
	this.menuTxt12.parent = this;
	this.menuTxt12.setTransform(1276.6,63.55);

	this.menuTxt11 = new cjs.Text("Share", "13px 'Segoe Pro'", "#257247");
	this.menuTxt11.name = "menuTxt11";
	this.menuTxt11.lineHeight = 19;
	this.menuTxt11.parent = this;
	this.menuTxt11.setTransform(1199.2,63.55);

	var maskedShapeInstanceList = [this.cellTxt18,this.cellTxt19,this.cellTxt20,this.cellTxt21,this.cellTxt22,this.cellTxt23,this.cellTxt24,this.cellTxt25,this.cellTxt26,this.cellTxt27,this.cellTxt28,this.cellTxt29,this.cellTxt30,this.cellTxt31,this.cellTxt32,this.cellTxt33,this.cellTxt34,this.cellTxt35,this.cellTxt36,this.cellTxt37,this.cellTxt38,this.cellTxt1,this.cellTxt2,this.cellTxt3,this.cellTxt4,this.cellTxt5,this.cellTxt6,this.cellTxt7,this.cellTxt8,this.cellTxt9,this.cellTxt10,this.cellTxt11,this.cellTxt12,this.cellTxt13,this.cellTxt14,this.cellTxt16,this.cellTxt15,this.cellTxt17,this.menuTxt10,this.menuTxt9,this.menuTxt8,this.menuTxt7,this.menuTxt6,this.menuTxt5,this.menuTxt4,this.menuTxt3,this.menuTxt2,this.menuTxt1,this.topTxt2,this.topTxt1,this.oTxt4,this.oTxt1,this.oTxt2,this.oTxt6,this.oTxt5,this.oTxt3,this.cellTxt39,this.topTxt4,this.topTxt3,this.menuTxt12,this.menuTxt11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.menuTxt11},{t:this.menuTxt12},{t:this.topTxt3},{t:this.topTxt4},{t:this.cellTxt39},{t:this.oTxt3},{t:this.oTxt5},{t:this.oTxt6},{t:this.oTxt2},{t:this.oTxt1},{t:this.oTxt4},{t:this.topTxt1},{t:this.topTxt2},{t:this.menuTxt1},{t:this.menuTxt2},{t:this.menuTxt3},{t:this.menuTxt4},{t:this.menuTxt5},{t:this.menuTxt6},{t:this.menuTxt7},{t:this.menuTxt8},{t:this.menuTxt9},{t:this.menuTxt10},{t:this.cellTxt17},{t:this.cellTxt15},{t:this.cellTxt16},{t:this.cellTxt14},{t:this.cellTxt13},{t:this.cellTxt12},{t:this.cellTxt11},{t:this.cellTxt10},{t:this.cellTxt9},{t:this.cellTxt8},{t:this.cellTxt7},{t:this.cellTxt6},{t:this.cellTxt5},{t:this.cellTxt4},{t:this.cellTxt3},{t:this.cellTxt2},{t:this.cellTxt1},{t:this.cellTxt38},{t:this.cellTxt37},{t:this.cellTxt36},{t:this.cellTxt35},{t:this.cellTxt34},{t:this.cellTxt33},{t:this.cellTxt32},{t:this.cellTxt31},{t:this.cellTxt30},{t:this.cellTxt29},{t:this.cellTxt28},{t:this.cellTxt27},{t:this.cellTxt26},{t:this.cellTxt25},{t:this.cellTxt24},{t:this.cellTxt23},{t:this.cellTxt22},{t:this.cellTxt21},{t:this.cellTxt20},{t:this.cellTxt19},{t:this.cellTxt18}]}).wait(1));

	// Livello_3
	this.instance_2 = new lib.ClipGroup_51();
	this.instance_2.parent = this;
	this.instance_2.setTransform(683,384,1,1,0,0,0,683,384);

	this.instance_3 = new lib.ClipGroup_1_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(683,384,1,1,0,0,0,683,384);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgaADIAAgFIA1AAIAAAFg");
	this.shape_28.setTransform(239.425,14.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgagOIA1AAIgbAdg");
	this.shape_29.setTransform(184.525,16.65);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#51906E").s().p("AgagPIA1AAIgbAfg");
	this.shape_30.setTransform(219.525,16.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgagOIA1AAIgbAdg");
	this.shape_31.setTransform(239.425,18.35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#257247").s().p("EhqtACoIAAlQMDVbAAAIAAFQg");
	this.shape_32.setTransform(683,16.85);

	this.instance_4 = new lib.ClipGroup_2_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(683,384,1,1,0,0,0,683,384);

	this.instance_5 = new lib.ClipGroup_3_0();
	this.instance_5.parent = this;
	this.instance_5.setTransform(683,384,1,1,0,0,0,683,384);

	this.instance_6 = new lib.ClipGroup_4_0();
	this.instance_6.parent = this;
	this.instance_6.setTransform(683,384,1,1,0,0,0,683,384);

	this.instance_7 = new lib.ClipGroup_5_0();
	this.instance_7.parent = this;
	this.instance_7.setTransform(683,384,1,1,0,0,0,683,384);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#787878").s().p("AgJAoIAAgeIgeAAIAAgTIAeAAIAAgeIATAAIAAAeIAeAAIAAATIgeAAIAAAeg");
	this.shape_33.setTransform(211.375,687.625);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#787878").s().p("AgRABIAjgjIAABFg");
	this.shape_34.setTransform(633.225,688.25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#ABABAB").s().p("AhKBLIAAiVICVAAIAACVgAhABBICBAAIAAiBIiBAAg");
	this.shape_35.setTransform(633.55,688.25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhFBGIAAiLICLAAIAACLg");
	this.shape_36.setTransform(633.55,688.25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#ABABAB").s().p("A4wBLIAAiVMAxhAAAIAACVgA4mBBMAxNAAAIAAiBMgxNAAAg");
	this.shape_37.setTransform(799.575,688.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("A4rBGIAAiLMAxXAAAIAACLg");
	this.shape_38.setTransform(799.575,688.25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#787878").s().p("AgSgiIAlAiIglAjg");
	this.shape_39.setTransform(1328.4,688.25);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#ABABAB").s().p("AhKBLIAAiVICVAAIAACVgAhABBICBAAIAAiBIiBAAg");
	this.shape_40.setTransform(1328.05,688.25);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AhFBGIAAiLICLAAIAACLg");
	this.shape_41.setTransform(1328.05,688.25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#DBDBDB").s().p("Eg2RABLIAAiVMBsjAAAIAACVg");
	this.shape_42.setTransform(988.15,688.25);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B3B2B3").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_43.setTransform(609.75,691.775);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B3B2B3").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_44.setTransform(609.75,687.775);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B3B2B3").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_45.setTransform(609.75,683.775);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F3F2F1").s().p("EhqtAB6IAAjyMDVbAAAIAADyg");
	this.shape_46.setTransform(683,714.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BFBFBF").s().p("EhqtAAFIAAgJMDVbAAAIAAAJg");
	this.shape_47.setTransform(683,702.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#999999").s().p("EhoXAAFIAAgJMDQvAAAIAAAJg");
	this.shape_48.setTransform(668,674.3);

	this.instance_8 = new lib.ClipGroup_6_0();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1299.25,134.3,1,1,0,0,0,0.5,10);

	this.instance_9 = new lib.ClipGroup_7_0();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1224.35,134.3,1,1,0,0,0,0.5,10);

	this.instance_10 = new lib.ClipGroup_8_0();
	this.instance_10.parent = this;
	this.instance_10.setTransform(1149.4,134.3,1,1,0,0,0,0.5,10);

	this.instance_11 = new lib.ClipGroup_9_0();
	this.instance_11.parent = this;
	this.instance_11.setTransform(1074.45,134.3,1,1,0,0,0,0.5,10);

	this.instance_12 = new lib.ClipGroup_10_0();
	this.instance_12.parent = this;
	this.instance_12.setTransform(999.4,134.3,1,1,0,0,0,0.5,10);

	this.instance_13 = new lib.ClipGroup_11_0();
	this.instance_13.parent = this;
	this.instance_13.setTransform(924.45,134.3,1,1,0,0,0,0.5,10);

	this.instance_14 = new lib.ClipGroup_12_0();
	this.instance_14.parent = this;
	this.instance_14.setTransform(849.45,134.3,1,1,0,0,0,0.5,10);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D1D2D2").s().p("AgEBkIAAjHIAJAAIAADHg");
	this.shape_49.setTransform(774.5,134.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D1D2D2").s().p("AgEBkIAAjHIAJAAIAADHg");
	this.shape_50.setTransform(699.5,134.3);

	this.instance_15 = new lib.ClipGroup_13_0();
	this.instance_15.parent = this;
	this.instance_15.setTransform(624.45,134.3,1,1,0,0,0,0.5,10);

	this.instance_16 = new lib.ClipGroup_14_0();
	this.instance_16.parent = this;
	this.instance_16.setTransform(549.45,134.3,1,1,0,0,0,0.5,10);

	this.instance_17 = new lib.ClipGroup_15_0();
	this.instance_17.parent = this;
	this.instance_17.setTransform(475.45,134.3,1,1,0,0,0,0.5,10);

	this.instance_18 = new lib.ClipGroup_16_0();
	this.instance_18.parent = this;
	this.instance_18.setTransform(400.45,134.3,1,1,0,0,0,0.5,10);

	this.instance_19 = new lib.ClipGroup_17_0();
	this.instance_19.parent = this;
	this.instance_19.setTransform(325.45,134.3,1,1,0,0,0,0.5,10);

	this.instance_20 = new lib.ClipGroup_18_0();
	this.instance_20.parent = this;
	this.instance_20.setTransform(250.45,134.3,1,1,0,0,0,0.5,10);

	this.instance_21 = new lib.ClipGroup_19_0();
	this.instance_21.parent = this;
	this.instance_21.setTransform(175.45,134.3,1,1,0,0,0,0.5,10);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B4B4B4").s().p("Ag7A8IB3h3IAAB3g");
	this.shape_51.setTransform(16,135.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#999999").s().p("EhmbAAFIAAgJMDM3AAAIAAAJg");
	this.shape_52.setTransform(680.625,144.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E6E6E6").s().p("EhqtACLIAAkVMDVbAAAIAAEVg");
	this.shape_53.setTransform(683,688.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#999999").s().p("EgAEAq1MAAAhVpIAJAAMAAABVpg");
	this.shape_54.setTransform(25.5,418.4);

	this.instance_22 = new lib.ClipGroup_20_0();
	this.instance_22.parent = this;
	this.instance_22.setTransform(12.5,669.8,1,1,0,0,0,12.5,0.5);

	this.instance_23 = new lib.ClipGroup_21();
	this.instance_23.parent = this;
	this.instance_23.setTransform(12.5,644.8,1,1,0,0,0,12.5,0.5);

	this.instance_24 = new lib.ClipGroup_22();
	this.instance_24.parent = this;
	this.instance_24.setTransform(12.5,619.8,1,1,0,0,0,12.5,0.5);

	this.instance_25 = new lib.ClipGroup_23();
	this.instance_25.parent = this;
	this.instance_25.setTransform(12.5,594.8,1,1,0,0,0,12.5,0.5);

	this.instance_26 = new lib.ClipGroup_24();
	this.instance_26.parent = this;
	this.instance_26.setTransform(12.5,569.8,1,1,0,0,0,12.5,0.5);

	this.instance_27 = new lib.ClipGroup_25();
	this.instance_27.parent = this;
	this.instance_27.setTransform(12.5,544.8,1,1,0,0,0,12.5,0.5);

	this.instance_28 = new lib.ClipGroup_26();
	this.instance_28.parent = this;
	this.instance_28.setTransform(12.5,519.8,1,1,0,0,0,12.5,0.5);

	this.instance_29 = new lib.ClipGroup_27();
	this.instance_29.parent = this;
	this.instance_29.setTransform(12.5,494.8,1,1,0,0,0,12.5,0.5);

	this.instance_30 = new lib.ClipGroup_28();
	this.instance_30.parent = this;
	this.instance_30.setTransform(12.5,469.8,1,1,0,0,0,12.5,0.5);

	this.instance_31 = new lib.ClipGroup_29();
	this.instance_31.parent = this;
	this.instance_31.setTransform(12.5,444.8,1,1,0,0,0,12.5,0.5);

	this.instance_32 = new lib.ClipGroup_30();
	this.instance_32.parent = this;
	this.instance_32.setTransform(12.5,419.8,1,1,0,0,0,12.5,0.5);

	this.instance_33 = new lib.ClipGroup_31();
	this.instance_33.parent = this;
	this.instance_33.setTransform(12.5,394.8,1,1,0,0,0,12.5,0.5);

	this.instance_34 = new lib.ClipGroup_32();
	this.instance_34.parent = this;
	this.instance_34.setTransform(12.5,369.8,1,1,0,0,0,12.5,0.5);

	this.instance_35 = new lib.ClipGroup_33();
	this.instance_35.parent = this;
	this.instance_35.setTransform(12.5,344.8,1,1,0,0,0,12.5,0.5);

	this.instance_36 = new lib.ClipGroup_34();
	this.instance_36.parent = this;
	this.instance_36.setTransform(12.5,319.8,1,1,0,0,0,12.5,0.5);

	this.instance_37 = new lib.ClipGroup_35();
	this.instance_37.parent = this;
	this.instance_37.setTransform(12.5,294.8,1,1,0,0,0,12.5,0.5);

	this.instance_38 = new lib.ClipGroup_36();
	this.instance_38.parent = this;
	this.instance_38.setTransform(12.5,269.8,1,1,0,0,0,12.5,0.5);

	this.instance_39 = new lib.ClipGroup_37();
	this.instance_39.parent = this;
	this.instance_39.setTransform(12.5,244.8,1,1,0,0,0,12.5,0.5);

	this.instance_40 = new lib.ClipGroup_38();
	this.instance_40.parent = this;
	this.instance_40.setTransform(12.5,219.8,1,1,0,0,0,12.5,0.5);

	this.instance_41 = new lib.ClipGroup_39();
	this.instance_41.parent = this;
	this.instance_41.setTransform(12.5,194.85,1,1,0,0,0,12.5,0.5);

	this.instance_42 = new lib.ClipGroup_40();
	this.instance_42.parent = this;
	this.instance_42.setTransform(12.5,169.8,1,1,0,0,0,12.5,0.5);

	this.instance_43 = new lib.ClipGroup_41();
	this.instance_43.parent = this;
	this.instance_43.setTransform(12.5,144.8,1,1,0,0,0,12.5,0.5);

	this.instance_44 = new lib.ClipGroup_42();
	this.instance_44.parent = this;
	this.instance_44.setTransform(100.45,134.3,1,1,0,0,0,0.5,10);

	this.instance_45 = new lib.ClipGroup_43();
	this.instance_45.parent = this;
	this.instance_45.setTransform(25.45,134.3,1,1,0,0,0,0.5,10);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#999999").s().p("EgAEAqkMAAAhVHIAJAAMAAABVHg");
	this.shape_55.setTransform(1335.8,417.25);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("Ehm0AqDMAAAhUFMDNpAAAMAAABUFg");
	this.shape_56.setTransform(680.1452,410.4573,0.9954,0.9861);

	this.instance_46 = new lib.ClipGroup_44();
	this.instance_46.parent = this;
	this.instance_46.setTransform(683,384,1,1,0,0,0,683,384);

	this.instance_47 = new lib.ClipGroup_45();
	this.instance_47.parent = this;
	this.instance_47.setTransform(458.75,741,1,1,0,0,0,5.8,2.5);

	this.instance_48 = new lib.ClipGroup_46();
	this.instance_48.parent = this;
	this.instance_48.setTransform(683,384,1,1,0,0,0,683,384);

	this.instance_49 = new lib.ClipGroup_47();
	this.instance_49.parent = this;
	this.instance_49.setTransform(683,384,1,1,0,0,0,683,384);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#707070").s().p("AgEDIIAAmPIAJAAIAAGPg");
	this.shape_57.setTransform(1362.5,748);

	this.instance_50 = new lib.ClipGroup_48();
	this.instance_50.parent = this;
	this.instance_50.setTransform(683,384,1,1,0,0,0,683,384);

	this.instance_51 = new lib.ClipGroup_49();
	this.instance_51.parent = this;
	this.instance_51.setTransform(683,384,1,1,0,0,0,683,384);

	this.instance_52 = new lib.ClipGroup_50();
	this.instance_52.parent = this;
	this.instance_52.setTransform(683,384,1,1,0,0,0,683,384);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E6E6E6").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	this.shape_58.setTransform(683,384);

	var maskedShapeInstanceList = [this.instance_2,this.instance_3,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.shape_49,this.shape_50,this.instance_15,this.instance_16,this.instance_17,this.instance_18,this.instance_19,this.instance_20,this.instance_21,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.instance_22,this.instance_23,this.instance_24,this.instance_25,this.instance_26,this.instance_27,this.instance_28,this.instance_29,this.instance_30,this.instance_31,this.instance_32,this.instance_33,this.instance_34,this.instance_35,this.instance_36,this.instance_37,this.instance_38,this.instance_39,this.instance_40,this.instance_41,this.instance_42,this.instance_43,this.instance_44,this.instance_45,this.shape_55,this.shape_56,this.instance_46,this.instance_47,this.instance_48,this.instance_49,this.shape_57,this.instance_50,this.instance_51,this.instance_52,this.shape_58];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.shape_57},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.shape_56},{t:this.shape_55},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_50},{t:this.shape_49},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15, new cjs.Rectangle(0,0,1366,768), null);


(lib.softwarevector = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.excel.cache(-1366,-768,2732,1536,1.5)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Livello_1
	this.excel = new lib.ClipGroup_15();
	this.excel.name = "excel";
	this.excel.parent = this;
	this.excel.setTransform(591.9,332.7,0.8667,0.8667,0,0,0,683,383.9);

	this.timeline.addTween(cjs.Tween.get(this.excel).wait(1));

}).prototype = getMCSymbolPrototype(lib.softwarevector, new cjs.Rectangle(0,0,1183.9,676.5), null);


(lib.screen_new = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graphs
	this.graphs = new lib.graphs();
	this.graphs.name = "graphs";
	this.graphs.parent = this;
	this.graphs.setTransform(486.85,166.45,1.0889,1.0889,0,0,0,468.7,181.3);

	this.timeline.addTween(cjs.Tween.get(this.graphs).wait(1));

	// software
	this.instance = new lib.softwarevector();
	this.instance.parent = this;
	this.instance.setTransform(483.1,144.15,1,1,0,0,0,591.9,332.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.screen_new, new cjs.Rectangle(-108.8,-188.6,1183.8999999999999,676.4), null);


(lib.devices = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.icon = new lib.icon();
	this.icon.name = "icon";
	this.icon.parent = this;
	this.icon.setTransform(-47.05,60.95,1.0066,1.0007,0,0,0,-0.4,0.2);

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(1));

	// screen
	this.screen = new lib.screen_new();
	this.screen.name = "screen";
	this.screen.parent = this;
	this.screen.setTransform(177.85,200.7,0.3809,0.3809,0,0,0,468.8,181.6);

	this.timeline.addTween(cjs.Tween.get(this.screen).wait(1));

	// laptop
	this.instance = new lib.laptop_ai();
	this.instance.parent = this;
	this.instance.setTransform(88.1,150.95,1,1,0,0,0,156.3,106.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.shadow = new lib.laptopshadow_1();
	this.shadow.name = "shadow";
	this.shadow.parent = this;
	this.shadow.setTransform(178.9,316.35,1,1,0,0,0,474.9,72.2);

	this.timeline.addTween(cjs.Tween.get(this.shadow).wait(1));

}).prototype = getMCSymbolPrototype(lib.devices, new cjs.Rectangle(-296,9,950,389), null);


(lib.anim_blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Devices
	this.laptop = new lib.devices();
	this.laptop.name = "laptop";
	this.laptop.parent = this;
	this.laptop.setTransform(145.15,137.5,1,1,0,0,0,177.7,196.5);

	this.timeline.addTween(cjs.Tween.get(this.laptop).wait(1));

}).prototype = getMCSymbolPrototype(lib.anim_blue, new cjs.Rectangle(-328.5,-50.1,949.9,389.1), null);


(lib.mainMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// replay
	this.replay_btn = new lib.replay_btn();
	this.replay_btn.name = "replay_btn";
	this.replay_btn.parent = this;
	this.replay_btn.setTransform(144.3,3.6,0.3475,0.3475,0,0,180,-0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.replay_btn).wait(1));

	// MSoftLogo
	this.logo_intro = new lib.logos();
	this.logo_intro.name = "logo_intro";
	this.logo_intro.parent = this;
	this.logo_intro.setTransform(58.05,21,0.3087,0.3087,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.logo_intro).wait(1));

	// CTA
	this.txtCta = new lib.cta();
	this.txtCta.name = "txtCta";
	this.txtCta.parent = this;
	this.txtCta.setTransform(99.65,568.9,1,1,0,0,0,0.7,0.1);

	this.timeline.addTween(cjs.Tween.get(this.txtCta).wait(1));

	// CTA_BG
	this.cta = new lib.CTA_btn();
	this.cta.name = "cta";
	this.cta.parent = this;
	this.cta.setTransform(134.75,569.45,0.9433,0.9433,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// phone
	this.phone = new lib.phonenew();
	this.phone.name = "phone";
	this.phone.parent = this;
	this.phone.setTransform(79.55,327.85,2.1039,2.1039,0,0,0,22.9,42.5);

	this.timeline.addTween(cjs.Tween.get(this.phone).wait(1));

	// anim
	this.anim_1 = new lib.anim_blue();
	this.anim_1.name = "anim_1";
	this.anim_1.parent = this;
	this.anim_1.setTransform(74.15,302.5,0.3954,0.3954,0,0,0,13.2,12.9);

	this.timeline.addTween(cjs.Tween.get(this.anim_1).wait(1));

	// logo
	this.logo_1 = new lib.logocopy();
	this.logo_1.name = "logo_1";
	this.logo_1.parent = this;
	this.logo_1.setTransform(48.9,24.45,0.6297,0.6297,0,0,0,1.1,1.2);

	this.timeline.addTween(cjs.Tween.get(this.logo_1).wait(1));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#ECEDEF","#FFFFFF"],[0,1],3,293.7,3.1,173).s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mainMC, new cjs.Rectangle(-63.1,0,377.8,600), null);


// stage content:
(lib.O365_NewYearCampaign_USA_160x600_BAN_Excel_Budgeting_English_NA_NA_ANI_NA_NA_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
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
				if (mc.getTransformedBounds()) mc.cache(mc.getTransformedBounds().width*-1,mc.getTransformedBounds().height*-1,mc.getTransformedBounds().width*2,mc.getTransformedBounds().height*2,1.8)
				exportRoot.mainMC.addChild(mc);
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
				if (mc.getTransformedBounds()) mc.cache(mc.getTransformedBounds().width*-1,mc.getTransformedBounds().height*-1,mc.getTransformedBounds().width*2,mc.getTransformedBounds().height*2,1.8)
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
		
		
		var mc = exportRoot.mainMC
		var laptop = mc.anim_1.laptop
		
		mc.cta.alpha=0
		mc.anim_1.alpha=0
		mc.replay_btn.alpha=0
		
		
		
		
		this.runBanner = function() {
			
			mc.cta.alpha=1
			mc.anim_1.alpha=1
			mc.replay_btn.alpha=1
			
			this.tl1 = new TimelineLite();
			this.tl2 = new TimelineLite();
			
				laptop.shadow.alpha = 0.2;
				
				exportRoot.tl1.from(mc.phone, 2, {x:"+=200", ease:Power3.easeOut}, "+=1");
				
		
				//Manage
				exportRoot.tl1.from(exportRoot.headline1, 0.01, {alpha: 0, ease:Power4.easeOut}, "-=0.5");
				
				exportRoot.tl1.to(exportRoot.headline1, 0.01, {alpha: 0, ease:Power4.easeIn}, "+=0.3");
				
				//your finances
				exportRoot.tl1.from(exportRoot.headline2, 0.01, {alpha: 0, ease:Power4.easeOut}, "-=0.01");
				exportRoot.tl1.from(exportRoot.headline3, 0.01, {alpha: 0, ease:Power4.easeOut}, "+=0.2");
				
				exportRoot.tl1.to(exportRoot.headline2, 0.01, {alpha: 0, ease:Power4.easeIn}, "+=.5");
				exportRoot.tl1.to(exportRoot.headline3, 0.01, {alpha: 0, ease:Power4.easeIn}, "-=0.01");
				
				//year-round
				exportRoot.tl1.from(exportRoot.headline4, 0.01, {alpha: 0, ease:Power4.easeOut}, "-=0.01");
				exportRoot.tl1.from(exportRoot.headline5, 0.01, {alpha: 0, ease:Power4.easeOut}, "+=0.2");
				
				exportRoot.tl1.to(exportRoot.headline4, 0.01, {alpha: 0, ease:Power4.easeIn}, "+=.6");
				exportRoot.tl1.to(exportRoot.headline5, 0.01, {alpha: 0, ease:Power4.easeIn}, "-=0.01");
				
				//with
				exportRoot.tl1.from(exportRoot.headline6, 0.01, {alpha: 0, ease:Power4.easeOut}, "-=0.01");
				
				exportRoot.tl1.to(exportRoot.headline6, 0.01, {alpha: 0, ease:Power4.easeIn}, "+=0.4");
				
				//budject-tracking
				exportRoot.tl1.from(exportRoot.headline7, 0.01, {alpha: 0, ease:Power4.easeOut}, "-=0.01");
				exportRoot.tl1.from(exportRoot.headline8, 0.01, {alpha: 0, ease:Power4.easeOut}, "+=0.2");
				
				exportRoot.tl1.to(exportRoot.headline7, 0.01, {alpha: 0, ease:Power4.easeIn}, "+=0.55");
				exportRoot.tl1.to(exportRoot.headline8, 0.01, {alpha: 0, ease:Power4.easeIn}, "-=0.01");
				
				//templates
				exportRoot.tl1.from(exportRoot.headline9, 0.01, {alpha: 0, ease:Power4.easeOut}, "-=0.01");
				
				exportRoot.tl1.to(exportRoot.headline9, 0.01, {alpha: 0, ease:Power4.easeIn}, "+=0.3");
				//in Excel
				
				exportRoot.tl1.from(exportRoot.headline10, 0.01, {alpha: 0, ease:Power4.easeOut}, "-=0.01");
				exportRoot.tl1.from(exportRoot.headline11, 0.01, {alpha: 0, ease:Power4.easeOut, onStart: function(){mc.phone.screen.graphs.gotoAndPlay(1);}}, "+=0.2");
				
				exportRoot.tl1.to(exportRoot.headline10, 0.5, {alpha: 0, ease:Power4.easeIn}, "+=1.5");
				exportRoot.tl1.to(exportRoot.headline11, 0.5, {alpha: 0, ease:Power4.easeIn}, "-=0.5");
		
				
		
				//devices.gotoAndStop(1);
				
				exportRoot.tl1.to(mc.phone, 1.75, {x:"-=41.01", y:"+=61.9", scaleX:1.02, scaleY:1.02, ease:Power3.easeInOut}, "-=0.2");
				exportRoot.tl1.to(mc.phone.icon, 1.75, {alpha:0, ease:Power3.easeInOut}, "-=1.75");
				exportRoot.tl1.from(laptop, 1, {x: "+=360", ease:Power3.easeOut}, "-=1");
				
			
				
				for (var i = 0; i < exportRoot.headline12.length; i++) {
				if (i==0) exportRoot.tl1.from(exportRoot.headline12[i], 0.8, { x: "+=75", alpha: 0, ease:Power4.easeOut}, "-=0.9");
				if (i!=0) exportRoot.tl1.from(exportRoot.headline12[i], 0.8, { x: "+=75", alpha: 0, ease:Power4.easeOut}, "-=0.7");
				}
				
				for (var i = 0; i < exportRoot.headline13.length; i++) {
				if (i==0) exportRoot.tl1.from(exportRoot.headline13[i], 0.8, { x: "+=75", alpha: 0, ease:Power4.easeOut}, "-=0.6");
				if (i!=0) exportRoot.tl1.from(exportRoot.headline13[i], 0.8, { x: "+=75", alpha: 0, ease:Power4.easeOut}, "-=0.7");
				}
				
				exportRoot.tl1.from(mc.replay_btn, 0.7, { alpha: 0,ease:Power4.easeOut, onStart:function(){exportRoot.isReplay = true;}}, "-=0.6");	
				exportRoot.tl1.from(mc.txtCta, 0.7, { alpha: 0, x: "+=50",	ease:Power4.easeOut}, "-=0.6");
				exportRoot.tl1.from(mc.cta, 0.7, {	alpha: 0, x: "+=50", ease:Power4.easeOut}, "-=0.7");
		
			
			mc.logo_intro.gotoAndPlay(1)
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mainMC
	this.mainMC = new lib.mainMC();
	this.mainMC.name = "mainMC";
	this.mainMC.parent = this;
	this.mainMC.setTransform(0,0.1,1,1,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.mainMC).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.9,300,297.8,300);
// library properties:
lib.properties = {
	id: '90A26FE74B042E4A89CA750D1DA2DF1F',
	width: 160,
	height: 600,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/O365_NewYearCampaign_USA_160x600_BAN_Excel_Budgeting_English_NA_NA_ANI_NA_NA_1_atlas_.png?1574942141387", id:"O365_NewYearCampaign_USA_160x600_BAN_Excel_Budgeting_English_NA_NA_ANI_NA_NA_1_atlas_"}
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