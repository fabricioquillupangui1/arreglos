// 1. Definir los dos arreglos con los valores iniciales del modelo
let arregloIzquierdo = [12, 15];
let arregloDerecho = [20, 25];

// Ejecutar la función inicializadora al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    pintarArregloIzquierda();
    pintarArregloDerecha();
    
    // Vincular el evento click al botón de agregar dinámicamente o asegurarlo
    const btnAgregar = document.querySelector(".formulario button");
    if (btnAgregar) {
        btnAgregar.addEventListener("click", agregarEdad);
    }
});

// 2. Función agregarEdad
function agregarEdad() {
    const inputEdad = document.getElementById("edad");
    const valor = parseInt(inputEdad.value);

    // Validar que se ingrese un número válido
    if (isNaN(valor)) {
        alert("Por favor, ingrese un número entero válido para la edad.");
        return;
    }

    // Agregar el valor al arreglo izquierdo
    arregloIzquierdo.push(valor);

    // Limpiar el input y actualizar la tabla izquierda en pantalla
    inputEdad.value = "";
    pintarArregloIzquierda();
}

// 3. Función pintarArregloIzquierda
function pintarArregloIzquierda() {
    const tbody = document.getElementById("tablaIzquierda");
    tbody.innerHTML = ""; // Limpiar contenido estático anterior

    for (let i = 0; i < arregloIzquierdo.length; i++) {
        let fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${arregloIzquierdo[i]}</td>
            <td>
                <button class="btn-eliminar" onclick="eliminarIzquierdo(${i})">Eliminar</button>
            </td>
            <td>
                <button class="btn-mover" onclick="moverHaciaDerecha(${i})">➜</button>
            </td>
        `;
        tbody.appendChild(fila);
    }
}

// 4. Función eliminarIzquierdo
function eliminarIzquierdo(indice) {
    arregloIzquierdo.splice(indice, 1); // Elimina 1 elemento en la posición dada
    pintarArregloIzquierda(); // Vuelve a pintar el arreglo izquierdo
}

// 5. Función pintarArregloDerecha
function pintarArregloDerecha() {
    const tbody = document.getElementById("tablaDerecha");
    tbody.innerHTML = ""; // Limpiar contenido estático anterior

    for (let i = 0; i < arregloDerecho.length; i++) {
        let fila = document.createElement("tr");

        fila.innerHTML = `
            <td>
                <button class="btn-mover" onclick="moverHaciaIzquierda(${i})">⬅</button>
            </td>
            <td>${arregloDerecho[i]}</td>
            <td>
                <button class="btn-eliminar" onclick="eliminarDerecho(${i})">Eliminar</button>
            </td>
        `;
        tbody.appendChild(fila);
    }
}

// 6. Función eliminarDerecho
function eliminarDerecho(indice) {
    arregloDerecho.splice(indice, 1); // Elimina 1 elemento del arreglo derecho
    pintarArregloDerecha(); // Vuelve a pintar el arreglo derecho
}

// 7. Función moverHaciaDerecha
function moverHaciaDerecha(indice) {
    let valorMovido = arregloIzquierdo[indice]; // Obtener el valor
    arregloDerecho.push(valorMovido);          // Agregar al arreglo derecho
    arregloIzquierdo.splice(indice, 1);        // Eliminar del arreglo izquierdo
    
    // Refrescar ambas tablas en la interfaz
    pintarArregloIzquierda();
    pintarArregloDerecha();
}

// 8. Función moverHaciaIzquierda
function moverHaciaIzquierda(indice) {
    let valorMovido = arregloDerecho[indice];  // Obtener el valor
    arregloIzquierdo.push(valorMovido);        // Agregar al arreglo izquierdo
    arregloDerecho.splice(indice, 1);          // Eliminar del arreglo derecho
    
    // Refrescar ambas tablas en la interfaz
    pintarArregloIzquierda();
    pintarArregloDerecha();
}