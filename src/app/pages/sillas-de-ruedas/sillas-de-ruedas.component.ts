import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface WheelchairModel {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const CAROUSEL_INTERVAL_MS = 5000;

@Component({
  selector: 'app-sillas-de-ruedas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sillas-de-ruedas.component.html',
  styleUrl: './sillas-de-ruedas.component.scss'
})
export class SillasDeRuedasComponent implements OnInit, OnDestroy {
  readonly models: WheelchairModel[] = [
    {
      src: '/Chupis-Ortopedica.jpeg',
      alt: 'Silla de ruedas compacta',
      title: 'Compacta y práctica',
      description: 'Ideal para traslados frecuentes y espacios reducidos.'
    },
    {
      src: '/Chupis-Ortopedica-2.jpeg',
      alt: 'Silla de ruedas de uso diario',
      title: 'Uso diario',
      description: 'Confort y soporte para acompañar rutinas prolongadas.'
    },
    {
      src: '/Chupis-Ortopedica2-1.jpeg',
      alt: 'Silla de ruedas con acompañamiento',
      title: 'Mayor soporte',
      description: 'Diseñada para brindar estabilidad y mejor postura.'
    }
  ];

  activeModelIndex = 0;

  private autoplayTimerId?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    if (this.models.length < 2) {
      return;
    }

    this.autoplayTimerId = setInterval(() => this.nextModel(), CAROUSEL_INTERVAL_MS);
  }

  ngOnDestroy(): void {
    if (this.autoplayTimerId) {
      clearInterval(this.autoplayTimerId);
    }
  }

  get activeModel(): WheelchairModel {
    return this.models[this.activeModelIndex];
  }

  get nextModelIndex(): number {
    return (this.activeModelIndex + 1) % this.models.length;
  }

  get previousModelIndex(): number {
    return (this.activeModelIndex - 1 + this.models.length) % this.models.length;
  }

  nextModel(): void {
    this.activeModelIndex = this.nextModelIndex;
  }

  previousModel(): void {
    this.activeModelIndex = this.previousModelIndex;
  }

  setActiveModel(index: number): void {
    this.activeModelIndex = index;
  }
}
