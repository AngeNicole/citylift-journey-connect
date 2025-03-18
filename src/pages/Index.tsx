
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, CreditCard } from "lucide-react";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background to-muted">
        <AppSidebar />
        <main className="flex-1 p-6 space-y-6">
          <SidebarTrigger />
          
          <div className="space-y-2">
            <h1 className="text-4xl font-heading font-bold text-primary">Welcome to CityLift Connect</h1>
            <p className="text-lg text-muted-foreground">Your smart urban mobility solution</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover-card">
              <MapPin className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-2">Find Transport</h3>
              <p className="text-muted-foreground mb-4">Locate nearby transport options and plan your journey</p>
              <Button className="w-full">Explore Options</Button>
            </Card>

            <Card className="p-6 hover-card">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-2">Quick Booking</h3>
              <p className="text-muted-foreground mb-4">Book your next ride in seconds</p>
              <Button className="w-full">Book Now</Button>
            </Card>

            <Card className="p-6 hover-card">
              <CreditCard className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-2">Easy Payments</h3>
              <p className="text-muted-foreground mb-4">Manage your payments and view history</p>
              <Button className="w-full">View Payments</Button>
            </Card>
          </div>

          <Card className="p-6 glass-panel">
            <h2 className="text-2xl font-heading font-semibold mb-4">Getting Started</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">1</div>
                <div>
                  <h3 className="font-semibold mb-1">Create your account</h3>
                  <p className="text-muted-foreground">Sign up to access all features</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">2</div>
                <div>
                  <h3 className="font-semibold mb-1">Find transport</h3>
                  <p className="text-muted-foreground">Browse available options near you</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">3</div>
                <div>
                  <h3 className="font-semibold mb-1">Book and go</h3>
                  <p className="text-muted-foreground">Select your ride and start your journey</p>
                </div>
              </div>
            </div>
          </Card>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
