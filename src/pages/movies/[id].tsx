import { useRouter } from 'next/router'

const MovieDetail = () => {
  const { query } = useRouter()
  const { title } = query

  return (
    <div>
      <h2>{title || 'BAD ACCESS'}</h2>
    </div>
  )
}

export default MovieDetail
