var Game = { };

var stage = new Kinetic.Stage({
    container: 'container',
    width: window.innerWidth,
    height: window.innerHeight
  });

Game.stage = stage;
Game.fps = 50;

var screemHeight = window.innerWidth;
var screenWidth = window.innerHeight;

var deltaTime = 0.0;
var currentGameTime = time();
var lastGameTime = currentGameTime;  

function time()
{
    return (new Date).getTime();
}

function updateDeltaTime()
{
    currentGameTime = time();
    
    //log
    console.log("Current : " + currentGameTime + "\n Last: " + lastGameTime);
    console.log("  UpdateDelta: " + deltaTime);
    
    deltaTime = currentGameTime - lastGameTime;
    lastGameTime = currentGameTime;
}

Game.update = function() 
{ 
    //... run game logic here ... 
    
};

Game.draw = function(interpolation) 
{
    //clear the drawing if necessary

    //draw stuff
};

Game.run = (function() 
{
    //making several variables
    var loops = 0;
    var skipTicks = 1000 / Game.fps;    //how many milliseconds to wait before drawing          
    var nextGameTick = (new Date).getTime();
    
    return function() 
    {
        loops = 0;
        
        while ((new Date).getTime() > nextGameTick) 
        {
            updateDeltaTime();
            Game.update();
            nextGameTick += skipTicks;
            loops++;
        }

        if (!loops) 
        {
            Game.draw((nextGameTick - (new Date).getTime()) / skipTicks);
        } 
        else 
        {
            Game.draw(0);
        }
    };
})();


function start()
{
    window.setInterval(Game.run, 0);
};


/*
Notes:

Date.getTime() - number of milliseconds since unix epoch

*/