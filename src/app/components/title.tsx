export default function Title({ title, className }: { title: string, className?: string }) {
  return <h1 className={`text-4xl font-bold ${className}`}>{title}</h1>
}
