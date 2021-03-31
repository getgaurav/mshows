
import React, { useEffect, useState, useRef} from "react";
import axios from "../axios";
import styled from "styled-components";
import { fetchMovie } from "../Requests";


function ModalVideo({ VideoId, loadVideo, setLoadVideo, title }) {

    const videoRef = useRef();

    const [video, setVideo] = useState([]);


     
        async function fetchData() {
            const request = await axios.get(fetchMovie(VideoId));
            setVideo(request.data.videos.results[0]);
            return request;
        }
        fetchData();
  


    const closeVideo = e =>{
        if(videoRef.current === e.target){
            setLoadVideo(false);
        }; 
    }

    return (
      <>
            { loadVideo ? (
                <div>
                    <VideoPopup ref={videoRef} onClick={closeVideo}>
                    <Video>
                        <iframe
                            width="800"
                            height="500"
                            src={`https://www.youtube.com/embed/${video?.key}?&autoplay=1&rel=0`}
                            allowfullscreen="allowfullscreen"
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                            title={title}
                        ></iframe>
                    </Video>
                    </VideoPopup>
                </div>
            ) : null}
            </>
  );
}

const VideoPopup = styled.div`
  background-color:rgb(51,51,51,0.6);
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1001;
  top: 0;
  left: 0;
`;

const Video = styled.div`
  width: 800px;
  height: 500px;
  position: fixed;
  border-radius: 4px;
  top: 50%;
  left: 50%;
  overflow: hidden;
  transform: translate(-50%, -50%);
`;

export default ModalVideo;
