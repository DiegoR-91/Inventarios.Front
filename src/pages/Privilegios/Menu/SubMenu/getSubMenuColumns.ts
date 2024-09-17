import { ColumnDef } from "@tanstack/react-table";
import ActionsSubMenuInput from "./components/ActionsSubMenuInput";

const getSubMenuColumns = () => {
  const tableColumns: ColumnDef<any>[] = [
    {
      header: "Acciones",
      accessorKey: "actions",
      cell: ActionsSubMenuInput,
      meta: { type: "text", isAdmin: true },
      size: 60,
      minSize: 60,
      maxSize: 60,
    },
    {
      header: "SubMenú",
      accessorKey: "subMenu",
      meta: { type: "text" },
    },
    {
      header: "Link",
      accessorKey: "link",
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
  ];
  return tableColumns;
};

export default getSubMenuColumns;
