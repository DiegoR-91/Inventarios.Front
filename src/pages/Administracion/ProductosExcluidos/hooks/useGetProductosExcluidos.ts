import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ColumnSort, SortingState } from "@tanstack/react-table";
import { QueryPaginatedProps } from "@/interfaces/commons";
import {
  IExcludedProductsList,
  IProductosExcluidosListApi,
} from "@/api/interfaces/Administracion/productosExcluidosInterfaces";
import instanceApi from "@/services/instanceApi";
import { productosExcluidosAdapter } from "@/api/adapters/Administracion/productosExcluidosAdapter";

interface IGetProductosExcluidos extends QueryPaginatedProps {
  filters?: any;
}

export const getProductosExcluidos = async ({
  page,
  cantidadRegistros,
  sorting,
  filters,
}: IGetProductosExcluidos) => {
  const res = await instanceApi.post<IProductosExcluidosListApi>(
    `/AdmProductosExc/Listar`,
    {
      listar: {
        Pagina: page,
        CantidadRegistros: cantidadRegistros,
        ...filters,
      },
    }
  );

  const data = productosExcluidosAdapter(res.data.lista);

  if (sorting.length) {
    const sort = sorting[0] as ColumnSort;
    const { id, desc } = sort as {
      id: keyof any;
      desc: boolean;
    };
    data.sort((a: any, b: any) => {
      if (desc) {
        return a[id] < b[id] ? 1 : -1;
      }
      return a[id] > b[id] ? 1 : -1;
    });
  }

  const hasNextPage = res.data.pagSiguiente !== null;
  const previusPage = res.data.pagPrevia !== null;
  const totalPages = res.data.total;

  const usersList: IExcludedProductsList = {
    nextPage: hasNextPage ? page + 1 : null,
    previusPage: previusPage ? page - 1 : null,
    results: data,
    totalItems: res.data.total,
    totalPages,
  };

  return usersList;
};

const useGetProductosExcluidos = (
  sorting: SortingState,
  pagination: { pageIndex: number; pageSize: number },
  cantidadRegistros: number,
  filters?: any
) => {
  return useQuery({
    queryKey: [
      "excludedProducts",
      sorting,
      pagination.pageIndex,
      cantidadRegistros,
      filters,
    ],
    queryFn: async () => {
      const fetchedData = await getProductosExcluidos({
        page: pagination.pageIndex,
        cantidadRegistros,
        sorting,
        filters,
      });
      return fetchedData;
    },
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetProductosExcluidos;
