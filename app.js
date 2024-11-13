// let boxes= document.querySelectorAll(".box");
// let resetBtn= document.querySelector("#reset-btn");
// let newbtn=document.querySelector("#new-btn");
// let msgcontainer=document.querySelector(".msg-container");
// let msg= document.querySelector("#msg")
// turnO=true;
// const winPatterns=[
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8]
// ]
// boxes.forEach((box)=>{
//     box.addEventListener("click",()=>{
//         if(turnO){
//             //if playerO turn
//             box.innerText="O"
//             turnO=false;
//         }
//         else{
//             //if playerx turn
//             box.innerText="X"
//             turnO=true;
//         }
//         box.disabled=true;
//         checkWinner();
//     })
// })

// const disableBoxes=()=>{
//     for(box of boxes){
//         box.disabled=true;
//     }
// }
// const showWinner=(winner)=>{
//     msg.innerText=`Congratulations,Winner is ${winner}`;
//     msgcontainer.classList.remove("hide");
//     disableBoxes();
// }
// const checkWinner=()=>{
//   for( let pattern of winPatterns){
//     let pos1Val=boxes[pattern[0]].innerText;
//     let pos2Val=boxes[pattern[1]].innerText;
//     let pos3Val=boxes[pattern[2]].innerText;
//     if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
//         if(pos1Val===pos2Val && pos2Val===pos3Val){
//             showWinner(pos1Val);
//         }
//      }
//   }
// };
// const resetgame=()=>{
//     turnO=true;
//     enableBoxes();
//     msgcontainer.classList.add("hide");
// }
// const enableBoxes=()=>{
//     for(box of boxes){
//         box.disabled=false;
//         box.innerText="";
//     }
// }
// newbtn.addEventListener("click",resetgame);
// resetBtn.addEventListener("click",resetgame);


// Select all the boxes (cells) in the game board
let boxes = document.querySelectorAll(".box");

// Select the reset and new game buttons
let resetBtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");

// Select the message container and message elements for displaying the winner
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// Variable to track the current turn (true for 'O', false for 'X')
let turnO = true;

// Define the winning patterns (each pattern is an array of indexes representing a win)
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// Add event listeners to each box (cell)
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // Check the current turn and set the box content accordingly
        if (turnO) {
            box.innerText = "O"; // If it's player 'O's turn, display 'O'
            turnO = false;        // Switch turn to player 'X'
        } else {
            box.innerText = "X"; // If it's player 'X's turn, display 'X'
            turnO = true;        // Switch turn to player 'O'
        }
        box.disabled = true; // Disable the box after a move is made
        checkWinner(); // Check if there is a winner after each move
    });
});

// Function to disable all boxes (used when game ends)
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

// Function to display the winner
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`; // Show winner message
    msgcontainer.classList.remove("hide"); // Unhide the message container
    disableBoxes(); // Disable all boxes to end the game
};

// Function to check if there is a winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        // Get the values of each position in the current win pattern
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        // Check if all three positions are not empty and have the same value
        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val); // Declare the winner if a pattern is matched
            }
        }
    }
};

// Function to reset the game state
const resetgame = () => {
    turnO = true; // Reset to player 'O' starting the game
    enableBoxes(); // Enable all boxes and clear them
    msgcontainer.classList.add("hide"); // Hide the winner message container
};

// Function to enable all boxes and clear their content
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""; // Clear the box content
    }
};

// Add event listeners to the reset and new game buttons
newbtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);
