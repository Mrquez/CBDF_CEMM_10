// empleados.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {
  empleados = [
    { id: 1, nombre: "Juan", sueldo: "100", estado: false },
    { id: 2, nombre: "Maria", sueldo: "908", estado: true },
    { id: 3, nombre: "Jose", sueldo: "437", estado: false },
    { id: 4, nombre: "Mario", sueldo: "234", estado: true },
    { id: 5, nombre: "Fernanda", sueldo: "874", estado: false },
    { id: 6, nombre: "Moises", sueldo: "765", estado: true }
  ];
}
