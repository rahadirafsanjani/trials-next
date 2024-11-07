import { useState, useEffect } from 'react'

type ProductProps = {
    name: string,
    avatar: string,
    qty: number,
    prices: string,
}

function Profile() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://672b69e51600dda5a9f4e7ea.mockapi.io/api/next-trials/product')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.bio}</p>
        </div>
    )
}