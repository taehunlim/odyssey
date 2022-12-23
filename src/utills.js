export function setCookie(name, value, exp) {
  const date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);

  document.cookie =
    name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
}

export function getCookie(name) {
  const value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");

  return value ? value[2] : null;
}

export function trimText(text = "", limit) {
  return text.length > limit ? `${text.slice(0, limit)}...` : text;
}
