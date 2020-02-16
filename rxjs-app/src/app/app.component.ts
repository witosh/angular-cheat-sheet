import { Component } from '@angular/core';
import { timer, interval } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user$;
  constructor(private http: HttpClient) {
    this.user$ = this.http.get('https://jsonplaceholder.typicode.com/users/1')
      .pipe(tap(() => this.log()));
  }

  ngOnInit() {
    this.user$.subscribe(user => console.log(user));
    this.user$.subscribe(user => console.log(user));
  }

  private log() {
    console.log('I want to be called only once');
  }

}
