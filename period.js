function period() {
  push();
  translate(trackCount*track,0);
  
    beginShape();
    vertex(0, 0);
  
    vertex(ax, - tan(d1) * ax);
  
    vertex(ax, cos(d2)*c1/2);
    vertex(0,cos(d2)*c1/2 + tan(d1)*ax);
  
    vertex(0, 0);
    endShape();
  pop();

  trackCount+=1;
}