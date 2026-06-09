export interface LegalNotification {
  id: string;
  title: string;
  description: string;
  type: "success" | "warning" | "info";
  timeAgo: string;
  isRead: boolean;
}

export const notifications: LegalNotification[] = [
  {
    id: "NTF001",
    title: "Contract Analysis Completed",
    description: "The uploaded 'NDA Agreement' analysis has been fully processed by the AI Engine.",
    type: "success",
    timeAgo: "3 mins ago",
    isRead: false,
  },
  {
    id: "NTF002",
    title: "Payment Successful",
    description: "Your Telebirr premium payment for the Pro Plan has been verified successfully.",
    type: "success",
    timeAgo: "1 hour ago",
    isRead: true,
  },
  {
    id: "NTF003",
    title: "Contract Signed Successfully",
    description: "'Service Agreement' has been securely e-signed by all involved parties.",
    type: "info",
    timeAgo: "1 day ago",
    isRead: true,
  },
  {
    id: "NTF004",
    title: "Reminder: Rent payment due",
    description: "Upcoming deadline notification for your standard Rental Agreement in 7 days.",
    type: "warning",
    timeAgo: "2 days ago",
    isRead: true,
  },
];