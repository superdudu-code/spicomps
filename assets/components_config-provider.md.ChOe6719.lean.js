import{d as t,p as r,h as B,B as p,o as E,b as F,w as C,j as h,G as n,a,c as d}from"./chunks/framework.CwYZKvQY.js";const g={class:"demo-container"},y=t({__name:"color",setup(e){const A=r({primaryColor:"#409EFF",warningColor:"#e6a23c",successColor:"#67c23a",dangerColor:"#f56c6c",infoColor:"#909399"}),i=B(()=>({colorTheme:{...A.value}})),l=()=>{A.value.primaryColor==="#409EFF"?A.value={primaryColor:"#18a058",warningColor:"#f0a020",successColor:"#18a058",dangerColor:"#d03050",infoColor:"#2080f0"}:A.value={primaryColor:"#409EFF",warningColor:"#e6a23c",successColor:"#67c23a",dangerColor:"#f56c6c",infoColor:"#909399"}};return(c,s)=>{const k=p("sp-button"),D=p("sp-config-provider");return E(),F(D,{theme:i.value},{default:C(()=>[h("div",g,[n(k,{type:"primary",size:"large"},{default:C(()=>s[0]||(s[0]=[a("test")])),_:1}),n(k,{type:"warning",size:"large"},{default:C(()=>s[1]||(s[1]=[a("test")])),_:1}),n(k,{type:"success",size:"large"},{default:C(()=>s[2]||(s[2]=[a("test")])),_:1}),n(k,{type:"danger",size:"large"},{default:C(()=>s[3]||(s[3]=[a("test")])),_:1}),n(k,{type:"info",size:"large"},{default:C(()=>s[4]||(s[4]=[a("test")])),_:1})]),n(k,{onClick:l},{default:C(()=>s[5]||(s[5]=[a("切换颜色主题")])),_:1})]),_:1},8,["theme"])}}}),u=JSON.parse('{"title":"ConfigProvider | Spicomps","description":"ConfigProvider","frontmatter":{"title":"ConfigProvider | Spicomps","description":"ConfigProvider"},"headers":[],"relativePath":"components/config-provider.md","filePath":"components/config-provider.md"}'),o={name:"components/config-provider.md"},f=t({...o,setup(e){return(A,i)=>{const l=p("demo-preview");return E(),d("div",null,[i[0]||(i[0]=h("h1",{id:"config-provider-全局配置",tabindex:"-1"},[a("Config Provider 全局配置 "),h("a",{class:"header-anchor",href:"#config-provider-全局配置","aria-label":'Permalink to "Config Provider 全局配置"'},"​")],-1)),i[1]||(i[1]=h("p",null,"通过该组件，实现换肤等功能",-1)),i[2]||(i[2]=h("h2",{id:"修改颜色主题",tabindex:"-1"},[a("修改颜色主题 "),h("a",{class:"header-anchor",href:"#修改颜色主题","aria-label":'Permalink to "修改颜色主题"'},"​")],-1)),i[3]||(i[3]=h("p",null,[a("使用 "),h("code",null,"theme"),a(" 属性来修改组件主题。支持动态修改")],-1)),n(l,{title:"",description:"",code:"%3Ctemplate%3E%0A%20%20%3Csp-config-provider%20:theme=%22theme%22%3E%0A%20%20%20%20%3Cdiv%20class=%22demo-container%22%3E%0A%20%20%20%20%20%20%3Csp-button%20type=%22primary%22%20size=%22large%22%3Etest%3C/sp-button%3E%0A%20%20%20%20%20%20%3Csp-button%20type=%22warning%22%20size=%22large%22%3Etest%3C/sp-button%3E%0A%20%20%20%20%20%20%3Csp-button%20type=%22success%22%20size=%22large%22%3Etest%3C/sp-button%3E%0A%20%20%20%20%20%20%3Csp-button%20type=%22danger%22%20size=%22large%22%3Etest%3C/sp-button%3E%0A%20%20%20%20%20%20%3Csp-button%20type=%22info%22%20size=%22large%22%3Etest%3C/sp-button%3E%0A%20%20%20%20%3C/div%3E%0A%20%20%20%20%3Csp-button%20@click=%22handleChangeColorTheme%22%3E%E5%88%87%E6%8D%A2%E9%A2%9C%E8%89%B2%E4%B8%BB%E9%A2%98%3C/sp-button%3E%0A%20%20%3C/sp-config-provider%3E%0A%3C/template%3E%0A%0A%3Cscript%20setup%20lang=%22ts%22%3E%0Aimport%20%7B%20computed,%20ref%20%7D%20from%20'vue'%0Aconst%20themeColor%20=%20ref(%7B%0A%20%20primaryColor:%20'#409EFF',%0A%20%20warningColor:%20'#e6a23c',%0A%20%20successColor:%20'#67c23a',%0A%20%20dangerColor:%20'#f56c6c',%0A%20%20infoColor:%20'#909399',%0A%7D)%0Aconst%20theme%20=%20computed(()%20=%3E%20%7B%0A%20%20return%20%7B%0A%20%20%20%20colorTheme:%20%7B%0A%20%20%20%20%20%20...themeColor.value,%0A%20%20%20%20%7D,%0A%20%20%7D%0A%7D)%0A%0Aconst%20handleChangeColorTheme%20=%20()%20=%3E%20%7B%0A%20%20if%20(themeColor.value.primaryColor%20===%20'#409EFF')%20%7B%0A%20%20%20%20themeColor.value%20=%20%7B%0A%20%20%20%20%20%20primaryColor:%20'#18a058',%0A%20%20%20%20%20%20warningColor:%20'#f0a020',%0A%20%20%20%20%20%20successColor:%20'#18a058',%0A%20%20%20%20%20%20dangerColor:%20'#d03050',%0A%20%20%20%20%20%20infoColor:%20'#2080f0',%0A%20%20%20%20%7D%0A%20%20%7D%20else%20%7B%0A%20%20%20%20themeColor.value%20=%20%7B%0A%20%20%20%20%20%20primaryColor:%20'#409EFF',%0A%20%20%20%20%20%20warningColor:%20'#e6a23c',%0A%20%20%20%20%20%20successColor:%20'#67c23a',%0A%20%20%20%20%20%20dangerColor:%20'#f56c6c',%0A%20%20%20%20%20%20infoColor:%20'#909399',%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C/script%3E%0A%0A%3Cstyle%3E%0A.demo-container%20%7B%0A%20%20margin:%2010px;%0A%7D%0A%3C/style%3E%0A",showCode:"%3Cpre%20class%3D%22shiki%20shiki-themes%20vitesse-light%20vitesse-dark%20vp-code%22%20tabindex%3D%220%22%20v-pre%3D%22%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Esp-config-provider%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2359873A%3B--shiki-dark%3A%2380A665%22%3Etheme%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3Etheme%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20class%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3Edemo-container%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Esp-button%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20type%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3Eprimary%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20size%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3Elarge%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23393A34%3B--shiki-dark%3A%23DBD7CAEE%22%3Etest%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Esp-button%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Esp-button%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20type%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3Ewarning%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20size%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3Elarge%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23393A34%3B--shiki-dark%3A%23DBD7CAEE%22%3Etest%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Esp-button%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Esp-button%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20type%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3Esuccess%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20size%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3Elarge%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23393A34%3B--shiki-dark%3A%23DBD7CAEE%22%3Etest%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Esp-button%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Esp-button%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20type%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3Edanger%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20size%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3Elarge%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23393A34%3B--shiki-dark%3A%23DBD7CAEE%22%3Etest%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Esp-button%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Esp-button%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20type%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3Einfo%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20size%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3Elarge%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23393A34%3B--shiki-dark%3A%23DBD7CAEE%22%3Etest%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Esp-button%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Esp-button%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2359873A%3B--shiki-dark%3A%2380A665%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3EhandleChangeColorTheme%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23393A34%3B--shiki-dark%3A%23DBD7CAEE%22%3E%E5%88%87%E6%8D%A2%E9%A2%9C%E8%89%B2%E4%B8%BB%E9%A2%98%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Esp-button%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Esp-config-provider%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20setup%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3Ets%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%7B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20computed%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%2C%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20ref%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%7D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3E%20from%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3Evue%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23AB5959%3B--shiki-dark%3A%23CB7676%22%3Econst%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3EthemeColor%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2359873A%3B--shiki-dark%3A%2380A665%22%3E%20ref%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E(%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23998418%3B--shiki-dark%3A%23B8A965%22%3E%20%20primaryColor%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3E%23409EFF%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23998418%3B--shiki-dark%3A%23B8A965%22%3E%20%20warningColor%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3E%23e6a23c%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23998418%3B--shiki-dark%3A%23B8A965%22%3E%20%20successColor%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3E%2367c23a%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23998418%3B--shiki-dark%3A%23B8A965%22%3E%20%20dangerColor%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3E%23f56c6c%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23998418%3B--shiki-dark%3A%23B8A965%22%3E%20%20infoColor%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3E%23909399%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23AB5959%3B--shiki-dark%3A%23CB7676%22%3Econst%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3Etheme%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2359873A%3B--shiki-dark%3A%2380A665%22%3E%20computed%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E(()%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%3D%3E%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3E%20%20return%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23998418%3B--shiki-dark%3A%23B8A965%22%3E%20%20%20%20colorTheme%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%20%20...%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3EthemeColor%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3Evalue%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23AB5959%3B--shiki-dark%3A%23CB7676%22%3Econst%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2359873A%3B--shiki-dark%3A%2380A665%22%3EhandleChangeColorTheme%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20()%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%3D%3E%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3E%20%20if%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20(%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3EthemeColor%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3Evalue%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3EprimaryColor%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23AB5959%3B--shiki-dark%3A%23CB7676%22%3E%20%3D%3D%3D%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3E%23409EFF%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20%20%20%20themeColor%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3Evalue%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%3D%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23998418%3B--shiki-dark%3A%23B8A965%22%3E%20%20%20%20%20%20primaryColor%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3E%2318a058%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23998418%3B--shiki-dark%3A%23B8A965%22%3E%20%20%20%20%20%20warningColor%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3E%23f0a020%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23998418%3B--shiki-dark%3A%23B8A965%22%3E%20%20%20%20%20%20successColor%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3E%2318a058%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23998418%3B--shiki-dark%3A%23B8A965%22%3E%20%20%20%20%20%20dangerColor%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3E%23d03050%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23998418%3B--shiki-dark%3A%23B8A965%22%3E%20%20%20%20%20%20infoColor%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3E%232080f0%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%7D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3E%20else%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20%20%20%20themeColor%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3Evalue%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%3D%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23998418%3B--shiki-dark%3A%23B8A965%22%3E%20%20%20%20%20%20primaryColor%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3E%23409EFF%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23998418%3B--shiki-dark%3A%23B8A965%22%3E%20%20%20%20%20%20warningColor%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3E%23e6a23c%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23998418%3B--shiki-dark%3A%23B8A965%22%3E%20%20%20%20%20%20successColor%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3E%2367c23a%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23998418%3B--shiki-dark%3A%23B8A965%22%3E%20%20%20%20%20%20dangerColor%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3E%23f56c6c%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23998418%3B--shiki-dark%3A%23B8A965%22%3E%20%20%20%20%20%20infoColor%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3E%23909399%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695977%3B--shiki-dark%3A%23C98A7D77%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3Edemo-container%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23998418%3B--shiki-dark%3A%23B8A965%22%3E%20%20margin%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%232F798A%3B--shiki-dark%3A%234C9A91%22%3E%2010%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23AB5959%3B--shiki-dark%3A%23CB7676%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",suffixName:"vue",absolutePath:"E:\\superdudu\\spicomps\\docs\\demos\\config-provider\\color.vue",relativePath:"../demos/config-provider/color.vue"},{default:C(()=>[n(y)]),_:1})])}}});export{u as __pageData,f as default};
