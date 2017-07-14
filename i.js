function I() {
  push();
  translate(trackCount*track + trackingCount*tracking,0);
  
    push();
    shearX(shrX);
  
      beginShape();
      vertex(0, 0);
      vertex(0, -ay);
      
      vertex(-sin(d2) * flag, -ay - cos(d2) * flag);
      vertex(-sin(d2) * flag + ax, -ay - cos(d2) * flag - divY2);
      
      vertex(ax, -ay - divY2);
      
      vertex(ax, divY1/2);
      vertex(ax + divX1/2, divY1);
      vertex(divX1/2, divY1+divY2);
      vertex(0,divY1/2 + divY2);
      vertex(0, 0);
      endShape();
      
      beginShape();
      vertex(0, -ay-asc/2);
      vertex(-divX1/2, -ay-asc/2 - divY1/2);
      vertex(-divX1/2 + ax, -ay-asc/2 - divY1/2 - divY2);
      vertex(ax, -ay-asc/2 - divY2);
      vertex(0, -ay-asc/2);
      endShape();
  
    pop();
  pop();

  trackingCount++;
  trackCount+=1;
}