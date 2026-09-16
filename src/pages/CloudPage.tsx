import { Navigate } from 'react-router-dom';

/** Kense OS marketing content lives on the homepage (`/#os`). */
export function CloudPage() {
  return <Navigate to="/#os" replace />;
}
