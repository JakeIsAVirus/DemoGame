

var game = function(){ 
	var FPS = 30; 
	var xPos = 100;
	var yPos = 100;
	var xDir = 1;
	var yDir = 1;
	var canvas = document.getElementById( 'background');
	if( canvas.getContext){ 
		var ctx = canvas.getContext( '2d');}
	else{ 
		document.writeln( 'Sorry, <canvas> is not supported by this browser.');}
	//canvas.addEventListener( 'keypress', function(){
	//																		alert('Boo!')}, false);
	//if( window.event.shiftKey){
	//	alert('boot');}
  // use event.charCode || event.keyCode because IE doesn't support charCode
	document.onKeyPress = alert('');
	var grassTile = new Image();
	grassTile.src = 'greenGrass1.png';
	var draw = function(){ 
		var drawBG = function(){ 
			var tileSize = 16;
			for( var yTiles = 0; yTiles < 26; yTiles = yTiles + 1){
				for( var xTiles = 0; xTiles < 38; xTiles = xTiles + 1){ 
					ctx.drawImage( grassTile, xTiles * tileSize, yTiles * tileSize);}}}();}();
		var drawChar = function(){
			var mainChar = new Image();
			mainChar.src = 'traeSheet.png';
			var currentFrame = 0;
			var timeBetweenFrames = 0;
			var timeSinceLastFrame = 0;
			var frameWidth = 0;
			ctx.drawImage( mainChar, xPos, yPos)}();}
