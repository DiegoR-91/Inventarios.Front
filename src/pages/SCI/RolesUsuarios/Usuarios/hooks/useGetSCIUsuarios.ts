import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ColumnSort, SortingState } from "@tanstack/react-table";
import { QueryPaginatedProps } from "@/interfaces/commons";
import { SCIUsuariosDataMock } from "@/utils/dataMock";

interface IgetSCIUsuarios extends QueryPaginatedProps {
  filters?: any;
}

export const getSCIUsuarios = async ({
  page,
  cantidadRegistros,
  sorting,
  filters,
}: IgetSCIUsuarios) => {
  /*   const res = await instanceApi.get<IRecentsApplicationsListApi>(
    `/Formulario/ListarSolicitudes`,
    {
      params: {
        Pagina: page,
        CantidadRegistros: cantidadRegistros,
        ...filtersFormated,
      },
    }
  );

  const data = recentApplicationsAdapter(res.data.lista); */
  const data = SCIUsuariosDataMock;

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

  const hasNextPage = true;
  const previusPage = false;
  const totalPages = 10;
  const totalItems = 100;

  const verInventarioList: any = {
    nextPage: hasNextPage ? page + 1 : null,
    previusPage: previusPage ? page - 1 : null,
    results: data,
    totalItems,
    totalPages,
  };

  return verInventarioList;
};

const useGetSCIUsuarios = (
  sorting: SortingState,
  pagination: { pageIndex: number; pageSize: number },
  cantidadRegistros: number,
  filters?: any
) => {
  return useQuery({
    queryKey: [
      "SCIUsuarios",
      sorting,
      pagination.pageIndex,
      cantidadRegistros,
      filters,
    ],
    queryFn: async () => {
      const fetchedData = await getSCIUsuarios({
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

export default useGetSCIUsuarios;
