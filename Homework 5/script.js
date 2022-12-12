'use strict';

const arrayOfImages = [];
arrayOfImages.push('https://all-auto.org/wp-content/uploads/2018/10/Octavia-G-TEC-8-800x531.jpg');
arrayOfImages.push('https://klike.net/uploads/posts/2019-06/1560838551_1.jpg');
arrayOfImages.push('https://all-auto.org/wp-content/uploads/2018/11/Fiat-Toro-2-800x531.jpg');
arrayOfImages.push('https://auto.bigmir.net/i/52/42/01/8/5242018/6b6fef49df7c0c8abbe7caf149956b4b-quality_75Xresize_1Xallow_enlarge_0Xw_800Xh_0.jpg');
arrayOfImages.push('https://mc.today/wp-content/uploads/2022/02/image8.jpg');

const imgCards = document.querySelectorAll('.photo');

for(let i = 0; i < imgCards.length; i++){
    imgCards[i].setAttribute('src', arrayOfImages[i])
}

const largeImage = document.querySelector('#largeImg');
largeImage.setAttribute('src', arrayOfImages[4]);

function showThumbnail(newUrl) {
    largeImage.setAttribute('src', newUrl);
}

imgCards.forEach(card => card.addEventListener('mousedown', () => {
    let thumbnailUrl = card.getAttribute('src');
    showThumbnail(thumbnailUrl);
}))