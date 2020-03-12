import {
    INIT_RESTAURANT_DETAILS,
    FILL_LIST_REVIEWS
} from '../actions/types';

const INITIAL_STATE = {
    id: '',
    name: '',
    featured_image: '',
    user_rating: {
        aggregate_rating: ''
    },
    location: {
        address: ''
    },
    cuisines: '',
    timings: '',
    currency: '',
    average_cost_for_two: '',
    reviewList: []
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case INIT_RESTAURANT_DETAILS :
            return { ...state, ...action.payload }
        case FILL_LIST_REVIEWS :
            return { ...state, reviewList: action.payload }
        default :
            return state
    }
}