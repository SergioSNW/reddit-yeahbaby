import './Header.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../Store/store';
import {
  selectSearchTerm,
  setSearchTerm,
  setSelectedSubreddit,
} from '../../Features/FeedSlice';
import { fetchSearch } from '../../Features/SearchSlice';
import { SearchResults } from '../SearchResults/SearchResults';

export function Header(props) {
  const state = store.getState();
  const dispatch = useDispatch();
  const term = useSelector(selectSearchTerm);

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  useEffect(() => {
    dispatch(fetchSearch(state.feed.searchTerm));
  }, [state.feed.searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSelectedSubreddit('r/' + term));
    dispatch(setSearchTerm(''));
  };

  return (
    <div className="header">
      <div className="logos">
        <img src="/favicon.png" alt="Reddit?YeahBaby logo" id="logo"></img>
        <h2>
          Reddit? <span>YEAH BABY!</span>
        </h2>
      </div>
      <form>
        <img></img>
        <input
          className="search-bar"
          onChange={handleChange}
          placeholder="Search for a Subreddit"
          value={term}
        ></input>
        <div className="search-box">
          <SearchResults />
        </div>
      </form>
      <div className="toggle-bar">
        <label className="toggle">
          <input type="checkbox" onClick={props.toggleTheme}></input>
          <span className="slider"></span>
          <span className="labels" data-on="dark" data-off="light"></span>
        </label>
      </div>
    </div>
  );
}
