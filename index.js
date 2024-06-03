const url = 'https://pokeapi.co/api/v2/pokemon';
const containerAll = document.getElementById('allPokemons')

fetch(url)
    .then(response => {
        if (!response) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const { results } = data;
        // let names = []
        results.forEach(element => {
            const listNames = document.createElement('li');
            listNames.textContent = element.name;
            containerAll.appendChild(listNames);
            console.log(element.name);
        })



    })
    .catch(error => {
        console.error('Error:', error);
    });