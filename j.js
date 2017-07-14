function J() {
  push();
  translate(trackCount*track + trackingCount*tracking,0);
  
    push();
    shearX(shrX);
    
      beginShape();
      vertex(0, 0);
      vertex(0, -ay);
      vertex(ax, -ay - divY2);
      vertex(ax, divY2 + desc);
      vertex(0, 2*divY2+desc)
      vertex(0, 0);
      endShape();
    
      ///dot
      beginShape();
      vertex(0, -ay-asc/2);
      vertex(-divY2/2, -ay-asc/2 - divY1/2);
      vertex(-divY2/2 + ax, -ay-asc/2 - divY1/2 - divY2);
      vertex(ax, -ay-asc/2 - divY2);
      vertex(0, -ay-asc/2);
      endShape();
    
      ///tail
      push();
        translate(0,2*divY2+desc);
        beginShape();
        vertex(0,0);
        vertex(-sin(d2)*flag,-cos(d2)*flag);
        vertex(-sin(d2)*flag-ax,-cos(d2)*flag+divY2);
        vertex(-ax,divY2)
        vertex(0,0);
        endShape();
      pop();
  
    pop();
  pop();

  trackingCount++;
  trackCount+=1;
}