# 📱 iPhone Notification Faker

A powerful, pixel-perfect iPhone lock screen generator built with React and TypeScript. Create realistic iOS 16+ lock screens with custom notifications, wallpapers, and styling, right in your browser.

## ✨ Features

- **Pixel-Perfect iOS Design**: Meticulously recreated UI elements including the Status Bar, Home Indicator, and Flashlight/Camera buttons using exact SVG paths.
- **Smart Theming**:
  - **Light Mode** (for Dark Wallpapers): White text, white icons, and light glass notifications.
  - **Dark Mode** (for Bright Wallpapers): Black text, black icons, and dark glass notifications.
  - Toggle instantly to see UI elements adapt for optimal contrast.
- **Advanced Notification Editor**:
  - **iMessage**: Create fake texts with custom contact names, avatars (image upload or initials), and messages.
  - **App Notifications**: Generic notifications with custom app icons, titles, and time stamps.
  - **Glassmorphism**: Authentic iOS blur and transparency effects.
- **Customization**:
  - **Wallpaper**: Upload any image to use as the lock screen background.
  - **Clock**: Select from iOS-style fonts and pick **any** custom hex color.
  - **Lock Icon**: Features a themed lock icon above the date.
- **High-Quality Export**:
  - Generates crisp **375x812 PNG** images.
  - Automatically removes rounded corners and the "Dynamic Island" for a clean, rectangular screenshot.
  - Uses `html-to-image` to ensure fonts and layers render without glitches.

## 🛠️ Tech Stack

- **Framework**: React + Vite
- **Language**: TypeScript
- **Styling**: Pure CSS (using CSS Variables & Backdrop Filter)
- **Exporting**: `html-to-image`
- **Icons**: Hand-coded SVGs based on SF Symbols

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/nishchalasri/notificationfaker.git
   cd notificationfaker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Start Creating**
   Open `http://localhost:5173` in your browser.

## 📸 How to Use

1. **Background**: Click "Upload Wallpaper" to choose your base image.
2. **Clock Style**: Adjust the font family and use the color picker to set the clock text color.
3. **Notification Style**: 
   - Choose **Light** if your background is dark.
   - Choose **Dark** if your background is bright.
4. **Add Notifications**:
   - Use the **+ iMessage** or **+ App Notification** buttons.
   - Fill in the details (Name, Message, Time).
   - Upload custom icons or avatars for that personal touch.
5. **Export**: Click **Export as PNG** to download your fake lock screen.

## 📄 License

MIT
