import React from "react";
import "./style.css";

function FriendCard(props) {
    return (
        <ul className="list-group">
          {props.friends.map(item => (
            <li className="list-group-item" key={item.id} href={item.live_link}>
              <img src={item.picture_URL} ></img>
              <h1>{item.title}</h1>
              <p>{item.desc_short}</p>
              <h3>{item.type}</h3>
              <h5>{item.tech_used}</h5>
              <h4>{item.location}</h4>
              <h2>{item.title}</h2>
              <p>{item.desc_long}</p>
              <a className="btn btn-sm btn-primary" href={item.live_link}>Live Demo</a>
              <a className="btn btn-sm btn-success" href={item.repo_link}>Github Link</a>
            </li>
          ))}
        </ul>
        
      );
}

export default FriendCard;
