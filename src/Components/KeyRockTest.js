import React from 'react';
import queryString from 'query-string';
import clients from '../Clients'

const KeyRockTest = () => {
  const handleLogin = () => {
    const params = {
      response_type: 'code',
      client_id: clients.client_id,
      redirect_uri: 'http://localhost:3000/callback',
      scope: 'openid',
      state: 'uuid ',
    };

    const authorizationEndpoint = 'http://localhost:3000/oauth2/authorize';
    const url = `${authorizationEndpoint}?${queryString.stringify(params)}`;
    window.location.href = url;
  };

  return (
    <button onClick={handleLogin}>Test verificacion</button>
  );
};

export default KeyRockTest;