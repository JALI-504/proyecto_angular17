import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heavy-loaders-slow.component.html',
  styleUrl: './heavy-loaders-slow.component.css',
  template: `
  <h1>Hola Mundo</h1>
  `
  
})
export class HeavyLoadersSlowComponent {

}
