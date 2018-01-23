function J() {
  push();
  translate(trackCount*track + trackingCount*tracking,0);
  
    push();
    shearX(shrX);
    
      beginShape();
      vertex(0, 0);
      vertex(0, -ay);
      
      vertex(-divX1/2, -ay - divY1/2);
      vertex(-divX1/2 + ax, -ay - divY1/2 - divY2);
      
      vertex(ax, -ay - divY2);
      vertex(ax, divY2 + desc);
      vertex(0, 2*divY2+desc)
      vertex(0, 0);
      endShape();
    
      ///dot
      beginShape();
      vertex(0, -ay - asc/2);
      vertex(0, -ay - asc/2 - divY1);
      vertex(ax, -ay - asc/2 - divY1 - divY2);
      vertex(ax, -ay - asc/2 - divY2);
      vertex(0, -ay - asc/2);
      endShape();
    
      ///tail
      push();
        translate(0,2*divY2+desc);
        beginShape();
        vertex(0,0);
        vertex(-divX1/2, -divY1/2);
        vertex(-divX1/2 - ax, -divY1/2 + divY2);
        vertex(-ax,divY2)
        vertex(0,0);
        endShape();
      pop();
  
    pop();
  pop();

  trackingCount++;
  trackCount+=1;
}