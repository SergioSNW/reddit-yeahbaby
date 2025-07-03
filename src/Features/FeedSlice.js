import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { selectSubreddits } from './SubredditSlice';

export const fetchFeed = createAsyncThunk('feed/fetchFeed', async (input) => {
  const { selectedSubreddit, filter } = input;
  const res = await fetch(
    `https://www.reddit.com/${selectedSubreddit}/${filter}.json`
  );
  const json = await res.json();
  return json.data.children.map((subreddit) => subreddit.data);
});

export const fetchComments = createAsyncThunk(
  'feed/fetchComments',
  async (link) => {
    const res = await fetch(`https://www.reddit.com${link}.json`);
    const json = await res.json();
    // The second [1] item is the comments
    return json[1].data.children.map((comments) => comments.data);
  }
);

const feedSlice = createSlice({
  name: 'feed',
  initialState: {
    feed: [],
    selectSubreddit: 'r/popular',
    searchTerm: '',
    filter: 'top',
    comments: [],
    isLoading: false,
    error: false,
    commentsIsLoading: false,
    commentsIsError: false,
  },
  reducers: {
    setSelectedSubreddit(state, action) {
      state.selectSubreddit = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {},
});
