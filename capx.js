function capX() {
  push();
  translate(trackCount*track + trackingCount*tracking,0);
    push();
    shearX(shrX);
    
      beginShape();
      vertex(0, 0);
      vertex(0, -ay + divY2);
      vertex(ax, -ay);
      vertex(ax, divY1);
      vertex(0, divY1+divY2);
      vertex(0, 0);
      endShape();
    
      push();
        translate(2 * ax + divX1 - (lap*ax), -ay - 2*divY2 + divY1 + (lap*divY2));
      
        beginShape();
        vertex(0, 2*divY2);
        vertex(0, ay + 2*divY2);
        vertex(-ax, ay + 3*divY2);
        vertex(-ax, 3*divY2);
        vertex(-2*ax - divX1, 3*divY2 -(ax+divX1)/tan(d2));
        
        vertex(-2*ax - divX1,-asc + divY2 - divY1);
        vertex(-ax - divX1, -asc - divY1);
        
        vertex(-divX1-ax, 2*divY2-(ax+divX1)/tan(d2));
        vertex(0,2*divY2);
        endShape();
  
  
  
          beginShape();
          
          if(divX1>ax){
            vertex(0,  - ax/tan(d2));
            vertex(-ax, - ax/tan(d2)+divY2);
          } else {
            vertex(0, - divY1 + tan(d1)*(ax-divX1));
            vertex(-ax, - divY1 + tan(d1)*(ax-divX1)+divY2);
          }
          
          vertex(-ax, -asc + divY2 - divY1 - (lap*divY2));
          vertex(0, -asc - divY1 - (lap*divY2));
  
          endShape();
  
      pop();
    pop();
  pop();

  trackingCount++;
  trackCount+=2;
}