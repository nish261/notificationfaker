import { useState, useEffect, useRef } from 'react'
import { toPng } from 'html-to-image'



// SVG Icons matching exact iOS 16 specs - accept color prop
const SignalIcon = ({ color = 'white' }: { color?: string }) => (
  <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
    <path d="M0 9C0 8.44772 0.423 8 0.944 8H1.889C2.41 8 2.833 8.44772 2.833 9V11C2.833 11.5523 2.41 12 1.889 12H0.944C0.423 12 0 11.5523 0 11V9Z" fill={color} />
    <path d="M4.722 6.5C4.722 5.94772 5.145 5.5 5.667 5.5H6.611C7.133 5.5 7.556 5.94772 7.556 6.5V11C7.556 11.5523 7.133 12 6.611 12H5.667C5.145 12 4.722 11.5523 4.722 11V6.5Z" fill={color} />
    <path d="M9.444 3C9.444 2.44772 9.867 2 10.389 2H11.333C11.855 2 12.278 2.44772 12.278 3V11C12.278 11.5523 11.855 12 11.333 12H10.389C9.867 12 9.444 11.5523 9.444 11V3Z" fill={color} />
    <path d="M14.167 1C14.167 0.447715 14.59 0 15.111 0H16.056C16.577 0 17 0.447715 17 1V11C17 11.5523 16.577 12 16.056 12H15.111C14.59 12 14.167 11.5523 14.167 11V1Z" fill={color} />
  </svg>
)

const WifiIcon = ({ color = 'white' }: { color?: string }) => (
  <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
    <path d="M5.115 9.002C6.535 7.7761 8.615 7.7761 10.035 9.002C10.107 9.0679 10.147 9.1615 10.149 9.2598C10.151 9.358 10.114 9.4526 10.045 9.5215L7.822 11.8115C7.757 11.8788 7.668 11.917 7.575 11.917C7.482 11.917 7.393 11.8788 7.328 11.8115L5.104 9.5215C5.036 9.4526 4.998 9.3579 5 9.2598C5.002 9.1615 5.044 9.0678 5.115 9.002ZM2.109 6.2617C5.168 3.3571 9.906 3.3571 12.965 6.2617C13.034 6.3298 13.073 6.4235 13.074 6.5215C13.075 6.6194 13.037 6.7138 12.97 6.7832L11.685 8.1084C11.552 8.2437 11.338 8.247 11.202 8.1152C10.198 7.1868 8.891 6.6728 7.536 6.6729C6.182 6.6734 4.876 7.1873 3.872 8.1152C3.736 8.247 3.522 8.2438 3.39 8.1084L2.104 6.7832C2.037 6.7138 1.999 6.6194 2 6.5215C2.001 6.4235 2.04 6.3298 2.109 6.2617ZM-0.893 3.5254C3.799 -1.06422 11.201 -1.06416 15.893 3.5254C15.96 3.5936 15.999 3.6869 16 3.7842C16 3.8813 15.963 3.975 15.896 4.0439L14.609 5.3691C14.477 5.5051 14.262 5.5068 14.127 5.373C12.339 3.6383 9.967 2.671 7.5 2.6709C5.033 2.671 2.661 3.6383 0.873 5.373C0.739 5.5069 0.523 5.5053 0.391 5.3691L-0.896 4.0439C-0.963 3.975 -1 3.8812 -1 3.7842C-0.999 3.6869 -0.961 3.5935 -0.893 3.5254Z" fill={color} />
  </svg>
)

const BatteryIcon = ({ color = 'white' }: { color?: string }) => (
  <svg width="27" height="13" viewBox="0 0 27 13" fill="none">
    <rect opacity="0.35" x="0.5" y="0.5" width="23" height="12" rx="2.5" stroke={color} />
    <path d="M2 4C2 2.89543 2.89543 2 4 2H18C19.1046 2 20 2.89543 20 4V9C20 10.1046 19.1046 11 18 11H4C2.89543 11 2 10.1046 2 9V4Z" fill={color} />
    <path opacity="0.4" d="M25 4.5C25.8284 4.5 26.5 5.17157 26.5 6C26.5 6.82843 25.8284 7.5 25 7.5V4.5Z" fill={color} />
  </svg>
)

