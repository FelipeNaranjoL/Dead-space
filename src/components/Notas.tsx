import Fondo from "../assets/Fondo/Fondo.jpg";

export default function Notas() {
    return (
        <section
            className="relative py-12 text-gray-300"
            style={{
                backgroundImage: `url(${Fondo})`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Capa oscura para opacidad del fondo */}
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative max-w-4xl mx-auto px-6 z-10">
                <h2 className="text-3xl font-bold font-dead mb-6 text-red-600">
                    Notas del editor
                </h2>

                <div className="prose prose-invert bg-black/20 p-6 rounded-xl border border-gray-800 backdrop-blur-sm">
                    <p className="leading-relaxed mb-4">
                        Si quieres pasar un rato{" "}
                        <span className="text-red-500 font-semibold">tenso, a oscuras</span>, 
                        con el volumen al máximo y poner a prueba tus{" "}
                        <span className="text-red-500 font-semibold">reflejos y toma de decisiones</span>, 
                        este juego es para ti.
                    </p>

                    <p className="leading-relaxed mb-4">
                        Si aún dudas entre jugar el{" "}
                        <span className="text-red-500 font-semibold">Dead Space Remake</span> o el original, 
                        te recomiendo ir de lleno por el remake: cuenta con{" "}
                        <span className="text-red-500 font-semibold">mejoras notables en jugabilidad</span>, 
                        una historia más desarrollada y, por supuesto,{" "}
                        <span className="text-red-500 font-semibold">gráficos y resolución espectaculares</span> 
                        que elevan la experiencia a otro nivel.
                    </p>

                    <p className="leading-relaxed mb-4">
                        Aun así, el título original no se queda atrás. Incluso hoy sigue siendo una joya del{" "}
                        <span className="text-red-500 font-semibold">survival horror</span>: tenso, atmosférico y perfectamente jugable. 
                        Su accesibilidad y el peso de su legado lo convierten en una experiencia que{" "}
                        <span className="text-red-500 font-semibold">vale la pena revisitar</span>.
                    </p>

                    <p className="leading-relaxed mb-4">
                        En su momento, <span className="text-red-500 font-semibold">Dead Space</span> fue un verdadero golpe en la industria, 
                        un título que justificaba tener una PS3 o una Xbox 360 solo para vivir su terror en carne propia. 
                        Es desafiante para los jugadores más experimentados, pero lo bastante equilibrado para que los más casuales{" "}
                        <span className="text-red-500 font-semibold">puedan disfrutarlo sin frustración</span>.
                    </p>

                    <p className="leading-relaxed font-semibold text-gray-100">
                        En resumen: si eres amante del{" "}
                        <span className="text-red-500">horror, la tensión psicológica</span> 
                        y de los juegos que te hacen mirar por encima del hombro cada pocos segundos,{" "}
                        <span className="text-red-500">Dead Space</span> —ya sea el original o su remake— 
                        es un imprescindible en tu biblioteca.
                    </p>
                </div>
            </div>
        </section>
    );
}
