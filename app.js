// ============ حالة التطبيق ============
const STORAGE_KEY = 'tasisi_progress_v1';
let PROGRESS = {}; // { chapterId: { unlocked: bool, bestScore: number, passed: bool } }

function loadProgress(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    PROGRESS = raw ? JSON.parse(raw) : {};
  }catch(e){ PROGRESS = {}; }
  // الكابيتل الأول دايمًا مفتوح
  if(!PROGRESS[1]) PROGRESS[1] = { unlocked:true, bestScore:0, passed:false };
  else PROGRESS[1].unlocked = true;
}
function saveProgress(){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(PROGRESS)); }catch(e){}
}
function getChapterState(id){
  return PROGRESS[id] || { unlocked: id === 1, bestScore: 0, passed:false };
}
function isUnlocked(id){
  if(id === 1) return true;
  const prev = getChapterState(id-1);
  return !!prev.passed;
}

// ============ الصفحة الرئيسية ============
function renderHome(){
  const grid = document.getElementById('chapters-grid');
  grid.innerHTML = '';
  let passedCount = 0;
  CHAPTERS.forEach(ch => {
    const unlocked = isUnlocked(ch.id);
    const state = getChapterState(ch.id);
    if(state.passed) passedCount++;
    const card = document.createElement('div');
    card.className = 'chapter-card' + (unlocked ? '' : ' locked');
    const statusIcon = state.passed ? '✓' : (unlocked ? '' : '🔒');
    const scoreClass = state.passed ? 'score-pass' : (state.bestScore > 0 ? 'score-fail' : 'score-none');
    const scoreText = state.bestScore > 0 ? `أفضل نتيجة: ${state.bestScore}%` : 'لسه ما اتعمل';
    card.innerHTML = `
      <div class="chapter-num">
        <span>Kapitel ${String(ch.id).padStart(2,'0')}</span>
        <span class="chapter-status">${statusIcon}</span>
      </div>
      <div class="chapter-de">${ch.titleDe}</div>
      <div class="chapter-ar">${ch.titleAr}</div>
      <span class="chapter-score ${scoreClass}">${scoreText}</span>
      <div class="chapter-bar"><div class="chapter-bar-fill" style="width:${Math.min(state.bestScore,100)}%; background:${ch.color}"></div></div>
    `;
    if(unlocked){
      card.addEventListener('click', () => openChapter(ch.id));
    }
    grid.appendChild(card);
  });
  updateHeaderProgress(passedCount);
}

function updateHeaderProgress(passedCount){
  document.getElementById('header-progress-text').textContent = `${passedCount} / 12`;
  const circumference = 97.4;
  const offset = circumference - (circumference * passedCount / 12);
  document.getElementById('header-ring-fill').style.strokeDashoffset = offset;
}

// ============ التنقل ============
let currentChapterId = null;
let currentTab = 'lesen';

function goHome(){
  document.getElementById('home-view').classList.add('active');
  document.getElementById('chapter-view').classList.remove('active');
  currentChapterId = null;
  renderHome();
  window.scrollTo(0,0);
}

function openChapter(id){
  if(!isUnlocked(id)) return;
  currentChapterId = id;
  currentTab = 'lesen';
  document.getElementById('home-view').classList.remove('active');
  document.getElementById('chapter-view').classList.add('active');
  renderChapterHeader();
  renderTabs();
  renderTabContent();
  window.scrollTo(0,0);
}

function renderChapterHeader(){
  const ch = CHAPTERS.find(c => c.id === currentChapterId);
  document.getElementById('ch-eyebrow').textContent = `Kapitel ${String(ch.id).padStart(2,'0')} · CEFR A1`;
  document.getElementById('ch-title-de').textContent = ch.titleDe;
  document.getElementById('ch-title-ar').textContent = ch.titleAr;
}

const TABS = [
  {key:'lesen', labelDe:'Lesen', labelAr:'قراءة'},
  {key:'hoeren', labelDe:'Hören', labelAr:'استماع'},
  {key:'sprechen', labelDe:'Sprechen', labelAr:'محادثة'},
  {key:'schreiben', labelDe:'Schreiben', labelAr:'كتابة'},
  {key:'quiz', labelDe:'Quiz', labelAr:'اختبار'}
];

