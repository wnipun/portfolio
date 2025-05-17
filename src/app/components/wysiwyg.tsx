export default function Wysiwyg({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <>
      <style>
        {`
            .wysiwyg {
                h2 {
                    font-weight: bold;
                    margin-bottom: 1rem;
                    font-size: 1.25rem;
                }

                p {
                    margin-bottom: 1rem;
                    font-size: 1rem;
                }

                ul {
                    margin-bottom: 1rem;
                    padding-left: 1rem;
                    list-style: disc;
                    style-position: inside;  

                    li {
                        strong {
                            font-weight: bold;
                        }
                    }
                }
            }
        `}
      </style>
      <div className={`${className} wysiwyg`}>{children}</div>
    </>
  )
}
