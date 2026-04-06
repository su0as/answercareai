interface SectionTagProps {
  children: React.ReactNode
  className?: string
}

export default function SectionTag({ children, className = '' }: SectionTagProps) {
  return (
    <span
      className={`inline-block text-xs font-mono-accent tracking-widest uppercase text-text-secondary border border-border px-3 py-1.5 rounded-full ${className}`}
    >
      {children}
    </span>
  )
}
