import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [NgFor, MatIconModule],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent {
  users = [
    {
      name: 'Juan Pérez',
      description: 'Desarrollador Frontend',
      avatarUrl: 'front-end.jpeg'
    },
    {
      name: 'Ana Gómez',
      description: 'Desarrolladora Backend',
      avatarUrl: 'photo.jpeg'
    },
    {
      name: 'Carlos Ruiz',
      description: 'DevOps Engineer',
      avatarUrl: 'back-end.jpeg'
    }
  ];
}
