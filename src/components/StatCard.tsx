import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  variant?: "primary" | "success" | "warning" | "danger";
}

export const StatCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  variant = "primary",
}: StatCardProps) => {
  const gradientClasses = {
    primary: "bg-gradient-primary",
    success: "bg-gradient-success",
    warning: "bg-gradient-warning",
    danger: "bg-gradient-danger",
  };

  return (
    <div className="bg-card rounded-xl p-6 border border-border shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-card-foreground mb-1">{value}</h3>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
        <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center", gradientClasses[variant])}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};
