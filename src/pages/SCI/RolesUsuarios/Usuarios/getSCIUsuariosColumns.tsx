import IndeterminateCheckbox from "@/components/Input/IndeterminateCheckbox";
import { ColumnDef } from "@tanstack/react-table";

const getSCIUsuariosColumns = () => {
  const tableColumns: ColumnDef<any>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <div className="flex w-full px-1">
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        </div>
      ),
      cell: ({ row }) => (
        <div className="px-1">
          <IndeterminateCheckbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        </div>
      ),
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
      accessorKey: "name",
      meta: { type: "text" },
    },
    {
      header: "Rol",
      accessorKey: "rol",
      meta: { type: "text" },
    },
  ];
  return tableColumns;
};

export default getSCIUsuariosColumns;
