import { createApp, provide, h } from 'vue';
import { ApolloClient, createHttpLink, InMemoryCache, gql } from '@apollo/client/core';
import { DefaultApolloClient } from '@vue/apollo-composable';

import './style.css';
import App from './App.vue';


const httpLink = createHttpLink({ uri: "http://localhost:3000/graphql" });
const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
    link: httpLink,
    cache,

});

const query = gql`
query {
  Crafts {
    edges{
      name
    }
  }
}`

apolloClient.query({query}).then(data => console.log(data));
createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App)
}).mount('#app');
