import Contacto from "./contactos.js";
export default class Agenda{
    constructor(Agenda){
        this._tablaAgenda = Agenda;
        this._contactos = [];

        this._tablaIncio();
    }

    _tablaIncio() {
      let lsContacto = JSON.parse(localStorage.getItem("contacto"));
        if (lsContacto === null) {
            return;
        }
        lsContacto.forEach((c, index) => {

            ///if (e.taller === this._nameTaller || e.taller === undefined) {
                c.cumple = new Date(c.cumple);

               this._agregarTa(new Contacto(c));
        });
    }


    _quitarFila(fila, contacto){
      let btnQuitar = document.createElement('input');
      btnQuitar.type = "button";
      btnQuitar.value = "Eliminar";
      btnQuitar.className = "btn btn-danger"
      btnQuitar.addEventListener('click', () => {
      this._contactos.splice(contacto, 1);
            fila.innerHTML = "";
            localStorage.setItem("contacto", JSON.stringify(this._contactos));

            return;
      });
      fila.cells[4].innerHTML = "";
      fila.cells[4].appendChild(btnQuitar);
    }

    _agregarTa(contacto) {
        let fila = this._tablaAgenda.insertRow(-1);

        let celNombre = fila.insertCell(0);
        let celCorreo = fila.insertCell(1);
        let celCumple = fila.insertCell(2);
        let celEdad = fila.insertCell(3);

        fila.insertCell(4);

        celNombre.innerHTML = contacto.nombre;
        celCorreo.innerHTML = contacto.correo;
        celCumple.innerHTML = contacto.obCumpleS();
        celEdad.innerHTML = contacto.obEdad();


        this._quitarFila(fila, contacto)

       let objContacto = {
          nombre: contacto.nombre,
          correo: contacto.correo,
          cumple: contacto.cumple
        };

        this._contactos.push(objContacto);
    }

    _buscar(correo) {
        let lugar = -1;
    
        this._contactos.forEach((c, index) => {
          if(c.correo === correo) {
            lugar = index;
            return;
          }
    
        });
    
        return lugar;
      }
    
    
    
      agregarCo(contacto) {
        let buscar = this._buscar(contacto.correo);
    
        if(buscar >= 0) {
          Swal.fire({
            type: "error",
            title: "Error",
            text: "El correo ya está en uso"
          });
          return;
        }
    
    
        this._agregarTa(contacto);
        localStorage.setItem("contacto", JSON.stringify(this._contactos));
      }
}