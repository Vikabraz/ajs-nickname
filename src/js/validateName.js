export default function validateUsername(userName) {
  if (!/^[a-z]+[-\w]+[a-z]$/i.test(userName) || /(\d{4})/.test(userName)) {
    return false;
  }
  return true;
}
