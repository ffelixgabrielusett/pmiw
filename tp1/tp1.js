/*
 Felix Gabriel Uset
 Comision 5
 Video:
 */

let opart;
let figuraColor;
let figuraColorDos;

function preload(){
  opart = loadImage("data/tabaje.jpg");
}

function setup() {
  createCanvas(800, 400);
  figuraColor = color(36);
  figuraColorDos = color(255);
  rectMode(CENTER);
}

function draw() {
  background(255);
  image(opart, 0, 0, 400, 400);
  dibTablero();
  minrect(10, 10);
}

function mouseClicked() {
  if (mouseX > 400 && mouseX < 800 && mouseY > 0 && mouseY < 400) {
    figuraColor = color(255);
    figuraColorDos = color(35);
  } else if (mouseX > 0 && mouseX < 400 && mouseY > 0 && mouseY < 400) {
    figuraColor = color(35);
    figuraColorDos = color(255);
  }
}
