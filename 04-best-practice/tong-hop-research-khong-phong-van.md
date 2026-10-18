# Bản tổng hợp research — không phỏng vấn người thật

> **Tổng hợp theo phạm vi cũ.** Phần 4 hiện đọc theo [báo cáo onboarding ngày 18/10/2026](onboarding-va-trai-nghiem-cho.md). Các quyết định về phương pháp, tình trạng app và đoạn sau xét nghiệm dưới đây mô tả vòng 16/10, không tự động phản ánh trạng thái hiện tại.

> Hoàn thành bản phân tích khám phá ngày **16/10/2026**, AI hỗ trợ. Sinh viên cần đọc, chọn luận điểm và tự viết phản tư trước nộp. **Chưa có nghiên cứu thực địa hoặc thử người dùng.**

## Câu hỏi và phương pháp

Nghiên cứu cách mô tả bước tiếp trong đoạn kết quả xét nghiệm → hướng dẫn quay lại → phòng khám tiếp nhận. Vì không thể tuyển người, sprint đối chiếu tài liệu công khai, biên soạn phỏng vấn AI theo ba vai và rà nguyên mẫu bằng đọc mã/chạy model. Số người tham gia thật: **0**.

Repo có 14 nhóm nguồn từ vòng 15/10. Vòng 16/10 mở lại S01, S02, S09, S10 và thêm S15–S16; không gọi 16 mục là 16 nghiên cứu thực nghiệm. S16 mới đọc abstract. Xem [sổ nguồn và mức tiếp cận](nguon-nghien-cuu.md).

## Điều có thể rút ra

**1. Kiểm tra hiện trạng trước khi đề xuất tính năng mới.** QR check-in đã được công bố, nên không phải đóng góp mới. Chưa dùng app hoặc kiểm tra cơ sở; chưa đủ căn cứ khẳng định thiếu điều phối xuyên khâu. [S01–S02](nguon-nghien-cuu.md).

**2. Chọn thử cách làm rõ bàn giao.** Nguyên tắc phối hợp/workflow định hướng việc phân biệt trạng thái và trách nhiệm. Tách có kết quả, được hướng dẫn quay lại, đã báo đến và được phòng khám nhận là quyết định thiết kế của sprint; chưa phải chẩn đoán nút thắt Vinmec. [E02–E04](../01-phong-van/ma-tran-bang-chung.md).

**3. Mô phỏng nêu điều kiện thất bại.** Ba vai gợi câu hỏi về dữ liệu cũ, hỗ trợ ngoài điện thoại, nhập lặp. Chúng phản biện rằng quầy/phiếu có thể đủ hoặc thiếu năng lực phục vụ mới là nguyên nhân chờ. Đây là nội dung AI sinh, không phải insight từ ba người. [Bản mô phỏng](../01-phong-van/log-mo-phong-ai.md).

**4. Prototype xử lý được quy tắc kịch bản đã đặt.** Chạy lại 10 nhóm kiểm tra logic đạt. Vết chạy tách đủ kết quả, cho quay lại, báo đến và tiếp nhận; dữ liệu cũ chặn chuyển. Chưa biết người thật có hiểu đúng không. [Báo cáo rà](../05-prototype/ra-soat-ai.md).

## Quyết định

- Chọn đoạn kết quả → hướng dẫn quay lại → tiếp nhận vì có thể mô hình hóa/kiểm tra trong sprint; chưa biết đây là đoạn chậm nhất.
- Nhu cầu thiết kế tạm thời: biết bước tiếp, điều còn chờ và nơi xác minh. [Need statement](../03-need-statement/README.md).
- Giữ ba hướng: phiếu bước sau, danh sách có điều phối viên, thẻ số. Thẻ số minh họa logic, chưa được chọn để triển khai.
- Chưa đặt KPI giảm phút/phần trăm. Kiểm chứng vận hành chuyển sang giai đoạn có quyền tiếp cận và người tham gia.

## Giới hạn

Không phỏng vấn, không quan sát tại viện, chưa có tự dùng app được ghi nhận và chưa thử người dùng. Cùng một trợ lý biết giải pháp và viết mô phỏng/phân tích nên dễ lặp ý, xác nhận ý tưởng và bỏ sót ngoại lệ. Nguồn ngoài cơ sở không thay dữ liệu địa phương; kiểm tra mã không chứng minh độ dễ dùng, công bằng hoặc an toàn lâm sàng. Phương án thay yêu cầu môn học chưa được xác nhận.

## Kết luận dùng trong bài

> Đề tài xây dựng một giả thuyết thiết kế có nguồn và nguyên mẫu minh họa cách phân biệt trạng thái bàn giao. Mô phỏng AI giúp nêu phản ví dụ; rà mã kiểm tra logic. Bài chưa xác nhận nhu cầu tại Vinmec hoặc hiệu quả giảm thời gian khám. Giai đoạn sau cần kiểm tra hiện trạng, nhu cầu, trách nhiệm cập nhật và nguyên nhân chờ trước pilot.

Câu trình bày phương pháp: “Em chuyển phương pháp vì không tuyển được người; em báo đúng 0 người tham gia và trình bày phần đã làm ở mức nghiên cứu khám phá.” [Nội dung 10 slide](../slides/noi-dung-10-slide.md) đã được điều chỉnh theo mức này.
