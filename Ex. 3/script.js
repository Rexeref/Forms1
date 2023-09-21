import data from './formElements.json' assert {type: 'json'};

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

function createRadio(id, name, label) {
    const radioLabel = document.createElement('label');
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = name;
    radio.id = id;
    radioLabel.appendChild(radio);
    radioLabel.appendChild(document.createTextNode(label));
    return radioLabel;
}

function createTextarea(id, placeholder) {
    const textarea = document.createElement('textarea');
    textarea.name = 'textarea';
    textarea.id = id;
    textarea.placeholder = placeholder;
    return textarea;
}

function createPage() {

    const form = createForm('principale');

    data.forEach(obj => {
        if (obj.type === "txtField") {
            form.appendChild(createTextField(obj.id, obj.placeholder, obj.required));
        }
        else if (obj.type === "check") {
            form.appendChild(createCheckbox(obj.id, obj.label));
        }
        else if (obj.type === "radio") {
            form.appendChild(createRadio(obj.id, obj.name, obj.label));
        }
        else if (obj.type === "txtArea") {
            form.appendChild(createTextarea(obj.id, obj.placeholder));
        }
    });

}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createPage);
} else {
    createPage();
}