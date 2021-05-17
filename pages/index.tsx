import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import CharacterGrid from '../components/CharacterGrid'
import Search from '../components/Search'

export default function Home () {
  const [newItems, setNewItems] = useState<[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [query, setQuery] = useState<string>('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )

      setNewItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q: string) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={newItems} />
    </div>
  )
}