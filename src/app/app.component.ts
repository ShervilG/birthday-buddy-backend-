import { Component } from '@angular/core';
import { TestService } from './services/test.service';
import { Observable, of as observableOf } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'birthday-buddy-frontend';
  tempData$: Observable<string> = observableOf('');

  constructor(private readonly testService: TestService) {}

  ngOnInit(): void {
   this.tempData$ = this.testService.pingBackendService();
  }
}
