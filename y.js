function Y() {
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
      vertex(divX1, divY1+divY2);
      vertex(0,divY2);
      vertex(0,0);
      endShape();
    
      push();
        translate(2 * ax + divX1 - (lap*ax), -ay - divY2 + divY1   + (lap*divY2));
    
        beginShape();
        vertex(0, -divY1);
        vertex(0, ay+desc+2*divY2 - divY1);
        vertex(-ax, ay + desc + 3 * divY2 - divY1);
        vertex(-ax, -divY1+divY2);
        vertex(0, -divY1);
        endShape();
    
        push();
          translate(-ax, ay + desc + 3 * divY2 - divY1);
  
          beginShape();
          vertex(0, 0);
          vertex(-ax, divY2);
          vertex(-ax - divX1/2, divY2 - divY1/2);
          vertex(-divX1/2, -divY1/2);
          vertex(0, 0);
          endShape();
        pop();
      pop();
    pop();
  pop();

  trackingCount++;  
  trackCount +=2;
}