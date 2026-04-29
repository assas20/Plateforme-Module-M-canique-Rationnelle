/***********************************
 * ====== الطلاب ======
 ***********************************/
const examTexts = {
  title: {
    fr: "Examens et contrôle continu",
    en: "Exams and Continuous Assessment",
    ar: "الامتحانات والتقويم المستمر"
  },
  pdf: {
    fr: "تحميل PDF (فرنسي)",
    en: "Download PDF",
    ar: "تحميل ملف PDF"
  },
  link: {
    fr: "موقع الجامعة",
    en: "University website",
    ar: "موقع الجامعة"
  },
  universities: {
     enstp: {
      fr: "ENSTP",
      en: "ENSTP",
      ar: "المدرسة الوطنية العليا للأشغال العمومية"
    },
    uhb: {
      fr: "Université Houari Boumediene",
      en: "Houari Boumediene University",
      ar: "جامعة هواري بومدين"
    },
    bejaia: {
      fr: "Université de Bejaia",
      en: "Bejaia University",
      ar: "جامعة بجاية"
    },
    batna: {
      fr: "Université de Batna 02",
      en: "Batna 02 University",
      ar: "جامعة باتنة 02"
    }
  }
};
const btnNotes = document.getElementById("btnNotes");

const studentsG08 = [
  "Abderrezek Akram","Ameziane Sid-Ali","Belaidi Abdellatif","Benadjiel Wissam","Benali Abdallah Merouane",
  "Benguessoum Mohamed Arezki","BENKEZIM Sofiane","Biou Mohamed Amine","Bouhealouane Faiz","Bouska Chokri",
  "Bouzar Dilmi Djihad","Chendri Zakaria","Dilmi Anes","Guehaz Sifeddine","Hamzaoui Dina",
  "Khattab Ilyes Abdelaziz","Khiat Sarra","Larbi Maria","Mazouzi Hadil","Mezghrani Dalia",
  "Rachidi Zakaria","Seddiki Khouloud","Smail Ziad","Yahiaoui Hamza","Ziouar Khaoula"
];

const studentsG07 = [
  "Allouche Mohammed Abdellah","Belaid Wail","Ben Amor Lokmane",
  "Benabderrahmane Tahhil Fadjer","Benkaddour Abdelkader Mahieddine",
  "Berziga Mohamed","Boughara Achraf","Bousba Aymen","Chellali Abdessalam",
  "Dib Nesrine","Guadi Zahra","Kadri Mourad","Khettar Azouaou",
  "Lidi Moussa Mohamed Yacine","Maouche Abdelhak","Messaoudene Chouaib",
  "Necibdia Abdelmouay","Ouzenati Khokha","Sari Aymen","Yahi Hadda Lyna","Zerrouga Younes"
];

const studentsG14 = [
  "ABDELLAOU MOHAMED DJABER","AHMED MESSAOUD AKRAM","AYAD ABDERRAHMANE",
  "BELHAMEL MOHAMMED DHIA EDDINE","BENALLA WISSAME","BENATTA TAHA ELOUALID",
  "BENYAHIA RIYAD","BOUBEZARI Yasmine","BOUKHEDIMI ABDELMADJID",
  "BOUTRAB ABDERRAHMANE","CHETTATA OUSSAMA","DOULI YASMINA",
  "HADDAR SACI","HIDRI Chaima","KELAI RABAH",
  "KOULAL RAHIL","LAGOUN NOUHA ARWA","MADOURI FATMA",
  "MEGHERBI Douaa sara","MOKHTAR RAHMANI KHALED","OUAHLIMA LYDIA          (+1)",
  "RAHMOUN Imad eddine billal","ROUANI Aymene","SEKKAI HICHEM MOHCEN",
  "YOUSFI MAYA"
];
const studentsG06 = [
  "ABDELMADJID YOUSRA","ALIOUAT BOUCHRA KHOULOUD","BEKTACHE VANISSA      (+02)",
  "BELGHIT CHANEZ","BENABDERRAHMANE MOUSSA ABDELBARI","BENHADOUCHE MANAL",
  "BENTCHAKAL MANAR","BOUFERKAS ISLAM","BOUSALEM ISRAA",
  "CHEBBAH Mohamed abderrahime","CHOUCHAR RAZINE","DHAIRI ANES",
  "GHERNAOUT AHMED RAYAN","HARROUCHE MOUNIR","KADDOUS M'HAMED EL KHAOUNI",
  "KHELIFI AHMED YASSER","LAMINE MOHAMMED","LAMRAOUI CHAMS EDDINE",
  "MANSOURI Younes","MESSALHI MOHAMED ABDEL KADDOUS","MORSLI KHALIL",
  "NAIB YOUCEF WALID","OUMEZAOUCHE YAHIA ZAKARIA","ROUABHIA Fedoua",
  "SALHI ANIS    (+01)","SID AHMED NOR ELHOUDA","TOUNSI ABDELDJALIL    (+01)",
  "ZEREG Rawane"
];
const studentsG13 = [
  "AFRAOUI HIBA","AYACHE EL BACHIR","AZIRI WASSIM",
  "BELHACHEMI OUSSAMA","BENAMRANE ABDALLAH","BOUBESSIT SIDAHMED",
  "BOUKHEDENNA ABDERRAHMANE","BOUTIBA TASNIM","CHERIK Aymen riad",
  "DOUINI SALMA FARAH","HACHANI HIBA EL RAHMANE","HAMIDOUCHE HAMZA",
  "HERIZI AHMED","KOULAL AICHA AMINA","MADANI AHMED",
  "MEDJDOUB ANES AMMAR","MOHRI Razika","OUACHEM RAHMA",
  "OUANANI KAMEL","SEHILI TAHA ABDERRAHMANE","TAIBI MOHAMMED RIYADH"
];
const studentsG05 = [
  "ALALEI MOHAMED YAHYA    (+02)","BEKRI ABDENNOUR","BEN ABDI Soulef",
  "BEN OMAR MOHAMED YAKOUB","BERRAHMA MOHAMED","BOUDJERDA Ahmed amine",
  "BOUROUH MOHAMMED SADEK","CHAIMA ABDELHAK","GHERBI BADR",
  "HADJALI Mohamed hamza","HAMIDANI ABDELKRIM ANAS","KACI Touba",
  "KHELIFA AYOUB","LAMARI DJABER ABD ELKADDOUS","MALLEM IKRAM         (+01)",
  "MERDASSI Mohamed zine el islam","NABTI MOHAMED AMINE","OULDALI Mustapha adlane              (+01)",
  "SALHI ALI","SI YOUCEF ASMA","TAMENDJARI MEHDI",
  "TIGUERCHA REZIKA","ZEMMOURI MOHAMED YACINE"
];
/***********************************
 * ====== بيانات الحضور ======
 ***********************************/
