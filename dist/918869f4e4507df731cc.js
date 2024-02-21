class UserPreferences{
    constructor(){
        this.darkMode = Boolean(window.localStorage.getItem("configuredDarkMode"))
        this.addToQueue = Boolean(window.localStorage.getItem("configuredAddToQueue"))
        this.homeScreen = window.localStorage.getItem("configuredHomeScreen")
        this.themeColor = window.localStorage.getItem("configuredThemeColor")
        this.backendUrl = "https://eatthecow.mooo.com:3030"
    }

    setDarkMode(darkMode){
        this.darkMode = darkMode
        window.localStorage.setItem("configuredDarkMode", darkMode)
    }

    setAddToQueue(addToQueue){
        window.localStorage.setItem("configuredAddToQueue", addToQueue)
        this.addToQueue = addToQueue
    }

    setHomeScreen(homeScreen){
        this.homeScreen = homeScreen
        window.localStorage.setItem("configuredHomeScreen", homeScreen)
    }

    setThemeColor(themeColor){
        this.themeColor = themeColor
        window.localStorage.setItem("configuredThemeColor", themeColor)
        window.apc()
    }

    getDarkMode(){
        return this.darkMode
    }

    getAddToQueue(){
        return this.addToQueue
    }

    getHomeScreen(){
        return this.homeScreen
    }

    getThemeColor(){
        return this.themeColor
    }

    getUrl(){
        return this.backendUrl
    }

    toggleDarkMode(){
        this.setDarkMode(!this.getDarkMode())
    }

    toggleAddToQueue(){
        this.setAddToQueue(!this.getAddToQueue())
    }
}


function addSettingsActions(){
    const tabs = document.getElementsByTagName("md-tabs")[0];
    var ch = localStorage.getItem("configuredHomeScreen")
    if(ch == null){
        localStorage.setItem("configuredHomeScreen", "albums")
        ch = "albums"
    }
    // ch = "albums";
    switch (ch) {
        case "artists":
            tabs.getElementsByClassName("settings-homepage-artists")[0].setAttribute("active", "");
            // tabs.getElementsByClassName("settings-homepage-albums")[0].setAttribute("active", "");
            // tabs.getElementsByClassName("settings-homepage-songs")[0].setAttribute("active", "");
            break;
        case "albums":
            tabs.getElementsByClassName("settings-homepage-albums")[0].setAttribute("active", "");
            // tabs.getElementsByClassName("settings-homepage-albums")[0].setAttribute("active", "");
            // tabs.getElementsByClassName("settings-homepage-songs")[0].setAttribute("active", "");
            break;
        case "songs":
            tabs.getElementsByClassName("settings-homepage-songs")[0].setAttribute("active", "");
            // tabs.getElementsByClassName("settings-homepage-albums")[0].setAttribute("active", "");
            // tabs.getElementsByClassName("settings-homepage-songs")[0].setAttribute("active", "");
            break;
        default:
            break;
    }
    tabs.addEventListener('change', (event) => {
        switch(event.target.activeTabIndex){
            case 0:
                window.prefs.setHomeScreen("artists")
                break;
            case 1:
                window.prefs.setHomeScreen("albums")
                break;
            case 2:
                window.prefs.setHomeScreen("songs")
                break;
        }
    });

    document.getElementById("settings-toggle-dark-mode").addEventListener("change", function(){
        window.prefs.toggleDarkMode()
    })
    document.getElementById("settings-toggle-add-to-queue").addEventListener("change", function(){
        window.prefs.toggleAddToQueue()
    })
    document.getElementById("settings-theme-hex-code-save").addEventListener("click", function(){
        window.prefs.setThemeColor(document.getElementById("settings-theme-hex-code").value)
    })

}