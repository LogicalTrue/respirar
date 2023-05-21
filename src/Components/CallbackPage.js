import React, { useEffect } from 'react';
import axios from 'axios';
import queryString from 'query-string';

const CallbackPage = () => {
  useEffect(() => {
    const params = {
      grant_type: 'authorization_code',
      client_id: '4e1f3bb2-cab9-4e1f-ae0b-673e5294e0fe',
      client_secret: 'cb56e364-edab-49d9-8f68-c31cd7ac1231',
      redirect_uri: 'http://localhost:3000/callback',
      code: queryString.parse(window.location.search).code,
    };

    const tokenEndpoint = 'http://localhost:3000/oauth2/token';

    axios.post(tokenEndpoint, queryString.stringify(params))
      .then(response => {
        // Aquí puedes manejar la respuesta del token de acceso y hacer las acciones necesarias, como guardar el token en el estado de tu aplicación o en una cookie.
      })
      .catch(error => {
        // Manejo de errores
      });
  }, []);

  return (
    <div></div>
  );
};

export default CallbackPage;