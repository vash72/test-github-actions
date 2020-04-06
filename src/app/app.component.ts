import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-github-actions';
  hello = 'Ciao belli ';

  ngOnInit(): void {

    setInterval(() => {

      this.hello = faker.fake('Ciao {{name.lastName}}, {{name.firstName}} {{name.suffix}}');

    }, 1500);

  }
}
