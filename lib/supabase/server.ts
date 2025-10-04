import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient("https://efaijzixwmkqkgkqzmwf.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmYWlqeml4d21rcWtna3F6bXdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0MTQ3NjAsImV4cCI6MjA3NDk5MDc2MH0.vrVKZJW2KoEyko1Ia_fR8IqrRvk7JcU31jMpRGG2hwc", {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        } catch {
          // The "setAll" method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  })
}
