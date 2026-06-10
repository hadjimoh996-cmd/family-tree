/* ===================================================
   data.js — بيانات العائلة وحسابات المساعدة
   =================================================== */

"use strict";

// ─── بيانات المستخدمين ────────────────────────────
const USERS = {
  admin:  { password: "admin123",   role: "admin",  name: "المدير" },
  guest:  { password: "guest",      role: "viewer", name: "زائر"  },
  family: { password: "rashid2024", role: "viewer", name: "فرد"   }
};

// ─── البيانات الأولية للشجرة ──────────────────────
const INITIAL_DATA = {
  rootId: "g1",
  members: {
    "g1":      {id:"g1",      name:"حاج ابراهيم حاج محمد بن عمر بن سليمان", birth:"1925", death:"2000", gender:"male",   bio:"جدّ العائلة",                          photo:null, wifeIds:["w1"],  childrenIds:["m1","twqkq6u","8y1qp2r","3b0txtd","wxurt8j","izk057l","uejri1c","wzqfv23","e4v9x8d","fii7st1","49twv9z","arzzs1l","zami828"]},
    "w1":      {id:"w1",      name:"حاج ابراهيم عائشة بنت حاج بكير بن حمو", birth:"1933", death:null,   gender:"female", bio:"ماما كبوسة",                            photo:null, wifeIds:[],      childrenIds:[]},
    "m1":      {id:"m1",      name:"شاشة",       birth:"1951", death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:["zu9vj5b","0n967hq","tybn93e","pn5w6zw","8zul7er","seu25mz","1civfgn","kjwtvfy","9dd36c9","bkyqm2a"]},
    "twqkq6u": {id:"twqkq6u", name:"عائشة",      birth:"1953", death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:["wj5qbkr","taxfncx","lbzgmg2","hk7pw9r","m0vumxs"]},
    "8y1qp2r": {id:"8y1qp2r", name:"لالة",       birth:"1955", death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:["aq1355o","18mjddv","s6tosu6","imdzh0q","1zenpp0","4onjzub","n8mvf7n","uvmp2it"]},
    "3b0txtd": {id:"3b0txtd", name:"سليمان",     birth:"1957", death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:["27rbape","5tumyci","v0gv4km","oank3w8","bqbq7zm","11jbl39","sxoh7wu"]},
    "wxurt8j": {id:"wxurt8j", name:"حمو",        birth:"1959", death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:["mprmc23","1ujpuxe","3raime7","5irajpw","vmapnzo"]},
    "izk057l": {id:"izk057l", name:"ابراهيم",    birth:"1964", death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:["icddluy","ybknhrf","bvgy903","ldglaaq","k41eftd"]},
    "uejri1c": {id:"uejri1c", name:"مسعود",      birth:"1966", death:"2022", gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:["qgucdx3","uhwfba6","z8z668d","f3upp4r","6bjeqwr"]},
    "wzqfv23": {id:"wzqfv23", name:"نانة",       birth:"1967", death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:["xkz0a2k","t3b37og","dh8l6c2","chv5dha"]},
    "e4v9x8d": {id:"e4v9x8d", name:"حاجو",       birth:"1969", death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:["1nr0w8l","2wixdar","j4s13u3","hc6tegj","i0z24tf","t37t6st","ku5ykus","exywlc1"]},
    "fii7st1": {id:"fii7st1", name:"اسماعيل",    birth:"1971", death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:["7ei3xe9","bkzya8u","ff1dxeo","v2vtnn1","woe0gf4","a51yob3"]},
    "49twv9z": {id:"49twv9z", name:"بخيلة",      birth:"1972", death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:["yihfchh","r0n77da","haa3jzv","xlwuyvm","eolsvxj"]},
    "arzzs1l": {id:"arzzs1l", name:"عبد الرحمان",birth:"1973", death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:["qxb9oxu","eh2z9nx","qfuyl0r","077neww","mpiaawb"]},
    "zami828": {id:"zami828", name:"فاطمة",      birth:"1975", death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:["5vhcrkf","aya7hps","7cw40gn","qb4cjj0","ftoopmv","hmyjs5z"]},
    "qgucdx3": {id:"qgucdx3", name:"اسيا",       birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:["338b1is","7bm57tg","a3m5kbl","v5xps7l"]},
    "uhwfba6": {id:"uhwfba6", name:"نور الدين",  birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:["1otwmfa"]},
    "z8z668d": {id:"z8z668d", name:"باحمد",      birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "f3upp4r": {id:"f3upp4r", name:"مروة",       birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "6bjeqwr": {id:"6bjeqwr", name:"بية",        birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "7ei3xe9": {id:"7ei3xe9", name:"صفية",       birth:"1997", death:null,   gender:"female", bio:"الزوج : بابا عمرتيازيط منير", photo:null, wifeIds:[], childrenIds:["j5yxti6","94dlcio","fe3vift"]},
    "bkzya8u": {id:"bkzya8u", name:"سهام",       birth:"2001", death:null,   gender:"female", bio:"الزوج : بكلي بلحاج",         photo:null, wifeIds:[], childrenIds:["jeubhtt","hpnrt9r"]},
    "ff1dxeo": {id:"ff1dxeo", name:"هاجر",       birth:"2004", death:null,   gender:"female", bio:"الزوج : حاج ايوب حمزة",      photo:null, wifeIds:[], childrenIds:["ln77n9s"]},
    "v2vtnn1": {id:"v2vtnn1", name:"محمد",       birth:"2007", death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "woe0gf4": {id:"woe0gf4", name:"عائشة",      birth:"2009", death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "a51yob3": {id:"a51yob3", name:"مريم",       birth:"2012", death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "j5yxti6": {id:"j5yxti6", name:"بابا عمر تيازيط هناء",  birth:"2020", death:null, gender:"female", bio:"", photo:null, wifeIds:[], childrenIds:[]},
    "94dlcio": {id:"94dlcio", name:"بابا عمر تيازيط ندير",  birth:"2024", death:null, gender:"male",   bio:"", photo:null, wifeIds:[], childrenIds:[]},
    "fe3vift": {id:"fe3vift", name:"بابا عمر تيازيط الاء",  birth:"2024", death:null, gender:"female", bio:"", photo:null, wifeIds:[], childrenIds:[]},
    "jeubhtt": {id:"jeubhtt", name:"بكلي ياسر",  birth:"2022", death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "hpnrt9r": {id:"hpnrt9r", name:"بكلي اميرة", birth:"2024", death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "ln77n9s": {id:"ln77n9s", name:"حاج ايوب مريم", birth:"2024", death:null, gender:"female", bio:"", photo:null, wifeIds:[],     childrenIds:[]},
    "xkz0a2k": {id:"xkz0a2k", name:"عزيزة",     birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:["5iot6wq","gpy09ej","0ic74cs","ajndup0","9xi5z1v"]},
    "1nr0w8l": {id:"1nr0w8l", name:"عمر",        birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:["67xl6in","4ym6zjt"]},
    "2wixdar": {id:"2wixdar", name:"زهيرة",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:["0n66eft"]},
    "j4s13u3": {id:"j4s13u3", name:"الياس",      birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "hc6tegj": {id:"hc6tegj", name:"محمد",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "i0z24tf": {id:"i0z24tf", name:"اسلام",      birth:"2004", death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "t37t6st": {id:"t37t6st", name:"صالح",       birth:"2006", death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "ku5ykus": {id:"ku5ykus", name:"انس",        birth:"2010", death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "exywlc1": {id:"exywlc1", name:"عائشة",      birth:"2012", death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "qxb9oxu": {id:"qxb9oxu", name:"سليمة",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:["7mk3d5b","keqhyrd"]},
    "eh2z9nx": {id:"eh2z9nx", name:"فردوس",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:["ofxlmlj"]},
    "qfuyl0r": {id:"qfuyl0r", name:"محمد",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "077neww": {id:"077neww", name:"سفيان",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "mpiaawb": {id:"mpiaawb", name:"مصطفى",      birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "7mk3d5b": {id:"7mk3d5b", name:"عبد الله",   birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "67xl6in": {id:"67xl6in", name:"ريان",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "0n66eft": {id:"0n66eft", name:"محمد",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "yihfchh": {id:"yihfchh", name:"خديجة",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:["k8qob8l","2kok7o9","b1l20qk"]},
    "r0n77da": {id:"r0n77da", name:"محمد",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "5vhcrkf": {id:"5vhcrkf", name:"جابر",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:["5mrqrr3"]},
    "aya7hps": {id:"aya7hps", name:"حمزة",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "7cw40gn": {id:"7cw40gn", name:"اسماء",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:["vw241w4"]},
    "qb4cjj0": {id:"qb4cjj0", name:"محمد",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "ftoopmv": {id:"ftoopmv", name:"ابراهيم",    birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "hmyjs5z": {id:"hmyjs5z", name:"اطفيش",      birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "haa3jzv": {id:"haa3jzv", name:"زينة",       birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:["xiwzx4j","kpxlc3y"]},
    "xlwuyvm": {id:"xlwuyvm", name:"يوسف",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "eolsvxj": {id:"eolsvxj", name:"صديق",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "mprmc23": {id:"mprmc23", name:"فتيحة",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:["kotqf8j"]},
    "1ujpuxe": {id:"1ujpuxe", name:"ادريس",      birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:["ulxlthq","ytv1o3r"]},
    "3raime7": {id:"3raime7", name:"عثمان",      birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:["s0lw02r","68mi9li","lot5d7l"]},
    "5irajpw": {id:"5irajpw", name:"حميدة",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:["tj9whx2","8nhz57m","r9ygonm"]},
    "vmapnzo": {id:"vmapnzo", name:"بكير",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "t3b37og": {id:"t3b37og", name:"عبد السلام", birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:["0yazk5j","gwiobzx"]},
    "dh8l6c2": {id:"dh8l6c2", name:"خضير",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:["eo6tv4g"]},
    "chv5dha": {id:"chv5dha", name:"عيسى",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "5iot6wq": {id:"5iot6wq", name:"ابراهيم",    birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "gpy09ej": {id:"gpy09ej", name:"باحمد",      birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "338b1is": {id:"338b1is", name:"يحيى",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "7bm57tg": {id:"7bm57tg", name:"عائشة",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "a3m5kbl": {id:"a3m5kbl", name:"أريج",       birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "v5xps7l": {id:"v5xps7l", name:"مسعود",      birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "1otwmfa": {id:"1otwmfa", name:"عائشة",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "kotqf8j": {id:"kotqf8j", name:"محمد",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "ulxlthq": {id:"ulxlthq", name:"اسراء",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "ytv1o3r": {id:"ytv1o3r", name:"يحيى",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "s0lw02r": {id:"s0lw02r", name:"محمد",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "68mi9li": {id:"68mi9li", name:"أيمن",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "lot5d7l": {id:"lot5d7l", name:"صهيب",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "tj9whx2": {id:"tj9whx2", name:"يونس",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "8nhz57m": {id:"8nhz57m", name:"عائشة",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "r9ygonm": {id:"r9ygonm", name:"كريم",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "5mrqrr3": {id:"5mrqrr3", name:"عائشة",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "vw241w4": {id:"vw241w4", name:"فافة",       birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "keqhyrd": {id:"keqhyrd", name:"ياسمين",     birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "ofxlmlj": {id:"ofxlmlj", name:"عائشة",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "k8qob8l": {id:"k8qob8l", name:"ابتسام",     birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "2kok7o9": {id:"2kok7o9", name:"أنيس",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "b1l20qk": {id:"b1l20qk", name:"أريج",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "xiwzx4j": {id:"xiwzx4j", name:"وليد",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "kpxlc3y": {id:"kpxlc3y", name:"رياض",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "4ym6zjt": {id:"4ym6zjt", name:"أسامة",      birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "0ic74cs": {id:"0ic74cs", name:"حمزة",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "ajndup0": {id:"ajndup0", name:"محمد",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "9xi5z1v": {id:"9xi5z1v", name:"لقمان",      birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "0yazk5j": {id:"0yazk5j", name:"باحمد",      birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "gwiobzx": {id:"gwiobzx", name:"لينا",       birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "eo6tv4g": {id:"eo6tv4g", name:"اية",        birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "icddluy": {id:"icddluy", name:"عبد النور",  birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:["gafrbei"]},
    "ybknhrf": {id:"ybknhrf", name:"زينب",       birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:["q8i884w","h2rtoe8"]},
    "bvgy903": {id:"bvgy903", name:"لمين",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "ldglaaq": {id:"ldglaaq", name:"محمد",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "k41eftd": {id:"k41eftd", name:"بية",        birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "gafrbei": {id:"gafrbei", name:"اسماعيل",    birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "q8i884w": {id:"q8i884w", name:"سيرين",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "h2rtoe8": {id:"h2rtoe8", name:"رنة",        birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "27rbape": {id:"27rbape", name:"عائشة",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "5tumyci": {id:"5tumyci", name:"حنة",        birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:["dvbgki6","rc59iji","dp4pmhm","vvbkq40"]},
    "v0gv4km": {id:"v0gv4km", name:"بابا بلحاج", birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "oank3w8": {id:"oank3w8", name:"سعاد",       birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "bqbq7zm": {id:"bqbq7zm", name:"مصطفى",      birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "11jbl39": {id:"11jbl39", name:"حفصة",       birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "sxoh7wu": {id:"sxoh7wu", name:"بكير",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "dvbgki6": {id:"dvbgki6", name:"فافة",       birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "rc59iji": {id:"rc59iji", name:"هاجر",       birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "dp4pmhm": {id:"dp4pmhm", name:"محمد",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "vvbkq40": {id:"vvbkq40", name:"سارة",       birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "zu9vj5b": {id:"zu9vj5b", name:"صالح",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:["oa4p9kc","jycardp","cmuzd2r","r3ok8ws","d9cmyoo","efsy4ei"]},
    "0n967hq": {id:"0n967hq", name:"عمر",        birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:["fo9wza2","6hfwg83","ehygvqt","yrqpykc","oo6zoac","mmz6ak8"]},
    "tybn93e": {id:"tybn93e", name:"بهون",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "pn5w6zw": {id:"pn5w6zw", name:"مصطفي",      birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "8zul7er": {id:"8zul7er", name:"محفوظ",      birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "seu25mz": {id:"seu25mz", name:"ماما نانة",   birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "1civfgn": {id:"1civfgn", name:"عائشة",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "kjwtvfy": {id:"kjwtvfy", name:"لالة",        birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "9dd36c9": {id:"9dd36c9", name:"كلثوم",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "bkyqm2a": {id:"bkyqm2a", name:"خديجة",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "oa4p9kc": {id:"oa4p9kc", name:"حاجي",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:["wc08984"]},
    "jycardp": {id:"jycardp", name:"نصر الدين",  birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "cmuzd2r": {id:"cmuzd2r", name:"بكير",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "r3ok8ws": {id:"r3ok8ws", name:"عزيزة",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "d9cmyoo": {id:"d9cmyoo", name:"زهيرة",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "efsy4ei": {id:"efsy4ei", name:"ياسمين",     birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "wc08984": {id:"wc08984", name:"بسمة",       birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "fo9wza2": {id:"fo9wza2", name:"اسحاق",      birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "6hfwg83": {id:"6hfwg83", name:"محمد",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "ehygvqt": {id:"ehygvqt", name:"يونس",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "yrqpykc": {id:"yrqpykc", name:"ولد",        birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "oo6zoac": {id:"oo6zoac", name:"امال",       birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "mmz6ak8": {id:"mmz6ak8", name:"عائشة",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "wj5qbkr": {id:"wj5qbkr", name:"بهون",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:["xry0m8e","33x4jmb","jm68z19","iz95y2a"]},
    "taxfncx": {id:"taxfncx", name:"زهيرة",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:["vt0lxl2","4vccy96","p5ktrtr","sgewujc","4b5ysp2","ejw7s59","7vrnz9r","igqrc1j","b5b06uy","ysi82b6"]},
    "lbzgmg2": {id:"lbzgmg2", name:"سليمان",     birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "hk7pw9r": {id:"hk7pw9r", name:"فتيحة",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "m0vumxs": {id:"m0vumxs", name:"باباحني",    birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "xry0m8e": {id:"xry0m8e", name:"لالة",       birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "33x4jmb": {id:"33x4jmb", name:"عمر",        birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "jm68z19": {id:"jm68z19", name:"مامانانة",   birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "iz95y2a": {id:"iz95y2a", name:"صالح",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "vt0lxl2": {id:"vt0lxl2", name:"بية",        birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "4vccy96": {id:"4vccy96", name:"عيسى",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "p5ktrtr": {id:"p5ktrtr", name:"نانة",       birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "sgewujc": {id:"sgewujc", name:"رقية",       birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "4b5ysp2": {id:"4b5ysp2", name:"عائشة",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "ejw7s59": {id:"ejw7s59", name:"زينب",       birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "7vrnz9r": {id:"7vrnz9r", name:"رحيمة",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "igqrc1j": {id:"igqrc1j", name:"فردوس",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "b5b06uy": {id:"b5b06uy", name:"حياة",       birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "ysi82b6": {id:"ysi82b6", name:"بكير",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "aq1355o": {id:"aq1355o", name:"بهون",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:["6sqknm6","bd9x20t","7i5kau7","6c77zhd","t3x9w86","5xpd30v","ydnc688","eivnkts","ean5nxd","ozw0jcq"]},
    "18mjddv": {id:"18mjddv", name:"صليحة",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:["l2zpwyk","ty58zha","7utn7ep"]},
    "s6tosu6": {id:"s6tosu6", name:"يوسف",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:["zor6ns7","hy439l0","di5d8sy","jjfwra7","e14npdh","qga05d8"]},
    "imdzh0q": {id:"imdzh0q", name:"اسماعيل",    birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:["3vad5kz","sk9hjvt","jp6qm1b","q6f6yhs"]},
    "1zenpp0": {id:"1zenpp0", name:"محفوظ",      birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:["2e7gmq2","g61ld9v","2ffogdu","q3nokwc"]},
    "4onjzub": {id:"4onjzub", name:"محمد",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:["t66pyvn","7empf1c","pob0cee","vmwk1hu"]},
    "n8mvf7n": {id:"n8mvf7n", name:"عمر",        birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:["pv1vfoc","gfhch7d","uytbdqr"]},
    "uvmp2it": {id:"uvmp2it", name:"فتيحة",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:["ovqyzw4","zkp592h","gtgx7do","i55z5qs","846f8xp","jp7jwmb"]},
    "l2zpwyk": {id:"l2zpwyk", name:"سليمان",     birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "ty58zha": {id:"ty58zha", name:"مسعود",      birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "7utn7ep": {id:"7utn7ep", name:"عائشة",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "6sqknm6": {id:"6sqknm6", name:"عيسى",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "bd9x20t": {id:"bd9x20t", name:"رقية",       birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:["os3f88g","zk48zhu"]},
    "7i5kau7": {id:"7i5kau7", name:"عائشة",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:["vl5woux"]},
    "6c77zhd": {id:"6c77zhd", name:"شيماء",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:["dzgitim"]},
    "t3x9w86": {id:"t3x9w86", name:"مسعود",      birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "5xpd30v": {id:"5xpd30v", name:"محمد لمين",  birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "ydnc688": {id:"ydnc688", name:"حديفة",      birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "eivnkts": {id:"eivnkts", name:"نانة ساجدة", birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "ean5nxd": {id:"ean5nxd", name:"بشرى",       birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "ozw0jcq": {id:"ozw0jcq", name:"احسان",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "os3f88g": {id:"os3f88g", name:"ولد",        birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "zk48zhu": {id:"zk48zhu", name:"ولد",        birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "vl5woux": {id:"vl5woux", name:"ولد",        birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "dzgitim": {id:"dzgitim", name:"عبد العزيز", birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "zor6ns7": {id:"zor6ns7", name:"بكير",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "hy439l0": {id:"hy439l0", name:"ايمان",      birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "di5d8sy": {id:"di5d8sy", name:"مسعود",      birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "jjfwra7": {id:"jjfwra7", name:"سارة",       birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "e14npdh": {id:"e14npdh", name:"هادية",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "qga05d8": {id:"qga05d8", name:"محمد",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "3vad5kz": {id:"3vad5kz", name:"محمد",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "sk9hjvt": {id:"sk9hjvt", name:"مسعود",      birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "jp6qm1b": {id:"jp6qm1b", name:"بية",        birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "q6f6yhs": {id:"q6f6yhs", name:"أسامة",      birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "2e7gmq2": {id:"2e7gmq2", name:"مسعود",      birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "g61ld9v": {id:"g61ld9v", name:"عبد الرحيم", birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "2ffogdu": {id:"2ffogdu", name:"بية",        birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "q3nokwc": {id:"q3nokwc", name:"ريحانة",     birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "t66pyvn": {id:"t66pyvn", name:"بنت",        birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "7empf1c": {id:"7empf1c", name:"بنت",        birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "pob0cee": {id:"pob0cee", name:"بنت",        birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "vmwk1hu": {id:"vmwk1hu", name:"ولد",        birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "pv1vfoc": {id:"pv1vfoc", name:"بنت",        birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "gfhch7d": {id:"gfhch7d", name:"بنت",        birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "uytbdqr": {id:"uytbdqr", name:"بنت",        birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "ovqyzw4": {id:"ovqyzw4", name:"زهيرة",      birth:null,   death:null,   gender:"female", bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "zkp592h": {id:"zkp592h", name:"مسعود",      birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "gtgx7do": {id:"gtgx7do", name:"عيسى",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "i55z5qs": {id:"i55z5qs", name:"حديفة",      birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "846f8xp": {id:"846f8xp", name:"ادم",        birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]},
    "jp7jwmb": {id:"jp7jwmb", name:"جواد",       birth:null,   death:null,   gender:"male",   bio:"", photo:null, wifeIds:[],      childrenIds:[]}
  }
};

// ─── دوال المساعدة ────────────────────────────────
const uid         = () => Math.random().toString(36).slice(2, 9);
const calcAge     = (b, d) => b ? ((d || new Date().getFullYear()) - parseInt(b)) : null;
const initials    = n => n.split(" ").slice(0, 2).map(w => w[0]).join("");

function countDescendants(id, visited = new Set()) {
  if (visited.has(id)) return 0;
  visited.add(id);
  const m = appState.data.members[id];
  if (!m) return 0;
  let count = 0;
  for (const cid of (m.childrenIds || [])) {
    count += 1 + countDescendants(cid, visited);
  }
  return count;
}

// ─── تخزين ────────────────────────────────────────
function loadDataFromStorage() {
  const saved = localStorage.getItem("familyTreeData");
  if (saved) {
    try {
      const p = JSON.parse(saved);
      if (p.members && p.rootId && p.members["g1"] && p.members["g1"].name === INITIAL_DATA.members["g1"].name) {
        return p;
      }
    } catch (e) { /* تجاهل */ }
  }
  localStorage.removeItem("familyTreeData");
  return JSON.parse(JSON.stringify(INITIAL_DATA));
}

function saveDataToStorage() {
  localStorage.setItem("familyTreeData", JSON.stringify(appState.data));
}

// ─── الحالة المركزية ───────────────────────────────
const appState = {
  user:          null,
  data:          loadDataFromStorage(),
  selected:      null,
  openedByDepth: {},       // { [depth]: memberId }
  openedDepth1:  null,     // id عنصر الجيل الأول المنزول
  modal:         null,
  photoPreview:  ""
};
