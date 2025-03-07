import { Suspense } from 'react';

/**
 * withSuspense HOC
 *
 * @param {React.ComponentType} WrappedComponent - 감쌀 대상 컴포넌트
 * @param {React.ReactNode} [fallback=<div>Loading...</div>] - 로딩될 때 보여줄 UI
 * @returns 감싼 컴포넌트를 반환
 */
function withSuspense<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  fallback = <div>Loading...</div>
) {
  return function SuspenseHOC(props: P) {
    return (
      <Suspense fallback={fallback}>
        <WrappedComponent {...props} />
      </Suspense>
    );
  };
}

export default withSuspense;
