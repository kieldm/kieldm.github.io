function L() {
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
  
    pop();
  pop();

  trackingCount++;
  trackCount+=1;
}