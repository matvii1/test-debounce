import { ChangeEvent, useEffect, useState } from 'react'
import useDebounce from '../hooks/useDebounce'

type Beer = {
  id: string
  name: string
}

export default function Debounce() {
  const [beers, setBeers] = useState<Beer[]>([])
  const [query, setQuery] = useState('')

  const debouncedQuery = useDebounce(query, 500)

  console.log({ debouncedQuery, query })

  async function fetchBeer() {
    try {
      const params = debouncedQuery ? `?beer_name=${debouncedQuery}` : ''
      const res = await fetch(`https://api.punkapi.com/v2/beers` + params)

      const data = (await res.json()) as Beer[]

      setBeers(data)

      return data
    } catch (error) {
      console.log('error')
    }
  }

  useEffect(() => {
    fetchBeer()
  }, [debouncedQuery])

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value)
  }

  return (
    <div className="debounce">
      <h3>Debounce</h3>
      <input type="text" value={query} onChange={handleChange} />
      <ul>
        {beers && beers.map((beer) => <li key={beer.id}>{beer.name}</li>)}
      </ul>
    </div>
  )
}
