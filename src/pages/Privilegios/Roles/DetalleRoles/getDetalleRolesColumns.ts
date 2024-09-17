import { ColumnDef } from "@tanstack/react-table";
import ActionsDetalleRolesInput from "./components/ActionsDetalleRolesInput";

const getDetalleRolesColumns = () => {
  const tableColumns: ColumnDef<any>[] = [
    {
      header: "Acciones",
      accessorKey: "actions",
      cell: ActionsDetalleRolesInput,
      meta: { type: "text", isAdmin: true },
      size: 60,
      minSize: 60,
      maxSize: 60,
    },
    {
      header: "Cód. Menu",
      accessorKey: "codeMenu",
      meta: { type: "text" },
    },
    {
      header: "Menú",
      accessorKey: "menu",
      meta: { type: "text" },
    },
    {
      header: "Cód. SubMenú",
      accessorKey: "codeMenu",
      meta: { type: "text" },
    },
    {
      header: "SubMenú",
      accessorKey: "subMenu",
      meta: { type: "text" },
    },
    {
      header: "Actualiza",
      accessorKey: "update",
      meta: { type: "text" },
    },
  ];
  return tableColumns;
};

export default getDetalleRolesColumns;
