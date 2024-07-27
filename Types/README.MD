# NOTES FOR THIS PART OF Types 
Los tipos que existen en JavaScript también están en TypeScript. hay que tener encuenta hay dos grupos de tipos, los primitivos y compuestos.

Tener presente que todas las variables pueden tener como valor null o undefined, se puede considerar un tipo de dato y no son iguales. Donde:
#### null
null es cuando se asigna especificamente a alguna variable null.
```
    age = null
```
#### undefined
Es cuando no se le asignado un valor propiamente a una propiedad, variable, objeto, etc.
```
    herp = undefined
```


## Tipo de datos Primitivos

### String
Los String se declaran así:
```
    ... :string ...

    "María Perez"
    'Tesla'
    `<h1>Hola mundo </h1>`
```
### Number
Los Number se declaran así:
```
   ... :number ...

   PI= 3.14123123
   salario = 15000.1
    age = 30
```
Tener presente son números y con punto, no coma.

### Boolean
Los Boolean se declaran así:
```
    isActive = true
    keepAlive = false
```
Se determinan por true, false en minúscula.
### Symbol
El simbolo no utiliza new, ya que no es una instancia, se crea simbolos así:
```
    sym = Symbol()
    sym2 = Symbol('myProperty')
```
Es una propiedad garantizada única, donde apunta a un espacio de memoria diferente al del objeto.

## Tipo de datos Compuestos
Estos tipos de datos también son conocidos como objetos, tener presente que todo en JS son objetos.

### Objetos literales
Los objetos líterarios son diccionarios o pares de valores, así:
```
    person = {
        name:'Fernando',
        Age:35
    }
```
Pueden cotener tipos primitivos o compuestos en su composición.

### Funciones
Se tienen funciones tradicionales así:
```
    function sayHello (){}
```
Tener presente que va la palabra reservada function.
y se tiene funciones lamda así:
```
    const sayHello = () => {}
```

### Clases
Las clases se definen así:
```
    class Person{
        name;
        age;
    }
```
## Volviendo al tema de TypeScript
En el superset de TypeScript para JS, podemos crear nuestros tipos de datos, aún así algunos que cre e incluye son las Tuplas, Interfaces y Genericos.

### Documentation of types
[TypeScript types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)