# Framework de pruebas automatizadas Erp Cap Tec 

Este es el repositorio con el framework para desarrollar las pruebas automatizadas para agilizar la generacion de pruebas automatizadas del proyecto de Erp para la gestion de capacidades tecnologicas 

Se asume que tiene instalado npm y node en su equipo

Se tiene que instalar la herramienta de pruebas [Protractor](https://www.protractortest.org/#/) de la siguiente forma 

```sh
npm install -g protractor
```

## Ejecutar las pruebas

Para ejecutar las pruebas automatizadas usar el siguiente comando para iniciar el server de selenium

```sh
webdriver-manager start
```

Segido se pueden ejecutar los scripts de pruebas con 
```sh
protractor protractor.conf.js
```