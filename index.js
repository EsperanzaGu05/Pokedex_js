import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'

const gf = new GiphyFetch('DcIvpMjfEtSKsI9nY6doXhJWltBDuFoh')
const fetchGifs = (offset) => gf.trending({ offset, limit: 10 })

// const url = 'https://pokeapi.co/api/v2/pokemon';
// const containerAll = document.getElementById('allPokemons')

fetch(fetchGifs)
    .then(response => {
        if (!response) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });