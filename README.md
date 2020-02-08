# Angular - quick guide

## Table of Contents

| No.        | Topics           | 
| ------------- |:-------------:|
| 1.     | [*Angular data binding*](#angular-data-binding) 		|
| 2.   | centered      |
| 3. | are neat      |

[Angular Interview Questions & Answers](https://github.com/sudheerj/angular-interview-questions/blob/master/README.md?fbclid=IwAR2dDlNyYtdbvcl4_k-rQOX_xgjiKk0ehxr_0F7xGriCveEw8mBLejWCpNI#table-of-contents)


1. ## Angular data binding

Data binding is a technique to link your data to your view layer. By binding a variable you are telling the Angular to watch it for changes. If changes are detected, the framework takes care of updating the view accordingly.

## Binding form source to view (One-way)


### Interpolation

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
```
<h1>
    It's {{ binding }}!
</h1>
```

### Property bindings

The same source as above **app.component.ts** .

To view **component.html**:
```
<input [value]="binding"/>
```

## Binding form view to source (One-way)

### Event binding

In view **component.html** we try to call event by click:
```
<button (click)="onButtonClicked()">Event binding</button>
```
To source **app.component.ts***
```
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

### Passing event

We use "\$event" syntax like:
```
<button (click)="onButtonClicked($event)">Event binding</button>
```
Parameter has to be exactly spelled like above, including the dollar sign
```
onButtonClicked(evt: MouseEvent) {
    this.name = 'Charlie'
}
```

## Binding from view to source and form source to view 

### Two way data binding

**NgModel** it's a way to get two-way-data binding. Using use a pretty special syntax: [(ngModel)]. Its a combination of the one-way- and the event binding syntax.

In source **app.component.ts**:
```
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
```
<input [(ngModel)]="ngBinding" />
 <h1>
    It's ngModel two-way-data-binding {{ngBinding}}!!
 </h1>
```

Or equivalent:
```
<input [ngModel]="nameModel" (ngModelChange)="nameModel=$event">
```

### @Input() and @Output decorator binds a property

[Goods answeres on simple examples](https://stackoverflow.com/questions/40077142/what-is-the-difference-betwen-input-and-output-in-angular2)

Source:
[Two-way-data binding ngModel](https://www.pluralsight.com/guides/one-and-two-way-data-binding-angular)
[Angular data binding](https://malcoded.com/posts/angular-data-binding/?fbclid=IwAR2MqBaP6NeS4vwHBUfYf03VaSYLpI6Vv6tBW1ImEeTTH9QjsoN-NSE_4SQ)

**[⬆ Back to Top](#table-of-contents)**

