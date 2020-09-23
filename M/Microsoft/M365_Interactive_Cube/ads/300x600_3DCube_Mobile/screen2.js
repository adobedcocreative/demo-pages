(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"screen2_atlas_1", frames: [[0,450,385,217],[0,0,395,448]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
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



(lib.OneDriveSceneFinal = function() {
	this.initialize(ss["screen2_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.OneDriveDevices = function() {
	this.initialize(ss["screen2_atlas_1"]);
	this.gotoAndStop(1);
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


(lib.static_2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.OneDriveSceneFinal();
	this.instance.setTransform(-14,-8,1.5668,1.5668);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.static_2, new cjs.Rectangle(-14,-8,603.3,340), null);


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


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("A07L9IAA35MAp3AAAIAAX5g");
	this.shape.setTransform(134,76.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,268,153), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.OneDriveDevices();
	this.instance.setTransform(14,-21,0.6891,0.6891);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(14,-21,272.2,308.7), null);


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
		this.ms.cache(-105,-16,210,32,1.5)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.ms = new lib.ms();
	this.ms.name = "ms";
	this.ms.setTransform(13.65,1.05);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEBA00").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape.setTransform(-34.375,7.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#03A5EA").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_1.setTransform(-45.675,7.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7CBB01").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_2.setTransform(-34.375,-4.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F25022").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_3.setTransform(-45.675,-4.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.ms}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MSFT_Logo_anim, new cjs.Rectangle(-50.8,-9.3,132.39999999999998,21.5), null);


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

	// txt
	this.txt = new lib.txt_mc();
	this.txt.name = "txt";
	this.txt.setTransform(70.5,150.5,1,1,0,0,0,70.5,70.5);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// VidStatic
	this.static2 = new lib.static_2();
	this.static2.name = "static2";
	this.static2.setTransform(250.65,166.1,1,1,0,0,0,287.6,162);

	this.timeline.addTween(cjs.Tween.get(this.static2).wait(1));

	// logo
	this.instance = new lib.MSFT_Logo_anim();
	this.instance.setTransform(101,384.15,1.3814,1.3814,0,0,0,0.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// img
	this.instance_1 = new lib.ClipGroup();
	this.instance_1.setTransform(258.5,756.5,1.9104,1.9104,0,0,0,150,152);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("Egp3BTwMAAAinfMBTvAAAMAAACnfg");
	this.shape.setTransform(256,512);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mainMC, new cjs.Rectangle(-50.9,-24,603.1999999999999,1173.5), null);


// stage content:
(lib.screen2 = function(mode,startPosition,loop,reversed) {
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
		var mc = exportRoot2.mainMC
		exportRoot2.replayAnim = "inProgress"
		
		this.initBanner = function (data) {
			
			exportRoot2.isReplay = false;
			exportRoot2.shadowReplay = false;
			
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
					var id = keys[i].substr(0, 9);
						if (id == "headline4") {
							exportRoot2['' + keys[i]] = new Array()
							exportRoot2.fillHead(data[keys[i]], exportRoot2['' + keys[i]])
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
				exportRoot2.mainMC.txt.addChild(mc);
				aVar.push(mc)
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
		
		var mc = exportRoot2.mainMC;
		
		
		this.runBanner = function() {
			
		
						
				//this.tlText = new TimelineLite();
				
				//for (var i = 0; i < exportRoot2.headline1_1.length; i++) {
					//if (i==0) this.tlText.from(exportRoot2.headline1_1[i], 0.8, { y: "+=30", alpha: 0, ease:Power4.easeOut}, "+=1");
					//if (i!=0) this.tlText.from(exportRoot2.headline1_1[i], 0.8, { y: "+=30", alpha: 0, ease:Power4.easeOut}, "-=0.65");
				//}
		
				
				
				//this.tlText.from(mc.img, 0.6, { alpha: 0, ease:Power4.easeOut}, "-=0.4");
		
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.mainMC = new lib.mainMC();
	this.mainMC.name = "mainMC";
	this.mainMC.setTransform(256,233.1,1,1,0,0,0,256,233.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ap/KFIAA0JIT/AAIAAUJg");
	this.shape.setTransform(255.875,144.1693,1.9095,1.9095);

	this.instance = new lib.Path_1();
	this.instance.setTransform(254.85,144.8,1.91,1.91,0,0,0,134.1,76.5);
	this.instance.alpha = 0.3008;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#505050").s().p("AhFB1IAAgkQAcARAZgBQA9ABAAg9IAAgTIgBAAQgTAigmgBQggAAgTgXQgTgWAAgmQAAgrAVgaQAUgbAkAAQAhAAARAcIABAAIAAgYIAnAAIAACdQAABghfAAQghAAgZgMgAgfhQQgMAQAAAdQAAAaAMAPQAMAPATAAQAUgBAMgOQANgOAAgWIAAgXQAAgRgMgNQgMgOgSAAQgVABgNAQg");
	this.shape_1.setTransform(336.125,465.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#505050").s().p("AAmBYIAAhgQAAgwgjAAQgQAAgMANQgMANAAAVIAABhIgnAAIAAirIAnAAIAAAcIABAAQATggAkAAQAcAAAOATQAQARgBAjIAABog");
	this.shape_2.setTransform(316.45,461.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#505050").s().p("AgTB+IAAirIAmAAIAACrgAgQhXQgGgGAAgKQAAgJAGgHQAHgGAJAAQAKAAAHAGQAGAHAAAJQAAAJgGAHQgHAGgKAAQgJAAgHgGg");
	this.shape_3.setTransform(301.825,457.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#505050").s().p("AgxBYIAAisIAnAAIAAAkIABAAQAFgSALgKQAMgLAPAAQAKABAGADIAAAlQgHgGgNAAQgSAAgLAQQgLAPAAAaIAABTg");
	this.shape_4.setTransform(292.125,461.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#505050").s().p("Ag5BMQgOgNAAgXQAAgwA4gIIAygHQAAglgjAAQgeAAgYAVIAAgiQAagQAjAAQBCAAAABAIAABvIgmAAIAAgbIgBAAQgSAfghAAQgZAAgPgOgAAAAGQgRADgIAGQgJAFAAAPQAAAMAIAGQAHAIAOgBQAQAAAMgMQAMgMAAgUIAAgOg");
	this.shape_5.setTransform(275.15,461.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#505050").s().p("AAlB/IAAheQAAgygiAAQgQAAgMAPQgLAOAAAXIAABcIgnAAIAAj9IAnAAIAABvIAAAAQAUghAjAAQA5AAAABFIAABqg");
	this.shape_6.setTransform(256.775,457.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#505050").s().p("Ag8BQIAAgkQAWARAbAAQAiAAAAgVQAAgFgDgEQgEgFgEgDIgMgGIgPgFQgLgFgIgEQgJgEgFgGQgGgGgDgIQgCgHAAgKQgBgMAGgKQAGgJAKgHQAKgGANgDQAMgEAMAAQAYAAATAHIAAAiQgSgMgXAAQgIAAgFACQgGABgEACIgHAHQgCAEAAAEQAAAGACAEQADAEAFADIAKAFIAPAFIATAJQAJAEAGAGQAHAGADAIQADAIAAALQAAANgGAJQgGAKgKAGQgKAHgNADQgNADgOAAQgcAAgVgKg");
	this.shape_7.setTransform(239.3,461.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#505050").s().p("AAlBYIAAhgQABgwgjAAQgQAAgMANQgLANAAAVIAABhIgnAAIAAirIAnAAIAAAcIAAAAQAUggAjAAQAcAAAPATQAPARAAAjIAABog");
	this.shape_8.setTransform(212.45,461.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#505050").s().p("AhABCQgXgYAAgoQAAgqAYgZQAZgYApAAQAoAAAXAXQAWAYAAAqQAAAogYAaQgYAYgoAAQgoAAgYgYgAgigqQgOAQAAAbQAAAbAOAPQANAQAWAAQAXAAAMgPQAMgPAAgcQAAgcgMgPQgMgQgXAAQgWAAgNAQg");
	this.shape_9.setTransform(192.025,461.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#505050").s().p("AgTB+IAAirIAmAAIAACrgAgQhXQgGgGAAgKQAAgJAGgHQAHgGAJAAQAKAAAHAGQAGAHAAAJQAAAJgGAHQgHAGgKAAQgJAAgHgGg");
	this.shape_10.setTransform(177.275,457.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#505050").s().p("AgYBCIAAhhIgeAAIAAgfIAeAAIAAgnIAlgLIAAAyIAqAAIAAAfIgqAAIAABVQABAQAFAGQAGAHANAAQAJAAAIgGIAAAeQgMAHgTAAQgwgBAAgvg");
	this.shape_11.setTransform(166.5,458.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#505050").s().p("Ag5BMQgPgNAAgXQAAgwA4gIIAygHQAAglgiAAQgeAAgZAVIAAgiQAcgQAiAAQBBAAAABAIAABvIgmAAIAAgbIAAAAQgSAfgiAAQgZAAgOgOgAgBAGQgQADgJAGQgIAFAAAPQAAAMAHAGQAIAIANgBQASAAALgMQALgMAAgUIAAgOg");
	this.shape_12.setTransform(150.9,461.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#505050").s().p("AgqBCQgYgYAAgmQAAgpAZgaQAagaApAAQAXAAASAIIAAAkQgSgNgUAAQgZAAgOARQgRARABAaQgBAbAPAOQAPAQAZAAQAUAAATgPIAAAiQgVAMgcAAQglAAgXgYg");
	this.shape_13.setTransform(134.4,461.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#505050").s().p("AhABCQgXgYAAgoQAAgqAYgZQAZgYApAAQAoAAAXAXQAWAYAAAqQAAAogYAaQgYAYgoAAQgoAAgYgYgAgigqQgOAQAAAbQAAAbAOAPQANAQAWAAQAXAAAMgPQAMgPAAgcQAAgcgMgPQgMgQgXAAQgWAAgNAQg");
	this.shape_14.setTransform(115.975,461.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#505050").s().p("AgTB/IAAj9IAnAAIAAD9g");
	this.shape_15.setTransform(101.25,457.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#505050").s().p("Ag/BqQgUgXABgoQgBgqAWgZQAVgaAiAAQAiAAAQAcIABAAIAAhqIAmAAIAAD9IgmAAIAAgdIgBAAQgTAhgmAAQggAAgSgXgAgfgCQgMAPAAAdQAAAaAMAPQAMAPAUAAQATAAANgOQAMgPAAgWIAAgXQAAgSgLgMQgMgNgTAAQgVAAgNARg");
	this.shape_16.setTransform(76.35,457.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#505050").s().p("AAmBYIAAhgQgBgwghAAQgRAAgMANQgMANAAAVIAABhIgnAAIAAirIAnAAIAAAcIABAAQATggAkAAQAcAAAOATQAPARAAAjIAABog");
	this.shape_17.setTransform(56.7,461.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#505050").s().p("Ag5BMQgPgNAAgXQAAgwA4gIIAzgHQgBglgiAAQgeAAgYAVIAAgiQAbgQAiAAQBBAAAABAIAABvIglAAIAAgbIgBAAQgSAfgiAAQgZAAgOgOgAgBAGQgQADgJAGQgIAFAAAPQAAAMAHAGQAIAIANgBQASAAALgMQAMgMAAgUIAAgOg");
	this.shape_18.setTransform(37.05,461.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#505050").s().p("Ag8BRIAAglQAWARAaAAQAjAAgBgUQAAgGgCgFQgDgEgFgDIgMgGIgPgGQgLgDgIgGQgJgDgGgGQgFgGgDgHQgDgIABgKQAAgNAFgJQAGgKAKgGQAKgHANgDQAMgDANAAQAXAAATAIIAAAiQgSgNgXAAQgIAAgFABQgGACgEADIgHAGQgCAEAAAFQAAAFACAEQADADAEADIALAGIAOAGIAUAJQAJADAGAHQAGAFAEAIQADAHAAALQAAANgGALQgGAJgKAHQgKAGgNADQgNADgOAAQgcAAgVgJg");
	this.shape_19.setTransform(468.55,423.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#505050").s().p("AhSCAIAAj7IAnAAIAAAfIAAAAQAUgjAlABQAhgBASAXQASAYAAAmQABAqgVAaQgVAagjAAQggAAgSgdIAAAAIAABpgAgghQQgMAOAAAXIAAAUQAAAUAMAMQAMANATgBQAUAAAMgQQANgQAAgfQAAgZgMgOQgLgOgUgBQgTABgOAPg");
	this.shape_20.setTransform(451.2,426.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#505050").s().p("Ag5BNQgOgOAAgXQAAgwA4gIIAygHQAAglgjAAQgeAAgYAWIAAgjQAagQAjAAQBCAAAABAIAABvIgmAAIAAgbIgBAAQgSAfghAAQgZAAgPgNgAAAAHQgRACgIAGQgJAGAAAPQAAAKAIAHQAHAIANAAQARAAAMgNQAMgNAAgSIAAgQg");
	this.shape_21.setTransform(430.85,423.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#505050").s().p("ABZBYIAAhdQABgbgIgMQgIgMgSAAQgQAAgKAPQgKAPAAAWIAABcIgnAAIAAhgQAAgwghAAQgRAAgJAOQgKAPAAAXIAABcIgoAAIAAirIAoAAIAAAcIAAAAQASggAkAAQASAAANAKQANAJAEARQAUgkAlAAQA6AAAABGIAABpg");
	this.shape_22.setTransform(407.25,422.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#505050").s().p("AAlB/IAAheQAAgygiAAQgQAAgMAPQgLAOAAAXIAABcIgnAAIAAj9IAnAAIAABvIAAAAQAUghAjAAQA5AAAABFIAABqg");
	this.shape_23.setTransform(372.525,418.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#505050").s().p("AgZBBIAAhgIgdAAIAAgfIAdAAIAAgnIAngMIAAAzIAoAAIAAAfIgoAAIAABVQgBAQAGAGQAFAGANAAQALAAAGgFIAAAfQgLAFgSABQgyAAAAgxg");
	this.shape_24.setTransform(356.1,420.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#505050").s().p("AgTB+IAAirIAmAAIAACrgAgQhXQgGgGAAgKQAAgJAGgHQAHgGAJAAQAKAAAHAGQAGAHAAAJQAAAJgGAHQgHAGgKAAQgJAAgHgGg");
	this.shape_25.setTransform(345.475,419.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#505050").s().p("AAjBWIgfhzQgCgHgBgIIAAAAQAAAFgCAJIgiB0IgoAAIgyirIAnAAIAgB7QABAGABAJIABAAIACgQIAjh6IAkAAIAfB7IACAPIABAAQABgGACgJIAfh7IAkAAIgyCrg");
	this.shape_26.setTransform(328,423.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#505050").s().p("Ag4BCQgVgXAAgrQAAgmAXgZQAYgaAiAAQAkAAATAXQATAWAAApIAAANIh0AAQABAYAOANQAOANAXABQAcAAAXgRIAAAfQgYAPgmAAQglAAgWgYgAgYgwQgLAMgDAUIBPAAQgBgVgJgLQgKgMgRAAQgQAAgMAMg");
	this.shape_27.setTransform(296.575,423.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#505050").s().p("AgbCBIAAiMIgdAAIAAgfIAdAAIAAgcQAAgbASgPQARgQAaAAQAPAAAIADIAAAgQgIgEgKAAQgcAAAAAgIAAAXIAoAAIAAAfIgoAAIAACMg");
	this.shape_28.setTransform(281.975,418.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#505050").s().p("Ag5BNQgPgOAAgXQAAgwA4gIIAzgHQgBglgiAAQgeAAgYAWIAAgjQAbgQAiAAQBBAAAABAIAABvIglAAIAAgbIgBAAQgSAfgiAAQgZAAgOgNgAAAAHQgRACgJAGQgIAGAAAPQAAAKAHAHQAJAIAMAAQASAAALgNQAMgNAAgSIAAgQg");
	this.shape_29.setTransform(266,423.05);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#505050").s().p("Ag8BRIAAglQAWARAbAAQAhAAABgUQgBgGgDgFQgCgEgGgDIgLgGIgPgGQgLgDgIgGQgJgDgFgGQgGgGgDgHQgDgIAAgKQAAgNAGgJQAGgKAKgGQAKgHAMgDQANgDAMAAQAZAAASAIIAAAiQgSgNgYAAQgHAAgFABQgGACgEADIgGAGQgDAEAAAFQAAAFADAEQACADAFADIALAGIAOAGIAUAJQAIADAGAHQAGAFAEAIQADAHAAALQAAANgGALQgGAJgKAHQgKAGgNADQgOADgNAAQgcAAgVgJg");
	this.shape_30.setTransform(250.25,423.05);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#505050").s().p("Ag4BCQgVgXAAgrQAAgmAXgZQAYgaAiAAQAkAAATAXQATAWAAApIAAANIh0AAQABAYAOANQAOANAXABQAcAAAXgRIAAAfQgYAPgmAAQglAAgWgYgAgYgwQgLAMgDAUIBPAAQgBgVgJgLQgKgMgRAAQgQAAgMAMg");
	this.shape_31.setTransform(224.275,423.05);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#505050").s().p("AgxBXIAAirIAnAAIAAAkIABAAQAFgSALgKQAMgKAPAAQAKgBAGAEIAAAkQgHgFgNAAQgSAAgLAQQgLAPAAAaIAABSg");
	this.shape_32.setTransform(210.075,422.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#505050").s().p("AgaAmIAThLIAhAAIgaBLg");
	this.shape_33.setTransform(198.25,410.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#505050").s().p("AhOB8IAAggQAJADAIAAQAVAAALgWIAMgcIhFirIAsAAIAoB+IADALIABAAIACgLIAsh+IAmAAIhNDHQgXA2gsgBQgMAAgIgCg");
	this.shape_34.setTransform(185.05,427.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#505050").s().p("Ag4BCQgVgXAAgrQAAgmAXgZQAYgaAiAAQAkAAATAXQATAWAAApIAAANIh0AAQABAYAOANQAOANAXABQAcAAAXgRIAAAfQgYAPgmAAQglAAgWgYgAgYgwQgLAMgDAUIBPAAQgBgVgJgLQgKgMgRAAQgQAAgMAMg");
	this.shape_35.setTransform(167.325,423.05);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#505050").s().p("AAlB/IAAheQAAgygiAAQgQAAgMAPQgLAOAAAXIAABcIgnAAIAAj9IAnAAIAABvIAAAAQAUghAjAAQA5AAAABFIAABqg");
	this.shape_36.setTransform(148.175,418.925);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#505050").s().p("AgYBBIAAhgIgeAAIAAgfIAeAAIAAgnIAmgMIAAAzIAoAAIAAAfIgoAAIAABVQAAAQAFAGQAFAGAOAAQAJAAAHgFIAAAfQgLAFgTABQgxAAABgxg");
	this.shape_37.setTransform(131.75,420.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#505050").s().p("AAjBWIgfhzQgCgHAAgIIgBAAQAAAFgDAJIghB0IgoAAIgyirIAnAAIAgB7QABAGABAJIABAAIACgQIAjh6IAkAAIAfB7IACAPIACAAQgBgGADgJIAfh7IAlAAIgzCrg");
	this.shape_38.setTransform(103.15,423.05);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#505050").s().p("AhABCQgXgYAAgoQAAgqAYgYQAZgZApAAQAoAAAXAYQAWAXAAAqQAAAogYAZQgYAZgoAAQgoAAgYgYgAgigqQgOAQAAAbQAAAbAOAQQANAPAWAAQAXAAAMgPQAMgQAAgcQAAgbgMgQQgMgPgXAAQgWAAgNAQg");
	this.shape_39.setTransform(79.875,423.05);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#505050").s().p("AAmBYIAAhgQgBgwghAAQgSAAgLANQgMAOAAAUIAABhIgmAAIAAirIAmAAIAAAdIABAAQATghAkAAQAcAAAOASQAPASABAjIAABog");
	this.shape_40.setTransform(59.75,422.85);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#505050").s().p("AAnB4IhThuIgFgIIgBAAIAAB2IgoAAIAAjvIAoAAIAABxIABAAIAFgJIBQhoIAwAAIheBzIBlB8g");
	this.shape_41.setTransform(40.625,419.625);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF0000").s().p("AnfBQIAAifIO/AAIAACfg");
	this.shape_42.setTransform(122.21,351.35,1.9095,1.9095);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0000").s().p("A07LzIAA3lMAp3AAAIAAXlg");
	this.shape_43.setTransform(255.875,144.1693,1.9095,1.9095);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("EgU7AoAMAAAhP/MAp3AAAMAAABP/g");
	this.shape_44.setTransform(255.875,488.834,1.9095,1.9095);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape},{t:this.mainMC}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(205.1,488,347.19999999999993,560);
// library properties:
lib.properties = {
	id: '20B396A144B6A147B6E87DD2DC23AB3C',
	width: 512,
	height: 1024,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/screen2_atlas_1.png?1600697352313", id:"screen2_atlas_1"}
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
an.compositions['20B396A144B6A147B6E87DD2DC23AB3C'] = {
	getStage: function() { return exportRoot2.stage; },
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

}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;