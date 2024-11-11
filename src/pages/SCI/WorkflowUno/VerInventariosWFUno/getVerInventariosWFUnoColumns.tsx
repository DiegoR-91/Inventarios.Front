import IndeterminateCheckbox from "@/components/Input/IndeterminateCheckbox";
import { ColumnDef } from "@tanstack/react-table";

const getVerInventariosWFUnoColumns = () => {
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
      header: "ID",
      accessorKey: "id",
      meta: { type: "text" },
    },
    {
      header: "Periodo",
      accessorKey: "period",
      meta: { type: "text" },
    },
    {
      header: "Descripción",
      accessorKey: "description",
      meta: { type: "text" },
    },
    {
      header: "Jefe de Área",
      accessorKey: "areaManager",
      meta: { type: "text" },
    },
    {
      header: "Pendiente de Revisión",
      accessorKey: "pendingReview",
      meta: { type: "text" },
    },
    {
      header: "% Aprobado",
      accessorKey: "approvalPercentage",
      meta: { type: "text" },
    },
  ];
  return tableColumns;
};

export default getVerInventariosWFUnoColumns;
