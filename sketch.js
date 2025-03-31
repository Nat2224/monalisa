function setup() {
  createCanvas(400, 400);
  let olhoX
  let olhoY
}

function draw() {
  background(220);
  //cabeça
  fill(151, 111, 70)
  circle(200,200 ,300 );
  
  //olho direito
  fill(255, 255, 255)
  circle(150,150 ,60 );
  
  //pupila direita
  fill(255, 105, 0)
 // circle(150,150 ,20 );
  
  olhoX = map(mouseX, 0, 400, 130, 155)
  olhoY = map(mouseY, 0, 400, 130, 160)
  
  circle(olhoX, olhoY, 20)
  
  //olho esquerdo
  fill(255, 255, 255)
  circle(250,150 ,60 );
  
  //pupila esquerda
  fill(255, 50, 255)
  //circle(250,150 ,20 );
  
    olhoX = map(mouseX, 0, 400, 130, 155)
  olhoY = map(mouseY, 0, 400, 130, 160)
  
  circle(olhoX+100, olhoY, 20)
  
  //boca
  fill(25)
  line(268, 250, 117, 250);
  triangle(199, 177, 151, 224, 252, 224);
  triangle(92, 95, 136, 66, 82, 34);
  triangle(310, 95, 262, 66, 300, 34);
 
  
  if(mouseIsPressed){
    console.log(mouseX,mouseY)
    
                }
}
