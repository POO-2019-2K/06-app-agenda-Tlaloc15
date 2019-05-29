import Contacto from "./contactos.js";
export default class Agenda{
    constructor(Agenda, Contar){
        this._tablaAgenda = Agenda;
        this._tablaContar = Contar;
        this._contactos = [];
        this._numRegis = 0;
        //localStorage.removeItem("contacto");
        this._tablaIncio();
    }

    _tablaIncio() {
      let lsContacto = JSON.parse(localStorage.getItem("contacto"));
        if (lsContacto === null) {
            return;
        }
        lsContacto.forEach((c) => {

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
      fila.cells[5].innerHTML = "";
      fila.cells[5].appendChild(btnQuitar);
    }

    _agregarTa(contacto) {
        let fila = this._tablaAgenda.insertRow(-1);

        let celNombre = fila.insertCell(0);
        let celCorreo = fila.insertCell(1);
        let celCumple = fila.insertCell(2);
        let celCelular = fila.insertCell(3);
        let celEdad = fila.insertCell(4);

        fila.insertCell(5);

        celNombre.innerHTML = contacto.nombre;
        celCorreo.innerHTML = contacto.correo;
        celCumple.innerHTML = contacto.obCumpleS();
        celCelular.innerHTML = contacto.celular;
        celEdad.innerHTML = contacto.obEdad();
        this._quitarFila(fila, contacto)
        this._numRegis++;
        this._tablaContar.rows[0].cells[1].innerHTML = this._numRegis;

       let objContacto = {
          nombre: contacto.nombre,
          correo: contacto.correo,
          cumple: contacto.cumple,
          celular: contacto.celular,
          edad: contacto.obEdad()
        };

        this._contactos.push(objContacto);
    }

    _admin(Tipo) {
      var orden = this._contactos.slice(-this._numRegis);
      if (Tipo === 1) {
        orden.sort(function(a, b) {
          return a.nombre.localeCompare(b.nombre);
        });
      }else if (Tipo === 2) {
        orden.sort(function(a, b) {
          return a.edad - b.edad;
        });
      }
      this._limpiarTo();
      localStorage.setItem("contacto", JSON.stringify(orden));
      this._tablaIncio();
    }
    _limpiarTo() {
      var i;
      console.log(this._numRegis)
      for(i = this._numRegis; i >= 1; i--) {
        this._tablaAgenda.deleteRow(i);
      }
      this._numRegis = 0;
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