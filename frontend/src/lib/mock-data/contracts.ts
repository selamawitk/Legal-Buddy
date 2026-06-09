export interface Contract {
  id: string;
  title: string;
  type: string;
  status: "Signed" | "Draft" | "Under Review";
  updatedAt: string;
  amount?: string;
}

export const contracts: Contract[] = [
  {
    id: "CON001",
    title: "NDA Agreement",
    type: "Non-Disclosure Agreement",
    status: "Signed",
    updatedAt: "3 mins ago",
  },
  {
    id: "CON002",
    title: "Rental Agreement",
    type: "Lease Contract",
    status: "Draft",
    updatedAt: "1 day ago",
    amount: "8,500 ETB",
  },
  {
    id: "CON003",
    title: "Employment Contract",
    type: "Labor Agreement",
    status: "Signed",
    updatedAt: "2 days ago",
  },
  {
    id: "CON004",
    title: "Service Agreement",
    type: "Freelance Contract",
    status: "Draft",
    updatedAt: "5 days ago",
  },
];