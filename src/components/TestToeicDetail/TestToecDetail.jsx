import React from 'react';
import './TestToeicDetail.css';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function TestToeicDetail() {
  const classes = useStyles();
  const [value, setValue] = React.useState();

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div className="container">
			<span className="wrap-title">Bài làm</span>
			<div className="test-toeic-detail">
				<h4 className="test-title">Phần I: phần 1</h4>
				<div className="test-toeic-detail-item">
					<FormControl component="fieldset" className={classes.formControl}>
						<h6 className="test-detail-text"><small>Câu 1: </small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas voluptate labore officiis dolores fuga esse vero</h6>
						<p className="text-detail-text-i1">Chọn đáp án đúng: </p>
						<FormLabel component="legend"></FormLabel>
						<RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
							<FormControlLabel value="A" control={<Radio />} label="Đáp án A" />
							<FormControlLabel value="B" control={<Radio />} label="Đáp án B" />
							<FormControlLabel value="C" control={<Radio />} label="Đáp án C" />
							<FormControlLabel value="D" control={<Radio />} label="Đáp án D" />
						</RadioGroup>
					</FormControl>
				</div>
				<div className="test-toeic-detail-item">
					<FormControl component="fieldset" className={classes.formControl}>
						<h6 className="test-detail-text"><small>Câu 2: </small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas voluptate labore officiis dolores fuga esse vero</h6>
						<p className="text-detail-text-i1">Chọn đáp án đúng: </p>
						<FormLabel component="legend"></FormLabel>
						<RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
							<FormControlLabel value="A" control={<Radio />} label="Đáp án A" />
							<FormControlLabel value="B" control={<Radio />} label="Đáp án B" />
							<FormControlLabel value="C" control={<Radio />} label="Đáp án C" />
							<FormControlLabel value="D" control={<Radio />} label="Đáp án D" />
						</RadioGroup>
					</FormControl>
				</div>
				<div className="test-toeic-detail-item">
					<FormControl component="fieldset" className={classes.formControl}>
						<h6 className="test-detail-text"><small>Câu 3: </small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas voluptate labore officiis dolores fuga esse vero</h6>
						<p className="text-detail-text-i1">Chọn đáp án đúng: </p>
						<FormLabel component="legend"></FormLabel>
						<RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
							<FormControlLabel value="A" control={<Radio />} label="Đáp án A" />
							<FormControlLabel value="B" control={<Radio />} label="Đáp án B" />
							<FormControlLabel value="C" control={<Radio />} label="Đáp án C" />
							<FormControlLabel value="D" control={<Radio />} label="Đáp án D" />
						</RadioGroup>
					</FormControl>
				</div>
				<div className="test-toeic-detail-item">
					<FormControl component="fieldset" className={classes.formControl}>
						<h6 className="test-detail-text"><small>Câu 4: </small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas voluptate labore officiis dolores fuga esse vero</h6>
						<p className="text-detail-text-i1">Chọn đáp án đúng: </p>
						<FormLabel component="legend"></FormLabel>
						<RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
							<FormControlLabel value="A" control={<Radio />} label="Đáp án A" />
							<FormControlLabel value="B" control={<Radio />} label="Đáp án B" />
							<FormControlLabel value="C" control={<Radio />} label="Đáp án C" />
							<FormControlLabel value="D" control={<Radio />} label="Đáp án D" />
						</RadioGroup>
					</FormControl>
				</div>
				<div className="test-toeic-detail-item">
					<FormControl component="fieldset" className={classes.formControl}>
						<h6 className="test-detail-text"><small>Câu 5: </small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas voluptate labore officiis dolores fuga esse vero</h6>
						<p className="text-detail-text-i1">Chọn đáp án đúng: </p>
						<FormLabel component="legend"></FormLabel>
						<RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
							<FormControlLabel value="A" control={<Radio />} label="Đáp án A" />
							<FormControlLabel value="B" control={<Radio />} label="Đáp án B" />
							<FormControlLabel value="C" control={<Radio />} label="Đáp án C" />
							<FormControlLabel value="D" control={<Radio />} label="Đáp án D" />
						</RadioGroup>
					</FormControl>
				</div>
				<div className="test-toeic-detail-item">
					<FormControl component="fieldset" className={classes.formControl}>
						<h6 className="test-detail-text"><small>Câu 6: </small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas voluptate labore officiis dolores fuga esse vero</h6>
						<p className="text-detail-text-i1">Chọn đáp án đúng: </p>
						<FormLabel component="legend"></FormLabel>
						<RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
							<FormControlLabel value="A" control={<Radio />} label="Đáp án A" />
							<FormControlLabel value="B" control={<Radio />} label="Đáp án B" />
							<FormControlLabel value="C" control={<Radio />} label="Đáp án C" />
							<FormControlLabel value="D" control={<Radio />} label="Đáp án D" />
						</RadioGroup>
					</FormControl>
				</div>
			</div>
			<div className="test-toeic-detail">
				<h4 className="test-title">Phần II: phần 2</h4>
				<p className="test-p2">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, odio asperiores. Ab cupiditate unde deserunt minus accusamus nulla, dolores excepturi, fuga ex optio, delectus dolorem sequi iure eius. Vel, fuga?
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, odio asperiores. Ab cupiditate unde deserunt minus accusamus nulla, dolores excepturi, fuga ex optio, delectus dolorem sequi iure eius. Vel, fuga?
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, odio asperiores. Ab cupiditate unde deserunt minus accusamus nulla, dolores excepturi, fuga ex optio, delectus dolorem sequi iure eius. Vel, fuga?
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, odio asperiores. Ab cupiditate unde deserunt minus accusamus nulla, dolores excepturi, fuga ex optio, delectus dolorem sequi iure eius. Vel, fuga?
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, odio asperiores. Ab cupiditate unde deserunt minus accusamus nulla, dolores excepturi, fuga ex optio, delectus dolorem sequi iure eius. Vel, fuga?
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, odio asperiores. Ab cupiditate unde deserunt minus accusamus nulla, dolores excepturi, fuga ex optio, delectus dolorem sequi iure eius. Vel, fuga?
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, odio asperiores. Ab cupiditate unde deserunt minus accusamus nulla, dolores excepturi, fuga ex optio, delectus dolorem sequi iure eius. Vel, fuga?
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, odio asperiores. Ab cupiditate unde deserunt minus accusamus nulla, dolores excepturi, fuga ex optio, delectus dolorem sequi iure eius. Vel, fuga?
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, odio asperiores. Ab cupiditate unde deserunt minus accusamus nulla, dolores excepturi, fuga ex optio, delectus dolorem sequi iure eius. Vel, fuga?
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, odio asperiores. Ab cupiditate unde deserunt minus accusamus nulla, dolores excepturi, fuga ex optio, delectus dolorem sequi iure eius. Vel, fuga?
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, odio asperiores. Ab cupiditate unde deserunt minus accusamus nulla, dolores excepturi, fuga ex optio, delectus dolorem sequi iure eius. Vel, fuga?
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, odio asperiores. Ab cupiditate unde deserunt minus accusamus nulla, dolores excepturi, fuga ex optio, delectus dolorem sequi iure eius. Vel, fuga?
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, odio asperiores. Ab cupiditate unde deserunt minus accusamus nulla, dolores excepturi, fuga ex optio, delectus dolorem sequi iure eius. Vel, fuga?
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, odio asperiores. Ab cupiditate unde deserunt minus accusamus nulla, dolores excepturi, fuga ex optio, delectus dolorem sequi iure eius. Vel, fuga?
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, odio asperiores. Ab cupiditate unde deserunt minus accusamus nulla, dolores excepturi, fuga ex optio, delectus dolorem sequi iure eius. Vel, fuga?
				</p>
				<div className="test-toeic-detail-item">
					<FormControl component="fieldset" className={classes.formControl}>
						<h6 className="test-detail-text"><small>Câu 1: </small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas voluptate labore officiis dolores fuga esse vero</h6>
						<p className="text-detail-text-i1">Chọn đáp án đúng: </p>
						<FormLabel component="legend"></FormLabel>
						<RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
							<FormControlLabel value="A" control={<Radio />} label="Đáp án A" />
							<FormControlLabel value="B" control={<Radio />} label="Đáp án B" />
							<FormControlLabel value="C" control={<Radio />} label="Đáp án C" />
							<FormControlLabel value="D" control={<Radio />} label="Đáp án D" />
						</RadioGroup>
					</FormControl>
				</div>
				<div className="test-toeic-detail-item">
					<FormControl component="fieldset" className={classes.formControl}>
						<h6 className="test-detail-text"><small>Câu 2: </small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas voluptate labore officiis dolores fuga esse vero</h6>
						<p className="text-detail-text-i1">Chọn đáp án đúng: </p>
						<FormLabel component="legend"></FormLabel>
						<RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
							<FormControlLabel value="A" control={<Radio />} label="Đáp án A" />
							<FormControlLabel value="B" control={<Radio />} label="Đáp án B" />
							<FormControlLabel value="C" control={<Radio />} label="Đáp án C" />
							<FormControlLabel value="D" control={<Radio />} label="Đáp án D" />
						</RadioGroup>
					</FormControl>
				</div>
				<div className="test-toeic-detail-item">
					<FormControl component="fieldset" className={classes.formControl}>
						<h6 className="test-detail-text"><small>Câu 3: </small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas voluptate labore officiis dolores fuga esse vero</h6>
						<p className="text-detail-text-i1">Chọn đáp án đúng: </p>
						<FormLabel component="legend"></FormLabel>
						<RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
							<FormControlLabel value="A" control={<Radio />} label="Đáp án A" />
							<FormControlLabel value="B" control={<Radio />} label="Đáp án B" />
							<FormControlLabel value="C" control={<Radio />} label="Đáp án C" />
							<FormControlLabel value="D" control={<Radio />} label="Đáp án D" />
						</RadioGroup>
					</FormControl>
				</div>
				<div className="test-toeic-detail-item">
					<FormControl component="fieldset" className={classes.formControl}>
						<h6 className="test-detail-text"><small>Câu 4: </small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas voluptate labore officiis dolores fuga esse vero</h6>
						<p className="text-detail-text-i1">Chọn đáp án đúng: </p>
						<FormLabel component="legend"></FormLabel>
						<RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
							<FormControlLabel value="A" control={<Radio />} label="Đáp án A" />
							<FormControlLabel value="B" control={<Radio />} label="Đáp án B" />
							<FormControlLabel value="C" control={<Radio />} label="Đáp án C" />
							<FormControlLabel value="D" control={<Radio />} label="Đáp án D" />
						</RadioGroup>
					</FormControl>
				</div>
				<div className="test-toeic-detail-item">
					<FormControl component="fieldset" className={classes.formControl}>
						<h6 className="test-detail-text"><small>Câu 5: </small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas voluptate labore officiis dolores fuga esse vero</h6>
						<p className="text-detail-text-i1">Chọn đáp án đúng: </p>
						<FormLabel component="legend"></FormLabel>
						<RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
							<FormControlLabel value="A" control={<Radio />} label="Đáp án A" />
							<FormControlLabel value="B" control={<Radio />} label="Đáp án B" />
							<FormControlLabel value="C" control={<Radio />} label="Đáp án C" />
							<FormControlLabel value="D" control={<Radio />} label="Đáp án D" />
						</RadioGroup>
					</FormControl>
				</div>
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