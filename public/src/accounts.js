function findAccountById(accounts, id) {return accounts.find(account => account.id == id)}

function sortAccountsByLastName(accounts) {return accounts.sort((a, b) => a.name.last > b.name.last ? 1: -1)}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((total, book) => total += (book.borrows.some(borrow => borrow.id == account.id) ? 1 : 0), 0)
}

function getBooksPossessedByAccount(account, books, authors) {
  books = books.filter(book => (book.borrows.some(borrow => ((borrow.returned == false) && (borrow.id == account.id)))));
  return books.map(book => {
    book.author = authors.find(author => (author.id == book.authorId))//;
    return book;
  });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
