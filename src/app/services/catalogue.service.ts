import {Injectable} from '@angular/core';
// @ts-ignore
import Catalogue from '../../assets/data/order-default.json';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {MobileInterface} from '../shared/models/mobiles.interface';
import {MobileOriginInterface} from '../shared/models/mobiles.interface.origin';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  private urlGetCatalogue = 'https://www.vodafone.es/c/srv/vf-back-catalogo/api/ftol/terminal/terminallist/?clientType=0&shopType=7&registerType=0&sceneType=0&contractType=0&lineType=0&terminalType=3';

  private catalogueObs = new Observable(observer => {
    const catalogueMobile = Catalogue;
    setTimeout(() => {
      // console.log(catalogueMobile);
      observer.next(catalogueMobile);
    }, Math.random() * 10);
  });
  protected catalogueMobile: Array<MobileInterface>;

  constructor(
    private http: HttpClient
  ) {
  }

  public getListTerminals(): Observable<MobileInterface[]> {
    // return this.http.get: Observable<any>(this.urlGetCatalogue)
    return this.catalogueObs
      .pipe(
        // @ts-ignore
        map(({order, items, promos}) => {
          this.catalogueMobile =
            items.map((item: MobileOriginInterface) => {
              return item.listTerminals.map(terminal => {
                // console.log({terminal});
                const mobile: MobileInterface = {
                  name: item.nombre,
                  id: item.id,
                  orderInitialPaid: item.ordenPagoInicial,
                  monthlyFeeOrder: item.ordenCuotaMensual,
                  idTerminal: terminal.idTerminal,
                  idTypeTerminal: terminal.idTerminal,
                  idGroup: terminal.idGrupo,
                  sap: terminal.sap,
                  color: terminal.color,
                  codeColor: terminal.codigoColor,
                  capacity: terminal.capacidad,
                  imgList: terminal.imagenListado,
                  textImgList: terminal.textoImagenListado,
                  iconList: terminal.listaIconos ? terminal.listaIconos.map(icon => icon.imagenIcono) : [],
                  model: terminal.modelo,
                  brand: terminal.marca,
                  idBrand: terminal.idMarca,
                  idPrice: terminal.idPrecio,
                  cashPaymentWithVat: terminal.pagoAlContadoConIva,
                  cashPaymentWithoutVat: terminal.pagoAlContadoSinIva,
                  initialPaymentWithVat: terminal.pagoInicialConIva,
                  initialPaymentWithoutVat: terminal.pagoInicialSinIva,
                  canonWithVat: terminal.canonConIva,
                  canonWithoutVat: terminal.canonSinIva,
                  paymentPostponedMonth: terminal.numMeses,
                  catalogueOffer: terminal.catalogOffer,
                  nameRate: terminal.nombreTarifa,
                  promotionsList: terminal.listaPromos.map(offer => offer.id),
                };
                return mobile;
              });
            });
          // @ts-ignore
          return this.catalogueMobile.flat();
        })
      );
  }

  public getTerminal(id): any {
    //TODO: Cambiar esta forma de obtener el terminal y llamar a la URL oficial
    // https://www.vodafone.es/c/srv/vf-back-catalogo/api/ftol/terminal/terminaldetail/?clientType=0&shopType=7&registerType=2&sceneType=0&contractType=0&sap=313811&lineType=0&terminalType=3
    // return this.http.get: Observable<any>(this.urlGetCatalogue)
    return this.catalogueObs
      .pipe(
        // @ts-ignore
        map(({order, items, promos}) => {
          this.catalogueMobile =
            items.map((item: MobileOriginInterface) => {
              return item.listTerminals.map(terminal => {
                // console.log({terminal});
                const mobile: MobileInterface = {
                  name: item.nombre,
                  id: item.id,
                  orderInitialPaid: item.ordenPagoInicial,
                  monthlyFeeOrder: item.ordenCuotaMensual,
                  idTerminal: terminal.idTerminal,
                  idTypeTerminal: terminal.idTerminal,
                  idGroup: terminal.idGrupo,
                  sap: terminal.sap,
                  color: terminal.color,
                  codeColor: terminal.codigoColor,
                  capacity: terminal.capacidad,
                  imgList: terminal.imagenListado,
                  textImgList: terminal.textoImagenListado,
                  iconList: terminal.listaIconos ? terminal.listaIconos.map(icon => icon.imagenIcono) : [],
                  model: terminal.modelo,
                  brand: terminal.marca,
                  idBrand: terminal.idMarca,
                  idPrice: terminal.idPrecio,
                  cashPaymentWithVat: terminal.pagoAlContadoConIva,
                  cashPaymentWithoutVat: terminal.pagoAlContadoSinIva,
                  initialPaymentWithVat: terminal.pagoInicialConIva,
                  initialPaymentWithoutVat: terminal.pagoInicialSinIva,
                  canonWithVat: terminal.canonConIva,
                  canonWithoutVat: terminal.canonSinIva,
                  paymentPostponedMonth: terminal.numMeses,
                  catalogueOffer: terminal.catalogOffer,
                  nameRate: terminal.nombreTarifa,
                  promotionsList: terminal.listaPromos.map(offer => offer.id),
                };
                return mobile;
              });
            });
          // @ts-ignore
          return this.catalogueMobile.flat().filter((terminal: MobileInterface) => terminal.idTerminal === id);
        })
      );
  }
}
