import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subscription, Observer } from 'rxjs/Rx';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subscribe: Subscription;
  custObservableSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // const source = Observable.interval(1000);
    const myObservable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(() => {
          observer.next('first packet');
        }, 2000);
        setTimeout(() => {
          observer.next('second packet');
        }, 4000);
        setTimeout(() => {
          // observer.error('this does not work');                
          observer.complete();
        }, 5000);
        setTimeout(() => {
          observer.next('third package');
        }, 6000);
      });
    this.custObservableSubscription = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('completed'); }
    )
    // this.subscribe = source.subscribe(val => console.log(val));
    // const myNumbers = Observable.interval(1000);
    // myNumbers.subscribe(
    //   (number: number) => {
    //     console.log(number);
    //   }
    // );
  }

  ngOnDestroy() {
    // this.subscribe.unsubscribe();
    this.custObservableSubscription.unsubscribe();
  }


}
