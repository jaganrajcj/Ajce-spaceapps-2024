import { z } from "zod";

// Zod schema for registration validation, used in client as well as server action
export const RegisterSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().optional(),
    email: z
        .string()
        .email("Invalid email address")
        .regex(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Invalid email format"
        ),
    phone: z.string().regex(/^\d{10}$/, "Phone number is required"),
    school: z.string().min(1, "School / College name is required"),
    district: z
        .string()
        .min(1, "District is required")
        .regex(/^[a-zA-Z\s]+$/, "District name is required"),
    teamLead: z.string().min(3, "Team Lead's name is required"),
    teamLeadPhn: z
        .string()
        .regex(/^\d{10}$/, "Team Lead's phone number is required"),
});

export type RegistrationType = {
    firstName: string;
    lastName?: string;
    email: string;
    phone: string;
    school: string;
    district: string;
    teamLead: string;
    teamLeadPhn: string;
}