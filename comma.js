function comma() {
  push();
  translate(trackCount*track + trackingCount*tracking,0);

    push();
    shearX(shrX);
        beginShape();
        vertex(0, 0);

        vertex(ax, - divY2);

        vertex(ax, divY1);
        vertex(0, divY1 + divY2);

        vertex(0, 0);
        endShape();

    pop();
  pop();
    
  trackingCount++;
  trackCount+=1;
}