(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{wQq9:function(t,e,o){"use strict";o.r(e),o.d(e,"NotificationModule",(function(){return w}));var i=o("ofXK"),n=o("3Pt+"),r=o("tyNb"),a=o("fXoL"),s=o("bh5J");let c=(()=>{class t{constructor(){}getRoomData(t,e,o){this.roomid=t,this.roomcharges=e,this.roomNumber=o,console.log("this is id in service",this.roomid)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function b(t,e){1&t&&(a.Pb(0,"i",16),a.sc(1,"This room is available"),a.Ob())}function l(t,e){if(1&t&&(a.Pb(0,"i",17),a.sc(1),a.Ob(),a.Nb(2,"br")),2&t){const t=a.bc().$implicit;a.Bb(1),a.uc("*Note : This room is available till: ",t.startDate,"")}}function m(t,e){if(1&t){const t=a.Qb();a.Pb(0,"div",2),a.Pb(1,"div",3),a.Pb(2,"div",4),a.Pb(3,"div",5),a.Nb(4,"img",6),a.Ob(),a.Ob(),a.Pb(5,"div",7),a.Pb(6,"div",8),a.Pb(7,"p",9),a.Pb(8,"label",10),a.Pb(9,"b"),a.sc(10,"Room No:"),a.Ob(),a.Ob(),a.sc(11),a.Ob(),a.qc(12,b,2,0,"i",11),a.Nb(13,"br"),a.qc(14,l,3,1,"ng-template",null,12,a.rc),a.Pb(16,"label",10),a.Pb(17,"b",13),a.sc(18,"Description:"),a.Ob(),a.Ob(),a.Pb(19,"p",14),a.sc(20),a.Ob(),a.Pb(21,"p",14),a.Pb(22,"label",10),a.Pb(23,"b"),a.sc(24,"Charges : "),a.Ob(),a.Ob(),a.sc(25),a.Ob(),a.Pb(26,"p",14),a.Pb(27,"label",10),a.Pb(28,"b"),a.sc(29,"Type:"),a.Ob(),a.Ob(),a.sc(30),a.Pb(31,"a",15),a.Xb("click",(function(){a.lc(t);const o=e.$implicit;return a.bc().getRoomDetails(o._id,o.charges,o.roomNumber)})),a.sc(32,"Book Now"),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob()}if(2&t){const t=e.$implicit,o=a.kc(15);a.Bb(4),a.hc("src",t.image,a.mc),a.Bb(7),a.uc(" ",t.roomNumber,""),a.Bb(1),a.gc("ngIf","Available"==t.status)("ngIfElse",o),a.Bb(8),a.tc(t.description),a.Bb(5),a.tc(t.charges),a.Bb(5),a.uc(" \xa0\xa0",t.Type," ")}}let d=(()=>{class t{constructor(t,e,o){this.router=t,this.getroom=e,this.roomdata=o,this.room=[]}ngOnInit(){this.getroom.getRooms(),this.SubRoom=this.getroom.getRoomUpdateListner().subscribe(t=>{this.room=t}),this.router.routeReuseStrategy.shouldReuseRoute=()=>!1}getRoomDetails(t,e,o){this.roomdata.getRoomData(t,e,o)}}return t.\u0275fac=function(e){return new(e||t)(a.Mb(r.a),a.Mb(s.a),a.Mb(c))},t.\u0275cmp=a.Gb({type:t,selectors:[["app-notification"]],decls:3,vars:1,consts:[[1,"row",2,"padding-top","2%","padding-left","2%","padding-right","2%"],["class","card col-lg-12 Card ",4,"ngFor","ngForOf"],[1,"card","col-lg-12","Card"],[1,"row","g-0"],[1,"col-md-4"],[1,"container",2,"height","200px","width","200px","margin-left","0px"],["alt","...",1,"card-image",3,"src"],[1,"col-md-8"],[1,"card-body"],[1,"card-title",2,"font-size","medium"],["for",""],["style","color:green;",4,"ngIf","ngIfElse"],["booked",""],[2,"font-size","medium"],[1,"card-text",2,"font-size","medium"],["routerLink","./bookroom",1,"btn","btn-danger",2,"position","absolute","bottom","8px","right","8px",3,"click"],[2,"color","green"],[2,"color","red"]],template:function(t,e){1&t&&(a.Nb(0,"router-outlet"),a.Pb(1,"div",0),a.qc(2,m,33,7,"div",1),a.Ob()),2&t&&(a.Bb(2),a.gc("ngForOf",e.room))},directives:[r.d,i.j,i.k,r.b],styles:[".Card[_ngcontent-%COMP%]{margin-bottom:1%;box-shadow:5px 5px 10px rgba(0,0,0,.3)}.card-image[_ngcontent-%COMP%]{height:100%;width:150%}.container[_ngcontent-%COMP%]{color:navy;height:10%;width:10%}"]}),t})();var h=o("PSD3"),u=o.n(h),g=o("tk/3");let f=(()=>{class t{constructor(t){this.http=t,this.status="False"}bookRoom(t,e,o,i,n,r,a,s,c,b,l){return this.http.post("https://roomservers.herokuapp.com/bookroom",{Name:t,Phone:e,documentName:o,documentNumber:i,startDate:n,endDate:r,Amount:a,roomid:s,roomNumber:c,status:b,paymentStatus:l})}}return t.\u0275fac=function(e){return new(e||t)(a.Tb(g.b))},t.\u0275prov=a.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function p(t,e){1&t&&a.Nb(0,"input",17)}function P(t,e){1&t&&a.Nb(0,"input",18)}function v(t,e){1&t&&a.Nb(0,"input",19)}function y(t,e){if(1&t&&(a.Pb(0,"div",2),a.Pb(1,"label",3),a.Pb(2,"b",4),a.sc(3,"Payable:"),a.Ob(),a.Ob(),a.sc(4,"\xa0\xa0\xa0 "),a.Pb(5,"h2"),a.sc(6),a.Ob(),a.Ob()),2&t){const t=a.bc();a.Bb(6),a.vc("",t.days," X ",t.roomcharges," = ",t.payable,"")}}const N=[{path:"",component:d},{path:"bookroom",component:(()=>{class t{constructor(t,e,o){this.roomdata=t,this.roombook=e,this.router=o}ngOnInit(){this.room_id=this.roomdata.roomid,this.roomcharges=this.roomdata.roomcharges,this.roomnumber=this.roomdata.roomNumber}setvalue(t){this.showcontent=t.target.value,console.log(this.showcontent)}getTotalDays(){this.date1=new Date(this.startdate),this.date2=new Date(this.enddate),this.total=(this.date2-this.date1)/864e5,this.days=Math.round(this.total),this.payable=this.days*this.roomcharges,console.log(this.days),this.days<0&&console.log("Invalid Days")}bookRoom(t){t.preventDefault();const e=new RegExp(/[a-zA-Z][a-zA-Z ]+/),o=new RegExp(/^((\\+91-?)|0)?[0-9]{10}$/),n=new RegExp(/^(\d{12})$/),r=new RegExp(/[A-Z]{5}[0-9]{4}[A-Z]{1}/),a=new RegExp(/^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/);this.Name=t.target.querySelector("#customerName").value,this.Phone=t.target.querySelector("#phone").value,this.startDate=t.target.querySelector("#startdate").value,this.endDate=t.target.querySelector("#enddate").value,console.log("this is the startDate before sending",this.startDate);let s=Object(i.o)(new Date,"yyyy-MM-dd","en_US"),c=Object(i.o)(this.startdate,"yyyy-MM-dd","en_US"),b=Object(i.o)(this.endDate,"yyyy-MM-dd","en_US");if(c<s)u.a.fire({title:"Error",text:"You cannot book room with past date",icon:"error",timer:1700});else{status=c>s?"pre-booked":"Booked";const i=e.test(this.Name.toString());console.log("Name is "+i);const l=o.test(this.Phone.toString());if(console.log("Phone is "+l),"AdhaarCard"===this.showcontent)if(1==i)if(1==l){this.documentNumber=t.target.querySelector("#adhaarno").value;const e=n.test(this.documentNumber.toString());console.log("Addhar is "+e),1==e?this.payable>0?this.roombook.bookRoom(this.Name,this.Phone,this.showcontent,this.documentNumber,c,b,this.payable,this.room_id,this.roomnumber,status,"PAYMENT_PENDING").subscribe(t=>{u.a.fire("Booked","success"),console.log("this is Name before sending",this.roomnumber),console.log(t),this.router.navigateByUrl("Home/Notification")}):(u.a.fire({title:"Fail",text:"Enter valid Dates",icon:"error",showConfirmButton:!1,timer:1900}),this.router.navigateByUrl("Home/Notification")):(u.a.fire({title:"Fail",text:"Enter valid Aadhar Number",icon:"error",showConfirmButton:!1,timer:1900}),this.router.navigateByUrl("Home/Notification"))}else u.a.fire({title:"Fail",text:"Enter valid Phone number",icon:"error",showConfirmButton:!1,timer:1900}),this.router.navigateByUrl("Home/Notification");else u.a.fire({title:"Fail",text:"Enter valid name",icon:"error",showConfirmButton:!1,timer:1900}),this.router.navigateByUrl("Home/Notification");else if("PanCard"===this.showcontent)if(1==i)if(1==l){this.documentNumber=t.target.querySelector("#panno").value;const e=r.test(this.documentNumber.toString());console.log("Pan is "+e),1==e?this.payable>0?this.roombook.bookRoom(this.Name,this.Phone,this.showcontent,this.documentNumber,c,b,this.payable,this.room_id,this.roomnumber,status,"PAYMENT_PENDING").subscribe(t=>{u.a.fire("Booked","success"),console.log("this is Name before sending",this.roomnumber),console.log(t),this.router.navigateByUrl("Home/Notification")}):(u.a.fire({title:"Fail",text:"Enter valid Dates",icon:"error",showConfirmButton:!1,timer:1900}),this.router.navigateByUrl("Home/Notification")):(u.a.fire({title:"Fail",text:"Enter valid PanCard Number",icon:"error",showConfirmButton:!1,timer:1900}),this.router.navigateByUrl("Home/Notification"))}else u.a.fire({title:"Fail",text:"Enter valid Phone number",icon:"error",showConfirmButton:!1,timer:1900}),this.router.navigateByUrl("Home/Notification");else u.a.fire({title:"Fail",text:"Enter valid name",icon:"error",showConfirmButton:!1,timer:1900}),this.router.navigateByUrl("Home/Notification");else if(1==i)if(1==l){this.documentNumber=t.target.querySelector("#dno").value;const e=a.test(this.documentNumber.toString());console.log("Driving Licence is "+e),1==e?this.payable>0?this.roombook.bookRoom(this.Name,this.Phone,this.showcontent,this.documentNumber,c,b,this.payable,this.room_id,this.roomnumber,status,"PAYMENT_PENDING").subscribe(t=>{u.a.fire("Booked","success"),console.log("this is Name before sending",this.roomnumber),console.log(t),this.router.navigateByUrl("Home/Notification")}):(u.a.fire({title:"Fail",text:"Enter valid Dates",icon:"error",showConfirmButton:!1,timer:1900}),this.router.navigateByUrl("Home/Notification")):(u.a.fire({title:"Fail",text:"Enter valid Driving Licence Number",icon:"error",showConfirmButton:!1,timer:1900}),this.router.navigateByUrl("Home/Notification"))}else u.a.fire({title:"Fail",text:"Enter valid Phone number",icon:"error",showConfirmButton:!1,timer:1900}),this.router.navigateByUrl("Home/Notification");else u.a.fire({title:"Fail",text:"Enter valid name",icon:"error",showConfirmButton:!1,timer:1900}),this.router.navigateByUrl("Home/Notification");console.log("roomId before sending",this.room_id)}}}return t.\u0275fac=function(e){return new(e||t)(a.Mb(c),a.Mb(f),a.Mb(r.a))},t.\u0275cmp=a.Gb({type:t,selectors:[["app-bookroom"]],inputs:{room:"room"},decls:52,vars:6,consts:[[1,"bookroom-container"],[3,"submit"],[1,"form-group"],["for",""],[2,"font-size","medium"],["type","text","name","customerName","id","customerName","placeholder","Enter Customer Name","required",""],["type","number","name","phone","id","phone","placeholder","Enter Phone No.","minlength","10","required",""],["type","radio","name","docname","id","docname","value","AdhaarCard",3,"change"],["type","radio","name","docname","id","docname","value","PanCard",3,"change"],["type","radio","name","docname","id","docname","value","DrivingLicence",3,"change"],["type","number","name","adhaarno","id","adhaarno","minlength","12","placeholder","Enter Adhaar no",4,"ngIf"],["type","text","name","panno","id","panno","minlength","10","placeholder","Enter Pan No",4,"ngIf"],["type","text","name","dno","id","dno","minlength","16","placeholder","Enter licence No",4,"ngIf"],["type","date","name","startdate","id","startdate","required","",3,"ngModel","ngModelChange"],["type","date","name","enddate","id","enddate","required","",3,"ngModel","ngModelChange","change"],["class","form-group",4,"ngIf"],[1,"btn","btn-danger",2,"position","absolute"],["type","number","name","adhaarno","id","adhaarno","minlength","12","placeholder","Enter Adhaar no"],["type","text","name","panno","id","panno","minlength","10","placeholder","Enter Pan No"],["type","text","name","dno","id","dno","minlength","16","placeholder","Enter licence No"]],template:function(t,e){1&t&&(a.Pb(0,"div",0),a.Pb(1,"form",1),a.Xb("submit",(function(t){return e.bookRoom(t)})),a.Pb(2,"div",2),a.Pb(3,"label",3),a.Pb(4,"b",4),a.sc(5,"Name"),a.Ob(),a.Ob(),a.sc(6,"\xa0\xa0\xa0 "),a.Nb(7,"input",5),a.Ob(),a.Pb(8,"div",2),a.Pb(9,"label",3),a.Pb(10,"b",4),a.sc(11,"Phone no."),a.Ob(),a.Ob(),a.sc(12,"\xa0\xa0\xa0 "),a.Nb(13,"input",6),a.Ob(),a.Pb(14,"div",2),a.Pb(15,"label",3),a.Pb(16,"b",4),a.sc(17,"Adhaar card"),a.Ob(),a.Ob(),a.sc(18,"\xa0\xa0\xa0 "),a.Pb(19,"input",7),a.Xb("change",(function(t){return e.setvalue(t)})),a.Ob(),a.sc(20,"\xa0\xa0\xa0 "),a.Pb(21,"label",3),a.Pb(22,"b",4),a.sc(23,"Pan card"),a.Ob(),a.Ob(),a.sc(24,"\xa0\xa0\xa0 "),a.Pb(25,"input",8),a.Xb("change",(function(t){return e.setvalue(t)})),a.Ob(),a.sc(26,"\xa0\xa0\xa0 "),a.Pb(27,"label",3),a.Pb(28,"b",4),a.sc(29,"Driving licence"),a.Ob(),a.Ob(),a.sc(30,"\xa0\xa0\xa0 "),a.Pb(31,"input",9),a.Xb("change",(function(t){return e.setvalue(t)})),a.Ob(),a.Ob(),a.Pb(32,"div",2),a.qc(33,p,1,0,"input",10),a.qc(34,P,1,0,"input",11),a.qc(35,v,1,0,"input",12),a.Ob(),a.Pb(36,"div",2),a.Pb(37,"label",3),a.Pb(38,"b",4),a.sc(39,"Start-Date"),a.Ob(),a.Ob(),a.sc(40,"\xa0\xa0\xa0 "),a.Pb(41,"input",13),a.Xb("ngModelChange",(function(t){return e.startdate=t})),a.Ob(),a.Ob(),a.Pb(42,"div",2),a.Pb(43,"label",3),a.Pb(44,"b",4),a.sc(45,"End-Date"),a.Ob(),a.Ob(),a.sc(46,"\xa0\xa0\xa0 "),a.Pb(47,"input",14),a.Xb("ngModelChange",(function(t){return e.enddate=t}))("change",(function(){return e.getTotalDays()})),a.Ob(),a.Ob(),a.qc(48,y,7,3,"div",15),a.Pb(49,"div",2),a.Pb(50,"button",16),a.sc(51,"Book"),a.Ob(),a.Ob(),a.Ob(),a.Ob()),2&t&&(a.Bb(33),a.gc("ngIf","AdhaarCard"===e.showcontent),a.Bb(1),a.gc("ngIf","PanCard"===e.showcontent),a.Bb(1),a.gc("ngIf","DrivingLicence"===e.showcontent),a.Bb(6),a.gc("ngModel",e.startdate),a.Bb(6),a.gc("ngModel",e.enddate),a.Bb(1),a.gc("ngIf",e.days))},directives:[n.o,n.i,n.j,i.k,n.a,n.m,n.h,n.k],styles:[".bookroom-container[_ngcontent-%COMP%]{padding:5%}"]}),t})()}];let O=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(e){return new(e||t)},imports:[[r.c.forChild(N)],r.c]}),t})(),w=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(e){return new(e||t)},imports:[[n.f,i.b,O,n.l]]}),t})()}}]);