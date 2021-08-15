const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

var pig1;
var log1;
var bird;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,500,50,50);
    box2 = new Box(900,500,50,50);


    pig1 = new Pig(800,500); 


    log1 = new Log(800,450,300,PI/2);

    bird = new Bird(400,50);


    ground = new Ground(600,height,1200,20)


    




}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    bird.display();   
    ground.display();
}