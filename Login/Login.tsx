import React, { useState } from 'react';
import Dashboard from './Dashboard';

interface LoginProps {
  onLogin: () => void; // 로그인 성공 시 호출할 함수
  mode: boolean;
}

const Login: React.FC<LoginProps> = ({ onLogin, mode }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    // 간단한 유효성 검사
    if (!email || !password) {
      setError('이메일과 비밀번호를 입력하세요.');
      return;
    }

    // 로그인 로직 (예: API 호출)
    console.log('로그인 시도:', { email, password });

    // 여기서는 성공적인 로그인으로 가정
    onLogin(); // 로그인 성공 시 상태 업데이트 호출
  };

  return (
    <div
      style={{
        width: '500px',
        height: '430px',
        marginTop: '10px',
        border: '2px solid black',
        borderRadius: '8px',
        backgroundColor: mode ? 'lightgray' : '#f1f1f1',
      }}
    >
      <div
        style={{
          maxWidth: '400px',
          margin: 'auto',
          padding: '20px',
          borderRadius: '8px',
        }}
      >
        <h2 className="text-center font-bold text-xl">Log In</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '8px',
                marginBottom: '10px',
                border: '1px solid black',
                borderradius: '8px',
              }}
            />
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '8px',
                marginBottom: '10px',
                border: '1px solid black',
                borderradius: '8px',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
            }}
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
