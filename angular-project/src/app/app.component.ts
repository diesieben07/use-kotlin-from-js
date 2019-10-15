import { Component } from '@angular/core';
import {commonFun} from 'kotlin-mpp-npm-demo-ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  textFromCommon = commonFun();

}
