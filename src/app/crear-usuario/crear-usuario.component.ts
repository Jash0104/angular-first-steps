import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.css'
})
export class CrearUsuarioComponent {
  userForm: FormGroup
  submitted = false
  showModal: boolean = false;

  constructor(
    private readonly dialog: MatDialog
  ) {
    this.userForm = new FormGroup({
      nombres: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      identificacion: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.maxLength(10),
      ]),
      fechaNacimiento: new FormControl('', Validators.required),
      genero: new FormControl('', Validators.required),
      pais: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.userForm.valid) {
      console.log('Formulario enviado:', this.userForm.value);

      this.showModal = true;
      
      this.userForm.reset();
      this.submitted = false;
    }
  }

  closeModal() {
    // Cierra el modal
    this.showModal = false;
  }
}
