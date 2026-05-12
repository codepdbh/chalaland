"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { contactInfo } from "@/data/contact";
import { cn } from "@/lib/utils";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");

    try {
      // =============================================
      // GITHUB PAGES: Simulación client-side
      // Para envío real, conectar con un servicio externo:
      //   - Formspree (https://formspree.io)
      //   - EmailJS (https://emailjs.com)
      //   - Getform (https://getform.io)
      //   - O tu propio backend API
      // =============================================
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("📧 Contact form submitted:", data);
      setStatus("success");
      reset();

      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      console.error("Contact form error");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm text-dark placeholder:text-gray-text/50 focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors";
  const labelClasses = "block text-sm font-semibold text-dark mb-1.5";
  const errorClasses = "text-red-500 text-xs mt-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input type="text" {...register("website")} tabIndex={-1} autoComplete="off" />
      </div>

      {/* Name */}
      <div>
        <label htmlFor="contact-nombre" className={labelClasses}>
          Nombre <span className="text-orange">*</span>
        </label>
        <input
          id="contact-nombre"
          type="text"
          className={cn(inputClasses, errors.nombre && "border-red-500")}
          placeholder="Tu nombre completo"
          {...register("nombre")}
        />
        {errors.nombre && <p className={errorClasses}>{errors.nombre.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className={labelClasses}>
          Correo Electrónico <span className="text-orange">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          className={cn(inputClasses, errors.email && "border-red-500")}
          placeholder="tu@correo.com"
          {...register("email")}
        />
        {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="contact-telefono" className={labelClasses}>
          Teléfono
        </label>
        <input
          id="contact-telefono"
          type="tel"
          className={inputClasses}
          placeholder="+591 7XXXXXXX"
          {...register("telefono")}
        />
      </div>

      {/* Reason */}
      <div>
        <label htmlFor="contact-motivo" className={labelClasses}>
          Motivo de Contacto <span className="text-orange">*</span>
        </label>
        <select
          id="contact-motivo"
          className={cn(inputClasses, errors.motivo && "border-red-500")}
          {...register("motivo")}
        >
          <option value="">Seleccione un motivo</option>
          {contactInfo.contactReasons.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
        {errors.motivo && <p className={errorClasses}>{errors.motivo.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-mensaje" className={labelClasses}>
          Mensaje <span className="text-orange">*</span>
        </label>
        <textarea
          id="contact-mensaje"
          rows={5}
          className={cn(inputClasses, "resize-y", errors.mensaje && "border-red-500")}
          placeholder="Escribe tu mensaje aquí..."
          {...register("mensaje")}
        />
        {errors.mensaje && <p className={errorClasses}>{errors.mensaje.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className={cn(
          "w-full py-3.5 bg-orange text-white font-heading font-semibold rounded-full",
          "hover:bg-orange-hover transition-all duration-300",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "flex items-center justify-center gap-2"
        )}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar Mensaje"
        )}
      </button>

      {/* Status Messages */}
      {status === "success" && (
        <div className="flex items-center gap-2 text-green-600 text-sm bg-green-50 p-3 rounded-lg">
          <CheckCircle className="w-5 h-5" />
          <span>¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.</span>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
          <AlertCircle className="w-5 h-5" />
          <span>Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.</span>
        </div>
      )}
    </form>
  );
}
