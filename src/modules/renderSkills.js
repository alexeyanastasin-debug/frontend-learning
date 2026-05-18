export function renderSkills(skillsArray, containerSelector) {
    const container = document.querySelector(containerSelector);
    if(!container) return;
        container.innerHtml = '';

    skillsArray.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        li.classList.add('skill-item');
        container.appendChild(li);
    });
    }
