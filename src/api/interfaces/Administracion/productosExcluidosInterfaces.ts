export interface IProductosExcluidosListApi {
  total: number;
  pagSiguiente: number;
  pagPrevia: null;
  lista: IProductosExcluidosApi[];
}
export interface IProductosExcluidosApi {
  id: number;
  codigo: number;
  glosa: string;
  fechA_USUARIO: string;
  usuariO_ID: number;
}

export interface IExcludedProductsList {
  nextPage: number | null;
  previusPage: number | null;
  results: IExcludedProduct[];
  totalPages: number;
  totalItems?: number;
}
export interface IExcludedProduct {
  id: number;
  code: number;
  glosa: string;
  UserDate: string;
  UserId: number;
}

export interface IProductsApi {
  id: number;
  nombre: string;
}

export interface ICrearProductoExcluidoApi {
  codigo: number;
  glosa: string;
  usuariO_ID: number;
}
export interface ICreateExcludedProduct {
  code: number;
  glosa: string;
  UserId: number;
}

export interface IExcludedProductsFiltersList {
  paginationFilters: [IPaginationFilters] | [];
}
export interface IPaginationFilters {
  filtrarPor: string;
  textoBusqueda: string;
}
