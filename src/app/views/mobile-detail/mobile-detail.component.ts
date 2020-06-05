import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CatalogueService} from '../../services/catalogue.service';
import {Observable} from 'rxjs';
import {MobileInterface} from '../../shared/models/mobiles.interface';

@Component({
  selector: 'app-mobile-detail',
  templateUrl: './mobile-detail.component.html',
  styleUrls: ['./mobile-detail.component.scss']
})
export class MobileDetailComponent implements OnInit, OnDestroy {

  public mobile: MobileInterface;
  private mobile$;
  private id: number;

  constructor(
    private route: ActivatedRoute,
    private catalogueSrv: CatalogueService
  ) {
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.mobile$ = this.catalogueSrv.getTerminal(this.id)
      .subscribe(terminal => {
        this.mobile = terminal[0];
      });
  }

  ngOnDestroy() {
    this.mobile$.unsubscribe();
  }
}
