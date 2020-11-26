
function makeRequest(){
    $('div').empty();

let pokemonArr =[];


function randomElement(array){
    const random = Math.floor(Math.random()*array.length);
    let rest = array[random]
    url = rest.url;
    pokemonArr.push(url);
    return array[random];
};


axios
.get("https://pokeapi.co/api/v2/ability/?limit=1000")
.then(resp=> {
    //console.log(resp.data.results);
    firstPokemon = randomElement(resp.data.results);
    secondPokemon = randomElement(resp.data.results);
    thirdPokemon = randomElement(resp.data.results);
    //console.log(firstPokemon,secondPokemon,thirdPokemon);
    return Promise.all(pokemonArr.map(url => axios.get(url))); // make promise of each pokemon arr url
  
})

.then(
    resp => {
    console.log(resp);
    for(pokemon of resp){
      
        console.log(pokemon.data.name);
        let name = pokemon.data.name;
        const pokemonDes = pokemon.data.flavor_text_entries;
        
        let description = pokemonDes.find(
            each => each.language.name === "en"
        );
        
        des = description? description.flavor_text : 'No description avaivale!';
        console.log(des);
        const singleCard = makeCard(name,des);
        $('body').append(singleCard);

    }
    
    }
)




function makeCard(name,description){
    return `
    <div class="card">
      <h1>${name}</h1>

      <p>${description}</p>
    </div>
  `;

}
}

// I dont find where pokemon image url in pokemon api???

