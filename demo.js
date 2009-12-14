

var game = function(){ 
										   var draw = function(){ 
																						  var canvas = document.getElementById( 'background');
																							if( canvas.getContext){ 
																																		  var ctx = canvas.getContext( '2d');}
																						  else{ 
																								    document.writeln( 'Sorry, <canvas> is not supported by this browser.');}
																							var grassTile = new Image();
																							grassTile.src = 'greenGrass1.png';
																							grassTile.onload = function(){ 
																																						 ctx.drawImage( grassTile, 0, 0);
																																						 ctx.drawImage( grassTile, 32, 0);
																																 		         ctx.drawImage( grassTile, 48, 0);
																																						 ctx.drawImage( grassTile, 0, 16);
																																						 ctx.drawImage( grassTile, 0, 32);
																																						 ctx.drawImage( grassTile, 0, 48);
																																						 ctx.drawImage( grassTile, 16, 16);
																																						 ctx.drawImage( grassTile, 16, 32);
																																						 ctx.drawImage( grassTile, 16, 48);
																																						 ctx.drawImage( grassTile, 32, 16);
																																						 ctx.drawImage( grassTile, 32, 32);
																																						 ctx.drawImage( grassTile, 32, 48);
																																						 ctx.drawImage( grassTile, 48, 0);
																																						 ctx.drawImage( grassTile, 48, 16);
																																						 ctx.drawImage( grassTile, 48, 32);
																																						 ctx.drawImage( grassTile, 48, 48);
																																						 ctx.drawImage( grassTile, 16, 0);}}()}
