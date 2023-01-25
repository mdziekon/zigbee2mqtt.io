"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[46645],{583609:(e,t,o)=>{o.r(t),o.d(t,{data:()=>l});const l=JSON.parse('{"key":"v-854a3e94","path":"/devices/TS011F_wall_outlet.html","title":"TuYa TS011F_wall_outlet control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa TS011F_wall_outlet control via MQTT","description":"Integrate your TuYa TS011F_wall_outlet via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-05-01T14:47:09.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Power_on_behavior (enum)","slug":"power-on-behavior-enum","link":"#power-on-behavior-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1674576147000},"filePathRelative":"devices/TS011F_wall_outlet.md"}')},866912:(e,t,o)=>{o.r(t),o.d(t,{default:()=>_});var l=o(166252);const a=(0,l._)("h1",{id:"tuya-ts011f-wall-outlet",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#tuya-ts011f-wall-outlet","aria-hidden":"true"},"#"),(0,l.Uk)(" TuYa TS011F_wall_outlet")],-1),i=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th"),(0,l._)("th")])],-1),u=(0,l._)("tr",null,[(0,l._)("td",null,"Model"),(0,l._)("td",null,"TS011F_wall_outlet")],-1),d=(0,l._)("td",null,"Vendor",-1),n=(0,l._)("tr",null,[(0,l._)("td",null,"Description"),(0,l._)("td",null,"In-wall outlet")],-1),r=(0,l._)("tr",null,[(0,l._)("td",null,"Exposes"),(0,l._)("td",null,"switch (state), power_on_behavior, linkquality")],-1),s=(0,l._)("tr",null,[(0,l._)("td",null,"Picture"),(0,l._)("td",null,[(0,l._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS011F_wall_outlet.jpg",alt:"TuYa TS011F_wall_outlet"})])],-1),c=(0,l._)("tr",null,[(0,l._)("td",null,"White-label"),(0,l._)("td",null,"Teekar SWP86-01OG, ClickSmart+ CMA30035, BSEED Zigbee Socket")],-1),h=(0,l.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum" aria-hidden="true">#</a> Power_on_behavior (enum)</h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>previous</code>, <code>on</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),p={},_=(0,o(983744).Z)(p,[["render",function(e,t){const o=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.kq)(" !!!! "),(0,l.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,l.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,l.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,l.kq)(" !!!! "),a,(0,l._)("table",null,[i,(0,l._)("tbody",null,[u,(0,l._)("tr",null,[d,(0,l._)("td",null,[(0,l.Wm)(o,{to:"/supported-devices/#v=TuYa"},{default:(0,l.w5)((()=>[(0,l.Uk)("TuYa")])),_:1})])]),n,r,s,c])]),(0,l.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,l.kq)(" Notes END: Do not edit below this line "),h])}]])}}]);