function capH() {
  push();
  translate(trackCount*track + trackingCount*tracking,0);
    push();
    shearX(shrX);
    
      beginShape();
      vertex(0, 0);
      vertex(0, -ay - asc);
      vertex(-sin(d2) * flag, -ay - asc - cos(d2) * flag);
      vertex(-sin(d2) * flag + ax, -ay - asc - cos(d2) * flag - divY2);
    
      vertex(ax, -ay - asc - divY2);
  
      vertex(ax, divY1/2);
      vertex(ax + divX1/2, divY1);
      vertex(divX1/2, divY1+divY2);
      vertex(0,divY1/2 + divY2);
      vertex(0, 0);
      endShape();
    
      push();
        translate( ax + divX1 - (lap*ax), 0);
      
        beginShape();
        vertex(0, 0);
        vertex(0, -ay - asc);
        vertex(-sin(d2) * flag, -ay - asc - cos(d2) * flag);
        vertex(-sin(d2) * flag + ax, -ay - asc - cos(d2) * flag - divY2);
      
        vertex(ax, -ay - asc - divY2);
        vertex(ax,- divY2 + divY1);
        vertex(ax + sin(d2)*c1/2, cos(d2)*c1/2 - divY2 + divY1);
        vertex(sin(d2)*c1/2, cos(d2)*c1/2 + divY2 - divY2 + divY1);
        vertex(0,divY2 - divY2 + divY1)
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
        rect(0,0,2 * ax + divX1- (lap*ax),ax/2);
      pop();
  
    pop();
  pop();

  trackingCount++;
  trackCount+=2;
}