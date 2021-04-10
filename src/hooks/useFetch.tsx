import { useState, useEffect } from 'react'

export function useFetch() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('data/AnimalList.json?page=2&limit=10')
      const data = await response.json()
      setData(data)
    }

    fetchData()
  }, [])

  return data
}
