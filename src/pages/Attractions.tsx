import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock, Star, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";

const Attractions = () => {
  const [selectedTab, setSelectedTab] = useState("tab1");
  const isMobile = useIsMobile();
  const { toast } = useToast();

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    toast({ title: `Selected ${tab}` });
  };

  return (
    <div>
      <Navbar />
      <Tabs value={selectedTab} onValueChange={handleTabChange}>
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
      </Tabs>
      <Card>
        <CardContent>
          <h1>Attractions</h1>
          <p>Explore the best attractions in the area.</p>
        </CardContent>
      </Card>
      <Footer />
    </div>
  );
};

export default Attractions;
