const API = 'https://rickandmortyapi.com/api/character'

fetch(API)
.then((info) => info.json())
.then((info) => {info.results
    
    info.results.map(character => {
        let containerCharacter = document.getElementById('character')
        let nombre = document.createElement('p')
        containerCharacter.appendChild(nombre)
        console.log(character.name)
        nombre.textContent = character.name
        console.log(containerCharacter)

        let estatus = document.createElement('p')
        containerCharacter.appendChild(estatus)
        console.log(character.status)
        estatus.textContent = character.status
        console.log(containerCharacter)

        let especie = document.createElement('p')
        containerCharacter.appendChild(especie)
        console.log(character.species)
        especie.textContent = character.species
        console.log(containerCharacter)

        let locacion = document.createElement('p')
        containerCharacter.appendChild(locacion)
        console.log(character.location.name)
        locacion.textContent = character.location.name
        console.log(containerCharacter)

        let imagen = document.createElement('img')
        imagen.setAttribute("src", character.image)
        containerCharacter.appendChild(imagen)
        console.log(character.image)
        imagen.textContent = character.image
        console.log(containerCharacter)

        let firstSeen = document.createElement('a')
        firstSeen.setAttribute("href", character.episode[0])
        containerCharacter.appendChild(firstSeen)
        console.log(character.episode[0])
        firstSeen.textContent = character.location.name
        console.log(containerCharacter)


    } )
    
 
})
