
export default function display(...text) {
    const content = document.createElement('p');
    console.log(text)
    content.textContent = text;
    document.querySelector('body').appendChild(content);
}


