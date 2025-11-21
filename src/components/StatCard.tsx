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
    <div className="bg-card rounded-2xl p-6 shadow-neu hover:shadow-neu-hover transition-all duration-300 animate-fade-in">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wide">{title}</p>
          <h3 className="text-4xl font-bold text-card-foreground mb-2 tracking-tight">{value}</h3>
          <p className="text-xs text-muted-foreground font-medium">{subtitle}</p>
        </div>
        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shadow-md", gradientClasses[variant])}>
          <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
};
