let cnt=-1;
let beat = new Audio('s01.mp3');
let txt=["אשרי תמימי־דרך* ההלכים בתורת יהוה׃*אשרי נצרי עדתיו* בכל־לב ידרשוהו׃*אף לא־פעלו עולה* בדרכיו הלכו׃*אתה צויתה פקדיך* לשמר מאד׃*אחלי יכנו דרכי *לשמר חקיך׃*אז לא־אבוש בהביטי אל־כל־מצותיך׃*אודך בישר לבב *בלמדי משפטי צדקך׃*את־חקיך אשמר* אל־תעזבני עד־מאד׃*","במה יזכה־נער את־ארחו *לשמר כדברך׃*בכל־לבי דרשתיך *אל־תשגני ממצותיך׃*בלבי צפנתי אמרתך *למען לא אחטא־לך׃*ברוך אתה יהוה *למדני חקיך׃*בשפתי ספרתי *כל משפטי־פיך׃*בדרך עדותיך ששתי *כעל כל־הון׃*בפקדיך אשיחה *ואביטה ארחתיך׃*בחקתיך אשתעשע *לא אשכח דברך׃*","גמל על־עבדך אחיה *ואשמרה דברך׃*גל־עיני ואביטה *נפלאות מתורתך׃*גר אנכי בארץ *אל־תסתר ממני מצותיך׃*גרסה נפשי לתאבה *אל־משפטיך בכל־עת׃*גערת זדים ארורים *השגים ממצותיך׃*גל מעלי חרפה ובוז *כי עדתיך נצרתי׃*גם ישבו שרים בי נדברו *עבדך ישיח בחקיך׃*גם־עדתיך שעשעי *אנשי עצתי׃*","דבקה לעפר נפשי *חיני כדברך׃*דרכי ספרתי ותענני *למדני חקיך׃*דרך־פקודיך הבינני *ואשיחה בנפלאותיך׃*דלפה נפשי מתוגה *קימני כדברך׃*דרך־שקר הסר ממני *ותורתך חנני׃*דרך־אמונה בחרתי *משפטיך שויתי׃*דבקתי בעדותיך *יהוה אל־תבישני׃*דרך־מצותיך ארוץ *כי תרחיב לבי׃*","הורני יהוה דרך חקיך *ואצרנה עקב׃*הבינני ואצרה תורתך *ואשמרנה בכל־לב׃*הדריכני בנתיב מצותיך *כי־בו חפצתי׃*הט־לבי אל־עדותיך *ואל אל־בצע׃*העבר עיני מראות שוא *בדרךך חיני׃*הקם לעבדך אמרתך *אשר ליראתך׃*העבר חרפתי אשר יגרתי *כי משפטיך טובים׃*הנה תאבתי לפקדיך *בצדקתך חיני׃*","ויבאני חסדך יהוה *תשועתך כאמרתך׃*ואענה חרפי דבר *כי־בטחתי בדברך׃*ואל־תצל מפי דבר־אמת עד־מאד *כי למשפטך יחלתי׃*ואשמרה תורתך *תמיד לעולם ועד׃*ואתהלכה ברחבה *כי פקדיך דרשתי׃*ואדברה בעדתיך נגד מלכים *ולא אבוש׃*ואשתעשע במצותיך *אשר אהבתי׃*ואשא־כפי אל־מצותיך אשר אהבתי *ואשיחה בחקיך׃*","זכר־דבר לעבדך *על אשר יחלתני׃*זאת נחמתי בעניי *כי אמרתך חיתני׃*זדים הליצני עד־מאד *מתורתך לא נטיתי׃*זכרתי משפטיך מעולם *יהוה ואתנחם׃*זלעפה אחזתני מרשעים *עזבי תורתך׃*זמרות היו־לי חקיך *בבית מגורי׃*זכרתי בלילה שמך יהוה *ואשמרה תורתך׃*זאת היתה־לי כי פקדיך נצרתי׃*","חלקי יהוה אמרתי *לשמר דבריך׃*חליתי פניך בכל־לב *חנני כאמרתך׃*חשבתי דרכי *ואשיבה רגלי אל־עדתיך׃*חשתי ולא התמהמהתי *לשמר מצותיך׃*חבלי רשעים עודני *תורתך לא שכחתי׃*חצות־לילה אקום להודות לך *על משפטי צדקך׃*חבר אני לכל־אשר יראוך *ולשמרי פקודיך׃*חסדך יהוה מלאה הארץ *חקיך למדני׃*","טוב עשית עם־עבדך *יהוה כדברך׃*טוב טעם ודעת למדני *כי במצותיך האמנתי׃*טרם אענה אני שגג *ועתה אמרתך שמרתי׃*טוב־אתה ומטיב *למדני חקיך׃*טפלו עלי שקר זדים *אני בכל־לב אצר פקודיך׃*טפש כחלב לבם *אני תורתך שעשעתי׃*טוב־לי כי־עניתי *למען אלמד חקיך׃*טוב־לי תורת־פיך *מאלפי זהב וכסף׃*","ידיך עשוני ויכוננוני הבינני *ואלמדה מצותיך׃*יראיך יראוני וישמחו *כי לדברך יחלתי׃*ידעתי יהוה כי־צדק משפטיך *ואמונה עניתני׃*יהי־נא חסדך לנחמני *כאמרתך לעבדך׃*יבאוני רחמיך ואחיה *כי־תורתך שעשעי׃*יבשו זדים כי־שקר עותוני *אני אשיח בפקודיך׃*ישובו לי יראיך *וידעו עדתיך׃*יהי־לבי תמים בחקיך *למען לא אבוש׃*","כלתה לתשועתך נפשי *לדברך יחלתי׃*כלו עיני לאמרתך *לאמר מתי תנחמני׃*כי־הייתי כנאד בקיטור *חקיך לא שכחתי׃*כמה ימי־עבדך מתי *תעשה ברדפי משפט׃*כרו־לי זדים שיחות *אשר לא כתורתך׃*כל־מצותיך אמונה *שקר רדפוני עזרני׃*כמעט כלוני בארץ *ואני לא־עזבתי פקודיך׃*כחסדך חיני *ואשמרה עדות פיך׃*","לעולם יהוה *דברך נצב בשמים׃*לדר ודר אמונתך *כוננת ארץ ותעמד׃*למשפטיך עמדו היום *כי הכל עבדיך׃*לולי תורתך שעשעי *אז אבדתי בעניי׃*לעולם לא־אשכח פקודיך *כי בם חייתני׃*לך־אני הושיעני *כי פקודיך דרשתי׃*לי קוו רשעים *לאבדני עדתיך אתבוןן׃*לכל תכלה ראיתי קץ *רחבה מצותך מאד׃*","מה־אהבתי תורתך *כל־היום היא שיחתי׃*מאיבי תחכמני מצותך *כי לעולם היא־לי׃*מכל־מלמדי השכלתי *כי עדותיך שיחה לי׃*מזקנים אתבוןן *כי פקודיך נצרתי׃*מכל־ארח רע כלאתי רגלי *למען אשמר דברך׃*ממשפטיך לא־סרתי *כי־אתה הורתני׃*מה־נמלצו לחכי *אמרתך מדבש לפי׃*מפקודיך אתבוןן *על־כן שנאתי כל־ארח שקר׃*","נר־לרגלי דברך *ואור לנתיבתי׃*נשבעתי ואקימה *לשמר משפטי צדקך׃*נעניתי עד־מאד יהוה *חיני כדברך׃*נדבות פי רצה־נא יהוה *ומשפטיך למדני׃*נפשי בכפי תמיד *ותורתך לא שכחתי׃*נתנו רשעים פח לי *ומפקודיך לא תעיתי׃*נחלתי עדותיך לעולם *כי־ששון לבי המה׃*נטיתי לבי לעשות חקיך *לעולם עקב׃*","סעפים שנאתי *ותורתך אהבתי׃*סתרי ומגני אתה *לדברך יחלתי׃*סורו־ממני מרעים *ואצרה מצות אלהי׃*סמכני כאמרתך ואחיה *ואל־תבישני משברי׃*סעדני ואושעה *ואשעה בחקיך תמיד׃*סלית כל־שוגים מחקיך *כי־שקר תרמיתם׃*סגים השבת כל־רשעי־ארץ *לכן אהבתי עדתיך׃*סמר מפחדך בשרי *וממשפטיך יראתי׃*","עשיתי משפט וצדק *בל־תניחני לעשקי׃*ערב עבדך לטוב *אל־יעשקני זדים׃*עיני כלו לישועתך *ולאמרת צדקך׃*עשה עם־עבדך כחסדך *וחקיך למדני׃*עבדך־אני הבינני *ואדעה עדתיך׃*עת לעשות ליהוה *הפרו תורתך׃*על־כן אהבתי מצותיך *מזהב ומפז׃*על־כן כל־פקודי כל ישרתי *כל־ארח שקר שנאתי׃*","פלאות עדותיך *על־כן נצרתם נפשי׃*פתח דבריך יאיר *מבין פתיים׃*פי־פערתי ואשאפה *כי למצותיך יאבתי׃*פנה־אלי וחנני *כמשפט לאהבי שמך׃*פעמי הכן באמרתך *ואל־תשלט־בי כל־און׃*פדני מעשק אדם *ואשמרה פקודיך׃*פניך האר בעבדך *ולמדני את־חקיך׃*פלגי־מים ירדו עיני *על לא־שמרו תורתך׃*","צדיק אתה יהוה *וישר משפטיך׃*צוית צדק עדתיך *ואמונה מאד׃*צמתתני קנאתי *כי־שכחו דבריך צרי׃*צרופה אמרתך מאד *ועבדך אהבה׃*צעיר אנכי ונבזה *פקדיך לא שכחתי׃*צדקתך צדק לעולם *ותורתך אמת׃*צר־ומצוק מצאוני *מצותיך שעשעי׃*צדק עדותיך לעולם *הבינני ואחיה׃*","קראתי בכל־לב *ענני יהוה חקיך אצרה׃*קראתיך הושיעני *ואשמרה עדתיך׃*קדמתי בנשף *ואשועה לדבריך יחלתי׃*קדמו עיני אשמרות *לשיח באמרתך׃*קולי שמעה כחסדך יהוה *כמשפטך חיני׃*קרבו רדפי זמה *מתורתך רחקו׃*קרוב אתה יהוה *וכל־מצותיך אמת׃*קדם ידעתי מעדתיך *כי לעולם יסדתם׃*","ראה־עניי וחלצני *כי־תורתך לא שכחתי׃*ריבה ריבי וגאלני *לאמרתך חיני׃*רחוק מרשעים ישועה *כי־חקיך לא דרשו׃*רחמיך רבים יהוה *כמשפטיך חיני׃*רבים רדפי וצרי *מעדותיך לא נטיתי׃*ראיתי בגדים ואתקוטטה *אשר אמרתך לא שמרו׃*ראה כי־פקודיך אהבתי *יהוה כחסדך חיני׃*ראש־דברך אמת ולעולם *כל־משפט צדקך׃*","שרים רדפוני חנם *ומדבריך פחד לבי׃*שש אנכי על־אמרתך *כמוצא שלל רב׃*שקר שנאתי ואתעבה *תורתך אהבתי׃*שבע ביום הללתיך *על משפטי צדקך׃*שלום רב לאהבי תורתך *ואין־למו מכשול׃*שברתי לישועתך יהוה *ומצותיך עשיתי׃*שמרה נפשי עדתיך *ואהבם מאד׃*שמרתי פקודיך ועדתיך *כי כל־דרכי נגדך׃*","תקרב רנתי לפניך יהוה *כדברך הבינני׃*תבוא תחנתי לפניך *כאמרתך הצילני׃*תבענה שפתי תהלה *כי תלמדני חקיך׃*תען לשוני אמרתך *כי כל־מצותיך צדק׃*תהי־ידך לעזרני *כי פקודיך בחרתי׃*תאבתי לישועתך יהוה *ותורתך שעשעי׃*תחי־נפשי ותהללך *ומשפטך יעזרני׃*תעיתי כשה אבד בקש עבדך *כי מצותיך לא שכחתי׃*"];
let st=[1,54,105,160,210,260,315,365,415,466,520,571,620,674,720,774,825,875,924,973,1026,1082];
function next1(){
let test=document.getElementById("echo");
re= document.getElementById("read");
if(test.innerText===re.innerText){cnt=cnt+1;
    if (cnt>txt.length){cnt=cnt-1;}};
 update();}
                                  
