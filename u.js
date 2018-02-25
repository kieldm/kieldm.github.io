function U() {
  push();
  translate(trackCount*track + trackingCount*tracking,0);
    push();
    shearX(shrX);
    
      beginShape();
      vertex(0, 0);
    
      vertex(0, -ay - divY2);
      vertex(ax, -ay - 2*divY2);
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
      
      push();
        translate( ax + divX1 - (lap*ax), lap*divY2);
        beginShape();
        vertex(0, 0);
        vertex(0, -ay - divY2);
        vertex(ax, -ay - 2*divY2);
        
        if(radioBottom.value() == 2){
            vertex(ax, divY2 + divY1 - (lap*divY2));
            vertex(0, divY2 + divY1 - (lap*divY2));
        } else if(radioBottom.value() == 3){
            vertex(ax, divY1 - (lap*divY2));
            vertex(0, divY2 + divY1 - (lap*divY2));
        } else {
            vertex(ax, divY1- divY2 - (lap*divY2));
            vertex(ax+divX1/2, 1.5*divY1 - divY2 - (lap*divY2));
            vertex(divX1/2, 1.5*divY1 - (lap*divY2));
            vertex(0,divY1- (lap*divY2));
        }
        
        vertex(0, 0);
        endShape();
      pop();
  
    pop();
  pop();

  trackingCount++;
  trackCount+=2;
}