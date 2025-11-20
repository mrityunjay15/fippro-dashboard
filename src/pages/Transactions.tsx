import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Download } from "lucide-react";

const transactions = [
  {
    id: 1,
    name: "Grocery Shopping",
    type: "Expense",
    category: "Food",
    amount: -2500,
    date: "2024-01-15",
    notes: "Weekly groceries",
    payment: "UPI",
  },
  {
    id: 2,
    name: "Salary",
    type: "Income",
    category: "Salary",
    amount: 75000,
    date: "2024-01-10",
    notes: "Monthly salary",
    payment: "Bank Transfer",
  },
  {
    id: 3,
    name: "Electricity Bill",
    type: "Expense",
    category: "Bills",
    amount: -3200,
    date: "2024-01-12",
    notes: "January bill",
    payment: "Net Banking",
  },
  {
    id: 4,
    name: "Freelance Project",
    type: "Income",
    category: "Freelance",
    amount: 15000,
    date: "2024-01-14",
    notes: "Website development",
    payment: "UPI",
  },
  {
    id: 5,
    name: "Restaurant",
    type: "Expense",
    category: "Food",
    amount: -1800,
    date: "2024-01-13",
    notes: "Dinner with friends",
    payment: "Card",
  },
  {
    id: 6,
    name: "Uber Ride",
    type: "Expense",
    category: "Travel",
    amount: -350,
    date: "2024-01-11",
    notes: "Office commute",
    payment: "UPI",
  },
];

const Transactions = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">All Transactions</h1>
        <Button>
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search transactions..." className="pl-10" />
            </div>

            {/* Filters */}
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="income">Income</SelectItem>
                <SelectItem value="expense">Expense</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="travel">Travel</SelectItem>
                <SelectItem value="bills">Bills</SelectItem>
                <SelectItem value="salary">Salary</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border text-left text-sm text-muted-foreground">
                  <th className="pb-3 font-medium">Name</th>
                  <th className="pb-3 font-medium">Type</th>
                  <th className="pb-3 font-medium">Category</th>
                  <th className="pb-3 font-medium text-right">Amount</th>
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium">Payment</th>
                  <th className="pb-3 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors"
                  >
                    <td className="py-4 text-sm font-medium">{transaction.name}</td>
                    <td className="py-4">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          transaction.type === "Income"
                            ? "bg-success/10 text-success"
                            : "bg-destructive/10 text-destructive"
                        }`}
                      >
                        {transaction.type}
                      </span>
                    </td>
                    <td className="py-4 text-sm text-muted-foreground">{transaction.category}</td>
                    <td
                      className={`py-4 text-sm text-right font-semibold ${
                        transaction.amount > 0 ? "text-success" : "text-destructive"
                      }`}
                    >
                      {transaction.amount > 0 ? "+" : ""}₹
                      {Math.abs(transaction.amount).toLocaleString()}
                    </td>
                    <td className="py-4 text-sm text-muted-foreground">{transaction.date}</td>
                    <td className="py-4 text-sm text-muted-foreground">{transaction.payment}</td>
                    <td className="py-4 text-sm text-muted-foreground">{transaction.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Transactions;