const g08Data = {
  "28/10/2025":["Présent","Présent","Présent","Présent","Absent","Présent","Présent","Absence Justifiée","Présent","Présent","Présent","Présent","Absent","Présent","Absence Justifiée","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent"],
  "04/11/2025":["Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent"],
  "11/11/2025":Array(25).fill("Présent"),
  "18/11/2025":["Présent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent"],
  "25/11/2025":Array(25).fill("Présent"),
  "02/12/2025":Array(25).fill("Présent"),
  "09/12/2025":["Présent","Présent","Absent","Présent","Présent","Présent","Absent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent"],
  "16/12/2025":["Absent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Absence Justifiée","Absent","Présent","Présent","Présent","Présent","Absent","Présent","Absent","Présent","Présent"],
  "23/12/2025":Array(25).fill("Holiday"),
  "30/12/2025":Array(25).fill("Holiday"),
  "13/01/2026":["Présent","Présent","Présent","Présent","Absent","Présent","Présent","Absent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Absent"]
};

const g07Data = {
  "28/10/2025":["Présent","Absent","Présent","Présent","Absent","Présent","Présent","Présent","Absence Justifiée","Absent","Présent","Présent","Présent","Présent","Absence Justifiée","Absent","Présent","Absence Justifiée","Présent","Présent","Absent"],
  "04/11/2025":Array(21).fill("Présent"),
  "11/11/2025":["Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Absence Justifiée","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent"],
  "18/11/2025":Array(21).fill("Présent"),
  "25/11/2025":["Présent","Présent","Absent","Présent","Absent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent","Absence Justifiée","Présent","Présent","Présent","Présent","Présent","Présent"],
  "02/12/2025":["Présent","Présent","Absence Justifiée","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent"],
  "09/12/2025":Array(21).fill("Présent"),
  "16/12/2025":["Absence Justifiée","Absence Justifiée","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Absence Justifiée","Présent","Présent","Présent","Présent","Présent","Absent","Absent","Présent","Présent","Présent","Absent"],

  "13/01/2026":["Présent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Absent","Absent","Présent","Présent","Présent","Absent"]
};

const g14Data = {
  "11/04/2026":["Absent","Présent","Présent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Absent","Présent","Présent","Absent","Présent","Présent","Présent"],
  "18/04/2026":["Absent","Présent","Présent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Absent","Absent","Présent","Absent","Absent","Présent","Absent","Présent","Présent","Présent"],
  "25/04/2026":["Absent","Présent","Présent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Absent","Présent","Présent","Absent","Présent","Présent","Absent","Présent","Absent","Présent","Absent","Présent"]
};
const g06Data = {

  "11/04/2026":["Présent","Absent","Présent","Présent","Présent","Présent","Présent","Absent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent"],
  "18/04/2026":Array(28).fill("Présent"), // الكل حاضر
  "25/04/2026":["Présent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent"]
};
const g13Data = {
  
  "11/04/2026": ["Présent","Présent","Absent","Absent","Absent","Absent","Présent","Présent","Absent","Absent","Présent","Présent","Présent","Présent","Absent","Absent","Présent","Présent","Présent","Présent","Présent"],
  "18/04/2026": ["Présent","Présent","Absent","Absent","Présent","Absent","Absent","Présent","Présent","Absent","Présent","Absent","Présent","Absence Justifiée","Présent","Présent","Présent","Présent","Absent","Présent","Présent"],
  "25/04/2026": ["Présent","Absent","Absent","Présent","Absent","Absent","Absent","Présent","Présent","Absent","Présent","Absent","Absent","Présent","Présent","Absent","Absent","Absent","Présent","Absent","Présent"]
};
const g05Data = {
  "11/04/2026": ["Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent"],
  "18/04/2026": ["Présent","Absent","Absent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent"],
  "25/04/2026": ["Présent","Présent","Absent","Présent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Absent","Présent","Présent","Absent","Présent","Présent","Présent","Présent"]
};
/***********************************
 * ====== بيانات الحضور السداسي الثاني S2 ======
 ***********************************/
