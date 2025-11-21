import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const categories = [
  { id: 1, name: "Food", type: "Expense", color: "#FF6384", transactions: 45 },
  { id: 2, name: "Travel", type: "Expense", color: "#36A2EB", transactions: 23 },
  { id: 3, name: "Bills", type: "Expense", color: "#FFCE56", transactions: 12 },
  { id: 4, name: "Shopping", type: "Expense", color: "#4BC0C0", transactions: 31 },
  { id: 5, name: "Salary", type: "Income", color: "#22c55e", transactions: 12 },
  { id: 6, name: "Freelance", type: "Income", color: "#10b981", transactions: 8 },
  { id: 7, name: "Investments", type: "Income", color: "#14b8a6", transactions: 5 },
];

const Categories = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleDelete = (categoryName: string) => {
    toast({
      title: "Category Deleted",
      description: `${categoryName} has been removed.`,
      variant: "destructive",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Categories</h1>
        <Button onClick={() => navigate("/add-category")}>
          <Plus className="w-4 h-4 mr-2" />
          Add Category
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card key={category.id} className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: category.color + "20" }}
                  >
                    <div
                      className="w-6 h-6 rounded-full"
                      style={{ backgroundColor: category.color }}
                    ></div>
                  </div>
                  <div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <p className="text-xs text-muted-foreground mt-1">
                      {category.type} • {category.transactions} transactions
                    </p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-destructive hover:text-destructive"
                    onClick={() => handleDelete(category.name)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Categories;
