import{r as o,o as v,c as D,a,u as i,w as p,d as t,_ as F,e as s,p as y,f as h}from"./app.b16c4a5c.js";const n=d=>(y("data-v-ee996586"),d=d(),h(),d),u=s('<h1 id="image-\u56FE\u7247" tabindex="-1" data-v-ee996586>Image \u56FE\u7247 <a class="header-anchor" href="#image-\u56FE\u7247" aria-hidden="true" data-v-ee996586>#</a></h1><p data-v-ee996586>\u9884\u89C8\u56FE\u7247</p><ul data-v-ee996586><li data-v-ee996586><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/image" target="_blank" rel="noreferrer" data-v-ee996586>\u6E90\u4EE3\u7801</a></li><li data-v-ee996586><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/docs/components/image.md" target="_blank" rel="noreferrer" data-v-ee996586>\u6587\u6863\u7F16\u8F91</a></li></ul><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1" data-v-ee996586>\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true" data-v-ee996586>#</a></h2><p data-v-ee996586>\u4F7F\u7528 <code data-v-ee996586>src</code> \u5C5E\u6027\u8BBE\u7F6E\u56FE\u7247\u7684\u8DEF\u5F84\uFF0C<code data-v-ee996586>width</code> \u8BBE\u7F6E\u56FE\u7247\u7684\u5BBD\u5EA6\uFF0C<code data-v-ee996586>height</code> \u53EF\u4EE5\u8BBE\u7F6E\u56FE\u7247\u7684\u9AD8\u5EA6</p>',5),g=s(`<details class="details custom-block" data-v-ee996586><summary data-v-ee996586>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-ee996586><button title="Copy Code" class="copy" data-v-ee996586></button><span class="lang" data-v-ee996586>html</span><pre data-v-ee996586><code data-v-ee996586><span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>&lt;</span><span style="color:#F07178;" data-v-ee996586>f-image</span><span style="color:#89DDFF;" data-v-ee996586> </span><span style="color:#C792EA;" data-v-ee996586>width</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>200px</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#89DDFF;" data-v-ee996586> </span><span style="color:#C792EA;" data-v-ee996586>src</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>https://tianyuhao.cn/images/auto/1.jpg</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#89DDFF;" data-v-ee996586> /&gt;</span></span>
<span class="line" data-v-ee996586></span></code></pre></div></details><h2 id="\u4F7F\u7528\u672C\u5730\u56FE\u7247" tabindex="-1" data-v-ee996586>\u4F7F\u7528\u672C\u5730\u56FE\u7247 <a class="header-anchor" href="#\u4F7F\u7528\u672C\u5730\u56FE\u7247" aria-hidden="true" data-v-ee996586>#</a></h2><p data-v-ee996586>\u5982\u9700\u8981\u4F7F\u7528\u672C\u5730\u56FE\u7247\uFF0C\u9700\u8981\u4F7F\u7528 <a href="https://cn.vitejs.dev/guide/assets.html#new-url-url-import-meta-url" target="_blank" rel="noreferrer" data-v-ee996586>new URL(url, i<wbr data-v-ee996586>mport.meta.url)</a> \u624B\u52A8\u5BFC\u5165\u56FE\u7247\u8D44\u6E90\u4F7F\u7528\uFF1A</p>`,3),_=s(`<details class="details custom-block" data-v-ee996586><summary data-v-ee996586>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-ee996586><button title="Copy Code" class="copy" data-v-ee996586></button><span class="lang" data-v-ee996586>html</span><pre data-v-ee996586><code data-v-ee996586><span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>&lt;</span><span style="color:#F07178;" data-v-ee996586>script</span><span style="color:#89DDFF;" data-v-ee996586> </span><span style="color:#C792EA;" data-v-ee996586>lang</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>ts</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#89DDFF;" data-v-ee996586> </span><span style="color:#C792EA;" data-v-ee996586>setup</span><span style="color:#89DDFF;" data-v-ee996586>&gt;</span></span>
<span class="line" data-v-ee996586><span style="color:#A6ACCD;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>const</span><span style="color:#A6ACCD;" data-v-ee996586> url </span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#A6ACCD;" data-v-ee996586> </span><span style="color:#89DDFF;" data-v-ee996586>new</span><span style="color:#A6ACCD;" data-v-ee996586> </span><span style="color:#82AAFF;" data-v-ee996586>URL</span><span style="color:#A6ACCD;" data-v-ee996586>(</span><span style="color:#89DDFF;" data-v-ee996586>&#39;</span><span style="color:#C3E88D;" data-v-ee996586>./image/1.jpg</span><span style="color:#89DDFF;" data-v-ee996586>&#39;</span><span style="color:#89DDFF;" data-v-ee996586>,</span><span style="color:#A6ACCD;" data-v-ee996586> </span><span style="color:#89DDFF;" data-v-ee996586>import</span><span style="color:#89DDFF;" data-v-ee996586>.</span><span style="color:#A6ACCD;" data-v-ee996586>meta</span><span style="color:#89DDFF;" data-v-ee996586>.</span><span style="color:#A6ACCD;" data-v-ee996586>url)</span><span style="color:#89DDFF;" data-v-ee996586>.</span><span style="color:#A6ACCD;" data-v-ee996586>href</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>&lt;/</span><span style="color:#F07178;" data-v-ee996586>script</span><span style="color:#89DDFF;" data-v-ee996586>&gt;</span></span>
<span class="line" data-v-ee996586></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>&lt;</span><span style="color:#F07178;" data-v-ee996586>template</span><span style="color:#89DDFF;" data-v-ee996586>&gt;</span></span>
<span class="line" data-v-ee996586><span style="color:#A6ACCD;" data-v-ee996586>  </span><span style="color:#89DDFF;" data-v-ee996586>&lt;</span><span style="color:#F07178;" data-v-ee996586>f-image</span><span style="color:#89DDFF;" data-v-ee996586> </span><span style="color:#C792EA;" data-v-ee996586>:src</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>url</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#89DDFF;" data-v-ee996586> /&gt;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>&lt;/</span><span style="color:#F07178;" data-v-ee996586>template</span><span style="color:#89DDFF;" data-v-ee996586>&gt;</span></span>
<span class="line" data-v-ee996586></span></code></pre></div></details><h2 id="\u9002\u5E94\u5BB9\u5668\u65B9\u5F0F" tabindex="-1" data-v-ee996586>\u9002\u5E94\u5BB9\u5668\u65B9\u5F0F <a class="header-anchor" href="#\u9002\u5E94\u5BB9\u5668\u65B9\u5F0F" aria-hidden="true" data-v-ee996586>#</a></h2><p data-v-ee996586><code data-v-ee996586>fit</code> \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u7684\u9002\u5E94\u5BB9\u5668\u7684\u65B9\u5F0F\uFF0C\u8BE6\u89C1\u539F\u751F <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit#try_it" target="_blank" rel="noreferrer" data-v-ee996586>object-fit</a> \u5C5E\u6027</p>`,3),C={class:"image-block"},m=n(()=>t("code",null,"fill",-1)),b={class:"image-block"},A=n(()=>t("code",null,"contain",-1)),f={class:"image-block"},E=n(()=>t("code",null,"cover",-1)),q={class:"image-block"},x=n(()=>t("code",null,"none",-1)),T={class:"image-block"},k=n(()=>t("code",null,"scale-down",-1)),S=s(`<details class="details custom-block" data-v-ee996586><summary data-v-ee996586>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-ee996586><button title="Copy Code" class="copy" data-v-ee996586></button><span class="lang" data-v-ee996586>html</span><pre data-v-ee996586><code data-v-ee996586><span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>&lt;</span><span style="color:#F07178;" data-v-ee996586>f-image</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>width</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>110px</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>height</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>110px</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>fit</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>fill</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>src</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>https://tianyuhao.cn/images/auto/4.jpg</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>/&gt;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>&lt;</span><span style="color:#F07178;" data-v-ee996586>f-image</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>width</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>110px</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>height</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>110px</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>fit</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>contain</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>src</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>https://tianyuhao.cn/images/auto/4.jpg</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>/&gt;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>&lt;</span><span style="color:#F07178;" data-v-ee996586>f-image</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>width</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>110px</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>height</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>110px</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>fit</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>cover</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>src</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>https://tianyuhao.cn/images/auto/4.jpg</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>/&gt;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>&lt;</span><span style="color:#F07178;" data-v-ee996586>f-image</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>width</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>110px</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>height</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>110px</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>fit</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>none</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>src</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>https://tianyuhao.cn/images/auto/4.jpg</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>/&gt;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>&lt;</span><span style="color:#F07178;" data-v-ee996586>f-image</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>width</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>110px</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>height</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>110px</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>fit</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>scale-down</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>src</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>https://tianyuhao.cn/images/auto/4.jpg</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>/&gt;</span></span>
<span class="line" data-v-ee996586></span></code></pre></div></details><h2 id="\u5706\u89D2\u56FE\u7247" tabindex="-1" data-v-ee996586>\u5706\u89D2\u56FE\u7247 <a class="header-anchor" href="#\u5706\u89D2\u56FE\u7247" aria-hidden="true" data-v-ee996586>#</a></h2><p data-v-ee996586><code data-v-ee996586>round</code> \u5C5E\u6027\u53EF\u4EE5\u914D\u7F6E\u5706\u89D2\u56FE\u7247\uFF0C\u4F60\u9700\u8981\u4F20\u5165\u4E00\u4E2A\u5177\u4F53\u7684\u6570\u503C\u5355\u4F4D</p>`,3),w=s(`<details class="details custom-block" data-v-ee996586><summary data-v-ee996586>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-ee996586><button title="Copy Code" class="copy" data-v-ee996586></button><span class="lang" data-v-ee996586>html</span><pre data-v-ee996586><code data-v-ee996586><span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>&lt;</span><span style="color:#F07178;" data-v-ee996586>f-image</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>round</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>30px</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>height</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>190px</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>src</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>https://tianyuhao.cn/images/auto/4.jpg</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>/&gt;</span></span>
<span class="line" data-v-ee996586></span></code></pre></div></details><h2 id="\u61D2\u52A0\u8F7D" tabindex="-1" data-v-ee996586>\u61D2\u52A0\u8F7D <a class="header-anchor" href="#\u61D2\u52A0\u8F7D" aria-hidden="true" data-v-ee996586>#</a></h2><p data-v-ee996586><code data-v-ee996586>lazy</code> \u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u56FE\u7247\u61D2\u52A0\u8F7D\uFF0C\u8BE6\u60C5\u53EF\u53C2\u8003 <code data-v-ee996586>DevTools</code> \u7684 <code data-v-ee996586>Network</code></p>`,3),j=s(`<details class="details custom-block" data-v-ee996586><summary data-v-ee996586>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-ee996586><button title="Copy Code" class="copy" data-v-ee996586></button><span class="lang" data-v-ee996586>html</span><pre data-v-ee996586><code data-v-ee996586><span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>&lt;</span><span style="color:#F07178;" data-v-ee996586>f-image</span><span style="color:#89DDFF;" data-v-ee996586> </span><span style="color:#C792EA;" data-v-ee996586>lazy</span><span style="color:#89DDFF;" data-v-ee996586> </span><span style="color:#C792EA;" data-v-ee996586>width</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>200px</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#89DDFF;" data-v-ee996586> </span><span style="color:#C792EA;" data-v-ee996586>src</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>https://tianyuhao.cn/images/auto/5.jpg</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#89DDFF;" data-v-ee996586> /&gt;</span></span>
<span class="line" data-v-ee996586></span></code></pre></div></details><h2 id="\u52A0\u8F7D\u5931\u8D25" tabindex="-1" data-v-ee996586>\u52A0\u8F7D\u5931\u8D25 <a class="header-anchor" href="#\u52A0\u8F7D\u5931\u8D25" aria-hidden="true" data-v-ee996586>#</a></h2><p data-v-ee996586><code data-v-ee996586>Fighting Design</code> \u5BF9\u4E8E\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u505A\u4E86\u5F88\u591A\u7684\u5904\u7406\uFF0C\u4E0B\u9762\u5206\u522B\u4ECB\u7ECD\u4E00\u4E0B</p><p data-v-ee996586><code data-v-ee996586>err-src</code> \u53EF\u4EE5\u5728 <code data-v-ee996586>src</code> \u52A0\u8F7D\u5931\u8D25\u7684\u65F6\u5019\uFF0C\u5907\u7528\u8FDB\u884C\u52A0\u8F7D</p><p data-v-ee996586><code data-v-ee996586>alt</code> \u5C5E\u6027\u53EF\u4EE5\u5728\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u7684\u65F6\u5019\uFF0C\u5C55\u793A\u4FE1\u606F</p><p data-v-ee996586>\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code data-v-ee996586>error</code> \u63D2\u69FD\u81EA\u5B9A\u4E49\u4F60\u7684\u9519\u8BEF\u4FE1\u606F\u5C55\u793A</p>`,6),I=s(`<details class="details custom-block" data-v-ee996586><summary data-v-ee996586>\u663E\u793A\u4EE3\u7801</summary><div class="language-html" data-v-ee996586><button title="Copy Code" class="copy" data-v-ee996586></button><span class="lang" data-v-ee996586>html</span><pre data-v-ee996586><code data-v-ee996586><span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>&lt;</span><span style="color:#F07178;" data-v-ee996586>f-image</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>width</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>200px</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>src</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>https://abc.com/1.png</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>err-src</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>https://tianyuhao.cn/images/auto/1.jpg</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>/&gt;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>&lt;</span><span style="color:#F07178;" data-v-ee996586>f-image</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>width</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>200px</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>src</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>https://abc.com/1.png</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>err-src</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>https://abc.com/1.png</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>  </span><span style="color:#C792EA;" data-v-ee996586>alt</span><span style="color:#89DDFF;" data-v-ee996586>=</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span><span style="color:#C3E88D;" data-v-ee996586>error</span><span style="color:#89DDFF;" data-v-ee996586>&quot;</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>/&gt;</span></span>
<span class="line" data-v-ee996586></span></code></pre></div></details><h2 id="attributes" tabindex="-1" data-v-ee996586>Attributes <a class="header-anchor" href="#attributes" aria-hidden="true" data-v-ee996586>#</a></h2><table data-v-ee996586><thead data-v-ee996586><tr data-v-ee996586><th data-v-ee996586>\u53C2\u6570</th><th data-v-ee996586>\u8BF4\u660E</th><th data-v-ee996586>\u7C7B\u578B</th><th data-v-ee996586>\u53EF\u9009\u503C</th><th data-v-ee996586>\u9ED8\u8BA4\u503C</th></tr></thead><tbody data-v-ee996586><tr data-v-ee996586><td data-v-ee996586><code data-v-ee996586>src</code></td><td data-v-ee996586>\u56FE\u7247\u8DEF\u5F84</td><td data-v-ee996586>string</td><td data-v-ee996586>\u2014\u2014</td><td data-v-ee996586>\u2014\u2014</td></tr><tr data-v-ee996586><td data-v-ee996586><code data-v-ee996586>alt</code></td><td data-v-ee996586>\u539F\u751F <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#attr-alt" target="_blank" rel="noreferrer" data-v-ee996586>alt</a> \u5C5E\u6027</td><td data-v-ee996586>string</td><td data-v-ee996586>\u2014\u2014</td><td data-v-ee996586>\u2014\u2014</td></tr><tr data-v-ee996586><td data-v-ee996586><code data-v-ee996586>draggable</code></td><td data-v-ee996586>\u662F\u5426\u53EF\u4EE5\u62D6\u52A8</td><td data-v-ee996586>boolean</td><td data-v-ee996586>\u2014\u2014</td><td data-v-ee996586>true</td></tr><tr data-v-ee996586><td data-v-ee996586><code data-v-ee996586>lazy</code></td><td data-v-ee996586>\u662F\u5426\u61D2\u52A0\u8F7D\u56FE\u7247</td><td data-v-ee996586>boolean</td><td data-v-ee996586>\u2014\u2014</td><td data-v-ee996586>false</td></tr><tr data-v-ee996586><td data-v-ee996586><code data-v-ee996586>root-margin</code></td><td data-v-ee996586>\u89E6\u53D1\u61D2\u52A0\u8F7D\u7684\u8DDD\u79BB</td><td data-v-ee996586>string / number</td><td data-v-ee996586>\u2014\u2014</td><td data-v-ee996586>100px</td></tr><tr data-v-ee996586><td data-v-ee996586><code data-v-ee996586>width</code></td><td data-v-ee996586>\u56FE\u7247\u7684\u5BBD\u5EA6</td><td data-v-ee996586>string / number</td><td data-v-ee996586>\u2014\u2014</td><td data-v-ee996586>\u2014\u2014</td></tr><tr data-v-ee996586><td data-v-ee996586><code data-v-ee996586>height</code></td><td data-v-ee996586>\u56FE\u7247\u7684\u9AD8\u5EA6</td><td data-v-ee996586>string / number</td><td data-v-ee996586>\u2014\u2014</td><td data-v-ee996586>\u2014\u2014</td></tr><tr data-v-ee996586><td data-v-ee996586><code data-v-ee996586>block</code></td><td data-v-ee996586>\u662F\u5426\u4E3A\u5757\u7EA7\u5143\u7D20</td><td data-v-ee996586>boolean</td><td data-v-ee996586>\u2014\u2014</td><td data-v-ee996586>false</td></tr><tr data-v-ee996586><td data-v-ee996586><code data-v-ee996586>fit</code></td><td data-v-ee996586>\u5982\u4F55\u9002\u5E94\u5BB9\u5668\uFF0C\u539F\u751F <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit#try_it" target="_blank" rel="noreferrer" data-v-ee996586>object-fit</a> \u5C5E\u6027</td><td data-v-ee996586>string</td><td data-v-ee996586><code data-v-ee996586>fill</code> <code data-v-ee996586>contain</code> <code data-v-ee996586>cover</code> <code data-v-ee996586>none</code><br data-v-ee996586> <code data-v-ee996586>scale-down</code></td><td data-v-ee996586>\u2014\u2014</td></tr><tr data-v-ee996586><td data-v-ee996586><code data-v-ee996586>no-select</code></td><td data-v-ee996586>\u662F\u5426\u7981\u6B62\u9009\u62E9</td><td data-v-ee996586>boolean</td><td data-v-ee996586>\u2014\u2014</td><td data-v-ee996586>false</td></tr><tr data-v-ee996586><td data-v-ee996586><code data-v-ee996586>referrer-policy</code></td><td data-v-ee996586>\u539F\u751F <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy#syntax" target="_blank" rel="noreferrer" data-v-ee996586>referrerPolicy</a> \u5C5E\u6027</td><td data-v-ee996586>string</td><td data-v-ee996586>\u2014\u2014</td><td data-v-ee996586>\u2014\u2014</td></tr><tr data-v-ee996586><td data-v-ee996586><code data-v-ee996586>round</code></td><td data-v-ee996586>\u914D\u7F6E\u5706\u89D2\uFF0C\u4F20\u5165\u4E00\u4E2A\u6570\u503C</td><td data-v-ee996586>string / number</td><td data-v-ee996586>\u2014\u2014</td><td data-v-ee996586>0</td></tr><tr data-v-ee996586><td data-v-ee996586><code data-v-ee996586>err-src</code></td><td data-v-ee996586>\u52A0\u8F7D\u5931\u8D25\u65F6\u8981\u663E\u793A\u7684\u5730\u5740</td><td data-v-ee996586>string</td><td data-v-ee996586>\u2014\u2014</td><td data-v-ee996586>\u2014\u2014</td></tr><tr data-v-ee996586><td data-v-ee996586><code data-v-ee996586>show-close-btn</code></td><td data-v-ee996586>\u662F\u5426\u5C55\u793A\u9884\u89C8\u7A97\u53E3\u7684\u5173\u95ED\u6309\u94AE</td><td data-v-ee996586>boolean</td><td data-v-ee996586>\u2014\u2014</td><td data-v-ee996586>true</td></tr><tr data-v-ee996586><td data-v-ee996586><code data-v-ee996586>title</code></td><td data-v-ee996586>img \u7684 title</td><td data-v-ee996586>string</td><td data-v-ee996586>\u2014\u2014</td><td data-v-ee996586>\u2014\u2014</td></tr></tbody></table><h2 id="events" tabindex="-1" data-v-ee996586>Events <a class="header-anchor" href="#events" aria-hidden="true" data-v-ee996586>#</a></h2><table data-v-ee996586><thead data-v-ee996586><tr data-v-ee996586><th data-v-ee996586>\u4E8B\u4EF6\u540D\u79F0</th><th data-v-ee996586>\u8BF4\u660E</th></tr></thead><tbody data-v-ee996586><tr data-v-ee996586><td data-v-ee996586><code data-v-ee996586>load</code></td><td data-v-ee996586>\u56FE\u7247\u52A0\u8F7D\u6210\u529F\u89E6\u53D1</td></tr><tr data-v-ee996586><td data-v-ee996586><code data-v-ee996586>error</code></td><td data-v-ee996586>\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u89E6\u53D1</td></tr></tbody></table><h2 id="slots" tabindex="-1" data-v-ee996586>Slots <a class="header-anchor" href="#slots" aria-hidden="true" data-v-ee996586>#</a></h2><table data-v-ee996586><thead data-v-ee996586><tr data-v-ee996586><th data-v-ee996586>\u63D2\u69FD\u540D\u79F0</th><th data-v-ee996586>\u8BF4\u660E\u8BF4\u660E</th></tr></thead><tbody data-v-ee996586><tr data-v-ee996586><td data-v-ee996586><code data-v-ee996586>error</code></td><td data-v-ee996586>\u81EA\u5B9A\u4E49\u52A0\u8F7D\u5931\u8D25\u63D0\u793A</td></tr></tbody></table><h2 id="interface" tabindex="-1" data-v-ee996586>Interface <a class="header-anchor" href="#interface" aria-hidden="true" data-v-ee996586>#</a></h2><p data-v-ee996586>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts" data-v-ee996586><button title="Copy Code" class="copy" data-v-ee996586></button><span class="lang" data-v-ee996586>ts</span><pre data-v-ee996586><code data-v-ee996586><span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>import</span><span style="color:#A6ACCD;" data-v-ee996586> </span><span style="color:#89DDFF;" data-v-ee996586>type</span><span style="color:#A6ACCD;" data-v-ee996586> </span><span style="color:#89DDFF;" data-v-ee996586>{</span></span>
<span class="line" data-v-ee996586><span style="color:#F07178;" data-v-ee996586>  </span><span style="color:#A6ACCD;" data-v-ee996586>ImageInstance</span><span style="color:#89DDFF;" data-v-ee996586>,</span></span>
<span class="line" data-v-ee996586><span style="color:#F07178;" data-v-ee996586>  </span><span style="color:#A6ACCD;" data-v-ee996586>ImagePropsType</span><span style="color:#89DDFF;" data-v-ee996586>,</span></span>
<span class="line" data-v-ee996586><span style="color:#F07178;" data-v-ee996586>  </span><span style="color:#A6ACCD;" data-v-ee996586>ImageFitType</span></span>
<span class="line" data-v-ee996586><span style="color:#89DDFF;" data-v-ee996586>}</span><span style="color:#A6ACCD;" data-v-ee996586> </span><span style="color:#89DDFF;" data-v-ee996586>from</span><span style="color:#A6ACCD;" data-v-ee996586> </span><span style="color:#89DDFF;" data-v-ee996586>&#39;</span><span style="color:#C3E88D;" data-v-ee996586>fighting-design</span><span style="color:#89DDFF;" data-v-ee996586>&#39;</span></span>
<span class="line" data-v-ee996586></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-ee996586>Contributors <a class="header-anchor" href="#contributors" aria-hidden="true" data-v-ee996586>#</a></h2>`,11),P={href:"https://github.com/Tyh2001",target:"_blank"},L=JSON.parse('{"title":"Image \u56FE\u7247","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"\u4F7F\u7528\u672C\u5730\u56FE\u7247","slug":"\u4F7F\u7528\u672C\u5730\u56FE\u7247","link":"#\u4F7F\u7528\u672C\u5730\u56FE\u7247","children":[]},{"level":2,"title":"\u9002\u5E94\u5BB9\u5668\u65B9\u5F0F","slug":"\u9002\u5E94\u5BB9\u5668\u65B9\u5F0F","link":"#\u9002\u5E94\u5BB9\u5668\u65B9\u5F0F","children":[]},{"level":2,"title":"\u5706\u89D2\u56FE\u7247","slug":"\u5706\u89D2\u56FE\u7247","link":"#\u5706\u89D2\u56FE\u7247","children":[]},{"level":2,"title":"\u61D2\u52A0\u8F7D","slug":"\u61D2\u52A0\u8F7D","link":"#\u61D2\u52A0\u8F7D","children":[]},{"level":2,"title":"\u52A0\u8F7D\u5931\u8D25","slug":"\u52A0\u8F7D\u5931\u8D25","link":"#\u52A0\u8F7D\u5931\u8D25","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":2,"title":"Interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"components/image.md","lastUpdated":1666344699000}'),V={name:"components/image.md"},N=Object.assign(V,{setup(d){const c=new URL("/assets/1.aa9c3858.jpg",self.location).href;return(R,z)=>{const e=o("f-image"),l=o("f-space"),r=o("f-avatar");return v(),D("div",null,[u,a(e,{width:"200px",src:"https://tianyuhao.cn/images/auto/1.jpg"}),g,a(e,{src:i(c)},null,8,["src"]),_,a(l,{spacing:"large"},{default:p(()=>[t("div",C,[m,a(e,{width:"110px",height:"110px",fit:"fill",src:"https://tianyuhao.cn/images/auto/4.jpg"})]),t("div",b,[A,a(e,{width:"110px",height:"110px",fit:"contain",src:"https://tianyuhao.cn/images/auto/4.jpg"})]),t("div",f,[E,a(e,{width:"110px",height:"110px",fit:"cover",src:"https://tianyuhao.cn/images/auto/4.jpg"})]),t("div",q,[x,a(e,{width:"110px",height:"110px",fit:"none",src:"https://tianyuhao.cn/images/auto/4.jpg"})]),t("div",T,[k,a(e,{width:"110px",height:"110px",fit:"scale-down",src:"https://tianyuhao.cn/images/auto/4.jpg"})])]),_:1}),S,a(e,{round:"30px",height:"190px",src:"https://tianyuhao.cn/images/auto/4.jpg"}),w,a(e,{lazy:"",width:"200px",src:"https://tianyuhao.cn/images/auto/5.jpg"}),j,a(l,{spacing:"large"},{default:p(()=>[a(e,{width:"200px",src:"https://abc.com/1.png","err-src":"https://tianyuhao.cn/images/auto/1.jpg"}),a(e,{width:"200px",src:"https://abc.com/1.png","err-src":"https://abc.com/1.png",alt:"error"})]),_:1}),I,t("a",P,[a(r,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})])])}}}),W=F(N,[["__scopeId","data-v-ee996586"]]);export{L as __pageData,W as default};
