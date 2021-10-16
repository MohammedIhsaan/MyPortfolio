import shoppingImage from '../images/online-shopping.jpg'
import birthdayImage from '../images/birthday.png'
import JSPhoto from "../images/JavaScript-logo.png"
import RPhoto from "../reactjs.png"
import RDPhoto from "../redux.png"
import BPhoto from "../bootstrap.png"

    let projectData = [
        {
            projectName: "Online Shopping",
            projectImage : shoppingImage,
            projectLink : "https://mohammedihsaan.github.io/onlineShopping/",
            projectDescription : "Online Shopping WebSite is Build Using React.js & for styling BootsTrap is used. In this React Project Data is fetched from Fake Store API using axios ",
            icon :[JSPhoto,RDPhoto,RPhoto,BPhoto]
        },
        {
            projectName: "Birthday Calender",
            projectImage : birthdayImage,
            projectLink : "https://mohammedihsaan.github.io/my-birthdaycalender/",
            projectDescription : "Birthday Calender WebSite is Build Using React.js & for styling CSS3 is used. In this React Project we can serach Birthday and also it show person's Age  ",
            icon :[JSPhoto,RPhoto]
        },
    ]
    
    export default projectData




