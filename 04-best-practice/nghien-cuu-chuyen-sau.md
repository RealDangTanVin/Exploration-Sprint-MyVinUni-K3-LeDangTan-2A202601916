# Nghiên cứu chuyên sâu — Giảm khoảng chờ giữa các khâu khám ngoại trú

> **Tài liệu phạm vi cũ.** Từ 18/10/2026, phần 4 chuyển sang onboarding trước khi vào phòng khám. Đọc [báo cáo mới](onboarding-va-trai-nghiem-cho.md) và [sổ nguồn mới](nguon-onboarding.md) để lấy kết luận hiện tại. Nội dung bên dưới giữ nguyên để tra cứu lịch sử.

> Nghiên cứu bàn giấy do AI thực hiện ngày 15/10/2026. [Sổ nguồn S01–S14](nguon-nghien-cuu.md) ghi link, mức đã đọc và giới hạn. Chưa có dữ liệu thực địa; chẩn đoán hiện trạng Vinmec chỉ là giả thuyết.

**Cập nhật 16/10:** đọc [tổng hợp theo phương pháp không phỏng vấn](tong-hop-research-khong-phong-van.md) để lấy kết luận hiện tại. Các kế hoạch đo/phỏng vấn dưới đây là thiết kế cho giai đoạn có tiếp cận; sprint hiện có 0 người tham gia và chỉ rà giả thuyết/logic prototype.

## 1. Kết luận định hướng

Thu hẹp từ “khám nhanh hơn” thành **giảm khoảng thời gian người bệnh đã xong hoặc đủ điều kiện ở một khâu nhưng chưa được khâu sau tiếp nhận**. Phạm vi này đủ cụ thể để quan sát và thử cả giải pháp giấy, con người, công nghệ.

Kiểm chứng hai đoạn: **khám → tiếp nhận lấy mẫu** và **đủ kết quả → bác sĩ tiếp nhận lại**. Đoạn thứ hai là trọng tâm prototype ban đầu vì tách được “có dữ liệu” với “có người tiếp tục xử lý”. Đây là lựa chọn tạm thời, chưa có bằng chứng nó chậm nhất tại Vinmec.

Tách ba kết quả: giảm phút thật; giảm đi lại/hỏi lại/làm lại; giảm bất định. Thông báo có thể cải thiện cảm nhận mà chưa giảm thời gian. Không gộp chúng thành một lời hứa.

## 2. Phạm vi khả thi

- **Nhóm chính:** người trưởng thành có hẹn ngoại trú, được chỉ định xét nghiệm máu, có thể nhận tư vấn tiếp trong ngày.
- **Liên quan:** người đi cùng, tiếp đón, điều phối, lấy mẫu/xét nghiệm.
- **Đơn vị đo:** một lượt chuyển khâu trong một lần khám. Nhiều lượt của cùng người không phải nhiều người độc lập.
- **Bối cảnh:** một cơ sở, một chuyên khoa/luồng, một hoặc hai khung giờ được cho phép.
- **Chưa mở rộng:** nội trú, cấp cứu, khám nhiều ngày, thủ thuật xâm lấn, thay đổi chỉ định y khoa.

Không gộp có hẹn/không hẹn, chỉ khám/nhiều cận lâm sàng thành một số chung. Ghi điều kiện cơ sở trước khi so nghiên cứu khác.

## 3. Bằng chứng nói gì?

### Việt Nam

**Thống Nhất [S04]:** cắt ngang 7.931 người, dữ liệu 05–09/09/2016, công bố 2018. Tổng chờ theo định nghĩa bài trung bình 104,1 phút; chờ nhận kết quả ở nhóm xét nghiệm máu trung bình 124,3 phút. Hai mẫu số khác nhau nên không mâu thuẫn. Bài không đo đầy đủ chờ nhà thuốc; mốc hệ thống không thể hiện mọi vi thao tác. Số xét nghiệm, khoa và giờ đăng ký có liên quan đến chờ, không chứng minh một nguyên nhân duy nhất. **Hàm ý:** phân nhóm, ghi mốc xuyên khâu; dữ liệu cũ tại bệnh viện công không làm baseline cho Vinmec.

