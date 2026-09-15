import { Navigate } from 'react-router-dom';

/** Cloud marketing content lives on the homepage (`/#cloud`). */
export function CloudPage() {
  return <Navigate to="/#cloud" replace />;
}
