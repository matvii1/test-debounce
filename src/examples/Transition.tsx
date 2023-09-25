import { ChangeEvent, useState, useTransition } from 'react'

export default function Transition() {
  const [query, setQuery] = useState('')
  const [list, setList] = useState<string[]>([])
  const [isPending, startTransition] = useTransition()

  const LIST_SIZE = 5_000

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value)

    startTransition(() => {
      const arr = Array.from({ length: LIST_SIZE }).fill(
        event.target.value
      ) as string[]

      setList(arr)
    })
  }

  return (
    <div className="transition">
      <h3>useTransition</h3>
      <input type="text" value={query} onChange={handleChange} />
      {isPending ? (
        <div>Pending...</div>
      ) : (
        <ul>
          {list.map((item, i) => (
            <li key={i}>{item ? item : 'blank'}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
