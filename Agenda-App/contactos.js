export default class Contacto{
    constructor(contactos){
        this._nombre = contactos.nombre;
        this._correo = contactos.correo;
        this._cumple = contactos.cumple;

        this._cumple = new Date(contactos.cumple);
      this._meses = [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic"
      ];
    }
    get nombre() {
        return this._nombre;
    }
    get correo() {
        return this._correo;
    }
    get cumple() {
        return this._cumple;
    }

    _obNum2D(number) {
        if(number < 0) {
        return "0"+number;
      }
    
      return number;
    }

obCumpleD() {
      let { cumple } = this;
  
      let dia = cumple.getFullYear() +
       "-" + 
       this._obNum2D(cumple.getMonth()) +
        "-" +
        this._obNum2D(cumple.getDay());
  
      console.log(dia);
      return dia;
    }

obCumpleS() {
        let dia =
          this._cumple.getDate() +
          "/" +
          this._meses[this._cumple.getMonth()] +
          "/" +
          this._cumple.getFullYear();
    
        return dia;
      }

      obEdad() {
        let unDia = 24 * 60 * 60 * 1000;
        let unAnio = unDia * 365;
        let difEdad = new Date() - this._cumple;
        let age = Math.trunc(difEdad / unAnio);
    
        return age;
      }

}