import Contacto from "./contactos.js";

class Main{
    constructor() {
        let Agenda2 = new Agenda( document.querySelector('#agenda') );
        document.querySelector('#btnAgregar').addEventListener('click', () => {
            let form = document.querySelector('#form');

            if(form.checkValidaty() === true) {
                let nombre = document.querySelector('#name').value;
                let correo = document.querySelector('#correo').value;
                let sCumple = document.querySelector('#cumpleaños').value;
                sCumple = sCumple.split('-');

                let cumple = new Date(sCumple[0], sCumple[1], sCumple[2]);

                let objContacto = {
                    nombre: nombre,
                    correo: correo,
                    cumple: cumple
                };

                let contacto = new Contacto(objContacto);

                contacto.

            }
            
           })

    }
}
new Main();