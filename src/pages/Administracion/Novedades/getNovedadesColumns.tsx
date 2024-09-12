import { ColumnDef } from "@tanstack/react-table";
import ActionsNovedadesInput from "./components/ActionsNovedadesInput";

const getNovedadesColumns = () => {
  const tableColumns: ColumnDef<any>[] = [
    {
      header: "Acciones",
      accessorKey: "acciones",
      cell: ActionsNovedadesInput,
      meta: { type: "text", isAdmin: true },
    },
    {
      header: "Código",
      accessorKey: "code",
      meta: { type: "text" },
    },
    {
      header: "Glosa",
      accessorKey: "glosa",
      meta: { type: "text" },
    },
    {
      header: "Error",
      accessorKey: "error",
      meta: { type: "text" },
    },
  ];
  return tableColumns;
};

export default getNovedadesColumns;
