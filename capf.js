function capF() {
  push();
  translate(trackCount*track + trackingCount*tracking,0);
  
    push();
    shearX(shrX);
    
      beginShape();
      vertex(0, 0);
      vertex(0, -ay - asc);
      
      vertex(-sin(d2) * flag, -ay - asc - cos(d2) * flag);
      vertex(-sin(d2) * flag + ax, -ay - asc - cos(d2) * flag - tan(d1) * ax);
      
      vertex(ax, -ay - asc - tan(d1) * ax);
      
      vertex(ax, divY1/2);
      vertex(ax + divX1/2, divY1);
      vertex(divX1/2, divY1+divY2);
      vertex(0,divY1/2 + divY2);
      vertex(0, 0);
      endShape();
    
      push();
        translate(2 * ax + divX1 - (lap*ax), -ay - asc - 2 * divY2 + divY1 + (lap*divY2));
      
        beginShape();
        vertex(0, 0);
        if(asc>divY1){
          vertex(0,(asc-divY1)/2);
          vertex(-ax, divY2+(asc-divY1)/2);
        }
        vertex(-ax, divY2);
        vertex(-ax - divX1, divY2 - divY1);
        vertex(-divX1, -divY1);
        vertex(0,0);
        endShape();
  
        push();
          translate(0, asc);
     
          beginShape();
          vertex(0, 0);
      
          vertex(-ax, divY2);
          vertex(-ax-divX1, divY2 - divY1);
          vertex(-divX1, -divY1);
          
          vertex(0,0);
          endShape();
        pop();
        
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
      pop();
  
    pop();
  pop();

  trackingCount++;  
  trackCount+=2;
}