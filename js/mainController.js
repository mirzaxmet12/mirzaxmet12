
const URL = 'https://dummyapi.io/data/v1/post';
const ID = '64a4468b8241ec63fd76f632';

let postSlider = async (url, id) => {
  let response = await fetch(url, { headers: { 'app-id': id } });
  response = await response.json();
  let box = document.querySelector('.box');

  box.insertAdjacentHTML('beforeend',
    `<div class="swiper  effect="cards" grab-cursor="true"">
            <div class="swiper-wrapper"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    
    `);
  let boxswipper = document.querySelector('.swiper-wrapper')
  response.data.forEach(post => {
    boxswipper.insertAdjacentHTML("beforeend",
      ` <div class="swiper-slide">
            <div class=box-item >
                <div class=box-image >
                    <img src='${post.image}' class=box-image_el ></img>
                </div>
                <div class="box-item-text">${post.text}</div>
            </div>
        </div>`
    );
  });

  var swiper = new Swiper(".swiper", {
    navigation: {
      effect: "cards",
      grabCursor: true,
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

// echo "# mirzaxmet12" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/mirzaxmet12/mirzaxmet12.git
// git push -u origin main

postSlider(URL, ID)

