import React from 'react';

export default function Logout() {

  localStorage.removeItem('isAuthenticated');
  localStorage.removeItem('_id');
  localStorage.removeItem('email');
  localStorage.removeItem('token');
  window.location.href = "/login";
  return (
    <>

    </>
  );
}