const g07DataS2 = {
  "17/03/2026": ["Absent","Absent","Absent","Présent","Absent","Absence Justifiée","Présent","Présent","Absent","Absent","Absent","Présent","Présent","Absent","Absence Justifiée","Absent","Présent","Présent","Présent","Absent","Absent"],
  "07/04/2026": ["Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent"],
  "14/04/2026": ["Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Absent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent"],
  "21/04/2026": ["Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Absent","Absence Justifiée","Présent","Présent","Absent","Absent"],
  "28/04/2026": ["Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent"]
};

const g08DataS2 = {
  "17/03/2026": ["Présent","Présent","Présent","Présent","Absent","Présent","Absent","Absent","Présent","Absent","Présent","Présent","Présent","Absent","Présent","Absent","Absent","Présent","Présent","Présent","Absent","Présent","Absent","Absent","Absent"],
  "07/04/2026": ["Présent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent"],
  "14/04/2026": ["Présent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent"],
  "21/04/2026": ["Présent","Présent","Présent","Présent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Absent","Absent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Présent","Absent"]
};
/***********************************
 * ====== TDs + PDF ====== 
 ***********************************/
const TDs = {
  S03:[
    { title: {fr:"Série TD N°01 : Les outils mathématiques", en:"TD Series 01: Math Tools", ar:"السلسلة 01: الأدوات الرياضية"}, pdf:"TDs/TD01.pdf", html:"TDs/TD01.html" },
    { title: {fr:"Série TD N°02 : Moments des forces", en:"TD Series 02: Moments of Forces", ar:"السلسلة 02: عزم القوى"}, pdf:"TDs/TD02.pdf", html:"TDs/TD02.html" },
    { title: {fr:"Série TD N°03 : Les Torseurs", en:"TD Series 03: Torques", ar:"السلسلة 03: العزوم"}, pdf:"TDs/TD03.pdf", html:"TDs/TD03.html" },
    { title: {fr:"Série TD N°04 : Statique du solide", en:"TD Series 04: Solid Statics", ar:"السلسلة 04: سكون الصلب"}, pdf:"TDs/TD04.pdf", html:"TDs/TD04.html" }
  ],
  S04:[
    { title: {fr:"Série TD N°05 : CINEMATIQUE DU SOLIDE", en:"TD Series 05: kinematics of rigid body", ar:"السلسلة 05: حركية الجسم الصلب TD 05"}, pdf:"TDs/TD05.pdf", html:"TDs/TD05.html", corrigePdf: "TDs/TD05_corrige.pdf" },
    { title: {fr:"Série TD N°06 : Geometry of Mass", en:"TD Series 06: Geometry of Mass", ar:"السلسلة 06: مثال TD 06"}, pdf:"TDs/TD06.pdf", html:"TDs/TD06.html", corrigePdf: "TDs/TD06_corrige.pdf" },
    { title: {fr:"Série TD N°07 : Exemple TD 07", en:"TD Series 07: Example TD 07", ar:"السلسلة 07: مثال TD 07"}, pdf:"TDs/TD07.pdf", html:"TDs/TD07.html" },
    { title: {fr:"Série TD N°08 : Exemple TD 08", en:"TD Series 08: Example TD 08", ar:"السلسلة 08: مثال TD 08"}, pdf:"TDs/TD08.pdf", html:"TDs/TD08.html" }
  ]
};
/***********************************
 * ====== Videos ======
 ***********************************/
const videoLinks = [
  "https://youtube.com/playlist?list=PLAh__9lJn0k8HewWhb4ytEIhlV4BbV3GV",
  "https://youtube.com/playlist?list=PLvkDaCOYDNUgV-S7TIw8S8YRr3dtkObjK",
  "https://youtu.be/CFbH3hHYPv8",
  "https://youtu.be/NIP8Xa4LSJY",
  "https://youtu.be/zIbOQsnVhZk",
  "https://youtu.be/ub7M0qo6zek",
  "https://youtu.be/oHWq2ls4aLc",
  "https://youtu.be/XkIL3fvLKsM",
  "https://youtu.be/gTZvyS3Pxa8",
  "https://youtu.be/D2fsBKSkGp4",
  "https://youtu.be/DKbiOEhJgJc",
  "https://youtu.be/Os6XL15--BI",
  "https://youtu.be/Ob9R8WYbneQ"
];

