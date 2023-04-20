//  Let's make some classrooms

import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const room3 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room1 = new ClassRoom(34);
  const roomQueue = [room1._maxStudentsSize, room2._maxStudentsSize, room3._maxStudentsSize];

  roomQueue.sort((a, b) => a - b);
  return [
    { _maxStudentsSize: roomQueue[0] },
    { _maxStudentsSize: roomQueue[1] },
    { _maxStudentsSize: roomQueue[2] },
  ];
}
