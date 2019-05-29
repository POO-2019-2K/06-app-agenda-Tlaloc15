import Contacto from "./contactos.js";
import Agenda from "./Agenda.js";

class Main{
    constructor() {
        let Agenda2 = new Agenda( 
            document.querySelector('#agenda'),
            document.querySelector('#numRegis')
            );
        document.querySelector('#btnAgregar').addEventListener('click', () => {
            let form = document.querySelector('#form');

            if (form.checkValidity() === true) {
                let nombre = document.querySelector('#name').value;
                let correo = document.querySelector('#correo').value;
                let celular = document.querySelector('#celular').value;
                let sCumple = document.querySelector('#cumpleanios').value;
                sCumple = sCumple.split('-');

                let cumple = new Date(sCumple[0], sCumple[1], sCumple[2]);

                let objContacto = {
                    nombre: nombre,
                    correo: correo,
                    celular: celular,
                    cumple: cumple
                };

                let contacto = new Contacto(objContacto);

                Agenda2.agregarCo(contacto);
            }

            form.classList.add("was-validated");
           });

           var select = document.getElementById("Tipo");
           select.addEventListener("change", () => {
               var Tipo = select.value;
               if (Tipo === "Nombre") {
                   Tipo = 1;
               }else if (Tipo === "Edad") {
                   Tipo = 2;
               }else {
                   swal.fire({
                       type: "error" ,
                       title: "No seleccionó el orden en que se ordenará la lista"
                   })
               }
               console.log( Tipo)
               Agenda2._admin(Tipo);
           })
    }
}
new Main();