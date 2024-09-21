"use server";
import bcrypt from "bcrypt";

import {
  RegisterSchema,
  RegistrationType,
  CampusAmbassadorSchema,
  CampusAmbassadorType,
} from "@/lib/types";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";
import { mailTemplate } from "@/lib/mailTemplate";

export const registerUser = async (data: RegistrationType) => {
  try {
    console.log(data);

    const validate = RegisterSchema.safeParse(data);

    if (!validate.success)
      return {
        success: false,
        message: "Validation failed, please check your fields!",
      };

    // If validation succeeds, proceed with database insertion

    const prisma = new PrismaClient();

    const newRegistration = await prisma.registrations.create({
      data: {
        firstName: validate.data.firstName,
        lastName: validate.data.lastName || "", // Handle optional field last name
        email: validate.data.email,
        phone: validate.data.phone,
        institution: validate.data.school, // 'school/college' in the schema maps to 'institution' in the database
        district: validate.data.district,
        teamLeadName: validate.data.teamLead ?? "N/A",
        teamLeadPhone: validate.data.teamLeadPhn ?? "N/A",
        referredBy: validate.data.referredBy,
      },
    });

    sendConfirmationEmail(
      validate.data.firstName + " " + validate.data.lastName || "",
      validate.data.email
    );
    return {
      success: true,
      message: "Registration successful, we'll be in touch with you shortly!",
      // data: newRegistration
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: "Registration failed, please try again",
    };
  }
};

export const registerCampusAmbassador = async (data: CampusAmbassadorType) => {
  try {
    const validate = CampusAmbassadorSchema.safeParse(data);

    if (!validate.success)
      return {
        success: false,
        message: "Validation failed, please check your fields!",
      };

    const prisma = new PrismaClient();

    const existingUser = await prisma.ambassador.findFirst({
      where: {
        email: validate.data.email,
      },
    });

    if (existingUser) {
      return {
        success: false,
        message: "Email already registered",
      };
    }

    const ambassadorCount = await prisma.ambassador.count();
    console.log(ambassadorCount);
    const referralCode = "SPCAJC" + (ambassadorCount + 1);

    const newAmbassador = await prisma.ambassador.create({
      data: {
        fullName: validate.data.fullName,
        email: validate.data.email,
        referralCode,
        phone: validate.data.phone,
        institution: validate.data.institution,
        branch: validate.data.branch,
        year: validate.data.year,
        whyAmbassador: validate.data.whyAmbassador,
        clubsTeamsActivities: validate.data.clubsTeamsActivities,
        links: validate.data.links,
        additional: validate.data.additional,
      },
    });

    return {
      success: true,
      message: "Registration successful, we'll be in touch with you shortly!",
      referralCode,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: "Registration failed, please try again",
    };
  }
};

const sendConfirmationEmail = async (name: string, email: string) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const res = await transporter.sendMail({
    from: '"NASA Space Apps AJCE" nasaspaceapps@ajce.in',
    to: email,
    subject: "NASA Space Apps Challenge 2024 Registration Confirmation",
    html: mailTemplate(name),
  });
  console.log(res);
};

export const getRegistrations = async () => {
  const prisma = new PrismaClient();
  try {
    const registrations = await prisma.registrations.findMany();
    return registrations.map((reg) => ({
      id: reg.id,
      firstName: reg.firstName,
      lastName: reg.lastName,
      email: reg.email,
      phone: reg.phone,
      institution: reg.institution,
      district: reg.district,
      teamLeadName: reg.teamLeadName,
      teamLeadPhone: reg.teamLeadPhone,
    }));
  } catch (err) {
    console.log("Error while fetching users ", err);
  } finally {
    await prisma.$disconnect();
  }
};

export const getUsers = async () => {
  const prisma = new PrismaClient();
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
      },
    });
    return users;
  } catch (err) {
    console.log("Error while fetching users ", err);
  } finally {
    await prisma.$disconnect();
  }
};

interface UserData {
  email: string;
  password: string;
  name: string;
}

export const createUser = async (userData: UserData) => {
  // Replace any with appropriate return type
  const { email, password, name } = userData;
  const prisma = new PrismaClient();

  // Basic email validation
  if (!isValidEmail(email)) {
    throw new Error("Invalid email format");
  }

  // Password hashing
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });
    console.log(user);
    return true;
  } catch (error) {
    // Handle potential database errors or duplicate email
    console.error("Error creating user:", error);
    return false;
  }
};

function isValidEmail(email: string): boolean {
  // Add more robust email validation if needed
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
