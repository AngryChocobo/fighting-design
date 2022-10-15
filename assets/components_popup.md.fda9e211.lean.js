import{h as d,j as F,r as n,o as D,c as i,a as e,w as l,b as y,d as t,e as p}from"./app.34021829.js";const C=p('<h1 id="popup-\u5F39\u51FA\u7A97\u53E3" tabindex="-1">Popup \u5F39\u51FA\u7A97\u53E3 <a class="header-anchor" href="#popup-\u5F39\u51FA\u7A97\u53E3" aria-hidden="true">#</a></h1><p>\u5F39\u7A97\u76F8\u5173\u5C31\u7528\u5B83\uFF01</p><ul><li><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/popup" target="_blank" rel="noreferrer">\u6E90\u4EE3\u7801</a></li><li><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/popup.md" target="_blank" rel="noreferrer">\u6587\u6863\u7F16\u8F91</a></li></ul><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1">\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h2><p><code>v-model:visible</code> \u5C5E\u6027\u6765\u63A7\u5236\u5C55\u793A\u72B6\u6001</p>',5),A=t("p",null,"\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57",-1),h=t("p",null,"\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57",-1),b=t("p",null,"\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57",-1),E=p(`<details class="details custom-block"><summary>\u663E\u793A\u4EE3\u7801</summary><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">visible1 = true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6253\u5F00</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">f-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">f-popup</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model:visible</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">visible1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u8FD9\u662F\u4E00\u6BB5\u6587\u5B57</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">f-popup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> visible1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model:visible</code></td><td>\u7ED1\u5B9A\u503C\uFF0C\u63A7\u5236\u662F\u5426\u5C55\u793A</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td><code>append-to-body</code></td><td>\u662F\u5426\u8FFD\u52A0\u5230 <code>body</code></td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td><code>show-mask</code></td><td>\u662F\u5426\u5C55\u793A\u906E\u7F69\u5C42</td><td>boolean</td><td>\u2014\u2014</td><td>true</td></tr><tr><td><code>mask-close</code></td><td>\u662F\u5426\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED</td><td>boolean</td><td>\u2014\u2014</td><td>true</td></tr><tr><td><code>modal-blur</code></td><td>\u662F\u5426\u6A21\u7CCA\u906E\u7F69\u5C42</td><td>boolean</td><td>\u2014\u2014</td><td>false</td></tr><tr><td><code>z-index</code></td><td>\u5C42\u7EA7</td><td>number</td><td>\u2014\u2014</td><td>1999</td></tr><tr><td><code>mask-background</code></td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u80CC\u666F\u8272</td><td>string</td><td>\u2014\u2014</td><td>rgba(35, 39, 46)</td></tr><tr><td><code>mask-opacity</code></td><td>\u906E\u7F69\u5C42\u900F\u660E\u5EA6</td><td>number</td><td>\u2014\u2014</td><td>0.5</td></tr><tr><td><code>direction</code></td><td>\u5F39\u51FA\u65B9\u5411</td><td>string</td><td><code>left</code> <code>right</code> <br> <code>top</code> <code>bottom</code> <code>center</code></td><td>center</td></tr><tr><td><code>popupSize</code></td><td>\u5F39\u51FA\u7A97\u53E3\u5C3A\u5BF8</td><td>string / number</td><td>\u2014\u2014</td><td>\u2014\u2014</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>open</code></td><td>\u6253\u5F00\u52A8\u753B\u5F00\u59CB\u7684\u56DE\u8C03</td></tr><tr><td><code>open-end</code></td><td>\u6253\u5F00\u52A8\u753B\u7ED3\u675F\u7684\u56DE\u8C03</td></tr><tr><td><code>close</code></td><td>\u5173\u95ED\u52A8\u753B\u5F00\u59CB\u7684\u56DE\u8C03</td></tr><tr><td><code>close-end</code></td><td>\u5173\u95ED\u52A8\u753B\u7ED3\u675F\u7684\u56DE\u8C03</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><table><thead><tr><th>\u63D2\u69FD\u540D\u79F0</th><th>\u8BF4\u660E\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u9ED8\u8BA4\u5185\u5BB9</td></tr></tbody></table><h2 id="interface" tabindex="-1">Interface <a class="header-anchor" href="#interface" aria-hidden="true">#</a></h2><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">PopupInstance</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">PopupPropsType</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">PopupDirectionType</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fighting-design</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-hidden="true">#</a></h2>`,11),g={href:"https://github.com/Tyh2001",target:"_blank"},_=JSON.parse('{"title":"Popup \u5F39\u51FA\u7A97\u53E3","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/popup.md","lastUpdated":1665820986000}'),f={name:"components/popup.md"},k=d({...f,setup(B){const a=F(!1);return(m,s)=>{const u=n("f-button"),r=n("f-popup"),c=n("f-avatar");return D(),i("div",null,[C,e(u,{type:"primary",onClick:s[0]||(s[0]=o=>a.value=!0)},{default:l(()=>[y("\u6253\u5F00")]),_:1}),e(r,{visible:a.value,"onUpdate:visible":s[1]||(s[1]=o=>a.value=o)},{default:l(()=>[A,h,b]),_:1},8,["visible"]),E,t("a",g,[e(c,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})])])}}});export{_ as __pageData,k as default};