const FlashlightIcon = ({ color = 'white' }: { color?: string }) => (
  <svg width="11" height="24" viewBox="0 0 11 24" fill="none">
    <path d="M0.327 2.758V2.477C0.327 1.124 1.004 0.447 2.309 0.447H8.081C9.386 0.447 10.063 1.124 10.063 2.477V2.758H0.327ZM4.281 23.592C2.986 23.592 2.3 22.896 2.3 21.552V10.289C2.3 9.235 2.068 8.539 1.691 7.959L1.14 7.089C0.656 6.345 0.327 5.678 0.327 4.788V4.024H10.063V4.788C10.063 5.678 9.734 6.345 9.261 7.089L8.7 7.959C8.332 8.539 8.091 9.235 8.091 10.289V21.552C8.091 22.896 7.404 23.592 6.109 23.592H4.281ZM3.431 11.179V14.243C3.431 15.229 4.204 16.013 5.2 16.013C6.196 16.013 6.969 15.229 6.969 14.243V11.179C6.969 10.183 6.196 9.409 5.2 9.409C4.204 9.409 3.431 10.183 3.431 11.179ZM5.2 15.384C4.552 15.384 4.05 14.901 4.05 14.243C4.05 13.615 4.562 13.103 5.2 13.103C5.838 13.103 6.341 13.615 6.341 14.243C6.341 14.901 5.857 15.384 5.2 15.384Z" fill={color} />
  </svg>
)

const CameraIcon = ({ color = 'white' }: { color?: string }) => (
  <svg width="26" height="20" viewBox="0 0 26 20" fill="none">
    <path d="M4.07 18.646C1.933 18.646 0.792 17.525 0.792 15.408V5.246C0.792 3.129 1.933 1.998 4.07 1.998H6.477C7.231 1.998 7.492 1.872 7.976 1.379L8.74 0.587C9.252 0.055 9.774 -0.197 10.75 -0.197H14.801C15.778 -0.197 16.3 0.055 16.812 0.587L17.576 1.379C18.059 1.872 18.321 1.998 19.065 1.998H21.53C23.667 1.998 24.798 3.129 24.798 5.246V15.408C24.798 17.525 23.667 18.646 21.53 18.646H4.07ZM20.883 7.528C21.588 7.528 22.168 6.958 22.168 6.252C22.168 5.546 21.588 4.966 20.883 4.966C20.177 4.966 19.597 5.546 19.597 6.252C19.597 6.958 20.177 7.538 20.883 7.528ZM12.8 15.504C15.671 15.504 17.972 13.203 17.972 10.312C17.972 7.431 15.671 5.121 12.8 5.121C9.929 5.121 7.618 7.431 7.618 10.312C7.618 13.203 9.929 15.504 12.8 15.504ZM12.8 13.58C11.002 13.58 9.542 12.13 9.542 10.312C9.542 8.505 10.992 7.045 12.8 7.045C14.608 7.045 16.058 8.505 16.058 10.312C16.058 12.13 14.608 13.58 12.8 13.58Z" fill={color} />
  </svg>
)

const PersonIcon = ({ color = 'white' }: { color?: string }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 6.196C8.463 6.196 9.734 4.884 9.734 3.175C9.734 1.486 8.463 0.235 7 0.235C5.537 0.235 4.266 1.513 4.266 3.188C4.266 4.884 5.53 6.196 7 6.196ZM2.413 12.526H11.58C12.312 12.526 12.749 12.184 12.749 11.617C12.749 9.853 10.541 7.42 6.993 7.42C3.452 7.42 1.244 9.853 1.244 11.617C1.244 12.184 1.682 12.526 2.413 12.526Z" fill={color} />
  </svg>
)

