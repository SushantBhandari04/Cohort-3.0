// enum Direction {
//     Up=100, 
//     Down,
//     Left, 
//     Right
// }
enum Direction {
    Up="Up", 
    Down="Down",
    Left="Left", 
    Right="Right"
}

const keyPressed = (key: Direction)=>{
    console.log(key);
}

keyPressed(Direction.Right)