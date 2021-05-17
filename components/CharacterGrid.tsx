import CharacterItem from './CharacterItem'
import Spinner from './Spinner'
import { Item } from '../interfaces'

type Props ={
  items: Item[]
  isLoading: boolean
}

export default function CharacterGrid ({ items, isLoading }: Props) {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
  )
}