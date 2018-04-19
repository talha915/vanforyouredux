import {Dimensions} from 'react-native'
import {TabNavigator, DrawerNavigator, StackNavigator} from 'react-navigation'
import Home from '../screens/Home';
import Services from '../screens/Services'
import Order from '../screens/Order'
import Contact from '../screens/Contact'

const {height, width} = Dimensions.get('window');

/*const Stack1= StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({
            headerTitle: 'HOME',
            headerTitleStyle: {
                marginLeft: width-240
            }
        })
    }
});*/

const Stack2= StackNavigator({
    Services: {
        screen: Services,
        navigationOptions: ({
            headerTitle: 'Services',
            headerStyle:{
                backgroundColor: '#996633'
            },
            headerTitleStyle: {
                marginLeft: width-240
            },
        })
    }
});

const Stack3= StackNavigator({
    Order: {
        screen: Order,
        navigationOptions: ({
            headerTitle: 'Order',
            headerStyle:{
                backgroundColor: '#996633'
            },
            headerTitleStyle: {
                marginLeft: width-240
            }
        })
    }
});

const Stack4= StackNavigator({
    Contact: {
        screen: Contact,
        navigationOptions: ({
            headerTitle: 'Contact',
            headerStyle:{
                backgroundColor: '#996633'
            },
            headerTitleStyle: {
                marginLeft: width-240,
                backgroundColor: '#996633'
            }
        })
    }
});

const Tab = TabNavigator({
    Home: {screen: Home},
    Services: {screen: Stack2},
    Order: {screen: Stack3},
    Contact: {screen: Stack4},  
},
    {
        tabBarPosition: 'bottom',
        
        tabBarOptions: {
            activeTintColor: 'brown',
            inactiveTintColor: 'green',
            tintColor: 'black',
        }
    },
    {
        navigationOptions:({
            headerStyle:{
                backgroundColor: 'brown'
            }
        })
    }
); 

export default Tab;