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
  phone: z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  school: z.string().min(1, "School / College name is required"),
  district: z.string().min(1, "District name is required"),
  teamLead: z.string().optional(),
  teamLeadPhn: z
    .string()
    .regex(/^\d{10}$/, "Team Lead's phone number must be exact 10 digits")
    .optional()
    .or(z.literal("")), // This allows an empty string as a valid input
});

export type RegistrationType = {
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  school: string;
  district: string;
  teamLead?: string;
  teamLeadPhn?: string;
};

// Campus ambassador form fields
// Full Name
// Email
// Phone
// College/School - Try to get a list of Kerala schools and Colleges
// Branch - Dropdown, Other field if branch not in dropdown
// Year
// Clubs, Teams, Activities you're in
// Why do you want to be an ambassador?
// Your links
// Anything else?

export const CampusAmbassadorSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    ),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  institution: z.string().min(1, "College/School name is required"),
  branch: z.string().min(1, "Branch is required"),
  year: z.string().min(1, "Year is required"),
  clubsTeamsActivities: z.string().optional(),
  whyAmbassador: z.string().min(1, "This field is required"),
  links: z.string().optional(),
  additional: z.string().optional(),
});

export type CampusAmbassadorType = {
  fullName: string;
  email: string;
  phone: string;
  institution: string;
  branch: string;
  year: string;
  whyAmbassador: string;
  clubsTeamsActivities?: string;
  links?: string;
  additional?: string;
};
