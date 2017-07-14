// needs overlap

function X() {
  push();
  translate(trackCount*track + trackingCount*tracking,0);
  
    push();
    shearX(shrX);
  
      push();
        translate(0,(-ay-2*divY2 + divY1)/2);
        beginShape();
        vertex(0,                       -(-divY2 + (ax+divX1)/tan(d2))/2);
  
       if( (-(-ay-2*divY2+divY1)/2-ay - divY2) < (-(-divY2 + (ax+divX1)/tan(d2))/2 - divY2)){
            vertex(0,-(-ay - 2*divY2 + divY1)/2-ay);
            vertex(ax,-(-ay - 2*divY2 + divY1)/2-ay-divY2);
          }
        
        vertex(ax,                      -(-divY2 + (ax+divX1)/tan(d2))/2 - divY2);
        vertex(2*ax + divX1,     -(-divY2 + (ax+divX1)/tan(d2))/2 - divY2 + (ax+divX1)/tan(d2));
        
  //      if( (-(-ay-2*divY2+divY1)/2+divY1-2*divY2) > -(-divY2 + (ax+divX1)/tan(d2))/2-divY2 + (ax+divX1)/tan(d2) ){
          vertex(2*ax+divX1,-(-ay-2*divY2 + divY1)/2+divY1);
          vertex(ax + divX1,-(-ay-2*divY2+divY1)/2+divY1+divY2);
  //      }
        
        vertex(ax+divX1,         -(-divY2 + (ax+divX1)/tan(d2))/2+(ax+divX1)/tan(d2));
        
        vertex(0,                       -(-divY2 + (ax+divX1)/tan(d2))/2);
        endShape();
        
        beginShape();
        vertex(ax,0);
        vertex(0,divY2);
        vertex(0,-(-ay-2*divY2+divY1)/2+divY1+divY2);
        vertex(ax,-(-ay-2*divY2+divY1)/2+divY1);
        vertex(ax,0);
        endShape();
        
  
        push();
          translate(ax+divX1,0);
          beginShape();
          vertex(0,0);
          vertex(0,-(-ay-2*divY2+divY1)/2-ay);
          vertex(ax,-(-ay-2*divY2+divY1)/2-ay-divY2);
          vertex(ax,-divY2);
          vertex(0,0);
          endShape();
        pop();
      pop();
  
  //  beginShape();
  //  vertex(0,divY1);
  //  vertex(0,-ay/3);
  //  vertex(ax,-divY2-ay/3);
  //  vertex(ax,divY1-divY2);
  //  endShape();
    pop();
  pop();

  trackingCount++;
  trackCount+=2
}