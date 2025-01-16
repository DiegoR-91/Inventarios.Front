import { productosExcluidosSelectAdapter } from "@/api/adapters/Administracion/productosExcluidosAdapter";
import { IProductsApi } from "@/api/interfaces/Administracion/productosExcluidosInterfaces";
import instanceApi from "@/services/instanceApi";
import { useQuery } from "@tanstack/react-query";

export const getProductList = async () => {
  const res = await instanceApi.get<IProductsApi[]>(
    `/AdmProductosExc/ListarProd`
  );
  const productsFormatted = productosExcluidosSelectAdapter(res.data);
  return productsFormatted;
};

const useGetProductsSelect = () => {
  return useQuery({
    queryKey: ["productsSelect"],
    queryFn: async () => {
      const fetchedData = await getProductList();
      return fetchedData;
    },

    refetchOnWindowFocus: false,
  });
};

export default useGetProductsSelect;
