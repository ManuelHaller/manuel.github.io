<h1>Alben <input id="search" type="text" placeholder="Search"/></h1>
$(document).ready(function() {
 $("#search").keyup(function() {
 ...
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
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.slim.min.js"
integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8="
crossorigin="anonymous">
</script>
<script src="index.js"></script>
  <body>
 <div class="pagecontent">
 <h1>Albums <input id="search" type="text" placeholder="Search"/></h1>
 <div class="line"></div>
 <div class="album">
…
 </div>
 <div class="album">
…
 </div>
 …
 </div>
</body>
