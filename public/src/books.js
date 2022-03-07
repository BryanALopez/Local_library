function findAuthorById(authors, id) {return authors.find(author => author.id == id);}

function findBookById(books, id) {return books.find(book => book.id == id);}

function partitionBooksByBorrowedStatus(books) {
  const result = [];
  result.push(books.filter(book => (book.borrows.some(borrow => borrow.returned == false))));
  result.push(books.filter(book => (book.borrows.every(borrow => borrow.returned == true))));
  return result;
}

function getBorrowersForBook(book, accounts) {
  return accounts.filter(account => 
    book.borrows.some(borrow => {
      if(borrow.id == account.id) {
        account.returned = borrow.returned;
        return true;
      }
    })
  );
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
