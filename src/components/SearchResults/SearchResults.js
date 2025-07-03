import React from 'react';
import store from '../../Store/store';
import { Result } from './Result';
import './SearchResults.css';
import { selectSearchResults } from '../../Features/SearchSlice';
import { useSelector } from 'react-redux';
import { ResultsLoading } from './ResultsLoading';

export function SearchResults() {
  const state = store.getState();
  const results = useSelector(selectSearchResults);
  let resultsList = '';

  if (!results) {
    return (
      <div className="results-list">
        <p>Subreddit not found</p>
      </div>
    );
  }

  if (state.search.searchLoading) {
    resultsList = '';
    return <ResultsLoading />;
  }

  if (state.search.results) {
    resultsList = results.slice(0, 7).map((result) => {
      const name = result.display_name_prefixed;
      const icon = result.icon_img;
      return <Result name={name} icon={icon} />;
    });
  }

  return <ul className="results-list">{resultsList}</ul>;
}
