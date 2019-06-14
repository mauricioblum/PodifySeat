import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// action types e creators

const { Types, Creators } = createActions({
  loadRequest: null,
  loadSuccess: ['data'],
  loadFailure: null,
});

export const PodcastsTypes = Types;
export default Creators;

// initial state
export const INITIAL_STATE = Immutable({
  data: [],
});

// reducers
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_SUCCESS]: (state, { data }) => state.merge({ data }),
});
