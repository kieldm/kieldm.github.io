function amp() {
    
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
      vertex(0, divY2)
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
        translate(2*ax + divX1 - (lap*ax), -ay - 2*divY2 + divY1 + (lap*divY2));
;
        //special angle
        beginShape();
        vertex(0, 0);
    
        vertex(ax + divX1 - (lap*ax), (ax+divX1 - (lap*divY2))/tan(d2));
        vertex(ax + divX1 - (lap*ax), ay + 2*divY2 - (lap*divY2));
        vertex(divX1 - (lap*ax), ay + 3*divY2 - (lap*divY2));
        vertex(divX1 - (lap*ax), (ax+divX1 - (lap*divY2))/tan(d2) + divY2);
    
        vertex(-ax, divY2);
        vertex(-ax - divX1, divY2 - divY1);
        vertex(-divX1, -divY1); // ***
        vertex(0, 0);
        endShape();
    
        beginShape();
        vertex(0,ay + divY2);
        vertex(-ax,ay + 2*divY2);
        vertex(-ax,2*divY2 + divY1);
        vertex(0,divY2 + divY1);
        vertex(0,ay + divY2); 
        endShape();
    
        //bar
        push();
        translate(-divX1, - divY1);
            beginShape();
            vertex(0,0);
            vertex(-bx, divY3);
            vertex(-bx + divX2, divY3 + divY4);
            vertex(divX2, divY4);
            vertex(0,0);
            endShape();
        pop();
    
        //tail
            push()
            translate(divX1 - (lap*ax),divY2 + divY1 - tan(d1)*divX1 + (lap*ax));
                beginShape();
                vertex(0,0);
                vertex(ax,-divY2);
                vertex(ax,-2*divY2 - divY1 + tan(d1)*divX1);
                vertex(0,-divY2 - divY1 + tan(d1)*divX1);
                vertex(0,0);
                endShape();
                
                // optional bar
                push();
                translate(ax, -divY2);
                    beginShape();
                    vertex(0,0);
                    vertex(-bx, divY3);
                    vertex(-bx - divX2, divY3 - divY4);
                    vertex(-divX2, -divY4);
                    vertex(0,0);
                    endShape();
                pop();
            pop();
        pop();
    
    
    //top loop
    
          push();
            translate(2*ax + divX1 - (lap*ax), -ay - asc + divY1 - 2*divY2 + (lap*divY2));  
              beginShape();
              vertex(0, 0);

              if(divX1>ax){
                vertex(0,  asc - ax/tan(d2) - divY2+2);
                vertex(-ax, asc - ax/tan(d2)+2);
              } else {
                vertex(0,  asc - divY1 + tan(d1)*(ax-divX1) - divY2+2);
                vertex(-ax, asc - divY1 + tan(d1)*(ax-divX1)+2);
              }
    
              vertex(-ax, divY2);
              vertex(-ax-divX1, divY2 - divY1);
              vertex(-divX1, -divY1);
              vertex(0,0);
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
    
              push();
                  translate(-ax - divX1 + (lap*ax), divY2 - divY1 - (lap*divY2));
                  beginShape();
                  vertex(0,0);
                      if(divX1>ax){
                        vertex(0,  asc - ax/tan(d2) - divY2 + 2);
                        vertex(ax+1, asc - divY2+1);
                        vertex(0+1, asc+1);
                        vertex(-ax, asc - ax/tan(d2)+2);
                      } else {
                        vertex(0, asc - divY1 + tan(d1)*(ax-divX1) - divY2+2);
                        vertex(divX1, asc + tan(d1)*(ax-divX1) - divY2+2);
                        vertex(divX1 - ax, asc + tan(d1)*(ax-divX1) +2);
                        vertex(-ax, asc - divY1 + tan(d1)*(ax-divX1)+2);
                      }
                  vertex(-ax,divY2);
                  vertex(0,0);
                  endShape();
              pop();
          pop();
    
    
    pop();
  pop();

  trackingCount++;  
  trackCount+=3;
}

