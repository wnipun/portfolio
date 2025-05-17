export default function SubTitle({
  title,
  text,
}: {
  title: string
  text: string
}) {
  return (
    <dl className="flex items-center gap-[0.25rem]">
      <dt className="font-bold">{title}:</dt>
      <dd>{text}</dd>
    </dl>
  )
}
