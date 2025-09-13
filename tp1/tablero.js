function distnciaMouseXY( x,  y) {
  return dist(mouseX, mouseY, x, y);
}

function siEsPar( i,  t) {
  return (i+t)%2 == 0;
}

function dibTablero() {
  for (let t = 0; t<9; t++) {
    for (let i = 0; i<9; i++) {

      let x = i * 45 + 22.5 + 400;
      let y = t * 45 + 22.5;

      let d = distnciaMouseXY(x, y);
      let tam = map(d, 0, 200, 10, 45);
      tam = constrain(tam, 10, 45);

      if (siEsPar(i, t)) {
        fill(figuraColor);
      } else {
        fill(figuraColorDos);
      }

      push();
      translate(x, y);
      noStroke();
      rect(0, 0, tam, tam);
      pop();
    }
  }
}
