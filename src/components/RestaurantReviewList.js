import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Header, Card } from 'react-native-elements';
import { Left, Icon } from 'native-base';
import {
    getFullListReviews
} from '../actions';

class RestaurantReviewList extends React.Component {
    componentDidMount() {
        this.props.getFullListReviews(this.props.id)
    }
    
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Header
                    placement='left'
                    centerComponent={{ 
                        text: 'Full Reviews', 
                        style: { color: 'white', fontSize: 18, fontWeight: '700' } 
                    }}
                    leftComponent={{ 
                        icon: 'arrow-back', 
                        color: 'white',
                        onPress: () => this.props.navigation.goBack()
                    }}
                    containerStyle={{
                        backgroundColor: 'tomato',
                        justifyContent: 'space-around',
                        elevation: 2,
                        marginTop: Platform.OS === 'ios' ? 0 : - 25
                    }}
                />
                <FlatList
                    data={this.props.reviewList}
                    refreshing={this.props.loading}
                    keyExtractor={item => item.review.id}
                    renderItem={({ item }) => (
                        <View style={{ 
                            paddingHorizontal: 10, 
                            borderTopWidth: 1,
                            borderTopColor: '#cccccc',
                            paddingVertical: 20 
                        }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    style={{ width: 45, height: 45, borderRadius: 45, marginRight: 10 }}
                                    source={{ uri: item.review.user.profile_image }}
                                />
                                <View>
                                    <Text style={{ fontSize: 15 }}>{item.review.user.name}</Text>
                                    <View style={{ flexDirection: 'row', height: 15, alignItems: 'center' }}>
                                        <Icon 
                                            type='FontAwesome'
                                            name='star' 
                                            style={{ 
                                                fontSize:12,
                                                color:'gold'
                                            }} 
                                        />
                                        <Text 
                                            style={{
                                                fontSize:12,
                                                color:'black',
                                                marginLeft: 5
                                            }}
                                        >
                                            {item.review.rating}
                                        </Text>
                                        <Text 
                                            style={{
                                                fontSize:12,
                                                color:'black',
                                                marginLeft: 5
                                            }}
                                        >
                                            ({item.review.rating_text})
                                        </Text>
                                        <Text 
                                            style={{
                                                fontSize:12,
                                                color:'#9e9e9e',
                                                marginLeft: 5
                                            }}
                                        >
                                            {item.review.review_time_friendly}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ paddingTop: 10 }}>
                                <Text style={{ fontSize: 12 }}>
                                    {item.review.review_text}
                                </Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        )
    }
}

const mapStateToProps = ({ reviewRestaurantList, restaurantDetails }) => {
    return {
        ...reviewRestaurantList,
        id: restaurantDetails.id
    }
}

export default connect(mapStateToProps, { getFullListReviews })(RestaurantReviewList)