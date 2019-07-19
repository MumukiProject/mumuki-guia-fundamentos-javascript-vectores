Vamos a conocer una manera de recorrer los elementos de una lista con un nuevo amigo: el  `for`. :muscle:

Imaginémonos que tenemos una lista con los precios de los productos que compramos en el supermercado y queremos restar cada uno de ellos a `plata_en_billetera` :money_with_wings:. Usando `for` podemos hacerlo así:

```javascript
for(let precio of [10, 100, 87 ]) {
  plata_en_billetera  = plata_en_billetera - precio
}

```
donde `plata_en_billetera` es una variable que se va modificando a medida que recorremos los `precio`s.

Si teníamos $500 en nuestra billetera, después del `for` nos van a quedar $303 porque:

* Al principio `plata_en_billetera` era 500 y el primer `precio` de la lista es 10. Luego de hacer 500 - 10, `plata_en_billetera` es 490.
* A los 490 que quedaron en nuestra billetera, le restamos el segundo precio de la lista: 100. Ahora `plata_en_billetera` es 390.
* El último precio a restar es 87, por lo que, al hacer 390 - 87, la variable `plata_en_billetera` terminará siendo 303.

> Completá la función `saludar` que recibe una lista de personas e imprime un saludo para cada una de ellas.
>
> ``` javascript
ム saludar(["Don Pepito", "Don Jose"])
hola Don Pepito
hola Don Jose
>
ム saludar(["Elena", "Hector", "Tita"])
hola Elena
hola Hector
hola Tita
```
