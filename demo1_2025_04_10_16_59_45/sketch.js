let c1,c2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  c1 = color(255);
  c2 = color(63, 191, 191);
  
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
  
}
function draw() {
  //background(220);
// console.log(c2);
}
   //hair top
  noStroke();
  fill("#0C0C0C")
  circle(358, 260, 220);
  
  //Braids
  circle (440, 280, 110);
  //Braids 2
  circle (440, 380, 110);
  
// Body 
  fill("#3F51B5");
  quad(320, 370, 380, 370, 510, 430, 190, 430);
  rect(190, 430, 320, 70);
  //Neck
  
  fill("#F1C27D");
  quad(330, 310, 370, 310, 380, 370, 320, 370);
  
  // Head
  fill("#F1C27D")
  circle(350, 250, 170);
  

  //Earrings 1
  fill("#FFE200")
  strokeWeight(2);
  //left
  circle(260, 300, 50, 260, 270, 300);
  
  //right
  circle(440, 300, 50, 260, 90, 900);
  
    
  //Earrings 2
  fill("#FFFFFF")
  strokeWeight(2);
  //left ball
  circle(260, 325, 10, 260, 900, 900);
  
  //right ball
  circle(440, 325, 10, 230, 900, 900);
  
  
  // Nose
  fill(255, 0, 0); // Red
  ellipse(350, 280, 20, 10);
  
  
  //Eyes and Eyebrows
  stroke(0);
  strokeWeight(1);
  noFill();
  //Eyes
  arc(310, 260, 40, 40, PI, TWO_PI, OPEN);
  arc(380, 260, 40, 40, PI, TWO_PI, OPEN);
  
  //Eyebrows
  strokeWeight(2);
  //Left EyeBrow
  arc(300, 219, 45, 45, PI, TWO_PI, OPEN);
  //Right EyeBrow
  arc(390, 215, 45, 45, PI, TWO_PI, OPEN);
  
  // Pupils
  fill(0); // Black
  //Left Pupil 
  ellipse(315, 250, 15, 15);
  //Right Pupil 
  ellipse(385,250, 15, 15);
  
  //Mouth
  fill("#FF9D9D")
  strokeWeight(1);
  stroke(0);
  arc(350, 290, 50, 50, TWO_PI, PI, OPEN);
  

}