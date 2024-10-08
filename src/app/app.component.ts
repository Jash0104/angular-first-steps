import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '01-first-steps';
  name = "Juan Acosta";
  imgRoute = "emisionsCO2.jpeg"
  disabled = false
  handleClick() {
    console.log(`Hola ${this.name}`)
  }
  increment() {
    this.count++
  }
  decrement() {
    this.count--
  }
  nombreCompleto = ""
  count = 0

}
