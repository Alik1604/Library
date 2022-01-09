const library_cont = document.querySelector("#library");
const body_element = document.querySelector('body');

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

const form_cont = document.createElement('div');

function makeForm() {
    const title_input = document.createElement('input');
    const title1 = document.createElement('h5');
    const title2 = document.createElement('h5');
    const title3 = document.createElement('h5');
    const title4 = document.createElement('h5');
    const title5 = document.createElement('h5');
    const au_input = document.createElement('input');
    const numOfpages_input = document.createElement('input')
    const readStatus_input = document.createElement('input');
    const fstatus_input = document.createElement('input');
    const sub_button = document.createElement('button');

    title1.textContent = 'Enter title';
    title2.textContent = 'Enter author';
    title3.textContent = 'Enter number of pages';
    title4.textContent = 'Enter read status';
    title5.textContent = 'Enter favourite status';

    form_cont.append(title1);
    form_cont.append(title_input);
    form_cont.append(title2);
    form_cont.append(au_input);
    form_cont.append(title3);
    form_cont.append(numOfpages_input);
    form_cont.append(title4);
    form_cont.append(readStatus_input);
    form_cont.append(title5);
    form_cont.append(fstatus_input);
    form_cont.append(sub_button);
    body_element.append(form_cont);

    sub_button.classList.add('sub_button');
    form_cont.classList.add('form_c');

    sub_button.textContent = 'save book';
    sub_button.addEventListener("click",removeFormandCallmaker);
    addButton.disabled = 'true';
}

function removeFormandCallmaker() {
    let formText = Array.from(document.querySelectorAll("input"));
    let title = formText[0].value;
    let author = formText[1].value;
    let numOfpages = formText[2].value;
    let status = formText[3].value;
    let fstatus = formText[4].value;
    library[counter] = new Book(title,author,numOfpages,status,fstatus);
    createCard(library[counter]);
    counter++;
    form_cont.innerHTML = '';
    form_cont.remove();
    addButton.removeAttribute('disabled');
}

const addButton = document.querySelector("#add_button");
addButton.addEventListener('click',makeForm);

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

    star.src = 'images/star.png';
    delete_button.src = 'images/close.png';

    title.textContent = book.title;
    author.textContent = book.author;
    numOfpages.textContent = book.numOfpages;

    if (book.status == 'yes'){
        readStatus.src = 'images/check.png';
    }else{
        readStatus.src = 'images/check_1.png';
    }

    if (book.fstatus == 'yes'){
        star.src = 'images/star_1.png';
    }else{
        star.src = 'images/star.png';
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

//status buttons

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
        readStatus.target.src = 'images/check_1.png';
        book.status = 'no';
    }else{
        readStatus.target.src = 'images/check.png';
        book.status = 'yes';
    }
    console.log(book);
}

function changeStar(star) {
    let status_box = star.target.parentElement;
    let parent = status_box.parentElement;
    let book = library[parent.getAttribute('value')];
    if (book.fstatus == 'yes'){
        star.target.src = 'images/star.png';
        book.fstatus = 'no';
    }else{
        star.target.src = 'images/star_1.png';
        book.fstatus = 'yes';
    }
} 


