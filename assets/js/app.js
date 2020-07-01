let forUs = document.querySelector('#forUs'),
  events = document.querySelector('#events'),
  blog = document.querySelector('#blog'),
  academy = document.querySelector('#academy'),
  secNav = document.querySelectorAll('.navbar-nav .blog-nav'),
  allTags = document.querySelector('.navbar-nav .blog-nav.all'),
  spaceFamily = document.querySelector('.blog-last'),
  navLastDesk = document.querySelector('ul.nav.navbar-nav.navbar-right .last.desk'),
  navLastMob = document.querySelector('ul.nav.navbar-nav.navbar-right .last.mob'),
  plusIcon = document.querySelector('.bt .plus_icon'),
  caracters = document.querySelector('.msg-strings'),
  caractersC = document.querySelector('.msg-stringsC'),
  textarea = document.querySelector('#textarea'),
  textareaC = document.querySelector('#textareaC'),
  nextBtn = document.querySelector('#nextBtn'),
  prevBtn = document.querySelector('#prevBtn'),
  calendar = document.querySelector('#calendar-body'),
  monthAndYear = document.querySelector('#montyAndYear'),
  hero = document.querySelector("#home-header"),
  slider = document.querySelectorAll('.carousel-img-1, .carousel-img-2, .carousel-img-3, .carousel-img-4, .carousel-img-5, .carousel-img-6, .carousel-img-7, .carousel-img-8, .carousel-img-9'),
  root = document.getElementById('portrait'),
  elements = document.getElementsByClassName('typewrite'),
  mediaText = window.matchMedia("(max-width: 767px)"),
  main = document.querySelectorAll('.blog-main'),
  sub = document.querySelectorAll('.blog-sub'),
  allLinks = document.querySelectorAll('.first .navbar-nav .home-nav a'),
  allLinksSec = document.querySelectorAll('.navbar-nav.second-li .blog-nav a'),
  nameInput = document.querySelector('#name'),
  telInput = document.querySelector('#telephone'),
  nameInputC = document.querySelector('#nameC'),
  telInputC = document.querySelector('#telephoneC'),
  nameValidC = document.querySelector('.nameValidC'),
  telValidC = document.querySelector('.telValidC'),
  nameValid = document.querySelector('.nameValid'),
  telValid = document.querySelector('.telValid')


function renderCard(obj) {
  return `
    <div class="col-md-4 col-sm-6 col-xs-12">
    <div class='cards'>
    <a href="${obj.link}" class="thumbnail card__sides card__side--front" ${obj.modal}>   
        <img src="${obj.image}" alt="edukacija" class="img-responsive">
        <div class="caption home-caption">
            <h4 class='h4-style mx-2'>${obj.title}</h4>
            <div class="caption-align">
            <p>
            ${obj.text}
            </p>
            <div class="icon-align">
            <svg class="arrow_circule__icon"><use xlink:href="./assets/icons/arrow_circule_right.svg#Capa_1"></use></svg>
            </div>
        </div>
        </div> 
        </a>
        <div class='card__sides card__side--back'>
        <div class='card-btn-box'>
          <a href= "${obj.link}" class="bc btn-black line-none" ${obj.modal}><svg class="arrow_icon">
             <use xlink:href="./assets/icons/right-arrow.svg#Layer"></use>
           </svg>&nbsp;&nbsp;ПОВЕЌЕ</a>
        </div>
        </div>
        </div>
    </div>
    `;
}

function renderCardBlock(obj) {
  return `
    <div class="col-md-4 col-sm-6 col-xs-12">
    <a href="${obj.link}" class="thumbnail"> 
    <div class="card">
    <div class="card1">
        <img src="${obj.image}" alt="edukacija" class="img-responsive">
        <div class="caption block-caption">
        <h4 class='h4-style mx-2'>${obj.title}</h4>
            <div class="caption-align">
                <p>
                    ${obj.text}
                </p>
                <div class="card-bottom">
                    <div class="bt-tag">
                        <button class="btn-round line-none">${obj.tag}</button>
                    </div>
                    <div class="blog-icon">
                        <svg class="arrow_circule__icon">
                            <use xlink:href="./assets/icons/arrow_circule_right.svg#Capa_1"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    </a>
</div>
    `;
}

