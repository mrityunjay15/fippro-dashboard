import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, Wallet, PiggyBank } from "lucide-react";

const suggestions = [
  {
    icon: TrendingUp,
    title: "Optimize Your Spending",
    description: "Your food expenses are 15% higher than last month. Consider meal planning to save ₹2,500 monthly.",
    color: "text-primary",
  },
  {
    icon: Wallet,
    title: "Income Diversification",
    description: "85% of your income comes from salary. Consider freelancing or investing to create additional income streams.",
    color: "text-accent",
  },
  {
    icon: PiggyBank,
    title: "Savings Goal",
    description: "Based on your income pattern, you can save ₹8,000 more per month by reducing non-essential expenses.",
    color: "text-warning",
  },
];

export const AISuggestions = () => {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <CardTitle>AI Financial Suggestions</CardTitle>
          </div>
          <Button variant="outline" size="sm">
            Refresh Tips
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg bg-background ${suggestion.color}`}>
                  <suggestion.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">{suggestion.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {suggestion.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
