let boolfn = false;
let boolln = false;
let selected = false;
let buttons = false;
let submitbutton = false;
let timeout = null;
window.onload = () => {
    time();
    const formular = document.createElement('form');
    formular.classList.add('form');

    const fname = document.createElement('label');
    fname.textContent = 'First name:';
    formular.appendChild(fname);
    const firstname = document.createElement('input');
    firstname.type = 'text';
    firstname.id = 'firstname';
    formular.appendChild(firstname);
    firstname.onchange = () => {
        if (firstname.value != '')
            boolfn = true;
        checkselected(formular);
        time();
    }


    const lname = document.createElement('label');
    lname.textContent = 'Last name:';
    formular.appendChild(lname);
    const lastname = document.createElement('input');
    lastname.type = 'text';
    lastname.id = 'lastname';
    formular.appendChild(lastname);
    lastname.onchange = () => {
        if (lastname.value != '')
            boolln = true;
        checkselected(formular);
        time();
    }

    document.body.appendChild(formular);
};
function checkselected(f) {
    if (boolfn && boolln && !selected) {
        selected = true;
        createSelect(f);
    }
};
const col = ["black", "red", "yellow", "orange", "blue", "pink"];
function createSelect(form) {
    const gender = document.createElement('label');
    gender.textContent = 'Gender';
    form.appendChild(gender);

    const selGender = document.createElement('select');
    selGender.id = 'selGender';
    const m = document.createElement('option');
    m.value = 'Male'; m.innerText = 'Male';
    selGender.appendChild(m);

    const f = document.createElement('option');
    f.value = 'Female'; f.innerText = 'Female';
    selGender.appendChild(f);

    const o = document.createElement('option');
    o.value = 'Other'; o.innerText = 'Other';
    selGender.appendChild(o);

    selGender.onchange = () => {
        time();
        if (!buttons) {
            for (c of col) {
                const l = document.createElement('label');
                l.innerText = c;
                form.appendChild(l);
                const rad = document.createElement('input');
                rad.type = 'radio';
                rad.name = 'color';
                rad.value = c;
                form.appendChild(rad);
                rad.onchange = () => {
                    time();
                    if (!submitbutton) {
                        const subm = document.createElement('button');
                        subm.textContent = 'Submit';
                        subm.addEventListener('click', ev => fsubmit(ev, form));
                        form.appendChild(subm);
                        submitbutton = true;
                    }
                }

            }

        }
        buttons = true;
    }
    form.appendChild(selGender);
};
function fsubmit(ev, form) {
    ev.preventDefault();
    const out1 = document.createElement('p');
    out1.innerText = document.getElementById('firstname').value;
    const out2 = document.createElement('p');
    out2.innerText = document.getElementById('lastname').value;
    const out3 = document.createElement('p');
    out3.innerText = document.getElementById('selGender').value;
    const out4 = document.createElement('p');
    const radios = document.querySelectorAll('input[type=radio]');
    radios.forEach(el => {
        if (el.checked) out4.innerText = el.value;
    })
    while (document.body.childElementCount) { document.body.removeChild(document.body.firstChild); }
    document.body.appendChild(out1);
    document.body.appendChild(out2);
    document.body.appendChild(out3);
    document.body.appendChild(out4);
};
function time() { if (timeout) clearTimeout(timeout); if(!boolfn&&!boolln){timeout = setTimeout(() => { alert('Sesiunea a expirat'); }, 600000) }}
