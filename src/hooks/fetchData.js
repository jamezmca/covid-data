import { useState, useEffect } from 'react'
import axios from 'axios'

export function useFetchData(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        async function fetch() {
            try {
                const { data } = await axios.get(url)
                console.log(data)
                setData(data.countries.map(country => country.name))
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetch()
    }, [url])


    return { data, loading, error }
}