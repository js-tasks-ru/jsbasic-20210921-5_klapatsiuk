function makeFriendsList(friends) {
  let ul = document.createElement('UL');
  for (let friend of friends) {
    let li = document.createElement('LI');
    li.innerHTML = `${friend.firstName} ${friend.lastName}`; 
    ul.appendChild(li);
  }
  return ul;
}
