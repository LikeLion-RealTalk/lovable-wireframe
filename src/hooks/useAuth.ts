import { useState } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  provider: 'kakao' | 'google';
  avatar?: string;
  role: 'speaker' | 'guest';
}

export const useAuth = () => {
  // 임시로 로그인 상태를 관리 (실제로는 Supabase auth 사용)
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (provider: 'kakao' | 'google') => {
    setIsLoading(true);
    // 실제로는 Supabase auth 로직
    setTimeout(() => {
      console.log("setTimeout");
      setUser({
        id: '1',
        name: provider === 'kakao' ? '카카오 사용자' : '구글 사용자',
        email: `user@${provider}.com`,
        provider,
        avatar: undefined,
        role: 'speaker'
      });
      setIsLoading(false);
    }, 1000);
  };

  const deleteAccount = async () => {
    setIsLoading(true);
    // 실제로는 Supabase에서 계정 삭제 로직
    setTimeout(() => {
      setUser(null);
      setIsLoading(false);
    }, 1000);
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = !!user;
  const isGuest = !user;

  return {
    user,
    isAuthenticated,
    isGuest,
    isLoading,
    login,
    logout,
    deleteAccount
  };
};