/***********************************
 * ====== PDF للدروس والبرامج ======
 ***********************************/
const pdfCours = "TDs/Cours.pdf";
const pdfProgramme = "TDs/Programme.pdf";
/***********************************
 * ====== عناصر الصفحة ====== 
 ***********************************/
const tdContainer = document.getElementById("tdContainer");
const presenceContainer = document.getElementById("presenceContainer");
const languageSelect = document.getElementById("languageSelect");
const btnS03 = document.getElementById("btnS03");
const btnS04 = document.getElementById("btnS04");
const btnListe = document.getElementById("btnListe");
const btnCours = document.getElementById("btnCours");
const btnProgramme = document.getElementById("btnProgramme");
const btnLivre = document.getElementById("btnLivre");
const btnVideo = document.getElementById("btnVideo");
const btnContact = document.getElementById("btnContact");

let currentLang = "fr";
let currentSemester = "S1";
/***********************************
 * ====== الأدوات العامة ======
 ***********************************/
function clearAll() {
  tdContainer.innerHTML = "";
  presenceContainer.innerHTML = "";
}

function showSimpleBox(title, html) {
  clearAll();
  presenceContainer.innerHTML = `<div class="td-detail"><h3>${title}</h3>${html}</div>`;
}

/***********************************
 * ====== عرض TDs ======
 ***********************************/
function showTDSerie(arrTD) {
  clearAll();
  arrTD.forEach(td => {
    const btn = document.createElement("button");
    
    btn.className = "td-btn";
    btn.textContent = td.title[currentLang];
    btn.onclick = () => {
      // التحقق إذا كان هناك ملف PDF للتصحيح (لـ TD05) أو استخدام HTML الافتراضي
      const corrigeLink = td.corrigePdf ? td.corrigePdf : td.html;
      const corrigeLabel = currentLang === "fr" ? "Voir Corrigé" : 
                          currentLang === "en" ? "View Correction" : "عرض التصحيح";
      const corrigeIcon = td.corrigePdf ? "📄" : "📝"; // PDF icon إذا كان PDF
      
      tdContainer.innerHTML = `
        <div class="td-detail">
          <h3>${td.title[currentLang]}</h3>
          <p>
            <a href="${td.pdf}" target="_blank">${currentLang === "fr" ? "Voir PDF" : currentLang === "en" ? "View PDF" : "عرض PDF"} 📄</a> |
            <a href="${corrigeLink}" target="_blank">${corrigeLabel} ${corrigeIcon}</a>
          </p>
        </div>
      `;
    };
    tdContainer.appendChild(btn);
  });
}

btnS03.onclick = () => showTDSerie(TDs.S03);
btnS04.onclick = () => showTDSerie(TDs.S04);
/***********************************
 * ====== عرض الحضور ======
 ***********************************/
btnListe.onclick = () => {
  clearAll();
  
  const semDiv = document.createElement("div");
  semDiv.style.marginBottom = "15px";
  semDiv.innerHTML = `
    <label style="font-weight:bold; margin-right:10px;">
      ${currentLang === "fr" ? "Semestre :" : currentLang === "en" ? "Semester :" : "السداسي :"}
    </label>
    <select id="semesterSelect" style="padding:5px; font-size:16px;">
      <option value="S1">S1</option>
      <option value="S2">S2</option>
    </select>
  `;
  presenceContainer.appendChild(semDiv);
  
  const groupsWrap = document.createElement("div");
  groupsWrap.id = "groupsWrap";
  presenceContainer.appendChild(groupsWrap);
  
  function renderGroups() {
    groupsWrap.innerHTML = "";
    
    // ← G05/G06/G13/G14 تظهر فقط في S2
    const groups = currentSemester === "S1" 
      ? ["G08", "G07"] 
      : ["G08", "G07", "G14", "G06", "G13", "G05"];
    
    groups.forEach(group => {
      const btn = document.createElement("button");
      btn.className = "collapsible";
      btn.textContent = group + " - " + currentSemester;
      const wrap = document.createElement("div");
      wrap.className = "table-wrapper";
      groupsWrap.appendChild(btn);
      groupsWrap.appendChild(wrap);

      btn.onclick = () => wrap.style.display = (wrap.style.display === "block" ? "none" : "block");
      
      let data;
      if (group === "G08") data = currentSemester === "S1" ? g08Data : g08DataS2;
      else if (group === "G07") data = currentSemester === "S1" ? g07Data : g07DataS2;
      else if (group === "G14") data = g14Data;
      else if (group === "G06") data = g06Data;
      else if (group === "G13") data = g13Data;
      else if (group === "G05") data = g05Data;
      
      renderTable(data, group, wrap);
    });
  }
  
  renderGroups();
  
  document.getElementById("semesterSelect").onchange = (e) => {
    currentSemester = e.target.value;
    renderGroups();
  };
};

