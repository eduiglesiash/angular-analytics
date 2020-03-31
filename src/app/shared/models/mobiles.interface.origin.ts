export interface MobilesInterface {
  'type': 'G';
  'orden': 9;
  'id': 76609216;
  'nombre': 'Apple iPhone XS';
  'ordenPagoInicial': 1.33;
  'ordenCuotaMensual': 50;
  'listTerminals': [
    {
      'ordenGrupo': 3,
      'ordenTerminal': [
        {
          'typeOrder': 0,
          'position': 78
        },
        {
          'typeOrder': 1,
          'position': 88
        }
      ],
      'idTerminal': 76609167,
      'idTipoTerminal': 3,
      'idGrupo': 76609216,
      'sap': '313501',
      'color': 'Gris Espacial',
      'codigoColor': '#484848',
      'capacidad': '256GB',
      'capacidadValorUnidad': {
        'valor': '256',
        'unidad': 'GB'
      },
      'imagenListado': '/c/tienda/tol/img/1435658231123/mobile-frontal-xs-gris-espacial/',
      'textoImagenListado': 'iPhone XS Gris Espacial  256GB',
      'listaIconos': [
        {
          'textoIcono': 'Apple',
          'imagenIcono': '/c/tienda/tol/img/1435594590574/icono_apple'
        },
        {
          'textoIcono': '4G+',
          'imagenIcono': '/c/tienda/tol/img/1435594589637/icono_4g_plus'
        }
      ],
      'modelo': 'iPhone XS',
      'so': 'IOS',
      'altImagenSo': 'IOS',
      'marca': 'Apple',
      'idMarca': 3,
      'idPrecio': 263180524,
      'pagoAlContadoConIva': 1200,
      'pagoAlContadoSinIva': 991.74,
      'cuotaMensualConIva': 50,
      'cuotaMensualSinIva': 41.32,
      'pagoInicialConIva': 0,
      'pagoInicialSinIva': 0,
      'canonConIva': 1.33,
      'canonSinIva': 1.1,
      'numMeses': 24,
      'catalogOffer': '168443579',
      'nombreTarifa': 'Ilimitada',
      'listaPromos': [
        {
          'id': 501267
        },
        {
          'id': 444080
        }
      ]
    },
    {
      'ordenGrupo': 4,
      'ordenTerminal': [
        {
          'typeOrder': 0,
          'position': 81
        },
        {
          'typeOrder': 1,
          'position': 100
        }
      ],
      'idTerminal': 76609175,
      'idTipoTerminal': 3,
      'idGrupo': 76609216,
      'sap': '313498',
      'color': 'Gris Espacial',
      'codigoColor': '#484848',
      'capacidad': '64GB',
      'capacidadValorUnidad': {
        'valor': '64',
        'unidad': 'GB'
      },
      'imagenListado': '/c/tienda/tol/img/1435658231123/mobile-frontal-xs-gris-espacial/',
      'textoImagenListado': 'iPhone XS Gris Espacial 64GB',
      'listaIconos': [
        {
          'textoIcono': 'Apple',
          'imagenIcono': '/c/tienda/tol/img/1435594590574/icono_apple'
        },
        {
          'textoIcono': '4G+',
          'imagenIcono': '/c/tienda/tol/img/1435594589637/icono_4g_plus'
        }
      ],
      'modelo': 'iPhone XS',
      'so': 'IOS',
      'altImagenSo': 'IOS',
      'marca': 'Apple',
      'idMarca': 3,
      'idPrecio': 263180522,
      'pagoAlContadoConIva': 1044,
      'pagoAlContadoSinIva': 862.81,
      'cuotaMensualConIva': 43.5,
      'cuotaMensualSinIva': 35.95,
      'pagoInicialConIva': 0,
      'pagoInicialSinIva': 0,
      'canonConIva': 1.33,
      'canonSinIva': 1.1,
      'numMeses': 24,
      'catalogOffer': '168443579',
      'nombreTarifa': 'Ilimitada',
      'listaPromos': [
        {
          'id': 501267
        },
        {
          'id': 444080
        }
      ]
    }
  ];
}

export interface ListTerminal {
  ordenGrupo: number;
  ordenTerminal: OrdenTerminal[];
  idTerminal: number;
  idTipoTerminal: number;
  idGrupo: number;
  sap: string;
  color: string;
  codigoColor: string;
  capacidad: string;
  capacidadValorUnidad: CapacidadValorUnidad;
  imagenListado: string;
  textoImagenListado: string;
  listaIconos: ListaIcono[];
  modelo: string;
  so: string;
  altImagenSo: string;
  marca: string;
  idMarca: number;
  idPrecio: number;
  pagoAlContadoConIva: number;
  pagoAlContadoSinIva: number;
  cuotaMensualConIva: number;
  cuotaMensualSinIva: number;
  pagoInicialConIva: number;
  pagoInicialSinIva: number;
  canonConIva: number;
  canonSinIva: number;
  numMeses: number;
  catalogOffer: string;
  nombreTarifa: string;
  listaPromos: ListaPromo[];
}

export interface CapacidadValorUnidad {
  valor: string;
  unidad: string;
}

export interface ListaIcono {
  textoIcono: string;
  imagenIcono: string;
}

export interface ListaPromo {
  id: number;
}

export interface OrdenTerminal {
  typeOrder: number;
  position: number;
}

export interface MobileOriginInterface {
  type: string;
  orden: number;
  id: number;
  nombre: string;
  ordenPagoInicial: number;
  ordenCuotaMensual: number;
  listTerminals: ListTerminal[];
}

