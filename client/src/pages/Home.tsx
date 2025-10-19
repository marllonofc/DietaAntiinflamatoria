export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner / Letreiro */}
      <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-yellow-400 to-red-500 text-white h-8 flex items-center overflow-hidden shadow-md">
  <div
    className="font-semibold text-sm px-4 flex whitespace-nowrap"
    style={{
      animation: "marquee 40s linear infinite",
      display: "inline-flex",
    }}
  >
    <div className="mr-8">
      🚨 ¡Oferta Especial de Lanzamiento! Solo $10,00 - 👉 Dieta Antiinflamatoria + #3 Bonos Muy Especiales - Acceso Inmediato 🔥
    </div>
    <div>
      🚨 ¡Oferta Especial de Lanzamiento! Solo $10,00 - 👉 Dieta Antiinflamatoria + #3 Bonos Muy Especiales - Acceso Inmediato 🔥
    </div>
  </div>
</div>


      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            ¡DEJA DE <span className="text-red-500 font-bold drop-shadow-md">SUFRIR</span>!<br />
            Elimina Tu Dolor en <span className="whitespace-nowrap">30 Días</span><br />
            Sin Medicinas
          </h1>

          <p className="text-xl md:text-2xl mb-8 opacity-95">
            El método antiinflamatorio comprobado que está transformando la vida de miles de personas que vivían atrapadas por el dolor crónico
          </p>
          <div
            onClick={() => {
              const target = document.getElementById("transformacion");
              if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="bg-red-500 text-white inline-block px-6 py-2 rounded-full font-bold mb-4 animate-pulse cursor-pointer"
          >
            ⚡ OFERTA RELÁMPAGO: ¡Solo $10 por Tiempo Limitado!🔥
          </div>


          <div className="max-w-xs mx-auto my-8 bg-white p-5 rounded-2xl shadow-2xl">
            <img
              src="https://i.ibb.co/67SdQ0s6/Mockup-DA.png"
              alt="Guía Completa 30 Días"
              className="w-full object-contain rounded-lg"
            />
          </div>


          <a
            href="https://pay.kiwify.com/IhGlmNM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-xl px-12 py-5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            ¡QUIERO ELIMINAR MIS DOLORES AHORA!🔥
          </a>

          <div className="text-3xl font-bold my-4">De $97 por solo $10</div>
          <div className="text-sm line-through opacity-75 -mt-2 mb-2">Precio normal: $97</div>
          <div className="inline-block bg-white bg-opacity-20 px-6 py-3 rounded-full text-sm mt-4">
            🔒 Garantía de 7 días o tu dinero de vuelta
          </div>
        </div>
      </div>

      {/* Pain Points */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            ¿Estás DESPERDICIANDO Tu Vida por el Dolor?
          </h2>
          <div className="bg-white p-10 rounded-2xl shadow-md border-l-4 border-red-500">
            <p className="text-lg mb-4 text-gray-700">
              <strong className="text-red-600">DETENTE.</strong> ¿Cuántos años más vas a aceptar despertar sintiendo ese dolor que te impide vivir plenamente?
            </p>
            <p className="text-lg mb-4 text-gray-700">
              Mientras postergues la solución, la inflamación está <strong>destruyendo silenciosamente</strong> tus articulaciones, robando tu energía y envejeciendo tu cuerpo más rápido...
            </p>
            <p className="text-lg mb-4 text-gray-700">
              Ya gastaste CIENTOS (quizás MILES) en medicinas que solo ocultan el problema. Y el dolor siempre regresa, ¿verdad?
            </p>
            <p className="text-lg font-bold text-gray-900 text-center mt-6 text-xl">
              ⚠️ La verdad que nadie te cuenta: Tu cuerpo PUEDE curarse naturalmente.<br />
              <span className="text-red-600">Pero solo si le das el combustible correcto.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Solution */}
      <div className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white p-10 rounded-2xl text-center">
            <h3 className="text-3xl font-bold mb-6">
              Tienes 2 Opciones AHORA:
            </h3>
            <p className="text-lg leading-relaxed mb-4">
              <strong>Opción 1:</strong> Seguir gastando $200+ al mes en medicinas que te convertirán en prisionero del dolor el resto de tu vida...
            </p>
            <p className="text-lg leading-relaxed mb-6">
              <strong>Opción 2:</strong> Invertir solo $10 HOY y descubrir el método natural que ataca la RAÍZ de la inflamación en 30 días. Sin efectos secundarios. Sin dependencia.
            </p>
            <p className="text-2xl font-bold bg-white bg-opacity-30 py-4 px-6 rounded-lg">
              La decisión parece obvia, ¿no? 🎯
            </p>
          </div>
        </div>
      </div>

      {/* What's Included */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Lo Que Vas a Recibir
          </h2>
          <div className="space-y-4">
            {[
              {
                num: "1",
                title: "Plan Alimentario Completo de 30 Días",
                desc: "Todas las comidas planificadas, con lista de compras semanal y porciones exactas"
              },
              {
                num: "2",
                title: "Guía de Alimentos Antiinflamatorios",
                desc: "Lista completa de qué comer y qué evitar, con explicación científica de cada alimento"
              },
              {
                num: "3",
                title: "+De 85 Combinaciones de Recetas Prácticas y Deliciosas",
                desc: "Desayuno, almuerzo, cena y meriendas que combaten la inflamación sin sacrificar el sabor"
              },
              {
                num: "4",
                title: "Rastreador de Síntomas",
                desc: "Planilla para que sigas tu evolución día a día y veas los resultados aconteciendo"
              },
              {
                num: "5",
                title: "BONO: Guía de Suplementación",
                desc: "Los 5 suplementos naturales que potencializan los resultados de la dieta (opcional)"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  {item.num}
                </div>
                <div>
                  <div className="font-bold text-lg text-gray-900 mb-1">{item.title}</div>
                  <div className="text-gray-700">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA 2 */}
      <div className="py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <a
            href="https://pay.kiwify.com/IhGlmNM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-xl px-12 py-5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            ¡Sí, Quiero Menos Dolor!🔥
          </a>

          <div className="text-3xl font-bold my-4">Solo $10</div>
          <p className="text-gray-600 mt-4">
            ✅ Acceso Inmediato después de la compra<br />
            ✅ Garantía incondicional de 7 días
          </p>
        </div>
      </div>

      {/* For Who */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            ¿Esta Guía es Para Ti?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-green-600 mb-6">✅ Esta guía ES para ti si:</h3>
              <ul className="space-y-3">
                {[
                  "Sufres dolores articulares",
                  "Tienes inflamación crónica",
                  "Quieres reducir medicinas",
                  "Buscas más energía y disposición",
                  "Estás dispuesto a cambiar tu alimentación"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-red-600 mb-6">❌ NO es para ti si:</h3>
              <ul className="space-y-3">
                {[
                  "Buscas soluciones mágicas instantáneas",
                  "No quieres cambiar hábitos",
                  "Esperas resultados sin esfuerzo",
                  "Prefieres solo medicación",
                  "No tienes 30 días de compromiso"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Lo Que Dicen Quienes Ya Lo Probaron
          </h2>
          <div className="space-y-6">
            {[
              {
                text: "En 2 semanas ya sentí diferencia en los dolores de rodilla. Hoy, después de 30 días, puedo subir escaleras sin sentir nada. ¡Increíble cómo la alimentación hace diferencia!",
                author: "Catalina Rodríguez, 38 años",
                location: "Córdoba, Argentina",
                image: "https://i.ibb.co/DgGfXkhT/Whats-App-Image-2025-10-19-at-14-25-08.jpg"
              },
              {
                text: "Sufría con migrañas constantes. Después del protocolo, las crisis disminuyeron 80%. Mi calidad de vida cambió completamente.",
                author: "Valentina Morales, 42 años",
                location: "Santiago, Chile",
                image: "https://i.ibb.co/ynRf1sty/Whats-App-Image-2025-10-19-at-14-25-46-1.jpg"
              },
              {
                text: "Las recetas son deliciosas y fáciles de hacer. No sentí que estaba haciendo dieta, pero los resultados aparecieron: menos hinchazón, más disposición y cero dolor de espalda.",
                author: "Isabella García, 49 años",
                location: "Bogotá, Colombia",
                image: "https://i.ibb.co/G4Tbx5b8/Whats-App-Image-2025-10-19-at-14-25-46.jpg"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-start gap-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-20 h-20 rounded-full object-cover flex-shrink-0 border-4 border-purple-200"
                  />
                  <div>
                    <p className="text-gray-700 italic mb-4">{testimonial.text}</p>
                    <p className="font-bold text-gray-900">— {testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "¿Cómo recibo el material?",
                a: "Inmediatamente después de la confirmación del pago, recibes el acceso por correo electrónico para descargar la guía completa en PDF."
              },
              {
                q: "¿Necesito ingredientes caros o difíciles de conseguir?",
                a: "¡No! Todas las recetas usan ingredientes accesibles que encuentras en cualquier supermercado. El enfoque es en la practicidad."
              },
              {
                q: "¿Y si no me gusta o no funciona para mí?",
                a: "Tienes 7 días de garantía incondicional. Si no quedas satisfecho por cualquier motivo, te devolvemos el 100% de tu dinero, sin preguntas."
              },
              {
                q: "¿Funciona para vegetarianos/veganos?",
                a: "¡Sí! La guía incluye alternativas vegetarianas y veganas para todas las recetas, manteniendo los mismos beneficios antiinflamatorios."
              },
              {
                q: "¿Puedo seguir tomando mis medicinas?",
                a: "¡Sí! Esta guía complementa tu tratamiento médico. Nunca dejes medicinas sin orientación de tu médico. La dieta potencializa los resultados."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
                <div className="font-bold text-lg text-gray-900 mb-2">{faq.q}</div>
                <div className="text-gray-700">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16" id="transformacion">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comienza Tu Transformación Hoy
          </h2>
          <p className="text-xl mb-8">
            Por solo $10, tienes acceso al método completo que puede cambiar tu relación con el dolor
          </p>

          <div className="bg-white bg-opacity-20 p-6 rounded-xl mb-8 max-w-lg mx-auto">
            <p className="text-lg mb-2">🎁 <strong>#1 BONO - 30 RECETAS EXPRESS EN 15 MINUTOS🔥</strong></p>
            <p className="text-lg mb-2">🎁 <strong>#2 BONO - GUÍA DE SUPLEMENTACIÓN ANTIINFLAMATORIA🔥</strong></p>
            <p className="text-lg mb-2">🎁 <strong>#3 BONO - GUÍA DE RESTAURANTES Y VIAJES INTERNACIONALES🔥</strong></p>
            <p>¡Solo por hoy! Llévate también los 3 e-books TOTALMENTE GRATIS</p>
          </div>

          <a
            href="https://pay.kiwify.com/IhGlmNM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-xl px-12 py-5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            ⚡Quiero Comenzar Ahora por $10
          </a>

          <p className="mt-8 text-sm opacity-90">
            ✅ Pago 100% seguro<br />
            ✅ Acceso inmediato<br />
            ✅ Garantía de 7 días
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="mb-4">© 2025 Dieta Antiinflamatoria. Todos los derechos reservados.</p>
          <p className="mb-4">
            <a href="#" className="text-green-500 hover:text-green-400">Política de Privacidad</a> | 
            <a href="#" className="text-green-500 hover:text-green-400 ml-2">Términos de Uso</a> | 
            <a href="#" className="text-green-500 hover:text-green-400 ml-2">Contacto</a>
          </p>
          <p className="text-sm">Este producto no reemplaza la orientación médica profesional.</p>
        </div>
      </footer>
    </div>
  );
}
