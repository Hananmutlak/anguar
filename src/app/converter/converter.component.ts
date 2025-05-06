// converter.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss'
})
export class ConverterComponent {
  // Length Conversion
  meters: number = 0;
  feet: number = 0;

  // Temperature Conversion
  celsius: number = 0;
  fahrenheit: number = 0;

  convertLength() {
    this.feet = this.meters * 3.28084;
  }

  convertTemperature() {
    this.fahrenheit = (this.celsius * 9/5) + 32;
  }
}