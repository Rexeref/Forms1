function createForm(name) {
    const form = document.createElement('form');
    form.name = name;
    document.body.appendChild(form);
    return form;
}

function createTextField(id, placeholder, required) {
    const textField = document.createElement('input');
    textField.type = 'text';
    textField.name = 'text_field';
    textField.id = id;
    textField.required = required;
    textField.placeholder = placeholder;
    return textField;
}

function createCheckbox(id, label) {
    const checkboxLabel = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.id = id;
    checkbox.type = 'checkbox';
    checkbox.name = 'checkbox';
    checkboxLabel.appendChild(checkbox);
    checkboxLabel.appendChild(document.createTextNode(label));
    return checkboxLabel;
}

function createRadio(name, id, label) {
    const radioLabel = document.createElement('label');
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = name;
    radio.id = id;
    radioLabel.appendChild(radio);
    radioLabel.appendChild(document.createTextNode(label));
    return radioLabel;
}

function createTextarea(placeholder, id) {
    const textarea = document.createElement('textarea');
    textarea.name = 'textarea';
    textarea.id = id;
    textarea.placeholder = placeholder;
    return textarea;
}

function createPage(){
    const form = createForm('principale')
    
    const nome = createTextField('name', 'Inserire il nome', true)

    const scelta1 = createCheckbox('scelta1', 'Scelta 1')
    const scelta2 = createCheckbox('scelta2', 'Scelta 2')

    const gUomo = createRadio('genere', 'uomo', 'Uomo');
    const gDonna = createRadio('genere', 'donna', 'Donna');
    const gAltro = createRadio('genere', 'altro', 'Altro');

    const testo = createTextarea('', 'areaTesto');

    form.appendChild(nome);
    form.appendChild(scelta1);
    form.appendChild(scelta2);
    form.appendChild(gUomo);
    form.appendChild(gDonna);
    form.appendChild(gAltro);
    form.appendChild(testo);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createPage);
} else {
    createPage();
}