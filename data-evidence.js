/* หลักฐานของคำถาม Reading แต่ละข้อ — ข้อความต้องตรงกับที่อยู่ในบทอ่าน/สรุปบทอ่านแบบคำต่อคำ
   แอปจะไฮไลต์ข้อความนี้ในบทอ่านเมื่อเฉลย (ตรวจด้วย audit.js ว่าทุกสตริงมีอยู่จริง) */
(function(){
var HL = {

/* ---- Unit 3A · Learning to Learn (seen) ---- */
"r1":"association (การเชื่อมโยง)",
"r2":"ตัวเลขเป็นหลักฐาน: ชั่วโมงฝึกเพิ่มราว 2,000 ชั่วโมง และแนวคิด 10,000 ชั่วโมง",
"r3":"หลายคนมีสมาธิดีช่วงประมาณ 10 น.–เที่ยง",
"r4":"พรสวรรค์ช่วยได้ แต่การฝึกมีบทบาทสำคัญต่อความสำเร็จระดับสูง",
"rx1":"ความแข็งแรง/การประสานงานของร่างกายอาจดีกว่าช่วงราว 14–18 น.",
"rx2":"เครื่องมือ: association (การเชื่อมโยง), mnemonics, mental pictures",
"rx3":"ข้อมูลใหม่จำง่ายขึ้นเมื่อมีความหมายหรือเชื่อมกับสิ่งที่รู้อยู่แล้ว",
"rx4":"ร่างกายและสมองไม่ได้ทำงานระดับเดียวกันทั้งวัน",

/* ---- Unit 3B · Born to Be the Best (seen) ---- */
"r5":"ตัวเตี้ยกว่า → จุดศูนย์ถ่วงต่ำ + การฝึกและเทคนิค",
"r6":"ผลคล้ายกันไม่ได้แปลว่าสาเหตุเหมือนกัน",
"r7":"ยีนหาได้ยาก → เม็ดเลือดแดงมากผิดปกติ",
"r8":"สูงราว 1.75 ม. แต่ช่วงแขนราว 1.85 ม.",
"rx5":"ขา/ข้อเท้าบาง ขาค่อนข้างยาว ช่วงขาล่างเบากว่าครึ่งกิโลกรัม",
"rx6":"จุดศูนย์ถ่วงต่ำ + การฝึกและเทคนิค",
"rx7":"ปี 1964 ชนะ 15 กม. ห่าง 40 วินาที",
"rx8":"fitness / luck / attitude อาจสำคัญในชีวิตจริง แต่เลือกได้เฉพาะถ้าบทอ่านระบุไว้",

/* ---- Unit 4A · Life Lessons (seen) ---- */
"r9":"การแข่งขันทำอาหารพาเขาไปลอนดอน",
"r10":"ขายมอเตอร์ไซค์ได้ £600 ซื้อตั๋วเที่ยวเดียวไปลอนดอน",
"r11":"ขายมอเตอร์ไซค์ได้ £600 ซื้อตั๋วเที่ยวเดียวไปลอนดอน",
"r12":"NOW: ขายบริษัทได้ £55 ล้าน และลงทุนสนับสนุนผู้ประกอบการรุ่นใหม่",
"rx9":"ขายมอเตอร์ไซค์ได้ £600",
"rx10":"คูปองส่วนลดของคุณยายจุดประกายธุรกิจออนไลน์",
"rx11":"ขายชาในอังกฤษและต่างประเทศ",
"rx12":"NOW: บริษัทมูลค่ากว่า £2 ล้าน",

/* ---- Unit 4B · Training for the Emergency Front Line (seen) ---- */
"r13":"ทักษะอื่น: ประเมินความเสี่ยงและตัดสินใจเร็ว",
"r14":"บทเรียน: เชื่อสัญชาตญาณวิชาชีพ คิดให้ชัด และไม่ให้อารมณ์มารบกวน",
"r15":"หลักสูตรเข้มข้นราว 2 ปี",
"r16":"เชื่อสัญชาตญาณวิชาชีพ คิดให้ชัด และไม่ให้อารมณ์มารบกวน",
"rx13":"ตอนกลางวันเป็นโปรแกรมเมอร์",
"rx14":"ฝึกต่อเนื่องราว 300 ชั่วโมงต่อปี",
"rx15":"อุบัติเหตุรถบัสชน มีผู้บาดเจ็บมาก ผู้โดยสารตั้งครรภ์คนหนึ่งกำลังเจ็บท้องคลอด",
"rx16":"จังหวะงานช่วงแรก punishing",

/* ---- Unseen 1 · The Library of Things ---- */
"r17":"residents can borrow a drill, a sewing machine, a carpet cleaner or even camping equipment",
"r18":"many useful objects spent most of their time sitting unused in cupboards and garages",
"r19":"If booking is complicated or collection times are too limited, people are more likely to buy the object instead",
"r20":"collection times are too limited",
"rx17":"Volunteers also organize monthly repair sessions",
"rx18":"introduced online reservations and evening collection hours",

/* ---- Unseen 2 · Turning Off the Lights to See More ---- */
"r21":"artificial light was making the night sky difficult to see and was disturbing animals",
"r22":"the council compared police reports before and after the changes",
"r23":"After one year, electricity use had fallen",
"r24":"to provide light where and when people need it",
"rx19":"lights near the hospital and main road stayed bright",
"rx20":"designs that direct light downward rather than into the sky",

/* ---- Unseen 3 · The Bicycle Bus ---- */
"r25":"the roads near the school were too busy for a child to cycle alone",
"r26":"Because the group is large and easy to see, drivers slow down",
"r27":"although the school has not measured this carefully",
"r28":"the project depends on volunteers",
"rx21":"ride in the middle, where the older riders protect them",
"rx22":"the bicycle bus does not run that week",

/* ---- Unseen 4 · Teaching a Robot to Pick Strawberries ---- */
"r29":"The fruit bruises easily, it hides under leaves",
"r30":"the gripper closes gently so the skin is not damaged",
"r31":"which may help farms harvest fruit that would otherwise be lost",
"r32":"They also admit that the machine performs badly",
"rx23":"the robot picked about seven berries a minute",
"rx24":"tested on three commercial farms",

/* ---- Unseen 5 · The Office That Tried a Four-Day Week ---- */
"rx25":"each team had to deliver the same amount of work",
"rx26":"list the meetings and tasks they considered least useful",
"rx27":"so that the office was never closed for two days in a row",
"rx28":"the same number of calls arrived in less time",
"rx29":"continue the four-day week for teams that can plan their own schedules",
"rx30":"output had not fallen",

/* ---- Unseen 6 · Painting the Roofs White ---- */
"rx31":"a pale surface sends sunlight back instead of storing heat",
"rx32":"two to five degrees lower",
"rx33":"the coating costs little and can be applied by the residents themselves",
"rx34":"The paint must be cleaned or renewed every two or three years",
"rx35":"works best as one part of a wider plan",
"rx36":"cleaned or renewed every two or three years",

/* ---- Unseen 7 · A Quiet Hour at the Supermarket ---- */
"rx37":"introduced for customers who find bright light and noise stressful",
"rx38":"Checkout scanners are set to their lowest volume",
"rx39":"so that shoppers who arrive by chance understand why the shop feels different",
"rx40":"many customers with no particular difficulty have started shopping at that time as well",
"rx41":"stocking shelves must now be done before six",
"rx42":"shoppers who arrive by chance",

/* ---- Unseen 8 · Reading the Clouds Again ---- */
"rx43":"Older fishers worried that useful local knowledge would disappear",
"rx44":"matches each description with weather data from the same day",
"rx45":"Others turned out to be less reliable than the fishers believed",
"rx46":"national forecasts cover a wide area, while local signs can describe conditions in a single bay",
"rx47":"reduced the number of trips cancelled unnecessarily",
"rx48":"less reliable than the fishers believed"
};

window.PACK.questions.forEach(function(q){ if(HL[q.id]) q.hl = HL[q.id]; });
})();
