// .bg {
//   animation: kenburns 20s infinite;
// }
// @keyframes kenburns {
//   0% {
//     opacity: 0;
//   }
//   5% {
//     opacity: 1;
//   }
//   95% {
//     transform: scale3d(1.5, 1.5, 1.5) translate3d(-190px, -120px, 0px);
//     animation-timing-function: ease-in;
//     opacity: 1;
//   }
//   100% {
//     transform: scale3d(2, 2, 2) translate3d(-170px, -100px, 0px);
//     opacity: 0;
//   }
// }

// const BASEURL = 'https://www.pokemon.com/'
//
// requestAPI = () => {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//      data = JSON.parse(this.responseText)
//      for (item in data)
//       let pokemon = new Pokemon {
//        name:data['name']
//        hp:data['hp']
//        attk:data['attk']
//        def:data['def']
//        abilities:data['abilities']
//      }
//     }
//   };
//   xhttp.open("GET", "https://www.pokemon.com/us/pokedex/", true);
//   xhttp.send();
// }
//
// requestAPI()
//
// class pokemon = {
//   constructor (name, hp, attk, def, abilities)
//   this.name = name
//   this.hp = hp
//   this.attk = attk
//   this. def = def
//   this.abilites = abilities
// }



function pokeDex() {
  var a = prompt('Enter your pokemon');
  var xhttp = new XMLHttpRequest();
  console.log(`${a}`)
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     let data = JSON.parse(this.responseText)
       pokemon = {
       name: data['name'],
       // health: data['hp'],
       // attack: data['attack'],
       // defense: data ['defense'],
       // abilities: data['abilities']
          }
        }
      }
    if (isNaN(a)) {
      xhttp.open("GET", `https://fizal.me/pokeapi/api/v2/name/${a.toLowerCase()}.json`, true);
    }else {
      xhttp.open("GET", `https://fizal.me/pokeapi/api/v2/id/${a}.json`, true);
    }
    xhttp.send();
    console.log(`https://fizal.me/pokeapi/api/v2/id/${a}.json`)
};


pokeDex()

class pokemon  {
   constructor(name, health, attack, defense, abilities){
  this.name = name
  this.health = hp
  this.attack = attack
  this.defense = defense
  this.abilites = abilities
  }
}
displayPokemon = () =>{
  let cont = document.createElement('div')
  let h1 = document.createElement('h1')
  let p1 = document.createElement('p')

  h1.innerText = pokemon['name']
  p1.innerText = pokemon['stats']
  cont.appendChild(h1)
  cont.appendChild(p1)
  document.body.appendChild(cont)
}
