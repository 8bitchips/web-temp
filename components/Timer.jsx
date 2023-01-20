import { useEffect, useMemo, useState } from 'react'

const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24

export default function Timer({ deadline = new Date().toString() }) {
    const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline])
    const [time, setTime] = useState(parsedDeadline - Date.now())

    useEffect(() => {
        const interval = setInterval(
            () => setTime(parsedDeadline - Date.now()),
            1000
        )

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex justify-center xl:text-3xl md:text-xl text-base font-itc-avant">
            {Object.entries({
                Days: time / DAY,
                Hours: (time / HOUR) % 24,
                Minutes: (time / MINUTE) % 60,
                Seconds: (time / SECOND) % 60,
            }).map(([label, value], i) => (
                <div
                    key={label}
                    className={(i === 3 ? null : 'border-r') + ' text-center'}
                >
                    <div className="container px-4 sm:px-6 py-4">
                        <p>{`${Math.floor(value)}`.padStart(2, '0')}</p>
                        <span className="text">{label}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}
