// Input
let elContactInputName = document.querySelector("#contactInputName");
let elContactInputRel = document.querySelector("#contactInputRel");
let elContactInputPhone = document.querySelector("#contactInputPhone");

let elContactOption = document.querySelectorAll('.contact-option');
let elSortContent = document.querySelector('.sort-content');
let elDataOption = document.querySelector('.contact-option-list');
let elSortBtn = [];

for (let i = 0; i < elContactOption.length; i++) {
  let sortBtn = document.createElement('button');
  sortBtn.setAttribute('id', `${i+1}`)
  sortBtn.classList = 'sort-btn';
  sortBtn.textContent = elContactOption[i].value;
  elSortContent.appendChild(sortBtn);
  elSortBtn.push(sortBtn.textContent);
}
// >




// Search
let elSearch = document.querySelector('.contact-search');
let elSearchBtn = document.querySelector('.contact-search-btn');

// Contact List
let elContactList = document.querySelector('.contact-list');

// Add btn
let elContactAddBtn = document.querySelector("#contactAddBtn");

// Vareable
let allContacts = [];

let countId = 1;
let contactName = '';
let contactRel = '';
let contactPhone = '';

elContactInputName.addEventListener('keyup', () => {
  contactName = elContactInputName.value;
});

elContactInputRel.addEventListener('keyup', () => {
  contactRel = elContactInputRel.value;
});

elContactInputPhone.addEventListener('keyup', () => {
  contactPhone = elContactInputPhone.value;
});

elContactAddBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (contactName !== '' && contactRel !== '' && contactPhone !== '') {
    let fullName = contactName;
    fullName = fullName.split(" ", 2);

    let firstName = fullName[0];
    let secondName = fullName[1];

    let itemContacts = {
      id: countId,
      name: firstName,
      surname: secondName,
      rel: contactRel,
      phone: contactPhone
    }

    countId++;
    allContacts.push(itemContacts);

    let sortingContent = document.querySelectorAll('.sort-content');
    let sortingBtn = document.querySelector('.sort-content');
    
    sortingBtn.addEventListener('click', (e) => {
      for (let i = 0; i < sortingContent.length; i++) {
        if (e.target.textContent[i] == itemContacts.rel) {
          console.log(546545);
        }
        console.log(e.target.textContent);
        console.log(itemContacts.rel);
      }
    });
    console.log(sortingBtn); 
    
    let li = document.createElement('li');
    li.classList = ('contact-item');
  
    // Split fname sname
   

    // Name 
    let fname = document.createElement('p');
    fname.classList = ('contact-text');
    fname.textContent = 'First Name: ';
    let inFname = document.createElement('span');
    inFname.classList = ('contact-subtext');
    inFname.textContent = itemContacts.name;
    fname.appendChild(inFname);
    li.appendChild(fname);

    // Second name
    let sname = document.createElement('p');
    sname.classList = ('contact-text');
    sname.textContent = 'Last Name: ';
    let inSname = document.createElement('span');
    inSname.classList = ('contact-subtext');
    inSname.textContent = itemContacts.surname;
    sname.appendChild(inSname);
    li.appendChild(sname);

    // Relation
    let rel = document.createElement('p');
    rel.classList = ('contact-text');
    rel.textContent = 'Relationship: ';
    let inRel = document.createElement('span');
    inRel.classList = ('contact-subtext');
    inRel.textContent = itemContacts.rel;
    rel.appendChild(inRel);
    li.appendChild(rel);

    // Phone
    let tel = document.createElement('a');
    tel.classList = ('contact-tel');
    tel.setAttribute('href', `tel:${contactPhone}`)
    tel.textContent = itemContacts.phone;
    li.appendChild(tel);


    if (elSortBtn.every(i => i != contactRel)) {
      let sortBtn = document.createElement('button');
      sortBtn.setAttribute('id', `${1}`)
      sortBtn.classList = 'sort-btn';
      sortBtn.textContent = elContactInputRel.value;
      elSortContent.appendChild(sortBtn);
      console.log(elSortContent);

      let sortCategory = document.createElement('option');
      sortCategory.setAttribute('value', `${elContactInputRel.value}`);
      sortCategory.classList = 'contact-option';
      elDataOption.appendChild(sortCategory);
    }
    

    elContactList.appendChild(li);

    elSearch.addEventListener('keyup', () => {
      if (itemContacts.name.toLowerCase().includes(elSearch.value.toLowerCase()) || itemContacts.surname.toLowerCase().includes(elSearch.value.toLowerCase())) {
        li.className = ('d-block contact-item')
      }
      else {
        li.className = ('d-none')
      }
    });
    };

  elContactInputName.value = '';
  elContactInputRel.value = '';
  elContactInputPhone.value = '';
});



