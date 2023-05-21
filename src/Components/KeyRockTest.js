import React from 'react';
import queryString from 'query-string';

const KeyRockTest = () => {
  const handleLogin = () => {
    const params = {
      response_type: 'code',
      client_id: '4e1f3bb2-cab9-4e1f-ae0b-673e5294e0fe',
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