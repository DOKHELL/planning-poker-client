import { useEffect, useState } from 'react'

export default (query: string) => {
  const [ match, setMatch ] = useState(window.matchMedia(query).matches)

  useEffect(() => {
    window
      .matchMedia(query)
      .addEventListener('change', e => setMatch( e.matches ))
  }, [])

  return match
}