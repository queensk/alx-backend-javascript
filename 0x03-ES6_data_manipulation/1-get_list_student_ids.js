export default function getListStudentIds(data) {
  if (!Array.isArray(data)) {
    return [];
  }
  const userId = data.map((item) => item.id);

  return userId;
}
