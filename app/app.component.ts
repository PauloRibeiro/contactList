import { Component } from '@angular/core';

@Component ({
    selector: 'my-app',
    template: `
    <h1>My first angular 2 app</h1>
    <router-outlet></router-outlet>
    `
})
export class AppComponent {}