import { useEffect, useState } from "react"

const useFetch = (url) => {
  const [data, setPizzas] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal })

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`)
        }

        const data = await response.json()
        setPizzas(data)
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message)
        }
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()

    return () => {
      controller.abort()
    }
  }, [url])

  return { data, isLoading, error }
}

export default useFetch
