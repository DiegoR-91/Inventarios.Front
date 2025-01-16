import PaginatedTable from "@/components/Table/PaginatedTable";
import FiltrosProductosExcluidos from "./FiltrosProductosExcluidos";
import getProductosExcluidosColumns from "./getProductosExcluidosColumns";
import { useState } from "react";
import { PaginationState, SortingState } from "@tanstack/react-table";
import useGetProductosExcluidos from "./hooks/useGetProductosExcluidos";
import Loading from "@/components/Loading/Loading";
import useEliminarProductoExcluido from "./hooks/useEliminarProductoExcluido";

const ProductosExcluidos = () => {
  const [filters, setFilters] = useState<any>();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10,
  });
  const [rowSize, setRowSize] = useState<number>(10);
  const { data, isLoading } = useGetProductosExcluidos(
    sorting,
    pagination,
    rowSize,
    filters
  );
  const { mutateAsync: mutateEliminarProductoExcluido } =
    useEliminarProductoExcluido();
  const tableColumnsProductosExcluidos = getProductosExcluidosColumns(
    mutateEliminarProductoExcluido
  );

  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        <Loading color="success" size="sm" />;
      </div>
    );
  if (!data) return;

  return (
    <div className="flex w-full h-full pt-5">
      <div className="flex flex-col w-full h-full">
        <FiltrosProductosExcluidos setFilters={setFilters} />
        <div className="pt-5">
          <PaginatedTable
            columns={tableColumnsProductosExcluidos}
            data={data}
            sorting={sorting}
            setSorting={setSorting}
            pagination={pagination}
            setPagination={setPagination}
            rowSize={rowSize}
            setRowSize={setRowSize}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductosExcluidos;
