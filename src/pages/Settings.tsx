import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "@/hooks/use-theme";
import { useState } from "react";

const Settings = () => {
  const { toast } = useToast();
  const { theme, setTheme } = useTheme();
  const [name, setName] = useState("User");
  const [email, setEmail] = useState("user@example.com");
  const [currency, setCurrency] = useState("inr");
  const [expenseAlerts, setExpenseAlerts] = useState(true);
  const [productExpiry, setProductExpiry] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(false);

  const handleSaveProfile = () => {
    toast({
      title: "Profile Saved",
      description: "Your profile has been updated successfully.",
    });
  };

  const handleSaveCurrency = () => {
    toast({
      title: "Currency Saved",
      description: "Your currency preference has been updated.",
    });
  };

  const handleSaveNotifications = () => {
    toast({
      title: "Notifications Saved",
      description: "Your notification preferences have been updated.",
    });
  };

  const handleSaveTheme = () => {
    toast({
      title: "Theme Saved",
      description: "Your theme preference has been updated.",
    });
  };

  return (
    <div className="max-w-3xl space-y-6 animate-fade-in">
      <h1 className="text-3xl font-bold">Settings</h1>

      {/* Profile Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Profile Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <Button onClick={handleSaveProfile}>Save Profile</Button>
        </CardContent>
      </Card>

      {/* Currency Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Currency Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currency">Default Currency</Label>
            <Select value={currency} onValueChange={setCurrency}>
              <SelectTrigger>
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="inr">₹ Indian Rupee (INR)</SelectItem>
                <SelectItem value="usd">$ US Dollar (USD)</SelectItem>
                <SelectItem value="eur">€ Euro (EUR)</SelectItem>
                <SelectItem value="gbp">£ British Pound (GBP)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleSaveCurrency}>Save Currency</Button>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="expense-alerts">Expense Alerts</Label>
              <p className="text-sm text-muted-foreground">
                Get notified when expenses exceed budget
              </p>
            </div>
            <Switch id="expense-alerts" checked={expenseAlerts} onCheckedChange={setExpenseAlerts} />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="product-expiry">Product Expiry Reminders</Label>
              <p className="text-sm text-muted-foreground">
                Get notified before products expire
              </p>
            </div>
            <Switch id="product-expiry" checked={productExpiry} onCheckedChange={setProductExpiry} />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="weekly-reports">Weekly Reports</Label>
              <p className="text-sm text-muted-foreground">
                Receive weekly financial summaries
              </p>
            </div>
            <Switch id="weekly-reports" checked={weeklyReports} onCheckedChange={setWeeklyReports} />
          </div>
          <Button onClick={handleSaveNotifications}>Save Notifications</Button>
        </CardContent>
      </Card>

      {/* Theme Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="theme">Theme</Label>
            <Select value={theme} onValueChange={(value: any) => setTheme(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleSaveTheme}>Save Theme</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
