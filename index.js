import {AppRegistry} from 'react-native';
import App from './App';
import Feedback from "./components/feedback";
import {name as appName} from './app.json';
import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from '@apollo/react-hooks';

// const client = new ApolloClient();

// <ApolloProvider client={client} >
//     <App/>
// </ApolloProvider>
AppRegistry.registerComponent(appName, () =>Feedback);
