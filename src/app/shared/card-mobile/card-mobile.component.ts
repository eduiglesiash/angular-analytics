import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {MobileInterface} from '../models/mobiles.interface';

@Component({
  selector: 'app-card-mobile',
  templateUrl: './card-mobile.component.html',
  styleUrls: ['./card-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardMobileComponent implements OnInit {

  @Input() public mobile: MobileInterface;
  public cashText = 'Al plazos desde';
  constructor() {
  }

  ngOnInit() {
    // console.log(this.mobile);
  }

}
