export function parseJwtPayload(token) {
  const payload = token.split('.')[1];
  return JSON.parse(atob(payload));
}

export function getRoleFromToken(token) {
  if (!token) return null;
  try {
    return parseJwtPayload(token).role;
  } catch {
    return null;
  }
}
