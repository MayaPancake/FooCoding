
const data = {
  books: {
    2009: {
      title: 'the_alchemist',
      author: 'paulo_coelho',
      language: ['english', 'swedish'],
      img: 'https://prodimage.images-bn.com/pimages/9780062024329_p0_v1_s550x406.jpg'
    },
    2010: {
      title: 'song_of_solomon',
      author: 'toni_morrison',
      language: ['english', 'swedish'],
      img: 'https://2.bp.blogspot.com/-I-QgUXBjPxo/WIZVJIcfW-I/AAAAAAAAPGw/3EVkuUHZ2soWKDysNOOxFQOrkacFG0z6gCLcB/s1600/song%2Bof%2Bsolomon.jpeg'
    },
    2011: {
      title: 'the_shadow_of_the_wind',
      author: 'carlos_ruiz_zafon',
      language: ['english', 'swedish'],
      img: 'https://images-na.ssl-images-amazon.com/images/I/51ARU2d04fL._SY445_QL70_.jpg'
    },
    2012: {
      title: 'the_lord_of_the_rings',
      author: 'j_r_r_tolkien',
      language: ['english', 'swedish'],
      img: 'http://image.tmdb.org/t/p/original/ef2J0vkz11jNpDXqGY6aWpzuXDH.jpg'
    },
    2013: {
      title: 'don_quixote',
      author: 'miguel_de_cervantes',
      language: ['english', 'swedish'],
      img: 'https://pictures.abebooks.com/MROBERTSANDBOOKS/md/md21675192862.jpg'
    },
    2014: {
      title: 'the_golden_compass',
      author: 'philip_pullman',
      language: ['english', 'swedish'],
      img: 'http://www.toonopolis.com/wp-content/uploads/2017/10/516uOIGTJfL._SX330_BO1204203200_.jpg'
    },
    2015: {
      title: 'catch-22',
      author: 'joseph_heller',
      language: ['english', 'swedish'],
      img: 'https://s3-us-west-2.amazonaws.com/tabs.web.media/c/c/ccin/ccin-square-orig.jpg'
    },
    2016: {
      title: '1984',
      author: 'george_orwell',
      language: ['english', 'swedish'],
      img: 'https://hardakh.files.wordpress.com/2013/02/poster_1984_lrg.jpg?w=416'
    },
    2017: {
      title: 'the_little_women',
      author: 'louisa_may_alcott',
      language: ['english', 'swedish'],
      img: 'https://feministclassics.files.wordpress.com/2012/07/jw_smith_pix_bookcover.jpg'
    },
    2018: {
      title: 'the_help',
      author: 'kathryn_Stockett',
      language: ['english', 'swedish'],
      img: 'http://img2.imagesbn.com/p/9781440697661_p0_v2_s260x420.JPG'
    }
  }
};

const booksId = Object.keys(data.books);
const bookListArray = booksId.map(bookId => {
  const book = data.books[bookId];
  book.id = bookId;
  return book;

})
console.log(bookListArray);

const header = document.getElementById('title');
const h1 = document.createElement('h1')

h1.innerText = 'BOOK LISTS'

header.appendChild(h1)


bookListArray.forEach(book => {
  const mainDiv = document.createElement('div')
  const ul = document.createElement('ul')
  const li = document.createElement('li')
  const div = document.createElement('div')
  const h2 = document.createElement('h2')
  const h3 = document.createElement('h3')
  const h5 = document.createElement('h5')
  const p = document.createElement('p')
  const img = document.createElement('img')

  mainDiv.classList.add('main-div')


  const year = document.createTextNode(book.id);
  const bookName = document.createTextNode(book.title);
  const author = document.createTextNode(book.author)
  const language = document.createTextNode(book.language);

  img.src = book.img;
  img.style.height = '450px';

 
  h5.appendChild(author)
  h3.appendChild(bookName)
  p.appendChild(language)
  h2.appendChild(year)


  div.appendChild(img)
  div.appendChild(h2)
  div.appendChild(h3)
  div.appendChild(h5)
  div.appendChild(p)

  li.appendChild(div);
  ul.appendChild(li);
  mainDiv.appendChild(ul)

  main.appendChild(mainDiv)
 
})




// const createUl = (bookListArray) => {
//   const ul = document.createElement('ul')
//   bookListArray.forEach(book => {
//     const li = document.createElement('li')
//     const text = document.createTextNode(book.title)
//     li.appendChild(text)
//     ul.appendChild(li)
//   })

//   return ul
// }
// const bookByAuthor = Object.keys(book.author);
// console.log(bookByAuthor);
// const ul = document.createElement('ul')
// const makeHtmlList = bookByAuthor.map(author => {
//   const li = document.createElement('li')
//   const text = document.createTextNode(author.name)
//   li.appendChild(text)

//   ul.appendChild(li)
//   ul.appendChild(createUl(author.books))
// })

// document.body.appendChild(ul)

/*const addUl = (bookList) => {
  const ul = document.createElement('ul');
  const li = document.createElement('li');
  const text = document.createTextNode(bookList.id)

}
*/
/*window.onload = obj;
$.each(obj, function(key, value) {
  console.log(key);
  let item =
    '<li>' +
    '<p class="item-year">Year: ' +
    key +
    '</p>' +
    '<p class="item-title">Title: ' +
    value.title +
    '</p>' +
    '<p class="item-author">Author: ' +
    value.author +
    '</p>' +
    '<p class="item-language">Language: ' +
    value.language +
    '</p>' +
    '</li>';
  $('#books').append(item);
});

var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'images/img/Splash_image1.jpg';

imgArray[1] = new Image();
imgArray[1].src = 'images/img/Splash_image2.jpg'

imgArray[5] = new Image();
imgArray[5].src = 'images/img/Splash_image6.jpg';


function nextImage(element) {
  var img = document.getElementById(element);

  for (var i = 0; i < imgArray.length; i++) {
    if (imgArray[i].src == img.src) {
      // << check this
      if (i === imgArray.length) {
        document.getElementById(element).src = imgArray[0].src;
        break;
      }
      document.getElementById(element).src = imgArray[i + 1].src;
      break;
    }
  }
}  */

/*const booksIRead = [
  "the_alchemist",
  "song_of_solomon",
  "the_shadow_of_the_wind",
  "the_lord_of_the_rings",
  "don_quixote",
  "the_golden_compass",
  "catch-22",
  "1984",
  "the_little_women",
  "the_help"
];
window.onload = generateList;

function generateList() {
  const newList = document.createElement("ul");

  for (let i = 0; i < booksIRead.length; i++) {
    const book = booksIRead[i];
    newList.innerHTML += `<li>${book}</li>`;
  }
  document.body.append(newList);
}
document.body.append(generateList()) */