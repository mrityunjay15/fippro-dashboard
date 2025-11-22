import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Milk",
    expiryDate: "2024-01-17",
    daysLeft: 2,
    status: "danger",
    reminderDays: 3,
  },
  {
    id: 2,
    name: "Bread",
    expiryDate: "2024-01-20",
    daysLeft: 5,
    status: "warning",
    reminderDays: 7,
  },
  {
    id: 3,
    name: "Cheese",
    expiryDate: "2024-01-25",
    daysLeft: 10,
    status: "success",
    reminderDays: 7,
  },
  {
    id: 4,
    name: "Yogurt",
    expiryDate: "2024-01-18",
    daysLeft: 3,
    status: "warning",
    reminderDays: 5,
  },
  {
    id: 5,
    name: "Eggs",
    expiryDate: "2024-01-30",
    daysLeft: 15,
    status: "success",
    reminderDays: 7,
  },
  {
    id: 6,
    name: "Butter",
    expiryDate: "2024-02-05",
    daysLeft: 21,
    status: "success",
    reminderDays: 7,
  },
];

const Products = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleDelete = (productName: string) => {
    toast({
      title: "Product Deleted",
      description: `${productName} has been removed from the tracker.`,
      variant: "destructive",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "danger":
        return "bg-destructive/10 text-destructive border-destructive/20";
      case "warning":
        return "bg-warning/10 text-warning border-warning/20";
      case "success":
        return "bg-success/10 text-success border-success/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">Product Expiry Tracker</h1>
        <Button 
          onClick={() => navigate("/add-product")}
          className="bg-gradient-primary hover:shadow-neu-hover transition-all duration-300"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      <Card className="shadow-neu hover:shadow-neu-hover transition-all duration-300">
        <CardHeader>
          <CardTitle>All Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border text-left text-sm text-muted-foreground">
                  <th className="pb-3 font-medium">Product Name</th>
                  <th className="pb-3 font-medium">Expiry Date</th>
                  <th className="pb-3 font-medium">Days Left</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Reminder</th>
                  <th className="pb-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors"
                  >
                    <td className="py-4 text-sm font-medium">{product.name}</td>
                    <td className="py-4 text-sm text-muted-foreground">{product.expiryDate}</td>
                    <td className="py-4 text-sm">
                      <span className="font-semibold">{product.daysLeft} days</span>
                    </td>
                    <td className="py-4">
                      <span
                        className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(
                          product.status
                        )}`}
                      >
                        {product.status === "danger"
                          ? "Urgent"
                          : product.status === "warning"
                          ? "Soon"
                          : "Good"}
                      </span>
                    </td>
                    <td className="py-4 text-sm text-muted-foreground">
                      {product.reminderDays} days before
                    </td>
                    <td className="py-4">
                      <div className="flex justify-end gap-2">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 hover:bg-primary/10 transition-all duration-300"
                          onClick={() => navigate("/add-product", { state: { product } })}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive hover:text-destructive"
                          onClick={() => handleDelete(product.name)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
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

export default Products;