**Quân y 103 [S05, abstract]:** 303 người, dữ liệu 04–09/2024, công bố 02/03/2026. Abstract báo chờ khám 19,0 ± 14,7 phút; lấy máu 16,5 ± 13,0; kết quả huyết học 55,3 ± 25,4; hóa sinh 98,0 ± 24,6; toàn lượt 234,9 ± 113,8 phút. Không cộng các trung bình thành tổng vì hoạt động có thể chồng lấp; chưa đọc được định nghĩa chi tiết trong PDF. **Hàm ý:** tách chờ kết quả và toàn lượt, kiểm tra xét nghiệm nào nằm trên đường quyết định bước kế.

**QĐ 1313/2013 [S11]:** chỉ tiêu phấn đấu trung bình dưới 2 giờ khi chỉ khám, dưới 3 giờ với một kỹ thuật, dưới 3,5 giờ với hai kỹ thuật phối hợp, dưới 4 giờ với ba kỹ thuật phối hợp như văn bản mô tả. Đây là toàn quy trình theo nhóm dịch vụ, không phải thời lượng bác sĩ khám hay cam kết cá nhân. Repo chỉ tham chiếu lịch sử vì chưa kiểm tra đầy đủ văn bản thay thế/sửa đổi đến 2026. Không dùng để kết luận Vinmec vi phạm hoặc hứa SLA.

### Cải tiến và khả năng chuyển giao

**Lean lấy máu [S06]:** tại Hàng Châu năm 2020, công bố 2021; hai nhóm sáng ngày thường trước–sau gồm 38.275 và 39.473 lượt. Trung vị chờ 22 → 13 phút sau gói cải tiến. Không phải RCT, còn yếu tố thời gian và không tách riêng hiệu quả màn hình thông báo. Không lấy 9 phút hoặc phần trăm tương ứng dự báo cho Vinmec.

**IHI [S08, S14]:** nhìn toàn hệ thống, thử thay đổi nhỏ có đo. Tăng tốc lấy mẫu mà xét nghiệm/phòng khám thiếu năng lực có thể chuyển hàng đợi xuống sau. **Suy luận áp dụng:** đo cả đoạn can thiệp, tổng hành trình, tải nhân viên, công bằng và an toàn.

**AHRQ [S09–S10]:** phối hợp cần thông tin đúng người/đúng lúc và trách nhiệm rõ. Đây là nền tảng chọn bàn giao có bên nhận, không phải bằng chứng trực tiếp thẻ trạng thái giảm thời gian nội viện.

## 4. MyVinmec hiện công bố gì?

Đặt lịch gia đình, hồ sơ sức khỏe và QR check-in đã được công bố [S01]. Có hướng dẫn nối hồ sơ khi thông tin khớp và xem hồ sơ khám sức khỏe tổng quát sau hoàn thiện [S02]. Form đăng ký website cần tổng đài xác nhận [S03]. **Gửi yêu cầu, lịch xác nhận, đến viện và từng bộ phận tiếp nhận là các trạng thái khác nhau.**

Chưa có dữ liệu sprint về tiến độ cận lâm sàng, lượt quay lại bác sĩ hoặc hàng đợi ở cơ sở mục tiêu. Không thấy mô tả công khai không chứng minh tính năng chưa tồn tại.

Dùng thử để trả lời: sau check-in được hướng dẫn gì; sau chỉ định có điểm đến/điều kiện không; ai hỗ trợ khi hồ sơ không khớp; kết quả hiển thị có đủ để bác sĩ tiếp tục không; người không dùng smartphone được hỗ trợ thế nào. Không đặt dịch vụ thật chỉ để tạo màn hình nghiên cứu.

