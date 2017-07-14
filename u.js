function U() {
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
        translate( ax + divX1 - (lap*ax), lap*divY2);
    
        beginShape();
        vertex(0, 0);
        vertex(0, -ay);
        vertex(ax, -ay - divY2);
        
        vertex(ax,divY1- divY2 - (lap*divY2));
        vertex(ax+divX1/2,divY1 + divY1/2 - divY2 - (lap*divY2));
        vertex(divX1/2,divY1 + divY1/2 - (lap*divY2));
        vertex(0,divY1- (lap*divY2));
        
        vertex(0, 0);
        endShape();
      pop();
  
    pop();
  pop();

  trackingCount++;
  trackCount+=2;
}
