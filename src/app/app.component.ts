import { Component } from '@angular/core';
import { DataService } from './my.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My Post Data';
  data: any;
  constructor(private myService: DataService) {}
  ngOnInit() {
    this.myService.getData().subscribe((item) => {
      this.data = item;
    });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
