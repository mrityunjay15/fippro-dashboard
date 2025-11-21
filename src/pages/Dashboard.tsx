import { StatCard } from "@/components/StatCard";
import { AISuggestions } from "@/components/AISuggestions";
import { 
  Wallet, 
  TrendingDown, 
  TrendingUp, 
  Package,
  ShoppingBag,
  Utensils,
  Car,
  Home,
  CreditCard,
  Smartphone,
  Calendar,
  CheckCircle2,
  Clock,
  AlertCircle,
  Plus
} from "lucide-react";
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
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

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
    title: "Grocery Shopping",
    type: "Expense",
    category: "Food",
    amount: -2500,
    date: "2024-01-15",
    paymentMode: "UPI",
    status: "Completed",
    icon: Utensils,
  },
  {
    id: 2,
    title: "Monthly Salary",
    type: "Income",
    category: "Salary",
    amount: 75000,
    date: "2024-01-10",
    paymentMode: "Bank Transfer",
    status: "Completed",
    icon: Wallet,
  },
  {
    id: 3,
    title: "Electricity Bill",
    type: "Expense",
    category: "Bills",
    amount: -3200,
    date: "2024-01-12",
    paymentMode: "Net Banking",
    status: "Completed",
    icon: Home,
  },
  {
    id: 4,
    title: "Freelance Project",
    type: "Income",
    category: "Freelance",
    amount: 15000,
    date: "2024-01-14",
    paymentMode: "UPI",
    status: "Completed",
    icon: CreditCard,
  },
  {
    id: 5,
    title: "Shopping - Electronics",
    type: "Expense",
    category: "Shopping",
    amount: -12500,
    date: "2024-01-13",
    paymentMode: "Credit Card",
    status: "Pending",
    icon: ShoppingBag,
  },
];

const expiringProducts = [
  { 
    name: "Milk (Amul)", 
    quantity: "1L",
    daysLeft: 2, 
    expiryDate: "Jan 17, 2024", 
    status: "danger",
    image: "🥛"
  },
  { 
    name: "Bread (Modern)", 
    quantity: "400g",
    daysLeft: 5, 
    expiryDate: "Jan 20, 2024", 
    status: "warning",
    image: "🍞"
  },
  { 
    name: "Paneer (Mother Dairy)", 
    quantity: "200g",
    daysLeft: 10, 
    expiryDate: "Jan 25, 2024", 
    status: "success",
    image: "🧀"
  },
  { 
    name: "Yogurt (Amul)", 
    quantity: "400g",
    daysLeft: 3, 
    expiryDate: "Jan 18, 2024", 
    status: "danger",
    image: "🥄"
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  const getStatusIcon = (status: string) => {
    if (status === "Completed") return <CheckCircle2 className="w-4 h-4 text-success" />;
    if (status === "Pending") return <Clock className="w-4 h-4 text-warning" />;
    return <AlertCircle className="w-4 h-4 text-muted-foreground" />;
  };

  const getStatusColor = (status: string) => {
    if (status === "danger") return "bg-destructive/10 text-destructive border-destructive/20";
    if (status === "warning") return "bg-warning/10 text-warning border-warning/20";
    return "bg-success/10 text-success border-success/20";
  };

  return (
    <div className="space-y-8 animate-fade-in p-1">
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
          value="4"
          subtitle="Action required"
          icon={Package}
          variant="warning"
        />
      </div>

      {/* AI Suggestions */}
      <AISuggestions />

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Expense Chart */}
        <Card className="hover:shadow-neu-hover">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Monthly Expense Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyExpenseData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="month" 
                  stroke="hsl(var(--foreground))"
                  style={{ fontSize: '12px', fontWeight: 600 }}
                />
                <YAxis 
                  stroke="hsl(var(--foreground))"
                  style={{ fontSize: '12px', fontWeight: 600 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "12px",
                    boxShadow: "var(--shadow-md)",
                  }}
                  formatter={(value: number) => `₹${value.toLocaleString()}`}
                />
                <Line
                  type="monotone"
                  dataKey="expense"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))", r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Category Pie Chart */}
        <Card className="hover:shadow-neu-hover">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Category-wise Spending</CardTitle>
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
        <Card className="lg:col-span-2 hover:shadow-neu-hover">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border text-left">
                    <th className="pb-4 font-bold text-sm text-foreground uppercase tracking-wide">Category</th>
                    <th className="pb-4 font-bold text-sm text-foreground uppercase tracking-wide">Title</th>
                    <th className="pb-4 font-bold text-sm text-foreground uppercase tracking-wide">Amount</th>
                    <th className="pb-4 font-bold text-sm text-foreground uppercase tracking-wide">Payment</th>
                    <th className="pb-4 font-bold text-sm text-foreground uppercase tracking-wide">Date</th>
                    <th className="pb-4 font-bold text-sm text-foreground uppercase tracking-wide">Type</th>
                    <th className="pb-4 font-bold text-sm text-foreground uppercase tracking-wide">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTransactions.map((transaction) => {
                    const IconComponent = transaction.icon;
                    return (
                      <tr
                        key={transaction.id}
                        className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                      >
                        <td className="py-4">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-primary" strokeWidth={2.5} />
                          </div>
                        </td>
                        <td className="py-4">
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold text-foreground">{transaction.title}</span>
                            <span className="text-xs text-muted-foreground">{transaction.category}</span>
                          </div>
                        </td>
                        <td className="py-4">
                          <span
                            className={`text-sm font-bold ${
                              transaction.amount > 0 ? "text-success" : "text-destructive"
                            }`}
                          >
                            {transaction.amount > 0 ? "+" : ""}₹{Math.abs(transaction.amount).toLocaleString()}
                          </span>
                        </td>
                        <td className="py-4">
                          <span className="text-sm text-muted-foreground font-medium">{transaction.paymentMode}</span>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{transaction.date}</span>
                          </div>
                        </td>
                        <td className="py-4">
                          <span
                            className={`text-xs px-3 py-1.5 rounded-full font-semibold ${
                              transaction.type === "Income"
                                ? "bg-success/10 text-success"
                                : "bg-destructive/10 text-destructive"
                            }`}
                          >
                            {transaction.type}
                          </span>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center gap-2">
                            {getStatusIcon(transaction.status)}
                            <span className="text-xs font-medium text-muted-foreground">{transaction.status}</span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Product Expiry Tracker */}
        <Card className="hover:shadow-neu-hover">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl font-bold">Products Near Expiry</CardTitle>
            <Button 
              size="sm" 
              className="shadow-neu hover:shadow-neu-hover"
              onClick={() => navigate('/products')}
            >
              <Plus className="w-4 h-4 mr-1" />
              Add
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {expiringProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-2xl shadow-neu-inset hover:shadow-neu transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center text-3xl shadow-md">
                    {product.image}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-foreground truncate">{product.name}</h4>
                    <p className="text-xs text-muted-foreground font-medium">Qty: {product.quantity}</p>
                    <p className="text-xs text-muted-foreground font-medium mt-1">Expires: {product.expiryDate}</p>
                  </div>
                  <div
                    className={`px-4 py-2 rounded-xl text-xs font-bold border-2 ${getStatusColor(product.status)}`}
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
