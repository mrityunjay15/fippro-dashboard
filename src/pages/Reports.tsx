import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const monthlyData = [
  { month: "Jan", income: 75000, expense: 38000 },
  { month: "Feb", income: 80000, expense: 42000 },
  { month: "Mar", income: 78000, expense: 39000 },
  { month: "Apr", income: 85000, expense: 45000 },
  { month: "May", income: 82000, expense: 41000 },
  { month: "Jun", income: 90000, expense: 48000 },
];

const categorySpending = [
  { category: "Food", amount: 12000 },
  { category: "Travel", amount: 8000 },
  { category: "Bills", amount: 15000 },
  { category: "Shopping", amount: 10000 },
  { category: "Entertainment", amount: 5000 },
];

const Reports = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-3xl font-bold">Reports & Analytics</h1>

      {/* Income vs Expense */}
      <Card>
        <CardHeader>
          <CardTitle>Income vs Expense Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={monthlyData}>
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
              <Legend />
              <Line
                type="monotone"
                dataKey="income"
                stroke="hsl(var(--success))"
                strokeWidth={3}
                name="Income"
              />
              <Line
                type="monotone"
                dataKey="expense"
                stroke="hsl(var(--destructive))"
                strokeWidth={3}
                name="Expense"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Category Bar Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Top Spending Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={categorySpending}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="category" stroke="hsl(var(--foreground))" />
              <YAxis stroke="hsl(var(--foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
                formatter={(value: number) => `₹${value.toLocaleString()}`}
              />
              <Bar dataKey="amount" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Total Income (6 months)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-success">₹4,90,000</p>
            <p className="text-sm text-muted-foreground mt-1">+8% from last period</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Total Expense (6 months)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-destructive">₹2,53,000</p>
            <p className="text-sm text-muted-foreground mt-1">+5% from last period</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Net Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">₹2,37,000</p>
            <p className="text-sm text-muted-foreground mt-1">48% savings rate</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
