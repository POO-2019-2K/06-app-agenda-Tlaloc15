import Contacto from "./contactos.js";
export default class Agenda{
    constructor(Agenda){
        this._tablaAgenda = Agenda;
        this._contactos = [];

        this._tablaIncio();
    }

    _tablaIncio() {}

    _AgregarTa(contacto) {
        let fila = this._tablaAgenda.insertRow(-1);

        let celNombre = fila.insertRow(0);
        let celCorreo = fila.insertRow(1);
        let celCumple = fila.insertRow(2);

        celNombre.innerHTML = contacto.nombre;
        celCorreo.innerHTML = contacto.correo;
        celCumple.innerHTML = contacto.obCumpleS();
    }

    _buscar(correo) {
        let lugar = -1;
    
        this._employees.forEach((c, index) => {
          if(c.correo === correo) {
            lugar = index;
            return;
          }
    
        });
    
        return lugar;
      }
    
    
    
      AgregarCo(contacto) {
        let buscar = this._buscar(contacto.correo);
    
        if(buscar >= 0) {
          Swal.fire({
            type: "error",
            title: "Error",
            text: "El correo ya está en uso"
          });
          return;
        }
    
    
        this._AgregarTa(contacto);
        localStorage.setItem("contacto", JSON.stringify(this._contactos));
      }
}