function renderTable(data, group, container) {
  container.innerHTML = "";

  const table = document.createElement("table");
  
  // تحديد قائمة الطلاب حسب المجموعة
let students;
if (group === "G08") students = studentsG08;
else if (group === "G07") students = studentsG07;
else if (group === "G14") students = studentsG14;
else if (group === "G06") students = studentsG06;
else if (group === "G13") students = studentsG13;
else if (group === "G05") students = studentsG05;
  
  let abs = {};
  students.forEach(s => abs[s] = 0);

  // ترجمة حالة الحضور
  const translations = {
    Present: { fr: "Présent", en: "Present", ar: "حاضر" },
    Absent: { fr: "Absent", en: "Absent", ar: "غائب" },
    Justified: { fr: "Absence Justifiée", en: "Justified", ar: "غياب مبرر" },
    Holiday: { fr: "Vacances", en: "Holiday", ar: "عطلة" }
  };

  // رأس الجدول
  let head = "<tr><th>#</th><th>Nom</th>";
  Object.keys(data).forEach(d => head += `<th>${d}</th>`);
  head += "</tr>";
  table.innerHTML = head;

  // صفوف الطلاب
  students.forEach((s, idx) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${idx + 1}</td><td>${s}</td>`;

    Object.keys(data).forEach(date => {
      const raw = data[date][idx] || "Présent";
      const key = raw === "Présent" ? "Present" :
                  raw === "Absent" ? "Absent" :
                  raw === "Absence Justifiée" ? "Justified" : "Holiday";

      if (key === "Absent") abs[s]++;

      const warning = abs[s] > 3 
        ? `<br>⚠️ L'étudiant a dépassé le nombre légal d'absences (3) selon le décret ministériel n°1165 du 04/10/2025.` 
        : "";

      let tdContent = translations[key][currentLang] + warning;

      // رابط مبرر الغياب
      if (key === "Justified") {
        const fileName = `justificatifs/${group}/${s.replace(/ /g,"_")}_${date.replace(/\//g,"-")}.pdf`;
        const linkText = currentLang === "fr" ? "📎 Voir le justificatif" :
                         currentLang === "en" ? "📎 Justified PDF" :
                         "📎 مبرر الغياب";
        tdContent += `<br><a href="${fileName}" target="_blank" class="justif-link">${linkText}</a>`;
      }

      const td = document.createElement("td");
      td.className = `status-${key.toLowerCase()}`;
      td.innerHTML = tdContent;
      tr.appendChild(td);
    });

    table.appendChild(tr);
  });

  container.appendChild(table);
}


/***********************************
 * ====== الدروس والبرامج والكتب والفيديو ======
 ***********************************/
btnCours.onclick=()=>showSimpleBox("Cours",
  `<ul>
     <li>Cours destiné aux étudiants :

Secteur : Génie civil, Génie mécanique, Travaux publics, Aéronautique et Hydraulique

Spécialisation : /

Formation : Licence
Semestre : S3
Unité pédagogique : UEF 2.1.2</li>
    
     
   </ul>
   <p><a href="${pdfCours}" target="_blank" style="font-weight:bold; color:#004080; text-decoration:underline;">اضغط هنا لتحميل PDF</a></p>`
);
btnExam.onclick = () => {
  clearAll();

  tdContainer.innerHTML = `
    <div class="exam-container">
 
    <div class="exam-box">
        <h3>${examTexts.universities.enstp[currentLang]}</h3>
        <a href="examens/ENSTP_Mecanique_Rationnelle.pdf" target="_blank" class="exam-link">
          ${examTexts.pdf[currentLang]}
        </a>
        <a href="https://www.enstp.edu.dz" target="_blank" class="exam-link">
          🌐 Lien
        </a>
      </div>

      <div class="exam-box">
        <h3>${examTexts.universities.uhb[currentLang]}</h3>
        <a href="examens/UHB_Mecanique_Rationnelle.pdf" target="_blank" class="exam-link">
          ${examTexts.pdf[currentLang]}
        </a>
        <a href="https://www.espace-etudiant.net/forum/" target="_blank" class="exam-link">
          🌐 Lien
        </a>
      </div>

      <div class="exam-box">
        <h3>${examTexts.universities.bejaia[currentLang]}</h3>
        <a href="examens/Bejaia_Mecanique_Rationnelle.pdf" target="_blank" class="exam-link">
          ${examTexts.pdf[currentLang]}
        </a>
        <a href="https://www.univdocs.com/2020/04/mecanique-rationnelle-st.html" target="_blank" class="exam-link">
          🌐 Lien
        </a>
      </div>

      <div class="exam-box">
        <h3>${examTexts.universities.batna[currentLang]}</h3>
        <a href="examens/Batna02_Mecanique_Rationnelle.pdf" target="_blank" class="exam-link">
          ${examTexts.pdf[currentLang]}
        </a>
        <a href="https://univ-batna2.dz/" target="_blank" class="exam-link">
          🌐 Lien
        </a>
      </div>

    </div>
  `;
};
btnNotes.onclick = () => {
  clearAll();

  tdContainer.innerHTML = `
    <div class="notes-container">

      <div class="group-box" onclick="showGroup07()">
        Groupe 07
      </div>

      <div class="group-box" onclick="showGroup08()">
        Groupe 08
      </div>

    </div>
  `;
};

