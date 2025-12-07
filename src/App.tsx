import { useState, useEffect } from 'react'

// SVG Icons matching exact iOS 16 specs
const SignalIcon = () => (
  <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
    <path d="M0 9C0 8.44772 0.423 8 0.944 8H1.889C2.41 8 2.833 8.44772 2.833 9V11C2.833 11.5523 2.41 12 1.889 12H0.944C0.423 12 0 11.5523 0 11V9Z" fill="white" />
    <path d="M4.722 6.5C4.722 5.94772 5.145 5.5 5.667 5.5H6.611C7.133 5.5 7.556 5.94772 7.556 6.5V11C7.556 11.5523 7.133 12 6.611 12H5.667C5.145 12 4.722 11.5523 4.722 11V6.5Z" fill="white" />
    <path d="M9.444 3C9.444 2.44772 9.867 2 10.389 2H11.333C11.855 2 12.278 2.44772 12.278 3V11C12.278 11.5523 11.855 12 11.333 12H10.389C9.867 12 9.444 11.5523 9.444 11V3Z" fill="white" />
    <path d="M14.167 1C14.167 0.447715 14.59 0 15.111 0H16.056C16.577 0 17 0.447715 17 1V11C17 11.5523 16.577 12 16.056 12H15.111C14.59 12 14.167 11.5523 14.167 11V1Z" fill="white" />
  </svg>
)

const WifiIcon = () => (
  <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
    <path d="M5.115 9.002C6.535 7.7761 8.615 7.7761 10.035 9.002C10.107 9.0679 10.147 9.1615 10.149 9.2598C10.151 9.358 10.114 9.4526 10.045 9.5215L7.822 11.8115C7.757 11.8788 7.668 11.917 7.575 11.917C7.482 11.917 7.393 11.8788 7.328 11.8115L5.104 9.5215C5.036 9.4526 4.998 9.3579 5 9.2598C5.002 9.1615 5.044 9.0678 5.115 9.002ZM2.109 6.2617C5.168 3.3571 9.906 3.3571 12.965 6.2617C13.034 6.3298 13.073 6.4235 13.074 6.5215C13.075 6.6194 13.037 6.7138 12.97 6.7832L11.685 8.1084C11.552 8.2437 11.338 8.247 11.202 8.1152C10.198 7.1868 8.891 6.6728 7.536 6.6729C6.182 6.6734 4.876 7.1873 3.872 8.1152C3.736 8.247 3.522 8.2438 3.39 8.1084L2.104 6.7832C2.037 6.7138 1.999 6.6194 2 6.5215C2.001 6.4235 2.04 6.3298 2.109 6.2617ZM-0.893 3.5254C3.799 -1.06422 11.201 -1.06416 15.893 3.5254C15.96 3.5936 15.999 3.6869 16 3.7842C16 3.8813 15.963 3.975 15.896 4.0439L14.609 5.3691C14.477 5.5051 14.262 5.5068 14.127 5.373C12.339 3.6383 9.967 2.671 7.5 2.6709C5.033 2.671 2.661 3.6383 0.873 5.373C0.739 5.5069 0.523 5.5053 0.391 5.3691L-0.896 4.0439C-0.963 3.975 -1 3.8812 -1 3.7842C-0.999 3.6869 -0.961 3.5935 -0.893 3.5254Z" fill="white" />
  </svg>
)

const BatteryIcon = () => (
  <svg width="27" height="13" viewBox="0 0 27 13" fill="none">
    <rect opacity="0.35" x="0.5" y="0.5" width="23" height="12" rx="2.5" stroke="white" />
    <path d="M2 4C2 2.89543 2.89543 2 4 2H18C19.1046 2 20 2.89543 20 4V9C20 10.1046 19.1046 11 18 11H4C2.89543 11 2 10.1046 2 9V4Z" fill="white" />
    <path opacity="0.4" d="M25 4.5C25.8284 4.5 26.5 5.17157 26.5 6C26.5 6.82843 25.8284 7.5 25 7.5V4.5Z" fill="white" />
  </svg>
)

const FlashlightIcon = () => (
  <svg width="11" height="24" viewBox="0 0 11 24" fill="none">
    <path d="M0.327 2.758V2.477C0.327 1.124 1.004 0.447 2.309 0.447H8.081C9.386 0.447 10.063 1.124 10.063 2.477V2.758H0.327ZM4.281 23.592C2.986 23.592 2.3 22.896 2.3 21.552V10.289C2.3 9.235 2.068 8.539 1.691 7.959L1.14 7.089C0.656 6.345 0.327 5.678 0.327 4.788V4.024H10.063V4.788C10.063 5.678 9.734 6.345 9.261 7.089L8.7 7.959C8.332 8.539 8.091 9.235 8.091 10.289V21.552C8.091 22.896 7.404 23.592 6.109 23.592H4.281ZM3.431 11.179V14.243C3.431 15.229 4.204 16.013 5.2 16.013C6.196 16.013 6.969 15.229 6.969 14.243V11.179C6.969 10.183 6.196 9.409 5.2 9.409C4.204 9.409 3.431 10.183 3.431 11.179ZM5.2 15.384C4.552 15.384 4.05 14.901 4.05 14.243C4.05 13.615 4.562 13.103 5.2 13.103C5.838 13.103 6.341 13.615 6.341 14.243C6.341 14.901 5.857 15.384 5.2 15.384Z" fill="white" />
  </svg>
)

