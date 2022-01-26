import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Error() {
    const location = useLocation()
  return <div>This is Error Page : {location.pathname} Not found</div>;
}
