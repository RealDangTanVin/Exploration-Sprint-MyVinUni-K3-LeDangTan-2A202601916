import test from 'node:test';
import assert from 'node:assert/strict';
import { createState, analyzeBooking, submitBooking, linkZalo, canSuggest, acceptRoute, resetJourney, announceOpportunity } from './model.mjs';

test('Không tạo yêu cầu khi chưa có nội dung để người dùng xem lại', () => {
  const state = createState();
  assert.equal(analyzeBooking(state, '  '), false);
  assert.equal(submitBooking(state), false);
  assert.equal(state.booked, false);
});
test('Soạn nhu cầu hành chính và giữ dữ liệu đặt khám do người dùng chọn', () => {
  const state = createState();
  analyzeBooking(state, 'Tôi cần khám sức khỏe để làm hồ sơ lái xe.');
  assert.equal(state.intakeKind, 'driver');
  state.hospital = 'BV ĐKQT Vinmec Smart City'; state.date = '20'; state.time = '10:30';
  assert.equal(submitBooking(state), true);
  assert.equal(state.screen, 'confirmed');
  assert.equal(state.hospital, 'BV ĐKQT Vinmec Smart City');
  assert.equal(state.date, '20');
  assert.equal(state.time, '10:30');
});
test('Nhu cầu chưa rõ chuyển tiếp nhận hỗ trợ, không tự chọn chuyên khoa', () => {
  const state = createState();
  analyzeBooking(state, 'Tôi không biết chọn khoa nào.');
  assert.equal(state.intakeKind, 'assist');
  assert.equal(state.method, 'doctor'); // Không tự sửa lựa chọn người dùng.
});
test('Chỉ bật Zalo sau khi có lựa chọn đồng ý', () => {
  const state = createState();
  assert.equal(linkZalo(state), false);
  assert.equal(state.linked, false);
  state.consent = true;
  assert.equal(linkZalo(state), true);
});
test('Chủ động thông báo phòng ít chờ trước khi người dùng mở gợi ý, không tự đổi lượt', () => {
  const state = createState();
  assert.equal(announceOpportunity(state), false);
  state.linked = true;
  assert.equal(announceOpportunity(state), true);
  assert.equal(state.notificationKind, 'suggestion');
  assert.equal(state.notification, true);
  assert.equal(state.changed, false);
  state.stale = true;
  assert.equal(announceOpportunity(state), false);
});
test('Không chấp nhận gợi ý đã cũ hoặc khi chưa xem gợi ý', () => {
  const state = createState();
  assert.equal(acceptRoute(state), false);
  state.suggested = true; state.stale = true;
  assert.equal(canSuggest(state), false);
  assert.equal(acceptRoute(state), false);
  assert.equal(state.changed, false);
});
test('Đổi phòng cần đồng ý, chỉ tạo thông báo khi đã bật Zalo', () => {
  for (const linked of [false, true]) {
    const state = createState(); state.suggested = true; state.linked = linked;
    assert.equal(acceptRoute(state), true);
    assert.equal(state.notification, linked);
    assert.equal(state.changed, true);
    assert.equal(state.arrived, false);
    assert.equal(state.completed, false);
    assert.equal(acceptRoute(state), false);
  }
});
test('Từ chối gợi ý không đổi phòng hoặc tạo tin nhắn', () => {
  const state = createState(); state.suggested = true; state.passed = true;
  assert.equal(acceptRoute(state), false);
  assert.equal(state.notification, false);
});
test('Bắt đầu lại hành trình xóa trạng thái cũ, giữ lựa chọn nhận Zalo', () => {
  const state = createState(); state.linked = true; state.suggested = true;
  acceptRoute(state); state.completed = true; state.arrived = true; state.stale = true;
  resetJourney(state);
  assert.equal(state.notification, false);
  assert.equal(state.completed, false);
  assert.equal(state.changed, false);
  assert.equal(state.stale, false);
  assert.equal(state.linked, true);
  assert.equal(canSuggest(state), true);
});
