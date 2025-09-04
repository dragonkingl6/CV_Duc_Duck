# CV cá nhân (HTML/CSS/JS thuần)

Website CV đơn giản, gọn nhẹ, triển khai dễ dàng với GitHub Pages.

## Cấu trúc

- `index.html`: nội dung trang
- `styles.css`: giao diện, responsive, dark mode
- `script.js`: chuyển chủ đề, menu mobile, smooth scroll

## Chỉnh sửa nhanh

1. Mở `index.html` và thay thế các nội dung placeholder (Tên, mô tả, dự án...).
2. Cập nhật liên kết liên hệ ở phần Liên hệ.
3. Tuỳ biến màu sắc trong `styles.css` nếu cần.

## Chạy cục bộ

Mở trực tiếp `index.html` bằng trình duyệt hoặc chạy server tĩnh:

```bash
python3 -m http.server 8000
# Mở: http://localhost:8000
```

## Triển khai với GitHub Pages

Có 2 cách phổ biến:

### 1) User/Org Pages (domain: username.github.io)

1. Tạo repository công khai đặt tên: `tennguoidung.github.io`.
2. Đẩy mã nguồn lên nhánh `main` ở thư mục gốc repo.
3. GitHub tự động phục vụ trang tại `https://tennguoidung.github.io`.

### 2) Project Pages (domain: username.github.io/tên-dự-án)

1. Tạo repository công khai, ví dụ `cv`.
2. Vào Settings → Pages → Build and deployment:
   - Source: `Deploy from a branch`
   - Branch: `main` / folder: `/ (root)`
3. Nhấn Save. Sau vài phút, trang sẽ lên tại: `https://tennguoidung.github.io/cv`.

## Lệnh Git tham khảo

```bash
# Khởi tạo repo (nếu chưa)
git init

git add .

git commit -m "Initial CV"

# Kết nối remote (đổi URL theo repo của bạn)
git branch -M main

git remote add origin https://github.com/tennguoidung/cv.git

git push -u origin main
```

## Gợi ý tối ưu

- Điền nội dung định lượng (%, số liệu) cho thành tựu.
- Gắn link demo và mã nguồn cho các dự án tiêu biểu.
- Thêm favicon, ảnh đại diện để tăng nhận diện.
- Bật HTTPS (mặc định GitHub Pages hỗ trợ).

---

Chúc bạn ứng tuyển thuận lợi!
