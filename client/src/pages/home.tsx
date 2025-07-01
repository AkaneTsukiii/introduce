import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, MessageCircle, Facebook, Music } from "lucide-react";

export default function Home() {

  const socialLinks = [
    {
      name: "Github",
      subtitle: "AkaneTsukiii",
      url: "https://akanetsukiii.github.io/my-ws",
      avatar: "/assets/avt-github.jpg",
      icon: Github
    },
    {
      name: "Akane Tsuki (Discord)",
      subtitle: "akane.tsukiii",
      url: "https://discordapp.com/users/1303349353192230942",
      avatar: "/assets/avt-discord.jpg",
      icon: MessageCircle
    },
    {
      name: "Nguyễn Khánh (Facebook)",
      subtitle: "Connect on Facebook",
      url: "https://facebook.com/akane.tsukiii",
      avatar: "/assets/avt-facebook.jpg",
      icon: Facebook
    },
    {
      name: "Nguyễn Khánh (TikTok)",
      subtitle: "@khahnguyn01",
      url: "https://tiktok.com/@khahnguyn01",
      avatar: "/assets/avt-tiktok.jpg",
      icon: Music
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8 max-w-md">
        {/* Profile Header */}
        <div className="text-center mb-8">
          <div className="w-28 h-28 mx-auto mb-4 p-1 bg-gradient-to-br from-primary to-secondary rounded-full">
            <img 
              src="/assets/avt-main.jpg" 
              alt="akane.tsukiii Profile" 
              className="w-full h-full rounded-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300";
              }}
            />
          </div>
          
          <h1 className="text-2xl font-bold mb-4">akane.tsukiii</h1>
        </div>

        {/* Social Media Links */}
        <div className="space-y-4 mb-8">
          {socialLinks.map((link, index) => (
            <Card key={index} className="bg-dark-card border-gray-800 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              <CardContent className="p-4">
                <a 
                  href={link.url} 
                  className="flex items-center group"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img 
                    src={link.avatar} 
                    alt={link.name} 
                    className="w-12 h-12 rounded-lg mr-4 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64`;
                    }}
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-white group-hover:text-primary transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{link.subtitle}</p>
                  </div>
                  <ExternalLink className="text-gray-400 group-hover:text-primary transition-colors w-5 h-5" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Spotify Playlist Section */}
        <Card className="bg-dark-card border-gray-800 mb-8">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Music className="text-green-500 text-2xl mr-3" />
              <div>
                <h3 className="font-medium text-white">Vocaloid - Akane Tsukiii</h3>
                <p className="text-gray-400 text-sm">Spotify Playlist</p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden">
              <iframe 
                src="https://open.spotify.com/embed/playlist/7nWzjWHPVYniUzkCabEvPS?utm_source=generator&theme=0" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              />
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p>© 2024 akane.tsukiii</p>
        </div>
      </div>
    </div>
  );
}
