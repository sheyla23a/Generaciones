function Persona(nombre, edad, sexo, peso, altura, anioNacimiento) {
  this.nombre = nombre;
  this.edad = edad;
  this.sexo = sexo;
  this.peso = peso;
  this.altura = altura;
  this.anioNacimiento = anioNacimiento;
}

Persona.prototype.mostrarGeneracion = function () {
  let mensaje = `La persona pertenece a la generación `;

  if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
    mensaje += "Silent Generation. Rasgo característico: Austeridad";
  } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
    mensaje += "Baby Boom. Rasgo característico: Ambición";
  } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
    mensaje += "Generación X. Rasgo característico: Obsesión por el éxito";
  } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
    mensaje += "Generación Y (Millennials). Rasgo característico: Frustración";
  } else if (this.anioNacimiento >= 1994) {
    mensaje +=
      "Generación Z. Rasgo característico: Nativos digitales y emprendedores.";
  } else {
    mensaje += "Generación no definida.";
  }

  alert(mensaje);
};

Persona.prototype.esMayorDeEdad = function () {
  return this.edad >= 18;
};

Persona.prototype.mostrarDatos = function () {
  const datos = `
      Nombre: ${this.nombre}
      Edad: ${this.edad}
      Sexo: ${this.sexo}
      Peso: ${this.peso} kg
      Altura: ${this.altura} m
      Año de Nacimiento: ${this.anioNacimiento}
    `;

  alert(datos);
};
let persona;

function validarFormulario() {
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  const sexo = document.getElementById("sexo").value;
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;
  const anioNacimiento = document.getElementById("anioNacimiento").value;

  if (
    nombre === "" ||
    edad === "" ||
    sexo === "" ||
    peso === "" ||
    altura === "" ||
    anioNacimiento === ""
  ) {
    alert(
      "Por favor, completa todos los campos antes de enviar el formulario."
    );
    return false;
  }

  return true;
}

function crearPersona() {
  if (validarFormulario()) {
    const nombre = document.getElementById("nombre").value;
    const edad = parseInt(document.getElementById("edad").value);
    const sexo = document.getElementById("sexo").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const anioNacimiento = parseInt(
      document.getElementById("anioNacimiento").value
    );

    persona = new Persona(nombre, edad, sexo, peso, altura, anioNacimiento);

    alert("Persona creada correctamente.");
  }
}
