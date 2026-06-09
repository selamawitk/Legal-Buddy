export interface LegalDocument {
  id: string;
  title: string;
  type: "Civil Code" | "Proclamation" | "Commercial Code";
  lastUpdated: string;
  status: "Active" | "Archived";
}

export const documents: LegalDocument[] = [
  {
    id: "DOC001",
    title: "Civil Code of Ethiopia",
    type: "Civil Code",
    lastUpdated: "May 25, 2024",
    status: "Active",
  },
  {
    id: "DOC002",
    title: "Labor Proclamation 377/2003",
    type: "Proclamation",
    lastUpdated: "May 18, 2024",
    status: "Active",
  },
  {
    id: "DOC003",
    title: "Commercial Code",
    type: "Commercial Code",
    lastUpdated: "May 15, 2024",
    status: "Active",
  },
  {
    id: "DOC004",
    title: "Tax Proclamation 979/2016",
    type: "Proclamation",
    lastUpdated: "May 10, 2024",
    status: "Active",
  },
  {
    id: "DOC005",
    title: "Investment Proclamation 1180/2020",
    type: "Proclamation",
    lastUpdated: "May 8, 2024",
    status: "Active",
  },
];