function showGroup07() {
  clearAll();

  const students07 = [
    "Allouche Mohammed Abdellah","Belaid Wail","Ben Amor Lokmane",
    "Benabderrahmane Tahhil Fadjer","Benkaddour Abdelkader Mahieddine",
    "Berziga Mohamed","Boughara Achraf","Bousba Aymen","Chellali Abdessalam",
    "Dib Nesrine","Guadi Zahra","Kadri Mourad","Khettar Azouaou",
    "Lidi Moussa Mohamed Yacine","Maouche Abdelhak","Messaoudene Chouaib",
    "Necibdia Abdelmouay","Ouzenati Khokha","Sari Aymen","Yahi Hadda Lyna","Zerrouga Younes"
  ];

  let rows = "";
  students07.forEach(name => {
    rows += `
      <tr>
        <td>${name}</td>
        <td>✔</td>
        <td>—</td>
        <td>—</td>
        <td>—</td>
        <td>—</td>
      </tr>
    `;
  });

  tdContainer.innerHTML = `
    <h2>Groupe 07</h2>
    <table class="notes-table">
      <tr>
        <th>Nom & Prénom</th>
        <th>Présence</th>
        <th>Participation</th>
        <th>Interrogation</th>
        <th>Contrôle Continu</th>
        <th>Examens</th>
      </tr>
      ${rows}
    </table>
  `;
}
btnNotes.onclick = () => {
  clearAll();

  tdContainer.innerHTML = `
    <div class="notes-container">

      <div class="group-box" onclick="showGroupNotes('G07')">
        Groupe 07
      </div>

      <div class="group-box" onclick="showGroupNotes('G08')">
        Groupe 08
      </div>

    </div>
  `;
};

// دالة لحساب نقاط الحضور وفق Barème
function calculatePresencePoints(absences) {
  if (absences === 0) return 2;
  if (absences === 1) return 1.5;
  if (absences === 2) return 1;
  if (absences === 3) return 0.5;
  return 0;
}

// دالة عرض الجدول للمجموعتين
function showGroupNotes(group) {
  clearAll();

  const students = group === 'G07' ? studentsG07 : studentsG08;
  const data = group === 'G07' ? g07Data : g08Data;

  // حساب الغيابات لكل طالب
  let absencesCount = {};
  students.forEach(s => absencesCount[s] = 0);

  Object.values(data).forEach(day => {
    day.forEach((status, idx) => {
      const name = students[idx];
      if (status === "Absent") absencesCount[name]++;
    });
  });

  // إنشاء الصفوف
  let rows = "";
  students.forEach(name => {
    const presencePoints = calculatePresencePoints(absencesCount[name]);
    rows += `
      <tr>
        <td>${name}</td>
        <td>${presencePoints}</td>
        <td>—</td>
        <td>—</td>
        <td>—</td>
        <td>—</td>
      </tr>
    `;
  });

  tdContainer.innerHTML = `
    <h2>${group}</h2>
    <table class="notes-table">
      <tr>
        <th>Nom & Prénom</th>
        <th>Présence</th>
        <th>Participation</th>
        <th>Interrogation</th>
        <th>Contrôle Continu</th>
        <th>Examens</th>
      </tr>
      ${rows}
    </table>
  `;
}

function showGroup08() {
  clearAll();

  const students08 = [
    "Abderrezek Akram","Ameziane Sid-Ali","Belaidi Abdellatif",
    "Benadjiel Wissam","Benali Abdallah Merouane","Benguessoum Mohamed Arezki",
    "BENKEZIM Sofiane","Biou Mohamed Amine","Bouhealouane Faiz","Bouska Chokri",
    "Bouzar Dilmi Djihad","Chendri Zakaria","Dilmi Anes","Guehaz Sifeddine",
    "Hamzaoui Dina","Khattab Ilyes Abdelaziz","Khiat Sarra","Larbi Maria",
    "Mazouzi Hadil","Mezghrani Dalia","Rachidi Zakaria","Seddiki Khouloud",
    "Smail Ziad","Yahiaoui Hamza","Ziouar Khaoula"
  ];

  let rows = "";
  students08.forEach(name => {
    rows += `
      <tr>
        <td>${name}</td>
        <td>✔</td>
        <td>—</td>
        <td>—</td>
        <td>—</td>
        <td>—</td>
      </tr>
    `;
  });

  tdContainer.innerHTML = `
    <h2>Groupe 08</h2>
    <table class="notes-table">
      <tr>
        <th>Nom & Prénom</th>
        <th>Présence</th>
        <th>Participation</th>
        <th>Interrogation</th>
        <th>Contrôle Continu</th>
        <th>Examens</th>
      </tr>
      ${rows}
    </table>
  `;
}
btnNotes.onclick = () => {
  clearAll();

  tdContainer.innerHTML = `
    <div class="notes-container">

      <div class="group-box" onclick="showGroupNotes('G07')">
        Groupe 07
      </div>

      <div class="group-box" onclick="showGroupNotes('G08')">
        Groupe 08
      </div>

    </div>
  `;
};

