let fourthNavBtns = document.querySelectorAll('.fourthNavBtn');

function btnSwitch(){
    fourthNavBtns.forEach(btn => {
        btn.addEventListener('click', ()=>{
            fourthNavBtns.forEach(elem => elem.classList.remove('activeBtn'));
            btn.classList.add('activeBtn');
        })
    })
}

function switchTab(){
    document.addEventListener('click',(e)=>{
        let target = e.target.dataset.position;
    
        if(target){
            let activatedElem = document.getElementById(target);
            let contentTabs = document.querySelectorAll('.contentTab');
    
            contentTabs.forEach(elem => elem.classList.remove('activeTab'));
            activatedElem.classList.add('activeTab');
    
        }
    
    })
}

function fillTheSkill(){
    const skillBars = document.querySelectorAll('.skillFill');

    const animateBars = () => {
        skillBars.forEach((bar) => {
            let barPosition = bar.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
        
            if(barPosition > windowHeight){
                let fillWidth = bar.getAttribute('data-fill');
                bar.style.width = `${fillWidth}%`;
                bar.style.transition = `1.5s all ease`;
            }

        })
    }

    window.addEventListener('scroll', animateBars);
}

fillTheSkill()
btnSwitch();
switchTab();