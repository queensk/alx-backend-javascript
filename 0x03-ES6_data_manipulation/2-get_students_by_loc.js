export default function getStudentsByLocation(data, city) {
  if (!Array.isArray(data)) {
    return [];
  }
  const userData = data.filter((items) => items.location === city);
  return userData;
}
