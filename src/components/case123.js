import React,{createContext, useEffect, useState} from 'react';

const youtube = "https://www.googleapis.com/youtube/v3/playlistItems?"
const key = "AIzaSyDcQmekHRyeFGQ8xp20E_n8dsj1_LWY4ZA"
const video = "part=snippet&playlistId=OLAK5uy_m0KIk3NbEwgzYF6Ott8szRxnXfzvOfDRk&maxResults=10&key="
const fetchUrl = `${youtube}${video}${key}`

console.log(fetchUrl)
const Case123 = () => {
  let linkVideo = 'https://www.youtube.com/embed/'
  const [allVideo, setVideo] = useState([])
  const [loading, setLoading] = useState(false)
  const [video, setVodeo] = useState(`https://www.youtube.com/embed/jYSlpC6Ud2A`)
  useEffect(() => {
    fetch(fetchUrl)
    .then((response)=>response.json())
    .then((resJson)=>{
      const result = resJson.items.map(doc=>({
        ...doc,
        videolink :"https://www.youtube.com/embed/"+doc.id.videoId
      }));
      setVideo(result)
      setLoading(false)
    })
  }, []);

const eventHandle = (videoId) => {
  let urlYt = linkVideo+videoId
  setVodeo(urlYt)
  console.log(urlYt)
}


const testId = createContext()
  return (
    <div className="d-flex mv-container"> 
      <div class="col-lg-9 col-md-12 container-iframe">
        <iframe src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>       
        </div>
      <div className='listMv col-lg-3 col-md-12 list'>
        
        {allVideo.map((item)=>{
          const {id,snippet ={}} = item;
          const {title,thumbnails ={},resourceId} = snippet;
          const {videoId} = resourceId;
          const {medium ={}}  = thumbnails;
          return(
            <div >
              { loading ? <div>loading</div> : 
                  <div class="card card-mv pt-3">
                  <img src={medium.url}  alt={title}/>
                  <div class="card-body">
                  <h5 className='title-yt' onClick={ ()=>{eventHandle(videoId)}}>{title}</h5>
                  </div>
                </div>
              }
                {/* <CardMv title={title} logo={medium.url}/> */}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Case123;
