// Full width section component
// Props of className and content
// Usage:
// <Section className="bg-sky">
// <h1>Hello</h1>
// </Section>

export default function Section({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={`w-full ${className}`}>
      <div className="max-w-4xl mx-auto px-6 py-16">{children}</div>
    </section>
  )
}
