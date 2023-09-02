const fav_places:string[] = ["b","z","c","f","a"];
console.log("original array:",fav_places);
 const ordered_array = fav_places.sort();
 console.log(ordered_array);
 
 console.log("original array:",fav_places);
 const revere_array = fav_places.sort().reverse();
 console.log(revere_array);
 console.log("original array:",fav_places);
 console.log("modified original array:",fav_places.sort().reverse());
 fav_places.sort();
 console.log("Alphabetical order:",  fav_places);
 console.log("reverse order:",  fav_places.sort().reverse());