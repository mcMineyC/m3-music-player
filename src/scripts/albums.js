function getAlbums(){
    var albums = window.fetchedData.getAlbums();
    for (var x = 0; x < albums.length; x++) {
        // console.log(albums[x]["displayName"]);
        document.getElementById("content").innerHTML += '<m3-mediacard thingtype="album" thingid="'+albums[x]["id"]+'" image="'+window.prefs.getBackendUrl()+'/info/albums/' + albums[x]["id"] + '/image" text="' + albums[x]["displayName"] + '" onclick="albumClick(\'' + albums[x]["id"] + '\')"></m3-mediacard>';
    }
}
function getAlbumsByArtist(id){
    var albums = window.fetchedData.getAlbumsByArtist(id);
    for (var x = 0; x < albums.length; x++) {
        // console.log(albums[x]["displayName"]);
        document.getElementById("content").innerHTML += '<m3-mediacard thingtype="album" thingid="'+albums[x]["id"]+'" image="'+window.prefs.getBackendUrl()+'/info/albums/' + albums[x]["id"] + '/image" text="' + albums[x]["displayName"] + '" onclick="albumClick(\'' + albums[x]["id"] + '\')"></m3-mediacard>';
    }  
}
function getAlbumsBySameArtist(id){
    var albums = window.fetchedData.getAlbums();
    var artist = ""
    for (var x = 0; x < albums.length; x++) {
        if(albums[x]["artistId"] == id){
            artist = albums[x]["artistId"]
        }
    }
    getAlbumsByArtist(artist)
}