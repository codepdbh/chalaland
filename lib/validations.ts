import { z } from "zod";

/** Contact form validation schema */
export const contactSchema = z.object({
  nombre: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede exceder 100 caracteres"),
  email: z
    .string()
    .email("Ingrese un correo electrónico válido"),
  telefono: z
    .string()
    .optional(),
  motivo: z
    .string()
    .min(1, "Seleccione un motivo de contacto"),
  mensaje: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(2000, "El mensaje no puede exceder 2000 caracteres"),
  // Honeypot field — must remain empty
  website: z.string().max(0, "").optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

/** Reservation form validation schema */
export const reservationSchema = z.object({
  nombre: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres"),
  apellido: z
    .string()
    .min(2, "El apellido debe tener al menos 2 caracteres"),
  nacionalidad: z
    .string()
    .min(2, "Ingrese su nacionalidad"),
  telefono: z
    .string()
    .optional(),
  contactarWhatsapp: z
    .boolean()
    .optional(),
  email: z
    .string()
    .email("Ingrese un correo electrónico válido"),
  fechaLlegada: z
    .string()
    .min(1, "Seleccione una fecha de llegada"),
  paquete: z
    .string()
    .min(1, "Seleccione un paquete"),
  tipoHabitacion: z
    .string()
    .min(1, "Seleccione un tipo de habitación"),
  cantidadPersonas: z
    .string()
    .min(1, "Seleccione la cantidad de personas"),
  mensaje: z
    .string()
    .optional(),
  // Honeypot field
  website: z.string().max(0, "").optional(),
});

export type ReservationFormData = z.infer<typeof reservationSchema>;