const CameraIcon = () => (
  <svg width="26" height="20" viewBox="0 0 26 20" fill="none">
    <path d="M4.07 18.646C1.933 18.646 0.792 17.525 0.792 15.408V5.246C0.792 3.129 1.933 1.998 4.07 1.998H6.477C7.231 1.998 7.492 1.872 7.976 1.379L8.74 0.587C9.252 0.055 9.774 -0.197 10.75 -0.197H14.801C15.778 -0.197 16.3 0.055 16.812 0.587L17.576 1.379C18.059 1.872 18.321 1.998 19.065 1.998H21.53C23.667 1.998 24.798 3.129 24.798 5.246V15.408C24.798 17.525 23.667 18.646 21.53 18.646H4.07ZM20.883 7.528C21.588 7.528 22.168 6.958 22.168 6.252C22.168 5.546 21.588 4.966 20.883 4.966C20.177 4.966 19.597 5.546 19.597 6.252C19.597 6.958 20.177 7.538 20.883 7.528ZM12.8 15.504C15.671 15.504 17.972 13.203 17.972 10.312C17.972 7.431 15.671 5.121 12.8 5.121C9.929 5.121 7.618 7.431 7.618 10.312C7.618 13.203 9.929 15.504 12.8 15.504ZM12.8 13.58C11.002 13.58 9.542 12.13 9.542 10.312C9.542 8.505 10.992 7.045 12.8 7.045C14.608 7.045 16.058 8.505 16.058 10.312C16.058 12.13 14.608 13.58 12.8 13.58Z" fill="white" />
  </svg>
)

const PersonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 6.196C8.463 6.196 9.734 4.884 9.734 3.175C9.734 1.486 8.463 0.235 7 0.235C5.537 0.235 4.266 1.513 4.266 3.188C4.266 4.884 5.53 6.196 7 6.196ZM2.413 12.526H11.58C12.312 12.526 12.749 12.184 12.749 11.617C12.749 9.853 10.541 7.42 6.993 7.42C3.452 7.42 1.244 9.853 1.244 11.617C1.244 12.184 1.682 12.526 2.413 12.526Z" fill="white" />
  </svg>
)

// iMessage App Icon (small version for notification badge)
const IMessageIcon = () => (
  <svg width="20" height="20" viewBox="0 0 120 120" fill="none">
    <defs>
      <linearGradient id="imessage-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#5FE978" />
        <stop offset="100%" stopColor="#26C543" />
      </linearGradient>
    </defs>
    <rect width="120" height="120" rx="27" fill="url(#imessage-gradient)" />
    <ellipse cx="60" cy="52" rx="38" ry="32" fill="white" />
    <path d="M32 72 Q28 90 22 88 Q38 84 42 74" fill="white" />
  </svg>
)

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = () => {
    let hours = currentTime.getHours()
    const minutes = currentTime.getMinutes().toString().padStart(2, '0')
    hours = hours % 12 || 12
    return `${hours}:${minutes}`
  }

  const formatDate = () => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    }
    return currentTime.toLocaleDateString('en-US', options)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <div className="lock-screen">
        {/* Wallpaper */}
        <img
          src="/monstera-leaves.jpg"
          alt="Wallpaper"
          className="wallpaper"
        />

        {/* Dynamic Island */}
        <div className="dynamic-island" />

        {/* Status Bar */}
        <div className="status-bar">
          <div className="status-bar-left">
            <span className="carrier">Verizon</span>
          </div>
          <div className="status-bar-right">
            <SignalIcon />
            <WifiIcon />
            <BatteryIcon />
          </div>
        </div>

        {/* Top Section - Date & Time (NO LOCK ICON) */}
        <div className="top-section">
          <div className="date-text">{formatDate()}</div>
          <div className="time-display">{formatTime()}</div>
        </div>

        {/* Notifications */}
        <div className="notifications-container">
          {/* Messages Notification with contact avatar */}
          <div className="notification-wrapper">
            <div className="notification">
              <div className="notification-icon-contact">
                <div className="contact-avatar">
                  <span className="contact-initials">MK</span>
                </div>
                <div className="app-badge">
                  <IMessageIcon />
                </div>
              </div>
              <div className="notification-content">
                <div className="notification-headline-row">
                  <span className="notification-headline">Messages</span>
                  <span className="notification-time">now</span>
                </div>
                <div className="notification-subheadline">
                  Hey! Just wanted to check in and see how you're doing...
                </div>
              </div>
            </div>
          </div>

          {/* Second Notification */}
          <div className="notification-wrapper">
            <div className="notification">
              <div className="notification-icon" />
              <div className="notification-content">
                <div className="notification-headline-row">
                  <span className="notification-headline">Headline</span>
                  <span className="notification-time">15m ago</span>
                </div>
                <div className="notification-subheadline">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing elit a dipiscing...
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="bottom-actions">
          <div className="bottom-buttons">
            <div className="action-button">
              <FlashlightIcon />
            </div>
            <div className="focus-indicator">
              <div className="person-icon-wrapper">
                <PersonIcon />
              </div>
              <span className="focus-text">Personal</span>
            </div>
            <div className="action-button">
              <CameraIcon />
            </div>
          </div>
          <div className="home-indicator" />
        </div>
      </div>
    </div>
  )
}

export default App