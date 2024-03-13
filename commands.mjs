function getMax(arr, compare) {
  let max = arr[0];
  let i = 1;

  while (i < arr.length) {
    if (compare(arr[i], max) > 0) {
      max = arr[i];
    }
    i++;
  }

  return max;
}

function getMin(arr, compare) {
  let min = arr[0];
  let i = 1;

  while (i < arr.length) {
    if (compare(arr[i], min) < 0) {
      min = arr[i];
    }
    i++;
  }

  return min;
}

function search(arr, condition) {
  for (const item of arr) {
    if (condition(item)) {
      return item;
    }
  }
  // optional
  return null;
}


function transform(arr, transformer) {
  return []
}

transform([1, 2, 3], (num) => num * 2);
// [2, 4, 6]

function searchByKeyValue(arr, key, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === value) {
      return arr[i];
    }
  }
}

function compareByGenres(album1, album2) {
  const n1 = album1.genres.length;
  const n2 = album2.genres.length;
  return n1 - n2;
}

function compareBySale(a1, a2) {
  return a1.sale - a2.sale;
}

export function getAlbumWithMostOfGenres(albums) {
  const mostOfGenres = getMax(albums, compareByGenres);
  console.log("Most of genres", mostOfGenres.title);
}

export function getAlbumWithTeMostOfSale(albums) {
  const mostOfSale = getMax(albums, compareBySale);
  console.log("Most of sale", mostOfSale.title);
}

export function getAlbumWithFewestGenres(albums) {
  let minOfGenres = getMin(albums, compareByGenres);
  console.log("Fewes genres", minOfGenres.title);
}

export function getAlbumWithYearOf(albums, byYear) {
  const album = search(albums, function (album) {
    return album.year === byYear;
  });
  console.log("By Year", album.title);
}

export function getAlbumByArtist(albums, artist) {
  const found = search(albums, function (album) {
    return album.artist === artist;
  });
  console.log("By Artist", found.title);
}

export function getAlbumByTitle(albums, title) {
  const found = search(albums, (album) => album.title === title);
  console.log("By Tilte", found.title);
}

export function getAlbumByGenre(albums, byGenre) {
  const album = search(albums, function (album) {
    return album.genres.includes(byGenre);
  });
  console.log("By Genre", album.title);
}
