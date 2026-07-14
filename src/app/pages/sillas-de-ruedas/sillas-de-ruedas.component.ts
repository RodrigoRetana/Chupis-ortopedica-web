import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


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
      src: 'imgCarru1.png',
      alt: 'Silla de ruedas compacta',
      title: 'Compacta y práctica',
      description: 'Ideal para traslados frecuentes y espacios reducidos.'
    },
    {
      src: 'imgCarru2.jpg',
      alt: 'Silla de ruedas de uso diario',
      title: 'Uso diario',
      description: 'Confort y soporte para acompañar rutinas prolongadas.'
    },
    {
      src: 'imgCarru3.jpg',
      alt: 'Silla de ruedas con acompañamiento',
      title: 'Mayor soporte',
      description: 'Diseñada para brindar estabilidad y mejor postura.'
    }
  ];

  activeModelIndex = 0;
  private readonly sanitizer = inject(DomSanitizer);

  carac: Array<{ title: string; desc: string; icon: SafeHtml }> = [
    {
      title: 'Uso diario',
      desc: 'Confort y soporte para acompañar rutinas prolongadas.',
      icon: this.sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/></svg>`)
    },
    {
      title: 'Compacta y práctica',
      desc: 'Ideal para traslados frecuentes y espacios reducidos.',
      icon: this.sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/></svg>`)
    },
    {
      title: 'Mayor soporte',
      desc: 'Diseñada para brindar estabilidad y mejor postura.',
      icon: this.sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/></svg>`)
    }

  ];

  modelos: Array<{ title: string; desc: string; src: SafeHtml }> = [
    {
      title: 'Pediátrica',
      desc: 'Rogue XP',
      src: "RogueXP.png"
    },
    {
      title: 'Pediátrica',
      desc: 'Little Wave arc',
      src: "WaveArc.png"
    },
    {
      title: 'Pediátrica',
      desc: 'Little Wave Click',
      src: "WaveClick.png"
    },
    {
      title: 'Pediátrica',
      desc: 'Little Wave Flip',
      src: "WaveFlip.png"
    },
    {
      title: 'Pediátrica',
      desc: 'Spark',
      src: "Spark.png"
    },
    {
      title: 'Basculación',
      desc: 'Focus CR',
      src: "FocusCR.png"
    },
    {
      title: 'Basculación',
      desc: 'Liberty',
      src: "Liberty.png"
    },
    {
      title: 'Rígido',
      desc: 'Rogue²',
      src: "Rogue2.png"
    },
    {
      title: 'Rígido',
      desc: 'Rogue ALX',
      src: "RogueALX.png"
    }
    ,
    {
      title: 'Plegable',
      desc: 'La Diferencia Catalyst',
      src: "CatalystDifference.jpg"
    }
    ,
    {
      title: 'Plegable',
      desc: 'Catalyst 5',
      src: "Catalyst5.png"
    },
    {
    
      title: 'Plegable',
      desc: 'Catalyst 5Vx',
      src: "Catalyst5Vx.png"
    
    }
  ];
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
