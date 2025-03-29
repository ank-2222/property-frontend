import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { useState } from "react";
import { Loader2 } from "lucide-react";
// Define form schema using Zod
const formSchema = z.object({
  propertyType: z.string().min(1, "Property type is required"),
  location: z.string().min(1, "Location is required"),
  area: z.string().min(1, "Property area is required"),
  bedrooms: z.string().min(1, "Number of bedrooms is required"),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Valid phone number is required"),
  evaluationType: z.string().min(1, "Evaluation purpose is required"),
  comments: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateid = import.meta.env.VITE_EMAILJS_EVALUATE_FORM_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const EvaluateForm = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  // Initialize form with react-hook-form and zod resolver
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      propertyType: "",
      location: "",
      area: "",
      bedrooms: "",
      name: "",
      email: "",
      phone: "",
      evaluationType: "",
      comments: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  // Form submission handler
  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);

    try {
      // Convert form data to template parameters
      const templateParams = {
        propertyType: data.propertyType,
        location: data.location,
        area: data.area,
        bedrooms: data.bedrooms,
        name: data.name,
        email: data.email,
        phone: data.phone,
        evaluationType: data.evaluationType,
        comments: data.comments,
        date: new Date().toLocaleDateString(),
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId, // Your EmailJS service ID
        templateid, // Your EmailJS template ID
        templateParams, // Template parameters from form data
        publicKey // Your EmailJS public key
      );

      if (response.status === 200) {
        toast.success("Evaluation request sent successfully!");
        form.reset(); // Reset form after successful submission
      }
    } catch (error) {
      toast.error("Failed to send evaluation request. Please try again later.");
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-4 sm:max-w-md md:max-w-lg lg:max-w-xl max-h-[90vh] overflow-y-scroll">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">
            Evaluate My Property
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Property Details */}
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="propertyType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Property Type
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="mt-1 w-full">
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-background">
                        {["Apartment", "Villa", "Townhouse", "Commercial"].map(
                          (type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Location
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="mt-1 w-full">
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-background">
                        {[
                          "Downtown",
                          "Marina",
                          "Palm Jumeirah",
                          "JBR",
                          "Business Bay",
                          "Jumeirah Village Circle",
                          "Dubai Hills",
                          "Emirates Hills",
                        ].map((loc) => (
                          <SelectItem key={loc} value={loc}>
                            {loc}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="area"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Property Area (sqft)
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter property area"
                        className="mt-1"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bedrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Bedrooms
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select bedrooms" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-background">
                        {[1, 2, 3, 4, 5, "5+"].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Owner's Details */}
            <div className="space-y-4">
              <h3 className="text-md font-medium">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your name"
                          className="mt-1"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          className="mt-1"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your phone number"
                        className="mt-1"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Evaluation Request */}
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="evaluationType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Evaluation Purpose
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="mt-1 w-full">
                          <SelectValue placeholder="Select evaluation purpose" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-background">
                        {[
                          "Selling",
                          "Renting",
                          "Market Research",
                          "Refinancing",
                          "Insurance",
                        ].map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="comments"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Additional Comments
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Any specific requirements or questions"
                        className="mt-1"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter className="pt-4">
              <Button
                disabled={isLoading}
                variant="outline"
                type="submit"
                className="w-full bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Get Free Evaluation"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EvaluateForm;
