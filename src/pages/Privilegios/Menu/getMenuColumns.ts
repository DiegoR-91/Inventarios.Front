import { ColumnDef } from "@tanstack/react-table";
import ActionsMenuInput from "./components/ActionsMenuInput";
import InputSub from "./components/InputSub";

const getMenuColumns = () => {
  const tableColumns: ColumnDef<any>[] = [
    {
      header: "Acciones",
      accessorKey: "actions",
      cell: ActionsMenuInput,
      meta: { type: "text", isAdmin: true },
      size: 60,
      minSize: 60,
      maxSize: 60,
    },
    {
      header: "Menú",
      accessorKey: "menu",
      meta: { type: "text" },
    },
    {
      header: "Orden",
      accessorKey: "orden",
      meta: { type: "text" },
    },
    {
      header: "Vigente",
      accessorKey: "vigente",
      meta: { type: "text" },
    },
    {
      header: "Sub",
      accessorKey: "sub",
      cell: InputSub,
      meta: { type: "text", isAdmin: true },
    },
  ];
  return tableColumns;
};

export default getMenuColumns;
