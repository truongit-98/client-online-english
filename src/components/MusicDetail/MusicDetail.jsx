/* eslint-disable no-unused-vars */
import React, { ReactDOM, Component } from 'react';
import ReactPlayer from 'react-player';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {loadSongDetail} from '../../store/Action/musicAction';
import Loading  from '../Loading/Loading';
import SvError from '../ServerError/SvError';
import './MusicDetail.css';

class MusicDetail extends Component {
  constructor(props) {
    super(props);
    this.intervalID = null;
    this.removeActive = this.removeActive.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.scrollLyric = this.scrollLyric.bind(this);
    this.getSubByTime = this.getSubByTime.bind(this);
  }

  componentDidMount(){
   // this.intervalID = setInterval(this.handleTime, 700);
    let id = this.props.match.params.songID;
    console.log(id);
    const {loadSongDetail} = this.props;
    loadSongDetail(1);
  }
  removeActive(){
	var element = document.getElementsByClassName('lyric-sentence lyric-active')[0];
    if(element != null){
		element.className = 'lyric-sentence';
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
    let {data} = this.props;
    for (let i=0; i<data[0].Subtitles.length; i++) {
		if(i === data[0].Subtitles.length){
			this.removeActive();
			this.scrollLyric(data[0].Subtitles[i]);
			break;
		} else if(data[0].Subtitles[i].startTime <= currentTime && data[0].Subtitles[i+1].startTime > currentTime ){
			this.removeActive();
			this.scrollLyric(data[0].Subtitles[i]);
			break;
		}
    }
  }


  scrollLyric(sub){
    let element = document.getElementById(sub.ID.toString());
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    element.className = 'lyric-sentence lyric-active';
  }
  
  render() {
    const {data, isLoading, error} = this.props; 
    return (
      ( !isLoading && error == null) ? 
      ( <div className="container" >
          <div className="music-video song-detail-top">
            <div className="top-cover">
              <div className="top-left">
        { url ? <ReactPlayer ref={(player) => this.player=player} className="react-player" width="100%" height="100%" url={url} controls="true" playing="true" onPlay={() => this.autoStartLyric()} ></ReactPlayer> : <button class="btn btn-primary" type="button" disabled><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Loading...</button>   }
        
              </div>
              <div className="top-right">
          <div className="song-detail-lyric" id="song-detail">
            <div className="song-detail-lyric-cover">
            {
              data[0].Subtitles.length > 0 ? data[0].Subtitles.map((item) => {
                return (
                  <span  className='lyric-sentence' id={item.ID} ><span className="span-child">{item.Engsub}
                    <span className="child-vi">{item.Vietsub} </span></span>
                  </span>
                );
              }):''
            }
            </div>
            {(data[0].url || data[0].Subtitles.length < 0) ? '' : <div className='err-lyric' ><span>Không thể hiển thị Lyric!!!</span></div>}
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
            </div>
          </div>
        </div> ) :  ( (error === null) ? <Loading/>	: <SvError></SvError>)
   )
  }
}

const mapStateToProps = (state, ownProps) => {
	return {
	   isLoading: state.music.isLoading,
	   data: state.music.songDetail,
	   error: state.music.error
	}
  }
const mapDispatchToProps = {
	 loadSongDetail
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MusicDetail));
<RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
											<FormControlLabel value={item.ExamAnswers[0].answerID} control={<Radio />} label={item.ExamAnswers[0].answerContent} />
											<FormControlLabel value={item.ExamAnswers[1].answerID} control={<Radio />} label={item.ExamAnswers[1].answerContent} />
											<FormControlLabel value={item.ExamAnswers[2].answerID} control={<Radio />} label={item.ExamAnswers[2].answerContent} />
											<FormControlLabel value={item.ExamAnswers[3].answerID} control={<Radio />} label={item.ExamAnswers[3].answerContent} />
										</RadioGroup>
									</FormControl>