import { Component } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Fecha: Date = new Date();
  // tslint:disable-next-line: no-inferrable-types
  nombre: string = 'Pedro';
  arreglo: string[] = ['spiderman', 'iron man', 'hulk', 'Groot'];
  PI: number = Math.PI;
  // tslint:disable-next-line: no-inferrable-types
  Porcentaje: number = 0.234;
  // tslint:disable-next-line: no-inferrable-types
  Salario: number = 1234.5;

  idioma: string = 'es';

  videoURL = 'https://www.youtube.com/embed/ExsGyZDBlJQ';

  // tslint:disable-next-line: variable-name
  // tslint:disable-next-line: no-shadowed-variable
  valorpromesa = new Promise<string>( ( resolve ) => {

    setTimeout( () => {
      resolve('llego la data');
    }, 4500);

  });

  heroe = {
    nombre: 'Logan',
    clave: 'wolverine',
    edad: 24,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  };

  // Pipe
  nombre2: string = 'Pedro MT';

  contrasena: string = 'hola';

}