/*
function amp() {
    
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
      vertex(0, divY2)
      vertex(0, 0);
      endShape();
    
      push();
        translate(2*ax + divX1 - (lap*ax), -ay - 2*divY2 + divY1 + (lap*divY2));
        beginShape();
        vertex(0, 0);
    
    //special angle
        vertex(ax + divX1 - (lap*ax), (ax+divX1 - (lap*divY2))/tan(d2));
        vertex(ax + divX1 - (lap*ax), ay + 2*divY2 - (lap*divY2));
        vertex(divX1 - (lap*ax), ay + 3*divY2 - (lap*divY2));
        vertex(divX1 - (lap*ax), (ax+divX1 - (lap*divY2))/tan(d2) + divY2);
    
        vertex(-ax, divY2);
        vertex(-ax - divX1, divY2 - divY1);
        vertex(-divX1, -divY1);
        vertex(0, 0);
        endShape();
      
        beginShape();
        vertex(0,ay + divY2);
        vertex(-ax,ay + 2*divY2);
        vertex(-ax,2*divY2 + divY1);
        vertex(0,divY2 + divY1);
        vertex(0,ay + divY2);
        endShape();
      pop();
    
    
    // use capR's top loop.
    //top loop
    push();
    translate(0,-ay - divY1 - 2*divY2);
    ellipse(0,0,4,4);
      beginShape();
      vertex(0, 0);
      vertex(0, -asc + divY1 + 2*divY2);
      vertex(ax, -asc + divY1 + divY2);
      vertex(ax, 0);
      vertex(ax + divX1, divY1);
      vertex(divX1, divY1 + divY2);
      vertex(0, divY2)
      vertex(0, 0);
      endShape();
    
          push();
            translate(2*ax + divX1 - (lap*ax), -asc + 2*divY1 + (lap*divY2));    
              beginShape();
              vertex(0, 0);

              if(divX1>ax){
                vertex(0,  asc - ax/tan(d2) - divY2+2);
                vertex(-ax, asc - ax/tan(d2)+2);
              } else {
                vertex(0,  asc - divY1 + tan(d1)*(ax-divX1) - divY2+2);
                vertex(-ax, asc - divY1 + tan(d1)*(ax-divX1)+2);
              }

              vertex(-ax, divY2);
              vertex(-ax-divX1, divY2 - divY1);
              vertex(-divX1, -divY1);

              vertex(0,0);
              endShape();
          pop();
      pop();
    
      push();
        translate(3*ax + 2*divX1 -2*(lap*ax), -ay);
        rotate(180);
            rectMode(CORNER);
            shearX(d2);
            if(ay/5<ax){
                rect(-1,0, divX1+2-(lap*ax), ay/5);
            } else {
                rect(-1,0, divX1+2-(lap*ax), ax);
            }
      pop();
    
    
    pop();
  pop();

  trackingCount++;  
  trackCount+=3;
}
*/

/*
function amp() {
    
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
      vertex(0, divY2)
      vertex(0, 0);
      endShape();
    
      push();
        translate(2*ax + divX1 - (lap*ax), -ay - 2*divY2 + divY1 + (lap*divY2));
        beginShape();
        vertex(0, 0);
//        vertex(0, ay + divY2);
//        vertex(-ax, ay + 2*divY2);
        vertex(-ax, divY2);
        vertex(-ax - divX1, divY2 - divY1);
        vertex(-divX1, -divY1);
        vertex(0, 0);
        endShape();
      
        beginShape();
        vertex(0,ay + divY2);
        vertex(-ax,ay + 2*divY2);
        vertex(-ax,2*divY2 + divY1);
        vertex(0,divY2 + divY1);
        vertex(0,ay + divY2);
        endShape();
      pop();
    
    push();
    translate(0,-ay - divY1 - 2*divY2);
      beginShape();
      vertex(0, 0);
      vertex(0, -asc + divY1 + 2*divY2);
      vertex(ax, -asc + divY1 + divY2);
      vertex(ax, 0);
      vertex(ax + divX1, divY1);
      vertex(divX1, divY1 + divY2);
      vertex(0, divY2)
      vertex(0, 0);
      endShape();
    
      push();
        translate(2*ax + divX1 - (lap*ax), -asc + 2*divY1 + (lap*divY2));
    
        beginShape();
        vertex(0, 0);
        vertex(0, asc - divY1 - divY2);
        vertex(-ax, asc - divY1);
        vertex(-ax, divY2);
        vertex(-ax - divX1, divY2 - divY1);
        vertex(-divX1, -divY1);
        vertex(0, 0);
        endShape();
      pop();
    pop();
    

      push();
        translate(3*ax + 2*divX1 - 2*(lap*ax), -ay + 2*divY1 + divY2 + 2*(lap*divY2));

        ellipse(0,0,4,4);
    
        beginShape();
        vertex(0, 0);
        vertex(0, ay - divY1 - divY2 - 2*(lap*divY2));
        vertex(0, ay - divY1 - divY2 - 2*(lap*divY2));
        vertex(-ax, ay - divY1 - 2*(lap*divY2));
        vertex(-ax, divY2);
        vertex(-2*ax-divX1, - divY1 - 2*divY2)
        vertex(-ax - divX1, - divY1 - 3*divY2); // this one
        vertex(0, 0);
        endShape();
    pop();
    
    pop();
  pop();

  trackingCount++;  
  trackCount+=3;
}

*/