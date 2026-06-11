import React from 'react'
import { useNavigate } from 'react-router-dom'
const Contact = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/")
  }
  return (
    <div>
      <h2>Contact</h2>
      <button onClick={goToHome}>Go to Home</button>
    </div>
  )
}

export default Contact