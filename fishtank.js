void setup() {
    size(400, 400);
    
}

/*

This program generates a Fish Tank with only one fish inside. The fish position, length, heigth, color and velocity and side is random.

The fish's side changes when he gets to the Tank Canvas.

If you press your mouse you create a new fish in your mouse position and with every other variables random.

By Goncalerta.

*/

var Fish = [{
    centerX: random(-100, width+100),
    centerY: random(0, 400),
    bodyLength: random(30, 130),
    bodyHeight: random(10, 90),
    bodyColor: color(random(0, 255), //Red
                     random(0, 255), //Green
                     random(0, 255)), //Blue
    vel: random(1, 6),
    side: random(1, 10)
    
}];

//Draw the Fish
var drawFish = function(centerX, centerY, bodyLength, bodyHeight, bodyColor){
        noStroke();
        fill(bodyColor);
        
        //Body
        ellipse(centerX, centerY, bodyLength, bodyHeight);
        
        //Tail
        var tailWidth = bodyLength/4;
        var tailHeight = bodyHeight/2;
        triangle(centerX-bodyLength/2, centerY,
          centerX-bodyLength/2-tailWidth, centerY-tailHeight,
          centerX-bodyLength/2-tailWidth, centerY+tailHeight);
         
        //Eye
        fill(33, 33, 33);
        ellipse(centerX+bodyLength/4, centerY, bodyHeight/5,            bodyHeight/5);
};


//Draw Function
void draw() {
    background(89, 216, 255);
    for (var i = 0; i < Fish.length; i++){
        drawFish(  Fish[i].centerX, 
                   Fish[i].centerY, 
                   Fish[i].bodyLength, 
                   Fish[i].bodyHeight, 
                   Fish[i].bodyColor  );
        
        //Tank Canvas
        if(Fish[i].centerX > width+100 || Fish[i].centerX < -100){
            Fish[i].side = 6;   
        }
        
        if(Fish[i].side > 5){
            Fish[i].vel = -Fish[i].vel;   
            Fish[i].bodyLength = -Fish[i].bodyLength;   
            Fish[i].side = 2;
        }
        
        //Movement
        Fish[i].centerX += Fish[i].vel;
    }
};

//mouseClicked Event Handler
void mouseClicked() {
    Fish.push({
        centerX: mouseX,
        centerY: mouseY,
        bodyLength: random(30, 130),
        bodyHeight: random(10, 90),
        bodyColor: color(random(0, 255), 
                         random(0, 255), 
                         random(0, 255)),
        vel: random(1, 6),
        side: random(1, 10)
    });
};
