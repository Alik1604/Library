const library_cont = document.querySelector("#library");
let library = [];
let counter = 0;
function Book (title, author,numOfpages, status){
    this.title = title
    this.author = author
    this.numOfpages = numOfpages
    this.status = status
    this.info = function reportInfo(){
        console.log(title,author,numOfpages,status);
    }
}

function addBookToLibraryArr (){
    let title = prompt('Enter title',);
    let author = prompt('Enter author',);
    let numOfpages = prompt('Enter number of pages',);
    let status = prompt('Enter read status yes or no',);
    library[counter] = new Book(title,author,numOfpages,status);
    createCard(library[counter]);
    counter++;
}

const addButton = document.querySelector("#add_button");
addButton.addEventListener('click',addBookToLibraryArr);

//container for book 

function createCard(book){
    const bookContainer = document.createElement('div');
    const title = document.createElement('div');
    const author = document.createElement('div');
    const numOfpages = document.createElement('div');
    const status_c = document.createElement('div');
    const star = document.createElement('div');
    const readStatus = document.createElement('div');

    bookContainer.classList.add('book_c');
    status_c.classList.add('status_container');
    star.classList.add('status');
    readStatus.classList.add('star');
    star.classList.add('star');

    title.textContent = book.title;
    author.textContent = book.author;
    numOfpages.textContent = book.numOfpages;
    if (book.status == 'yes'){
        readStatus.style.backgroundColor = 'green';
    }else{
        readStatus.style.backgroundColor = 'red';
    }

    bookContainer.append(title);
    bookContainer.append(author);
    bookContainer.append(numOfpages);
    status_c.append(readStatus);
    status_c.append(star);
    bookContainer.append(status_c);
    library_cont.append(bookContainer);
}


    


