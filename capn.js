function capN() {
  push();
  translate(trackCount*track + trackingCount*tracking,0);
    push();
    shearX(shrX);
    
      beginShape();
      vertex(0, 0);
      vertex(0, -ay - asc);
      vertex(-sin(d2) * flag, -ay - asc - cos(d2) * flag);
      vertex(-sin(d2) * flag + ax, -ay - asc - cos(d2) * flag - divY2);
    
      vertex(ax, -ay - asc - divY2);
  
      vertex(ax, divY1/2);
      vertex(ax + divX1/2, divY1);
      vertex(divX1/2, divY1+divY2);
      vertex(0,divY1/2 + divY2);
      vertex(0, 0);
      endShape();
    
      push();
        translate(2 * ax + divX1 - (lap*ax), -ay - asc - 2 * divY2 + divY1 + (lap*divY2));
      
        beginShape();
        vertex(0, 0);
        vertex(0, ay + asc - divY1/2 +  2 * divY2  - (lap*divY2));
        vertex(divX1/2, ay + asc + 2*divY2 - (lap*divY2));
        vertex(divX1/2 - ax, ay + asc +  3 * divY2 - (lap*divY2));
        vertex(-ax,ay + asc + 3 * divY2 - divY1/2 - (lap*divY2));
    
        vertex(-ax, divY2);
        vertex(-ax - divX1, divY2 - divY1);
        vertex(-divX1,-divY1);
        vertex(0, 0);
        endShape();
        
      pop();
     
    pop();
  pop();

  trackingCount++;
  trackCount+=2;
}