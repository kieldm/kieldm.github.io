function capA() {
  push();
  translate(trackCount*track + trackingCount*tracking,0);
    push();
    shearX(shrX);
  
      beginShape();
      vertex(0, 0);
      vertex(0, -ay-asc);
      vertex(ax, -ay - asc - divY2);
      vertex(ax, 0);
      vertex(ax + divX1, divY1);
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
      
      push();
        translate(2 * ax + divX1 - (lap*ax), -ay - 2 * divY2 + divY1 - asc + (lap*divY2));
      
        beginShape();
        vertex(0, 0);
        
        if(radioBottom.value() == 2){
            vertex(0, ay + 3*divY2 + asc - (lap*divY2));
            vertex(-ax,ay + 3*divY2 + asc - (lap*divY2));
        } else if(radioBottom.value() == 3){
            vertex(0, ay + 2*divY2 + asc - (lap*divY2));
            vertex(-ax,ay + 3*divY2 + asc - (lap*divY2));
        } else {
            vertex(0, ay + asc +  divY2);
            vertex(divX1/2, ay + asc +  divY2 + divY1/2);
            vertex(divX1/2-ax, ay + asc +  2*divY2 + divY1/2);
            vertex(-ax,ay + asc +  2*divY2);
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
    
        //decor
        /*
        beginShape();
        vertex(0,asc);
        vertex(divX1/2,asc+divY1/2);
        vertex(divX1/2-ax,asc+divY1/2+divY2);
        vertex(-ax,asc+divY2);
        endShape();
        
        fill(255,0,0);
        push();
          translate(0,divY1/2);
          
          beginShape();
          vertex(0,asc);
          vertex(divX1/2,asc+divY1/2);
          vertex(divX1/2-ax,asc+divY1/2+divY2);
          vertex(-ax,asc+divY2);
          endShape();
        pop();
        */
        
      pop();
     
     
     //decor
     
     /*
     // center diamond
     
      beginShape();
      vertex(ax+3/4*(divX1 - (lap*ax)), -ay-asc-divY2 + divY1);
      vertex(ax+3/4*(divX1 - (lap*ax)), -ay-asc-divY2 + divY1 + ax);
      vertex(ax+1/4*(divX1 - (lap*ax)), -ay-asc-divY2 + divY1 + ax + tan(d1)*divX1/2);
      vertex(ax+1/4*(divX1 - (lap*ax)), -ay-asc-divY2 + divY1 + tan(d1)*divX1/2);
      endShape();
        
      noFill(); 
      stroke(255);
      strokeWeight((divX1-lap*ax)/25);
      line(ax+3/4*(divX1 - (lap*ax)), 0, ax+3/4*(divX1 - (lap*ax)), -ay-asc-divY2+divY1);
  
  //    line(ax+3/4*(divX1 - (lap*ax)), divY2, ax-lap*ax, divY2-3/4*divY1);
      
      fill(255);
      noStroke();
      */
  
    pop();
  pop();

  trackingCount++;
  trackCount+=2;
}