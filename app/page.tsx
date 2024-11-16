"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Globe, CreditCard, Star } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { ImageWithFallback } from "@/components/image-with-fallback";

// ... (keep existing service and feature configurations)

export default function Home() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Return null on server-side and first render
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Keep existing JSX but wrap dynamic content in mounted check */}
      <section className="container mx-auto px-4 py-24 mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {t("home.services.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("home.services.subtitle")}
          </p>
        </div>
        {/* ... rest of the JSX */}
      </section>
    </div>
  );
}
