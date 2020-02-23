export const SHOW_AUTH_MODAL = 'SHOW_AUTH_MODAL';
export const HIDE_AUTH_MODAL = 'HIDE_AUTH_MODAL';

export function showAuthModal() {
  return {
    type: SHOW_AUTH_MODAL
  };
}

export function hideAuthModal() {
  return {
    type: HIDE_AUTH_MODAL
  };
}
