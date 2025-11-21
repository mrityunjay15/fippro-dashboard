import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [color, setColor] = useState("#FF6384");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Category Added",
      description: "Your category has been created successfully.",
    });
    navigate("/categories");
  };

  return (
    <div className="max-w-2xl animate-fade-in">
      <h1 className="text-3xl font-bold mb-6">Add Category</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Category Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Category Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Category Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter category name"
                className="text-lg"
                required
              />
            </div>

            {/* Category Type */}
            <div className="space-y-2">
              <Label htmlFor="type">Category Type</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="income">Income</SelectItem>
                  <SelectItem value="expense">Expense</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Color */}
            <div className="space-y-2">
              <Label htmlFor="color">Category Color</Label>
              <div className="flex gap-4 items-center">
                <Input
                  id="color"
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-20 h-12 cursor-pointer"
                  required
                />
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full border-2 border-border"
                    style={{ backgroundColor: color }}
                  ></div>
                  <span className="text-sm text-muted-foreground">{color}</span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => navigate("/categories")}
              >
                Cancel
              </Button>
              <Button type="submit" className="flex-1" size="lg">
                Add Category
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddCategory;
