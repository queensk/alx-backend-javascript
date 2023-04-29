export default function hasValuesFromArray(set, array) {
  for (const val in array) {
    if (!set.has(val)) {
      return false;
    }
  }
  return true;
}
