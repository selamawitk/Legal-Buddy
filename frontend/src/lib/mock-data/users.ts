export interface User {
  id: string;
  name: string;
  email: string;
  plan: "Free" | "Pro";
  status: "Active" | "Inactive";
  joinedDate: string;
}

export const users: User[] = [
  {
    id: "USR001",
    name: "abebe",
    email: "abebe@gmail.com",
    plan: "Pro",
    status: "Active",
    joinedDate: "May 20, 2024",
  },
  {
    id: "USR002",
    name: "selam",
    email: "selam@gmail.com",
    plan: "Free",
    status: "Active",
    joinedDate: "May 18, 2024",
  },
  {
    id: "USR003",
    name: "dawit",
    email: "dawit@gmail.com",
    plan: "Pro",
    status: "Active",
    joinedDate: "May 15, 2024",
  },
  {
    id: "USR004",
    name: "liya",
    email: "liya@gmail.com",
    plan: "Free",
    status: "Inactive",
    joinedDate: "Apr 10, 2024",
  },
  {
    id: "USR005",
    name: "yonas",
    email: "yonas@gmail.com",
    plan: "Pro",
    status: "Active",
    joinedDate: "May 8, 2024",
  },
];