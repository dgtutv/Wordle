//Pull valid wordle words
fetch('https://cors-anywhere.herokuapp.com/https://gist.github.com/dracos/dd0668f281e685bad51479e5acaadb93/raw/valid-wordle-words.txt')
  .then(response => response.text())
  .then(data => {
    const wordArray = data.split('\n').map(word => word.trim());
  })
  .catch(error => console.error('Error fetching words:', error));

//Getting user input from on screen keyboard
let keys = document.querySelectorAll(".keyboardBox");
keys.forEach((key) => {
    key.addEventListener('click', function(event){
        let id = event.target.id;
        if(id == "DELETE"){
            if(currentCol > 0){
                currentBox--;
                currentCol--;
                boxes[currentBox].innerHTML = "";
                boxes[currentBox].classList.toggle("candidate");
            }
        }
        else if(id == "ENTER"){
            if(currentCol == 5){
                currentCol = 0;
                let word = boxes[currentBox-5].innerHTML + boxes[currentBox-4].innerHTML + boxes[currentBox-3].innerHTML + boxes[currentBox-2].innerHTML + boxes[currentBox-1].innerHTML;
                //Current box has already been incremented 
                //testWord(word);
                console.log(word);
            }
        }
        else if(currentCol < 5 && id.length == 1){
            boxes[currentBox].innerHTML = id;
            boxes[currentBox].classList.toggle("candidate");
            currentBox++; 
            currentCol++;  
        }
    })
});

//Getting user input from physical keyboard
document.addEventListener("keydown", (event) => {
    const key = event.key.toUpperCase();
    if (key.length !== 1) {
        if(key == "BACKSPACE"){
            if(currentCol > 0){
                currentBox--;
                currentCol--;
                boxes[currentBox].innerHTML = "";
                boxes[currentBox].classList.toggle("candidate");
            }
        }
        else if(key == "ENTER"){
            if(currentCol == 5){
                currentCol = 0;
                let word = boxes[currentBox-5].innerHTML + boxes[currentBox-4].innerHTML + boxes[currentBox-3].innerHTML + boxes[currentBox-2].innerHTML + boxes[currentBox-1].innerHTML;
                //Current box has already been incremented 
                //testWord(word);
                console.log(word);
            }
        }
        return;
    }
    if(key >= 'A' && key <= 'Z'){
        if(currentCol < 5){
            boxes[currentBox].innerHTML = key;
            boxes[currentBox].classList.toggle("candidate");
            currentBox++;
            currentCol++;
        }
    }
});

let currentBox = 0;
let currentCol = 0;
let boxes = document.querySelectorAll(".letterBox");