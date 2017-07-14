function F() {
  push();
  translate(trackCount*track + trackingCount*tracking,0);
  
    push();
    shearX(shrX);
    
      beginShape();
      vertex(0, 0);
      vertex(0, -ay - asc);
      vertex(ax, -ay - asc - divY2);
      
      vertex(ax, divY1/2);
      vertex(ax + divX1/2, divY1);
      vertex(divX1/2, divY1+divY2);
      vertex(0,divY1/2 + divY2);
      
      vertex(0, 0);
      endShape();
    
      push();
        translate(ax, -ay - asc - divY2);
    
        beginShape();
        vertex(0, 0);
        vertex(ax, -divY2);
        vertex(ax + divX1/2, -divY2 + divY1/2);
        vertex(ax + divX1/2, -divY2 + divY1/2 + asc/5);
        vertex(divX1/2, divY1/2 + asc/5);
        vertex(divX1/2, divY1/2);
        vertex(0,0);
        endShape();
        
      pop();
    
      push();
        translate(ax/2,-ay-asc/2);
    //    rotate(-d1);
        rectMode(CENTER);
        rect(0,0,1.5*ax,ax);
      pop();
  
    pop();
  pop();

  trackingCount++;
  trackCount +=1;

}