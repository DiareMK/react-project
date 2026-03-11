import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import ProfileOverview from './ProfileOverview';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
  return (
    <div style={{ display: 'flex', gap: '30px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px' }}>
      <aside style={{ width: '200px', borderRight: '1px solid #eee' }}>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <NavLink 
            to="" 
            end 
            style={({ isActive }) => ({
              textDecoration: 'none',
              color: isActive ? '#007bff' : '#555',
              fontWeight: isActive ? 'bold' : 'normal',
              padding: '5px'
            })}
          >
            Інформація
          </NavLink>
          <NavLink 
            to="settings" 
            style={({ isActive }) => ({
              textDecoration: 'none',
              color: isActive ? '#007bff' : '#555',
              fontWeight: isActive ? 'bold' : 'normal',
              padding: '5px'
            })}
          >
            Налаштування
          </NavLink>
        </nav>
      </aside>
      <section style={{ flex: 1 }}>
        <Routes>
          <Route index element={<ProfileOverview />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Routes>
      </section>
    </div>
  );
};

export default Profile;
