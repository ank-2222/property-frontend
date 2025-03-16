import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import Navbar from "@/components/ui/Navbar";

const Signup = () => {
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      agreeToTerms: false,
      agreeToCookies: false,
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (values: any) => {
    console.log("Signup Data:", values);
  };

  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center min-h-screen  bg-cover bg-center" style={{ backgroundImage: "url('/assets/herobg5.jpg')" }}>
      <Card className="w-full max-w-md shadow-lg bg-white border-0 mt-20">
        <CardHeader>
          <CardTitle className="text-left text-xl font-semibold">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Enter your password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Terms & Conditions Checkbox */}
              <FormField
                control={form.control}
                name="agreeToTerms"
                render={({ field }) => (
                  <FormItem className="flex items-start space-x-2">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormLabel className="text-sm text-gray-700 flex flex-wrap ">
                        <p>
                            I agree to the{" "}
                            <Link to="/terms" className="text-primary font-medium hover:underline">
                                Terms and Conditions
                            </Link>{" "}
                            and{" "}
                            <Link to="/privacy" className="text-primary font-medium hover:underline">
                                Privacy Policy
                            </Link>
                        </p>
                     
                    </FormLabel>
                  </FormItem>
                )}
              />

              {/* Cookies & Data Processing Checkbox */}
              <FormField
                control={form.control}
                name="agreeToCookies"
                render={({ field }) => (
                  <FormItem className="flex justify-start items-start space-x-2">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormLabel className="text-sm text-gray-700 ">
                        <p>
                            With your agreement, we and our partners use cookies or similar technologies to store, access, and process data.{" "}
                            <Link to="/privacy" className="text-primary font-medium hover:underline">Learn more</Link>
                        </p>
                   
                    </FormLabel>
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full text-ltext font-semibold">Sign Up</Button>
            </form>
          </Form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Log in
            </Link>
          </p>

          <p className="text-xs text-gray-500 text-center mt-3">
            This site is protected by reCAPTCHA and the Google{" "}
            <Link to="https://policies.google.com/privacy" className="text-primary font-medium hover:underline">Privacy Policy</Link> and{" "}
            <Link to="https://policies.google.com/terms" className="text-primary font-medium hover:underline">Terms of Service</Link> apply.
          </p>
        </CardContent>
      </Card>
    </div>
    </>
  );
};

export default Signup;

