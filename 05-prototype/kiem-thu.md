# Kiểm tra kỹ thuật — 18/10/2026

Đây là log kiểm tra mã và trình duyệt, không phải thử với người bệnh hoặc nhân viên bệnh viện.

## Đã kiểm tra

- JavaScript hợp lệ qua `node --check`.
- 9 bài kiểm tra trạng thái bằng `node --test model.test.mjs`: chặn nhu cầu rỗng; nhận diện mục đích hành chính và giữ thông tin đặt khám; nhu cầu chưa rõ; đồng ý Zalo; thông báo chủ động trước khi đổi; gợi ý cũ; đồng ý đổi; từ chối đổi; đặt lại hành trình.
- Trên trình duyệt: nhập nhu cầu khám lái xe → xem lại → đổi sang Smart City, ngày 20/10, 10:30 → nội dung phiếu ghi nhận giữ đúng các lựa chọn.
- Nút liên kết Zalo bị khóa trước khi đồng ý; bật và ngừng nhận đều hoạt động.
- Đổi từ phòng 203 sang 205 → hộp thư có tin cập nhật → OA không lộ khoa/triệu chứng → mở chi tiết qua xác minh mô phỏng.
- Thông báo chủ động: giả lập phòng 205 bớt chờ khi đã bật Zalo → hộp thư có tin → xác minh → mở màn gợi ý trước khi người dùng đồng ý đổi.
- Form thủ công: đặt cho Mẹ, sửa tên, chọn chuyên khoa và nhập nhu cầu; màn xem lại giữ đúng hồ sơ và phương thức.
- Bản `prototype.html` đóng gói chạy trong trình duyệt, có đủ 6 ảnh tham chiếu nhúng và phóng to được; JavaScript hợp lệ, không cần script/CSS ngoài. Console không ghi lỗi trong các thao tác đã thử.
- Màn hỗ trợ y tế có thể mở từ MIA; chỉ hiển thị số, không thực hiện cuộc gọi.
- Báo có mặt vẫn giữ tiến độ 1/3, còn chờ nhân viên tiếp nhận.
- Khi mất dữ liệu mới, gợi ý đổi phòng biến mất. Khi cập nhật lại, có thể xem gợi ý. Từ chối gợi ý giữ phòng 203.
- Đối chiếu bố cục trang chủ và MIA với ảnh gốc; kiểm tra chiều rộng điện thoại, không cuộn ngang toàn trang.

## Giới hạn

Chưa kiểm chứng chuyên môn, tính công bằng của cách đổi lượt, khả năng nhận tin thật, hệ thống bệnh viện, API Zalo hoặc AI thật. Thời gian chờ và các hạng mục chỉ là kịch bản. Chưa có thử khả dụng với người thật; chưa đo tốc độ onboarding hay thời gian chờ thực tế.
