interface Album {
    artist_name: string;
    album_title: string;
    tracks?: number; // Optional tracks property
}

const make_album = (name: string, title: string, tracks?: number): Album => {
    const albumObj: Album = {
        artist_name: name,
        album_title: title,
    };
    if(tracks != undefined){
         albumObj.tracks = tracks;    
    }
    
    
    return albumObj;
}

const obj1 = make_album("artist1", "strings");
const obj2 = make_album("artist2", "JAL");
const obj3 = make_album("artist3", "Vital Signs", 2);

console.log(obj1);
console.log(obj2);
console.log(obj3);
