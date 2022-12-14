function setup() {
createCanvas(100, 100);
noStroke();
}

function draw() {
background(255);

// draw the face
fill(255, 204, 0);
ellipse(50, 50, 80, 80);

// draw the eyes
fill(0);
ellipse(40, 45, 10, 10);
ellipse(60, 45, 10, 10);

// draw the mouth
fill(0);
arc(50, 55, 30, 30, 0, PI, CHORD);
}