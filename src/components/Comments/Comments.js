import React from 'react';
import './Comments.css';
import Comment from '../Comment/Comment';

const Comments = () => {

    // Dummy Users for Now.
    const Comments = [{
            id: 1,
            name: 'Rahul Gupta',
            date: new Date(2022,1,26,20,10,15,10),
            commentMessage: 'This is a Great Post',
            profileImg: '/images/Profile.jpg'
        },
        {
            id: 2,
            name: 'Rahul Gupta',
            date: new Date(2022,1,26,20,10,15,10),
            commentMessage: 'This is a Great Post',
            profileImg: '/images/Profile.jpg'
        }
    ];

    return (
            <div className='Comments__Container'>
                <div className='Comments__Heading'>
                    45 comments
                </div>
                <div className='Comments__Comments'>
                    {
                        Comments.map(
                            (c) => <Comment comment={c} key={c.id} />
                        )
                    }
                </div>
            </div>
    )
};

export default Comments;