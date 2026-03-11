import React from 'react';

const ActivityItem = ({ action, date }) => {
  return (
    <div style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
      <p style={{ margin: 0, fontWeight: '500' }}>{action}</p>
      <span style={{ fontSize: '12px', color: '#888' }}>{date}</span>
    </div>
  );
};

export default ActivityItem;
