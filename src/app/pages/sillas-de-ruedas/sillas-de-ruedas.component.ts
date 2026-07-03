import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-sillas-de-ruedas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sillas-de-ruedas.component.html',
  styleUrl: './sillas-de-ruedas.component.scss'
})
export class SillasDeRuedasComponent {
    private readonly sanitizer = inject(DomSanitizer);
}