function update(){                                  
clean=txt[cnt].replaceAll('*','');
re.innerText=clean;
let test=document.getElementById("echo");
test.innerText="";
//engdiv=document.getElementById("english");
//engdiv.innerText=engs[cnt];
keys();}

function keys(){
line1=document.getElementById("key1");
line1.innerHTML="";
myArray = txt[cnt].split("*");
butset = new Set(myArray);
let butArray = Array.from(butset);
butArray.sort();
for (let loop1= 0; loop1< butArray.length; loop1++) 
{ let btn = document.createElement("button");
btn.innerHTML = butArray[loop1];
btn.onclick = function write() {let etext=document.getElementById('echo');
etext.innerHTML = etext.innerHTML+ butArray[loop1];};
btn.classList.add("b");
line1.appendChild(btn);}
};


function fd(){cnt=cnt+1;if (cnt>txt.length){cnt=cnt-1}
tm=st[cnt];update();}
    
function bk1(){ cnt=cnt-1;if (cnt<0){cnt=0};
    update(); }

function hd() {if (re.style.visibility==="visible"){re.style.visibility="hidden";}
else{re.style.visibility="visible";}}

function engvis() {beat.currentTime=tm;beat.play();}
                   // Play the beat
                   
function stopsound() {beat.pause();}
                   // stop the beat
// Pause/stop the beat
//beat.pause();
// Reload the beat (back to the start)
//beat.load();
//    if (engdiv.style.visibility==="visible"){engdiv.style.visibility="hidden";}
//else{engdiv.style.visibility="visible";}}

function clr(){let str=document.getElementById("echo");
del= str.innerText.slice(0, -1);
str.innerText=del;}
