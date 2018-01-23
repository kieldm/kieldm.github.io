function question() {
  push();
  translate(trackCount*track + trackingCount*tracking,0);
    push();
    shearX(shrX);
  
      beginShape();
      vertex(0, 0);
      vertex(ax, - divY2);
      vertex(ax, divY1/2);
      vertex(0, divY1/2 + divY2);
      vertex(0, 0);
      endShape();
    
      beginShape();
      vertex(0,-ay - asc/2);
      vertex(0, -ay - asc);
      vertex(ax, -ay - asc - divY2);
      vertex(ax, -ay - asc/2 - divY2);
      endShape();
    
      beginShape();
      vertex(0, -ay/3 - divY1);
      vertex(ax, -ay/3 - divY2 - divY1);
      vertex(ax + divX1, -ay/3 - divY2 + divY1 - divY1);
      vertex(divX1, -ay/3 + divY1 - divY1);
      endShape();
      
      push();
        translate(2 * ax + divX1 - (lap*ax), -ay - 2*divY2 + divY1 - asc + (lap*divY2));
      
        beginShape();
        vertex(0, 0);
    
        vertex(0, 2*ay/3 - divY1 + asc);
        vertex(-ax, 2*ay/3 - divY1 + asc + divY2);
    
        vertex(-ax, divY2);
        vertex(-ax-divX1, divY2 - divY1);
        vertex(-divX1, -divY1);
        
        vertex(0,0);
        endShape();
  
      pop();
     
    pop();
  pop();

  trackingCount++;
  trackCount+=2;
}