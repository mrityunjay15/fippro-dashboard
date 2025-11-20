import { StatCard } from "@/components/StatCard";
import { Wallet, TrendingDown, TrendingUp, Package } from "lucide-react";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data
const monthlyExpenseData = [
  { month: "Jan", expense: 25000 },
  { month: "Feb", expense: 32000 },
  { month: "Mar", expense: 28000 },
  { month: "Apr", expense: 35000 },
  { month: "May", expense: 30000 },
  { month: "Jun", expense: 38000 },
];

const categoryData = [
  { name: "Food", value: 12000, color: "#FF6384" },
  { name: "Travel", value: 8000, color: "#36A2EB" },
  { name: "Bills", value: 15000, color: "#FFCE56" },
  { name: "Shopping", value: 10000, color: "#4BC0C0" },
];

const recentTransactions = [
  {
    id: 1,
    name: "Grocery Shopping",
    type: "Expense",
    category: "Food",
    amount: -2500,
    date: "2024-01-15",
    notes: "Weekly groceries",
  },
  {
    id: 2,
    name: "Salary",
    type: "Income",
    category: "Salary",
    amount: 75000,
    date: "2024-01-10",
    notes: "Monthly salary",
  },
  {
    id: 3,
    name: "Electricity Bill",
    type: "Expense",
    category: "Bills",
    amount: -3200,
    date: "2024-01-12",
    notes: "January bill",
  },
  {
    id: 4,
    name: "Freelance Project",
    type: "Income",
    category: "Freelance",
    amount: 15000,
    date: "2024-01-14",
    notes: "Website development",
  },
];

const expiringProducts = [
  { name: "Milk", daysLeft: 2, expiryDate: "2024-01-17", status: "danger" },
  { name: "Bread", daysLeft: 5, expiryDate: "2024-01-20", status: "warning" },
  { name: "Cheese", daysLeft: 10, expiryDate: "2024-01-25", status: "success" },
];

const Dashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Balance"
          value="₹85,450"
          subtitle="Available balance"
          icon={Wallet}
          variant="primary"
        />
        <StatCard
          title="This Month's Expense"
          value="₹38,200"
          subtitle="+12% from last month"
          icon={TrendingDown}
          variant="danger"
        />
        <StatCard
          title="This Month's Income"
          value="₹90,000"
          subtitle="+5% from last month"
          icon={TrendingUp}
          variant="success"
        />
        <StatCard
          title="Products Near Expiry"
          value="3"
          subtitle="Action required"
          icon={Package}
          variant="warning"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Expense Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Expense Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyExpenseData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--foreground))" />
                <YAxis stroke="hsl(var(--foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                  formatter={(value: number) => `₹${value.toLocaleString()}`}
                />
                <Line
                  type="monotone"
                  dataKey="expense"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Category Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Category-wise Spending</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => `₹${value.toLocaleString()}`} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Transactions */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
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
                  </tr>
                </thead>
                <tbody>
                  {recentTransactions.map((transaction, index) => (
                    <tr
                      key={transaction.id}
                      className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors"
                    >
                      <td className="py-3 text-sm">{transaction.name}</td>
                      <td className="py-3">
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
                      <td className="py-3 text-sm text-muted-foreground">{transaction.category}</td>
                      <td
                        className={`py-3 text-sm text-right font-semibold ${
                          transaction.amount > 0 ? "text-success" : "text-destructive"
                        }`}
                      >
                        {transaction.amount > 0 ? "+" : ""}₹{Math.abs(transaction.amount).toLocaleString()}
                      </td>
                      <td className="py-3 text-sm text-muted-foreground">{transaction.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Expiry Tracker */}
        <Card>
          <CardHeader>
            <CardTitle>Products Near Expiry</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {expiringProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">{product.name}</h4>
                    <p className="text-xs text-muted-foreground">{product.expiryDate}</p>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      product.status === "danger"
                        ? "bg-destructive/10 text-destructive"
                        : product.status === "warning"
                        ? "bg-warning/10 text-warning"
                        : "bg-success/10 text-success"
                    }`}
                  >
                    {product.daysLeft}d left
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
