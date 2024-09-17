import { ColumnDef } from "@tanstack/react-table";
import ActionsUsuariosInput from "./components/ActionsUsuariosInput";

const getUsuariosColumns = () => {
  const tableColumns: ColumnDef<any>[] = [
    {
      header: "Acciones",
      accessorKey: "actions",
      cell: ActionsUsuariosInput,
      meta: { type: "text", isAdmin: true },
      size: 60,
      minSize: 60,
      maxSize: 60,
    },
    {
      header: "RUT",
      accessorKey: "rut",
      meta: { type: "text" },
    },
    {
      header: "Nombre",
      accessorKey: "nombre",
      meta: { type: "text" },
    },
    {
      header: "Username",
      accessorKey: "username",
      meta: { type: "text" },
    },
    {
      header: "Rol",
      accessorKey: "rol",
      meta: { type: "text", isAdmin: true },
    },
    {
      header: "Activo",
      accessorKey: "activo",
      meta: { type: "text", isAdmin: true },
    },
  ];
  return tableColumns;
};

export default getUsuariosColumns;
