# 🧠 BrainBox - Learning App

BrainBox is a modern, intuitive React Native learning application built with Expo. It provides a comprehensive platform for users to discover, enroll in, and manage their learning courses with a beautiful and user-friendly interface.

## 📱 Features

- **User Authentication**: Secure sign-in and sign-up functionality
- **Course Management**: Browse, explore, and manage your learning courses
- **Profile Management**: Edit and customize your user profile
- **Responsive Design**: Optimized for both iOS and Android platforms
- **Modern UI/UX**: Clean, intuitive interface with smooth navigation

## 🛠️ Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router for file-based routing
- **State Management**: Zustand for lightweight state management
- **Form Handling**: React Hook Form for efficient form management
- **Platform**: Cross-platform (iOS, Android, Web)

## 📦 Dependencies

- Expo SDK 52
- React Native 0.76.3
- React 18.3.1
- Expo Router 4.0.11
- Zustand 5.0.2
- React Hook Form 7.53.2

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd BrainBox
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on specific platforms:
```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

## 📱 App Screenshots

<div align="center">

### 🚀 **Welcome Experience**
<table>
<tr>
<td align="center">
<img src="./screenshots/home-screen.jpg" width="250" alt="Welcome Screen"/>
<br><b>Welcome Screen</b><br>
<em>Beautiful landing with BrainBox logo</em>
</td>
</tr>
</table>

### 🔐 **Authentication Flow**
<table>
<tr>
<td align="center">
<img src="./screenshots/log-in-screen.jpg" width="250" alt="Sign In Screen"/>
<br><b>Sign In</b><br>
<em>Secure & intuitive login</em>
</td>
<td align="center">
<img src="./screenshots/sign-up-screen.jpg" width="250" alt="Sign Up Screen"/>
<br><b>Sign Up</b><br>
<em>Quick registration process</em>
</td>
</tr>
</table>

### 🎯 **Core Features**
<table>
<tr>
<td align="center">
<img src="./screenshots/explore-screen.jpg" width="250" alt="Explore Screen"/>
<br><b>Explore</b><br>
<em>Discover new courses</em>
</td>
<td align="center">
<img src="./screenshots/my-courses-screen.jpg" width="250" alt="My Courses Screen"/>
<br><b>My Courses</b><br>
<em>Track your progress</em>
</td>
</tr>
</table>

### 👤 **Profile Management**
<table>
<tr>
<td align="center">
<img src="./screenshots/profile-screen.jpg" width="250" alt="Profile Screen"/>
<br><b>Profile</b><br>
<em>Personal dashboard</em>
</td>
<td align="center">
<img src="./screenshots/edit-profile.jpg" width="250" alt="Edit Profile Screen"/>
<br><b>Edit Profile</b><br>
<em>Customize your info</em>
</td>
</tr>
</table>

</div>

---

### 📱 **Screenshot Gallery**
> *Hover over images to see full details. All screenshots showcase the modern dark theme with orange accents.*

<details>
<summary><b>🖼️ View All Screenshots in Detail</b></summary>

| Screen | Description | Features |
|--------|-------------|----------|
| ![Welcome](./screenshots/home-screen.jpg) | **Welcome Screen** | • Brand logo<br>• Call-to-action button<br>• Clean design |
| ![Sign In](./screenshots/log-in-screen.jpg) | **Authentication** | • Secure login<br>• Form validation<br>• User-friendly UI |
| ![Sign Up](./screenshots/sign-up-screen.jpg) | **Registration** | • Quick signup<br>• Input validation<br>• Modern form design |
| ![Explore](./screenshots/explore-screen.jpg) | **Course Discovery** | • Course browsing<br>• Search functionality<br>• Category filters |
| ![My Courses](./screenshots/my-courses-screen.jpg) | **Learning Hub** | • Progress tracking<br>• Course management<br>• Learning analytics |
| ![Profile](./screenshots/profile-screen.jpg) | **User Profile** | • Personal information<br>• Settings access<br>• Achievement display |
| ![Edit Profile](./screenshots/edit-profile.jpg) | **Profile Editor** | • Information editing<br>• Avatar upload<br>• Preferences setup |

</details>

## 🎥 Demo Video

Watch the complete app demonstration:

https://github.com/user-attachments/assets/214145R_ReactNative_app.mp4

*This video showcases the full user journey from authentication to course management*

### Alternative Video Viewing Options

If the video above doesn't play directly, you can:

1. **Download and view locally**: Right-click the video link above and select "Save link as..." to download the MP4 file
2. **View in GitHub**: The video should be playable directly in GitHub's interface
3. **Stream online**: Click the video link to open it in a new tab

**Video File**: `demo-videos/214145R_ReactNative_app.mp4`

## 🏗️ Project Structure

```
BrainBox/
├── app/                    # Main application code
│   ├── (auth)/            # Authentication screens
│   │   ├── sign-in.jsx    # Sign in screen
│   │   └── sign-up.jsx    # Sign up screen
│   ├── (tabs)/            # Tab-based navigation screens
│   │   ├── home.jsx       # Home dashboard
│   │   ├── explore.jsx    # Course exploration
│   │   ├── my-courses.jsx # User's courses
│   │   └── profile.jsx    # User profile
│   ├── store/             # State management
│   │   └── courseStore.js # Course-related state
│   └── _layout.jsx        # Root layout
├── assets/                # Static assets
│   ├── images/           # App images and logos
│   └── icons/            # Tab and UI icons
├── constants/            # App constants and configurations
└── screenshots/          # App screenshots for documentation
```

## 🎨 Design Features

- **Dark Theme**: Modern dark interface with orange accent colors
- **Tab Navigation**: Intuitive bottom tab navigation
- **Responsive Layout**: Adapts to different screen sizes
- **Smooth Animations**: Enhanced user experience with smooth transitions
- **Custom Icons**: Unique iconography for better visual hierarchy

## 🔧 Configuration

The app is configured through `app.json` with:
- App name: "BrainBox"
- Version: 1.0.0
- Orientation: Portrait
- Custom splash screen and icons
- Cross-platform support (iOS, Android, Web)

## 📱 Supported Platforms

- ✅ iOS (iPhone & iPad)
- ✅ Android (Phone & Tablet)
- ✅ Web (Progressive Web App)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Developer
- Name: Paranietharan P.
- Index No: 214145R
