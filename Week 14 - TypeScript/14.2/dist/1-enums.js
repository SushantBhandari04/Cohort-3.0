"use strict";
// enum Direction {
//     Up=100, 
//     Down,
//     Left, 
//     Right
// }
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
const keyPressed = (key) => {
    console.log(key);
};
keyPressed(Direction.Right);
