/* 
//Pre entrega 2 

function inicio() {
  //Pido el nombre al user
  let user = prompt("¡Hola! Ingrese su nombre por favor: ");
  //Estoy diciendo que si no ingresa nada vuelva a pedir el nombre
  if (user === "") {
    inicio()
  };
  //Ejecuto el saludo y lo dejo en la consola
  let saludo = console.log(" Bienvenido " + user + " espero que tenga una linda experiencia en Kalu.");

}

inicio();


//Creando mis cervezas
class Cervezas {
  constructor(nombre, descripcion, precio) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
  }
}

//Hago las constantes

const cerveza1 = new Cervezas("Dorada Patagonica", "Es una cerveza rubia, Muy suave", 500);
const cerveza2 = new Cervezas("IPA", "Es una cerveza media anaranjada, Esta en el medio entre suave y fuerte de las mejores a mi criterio ", 600);
const cerveza3 = new Cervezas("Imperial Stout", "Es una cerveza negra, Es mas fuerte con gusto a cafe", 600);
const cerveza4 = new Cervezas("Scotish Red", "Es una cerveza roja, Es fuerte pero de las mas pedidas por el publico", 500);


//Creo el array + las pusheo
const arraysCervezas = [];

arraysCervezas.push(cerveza1);
arraysCervezas.push(cerveza2);
arraysCervezas.push(cerveza3);
arraysCervezas.push(cerveza4);

console.log(arraysCervezas);

let opcion = Number("");
//Hago el menu
console.log("Bienvenido a la Cerveceria Kalu");

function menu() {

 opcion = parseInt(prompt("Ingrese la opcion: \n 1)Ver menu otra vez. \n 2)Consultar precios.  \n 3)Elegir cerveza.    \n 4)Salir."))
 

//Ejecuto las opciones del menu 

//Opcion 1

function verMenu() {
  i--;
  menu();
}

for (i = 0; i <= 1; i++){
  if (opcion == 1) {
     verMenu();
  }
}

//Opcion 2

function verSoloPrecio(){
  console.log("El precio de la Dorada Patagonica es " + cerveza1.precio);
  console.log("El precio de la IPA es " + cerveza2.precio);
  console.log("El precio de la Imperial Stout es " + cerveza3.precio);
  console.log("El precio de la Scotish Red es " + cerveza4.precio);
  do {
    if (opcion == 2){
    verMenu();
    } else {
      opcion =!
      console.log("Opcion invalida")
    }
       } while (opcion == 2);
}


console.log(document)


if (opcion == 2) {
    verSoloPrecio();
}


//Opcion 3
function elegirCerveza() {
  eligiendoCerveza = prompt("¿Que cerveza vas a elegir? \n 1)Dorada Patagonica \n 2)IPA \n 3) Imperial Stour \n 4)Scotish Red");

  let pregunta = prompt("¿Desea elegir otra cerveza mas? \n Responda con Si/No")
    do {
    if (pregunta == "No") {
      menu();
    } else  {
      (pregunta == "Si");
      return elegirCerveza();
    }  
    } while (eligiendoCerveza == 0 || eligiendoCerveza == "No");
      return verMenu();
}

if (opcion == 3) {
    elegirCerveza();
}

//Opcion 4
if (opcion == 4 ){
do {
  console.log ("Gracias por visitar nuestra pagina, esperamos que le haya gustado")
} while (opcion =! 4);} 
}

menu();

 */

const productos = [
  /* cervezas */
  {
    id: "cervezaWarsteiner",
    titulo: "Warsteiner",
    imagen: "./img/warsteiner.jpg",
    categoria: {
      nombre: "Cervezas",
      id: "cervezas"
    },
    precio: 700
  },
  {
    id: "cervezaSchneider",
    titulo: "Schneider",
    imagen: "./img/schneider.jpg",
      categoria: {
        nombre: "Cervezas",
        id: "cervezas"
      },
    precio: 800
  },
  {
    id: "cervezaAmstel",
    titulo: "Amstel",
    imagen: "./img/amstel.jpg",
    categoria: {
      nombre: "Cervezas",
      id: "cervezas"
    },
    precio: 750
  },
  {
    id: "cervezaHeineken",
    titulo: "Heineken",
    imagen: "./img/heineken.jpg",
    categoria: {
      nombre: "Cervezas",
      id: "cervezas"
    },
    precio: 900
  },
  {
    id: "cervezaImperial",
    titulo: "Imperial",
    imagen: "./img/imperial.jpg",
    categoria: {
      nombre: "Cervezas",
      id: "cervezas"
    },
    precio: 700
  },
  {
    id: "cervezaMiller",
    titulo: "Miller",
    imagen: "./img/miller.jpg",
    categoria: {
      nombre: "Cervezas",
      id: "cervezas"
    },
    precio: 800  
  },
  {
    id: "cervezaQuilmes",
    titulo: "Quilmes",
    imagen: "./img/quilmes.jpg",
    categoria: {
      nombre: "Cervezas",
      id: "cervezas"
    },
    precio: 900
  },
  {
    id: "cervezaGrolsh",
    titulo: "Grolsh",
    imagen: "./img/groshl.jpg",
    categoria: {
      nombre: "Cervezas",
      id: "cervezas"
    },
    precio: 850
  }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

  contenedorProductos.innerHTML = "";

  productosElegidos.forEach(producto => {

    const div = document.createElement("div"); 
    div.classList.add("producto");
    div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}"jpg" alt="${producto.titulo}">
        <div class="producto-detalles">
          <h3 class="producto-titulo">${producto.titulo}</h3>
          <p class="producto-precio">${producto.precio}</p>
          <button class="producto-agregar id="${producto.id}">Agregar</button>
        </div>
      </div>
  `;
  contenedorProductos.append(div);
  })
  actualizarBotonesAgregar();
}

cargarProductos(productos);


botonesCategorias.forEach(boton => {

  boton.addEventListener("click", (e) => {

    botonesCategorias.forEach(boton => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");


    if (e.currentTarget.id != "todos"){

      const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
      tituloPrincipal.innerText = productoCategoria.categoria.nombre;

      const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
      cargarProductos(productosBoton);
    } else {
      tituloPrincipal.innerText = "Todos los productos";
      cargarProductos(productos);
    }

  })

})


function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar");

  botonesAgregar.forEach(boton => {
    boton.addEventListener("click", agregarAlCarrito);
  })
};

let productosEnCarrito;
let nuevoNumerito;
const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"))
if (productosEnCarritoLS){
   productosEnCarrito = productosEnCarritoLS
   actualizarNumerito();
} else {
  productosEnCarrito = [];  
}


function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(producto => producto.id === idBoton);

  if(productosEnCarrito.some(producto => producto.id === idBoton)) {
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito[index].cantidad++;
} else {
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
}

  actualizarNumerito();
  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
}

function actualizarNumerito(){
  let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
  numerito.innerText = nuevoNumerito;
}
 

/* ****************************************************************************************** */

/* 
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
} */