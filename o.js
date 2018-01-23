function O() {
    
  push();
  translate(trackCount*track + trackingCount*tracking,0);
  
    push();
    shearX(shrX);
    
      beginShape();
      vertex(0, 0);
      vertex(0, -ay);
      vertex(ax, -ay - divY2);
      vertex(ax, 0);
      vertex(ax + divX1, divY1);
      vertex(divX1, divY1 + divY2);
      vertex(0, divY2)
      vertex(0, 0);
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
        translate(2 * ax + divX1 - (lap*ax), -ay - 2 * divY2 + divY1 + (lap*divY2));
    
        beginShape();
        vertex(0, 0);
        vertex(0, ay + divY2);
        vertex(-ax, ay + 2*divY2);
        vertex(-ax, divY2);
        vertex(-ax - divX1, divY2 - divY1);
        vertex(-divX1, -divY1);
        vertex(0, 0);
        endShape();
    
         //bar
         push();
         translate(-divX1, -divY1);
            beginShape();
            vertex(0,0);
            vertex(-bx, divY3);
            vertex(-bx + divX2, divY3 + divY4);
            vertex(divX2, divY4);
            vertex(0,0);
            endShape();
         pop();
    
      pop();
  
    pop();
  pop();

  trackingCount++;
  trackCount+=2;
}