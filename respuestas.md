## Cuál es la diferencia entre un Objeto y una Clase?

Una clase define un estado interno (un conjunto de variables) y un conjunto de metodos.

## Cuál es el resultado del siguiente código?

Devuelve el valor 13.

## Cuál es el resultado de las siguiente operaciones de arreglos?.

Devuelve el valor 40.

| Paso                        | Resultado Intermedio |
| --------------------------- | -------------------- |
| .map(x => x \* 10)          | [10, 20, 30, 40]     |
| .filter(y => y % 20)        | [10, 30]             |
| .reduce((a, b) => a + b, 0) | 40                   |

## Con qué valor crees que queda x?

x quedaria con el valor {a: 1, b: 2, c: 20, d: undefined}

| Paso                            | Explicacion                                                                                                                                                                                                                                   |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| const object = { a: 1, b: 2 }   | Creo el objeto con las propiedades a y b con sus respectivos valores                                                                                                                                                                          |
| const {a=10, c=20, d } = object | Destructoring, defino las constantes a, c y d. A toma el valor de la propiedad definida en el objeto, c mantiene su valor por defecto 20 y d al no estar definida en el objeto ni al tener un valor por defecto, queda con el valor undefined |
| const x = { ...object, c, d }   | Define un nuevo objeto con las propiedades del objeto del primer paso (spread) y la propiedad c y d (con los valores de dichas variables)                                                                                                     |

## A qué se refiere la filosofía async/await en javascript? Conocés otra forma de implementarlo en ese lenguaje?

Async devuelve de forma implicita una Promesa. El await va a demorar la ejecucion de la funcion hasta el momento en que la promesa resuelva.

``const func = new Promise (resolve => {setTimeout((a) => a + 2 , 2000)})``

``const asyncfunct = async (a) => { return await func(a) }``

``asyncfunct (1)`` // asyncfunct no terminara hasta que pasen 2 segundos.

Se podria implementar mediante el uso de Promises.

## Que diferencias encontrás entre f, g y h?

``const f = (x) => x + 10``

Uso de una arrow function

``function g(x) {
return x + 10 }``

Uso de una funcion nombrada

``const h = function (x) {
return x + 10
}``

Uso de una funcion anonima asignada a una variable

# API Restful

## 1. Qué es una API Restful?

Es una API que utiliza el protocolo HTTP para la comunicacion. La comunicacion con una API RESTFUL es stateless (no mantiene mantiene estado ni tiene informacion del contexto).

## 2. Qué métodos del protocolo HTTP conocés?

Bajo el estandar restful se pueden utilizar los siguientes metodos del protocolo para:

| Metodo | Descripcion                                                             |
| ------ | ----------------------------------------------------------------------- |
| GET    | Recuperar un objeto.                                                    |
| PUT    | Reemplazar un objeto (la totalidad de los campos se modifican)          |
| DELETE | Borrar un objeto                                                        |
| POST   | Crear un nuevo objeto a partir de los datos provistos                   |
| HEAD   | Obtener metadata de un objeto a partir de una peticion de tipo GET      |
| PATCH  | Aplicar una modificacion parcial a un objeto (modificar algunos campos) |

## 3. Qué son los Headers en una petición HTTP? Para qué los usarías?

Los headers de una peticion se utilizan para enviar informacion adicional al servidor. Un ejemplo es if

## 4. Un sniffer de la CIA pudo captar un cacho de paquete http que les llegó a uno de sus servidores. Alguna infromación esta corrupta por lo que el equipo te llama para pedirte tu opinión. Qué les dirías?

Se envia una request para efectuar un loggeo a /login. Se esta intentando hacer una SQL inyection a la base de datos, lo cual se comprueba viendo el campo "password" que tiene el valor: "' or 1=1".

## 5. Un equipo de desarrollo front end te piden que diseñes un api rest para mostrar los usuarios de un sistema. Qué esquema de url elegirías y por qué?

La opcion C. Se presenta como la alternativa mas "friendly". Se podria optar por la opcion D pero no puedo asegurar que el username de un usuario sea un identificador unico del mismo en el sistema.

## 6. Con respecto a la pregunta anterior. Qué ventajas le ves a las otras opciones que no elegiste?

Con las opciones a y b se puede acceder de forma sencilla a los parametros definidos

# React
## Cuál es la diferencia entre Class Components y Stateless Components

Se denominan class components a aquellas clases que extienden de la clase Component provista por React.
Este tipo de componentes son stateful. Pueden mantenter un estado interno, el cual al ser modificado puede disparar una modificacion automatica en el Dom.
Necesariamente un class Component debe implementar el metodo render el cual debe devolver un elemento a renderizar. Pueden hacer uso de todos los metodos asociados al ciclo de vida de un componente. (Siendo alguno de estos, componentDidMount, shouldComponentUpdate, componentDidUpdate, etc). Los stateless compoments no pueden hacer uso de estos metodos.

Un stateless component no es mas que una funcion pura de javascript que devuelve un elemento a renderizar. La modificacion de estos componentes no se da de manera directa.

## A qué se refiere la comunidad de react cuando hablan de un "virtual DOM"

React hace uso de lo que se denomina "virtual dom" para hacer modificaciones en el dom de forma mas eficiente. Inicialmente este es completamente idento al dom. Ante una modificacion en algun componente se realizan todas las modificaciones en el virtual dom para luego compararlo con el dom. De esta forma solamente se modifican en el dom aquellos puntos donde hubo un cambio.

## Qué es redux?

Es una libreria que se utiliza para mejorar el manejo del estado de una aplicacion desacoplandolo.

## Qué es un reducer en la filosofía flux? Y una acción? Cómo definirías (formalmente) una acción de Redux?

## 5. Por qué te gusta react? Qué le cambiarias?

La falta de estructura. No existe un estandar a seguir sobre como debe ser la estructura de componentes, se puede trabajar de maneras muy diversas.
