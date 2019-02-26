import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { getToken } from '../utils/functions';

// access_token = BQCY_FQ9OYJTuw3HV57qMFwJj_bA11jM-v0KFUT4yT67jZJsRlxOJDnl7t8Du2mHrGp5YjYkfLa__ZFTOJXHkDY2mhTqi-OiZHHu8vGSEG_q06M3BJvQJYMfZqrPc8Pcd3385esj1jsyEWLjXxVDduyJJiNN1RioK2e8apZNT8U6cSt1az2HyCD0H56FUA

class IndexPage extends React.Component {
  handleAuth = () => {
    const _token = getToken();

    const authEndpoint = 'https://accounts.spotify.com/authorize';
    const clientId = process.env.CLIENT_ID;
    const redirectURI = process.env.REDIRECT_URI;
    const scopes = [
      'user-library-read',
      'user-library-modify',
      'user-top-read'
    ];

    // if there is no token, redirect to Spotify authorization page
    if (!_token) {
      window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join(
        '%20'
      )}&response_type=token&show_dialog=true`;
    }
  };

  // make a call using the token
  fetchExample = () => {
    const _token = getToken();
    fetch('https://api.spotify.com/v1/me/top/tracks', {
      headers: {
        Authorization: `Bearer ${_token}`
      }
    })
      .then((response) => response.json())
      .then((data) => console.log(data.items));
  };

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1 onClick={this.handleAuth}>SPOTIFY APP</h1>
        <button onClick={this.fetchExample}>Get data</button>
      </Layout>
    );
  }
}

export default IndexPage;
