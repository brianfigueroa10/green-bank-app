// DynamicWaveSVG.js
import { useState, useEffect } from 'react'

const DynamicWaveSVG = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const { height } = dimensions

  return (
    <svg
      className="layout-img"
      width="1440"
      height={height}
      viewBox="0 0 1440 4281"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M890.5 0.000196591C991 -1.50032 1192.86 18.7675 1069.66 174.503C915.648 369.171 1461.28 521.367 1373.27 369.172C1285.27 216.976 616.432 390.408 1157.66 648.787C1590.64 855.489 739.638 909.525 260.013 910.705C92.1495 918.375 -165.491 995.314 146.856 1241.71C537.29 1549.7 1243.71 1680.69 1200.68 1868.32C1157.66 2055.94 -386.357 2872 146.856 2872C1320 2872 251.144 3343.89 712 3504C852.545 3552.83 1446.95 3470.17 1416 3780C1358.34 4357.28 -60.8 4083.2 96 4400C292 4796 1416 4944 1446 5080"
        stroke="#2BB32A"
        stroke-width="1.5"
        stroke-linecap="square"
      />
    </svg>
  )
}

export default DynamicWaveSVG
