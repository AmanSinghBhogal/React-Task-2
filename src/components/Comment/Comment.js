import React from 'react';
import './Comment.css';
import ProfilePic from '../ProfilePic/ProfilePic';
import moment from 'moment';

const Comment = ({comment}) => {
    return (
        <div className='Comment__Container'>
            <div className='Comment__ProfilePicSection'>
                <ProfilePic link={comment.profileImg} />
            </div>
            <div className='Comment__Content'>
                <div className='Comment__title'>
                    <span>{comment.name}</span>
                    <span id="fromDate">{moment(comment.date).fromNow()}</span>
                </div>
                <div className='Comment__body'>
                    <span>{comment.commentMessage}</span>
                </div>
            </div>
        </div>
    )
};

export default Comment;