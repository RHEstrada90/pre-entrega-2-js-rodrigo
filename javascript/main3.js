// objetos

class articulo {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

let matte = new articulo("matte", 21);
let pastel = new articulo("pastel", 20);
let dona = new articulo("dona", 14);
let waffle = new articulo("waffle", 15);
let chocolate = new articulo("chocolate", 10);
let malteada = new articulo("malteada", 18);

let lista = [matte, pastel, dona, waffle, chocolate, malteada];

// Definir funciones

function obtenerValorArticulo(nombre_articulo) {gi
  switch (nombre_articulo.toLowerCase()) {
    case "matte":
      return 21;
    case "pastel":
      return 20;
    case "dona":
      return 14;
    case "waffle":
      return 15;
    case "chocolate":
      return 10;
    case "malteada":
      return 18;

    default:
      console.log("No se reconoce el artículo ingresado");
      return 0;
  }
}

function agregarAlCarrito(valor) {
  console.log("Se agregaron al carrito $" + valor);
  suma_precio += valor;
}

function comprar() {
  do {
    let nombre_articulo = prompt("Ingrese el artículo " + i);
    const valor_articulo = obtenerValorArticulo(nombre_articulo);

    if (valor_articulo > 0) {
      agregarAlCarrito(valor_articulo);
      i++;
    } else {
      alert("El artículo ingresado no es válido, inténtelo nuevamente.");
    }
  } while (i <= 5);

  let costo_final = suma_precio;
  alert("El costo total del pedido es de $" + costo_final);
  console.log("El costo total del pedido es de $" + costo_final);
}

// Dar la bienvenida al usuario
console.table(lista);

alert(
  "Bienvenido a la tiendita JavaScript. Contamos con los siguientes productos:"
);

let suma_precio = 0;
let i = 1;

//bucle en el que se pide ingresar articulos

if (confirm("¿Desea comprar algún producto?")) {
  comprar();
} 

while (confirm("¿Desea comprar otro producto?")) {
  comprar();
}

