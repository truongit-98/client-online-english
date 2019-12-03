/* eslint-disable no-unused-vars */
import React, { ReactDOM, Component } from 'react';
import './MusicDetail.css';
import ReactPlayer from 'react-player';
// import Data from '../../FakeData/SubData.json';
import axios from 'axios'

class MusicDetail extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    // 	data : Data[0].Subtitles,
    // 	url: 'https://youtu.be/Ifsz44HQ3IM',
    // 	isActive : true
    // }
    this.intervalID = null;
    this.removeActive = this.removeActive.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.scrollLyric = this.scrollLyric.bind(this);
    this.getSubByTime = this.getSubByTime.bind(this);
  }

  componentDidMount(){
    this.intervalID = setInterval(this.handleTime, 700);
    const url = '/api/song/1/subtitles';
    axios.get(url, { withCredentials: true })
       .then((res)=>{
        let data = res.data;
        console.log(data);
        this.setState((prevState)=>{
          return {
            data : data[0].Subtitles,
            url : data[0].url
          }
        });	
       })
       .catch((err) => console.log(err));	
  }
  removeActive(){
    var elements = document.querySelectorAll('.lyric-sentence');
    for (const e of elements) {
      e.className = 'lyric-sentence';
    }
  }

  autoStartLyric(){
    this.intervalID = setInterval(this.handleTime,700);
  }

  handleTime(){
    let currentTime = this.player ? this.player.getCurrentTime() : 0;
    let Duration = this.player? this.player.getDuration() : 0;
    if(currentTime === Duration){
      this.removeActive();
      clearInterval(this.intervalID);
      var myDiv = document.getElementsByClassName('song-detail-lyric')[0];
      myDiv.scrollTop = -1;
    } else {
      this.getSubByTime(Math.round(currentTime));
    }
  }

   
  getSubByTime(currentTime){
    let {data} = this.state;
    console.log(this.intervalID);
    //clearInterval(this.interval);
    for (let i=0; i<data.length; i++) {
      if(data[i].startTime === currentTime){
        this.removeActive();
        this.scrollLyric(data[i]);
        break;
       } else if(data[i].startTime < currentTime){
        if(i === data.length - 1 ){
          this.removeActive();
          this.scrollLyric(data[i]);
          break;
        } else if( data[i+1].startTime > currentTime){
          this.removeActive();
          this.scrollLyric(data[i]);
          break;
        }
      }
    }
    
  }

  scrollLyric(sub){
    let element = document.getElementById(sub.ID.toString());
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    element.className = 'lyric-sentence lyric-active';
  }
  
  render() {
    const {data, url} = this.state;
    console.log(data);
    return (
      <div className="container">
          <div className="music-video song-detail-top">
          <div className="top-cover">
            <div className="top-left">
            { url ? <ReactPlayer ref={(player) => this.player=player} className="react-player" width="100%" height="100%" url={url} controls="true" playing="true" onPlay={() => this.autoStartLyric()} ></ReactPlayer> : <img src= "/assets/img/youtube-bi-loi.jpg" style={{ width:'100%'}} alt=""/>  }
            </div>
            <div className="top-right">
              <div className="song-detail-lyric" id="song-detail">
                <div className="song-detail-lyric-cover">
                {
                  data.length > 0 ? data.map((item) => {
                    return (
                      <span  className='lyric-sentence' id={item.ID} ><span className="span-child">{item.Engsub}
                        <span className="child-vi">{item.Vietsub} </span></span>
                      </span>
                    );
                  }):''
                }
                </div>
                {/* {(url && data.length > 0) ? '' : <div className='err-lyric' ><span>Không thể hiển thị Lyric!!!</span></div>} */}
              </div>
            </div>
        </div>
        </div>
        <div className="detail-relate-to">
          <h6 id="relate-title">Bài hát liên quan:</h6>
          <div className="detail-relate-to-body">
            <div className="card i2">
              <div className="card-body">
                <img src="/assets/img/1.PNG" className="card-img-top" alt=""/>
                <div className="card-Title">Bài hát</div>
                <p className="card-text">Cơn mưa ngang qua</p>
                <a href="/grammarDetail/" className="btn btn-primary">Xem ngay</a>
              </div>
            </div>
            <div className="card i2">
              <div className="card-body">
                <img src="/assets/img/1.PNG" className="card-img-top" alt=""/>
                <div className="card-Title">Bài hát</div>
                <p className="card-text">Cơn mưa ngang qua</p>
                <a href="/grammarDetail/" className="btn btn-primary">Xem ngay</a>
              </div>
            </div>
            <div className="card i2">
              <div className="card-body">
                <img src="/assets/img/1.PNG" className="card-img-top" alt=""/>
                <div className="card-Title">Bài hát</div>
                <p className="card-text">Cơn mưa ngang qua</p>
                <a href="/grammarDetail/" className="btn btn-primary">Xem ngay</a>
              </div>
            </div>
            <div className="card i2">
              <div className="card-body">
                <img src="/assets/img/1.PNG" className="card-img-top" alt=""/>
                <div className="card-Title">Bài hát</div>
                <p className="card-text">Cơn mưa ngang qua</p>
                <a href="/grammarDetail/" className="btn btn-primary">Xem ngay</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MusicDetail;