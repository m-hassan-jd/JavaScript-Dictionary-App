let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
let result = document.getElementById("result");
let sound = document.getElementById("sound");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let word = document.getElementById('inpWord').value;
    fetch(`${url}${word}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        document.getElementById('word').textContent = word;
        document.getElementById('pof').textContent = data[0].meanings[0].partOfSpeech;
        document.getElementById('pron').textContent = data[0].phonetic;
        document.getElementById('mean').textContent = data[0].meanings[0].definitions[0].definition;
        document.getElementById('example').textContent = data[0].meanings[0].definitions[0].example;
        sound.setAttribute("src", `${data[0].phonetics[0].audio}`);

        result.classList.remove("hide");
    })
    .catch(() => {
        console.log('not found');
    });
});
let sbtn = document.getElementById('sbtn');
sbtn.addEventListener('click', ()=>{
    sound.play();
})

