"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Details = {

  fullName: string
  mailId: string
  phoneno:string
  createdAt:string
}

export const columns: ColumnDef<Details>[] = [
  {
    accessorKey: "fullName",
    header: "Full Name",
  },
  {
    accessorKey: "mailId",
    header: "Email",
  },
  {
    accessorKey: "phoneno",
    header: "Phone Number",
  },
  {
    accessorKey:"createdAt",
    header:"Date"
  }
]