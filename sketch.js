var speed = 0.09;
var morphInteral = 1000;

var minMov = -200;
var maxMov = 200;
var gui;

var startTime;

var vecsCurrent = [
  {
    x: 84,
    y: 91
  },
  {
    x: 84,
    y: 91
  },
  {
    x: 68,
    y: 19
  },
  {
    x: 21,
    y: 17
  },
  {
    x: 32,
    y: 91
  },
  {
    x: 32,
    y: 91
  },
  {
    x: 84,
    y: 91
  },
  {
    x: 84,
    y: 91
  }
]

var vecsNew = [
  {
    x: 84,
    y: 91
  },
  {
    x: 84,
    y: 91
  },
  {
    x: 68,
    y: 19
  },
  {
    x: 21,
    y: 17
  },
  {
    x: 32,
    y: 91
  },
  {
    x: 32,
    y: 91
  },
  {
    x: 84,
    y: 91
  },
  {
    x: 84,
    y: 91
  }
]


function setup() {
  startTime = millis();
  createCanvas(400, 400);
  gui = createGui('Params');
  sliderRange(0, 1, 0.01);
  gui.addGlobals('speed');
  sliderRange(0, 1000, 100);
  gui.addGlobals('morphInteral');
}

function createRandon(x) {
  return (speed * random(minMov, maxMov)) + x;
}

function draw() {
  var timeElapsed = (millis() - startTime);

  background(255);
  stroke(0, 0, 0);
  beginShape();

  for(i = 0; i < vecsCurrent.length - 1; i++) {
    var vec = vecsCurrent[i];
    var vecNew = vecsNew[i];

    if(timeElapsed > morphInteral) {
      let newX = createRandon(vecNew.x);
      let newY = createRandon(vecNew.y);
      vecNew.x = newX;
      vecNew.y = newY;

      startTime = millis();
    }
    

    let calcPos = p5.Vector.lerp(createVector(vec.x, vec.y), createVector(vecNew.x, vecNew.y), speed);

    curveVertex(calcPos.x, calcPos.y);

    vec.x = calcPos.x;
    vec.y = calcPos.y;
  }
  endShape();
}