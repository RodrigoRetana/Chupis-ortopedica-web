import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.scss'
})
export class ServiciosComponent {
  private readonly sanitizer = inject(DomSanitizer);
  
  servicios: Array<{ title: string; desc: string; icon: SafeHtml }> = [
    {
       title: 'Órtesis a la medida', 
       desc: 'Fabricamos órtesis personalizadas para cada paciente, adaptadas a sus necesidades y medidas específicas.', 
       icon: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-hospital" viewBox="0 0 16 16"><path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1zM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"/><path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm2 14h2v-3H7zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm0-14H6v1h4zm2 7v7h3V8zm-8 7V8H1v7z"/></svg>') 
    },
    { title: 'Prótesis', 
      desc: 'Soluciones protésicas de alta calidad para mejorar la movilidad y calidad de vida de nuestros pacientes.', 
      icon: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" widht="30" height="30" viewBox="0 0 640 640"><!--!Font Awesome Pro v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2026 Fonticons, Inc.--><path d="M197.4 224C193.5 224 190.2 221.2 189.3 217.4C179.1 175.3 141.2 144 96 144C43 144 0 187 0 240C0 269.1 12.9 295.1 33.3 312.7C37.6 316.4 37.6 323.5 33.3 327.2C12.9 344.8 0 370.9 0 399.9C0 452.9 43 495.9 96 495.9C141.2 495.9 179.1 464.6 189.3 422.5C190.2 418.7 193.5 415.9 197.4 415.9L442.5 415.9C446.4 415.9 449.7 418.7 450.6 422.5C460.8 464.6 498.7 495.9 543.9 495.9C596.9 495.9 639.9 452.9 639.9 399.9C639.9 370.8 627 344.8 606.6 327.2C602.3 323.5 602.3 316.4 606.6 312.7C627 295.1 639.9 269 639.9 240C639.9 187 596.9 144 543.9 144C498.7 144 460.8 175.3 450.6 217.4C449.7 221.2 446.4 224 442.5 224L197.4 224z"/></svg>') 
    },
    { title: 'Sillas de ruedas', 
      desc: 'Amplia variedad de sillas de ruedas manuales y eléctricas adaptadas a cada necesidad.', 
      icon: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" widht="30" height="30" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M200 104C200 73.1 225.1 48 256 48C286.9 48 312 73.1 312 104C312 134.9 286.9 160 256 160C225.1 160 200 134.9 200 104zM181.9 261.6L194.5 324.6C155.9 337 128 373.3 128 416C128 469 171 512 224 512C259.6 512 290.7 492.6 307.3 463.8C309.6 463.9 311.9 464 314.3 464L318.4 464C319.4 464 320.5 464 321.5 464L376.7 464C356.3 528.9 295.7 576 224 576C135.6 576 64 504.4 64 416C64 342.2 114 280.1 181.9 261.6zM330.5 233.5L354.2 352L414.7 352C448 352 477.9 372.7 489.6 403.9L515.1 471.9L533.8 465.7C550.6 460.1 568.7 469.2 574.3 485.9C579.9 502.6 570.8 520.8 554.1 526.4L506.1 542.4C489.8 547.8 472.1 539.4 466 523.3L429.7 426.4C427.4 420.2 421.4 416 414.7 416L328.6 416C328.2 416 327.8 416 327.3 416L314.2 416C283.7 416 257.4 394.5 251.4 364.6L229.3 253.7C222.9 221.8 247.3 192 279.9 192C304.5 192 325.7 209.4 330.5 233.5z"/></svg>') 
    },
    { title: 'Plantillas ortopédicas', 
      desc: 'Plantillas diseñadas para corregir problemas de pisada y brindar soporte al arco del pie.', 
      icon: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" widht="30" height="30" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 144C350.9 144 376 118.9 376 88C376 57.1 350.9 32 320 32C289.1 32 264 57.1 264 88C264 118.9 289.1 144 320 144zM233.4 291.9L256 269.3L256 338.6C256 366.6 268.2 393.3 289.5 411.5L360.9 472.7C366.8 477.8 370.7 484.8 371.8 492.5L384.4 580.6C386.9 598.1 403.1 610.3 420.6 607.8C438.1 605.3 450.3 589.1 447.8 571.6L435.2 483.5C431.9 460.4 420.3 439.4 402.6 424.2L368.1 394.6L368.1 279.4L371.9 284.1C390.1 306.9 417.7 320.1 446.9 320.1L480.1 320.1C497.8 320.1 512.1 305.8 512.1 288.1C512.1 270.4 497.8 256.1 480.1 256.1L446.9 256.1C437.2 256.1 428 251.7 421.9 244.1L404 221.7C381 192.9 346.1 176.1 309.2 176.1C277 176.1 246.1 188.9 223.4 211.7L188.1 246.6C170.1 264.6 160 289 160 314.5L160 352C160 369.7 174.3 384 192 384C209.7 384 224 369.7 224 352L224 314.5C224 306 227.4 297.9 233.4 291.9zM245.8 471.3C244.3 476.5 241.5 481.3 237.7 485.1L169.4 553.4C156.9 565.9 156.9 586.2 169.4 598.7C181.9 611.2 202.2 611.2 214.7 598.7L283 530.4C294.5 518.9 302.9 504.6 307.4 488.9L309.6 481.3L263.6 441.9C261.1 439.7 258.6 437.5 256.2 435.1L245.8 471.3z"/></svg>') 
    },
    { title: 'Corsés ortopédicos', 
      desc: 'Corsés especializados para el tratamiento de condiciones de la columna vertebral.', 
      icon: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" widht="30" height="30" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 128C64 110.3 78.3 96 96 96L544 96C561.7 96 576 110.3 576 128C576 145.7 561.7 160 544 160L544 480C561.7 480 576 494.3 576 512C576 529.7 561.7 544 544 544L96 544C78.3 544 64 529.7 64 512C64 494.3 78.3 480 96 480L96 160C78.3 160 64 145.7 64 128zM344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184L296 200L232 200C218.7 200 208 210.7 208 224C208 237.3 218.7 248 232 248L296 248L296 296L216 296C202.7 296 192 306.7 192 320C192 333.3 202.7 344 216 344L296 344L296 392L232 392C218.7 392 208 402.7 208 416C208 429.3 218.7 440 232 440L296 440L296 456C296 469.3 306.7 480 320 480C333.3 480 344 469.3 344 456L344 440L408 440C421.3 440 432 429.3 432 416C432 402.7 421.3 392 408 392L344 392L344 344L424 344C437.3 344 448 333.3 448 320C448 306.7 437.3 296 424 296L344 296L344 248L408 248C421.3 248 432 237.3 432 224C432 210.7 421.3 200 408 200L344 200L344 184z"/></svg>') 
    },
    { title: 'Equipos de rehabilitación', 
      desc: 'Equipos y accesorios para apoyo en procesos de rehabilitación y recuperación.', 
      icon: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" widht="30" height="30" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M531.2 41.6L572 96L616 96C629.3 96 640 106.7 640 120C640 133.3 629.3 144 616 144L560 144C552.4 144 545.3 140.4 540.8 134.4L516.7 102.3L469.7 202.2C466 210 458.4 215.3 449.8 215.9C441.2 216.5 432.9 212.5 428.1 205.3L387.2 144L344 144C330.7 144 320 133.3 320 120C320 106.7 330.7 96 344 96L400 96C408 96 415.5 100 420 106.7L444.4 143.3L490.3 45.8C493.9 38.2 501.2 33 509.6 32.1C518 31.2 526.2 34.8 531.2 41.6zM320 224C320 206.3 334.3 192 352 192L361.5 192L388.1 231.9C402.5 253.5 427.4 265.7 453.3 263.8C479.2 261.9 502.1 246.2 513.1 222.7L527 193.2C572.9 200.4 608 240.1 608 288L608 512C608 529.7 593.7 544 576 544C558.3 544 544 529.7 544 512L544 448L96 448L96 512C96 529.7 81.7 544 64 544C46.3 544 32 529.7 32 512L32 128C32 110.3 46.3 96 64 96C81.7 96 96 110.3 96 128L96 352L320 352L320 224zM144 256C144 220.7 172.7 192 208 192C243.3 192 272 220.7 272 256C272 291.3 243.3 320 208 320C172.7 320 144 291.3 144 256z"/></svg>') 
    },
  ];
}
