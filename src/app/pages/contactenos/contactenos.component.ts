import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactenos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contactenos.component.html',
  styleUrl: './contactenos.component.scss'
})
export class ContactenosComponent {
  form = { nombre: '', email: '', telefono: '', mensaje: '' };
  sent = false;

  onSubmit() {
    this.sent = true;
    setTimeout(() => {
      this.sent = false;
      this.form = { nombre: '', email: '', telefono: '', mensaje: '' };
    }, 3000);
  }
}
