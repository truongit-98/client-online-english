import React, { Component } from 'react';
import './SvError.css';

class SvError extends Component {
    render() {
        return (
            <div>
                <div className="error-notification">
					<div className="error-message">
					<i class="fa fa-exclamation-triangle"><span> Server đang gặp sự cố. Vui lòng quay lại sau !!!</span></i>
					</div>
				</div>
            </div>
        );
    }
}

export default SvError;