"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    let text = `*New Inquiry*\n\n`;
    if (formData.name) text += `*Name:* ${formData.name}\n`;
    if (formData.company) text += `*Company:* ${formData.company}\n`;
    if (formData.email) text += `*Email:* ${formData.email}\n`;
    if (formData.phone) text += `*Phone:* ${formData.phone}\n`;
    if (formData.product) text += `*Product:* ${formData.product}\n\n`;
    if (formData.message) text += `*Message:*\n${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/918459711477?text=${encodedText}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">Full Name</label>
          <Input id="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium">Company Name</label>
          <Input id="company" value={formData.company} onChange={handleChange} placeholder="Acme Corp" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">Email Address</label>
          <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
          <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" required />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="product" className="text-sm font-medium">Product of Interest</label>
        <Input id="product" value={formData.product} onChange={handleChange} placeholder="e.g. Moringa Powder" />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Please let us know your requirements (MOQ, specifications, etc.)"
          className="min-h-[150px]"
          required
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold px-8 py-3 rounded-full text-base transition-colors shadow-sm"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          Inquire via WhatsApp
        </button>
      </div>
    </form>
  );
}