function renderTabs(){
  const tabsEl = document.getElementById('ch-tabs');
  tabsEl.innerHTML = '';
  TABS.forEach(t => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (currentTab === t.key ? ' active' : '');
    btn.innerHTML = `<span class="de">${t.labelDe}</span> · ${t.labelAr}`;
    btn.addEventListener('click', () => { currentTab = t.key; renderTabs(); renderTabContent(); });
    tabsEl.appendChild(btn);
  });
}

function renderTabContent(){
  const container = document.getElementById('ch-content');
  const ch = CHAPTERS.find(c => c.id === currentChapterId);
  container.innerHTML = '';

  if(currentTab === 'lesen') container.appendChild(renderLesen(ch));
  else if(currentTab === 'hoeren') container.appendChild(renderHoeren(ch));
  else if(currentTab === 'sprechen') container.appendChild(renderSprechen(ch));
  else if(currentTab === 'schreiben') container.appendChild(renderSchreiben(ch));
  else if(currentTab === 'quiz') container.appendChild(renderQuizIntro(ch));
}

// ============ Lesen ============
function renderLesen(ch){
  const wrap = document.createElement('div');
  const vocabRows = ch.lesen.vocab.map(([de,ar]) => `
    <div class="vocab-row"><span class="vocab-de">${de}</span><span class="vocab-ar">${ar}</span></div>
  `).join('');
  wrap.innerHTML = `
    <div class="panel-block">
      <h3>النص <span class="mono" style="font-size:12px; color:var(--ink-soft); font-weight:400;">Lesetext</span></h3>
      <div class="de-text">${escapeHtml(ch.lesen.textDe)}</div>
    </div>
    <div class="panel-block">
      <h3>الشرح بالعربي</h3>
      <div class="ar-explain">${ch.lesen.explainAr}</div>
    </div>
    <div class="panel-block">
      <h3>مفردات جديدة <span class="mono" style="font-size:12px; color:var(--ink-soft); font-weight:400;">Wortschatz</span></h3>
      <div class="vocab-grid">${vocabRows}</div>
    </div>
  `;
  return wrap;
}

