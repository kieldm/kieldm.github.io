function capS() {
  push();
  translate(trackCount*track + trackingCount*tracking,0);
    push();
    shearX(shrX);
    
      beginShape();
      vertex(ax, 0);
      vertex(ax + divX1, divY1);
      vertex(divX1, divY1 + divY2);
      vertex(0,divY2)
      endShape();
    
      push();
        translate(2 * ax + divX1 - (lap*ax), -ay - 2 * divY2 + divY1 + (lap*divY2));
      
        beginShape();
        vertex(0, 2*divY2);
        vertex(0, ay + divY2);
        vertex(-ax, ay + 2 * divY2);
        vertex(-ax, 3*divY2);
        vertex(-2*ax - divX1, 3*divY2 -(ax+divX1)/tan(d2));
        
        vertex(-2*ax - divX1,2 * divY2 - divY1- asc);
        vertex(-ax - divX1,divY2 - divY1- asc);
        
        
        vertex(-divX1-ax, 2*divY2-(ax+divX1)/tan(d2));
        vertex(0,2*divY2);
        endShape();
  
          beginShape();
          vertex(0, -asc);
          vertex(-ax, divY2-asc);
          vertex(-ax-divX1, divY2 - divY1-asc);
          vertex(-divX1, -divY1-asc);
          vertex(0,-asc);
          endShape();
          
      pop();
  
    pop();
  pop();
  
  trackingCount++;
  trackCount+=2;
}