import Logo from './logo.png';
import Alarm from './alarm.png';
import Add from './add.png';
import SettingsIcon from './settings.png';
import Today from './today.png';
import Inbox from './inbox.png';
import Week from './thisWeek.png';

const initialLoad = () => {
    const body = document.querySelector('body');
    createHead(body);
    createNav(body);
    createDisplay(body);
    // createFoot(body);
}

const createHead = (div) => {
    const head = document.createElement('header');

    createLeftHead(head);

    const middle = document.createElement('div');
    head.appendChild(middle);

    createRightHead(head);

    div.appendChild(head);

}

const createLeftHead = (div) => {
    const left = document.createElement('div');
    const logo = new Image();
    logo.src = Logo;
    left.appendChild(logo);

    const logoText = document.createElement('h2');
    logoText.textContent = "To Do, Brute?"
    left.appendChild(logoText);

    div.appendChild(left);

}

const createRightHead = (div) => {
    const right = document.createElement('div');
    const rightButtons = document.createElement('ul');
    [Add, Alarm, SettingsIcon].forEach((icon) => {
        const currentItem = document.createElement('li');
        const currentIcon = new Image();
        currentIcon.src = icon;
        currentItem.appendChild(currentIcon);
        rightButtons.appendChild(currentItem);
    })

    right.appendChild(rightButtons);
    div.appendChild(right);

}

const createNav = (div) => {
    const projectBar = document.createElement('div');
    projectBar.classList.add('sidebar');
    createTemporalProjects(projectBar);
    createProjectsDiv(projectBar);
    div.appendChild(projectBar);


}


const createTemporalProjects = (div) => {
    const times = [[Inbox, 'All'], [Today, 'Today'], [Week, 'This week']]
    const temporalList = document.createElement('ul');
    times.forEach((item) => {
        const temporalItem = document.createElement('li');
        const temporalIcon = new Image();
        temporalIcon.src = item[0];
        const temporalText = document.createElement('span');
        temporalText.textContent = item[1];

        temporalItem.appendChild(temporalIcon);
        temporalItem.appendChild(temporalText);

        temporalList.appendChild(temporalItem);

    })

    div.appendChild(temporalList);

}

const createProjectsDiv = (div) => {
    const projectsDiv = document.createElement('div');
    
    const projectTitle = document.createElement('h3');
    projectTitle.textContent = 'Projects';
    projectsDiv.appendChild(projectTitle);

    const projectsList = document.createElement('ul');

    const addProjectButton = document.createElement('button');
    const addIcon = new Image();
    addIcon.src = Add;
    addProjectButton.appendChild(addIcon);
    const buttonText = document.createElement('span');
    buttonText.textContent = 'Add Project';
    addProjectButton.appendChild(buttonText);
    
    addProjectButton.classList.add('add-project-button')

    projectsDiv.appendChild(projectsList);

    projectsDiv.appendChild(addProjectButton);

    projectsDiv.classList.add('projects-container')
    
    div.appendChild(projectsDiv);


}

const createDisplay = (div) => {
    const display = document.createElement('div');
    display.classList.add('display');

    div.appendChild(display);
}


export { initialLoad };
