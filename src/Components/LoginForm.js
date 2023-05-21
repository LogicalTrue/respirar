import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const testUser = {
  username: 'test',
  password: 'test',
};

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      //const response = 
      await axios.post('http://localhost:3000/oauth2/token', {
        grant_type: 'password',
        client_id: '4e1f3bb2-cab9-4e1f-ae0b-673e5294e0fe',
        client_secret: 'cb56e364-edab-49d9-8f68-c31cd7ac1231',
        username: testUser.username,
        password: testUser.password,
      });

 //     const accessToken = response.data.access_token;

      // Utilizar el accessToken en tu lógica o guardarlo en el estado de la aplicación

      // Redirigir al usuario a la página de inicio después del inicio de sesión
      navigate('/inicio');
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
    }
  };

  return (
    <div>
      Usuario: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />
      Contraseña: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
};

export default LoginForm;