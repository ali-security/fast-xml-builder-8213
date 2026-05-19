export function escapeAttribute(val) {
  return String(val).replace(/"/g, '&quot;').replace(/'/g, '&apos;')
}
