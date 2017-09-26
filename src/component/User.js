import React from 'react';

const User = ({ url, img, userId}) => (
    <div className="lg-2 md-4 sm-6 xs-12 items">
        <img className="user-img" alt="" src={img} />
        <a href={url} target="_blank">
            <p className="user-id">{userId}</p>
        </a>
    </div>
);

export default User