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
     //variable que contiene todas las img
      const imgPokemones = infoPoke.sprites.front_default  
      //Creacion de elemento
      const imgPoke = document.createElement('img')
      imgPoke.className = 'imgPoke'
       const idPoke = document.createElement('span')
      idPoke.className = 'idPoke'
      const namePoke = document.createElement('h3')
      namePoke.className = 'namePoke'
      // Agregando informacion a elementos
      imgPoke.src = imgPokemones
      idPoke.textContent = idPokemones
      namePoke.textContent = name
       // Agregando hijos a containers (agrego al dom)
       container.appendChild(card)
       card.appendChild(imgPoke)
       card.appendChild(idPoke) 
       card.appendChild(namePoke)
      //creo contenedor div que contendrá span de type
       const typecontent =document.createElement('div')
       typecontent.className = 'typeContent'
      //mapeo de la info de pokemon para sacar el tipo
      const tipo = infoPoke.types.map((pokeType) => {
        const {type} = pokeType
        const typePoke = document.createElement('span')
        typePoke.textContent = type.name
        card.appendChild(typecontent)
        typecontent.appendChild(typePoke)
        //Estilos
        typePoke.style.width = '40%'
        typePoke.style.borderRadius = '0.5rem'
        //If para que dependiendo de el tipo el color sea correspondiente
        if (type.name === 'fire'){
          typePoke.style.backgroundColor = '#fc7d23'
          typePoke.style.color = '#ffffff'
        }
        if (type.name === 'grass'){
          typePoke.style.backgroundColor = '#9bcc50'
        }
        if (type.name === 'poison'){
          typePoke.style.backgroundColor = '#b97fc9'
          typePoke.style.color = '#ffffff'
        }
        if (type.name === 'flying'){
          typePoke.style.background = 'linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)'

        }
        if (type.name === 'water'){
          typePoke.style.backgroundColor = '#4592c4'
        }
        if (type.name === 'bug'){
          typePoke.style.backgroundColor = '#ffd700'
        }
        if (type.name === 'normal'){
          typePoke.style.backgroundColor = '#a4acaf'
        }
      })
    }) 

  } catch (error) {
      console.log('ERROR')
  }   
}

  llamadoApi()

