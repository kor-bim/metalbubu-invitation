import { useState } from 'react'
import cloneDeep from 'lodash/cloneDeep'
import { YouTubePlayer, YouTubeProps } from 'react-youtube'

const useJukebox = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [player, setPlayer] = useState<any>(null)
  const [volume] = useState(80)

  const waitForYouTubeData = (youtubePlayer: YouTubePlayer, attempts = 5) => {
    if (attempts === 0) {
      console.warn('YouTube API failed to load video data.')
      return
    }

    try {
      const videoData = youtubePlayer.getVideoData()
      if (!videoData || typeof videoData.title === 'undefined') {
        console.warn('Retrying to fetch YouTube data')
        waitForYouTubeData(youtubePlayer, attempts - 1)
      } else {
        const deepCopyPlayer = cloneDeep(youtubePlayer)
        setPlayer(deepCopyPlayer)
      }
    } catch (error) {
      console.error('Error accessing YouTube API:', error)
    }
  }

  const onReady = (event: { target: YouTubePlayer }) => {
    event.target.setVolume(volume)
    waitForYouTubeData(event.target)
  }

  const onStateChange = (event: { target: YouTubePlayer; data: number }) => {
    if (event.data === 1) {
      setIsPlaying(true)
    }
    if (event.data === 2) {
      setIsPlaying(false)
    }
  }

  const handlePlayPause = () => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo()
      } else {
        player.playVideo()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const opts: YouTubeProps['opts'] = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 0,
      controls: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0
    }
  }

  return {
    isPlaying,
    setIsPlaying,
    volume,
    onReady,
    onStateChange,
    handlePlayPause,
    opts
  }
}

export default useJukebox
