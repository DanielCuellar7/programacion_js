const API = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'

const llamadoApi = async () => {
  try{
    const respuesta = await fetch(API)
    const {results} = await respuesta.json()
    //creación de container padre
    const container = document.getElementById('container')
    //map para agarrar la info de cada pokemón
    const pokemones = results.map(async (pokemon) => {
      //Creacion de elemento div que contendrá cada pokemón
      const card = document.createElement('div')
      card.className = 'card'
      //Entrando a name y url
      const {name, url} = pokemon
      const allInfo = await fetch(url)
      const infoPoke = await allInfo.json()
      //ID de cada pokemón
      const idPokemones = infoPoke.id
      console.log(idPokemones)

     //variable que contiene todas las img
      const imgPokemones = infoPoke.sprites.front_shiny    
      
      //mapeo de la info de pokemon para sacar el tipo
      const tipo = infoPoke.types.map((pokeType) => {
        const {type} = pokeType
        const typePoke = document.createElement('p')
        typePoke.textContent = type.name
        card.appendChild(typePoke)
      })

      //Creacion de elemento
      const imgPoke = document.createElement('img')
      imgPoke.className = 'imgPoke'
      const namePoke = document.createElement('h3')
      const idPoke = document.createElement('span')
      
      
      // Agregando informacion a elementos
      imgPoke.src = imgPokemones
      namePoke.textContent = name
      idPoke.textContent = idPokemones
      
      
      // Agregando hijos a containers (agrego al dom)
      container.appendChild(card)
      card.appendChild(imgPoke)
      card.appendChild(namePoke)
      card.appendChild(idPoke)
      
      
    }) 

  } catch (error) {
      console.log('ERROR')
  }   
}

  llamadoApi()

