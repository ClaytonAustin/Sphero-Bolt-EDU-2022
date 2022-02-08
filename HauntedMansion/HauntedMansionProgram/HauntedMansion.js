/*
Programer:Clayton Austin
Team Member:Mason
Date: 1.26.2022
Program: Obstical Course 
*/

async function startProgram() {
// Write code here



await scrollMatrixText('Start', {r: 66, g: 56, b: 225 }, 60, false);
// ScrollMatrixText begins the process of scrolling start, the RGB code sets the color, and 60 is the FPS of the scroll
//false starts the line of code without delay
await roll(0, 50, 2.8);
// await roll starts the roll at 0 degrees from start, at 50 speed, for 2.8 seconds
setMainLed({ r: 0, g: 0, b: 255 }, 10, false);
//set main led sets the color code to blue
await roll(45, 50, 1);
//Makes the sohero go at a 45 degreee angle and go forward
await roll(130, 50, 1.5);
//Changes angle & moves to the sound key
await Sound.Animal.Chicken.play(true);
//Plays animal sound
await roll(220, 50, 1);
//Moves bolt direction twords the red key
setMainLed({ r: 255, g: 0, b: 0 }, 10, false);
//Sets main Led to Red
await roll(140, 50, .9);
//Moves Sphero to move twords the next checkpoint
await roll(45, 50, 2);
//Moves twords checkpoint
await roll(135, 50, 1.9);
//Moves twords checkpoint
setMainLed({ r: 0, g: 255, b: 0 }, 10, false);
//sets LED to green
await Sound.Animal.Dolphin.play(true);
//Plays Dolphin sounds
await roll(25, 50, 1);
//Aligns for final streatch
await roll (295, 50, 3);




await Sound.Animal.Elephant.Play(true);

setMainLed({ r: 128, g: 0, b: 128 }, 10, false);
//sets color to purple



}
