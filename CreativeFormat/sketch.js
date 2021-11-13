let img1;
let img2;
let img3;

let hori_dist;
let verti_dist;

hori_dist = 130;
verti_dist = 130;

img_width = 100;
img_height = 100;

function preload() {
    img1 = loadImage('assets/a.jpg');
    img2 = loadImage('assets/b.jpg');
    img3 = loadImage('assets/c.jpg');
}
//===========================================================
function setup() {
    // put setup code here
    // background(255, 204, 0);
    createCanvas(600, 800);
    fill(255);
    rect(0, 0, 600, 800);
    image(img1, 20, 20, img_width, img_height);
    image(img2, 20, 20 + img_height + verti_dist, img_width, img_height);
    image(img3, 20, 20 + img_height + img_height + verti_dist + verti_dist, img_width, img_height);

    fill(255, 4, 67);
    textSize(20);
    textWrap(WORD);
    text('Have a wonderful day', 300, 100, 500);
}

//===========================================================
function draw() {
    // background(255, 204, 0);
    if (mouseIsPressed) {

        ellipse(mouseX, mouseY, 80, 80);
    } else {
        fill(255);
    }

}