## 5. Phân biệt nguyên nhân trước chọn giải pháp

| Nguyên nhân giả thuyết | Dấu hiệu | Dữ liệu phân biệt | Thay đổi có thể thử |
| --- | --- | --- | --- |
| Chưa rõ hướng dẫn | Hỏi nhiều nơi, đi sai, quay lại quầy | Tuyến đi, thời điểm được chỉ dẫn | Thẻ/phiếu bước sau và nơi nhận |
| Bàn giao chưa khép kín | A xong, B chưa biết người bệnh chờ | A hoàn tất, B nhận thông tin/xác nhận | Danh sách có người phụ trách |
| Chưa đủ điều kiện | Kết quả một phần, thiếu chuẩn bị | Ai quyết định “đủ”, còn thiếu gì | Lý do chặn và người giải quyết |
| Năng lực/biến thiên | Đúng nơi, đúng điều kiện vẫn chờ | Nhu cầu theo giờ, điểm phục vụ | Điều chỉnh lịch/nhân lực do cơ sở quyết |
| Xử lý chuyên môn | Xét nghiệm/duyệt vẫn đang chạy | Lấy mẫu, nhận mẫu, duyệt nếu được phép | Giải thích trạng thái, cải tiến chuyên môn |
| Định danh/thủ tục | Khai lại, hồ sơ không khớp | Lần bổ sung, lý do trả về | Chuẩn bị trước, hỗ trợ quầy |

Giữ giả thuyết cạnh tranh: điểm chậm do năng lực, thiết bị hoặc xử lý lại mẫu thay vì thiếu thông báo. Nếu dữ liệu ủng hộ điều này, đổi need statement hoặc giới hạn giải pháp vào trải nghiệm chờ, đề xuất vận hành riêng.

## 6. Định nghĩa trước khi đo

Một bàn giao có: A hoàn tất → B đủ điều kiện → người bệnh đến B → B xác nhận nhận → B bắt đầu phục vụ. Thứ tự có thể khác; người bệnh có thể đến trước khi đủ chỉ định. Mốc **sẵn sàng bắt đầu** là thời điểm muộn nhất của các điều kiện bắt buộc, thay vì trừ giờ tùy ý.

Chỉ số chính đề xuất: **đủ điều kiện bước B → B bắt đầu phục vụ**. Nó còn bao gồm đi lại và thao tác có ích; muốn gọi là lãng phí phải phân loại thêm. Không gọi mọi thời gian sau A là lãng phí.

Với xét nghiệm, tách lấy mẫu → đủ kết quả đã xác nhận; đủ kết quả → được điều phối quay lại; đến phòng → bác sĩ tiếp nhận. Đoạn đầu có xử lý chuyên môn; prototype không rút phản ứng sinh học, giảm kiểm soát chất lượng hay tự bỏ điều kiện an toàn. [Kế hoạch đo](../02-journey-map/ke-hoach-do-luong.md) xử lý thiếu dữ liệu và hoạt động song song.

## 7. So sánh giải pháp

| Phương án | Ưu điểm có thể có | Điều kiện/chi phí | Khi phù hợp |
| --- | --- | --- | --- |
| Phiếu giấy bước sau + nơi nhận | Nhanh thử, ít lệ thuộc thiết bị | Cập nhật thủ công, lỗi khi thay đổi | Vấn đề chủ yếu là hướng dẫn |
| Điều phối viên + danh sách | Có người nhận trách nhiệm | Phân ca, tải việc, ưu tiên | Bên nhận không thấy người chờ |
| Thẻ số có trạng thái xác nhận | Nhất quán, ghi được sự kiện | HIS/LIS, dữ liệu, phân quyền | Có nguồn tin cậy và chủ vận hành |

