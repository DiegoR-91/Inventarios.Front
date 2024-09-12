import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import {
  ColumnDef,
  PaginationState,
  SortingState,
} from "@tanstack/react-table";
import { Dispatch } from "react";

export interface PaginatedTableProps<T> {
  columns: ColumnDef<T>[];
  data: any;
  isLoading?: boolean;
  isFetching?: boolean;
  isFetchingNextPage?: boolean;
  hasNextPage?: boolean;
  fetchNextPage?: (
    options?: FetchNextPageOptions
  ) => Promise<InfiniteQueryObserverResult<any, Error>>;
  sorting: SortingState;
  setSorting: Dispatch<React.SetStateAction<SortingState>>;
  pagination: PaginationState;
  setPagination: Dispatch<React.SetStateAction<PaginationState>>;
  rowSize: number;
  setRowSize: Dispatch<React.SetStateAction<number>>;
  setDataSelected?: Dispatch<React.SetStateAction<any>>;
}
