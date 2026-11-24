import React, { useEffect, useState, useRef } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const intervalRef = useRef(null)

    useEffect(() => {
        if (!isRunning) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
                intervalRef.current = null
            }
            return
        }

        intervalRef.current = setInterval(() => {
            setSeconds((s) => s + 1)
        }, 1000)

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
                intervalRef.current = null
            }
        }

    }, [isRunning])

    const mn = String(Math.floor(seconds / 60)).padStart(2, "0")
    const ss = String(seconds % 60).padStart(2, "0")

    const start = () => setIsRunning(true)
    const stop = () => setIsRunning(false)
    const reset = () => {
        setIsRunning(false) // 4. 리셋 시 타이머도 정지
        setSeconds(0)
    }

    return (
        <div>
            <p>{mn}:{ss}</p>
            <button onClick={start}>시작</button>
            <button onClick={stop}>중지</button>
            <button onClick={reset}>리셋</button>
        </div>
    )
}

export default Timer