Chưa chấm điểm số giả. Trong sprint hiện tại chọn một hướng minh họa logic và báo rõ giới hạn. Ở giai đoạn có thực địa mới so mức gặp, tác động, độ chắc, khả năng thử và rủi ro. Thông báo nhanh hơn nhưng nhân viên nhập hai lần là đánh đổi cần ghi.

Prototype tạm chọn **thẻ bước tiếp theo + bảng mô phỏng nhân viên** để thử ai xác nhận và điều kiện mở bước. Không AI chẩn đoán, định tuyến y khoa hay tự đổi chỉ định.

## 8. Đánh giá trong sprint và kiểm chứng ở giai đoạn sau

**Trong sprint mới:** đối chiếu nguồn, mô phỏng phản ví dụ và rà code/mô hình trạng thái. Đã chạy lại 10 nhóm kiểm tra logic, chưa kiểm chứng cách người thật hiểu nơi đến, kết quả hoặc dữ liệu cũ. Xem [báo cáo rà AI](../05-prototype/ra-soat-ai.md).

**Chưa thể khẳng định:** hiệu quả thời gian ngoài đời, đại diện toàn Vinmec, an toàn lâm sàng, tích hợp, công bằng quần thể. Hai–ba người thử để tìm lỗi ban đầu, không ước lượng tỷ lệ thành công đại diện.

Mục tiêu **do sprint đề xuất**, không phải chuẩn ngành: mọi người thử hiểu bước tiếp; không ai hiểu 1/2 kết quả là đủ hoặc dữ liệu cũ là bảo đảm; mọi người tìm được hỗ trợ. Không đạt thì sửa trước khi thêm tính năng.

Nếu pilot sau sprint: cơ sở phê duyệt, baseline cùng luồng/khung giờ ở nhiều ngày, PDSA nhỏ, so phân bố thời gian và chỉ số cân bằng. Chọn thiết kế/cỡ mẫu với người có chuyên môn cải tiến. Vài ca trước–sau chưa chứng minh quan hệ nhân quả.

## 9. Câu hỏi phải mang tới cơ sở

1. Ai quyết định đủ điều kiện và chịu trách nhiệm khi người bệnh chưa được nhận?
2. Timestamp phản ánh lúc ghi máy hay lúc phục vụ thực?
3. Kết quả nào cần đủ; bác sĩ có thể tiếp tục khi nào; xác nhận bằng cách nào?
4. Lượt quay lại vào hàng đợi nào; ưu tiên y khoa áp dụng ra sao?
5. Hồ sơ không khớp/mất mạng thì dùng kênh nào?
6. Đã có công cụ tương tự chưa; vướng tìm thấy, dữ liệu hay quy trình sử dụng?
7. Ai cập nhật, xử lý quá hạn; tăng bao nhiêu thao tác nhân viên?

## 10. Mức tin cậy và khoảng trống

| Nhận định | Mức tin cậy | Lý do |
| --- | --- | --- |
| Cần phân rã chờ theo khâu/điều kiện | Khá cao về phương pháp | Nguồn S04–S10 có bối cảnh/định nghĩa khác nhau |
| MyVinmec có tính năng trong mô tả S01–S02 | Cao về thông tin công bố | Chưa xác minh trải nghiệm phiên bản/cơ sở |
| Đủ kết quả → bác sĩ là nút thắt cơ sở mục tiêu | Chưa biết | Chưa có thực địa |
| Thẻ số giảm thời gian thật | Chưa biết | Chưa pilot/so sánh |
| Rà logic trước 19/10 | Đã thực hiện 16/10 | 10 nhóm kiểm tra đạt; chưa thử người dùng |

Thông điệp bảo vệ bài theo phương pháp mới: **Bài xây dựng giả thuyết bàn giao từ nguồn công khai, dùng AI mô phỏng để phản biện và rà logic demo. Số người thật là 0; chưa xác nhận nhu cầu hoặc giảm thời gian khám tại Vinmec.**
