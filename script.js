const mainFrame = document.getElementsByClassName('mainFrame');
const bigImage = document.getElementById('13');
const smallImages = document.getElementsByClassName('bottomButton');
const text = document.getElementsByClassName('mainImageText')[0];
const rightButton = document.getElementsByClassName('rightButton')[0];
const leftButton = document.getElementsByClassName('leftButton')[0];
const pointers = document.getElementsByClassName('pointer');
let viewingImage = 1;
const imagesCount = smallImages.length;
const headings = [
  'Crumpled papper',
  'Rails',
  'Beach',
  'Street',
  'Love',
  'Wheel',
  'Forest',
  'Strabby the killer'
]
const texts = [
  '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ."',
  '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.',
  'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi?',
  'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
  '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual , the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those. ',
  '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga',
  'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore.',
  'This is the Strabby. A little piece of shit with very sharp knife, that will stabb you like nothing!',
]

document.addEventListener('keydown', logKey);
updateBigImage();

function showPointer() {
  for ( let i = 0 ; i < pointers.length; i++) {
        pointers[i].setAttribute('style',`visibility: hidden`);
  }
  pointers[viewingImage-1].setAttribute('style','');
}

function logKey(e) {
  if (e.code == 'ArrowRight') {
    swapRight();
  } else if (e.code == 'ArrowLeft') {
    swapLeft();
  } else {}
}
function swapRight() {
  if (viewingImage >= imagesCount) {
    viewingImage = 1;
    updateBigImage();
  } else {
    viewingImage++;
    updateBigImage();
  }
}
function swapLeft() {
  if (viewingImage <= 1) {
    viewingImage = smallImages.length;
    updateBigImage();
  } else {
    viewingImage--;
    updateBigImage();
  }
}
function updateBigImage() {
  bigImage.innerHTML = `<img src="images/${viewingImage}.jpg" class="mainImage"><div class="mainImageText"><h1>${headings[viewingImage - 1]}</h1><p>${texts[viewingImage - 1]}</p></div>`;
  showPointer();
}

rightButton.onclick = function () {
  swapRight();
}
leftButton.onclick = function () {
  swapLeft();
}
smallImages[0].onclick = function () {
  viewingImage = 1;
  updateBigImage();
}
smallImages[1].onclick = function () {
  viewingImage = 2;
  updateBigImage();
}
smallImages[2].onclick = function () {
  viewingImage = 3;
  updateBigImage();
}
smallImages[3].onclick = function () {
  viewingImage = 4;
  updateBigImage();
}
smallImages[4].onclick = function () {
  viewingImage = 5;
  updateBigImage();
}
smallImages[5].onclick = function () {
  viewingImage = 6;
  updateBigImage();
}
smallImages[6].onclick = function () {
  viewingImage = 7;
  updateBigImage();
}
smallImages[7].onclick = function () {
  viewingImage = 8;
  updateBigImage();
}
