import { ColumnDef } from "@tanstack/react-table";
import ActionsRolesInput from "./components/ActionsRolesInput";

const getRolesColumns = () => {
  const tableColumns: ColumnDef<any>[] = [
    {
      header: "Acciones",
      accessorKey: "actions",
      cell: ActionsRolesInput,
      meta: { type: "text", isAdmin: true },
      size: 30,
      minSize: 30,
      maxSize: 30,
    },
    {
      header: "Código",
      accessorKey: "code",
      meta: { type: "text" },
      size: 30,
      minSize: 30,
      maxSize: 30,
    },
    {
      header: "Glosa",
      accessorKey: "glosa",
      meta: { type: "text" },
      size: 30,
      minSize: 30,
      maxSize: 30,
    },
  ];
  return tableColumns;
};

export default getRolesColumns;
