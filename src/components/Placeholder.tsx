export default function Placeholder({ label = 'placeholder' }: { label?: string }) {
  return (
    <div className="flex items-center justify-center bg-gray-800/30 border border-gray-700 rounded overflow-hidden w-full min-h-[180px]">
      <svg width="120" height="80" viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
        <rect width="120" height="80" fill="#111" />
        <text x="60" y="46" fontSize="10" fill="#7dd3fc" textAnchor="middle">{label}</text>
      </svg>
    </div>
  )
}
