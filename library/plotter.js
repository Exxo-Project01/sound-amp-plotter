var mic;
var vol_history = [];

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  mic = new p5.AudioIn();
  mic.start()
  
}

function draw() {
  background(60,179,113);
  var factor = 100;
  var vol = mic.getLevel()*factor;
  vol_history.push(vol);
  
  for (var x = 0; x < width; x += width / 10) {
		for (var y = 0; y < height; y += height / 10) {
			stroke(192,192,192);
			strokeWeight(1);
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}
  
  beginShape();
  stroke(0,250,154);
  strokeWeight(3);
  noFill();
  for(let i=0;i<vol_history.length;i++){
    var y = map(vol_history[i], -1,1,height,-1);
    vertex(i, y);
  }
  endShape();
  
  if(vol_history.length>windowWidth-(windowWidth-5)){
     vol_history.splice(0,1) 
  }
  
  
}

window.onresize = function() {
  canvas.size(windowWidth, windowHeight);
};
