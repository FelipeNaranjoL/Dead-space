import Placeholder from './Placeholder'

export default function Historia() {
    const items = [
        {
            title: 'Nacimiento y concepto',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, porro.',
            mediaLabel: 'Imagen 1'
        },
        {
            title: 'El diseño de la nave Ishimura',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, saepe.',
            mediaLabel: 'Video 2'
        },
        {
            title: 'Legado e influencia',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, ratione.',
            mediaLabel: 'Imagen 3'
        }
    ]

    return (
        <section className="py-12">
            <div className="max-w-6xl mx-auto px-6 space-y-10">
                {items.map((item, idx) => (
                    <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-gradient-to-r from-black/20 to-transparent p-6 rounded-lg border border-gray-800">
                        <div className={`${idx % 2 === 1 ? 'order-2 md:order-1' : ''}`}>
                            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-300/90">{item.text}</p>
                        </div>
                        <div className={`${idx % 2 === 1 ? 'order-1 md:order-2' : ''}`}>
                            <div className="rounded overflow-hidden border border-gray-700">
                                <Placeholder label={item.mediaLabel} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
