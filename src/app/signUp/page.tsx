'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = () => {
    if (username.trim() === '' || password.trim() === '') return;

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Artık giriş yapabilirsiniz.');
    router.push('/signIn');
  };

  return (
    <div>
      <h2>Üye Ol</h2>
      <input
        type="text"
        placeholder="Kullanıcı adı"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Şifre"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleRegister}>Kayıt Ol</button>
    </div>
  );
}