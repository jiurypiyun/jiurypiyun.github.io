function Darkmode(){
    let light=document.getElementById('light');
    let circle=document.getElementById('circle');
    let body=document.getElementById('body');
    let socialmedia=document.getElementById('socialMedia');
    let name =document.getElementById('name');
    let skill=document.getElementById('skill');
    if (circle.className.includes('circleBlack')) {
        circle.className=circle.className.slice(0,circle.className.lastIndexOf(' circleBlack'));
        body.className=body.className.slice(0,body.className.lastIndexOf(' Darkmode'));
        light.className=light.className.slice(0,light.className.lastIndexOf(' dark'));
        socialmedia.className=socialmedia.className.slice(0,socialmedia.className.lastIndexOf(' SmDark'));
        name.className=name.className.slice(0,name.className.lastIndexOf(' namedark'));
        skill.className=skill.className.slice(0,skill.className.lastIndexOf(' namedark'));
        // darkmode.innerText="dark mode: off"
    }
    else{
        circle.className+=' circleBlack';
        body.className+=' Darkmode';
        light.className+=' dark';
        socialmedia.className+=' SmDark';
        name.className+=' namedark';
        skill.className+=' namedark';
        // darkmode.innerText="dark mode: on"
    }
}