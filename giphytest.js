const img = document.querySelector('img');
const button = document.getElementById('changeGif');
const input = document.getElementById('gifKeyword'); // Get the input field

function fetchGif() {
    const keyword = input.value || 'cats'; 
    const url = `https://api.giphy.com/v1/gifs/translate?api_key=n8xxx26x3B4VBj5spfM09CiqVhD3lYDg&s=${encodeURIComponent(keyword)}`;

    fetch(url, { mode: 'cors' })
        .then(response => response.json())
        .then(response => {
            img.src = response.data.images.original.url;
        });
}

button.addEventListener('click', fetchGif);


fetchGif();
