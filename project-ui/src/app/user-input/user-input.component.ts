import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule  } from '@angular/common'
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule, CommonModule ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  age!: number;
  gender!: number;
  height!: number;
  weight!: number;
  ap_hi!: number;
  ap_lo!: number;
  cholesterol!: number;
  gluc!: number;
  smoke!: number;
  alco!: number;

  selectOptions = [
    { value: 0, label: 'Never' },
    { value: 1, label: 'Sometimes' },
    { value: 1, label: 'Often' }
  ];

  sexOptions = [
    { value: 1, label: 'Female' },
    { value: 2, label: 'Male' }
  ]

  output: any;

  constructor(private apiService: ApiService) {}

  async onSubmit(event: Event) { 
    let input = {
      'age': this.age,
      'gender': Number(this.gender),
      'height': this.height,
      'weight': this.weight,
      'ap_hi': this.ap_hi,
      'ap_lo': this.ap_lo,
      'cholesterol': this.cholesterol,
      'gluc': this.gluc,
      'smoke': Number(this.smoke),
      'alco': Number(this.alco)
    }

    if (this.cholesterol < 200) {
      input.cholesterol = 1
    } else if (this.cholesterol >= 200 && this.cholesterol <= 239) {
      input.cholesterol = 2
    } else {
      input.cholesterol = 3
    }

    if (this.gluc < 70) {
      input.gluc = 0
    } else if (this.gluc >= 70 && this.gluc <= 100) {
      input.gluc = 1
    } else if (this.gluc > 100 && this.gluc <= 125) {
      input.gluc = 2
    } else {
      input.gluc = 3
    }

    const button = (event.target as HTMLButtonElement).value
    console.log(input)

    if (button === 'probability') {
      this.apiService.calculateProbability({userInput: input})
      .subscribe((response) => this.output = response)  
    }
    else if (button === 'classification') {
      this.apiService.calculateClassification({userInput: input})
      .subscribe((response) => this.output = response) 
    }
  }
}
