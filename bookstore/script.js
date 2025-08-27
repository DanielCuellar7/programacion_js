// class book{
//     constructor(title, author, price, stock, info){
//         this.title = title;
//         this.author= author;       
//         this.price = price;
//         this.stock = stock;
//         this.info = info
//     }
// }

async function fetchData() {
    try{
        const json = './books.json'
        fetch(json)
        .then((libros) => libros.json())
        .then((libros) => {
            libros.map(infoBook =>{
                //creacion contenedor padre de los libros en la seccion news
                let createBook = document.getElementById('news');
                let book = document.createElement('div');
                book.innerHTML =  `
                    <div class=" w-56 bg-white shadow-md rounded-lg overflow-hidden">
                        <div class="w-56 h-[21.875rem] overflow-hidden">
                            <img class="flex items-center w-full h-full object-cover" src = ${infoBook.image}>
                        </div>
                        <div class="flex flex-col items-center justify-center m-3 w-50 h-40">
                            <h3 class="m-3">${infoBook.title}</h3>
                            <h4 class="m-3 opacity-50">${infoBook.author}</h4>
                            <h4 class="m-3">${infoBook.price}</h4>
                        </div>
                    </div>
                `
                createBook.appendChild(book);
                console.log(createBook);
               
            })
        })
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();



  


