import React from 'react'

function UserCard({ user }) {
  return (
    <div style={{
      border: '3px solid #646cff',
      borderRadius: '15px',
      padding: '25px',
      margin: '20px auto',
      maxWidth: '500px',
      backgroundColor: '#f0f0ff',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#646cff', textAlign: 'center' }}>🪪 بطاقة تعريف المستخدم</h2>
      <div style={{ padding: '10px' }}>
        <p><strong>📛 الاسم:</strong> {user.name}</p>
        <p><strong>🎂 العمر:</strong> {user.age}</p>
        <p><strong>🏙️ المدينة:</strong> {user.city}</p>
        <p><strong>⚡ الحالة:</strong> {user.status}</p>
        <p><strong>📧 البريد:</strong> {user.email}</p>
        <hr />
        <p><strong>📅 التاريخ:</strong> {new Date().toLocaleDateString('ar-EG')}</p>
        <p><strong>🕐 الوقت:</strong> {new Date().toLocaleTimeString('ar-EG')}</p>
      </div>
    </div>
  )
}

export default UserCard