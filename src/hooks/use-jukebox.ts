import { useState, useCallback } from 'react'

const useJukebox = () => {
  const [player, setPlayer] = useState<any>(null)

  // YouTube 플레이어가 준비되면 player 인스턴스 저장
  const onReady = useCallback((event: any) => {
    setPlayer(event.target)
  }, [])

  const playVideo = useCallback(() => player?.playVideo(), [player])
  const pauseVideo = useCallback(() => player?.pauseVideo(), [player])
  const stopVideo = useCallback(() => player?.stopVideo(), [player])

  return { onReady, playVideo, pauseVideo, stopVideo }
}

export default useJukebox
