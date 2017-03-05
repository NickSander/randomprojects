var song;

function preload() {
    song = loadSound("stratos.mp3");   
    
}

function setup() {    
  createCanvas(100, 100);
    background(0);
    song.play();
}