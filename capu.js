function capU() {
  push();
  translate(trackCount*track + trackingCount*tracking,0);
    push();
    shearX(shrX);
    
      beginShape();
      vertex(0, 0);
    
      if(radioTop.value() == 2){
          vertex(0, -ay - asc - 2*divY2 + (lap*divY2));
          vertex(ax, -ay - asc - 2*divY2 + (lap*divY2));
      } else {
          vertex(0, -ay - asc - divY2 - (lap*divY2));
          vertex(ax, -ay - asc - 2*divY2 - (lap*divY2));
      }

      vertex(ax, 0);
      vertex(ax + divX1, divY1);
      vertex(divX1, divY1 + divY2);
      vertex(0,divY2)
      vertex(0,0);
      endShape();

      //bar
      push();
        translate(divX1, divY1 + divY2);
        beginShape();
        vertex(0,0);
        vertex(bx, -divY3);
        vertex(bx - divX2, -divY3 - divY4);
        vertex(-divX2, - divY4);
        vertex(0,0);
        endShape();
      pop();
    
      push();
        translate( ax + divX1 - (lap*ax), 0);
      
        beginShape();
        vertex(0, 0);
    
      if(radioTop.value() == 2){
          vertex(0, -ay - asc - 2*divY2 + (lap*divY2));
          vertex(ax, -ay - asc - 2*divY2 + (lap*divY2));
      } else {
          vertex(0, -ay - asc - divY2 - (lap*divY2));
          vertex(ax, -ay - asc - 2*divY2 - (lap*divY2));
      }
    
        if(radioBottom.value() == 2){
            vertex(ax, cos(d2)*c1/2+ divY1);
            vertex(0, cos(d2)*c1/2+ divY1);
        } else if(radioBottom.value() == 3){
            vertex(ax, cos(d2)*c1/2 + divY1 - divY2);
            vertex(0, cos(d2)*c1/2 + divY1);
        } else {
            vertex(ax,- divY2 + divY1);
            vertex(ax + sin(d2)*c1/2, cos(d2)*c1/2 - divY2 + divY1);
            vertex(sin(d2)*c1/2, cos(d2)*c1/2+ divY1);
            vertex(0,divY1);
        }
        
        vertex(0,0);
        endShape();
    

      pop();
  
    pop();
  pop();

  trackingCount++;
  trackCount+=2;
}