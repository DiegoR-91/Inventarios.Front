import { ColumnDef } from "@tanstack/react-table";
import ActionsProductosExcuidosInput from "./components/ActionsProductosExcuidosInput";

const getProductosExcluidosColumns = () => {
  const tableColumns: ColumnDef<any>[] = [
    {
      header: "Acciones",
      accessorKey: "acciones",
      cell: ActionsProductosExcuidosInput,
      meta: { type: "text", isAdmin: true },
    },
    {
      header: "Código",
      accessorKey: "code",
      meta: { type: "text" },
    },
    {
      header: "Nombre del Producto",
      accessorKey: "productName",
      meta: { type: "text" },
    },
  ];
  return tableColumns;
};

export default getProductosExcluidosColumns;
