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
    const delete_c = document.createElement('div');
    const delete_button = document.createElement('img');
    const title = document.createElement('div');
    const author = document.createElement('div');
    const numOfpages = document.createElement('div');
    const status_c = document.createElement('div');
    const star = document.createElement('img');
    const readStatus = document.createElement('img');

    bookContainer.classList.add('book_c');
    status_c.classList.add('status_container');
    readStatus.classList.add('status');
    star.classList.add('star');
    delete_button.classList.add('del_button');
    delete_c.classList.add('del_c');

    star.src = 'star_1.png';
    delete_button.src = 'close.png';

    title.textContent = book.title;
    author.textContent = book.author;
    numOfpages.textContent = book.numOfpages;
    if (book.status == 'yes'){
        readStatus.src = 'check.png';
    }else{
        readStatus.src = 'check_1.png';
    }
    bookContainer.append(delete_c);
    delete_c.append(delete_button);
    bookContainer.append(title);
    bookContainer.append(author);
    bookContainer.append(numOfpages);
    status_c.append(readStatus);
    status_c.append(star);
    bookContainer.append(status_c);
    library_cont.append(bookContainer);
}


    


