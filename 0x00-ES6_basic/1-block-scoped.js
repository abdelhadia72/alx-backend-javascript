/**
 * Represents a task block.
 * @param {boolean} trueOrFalse - Indicates whether the task is true or false.
 * @returns {Array} An array containing the values of task and task2.
 */

export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
