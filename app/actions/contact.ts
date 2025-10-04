"use server"

import { createClient } from "@/lib/supabase/server"
import type { ContactSubmission } from "@/lib/types"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!name || !email || !message) {
    return { error: "All fields are required" }
  }

  if (name.length < 2) {
    return { error: "Name must be at least 2 characters" }
  }

  if (message.length < 10) {
    return { error: "Message must be at least 10 characters" }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { error: "Please enter a valid email address" }
  }

  try {
    const supabase = await createClient()

    const submission: ContactSubmission = {
      name,
      email,
      message,
    }

    const { error } = await supabase.from("contact_submissions").insert(submission)

    if (error) {
      console.error("[v0] Contact form submission error:", error)
      return { error: "Failed to submit form. Please try again later." }
    }

    return { success: true }
  } catch (error) {
    console.error("[v0] Unexpected error in contact form:", error)
    return { error: "An unexpected error occurred. Please try again." }
  }
}
