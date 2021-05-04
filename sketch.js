const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var lightningImg;
var umbrella1;
var drops = [];
var thunderCreatedFrame;

function preload() {
  thunder1 = loadImage("1.png");
  thunder2 = loadImage("2.png");
  thunder3 = loadImage("3.png");
  thunder4 = loadImage("4.png");
}

function setup() {
  var canvas = createCanvas(400, 700);
  engine = Engine.create();
  world = engine.world;

  umbrella1 = new umbrella(200, 500);

  if (frameCount % 150 === 0) {
    for (var i = 0; i < 100; i++) {
      drops.push(new Drops(random(0, 400), random(0, 400)));
    }
  }

  Engine.run(engine);
}

function draw() {
  background("black");

  rand = Math.round(random(1, 4));

  if (frameCount % 50 === 0) {
    thunderCreatedFrame = frameCount;
    thunder = createSprite(random(10, 370), random(10, 30), 10, 10);
    switch (rand) {
      case 1:
        thunder.addImage(thunder1);
        break;
      case 2:
        thunder.addImage(thunder2);
        break;
      case 3:
        thunder.addImage(thunder3);
        break;
      case 4:
        thunder.addImage(thunder4);
        break;
      default:
        break;
    }
    thunder.scale = random(0.3, 0.6);
  }

  if (thunderCreatedFrame + 10 === frameCount) {
    thunder.destroy();
  }

  for (var i = 0; i < 100; i++) {
    drops[i].display();
    drops[i].updateY();
  }

  umbrella1.display();

  drawSprites();
}
