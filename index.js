<h1>Alben <input id="search" type="text" placeholder="Search"/></h1>
$(document).ready(function() {
$("#search").keyup(function() {
});
});
$(document).ready(function() {
$("#search").keyup(function() {
});
});
var albums = $(".album");
$(albums).show();
var searchTerm = $(this).val().toLocaleLowerCase()
albums.each(function(){
if($(this).text().toLocaleLowerCase().search(searchTerm) == -1) {
$(this).hide();
}
});
