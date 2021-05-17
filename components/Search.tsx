import { useState } from 'react'

type Props = {
  getQuery: (q: string) => void
}

export default function Search  ({ getQuery }: Props) {
  const [text, setText] = useState<string>('')

  const onChange = (q: string): void => {
    setText(q)
    getQuery(q)
  }

  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  )
}


