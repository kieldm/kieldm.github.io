function D() {
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

          //bar
      push();
        translate(0, -ay);
            beginShape();
            vertex(0,0);
            vertex(divX2, divY4);
            vertex(bx + divX2, divY4 - divY3);
            vertex(bx, -divY3);
            vertex(0,0);
            endShape();
      pop();
    
      push();
        translate(2 * ax + divX1 - (lap*ax), -ay - 2 * divY2 + divY1   + (lap*divY2));
      
        beginShape();
        
        vertex(0, 0);

        vertex(0, ay +  divY2);
        vertex(divX1/2, ay +  divY2 + divY1/2);
        vertex(divX1/2-ax, ay +  2 * divY2 + divY1/2);
        vertex(-ax,ay +  2 * divY2);
        
        vertex(-ax, divY2);
        vertex(-1.5*ax-divX1, divY2-(ax/2+divX1)/tan(d2));
    
        if(-asc+2*divY2-divY1 < divY2-(ax/2+divX1)/tan(d2)) {
              vertex(-1.5*ax-divX1, -asc+2*divY2-divY1);
              
              vertex(-1.5*ax-divX1-divX1/2, -asc+2*divY2-divY1-divY1/2);
              vertex(-.5*ax-divX1-divX1/2, -asc+divY2-divY1-divY1/2);
              
              vertex(-ax/2-divX1, -asc+divY2-divY1);
        }
    
        vertex(-ax/2-divX1, (-ax/2-divX1)/tan(d2));
    
        vertex(0, 0);
        endShape();
      
    
      pop();
  
    pop();
  pop();

  trackingCount++;
  trackCount +=2;
}

/*
        vertex(0, ay +  divY2 - (lap*divY2));
        vertex(sin(d2)*tail, ay +  divY2+ cos(d2)*tail - (lap*divY2));
        vertex(sin(d2)*tail-ax, ay +  2 * divY2+ cos(d2)*tail - (lap*divY2));
        vertex(-ax,ay +  2 * divY2 - (lap*divY2));
*/