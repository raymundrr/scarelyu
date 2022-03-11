function show_more(event, id) {
    if (document.getElementById(id).classList.contains('h-100') == false) {
        document.getElementById(id).classList.add("h-100")
        event.target.innerHTML = "Show Less"
    } else {
        document.getElementById(id).classList.remove("h-100")
        event.target.innerHTML = "Show More"
    }
}
function linkActive(event) {
    var acat = document.getElementById("page-link-ul").getElementsByClassName('active')[0].classList.remove('active')
    event.target.parentElement.classList.add('active')
}
var index = 0
function nextPage() {
    var totalPages = document.getElementsByClassName('stories-container').length
    var currDisp = document.getElementsByClassName('stories-container')[index].style.display
    console.log(currDisp)
    document.getElementsByClassName('stories-container')[index].style.display = 'none';
    if (totalPages - 1 == index) {
        index = 0
    } else {
        index ++
    }
    document.getElementsByClassName('stories-container')[index].style.display = currDisp;
}

function prevPage() {
    var totalPages = document.getElementsByClassName('stories-container').length
    var currDisp = document.getElementsByClassName('stories-container')[index].style.display
    document.getElementsByClassName('stories-container')[index].style.display = 'none';
    if (index == 0) {
        index = totalPages -1 
    } else {
        index --
    }
    document.getElementsByClassName('stories-container')[index].style.display = currDisp;
}