"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { Loader2, CheckCircle, X } from "lucide-react"

export default function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    consent: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, consent: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)

      // Mostrar el mensaje de agradecimiento
      setShowThankYou(true)

      // Intentar también con el toast
      toast({
        title: "¡Gracias por su mensaje!",
        description: "Gracias por contactarnos. Nos pondremos en contacto con usted pronto.",
        duration: 5000,
      })

      // Limpiar el formulario
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        consent: false,
      })

      // Ocultar el mensaje después de 5 segundos
      setTimeout(() => {
        setShowThankYou(false)
      }, 5000)
    }, 1500)
  }

  return (
    <>
      {showThankYou && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <div className="bg-card p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              onClick={() => setShowThankYou(false)}
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex flex-col items-center text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">¡Gracias por su mensaje!</h3>
              <p className="text-muted-foreground">
                Gracias por contactarnos. Nos pondremos en contacto con usted pronto.
              </p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Asunto</Label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Asunto de tu mensaje"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Mensaje</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Escribe tu mensaje aquí..."
            rows={5}
            required
          />
        </div>
        <div className="flex items-start space-x-2">
          <Checkbox id="consent" checked={formData.consent} onCheckedChange={handleCheckboxChange} required />
          <Label htmlFor="consent" className="text-sm leading-tight">
            Acepto el procesamiento de mis datos personales de acuerdo con la{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Política de Privacidad
            </a>
            .
          </Label>
        </div>
        <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...
            </>
          ) : (
            "Enviar mensaje"
          )}
        </Button>
      </form>
    </>
  )
}
