import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import LoginFormReducer from './LoginFormReducer';
import HomeListPostReducer from './HomeListPostReducer';
import RestaurantDetailsReducer from './RestaurantDetailsReducer';
import ReviewRestaurantListReducer from './ReviewRestaurantListReducer';

export default combineReducers({
    user: UserReducer,
    loginForm: LoginFormReducer,
    homeListPost: HomeListPostReducer,
    restaurantDetails: RestaurantDetailsReducer,
    reviewRestaurantList: ReviewRestaurantListReducer
})