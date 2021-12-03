// Input
let elContactInputName = document.querySelector("#contactInputName");
let elContactInputRel = document.querySelector("#contactInputRel");
let elContactInputPhone = document.querySelector("#contactInputPhone");
let elContactOption = document.querySelectorAll('.contact-option');

console.log(elContactOption.length);

// Search
let elSearch = document.querySelector('.contact-search');
let elSearchBtn = document.querySelector('.contact-search-btn');

// Contact List
let elContactList = document.querySelector('.contact-list');

// Add btn
let elContactAddBtn = document.querySelector("#contactAddBtn");

// Vareable
let allContacts = [];
// let itemContacts = {};

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








// elSearch.addEventListener('keyup', searchContact);

// function searchContact(e){
//   let searchText = e.target.value.toLowerCase();
    
//   Array.from(allContacts).forEach(function(item){
//     let fnameText = item.textContent;

//     if(fnameText.toLowerCase().includes(searchText) != 1){
//       item.parentElement.style.display = "none";
//       console.log("awd");
//     }
//     else{
//       item.parentElement.style.display = "block";
//     }
//   })
// }


