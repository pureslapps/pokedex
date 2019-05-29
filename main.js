pokeDex = () => {
  var pokeSearch = prompt('Enter a pokemon name or id');
  var xhttp = new XMLHttpRequest();
  console.log(`${pokeSearch}`)
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     let data = JSON.parse(this.responseText)
     pokemon = {
        name: data['name'],
        health: data['stats']['5']['base_stat'],
        attack: data['stats']['4']['base_stat'],
        defense: data ['stats']['3']['base_stat'],
        ability: data['abilities']['0']['ability']['name'],
          }
          displayPokemon()
        }
      }
    if (isNaN(pokeSearch)) {
      xhttp.open("GET", `https://fizal.me/pokeapi/api/v2/name/${pokeSearch.toLowerCase()}.json`, true);
    }else {
      xhttp.open("GET", `https://fizal.me/pokeapi/api/v2/id/${pokeSearch}.json`, true);
    }
    xhttp.send();
    console.log(`https://fizal.me/pokeapi/api/v2/id/${pokeSearch}.json`)
}
    pokeDex()

    displayPokemon = () => {
        let cont = document.getElementById('container')
        let name = document.getElementById('pokeName')
        let health = document.getElementById('pokeHealth')
        let attack = document.getElementById('pokeATTK')
        let defense = document.getElementById('pokeDEF')
        let ability = document.getElementById('pokeABL')

        name.innerText = ('name: ' + pokemon['name'])
        health.innerText = ('HP:' + pokemon['health'])
        attack.innerText = ('ATTK:' + pokemon['attack'])
        defense.innerText = ('DEF: ' + pokemon['defense'])
        ability.innerText = ('ABL: ' + pokemon['ability'])
        cont.appendChild(name)
        cont.appendChild(health)
        cont.appendChild(attack)
        cont.appendChild(defense)
        cont.appendChild(ability)
    }
