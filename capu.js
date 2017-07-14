function capU() {
  push();
  translate(trackCount*track + trackingCount*tracking,0);
    push();
    shearX(shrX);
    
      beginShape();
      vertex(0, 0);
      vertex(0, -ay - asc - divY2);
    
      vertex(ax, -ay - asc - 2*divY2);
      vertex(ax, 0);
      vertex(ax + divX1, divY1);
      vertex(divX1, divY1 + divY2);
      vertex(0,divY2)
      vertex(0,0);
      endShape();
    
      push();
        translate( ax + divX1 - (lap*ax), 0);
      
        beginShape();
        vertex(0, 0);
        vertex(0, -ay - asc - divY2);
      
        vertex(ax, -ay - asc - 2*divY2);
        vertex(ax,- divY2 + divY1);
        vertex(ax + sin(d2)*c1/2, cos(d2)*c1/2 - divY2 + divY1);
        vertex(sin(d2)*c1/2, cos(d2)*c1/2 + divY2 - divY2 + divY1);
        vertex(0,divY2 - divY2 + divY1)
        vertex(0,0);
        endShape();
      pop();
  
    pop();
  pop();

  trackingCount++;
  trackCount+=2;
}