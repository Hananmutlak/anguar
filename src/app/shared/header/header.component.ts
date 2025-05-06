import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav>
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/converter" routerLinkActive="active">Converter</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
    </nav>
  `,
  styles: [
    `nav { background: #333; padding: 1rem; }`,
    `a { color: white; margin-right: 1rem; }`,
    `.active { font-weight: bold; }`
  ]
})
export class HeaderComponent {}