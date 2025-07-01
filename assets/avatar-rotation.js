// Avatar rotation system for akane.tsukiii
// This script handles automatic avatar switching for better visual variety

class AvatarRotation {
  constructor() {
    this.avatars = {
      main: [
        'avt-main.jpg',
        'avt-main-alt1.jpg',
        'avt-main-alt2.jpg'
      ],
      github: [
        'avt-github.jpg',
        'avt-github-alt.jpg'
      ],
      discord: [
        'avt-discord.jpg',
        'avt-discord-alt.jpg'
      ],
      facebook: [
        'avt-facebook.jpg',
        'avt-facebook-alt.jpg'
      ],
      tiktok: [
        'avt-tiktok.jpg',
        'avt-tiktok-alt.jpg'
      ]
    };
    
    this.currentIndex = {};
    this.rotationInterval = 30000; // 30 seconds
    
    this.init();
  }

  init() {
    // Initialize current index for each avatar type
    Object.keys(this.avatars).forEach(type => {
      this.currentIndex[type] = 0;
    });

    // Start rotation
    this.startRotation();
  }

  getNextAvatar(type) {
    if (!this.avatars[type]) return null;
    
    const avatarList = this.avatars[type];
    this.currentIndex[type] = (this.currentIndex[type] + 1) % avatarList.length;
    
    return `./assets/${avatarList[this.currentIndex[type]]}`;
  }

  rotateAvatar(type, selector) {
    const element = document.querySelector(selector);
    if (!element) return;

    const nextAvatar = this.getNextAvatar(type);
    if (nextAvatar) {
      // Smooth fade transition
      element.style.opacity = '0.7';
      element.style.transition = 'opacity 0.5s ease';
      
      setTimeout(() => {
        element.src = nextAvatar;
        element.style.opacity = '1';
      }, 250);
    }
  }

  startRotation() {
    // Rotate main avatar
    setInterval(() => {
      this.rotateAvatar('main', '[alt="akane.tsukiii Profile"]');
    }, this.rotationInterval);

    // Rotate social media avatars with offset timing
    setTimeout(() => {
      setInterval(() => {
        this.rotateAvatar('github', '[alt="GitHub"]');
      }, this.rotationInterval);
    }, 5000);

    setTimeout(() => {
      setInterval(() => {
        this.rotateAvatar('discord', '[alt="Discord"]');
      }, this.rotationInterval);
    }, 10000);

    setTimeout(() => {
      setInterval(() => {
        this.rotateAvatar('facebook', '[alt="Facebook"]');
      }, this.rotationInterval);
    }, 15000);

    setTimeout(() => {
      setInterval(() => {
        this.rotateAvatar('tiktok', '[alt="TikTok"]');
      }, this.rotationInterval);
    }, 20000);
  }
}

// Initialize avatar rotation when DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    new AvatarRotation();
  });
}

export default AvatarRotation;