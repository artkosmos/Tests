/** ЗАДАЧА 42 - Проверка сортировки массива
 *
 * 1. Создайте функцию "arraySortInfo" с одним параметром - "inputArray"
 *
 * 2. Если хотя бы один элемент в массиве не является числом - вернуть
 *  "Некоторые элементы не являются числами"
 *
 * 3. Если числа в массиве отсортированы по возрастанию - вернуть
 *  "Массив отсортирован по возрастанию"
 *
 * 4. Если числа в массиве отсортированы по убыванию - вернуть "Массив отсортирован по убыванию".
 *
 * 5. Если массив не отсортирован - вернуть "Массив не отсортирован"
 */

function arraySortInfo (inputArray) {
  if (inputArray.some((element) => typeof element !== 'number')) {
    return 'Some elements aren\'t numbers'
  }
  if (inputArray.every((element, index) => (index > 0 ? element >= inputArray[index - 1] : true))) {
    return 'The array is sorted by bigger order'
  }
  if (inputArray.every((element, index) => (index > 0 ? element <= inputArray[index - 1] : true))) {
    return 'The array is sorted by less order'
  }

  return 'The array isn\'t sorted at all'
}

const a = [5, 'abc', 10, 1]
const b = [4, 10, 14, 25, 25, 50]
const c = [150, 132, 80, 40]
const d = [15, 26, 10, 23, 85]

console.log(arraySortInfo(a)) // Некоторые элементы не являются числами
console.log(arraySortInfo(b)) // Массив отсортирован по возрастанию
console.log(arraySortInfo(c)) // Массив отсортирован по убыванию
console.log(arraySortInfo(d)) // Массив не отсортирован
