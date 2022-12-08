"use strict";
/*Productos*/
let Productos = [
  {
    id: 1,
    nombre: "Drassena Janet Craig",
    descripcion:
      "La Drassena Janet Craig es una planta de interior muy popular, utilizada con frecuencia en interiores. Es muy buscada ya que crece bien en bajos niveles de luz.",
    precio: 1060,
    imagen: "./img/drassena.jpg",
    categoria: "Interior",
    cantidad: 1,
  },
  {
    id: 2,
    nombre: "Aspelenium m15",
    descripcion:
      "El asplenium, también llamado helecho nido de ave, es una de las plantas más habituales en la decoración de interiores y no requiere de mucho cuidado.",
    precio: 2050,
    imagen: "./img/planta1.jpg",
    categoria: "Interior", 
    cantidad: 1,
  },
  {
    id: 3,
    nombre: "Planta Monstera",
    descripcion:
      "Tiene tallo grueso, alcanza 20 m de largo; hojas grandes, correosas, brillantes, cordadas, de 20 a 90 cm de largo × 20 a 80 cm de ancho. Es especial para interiores.",
    precio: 1520,
    imagen: "./img/monstera.jpg",
    categoria: "interior",
     cantidad: 1,
  },
  {
    id: 4,
    nombre: "Rhus typhina",
    descripcion:
      "Las hojas son compuestas, estando conformadas por entre 9 y 31 folíolos de hasta 55cm de largo. Normalmente el color de sus hojas es verde intenso, excepto en otoño.",
    precio: 4500,
    imagen: "./img/Rhustyphina.jpg",
    categoria: "exterior",
    cantidad: 1,
  },
  {
    id: 5,
    nombre: "Oxalis B18",
    descripcion:
      "Los oxalis triangularis son unas plantas muy bellas que, en condiciones óptimas, se abren cuando reciben luz y se cierran un poco cuando esta desaparece. ",
    precio: 2600,
    imagen: "./img/Oxalis-B18.jpg",
    categoria: "exterior",
     cantidad: 1,
  },
  {
    id: 6,
    nombre: "Cupressus Leylandii",
    descripcion:
      "El Cupressus Leylandii, es popularmente conocido como ciprés híbrido de Leyland, ciprés de Leyland, leylandi o leilandi. Es una conífera perennifolia híbrida.",
    precio: 5600,
    imagen: "./img/cupressus.jpg",
    categoria: "interior",
    cantidad: 1,
  },
  {
    id: 7,
    nombre: "Maceta Terracota",
    descripcion:
      "Macetas 100% terracota, fabricada con barro y esmaltes de primera calidad. Con su estilo clásico son ideales para todo tipo de plantas, con su amplia variedad de colores y tamaños.",
    precio: 700,
    imagen: "./img/macetaterracota.jpeg",
    categoria: "macetas",
    cantidad: 1,
  },
  {
    id: 8,
    nombre: "Maceta Balconera",
    descripcion:
      "Son perfectas para jardines de exterior dependiendo de la decoración y el espacio de que se dispone. También se pueden utilizar para interior.",
    precio: 870,
    imagen: "./img/macetafibro.jpg",
    categoria: "macetas",
    cantidad: 1,
  },
  {
    id: 9,
    nombre: "Maceta Maida",
    descripcion:
      "Nuestra propuesta en macetas rotomoldeadas en polietileno posee una gran variedad de colores disponibles para que puedas combinarlos en el interior y exterior.",
    precio: 920,
    imagen: "./img/macetapiramidal.jpg",
    categoria: "macetas",
    cantidad: 1,
  },
];

//Selecciono el main
const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('modal-carrito');
const botonVaciar = document.getElementById('vaciar-carrito');
const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');
const carritoHome = document.getElementById('precioTotal1')
const cantidadHome = document.getElementById('cantidadHome')
//Array
let carrito=[];
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

