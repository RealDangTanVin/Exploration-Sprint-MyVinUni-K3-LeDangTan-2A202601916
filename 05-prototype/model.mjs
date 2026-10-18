export function createState() {
  return { screen: 'home', bookingMode: 'ai', hospital: 'BV ĐKQT Vinmec Times City', manualName: '', manualDob: '', manualPhone: '', manualChoice: '', benefit: false, foreign: false, intakeKind: 'assist', description: '', patient: 'self', date: '19', time: '09:00', gender: 'Nam', method: 'doctor', suggestion: false, booked: false, linked: false, consent: false, changed: false, suggested: false, stale: false, completed: false, arrived: false, passed: false, authenticated: false, notification: false, notificationKind: 'none', notificationRead: false, emergency: false, follow: false };
}
export function canSuggest(state) {
  return !state.stale && !state.changed && !state.passed && !state.completed && !state.arrived;
}
export function acceptRoute(state) {
  if (!canSuggest(state) || !state.suggested) return false;
  state.changed = true;
  state.notification = state.linked;
  state.notificationKind = 'route';
  state.authenticated = false;
  return true;
}
export function announceOpportunity(state) {
  if (!state.linked || !canSuggest(state)) return false;
  state.notification = true;
  state.notificationKind = 'suggestion';
  state.notificationRead = false;
  state.authenticated = false;
  return true;
}
export function analyzeBooking(state, description) {
  if (!description.trim()) return false;
  state.description = description.trim();
  state.intakeKind = /lái xe|lai xe|ô tô|o to/i.test(state.description) ? 'driver' : /định kỳ|dinh ky|tổng quát|tong quat/i.test(state.description) ? 'checkup' : 'assist';
  state.suggestion = true;
  return true;
}
export function submitBooking(state) {
  if (!state.suggestion || !state.description || !state.date || !state.time) return false;
  state.booked = true;
  state.screen = 'confirmed';
  return true;
}
export function linkZalo(state) {
  if (!state.consent) return false;
  state.linked = true;
  return true;
}
export function resetJourney(state) {
  Object.assign(state, { changed: false, suggested: false, stale: false, completed: false, arrived: false, passed: false, notification: false, notificationKind: 'none', notificationRead: false, authenticated: false });
}