function renderCardAcademy(obj) {
  return `
    <div class="col-md-4 col-sm-6 col-xs-12 mb-3">
        <a href="${obj.link}" class="link-academy">
            <div class="bg-card ${obj.background}"></div>
            <div class="heading-card">
                <h3 class="h3-style">${obj.title}</h3>
            </div>
            <div class="content-card">
                <div class="content-tags">
                    <svg class="tags_icon"><use xlink:href="./assets/icons/people.svg#Layer"></use></svg>
                    <p>${obj.space}</p>
                </div>
                <div class="content-tags">
                    <svg class="tags_icon"><use xlink:href="./assets/icons/calendar.svg#Layer"></use></svg>
                    <p>${obj.deadline}</p>
                </div>
                <div class="content-tags">
                    <svg class="tags_icon"><use xlink:href="./assets/icons/clock.svg#Layer"></use></svg>
                    <p>${obj.time}</p>
                </div>
                <div class="content-tags">
                    <svg class="tags_icon"><use xlink:href="./assets/icons/partner.svg#Layer"></use></svg>
                    <p>${obj.partners}</p>
                </div>
                <aside>
                    <p>Повеќе</p>
                    <svg class="tags_icon"><use xlink:href="./assets/icons/more_arrow.svg#Layer"></use></svg>
                </aside>
            </div>
        </a>
    </div>
    `;
}

if (academy) {data.academy.forEach(el => (academy.innerHTML += renderCardAcademy(el)))};
if (forUs) {data.forUs.forEach(el => (forUs.innerHTML += renderCard(el)))};
if (events) {data.events.forEach(el => (events.innerHTML += renderCard(el)))};
if (blog) {data.blog.forEach(el => (blog.innerHTML += renderCardBlock(el)))};

//FILTERS
let tagList = data.blog.map(el => el.tag);
let filterTags = [...new Set(tagList)];

if(secNav){
  secNav.forEach(navLi =>
    navLi.addEventListener('click', function () {
      blog.innerHTML = '';
      filterTags.forEach(objTag => {
        if (navLi.textContent == objTag) {
          let dataObj = data.blog.filter(obj => obj.tag == objTag);
          dataObj.forEach(el => (blog.innerHTML += renderCardBlock(el)));
        }
      });
    })
  );
} 

let spaceAll = data.blog.filter(el =>
  el.title.split(' ').includes('#SpaceFamily')
);

if(spaceFamily) {
  spaceFamily.addEventListener('click', function () {
    spaceAll.forEach(el => (blog.innerHTML += renderCardBlock(el)));
  });
}
  
if(allTags) {
  allTags.addEventListener('click', function () {
    data.blog.forEach(el => (blog.innerHTML += renderCardBlock(el)));
  });
}

//CALENDAR
let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let months = [
  'Јануари',
  'Фебруари',
  'Март',
  'Април',
  'Мај',
  'Јуни',
  'Јули',
  'Август',
  'Септември',
  'Октомври',
  'Ноември',
  'Декември'
];

if (nextBtn) {nextBtn.addEventListener('click', next)};
if (prevBtn) {prevBtn.addEventListener('click', prev)};

renderCalendar(currentMonth, currentYear, data.eventsCalendar);

function next() {
  currentYear = currentMonth == 11 ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  renderCalendar(currentMonth, currentYear, data.eventsCalendar);
}

function prev() {
  currentYear = currentMonth == 0 ? currentYear - 1 : currentYear;
  currentMonth = currentMonth == 0 ? 11 : currentMonth - 1;
  renderCalendar(currentMonth, currentYear, data.eventsCalendar);
}

function renderCalendar(month, year, events) {
  let renderToday = new Date();

  let firstDay = new Date(year, month).getDay();
  let daysInMonth = 32 - new Date(year, month, 32).getDate();

  if (monthAndYear) {monthAndYear.innerHTML = `${months[month]} ${year}`};

  if (calendar) {calendar.innerHTML = ''};

  let thisYearAndMonthEvents = events.filter(
    event => event.date.getFullYear() == year && event.date.getMonth() == month
  );

  let date = 1;
  for (let i = 0; i < 6; i++) {
    let week = document.createElement('div');
    week.classList.add('calendar-week');

    for (let j = 0; j < 7; j++) {
      if (i == 0 && j < firstDay) {
        let emptyCell = document.createElement('div');
        emptyCell.classList.add('empty-cell');
        week.appendChild(emptyCell);
      } else if (date <= daysInMonth) {
        let dayCell = document.createElement('div');
        dayCell.classList.add('day-cell');
        if (
          date == renderToday.getDate() &&
          month == renderToday.getMonth() &&
          year == renderToday.getFullYear()
        ) {
          dayCell.classList.add('today');
        }

        let dayCellHTML = '';

        if (thisYearAndMonthEvents.length) {
          let todayEvent = thisYearAndMonthEvents.filter(
            event => event.date.getDate() == date
          );

          if (todayEvent.length) {
            dayCell.classList.add('event-day');

            todayEvent.forEach(ev => {
              dayCellHTML += `<div class="event" style="border-left:4px solid ${ev.bgColor}"><div>${ev.title}</div><div>${ev.time}</div><div>${ev.day}</div></div><span>${date}</span>`;
              dayCell.style.backgroundColor = ev.bgColor;
              dayCell.style.color = ev.color;
            });
          }
        }

        dayCell.innerHTML =
          dayCellHTML == '' ? `<span>${date}</span>` : dayCellHTML;
        week.appendChild(dayCell);
        date++;
      } else if (date > daysInMonth) {
        let emptyCell = document.createElement('div');
        emptyCell.classList.add('empty-cell');
        week.appendChild(emptyCell);
      }
    }
    if (calendar) {calendar.appendChild(week)};
  }
}

