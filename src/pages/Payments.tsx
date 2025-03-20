
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Calendar, DollarSign, ArrowDownUp } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

// Sample payment data (would normally come from an API)
const payments = [
  {
    id: "PAY-001",
    date: "2023-06-15",
    amount: "$24.50",
    method: "Visa •••• 4242",
    service: "City Taxi",
    status: "completed"
  },
  {
    id: "PAY-002",
    date: "2023-06-20",
    amount: "$12.75",
    method: "PayPal",
    service: "Shared Shuttle",
    status: "completed"
  },
  {
    id: "PAY-003",
    date: "2023-06-25",
    amount: "$35.00",
    method: "Mastercard •••• 5555",
    service: "Premium Car",
    status: "pending"
  },
  {
    id: "PAY-004",
    date: "2023-07-01",
    amount: "$18.25",
    method: "Apple Pay",
    service: "City Taxi",
    status: "completed"
  }
];

const Payments = () => {
  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Payment History</h1>
        <Button variant="outline" className="gap-2">
          <ArrowDownUp className="h-4 w-4" />
          Sort by Date
        </Button>
      </div>
      
      <div className="grid gap-6">
        {payments.map((payment) => (
          <Card key={payment.id} className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-xl">{payment.service}</CardTitle>
                <CardDescription>Invoice {payment.id}</CardDescription>
              </div>
              <Badge variant={payment.status === "completed" ? "secondary" : "outline"}>
                {payment.status === "completed" ? "Paid" : "Pending"}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 opacity-70" />
                  <span className="text-sm text-muted-foreground">{payment.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-4 w-4 opacity-70" />
                  <span className="text-sm text-muted-foreground">{payment.method}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center bg-muted/50 px-6 py-3">
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                <span className="text-lg font-semibold">{payment.amount}</span>
              </div>
              <Button size="sm" variant="outline">Download Receipt</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Payments;
