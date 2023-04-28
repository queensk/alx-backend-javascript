export default function getStudentIdsSum(data) {
  if (!Array.isArray(data)) {
    return 0;
  }
  const sumId = data.reduce((acc, current) => acc + current.id, 0);
  return sumId;
}
