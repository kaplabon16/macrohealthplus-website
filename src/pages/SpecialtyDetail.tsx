import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import SpecialtyPageTemplate from '../components/specialties/SpecialtyPageTemplate';
import { specialties } from '../data/specialties';
import { setPageMeta } from '../utils/seo';

export default function SpecialtyDetail() {
  const location = useLocation();
  const specialty = specialties.find((item) => item.route === location.pathname);

  useEffect(() => {
    if (specialty) setPageMeta(specialty.title, specialty.description);
  }, [specialty]);

  if (!specialty) return <Navigate to="/404" replace />;

  return <SpecialtyPageTemplate specialty={specialty} />;
}
