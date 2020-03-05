import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Header, Card } from 'react-native-elements';
import { connect } from 'react-redux';

class RestaurantDetails extends React.Component {
    render() {
        return (
            <View>
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

export default connect(mapStateToProps)(RestaurantDetails);