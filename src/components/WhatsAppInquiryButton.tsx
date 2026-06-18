"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppInquiryButtonProps {
  productName: string;
  className?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
}

export function WhatsAppInquiryButton({ productName, className, variant = "default" }: WhatsAppInquiryButtonProps) {
  const phoneNumber = "918459711477"; // Primary WhatsApp number
  
  const message = `Hello Nutri Natural Powders,

I am interested in:
Product: ${productName}

Please share:
* Pricing
* MOQ
* Packaging Details
* Delivery Information

Thank You.`;

  const handleInquiry = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <Button 
      onClick={handleInquiry} 
      className={className}
      variant={variant}
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      Inquire via WhatsApp
    </Button>
  );
}
