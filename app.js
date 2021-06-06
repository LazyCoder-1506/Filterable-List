const search_input = document.getElementById('search');

search_input.addEventListener('keyup', () => {
  const search_val = search_input.value;
  matchSearch(search_val);
});

function matchSearch(search_val) {
  const list = document.querySelectorAll('.collection-item');
  for (let i = 0; i < list.length; i++) {
    if (list[i].innerHTML.toUpperCase().indexOf(search_val.toUpperCase()) > -1) {
      list[i].style.display = '';
    }
    else {
      list[i].style.display = 'none';
    }
  }
}