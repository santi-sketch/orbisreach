// Ejemplo de uso del componente GHLCalendar en diferentes contextos

import GHLCalendar from '@/components/GHLCalendar'

// Ejemplo 1: Uso básico
export function BasicGHLCalendar() {
  return (
    <GHLCalendar 
      bookingUrl="https://link.nexumautomations.com/widget/booking/360ULIwZNVRSoOsl2mST"
    />
  )
}

// Ejemplo 2: Con estilos personalizados
export function StyledGHLCalendar() {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
      <GHLCalendar 
        bookingUrl="https://link.nexumautomations.com/widget/booking/360ULIwZNVRSoOsl2mST"
        className="w-full"
        minHeight="800px"
      />
    </div>
  )
}

// Ejemplo 3: En una página de contacto
export function ContactPageWithCalendar() {
  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Agenda una Reunión
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Información de Contacto
            </h2>
            <p className="text-gray-300 mb-6">
              Completa el formulario para agendar una reunión personalizada.
            </p>
          </div>
          
          <div>
            <GHLCalendar 
              bookingUrl="https://link.nexumautomations.com/widget/booking/360ULIwZNVRSoOsl2mST"
              className="w-full"
              minHeight="600px"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// Ejemplo 4: Con variables de entorno
export function GHLCalendarWithEnv() {
  const bookingUrl = process.env.NEXT_PUBLIC_GHL_BOOKING_URL || 
    'https://link.nexumautomations.com/widget/booking/360ULIwZNVRSoOsl2mST'

  return (
    <GHLCalendar 
      bookingUrl={bookingUrl}
      className="w-full max-w-4xl mx-auto"
      minHeight="700px"
    />
  )
}
