

var game = function(){ 
											 var FPS = 30; 
											 var xPos = 0;
											 var yPos = 0;
											 var xDir = 1;
											 var yDir = 1;
											 var canvas = document.getElementById( 'background');
											 if( canvas.getContext){ 
																							 var ctx = canvas.getContext( '2d');}
											 else{ 
														 document.writeln( 'Sorry, <canvas> is not supported by this browser.');}
											 var grassTile = new Image();
											 grassTile.src = 'greenGrass1.png';
											 var draw = function(){ 
																			        var drawBG = function(){ 
																																		   var tileSize = 16;
																																		   for( var yTiles = 0; yTiles < 26; yTiles = yTiles + 1){
																																																															 for( var xTiles = 0; xTiles < 38; xTiles = xTiles + 1){ 
																							  ctx.drawImage( grassTile, xTiles * tileSize, yTiles * tileSize);}}}()}()}
