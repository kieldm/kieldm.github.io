function period() {
  push();
  translate(trackCount*track + trackingCount*tracking,0);

    push();
    shearX(shrX);
        beginShape();
        vertex(0, 0);

        vertex(ax, - divY2);

        vertex(ax, cos(d2)*c1/2);
        vertex(0,cos(d2)*c1/2 + divY2);

        vertex(0, 0);
        endShape();

    pop();
  pop();
    
  trackingCount++;
  trackCount+=1;
}