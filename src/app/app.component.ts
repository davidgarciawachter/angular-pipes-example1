import { Component } from '@angular/core';
import { ExampleComponent } from './example/example.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [ExampleComponent]
})
export class AppComponent {
  title = 'pipes-example';
}