// دالة لحساب نقاط الحضور وفق Barème
function calculatePresencePoints(absences) {
  if (absences === 0) return 2;
  if (absences === 1) return 1.5;
  if (absences === 2) return 1;
  if (absences === 3) return 0.5;
  return 0;
}

// بيانات نقاط الطلاب
const dataG07 = [
    ["1", "Allouche Mohammed Abdellah", "08", "12.75"],
    ["2", "Belaid Wail", "-", "12,50"],
    ["3", "Ben Amor Lokmane", "05,25", "09,50"],
    ["4", "Benabderrahmane T. Fadjer", "05", "07.50"],
    ["5", "Benkaddour A. Mahieddine", "04", "08,75"],
    ["6", "Berziga Mohamed", "4.25", "11"],
    ["7", "Boughara Achraf", "-", "02"],
    ["8", "Bousba Aymen", "03,25", "03"],
    ["9", "Chellali Abdessalam", "02,25", "08,75"],
    ["10", "Dib Nesrine", "01,75", "08,25"],
    ["11", "Guadi Zahra", "02,25", "09.50"],
    ["12", "Kadri Mourad", "3.25", "5.25"],
    ["13", "Khettar Azouaou", "06", "03.50"],
    ["14", "Lidi Moussa Mohamed Yacine", "09.50", "14"],
    ["15", "Maouche Abdelhak", "04", "13"],
    ["16", "Messaoudene Chouaib", "01,50", "02.75"],
    ["17", "Necibdia Abdelmouay", "02,50", "04,75"],
    ["18", "Ouzenati Khokha", "04", "06,75"],
    ["19", "Sari Aymen", "08,50", "03,25"],
    ["20", "Yahi Hadda Lyna", "04,50", "03"],
    ["21", "Zerrouga Younes", "01,75", "02"]
];

const dataG08 = [
    ["1", "Abderrezek Akram", "02,50", "05,50"],
    ["2", "Ameziane Sid-Ali", "01,25", "07"],
    ["3", "Belaidi Abdellatif", "02", "06"],
    ["4", "Benadjiel Wissam", "09", "04.25"],
    ["5", "Benali Abdallah Merouane", "07,50", "06"],
    ["6", "Benguessoum M. Arezki",  "06,75", "05,75"],
    ["7", "BENKEZIM Sofiane", "06,50", "06"],
    ["8", "Biou Mohamed Amine", "03", "04,50"],
    ["9", "Bouhcalouane Faiz", "03", "11"],
    ["10", "Bouska Chokri", "02,75", "08.25"],
    ["11", "Bouzar Dilmi Djihad", "07.25", "07,50"],
    ["12", "Chendri Zakaria", "05", "15,25"],
    ["13", "Dilmi Anes", "02,25", "03,50"],
    ["14", "Guehaz Sifeddine", "09", "15.25"],
    ["15", "Hamzaoui Dina", "05,50", "03,50"],
    ["16", "Khattab Ilyes Abdelaziz", "04", "01"],
    ["17", "Khiat Sarra", "1,75", "10,50"],
    ["18", "Larbi Maria", "Absente", "Absente"],
    ["19", "Mazouzi Hadil", "04", "11.25"],
    ["20", "Mezghrani Dalia", "02,50", "07"],
    ["21", "Rachidi Zakaria", "08.50", "13,75"],
    ["22", "Seddiki Khouloud", "03,50", "06,25"],
    ["23", "Small Ziad", "03", "05,75"],
    ["24", "Yahiaoui Hamza", "06", "7.75"],
    ["25", "Ziouar Khaoula", "03", "05,25"]
];

// تعديل دالة showGroupNotes
function showGroupNotes(group) {
  clearAll();

  const students = group === 'G07' ? studentsG07 : studentsG08;
  const data = group === 'G07' ? g07Data : g08Data;
  const notesData = group === 'G07' ? dataG07 : dataG08;

  // حساب الغيابات لكل طالب
  let absencesCount = {};
  students.forEach(s => absencesCount[s] = 0);

  Object.values(data).forEach(day => {
    day.forEach((status, idx) => {
      const name = students[idx];
      if (status === "Absent") absencesCount[name]++;
    });
  });

  // نص التوضيح أعلى الجدول
  const notesText = `
    <div class="notes-info">
      <p>La note de contrôle continu sera calculée comme suit :</p>
      <ul>
        <li>3 points : note de cours</li>
        <li>17 points pour TD :
          <ul>
            <li>10 points pour l'interrogation</li>
            <li>5 points pour la participation</li>
            <li>2 points pour la présence</li>
          </ul>
        </li>
      </ul>
      <p><strong>Barème de présence :</strong></p>
      <ul>
        <li>0 absence = 2</li>
        <li>1 absence = 1,5</li>
        <li>2 absences = 1</li>
        <li>3 absences = 0,5</li>
        <li>4 absences et plus = 0</li>
      </ul>
      <p><em>Ce barème est proposé par Mme Zoudi Nabila, chargée de cours.</em></p>
    </div>
  `;

  // إنشاء الصفوف مع Interrogation و Examens
  let rows = "";
  students.forEach((name, idx) => {
    const presencePoints = calculatePresencePoints(absencesCount[name]);
    const noteInterrogation = notesData[idx][2];
    const noteExamen = notesData[idx][3];

    rows += `
      <tr>
        <td>${name}</td>
        <td>${presencePoints}</td>
        <td>—</td>
        <td>${noteInterrogation}</td>
        <td>—</td>
        <td>${noteExamen}</td>
      </tr>
    `;
  });

  tdContainer.innerHTML = `
    <h2>${group}</h2>
    ${notesText}
    <table class="notes-table">
      <tr>
        <th>Nom & Prénom</th>
        <th>Présence /02</th>
        <th>Participation /05</th>
        <th>Interrogation /10</th>
        <th>Contrôle Continu /20</th>
        <th>Examens /20</th>
      </tr>
      ${rows}
    </table>
  `;
}

