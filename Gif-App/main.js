const url = 'https://api.giphy.com/v1/gifs/trending?api_key=DcIvpMjfEtSKsI9nY6doXhJWltBDuFoh&limit=25&offset=0&rating=g&bundle=messaging_non_clips'
const gifSection = document.querySelector('#gifSection')
fetch(url)
  .then(response => {
    if (!response) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(({ data }) => {
    const gifs = data

    console.log(gifs);

    gifs.forEach(element => {
      console.log(element);
      const url = element.images.original.url
      console.log(url);
      const image = document.createElement('img')
      image.src = url
      gifSection.appendChild(image);

    });


    // gifSection.innerHTML = `<img src=${gif.original.url}/>`
  })
  .catch(error => {
    console.error('Error:', error);
  });


// setupCounter(document.querySelector('#counter'))
/* <button id="counter" type="button"></button>
</div>
<p class="read-the-docs">
  Click on the Vite logo to learn more
</p> */