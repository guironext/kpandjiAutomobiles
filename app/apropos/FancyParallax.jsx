'use client'



export default function FancyParallax() {
  return (
    <section className="relative h-screen bg-fixed bg-center bg-cover flex items-center justify-center w-full"
      style={{ backgroundImage: "url('/para/para2.png')" }}
    >
      <div className="bg-black/50 p-8 rounded-xl text-center text-white max-w-4xl">
        <h1 className="text-5xl font-bold mb-4 text-white uppercase">kpandji, l'éléphant des routes Africaines</h1>
        <p className="text-3xl">
          Inspiré par nos ancêtres et notre tradition, nous avons créé un véhicule solide et innovant adapté à nos réalités africaines.
        </p>
        
      </div>
    </section>
  )
}
