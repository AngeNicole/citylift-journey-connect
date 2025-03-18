
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { MapPin, Search, Clock, ArrowRight, Bus, Bike, Car } from "lucide-react";

const transportOptions = [
  { id: 1, type: "Cable Car", time: "8 min", price: "$2.50", available: 3 },
  { id: 2, type: "E-Bike", time: "12 min", price: "$1.75", available: 8 },
  { id: 3, type: "E-Scooter", time: "10 min", price: "$1.50", available: 5 },
  { id: 4, type: "Bus", time: "15 min", price: "$1.25", available: 1 },
  { id: 5, type: "Shuttle", time: "7 min", price: "$3.00", available: 2 },
];

const FindTransport = () => {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background to-muted">
        <AppSidebar />
        <main className="flex-1 p-6 space-y-6">
          <SidebarTrigger />
          
          <div className="space-y-2">
            <h1 className="text-4xl font-heading font-bold text-primary">Find Transport</h1>
            <p className="text-lg text-muted-foreground">Discover nearby transport options and plan your journey</p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <Tabs defaultValue="search" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="search">Search Route</TabsTrigger>
                  <TabsTrigger value="nearby">Nearby Options</TabsTrigger>
                </TabsList>
                
                <TabsContent value="search" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="from">From</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                        <Input 
                          id="from" 
                          placeholder="Current location" 
                          className="pl-10"
                          value={fromLocation}
                          onChange={(e) => setFromLocation(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="to">To</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                        <Input 
                          id="to" 
                          placeholder="Destination" 
                          className="pl-10"
                          value={toLocation}
                          onChange={(e) => setToLocation(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full">
                    <Search className="mr-2 h-4 w-4" /> Find Routes
                  </Button>
                </TabsContent>
                
                <TabsContent value="nearby" className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input 
                      placeholder="Search for nearby transport" 
                      className="pl-10"
                    />
                  </div>
                  
                  <div className="flex gap-2 overflow-auto pb-2">
                    <Button variant="outline" className="rounded-full">
                      <Bus className="mr-2 h-4 w-4" /> Bus
                    </Button>
                    <Button variant="outline" className="rounded-full">
                      <Bike className="mr-2 h-4 w-4" /> E-Bike
                    </Button>
                    <Button variant="outline" className="rounded-full">
                      <Car className="mr-2 h-4 w-4" /> Cable Car
                    </Button>
                    <Button variant="outline" className="rounded-full">All</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-semibold mt-8">Available Transport Options</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {transportOptions.map((option) => (
              <Card key={option.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{option.type}</h3>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{option.time}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-lg">{option.price}</p>
                      <p className="text-sm text-muted-foreground">{option.available} available</p>
                    </div>
                  </div>
                  <Button className="w-full">
                    Book Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default FindTransport;
