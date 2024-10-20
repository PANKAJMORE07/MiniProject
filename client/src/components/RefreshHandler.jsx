import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function RefreshHandler({setIsAuthenticated}) {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      if(localStorage.getItem('token')){
        setIsAuthenticated(true);

        if(location.pathname === '/login' || location.pathname === '/register'){
            navigate('/', {replace: false});
        }
      }
    }, [location.pathname, navigate, setIsAuthenticated]);
  return (
    null
  )
}

export default RefreshHandler