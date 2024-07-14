import { useEffect, useState } from "react"

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(url, { signal })

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`)
        }

        const data = await response.json()
        setData(data)
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message)
        }
      } finally {
        if (!signal.aborted) {
          setIsLoading(false)
        }
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
