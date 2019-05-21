.bg {
  animation: kenburns 20s infinite;
}
@keyframes kenburns {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  95% {
    transform: scale3d(1.5, 1.5, 1.5) translate3d(-190px, -120px, 0px);
    animation-timing-function: ease-in;
    opacity: 1;
  }
  100% {
    transform: scale3d(2, 2, 2) translate3d(-170px, -100px, 0px);
    opacity: 0;
  }
}

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
