import React from 'react';
import {Button} from "react-bootstrap";

import {useAdminContext} from "../../context/AdminContext";

const AdminMenu = () => {
  const {
    adminPhaseTransition,
  } = useAdminContext();

  return (
    <div className="AdminMenu">
      <Button
        variant="link"
        onClick={() => adminPhaseTransition('user')}
      >User</Button>
    </div>
  )
}

export default AdminMenu;