const LockIcon = ({ color = 'white' }: { color?: string }) => (
  <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
    <path d="M1.875 19.0527H11.1719C12.4316 19.0527 13.0469 18.4277 13.0469 17.0605V9.89258C13.0469 8.66211 12.5391 8.02734 11.4941 7.91992V5.45898C11.4941 1.77734 9.08203 0 6.52344 0C3.96484 0 1.55273 1.77734 1.55273 5.45898V7.94922C0.595703 8.10547 0 8.74023 0 9.89258V17.0605C0 18.4277 0.615234 19.0527 1.875 19.0527ZM3.125 5.25391C3.125 2.80273 4.69727 1.50391 6.52344 1.50391C8.34961 1.50391 9.92188 2.80273 9.92188 5.25391V7.91016H3.125V5.25391Z" fill={color} />
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

// Types
interface NotificationData {
  id: string
  type: 'imessage' | 'app'
  initials?: string
  avatarUrl?: string
  appName?: string
  appIcon?: string // for type 'app'
  iconUrl?: string // for type 'app' uploaded icon
  headline: string
  message: string
  timeAgo: string
}

// Clock font options (all 6 available fonts)
const CLOCK_FONTS = [
  { id: 'sf-rounded', name: 'SF Pro Rounded', value: "'SF Pro Rounded', -apple-system, sans-serif" },
  { id: 'sf-soft', name: 'SF Pro Soft', value: "'SF Pro Soft', -apple-system, sans-serif" },
  { id: 'sf-rails', name: 'SF Pro Rails', value: "'SF Pro Rails', -apple-system, sans-serif" },
  { id: 'sf-stencil', name: 'SF Pro Stencil', value: "'SF Pro Stencil', -apple-system, sans-serif" },
  { id: 'new-york', name: 'New York', value: "'New York', Georgia, serif" },
  { id: 'new-york-heavy', name: 'New York Heavy', value: "'New York Heavy', Georgia, serif" },
]

// Clock color options - iOS Base Colors, System Grays, and Muted Palette
const CLOCK_COLORS = [
  // iOS Base Colors (Row 1)
  { id: 'cyan', name: 'Cyan', value: '#32ADE6' },
  { id: 'green', name: 'Green', value: '#34C759' },
  { id: 'blue', name: 'Blue', value: '#007AFF' },
  { id: 'indigo', name: 'Indigo', value: '#5856D6' },
  { id: 'red', name: 'Red', value: '#FF3B30' },
  { id: 'teal', name: 'Teal', value: '#30B0C7' },
  { id: 'purple', name: 'Purple', value: '#AF52DE' },
  { id: 'yellow', name: 'Yellow', value: '#FFCC00' },
  { id: 'coral', name: 'Coral', value: '#FF453A' },
  { id: 'orange', name: 'Orange', value: '#FF9500' },
  { id: 'brown', name: 'Brown', value: '#A2845E' },
  // System Gray Colors (Row 2)
  { id: 'gray1', name: 'Gray 1', value: '#8E8E93' },
  { id: 'gray2', name: 'Gray 2', value: '#AEAEB2' },
  { id: 'gray3', name: 'Gray 3', value: '#C7C7CC' },
  { id: 'gray4', name: 'Gray 4', value: '#D1D1D6' },
  { id: 'white', name: 'White', value: '#FFFFFF' },
  // Muted Color Palette (Row 3)
  { id: 'muted-cream1', name: 'Cream', value: '#E8D5B7' },
  { id: 'muted-cream2', name: 'Ivory', value: '#F5E6C8' },
  { id: 'muted-yellow', name: 'Pale Yellow', value: '#F0F0C0' },
  { id: 'muted-mint', name: 'Mint', value: '#D4E8D1' },
  { id: 'muted-sage', name: 'Sage', value: '#7B9B8E' },
  { id: 'muted-silver', name: 'Silver', value: '#C8C8C8' },
  { id: 'muted-sky', name: 'Sky Blue', value: '#87CEEB' },
  { id: 'muted-blue', name: 'Soft Blue', value: '#6495ED' },
  { id: 'muted-lavender', name: 'Lavender', value: '#B5C4DF' },
  { id: 'muted-lilac', name: 'Lilac', value: '#D8B8E8' },
]

function App() {
  const previewRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // State
  const [currentTime, setCurrentTime] = useState(new Date())
  const [customTime, setCustomTime] = useState('')
  const [customDate, setCustomDate] = useState('')
  const [clockFont, setClockFont] = useState(CLOCK_FONTS[0].value)
  const [clockColor, setClockColor] = useState('#FFFFFF') // White by default
  const [notificationStyle, setNotificationStyle] = useState<'light' | 'dark'>('dark') // dark = dark glass white text
  const [backgroundUrl, setBackgroundUrl] = useState('/monstera-leaves.jpg')
  const [notifications, setNotifications] = useState<NotificationData[]>([
    {
      id: '1',
      type: 'imessage',
      initials: 'MK',
      headline: 'Messages',
      message: "Hey! Just wanted to check in and see how you're doing...",
      timeAgo: 'now'
    },
    {
      id: '2',
      type: 'app',
      appName: 'App Name',
      headline: 'Headline',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing elit a dipiscing...',
      timeAgo: '15m ago'
    }
  ])
  const [isExporting, setIsExporting] = useState(false)

  // Live time update
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Format time
  const formatTime = () => {
    if (customTime) return customTime
    let hours = currentTime.getHours()
    const minutes = currentTime.getMinutes().toString().padStart(2, '0')
    hours = hours % 12 || 12
    return `${hours}:${minutes}`
  }

  // Format date
  const formatDate = () => {
    if (customDate) return customDate
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    }
    return currentTime.toLocaleDateString('en-US', options)
  }

  // Handle background upload
  const handleBackgroundUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Check for HEIC format which browsers don't support natively
      if (file.name.toLowerCase().endsWith('.heic') || file.type === 'image/heic') {
        alert('Browsers do not support .HEIC files natively. Please convert your photo to JPG or PNG first.')
        return
      }

      const url = URL.createObjectURL(file)
      setBackgroundUrl(url)
    }
  }

  // Handle icon upload for a notification
  const handleIconUpload = (notificationId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setNotifications(prev => prev.map(n =>
        n.id === notificationId ? { ...n, iconUrl: url } : n
      ))
    }
  }

  // Update notification
  const updateNotification = (id: string, updates: Partial<NotificationData>) => {
    setNotifications(prev => prev.map(n =>
      n.id === id ? { ...n, ...updates } : n
    ))
  }

  // Add notification
  const addNotification = (type: 'imessage' | 'app') => {
    const newNotification: NotificationData = {
      id: Date.now().toString(),
      type,
      headline: type === 'imessage' ? 'Messages' : 'Headline',
      message: 'New notification message...',
      timeAgo: 'now',
      ...(type === 'imessage' ? { initials: 'AB', contactName: 'Contact' } : { appName: 'App' })
    }
    setNotifications(prev => [...prev, newNotification])
  }

  // Remove notification
  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  // Export as image
  const exportAsImage = async () => {
    if (!previewRef.current) return
    setIsExporting(true)

    try {
      // Small delay to ensure rendering is stable (especially for fonts)
      await new Promise(resolve => setTimeout(resolve, 100))

      const dataUrl = await toPng(previewRef.current, {
        cacheBust: true,
        pixelRatio: 2, // High resolution (Retina)
        width: 375,
        height: 812,
        backgroundColor: '#000000', // Ensure black background if transparent
        style: {
          borderRadius: '0', // Force square corners
          boxShadow: 'none',   // No shadows
          transform: 'none'    // No transforms
        }
      })

      const link = document.createElement('a')
      link.download = `lock-screen-${Date.now()}.png`
      link.href = dataUrl
      link.click()
    } catch (error) {
      console.error('Export failed:', error)
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <div className="app-container">
      {/* Editor Panel */}
      <div className="editor-panel">
        <h1 className="editor-title">iPhone Lock Screen Faker</h1>

        {/* Background Section */}
        <div className="editor-section">
          <h2 className="section-title">Background</h2>
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            onChange={handleBackgroundUpload}
            style={{ display: 'none' }}
          />
          <button
            className="upload-btn"
            onClick={() => fileInputRef.current?.click()}
          >
            Upload Wallpaper
          </button>
        </div>

        {/* Clock Section */}
        <div className="editor-section">
          <h2 className="section-title">Clock</h2>
          <div className="input-group">
            <label>Font</label>
            <select
              value={clockFont}
              onChange={(e) => setClockFont(e.target.value)}
              className="select-input"
            >
              {CLOCK_FONTS.map(font => (
                <option key={font.id} value={font.value}>{font.name}</option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <label>Time Color</label>
            <div className="color-swatches">
              {CLOCK_COLORS.map(color => (
                <button
                  key={color.id}
                  className={`color-swatch ${clockColor === color.value ? 'active' : ''}`}
                  style={{ backgroundColor: color.value }}
                  onClick={() => setClockColor(color.value)}
                  title={color.name}
                />
              ))}
              {/* Custom Color Picker */}
              <input
                type="color"
                value={clockColor}
                onChange={(e) => setClockColor(e.target.value)}
                className="custom-color-picker"
                title="Custom Color"
              />
            </div>
          </div>
          <div className="input-group">
            <label>Custom Time (leave empty for live)</label>
            <input
              type="text"
              placeholder="e.g., 9:41"
              value={customTime}
              onChange={(e) => setCustomTime(e.target.value)}
              className="text-input"
            />
          </div>
          <div className="input-group">
            <label>Custom Date (leave empty for live)</label>
            <input
              type="text"
              placeholder="e.g., Monday, June 6"
              value={customDate}
              onChange={(e) => setCustomDate(e.target.value)}
              className="text-input"
            />
          </div>
        </div>

        {/* Notifications Section */}
        <div className="editor-section">
          <h2 className="section-title">Notifications</h2>

          {/* Style Toggle */}
          <div className="input-group">
            <label>Notification Style</label>
            <div className="style-toggle">
              <button
                className={`toggle-btn ${notificationStyle === 'light' ? 'active' : ''}`}
                onClick={() => setNotificationStyle('light')}
              >
                Light (Dark Wallpaper)
              </button>
              <button
                className={`toggle-btn ${notificationStyle === 'dark' ? 'active' : ''}`}
                onClick={() => setNotificationStyle('dark')}
              >
                Dark (Bright Wallpaper)
              </button>
            </div>
          </div>

          <div className="add-notification-btns">
            <button className="add-btn" onClick={() => addNotification('imessage')}>
              + iMessage
            </button>
            <button className="add-btn" onClick={() => addNotification('app')}>
              + App Notification
            </button>
          </div>

          {notifications.map((notification, index) => (
            <div key={notification.id} className="notification-editor">
              <div className="notification-editor-header">
                <span>#{index + 1} - {notification.type === 'imessage' ? 'iMessage' : 'App'}</span>
                <button
                  className="remove-btn"
                  onClick={() => removeNotification(notification.id)}
                >
                  ✕
                </button>
              </div>

              {notification.type === 'imessage' ? (
                <>
                  <div className="input-group">
                    <label>Initials</label>
                    <input
                      type="text"
                      value={notification.initials || ''}
                      onChange={(e) => updateNotification(notification.id, { initials: e.target.value })}
                      className="text-input"
                      maxLength={2}
                    />
                  </div>
                  <div className="input-group">
                    <label>Contact Photo</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) {
                          const reader = new FileReader()
                          reader.onload = (ev) => {
                            updateNotification(notification.id, { avatarUrl: ev.target?.result as string })
                          }
                          reader.readAsDataURL(file)
                        }
                      }}
                      className="file-input"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="input-group">
                    <label>App Icon</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleIconUpload(notification.id, e)}
                      className="file-input"
                    />
                  </div>
                </>
              )}

              <div className="input-group">
                <label>Headline</label>
                <input
                  type="text"
                  value={notification.headline}
                  onChange={(e) => updateNotification(notification.id, { headline: e.target.value })}
                  className="text-input"
                />
              </div>
              <div className="input-group">
                <label>Message</label>
                <textarea
                  value={notification.message}
                  onChange={(e) => updateNotification(notification.id, { message: e.target.value })}
                  className="text-input textarea"
                />
              </div>
              <div className="input-group">
                <label>Time</label>
                <input
                  type="text"
                  value={notification.timeAgo}
                  onChange={(e) => updateNotification(notification.id, { timeAgo: e.target.value })}
                  className="text-input"
                  placeholder="e.g., now, 5m ago"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Export Button */}
        <button
          className="export-btn"
          onClick={exportAsImage}
          disabled={isExporting}
        >
          {isExporting ? 'Exporting...' : 'Export as PNG'}
        </button>
      </div>

      {/* Preview Panel */}
      <div className="preview-panel">
        <div className="lock-screen" ref={previewRef}>
          {/* Wallpaper */}
          <img
            src={backgroundUrl}
            className="wallpaper"
            alt=""
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%'
            }}
          />

          {/* Status Bar */}
          <div className="status-bar">
            <div className="status-bar-left">
              {/* Carrier text removed as per user request */}
            </div>
            <div className="status-bar-right">
              <SignalIcon color={notificationStyle === 'light' ? 'white' : 'black'} />
              <WifiIcon color={notificationStyle === 'light' ? 'white' : 'black'} />
              <BatteryIcon color={notificationStyle === 'light' ? 'white' : 'black'} />
            </div>
          </div>

          {/* Top Section - Lock Icon, Date & Time */}
          <div className="top-section">
            <div className="lock-icon-wrapper">
              <LockIcon color={notificationStyle === 'light' ? 'white' : 'black'} />
            </div>
            <div className="date-text" style={{ color: clockColor }}>{formatDate()}</div>
            <div className="time-display" style={{ fontFamily: clockFont, color: clockColor }}>
              {formatTime()}
            </div>
          </div>

          {/* Notifications */}
          <div className="notifications-container">
            {notifications.map(notification => (
              <div key={notification.id} className="notification-wrapper">
                <div className={`notification ${notificationStyle === 'light' ? 'notification-light' : 'notification-dark'}`}>
                  {notification.type === 'imessage' ? (
                    <div className="notification-icon-contact">
                      <div
                        className="contact-avatar"
                        style={notification.avatarUrl ? {
                          backgroundImage: `url(${notification.avatarUrl})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundColor: 'transparent'
                        } : undefined}
                      >
                        {!notification.avatarUrl && (
                          <span className="contact-initials">{notification.initials}</span>
                        )}
                      </div>
                      <div className="app-badge">
                        <IMessageIcon />
                      </div>
                    </div>
                  ) : (
                    <div
                      className="notification-icon"
                      style={notification.iconUrl ? {
                        backgroundImage: `url(${notification.iconUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: 'transparent'
                      } : undefined}
                    />
                  )}
                  <div className="notification-content">
                    <div className="notification-headline-row">
                      <span className="notification-headline">{notification.headline}</span>
                      <span className="notification-time">{notification.timeAgo}</span>
                    </div>
                    <div className="notification-subheadline">
                      {notification.message}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Actions */}
          <div className="bottom-actions">
            <div className="bottom-buttons">
              <div className="action-button">
                <FlashlightIcon color={notificationStyle === 'light' ? 'white' : 'black'} />
              </div>
              <div className="focus-indicator">
                <div className="person-icon-wrapper">
                  <PersonIcon color={notificationStyle === 'light' ? 'white' : 'black'} />
                </div>
                <span className="focus-text" style={{ color: notificationStyle === 'light' ? '#fff' : '#000' }}>Personal</span>
              </div>
              <div className="action-button">
                <CameraIcon color={notificationStyle === 'light' ? 'white' : 'black'} />
              </div>
            </div>
            <div className="home-indicator" style={{ backgroundColor: notificationStyle === 'light' ? '#fff' : '#000' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App