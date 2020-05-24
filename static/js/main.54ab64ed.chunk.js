(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{53:function(e,n,t){e.exports=t(68)},67:function(e,n,t){},68:function(e,n,t){"use strict";t.r(n);t(54);var o=t(0),i=t.n(o),r=t(33),a=t.n(r),c=t(4),l=t(35),u=t.n(l),d=t(42),s=t(9),f=t(11),h=t(18),m=t(12),v=t.n(m),p=t(3),b=function(){function e(n){Object(f.a)(this,e),this.rootStore=void 0,this.connections=[],this.rootStore=n}return Object(h.a)(e,[{key:"addConnection",value:function(e,n){for(var t=0;t<this.connections.length;t+=1)if(this.connections[t].fromId===e&&this.connections[t].toId===n)return;var o=v()(this.connections,{$push:[{fromId:e,toId:n}]});this.connections=o}},{key:"removeConnnections",value:function(e){var n=this,t=[];this.connections.forEach((function(n,o){n.fromId!==e&&n.toId!==e||t.push(o)})),t.forEach((function(e){n.connections.splice(e,1)}))}}]),e}();Object(p.decorate)(b,{connections:p.observable,addConnection:p.action,removeConnnections:p.action});var g=b,E=function(){function e(n){Object(f.a)(this,e),this.rootStore=void 0,this.file={},this.loadFileModal=!1,this.rootStore=n}return Object(h.a)(e,[{key:"setModal",value:function(e){this.loadFileModal=e}},{key:"loadFileContent",value:function(){this.file&&(this.rootStore.nodesStore.nodes=this.file.nodes,this.rootStore.connectionsStore.connections=this.file.connections)}}]),e}();Object(p.decorate)(E,{file:p.observable,loadFileModal:p.observable,setModal:p.action,loadFileContent:p.action});var y=E,x=t(19),O=function(){function e(n){Object(f.a)(this,e),this.rootStore=void 0,this.nodes={"id:rootNode":{id:"id:rootNode",left:80,top:20,dialogueType:void 0,inConnections:[],outConnections:[],text:""}},this.activeNodeModal={id:"",mode:null},this.rootStore=n}return Object(h.a)(e,[{key:"updateNodePosition",value:function(e,n,t){this.nodes=v()(this.nodes,Object(x.a)({},e,{$merge:{left:n,top:t}}))}},{key:"addNode",value:function(e,n,t){var o=v()(this.nodes,Object(x.a)({},e,{$set:{left:n,top:t,id:e,dialogueType:void 0,inConnections:[],outConnections:[],text:""}}));this.nodes=o}},{key:"deleteNode",value:function(e){var n=this;this.nodesKeys.forEach((function(t){t===e&&delete n.nodes[e]}))}},{key:"setActiveNode",value:function(e,n){this.activeNodeModal={id:e,mode:n}}},{key:"reset",value:function(){this.nodes={"id:rootNode":{id:"id:rootNode",left:80,top:20,dialogueType:void 0,inConnections:[],outConnections:[],text:""}},this.rootStore.connectionsStore.connections=[],this.rootStore.filesStore.file={}}},{key:"removeConnectionFromNode",value:function(e,n){var t,o,i=this,r=[];null===(t=this.nodes[n].inConnections)||void 0===t||t.forEach((function(n,t){n===e&&r.push(t)})),r.forEach((function(e){var t;null===(t=i.nodes[n].inConnections)||void 0===t||t.splice(e,1)}));var a=[];null===(o=this.nodes[n].outConnections)||void 0===o||o.forEach((function(n,t){n===e&&a.push(t)})),a.forEach((function(e){var t;null===(t=i.nodes[n].outConnections)||void 0===t||t.splice(e,1)}))}},{key:"activeNode",get:function(){return this.nodes[this.activeNodeModal.id]}},{key:"activeNodeOptions",get:function(){var e=this,n=this.nodesKeys.filter((function(n){return n!==e.activeNode.id})),t=[];return n.forEach((function(e){t.push({label:e,value:e})})),t}},{key:"nodesKeys",get:function(){return Object.keys(this.nodes)}},{key:"showModal",get:function(){return""!==this.activeNodeModal.id}},{key:"dialogueTypeOptions",get:function(){return[{label:"player",value:"player"},{label:"ai-character",value:"ai-character"}]}}]),e}();Object(p.decorate)(O,{nodes:p.observable,activeNodeModal:p.observable,updateNodePosition:p.action,addNode:p.action,deleteNode:p.action,setActiveNode:p.action,reset:p.action,activeNode:p.computed,activeNodeOptions:p.computed,nodesKeys:p.computed,showModal:p.computed,dialogueTypeOptions:p.computed});var j=O,k=Object(o.createContext)(new function e(){Object(f.a)(this,e),this.nodesStore=new j(this),this.connectionsStore=new g(this),this.filesStore=new y(this)}),C=t(5),w=t(31);function N(){var e=Object(C.a)(["\n  background: ",";\n  cursor: pointer;\n\n  border: none;\n  outline: none;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 150px;\n  height: 60px;\n\n  color: #fff;\n  font-weight: bold;\n  font-size: 20px;\n\n  :hover {\n    background: ",";\n  }\n"]);return N=function(){return e},e}var S=c.c.button(N(),(function(e){return e.theme.colors.accent}),(function(e){return Object(w.b)(.25,e.theme.colors.accent)})),M=function(e){var n=e.children,t=e.onClick;return i.a.createElement(S,{type:"button",onClick:t},n)};function F(){var e=Object(C.a)(["\n  width: ",";\n\n  height: ",";\n"]);return F=function(){return e},e}var D=c.c.div(F(),(function(e){return"string"===typeof e.width?e.width:"".concat(e.width,"px")}),(function(e){return"string"===typeof e.height?e.height:"".concat(e.height,"px")}));function I(){var e=Object(C.a)(["\n  width: 100%;\n  height: auto;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return I=function(){return e},e}function A(){var e=Object(C.a)(["\n  width: 100%;\n  height: 10%;\n\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n\n  font-size: 24px;\n  font-weight: bold;\n\n  color: #fff;\n\n  padding-top: 20px;\n  z-index: 200;\n"]);return A=function(){return e},e}function T(){var e=Object(C.a)(["\n  width: 100%;\n  height: 100%;\n  background: ",";\n"]);return T=function(){return e},e}var z=c.c.div(T(),(function(e){return e.theme.colors.sidebar})),L=c.c.div(A()),R=c.c.div(I()),V=Object(s.a)((function(){var e=Object(o.useContext)(k),n=e.nodesStore,t=e.connectionsStore,r=e.filesStore,a=function(){var e=Object(d.a)(u.a.mark((function e(){var n,t,o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.stringify(r.file),t=new Blob([n],{type:"application/json"}),e.next=4,URL.createObjectURL(t);case 4:o=e.sent,(i=document.createElement("a")).href=o,i.download=r.file.name+".json",document.body.appendChild(i),i.click(),document.body.removeChild(i);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i.a.createElement(z,null,i.a.createElement(L,null,"Dialogue Editor"),i.a.createElement(D,{width:"100%",height:30}),i.a.createElement(R,null,i.a.createElement(M,{onClick:function(){n.reset(),n.setActiveNode("",null)}},"Clear"),i.a.createElement(D,{width:"100%",height:20}),i.a.createElement(M,{onClick:function(){var e={name:"NewFile",createdAt:Date.now(),nodes:n.nodes,connections:t.connections};r.file=e}},"Save"),i.a.createElement(D,{width:"100%",height:20}),i.a.createElement(M,{onClick:function(){return r.setModal(!0)}},"Load File"),r.file.name?i.a.createElement(i.a.Fragment,null,i.a.createElement(D,{width:"100%",height:20}),i.a.createElement(M,{onClick:function(){return a()}},"Download File")):null))})),B=t(85),K=t(34),P=t(84),J="node",W=function(e,n,t){var o="translate3d(".concat(e,"px, ").concat(n,"px, 0)");return{position:"absolute",transform:o,WebkitTransform:o,opacity:t?0:1,height:t?0:""}},Y=function(e,n){if(!e||!n)return{display:"none"};var t=n.x,o=n.y,i="translate(".concat(t,"px, ").concat(o,"px)");return{transform:i,WebkitTransform:i}},U=function(e){var n=e.from,t=n.x,o=n.y,r=e.to,a=r.x,c=r.y,l=e.markerMid;return i.a.createElement("path",{stroke:"#000",strokeWidth:2,strokeLinecap:"round",markerUnits:2,d:"M".concat(t+75,",").concat(o+50,"L").concat((t+a+150)/2,",").concat((o+c+100)/2,"L").concat(a+75,",").concat(c+50),markerMid:l})},X=t(82),$=t(83);function H(){var e=Object(C.a)(["\n  width: 30px;\n  height: 30px;\n  color: ",";\n\n  cursor: pointer;\n"]);return H=function(){return e},e}function q(){var e=Object(C.a)(["\n  width: 30px;\n  height: 30px;\n  color: ",";\n\n  cursor: pointer;\n"]);return q=function(){return e},e}function G(){var e=Object(C.a)(["\n  width: 100%;\n  height: 60px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: move;\n\n  color: ",";\n"]);return G=function(){return e},e}function Q(){var e=Object(C.a)(["\n  width: 100%;\n  height: 40px;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  padding: 5px 10px;\n"]);return Q=function(){return e},e}function Z(){var e=Object(C.a)(["\n  width: 150px;\n  height: 100px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  background: ",";\n  border: 1px solid ",";\n\n  border-radius: 20px;\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);\n"]);return Z=function(){return e},e}var _=c.c.div(Z(),(function(e){return Object(w.a)({colorStops:["".concat(e.theme.colors.sidebar," 5%"),"#1c1c2f 80%"],toDirection:"to top right",fallback:"#fff"})}),(function(e){return e.theme.colors.text})),ee=c.c.div(Q()),ne=c.c.div(G(),(function(e){return e.theme.colors.textSecondary})),te=Object(c.c)(X.a)(q(),(function(e){return e.theme.colors.textSecondary})),oe=Object(c.c)($.a)(H(),(function(e){return e.theme.colors.textSecondary})),ie=Object(s.a)((function(e){var n=e.identifier,t=Object(o.useContext)(k).nodesStore;return i.a.createElement(_,null,i.a.createElement(ee,null,i.a.createElement(te,{onClick:function(){t.setActiveNode(n,"delete")}}),i.a.createElement(oe,{onClick:function(){t.setActiveNode(n,"edit")}})),i.a.createElement(ne,null,n))})),re=function(e){var n=e.identifier;return i.a.createElement("div",null,i.a.createElement(ie,{identifier:n}))},ae=t(8),ce=t(86),le=t(41),ue=function(e){var n=e.id,t=e.left,r=e.top,a=Object(ce.a)({item:{type:J,id:n,left:t,top:r},collect:function(e){return{isDragging:e.isDragging()}}}),c=Object(ae.a)(a,3),l=c[0].isDragging,u=c[1],d=c[2];return Object(o.useEffect)((function(){d(Object(le.a)(),{captureDraggingState:!0})}),[d]),i.a.createElement("div",{ref:u,style:W(t,r,l)},i.a.createElement(ie,{identifier:n}))};function de(){var e=Object(C.a)(["\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 100;\n  position: fixed;\n  pointer-events: none;\n"]);return de=function(){return e},e}function se(){var e=Object(C.a)(["\n  width: 100%;\n  height: 100%;\n  position: relative;\n\n  background: ",";\n"]);return se=function(){return e},e}var fe=c.c.div(se(),(function(e){return e.theme.colors.background})),he=c.c.div(de()),me=function(){var e=Object(P.a)((function(e){return{item:e.getItem(),itemType:e.getItemType(),initialOffset:e.getInitialSourceClientOffset(),currentOffset:e.getSourceClientOffset(),isDragging:e.isDragging()}})),n=e.itemType,t=e.isDragging,o=e.item,r=e.initialOffset,a=e.currentOffset;return t?i.a.createElement(he,null,i.a.createElement("div",{style:Y(r,a)},function(){switch(n){case J:return i.a.createElement(re,{identifier:o.id});default:return null}}())):null},ve=t(87);function pe(){var e=Object(C.a)(["\n  background: #fff;\n  border-bottom: ",";\n  padding: 5px 25px;\n\n  cursor: pointer;\n\n  :hover {\n    background: #f1f1f1;\n  }\n"]);return pe=function(){return e},e}function be(){var e=Object(C.a)(["\n  position: absolute;\n  top: ","px;\n  left: ","px;\n\n  z-index: 300;\n"]);return be=function(){return e},e}var ge=c.c.div(be(),(function(e){return e.y}),(function(e){return e.x+5})),Ee=c.c.div(pe(),(function(e){return e.last?null:"dotted 1px #ccc"})),ye=function(e){var n=e.options,t=e.visible,r=e.changeVisibility,a=Object(o.useState)({x:0,y:0}),c=Object(ae.a)(a,2),l=c[0],u=c[1],d=function(e){e.preventDefault();var n=e.clientX,t=e.clientY;u({x:n,y:t})};return Object(o.useEffect)((function(){return document.addEventListener("contextmenu",d),function(){document.removeEventListener("contextmenu",d)}}),[]),t?i.a.createElement(ge,{x:l.x,y:l.y},n.map((function(e,n,t){return i.a.createElement(Ee,{key:n.toString(),last:t.length-1===n,onClick:function(n){e.callback&&e.callback(n),function(e){e.preventDefault(),r(!1),u({x:0,y:0})}(n)}},e.label)}))):null},xe=Object(s.a)((function(){var e=Object(o.useState)(!1),n=Object(ae.a)(e,2),t=n[0],r=n[1],a=Object(o.useContext)(k),c=a.nodesStore,l=a.connectionsStore,u=a.filesStore,d=Object(o.useCallback)((function(e,n,t){c.updateNodePosition(e,n,t)}),[c]),s=Object(ve.a)({accept:J,drop:function(e,n){var t=n.getDifferenceFromInitialOffset(),o=Math.round(e.left+t.x),i=Math.round(e.top+t.y);d(e.id,o,i)}}),f=Object(ae.a)(s,2)[1];return c.showModal||u.loadFileModal?null:i.a.createElement(i.a.Fragment,null,i.a.createElement(ye,{options:[{label:"New Node",callback:function(e){var n,t,o,i=c.nodesKeys.length,r="id:node".concat(i);n=r,t=e.clientX,o=e.clientY,c.addNode(n,t,o)}},{label:"Load File",callback:function(){u.setModal(!0)}},{label:"Close"}],visible:t,changeVisibility:r}),i.a.createElement(fe,{ref:f,onContextMenu:function(){return r(!0)},onClick:function(){return r(!1)}},c.nodesKeys.map((function(e){return function(e,n){return i.a.createElement(ue,Object.assign({key:n,id:n},e))}(c.nodes[e],e)})),i.a.createElement("svg",{width:"100%",height:"100%",style:{zIndex:400}},i.a.createElement("defs",null,i.a.createElement("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"0",refY:"3.5",orient:"auto"},i.a.createElement("polygon",{points:"0 0, 10 3.5, 0 7"}))),l.connections.length>0?l.connections.map((function(e){var n={x:c.nodes[e.fromId].left,y:c.nodes[e.fromId].top},t={x:c.nodes[e.toId].left,y:c.nodes[e.toId].top};return i.a.createElement(U,{key:"".concat(e.fromId).concat(e.toId),from:n,to:t,markerMid:"url(#arrowhead)"})})):null)))})),Oe=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(xe,null),i.a.createElement(me,null))};function je(){var e=Object(C.a)(["\n  position: absolute;\n  background: transparent;\n  width: auto;\n  height: auto;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  z-index: 300;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n"]);return je=function(){return e},e}function ke(){var e=Object(C.a)(["\n  background: rgba(10, 10, 10, 0.8);\n  width: 100vw;\n  height: 100vh;\n\n  position: absolute;\n  top: 0;\n  left: 0;\n"]);return ke=function(){return e},e}var Ce=c.c.div(ke()),we=c.c.div(je()),Ne=function(e){var n=e.children,t=e.show,o=e.onBackdropClick;return t?i.a.createElement(i.a.Fragment,null,i.a.createElement(Ce,{onClick:o}),i.a.createElement(we,null,n)):null},Se=(t(67),t(16)),Me=t(50),Fe=function(e){var n=e.name,t=e.multiple,r=e.options,a=e.placeholder,c=e.label,l=Object(o.useState)([]),u=Object(ae.a)(l,2),d=u[0],s=u[1],f=Object(o.useRef)(null),h=Object(Se.c)(n),m=h.fieldName,v=h.registerField,p=h.defaultValue;Object(o.useEffect)((function(){v({name:m,ref:f.current,getValue:function(){return t?d:d[0]},setValue:function(e,n){t||s([n])}})}),[v,m,t,d]),Object(o.useEffect)((function(){p&&t&&s(p)}),[p,t]);return t?i.a.createElement("div",{className:"select-group"},c&&i.a.createElement("label",{htmlFor:m},c),i.a.createElement(Me.a,{options:r,value:d,onChange:s,hasSelectAll:!1,labelledBy:"Select"})):i.a.createElement("div",{className:"select-group"},c&&i.a.createElement("label",{htmlFor:m},c),i.a.createElement("select",{ref:f,value:d[0],onChange:function(e){if(!t){var n=[];n.push(e.target.value),s(n)}},className:"multi-select single",placeholder:a,defaultValue:p},r.map((function(e){return i.a.createElement("option",{key:e.value,value:e.value},e.label)}))))},De=t(51),Ie=function(e){var n=e.name,t=e.label,r=e.width,a=Object(De.a)(e,["name","label","width"]),c=Object(o.useRef)(null),l=Object(Se.c)(n),u=l.fieldName,d=l.defaultValue,s=l.registerField,f=l.error;return Object(o.useEffect)((function(){s({name:u,path:"value",ref:c.current})}),[u,s]),i.a.createElement("div",null,t?i.a.createElement("label",{htmlFor:u},t):null,i.a.createElement("textarea",Object.assign({id:u,ref:c,defaultValue:d,style:{width:r||400,height:400,background:"#e4e4e4",fontSize:18,padding:20,resize:"none"}},a)),f?i.a.createElement("span",null,f):null)},Ae=t(49),Te=t(48);function ze(){var e=Object(C.a)(["\n  width: 100%;\n  height: 100%;\n\n  padding: 20px;\n"]);return ze=function(){return e},e}function Le(){var e=Object(C.a)(["\n  width: 100%;\n  height: auto;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n"]);return Le=function(){return e},e}function Re(){var e=Object(C.a)(["\n  width: 100%;\n  height: auto;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Re=function(){return e},e}function Ve(){var e=Object(C.a)(["\n  width: 100%;\n  height: 87.5%;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return Ve=function(){return e},e}function Be(){var e=Object(C.a)(["\n  width: 100%;\n  height: 12.5%;\n\n  padding: 10px 20px;\n  text-align: center;\n\n  color: ",";\n"]);return Be=function(){return e},e}function Ke(){var e=Object(C.a)(["\n  background: ",";\n  width: ","px;\n  height: ","px;\n\n  display: flex;\n  flex-direction: column;\n\n  color: ",";\n"]);return Ke=function(){return e},e}var Pe=c.c.div(Ke(),(function(e){return e.theme.colors.sidebar}),(function(e){return e.width||400}),(function(e){return e.height||400}),(function(e){return e.theme.colors.textSecondary})),Je=c.c.h3(Be(),(function(e){return e.theme.colors.textSecondary})),We=c.c.div(Ve()),Ye=c.c.div(Re()),Ue=c.c.div(Le()),Xe=Object(c.c)(Te.a)(ze()),$e=Object(s.a)((function(){var e=Object(o.useContext)(k).filesStore,n=Object(o.useCallback)((function(n){var t=new FileReader;t.onabort=function(){return console.log("Read aborted")},t.onerror=function(){return console.log("Read failed")},t.onload=function(){var n,o=null===(n=t.result)||void 0===n?void 0:n.toString(),i=void 0!==o&&JSON.parse(o);e.file=i,e.loadFileContent(),e.setModal(!1)},t.readAsText(n[0])}),[e]),t=Object(Ae.a)({onDrop:n,accept:"application/json",multiple:!1}),r=t.getRootProps,a=t.getInputProps,c=t.isDragActive;return i.a.createElement(Ne,{show:e.loadFileModal,onBackdropClick:function(){return e.setModal(!1)}},i.a.createElement(Pe,null,i.a.createElement(Je,null,"Load File"),i.a.createElement(We,null,i.a.createElement("div",r(),i.a.createElement("input",a()),c?i.a.createElement("p",null,"Drop the files here..."):i.a.createElement("p",null,"Drag and drop files / Click here")))))})),He=Object(s.a)((function(){var e=Object(o.useContext)(k),n=e.nodesStore,t=e.connectionsStore,r=Object(o.useRef)(null),a=function(e){var o=e.inConnections,i=e.outConnections,r=e.text,a=e.type,c=n.activeNode;c.text=r,c.dialogueType=a,c.inConnections=o.map((function(e){return e.value})),c.outConnections=i.map((function(e){return e.value})),i.forEach((function(e){var o;n.nodes[e.value].inConnections=[],null===(o=n.nodes[e.value].inConnections)||void 0===o||o.push(c.id),t.addConnection(c.id,e.value)})),o.forEach((function(e){var o;n.nodes[e.value].outConnections=[],null===(o=n.nodes[e.value].outConnections)||void 0===o||o.push(c.id),t.addConnection(e.value,c.id)})),n.setActiveNode("",null)};return i.a.createElement(i.a.Fragment,null,function(){if("delete"===n.activeNodeModal.mode)return i.a.createElement(Ne,{show:n.showModal,onBackdropClick:function(){return n.setActiveNode("",null)}},i.a.createElement(Pe,null,i.a.createElement(Je,null,"Are you sure you want to delete this node?"),i.a.createElement(We,null,i.a.createElement(M,{onClick:function(){var e;"id:rootNode"!==(e=n.activeNodeModal.id)&&(n.deleteNode(e),t.removeConnnections(e),n.nodesKeys.forEach((function(t){n.removeConnectionFromNode(e,t)}))),n.setActiveNode("",null)}},"Yes"),i.a.createElement(D,{width:"100%",height:20}),i.a.createElement(M,{onClick:function(){return n.setActiveNode("",null)}},"No"))));if("edit"===n.activeNodeModal.mode){var e=n.activeNode,o=e.text,c=e.dialogueType,l=[],u=[];if(void 0!==e.inConnections)for(var d=0;d<(null===(s=e.inConnections)||void 0===s?void 0:s.length);d+=1){var s;l.push({label:e.inConnections[d],value:e.inConnections[d]})}if(void 0!==e.outConnections)for(var f=0;f<(null===(h=e.outConnections)||void 0===h?void 0:h.length);f+=1){var h;u.push({label:e.outConnections[f],value:e.outConnections[f]})}var m=l,v=u;return i.a.createElement(Ne,{show:n.showModal,onBackdropClick:function(){return n.setActiveNode("",null)}},i.a.createElement(Pe,{width:1e3,height:800},i.a.createElement(Je,null,"Editing ".concat(n.activeNodeModal.id)),i.a.createElement(We,null,i.a.createElement(Xe,{ref:r,onSubmit:a,initialData:{text:o,inConnections:m,outConnections:v,type:c}},i.a.createElement(Ue,null,i.a.createElement(Fe,{name:"inConnections",label:"In Connections",multiple:!0,options:n.activeNodeOptions}),i.a.createElement(Fe,{name:"outConnections",label:"Out Connections",multiple:!0,options:n.activeNodeOptions}),i.a.createElement(Fe,{name:"type",label:"Dialogue Type",options:n.dialogueTypeOptions})),i.a.createElement(D,{width:"100%",height:20}),i.a.createElement(Ue,null,i.a.createElement(Ie,{name:"text",autoFocus:!0,placeholder:"Dialogue text",width:800})),i.a.createElement(D,{width:"100%",height:30}),i.a.createElement(Ye,null,i.a.createElement(M,{onClick:function(){var e;return null===(e=r.current)||void 0===e?void 0:e.submitForm()}},"Save"))))))}return null}(),i.a.createElement($e,null),i.a.createElement(B.a,{backend:K.a},i.a.createElement(Oe,null)))}));function qe(){var e=Object(C.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return qe=function(){return e},e}function Ge(){var e=Object(C.a)(["\n  width: 85vw;\n  height: 100vh;\n"]);return Ge=function(){return e},e}function Qe(){var e=Object(C.a)(["\n  width: 15vw;\n  height: 100vh;\n"]);return Qe=function(){return e},e}function Ze(){var e=Object(C.a)(["\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    top: 0;\n    left: 0;\n    font-family: 'Fira Code', monospace;\n  }\n\n  html, body {\n    width: 100vw;\n    height: 100vh;\n    background: ",";\n  }\n\n  #root {\n    width: 100%;\n    height: 100%;\n  }\n"]);return Ze=function(){return e},e}var _e=Object(c.b)(Ze(),(function(e){return e.theme.colors.background})),en=c.c.div(Qe()),nn=c.c.div(Ge()),tn=c.c.div(qe());a.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(c.a,{theme:{name:"light",colors:{background:"#f0f0f0",sidebar:"#1b1b2f",primary:"#e43f5a",text:"#000",textSecondary:"#fff",accent:"#e0ac1b"}}},i.a.createElement(_e,null),i.a.createElement(tn,null,i.a.createElement(en,null,i.a.createElement(V,null)),i.a.createElement(nn,null,i.a.createElement(He,null))))),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.54ab64ed.chunk.js.map