btnProgramme.onclick=()=>showSimpleBox("Programme Pédagogique",
  `<p>Programme officiel ENSTP – CPST</p>
   <p><a href="${pdfProgramme}" target="_blank" style="font-weight:bold; color:#004080; text-decoration:underline;">اضغط هنا لتحميل PDF</a></p>`
);

btnLivre.onclick = () => {
  let html = "<ul>";

  for (let i = 1; i <= 10; i++) {
    const num = i < 10 ? "0" + i : i;
    html += `
      <li>
        📘 <strong>Livre ${num}</strong><br>
        <a href="livre/livre-${num}.pdf" target="_blank"
           style="color:#004080; font-weight:bold; text-decoration:underline;">
           اضغط هنا لفتح / تحميل PDF
        </a>
      </li><br>
    `;
  }

  html += "</ul>";

  showSimpleBox("Livre 📚", html);
};
btnVideo.onclick = () => {
  let html = "<ul style='list-style:none; padding:0;'>";

  videoLinks.forEach((link, index) => {
    html += `
      <li style="margin-bottom:10px;">
        <i class="fab fa-youtube" style="color:red; font-size:20px; margin-right:8px;"></i>
        <a href="${link}" target="_blank"
           style="color:#004080; font-weight:bold; text-decoration:none;">
           Vidéo ${index + 1}
        </a>
      </li>
    `;
  });

  html += "</ul>";

  showSimpleBox("Vidéos YouTube 📹", html);
};


/***********************************
 * ====== Contact ======
 ***********************************/

btnContact.onclick = () => {
  showSimpleBox(
    "Contact 📞",
    `
    <p>
      <strong>Email :</strong>
      <a href="mailto:taqiyeddine.assas@univ-biskra.dz">
        taqiyeddine.assas@univ-biskra.dz
      </a>
    </p>

    <div class="social-icons">
      <a href="https://www.linkedin.com/in/taqiyeddine-assas-770696378" target="_blank">
        <i class="fab fa-linkedin"></i>
      </a>

      <a href="https://www.researchgate.net/profile/Taqiyeddine-Assas" target="_blank">
        <i class="fab fa-researchgate"></i>
      </a>

      <a href="https://scholar.google.com/citations?user=Gk1u97UAAAAJ&hl=fr&oi=ao" target="_blank">
        <i class="fas fa-graduation-cap"></i>
      </a>

      <a href="https://orcid.org/0009-0001-4288-2908" target="_blank">
        <i class="fab fa-orcid"></i>
      </a>

      <a href="mailto:taqiyeddine.assas@univ-biskra.dz">
        <i class="fas fa-envelope"></i>
      </a>
    </div>
    `
  );
};

/***********************************
 * ====== تغيير اللغة ======
 ***********************************/
languageSelect.onchange = () => {
  currentLang = languageSelect.value;
  btnS03.textContent = currentLang==="fr"?"Semestre 03":currentLang==="en"?"Semester 03":"الفصل 03";
  btnS04.textContent = currentLang==="fr"?"Semestre 04":currentLang==="en"?"Semester 04":"الفصل 04";
  btnListe.textContent = currentLang==="fr"?"Liste de Présence":currentLang==="en"?"Attendance List":"قائمة الحضور";
  btnCours.textContent = currentLang==="fr"?"Cours":currentLang==="en"?"Course":"الدروس";
  btnExam.textContent =
  currentLang === "fr" ? "Examens et contrôle continu 📝" :
  currentLang === "en" ? "Exams and Continuous Assessment 📝" :
  "الامتحانات والتقويم المستمر 📝";
  btnNotes.textContent = currentLang === "fr" ? "Les notes des étudiants" :
                       currentLang === "en" ? "Students' Scores" :
                       "نقاط الطلبة";

  btnProgramme.textContent = currentLang==="fr"?"Programme pédagogique":currentLang==="en"?"Pedagogical Program":"البرنامج البيداغوجي";
  btnLivre.textContent = currentLang==="fr"?"Livre":currentLang==="en"?"Book":"الكتاب";
  btnVideo.textContent = currentLang==="fr"?"Vidéos YouTube":currentLang==="en"?"YouTube Videos":"فيديوهات يوتيوب";
  btnContact.textContent = currentLang==="fr"?"Contact":currentLang==="en"?"Contact":"التواصل";
};