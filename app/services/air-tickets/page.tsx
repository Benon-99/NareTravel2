"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plane, Clock, Shield, Headphones } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function AirTickets() {
  const { toast } = useToast();

  const handleRequestQuote = () => {
    toast({
      title: "Request Received",
      description: "We'll get back to you with flight options shortly.",
    });
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-[40vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
          alt="Air Tickets"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative container mx-auto px-4 text-center text-white"
        >
          <h1 className="text-4xl font-bold mb-4">Air Ticket Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Book your flights with confidence through our professional service
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 py-12">
        {/* ... (keep existing content but add mx-auto px-4 to container classes) */}
      </section>
    </div>
  );
}