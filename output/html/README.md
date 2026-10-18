# Bản HTML có thể chỉnh sửa

Mở [persona-user-journey-editor.html](persona-user-journey-editor.html) bằng Chrome, Edge hoặc trình duyệt tương thích. File chứa sẵn toàn bộ dữ liệu, giao diện và mã; dùng được khi không có mạng.

1. Chọn người và mục **Persona** hoặc **User journey** ở thanh bên. Trên điện thoại dùng danh sách chọn.
2. Bấm vào nội dung để sửa. Có thể thêm/xóa ý, thêm/xóa hàng phân tích journey và đổi màu từng persona. Tên giai đoạn dùng chung cho ba journey.
3. Chọn **Lưu bản HTML** hoặc **Ctrl+S** để tải một file mới chứa tất cả chỉnh sửa. Mở file vừa tải để tiếp tục làm hoặc gửi cho người khác.
4. **Xuất JSON / Nhập JSON** giúp lưu và khôi phục dữ liệu. Có thể nhập JSON gốc của dự án hoặc JSON do editor xuất. Dữ liệu nhập sẽ thay nội dung hiện tại; hãy lưu bản HTML trước nếu muốn giữ bản đang sửa.
5. **In / PDF** in toàn bộ ba persona, ba journey, cơ hội/đo lường và nguồn. Chọn lưu PDF trong hộp thoại in; nội dung dài có thể trải qua nhiều trang.

**Bản nháp tự lưu** thuộc trình duyệt, phụ thuộc quyền lưu trữ và có thể mất khi xóa dữ liệu. Dùng **Lưu bản HTML** để giữ file lâu dài. Khi trình duyệt chặn lưu nháp, thanh công cụ sẽ thông báo.

**Chế độ xem** khóa chỉnh sửa để đọc thuận tiện. **Nguồn & bằng chứng** cho phép sửa trạng thái nghiên cứu, phạm vi, ngày và nguồn; cũng có nút khôi phục về nội dung nhúng trong file đang mở.

Chỉnh sửa trong HTML không ghi đè các file Markdown, JSON hoặc PDF đã có trong repo. JSON xuất từ editor chứa dữ liệu trong thuộc tính `data`. Cách đồng bộ bản HTML đã sửa vào repo: chạy `python scripts/build_persona_journey.py --import-html "đường-dẫn-file.html"`, rồi `python scripts/build_persona_journey_html.py`. PDF là bước riêng, chỉ chạy `node scripts/build_persona_journey_pdf.cjs` khi cần xuất lại. Lệnh nhập thay toàn bộ dữ liệu nguồn, cần dùng đúng bản mới nhất. Không ghi đè nguồn chỉ bằng cách đổi đuôi file.

Nguồn giao diện: `scripts/templates/persona-journey-editor.html`. Chạy `scripts/build_persona_journey_html.py` để tạo lại bản HTML từ JSON gốc; việc này không lấy bản nháp đang lưu trong trình duyệt.

Bản final ngày 19/10/2026 giữ nội dung tác giả sửa cho cả ba persona và journey; đã đồng bộ Markdown, JSON và HTML trong repo. PDF vẫn giữ bản trước, chưa xuất lại. Hàng Cơ hội trong mỗi journey là đề xuất tương lai. Không dùng bản nháp của bản HTML cũ để thay thế bản mới.
