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
            if(currentBox > 0){
                currentBox--;
                boxes[currentBox].innerHTML = "";
            }
        }
        else if(currentBox < 5 && id.length == 1){
            boxes[currentBox].innerHTML = id;
            currentBox++;   
        }
    })
});

//Getting user input from physical keyboard
document.addEventListener("keydown", (event) => {
    const key = event.key.toUpperCase();
    if (key.length !== 1) {
        return;
    }
    if(key >= 'A' && key <= 'Z'){
        if(currentBox < 5){
            boxes[currentBox].innerHTML = key;
            currentBox++;
        }
    }
});

let currentBox = 0;
let boxes = document.querySelectorAll(".letterBox");