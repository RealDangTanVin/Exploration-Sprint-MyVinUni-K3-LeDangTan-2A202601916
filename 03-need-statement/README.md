# 03 — Need statement và quyết định phạm vi

> Cập nhật 16/10/2026. **Nhu cầu thiết kế tạm thời**, dựa trên tài liệu và mô phỏng; chưa xác nhận với người dùng/cơ sở.

## Nhu cầu được chọn để khám phá

**Người khám ngoại trú có xét nghiệm và có thể quay lại bác sĩ trong ngày cần biết bước tiếp theo, điều đang chờ xác nhận và nơi tìm hỗ trợ, để chuyển bước theo hướng dẫn rõ ràng và tránh tự suy rằng có kết quả hoặc đã đến là đã được tiếp nhận.**

Giảm chờ có thể tránh là mục tiêu dài hạn, chưa phải kết quả của sprint. Nhu cầu này không quy định phải có app; phiếu, nhân viên và thẻ số đều là phương án.

## Căn cứ và giới hạn

| Căn cứ | Hỗ trợ quyết định nào | Chưa xác nhận |
| --- | --- | --- |
| E01–E02: thông tin công bố MyVinmec | Không đề xuất lại QR; khảo sát giả thuyết sau xét nghiệm | Tính năng/luồng ở cơ sở và app thực tế |
| E03–E04: phối hợp/workflow | Phân biệt điều kiện, bên xác nhận và công việc phát sinh | Ai có thẩm quyền, khả thi cập nhật |
| E07: AI-R1/R2/R3 | Thêm câu hỏi và phản ví dụ | Nhu cầu, tần suất hoặc mức ưu tiên người thật |
| E08: chạy model | Kiểm tra trạng thái trong demo | Độ dễ hiểu, an toàn và hiệu quả vận hành |

Xem [ma trận đầy đủ](../01-phong-van/ma-tran-bang-chung.md). Không có INT/OBS/U hoặc dùng app thật trong gói nghiên cứu hiện tại.

## Quyết định ngày 16/10

- **Đoạn chọn:** có kết quả → được hướng dẫn quay lại → được phòng khám nhận; không gắn cơ sở cụ thể.
- **Lý do chọn:** có thể minh họa và kiểm tra logic phân biệt trạng thái trong sprint; chưa biết đây là nút thắt lớn nhất.
- **Phản ví dụ:** hướng dẫn/quầy hiện tại đã tốt; thời gian chờ chủ yếu do năng lực; tính năng tương tự đã có.
- **Giải pháp giữ lại:** phiếu bước sau, danh sách có điều phối viên, thẻ trạng thái số.
- **Hướng demo:** thẻ số để thể hiện điều kiện và trách nhiệm; chưa phải quyết định triển khai.

## Đánh giá trong sprint và giai đoạn sau

**Hiện tại:** rà trạng thái, nội dung và rủi ro dự đoán bằng AI/chạy mã. Không chấm điểm người dùng hoặc tuyên bố đã hiểu đúng.

**Khi có tiếp cận:** hỏi người bệnh/nhân viên, xác minh tính năng, thử cách hiểu và đối chiếu phương án giấy. Chỉ đặt KPI vận hành sau baseline và cơ sở đồng ý pilot. Nếu nguyên nhân chính là năng lực xét nghiệm/phòng khám, đổi trọng tâm hoặc giới hạn lời hứa vào thông tin khi chờ.
