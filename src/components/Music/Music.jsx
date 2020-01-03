import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {loadSong} from '../../store/Action/musicAction';
import Loading  from '../Loading/Loading';
import SvError from '../ServerError/SvError';

import './Music.css';

class Music extends Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(song){
		this.props.history.push(`/Music/${song.songID}`);
	}

	componentDidMount(){
		const {loadSong} = this.props;
		loadSong();
	}

	render() {
		const {data, isLoading, error} = this.props;
		console.log(data);
		return (
			<div className="vocabulary-wrap">
			<div className="vocabulary-item-title">
				<div className="container">
					<h2 className="Title-text">Học tiếng anh qua bài hát - Online Engline</h2>
					<p className="Title-item-text">Hệ thống bài học tiếng Anh được ONLINE ENGLINE xây dựng theo lộ trình <br/> và chuẩn quốc tế.</p>
				</div>
			</div>
			<div className="container body">
			<div className="row">
					{ (!isLoading && (error === null))  ? 
						data.map((item, key) => {
							return (
								<div className="col-md-3 test" onClick={()=>this.handleClick(item)}  key={key}>
									<div className="card">
										<div className="card-body">
											<div className="card-icon">
											<	i className="fas fa-music"></i>
											</div>
										<h3 className="card-Title">Bài hát</h3>
										<p className="card-Content song-name" >{item.songName}</p>
										<p className="card-Content song-singer" >{item.author}</p>
										<hr className="hr-card"/>
										<a className="card-link" href={`/Music/${item.songID}`}>Xem ngay</a>
										</div>
									</div>
								</div>
							)
						}
						) : ( (error === null) ? <Loading/>	: <SvError></SvError>)
					} 
					</div>
			</div>
		</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
	   isLoading: state.music.isLoading,
	   data: state.music.songs,
	   error: state.music.error
	}
  }
const mapDispatchToProps = {
	loadSong
}
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Music));