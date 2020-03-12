import axios from 'axios';
import {
    FILL_LIST_REVIEWS,
    FILL_FULL_LIST_REVIEWS,
    GETTING_FULL_LIST_REVIEWS,
    EMPTY_FULL_LIST_REVIEWS
} from './types';

export const getListReviews = (resId) => {
    return async (dispatch) => {
        try {
            const res = await axios.get('https://developers.zomato.com/api/v2.1/reviews', {
                                        headers: {
                                            "user-key":"75162bb707dfc9544420513e4f7bb699"
                                        },
                                        params: {
                                            res_id: resId,
                                            start: 1,
                                            count: 2
                                        }
                                    })
            dispatch({
                type: FILL_LIST_REVIEWS,
                payload: res.data.user_reviews
            })
        } catch(err) {
            console.log(err)
        }
    }
} 

export const getFullListReviews = (resId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: GETTING_FULL_LIST_REVIEWS })
            const res = await axios.get('https://developers.zomato.com/api/v2.1/reviews', {
                                        headers: {
                                            "user-key":"75162bb707dfc9544420513e4f7bb699"
                                        },
                                        params: {
                                            res_id: resId,
                                            start: 1,
                                            count: 10
                                        }
                                    })
            dispatch({
                type: FILL_FULL_LIST_REVIEWS,
                payload: res.data.user_reviews
            })
        } catch(err) {
            console.log(err)
        }
    }
}

export const emptyFullListReviews = () => {
    return {
        type: EMPTY_FULL_LIST_REVIEWS
    }
}