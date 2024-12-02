import { Component } from '@angular/core';
import { UserInputComponent } from './user-input/user-input.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [UserInputComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-ui';
}
