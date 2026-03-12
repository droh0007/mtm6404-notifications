function Notification({ id, name, message, clearNotification }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{message}</p>
      <button onClick={() => clearNotification(id)}>Clear</button>
    </div>
  )
}

export default Notification