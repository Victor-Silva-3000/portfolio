var skills_tab_content = document.getElementById('skills')
var experience_tab_content = document.getElementById('experience')
var education_tab_content = document.getElementById('education')


function openTab(ele, tab){
    switch (tab) {
        case 'skills':
            document.getElementsByClassName('active-link')[0].classList.remove('active-link') 
            document.getElementsByClassName('active-tab')[0].classList.remove('active-tab') 
            skills_tab_content.classList.add('active-tab')
            ele.classList.add('active-link')

            break;
        case 'experience':
            document.getElementsByClassName('active-link')[0].classList.remove('active-link') 
            document.getElementsByClassName('active-tab')[0].classList.remove('active-tab') 
            experience_tab_content.classList.add('active-tab')
            ele.classList.add('active-link')
            
            break;
        case 'education':
            document.getElementsByClassName('active-link')[0].classList.remove('active-link') 
            document.getElementsByClassName('active-tab')[0].classList.remove('active-tab') 
            education_tab_content.classList.add('active-tab')
            ele.classList.add('active-link')
            
            break;
    
        default:
            break;
    }
}