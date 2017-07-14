// needs overlap

function Z() {
  push();
  translate(trackCount*track + trackingCount*tracking,0);
  
    push();
    shearX(shrX);
      
      push();
        translate(2 * ax + divX1,divY1-divY2);
        beginShape();
          vertex(0,0);
          vertex(-ax,divY2);
          vertex(-2*ax - divX1,-(ax+divX1)/tan(d2)+divY2);
    
          vertex(-ax - divX1,-(ax+divX1)/tan(d2));
          vertex(0,0);
        endShape();
      pop();
    
      push();
        translate(ax,-ay-divY2);
        beginShape();
        vertex(0,0);
        vertex(-ax,divY2);
        vertex(divX1,(ax+divX1)/tan(d2)+divY2);
    
        vertex(ax+divX1,(ax+divX1)/tan(d2));
        vertex(0,0);
        endShape();
      pop();
      
      push();
        translate(2 * ax + divX1, -ay - 2 * divY2 + divY1);
    
        beginShape();
        vertex(0, ay+divY2);
        vertex(0, ay+desc+3*divY2 - divY1);
        vertex(-ax, ay + desc + 4 * divY2 - divY1);
        vertex(-ax, ay+2*divY2);
        vertex(0, ay+divY2);
        endShape();
    
        push();
        translate(-ax, ay+divY2-divY1);
          beginShape();
          vertex(0,0);
          vertex(0,-ay+(ax+divX1)/tan(d2)+divY2);
          vertex(ax,-ay+(ax+divX1)/tan(d2));
          vertex(ax,-divY2);
          vertex(0,0);
          endShape();
        pop();
    
        push();
          translate(-ax, ay + desc + 4 * divY2 - divY1);
          beginShape();
          vertex(0, 0);
          vertex(-ax, divY2);
          vertex(-ax - divX1/2, divY2 - divY1/2);
          vertex(-divX1/2, -divY1/2);
          vertex(0, 0);
          endShape();
        pop();
      pop();
  
    pop();
  pop();

  trackingCount++;
  trackCount+=2;
}