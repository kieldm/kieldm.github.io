function capH() {
  push();
  translate(trackCount*track + trackingCount*tracking,0);
    push();
    shearX(shrX);
    
      beginShape();
      vertex(0, 0);
    
      if(radioTop.value() == 2){
          vertex(0, -ay - asc - 2*divY2 + (lap*divY2));
          vertex(ax, -ay - asc - 2*divY2 + (lap*divY2));
        } else if(radioTop.value() == 3){
          vertex(0, -ay - asc - 2*divY2 + divY1 + (lap*divY2));
          vertex(ax, -ay - asc - 2*divY2 + (lap*divY2));
        } else {
          vertex(0, -ay - asc);
          vertex(-divX1/2, -ay - asc - divY1/2);
          vertex(-divX1/2 + ax, -ay - asc - divY1/2 - divY2);
          vertex(ax, -ay - asc - divY2);
        }
  
        if(radioBottom.value() == 2){
            vertex(ax,divY1+divY2);
            vertex(0,divY1+divY2);
        } else if(radioBottom.value() == 3){
            vertex(ax,divY1);
            vertex(0,divY1+divY2);
        } else {
            vertex(ax, divY1/2);
            vertex(ax + divX1/2, divY1);
            vertex(divX1/2, divY1+divY2);
            vertex(0,divY1/2 + divY2);
        }
    
      vertex(0, 0);
      endShape();
    
      push();
        translate( ax + divX1 - (lap*ax), 0);
      
        beginShape();
        vertex(0, 0);
    
        if(radioTop.value() == 2){
          vertex(0, -ay - asc - 2*divY2 + (lap*divY2));
          vertex(ax, -ay - asc - 2*divY2 + (lap*divY2));
        } else if(radioTop.value() == 3){
          vertex(0, -ay - asc - 2*divY2 + divY1 + (lap*divY2));
          vertex(ax, -ay - asc - 2*divY2 + (lap*divY2));
        } else {
          vertex(0, -ay - asc);
          vertex(-divX1/2, -ay - asc - divY1/2);
          vertex(-divX1/2 + ax, -ay - asc - divY1/2 - divY2);
          vertex(ax, -ay - asc - divY2);
        }
    
        if(radioBottom.value() == 2){
            vertex(ax,divY1+divY2);
            vertex(0,divY1+divY2);
        } else if(radioBottom.value() == 3){
            vertex(ax,divY1);
            vertex(0,divY1+divY2);
        } else {
            vertex(ax, divY1/2);
            vertex(ax + divX1/2, divY1);
            vertex(divX1/2, divY1+divY2);
            vertex(0,divY1/2 + divY2);
        }
        
        vertex(0,0);
        endShape();
  
  /*
  //opt1
          push();
            translate(ax, -ay - 2 * divY2 + divY1 + (lap*divY2));
            beginShape();
            vertex(0, 0);
        
            vertex(-ax, divY2);
            vertex(-ax-divX1, divY2 - divY1);
            vertex(-divX1, -divY1);
            
            vertex(0,0);
            endShape();
          pop();
  */
  
  //opt2
  /*
          push();
            translate(-divX1, -ay - divY2 + (lap*divY2));
            beginShape();
            vertex(0, 0);
        
            vertex(ax/2, -tan(d1)*ax/2);
            vertex(ax/2+sin(d2)*c1/2, -tan(d1)*ax/2+cos(d2)*c1/2);
            vertex(sin(d2)*c1/2, cos(d2)*c1/2);
            
            vertex(0,0);
            endShape();
          pop();
  */
        
  /*        //tester
          noFill();
          rectMode(CORNERS);
          stroke(0,0,255);
          rect(.5*ax,0,-ax,asc);
          stroke(0,255,0);
          rect(ax,asc,-ax,asc-divY1);
          stroke(255,0,0);
          rect(1.5*ax,asc-divY1,-ax,asc - divY1 + tan(d1)*(ax-divX1));
  */
  
  //opt3
      pop();
      
      push();
        translate((2 * ax + divX1 - (lap*ax))/2,(-asc-ay)/2);
        rectMode(CENTER);
        rect(0,0,2 * ax + divX1- (lap*ax),ax);
      pop();
  
    pop();
  pop();

  trackingCount++;
  trackCount+=2;
}