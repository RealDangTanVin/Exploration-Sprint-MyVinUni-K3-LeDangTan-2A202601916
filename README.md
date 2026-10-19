# Exploration Sprint — Lê Đăng Tấn — K3

## Giới thiệu ngắn

Bài tập khám phá một khoảnh khắc trong hành trình đi khám: tìm hiểu trải nghiệm, xác định điểm đau, viết need statement, làm prototype có AI và thử với người thật.

- **Người thực hiện:** Lê Đăng Tấn — MSSV: 2A202601916 — Khóa K3.
- **Tên đề tài:** Onboarding người đi khám: từ nhu cầu khám đến khi vào phòng khám lâm sàng.
- **Tóm tắt bài làm:** Bài làm tìm hiểu trải nghiệm của người đi khám trong giai đoạn tìm thông tin, đặt lịch, chuẩn bị, đến cơ sở y tế và hoàn tất thủ tục trước khi gặp bác sĩ. Mục tiêu là xác định những lúc người dùng chưa biết cần làm gì tiếp theo, từ đó xây dựng và thử nghiệm prototype hỗ trợ hướng dẫn.

## Khoảnh khắc đã chọn

- **Khoảnh khắc:** Giai đoạn onboarding, từ lúc phát sinh nhu cầu đi khám đến khi được gọi vào phòng khám lâm sàng.
- **Nhóm người dùng:** Một người trẻ mới tốt nghiệp và bắt đầu đi làm (18–21 tuổi); một người trung niên đã có gia đình, đưa con đi khám (37–45 tuổi); một người cao tuổi đi khám không có con cái đi cùng (từ 65 tuổi trở lên).
- **Phạm vi:** Có nhu cầu khám → tìm thông tin → đặt lịch → chuẩn bị trước khám → đến bệnh viện → đăng ký/check-in → tìm phòng và chờ → vào phòng khám lâm sàng.
- **Lý do chọn:** Tại các bệnh viện lớn, người bệnh ở nhiều độ tuổi gặp khó khăn trong quá trình tiếp nhận ban đầu, di chuyển giữa các phòng khám và chờ đến lượt khám. Những bất cập này kéo dài thời gian khám bệnh, khiến người bệnh phải dành ít nhất một buổi để hoàn tất quy trình. Bên cạnh đó, việc thiếu thông tin chính xác và đầy đủ có thể khiến quá trình khám bị gián đoạn, kéo dài từ buổi sáng sang buổi chiều, ảnh hưởng đến công việc và sinh hoạt của người bệnh.

## Ba persona và user journey

**Các file Markdown là bản trình bày chính.** Chọn persona hoặc user journey trong bảng bên dưới. Mỗi file có liên kết chuyển nhanh giữa ba người và giữa persona với hành trình tương ứng.

Bộ tài liệu ngày **19/10/2026** theo ba nhóm ở trên, dùng bản HTML final tác giả đã chỉnh sửa cho cả ba persona và journey và đối chiếu phương pháp Qualtrics cùng nguồn bối cảnh Vinmec/WHO.

| Persona (tên hư cấu) | Nhóm trong đề bài | Trọng tâm nhu cầu giả thuyết | User journey riêng |
| --- | --- | --- | --- |
| [Minh An](01-phong-van/persona/P01-minh-an.md) | 18-21 tuổi, mới tốt nghiệp và bắt đầu đi làm | Tự tổ chức lần khám và điều chỉnh kế hoạch trong lịch làm việc | [Minh An](02-journey-map/J01-minh-an.md) |
| [Thanh Hà](01-phong-van/persona/P02-thanh-ha.md) | 37-45 tuổi, đã có gia đình, đưa con đi khám | Theo dõi đúng hồ sơ và thủ tục trong lúc chăm con | [Thanh Hà](02-journey-map/J02-thanh-ha.md) |
| [Minh Đức](01-phong-van/persona/P03-minh-duc.md) | Từ 65 tuổi, đi khám không có con cái đi cùng | Chủ động chuyển bước với cách hỗ trợ phù hợp | [Minh Đức](02-journey-map/J03-minh-duc.md) |

**Cập nhật final:** đã nhập bản HTML tác giả gửi ngày 19/10/2026 cho cả ba persona và journey, đồng bộ Markdown trong `01-phong-van/persona/`, các journey và HTML trong repo. PDF giữ bản trước, chưa cập nhật nội dung final.

