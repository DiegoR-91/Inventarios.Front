import { SortingState } from "@tanstack/react-table";

export interface SelectOptions {
  value: string | number;
  label: string;
}
export interface QueryPaginatedProps {
  page: number;
  cantidadRegistros: number;
  sorting: SortingState;
}
