//  Let's make some classrooms

import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const room3 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room1 = new ClassRoom(34);
  const roomQueue = [room1, room2, room3];

  roomQueue.sort((a, b) => a._maxStudentsSize - b._maxStudentsSize);
  return roomQueue;
}
