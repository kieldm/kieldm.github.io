function capZ() {
  push();
  translate(trackCount*track + trackingCount*tracking,0);
    push();
    shearX(shrX);
  
        beginShape();
        vertex(0, 0);
        vertex(0, -ay/3 + divY2);
      
        vertex(ax, -ay/3);
        vertex(ax, 0);
        vertex(ax + divX1, divY1);
        vertex(divX1, divY1 + divY2);
        vertex(0,divY2)
        vertex(0,0);
        endShape();
  
      push();
        translate(2 * ax + divX1 - (lap*ax), -ay - 2 * divY2 + divY1 + (lap*divY2));
      
        beginShape();
        vertex(0, 2*divY2);
        vertex(0, ay + divY2);
        vertex(-ax, ay + 2 * divY2);
        vertex(-ax, 3*divY2);
        vertex(-2*ax - divX1, 3*divY2 -(ax+divX1)/tan(d2));
  
        vertex(-divX1-ax, 2*divY2-(ax+divX1)/tan(d2));
        vertex(0,2*divY2);
        endShape();
      pop();
      
      push();
        translate(2 * ax + divX1 - (lap*ax), -ay -asc/2 - divY2 + (lap*divY2));
      
        beginShape();
        vertex(0, 2*divY2);
        vertex(-ax, 3*divY2);
        vertex(-2*ax - divX1, 3*divY2 -(ax+divX1)/tan(d2));
        
        vertex(-divX1-ax, 2*divY2-(ax+divX1)/tan(d2));
        vertex(0,2*divY2);
        endShape();
      pop();
      
  
    pop();

  trackingCount++;
  trackCount+=2;
}