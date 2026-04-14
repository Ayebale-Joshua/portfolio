const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme:dark)');

function handleThemeChange(e){
    const themeLink = document.getElementById('Theme-link');
    if (e.matches){
        themeLink.href = 'darktheme.css';
    }
    else{
        themeLink.href = 'style.css';
    }
}

//Watch for changes while the user is on the page
darkModeMediaQuery.addEventListener('change',handleThemeChange);

//run once on load
handleThemeChange(darkModeMediaQuery)