import { IProductsApi } from "@/api/interfaces/Administracion/productosExcluidosInterfaces";
import instanceApi from "@/services/instanceApi";
import { useQuery } from "@tanstack/react-query";

export const getProductList = async () => {
  const res = await instanceApi.get<IProductsApi[]>(
    `/AdmProductosExc/ListarProd`
  );
  return res.data;
};

const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const fetchedData = await getProductList();
      return fetchedData;
    },

    refetchOnWindowFocus: false,
  });
};

export default useGetProducts;
