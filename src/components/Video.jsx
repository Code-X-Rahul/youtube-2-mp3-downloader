import React from 'react'

const Video = ({ getVideo, videoId, setVideoId, videoInfo }) => {
  const videoIdHandler = (e) => {
    let videoUrl = e.target.value
    let videoId = videoUrl.split("=")
    setVideoId(videoId[1])
  }
  return (
    <div className="video--card">
      <div className="image--card">
        <p className="video--title">{videoInfo && videoInfo.title}</p>
      </div>
      {!videoInfo && <form onSubmit={getVideo}>
        <input type="text"
          value={videoId}
          onChange={videoIdHandler}
          placeholder='Paste Youtube video URL Here!' />
        <button>Get Video</button>
      </form>}
      {videoInfo && videoInfo.status === "ok" && <a href={videoInfo.link} target="_blank" rel="noreferrer">Download MP3 </a>}
      {videoInfo && videoInfo.status !== "ok" && <div className="error">
        <p>{videoInfo.msg}</p>
      </div>}
    </div>
  )
}

export default Video