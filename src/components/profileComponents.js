import React from 'react';

function Profile(props) {
  return (
    <div className="profile">
      <img src={props.picture} />
      <div>
        <span>{props.id}</span>
        <br />
        <span>
          <strong>
            {props.title} {props.firstName} {props.lastName}
          </strong>
        </span>
      </div>
    </div>
  );
}

export default Profile;