//TEXTAREA LETTERS LIMIT
if (textarea) {
  textarea.addEventListener('keyup', function () {
    caracters.textContent = 300 - textarea.value.length;
  });
}

if (textareaC) {
  textareaC.addEventListener('keyup', function () {
    caractersC.textContent = 300 - textareaC.value.length;
  });
}

//HERO ANIMATION
document.addEventListener("mousemove", function (e) { if (hero) parallax(e, hero) });
slider.forEach(image => image.addEventListener("mousemove", function (e) { if (slider) parallax(e, image) }))

function parallax(e, img) {
  let _w = window.innerWidth / 2;
  let _h = window.innerHeight / 2;
  let _mouseX = e.clientX;
  let _mouseY = e.clientY;
  let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
  let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
  let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
  let x = `${_depth3}, ${_depth2}, ${_depth1}`;
  img.style.backgroundPosition = x;
}

//EVENT PICTURE
let mouse_monitor = function (e) {
  let x = e.clientX / innerWidth;
  let y = e.clientY / innerHeight;

  let move_x = (x > 0.5) ? '-30px' : '30px';
  let move_y = (y > 0.5) ? '-20px' : '20px';

  root.style.setProperty("--translate-x", move_x);
  root.style.setProperty("--translate-y", move_y);
}

if (root) {root.addEventListener("mousemove", mouse_monitor)};

//HEADER ANIMATION TYPING TEXT
let TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {

  let i = this.loopNum % this.toRotate.length;
  let fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap-type">' + this.txt + '</span>';

  let that = this;
  let delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  for (let i = 0; i < elements.length; i++) {
    let toRotate = elements[i].getAttribute('data-type');
    let period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
};

//FIXING BLOG HEADING
let mainText;
let subText;
let mainHead =Array.from(main).map(maintext => maintext.innerText)
let subHead = Array.from(sub).map(subtext => subtext.innerText)

let allText = mainHead.map((el, i) => {
  el = `${el} ${subHead[i]}`;
  return el
})

if(mediaText.matches) {
  main.forEach((el, i) => {
    el.innerText = allText[i];
  })
  sub.forEach(el => el.remove())
}

//NAV BORDER BOTTOM
allLinks.forEach(link => link.addEventListener('click', function() {
  allLinks.forEach(el => {
    el.classList.remove('btn-border')
  })
  link.classList.add('btn-border')
}))

allLinksSec.forEach(link => link.addEventListener('click', function() {
  allLinksSec.forEach(el => {
    el.classList.remove('btn-border-black')
  })
  link.classList.add('btn-border-black')
}));

//FORM VALIDATION
function validateInput(nameI, telI, nValid, tValid) {
  if(nameI.value == '' ) {
    nValid.style.display = 'flex'
  } else {
    nValid.style.display = 'none'
  }
  if (telI.value == '' ){
    tValid.style.display = 'flex'
  } else {
    tValid.style.display = 'none'
  }
}

document.addEventListener('click', function(e) {
  if(e.target.matches('.validation')) {
    validateInput(nameInput, telInput, nameValid, telValid)
  }
})

document.addEventListener('click', function(e) {
  if(e.target.matches('.validationC')) {
    validateInput(nameInputC, telInputC, nameValidC, telValidC)
  }
})

if(nameInput) {
  nameInput.addEventListener('keyup', function(e) {
    nameValid.style.display = 'none'
  })
}

if(nameInputC) {
  nameInputC.addEventListener('keyup', function(e) {
    nameValidC.style.display = 'none'
  })
}

if(telInput) {
  telInput.addEventListener('keyup', function(e) {
    telValid.style.display = 'none'
  })
}

if(telInputC) {
  telInputC.addEventListener('keyup', function(e) {
    telValidC.style.display = 'none'
  })
}