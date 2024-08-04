

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["10b93927-40ee-47a9-b4da-89f66aeed76a","c794d0e7-4cde-4679-8f56-f1b34dff3657","5473ac64-5a4f-481b-92ac-e1dd0c5e8378","1082949d-e455-45c3-8894-0b4a45edf5a4","6932baa6-fa30-4c31-936d-642019bccf6f","1ab5df1d-98f9-4b78-9a5a-64dac82ce574","116249a7-05c4-4aca-a16e-b409b1e6aee4"],"propsByKey":{"10b93927-40ee-47a9-b4da-89f66aeed76a":{"name":"sam","sourceUrl":"assets/api/v1/animation-library/gamelab/siSqHEMKUKFQKPPHR8lGKlEhG26prtCC/category_people/kid_2_walking.png","frameSize":{"x":252,"y":422},"frameCount":1,"looping":true,"frameDelay":2,"version":"siSqHEMKUKFQKPPHR8lGKlEhG26prtCC","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":252,"y":422},"rootRelativePath":"assets/api/v1/animation-library/gamelab/siSqHEMKUKFQKPPHR8lGKlEhG26prtCC/category_people/kid_2_walking.png"},"c794d0e7-4cde-4679-8f56-f1b34dff3657":{"name":"car1","sourceUrl":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png"},"5473ac64-5a4f-481b-92ac-e1dd0c5e8378":{"name":"car2","sourceUrl":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png"},"1082949d-e455-45c3-8894-0b4a45edf5a4":{"name":"car3","sourceUrl":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png"},"6932baa6-fa30-4c31-936d-642019bccf6f":{"name":"car4","sourceUrl":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"CSqSIJEb65ONvhatlX8ENonwX._VZQ_n","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png"},"1ab5df1d-98f9-4b78-9a5a-64dac82ce574":{"name":"city","sourceUrl":"assets/api/v1/animation-library/gamelab/OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF/category_backgrounds/city.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF/category_backgrounds/city.png"},"116249a7-05c4-4aca-a16e-b409b1e6aee4":{"name":"casa1","sourceUrl":"assets/api/v1/animation-library/gamelab/x87aZdlNymsbPI337XVFa5ZyXMo9RQ_H/category_buildings/commercial_01.png","frameSize":{"x":278,"y":204},"frameCount":1,"looping":true,"frameDelay":2,"version":"x87aZdlNymsbPI337XVFa5ZyXMo9RQ_H","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":278,"y":204},"rootRelativePath":"assets/api/v1/animation-library/gamelab/x87aZdlNymsbPI337XVFa5ZyXMo9RQ_H/category_buildings/commercial_01.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3, car4;
var boundary1, boundary2;
var sam;
var meta;
var gameState="serve";
  
  meta = createSprite(373,190,52,140);  
  meta.shapeColor="green";

  boundary1 = createSprite(190,120,420,3);
  boundary1.shapeColor="yellow";
  boundary2 = createSprite(190,260,420,3);
  boundary2.shapeColor="yellow";
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  sam.setAnimation("sam");
  sam.scale=0.06;
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car1.setAnimation("car1");
  car1.scale=0.2;
  
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car2.setAnimation("car2");
  car2.scale=0.2;
  
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car3.setAnimation("car3");
  car3.scale=0.2;
  
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  car4.setAnimation("car4");
  car4.scale=0.2;
 
//Agregar velocidad  para hacer que el auto se mueva.
car1.velocityY=4;
car2.velocityY=4;
car3.velocityY=-4;
car4.velocityY=-4;

function draw() {
   background("gray");
  fill("black");
  textSize(22);
  text("Intentos fallidos: " + life, 210, 29);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,45,140);
  //fill("yellow");
  //rect(345,120,52,140);
  
  
// Crear la función bounceoff para hacer que el auto rebote en los límites.
car1.bounceOff(boundary1);
car1.bounceOff(boundary2);

car2.bounceOff(boundary1);
car2.bounceOff(boundary2);

car3.bounceOff(boundary1);
car3.bounceOff(boundary2);

car4.bounceOff(boundary1);
car4.bounceOff(boundary2);

//Agregar la condición para hacer que Sam se mueva de izquiera a derecha.
  if(keyDown("d")){
    sam.x=sam.x+4;
  }

  if(keyDown("a")){
    sam.x=sam.x-4;
  }

//Agregar la condición de reducir la vida de Sam si toca el carro.
if(sam.isTouching(car1) || sam.isTouching(car2) || sam.isTouching(car3) || sam.isTouching(car4)){
  sam.x=20;
  sam.y=190;

 life=life+1;
}
  
//EXTRAS  
if(sam.isTouching(meta)){
  car1.velocityY=0;
  car2.velocityY=0;
  car3.velocityY=0;
  car4.velocityY=0;
}
  
for (var i = 70; i < 370; i=i+50) {
  var raya = createSprite(i, 200, 20, 5);
  raya.shapeColor="white";
}
 

   fill("white");
   textSize(30);
   text("¡Bienvenido!", 115, 80);
   fill("white");
   textSize(17);
   text("Para jugar mueve el personaje con las teclas A y D", 8, 110);
   
  
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
