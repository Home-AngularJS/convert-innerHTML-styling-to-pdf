import { Component } from '@angular/core';
import { getTeceiptTemplates } from './app.model';

/**
 * Can you use both styles and styleUrls in an Angular component?
 *
 * https://stackoverflow.com/questions/45723055/can-you-use-both-styles-and-styleurls-in-an-angular-component
 * /

/** Cannot find name 'require'...
 *
 * https://www.npmjs.com/package/@types/node
 * http://qaru.site/questions/31828/typescript-getting-error-ts2304-cannot-find-name-require
 * https://stackoverflow.com/questions/43104114/cannot-find-name-require-after-upgrading-to-angular4
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    require('./app.component.css'),
    getTeceiptTemplates()[1].templateStyle.toString()
  ],
})
export class AppComponent {
  title = 'app';
  teceiptTemplate = getTeceiptTemplates()[1].templateBody;
}
