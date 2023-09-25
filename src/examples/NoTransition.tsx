import { ChangeEvent, useState } from 'react'

export default function NoTransition() {
  const [query, setQuery] = useState('')
  const [list, setList] = useState<string[]>([])

  const LIST_SIZE = 20_000

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value)

    const arr = Array.from({ length: LIST_SIZE }).fill(
      event.target.value
    ) as string[]

    setList(arr)
  }

  return (
    <div className="transition">
      <h3>without useTransition</h3>
      <input type="text" value={query} onChange={handleChange} />
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item ? item : 'blank'}</li>
        ))}
      </ul>
    </div>
  )
}
