export default function cleanSet(set, startString) {
  let results = '';
  if (
    typeof set !== 'object'
        || typeof startString !== 'string'
        || startString.length === 0
  ) {
    return results;
  }
  for (const items of set) {
    if (items && items.startsWith(startString)) {
      results += `${items.slice(startString.length)}-`;
    }
  }
  return results.slice(0, -1);
}
