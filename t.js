function T() {
  push();
  translate(trackCount*track + trackingCount*tracking,0);
    push();
    shearX(shrX);
    
      beginShape();
      vertex(0, 0);
      vertex(0, -ay - asc);
      
      vertex(-sin(d2) * flag, -ay - asc - cos(d2) * flag);
      vertex(-sin(d2) * flag + ax, -ay - asc - cos(d2) * flag - tan(d1) * ax);
      
      vertex(ax, -ay - asc - divY2);
      
      vertex(ax, divY1/2);
      vertex(ax + divX1/2, divY1);
      vertex(divX1/2, divY1+divY2);
      vertex(0,divY1/2 + divY2);
      vertex(0, 0);
      endShape();
    
      push();
        translate(ax/2,-ay-asc/2);
    //    rotate(-d1);
        rectMode(CENTER);
        rect(0,0,1.5*ax,ax);
      pop();
      
    //  push();
    //    translate(0,-ay-asc/2);
    //    beginShape();
    //    vertex(0,0);
    //    vertex(-sin(d2)*c1,-cos(d2)*c1);
    //    vertex(-sin(d2)*c1+ax,-cos(d2)*c1-divY2);
    //    vertex(ax,-divY2);
    //    endShape();
    //  pop();
  
    pop();
  pop();

  trackingCount++;
  trackCount+=1;
}