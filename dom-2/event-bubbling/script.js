const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
const btn = document.getElementById('btn');

outer.addEventListener('click', () => {
    alert('outer clicked');
});

inner.addEventListener('click', () => {
    alert('inner clicked');
});

btn.addEventListener('click', (event) => {
    alert('button clicked');
});