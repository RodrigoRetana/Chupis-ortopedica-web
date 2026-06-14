import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contactenos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contactenos.component.html',
  styleUrl: './contactenos.component.scss'
})
export class ContactenosComponent {
  private sanitizer = inject(DomSanitizer);
  
  form = { nombre: '', email: '', telefono: '', mensaje: '' };
  sent = false;
  selectedSucursal: number = 0;

  sucursales = [
    {
      nombre: 'Alajuela',
      telefono: '2443-3452',
      whatsapp: '62497-452',
      direccion: 'De la esquina Noroeste de la Iglesia de la Agonia, 25 metros al Oeste, Alajuela, Costa Rica'
    },
    {
      nombre: 'Calderón Guardia',
      telefono: '2223-7414',
      whatsapp: '62497-452',
      direccion: 'De la Torre de Emergencias 125 metros Norte, San José,, Costa Rica'
    },
    {
      nombre: 'CENARE',
      telefono: '2231-4096',
      whatsapp: '62497-452',
      direccion: '25 metros al Sur , entrada principal CENARE. La Uruca, San Jose, San José, Costa Rica'
    },
    {
      nombre: 'Liberia',
      telefono: '8428-3685',
      whatsapp: '62497-452',
      direccion: 'Frente a la Curz Roja de Liberia, Guanacaste, Costa Rica'
    }
  ];

  getMapUrl(): SafeResourceUrl {
    const sucursal = this.sucursales[this.selectedSucursal];
    const url = `https://www.google.com/maps?q=Chupis+Ortopédica+${sucursal.nombre}&z=15&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  onSucursalSelected(index: number): void {
    this.selectedSucursal = index;
  }
}
