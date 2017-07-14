function E() {
  push();
  translate(trackCount*track + trackingCount*tracking,0);

    push();
    shearX(shrX);  
    
      beginShape();
      vertex(0, 0);
      vertex(0, -ay);
      vertex(ax, -ay - divY2);
      vertex(ax, 0);
      vertex(ax + sin(d2) * c1, cos(d2) * c1);
      vertex(sin(d2) * c1, cos(d2) * c1+divY2);
      vertex(0,divY2)
      vertex(0, 0);
      endShape();
    
    
      push();
        translate(2 * ax + sin(d2) * c1 - (lap*ax), -ay - 2 * divY2 + cos(d2) * c1   + (lap*divY2));
      
      
        beginShape();
        vertex(0, 0);
        vertex(0, 3*ay/5);
        vertex(-ax, 3*ay/5 + tan(d1) * ax);
        vertex(-ax, divY2);
        vertex(-ax - sin(d2) * c1, divY2 - cos(d2) * c1);
        vertex(-sin(d2) * c1, -cos(d2) * c1);
        vertex(0, 0);
        endShape();
      
        push();
          translate(-ax + (lap*ax), 3*ay/5 + tan(d1) * ax - (lap*divY2));
          
          beginShape();
          vertex(0,0);
          vertex(-ax,tan(d1)*ax);
          vertex(-ax-sin(d2)*c1,divY2-cos(d2)*c1);
          vertex(-sin(d2)*c1,-cos(d2)*c1);
          vertex(0, 0);
          endShape();
        pop();
    
        beginShape();
          vertex(0,4*ay/5);
          vertex(0,ay+tan(d1)*ax);
          vertex(-ax,ay+2*tan(d1)*ax);
          vertex(-ax,4*ay/5+tan(d1)*ax);
          vertex(0,4*ay/5);
        endShape();
      
      pop();
  
    pop();
  pop();

  trackingCount++;  
  trackCount +=2;
}
