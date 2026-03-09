"use server";

type ActionResult = { success: true; message: string } | { success: false; message: string };

export async function submitAppointment(
  _prevState: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  const name = (formData.get("name") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const service = (formData.get("service") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || name.length < 2) {
    return { success: false, message: "Please enter your full name." };
  }
  if (!phone || phone.length < 10) {
    return { success: false, message: "Please enter a valid phone number." };
  }
  if (!service) {
    return { success: false, message: "Please select a service." };
  }

  // Basic phone normalization for validation
  const phoneDigits = phone.replace(/\D/g, "");
  if (phoneDigits.length < 10) {
    return { success: false, message: "Please enter a valid 10-digit phone number." };
  }

  try {
    // Log for development; replace with email/DB in production
    console.info("[Appointment]", { name, phone, service, message });
    return {
      success: true,
      message: "Thank you! We will contact you shortly to confirm your appointment.",
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong. Please call us at +91 82341 721 to book.",
    };
  }
}
