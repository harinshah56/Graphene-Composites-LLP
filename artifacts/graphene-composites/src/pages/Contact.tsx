import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  company: z.string().optional(),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(5, "Phone number required."),
  interest: z.string().min(1, "Please select an area of interest."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would be an API call
    console.log(values);
    toast({
      title: "Message Sent Successfully",
      description: "Our sales team will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <PageLayout>
      <div className="py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Get in Touch" 
            subtitle="Reach out to discuss your composite requirements, request a quote, or explore partnership opportunities."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <Card className="border-border shadow-md">
                <CardContent className="p-8 space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground font-display text-lg mb-2">Headquarters & Plant</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Opp Baroda Dairy, Savli-Jarod Road,<br/>
                        Savli - Vadodara Rd, Gothda,<br/>
                        Vadodara, Gujarat 391770<br/>
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground font-display text-lg mb-2">Phone</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        +91 96626 77211
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground font-display text-lg mb-2">Email</h4>
                      <a href="mailto:sanjay@graphenecomposites.in" className="text-primary hover:underline leading-relaxed block">
                        sanjay@graphenecomposites.in
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <div className="bg-secondary rounded-xl h-64 border border-border flex items-center justify-center overflow-hidden">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>Interactive Map Embed</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-border shadow-xl h-full">
                <CardContent className="p-8 md:p-10">
                  <h3 className="text-2xl font-bold font-display text-foreground mb-8">Send us a Message</h3>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} className="bg-secondary" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Acme Corp" {...field} className="bg-secondary" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" {...field} className="bg-secondary" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="+1 (555) 000-0000" {...field} className="bg-secondary" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="interest"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Area of Interest *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-secondary">
                                  <SelectValue placeholder="Select a product/service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="pultrusion">Pultruded Profiles</SelectItem>
                                <SelectItem value="moulding">Custom Moulding</SelectItem>
                                <SelectItem value="grating">FRP Grating</SelectItem>
                                <SelectItem value="contract">Contract Manufacturing</SelectItem>
                                <SelectItem value="other">Other Inquiry</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message / Requirements *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please provide details about your requirements..." 
                                className="min-h-[150px] bg-secondary resize-none" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" size="lg" className="w-full md:w-auto px-10 h-14 text-lg">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </PageLayout>
  );
}
