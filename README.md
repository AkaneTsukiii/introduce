# Personal Links Website - akane.tsukiii

A clean, modern personal link-in-bio page with dark theme and avatar rotation system.

## Features

- **Dark Theme**: Pure black background with purple accent colors
- **Avatar Rotation**: Automatic avatar switching system for visual variety
- **Social Media Integration**: Links to GitHub, Discord, Facebook, and TikTok
- **Spotify Integration**: Embedded playlist for Vocaloid music collection
- **Responsive Design**: Mobile-first layout optimized for all devices
- **GitHub Pages Ready**: Static HTML file in root directory for easy deployment

## Avatar System

The website uses a file-based avatar system with multiple images for each platform:

### Avatar Files Structure
```
assets/
├── avt-main.jpg           # Main profile avatar
├── avt-main-alt1.jpg      # Alternative main avatar 1
├── avt-main-alt2.jpg      # Alternative main avatar 2
├── avt-github.jpg         # GitHub avatar
├── avt-github-alt.jpg     # Alternative GitHub avatar
├── avt-discord.jpg        # Discord avatar
├── avt-discord-alt.jpg    # Alternative Discord avatar
├── avt-facebook.jpg       # Facebook avatar
├── avt-facebook-alt.jpg   # Alternative Facebook avatar
├── avt-tiktok.jpg         # TikTok avatar
└── avt-tiktok-alt.jpg     # Alternative TikTok avatar
```

### Avatar Rotation
- Main avatar rotates every 30 seconds
- Social media avatars rotate with staggered timing (5-second intervals)
- Smooth fade transitions between avatar changes
- Fallback to default images if custom avatars aren't available

## Setup Instructions

1. **Upload Avatar Images**: Place your avatar images in the `assets/` folder following the naming convention above
2. **Deploy to GitHub Pages**: 
   - Push to your GitHub repository
   - Enable GitHub Pages in repository settings
   - Set source to root directory
3. **Customize Content**: Edit `index.html` to update:
   - Profile name and description
   - Social media links and usernames
   - Spotify playlist embed URL

## Social Media Links

Current configured platforms:
- **GitHub**: Personal projects and repositories
- **Discord**: Direct message link
- **Facebook**: Personal profile
- **TikTok**: Content creation profile

## Spotify Integration

Features an embedded Spotify playlist for Vocaloid music collection. The playlist automatically updates when changes are made on Spotify.

## Technical Stack

- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Styling**: Tailwind CSS via CDN
- **Icons**: Font Awesome
- **Fonts**: Inter from Google Fonts
- **Deployment**: GitHub Pages compatible

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Touch-friendly interactions
- Progressive enhancement for older browsers

## File Structure

```
/
├── index.html              # Main page (GitHub Pages entry point)
├── assets/
│   ├── avatar-rotation.js  # Avatar switching logic
│   └── [avatar images]     # User avatar files
├── client/                 # React development version
├── server/                 # Express server for development
└── README.md              # This file
```

The root `index.html` is the production version optimized for GitHub Pages deployment.