// portfolio item filter
const filterContainer = document.querySelector(".portfolio-filter");
const filterBtn = filterContainer.children;

const portfolioItem = document.querySelectorAll('.portfolio-item');

 
    for (let i = 0; i < filterBtn.length; i++) {
        filterBtn[i].addEventListener('click', function(){
            filterContainer.querySelector('.active').classList.remove('active');
            this.classList.add('active');

            const filteValue = this.getAttribute('data-filter');

            for (let n = 0; n < portfolioItem.length; n++) {
                if (filteValue === portfolioItem[n].getAttribute('data-category')) {
                    portfolioItem[n].classList.remove('hide');
                    portfolioItem[n].classList.add('show');
                } else {
                    portfolioItem[n].classList.remove('show');
                    portfolioItem[n].classList.add('hide');
                }
                if (filteValue === 'all') {
                    portfolioItem[n].classList.remove('hide');
                    portfolioItem[n].classList.add('show');
                }
            }
        })

    }


// portfolio lightbox
const lightBox = document.querySelector('.lightbox');
const lightBoxClose = lightBox.querySelector('.lightbox-close');
const lightBoxImg = lightBox.querySelector('.lightbox-img img');
const lightBoxText = lightBox.querySelector('.caption-text');
const CaptionCounter = lightBox.querySelector('.caption-counter');

let itemIndex = 0;

    for (let k = 0; k < portfolioItem.length; k++) {
        portfolioItem[k].addEventListener('click', function(){
            itemIndex = k;
            changeItem()
            toggleLIghtBox()
        })
    }

    function nextItem() {
        if (itemIndex === portfolioItem.length - 1) {
            itemIndex = 0;
        } else {
            itemIndex++
        }
        changeItem()
    }

    function privItem() {
        if (itemIndex === 0) {
            itemIndex = portfolioItem.length - 1;
        } else {
            itemIndex--
        }
        changeItem()
    }

    function toggleLIghtBox() {
        lightBox.classList.toggle('open');
    }

    function changeItem() {
        imgSrc = portfolioItem[itemIndex].querySelector('.portfolio-img img').getAttribute('src');
        lightBoxImg.src = imgSrc;
        lightBoxText.innerHTML = portfolioItem[itemIndex].querySelector('h4').innerHTML;
        CaptionCounter.innerHTML = (itemIndex + 1) + ' of ' + portfolioItem.length;
    }

    // close lightbox
    lightBox.addEventListener('click', function(event){
        if (event.target === lightBoxClose || event.target === lightBox) {
            toggleLIghtBox()
        }
    })


// Navbar active

const navBar = document.querySelector('.navbar');
const navList = navBar.querySelectorAll('li');
const allSection = document.querySelectorAll('.section');

for (let n = 0; n < navList.length; n++) {
    const a = navList[n].querySelector('a');
    a.addEventListener('click', function() {
        for (let i = 0; i < allSection.length; i++) {
            allSection[i].classList.remove('back-section');
        }
        for (let p = 0; p < navList.length; p++) {
            // Add back-section class
            if (navList[p].querySelector('a').classList.contains('active')) {
                allSection[p].classList.add('back-section');
            }
            navList[p].querySelector('a').classList.remove('active');
        }
        a.classList.add('active');

        showSection(a);
    })
}

function showSection(element) {
    const target = element.getAttribute('href').split('#')[1];
    
    for (i = 0; i < allSection.length; i++) {
        allSection[i].classList.remove('active');
    }
    document.querySelector('#' + target).classList.add('active');
}