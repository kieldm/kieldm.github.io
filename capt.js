function capT() {
  push();
  translate(trackCount*track + trackingCount*tracking,0);
  
    push();
    shearX(shrX);
    
      beginShape();
      vertex(0, 0);
    
      vertex(0,      -ay - asc - divY2 + divY1     + ax);
      vertex(-divX1,   -ay - asc - divY2           + ax);
      vertex(-divX1 + ax, -ay - asc - 2*divY2      + ax);
      vertex(ax,    -ay - asc - 2*divY2 + divY1    + ax);
    
      vertex(ax, divY1/2);
      vertex(ax + divX1/2, divY1);
      vertex(divX1/2, divY1+divY2);
      vertex(0,divY1/2 + divY2);
      vertex(0, 0);
      endShape();
  
      push();
        translate(-divX1,-ay - 2*divY2 - asc);
    //    rotate(-d1);
    //    rectMode(CENTER);
        rect(0,0,ax+2*divX1,ax);
      pop();
    
    pop();
    
    
    
  pop();

  trackingCount++;  
  trackCount+=1;
}