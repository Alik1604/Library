const library_cont = document.querySelector("#library");
let library = [];
let counter = 0;
function Book (title, author,numOfpages, status,fstatus){
    this.title = title
    this.author = author
    this.numOfpages = numOfpages
    this.status = status
    this.fstatus = fstatus
    this.info = function reportInfo() {
        console.log(title,author,numOfpages,status);
    }
}

function addBookToLibraryArr() {
    let title = prompt('Enter title',);
    let author = prompt('Enter author',);
    let numOfpages = prompt('Enter number of pages',);
    let status = prompt('Enter read status yes or no',);
    let fstatus = 'no';
    library[counter] = new Book(title,author,numOfpages,status,fstatus);
    createCard(library[counter]);
    counter++;
}

const addButton = document.querySelector("#add_button");
addButton.addEventListener('click',addBookToLibraryArr);

//container for book 

function createCard(book) {
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

    bookContainer.setAttribute('value',counter);
    star.setAttribute('value',counter);
    readStatus.setAttribute('value',counter);
    delete_button.setAttribute('value',counter);

    star.src = 'star.png';
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
        
    star.addEventListener('click', changeStar);
    readStatus.addEventListener('click', changeReadStatus);
    delete_button.addEventListener('click',DeleteCard);
}

function DeleteCard(delete_button) {
    let status_box = delete_button.target.parentElement;
    let card = status_box.parentElement;
    let book = library[card.getAttribute('value')];
    let index = library.indexOf(book);
    library.splice(index,1);
    card.remove();
    counter--;
    let clipot = 0;
    let cards = Array.from(document.querySelectorAll('.book_c'));
    
    while(clipot < counter){
        cards[clipot].setAttribute('value',clipot);
        clipot++;
    }
}

function changeReadStatus(readStatus) {
    let status_box = readStatus.target.parentElement;
    let parent = status_box.parentElement;
    let book = library[parent.getAttribute('value')];
    if (book.status == 'yes'){
        readStatus.target.src = 'check_1.png';
        book.status = 'no';
    }else{
        readStatus.target.src = 'check.png';
        book.status = 'yes';
    }
    console.log(book);
}

function changeStar(star) {
    let status_box = star.target.parentElement;
    let parent = status_box.parentElement;
    let book = library[parent.getAttribute('value')];
    if (book.fstatus == 'yes'){
        star.target.src = 'star.png';
        book.fstatus = 'no';
    }else{
        star.target.src = 'star_1.png';
        book.fstatus = 'yes';
    }
} 


