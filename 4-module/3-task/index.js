function highlight(table) {
  for (let tr of table.rows) {
    for (let td of tr.cells) {
      switch (table.tHead.rows[0].cells[td.cellIndex].innerHTML) {
      case 'Status':
        if (!td.dataset.available) {
          tr.hidden = true;
        } else if (td.dataset.available === 'true') {
          tr.classList.toggle('available');
        } else if (td.dataset.available === 'false') {
          tr.classList.toggle('unavailable');
        }
      case 'Gender':
        if (td.innerHTML === 'm') {
          tr.classList.add('male');
        } else if (td.innerHTML === 'f') {
          tr.classList.add('female');
        }
      case 'Age':
        if (td.innerHTML < 18) {
          tr.style.textDecoration = 'line-through';
        }
      }
    }
  }
}
