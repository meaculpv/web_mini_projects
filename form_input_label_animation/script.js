const labels = document.querySelectorAll('.form-control label');

let delay = 200;
labels.forEach(label => {
    // insert into DOM span tags with letters
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span>${letter}</span>`)
        .join('');
    delay += 100;
});