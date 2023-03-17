const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

const maxBox = 12;

const generatePallete = () => {
    container.innerHTML = '';
    for (let i = 0; i < maxBox; i++) {
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, '0')}`;

        const color = document.createElement('li');
        color.classList.add('color');
        color.innerHTML = `<div class="color-box" style="background: ${randomHex}"></div>
                <span class="hex-value">${randomHex}</span>`;

        color.addEventListener('click', () => copyColor(color, randomHex));

        container.appendChild(color);
    }
};

generatePallete();

const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector('.hex-value');
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerText = 'Copid';
        setTimeout(() => (colorElement.innerText = hexVal), 1000);
    });
};

btn.addEventListener('click', generatePallete);
