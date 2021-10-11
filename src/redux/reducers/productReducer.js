import {ActionTypes} from '../constants/action-type.js'

const initailState = {
  data :[{name:"Mohammed Ihsaanul Haq ", 
          intro:" Hi, I am Mohammed Ihsaanul Haque. I am a Web Developer. it's been 1 year i am learning HTML, CSS, JAVASCRIPT, REACT.JS ,REACT.JS with Hooks  Hi, I am Mohammed Ihsaanul Haque. I am a Web Developer. it's been 1 year i am learning HTML, CSS, JAVASCRIPT, REACT.JS ,REACT.JS with Hooks etc etc ",
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