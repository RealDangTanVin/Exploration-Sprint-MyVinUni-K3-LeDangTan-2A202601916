# MyVinmec — đặt khám dễ hơn, chủ động khi chờ

Prototype tương tác ngày 18/10/2026, phát triển từ 6 ảnh MyVinmec và Zalo do người thực hiện cung cấp. Giữ màu xanh ngọc, cấu trúc trang chủ, form đặt hẹn, các thẻ MIA và bố cục Zalo; thêm hai cải tiến nhỏ vào những điểm chạm này.

## Mở bản thử

**Mở `prototype.html` bằng Chrome hoặc Edge.** Đây là bản đóng gói đầy đủ, có ảnh nhúng, hoạt động offline và không cần cài thư viện. Có thể gửi riêng file này để dùng thử. Ảnh tham chiếu gốc có thông tin từ ảnh chụp của người cung cấp, nên cân nhắc trước khi chia sẻ ra ngoài.

Thanh bên cho chuyển giữa các luồng. Bấm **Xem màn tham chiếu** để đối chiếu ảnh gốc; bấm vào ảnh để mở rộng. Các màn dựng lại dùng hồ sơ và nội dung trò chuyện hư cấu.

Nếu muốn chỉnh mã và xem qua máy chủ cục bộ, chạy tại thư mục dự án:

```powershell
node .\05-prototype\preview.mjs
```

Mở `http://127.0.0.1:4173`. Dừng bằng `Ctrl+C`. Máy chủ chỉ nghe trên máy của bạn.

## Hai cải tiến

### 1. Đặt khám có MIA hỗ trợ

Trang chủ → Đặt lịch nhanh cùng MIA → Chọn Tôi hoặc Mẹ → Kể nhu cầu → Xem lại thông tin → Chọn cơ sở, ngày, giờ → Gửi yêu cầu.

- Thay bước đầu phải chọn bác sĩ/chuyên khoa/phương thức bằng một lời kể dễ hiểu.
- Dùng lại hồ sơ đã có và cho đổi người khám; không bắt nhập lại toàn bộ ngay từ đầu.
- MIA mô phỏng nhận diện **mục đích hành chính** như khám sức khỏe lái xe hoặc khám định kỳ, chuẩn bị nội dung để người dùng xem lại. Nhu cầu khác chuyển tư vấn tiếp nhận. Không dùng từ khóa để chẩn đoán hay tự phân khoa theo triệu chứng.
- Giữ lựa chọn **Tự điền như hiện tại** để đối chiếu form cũ.
- Thông tin đã gửi là **yêu cầu chờ cơ sở xác nhận**, chưa phải lịch hẹn được bệnh viện chấp nhận.

### 2. Linh hoạt thứ tự khám và cập nhật Zalo

Hành trình khám → Đang chờ phòng 203 (25–35 phút) → Xem gợi ý → Phòng 205 ít chờ (5–10 phút) → Đồng ý đổi → Mở Zalo → Tin từ OA minh họa → Xác minh → Xem hướng dẫn mới nhất.

- Kịch bản: sau khám lâm sàng, còn Tai Mũi Họng và Khám mắt trong buổi khám sức khỏe lái xe. Trong **tình huống hư cấu này**, cơ sở cho phép đổi thứ tự hai mục.
- Người dùng biết vì sao có gợi ý, nơi cần đến và mục còn phải hoàn tất. Có thể từ chối, tiếp tục chờ phòng cũ.
- Sau đồng ý, bản thử giả lập điều phối chấp nhận đổi và sắp lượt lại. Không duy trì đồng thời hai lượt ưu tiên; không bỏ hạng mục đã chỉ định.
- Có thể thử **thông báo chủ động trước khi mở app**: bật nhận Zalo, rồi bấm **Mô phỏng phòng 205 bớt chờ → Zalo** ở bảng tình huống bên phải (desktop). Bản thử chuyển tới hộp thư; mở tin và xác minh để xem gợi ý rồi mới quyết định đổi. Không tự chuyển lượt chỉ vì đã gửi thông báo.
- Nhận Zalo là lựa chọn riêng, có bước đồng ý và nút ngừng nhận. Thông báo không chứa triệu chứng hoặc chuyên khoa. Chi tiết trở lại MyVinmec qua bước xác minh mô phỏng.
- **Đã báo có mặt** chưa phải **đã được tiếp nhận** hoặc **đã khám xong**.
- Khi mất cập nhật, bỏ gợi ý đổi phòng, không dùng thời gian cũ làm hướng dẫn; chỉ đầu mối điều phối. Không đọc tin không đồng nghĩa bỏ lượt.

