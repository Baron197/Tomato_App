import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Header, Card } from 'react-native-elements';
import { Left, Icon } from 'native-base';
import { connect } from 'react-redux';
import { getListReviews, emptyFullListReviews } from '../actions';

class RestaurantDetails extends React.Component {
    componentDidMount() {
        this.props.getListReviews(this.props.id)
    }

    render() {
        return (
            <View style={{ flex: 1  }}>
                <Header
                    placement='left'
                    centerComponent={{ 
                        text: this.props.name, 
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
                <ScrollView>
                    <Card
                        title={this.props.name + `\n(Rating : ${this.props.user_rating.aggregate_rating})`}
                        image={{ uri: this.props.featured_image }}
                        wrapperStyle={{ justifyContent: 'center', alignItems: 'center' }}
                        imageWrapperStyle={{ width: '100%' }}
                        imageStyle={{ height: 250 }}
                    >
                        <Text style={{ 
                            marginBottom: 10, 
                            fontSize: 18, 
                            textDecorationLine: 'underline' 
                        }}>
                            Address
                        </Text>
                        <Text style={{marginBottom: 10}}>
                            {this.props.location.address}
                        </Text>
                        <Text style={{ 
                            marginBottom: 10, 
                            fontSize: 18, 
                            textDecorationLine: 'underline' 
                        }}>
                            Cuisines
                        </Text>
                        <Text style={{marginBottom: 10}}>
                            {this.props.cuisines}
                        </Text>
                        <Text style={{ 
                            marginBottom: 10, 
                            fontSize: 18, 
                            textDecorationLine: 'underline' 
                        }}>
                            Open Schedule
                        </Text>
                        <Text style={{marginBottom: 10}}>
                            {this.props.timings}
                        </Text>
                        <Text style={{ 
                            marginBottom: 10, 
                            fontSize: 18, 
                            textDecorationLine: 'underline' 
                        }}>
                            Avg Cost for 2 Persons
                        </Text>
                        <Text style={{marginBottom: 10}}>
                            {this.props.currency}{this.props.average_cost_for_two}
                        </Text>
                    </Card>
                    <Card title="User Reviews" containerStyle={{ marginBottom: 20 }}>
                        {
                            this.props.reviewList.map((r, i) => {
                                return (
                                    <View key={i} style={{ padding: 10 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image
                                                style={{ width: 45, height: 45, borderRadius: 45, marginRight: 10 }}
                                                source={{ uri: r.review.user.profile_image }}
                                            />
                                            <View>
                                                <Text style={{ fontSize: 15 }}>{r.review.user.name}</Text>
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
                                                        {r.review.rating}
                                                    </Text>
                                                    <Text 
                                                        style={{
                                                            fontSize:12,
                                                            color:'black',
                                                            marginLeft: 5
                                                        }}
                                                    >
                                                        ({r.review.rating_text})
                                                    </Text>
                                                    <Text 
                                                        style={{
                                                            fontSize:12,
                                                            color:'#9e9e9e',
                                                            marginLeft: 5
                                                        }}
                                                    >
                                                        {r.review.review_time_friendly}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ paddingTop: 10 }}>
                                            <Text style={{ fontSize: 12 }}>
                                                {r.review.review_text}
                                            </Text>
                                        </View>
                                    </View>
                                );
                            })
                        }
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => { 
                                this.props.emptyFullListReviews()
                                this.props.navigation.navigate('RestaurantReviewList')
                            }}>
                                <Text style={{ 
                                    color: 'tomato', 
                                    borderWidth: 1,
                                    borderColor: 'tomato',
                                    padding: 10,
                                    borderRadius: 10
                                }}>
                                    See All Reviews
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Card>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = ({ restaurantDetails }) => {
    return {
        ...restaurantDetails
    }
}

export default connect(mapStateToProps, { getListReviews, emptyFullListReviews })(RestaurantDetails);