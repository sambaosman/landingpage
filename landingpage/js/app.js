
///adding new class names
const section2 = document.getElementById('section2');
section2.className = 'non-active';
const section3 = document.getElementById('section3');
section3.className = 'non-active';
//create section
const createSection = document.createElement('section');
createSection.dataset.nav = 'Section 4';
createSection.id = 'section4';
createSection.className = 'non-active';
//creating the div inside the section
const createDiv = document.createElement('div');
createSection.appendChild(createDiv);
//creating the h2 inside the div
const createH2 = document.createElement('h2');
createDiv.appendChild(createH2);
createH2.textContent = 'Section 4';
createDiv.className = 'landing__container';
//creating the p element inside the div
const createPara = document.createElement('p');
createDiv.appendChild(createPara);
createPara.textContent = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';
const sectionParent = document.querySelector('main');
sectionParent.appendChild(createSection);

//Global variables
const navigation = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
console.log(sections);
const sectionsClasses = document.getElementsByClassName('your-active-class');

//building the nav bar
for (let i = 0; i <= sections.length - 1; i++) {
    const listElement = document.createElement('li');
    listElement.id = `list${i + 1}`;
    const anchor = document.createElement('a');
    anchor.className = "menu_link";
    anchor.textContent = `Section${i + 1} `;
    listElement.appendChild(anchor);
    navigation.appendChild(listElement);
}
//Scrolls to each section and makes it an active class once clicked
for (let i = 0; i <= sections.length - 1; i++) {
    let sectionID = document.getElementById(`section${i + 1}`);
    function classActive() {
        sectionID.classList.add('your-active-class');
        sectionID.classList.remove('non-active');
        console.log('active class added');
    }
    function classActiveRemove() {
        sectionID.classList.remove('your-active-class');
        console.log('class removed');
    }
    //event listener activated once clicked
    document.querySelector(`#list${i + 1}`).addEventListener('click', function () {
        console.log(`section${i + 1} has been clicked`);
        let active = document.querySelectorAll('.your-active-class'); //gets active in the moment
        if (active.length > 0) {
            //active[0] will always remove the 'your-active-class' because there is always only one
            active[0].classList.remove('your-active-class');
        }
        //scrolls to correct section
        document.querySelector(`#section${i + 1}`).scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (sectionID.className != 'your-active-class') {
            classActive();
        }
        else {
        }
    })
}