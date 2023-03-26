import {Amplify} from "aws-amplify";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import background from './images/SuttonUniBackground.jpg';
import Header from "./components/Header";
import {useRef} from 'react';

import * as React from "react";
import { Admin, fetchUtils, Resource, ListGuesser, Layout } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from "./components/UserList";
import { PostShow } from "./components/PostShow";
import { PostList } from "./components/PostList";
import { PostEdit } from "./components/PostEdit";
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/People';
import AlbumIcon from '@mui/icons-material/Book';
import CustomAppBar from "./components/CustomAppBar";

import awsExports from "./aws-exports";
import { useState } from "react";
Amplify.configure(awsExports);



const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const AppBarLayout = (props) => <Layout {...props} appBar={CustomAppBar} />;

export default function App() {
  const HeaderElement = useRef(null);
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    
    <div style={{backgroundImage : `url(${background})`,
    
    height: '100vh',
    }}>
    <Header  ref={HeaderElement}/>
    <Authenticator signUpAttributes={['email']} usernameAlials="email">
      {({ signOut, user }) => (
        <main>

          <h1>Hi {user.username}</h1>
      <Admin layout={AppBarLayout} dataProvider={dataProvider} >
         <Resource name="posts" options={{ label: 'Posts' }} list={PostList} show={PostShow} edit={PostEdit} icon={PostIcon} />
         <Resource name="users" options={{ label: 'Users' }} list={UserList} icon={UserIcon} />
         <Resource name="albums" options={{ label: 'Albums' }} list={ListGuesser} icon={AlbumIcon} />
      </Admin>
          <button style={{
            marginTop: '20px',
            marginLeft: '40%'
          }} onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
    </div>
  );
}