"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  CheckCircle,
  ChevronDown,
  Circle,
  MoreHorizontal,
  Tag,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

// problem set data
// const data = [
//   {
//     id: "1",
//     title: "Two Sum",
//     difficulty: "Easy",
//     tags: ["array", "hash table"],
//     status: "solved",
//   },
//   {
//     id: "2",
//     title: "Add Two Numbers",
//     difficulty: "Medium",
//     tags: ["linked list", "math"],
//     status: "unsolved",
//   },
//   {
//     id: "3",
//     title: "Longest Substring Without Repeating Characters",
//     difficulty: "Medium",
//     tags: ["hash table", "two pointers", "string"],
//     status: "solved",
//   },
//   {
//     id: "4",
//     title: "Median of Two Sorted Arrays",
//     difficulty: "Hard",
//     tags: ["array", "binary search", "divide and conquer"],
//     status: "unsolved",
//   },
//   {
//     id: "5",
//     title: "Longest Palindromic Substring",
//     difficulty: "Medium",
//     tags: ["string", "dynamic programming"],
//     status: "unsolved",
//   },
//   {
//     id: "6",
//     title: "ZigZag Conversion",
//     difficulty: "Medium",
//     tags: ["string"],
//     status: "unsolved",
//   },
//   {
//     id: "7",
//     title: "Reverse Integer",
//     difficulty: "Easy",
//     tags: ["math"],
//     status: "solved",
//   },
//   {
//     id: "8",
//     title: "String to Integer (atoi)",
//     difficulty: "Medium",
//     tags: ["math", "string"],
//     status: "unsolved",
//   },
//   {
//     id: "9",
//     title: "Palindrome Number",
//     difficulty: "Easy",
//     tags: ["math"],
//     status: "solved",
//   },
//   {
//     id: "10",
//     title: "Regular Expression Matching",
//     difficulty: "Hard",
//     tags: ["string", "dynamic programming", "backtracking"],
//     status: "unsolved",
//   },
//   {
//     id: "11",
//     title: "Container With Most Water",
//     difficulty: "Medium",
//     tags: ["array", "two pointers"],
//     status: "unsolved",
//   },
// ];

export const columns = [
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        // TODO: Add sorting for status column
        <CheckCircle className="h-4 w-4" />
      );
    },
    cell: ({ row }) => (
      <div variant="ghost" className="flex items-center h-10 w-10">
        {row.getValue("status") === "solved" ? (
          <CheckCircle className="h-4 w-4 text-green-500" />
        ) : (
          <Circle className="h-4 w-4 text-gray-500" />
        )}
      </div>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "problem_id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          id
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("problem_id")}</div>,
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <div className="capitalize truncate">
        <Link
          href={`/app/problems/${row.getValue("problem_id")}`}
          id={`problem-${row.getValue("problem_id")}`}
          className="hover:underline hover:text-blue-500"
        >
          {row.getValue("title")}
        </Link>
      </div>
    ),
  },
  {
    accessorKey: "tags",
    header: () => <div className="text-right">Tags</div>,
    cell: ({ row }) => {
      const tags = row.getValue("tags");

      // Display a few tag names and a count of the remaining tags
      return (
        <div className="flex items-center justify-end space-x-2">
          {tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2 py-[2px]"
            >
              {tag}
            </span>
          ))}
          {tags.length > 2 && (
            <span className="text-xs">+{tags.length - 2}</span>
          )}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const id = row.getValue("problem_id");

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(
                  `${window.location.origin}/app/problems/${id}`
                )
              }
            >
              Copy link
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function DataTableDemo({ data } = { data: [] }) {
  const [sorting, setSorting] = React.useState();
  const [columnFilters, setColumnFilters] = React.useState();
  const [columnVisibility, setColumnVisibility] = React.useState();
  const [rowSelection, setRowSelection] = React.useState({});
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  if (!mounted) return null;

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter problems..."
          value={table.getColumn("title")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
