import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home/Home';
import ShoppingCart from '../Screens/Shopping Cart/Shopping-Cart';
import Menu from '../Screens/InfoPages/Menu';
import DeliveryInfo from '../Screens/InfoPages/Subscreens/DeliveryInfo';
import ExchangePolicy from '../Screens/InfoPages/Subscreens/ExchangePolicy';
import PrivacyPolicy from '../Screens/InfoPages/Subscreens/PrivacyPolicy';
import TermsAndConditions from '../Screens/InfoPages/Subscreens/TermsandConditions';
import Signin from '../Screens/Authentication/Signin';
import Signup from '../Screens/Authentication/Signup';
import Checkout from '../Screens/Shopping Cart/Checkout';
import Thankyou from '../Screens/Shopping Cart/Thankyou';
import MyAccount from '../Screens/My Account/MyAccount';
import Details from '../Screens/Details Screen/Details';
import AllCategories from '../Screens/AllCategories/AllCategories'
import AllAdsScreen from '../Screens/AllAdsScreen/AllAdsScreen';
import MyWishlist from '../Screens/My Account/Sub-screens/MyWishlist';
import MyOrders from '../Screens/My Account/Sub-screens/MyOrders';
import Reviews from '../Screens/My Account/Sub-screens/Reviews';
import PersonalInfo from '../Screens/My Account/Sub-screens/PersonalInfo';

const Stack = createNativeStackNavigator();


export default function Navigation() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='WelcomeScreen' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Shopping Cart" component={ShoppingCart} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Delivery Info" component={DeliveryInfo} />
        <Stack.Screen name="Exchange Policy" component={ExchangePolicy} />
        <Stack.Screen name="Privacy Policy" component={PrivacyPolicy} />
        <Stack.Screen name="Terms and Conditions" component={TermsAndConditions} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Thankyou" component={Thankyou} />

        <Stack.Screen name="My Account" component={MyAccount} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="All Categories" component={AllCategories} />
        <Stack.Screen name="All Ads Screen" component={AllAdsScreen} />
        <Stack.Screen name="My Wishlist" component={MyWishlist} />
        <Stack.Screen name="My Orders" component={MyOrders} />

        <Stack.Screen name="Reviews" component={Reviews} />
        <Stack.Screen name="Personal Info" component={PersonalInfo} />














      </Stack.Navigator>
    </NavigationContainer>






  );
}



