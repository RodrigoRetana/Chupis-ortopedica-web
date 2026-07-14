import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

interface HeroImage {
  src: string;
  alt: string;
}

const ROTATION_INTERVAL_MS = 6000;
const TRANSITION_DURATION_MS = 800;

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly images: HeroImage[] = [
    {
      src: '/Chupis-ortopedica-web/Chupis-Ortopedica.jpeg',
      alt: 'Imagen de portada de Chupis Ortopédica'
    },
    {
      src: '/Chupis-ortopedica-web/Chupis-Ortopedica-2.jpeg',
      alt: 'Imagen de portada de Chupis Ortopédica'
    },
    {
      src: '/Chupis-ortopedica-web/Chupis-Ortopedica2-1.jpeg',
      alt: 'Imagen de portada de Chupis Ortopédica'
    }
  ];

  currentImageIndex = 0;
  incomingImageIndex = 0;
  transitioning = false;

  private rotationTimerId?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    if (this.images.length < 2) {
      return;
    }

    this.rotationTimerId = setInterval(() => this.startTransition(), ROTATION_INTERVAL_MS);
  }

  ngOnDestroy(): void {
    if (this.rotationTimerId) {
      clearInterval(this.rotationTimerId);
    }
  }

  get nextImageIndex(): number {
    return (this.currentImageIndex + 1) % this.images.length;
  }

  get currentImage(): HeroImage {
    return this.images[this.currentImageIndex];
  }

  get nextImage(): HeroImage {
    return this.images[this.incomingImageIndex];
  }

  private startTransition(): void {
    if (this.transitioning || this.images.length < 2) {
      return;
    }

    this.incomingImageIndex = this.nextImageIndex;
    this.transitioning = true;
  }

  onIncomingImageTransitionEnd(event: TransitionEvent): void {
    if (!this.transitioning || event.propertyName !== 'opacity') {
      return;
    }

    this.currentImageIndex = this.incomingImageIndex;
    this.transitioning = false;
  }
}