// ============ Hören ============
function renderHoeren(ch){
  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <div class="panel-block">
      <h3>نص الاستماع <span class="mono" style="font-size:12px; color:var(--ink-soft); font-weight:400;">Hörtext</span></h3>
      <p class="ar-explain" style="margin-top:0; margin-bottom:14px;">📌 اقرأي النص التالي بصوت عالٍ ببطء (أو اطلبي من حد يقراه ليكي) وتخيلي إنه حوار مسموع — ده هيدربك على فهم الاستماع.</p>
      <div class="de-text">${escapeHtml(ch.hoeren.scriptDe)}</div>
    </div>
    <div class="panel-block">
      <h3>الشرح</h3>
      <div class="ar-explain">${ch.hoeren.explainAr}</div>
    </div>
    <div class="panel-block">
      <h3>أسئلة فهم الاستماع</h3>
      ${ch.hoeren.questions.map((q,i) => `
        <div style="margin-bottom:14px;">
          <p style="font-weight:700; margin-bottom:8px;">${i+1}. ${q.q}</p>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            ${q.a.map((opt,oi) => `<span class="chapter-score score-none" style="cursor:pointer;" data-correct="${oi===q.correct}" onclick="checkHoerAnswer(this)">${opt}</span>`).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
  return wrap;
}
function checkHoerAnswer(el){
  const group = el.parentElement.querySelectorAll('span');
  group.forEach(s => s.style.pointerEvents = 'none');
  if(el.dataset.correct === 'true'){
    el.style.background = '#DCEAE0'; el.style.color = 'var(--gruen)';
    el.textContent = el.textContent + ' ✓';
  } else {
    el.style.background = '#F4DAD5'; el.style.color = 'var(--rot)';
    el.textContent = el.textContent + ' ✗';
    group.forEach(s => { if(s.dataset.correct === 'true'){ s.style.background = '#DCEAE0'; s.style.color = 'var(--gruen)'; s.textContent = s.textContent + ' ✓'; }});
  }
}

// ============ Sprechen ============
function renderSprechen(ch){
  const wrap = document.createElement('div');
  const dialogLines = ch.sprechen.dialogDe.map(([speaker,line]) => `
    <div class="dialog-line"><span class="dialog-speaker">${speaker}</span><span class="dialog-text">${line}</span></div>
  `).join('');
  wrap.innerHTML = `
    <div class="panel-block">
      <h3>تمرين المحادثة</h3>
      <div class="ar-explain" style="margin-top:0;">${ch.sprechen.promptAr}</div>
    </div>
    <div class="panel-block">
      <h3>حوار نموذجي <span class="mono" style="font-size:12px; color:var(--ink-soft); font-weight:400;">Beispieldialog</span></h3>
      <div class="dialog-block">${dialogLines}</div>
      <div class="ar-explain">${ch.sprechen.explainAr}</div>
    </div>
  `;
  return wrap;
}

// ============ Schreiben ============
function renderSchreiben(ch){
  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <div class="panel-block">
      <h3>تمرين الكتابة</h3>
      <div class="ar-explain" style="margin-top:0;">${ch.schreiben.taskAr}</div>
      <textarea id="schreiben-input" placeholder="اكتبي إجابتك هنا بالألماني..." style="width:100%; min-height:120px; margin-top:16px; padding:14px 16px; border:2px solid var(--line); border-radius:10px; font-family:'Fraunces',serif; direction:ltr; font-size:15px; background:var(--paper); resize:vertical;"></textarea>
    </div>
    <div class="panel-block">
      <h3>مثال للاستئناس <span class="mono" style="font-size:12px; color:var(--ink-soft); font-weight:400;">Beispiel</span></h3>
      <div class="example-block">
        <div class="example-label">نموذج إجابة</div>
        <div class="de-text" style="background:transparent; border:none; padding:0;">${escapeHtml(ch.schreiben.exampleDe)}</div>
      </div>
    </div>
  `;
  return wrap;
}

// ============ Quiz ============
let quizState = null;

function renderQuizIntro(ch){
  const wrap = document.createElement('div');
  const state = getChapterState(ch.id);
  wrap.innerHTML = `
    <div class="panel-block" style="text-align:center; padding:36px 24px;">
      <h3 style="justify-content:center;">اختبار الكابيتل — 30 سؤال</h3>
      <p class="ar-explain" style="margin-top:0; max-width:500px; margin-left:auto; margin-right:auto;">
        الاختبار بيغطي القراءة والاستماع والمحادثة والكتابة اللي درستيها في الكابيتل ده. لازم تجاوبي صح على 60% على الأقل (18 سؤال من 30) عشان الكابيتل الجاي يتفتح.
      </p>
      ${state.bestScore > 0 ? `<p style="margin:16px 0; font-weight:700; color:${state.passed ? 'var(--gruen)' : 'var(--rot)'};">أفضل نتيجة سابقة: ${state.bestScore}% ${state.passed ? '(ناجحة ✓)' : '(محتاجة إعادة)'}</p>` : ''}
      <button class="btn" onclick="startQuiz(${ch.id})" style="margin-top:12px;">ابدئي الاختبار</button>
    </div>
  `;
  return wrap;
}

function startQuiz(chapterId){
  const questions = QUIZZES[chapterId].map((q,i) => ({...q, idx:i}));
  // شفل الأسئلة عشوائيًا كل مرة
  const shuffled = shuffleArray([...questions]);
  quizState = {
    chapterId,
    questions: shuffled,
    current: 0,
    answers: new Array(shuffled.length).fill(null),
  };
  renderQuizQuestion();
}

function shuffleArray(arr){
  for(let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i+1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function renderQuizQuestion(){
  const container = document.getElementById('ch-content');
  const { questions, current, answers } = quizState;
  const q = questions[current];
  const total = questions.length;
  const answeredCount = answers.filter(a => a !== null).length;

  container.innerHTML = `
    <div class="quiz-wrap">
      <div class="quiz-meta"><span>سؤال ${current+1} من ${total}</span><span>${answeredCount} اتجاوب</span></div>
      <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${((current)/total)*100}%"></div></div>
      <div class="q-card">
        <div class="q-text">${q.q}</div>
        <div class="q-options" id="q-options"></div>
        <div class="q-nav">
          <button class="btn secondary" id="prev-btn" ${current===0 ? 'disabled' : ''} onclick="quizNav(-1)">السابق</button>
          <button class="btn" id="next-btn" onclick="quizNav(1)" disabled>${current === total-1 ? 'إنهاء الاختبار' : 'التالي'}</button>
        </div>
      </div>
    </div>
  `;

  const optsEl = document.getElementById('q-options');
  q.o.forEach((opt, oi) => {
    const btn = document.createElement('button');
    btn.className = 'q-option';
    if(answers[current] === oi) btn.classList.add('selected');
    btn.textContent = opt;
    btn.addEventListener('click', () => selectAnswer(oi));
    optsEl.appendChild(btn);
  });

  document.getElementById('next-btn').disabled = answers[current] === null;
}

function selectAnswer(optionIndex){
  quizState.answers[quizState.current] = optionIndex;
  renderQuizQuestion();
}

function quizNav(dir){
  const { questions, current } = quizState;
  if(dir === 1 && current === questions.length - 1){
    finishQuiz();
    return;
  }
  quizState.current += dir;
  renderQuizQuestion();
}

function finishQuiz(){
  const { questions, answers, chapterId } = quizState;
  let correctCount = 0;
  questions.forEach((q, i) => { if(answers[i] === q.c) correctCount++; });
  const pct = Math.round((correctCount / questions.length) * 100);
  const passed = pct >= 60;

  const prevState = getChapterState(chapterId);
  const newBest = Math.max(prevState.bestScore || 0, pct);
  const newPassed = prevState.passed || passed;
  PROGRESS[chapterId] = { unlocked:true, bestScore:newBest, passed:newPassed };
  if(passed && PROGRESS[chapterId+1] === undefined){
    PROGRESS[chapterId+1] = { unlocked:true, bestScore:0, passed:false };
  }
  saveProgress();

  renderQuizResult(correctCount, questions.length, pct, passed, chapterId);
}

function renderQuizResult(correct, total, pct, passed, chapterId){
  const container = document.getElementById('ch-content');
  const nextCh = CHAPTERS.find(c => c.id === chapterId + 1);
  container.innerHTML = `
    <div class="quiz-result">
      <div class="result-circle ${passed ? 'result-pass' : 'result-fail'}">
        <b>${pct}%</b>
        <span>${correct} / ${total}</span>
      </div>
      <div class="result-msg">${passed ? 'مبروك! نجحتي في الاختبار 🎉' : 'محتاجة تراجعي شوية'}</div>
      <div class="result-sub">${passed
        ? (nextCh ? `اتفتح كابيتل ${nextCh.id}: ${nextCh.titleDe}` : 'خلصتي كل الكباتل! برافو عليكي 👏')
        : 'لازم توصلي 60% على الأقل (18 من 30) عشان تفتحي الكابيتل الجاي. راجعي القراءة والاستماع وحاولي تاني.'}</div>
      <div class="result-actions">
        <button class="btn secondary" onclick="reviewQuiz()">مراجعة الإجابات</button>
        <button class="btn" onclick="startQuiz(${chapterId})">إعادة الاختبار</button>
        ${passed ? `<button class="btn secondary" onclick="goHome()">رجوع للصفحة الرئيسية</button>` : ''}
      </div>
    </div>
  `;
}

function reviewQuiz(){
  const container = document.getElementById('ch-content');
  const { questions, answers } = quizState;
  let html = `<div class="quiz-wrap"><h3 style="font-family:Fraunces,serif; margin-bottom:20px;">مراجعة الإجابات</h3>`;
  questions.forEach((q, i) => {
    const userAns = answers[i];
    const isCorrect = userAns === q.c;
    html += `<div class="q-card" style="margin-bottom:14px;">
      <div class="q-text" style="font-size:15px;">${i+1}. ${q.q}</div>
      <div class="q-options">
        ${q.o.map((opt,oi) => {
          let cls = 'q-option';
          if(oi === q.c) cls += ' correct';
          else if(oi === userAns && !isCorrect) cls += ' wrong';
          return `<div class="${cls}" style="cursor:default;">${opt}</div>`;
        }).join('')}
      </div>
    </div>`;
  });
  html += `<div style="text-align:center; margin-top:20px;"><button class="btn" onclick="renderQuizIntro_wrapper()">رجوع</button></div></div>`;
  container.innerHTML = html;
}
function renderQuizIntro_wrapper(){
  const ch = CHAPTERS.find(c => c.id === quizState.chapterId);
  const container = document.getElementById('ch-content');
  container.innerHTML = '';
  container.appendChild(renderQuizIntro(ch));
}

// ============ Utils ============
function escapeHtml(str){
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ============ تهيئة ============
loadProgress();
renderHome();
