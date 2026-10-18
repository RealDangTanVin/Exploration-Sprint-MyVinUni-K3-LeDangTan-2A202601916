# Phân tích insight về trải nghiệm trước khi gặp bác sĩ

Phần phân tích này tập trung vào hành trình từ lúc có nhu cầu đi khám đến khi vào phòng khám lâm sàng. Căn cứ hiện có gồm nhật ký tự dùng MyVinmec ngày 17/10/2026 và tài liệu về cách các bệnh viện hướng dẫn người khám. Chưa có phỏng vấn hoặc quan sát tại bệnh viện, nên các nhận định dưới đây là hướng tìm hiểu ban đầu, cần được kiểm chứng thêm.

## 1. Đặt được lịch mới giải quyết một phần nhu cầu; người khám còn cần chủ động khi kế hoạch thay đổi

Nhật ký dùng MyVinmec ghi nhận đã đặt lịch thành công, nhưng quá trình điền thông tin còn rườm rà, có nhiều nội dung gây nhiễu và chưa thấy tự động điền các thông tin cơ bản. Người dùng cũng ghi nhận chưa hủy được lịch hẹn.

Điểm đáng chú ý là trải nghiệm đặt lịch còn bao gồm việc sửa lại quyết định khi có thay đổi. Nếu đã gửi lịch nhưng chưa biết cách điều chỉnh hoặc hủy, người dùng có thể phải tìm thêm một kênh hỗ trợ để xử lý việc mình vừa làm trên app.

**Insight đề xuất:** Người đặt lịch cần biết mình có thể làm gì với lịch hẹn sau khi gửi, để chủ động sắp xếp việc đi khám khi kế hoạch thay đổi.

Hướng thiết kế là làm rõ trạng thái lịch hẹn, cách điều chỉnh và nơi liên hệ hỗ trợ. Ghi nhận “chưa hủy được” chỉ phản ánh lần dùng thử này; chưa đủ để kết luận ứng dụng không có chức năng hủy.

## 2. Người lần đầu đến viện có thể cần một bước tiếp theo rõ ràng hơn là nhiều thông tin cùng lúc

Trong hành trình đã chọn, người khám phải lần lượt tìm thông tin, đặt lịch, chuẩn bị giấy tờ, đến đúng nơi và hoàn tất thủ tục. Cách Cleveland Clinic hướng dẫn chuẩn bị trước khi đến và báo có mặt riêng gợi ý rằng mỗi thời điểm có một việc cụ thể cần làm.

Từ đó, câu hỏi cần tìm hiểu là: sau mỗi bước, người mới có biết việc tiếp theo của mình không? Một thông báo đặt lịch thành công vẫn có thể để lại những câu hỏi như cần đến quầy nào, mang theo gì hoặc có phải đăng ký thêm khi tới nơi.

**Insight đề xuất:** Người lần đầu đến một cơ sở y tế cần biết việc phải làm ngay tiếp theo, để tự đi qua các bước mà không phải liên tục đoán hoặc hỏi lại.

Hướng thiết kế là chia hướng dẫn theo từng thời điểm. Mỗi bước cần nói rõ việc cần làm, địa điểm và nơi hỏi khi gặp vướng mắc. Hiện chưa có dữ liệu xác nhận người khám tại Vinmec đang gặp khó khăn này.

## 3. Thông tin khi chờ có giá trị khi giúp người khám quyết định được việc gì

Các tài liệu đã đọc cho thấy báo thời gian chờ chưa chắc cải thiện sự hài lòng trong mọi bối cảnh. Vì vậy, chỉ thêm số phút dự kiến vào màn hình chưa đủ để kết luận trải nghiệm sẽ tốt hơn.

Điều cần tìm hiểu sâu hơn là người khám muốn dùng thông tin đó để làm gì: sắp xếp công việc, báo cho người đi cùng hay biết lúc nào cần hỏi nhân viên. Đây là những khả năng cần hỏi thêm, chưa phải hành vi đã quan sát được.

**Insight đề xuất:** Người chờ khám có thể cần thông tin giúp sắp xếp việc của mình và biết khi nào cần hành động, thay vì chỉ biết một con số thời gian.

Hướng thiết kế là làm rõ đang chờ bước nào, thông tin được cập nhật lúc nào và ai có thể hỗ trợ nếu lịch bị chậm. Nếu có thời gian dự kiến, cần thể hiện rõ khả năng thay đổi. Chưa có căn cứ để hứa cách làm này sẽ rút ngắn thời gian khám thực tế.

## 4. Hoàn tất thao tác trên app cần đi kèm sự rõ ràng về bước tiếp nhận tại bệnh viện

Tài liệu của Cleveland Clinic phân biệt điền thông tin trước với báo đã đến. Hướng dẫn của SingHealth cũng có yêu cầu đăng ký tại phòng khám đối với người đến lần đầu. Những ví dụ này gợi một điểm cần kiểm tra trong hành trình MyVinmec: người dùng hiểu thế nào về việc đặt lịch, đến viện và được ghi nhận để chờ khám?

**Insight đề xuất:** Sau mỗi thao tác, người khám cần biết việc gì đã hoàn tất và còn việc gì phải làm, để tránh hiểu nhầm rằng đã đặt lịch là đã xong thủ tục tiếp nhận.

Hướng thiết kế là dùng thông báo cụ thể, gắn trạng thái với hành động tiếp theo. Cần xác minh quy trình thực tế tại cơ sở trước khi viết hướng dẫn; chưa thể kết luận MyVinmec hiện thiếu thông tin này.

## Trọng tâm nên thử trước

Từ các nhận định trên, hướng prototype phù hợp là một luồng hướng dẫn ngắn: sau khi đặt lịch biết cần chuẩn bị gì; khi đến viện biết bắt đầu ở đâu; khi chờ biết tình hình và nơi tìm hỗ trợ. Có thể ưu tiên thử xem người dùng có hiểu đúng bước tiếp theo hay không trước khi mở rộng sang dự báo thời gian hoặc gói dịch vụ trả phí.

Nhu cầu thiết kế tạm thời là: **Người lần đầu đến khám tại một cơ sở y tế cần hướng dẫn rõ theo từng bước và thông tin đủ để sắp xếp việc chờ, để chủ động hơn từ lúc đặt lịch đến khi gặp bác sĩ.**

Khi kiểm chứng, cần ghi nhận cả trường hợp người khám đã hiểu hướng dẫn, chờ lâu nhưng vẫn thấy ổn hoặc biết thời gian mà vẫn không hài lòng. Các trường hợp đó sẽ giúp xác định vấn đề nào thực sự đáng ưu tiên.
