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



}
