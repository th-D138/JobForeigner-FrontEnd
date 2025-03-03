// RootErrorBoundary.tsx
import React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';

function RootErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const navigate = useNavigate();

  const handleReset = () => {
    // 에러 복구 시 해야 할 로직이 있다면 이곳에서 진행
    resetErrorBoundary();
    // 홈으로 이동하거나 다른 페이지로 이동이 필요한 경우
    navigate('/');
  };

  return (
    <div>
      <h1>에러가 발생했습니다.</h1>
      <p>{error.message}</p>
      <button onClick={handleReset}>홈으로 이동</button>
    </div>
  );
}

interface RootErrorBoundaryProps {
  children: React.ReactNode;
}

function RootErrorBoundary({ children }: RootErrorBoundaryProps) {
  return (
    <ErrorBoundary
      FallbackComponent={RootErrorFallback}
      onReset={() => {
        // ErrorBoundary가 reset될 때 실행할 추가 작업이 있으면 여기에 작성
      }}
    >
      {children}
    </ErrorBoundary>
  );
}

export default RootErrorBoundary;
