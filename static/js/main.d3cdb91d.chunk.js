(this["webpackJsonplauren-overflow"]=this["webpackJsonplauren-overflow"]||[]).push([[0],{13:function(e,t,n){e.exports=n(23)},18:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(12),i=n.n(o),r=(n(18),n(1)),u=n(2),c=n(4),l=n(3),p=n(5),m=n(7),v=n.n(m);n(20);v.a.initializeApp({apiKey:"AIzaSyDeDpcgUhIRq4pS05q_gcbCsimItUJHRr0",authDomain:"lauren-overflow.firebaseapp.com",databaseURL:"https://lauren-overflow.firebaseio.com",projectId:"lauren-overflow",storageBucket:"lauren-overflow.appspot.com",messagingSenderId:"149714945568",appId:"1:149714945568:web:ed5b8dc1ef6d00d8f31e45"});var d=v.a;var h=function(e){var t=function(t,n){t.preventDefault(),e.voteKey in e.interactedWith||(e.interactedWith[e.voteKey]=0),e.interactedWith[e.voteKey]+=n,e.dbRef.update({upvotes:e.upvotes+n})};return s.a.createElement("div",{className:"voteKnob"},s.a.createElement("button",{onClick:function(e){t(e,1)},disabled:e.interactedWith[e.voteKey]&&e.interactedWith[e.voteKey]>=1},"+"),s.a.createElement("p",null,e.upvotes),s.a.createElement("button",{onClick:function(e){t(e,-1)},disabled:e.interactedWith[e.voteKey]&&e.interactedWith[e.voteKey]<=-1},"-"))};var f=function(e){return s.a.createElement("div",null,s.a.createElement("form",{className:"questionForm",onSubmit:e.questionSubmit},s.a.createElement("label",{htmlFor:"questionInput"},"Enter your question:"),s.a.createElement("input",{type:"text",name:"questionInput",id:"questionInput",value:e.questionInput,onChange:e.inputChange}),s.a.createElement("button",{type:"submit"},"Ask Question")),s.a.createElement("ul",{className:"questionList"},e.questionList.map((function(t,n){return s.a.createElement("li",{key:t.key+n,className:"moved"in t?t.moved>0?"moveDown":"moveUp":null},s.a.createElement("p",{className:"textContent"},s.a.createElement("a",{href:"#",onClick:function(){return e.questionSelect(t.key)}},t.text)),s.a.createElement(h,{dbRef:d.database().ref(t.key),upvotes:t.upvotes,voteKey:t.key,interactedWith:e.interactedWith}))}))))},w=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(c.a)(this,Object(l.a)(t).call(this))).exit=function(t){t.preventDefault(),e.props.returnFunction()},e.inputChange=function(t){e.setState({answerInput:t.target.value})},e.answerSubmit=function(t){if(t.preventDefault(),""!==e.state.answerInput){var n={answer:e.state.answerInput,upvotes:0};e.setState({answerInput:""}),d.database().ref("".concat(e.props.selectedQuestion,"/answers")).push(n)}},e.state={question:"",answers:[],answersSortedKeys:[],answerInput:"",questionRef:{}},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=d.database().ref(this.props.selectedQuestion);t.on("value",(function(t){var n=t.val(),a=[];for(var s in n.answers)a.push({answerRef:d.database().ref("".concat(e.props.selectedQuestion,"/answers/").concat(s)),answerKey:s,text:n.answers[s].answer,upvotes:n.answers[s].upvotes});a.sort((function(e,t){return t.upvotes-e.upvotes}));var o=[];a.forEach((function(t,n){o.push(t.answerKey);var a=e.state.answersSortedKeys.indexOf(t.answerKey);a>=0&&a!==n&&(t.moved=a<n?1:-1)})),console.log(a),e.setState({answers:a,answersSortedKeys:o,question:n.question})})),this.setState({questionRef:t})}},{key:"componentWillUnmount",value:function(){this.state.questionRef.off("value")}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("h2",null,this.state.question),s.a.createElement("ul",{className:"questionThread"},this.state.answers.map((function(t,n){return s.a.createElement("li",{key:e.props.selectedQuestion+t.answerKey+n,className:"moved"in t?t.moved>0?"moveDown":"moveUp":null},s.a.createElement("p",{className:"textContent answerText"},t.text),s.a.createElement(h,{dbRef:t.answerRef,upvotes:t.upvotes,voteKey:e.props.selectedQuestion+t.answerKey,interactedWith:e.props.interactedWith}))}))),s.a.createElement("form",{className:"answerForm",onSubmit:this.answerSubmit},s.a.createElement("label",{htmlFor:"answerInput"},"Enter your answer: "),s.a.createElement("input",{type:"text",name:"answerInput",id:"answerInput",value:this.state.answerInput,onChange:this.inputChange}),s.a.createElement("button",{type:"submit"},"Provide answer")),s.a.createElement("button",{className:"returnButton",onClick:this.exit},"Return to questions list"))}}]),t}(s.a.Component),b=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(c.a)(this,Object(l.a)(t).call(this))).inputChange=function(t){e.setState({questionInput:t.target.value})},e.questionSubmit=function(t){if(t.preventDefault(),""!==e.state.questionInput){var n={question:e.state.questionInput,upvotes:0,postDate:Date.now(),answers:{}};e.setState({questionInput:""}),e.state.dbRef.push(n)}},e.selectQuestion=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e.setState({selectedQuestion:t})},e.state={questionList:[],questionSortedKeys:[],dbRef:{},questionInput:"",selectedQuestion:null,interactedWith:{}},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=d.database().ref();this.setState({dbRef:t}),t.on("value",(function(t){var n=t.val(),a=[];for(var s in n)a.push({key:s,text:n[s].question,upvotes:n[s].upvotes});a.sort((function(e,t){return t.upvotes-e.upvotes}));var o=[];a.forEach((function(t,n){o.push(t.key);var a=e.state.questionSortedKeys.indexOf(t.key);a>=0&&a!==n&&(t.moved=a<n?1:-1)})),e.setState({questionList:a,questionSortedKeys:o})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",null,s.a.createElement("div",{className:"wrapper"},s.a.createElement("h1",null,"Questionable Questions"))),s.a.createElement("div",{className:"wrapper"},s.a.createElement("main",{id:"main"},this.state.selectedQuestion?s.a.createElement(w,{selectedQuestion:this.state.selectedQuestion,returnFunction:this.selectQuestion,interactedWith:this.state.interactedWith}):s.a.createElement(f,{questionList:this.state.questionList,inputChange:this.inputChange,questionSubmit:this.questionSubmit,questionInput:this.state.questionInput,questionSelect:this.selectQuestion,interactedWith:this.state.interactedWith}))),s.a.createElement("footer",null,s.a.createElement("div",{className:"wrapper"},s.a.createElement("p",null,"\xa9 2019 Lauren Hetherington"))))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.d3cdb91d.chunk.js.map