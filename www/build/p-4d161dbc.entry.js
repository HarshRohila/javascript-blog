import{r,h as s}from"./p-4e6ab1e9.js";const a=class{constructor(s){r(this,s)}normalize(r){return r?r.substr(0,1).toUpperCase()+r.substr(1).toLowerCase():""}render(){if(this.match&&this.match.params.name)return s("div",{class:"app-profile"},s("p",null,"Hello! My name is ",this.normalize(this.match.params.name),". My name was passed in through a route param!"))}};a.style=".app-profile{padding:10px}";export{a as app_profile}