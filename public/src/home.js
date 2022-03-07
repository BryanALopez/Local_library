function getTotalBooksCount(books) {return books.length;}

function getTotalAccountsCount(accounts) {return accounts.length;}

function getBooksBorrowedCount(books) {
  return books.reduce((result, book) => (result + ((book.borrows.some(borrow => borrow.returned == false)) ? 1 : 0)), 0);
}

function SortAndResize(array) {
  array.sort((a, b) => b.count - a.count);
  array.length = 5;
  return array;
}

function getMostCommonGenres(books) {
  const genres = [];
  books.forEach(book => {
    let obj = genres.find(genre => genre.name == book.genre);
    if(obj == undefined) genres.push({"name": book.genre, "count": 1});
    else obj.count++;
  });
  
  return SortAndResize(genres);
}

function getMostPopularBooks(books) {
  return SortAndResize(books.map(book => {
    return {name: book.title, count: book.borrows.length};
  }));
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  books.forEach(book => {
    const author = authors.find(author => author.id == book.authorId);
    let name = `${author.name.first} ${author.name.last}`;
    let count = book.borrows.length;
    let obj = result.find(author => author.name == name);
    if(obj == undefined) result.push({name: name, count: count});
    else obj.count += count;
  });
  
  return SortAndResize(result);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
