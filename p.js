function P() {
  push();
  translate(trackCount*track + trackingCount*tracking,0);

    push();
    shearX(shrX);
  
      beginShape();
      vertex(0, 0);
      vertex(0, -ay);
      
      vertex(-sin(d2) * flag, -ay - cos(d2) * flag);
      vertex(-sin(d2) * flag + ax, -ay - cos(d2) * flag - divY2);
    
      vertex(ax, -ay-divY2);
      vertex(ax, 0);
      vertex(ax + divX1, divY1);
      vertex(divX1, divY1+divY2);
      vertex(0,divY2);
      vertex(0, 0);
      endShape();
    
      push();
        translate(0,divY2);
        beginShape();
        vertex(0,-divY2);
        vertex(0,0);
        vertex(0,desc+divY2);
        vertex(divX1/2,desc+divY1/2+divY2);
        vertex(divX1/2+ax,desc+divY1/2);
        vertex(ax,desc);
        vertex(ax,-divY2);
        vertex(ax,-2*divY2);
        vertex(0,-divY2);
        endShape();
      pop();
    
      push();
        translate(2 * ax + divX1 - (lap*ax), -ay - 2 * divY2 + divY1   + (lap*divY2));
    
        beginShape();
        vertex(0, 0);
        vertex(0, ay+divY2);
        vertex(-ax, ay + 2*divY2);
        vertex(-ax, divY2);
        vertex(-ax - divX1, divY2 - divY1);
        vertex(-divX1, -divY1);
        vertex(0, 0);
        endShape();
      pop();
  
    pop();
  pop();

  trackingCount++;  
  trackCount+=2;
}