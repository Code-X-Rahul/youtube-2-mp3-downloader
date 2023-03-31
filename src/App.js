import { useState } from "react";
import "./App.css";
import Video from "./components/Video";
import loading from './assets/Infinity-1s-200px.gif'

function App() {
  const [videoID, setVideoId] = useState("");
  const [videoInfo, setVideoInfo] = useState();
  const [spinner, setSpinner] = useState(false);

  const getVideo = (e) => {
    e.preventDefault();
    setSpinner(true)
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": 'e2d5258e3fmshc8dcafb3bbf094cp1649a3jsne5b09457ce1f',
        "X-RapidAPI-Host": "youtube-mp3-download1.p.rapidapi.com",
      },
    };

    fetch(
      `https://youtube-mp3-download1.p.rapidapi.com/dl?id=${videoID}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setVideoInfo(response))
      .then(() => setSpinner(false))
      .catch((err) => console.error(err));
  };
  return (
    <div className="App">
    { spinner && <div className="loading">
          <img src={loading} alt= "loading..."/>
      </div>}
      <header>
        <a href="/">Youtube-2-Mp3</a>
      </header>
    { !spinner && <Video
        videoID={videoID}
        setVideoId={setVideoId}
        getVideo={getVideo}
        videoInfo={videoInfo}
      />}
    </div>
  );
}

export default App;
