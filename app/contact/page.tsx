"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, MapPin, Phone } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contacta con Nosotros</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o sugerencia? Estamos aquí para ayudarte. Completa el formulario a continuación y
            nos pondremos en contacto contigo lo antes posible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="bg-muted p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Dirección</h3>
                  <address className="not-italic text-muted-foreground">
                    Avinguda Diagonal, 177
                    <br />
                    08018 Barcelona, Spain
                  </address>
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Teléfono</h3>
                  <p className="text-muted-foreground">+34 695 678 12</p>
                  <p className="text-sm mt-2">
                    Lun - Vie: 9:00 - 18:00
                    <br />
                    Sáb: 10:00 - 14:00
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground">info@pulsesportnews.co</p>
                  <p className="text-sm mt-2">Para consultas generales y colaboraciones</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>¿Cómo puedo suscribirme al boletín de noticias?</AccordionTrigger>
              <AccordionContent>
                Puedes suscribirte a nuestro boletín de noticias desde la página principal, introduciendo tu dirección
                de correo electrónico en el formulario de suscripción. También puedes hacerlo desde el pie de página de
                cualquier sección de nuestra web.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>¿Cómo puedo colaborar con EstrellaDeporte News?</AccordionTrigger>
              <AccordionContent>
                Estamos siempre abiertos a colaboraciones con periodistas, analistas deportivos y expertos en diferentes
                disciplinas. Si estás interesado en colaborar con nosotros, envíanos un mensaje a través del formulario
                de contacto indicando tu experiencia y área de especialización.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>¿Ofrecen servicios de publicidad en su web?</AccordionTrigger>
              <AccordionContent>
                Sí, ofrecemos diferentes opciones de publicidad adaptadas a las necesidades de cada cliente. Contamos
                con espacios publicitarios en nuestra web, boletín de noticias y redes sociales. Para más información
                sobre tarifas y disponibilidad, contacta con nuestro departamento comercial en
                comercial@estrelladeporte.co.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>¿Cómo puedo reportar un error en una noticia?</AccordionTrigger>
              <AccordionContent>
                La precisión informativa es una de nuestras prioridades. Si has detectado algún error en nuestras
                noticias, puedes reportarlo a través del formulario de contacto o enviando un email a
                correciones@estrelladeporte.co. Agradecemos tu colaboración para mejorar la calidad de nuestra
                información.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>¿Tienen aplicación móvil?</AccordionTrigger>
              <AccordionContent>
                Actualmente estamos desarrollando nuestra aplicación móvil para iOS y Android. Esperamos lanzarla en los
                próximos meses. Mientras tanto, nuestra web está completamente optimizada para dispositivos móviles,
                ofreciendo una experiencia de navegación óptima desde cualquier smartphone o tablet.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>¿Cómo puedo solicitar una entrevista o reportaje especial?</AccordionTrigger>
              <AccordionContent>
                Si representas a un club, deportista o evento deportivo y estás interesado en que realicemos una
                entrevista o reportaje especial, puedes contactarnos a través del formulario o enviando un email a
                redaccion@estrelladeporte.co con todos los detalles de tu propuesta.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

      </div>
    </div>
  )
}
