import React from 'react';
import { Navigate } from 'react-router-dom';

// No category separations: all gallery requests direct to the unified gallery
export const GalleryCategoryPage = () => {
  return <Navigate to="/gallery" replace />;
};
