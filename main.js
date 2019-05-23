const app = getElementById('root')

const logo = document.createElement('img')
logo.src = 'http://pngimg.com/uploads/pokemon_logo/pokemon_logo_PNG6.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)



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
        }
      }
    if (isNaN(pokeSearch)) {
      xhttp.open("GET", `https://fizal.me/pokeapi/api/v2/name/${pokeSearch.toLowerCase()}.json`, true);
    }else {
      xhttp.open("GET", `https://fizal.me/pokeapi/api/v2/id/${pokeSearch}.json`, true);
    }
    xhttp.send();
    console.log(`https://fizal.me/pokeapi/api/v2/id/${pokeSearch}.json`)

    pokeDex()



i = 0
 for (i, i=<802, i++)
//// keep looking up for loops
// use the for loop to display data
// hardest part is geeting the correct data to show
// styling is easier










    // displayPokemon = () => {
      //   let cont = document.createElement('div')
      //   let h1 = document.createElement('h1')
      //   let p1 = document.createElement('p')
      //
      //   h1.innerText = pokemon ['name']
      //   p1.innerText = pokemon ['health']
      //   cont.appendChild(h1)
      //   cont.appendChild(p1)
      //   document.body.appendChild(cont)
      // }
      //
      // displayPokemon()


      //
      // class pokemon  {
        //      constructor(name, health, attack, defense, abilities){
          //       this.name = name
          //       this.health = hp
          //       this.attack = attack
          //       this.defense = defense
          //       this.abilites = abilities
          //       }
          //     }
          //
          //
          //   };
