console.log("Vinculado correctamente...")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function calcularEdad() {
    alert("Esto es una alerta");
    // Tu código aquí
    let ahora = 2024;
    let fecha_nac = 2007;
    let edad = ahora - fecha_nac;
    
    alert("Mi edad es: " + edad);
    }
    
    // Ejercicio 2: Asignación de valores
    // Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
    function asignarValores() {
    // Tu código aquí
        let var1 = 25;
        let var2 = var1

        alert("El valor de var2 es: " + var2);
    }
    
    // Ejercicio 3: Operaciones matemáticas
    // Instrucciones: Completa la función para realizar las siguientes operaciones:
    // Suma 'num1','num2' y 'num3', resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
    // Muestra los resultados en un mensaje.
    function realizarOperaciones() {
        let num1 = 20;
        let num2 = 40;
        let num3 = 2;
        let suma = num1 + num2 + num3;
        let resta = num1 - num3;
        let producto = num2 * num3;
        let division = num1 / 120;
    alert(`La suma es : ${suma}\n La resta es : ${resta}\n La multiplicación es : ${producto}\n La division es : ${division}`)
    
    // Tu código aquí
    }
    
    // Ejercicio 4: Manipulación de cadenas
    // Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'n_casa'.
    // Luego, muestra la longitud del mensaje y el antepenultimo caracter en el mensaje. (.length)
    function manipularCadenas() {
        let direccion = "Av. Alameda";
        let n_casa = "0840";
        let mensaje = direccion + " " + n_casa
        alert(`La longitud del mensaje es: ${mensaje.length}\nCaracter antepenultimo: ${mensaje[mensaje.length - 3]}`)
    // Tu código aquí
    }