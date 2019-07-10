// 🏃🏼🏊🏼🏋🏼🏄🏼
const people = [
  'Faber Guerreau',
  'Gilbertine Stichall',
  'Cristina Cuckoo',
  'Johnette Chatelot',
  'Trish Mayou',
  'Ruth Connell',
  'Hamid Elsegood',
  'Thorstein Woodward',
  'Bethena Porte',
  'Nelle Durek',
  'Bastien Leyrroyd',
  'Albie Tranfield',
  'Bryce Temprell',
  'Darya Chinery',
  'Rea Matoshin',
  'Tommie Benda',
  'Lowell Trowel',
  'Wayne Claughton',
  'Teena Bansal',
  'Basile Phonix',
];

/**
 * Filters people array based on total number of letters in their name (including spaces).
 * Filter if name is strictly greater than length
 *
 * @param {string[]} people
 * @param {number} length
 * @returns {string[]} filtered array
 */
function filterByLength(people, length) {
  // const list = people.filter(names => names.length > length);
  // // return names;
  // return list;
  // one line of code to return
  return people.filter(names => names.length > length);
}

/**
 * Returns an array of every nth person.
 * Note that counting starts at 0,
 * so the returned array will always include (at least) the first person.
 *
 * @param  {string[]} people
 * @param  {number} n
 * @returns {string[]}
 *
 * @example
 *    everyNPerson(['Matt', 'Kim', 'Kanye', 'Obama', 'Hans'], 2)
 *    // → ['Matt', 'Kanye', 'Hans']
 */
function everyNPerson(people, n) {
  if (n === 0) {
    return people;
  }
  return people.filter(person => people.indexOf(person) % n === 0);
  // return list;
}

/**
 * Returns an array where each entry is the person's intials
 * @param {string[]} people
 * @returns {string[]} intials array
 *
 * @example
 *    initials(['Kanye West', 'Barack Obama'])
 *    // → ['KW', 'BO']
 */

/*
  more improved way:
  function initials(people) {
  // eslint-disable-next-line prettier/prettier
  const people2 = people.map(person =>{
    const nameArr = person.split(' '); // ['Kanye', 'West']
    const [firstName,lastName] = nameArr;
    //old syntax next two lines
    //const firstName = nameArr[0];
    //const lastName = nameArr[1];
    return '${firstName[0]} $ {lastName[0]}';
  }
  return people2;

  you can also create a function
}
  }
*/
function initials(people) {
  const list = people.map(person => {
    const name = person.split(' ');

    const firstChar = name[0][0] + name[1][0];
    return firstChar;
  });
  return list;
  // people.indexOf('', 0);
  // console.log(people);
  // return people;
}

/**
 * Returns an array where every person is prepended with their position in the array
 * @param {string[]} people
 * @returns {string[]}
 *
 * @example
 *    peopleWithPosition(['Kanye', 'Barack'])
 *    // → ['1. Kanye', '2. Barack']
 */

/*
Improved way for peopleWithPosition
return people.map((person, index) => `${index}: ${person}`);

*/
function peopleWithPosition(people) {
  const list = people.map(person => {
    const peopleWithPos = people.indexOf(person);
    return `${peopleWithPos}: ${person}`;
  });
  return list;
}
console.log(peopleWithPosition);

/**
 * Sorts `people` by first name
 * @param {string[]} people
 * @returns {string[]} sorted array
 */

/*
  Improved way
  sortByFirstName
  //this is non-destructive because 
  it doesnt mess with the outside
  array.
  return people.concat().sort()
  return[...people].sort();//shallow clone.
 */
function sortByFirstName(people) {
  const list = people;
  return list.sort();
}
console.log(sortByFirstName);
/**
 * Sorts `people` by last name
 * @param {string[]} people
 * @returns {string[]} sorted array
 */

/*
  notes
  function sortByLastName(people) {
  const sortedArray = [...people];
  return sortedArray.sort((a, b) => {
    const alastName = a.split(' ')[1];
    const blastName = b.split(' ')[1];
    if (alastName > blastName) {
      return 1;
    }
    return -1;
  });
  return 0; //stable sort

  //shorter line
  
  return [...people].sort((left, right) => left.split(' ')[1] > right.split(' ')[1] ? 1 : -1);
}

 */
function sortByLastName(people) {
  const seperatedNameList = people.map(person => person.split(' '));
  console.log(seperatedNameList);
  const splitName = seperatedNameList.sort(function(a, b) {
    console.log(splitName);
  });
}
sortByLastName(people);
/**
 * Counts all the characters in the people array (including spaces)
 * @param {Array} people Array of names
 * @return Number of characters
 */

/*
Notes:
function countTotalCharacters(people) {
  return people.reduce((total, current) => total + current.length, 0);
}
*/
function countTotalCharacters(people) {
  let count = 0;
  people.forEach(person => {
    count += person.length;
  });
  return count;
}

/**
 * Returns `true` if everyone in `people` has `letter` in their name.
 * Returns `false` otherwise
 * @param {string[]} people
 * @param {string} letter
 * @returns {boolean}
 */

/*
  Notes:
  *array .every function*
  function everyoneHasLetter(people, letter) {
  return people.every(person => person.includes(letter));
}
 */
function everyoneHasLetter(people, letter) {
  const hasIt = true;

  if (people === letter) {
    return hasIt;
  }
  return false;
}

/**
 * Returns `true` if at least one person has `letter` in their name.
 * Returns `false` otherwise
 * @param {string[]} people
 * @param {string} letter
 * @returns {boolean}
 */
function someoneHasLetter(people, letter) {
  // using .some function
  return people.some(person => person.includes(letter));
}

module.exports = {
  filterByLength,
  everyNPerson,
  initials,
  sortByFirstName,
  sortByLastName,
  countTotalCharacters,
  everyoneHasLetter,
  someoneHasLetter,
  peopleWithPosition,
};
