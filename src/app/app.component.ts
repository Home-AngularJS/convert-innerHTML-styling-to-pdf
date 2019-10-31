import { Component } from '@angular/core';
import { getTemplate, getTeceiptTemplates } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: [ getTemplate().css.toString() ]
  styles: [ getTeceiptTemplates()[1].templateStyle.toString() ]
})
export class AppComponent {

  title = 'app';

  template = getTemplate().html;
  teceiptTemplate = getTeceiptTemplates()[1].templateBody;

}
