# Bộ slide ảnh: MyVinmec

10 slide ảnh theo mạch pitch 10 phút, ngày 19/10/2026. Tất cả slide được tạo bằng công cụ tạo ảnh tích hợp `image_gen`; không có file PPTX.

## Mở để trình bày

- `slides.pdf`: PDF 10 trang, mỗi trang là một slide ảnh 16:9. Có thể trình chiếu hoặc nộp bài.
- `pitch-10-phut.html`: bộ trình chiếu offline, đã nhúng đủ 10 ảnh. Mở bằng Edge/Chrome, dùng phím trái/phải chuyển slide, F toàn màn hình, N mở lời nói, T chạy/tạm dừng đồng hồ 10 phút.
- `images/`: đủ 10 ảnh PNG riêng, đánh số theo thứ tự trình bày.
- `pitch-10-phut.md`: lời thuyết trình, thời gian từng slide, nguồn, giới hạn và câu trả lời khi được hỏi thêm.
- `imagegen-prompts.json`: toàn bộ câu lệnh tạo ảnh và nội dung đã dùng.

Phong cách: nền sáng, chữ lớn xanh đậm, điểm nhấn xanh ngọc, minh họa nét đơn giản. Bố cục và chữ nằm trong ảnh, không chỉnh sửa như hộp chữ PowerPoint.

## Nội dung và căn cứ

Bám bản đang có trong toàn bộ bảy phần của repo. Ưu tiên Markdown persona/journey final ngày 19/10/2026. PDF persona cũ chưa cập nhật nên không dùng làm nguồn chính. Ghi nhận tự dùng app được tách với persona giả thuyết, nguồn công khai và demo. Không đưa câu nói persona thành trích dẫn phỏng vấn đã xác thực.

Luồng đặt khám cùng MIA thuộc phạm vi onboarding. Luồng đổi thứ tự phòng được ghi rõ là nhánh mở rộng sau khám lâm sàng. Số phút chờ chỉ minh họa. Các màn điện thoại trên slide là hình AI minh họa luồng, không phải ảnh chụp sản phẩm đang vận hành. Không sử dụng ảnh chụp gốc chứa thông tin của người cung cấp trong bộ giao.

Ba người thử và một nhân viên tiếp nhận ở slide cuối là đề xuất tiếp theo. Repo chưa có kết quả thử người thật. Chín bài kiểm tra trạng thái đã chạy lại ngày 19/10/2026 và đều đạt, không chứng minh hiệu quả UX hoặc giảm thời gian chờ.

Chi tiết nguồn và các điểm prototype chưa bao phủ đủ nằm trong lời thuyết trình. Đồng hồ 10 phút là nhịp tập nói, có tính khoảng dừng và thao tác minh họa, không tự động chuyển slide.
