const categories = document.querySelector('#categories');
const listItems = categories.children;
const length = listItems.length;
console.log(`Number of categories: ${length}`);

for(const list of listItems) {
    let title = list.querySelector('h2').textContent;
    let length = list.querySelector('ul').children.length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${length}`);
}