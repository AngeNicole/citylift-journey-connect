
import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Sample booking data (would normally come from an API)
const bookings = [
  {
    id: 1,
    service: "City Taxi",
    date: "2023-06-15",
    time: "14:30",
    from: "Downtown Station",
    to: "Airport Terminal 2",
    status: "completed",
    price: "$24.50"
  },
  {
    id: 2,
    service: "Shared Shuttle",
    date: "2023-06-20",
    time: "09:15",
    from: "Hotel Grand",
    to: "Convention Center",
    status: "upcoming",
    price: "$12.75"
  },
  {
    id: 3,
    service: "Premium Car",
    date: "2023-06-25",
    time: "18:45",
    from: "Business Park",
    to: "Riverfront Restaurant",
    status: "upcoming",
    price: "$35.00"
  }
];

const Bookings = () => {
  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">My Bookings</h1>
        <Button>Book New Transport</Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {bookings.map((booking) => (
          <Card key={booking.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{booking.service}</CardTitle>
                <Badge variant={booking.status === "completed" ? "secondary" : "default"}>
                  {booking.status === "completed" ? "Completed" : "Upcoming"}
                </Badge>
              </div>
              <CardDescription>Booking #{booking.id}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Calendar className="mr-2 h-4 w-4 opacity-70" />
                  <span>{booking.date}</span>
                  <Clock className="ml-3 mr-2 h-4 w-4 opacity-70" />
                  <span>{booking.time}</span>
                </div>
                <div className="grid grid-cols-[25px_1fr] items-start pb-2 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">From</p>
                    <p className="text-sm text-muted-foreground">{booking.from}</p>
                  </div>
                </div>
                <div className="grid grid-cols-[25px_1fr] items-start pb-2 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-rose-500" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">To</p>
                    <p className="text-sm text-muted-foreground">{booking.to}</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="font-medium">{booking.price}</div>
              <Button variant="outline">View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