//btn vaciar carrito
botonVaciar.addEventListener('click', ()=>{
    carrito.length=0
    actualizarCarrito()
})
//Recorro los prodcutos
Productos.forEach((producto) => {
    const main = document.createElement('main');
    main.setAttribute('id','contenedor-productos')
    const div = document.createElement("div");
    div.classList.add('producto')
    const img = document.createElement('img');
    img.src = `./${producto.imagen}`
    img.classList.add('imagenProd')
    const h3 = document.createElement("h3");
    h3.innerHTML =`${producto.nombre}`
    const p = document.createElement('p');
    p.innerHTML =`${producto.descripcion}`
    p.classList.add('p')
    const p1 = document.createElement('p');
    p1.innerHTML=`${producto.categoria}`
    const button = document.createElement(`button`);
    button.innerHTML = `<button id="agregar${producto.id}" class="boton-agregar"> Agregar <i class="fas fa-shopping-cart"></i></button>
    `
    button.classList.add('boton-agregar')
  
    

  //agrego al contenedor de productos
 
     div.append(img)
     div.append(h3)
     div.append(p)
     div.append(p1)
      div.append(button) 
      main.append(div)
    contenedorProductos.appendChild(div)
    const boton = document.getElementById(`agregar${producto.id}`)
     button.addEventListener('click', () => {
    // //esta funcion ejecuta el agregar el carrito con la id del producto
     agregarAlCarrito(producto.id)
     })
});
//agregar
const agregarAlCarrito =(prodId) =>{
    const existe = carrito.some(prod => prod.id === prodId)
    if (existe){
        const prod = carrito.map (prod => {
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    }else{
        const item = Productos.find((prod) => prod.id === prodId)
    carrito.push(item)
    }
    
    actualizarCarrito()
    // console.log(carrito)
}

//actualizar carrito
const actualizarCarrito = () =>{
    contenedorCarrito.innerHTML = ""
    
    carrito.forEach((prod) => {
    //   const div = document.createElement("div");
    //   div.className = "productoEnCarrito";
    //   div.innerHTML = `
    //       <p> ${prod.nombre}</p>
    //       <p> Precio: $ ${prod.precio}</p>
    //       <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
    //       <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
    // `
      //intento
        const div1 = document.createElement('div')
        div1.setAttribute('class','modal-contenedor')
        const div = document.createElement("div");
        div.className = "productoEnCarrito";
        const p1= document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')
        p1.innerHTML=`${prod.nombre}`
        p2.innerHTML=`Precio: $ ${prod.precio}`
        p2.setAttribute('id','precioTotal')
        p3.innerHTML=`Cantidad:${prod.cantidad}`
        p3.setAttribute('id','cantidad')

        div.append(p1)
        div.append(p2)
        div.append(p3)
        div1.append(div)
  
      contenedorCarrito.appendChild(div1);
      localStorage.setItem("carrito", JSON.stringify(carrito));
    });
        //precios
            // precioTotal.innerText = Object.values(carrito).reduce((acc, {cantidad,precio})=> acc + cantidad*precio,0)
            carritoHome.innerText = Object.values(carrito).reduce((acc, {cantidad,precio})=> acc + cantidad*precio,0)
            //cantidades
            cantidadHome.innerText = Object.values(carrito).reduce((acc, {cantidad})=> acc + cantidad,0)
            //Si queremos que se cuente aunque estan repetidos 
            contadorCarrito.innerText =  Object.values(carrito).reduce((acc, {cantidad})=> acc + cantidad,0)


          const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
          const botonAbrir = document.getElementById('boton-carrito')
          const botonCerrar = document.getElementById('carritoCerrar')
          const modalCarrito = document.getElementsByClassName('modal-carrito')[0]

          botonAbrir.addEventListener('click', ()=>{
            contenedorModal.classList.toggle('modal-active')
             })
           botonCerrar.addEventListener('click', ()=>{
               contenedorModal.classList.toggle('modal-active')
            })
            
            contenedorModal.addEventListener('click', (event) =>{
               contenedorModal.classList.toggle('modal-active')
            
             })
            modalCarrito.addEventListener('click', (event) => {
                event.stopPropagation()
           })



    //   contenedorCarrito.appendChild(div);
    //   localStorage.setItem('carrito', JSON.stringify(carrito))
    // })
    //Contador que no repite cuando son iguales productos
    // contadorCarrito.innerText = carrito.length
   
    
}
//eliminar

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice,1)
    actualizarCarrito()
}



//modal
// const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
// const botonAbrir = document.getElementById('boton-carrito')
// const botonCerrar = document.getElementById('carritoCerrar')
// const modalCarrito = document.getElementsByClassName('modal-carrito')[0]


// botonAbrir.addEventListener('click', ()=>{
//     contenedorModal.classList.toggle('modal-active')
// })
// botonCerrar.addEventListener('click', ()=>{
//     contenedorModal.classList.toggle('modal-active')
// })

// contenedorModal.addEventListener('click', (event) =>{
//     contenedorModal.classList.toggle('modal-active')

// })
// modalCarrito.addEventListener('click', (event) => {
//     event.stopPropagation()
// })