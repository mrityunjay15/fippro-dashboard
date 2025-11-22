import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  CreditCard, 
  TrendingUp, 
  Receipt, 
  FolderOpen, 
  BarChart3, 
  Package,
  Settings as SettingsIcon,
  LogOut 
} from "lucide-react";
import { useAuth } from "@/hooks/use-auth";

const menuItems = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/add-expense", label: "Add Expense", icon: CreditCard },
  { path: "/add-income", label: "Add Income", icon: TrendingUp },
  { path: "/transactions", label: "Transactions", icon: Receipt },
  { path: "/categories", label: "Categories", icon: FolderOpen },
  { path: "/products", label: "Products", icon: Package },
  { path: "/reports", label: "Reports", icon: BarChart3 },
  { path: "/settings", label: "Settings", icon: SettingsIcon },
];

export const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const { logout } = useAuth();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-0 bg-gradient-card">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-border">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              FIPPRO
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300",
                      "hover:bg-primary/10 hover:shadow-neu-inset group",
                      isActive && "bg-gradient-primary text-primary-foreground shadow-neu"
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        className={cn(
                          "w-5 h-5 transition-transform duration-300 group-hover:scale-110",
                          isActive && "text-primary-foreground"
                        )}
                      />
                      <span className={cn("font-medium", isActive && "text-primary-foreground")}>
                        {item.label}
                      </span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-border">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 hover:bg-destructive/10 hover:text-destructive transition-all duration-300"
              onClick={() => {
                logout();
                setOpen(false);
              }}
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
