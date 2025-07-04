import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedSubreddit, setSearchTerm } from '../../Features/FeedSlice';

export function Result(props) {
  const dispatch = useDispatch();

  const handleClickList = () => {
    dispatch(setSelectedSubreddit(props.name));
    dispatch(setSearchTerm(''));
  };

  return (
    <li className="result" onClick={handleClickList}>
      {props.icon ? (
        <img src={props.icon}></img>
      ) : (
        <img src="/no-image.png"></img>
      )}
      <h4>{props.name}</h4>
    </li>
  );
}
