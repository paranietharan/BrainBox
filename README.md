# BrainBox — Learning App Prototype

A React Native and Expo application developed for a **Mobile Application Development module assignment**. BrainBox explores course browsing, navigation, form validation, and profile screens through a learning-app interface.

**Developer:** Paranietharan P. · **Index number:** 214145R

## Implemented scope

- Welcome, sign-in, and sign-up screens.
- Tab navigation for home, course exploration, my courses, and profile views.
- Profile-editing UI and image-picker integration.
- Form validation using React Hook Form and a small Zustand store.

Authentication is a UI demonstration: [sign-in](app/%28auth%29/sign-in.jsx) checks hardcoded demo credentials, and [sign-up](app/%28auth%29/sign-up.jsx) logs form data and navigates without creating a persistent account. The source logs entered credentials, so use only dummy information when trying the prototype. Course and profile screens should not be interpreted as a deployed learning-management backend.

## Technology

Versions declared in [package.json](package.json): Expo SDK 52, React Native 0.76.3, React 18.3.1, Expo Router 4, Zustand, React Hook Form, and Expo Image Picker.

## Run locally

Use Node.js/npm and an emulator or device setup compatible with the project's Expo SDK 52 dependencies. The repository does not pin a Node version.

```bash
git clone https://github.com/paranietharan/BrainBox.git
cd BrainBox
npm ci
npm start
```

Available scripts:

```bash
npm run android
npm run ios
npm run web
```

These scripts invoke Expo's platform launchers. Platform tooling and any additional web dependencies must be available in your environment; a script's presence does not establish that every platform has been tested. The repository has no automated test script.

For the demo sign-in, the source includes `admin@eduapp.com` / `admin123`. These are hardcoded prototype values, not an account on an authentication server.

## Screenshots and demonstration

| Screen | Preview |
| --- | --- |
| Welcome | [Home screen](screenshots/home-screen.jpg) |
| Sign in | [Login screen](screenshots/log-in-screen.jpg) |
| Sign up | [Registration screen](screenshots/sign-up-screen.jpg) |
| Explore | [Explore screen](screenshots/explore-screen.jpg) |
| My courses | [Course screen](screenshots/my-courses-screen.jpg) |
| Profile | [Profile screen](screenshots/profile-screen.jpg) |
| Edit profile | [Edit profile](screenshots/edit-profile.jpg) |

[Watch or download the recorded app demonstration](demo-videos/214145R_ReactNative_app.mp4).

## Source guide

- [app](app): Expo Router screens, layouts, and state store.
- [constants](constants): Shared image/icon references.
- [assets](assets): Bundled application assets.
- [app.json](app.json): Expo application configuration.

This repository preserves the assignment prototype and its demonstration materials. A persistent backend, real authentication, and automated user-flow tests would be separate follow-up work.

## License

The previous README described this project as MIT licensed, but no `LICENSE` file is currently included. Confirm the intended license with the maintainer before reuse.
