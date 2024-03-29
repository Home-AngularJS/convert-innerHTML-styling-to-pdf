#Angular convert innerHtml + Styling to PDF

* [Angular 7: convert HTML to PDF](https://stackoverflow.com/questions/54629163/angular-7-convert-html-to-pdf)
* [Exporting Angular Page Content to PDF Using Kendo UI](https://www.telerik.com/blogs/exporting-angular-page-content-to-pdf-using-kendo-ui)
  * [Repository](https://github.com/christiannwamba/kendo-angular-export-pdf)
  * [Demo-1](https://stackblitz.com/edit/angular-html-to-pdf-test)
  * [Demo-2](https://stackblitz.com/edit/angular-html-to-pdf-example)
* [Load component via innerHtml in angular5](https://stackoverflow.com/questions/48879695/load-component-via-innerhtml-in-angular5)
* [How to style child components from parent component's CSS file](https://stackoverflow.com/questions/36527605/how-to-style-child-components-from-parent-components-css-file)
  * ( https://stackoverflow.com/questions/36265026/angular-2-innerhtml-styling )

![screenshot](screenshot.png)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


---

* [Can you use both styles and styleUrls in an Angular component?](https://stackoverflow.com/questions/45723055/can-you-use-both-styles-and-styleurls-in-an-angular-component)
  * ```text
    styles: [require('his-common.component.css'), 'h1 { font-weight: normal; }']
    ```
* [@types/node](https://www.npmjs.com/package/@types/node)
  * ```text
    npm install --save @types/node
    ```
* [Ошибка при получении TypeScript TS2304: невозможно найти имя 'require'](http://qaru.site/questions/31828/typescript-getting-error-ts2304-cannot-find-name-require)
  * **(** tsconfig.app.json **)**
  * ```text
      "compilerOptions": {
        "outDir": "../out-tsc/app",
        "module": "es2015",
        "types": [ "node" ],
        "typeRoots": [ "../node_modules/@types" ]
      },
    ```

https://stackoverflow.com/questions/43104114/cannot-find-name-require-after-upgrading-to-angular4
