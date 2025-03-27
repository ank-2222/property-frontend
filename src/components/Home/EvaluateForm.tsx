import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const EvaluateForm = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [evaluationType, setEvaluationType] = useState("");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-4 sm:max-w-md md:max-w-lg lg:max-w-xl max-h-[90vh] overflow-y-scroll">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">Evaluate My Property</DialogTitle>
        </DialogHeader>
        <form className="space-y-6">
          {/* Property Details */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="propertyType" className="text-sm font-medium">Property Type</Label>
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger className="mt-1 w-full">
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent className="bg-background">
                  {["Apartment", "Villa", "Townhouse", "Commercial"].map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="location" className="text-sm font-medium">Location</Label>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="mt-1 w-full">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent className="bg-background">
                  {["Downtown", "Marina", "Palm Jumeirah", "JBR", "Business Bay", "Jumeirah Village Circle", "Dubai Hills", "Emirates Hills"].map((loc) => (
                    <SelectItem key={loc} value={loc}>
                      {loc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="area" className="text-sm font-medium">Property Area (sqft)</Label>
              <Input id="area" type="number" placeholder="Enter property area" className="mt-1" />
            </div>

            <div>
              <Label htmlFor="bedrooms" className="text-sm font-medium">Bedrooms</Label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select bedrooms" />
                </SelectTrigger>
                <SelectContent className="bg-background">
                  {[1, 2, 3, 4, 5, "5+"].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Owner's Details */}
          <div className="space-y-4">
            <h3 className="text-md font-medium">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                <Input id="name" placeholder="Enter your name" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" className="mt-1" />
              </div>
            </div>
            <div>
              <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
              <Input id="phone" placeholder="Enter your phone number" className="mt-1" />
            </div>
          </div>

          {/* Evaluation Request */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="evaluationType" className="text-sm font-medium">Evaluation Purpose</Label>
              <Select value={evaluationType} onValueChange={setEvaluationType}>
                <SelectTrigger className="mt-1 w-full">
                  <SelectValue placeholder="Select evaluation purpose" />
                </SelectTrigger>
                <SelectContent className="bg-background">
                  {["Selling", "Renting", "Market Research", "Refinancing", "Insurance"].map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="comments" className="text-sm font-medium">Additional Comments</Label>
              <Textarea id="comments" placeholder="Any specific requirements or questions" className="mt-1" />
            </div>
          </div>

          <DialogFooter className="pt-4">
            <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90 transition-colors">
              Get Free Evaluation
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EvaluateForm;