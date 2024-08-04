//Pull valid wordle words
fetch('https://cors-anywhere.herokuapp.com/https://gist.github.com/dracos/dd0668f281e685bad51479e5acaadb93/raw/valid-wordle-words.txt')
  .then(response => response.text())
  .then(data => {
    const wordArray = data.split('\n').map(word => word.trim());
    console.log(wordArray);
  })
  .catch(error => console.error('Error fetching words:', error));

let keys = document.querySelectorAll(".keyboardBox");
keys.forEach((key) => {
    key.addEventListener('click', function(event){
        if(currentBox < 5){
            let id = event.target.id;
            boxes[currentBox].innerHTML = id;
            currentBox++;   
        }
    })
});

let currentBox = 0;
let boxes = document.querySelectorAll(".letterBox");