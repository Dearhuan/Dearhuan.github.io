import{_ as c,o as n,c as s,b as d,a as t,e,d as a,r}from"./app.521d5241.js";const l=t("h1",{id:"\u6CB9\u4EF7\u8BA1\u7B97\u5668",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u6CB9\u4EF7\u8BA1\u7B97\u5668","aria-hidden":"true"},"#"),e(" \u6CB9\u4EF7\u8BA1\u7B97\u5668")],-1),m=t("h2",{id:"\u6848\u4F8B\u4E00",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u6848\u4F8B\u4E00","aria-hidden":"true"},"#"),e(" \u6848\u4F8B\u4E00")],-1),u=a('<h3 id="apis" tabindex="-1"><a class="header-anchor" href="#apis" aria-hidden="true">#</a> APIS</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u4F20</th></tr></thead><tbody><tr><td>consumption</td><td>\u6CB9\u8017</td><td>number</td><td>5</td><td>true</td></tr><tr><td>price</td><td>\u6CB9\u4EF7</td><td>number</td><td>7</td><td>true</td></tr><tr><td>volume</td><td>\u5BB9\u79EF</td><td>string</td><td>48.5</td><td>true</td></tr></tbody></table><h2 id="\u6848\u4F8B\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B\u4E8C" aria-hidden="true">#</a> \u6848\u4F8B\u4E8C</h2>',3),_=a('<h3 id="apis-1" tabindex="-1"><a class="header-anchor" href="#apis-1" aria-hidden="true">#</a> APIS</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u4F20</th></tr></thead><tbody><tr><td>oils</td><td>\u6CB9\u4EF7\u4FE1\u606F\u96C6\u5408</td><td>Array</td><td></td><td>true</td></tr><tr><td>price</td><td>\u6CB9\u4EF7</td><td>string</td><td></td><td>true</td></tr><tr><td>rate</td><td>\u6DA8\u8DCC\u5E45</td><td>string</td><td></td><td>true</td></tr><tr><td>name</td><td>\u540D\u79F0</td><td>string</td><td></td><td>true</td></tr></tbody></table><h3 id="\u6CB9\u7535\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#\u6CB9\u7535\u5BF9\u6BD4" aria-hidden="true">#</a> \u6CB9\u7535\u5BF9\u6BD4</h3><table><thead><tr><th>-</th><th>\u57C3\u5B89S</th><th>\u96C5\u9601\u6DF7\u52A8</th></tr></thead><tbody><tr><td>\u7535\u91CF/\u6CB9\u7BB1</td><td>55kwh</td><td>48L</td></tr><tr><td>\u7EED\u822A</td><td>510km(\u7EED\u822A\u8FBE\u6210\u738770%=357km)</td><td>800-960km</td></tr><tr><td>\u65E5\u95F4\u7535\u4EF7/\u6CB9\u4EF7</td><td>1.4r/kwh 1.4X55=77r</td><td>8.14(-0.7=7.44) 7.44X48=357r</td></tr><tr><td>\u591C\u95F4\u7535\u4EF7/\u6CB9\u4EF7</td><td>0.8r/kwh 0.8X55=44r</td><td>-</td></tr><tr><td>AC\u6CB9\u8017</td><td>-</td><td>6L/100km (800km)</td></tr><tr><td>\u975EAC\u6CB9\u8017</td><td>-</td><td>5L/100km (960km)</td></tr><tr><td>\u6BCF\u516C\u91CC\u6210\u672C</td><td>(55X1.4)/(510X0.7)=0.22r/km(\u65E5\u95F4)</td><td>6X(8.14-0.7)/100=0.45r/km(AC)</td></tr><tr><td>\u6BCF\u516C\u91CC\u6210\u672C</td><td>(55X0.8)/(510X0.7)=0.12r/km(\u591C\u95F4)</td><td>5X(8.14-0.7)/100=0.37r/km(!AC)</td></tr><tr><td>\u5355\u4EF7</td><td>1.9r/km</td><td>1.9r/km</td></tr><tr><td>100km</td><td>0.22X100=22r(\u65E5\u95F4) 1.9X100-22=168r</td><td>0.45X100=45r(AC) 1.9X100-45=145r</td></tr><tr><td>100km</td><td>0.12X100=12r(\u591C\u95F4) 1.9X100-12=178r</td><td>0.37X100=37r(!AC) 1.9X100-37=153r</td></tr><tr><td>100km\u5E73\u5747\u6536\u76CA</td><td>173r</td><td>149r</td></tr><tr><td>350km</td><td>0.12X350=77r(\u65E5\u95F4) 1.9X350-77=588r</td><td>0.45X350=158r(AC) 1.9X350-158=507r</td></tr><tr><td>350km</td><td>0.12X350=42r(\u591C\u95F4) 1.9X350-42=623r</td><td>0.37X350=130r(!AC) 1.9X350-130=535r</td></tr><tr><td>350km\u5E73\u5747\u6536\u76CA</td><td>606r</td><td>521r</td></tr></tbody></table>',4),X={__name:"oilPriceCalculator.html",setup(k){const h=[{price:"8.10",rate:"+0.18",name:"92\u53F7\u6C7D\u6CB9"},{price:"8.77",rate:"+0.21",name:"95\u53F7\u6C7D\u6CB9"}];return(p,b)=>{const o=r("OilPriceCalculator"),i=r("OilCalculator");return n(),s("div",null,[l,m,d(o,{consumption:4.5,price:7,volume:48.5},null,8,["consumption","volume"]),u,d(i,{oils:h}),_])}}};var f=c(X,[["__file","oilPriceCalculator.html.vue"]]);export{f as default};
