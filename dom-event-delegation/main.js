// const $taskList = document.querySelector('.task-list');

// function removeTaskList(event) {
//   console.log('event.target:',event.target);
//   console.log('event.target.tagName:',event.target.tagName);

//   $taskList.addElementListener('click', removeTaskList)

const $taskList = document.querySelector('.task-list');

function removeTaskList(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);

  if (event.target.tagName !== 'BUTTON') {
    return;
  }

  const $taskListItem = event.target.closest('.task-list-item');
  console.log('closest.task-list-item', $taskListItem);
  $taskListItem.remove();
}

$taskList.addEventListener('click', removeTaskList);
