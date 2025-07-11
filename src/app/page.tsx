'use client';
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();

  return (
    <div>
      <h1>Farming Game</h1>
      <button onClick={() => router.push('/signIn')}>Giriş Yap</button>
      <p>Hesabın yok mu?</p>
      <button onClick={() => router.push('/signUp')}>Kayıt Ol</button>
    </div>
  );
}