fetch('https://cors-anywhere.herokuapp.com/https://gist.github.com/dracos/dd0668f281e685bad51479e5acaadb93/raw/valid-wordle-words.txt')
  .then(response => response.text())
  .then(data => {
    const wordArray = data.split('\n').map(word => word.trim());
    console.log(wordArray);
  })
  .catch(error => console.error('Error fetching words:', error));
