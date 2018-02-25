function F() {
  push();
  translate(trackCount*track + trackingCount*tracking,0);
  
    push();
    shearX(shrX);
    
      beginShape();
      vertex(0, 0);
      vertex(0, -ay - asc);
      vertex(ax, -ay - asc - divY2);
      
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
        translate(ax - (lap*ax), -ay - asc - divY2 + (lap*divY2));
    
        beginShape();
        vertex(0, 0);
        vertex(ax, -divY2);
        vertex(ax + divX1, -divY2 + divY1);
//        vertex(ax + divX1, -divY2 + divY1 + asc/5);
//        vertex(divX1, divY1 + asc/5);
        vertex(divX1, divY1);
        vertex(0,0);
        endShape();
        
          //bar
          push();
            translate(ax, -divY2);
                beginShape();
                vertex(0,0);
                vertex(-bx, divY3);
                vertex(-bx + divX2, divY3 + divY4);
                vertex(divX2, divY4);
                vertex(0,0);
                endShape();
          pop();
    
      pop();
// bar v1    
/*
      push();
        translate((ax+divX1)/2+1 - (lap*ax)/2,-ay-asc/3);
        rotate(-d1);
        rectMode(CENTER);
        rect(0,0,ax+divX1 - (lap*ax),ay/5);
      pop();
*/
    
    //bar v4
        push();
        translate(ax/2, -ay-asc/3);
            rectMode(CENTER);
//            shearY(-d1);
            if(ay/5<ax){
                rect(0,0, divX1+ax, ay/5);
            } else {
                rect(0,0, divX1+ax, ax);
            }
        pop();
    
    
    pop();
  pop();

  trackingCount++;
  trackCount +=1;

}