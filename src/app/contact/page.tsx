"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormState {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formState, setFormState] = useState<FormState>({
    isLoading: false,
    isSuccess: false,
    error: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ isLoading: true, isSuccess: false, error: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setFormState({
        isLoading: false,
        isSuccess: true,
        error: null,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setFormState({
        isLoading: false,
        isSuccess: false,
        error: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary))_0%,transparent_85%)] opacity-[0.03]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--secondary))_0%,transparent_50%)] opacity-[0.03]" />
          <div className="absolute inset-0 bg-noise opacity-[0.015]" />
        </div>

        <div className="container relative py-24 md:py-32">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
            <div className="w-fit inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs text-primary">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary opacity-80" />
              CONTACT US
            </div>

            <h1 className="text-3xl font-light tracking-tight sm:text-5xl">
              Transform Your Business with{" "}
              <span className="bg-gradient-to-r from-primary/80 via-secondary/80 to-accent/80 dark:from-primary dark:via-secondary dark:to-accent bg-clip-text text-transparent">
                Micro-Precision
              </span>
            </h1>

            <p className="mx-auto max-w-[42rem] text-base text-muted-foreground sm:text-lg">
              Discover how Old World Labs can transform your business with our
              cutting-edge 3D micro-lithography solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-12 md:py-24">
        <div className="mx-auto grid max-w-[980px] gap-12 lg:grid-cols-[1fr,1fr]">
          {/* Information Section */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="w-fit inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs text-primary">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary opacity-80" />
                MATERIALS
              </div>
              <div className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {materials.map((material) => (
                    <li key={material} className="flex items-start gap-2">
                      <div className="mt-1.5 h-1 w-1 rounded-full bg-primary/50" />
                      <span>{material}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground">
                  Our equipment can process most materials, if you have a custom
                  request please inquire.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-fit inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs text-primary">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary opacity-80" />
                TOLERANCING AND RESOLUTION
              </div>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  A 10-micron inner diameter microfluidic channel is different
                  than a 10-micron surface finish.
                </p>
                <p className="text-sm text-muted-foreground">
                  Please detail your resolution and tolerancing requirements in
                  your message.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-fit inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs text-primary">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary opacity-80" />
                SECURE FILE EXCHANGE
              </div>
              <p className="text-sm text-muted-foreground">
                If your files require an NDA or secure file exchange including a
                physical drive please let us know in your message.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative space-y-6">
            <div className="group relative overflow-hidden rounded-lg border border-primary/10 bg-primary/[0.02] p-8">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,hsl(var(--primary))_0%,transparent_70%)] opacity-[0.05]" />
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-light">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-primary/10 bg-primary/[0.02] px-4 py-2 text-sm backdrop-blur-sm transition-colors focus:border-primary/20 focus:outline-none disabled:opacity-50"
                    disabled={formState.isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-light">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-primary/10 bg-primary/[0.02] px-4 py-2 text-sm backdrop-blur-sm transition-colors focus:border-primary/20 focus:outline-none disabled:opacity-50"
                    disabled={formState.isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-light">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-primary/10 bg-primary/[0.02] px-4 py-2 text-sm backdrop-blur-sm transition-colors focus:border-primary/20 focus:outline-none disabled:opacity-50"
                    disabled={formState.isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-light">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-md border border-primary/10 bg-primary/[0.02] px-4 py-2 text-sm backdrop-blur-sm transition-colors focus:border-primary/20 focus:outline-none disabled:opacity-50"
                    disabled={formState.isLoading}
                  />
                </div>

                {formState.error && (
                  <div className="rounded-md border border-destructive/10 bg-destructive/5 p-4 text-sm text-destructive">
                    {formState.error}
                  </div>
                )}

                {formState.isSuccess && (
                  <div className="rounded-md border border-primary/10 bg-primary/5 p-4 text-sm text-primary">
                    Message sent successfully! We&apos;ll get back to you soon.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState.isLoading}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/10 bg-primary/5 px-6 py-2 text-sm backdrop-blur-sm transition-colors hover:border-primary/20 hover:bg-primary/10 disabled:opacity-50"
                >
                  {formState.isLoading ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRightIcon className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const materials = [
  "High-temperature materials for molding",
  "Durable material for basic engineering",
  "Biocompatible materials",
  "Custom advanced art",
];
