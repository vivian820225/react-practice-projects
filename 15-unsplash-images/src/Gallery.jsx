import { useQuery } from '@tanstack/react-query'
import { useGlobalContext } from './context'
import axios from 'axios'

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`

const Gallery = () => {
  const { searchTerm } = useGlobalContext()
  const { isLoading, isError, data } = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const res = await axios.get(`${url}&query=${searchTerm}`)
      return res.data
    },
  })
  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    )
  }
  if (isError) {
    return (
      <secton className="image-container">
        <h4>There was an error...</h4>
      </secton>
    )
  }

  const results = data.results
  if (results.lengtj < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    )
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular
        return (
          <img
            key={item.id}
            src={url}
            alt={item.alt_description}
            className="img"
          />
        )
      })}
    </section>
  )
}
export default Gallery
