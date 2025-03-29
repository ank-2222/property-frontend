import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  location: z.string().min(1, "Location is required"),
  bedrooms: z.string().min(1, "Number of bedrooms is required"),
  ownerName: z.string().min(1, "Owner name is required"),
  contactNumber: z.string().min(1, "Contact number is required"),
});
type FormValues = z.infer<typeof formSchema>;

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateid = import.meta.env.VITE_EMAILJS_ADVERTISE_FORM_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


const AdvertiseProperty = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const form = useForm<FormValues>({
     resolver: zodResolver(formSchema),
     defaultValues: {
      title: "",
      location: "",
      bedrooms: "",
      ownerName: "",
      contactNumber: "",
     },
   });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    
    try {
      // Convert form data to template parameters
      const templateParams = {
        title: data.title,
        location: data.location,
        bedrooms: data.bedrooms,
        ownerName: data.ownerName,
        contactNumber: data.contactNumber,
        // Add any other parameters you want to send
        date: new Date().toLocaleDateString()
      };
      
      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,  // Your EmailJS service ID
        templateid, // Your EmailJS template ID
        templateParams,     // Template parameters from form data
        publicKey // Your EmailJS public key
      );
      
      if (response.status === 200) {
        toast.success("Evaluation request sent successfully!");
        setIsSubmitted(true);
        form.reset(); // Reset form after successful submission
      }
    } catch (error) {
     toast.error("Failed to send evaluation request. Please try again later.");
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card id="advertise" className="container mx-auto p-6 max-w-3xl shadow-lg rounded-lg mt-10">
    <CardHeader className="p-0 pb-4">
      <CardTitle className="text-3xl font-bold text-gray-800 text-center">
        Advertise My <span className="text-primary">Property</span>
      </CardTitle>
      <div className="w-16 h-1 bg-primary/70 mx-auto my-4 rounded-full" />
    </CardHeader>
    <CardContent className="p-0">
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center text-center py-10">
          <CheckCircle className="w-16 h-16 text-green-500" />
          <h2 className="text-2xl font-semibold text-gray-800 mt-4">
            Thank You for Advertising Your Property!
          </h2>
          <p className="text-gray-600 mt-2">
            Our team will review your submission and get back to you soon.
          </p>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
            {/* Property Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">Property Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter property title"
                      className="w-full p-2 border rounded-md focus:ring-2"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Location */}
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">Location</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter location"
                      className="w-full p-2 border rounded-md focus:ring-2"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Bedrooms */}
            <FormField
              control={form.control}
              name="bedrooms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">Bedrooms</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter number of bedrooms"
                      className="w-full p-2 border rounded-md focus:ring-2"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Owner Name */}
            <FormField
              control={form.control}
              name="ownerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">Owner Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Name"
                      className="w-full p-2 border rounded-md focus:ring-2"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Contact Number */}
            <FormField
              control={form.control}
              name="contactNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">Contact Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Contact number"
                      className="w-full p-2 border rounded-md focus:ring-2"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              disabled={isLoading}
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/70"
            >
              {isLoading ? <Loader2 className="animate-spin" /> : "Submit"}
            </Button>
          </form>
        </Form>
      )}
    </CardContent>
  </Card>
  );
};

export default AdvertiseProperty;