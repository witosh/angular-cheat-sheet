# Angular - quick guide

### Table of Contents

| No.        | Topics           | 
| ------------- |-------------:|
|1. | [*Angular data binding*](#angular-data-binding)|
|2. | [*@Output and @Input decorators*](#output-and-input-decorators) |
|3. | [@ViewChild and @ViewChildren](#viewchild-and-viewchildren)|
|4. | [Pure and Impure pipe](#pure-and-impure-pipe)|


[Angular Interview Questions & Answers](https://github.com/sudheerj/angular-interview-questions/blob/master/README.md?fbclid=IwAR2dDlNyYtdbvcl4_k-rQOX_xgjiKk0ehxr_0F7xGriCveEw8mBLejWCpNI#table-of-contents)

### Angular data binding

Data binding is a technique to link your data to your view layer. By binding a variable you are telling the Angular to watch it for changes. If changes are detected, the framework takes care of updating the view accordingly.

#### Binding form source to view (One-way)


##### Interpolation

Form source **app.component.ts**
```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  binding = 'Interpolation';
}
````

To view **component.html** :
```html
<h1>
    It's {{ binding }}!
</h1>
```

[Check demo](https://stackblitz.com/edit/angular-tequf) 


##### Property bindings

The same source as above **app.component.ts** .

To view **component.html**:
```html
<input [value]="binding"/>
```
[Check demo](https://stackblitz.com/edit/angular-tequf) 


#### Binding form view to source (One-way)

##### Event binding

In view **component.html** we try to call event by click:
```html
<button (click)="onButtonClicked()">Event binding</button>
```
To source **app.component.ts***
```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  binding = 'Interpolation';

onButtonClicked(){
	this.binding = 'Event binding'
}

}
```
[Check demo](https://stackblitz.com/edit/angular-tequf) 

##### Passing event

We use "\$event" syntax like:
```html
<button (click)="onButtonClicked($event)">Event binding</button>
```
Parameter has to be exactly spelled like above, including the dollar sign
```javascript
onButtonClicked(evt: MouseEvent) {
    this.name = 'Charlie'
}
```

#### Binding from view to source and form source to view 

##### Two way data binding

**NgModel** it's a way to get two-way-data binding. Using use a pretty special syntax: [(ngModel)]. Its a combination of the one-way- and the event binding syntax.

In source **app.component.ts**:
```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngBinding = ''; 
}

```
and we see result on the view:
```html
<input [(ngModel)]="ngBinding" />
 <h1>
    It's ngModel two-way-data-binding {{ngBinding}}!!
 </h1>
```

Or equivalent:
```html
<input [ngModel]="nameModel" (ngModelChange)="nameModel=$event">
```
[Check demo](https://stackblitz.com/edit/angular-tequf) 

[Two-way-data binding ngModel](https://www.pluralsight.com/guides/one-and-two-way-data-binding-angular)

[Stackoverflow - binding](https://stackoverflow.com/questions/46368382/angular-property-binding)

**[⬆ Back to Top](#table-of-contents)**

### Output-and-Input-decorators

[Stackoverflow - answer](https://stackoverflow.com/questions/37965647/hostbinding-and-hostlistener-what-do-they-do-and-what-are-they-for)

**[⬆ Back to Top](#table-of-contents)**


### ViewChild and ViewChildren

[Blog for ViewChild](https://www.techiediaries.com/angular-dom-queries-viewchild/)

**[⬆ Back to Top](#table-of-contents)**

### Pure and Impure pipe]

In angular, a pipe can be used as pure and impure

A pure pipe is only called when Angular detects a change in the value or the parameters passed to a pipe. 

An impure pipe is called for every change detection cycle no matter whether the value or parameter(s) changes.
Impure pipes are prone to be inefficient. For example when an array is passed into the pipe to filter, sort, ... then this work might be done every time change detection runs event though the array might not even have changed.

#### What is pure or impure pipe?

In simple words,
impure-pipe works for every change in the component
pure-pipe works only when the component is loaded.

[1](https://stackoverflow.com/questions/39285550/what-is-impure-pipe-in-angular?fbclid=IwAR0CDPqyXljMhEv2bxBZ7pSHPGv3OpIyKdTV3WgV5g7Kklo0dHHEimFuCBY)

**[⬆ Back to Top](#table-of-contents)**
