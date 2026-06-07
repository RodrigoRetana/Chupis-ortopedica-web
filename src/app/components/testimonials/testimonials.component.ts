import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials = [
    {
      text: 'Excelente atención y productos de muy buena calidad. El personal me ayudó a encontrar exactamente lo que necesitaba para mi recuperación.',
      name: 'Cliente Satisfecho',
      role: 'Paciente',
      avatar: 'https://chupisortopedica.com/wp-content/uploads/2024/04/63x63.jpg'
    },
    {
      text: 'Llevan más de 30 años ayudando a personas como yo. Sus productos están hechos a medida y la diferencia es notable. Muy recomendados.',
      name: 'Nombre Cliente',
      role: 'Paciente',
      avatar: 'https://chupisortopedica.com/wp-content/uploads/2024/04/63x63.jpg'
    },
    {
      text: 'Servicio profesional y dedicado. Me fabricaron una ortesis personalizada que mejoró significativamente mi calidad de vida. Gracias Chupis.',
      name: 'Nombre Cliente',
      role: 'Paciente',
      avatar: 'https://chupisortopedica.com/wp-content/uploads/2024/04/63x63.jpg'
    }
  ];
}
