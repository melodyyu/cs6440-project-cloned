import { Component } from '@angular/core';
import { UserInputComponent } from './user-input/user-input.component';

@Component({
  selector: 'app-root',
  imports: [UserInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-ui';
}
