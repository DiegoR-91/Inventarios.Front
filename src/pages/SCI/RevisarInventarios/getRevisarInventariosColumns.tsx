import IndeterminateCheckbox from "@/components/Input/IndeterminateCheckbox";
import { ColumnDef } from "@tanstack/react-table";

const getRevisarInventariosColumns = () => {
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
      header: "Cancha",
      accessorKey: "court",
      meta: { type: "text" },
    },
    {
      header: "Fecha",
      accessorKey: "date",
      meta: { type: "text" },
    },
    {
      header: "Contratista",
      accessorKey: "contractor",
      meta: { type: "text" },
    },
    {
      header: "Especie",
      accessorKey: "specie",
      meta: { type: "text" },
    },
    {
      header: "Producto",
      accessorKey: "product",
      meta: { type: "text" },
    },
    {
      header: "Tipo Inv.",
      accessorKey: "inventoryType",
      meta: { type: "text" },
    },
    {
      header: "Prod. Acum.",
      accessorKey: "prodAcum",
      meta: { type: "text" },
    },
    {
      header: "Saldo Inicial",
      accessorKey: "initialBalance",
      meta: { type: "text" },
    },
    {
      header: "Saldo Final",
      accessorKey: "finalBalance",
      meta: { type: "text" },
    },
    {
      header: "M3 Inv.",
      accessorKey: "inventoryM3",
      meta: { type: "text" },
    },
    {
      header: "Dif.",
      accessorKey: "dif",
      meta: { type: "text" },
    },
    {
      header: "Dif. Ajust",
      accessorKey: "diffAdjust",
      meta: { type: "text" },
    },
    {
      header: "Inv.",
      accessorKey: "inventory",
      meta: { type: "text" },
    },
    {
      header: "Inv. Inf.",
      accessorKey: "inventoryInf",
      meta: { type: "text" },
    },
    {
      header: "Ja. ap",
      accessorKey: "jaAp",
      meta: { type: "text" },
    },
    {
      header: "Ja. re",
      accessorKey: "jaRe",
      meta: { type: "text" },
    },
  ];
  return tableColumns;
};

export default getRevisarInventariosColumns;
