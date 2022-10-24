var reactColours = [
  ['grey','blue','wheat'],
  ['tomato','teal','red'],
  ['papayawhip','cyan','fuchsia']
];
var ellipseClours = [
  ['blue','teal','red'],
  ['wheat','cyan','tomato'],
  ['fuchsia','grey','papayawhip']
];
function setup()
{
  createCanvas (1000,1000);
  
}

function draw()
{
  strokeWeight(0);
  // fill (225);
  for (h=0 ; h<3 ; h++)
  {

     for(i=0;i<3;i++)
    {
      strokeWeight(0);
      fill (reactColours[h][i]);
      rect (i*300,300*h,300,300);
      strokeWeight(4);
      fill (ellipseClours[h][i]);
      beginShape();/////ears//////
      vertex(70+i*300,40+h*300);
      vertex(100+i*300,100+h*300);
      vertex(60+i*300,120+h*300);
      vertex(70+i*300,40+h*300);
      endShape();

      beginShape();//////////ears/////////
      vertex(230+i*300,40+h*300);
      vertex(240+i*300,120+h*300);
      vertex(200+i*300,120+h*300);
      vertex(230+i*300,40+h*300);
      endShape();
       
      fill (ellipseClours[h][i]);
      ellipse(150+i*300,160+h*300,200);
      rect (75+i*300,240+h*300,150,30);
      
      strokeWeight(3);
      fill(205);
      beginShape();//////nose////////
      vertex(135+i*300,160+h*300);
      vertex(165+i*300,160+h*300);
      vertex(150+i*300,180+h*300);
      vertex(135+i*300,160+h*300);
      endShape();

      line (150+i*300,180+h*300,150+i*300,200+h*300);
      line (150+i*300,200+h*300,170+i*300,210+h*300);
      line (150+i*300,200+h*300,130+i*300,210+h*300);

      line (160+i*300,190+h*300,210+i*300,200+h*300);
      line (160+i*300,190+h*300,215+i*300,190+h*300);
      line (160+i*300,190+h*300,210+i*300,180+h*300);

      line (140+i*300,190+h*300,90+i*300,200+h*300);
      line (140+i*300,190+h*300,85+i*300,190+h*300);
      line (140+i*300,190+h*300,90+i*300,180+h*300);
      
      strokeWeight(1);
      fill (reactColours[h][i]);
      ellipse(110+i*300,130+h*300,30);
      ellipse(190+i*300,130+h*300,30); 
      fill(0); 
      ellipse(110+i*300,130+h*300,15); 
      ellipse(190+i*300,130+h*300,15);
      strokeWeight(3); 
      fill(225,225,0);
      ellipse(150+i*300,255+h*300,25);
      strokeWeight(4);  

    }
  }
}    





