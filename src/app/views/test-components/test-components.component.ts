import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-components',
  templateUrl: './test-components.component.html',
  styleUrls: ['./test-components.component.scss']
})
export class TestComponentsComponent {

  public listItem = [
    {value: 'val1', name: 'name1', checked: false},
    {value: 'val2', name: 'name2', checked: false},
    {value: 'val3', name: 'name3', checked: false},
    {value: 'val4', name: 'name4', checked: false},
    {value: 'val5', name: 'name5', checked: false},
    {value: 'val6', name: 'name6', checked: false},
    {value: 'val7', name: 'name7', checked: false}
    ];
  public valueInput = 'val2';

  clickEvent(event) {
    console.log(`clickEvent: ${event}`);
  }
  validateEvent(event) {
    console.log(`clickEvent: ${event}`);
  }
  changeSelectEvent(event) {
    console.log(`clickEvent: ${event}`);
    console.log(`NgModel ${this.valueInput}`);
  }
}
