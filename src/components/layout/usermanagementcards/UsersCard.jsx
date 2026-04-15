import React from 'react';
import UserCarditem from './UserCarditem';

const cardConfig = [
  { id: 1, label: "Total Users",    icon: "bi bi-people-fill",       valueKey: "total"    },
  { id: 2, label: "Active Users",   icon: "bi bi-person-check-fill", valueKey: "active"   },
  { id: 3, label: "Pending Users",  icon: "bi bi-hourglass-split",   valueKey: "pending"  },
  { id: 4, label: "Inactive Users", icon: "bi bi-person-x-fill",     valueKey: "inactive" },
];

function UsersCard({ users = [] }) { // ← receive users, no useEffect/axios
  const stats = {
    total:    users.length,
    active:   users.filter(e => e.status === "Active").length,
    pending:  users.filter(e => e.status === "Pending").length,
    inactive: users.filter(e => e.status === "Inactive").length,
  };

  return (
    <>
      {cardConfig.map((ele) => (
        <div className="col-12 col-md-6 col-xxl-3 g-3" key={ele.id}>
          <UserCarditem item={ele} value={stats[ele.valueKey]} />
        </div>
      ))}
    </>
  );
}

export default UsersCard;