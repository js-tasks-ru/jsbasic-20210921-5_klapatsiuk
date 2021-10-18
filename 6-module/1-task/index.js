/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    let table = document.createElement('TABLE');
    this.render(table);
  }

  render(table) {

    // Когда оставляю шапку таблицы – не проходят тесты
    // let thead = document.createElement('THEAD');
    // table.appendChild(thead);
    // thead.outerHTML = `<tr>
    //                   <th>Имя</th>
    //                   <th>Возраст</th>
    //                   <th>Зарплата</th>
    //                   <th>Город</th>
    //                   <th></th>
    //                   </tr>`;

    let tbody = document.createElement('TBODY');
    table.appendChild(tbody);

    for (let tr of this.rows) {
      tr = document.createElement('TR');
      tbody.appendChild(tr);

      tr.outerHTML = `<td>${tr.name}</td>
      <td>${tr.age}</td>
      <td>${tr.salary}</td>
      <td>${tr.city}</td>
      <td><button onclick="this.closest('tr').remove()">X</button></td>`;
    }
    this.elem = table;
  }
}
