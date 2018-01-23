function S() {
  push();
  translate(trackCount*track + trackingCount*tracking,0);
    push();
    shearX(shrX);
  
      push();
        translate(-(lap*ax)/2,(-ay-2*divY2+divY1+(lap*divY2))/2);
    
        beginShape();
        vertex(0,                       -(-divY2 + (ax+divX1)/tan(d2))/2);
        
        if( (-(-ay-2*divY2+divY1)/2-ay-divY2) < (-(-divY2 + (ax+divX1)/tan(d2))/2-divY2)){
          vertex(0,-(-ay-2*divY2+divY1)/2-ay);
          vertex(ax,-(-ay-2*divY2+divY1)/2-ay-divY2);
        }
        
        vertex(ax,                      -(-divY2 + (ax+divX1)/tan(d2))/2-divY2);
        vertex(2*ax + divX1,     -(-divY2 + (ax+divX1)/tan(d2))/2-divY2 + (ax+divX1)/tan(d2));
        
        //br leg
        if( (-(-ay-2*divY2+divY1)/2+divY1-2*divY2) > -(-divY2 + (ax+divX1)/tan(d2))/2-divY2 + (ax+divX1)/tan(d2) -divY2){
          vertex(2*ax+divX1,-(-ay-2*divY2+divY1)/2+divY1-divY2);
          vertex(ax + divX1,-(-ay-2*divY2+divY1)/2+divY1);
        }
        
        vertex(ax+divX1,         -(-divY2 + (ax+divX1)/tan(d2))/2+(ax+divX1)/tan(d2));
        
        vertex(0,                       -(-divY2 + (ax+divX1)/tan(d2))/2);
        endShape();
      pop();
  
      push();
        translate(2 * ax + divX1 - (lap*ax), -ay - 2 * divY2 + divY1   + (lap*divY2));

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
    
        beginShape();
        vertex(0, 0);
        vertex(-ax, divY2);
        vertex(-ax - divX1, divY2 - divY1);
        vertex(-divX1, -divY1);
        vertex(0, 0);
        endShape();
      pop();
        
      push();
        translate(0,divY2);
    
        beginShape();
        vertex(0,0);

        if( (-(-ay-2*divY2+divY1)/2+divY1-2*divY2) > -(-divY2 + (ax+divX1)/tan(d2))/2-divY2 + (ax+divX1)/tan(d2) -divY2){
            vertex(0,
                   2*(-(-divY2 + (ax+divX1)/tan(d2))/2-divY2 + (ax+divX1)/tan(d2)  -
                   (-(-ay-2*divY2+divY1)/2+divY1-divY2))/3);
            vertex(ax,
                   2*(-(-divY2 + (ax+divX1)/tan(d2))/2-divY2 + (ax+divX1)/tan(d2)  -
                   (-(-ay-2*divY2+divY1)/2+divY1-divY2))/3-divY2);
                   
        }
    
    
        vertex(ax, -divY2);
        vertex(ax + divX1, -divY2 + divY1);
        vertex(divX1, divY1);
        vertex(0, 0);
        endShape();
    
      pop();

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
      
    pop();
  pop();

  trackingCount++;
  trackCount+=2;  
}
