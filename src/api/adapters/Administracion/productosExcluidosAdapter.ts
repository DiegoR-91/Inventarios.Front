import {
  IExcludedProduct,
  IProductosExcluidosApi,
  IProductsApi,
} from "@/api/interfaces/Administracion/productosExcluidosInterfaces";
import { SelectOptions } from "@/interfaces/commons";

export const productosExcluidosAdapter = (data: IProductosExcluidosApi[]) => {
  const excludedProductsFormatted: IExcludedProduct[] = data.map(
    (excludedProduct: IProductosExcluidosApi) => {
      return {
        id: excludedProduct.id,
        code: excludedProduct.codigo,
        glosa: excludedProduct.glosa,
        UserDate: excludedProduct.fechA_USUARIO,
        UserId: excludedProduct.usuariO_ID,
      };
    }
  );
  return excludedProductsFormatted;
};

export const productosExcluidosSelectAdapter = (data: IProductsApi[]) => {
  const dataFormatted: SelectOptions[] = data.map((product: IProductsApi) => {
    return {
      value: product.id,
      label: product.nombre,
    };
  });
  return dataFormatted;
};
