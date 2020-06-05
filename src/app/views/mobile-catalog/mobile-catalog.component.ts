import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {CatalogueService} from '../../services/catalogue.service';
import {MobileInterface} from '../../shared/models/mobiles.interface';
import {TEXT} from '../../i18n/text.app';

@Component({
  selector: 'app-mobile-catalog',
  templateUrl: './mobile-catalog.component.html',
  styleUrls: ['./mobile-catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileCatalogComponent implements OnInit, OnDestroy {

  public title = 'Catálogo de móviles';
  public orderTxt = 'Ordenar por';
  public filterTxt = 'Filtrar por';
  public filterTypes: Array<string> = [
    'Por Defecto',
    TEXT.filtersOrderBy.lowestPrice,
    TEXT.filtersOrderBy.lowerFee,
    TEXT.filtersOrderBy.higherFee,
    TEXT.filtersOrderBy.highestPrice,
  ];
  public filterType: string = null;
  public filterBrands: Array<string> = [
    TEXT.filtersByBrand.apple,
    TEXT.filtersByBrand.samsung,
    TEXT.filtersByBrand.huawei,
    TEXT.filtersByBrand.xiaomi,
    TEXT.filtersByBrand.lg,
    TEXT.filtersByBrand.sony,
    TEXT.filtersByBrand.nokia,
    TEXT.filtersByBrand.motorola,
    TEXT.filtersByBrand.palm,
    TEXT.filtersByBrand.vodafone,
    TEXT.filtersByBrand.alcatel,
    TEXT.filtersByBrand.wiko,
    TEXT.filtersByBrand.landRover,
    TEXT.filtersByBrand.oppo,
    TEXT.filtersByBrand.fairphone
  ];
  public filterBrand: Array<string>;
  private catalogue$;
  public catalogTerminals: Array<MobileInterface> = null;

  constructor(
    private catalogueSrv: CatalogueService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.catalogue$ = this.catalogueSrv.getListTerminals()
      .subscribe(terminals => {
        this.catalogTerminals = terminals;
        this.cdr.detectChanges();
      });

  }

  filterOrderBySelected(type) {
    this.filterType = type;
  }

  filterBrandsSelected(brand) {

    this.filterBrand = this.filterBrands.filter(item => brand[item]);
    console.log(this.filterBrand);
  }

  orderBy(type, brands = []) {

    let catalogTerminals = [...this.catalogTerminals];
    const terminals = [];
    // Filter terminals
    if (brands.length > 0) {
      brands.map(brand =>
        terminals.push(
          this.catalogTerminals
            .filter((terminal: MobileInterface) => terminal.brand.toLowerCase().trim() === brand.toLowerCase().trim())
        )
      );
      // @ts-ignore
      catalogTerminals = terminals.flat();
    }

    switch (type) {
      case TEXT.filtersOrderBy.lowestPrice:
        console.log(TEXT.filtersOrderBy.lowestPrice);
        // Second order
        return catalogTerminals.sort((a: MobileInterface, b: MobileInterface) => {
          return a.cashPaymentWithVat > b.cashPaymentWithVat ? 1 : a.cashPaymentWithVat === b.cashPaymentWithVat ? 0 : -1;
        });
      case TEXT.filtersOrderBy.lowerFee:
        return catalogTerminals.sort((a: MobileInterface, b: MobileInterface) => {
          return a.monthlyFeeOrder > b.monthlyFeeOrder ? 1 : a.monthlyFeeOrder === b.monthlyFeeOrder ? 0 : -1;
        });
      case TEXT.filtersOrderBy.higherFee:
        console.log(TEXT.filtersOrderBy.higherFee);
        return catalogTerminals.sort((a: MobileInterface, b: MobileInterface) => {
          return a.monthlyFeeOrder < b.monthlyFeeOrder ? 1 : a.monthlyFeeOrder === b.monthlyFeeOrder ? 0 : -1;
        });
      case TEXT.filtersOrderBy.highestPrice:
        console.log(TEXT.filtersOrderBy.highestPrice);
        return catalogTerminals.sort((a: MobileInterface, b: MobileInterface) => {
          return a.cashPaymentWithVat < b.cashPaymentWithVat ? 1 : a.cashPaymentWithVat === b.cashPaymentWithVat ? 0 : -1;
        });
      default:
        return catalogTerminals;
    }
  }

  ngOnDestroy() {
    this.catalogue$.unsubscribe();
  }
}
