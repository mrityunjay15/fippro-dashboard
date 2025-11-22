import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  PlusCircle,
  TrendingUp,
  List,
  Tag,
  BarChart3,
  Package,
  Settings,
  LogOut,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/use-auth";

const menuItems = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/add-expense", label: "Add Expense", icon: PlusCircle },
  { path: "/add-income", label: "Add Income", icon: TrendingUp },
  { path: "/transactions", label: "All Transactions", icon: List },
  { path: "/categories", label: "Categories", icon: Tag },
  { path: "/reports", label: "Reports & Analytics", icon: BarChart3 },
  { path: "/products", label: "Product Expiry Tracker", icon: Package },
  { path: "/settings", label: "Settings", icon: Settings },
];

export const Sidebar = () => {
  const { logout } = useAuth();
  
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gradient-card border-r border-sidebar-border flex flex-col hidden md:flex z-50">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
            <Wallet className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-sidebar-foreground">FIPPRO</h1>
            <p className="text-xs text-sidebar-foreground/60">Finance Manager</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent",
                isActive && "bg-sidebar-primary text-sidebar-primary-foreground font-medium"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-sidebar-border">
        <button 
          onClick={logout}
          className="flex items-center gap-3 px-4 py-3 rounded-lg w-full text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-200"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};
