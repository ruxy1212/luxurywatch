var days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
setInterval(() => {
    d= new Date();
    h1= d.getHours(); h2 = d.getMinutes();
    mt= (d.getMinutes()*6)+313;
    st= (d.getSeconds()*6)+153.4;
    hr= (30*h1)+(h2/2)+55;

    document.querySelector('.hr').style.transform = `rotate(${hr}deg)`;
    document.querySelector('.mt').style.transform = `rotate(${mt}deg)`;
    document.querySelector('.st').style.transform = `rotate(${st}deg)`;
    
    ht = d.getHours();
    var ti = (ht<12) ? "AM" : "PM";
    var tis = (ht>12) ? ht-12 : ht;
    tis = (tis == 0) ? 12 : tis; 

    document.querySelector('.sl text').innerHTML = (padUp(d.getMonth()+1,2))+"/"+d.getFullYear().toString().slice(2);
    document.querySelector('.yl text').innerHTML = days[d.getDay()];
    document.querySelectorAll('.cl text tspan')[0].innerHTML = padUp(tis,2); 
    document.querySelectorAll('.cl text tspan')[2].innerHTML = padUp(d.getMinutes(),2);
    document.querySelector('.cl.dl text').innerHTML = padUp(d.getSeconds(),2);
    document.querySelector('.sl.tl text').innerHTML = ti;


    function padUp(num, len) {
        return num.toString().padStart(len, '0');
    }
},1000);

var theme = document.querySelector('.switch');
const current = localStorage.getItem('theme');
if (current) {
    document.documentElement.setAttribute('data-theme', current);
    if (current === 'dark') {
        theme.classList.add('dark');
        theme.style.transform = `rotate(180deg)`;
    }
}
function themer() {
    if (theme.classList.contains('dark')) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        rotAni(theme, 180, false);
    }
    else {        
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        rotAni(theme, 180, true);
    }    
    theme.classList.toggle('dark');
    
}
theme.addEventListener('click', themer, false);

function rotAni(el,deg, clk){
    let id = null; 
    let pos = 0;
    clearInterval(id);
    id = setInterval(rot, 1.5);
    function rot() {
        if (pos > deg) {
            clearInterval(id);
        } else {
            if(clk == true){
                pos++; 
                theme.style.transform = `rotate(${pos}deg)`;
            }else{
                pos++; 
                theme.style.transform = `rotate(-${pos}deg)`;
            }
        }
    }
}