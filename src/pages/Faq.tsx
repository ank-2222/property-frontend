import  { useState } from "react";
import faqData from "../assets/faqData.json";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Search } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { Link } from "react-router-dom";

function Faq() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter FAQs based on search query
  const filteredFaqs = searchQuery
    ? faqData.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqData;

  return (
    <>
   <Navbar/> 
    <div className="max-w-6xl mx-auto space-y-8 py-30 text-[var(--color-text)]">
      {/* Hero Section with Background */}
      <div className="relative rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] opacity-90"></div>
        <div className="relative py-10 px-6 md:py-16 md:px-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">How Can We Help?</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Find answers to common questions or reach out to our support team
          </p>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search our FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pr-12 rounded-lg border-2 border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70" size={20} />
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className=" p-4 md:p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[var(--color-primary)] border-b pb-4 border-[var(--color-primary)]/20">
          {searchQuery ? "Search Results" : "Frequently Asked Questions"}
          {searchQuery && <span className="ml-2 text-sm font-normal text-[var(--color-ltext)]">({filteredFaqs.length} results)</span>}
        </h2>
        
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-[var(--color-ltext)] text-lg">No matching questions found. Try a different search term or contact us directly.</p>
          </div>
        ) : (
          <Accordion type="single" collapsible className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-[var(--color-primary)]/20 rounded-lg overflow-hidden bg-[var(--color-background)]/50 shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-[var(--color-primary)]/5 transition-colors">
                  <h3 className="font-medium text-base md:text-lg text-[var(--color-primary)] text-left">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-6 py-4 border-t border-[var(--color-primary)]/10">
                    <p className="text-[var(--color-text)] mt-2">{faq.answer}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
      
      {/* Not finding what you need section */}
      <div className="bg-[var(--color-primary)]/10 p-6 md:p-8 rounded-xl text-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[var(--color-primary)]">
          Not finding what you need?
        </h3>
        <p className="text-[var(--color-text)] mb-6 max-w-2xl mx-auto">
          Our support team is here to help. Reach out to us directly or browse our available properties.
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Link  to="/contact" className="bg-[var(--color-accent)] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[var(--color-accent)]/90 transition-colors">
            Contact Support
          </Link>
          <Link to="/properties" className="border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-3 rounded-lg shadow-md hover:bg-[var(--color-primary)]/10 transition-colors">
            Browse Properties
          </Link>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Faq;