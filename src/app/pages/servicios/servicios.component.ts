import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.scss'
})
export class ServiciosComponent {
  servicios = [
    { title: 'Órtesis a la medida', desc: 'Fabricamos órtesis personalizadas para cada paciente, adaptadas a sus necesidades y medidas específicas.', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2a4 4 0 0 1 4 4v4a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"/><path d="M8 14H5a2 2 0 0 0-2 2v4h18v-4a2 2 0 0 0-2-2h-3"/></svg>' },
    { title: 'Prótesis', desc: 'Soluciones protésicas de alta calidad para mejorar la movilidad y calidad de vida de nuestros pacientes.', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M12 12v10M9 16l3 3 3-3"/></svg>' },
    { title: 'Sillas de ruedas', desc: 'Amplia variedad de sillas de ruedas manuales y eléctricas adaptadas a cada necesidad.', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3"/></svg>' },
    { title: 'Plantillas ortopédicas', desc: 'Plantillas diseñadas para corregir problemas de pisada y brindar soporte al arco del pie.', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 8C8 10 5.9 16.17 3.82 19.07M7 6.5C7 9 9 11 12 11s4 1 4 3c0 1.5-.5 3-2 4"/></svg>' },
    { title: 'Corsés ortopédicos', desc: 'Corsés especializados para el tratamiento de condiciones de la columna vertebral.', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="9" y="2" width="6" height="20" rx="2"/><path d="M5 6h14M5 18h14"/></svg>' },
    { title: 'Equipos de rehabilitación', desc: 'Equipos y accesorios para apoyo en procesos de rehabilitación y recuperación.', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>' },
  ];
}
