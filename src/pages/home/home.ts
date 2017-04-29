import { Component } from '@angular/core';
import {MyService} from "../../providers/my-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private ms: MyService) {

  }

  produceIssue() {
    this.ms.produceIssue();
  }

}
