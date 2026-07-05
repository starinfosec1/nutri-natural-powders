"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle } from "lucide-react";

export function ContactForm({ t }: { t: any }) {
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
    let text = `${t.contact.whatsappMsgNewInquiry}\n\n`;
    if (formData.name) text += `${t.contact.whatsappMsgName} ${formData.name}\n`;
    if (formData.company) text += `${t.contact.whatsappMsgCompany} ${formData.company}\n`;
    if (formData.email) text += `${t.contact.whatsappMsgEmail} ${formData.email}\n`;
    if (formData.phone) text += `${t.contact.whatsappMsgPhone} ${formData.phone}\n`;
    if (formData.product) text += `${t.contact.whatsappMsgProduct} ${formData.product}\n\n`;
    if (formData.message) text += `${t.contact.whatsappMsgMessage}\n${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/918459711477?text=${encodedText}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">{t.contact.formName}</label>
          <Input id="name" value={formData.name} onChange={handleChange} placeholder={t.contact.formNamePlaceholder} required />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium">{t.contact.formCompany}</label>
          <Input id="company" value={formData.company} onChange={handleChange} placeholder={t.contact.formCompanyPlaceholder} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">{t.contact.formEmail}</label>
          <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder={t.contact.formEmailPlaceholder} />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">{t.contact.formPhone}</label>
          <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder={t.contact.formPhonePlaceholder} required />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="product" className="text-sm font-medium">{t.contact.formProduct}</label>
        <Input id="product" value={formData.product} onChange={handleChange} placeholder={t.contact.formProductPlaceholder} />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">{t.contact.formMessage}</label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t.contact.formMessagePlaceholder}
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
          {t.contact.inquireViaWhatsApp}
        </button>
      </div>
    </form>
  );
}
