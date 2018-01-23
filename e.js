//v3
function E() {
  push();
  translate(trackCount*track + trackingCount*tracking,0);
  
    push();
    shearX(shrX);
  
      beginShape();
      vertex(0, 0);
      vertex(0, -ay);
      vertex(ax, -ay - divY2);
      vertex(ax, 0);
      vertex(ax + divX1, + divY1);
      vertex(divX1, divY1 + divY2);
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
    
      // cross bar
      push();
      translate(ax+divX1 - (lap*ax), -2*ay/3 - divY2 + divY1 + (lap * divY2));
        rotate(180);
        rectMode(CORNER);
        shearY(-d1);
        if(ay/5<ax){
            rect(-1,0, divX1+2-(lap*ax), ay/5);
        } else {
            rect(-1,0, divX1+2-(lap*ax), ax);
        }
      pop();
    
      push();
        translate(2 * ax + divX1 - (lap*ax), -ay - 2 * divY2 + divY1 + (lap * divY2));
    
        beginShape();
        vertex(0, 0);
        
        vertex(0, ay/3);
        vertex(-ax,ay/3 + divY2);
    
        vertex(-ax, divY2);
        vertex(-ax - divX1, divY2 - divY1);
        vertex(-divX1, - divY1);
    
        vertex(0,0);
        endShape();
        
        beginShape();
        vertex(0,ay - ay/3);
        vertex(0,ay+ divY2);
        vertex(-ax, ay + 2 * divY2);
        
        vertex(-ax,ay - ay/3 + divY2);
        vertex(0,ay - ay/3);
        endShape();
    
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
  trackCount +=2;
}



/*
//v2
function E() {
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
      vertex(divX1, divY1 + divY2);
      vertex(0,divY2)
      vertex(0, 0);
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
      translate(2 * ax + divX1 - (lap*ax), -ay - 2 * divY2 + divY1   + (lap*divY2));
      
        beginShape();
        vertex(0, 0);
        vertex(0, 3*ay/5);
        vertex(-ax, 3*ay/5 + divY2);
        vertex(-ax, divY2);
        vertex(-ax - divX1, divY2 - divY1);
        vertex(-divX1, -divY1);
        vertex(0, 0);
        endShape();

         //cross bar v2
        push();
        translate(0, 3*ay/5);
    
        ellipse(0,0,5,5);
          beginShape();
          vertex(0,0);
          vertex(-ax-divX1, tan(d1)*(ax+divX1));
          vertex(-ax-divX1 - sin(d2)*c1/3, tan(d1)*(ax+divX1) - cos(d2)*c1/3);
          vertex(-sin(d2)*c1/3, -cos(d2)*c1/3);
          vertex(0,0);
          endShape();
         pop();    
   
     //cross bar v1
        push();
        translate(-ax, 3*ay/5 + divY2);
        rotate(180);
            rectMode(CORNER);
            shearY(-d1);
            if(ay/5<ax){
                rect(-1,0, divX1+2-(lap*ax), ay/5);
            } else {
                rect(-1,0, divX1+2-(lap*ax), ax);
            }
        pop();
    
    
        beginShape();
        vertex(0,4*ay/5);
        vertex(0,ay + divY2);
        vertex(-ax,ay + 2*divY2);
        vertex(-ax, 4*ay/5 + divY2);
        vertex(0,4*ay/5);
        endShape();
      
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
  trackCount +=2;
}





//v1
function E() {
  push();
  translate(trackCount*track + trackingCount*tracking,0);

    push();
    shearX(shrX);  
    
      beginShape();
      vertex(0, 0);
      vertex(0, -ay);
      vertex(ax, -ay - divY2);
      vertex(ax, 0);
      vertex(ax + sin(d2) * c1, cos(d2) * c1);
      vertex(sin(d2) * c1, cos(d2) * c1+divY2);
      vertex(0,divY2)
      vertex(0, 0);
      endShape();
    
    
      push();
        translate(2 * ax + sin(d2) * c1 - (lap*ax), -ay - 2 * divY2 + cos(d2) * c1   + (lap*divY2));
      
      
        beginShape();
        vertex(0, 0);
        vertex(0, 3*ay/5);
        vertex(-ax, 3*ay/5 + tan(d1) * ax);
        vertex(-ax, divY2);
        vertex(-ax - sin(d2) * c1, divY2 - cos(d2) * c1);
        vertex(-sin(d2) * c1, -cos(d2) * c1);
        vertex(0, 0);
        endShape();
      
        push();
          translate(-ax + (lap*ax), 3*ay/5 + tan(d1) * ax - (lap*divY2));
          
          beginShape();
          vertex(0,0);
          vertex(-ax,tan(d1)*ax);
          vertex(-ax-sin(d2)*c1,divY2-cos(d2)*c1);
          vertex(-sin(d2)*c1,-cos(d2)*c1);
          vertex(0, 0);
          endShape();
        pop();
    
        beginShape();
          vertex(0,4*ay/5);
          vertex(0,ay+tan(d1)*ax);
          vertex(-ax,ay+2*tan(d1)*ax);
          vertex(-ax,4*ay/5+tan(d1)*ax);
          vertex(0,4*ay/5);
        endShape();
      
      pop();
  
    pop();
  pop();

  trackingCount++;  
  trackCount +=2;
}
*/