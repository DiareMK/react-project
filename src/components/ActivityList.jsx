import React from 'react';
import ActivityItem from './ActivityItem';

const ActivityList = ({ activities }) => {
  if (!activities || activities.length === 0) {
    return <p style={{ color: '#888' }}>Активностей поки що немає.</p>;
  }

  return (
    <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', flex: 1 }}>
      <h3 style={{ marginTop: 0 }}>Остання активність</h3>
      {activities.map((activity, index) => (
        <ActivityItem 
          key={activity.id || index} 
          action={activity.action} 
          date={activity.date} 
        />
      ))}
    </div>
  );
};

export default ActivityList;
