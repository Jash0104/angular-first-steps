import { Routes } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { PrincipalComponent } from './principal/principal.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';

export const routes: Routes = [
  {
    path: 'list',
    component: ListaUsuariosComponent
  },
  {
    path: '',
    component: PrincipalComponent
  },
  {
    path: 'create-user',
    component: CrearUsuarioComponent
  }
];
