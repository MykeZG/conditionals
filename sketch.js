let radio = 100;
let radio_2 = 80;
let posX;
let posY;
let movimientoYoyo;
let cuerda;
let angulo = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  movimientoYoyo = false;
  posX = width / 2;
  posY = 50;
  cuerda = 200;
}

function draw() {
  background("#000000");
  // Cuerda
  stroke("#ff0000");
  strokeWeight(5);
  line(posX, posY - 50 + radio / 2, posX, 0);

  // Yoyo
  translate(posX, posY); // permite que yo cambie el punto de origen en las cordenadas

  // circulo grande
  rotate(angulo);
  fill("#ff0000");
  noStroke();
  circle(0, 0, radio);

  // circulo pequeño
  fill("#ffffff");
  noStroke();
  circle(0, 0, radio_2);

  // voy a escribir la palabra y que gire dentro para eso cree la variable angulo donde podre definir valores y usarlos dentro de rotate y hacer girar el yoyo

  // Palabra Yoyo
  fill("#000000");
  // cordenadas en x y y de alineación en textAlign
  textAlign(CENTER, CENTER);
  textSize(25);
  text("Yoyo", 0, 0);

  // una vez que termine de centrar todo los elementos de mi yoyito debo restablecer las coordenadas para que solo afecte a lo quer viene despues en las sigueientes lineas de códgio
  resetMatrix();

  // ascensor
  // Si la variable con true o false es en este caso true esta aumente en
  if (movimientoYoyo) {
    posY += 20;
    angulo += 0.5;
    // El else actua por que la variable no es true podria decirse con encambio o en contraposición
  } else {
    // Si la posición en Y es mayor que 50 entonces esta disminuye en
    if (posY > 50) {
      // Verifica que no supere la posición inicial
      posY -= 15;
      angulo += 0.3;
    }
  }
  // limites
  if (posY > height - radio) {
    posY = height - radio;
  }
}

function mousePressed() {
  movimientoYoyo = true;
}
function mouseReleased() {
  movimientoYoyo = false;
}
