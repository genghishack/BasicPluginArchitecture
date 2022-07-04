import React, {useState} from 'react';

import {AdminContext} from "../context/AdminContext";
import UserAdmin from "../components/Admin/UserAdmin/UserAdmin";

import './Admin.scss';
import AdminMenu from "../components/Admin/AdminMenu";

const AdminContainer = () => {
  const [adminPhase, setAdminPhase] = useState('user');

  const adminPhaseTransition = (phase) => {
    setAdminPhase(phase);
  }

  const renderAdminPhase = () => {
    switch (adminPhase) {
      default:
        return <UserAdmin/>;
    }
  }

  return (
    <div className="Admin AdminContainer">
      <AdminContext.Provider value={{
        adminPhaseTransition,
      }}>
        <AdminMenu/>
        <div className="AdminContent">
          {renderAdminPhase()}
        </div>
      </AdminContext.Provider>
    </div>
  )
}

export default AdminContainer;
