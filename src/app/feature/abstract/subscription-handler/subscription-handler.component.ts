import {Component, OnDestroy} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  template: ''
})
export class SubscriptionHandlerComponent implements OnDestroy {
  /**
   * Subject to remove all observers when this component is destroyed
   */
  protected destroy$ = new Subject<boolean>();

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
