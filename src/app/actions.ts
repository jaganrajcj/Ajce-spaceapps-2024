"use server"

import { RegisterSchema, RegistrationType } from "@/lib/types"
import { PrismaClient } from '@prisma/client';

export const registerUser = async (data: RegistrationType) => {
    try {
        console.log(data)
        
        const validate = RegisterSchema.safeParse(data);
        
        if (!validate.success) return {
            success: false,
            message: "Validation failed, please check your fields!",
        };

        // If validation succeeds, proceed with database insertion
        
        const prisma = new PrismaClient();
        const newRegistration = await prisma.registrations.create({
            data: {
                firstName: validate.data.firstName,
                lastName: validate.data.lastName || '', // Handle optional field last name
                email: validate.data.email,
                phone: validate.data.phone,
                institution: validate.data.school, // 'school/college' in the schema maps to 'institution' in the database
                district: validate.data.district,
                teamLeadName: validate.data.teamLead,
                teamLeadPhone: validate.data.teamLeadPhn
            }
        });

        return {
            success: true,
            message: "Registration successful, we'll be in touch with you shortly!",
            // data: newRegistration
        };

    }
    catch (err) {
        console.log(err)
        return {
            success: false,
            message: "Registration failed, please try again",
        };

    }
}