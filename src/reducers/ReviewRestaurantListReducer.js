import {
    FILL_FULL_LIST_REVIEWS,
    GETTING_FULL_LIST_REVIEWS,
    EMPTY_FULL_LIST_REVIEWS
} from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    reviewList: []
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case GETTING_FULL_LIST_REVIEWS :
            return { ...state, loading: true }
        case FILL_FULL_LIST_REVIEWS :
            return { reviewList: action.payload, loading: false }
        case EMPTY_FULL_LIST_REVIEWS :
            return INITIAL_STATE
        default :
            return state
    }
}