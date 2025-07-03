import { configureStore, combineReducers } from '@reduxjs/toolkit';
import subredditsReducer from '../Features/SubredditSlice';
import feedReducer from '../Features/FeedSlice';
import searchReducer from '../Features/SearchSlice';

const store = configureStore({
  reducer: combineReducers({
    subreddits: subredditsReducer,
    feed: feedReducer,
    search: searchReducer,
  }),
});

export default store;
