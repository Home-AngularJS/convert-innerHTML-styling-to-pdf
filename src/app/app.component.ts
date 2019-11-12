import { Component } from '@angular/core';
import { getTeceiptTemplates } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [ getTeceiptTemplates()[1].templateStyle.toString() ]
})
export class AppComponent {
  title = 'app';
  teceiptTemplate = getTeceiptTemplates()[1].templateBody;
}
