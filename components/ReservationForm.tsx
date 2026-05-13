"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reservationSchema, type ReservationFormData } from "@/lib/validations";
import { packageOptions, roomOptions, peopleOptions } from "@/data/packages";
import { cn } from "@/lib/utils";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ReservationForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
  });

  const onSubmit = async (data: ReservationFormData) => {
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

      console.log("🏨 Reservation form submitted:", data);
      setStatus("success");
      reset();

      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      console.error("Reservation form error");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-dark placeholder:text-gray-text/50 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-colors shadow-sm";
  const labelClasses = "block text-sm font-semibold text-dark mb-1.5";
  const errorClasses = "text-red-500 text-xs mt-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input type="text" {...register("website")} tabIndex={-1} autoComplete="off" />
      </div>

      {/* Name + Surname Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="res-nombre" className={labelClasses}>
            Nombre <span className="text-orange">*</span>
          </label>
          <input
            id="res-nombre"
            type="text"
            className={cn(inputClasses, errors.nombre && "border-red-500")}
            placeholder="Tu nombre"
            {...register("nombre")}
          />
          {errors.nombre && <p className={errorClasses}>{errors.nombre.message}</p>}
        </div>
        <div>
          <label htmlFor="res-apellido" className={labelClasses}>
            Apellido <span className="text-orange">*</span>
          </label>
          <input
            id="res-apellido"
            type="text"
            className={cn(inputClasses, errors.apellido && "border-red-500")}
            placeholder="Tu apellido"
            {...register("apellido")}
          />
          {errors.apellido && <p className={errorClasses}>{errors.apellido.message}</p>}
        </div>
      </div>

      {/* Nationality */}
      <div>
        <label htmlFor="res-nacionalidad" className={labelClasses}>
          Nacionalidad <span className="text-orange">*</span>
        </label>
        <input
          id="res-nacionalidad"
          type="text"
          className={cn(inputClasses, errors.nacionalidad && "border-red-500")}
          placeholder="Tu nacionalidad"
          {...register("nacionalidad")}
        />
        {errors.nacionalidad && <p className={errorClasses}>{errors.nacionalidad.message}</p>}
      </div>

      {/* Phone + WhatsApp */}
      <div>
        <label htmlFor="res-telefono" className={labelClasses}>
          Teléfono
        </label>
        <input
          id="res-telefono"
          type="tel"
          className={inputClasses}
          placeholder="+591 7XXXXXXX"
          {...register("telefono")}
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          id="res-whatsapp"
          type="checkbox"
          className="w-4 h-4 accent-orange rounded"
          {...register("contactarWhatsapp")}
        />
        <label htmlFor="res-whatsapp" className="text-sm text-gray-text">
          Me pueden contactar por WhatsApp
        </label>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="res-email" className={labelClasses}>
          Correo Electrónico <span className="text-orange">*</span>
        </label>
        <input
          id="res-email"
          type="email"
          className={cn(inputClasses, errors.email && "border-red-500")}
          placeholder="tu@correo.com"
          {...register("email")}
        />
        {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
      </div>

      {/* Arrival Date */}
      <div>
        <label htmlFor="res-fecha" className={labelClasses}>
          Fecha Deseada de Llegada <span className="text-orange">*</span>
        </label>
        <input
          id="res-fecha"
          type="date"
          className={cn(inputClasses, errors.fechaLlegada && "border-red-500")}
          {...register("fechaLlegada")}
        />
        {errors.fechaLlegada && <p className={errorClasses}>{errors.fechaLlegada.message}</p>}
      </div>

      {/* Package Selection */}
      <div>
        <label htmlFor="res-paquete" className={labelClasses}>
          Paquete <span className="text-orange">*</span>
        </label>
        <select
          id="res-paquete"
          className={cn(inputClasses, errors.paquete && "border-red-500")}
          {...register("paquete")}
        >
          <option value="">Seleccione un paquete</option>
          {packageOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.paquete && <p className={errorClasses}>{errors.paquete.message}</p>}
      </div>

      {/* Room Type */}
      <div>
        <label htmlFor="res-habitacion" className={labelClasses}>
          Tipo de Habitación <span className="text-orange">*</span>
        </label>
        <select
          id="res-habitacion"
          className={cn(inputClasses, errors.tipoHabitacion && "border-red-500")}
          {...register("tipoHabitacion")}
        >
          <option value="">Seleccione tipo de habitación</option>
          {roomOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.tipoHabitacion && (
          <p className={errorClasses}>{errors.tipoHabitacion.message}</p>
        )}
      </div>

      {/* People Count */}
      <div>
        <label htmlFor="res-personas" className={labelClasses}>
          Cantidad de Personas <span className="text-orange">*</span>
        </label>
        <select
          id="res-personas"
          className={cn(inputClasses, errors.cantidadPersonas && "border-red-500")}
          {...register("cantidadPersonas")}
        >
          <option value="">Seleccione cantidad</option>
          {peopleOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.cantidadPersonas && (
          <p className={errorClasses}>{errors.cantidadPersonas.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="res-mensaje" className={labelClasses}>
          Mensaje Adicional
        </label>
        <textarea
          id="res-mensaje"
          rows={4}
          className={cn(inputClasses, "resize-y")}
          placeholder="¿Alguna solicitud especial o pregunta?"
          {...register("mensaje")}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className={cn(
          "w-full py-3.5 bg-orange text-white font-heading font-semibold rounded-full shadow-lg shadow-orange/20",
          "hover:bg-orange-hover hover:-translate-y-0.5 transition-all duration-300",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "flex items-center justify-center gap-2"
        )}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Enviando solicitud...
          </>
        ) : (
          "Enviar Solicitud de Reserva"
        )}
      </button>

      {/* Status Messages */}
      {status === "success" && (
        <div className="flex items-center gap-2 text-green-600 text-sm bg-green-50 p-3 rounded-xl">
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          <span>¡Solicitud enviada! Nos pondremos en contacto para confirmar su reserva.</span>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-xl">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>Hubo un error. Por favor, intenta nuevamente o contáctanos por WhatsApp.</span>
        </div>
      )}
    </form>
  );
}
