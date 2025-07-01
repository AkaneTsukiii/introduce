# Trang Web Liên Kết Cá Nhân - akane.tsukiii

Trang web "link in bio" cá nhân hiện đại với giao diện tối và hệ thống xoay avatar tự động.

## Tính Năng

- **Giao Diện Tối**: Nền đen hoàn toàn với điểm nhấn màu tím
- **Xoay Avatar**: Hệ thống tự động thay đổi avatar để tạo sự đa dạng
- **Tích Hợp Mạng Xã Hội**: Liên kết đến GitHub, Discord, Facebook và TikTok
- **Tích Hợp Spotify**: Nhúng playlist nhạc Vocaloid
- **Thiết Kế Responsive**: Bố cục tối ưu cho mọi thiết bị
- **Sẵn Sàng GitHub Pages**: File HTML tĩnh ở thư mục gốc để triển khai dễ dàng

## Hệ Thống Avatar

Website sử dụng hệ thống avatar dựa trên file với nhiều ảnh cho mỗi nền tảng:

### Cấu Trúc File Avatar
```
assets/
├── avt-main.jpg           # Avatar chính
├── avt-main-alt1.jpg      # Avatar chính thay thế 1
├── avt-main-alt2.jpg      # Avatar chính thay thế 2
├── avt-github.jpg         # Avatar GitHub
├── avt-github-alt.jpg     # Avatar GitHub thay thế
├── avt-discord.jpg        # Avatar Discord
├── avt-discord-alt.jpg    # Avatar Discord thay thế
├── avt-facebook.jpg       # Avatar Facebook
├── avt-facebook-alt.jpg   # Avatar Facebook thay thế
├── avt-tiktok.jpg         # Avatar TikTok
└── avt-tiktok-alt.jpg     # Avatar TikTok thay thế
```

### Xoay Avatar
- Avatar chính xoay mỗi 30 giây
- Avatar mạng xã hội xoay với thời gian lệch nhau (khoảng cách 5 giây)
- Hiệu ứng chuyển đổi mượt mà giữa các avatar
- Sử dụng ảnh mặc định nếu không có avatar tùy chỉnh

## Hướng Dẫn Cài Đặt

1. **Tải Avatar**: Đặt ảnh avatar vào thư mục `assets/` theo quy ước đặt tên ở trên
2. **Triển Khai GitHub Pages**: 
   - Push lên GitHub repository
   - Bật GitHub Pages trong cài đặt repository
   - Đặt nguồn là thư mục gốc (root)
3. **Tùy Chỉnh Nội Dung**: Chỉnh sửa `index.html` để cập nhật:
   - Tên và mô tả profile
   - Liên kết và username mạng xã hội
   - URL nhúng playlist Spotify

## Liên Kết Mạng Xã Hội

Các nền tảng hiện tại được cấu hình:
- **GitHub**: Dự án và repository cá nhân
- **Discord**: Liên kết tin nhắn trực tiếp
- **Facebook**: Profile cá nhân
- **TikTok**: Profile tạo nội dung

## Tích Hợp Spotify

Tích hợp playlist Spotify nhúng cho bộ sưu tập nhạc Vocaloid. Playlist tự động cập nhật khi có thay đổi trên Spotify.

## Công Nghệ Sử Dụng

- **Frontend**: HTML/CSS/JavaScript thuần
- **Styling**: Tailwind CSS qua CDN
- **Icons**: Font Awesome
- **Fonts**: Inter từ Google Fonts
- **Deployment**: Tương thích GitHub Pages

## Hỗ Trợ Trình Duyệt

- Trình duyệt hiện đại (Chrome, Firefox, Safari, Edge)
- Thiết kế responsive trên mobile
- Tương tác thân thiện với cảm ứng
- Nâng cao dần cho trình duyệt cũ

## Cấu Trúc File

```
/
├── index.html              # Trang chính (điểm vào GitHub Pages)
├── assets/
│   ├── avatar-rotation.js  # Logic xoay avatar
│   └── [avatar images]     # File ảnh avatar người dùng
├── client/                 # Phiên bản React development
├── server/                 # Express server cho development
├── HUONG_DAN_THAY_DOI.txt  # Hướng dẫn chỉnh sửa
├── CAC_FILE_CAN_THIET.txt  # Danh sách file cần thiết
└── README.md              # File này
```

File `index.html` ở thư mục gốc là phiên bản production được tối ưu cho GitHub Pages.

## Cách Sử Dụng

1. **Thay Đổi Nội Dung**: Đọc file `HUONG_DAN_THAY_DOI.txt` để biết cách chỉnh sửa
2. **File Cần Thiết**: Xem `CAC_FILE_CAN_THIET.txt` để biết file nào cần thiết cho deployment
3. **Upload Avatar**: Thay thế các file ảnh trong thư mục `assets/`
4. **Triển Khai**: Push lên GitHub và bật GitHub Pages

## Liên Hệ

Trang web được tạo cho akane.tsukiii với đầy đủ tích hợp mạng xã hội và nhạc Vocaloid.