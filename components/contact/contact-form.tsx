"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "@/app/actions/contact";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const result = await submitContactForm(formData);

      if (result?.error) {
        setError(result.error);
        setIsSubmitting(false);
        return;
      }

      setSuccess(true);
      e.currentTarget.reset();

      // Redirect after success message is shown
      const timer = setTimeout(() => {
        router.push("/");
      }, 2000);

      // Cleanup timeout on unmount or re-submit
      return () => clearTimeout(timer);
    } catch (err) {
      console.error("Form submission error:", err);
      setError("An unexpected error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div
        role="alert"
        aria-live="polite"
        className="rounded-lg bg-primary/10 p-6 text-center"
      >
        <h3 className="mb-2 text-lg font-semibold text-primary">Message Sent Successfully!</h3>
        <p className="text-sm text-muted-foreground">
          Thank you for reaching out. I'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Your name"
          required
          disabled={isSubmitting}
          aria-describedby={error ? "form-error" : undefined}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          required
          disabled={isSubmitting}
          aria-describedby={error ? "form-error" : undefined}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about your project or inquiry..."
          rows={6}
          required
          disabled={isSubmitting}
          aria-describedby={error ? "form-error" : undefined}
        />
      </div>

      {error && (
        <div
          id="form-error"
          role="alert"
          aria-live="assertive"
          className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive"
        >
          {error}
        </div>
      )}

      <Button
        type="submit"
        className="w-full transition-transform duration-200 hover:scale-105 active:scale-95"
        disabled={isSubmitting}
        aria-disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}