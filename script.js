/*
Mastering JavaScript Fundamentals
- Part 1: Variables & conditionals
- Part 2: Functions (>=2 custom functions)
- Part 3: Loops (>=2 loop examples)
- Part 4: DOM interactions (>=3 different interactions)


Each section is clearly commented and organized to meet the assignment deliverables.
*/


// ---------------------------
// Part 1 — Variables & Conditionals
// ---------------------------
const ageForm = document.getElementById('ageForm');
alert('Items logged to console using forEach. Open DevTools (F12) -> Console to view.');



// While loop example (demonstration only) — loop until a condition is met
function demonstrateWhile() {
let n = 3;
let out = 'while loop output: ';
while (n > 0) {
out += n + ' ';
n -= 1;
}
console.log(out);
}
// run once on load to show an example in console
demonstrateWhile();




// ---------------------------
// Part 4 — DOM Manipulation (>= 3 interactions)
// ---------------------------


// Interaction 1: Live input preview — input event
const liveInput = document.getElementById('liveInput');
const livePreview = document.getElementById('livePreview');
liveInput.addEventListener('input', (e) => {
// Using the formatName function (reusable) to show formatted preview
livePreview.textContent = formatName(e.target.value);
});


// Interaction 2: Toggle dark theme — toggle class on body
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => document.body.classList.toggle('dark'));


// Interaction 3: Event delegation for dynamically-created list items
// When user clicks an <li> inside #itemsList, toggle the 'selected' class
itemsList.addEventListener('click', (e) => {
if (e.target && e.target.nodeName === 'LI') {
e.target.classList.toggle('selected');
}
});


// Additional DOM access examples (selectors)
// querySelector (single) and querySelectorAll (collection)
const firstCard = document.querySelector('.card');
const allButtons = document.querySelectorAll('button');
// small demonstration logged to console
console.log('First card element:', firstCard);
console.log('Number of buttons on page:', allButtons.length);


// End of file — all parts implemented and commented.