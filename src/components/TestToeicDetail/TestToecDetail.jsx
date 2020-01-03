import React, {useState, useEffect} from 'react';
import './TestToeicDetail.css';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { fetchToeicDetailRequet } from '../../store/Action/toeic';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

function TestToeicDetail(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(null);

  const handleChange = (event) => {
		if(event.target){
		  console.log(event.target.value);
			setValue(event.target.value);
		}
	};
	// const handleOnclick = (data, type) => {
	// 	if(data && type===0){
	// 		settotalReading(totalReading+1);
	// 	}
	// 	else if(data && type===1){
	// 		settotalListening(totalListening+1);
	// 	}
	// }
  useEffect(() => { 
    props.fetchToeicDetailRequet(props.match.params.id);
  }, [])
	const {toeicDetail} = props.toeic;
	console.log(toeicDetail);
  return (
    <div className="container">
			<span className="wrap-title">Bài làm</span>
			<div className="test-toeic-detail">
				<h4 className="test-title">Phần I: phần 1</h4>
				{
					toeicDetail.map((item, key) => {
						if(key <= 20){
							return (
								<div className="test-toeic-detail-item" key={key}>
									<FormControl component="fieldset" className={classes.formControl}>
									<h6 className="test-detail-text"><small>Câu {key+1} </small>{item.questionContent}</h6>
										<p className="text-detail-text-i1">Chọn đáp án đúng: </p>
										<FormLabel component="legend"></FormLabel>
										{/* 0:doc    1:nghe */}
										<RadioGroup aria-label="gender" name="gender1" value={value} aonChange={handleChange}>
											<FormControlLabel value={item.ExamAnswers[0].answerID} control={<Radio />} label={item.ExamAnswers[0].answerContent} />
											<FormControlLabel value={item.ExamAnswers[1].answerID} control={<Radio />} label={item.ExamAnswers[1].answerContent} />
											<FormControlLabel value={item.ExamAnswers[2].answerID} control={<Radio />} label={item.ExamAnswers[2].answerContent} />
											<FormControlLabel value={item.ExamAnswers[3].answerID} control={<Radio />} label={item.ExamAnswers[3].answerContent} />
										</RadioGroup>
									</FormControl>
								</div>
							)
						}
					})
				}
			</div>
			<div className="test-toeic-detail">
			</div>
			<div className="button-summit">
				<input type="submit" className="btn btn-info i1" value="Nộp bài" data-toggle="modal" data-target="#myModal"/>	
			</div>
  		<div className="modal" id="myModal">
    		<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Kết quả: </h4>
							{/* <button type="button" className="close" data-dismiss="modal">&times;</button> */}
						</div>
						<div className="modal-body">
							<h6>Bạn đã trả lời đúng: 50/50 câu.</h6>
						</div>
						<div className="modal-footer">
							<a href="/TestToeic/">Thoát</a>
						</div>
					</div>
				</div>
			</div>
    </div>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		fetchToeicDetailRequet: bindActionCreators(fetchToeicDetailRequet, dispatch)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		toeic: state.toeic
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TestToeicDetail);