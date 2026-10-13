(() => {
  'use strict';
  document.documentElement.classList.add('js-ready');

  const translations = {
    ru: {
      skip: 'К содержимому', navFeatures: 'ВОЗМОЖНОСТИ', navInterface: 'ИНТЕРФЕЙС', navApproach: 'ПОДХОД', navCta: 'ОТКРЫТЬ ПРЕВЬЮ', navStatus: 'СТАТУС ПРОЕКТА ↗',
      tagline: 'НИЧЕГО ЛИШНЕГО. ВСЁ ПОД ТЕБЯ.', heroHeadline: 'НЕ ИГРАЙ\nПО ШАБЛОНУ.', heroDesc: 'Создавай свою конфигурацию, меняй визуальный стиль, настраивай каждый элемент — в одном продуманном пространстве.', exploreUi: 'ИССЛЕДОВАТЬ ИНТЕРФЕЙС', featuresCta: 'ВОЗМОЖНОСТИ', conceptLabel: 'ВИЗУАЛЬНАЯ КОНЦЕПЦИЯ / НЕ КАДР ИЗ ИГРЫ', heroBottomLeft: 'СОЗДАНО ДЛЯ ТЕХ, КОМУ НЕ ВСЁ РАВНО.',
      featuresHeading: 'ВСЁ В ДЕТАЛЯХ', featuresIntro: 'Не сотня одинаковых карточек с обещаниями. Четыре направления, которые определяют характер Predict.', aimDesc: 'Точные настройки, понятная логика и быстрый доступ к параметрам. Пространство, в котором ничто не отвлекает от главного.', visualDesc: 'Система отображения, которую можно подстроить под себя. Разные элементы, цвета и информационные слои — без визуального хаоса.', skinDesc: 'Облик предметов и деталей интерфейса — это тоже часть твоего стиля. Один язык дизайна от меню до предпросмотра.', moveDesc: 'Отдельное место для движения и дополнительных инструментов. Настраивай сложное в интерфейсе, который остаётся простым.',
      demoHeading: 'НАСТРОЙ ПОД СЕБЯ.<br><em>НЕ НАОБОРОТ.</em>', demoDesc: 'Не просто картинка интерфейса. Переключай вкладки, меняй значения и смотри, как работает концепция панели управления.', demoNote: 'Это интерактивный концепт интерфейса, а не подключённый к игре клиент. Настройки на странице демонстрационные.',
      philosophyOver: 'МЕНЬШЕ СЛОВ. БОЛЬШЕ СМЫСЛА.', philosophyLine1: 'ХОРОШИЙ СОФТ', philosophyLine2: 'НЕ МЕШАЕТ', philosophyLine3: 'ТЕБЕ ИГРАТЬ.', philosophyDesc: 'Мы делаем ставку на понятную структуру, быстрый доступ к инструментам и единый визуальный язык. Каждая настройка должна быть там, где ты её ожидаешь.',
      statusTitle: 'ЭТО ТОЛЬКО<br>НАЧАЛО<span>.</span>', statusDescription: 'Сейчас доступен сайт и демонстрация концепции интерфейса. Подписки, личный кабинет и загрузка клиента появятся только после официального анонса.', statusCta: 'СЛЕДИТЬ ЗА ПРОЕКТОМ',
      faqTitle: 'КОРОТКО.<br><em>ПО ДЕЛУ.</em>', faqIntro: 'Самое важное о Predict.rip. Без мелкого шрифта и громких гарантий.',
      faqQ1: 'Можно скачать Predict прямо сейчас?', faqA1: 'Пока нет. На сайте показано направление дизайна и интерактивная модель меню. О доступности продукта сообщим отдельно.',
      faqQ2: 'Какая будет цена подписки?', faqA2: 'Цены и тарифы ещё не объявлены. Мы не хотим показывать вымышленные предложения и неработающую оплату.',
      faqQ3: 'То, что я вижу в превью, уже работает в CS2?', faqA3: 'Нет. Это концепт интерфейса для демонстрации визуального направления. Настройки внутри сайта не связаны с игровым клиентом.',
      faqQ4: 'Использование стороннего ПО безопасно для аккаунта?', faqA4: 'Любое стороннее ПО может нарушать правила игры и привести к ограничениям аккаунта. Мы не обещаем обход античита или отсутствие блокировок.',
      disclaimer: 'Независимый проект. Не связан с Valve или Counter-Strike.'
    },
    en: {
      skip: 'Skip to content', navFeatures: 'CAPABILITIES', navInterface: 'INTERFACE', navApproach: 'OUR APPROACH', navCta: 'EXPLORE THE UI', navStatus: 'PROJECT STATUS ↗',
      tagline: 'NO EXTRA NOISE. ALL YOUR CONTROL.', heroHeadline: 'NOT ANOTHER\nDEFAULT.', heroDesc: 'Shape your configuration, change the visual language, and dial in every detail — all inside one thoughtfully designed space.', exploreUi: 'EXPLORE THE INTERFACE', featuresCta: 'DISCOVER FEATURES', conceptLabel: 'DESIGN CONCEPT / NOT GAMEPLAY FOOTAGE', heroBottomLeft: 'BUILT FOR PEOPLE WHO CARE ABOUT THE DETAILS.',
      featuresHeading: 'IT’S IN THE DETAILS', featuresIntro: 'Not a wall of generic cards and promises. Four distinct areas define the direction of Predict.', aimDesc: 'Intuitive controls, fine-tuning, and instant access to your settings. A workspace built to stay out of your way.', visualDesc: 'An adaptable visual language. Configure individual elements, colors, and information layers without adding unnecessary noise.', skinDesc: 'Your gear and interface are both part of your personal style. One consistent design language, from controls to previews.', moveDesc: 'Dedicated space for movement and additional utilities. Advanced controls, designed to feel approachable.',
      demoHeading: 'MADE TO ADAPT.<br><em>TO YOU.</em>', demoDesc: 'More than a static screenshot. Switch sections, change values, and explore this interactive interface concept.', demoNote: 'This is a working interface concept, not a connected game client. Controls on this website are for demonstration only.',
      philosophyOver: 'LESS NOISE. MORE INTENTION.', philosophyLine1: 'GREAT SOFTWARE', philosophyLine2: 'GETS OUT OF', philosophyLine3: 'YOUR WAY.', philosophyDesc: 'We focus on clear structure, instant access, and a coherent visual system. Every setting belongs exactly where you expect to find it.',
      statusTitle: 'THIS IS JUST<br>THE START<span>.</span>', statusDescription: 'The website and interactive interface concept are available now. Subscriptions, accounts, and downloads will only be introduced following an official announcement.', statusCta: 'FOLLOW THE PROJECT',
      faqTitle: 'STRAIGHT<br><em>ANSWERS.</em>', faqIntro: 'The essential details, without fine print or inflated guarantees.',
      faqQ1: 'Can I download Predict right now?', faqA1: 'Not yet. This website presents the design direction and an interactive mockup. Product availability will be announced separately.',
      faqQ2: 'What will a subscription cost?', faqA2: 'Prices and plans have not been announced. We will not list fictional offers or nonfunctional payment links.',
      faqQ3: 'Does the interactive preview work in CS2?', faqA3: 'No. The preview demonstrates an interface concept, not a connected or tested CS2 client.',
      faqQ4: 'Is third-party CS2 software risk-free?', faqA4: 'Third-party software may violate the rules of the game and result in account penalties. We make no claims about anti-cheat immunity or undetected status.',
      disclaimer: 'Independent project. Not affiliated with Valve or Counter-Strike.'
    }
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  let language = 'ru';

  function translate(next) {
    if (!translations[next]) return;
    language = next;
    document.documentElement.lang = language;
    $$('[data-t]').forEach(el => {
      const str = translations[language][el.dataset.t];
      if (typeof str !== 'string') return;
      if (['demoHeading', 'statusTitle', 'faqTitle'].includes(el.dataset.t)) el.innerHTML = str;
      else el.textContent = str;
    });
    const langButton = $('#langSwitch');
    langButton.innerHTML = language === 'ru' ? 'RU <span>↔</span> EN' : 'EN <span>↔</span> RU';
    langButton.setAttribute('aria-label', language === 'ru' ? 'Switch to English' : 'Переключить на русский');
    try { localStorage.setItem('predict-language', language); } catch (_) { /* storage may be unavailable */ }
    renderMode(activeMode, false);
  }

  // A visual-only mock application. No connection to any game or service.
  const demoModes = {
    aim: {path:'AIM / GENERAL', title:'Aim configuration', desc:'Precision, down to the smallest detail.', lines:[['Aim assistance','Primary control'],['Multi-point','Additional focus points'],['Adaptive profile','Dynamic configuration']], range:'Field of view', unit:'°', min:1, max:100, value:48, switches:[true,true,false], preview:'PRECISION / MODE 01'},
    visuals:{path:'VISUALS / GENERAL',title:'Visual configuration',desc:'See your settings come together.',lines:[['Player overlay','Visual information layer'],['Outline effect','Profile highlights'],['World colors','Color adjustment']],range:'Overlay opacity',unit:'%',min:0,max:100,value:72,switches:[true,true,false],preview:'VISUAL LANGUAGE / MODE 02'},
    skins:{path:'SKINS / STUDIO',title:'Inventory studio',desc:'Make the look your own.',lines:[['Studio preview','Interactive scene'],['Accent palette','Color correction'],['Item labels','Additional information']],range:'Color intensity',unit:'%',min:0,max:100,value:63,switches:[true,true,true],preview:'PERSONAL STYLE / MODE 03'},
    movement:{path:'MOVEMENT / TOOLS',title:'Movement settings',desc:'Keep controls within reach.',lines:[['Movement panel','Contextual controls'],['Keybind overlay','On-screen information'],['Input history','Recent interactions']],range:'UI response',unit:'%',min:0,max:100,value:54,switches:[true,false,true],preview:'MOVEMENT / MODE 04'}
  };
  let activeMode = 'aim';
  const switchState = new Map(Object.entries(demoModes).map(([k,v]) => [k,[...v.switches]]));
  const valueState = new Map(Object.entries(demoModes).map(([k,v])=>[k,v.value]));
  const toggleButtons = [$('#toggle1'),$('#toggle2'),$('#toggle3')];
  const range = $('#settingRange');
  const presetButtons = $$('.preset');
  const modeButtons = $$('.demo-nav-item');

  function renderMode(mode, resetPreset = true) {
    const data = demoModes[mode];
    if (!data) return;
    activeMode = mode;
    const frame = $('#demoFrame');
    frame.dataset.mode = mode;
    $('#demoPath').textContent = data.path;
    $('#demoTitle').textContent = data.title;
    $('#demoDescription').textContent = data.desc;
    $('#previewModeText').textContent = data.preview;
    data.lines.forEach(([name, description],i) => {
      $('#toggleTitle'+(i+1)).textContent = name;
      $('#toggleInfo'+(i+1)).textContent = description;
      toggleButtons[i].setAttribute('aria-label',name);
      const on=switchState.get(mode)[i];
      toggleButtons[i].classList.toggle('is-on',on);
      toggleButtons[i].setAttribute('aria-checked',String(on));
    });
    $('#rangeTitle').textContent = data.range;
    range.min=data.min;
    range.max=data.max;
    range.value=valueState.get(mode);
    updateRange();
    modeButtons.forEach(btn=>{
      const selected=btn.dataset.mode===mode;
      btn.classList.toggle('active',selected);
      btn.setAttribute('aria-selected',String(selected));
      btn.tabIndex=selected?0:-1;
    });
    $('#demoPanel').setAttribute('aria-labelledby','mode-'+mode);
    if(resetPreset) selectPreset('1',false);
  }

  function updateRange(){
    const data = demoModes[activeMode];
    const v=Number(range.value);
    valueState.set(activeMode,v);
    $('#rangeValue').textContent=v+data.unit;
    const p=(v-Number(range.min))/(Number(range.max)-Number(range.min))*100;
    range.style.setProperty('--range-progress',p+'%');
    $('#previewRing').style.setProperty('--ring-size',Math.round(88+p*1.75)+'px');
  }

  function selectPreset(number, apply=true){
    presetButtons.forEach(btn=>{btn.classList.toggle('active',btn.dataset.preset===number);btn.setAttribute('aria-pressed',String(btn.dataset.preset===number));});
    if(!apply)return;
    const data=demoModes[activeMode];
    const values={'1':data.value,'2':Math.max(data.min,Math.round(data.value*.65)),'3':Math.min(data.max,Math.round(data.value*1.23))};
    range.value=values[number];
    updateRange();
    if(number==='2'){
      switchState.get(activeMode)[2]=false;
      toggleButtons[2].classList.remove('is-on');
      toggleButtons[2].setAttribute('aria-checked','false');
    }
  }

  modeButtons.forEach(btn=>{
    btn.addEventListener('click',()=>renderMode(btn.dataset.mode));
    btn.addEventListener('keydown',e=>{
      if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(e.key))return;
      e.preventDefault();
      let idx=modeButtons.indexOf(btn);
      if(e.key==='Home')idx=0;
      else if(e.key==='End')idx=modeButtons.length-1;
      else idx=(idx+(['ArrowLeft','ArrowUp'].includes(e.key)?-1:1)+modeButtons.length)%modeButtons.length;
      modeButtons[idx].focus();renderMode(modeButtons[idx].dataset.mode);
    });
  });
  toggleButtons.forEach((btn,i)=>btn.addEventListener('click',()=>{
    const states=switchState.get(activeMode);states[i]=!states[i];
    btn.classList.toggle('is-on',states[i]);
    btn.setAttribute('aria-checked',String(states[i]));
    selectPreset('3',false);
    $('#previewBox').style.opacity=states[0]?'1':'.25';
  }));
  range.addEventListener('input',()=>{updateRange();selectPreset('3',false);});
  presetButtons.forEach(btn=>btn.addEventListener('click',()=>selectPreset(btn.dataset.preset)));
  renderMode('aim');

  const mobileMenu=$('#mobileMenu');
  const menuButton=$('#menuButton');
  const closeMenu=()=>{mobileMenu.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label',language==='ru'?'Открыть меню':'Open menu');};
  menuButton.addEventListener('click',()=>{const next=mobileMenu.hidden;mobileMenu.hidden=!next;menuButton.setAttribute('aria-expanded',String(next));menuButton.setAttribute('aria-label',next?(language==='ru'?'Закрыть меню':'Close menu'):(language==='ru'?'Открыть меню':'Open menu'));});
  $$('a',mobileMenu).forEach(link=>link.addEventListener('click',closeMenu));
  window.addEventListener('keydown',e=>{if(e.key==='Escape'&&!mobileMenu.hidden)closeMenu();});
  window.addEventListener('resize',()=>{if(window.innerWidth>1050&&!mobileMenu.hidden)closeMenu();});
  $('#langSwitch').addEventListener('click',()=>translate(language==='ru'?'en':'ru'));
  $('#year').textContent=String(new Date().getFullYear());
  try { const stored=localStorage.getItem('predict-language');if(stored==='en')translate('en'); } catch(_){/* ignore */}
  if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    const io=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');io.unobserve(entry.target);}})},{threshold:.09,rootMargin:'0px 0px -50px 0px'});
    $$('.reveal').forEach(el=>io.observe(el));
  }else $$('.reveal').forEach(el=>el.classList.add('is-visible'));
})();
