import Logo from './logo.png';
import Alarm from './alarm.png';
import Add from './add.png';
import SettingsIcon from './settings.png';

const initialLoad = () => {
    const body = document.querySelector('body');
    createHead(body);
    createNav(body);
    // createFoot(body);
}

const createHead = (div) => {
    const head = document.createElement('header');

    createLeftHead(head);
    createRightHead(head);

    div.appendChild(head);

}

const createLeftHead = (div) => {
    const left = document.createElement('div');
    const logo = new Image();
    logo.src = Logo;
    left.appendChild(logo);

    const logoText = document.createElement('span');
    logoText.textContent = "To Do, Brute?"
    left.appendChild(logoText);

    div.appendChild(left);

}

const createRightHead = (div) => {
    const right = document.createElement('div');
    const rightButtons = document.createElement('ul');
    [Add, Alarm, SettingsIcon].forEach((icon) => {
        const currentIcon = new Image();
        currentIcon.src = icon;
        rightButtons.appendChild(currentIcon);
    })

    right.appendChild(rightButtons);
    div.appendChild(right);

}

const createNav = (div) => {
    


}


export { initialLoad };