**Trạng thái: proto-persona và journey giả thuyết, chưa xác thực.** Hiện có nhật ký một lần tự dùng app; log phỏng vấn chưa có câu trả lời để làm căn cứ. Cả ba persona giữ nội dung và câu nói theo bản final tác giả cung cấp; việc đồng bộ chưa xác nhận nguồn câu nói. Không tạo tỷ trọng thị trường, điểm cảm xúc hoặc phút chờ. Không suy kỹ năng số từ tuổi.

- [PDF bản trước, chưa cập nhật final](output/pdf/persona-user-journey-onboarding.pdf).
- [HTML chỉnh sửa trực tiếp](output/html/persona-user-journey-editor.html): mở bằng trình duyệt, bấm nội dung để sửa, dùng **Lưu bản HTML** để giữ file; hỗ trợ nhập/xuất JSON và in/PDF. Bản nháp trình duyệt không thay thế file đã lưu; sửa HTML chưa tự cập nhật Markdown/PDF cũ.
- [Ba persona](01-phong-van/persona/).
- [Best practice và ghi chú phương pháp Qualtrics](04-best-practice/README.md#phuong-phap-persona-journey).

Journey dùng 5 giai đoạn: **nhu cầu/tìm thông tin → đặt lịch → chuẩn bị → đến/check-in → tìm phòng/chờ/vào khám**. Phạm vi dừng ở lúc vào phòng khám; workflow sau xét nghiệm của vòng cũ được giữ riêng để truy vết. Áp dụng phương pháp Qualtrics không đồng nghĩa đã hoàn thành xác thực nghiên cứu; giới hạn được ghi trong phần best practice.

## Mục lục

| Thư mục / file | Nội dung |
| --- | --- |
| [01-phong-van/persona/](01-phong-van/persona/) | Ba proto-persona và nguồn nội dung theo từng nhóm. |
| [01-phong-van/](01-phong-van/) | Nhật ký tự dùng app, bộ câu hỏi, log phỏng vấn và phân tích. Log hiện chưa có câu trả lời đủ để dùng cho persona. |
| [02-journey-map/](02-journey-map/) | Ba journey onboarding riêng, cảm xúc/điểm đau giả thuyết, cơ hội và đo lường; lưu riêng workflow cũ. |
| [03-need-statement/](03-need-statement/README.md) | Card nhu cầu chung và nhu cầu riêng của ba persona, tổng hợp từ phần 01–02: người dùng – vấn đề – kết quả mong muốn. |
| [04-best-practice/](04-best-practice/README.md) | 3 best practice quốc tế có nguồn và bài học cho Việt Nam/Vinmec. |
| [05-prototype/](05-prototype/) | Prototype có AI, click được; mã nguồn hoặc file thiết kế; prompt; log thử với 2–3 người và ghi chú chỉnh sửa. |
| [06-rui-ro-dao-duc/](06-rui-ro-dao-duc/) | Rủi ro an toàn, đạo đức, cách giảm thiểu và đường chuyển tuyến khẩn cấp. |
| [07-coach-plan/](07-coach-plan/) | Một trang kế hoạch coach nhóm K4: lịch làm, cách gỡ khi nhóm kẹt và kiểm tra chất lượng. |
| [slides/](slides/README.md) | [PDF 10 slide](slides/slides.pdf), [trình chiếu offline](slides/pitch-10-phut.html) và [lời thuyết trình 10 phút](slides/pitch-10-phut.md). |

## Nội dung do AI tạo hoặc hỗ trợ

| Phần nội dung | Vai trò của AI | Phần tôi tự làm / kiểm tra |
| --- | --- | --- |
| [Persona và journey](01-phong-van/persona/) | AI đồng bộ nội dung final tác giả sửa cho ba persona và journey vào Markdown, JSON và HTML; chưa tạo lại PDF. | Chưa xác thực với ba nhóm/cơ sở. Các câu nói từ bản final chưa xác nhận nguồn; không dùng làm dữ liệu nghiên cứu. |
| [Prototype](05-prototype/) | AI hỗ trợ viết mã, soạn tài liệu và rà soát tình huống mô phỏng. | [Điền phần bạn tự thiết kế, chạy thử hoặc chỉnh sửa]. |
