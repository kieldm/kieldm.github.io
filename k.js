function K() {
  push();
  translate(trackCount*track + trackingCount*tracking,0);
  
    push();
    shearX(shrX);
    
      beginShape();
      vertex(0, 0);
    
      if(radioTop.value() == 2){
          vertex(0, -ay - asc - divY1/2 - divY2);
          vertex(ax, -ay - asc - divY1/2 - divY2);
        } else if(radioTop.value() == 3){
          vertex(0, -ay - asc - divY1/2);
          vertex(ax, -ay - asc - divY1/2 - divY2);
        } else {
          vertex(0, -ay - asc);
          vertex(-divX1/2, -ay - asc - divY1/2);
          vertex(-divX1/2 + ax, -ay - asc - divY1/2 - divY2); 
          vertex(ax, -ay - asc - divY2);
        }
      
        if(radioBottom.value() == 2){
            vertex(ax,divY1+divY2);
            vertex(0,divY1+divY2);
        } else if(radioBottom.value() == 3){
            vertex(ax,divY1);
            vertex(0,divY1+divY2);
        } else {
            vertex(ax, divY1/2);
            vertex(ax + divX1/2, divY1);
            vertex(divX1/2, divY1+divY2);
            vertex(0,divY1/2 + divY2);
        }
      
      vertex(0, 0);
      endShape();
      
      push();
        translate(2 * ax + divX1 - (lap*ax), -ay - 2 * divY2 + divY1   + (lap*divY2));
   
        beginShape();
        
        if(divX1<ax){
          vertex(0, 2*ay/3 - divY1 + tan(d1)*(ax-divX1) - divY2 + 1);
          vertex(-ax, 2*ay/3 - divY1 + tan(d1)*(ax-divX1) + 1);        
        } else {
          vertex(0,2*ay/3 - ax/tan(d2) - divY2 + 1);
          vertex(-ax,2*ay/3 - ax/tan(d2) + 1);
        }
        
        vertex(-ax, divY2);
        vertex(-ax - divX1, divY2 - divY1);
        vertex(-divX1,-divY1);
        vertex(0, 0);
        endShape();
      
        beginShape();
        vertex(-divX1-ax, 2*ay/3 - divY1 + divY2);
        vertex(-divX1, 2*ay/3 - divY1);
        vertex(0, 2*ay/3);
    
    
        if(radioBottom.value() == 2){
            vertex(0, ay +  3 * divY2 - (lap*divY2));
            vertex(-ax, ay +  3 * divY2 - (lap*divY2));
        } else if(radioBottom.value() == 3){
            vertex(0, ay +  2 * divY2 - (lap*divY2));
            vertex(-ax, ay +  3 * divY2 - (lap*divY2));
        } else {
            vertex(0, ay - divY1/2 +  2 * divY2  - (lap*divY2));
            vertex(divX1/2, ay + 2*divY2 - (lap*divY2));
            vertex(divX1/2 - ax, ay +  3 * divY2 - (lap*divY2));
            vertex(-ax,ay +  3 * divY2 - divY1/2 - (lap*divY2));
        }
    

        
        vertex(-ax, 2*ay/3+divY2);
        endShape();

        //bar
        push();
            translate(-divX1, 2*ay/3 - divY1);
                beginShape();
                vertex(0,0);
                vertex(-bx, divY3);
                vertex(-bx + divX2, divY3 + divY4);
                vertex(divX2, divY4);
                vertex(0,0);
                endShape();
        pop();
    
        //bar
        push();
            translate(-divX1, -divY1);
                beginShape();
                vertex(0,0);
                vertex(-bx, divY3);
                vertex(-bx + divX2, divY3 + divY4);
                vertex(divX2, divY4);
                vertex(0,0);
                endShape();
        pop();
    
      pop();
  
    pop();
  pop();

  trackingCount++;  
  trackCount+=2;
}