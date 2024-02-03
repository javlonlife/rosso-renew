let elTemplate = document.querySelector("#js-template").content;
let elCard = document.querySelector("#js-card").content;
let elCardHtml = document.querySelector(".swipe-list");

let elSummaryTemplate = document.querySelector("#js-summary").content;

function renderItem (array, node) {
    node.innerHTML = '';
    array.forEach((item) => {
        let newItemTemplate = elTemplate.cloneNode(true);
        newItemTemplate.querySelector(".temp__img").src = item.img ? item.img : './images/anonim.jpeg';
        newItemTemplate.querySelector(".temp__name").textContent = item.name ;
        newItemTemplate.querySelector(".temp__name").href = item.link;
        newItemTemplate.querySelector(".temp__position").textContent = item.job;
        node.append(newItemTemplate)
    })
}

function renderCard (array, node) {
  node.innerHTML = '';
  array.forEach((item) => {
      let newItemCard = elCard.cloneNode(true);
      newItemCard.querySelector(".swipe__img").src = item.img ? item.img : './images/televizor.jpg';
      node.append(newItemCard)
  })
}

renderCard(cardImg, elCardHtml);

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

function renderSummary (array, node) {
    node.innerHTML = '';
    array.forEach((item) => {
        let newSummaryTemplate = elSummaryTemplate.cloneNode(true);
        newSummaryTemplate.querySelector(".temp__img").src = item.img ? item.img : './images/anonim.jpeg';
        newSummaryTemplate.querySelector(".temp__name").textContent = item.name;
        newSummaryTemplate.querySelector(".temp__name").href = item.link;
        newSummaryTemplate.querySelector(".temp__position").textContent = item.job;

        node.append(newSummaryTemplate)
    })
}

let elMainDepartmentList = document.querySelector(".main-department");

renderItem(mainDepartmentArr, elMainDepartmentList);

let elCpoDep = document.querySelector(".cpo");
let elCfoDep = document.querySelector(".cfo");
let elCco1Dep = document.querySelector(".cco1");
let elCco2Dep = document.querySelector(".cco2");
let elOkkDep = document.querySelector(".okk");
let elDslDep = document.querySelector(".dsl");
let elOpoDep = document.querySelector(".opo");
let elSbezDep = document.querySelector(".sbez");
let elSvidDep = document.querySelector(".svid");
let elOupDep = document.querySelector(".oup");
let elYuristDep = document.querySelector(".yurist");
let elAxoDep = document.querySelector(".axo");

renderSummary(cpoDepartmentArr, elCpoDep);
renderSummary(cfoDepartmentArr, elCfoDep);
renderSummary(ccoDepartmentArr1, elCco1Dep);
renderSummary(ccoDepartmentArr2, elCco2Dep);
renderSummary(okkDepartmentArr, elOkkDep);
renderSummary(dslDepartmentArr, elDslDep);
renderSummary(opoDepartmentArr, elOpoDep);
renderSummary(sbezDepartmentArr, elSbezDep);
renderSummary(svidDepartmentArr, elSvidDep);
renderSummary(oupDepartmentArr, elOupDep);
renderSummary(yuristDepartmentArr, elYuristDep);
renderSummary(axoDepartmentArr, elAxoDep);