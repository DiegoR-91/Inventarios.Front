import IndeterminateCheckbox from "@/components/Input/IndeterminateCheckbox";
import InputCheckTable from "@/components/Input/InputCheckTable";
import { ColumnDef } from "@tanstack/react-table";

const getRevisarInventariosWFUnoColumns = () => {
  const tableColumns: ColumnDef<any>[] = [
    {
      id: "select",
      /*   header: ({ table }) => (
        <div className="flex w-full px-1">
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        </div>
      ), */
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
      meta: { sticky: "left" },
      size: 60,
      minSize: 60,
      maxSize: 60,
    },
    {
      header: "Inv.",
      accessorKey: "inventory",
      meta: { type: "text", sticky: "left" },
      size: 60,
      minSize: 60,
      maxSize: 60,
      cell: InputCheckTable,
    },
    {
      header: "Ja. ap",
      accessorKey: "jaAp",
      meta: { type: "text", sticky: "left" },
      size: 60,
      minSize: 60,
      maxSize: 60,
      cell: InputCheckTable,
    },
    {
      header: "Dif.",
      accessorKey: "dif",
      meta: { type: "text", sticky: "left" },
      size: 100,
      minSize: 100,
      maxSize: 100,
    },
    {
      header: "JA Obs.",
      accessorKey: "jaObs",
      meta: { type: "text", sticky: "left" },
      size: 100,
      minSize: 100,
      maxSize: 100,
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
      header: "Dif. Ajust",
      accessorKey: "diffAdjust",
      meta: { type: "text" },
    },
    {
      header: "Inv. Inf.",
      accessorKey: "inventoryInf",
      meta: { type: "text" },
    },
    {
      header: "Sg. ap",
      accessorKey: "sgAp",
      meta: { type: "text" },
      size: 60,
      minSize: 60,
      maxSize: 60,
      cell: InputCheckTable,
    },
    {
      header: "Sg. re",
      accessorKey: "sgRe",
      meta: { type: "text" },
      size: 60,
      minSize: 60,
      maxSize: 60,
      cell: InputCheckTable,
    },
  ];
  return tableColumns;
};

export default getRevisarInventariosWFUnoColumns;