## Vì sao chọn cách này

Chỉ hiện thời gian chờ giúp hiểu tình hình nhưng chưa giúp hành động. Một danh sách phòng “vắng nhất” lại có thể dẫn sai thứ tự chuyên môn. Vì vậy bản thử chỉ đưa **một bước tiếp theo** trong tập hạng mục đã được phép đổi; người bệnh tự chọn, điều phối là nguồn quyết định.

AI phù hợp với việc diễn đạt và soạn yêu cầu, trong khi sắp thứ tự cần dữ liệu chỉ định, điều kiện chuẩn bị, hàng đợi và quy tắc của cơ sở. Không cần thêm một chatbot dài hoặc tự xây hệ thống tối ưu phức tạp trong sprint.

## Phạm vi và điều cần xác minh

Đây là bản thử local: không dùng API AI, không đăng nhập Zalo, không gửi tin, không đặt lịch thật, không lưu biểu mẫu sau tải lại. Thời gian chờ và việc điều phối chấp nhận hoàn toàn là minh họa, chưa chứng minh giảm thời gian khám.

Trước khi thử vận hành thật cần xác minh: hạng mục nào độc lập hoặc có điều kiện trước khám; cách sắp lại lượt công bằng; dữ liệu hàng đợi lấy từ đâu và cập nhật thế nào; nhân viên nào chấp nhận đổi; người không dùng Zalo được hỗ trợ ra sao. Kênh Zalo, định danh, đồng ý và bảo vệ dữ liệu cần được kiểm tra riêng với cơ sở. Bản thử không chứng minh API hay chính sách Zalo hiện cho phép triển khai luồng này.

## Thử với người dùng trong 5 phút

1. “Bạn cần khám sức khỏe lái xe, nhưng không biết chọn bác sĩ hay khoa. Hãy gửi yêu cầu.” Quan sát điểm cần giải thích và số lần điền/chọn.
2. “Bạn đang chờ phòng đông và thấy gợi ý đi phòng khác. Hãy chọn cách bạn muốn.” Hỏi vì sao họ đồng ý hoặc từ chối, có biết mục nào còn lại không.
3. “Bạn nhận một tin Zalo. Hãy tìm phòng tiếp theo.” Kiểm tra họ có phân biệt tin cập nhật, đã báo có mặt và được tiếp nhận không.
4. Thử mất cập nhật, không bật Zalo và đặt cho Mẹ. Kiểm tra người dùng có tìm được cách hỗ trợ thay thế không.

Chưa có kết quả thử người thật. Không ghi nhận test tự động hoặc nhận xét AI thành bằng chứng người dùng.

## Mã nguồn và kiểm tra

- `index.html`, `styles.css`, `app.js`: giao diện và thao tác.
- `model.mjs`: trạng thái đặt khám, đồng ý Zalo, đổi phòng.
- `assets/`: 6 ảnh gốc dùng đối chiếu và lấy hình minh họa có sẵn.
- `build.mjs`: tạo lại `prototype.html` sau khi sửa mã; chạy `node .\05-prototype\build.mjs` từ thư mục dự án.
- `model.test.mjs`: kiểm tra các chuyển trạng thái quan trọng; chạy `node --test .\05-prototype\model.test.mjs`.
- `kiem-thu.md`: ghi nhận kiểm tra kỹ thuật và giới hạn.

AI hỗ trợ thiết kế và viết mã. Người thực hiện cần tự đánh giá mức phù hợp với trải nghiệm khám thực tế và các ảnh tham chiếu.
