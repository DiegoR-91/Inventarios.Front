import { ColumnDef } from "@tanstack/react-table";
import ActionsProductosExcuidosInput from "./components/ActionsProductosExcuidosInput";
import {
  IExcludedProduct,
  IProductosExcluidosApi,
} from "@/api/interfaces/Administracion/productosExcluidosInterfaces";

const getProductosExcluidosColumns = (
  deleteExcludedProduct: (idProduct: number) => Promise<IProductosExcluidosApi>
) => {
  const tableColumns: ColumnDef<IExcludedProduct>[] = [
    {
      header: "Acciones",
      accessorKey: "acciones",
      cell: ActionsProductosExcuidosInput,
      meta: { type: "text", isAdmin: true, deleteExcludedProduct },
    },
    {
      header: "Código",
      accessorKey: "code",
      meta: { type: "text" },
    },
    {
      header: "Nombre del Producto",
      accessorKey: "glosa",
      meta: { type: "text" },
    },
  ];
  return tableColumns;
};

export default getProductosExcluidosColumns;
