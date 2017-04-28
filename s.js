function S() {

    push();
      translate(0,(-ay-2*tan(d1)*ax+cos(d2)*c1)/2);
      
      beginShape();
      vertex(0,                       -(-tan(d1) * ax + (ax+sin(d2)*c1)/tan(d2))/2);
      
      if( (-(-ay-2*tan(d1)*ax+cos(d2)*c1)/2-ay-tan(d1)*ax) < (-(-tan(d1) * ax + (ax+sin(d2)*c1)/tan(d2))/2-tan(d1) * ax)){
        vertex(0,-(-ay-2*tan(d1)*ax+cos(d2)*c1)/2-ay);
        vertex(ax,-(-ay-2*tan(d1)*ax+cos(d2)*c1)/2-ay-tan(d1)*ax);
      }
      
      vertex(ax,                      -(-tan(d1) * ax + (ax+sin(d2)*c1)/tan(d2))/2-tan(d1) * ax);
      vertex(2*ax + sin(d2) * c1,     -(-tan(d1) * ax + (ax+sin(d2)*c1)/tan(d2))/2-tan(d1) * ax + (ax+sin(d2)*c1)/tan(d2));
      
      if( (-(-ay-2*tan(d1)*ax+cos(d2)*c1)/2+cos(d2)*c1-2*tan(d1)*ax) > -(-tan(d1) * ax + (ax+sin(d2)*c1)/tan(d2))/2-tan(d1) * ax + (ax+sin(d2)*c1)/tan(d2) -tan(d1)*ax){
        vertex(2*ax+sin(d2)*c1,-(-ay-2*tan(d1)*ax+cos(d2)*c1)/2+cos(d2)*c1-tan(d1)*ax);
        vertex(ax + sin(d2) * c1,-(-ay-2*tan(d1)*ax+cos(d2)*c1)/2+cos(d2)*c1);
      }
      
      vertex(ax+sin(d2) * c1,         -(-tan(d1) * ax + (ax+sin(d2)*c1)/tan(d2))/2+(ax+sin(d2)*c1)/tan(d2));
      
      vertex(0,                       -(-tan(d1) * ax + (ax+sin(d2)*c1)/tan(d2))/2);
      endShape();
    pop();

  push();
    translate(2 * ax + sin(d2) * c1, -ay - 2 * tan(d1) * ax + cos(d2) * c1);

    beginShape();
    vertex(0, 0);
    vertex(-ax, tan(d1) * ax);
    vertex(-ax - sin(d2) * c1, tan(d1) * ax - cos(d2) * c1);
    vertex(-sin(d2) * c1, -cos(d2) * c1);
    vertex(0, 0);
    endShape();
  pop();

  push();
    translate(0,tan(d1) * ax);
    beginShape();
    vertex(0,0);
    vertex(ax, -tan(d1) * ax);
    vertex(ax + sin(d2) * c1, -tan(d1) * ax + cos(d2) * c1);
    vertex(sin(d2) * c1, cos(d2) * c1);
    vertex(0, 0);
    endShape();
  pop();

  translate(track, 0);
}