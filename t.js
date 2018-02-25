function T() {
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
    
/*
//bar v3

      push();
      translate(0,-ay);
        //l
        beginShape();
        vertex(0,0);
        vertex(-sin(d2) * flag, -cos(d2) * flag);
        vertex(-sin(d2) * flag + ax, - cos(d2) * flag - divY2);
        vertex(ax,-divY2);
        vertex(0,0);
        endShape();

        //r
        beginShape();
        vertex(0,0);
        vertex(divX1/2, divY1/2);
        vertex(divX1/2 + ax, divY1/2 -divY2);
        vertex(ax, -divY2);
        vertex(0, 0);
        endShape();
      pop();
    
//bar v2

    push();
        translate(ax/2,-ay-asc/3);
//        rotate(-d1);
        rectMode(CENTER);
        rect(0,0,2*divX1+ax,ax);
//        rect(0,0,1.5*ax,ay/5);
      pop();


    
//bar v1

      push();
        translate(0,-ay-asc/2);
        beginShape();
        vertex(0,0);
        vertex(-sin(d2)*c1,-cos(d2)*c1);
        vertex(-sin(d2)*c1+ax,-cos(d2)*c1-divY2);
        vertex(ax,-divY2);
        endShape();
      pop();
*/  
    pop();
  pop();

  trackingCount++;
  trackCount+=1;
}