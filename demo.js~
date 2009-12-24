

var game = function(){ 
	 //costants
	 var FPS = 30,
			 LEFT = 37,
			 UP = 38,
			 RIGHT = 39,
			 DOWN = 40;
			 SPEED = 5;
			 TILE_SIZE = 16;
	 //globals
	 var xPos = 100,
			 yPos = 100,
			 xDir = 1,
			 yDir = 1;
	 //access canvas
	 var canvas = document.getElementById( 'background');
	 if( canvas.getContext){ 
			var canvas = canvas.getContext( '2d');}
	 else{ 
			document.writeln( 'Sorry, <canvas> is not supported by this browser.');}
	 //detect events
	 document.onkeydown = function( event){
			handleEvents( event, "start");};
	 document.onkeyup = function( event){
			handleEvents( event, "stop");};
	 //load images
	 var grassTile = new Image();
	 grassTile.src = 'greenGrass1.png';
	 var mainChar = new Image();
	 mainChar.src = 'traeSheet.png';
	 //draw the background
	 //drawBG() variables
	 var yTiles,
			 xTiles;
	 var drawBG = function(){
			//calculate which tract to draw
			var tractXPos = Math.floor(xPos / 16 - 2),
					tractYPos = Math.floor(yPos / 16 - 2); 
			//only draws entire background if there are arguments
			if( arguments[0]){
				 ( function(){
						for( yTiles = 0; yTiles < 26; yTiles += 1){
							 for( xTiles = 0; xTiles < 38; xTiles += 1){ 
									canvas.drawImage( grassTile, xTiles * TILE_SIZE, yTiles * TILE_SIZE);}}})()}
			else{
				 //draw 4x4 tracts 
				 ( function(){
						for( yTiles = 0; yTiles < 5; yTiles += 1){
							 for( xTiles = 0; xTiles < 5; xTiles +=  1){ 
									canvas.drawImage( grassTile, (tractXPos + xTiles) * TILE_SIZE, 
															 (tractYPos + yTiles) * TILE_SIZE);}}})();}};
	 //draw the main character
	 //drawChar() variables
	 var frame = 0,
			 timeBetween = 0,
			 timeSinceLast = 0,
			 frameWidth = 16,
			 frameHeight = 24;
	 var drawChar = function(){
			canvas.drawImage( mainChar, frame * frameWidth, 0, frameWidth, frameHeight, 
												xPos, yPos, frameWidth, frameHeight);};
	 //create frame timer
	 //variables of frame timer functions
	 var lastTick,
			 currentTick,
			 frameSpacing,
			 seconds,
			 currentTick;
	 var tick = function(){
			currentTick = ( new Date()).getTime();
		 	frameSpacing = currentTick - lastTick;
			lastTick = ( new Date()).getTime()};
	 var getSeconds = function(){
			seconds = frameSpacing / 1000;
			if( isNaN( seconds)){
				 return 0;}};
	 //display graphics
	 drawBG( "first call");
	 drawChar();
	 //handle movement
	 //movement variables
	 var leftAni = false,
			 upAni = false,
			 rightAni = false,
			 downAni = false;
	 var moveLeft = function(){
			if( arguments[0] === "start"){
				 xPos = xPos - SPEED;
				 drawBG();
				 leftAni = true;
				 drawChar();}
			if( arguments[0] === "stop"){
				 leftAni = false;}};
	 var moveUp = function(){
			if( arguments[0] === "start"){
				 yPos = yPos - SPEED;
				 drawBG();
				 upAni = true;
				 drawChar();}
			if( arguments[0] === "stop"){
				 upAni = false;}};
	 var moveRight = function(){
			if( arguments[0] === "start"){
				 xPos = xPos + SPEED;
				 drawBG();
				 rightAni = true;
				 drawChar();}
			if( arguments[0] === "stop"){
				 rightAni = false;}};
	 var moveDown = function(){
			if( arguments[0] === "start"){
				 yPos = yPos + SPEED;
				 drawBG();
				 downAni = true;
				 drawChar();}
			if( arguments[0] === "stop"){
				 downAni = false;}};
	 //handle events
	 var handleEvents = function( event){
			if( event.keyCode === LEFT){
				 moveLeft(arguments[1]);}
			if( event.keyCode === UP){
				 moveUp(arguments[1]);}
			if( event.keyCode === RIGHT){
				 moveRight(arguments[1]);}
			if( event.keyCode === DOWN){
				 moveDown(arguments[1]);}};};

//NEXT: animation then smooth scrolling
