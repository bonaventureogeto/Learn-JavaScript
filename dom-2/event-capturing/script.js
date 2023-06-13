const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
const btn = document.getElementById('btn');

outer.addEventListener('click', () => {
    alert('outer', event.eventPhase);
}, true);

inner.addEventListener('click', () => {
    alert('inner', event.eventPhase);
}, true);

btn.addEventListener('click', () => {
    alert('button', event.eventPhase);
}, true);
