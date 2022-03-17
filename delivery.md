## Proceso de solucion

* Primero que se hizo fue que la cadena ingresado no se pasaba de mas de 20 caracteres.

* Segundo verificar si la cadena ingresado solo tenga numero (String) y simbolos de operacion.

* Tercero pasar los numeros de tipo string a tipo number y luego lo guardo en una lista.

* Cuarto una vez teniendo la lista comienzo a hacer las operaciones respetando la prioridad de los operadores de la siguiente manera:

    1. Multiplicacion y Division.
    2. Sumar y Restar.

* Por ultimo retorno el resultado y lo muestro.


## Algoritmo

El algoritmo que use para resolver fue esta:

Tengo un metodo donde tengo que pasar como parametro una lista donde la lista contiene los numeros y operadores separado, ejemplo:

~~~javascript
    lista = ["22", "+", "2", "-"+ "4"];
~~~

Lo que hace el metodo es recorrer la lista con un for y verifico con un if si viene los simbolos de operacion.

Cuando la condicion se cumple asigno dos let donde guardo una la posicion anterior y otro la posicion siguiente.

Despues solo opero los dos variables con la operacion con que se cumplo condicion. Posteriormente ingreso el resultado en la posicion donde se encontro el simbolo de operacion, luego elimino el elemento de posicion siguiente y el elemento de posicion anterior  y despues hago un break para salir del ciclo.

Si la condicion se cumpleo con el simbolo '*' o '/', le asigno a una variable llamado flag el booleano true. Esto lo
que hace es que no entre en el otro ciclo donde comprueba si es suma o resta.

Hago esto porque primero quiero que trabaje con la multiplicacion y division, en caso que no encuentra ningun simbolo de multiplicacion o division, la variable flag estaria en false y ahi entraria en el otro ciclo donde compruebo si hay simbolo de suma o resta y hago la operacion.

Lo anterior mencionado lo tengo de forma recursiva hasta que la list.length == 1

Luego solo retorno el resultado.

## Capturas de pantallas