import { useEffect } from "react";

export function use() {
    useEffect(() => {
        fetch('https://www.nexarda.com/api/v3/search?type=games')
            .then(res => {
                if (!res.ok) {
                    console.error('Hubo un problema')
                }
                return res.json()
            })
            .then(data => data.results)
            .catch((err) => console.error('Hubo un error', err.message)
            )

    })
}