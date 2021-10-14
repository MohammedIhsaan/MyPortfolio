import {ActionTypes} from '../constants/action-type.js'

const initailState = {
  data :[{name:"Mohammed Ihsaanul Haq ", 
          intro:" Hi, I am Mohammed Ihsaan. Motivated  web developer ,Passionate about building first-class web applications. I have completed some React.js projects. Feel free to check my My Work which will walk you through my project. My expertise are in  React.js ,JavaScript, HTML5, CSS3, Bootstrap, Material UI, and apart from that I am also working as freelancer. I'm also learning Back-End Development and looking forward to be a Full Stack Web Developer.",
          ocupation : "RACT.JS DEVELOPER" ,
          interst : ["Web Devlepment","AI","BlockChain"], 
          education : ["M.E STRUCTURAL ENGINEER"],
          links :[
            {link:"https://twitter.com/ihsaanul_haque",
                    buutonStyle:"fab fa-twitter",iconStyle:"twitter",name:"twitter"},
            {link:"https://www.linkedin.com/in/ihsaan-mohammed-895732222/",
            buutonStyle:"fab fa-linkedin",iconStyle:"linkedin",name:"linkedin"},
            {link:"https://github.com/MohammedIhsaan",
            buutonStyle:"fab fa-github",iconStyle:"github",name:"github"},
          ],
            project :[{path :'myProject1'},{path :'myProject2'},
            {path :'myProject3'},{path :'myProject1'},]
        },

      ]


}

export const productReducer =(state=initailState,{type,payload})=>{
  switch (type){
    case ActionTypes.SET_PRODUCT:
      return {...state,products:payload}
    default:
    return state
  }

}