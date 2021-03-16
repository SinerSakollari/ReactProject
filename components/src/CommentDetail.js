import React from 'react';
import faker from 'faker';

const CommentDetail = props => {
    var yes = faker.name.findName()
    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img style={{height:"50px",width:"50px"}} alt="avatar" src={props.avatar} />
                </a>
                <div className="content">
                    <a href="/" className="author" >
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">
                            {props.timeAgo}
                        </span>
                    </div>
                    <div className="text">
                        {props.message}
                    </div>
                </div>
            </div>
    );
};


export default CommentDetail;