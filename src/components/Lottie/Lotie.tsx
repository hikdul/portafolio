"use client"
import { LottiePlayer, RendererType } from 'lottie-web'
import { useEffect, useRef, useState } from 'react'

interface Props {
  src: string
  loop?: boolean
  renderer?: RendererType
  autoplay?: boolean
}

const Lotie = ({ src, loop, renderer, autoplay }: Props): React.ReactNode => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [lottie, setLottie] = useState<LottiePlayer | null>(null)

  useEffect(() => {
    import('lottie-web').then(Lottie => setLottie(Lottie.default))
  }, [])

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: renderer || 'svg',
        loop: loop || true,
        autoplay: autoplay || true,
        path: src
      })

      return () => animation.destroy()
    }
  }, [lottie])

  return <div ref={ref}></div>
}

export {
    Lotie
}