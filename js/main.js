let contador  = 0;
let costoTotal = 0;

let element = document.getElementById("totalPrecio");
element.innerHTML="Total en precio";

let txtNombre = document.getElementById("Name");
////txtNombre.value="Leche Semidescremada";
//console.log(txtNombre.value);
let txtNumber   = document.getElementById("Number");

let precioTotal = document.getElementById("precioTotal");
//let campos = document.getElementsByClassName("campo");
//campos[0].value = "Leche descremada deslactosada light=Agua";
//console.log( campos[0].value);
//console.log(campos);


//for(let i=0; i<campos.length; i++){
  //  campos[i].style.border="red thin solid";
//}//for

//let spans   =   document.getElementsByTagName("span");
//for (let i=0; i<spans.length; i++) {
//    console.log(spans[i].textContent);
//}//for i
//revisar porque no salio resumen

let tabla = document.getElementById("tableListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");

//cuerpoTabla[0].innerHTML = `<tr>
 //                           <th scope="row">1</th>
 //                           <td>Leche Descremada</td>
  //                          <td>3</td>//                          <td>$ 23.00</td>
//                          </tr>`;
function validNombre (){
 if (txtNombre.value.length <3) {
   return false;
 }//if
 return true;
}//validar nombre


function validarCantidad(){
  if (! isNaN(txtNumber.value)){
    return false;
  }//if
  if (parseFloat(txtNumber.value))
}
if (! isNaN(txtNumber.value)<=0) {
  return false;
}
  if true;

}

let agregar = document.getElementById("btnAgregar");
//opcion reconmendada

agregar.addEventListener("click", (event)=> {
  event.preventDefault();
  contador++;
  document.getElementById("contadorProductos").innerHTML=contador;
    let precio = (Math.floor( (Math.random() * 50)*100))/100;
    let cantidad = parseFloat(txtNumber.value);
    costoTotal +=  (precio * cantidad);
    costoTotal.innerHTML= `$ ${costoTotal.toFixed(2)}`;
    let tmp = `<tr>
  <th scope="row">${contador}</th>
  <td> ${txtNombre.value}</td>
  <td> ${txtNumber.value}</td>                          
  <td>$${precio}</td>
  </tr>`
  console.log(tmp);
  cuerpoTabla[0].innerHTML += tmp;
  txtNumber.value="";
  txtNumber.value="";
  txtNombre.focus();
}
);

txtNombre.addEventListener("bluer", (event) =>{
  event.target.value = event.target.value.trim();

}
);
txtNumber.addEventListener("bluer", (event) =>{
  event.target.value = event.target.value.trim();
}
);

//agregar.onclick

