import { useState } from 'react'
import notificationsData from './notifications'
import Card from './Card'
import Notification from './Notification'
import './App.css'

function App() {
  const [notifications, setNotifications] = useState(notificationsData)

  function clearNotification(id) {
    const updatedNotifications = notifications.filter(
      (notification) => notification.id !== id
    )
    setNotifications(updatedNotifications)
  }

  function clearAllNotifications() {
    setNotifications([])
  }

  return (
    <div className="app">
      <h1>Notifications</h1>

      <h2>
        {notifications.length} Notification
        {notifications.length !== 1 ? 's' : ''}
      </h2>

      <button onClick={clearAllNotifications}>Clear All</button>

      {notifications.length === 0 ? (
        <p>No notifications</p>
      ) : (
        notifications.map((notification) => (
          <Card key={notification.id}>
            <Notification
              id={notification.id}
              name={notification.name}
              message={notification.message}
              clearNotification={clearNotification}
            />
          </Card>
        ))
      )}
    </div>
  )
}

export default App
