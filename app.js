/* Predict.rip — static, dependency-free public hub.
   Accounts, payments, posting and file delivery are intentionally not implemented. */
(function () {
  'use strict';

  const RU = {
    skip: "К содержимому",
    previewLabel: "РАЗРАБОТКА",
    announcement: "Следующая сборка Predict готовится. Следи за изменениями и новостями проекта.",
    exploreUpdates: "Смотреть изменения",
    navHome: "Главная", navProduct: "Продукт", navUpdates: "Обновления",
    navCommunity: "Форум", navPricing: "Подписка", navDownload: "Скачать",
    accessHub: "Получить доступ",
    navHomeMobile: "Главная", navProductMobile: "Продукт", navUpdatesMobile: "Обновления",
    navCommunityMobile: "Форум", navPricingMobile: "Подписка", navDownloadMobile: "Загрузка",
    navSupportMobile: "Помощь",
    heroEyebrow: "PREDICT / ПРОЕКТ ДЛЯ CS2",
    heroLine1: "КОНТРОЛИРУЙ", heroLine2: "НЕПРЕДСКАЗУЕМОЕ.",
    heroIntro: "Ragebot, Anti-Aim, движение и визуалы — системы, которые постоянно совершенствуются. Весь функционал, обновления и обсуждения в одном месте.",
    exploreProduct: "Изучить продукт", visitCommunity: "Перейти на форум",
    inDevelopment: "В РАЗРАБОТКЕ", publicReleasePending: "Обновления и релизы — внутри",
    indexProduct: "Единая система контроля.", indexUpdates: "Подробный журнал изменений.",
    indexCommunity: "Место для сообщества.", indexAccess: "Доступ на твоих условиях.",
    ecosystemEyebrow: "ЭКОСИСТЕМА / 01",
    ecosystemTitle: "Больше, чем продукт.<br>Единое пространство.",
    ecosystemIntro: "Новости разработки, обсуждения и будущие подписки — все разделы проекта связаны между собой.",
    productLabel: "ПРОДУКТ",
    productCardTitle: "Rage, Anti-Aim, движение<br>и точные настройки.",
    productCardBody: "Гибкие системы и удобный интерфейс для сложных сценариев CS2.",
    updatesLabel: "ЖУРНАЛ РАЗРАБОТКИ", updatesCardTitle: "Разработка без секретов.",
    updatesCardBody: "Подробный список изменений Rage, Anti-Aim, движения и визуалов.",
    communityLabel: "СООБЩЕСТВО", communityCardTitle: "Обсуждения начинаются здесь.",
    communityCardBody: "Новости, технические темы и идеи сообщества в одном месте.",
    accessLabel: "ПОДПИСКА", accessCardTitle: "Один путь ко всему.",
    accessCardBody: "Выбери срок доступа и получи сборку после открытия релиза.",
    closerEyebrow: "PREDICT / НОВАЯ ГЛАВА",
    closerTitle: "Следующая глава<br>начинается здесь<span>.</span>",
    closerBody: "Следи за разработкой, изучай систему и не пропусти релиз.",
    viewRoadmap: "Смотреть обновления",
    breadcrumbHome: "ГЛАВНАЯ", breadcrumbProduct: "ПРОДУКТ",
    productEyebrow: "01 / О ПРОДУКТЕ",
    productPageTitle: "Внимание<br>к <em>деталям.</em>",
    productPageBody: "Инструменты и настройки для сложных сценариев CS2. Изучай модули и улучшения будущей сборки Predict.",
    conceptOnly: "PREDICT / ДИЗАЙН-СИСТЕМА",
    productPrinciples: "ПРИНЦИПЫ ДИЗАЙНА",
    productShowcaseTitle: "Понятность — тоже функция.",
    productShowcaseBody: "Продуманная иерархия, точные настройки и понятная обратная связь облегчают работу со сложными функциями.",
    principle1Title: "Логичная структура", principle1Body: "Связанные настройки находятся рядом.",
    principle2Title: "Понятная обратная связь", principle2Body: "Каждое изменение должно иметь предсказуемый эффект.",
    principle3Title: "Гибкость настройки", principle3Body: "Интерфейс учитывает разные предпочтения.",
    moduleEyebrow: "ОСНОВНЫЕ МОДУЛИ",
    moduleTitle: "Для каждой системы — своё место.",
    moduleBody: "Ragebot, Anti-Aim, инструменты движения, визуалы и утилиты развиваются как единая система.",
    moduleRage: "Выбор цели, multipoint, hitchance и проверка выстрела — упор на стабильность.",
    moduleAntiAim: "Ручные направления, jitter и логика Anti-Aim с учётом движения.",
    moduleMovement: "Subtick strafer, bhop, jumpbug и продвинутые помощники движения.",
    moduleVisuals: "Настраиваемый HUD, визуальная обратная связь, погода и интерфейс.",
    moduleMisc: "Утилиты, диагностика и улучшения совместимости.",
    moduleConfigs: "Сохранение состояния, настроек и пользовательских профилей.",
    developmentArea: "ОСНОВНАЯ СИСТЕМА", developmentAreaAA: "ОСНОВНАЯ СИСТЕМА",
    developmentAreaMovement: "ОСНОВНАЯ СИСТЕМА",
    developmentArea2: "ОСНОВНАЯ СИСТЕМА", developmentArea3: "ОСНОВНАЯ СИСТЕМА",
    developmentArea4: "ОСНОВНАЯ СИСТЕМА",
    productStatusEyebrow: "ТЕКУЩИЙ СТАТУС", productStatusTitle: "Разработка продолжается.",
    productStatusBody: "Следующая сборка посвящена стабильности, полировке и скорости ключевых систем.",
    followUpdates: "Следить за изменениями",
    breadcrumbHomeUpdates: "ГЛАВНАЯ", breadcrumbUpdates: "ОБНОВЛЕНИЯ",
    updatesEyebrow: "02 / ЖУРНАЛ РАЗРАБОТКИ",
    updatesTitle: "Что<br><em>дальше.</em>",
    updatesIntro: "Подробности следующей сборки Predict: улучшения основных систем, работа над стабильностью и дальнейшие планы.",
    upcomingRelease: "СКОРО ОБНОВЛЕНИЕ",
    releaseFeatureTitle: "Ключевые системы.<br>Больше стабильности.",
    releaseFeatureBody: "Следующее крупное обновление затронет Rage, Anti-Aim, движение, визуалы и утилиты. Главный приоритет — скорость, стабильность и согласованная работа.",
    readChangelog: "Читать список изменений",
    releaseChanges: "ПУНКТОВ ИЗМЕНЕНИЙ", releaseSystems: "ОСНОВНЫХ МОДУЛЕЙ", releaseRoadmap: "ПЛАН РАЗВИТИЯ",
    detailedChangelog: "ПОДРОБНЫЙ СПИСОК",
    changelogHeading: "Что улучшилось.",
    changelogHint: "Раскрой категорию, чтобы увидеть исправления, улучшения и новые механизмы будущей сборки.",
    rageSubtitle: "Наведение · Точность · Стабильность",
    antiAimSubtitle: "Управление движением · Направления · Jitter",
    movementSubtitle: "Subtick · Strafer · Movement helpers",
    visualsSubtitle: "Меню · HUD · Обратная связь",
    miscSubtitle: "Диагностика · Совместимость · Исправления",
    roadmapEyebrow: "СЛЕДУЮЩИЕ ШАГИ",
    roadmapTitle: "Планы на будущее.", roadmapOngoing: "В РАБОТЕ",
    breadcrumbHomeCommunity: "ГЛАВНАЯ", breadcrumbCommunity: "СООБЩЕСТВО",
    forumEyebrow: "03 / СООБЩЕСТВО",
    forumTitle: "Сообщество<br><em>Predict.</em>",
    forumIntro: "Следи за разработкой, изучай технические темы и участвуй в обсуждениях проекта.",
    forumPreviewTitle: "Добро пожаловать на форум Predict",
    forumPreviewBody: "Главная площадка для новостей, обновлений, вопросов, предложений и контента сообщества.",
    demoMode: "ФОРУМ ДЛЯ ЧТЕНИЯ",
    browseCategories: "КАТЕГОРИИ", allDiscussions: "Все обсуждения",
    categoryAnnouncements: "Объявления", categoryChangelog: "Изменения",
    categorySupport: "Поддержка", categoryShowcase: "Медиа", categorySuggestions: "Предложения",
    forumSideTitle: "Для нашего сообщества.",
    forumSideBody: "Обновления, технические детали и обсуждения продукта собраны здесь.",
    readGuidelines: "Центр помощи",
    discussionBoard: "ФОРУМ", forumLatest: "Последние обсуждения",
    searchLabel: "Поиск по темам", topicColumn: "ТЕМА / КАТЕГОРИЯ", statusColumn: "ТИП", openColumn: "ОТКРЫТЬ",
    topicWelcome: "Следующее обновление Predict — ключевые системы и стабильность",
    topicWelcomeDesc: "Большой пакет из 45 изменений по пяти направлениям.",
    categoryAnnouncementsTag: "ОБЪЯВЛЕНИЯ", demoTopic1: "ЗАКРЕПЛЕНО",
    topicChangelog: "Rage: наведение, точность и диагностика",
    topicChangelogDesc: "Выбор целей, hitchance, проверка выстрелов и скорость работы.",
    categoryChangelogTag: "ИЗМЕНЕНИЯ", demoTopic2: "ДЕВЛОГ",
    topicSupport: "Статус релиза и доступность загрузок",
    topicSupportDesc: "Где будут доступны сборки и информация о подписке.",
    categorySupportTag: "ПОМОЩЬ", demoTopic3: "ГАЙД",
    topicShowcase: "Visuals: интерфейс, HUD и кастомизация",
    topicShowcaseDesc: "Навигация, обратная связь и сохранение состояния.",
    categoryShowcaseTag: "МЕДИА", demoTopic4: "ФУНКЦИИ",
    topicIdeas: "Movement и Anti-Aim: ближайшие приоритеты",
    topicIdeasDesc: "Subtick, полировка AA и будущие задачи.",
    categorySuggestionsTag: "ОБСУЖДЕНИЕ", demoTopic5: "ROADMAP",
    noTopics: "Подходящих тем не найдено.", tryDifferentSearch: "Попробуй другой запрос или категорию.",
    forumFooterNote: "5 тем · новости разработки",
    breadcrumbHomeTopic: "ГЛАВНАЯ", topicCommunity: "СООБЩЕСТВО",
    topicPreview: "ОБСУЖДЕНИЕ", backToDiscussions: "Вернуться к темам",
    topicDemo: "ОБНОВЛЕНИЕ ПРОДУКТА",
    demoAuthor: "Predict / Разработка", demoAuthorDesc: "Команда разработки продукта",
    topicDisclaimer: "Эту тему можно читать без аккаунта. Публикация ответов откроется вместе с регистрацией.",
    repliesPending: "Ответы появятся позже.", repliesPendingDesc: "Обсуждения станут доступны после запуска личного кабинета."
  };

  Object.assign(RU, {
    breadcrumbHomePricing: "ГЛАВНАЯ", breadcrumbPricing: "ПОДПИСКА",
    pricingEyebrow: "04 / ДОСТУП",
    pricingTitle: "Доступ на<br><em>твоих условиях.</em>",
    pricingIntro: "Выбери подходящий срок подписки. Цены будут опубликованы при открытии продаж.",
    chooseDuration: "ВЫБЕРИ СРОК", pricingSubheading: "Просто. Гибко. Понятно.",
    pricingPreview: "ПОДПИСКИ",
    plan1Label: "НА МЕСЯЦ", months1: "МЕСЯЦ", notAnnounced1: "Цена скоро появится",
    plan1Desc: "Короткий срок доступа.", selectPlan1: "ВЫБРАНО →",
    plan3Label: "НА 3 МЕСЯЦА", months3: "МЕСЯЦА", notAnnounced3: "Цена скоро появится",
    plan3Desc: "Более длительный доступ.", selectPlan3: "ВЫБРАТЬ →",
    plan12Label: "НА ГОД", months12: "МЕСЯЦЕВ", notAnnounced12: "Цена скоро появится",
    plan12Desc: "Долгосрочный вариант.", selectPlan12: "ВЫБРАТЬ →",
    checkoutNotLive: "Продажи ещё не открыты. Цены и оплата появятся вместе с релизом.",
    comingSoon: "СКОРО",
    futureAccountLabel: "БУДУЩИЙ ЛИЧНЫЙ КАБИНЕТ",
    futureAccountTitle: "Всё в одном кабинете.",
    futureAccountBody: "Управление подпиской, загрузки новых версий и новости продукта будут доступны после добавления аккаунтов.",
    future1: "Данные подписки", future1desc: "Информация о выбранном тарифе и сроке.",
    future2: "Загрузки и версии", future2desc: "Файлы и история релизов.",
    future3: "Помощь и аккаунт", future3desc: "Поддержка и настройки профиля.",
    breadcrumbHomeDownload: "ГЛАВНАЯ", breadcrumbDownload: "СКАЧАТЬ",
    downloadEyebrow: "05 / ЦЕНТР ЗАГРУЗОК",
    downloadTitle: "Следующий шаг<br><em>начинается здесь.</em>",
    downloadIntro: "Здесь появятся официальный загрузчик Predict, информация о версиях и инструкции.",
    notAvailable: "ПОКА НЕДОСТУПНО", loaderTitle: "Predict loader",
    loaderDesc: "Официальный загрузчик станет доступен здесь после открытия публичного релиза.",
    downloadPending: "Загрузка скоро",
    releaseInformation: "ИНФОРМАЦИЯ О РЕЛИЗЕ",
    versionLabel: "Последняя версия", notPublished: "Не опубликована",
    platformLabel: "Поддерживаемые платформы", platformPending: "Уточняется",
    updateLabel: "Канал обновлений", updatePending: "Пока неактивен",
    stayInLoop: "Не пропускай новости.",
    stayInLoopDesc: "Все объявления о версиях и загрузках будут на странице обновлений.",
    seeUpdates: "Смотреть обновления",
    downloadFlowEyebrow: "КАК БУДЕТ РАБОТАТЬ ЗАГРУЗКА",
    downloadFlowTitle: "От доступа до запуска.",
    downloadFlowBody: "После открытия релиза загрузки и доступ будут управляться через этот сайт.",
    flow1: "Аккаунт", flow1desc: "Вход в личный кабинет после его запуска.",
    flow2: "Доступ", flow2desc: "Просмотр доступных сборок по подписке.",
    flow3: "Загрузка", flow3desc: "Официальный файл и инструкция.",
    breadcrumbHomeSupport: "ГЛАВНАЯ", breadcrumbSupport: "ПОМОЩЬ",
    supportEyebrow: "06 / ЦЕНТР ПОМОЩИ",
    supportTitle: "Вопросы?<br><em>Ответим.</em>",
    supportIntro: "Главное о Predict, подписках, загрузках и сообществе.",
    faqEyebrow: "ЧАСТЫЕ ВОПРОСЫ", faqTitle: "Полезно знать.",
    faqIntro: "Быстрые ответы о продукте и работе хаба.",
    exploreForum: "Перейти на форум",
    faq1: "Можно ли скачать Predict?", faq1a: "Публичный загрузчик пока недоступен. Новости о релизе появятся в разделах загрузок и обновлений.",
    faq2: "Можно уже купить подписку?", faq2a: "Пока нет. Цены и оплата появятся позже.",
    faq3: "Можно создать тему на форуме?", faq3a: "Все опубликованные темы можно читать без аккаунта. Публикация тем и ответов откроется после запуска регистрации.",
    faq4: "Где посмотреть следующий changelog?", faq4a: "На странице обновлений опубликован список изменений будущей сборки по категориям.",
    faq5: "Predict связан с Valve?", faq5a: "Нет. Predict — независимый сторонний проект без связи или одобрения Valve.",
    supportNextEyebrow: "ЧТО ДАЛЬШЕ",
    supportNextTitle: "Общаться будет удобнее.",
    supportNextBody: "Форум станет главной площадкой для вопросов, идей и общения о проекте.",
    openCommunity: "Открыть форум",
    notFoundTitle: "Не туда попал<span>.</span>",
    notFoundDesc: "Такой страницы нет. Вернёмся на главную.",
    backHome: "На главную",
    footerIntro: "Predict для CS2. Продукт, новости, форум и доступ в одном месте.",
    footerStatus: "В РАЗРАБОТКЕ / 2026",
    footerProduct: "ПРОДУКТ", navProductFooter: "Обзор", navPlansFooter: "Подписка", navDownloadFooter: "Загрузки",
    footerExplore: "РАЗДЕЛЫ", navUpdatesFooter: "Обновления", navCommunityFooter: "Форум", navHelpFooter: "Помощь",
    footerProject: "ПРОЕКТ",
    footerDisclaimer: "Независимый сторонний проект. Не связан с Valve и не одобрен ею.",
    backToTop: "НАВЕРХ ↑"
  });

  // Compact product and forum navigation labels.
  Object.assign(RU, {
    v2HeroTitle: "Точность решает<br><em>всё.</em>",
    v2HeroBody: "Predict объединяет Ragebot, Anti-Aim, движение, визуалы и утилиты в единую систему гибких настроек. Контроль каждой детали и постоянные обновления.",
    v2ActiveDevelopment: "В РАЗРАБОТКЕ",
    v2PanelSubtitle: "Точность, тайминги и проверка каждого этапа.",
    v2UpdateLabel: "СЛЕДУЮЩИЙ РЕЛИЗ",
    v2Changes: "ИЗМЕНЕНИЙ",
    v2ViewNotes: "Список изменений →",
    v2ForumHeading: "На форуме",
    v2AllTopics: "Все темы →",
    v2DevNotes: "ЖУРНАЛ РАЗРАБОТКИ",
    v2NextRelease: "Что войдёт в обновление?",
    v2ReadDetails: "Читать полный changelog",
    v2SystemsHeading: "Возможности Predict",
    v2ExploreModules: "Все функции →",
    v2CtaTitle: "Следи за развитием проекта.",
    v2CtaBody: "Изменения, технические материалы и новости продукта всегда доступны в хабе.",
    v2CommunityTitle: "Форум сообщества",
    v2CommunityDesc: "Новости продукта, технические темы, обновления и помощь.",
    v2Resources: "РАЗДЕЛЫ",
    v2Latest: "Последние",
    v2ForumTopics: "Темы",
    v2AuthorKey: "АВТОР",
    v2ForumFoot: "Сообщество Predict · Официальные темы продукта"
  });

  Object.assign(RU, {
    v2ProductTitle: "Создан для <em>точности.</em>",
    v2ProductIntro: "Шесть систем в одном окружении. Изучи функционал Predict и изменения, которые войдут в следующее обновление.",
    v2ProductUpdates: "Последние обновления",
    v2ModuleChangelog: "Изменения ↗",
    v2RageDesc: "Выбор целей, генерация multipoint и проверка выстрелов в стабильной и оптимизированной системе.",
    v2Rage1: "Выбор целей и multipoint",
    v2Rage1Desc: "Улучшенные кандидаты и генерация точек.",
    v2Rage2Desc: "Более надёжные решения при оценке выстрела.",
    v2Rage3: "Проверка выстрелов",
    v2Rage3Desc: "Диагностика fire-time, попаданий и промахов.",
    v2Rage4: "Подготовка движения",
    v2Rage4Desc: "Autostop, duck peek и extrapolation.",
    v2AADesc: "Anti-Aim с учётом движения, управлением направлениями, формированием команд и улучшенной совместимостью с subtick.",
    v2AA1: "Ручные направления",
    v2AA1Desc: "Предсказуемые overrides и управление углами.",
    v2AA2: "Стабильность jitter",
    v2AA2Desc: "Более согласованная работа при движении.",
    v2AA3Desc: "Интеграция команд и управление состояниями.",
    v2AA4: "Передача shot-angle",
    v2AA4Desc: "Стабильные переходы при выстреле.",
    v2MoveDesc: "Помощники движения с точными таймингами, subtick-поведением и наглядной диагностикой.",
    v2Move1Desc: "Улучшенные тайминги и публикация движения.",
    v2Move2Desc: "Точнее передача управления при приземлении.",
    v2Move3Desc: "Полировка вспомогательных механик.",
    v2Move4Desc: "Клавиши, график скорости и обратная связь.",
    v2VisualDesc: "Настраиваемый HUD и меню, удобная навигация, сохранение конфигураций и чёткая обратная связь.",
    v2Visual1: "Меню и навигация",
    v2Visual1Desc: "Поиск, настройки, оформление и переходы.",
    v2Visual2Desc: "Более понятное оформление уведомлений.",
    v2Visual3: "Сохранение состояния",
    v2Visual3Desc: "Исправления предпросмотра и сохранения.",
    v2Visual4: "Эффекты мира",
    v2Visual4Desc: "Основа для погоды и тумана.",
    v2MiscDesc: "Утилиты и системные исправления для диагностики, совместимости и надёжного запуска.",
    v2Misc1: "Логи консоли и чата",
    v2Misc1Desc: "Более согласованные события и сообщения.",
    v2Misc2: "Диагностика выполнения",
    v2Misc2Desc: "Развёрнутые отчёты об ошибках и откате.",
    v2Misc3: "Совместимость сборки",
    v2Misc3Desc: "Обновлённые offsets и оптимизация путей.",
    v2Misc4: "Стабильность запуска",
    v2Misc4Desc: "Исправления пограничных состояний.",
    v2ConfigDesc: "Сохранение личных настроек и профилей, совместимость конфигураций после изменений интерфейса и логики.",
    v2Config1: "Профили",
    v2Config1Desc: "Удобное хранение своих настроек.",
    v2Config2: "Сохранённые параметры",
    v2Config2Desc: "Состояния и предпочтения интерфейса.",
    v2Config3: "Совместимость",
    v2Config3Desc: "Поддержка старых конфигураций.",
    v2Config4: "Организация настроек",
    v2Config4Desc: "Быстрый доступ к связанным параметрам.",
    v2VisitForum: "Перейти на форум ↗",
    v2FeatureEnd: "45 улучшений. Одно большое обновление.",
    v2FeatureEndDesc: "Читай полный changelog, включая планы интеграции и тестирования."
  });

  const TOPICS = {
    welcome: {
      category: "ANNOUNCEMENTS",
      en: {
        title: "Next Predict update — core systems & stability",
        excerpt: "A major round of changes across Rage, Anti-Aim, Movement, Visuals and Misc.",
        body: "The next major Predict build focuses on consistency and performance across the project.\n\nRage receives improved target selection, multipoint refinement, hitchance evaluation, fire-time verification and performance optimizations. Anti-Aim work improves movement ownership, direction handling and jitter stability.\n\nMovement improvements include subtick strafer behavior, bhop timing, jumpbug reliability and helper diagnostics. Visuals get navigation, HUD, persistence and interaction polish. Misc work improves logging, compatibility, diagnostics and startup behavior.\n\nRead the full 45-entry changelog in Updates. The roadmap also covers further integration, testing and optimization."
      },
      ru: {
        title: "Следующее обновление Predict — ключевые системы и стабильность",
        excerpt: "Крупный пакет изменений Rage, Anti-Aim, Movement, Visuals и Misc.",
        body: "Следующая большая сборка Predict посвящена стабильности и производительности.\n\nВ Rage улучшаются выбор целей, multipoint, hitchance, проверка выстрела и скорость работы. В Anti-Aim — управление движением, направления и стабильность jitter.\n\nMovement получает улучшения subtick strafer, bhop, jumpbug и диагностики. Визуалы — более удобную навигацию, HUD, сохранение состояния и анимации. Misc — работу логов, совместимость и исправления запуска.\n\nПолный список из 45 пунктов доступен в разделе «Обновления». Там же — дальнейший roadmap."
      }
    },
    "release-notes": {
      category: "CHANGELOG",
      en: {
        title: "Rage: targeting, accuracy & diagnostics",
        excerpt: "The major Ragebot refinements in the upcoming build.",
        body: "Target candidate ranking and multipoint generation have been refined, together with hitchance evaluation, damage traces and shot verification.\n\nThe work also includes safer force-shot logic, fire-time settings snapshots, improved recoil compensation, better extrapolation and more consistent autostop behavior.\n\nSeveral desync and candidate replacement cases have been addressed, while scan order has been optimized to reduce repeated point work. The objective is a more stable and comprehensible Rage pipeline."
      },
      ru: {
        title: "Rage: наведение, точность и диагностика",
        excerpt: "Главные изменения Ragebot в следующей сборке.",
        body: "Улучшены выбор и ранжирование целей, генерация multipoint, hitchance, трассировка урона и проверка выстрелов.\n\nТакже переработаны force-shot, снимки настроек на момент команды, компенсация отдачи, extrapolation и autostop.\n\nИсправляются случаи рассинхронизации и замены кандидатов, оптимизируется порядок сканирования. Цель — более стабильная и понятная работа системы Rage."
      }
    },
    "getting-started": {
      category: "SUPPORT",
      en: {
        title: "Release status & download availability",
        excerpt: "Where to find official Predict builds and access details.",
        body: "Predict is under active development. The public loader and final subscription prices have not been published yet.\n\nOnce a release is available, the Downloads page will show the official loader, supported platforms, version information and installation details.\n\nSubscriptions and account-based access will be introduced separately. All public announcements will be available on the Updates page and the Community forum."
      },
      ru: {
        title: "Статус релиза и доступность загрузок",
        excerpt: "Где появятся официальные сборки и условия доступа.",
        body: "Predict активно разрабатывается. Публичный загрузчик и окончательные цены подписок пока не опубликованы.\n\nПосле релиза в разделе загрузок появятся официальный loader, поддерживаемые системы, версия и инструкция.\n\nПодписки и личный кабинет будут добавлены отдельно. Публичные новости можно будет найти в «Обновлениях» и на форуме."
      }
    },
    "share-your-setup": {
      category: "SHOWCASE",
      en: {
        title: "Visuals: interface, HUD & customization",
        excerpt: "The visual improvements being worked into the next build.",
        body: "Visuals and the interface are receiving a broad polish pass. That includes menu surface styling and motion, search and navigation, popup transitions and clearer control feedback.\n\nHUD messages and the miss feed are being refined, alongside state persistence and configuration saves. Preview display issues and visual state edge cases are also being addressed.\n\nLonger-term work includes weather, fog and resource handling foundations."
      },
      ru: {
        title: "Visuals: интерфейс, HUD и кастомизация",
        excerpt: "Улучшения визуальной части следующей сборки.",
        body: "Визуалы и интерфейс проходят большой этап полировки: внешний вид меню, анимации, поиск, навигация, переходы и обратная связь.\n\nДорабатываются сообщения HUD, miss feed, сохранение настроек и конфигураций. Исправляются ошибки отображения предпросмотра и состояния визуальных элементов.\n\nВ планах также развитие системы погоды, тумана и работы с ресурсами."
      }
    },
    "feature-ideas": {
      category: "DISCUSSION",
      en: {
        title: "Movement & Anti-Aim: next priorities",
        excerpt: "Subtick behavior, AA polish and the work ahead.",
        body: "Movement is a priority for the upcoming build: subtick strafing, quantized movement, bhop timing, jumpbug reliability and movement helpers are all being refined.\n\nAnti-Aim development covers movement ownership, subtick groundwork, manual directions, jitter stability and consistency with scope and attack behavior.\n\nThe ongoing roadmap includes more integration, testing in real scenarios, performance optimization and continued movement / AA / strafe polish."
      },
      ru: {
        title: "Movement и Anti-Aim: ближайшие приоритеты",
        excerpt: "Subtick, полировка AA и дальнейшая работа.",
        body: "В Movement улучшаются subtick strafer, quantized movement, тайминги bhop, надёжность jumpbug и помощники движения.\n\nРабота над Anti-Aim охватывает движение, subtick-совместимость, ручные направления, jitter и стабильность при scope и attack.\n\nДальше — интеграция оставшихся систем, тесты в игре, оптимизация и дальнейшая полировка Movement / AA / strafe."
      }
    }
  };

  const CHANGELOG_RU = [
  "Улучшены выбор цели и ранжирование кандидатов.",
  "Улучшены генерация multipoint и уточнение точек.",
  "Доработаны расчёт hitchance и безопасная логика force-shot.",
  "Повышена согласованность расчётов урона и трассировки.",
  "Добавлен body fallback после неудачной финальной проверки.",
  "Добавлен снимок настроек HC / MD / force shot на момент команды.",
  "Улучшена компенсация отдачи в момент выбранного выстрела.",
  "Улучшены extrapolation и подготовка к scoped-состоянию.",
  "Доработано поведение autostop и autostop в воздухе.",
  "Улучшены подготовка duck peek и ограниченная логика подъёма.",
  "Расширена диагностика проверки выстрела.",
  "Исправлены некоторые случаи рассинхронизации в момент выстрела.",
  "Исправлена несогласованная замена кандидатов.",
  "Исправлена неверная маркировка причин промахов в ряде сценариев.",
  "Оптимизирован порядок сканирования, сокращены повторные расчёты точек.",
  "Улучшены производительность и стабильность Ragebot.",
  "Улучшены владение движением в AA и формирование команд.",
  "Доработана основа совместимости AA с subtick.",
  "Улучшены ручные направления и стабильность jitter.",
  "Исправлены неточности коррекции движения.",
  "Исправлены прерывания AA при scope / attack.",
  "Повышена согласованность публикации углов выстрела.",
  "Улучшены поведение subtick strafer и диагностика.",
  "Улучшена публикация quantized movement.",
  "Доработаны тайминги bhop и передача управления при приземлении.",
  "Повышена надёжность jumpbug при пограничных состояниях.",
  "Улучшены помощники texturebug и pixel surf.",
  "Доработаны movement HUD, отображение клавиш и график скорости.",
  "Улучшено планирование поворотов для помощников движения.",
  "Исправлены случаи wall-assist и silent-camera.",
  "Устранены конфликты владения движением.",
  "Улучшены оформление и анимации меню.",
  "Улучшены навигация UI, поиск и обработка предпросмотра.",
  "Доработаны сохранение состояния и запись конфигураций.",
  "Улучшены переходы всплывающих окон и отклик элементов управления.",
  "Доработаны сообщения HUD и отображение miss feed.",
  "Улучшена основа работы с погодой, туманом и ресурсами.",
  "Исправлены случаи некорректной публикации и отображения предпросмотра.",
  "Исправлены ошибки сохранения состояния визуальных элементов.",
  "Улучшена согласованность логов консоли и чата.",
  "Повышена совместимость конфигураций при сохранении новых названий.",
  "Улучшены диагностика выполнения и отчёты отката.",
  "Обновлены смещения и совместимость с текущей сборкой.",
  "Удалены устаревшие пути и устранены проблемы стабильности.",
  "Исправлены пограничные случаи запуска и обработки команд.",
  "Завершить интеграцию обновлённого Rage pipeline.",
  "Продолжить перенос важнейших восстановленных механик.",
  "Завершить подключение основных систем к текущей сборке.",
  "Расширить тесты в реальных игровых сценариях.",
  "Оптимизировать производительность и убрать шероховатости.",
  "Продолжить полировку Movement / AA / strafe.",
  "Продолжить исправления в Visuals и Misc."
];

  const pages = Array.from(document.querySelectorAll("[data-page]"));
  const navLinks = Array.from(document.querySelectorAll("[data-nav]"));
  const translated = Array.from(document.querySelectorAll("[data-i18n]"));
  const originalHTML = new WeakMap();
  translated.forEach(function (el) { originalHTML.set(el, el.innerHTML); });

  const changeItems = Array.from(document.querySelectorAll("#page-updates .change-groups li, #page-updates .roadmap-columns li"));
  const originalChanges = changeItems.map(function (item) { return item.textContent; });
  const searchInput = document.getElementById("forum-search-input");
  const searchOriginalPlaceholder = searchInput ? searchInput.placeholder : "";
  const menuButton = document.querySelector(".mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const topicRows = Array.from(document.querySelectorAll(".forum-topic"));
  const categoryButtons = Array.from(document.querySelectorAll("[data-filter]"));
  const planCards = Array.from(document.querySelectorAll("[data-plan]"));
  const selectedPlanHeading = document.getElementById("selected-plan-heading");
  const pageTitles = {
    "/": { en: "Home", ru: "Главная" },
    "/product": { en: "Product", ru: "Продукт" },
    "/updates": { en: "Updates", ru: "Обновления" },
    "/community": { en: "Community", ru: "Форум" },
    "/pricing": { en: "Subscriptions", ru: "Подписка" },
    "/download": { en: "Downloads", ru: "Загрузки" },
    "/support": { en: "Help Center", ru: "Помощь" },
    "/404": { en: "Not Found", ru: "Не найдено" }
  };
  let currentCategory = "all";
  let currentPlan = "month";
  let currentRoute = null;
  let language = "en";
  try {
    const chosen = window.localStorage.getItem("predict-language");
    language = chosen === "en" || chosen === "ru"
      ? chosen
      : ((navigator.language || "").toLowerCase().startsWith("ru") ? "ru" : "en");
  } catch (_error) {
    language = (navigator.language || "").toLowerCase().startsWith("ru") ? "ru" : "en";
  }

  function applyLanguage() {
    document.documentElement.lang = language;
    translated.forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (language === "ru" && Object.prototype.hasOwnProperty.call(RU, key)) {
        const value = RU[key];
        if (value.indexOf("<") !== -1) {
          // Trusted, hard-coded localized markup only — never user-supplied content.
          el.innerHTML = value;
        } else {
          el.textContent = value;
        }
      } else {
        el.innerHTML = originalHTML.get(el);
      }
    });
    changeItems.forEach(function (item, i) {
      item.textContent = language === "ru" ? CHANGELOG_RU[i] : originalChanges[i];
    });
    if (searchInput) {
      searchInput.placeholder = language === "ru" ? "Поиск по обсуждениям..." : searchOriginalPlaceholder;
    }
    document.querySelectorAll("[data-lang]").forEach(function (button) {
      const selected = button.getAttribute("data-lang") === language;
      button.setAttribute("aria-pressed", String(selected));
    });
    updatePlan();
    renderTopic();
    filterTopics();
    document.title = "Predict.rip — " + currentPageTitle();
  }

  function getPath() {
    const raw = (location.hash || "#/").substring(1).split("?")[0];
    if (!raw || raw === "/") return "/";
    let path = raw.startsWith("/") ? raw : "/" + raw;
    path = path.replace(/\/+$/, "");
    return path || "/";
  }

  function routeInfo() {
    const path = getPath();
    if (path.startsWith("/community/topic/")) {
      const slug = path.split("/").pop();
      if (Object.prototype.hasOwnProperty.call(TOPICS, slug)) {
        return { page: "/topic", path: path, slug: slug, navigation: "/community" };
      }
      return { page: "/404", path: path, navigation: "" };
    }
    if (Object.prototype.hasOwnProperty.call(pageTitles, path) && path !== "/404") {
      return { page: path, path: path, navigation: path };
    }
    return { page: "/404", path: path, navigation: "" };
  }

  function currentPageTitle() {
    const info = routeInfo();
    if (info.page === "/topic") return language === "ru" ? "Обсуждение" : "Discussion";
    return (pageTitles[info.page] || pageTitles["/404"])[language];
  }

  function closeMobileMenu() {
    if (!menuButton || !mobileMenu) return;
    mobileMenu.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", language === "ru" ? "Открыть меню" : "Open menu");
    document.body.classList.remove("menu-open");
  }

  function navigate() {
    const info = routeInfo();
    pages.forEach(function (page) {
      page.hidden = page.getAttribute("data-page") !== info.page;
    });
    navLinks.forEach(function (link) {
      if (link.getAttribute("data-nav") === info.navigation) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
    if (info.page === "/topic") renderTopic(info.slug);
    document.title = "Predict.rip — " + currentPageTitle();
    closeMobileMenu();
    if (currentRoute !== info.path) {
      window.scrollTo(0, 0);
      currentRoute = info.path;
    }
    revealVisible();
  }

  function renderTopic(forcedSlug) {
    const path = getPath();
    const slug = forcedSlug || (path.startsWith("/community/topic/") ? path.split("/").pop() : null);
    const topic = slug && TOPICS[slug];
    if (!topic) return;
    const content = topic[language] || topic.en;
    document.getElementById("topic-detail-title").textContent = content.title;
    document.getElementById("topic-detail-excerpt").textContent = content.excerpt;
    document.getElementById("topic-detail-body").textContent = content.body;
    document.getElementById("topic-category").textContent = topic.category;
  }

  function filterTopics() {
    const q = searchInput ? searchInput.value.trim().toLocaleLowerCase() : "";
    let visible = 0;
    topicRows.forEach(function (row) {
      const categoryMatches = currentCategory === "all" || row.getAttribute("data-category") === currentCategory;
      const text = ((row.getAttribute("data-search") || "") + " " + row.textContent).toLocaleLowerCase();
      const matches = categoryMatches && (!q || text.includes(q));
      row.hidden = !matches;
      if (matches) visible += 1;
    });
    const emptyState = document.getElementById("forum-empty");
    if (emptyState) emptyState.hidden = visible > 0;
    const title = document.querySelector(".forum-view-heading h2");
    if (title) {
      if (currentCategory === "all") {
        title.textContent = language === "ru" ? "Последние обсуждения" : "Latest discussions";
      } else {
        const selected = categoryButtons.find(function (button) {
          return button.getAttribute("data-filter") === currentCategory;
        });
        title.textContent = selected ? selected.querySelector("span[data-i18n]").textContent : "Discussions";
      }
    }
  }

  function setCategory(category) {
    currentCategory = category;
    categoryButtons.forEach(function (button) {
      const active = button.getAttribute("data-filter") === category;
      button.classList.toggle("is-selected", active);
      button.setAttribute("aria-pressed", String(active));
    });
    filterTopics();
  }

  function updatePlan() {
    const duration = { month: "1 month", quarter: "3 months", year: "12 months" };
    const durationRu = { month: "1 месяц", quarter: "3 месяца", year: "12 месяцев" };
    planCards.forEach(function (card) {
      const active = card.getAttribute("data-plan") === currentPlan;
      card.classList.toggle("is-selected", active);
      card.setAttribute("aria-pressed", String(active));
      const action = card.querySelector(".plan-action");
      if (action) action.textContent = language === "ru"
        ? (active ? "ВЫБРАНО →" : "ВЫБРАТЬ →")
        : (active ? "SELECTED →" : "SELECT PLAN →");
    });
    if (selectedPlanHeading) {
      selectedPlanHeading.textContent = (language === "ru" ? durationRu[currentPlan] + " — выбрано" : duration[currentPlan] + " selected");
    }
  }

  let observer = null;
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });
  }

  function revealVisible() {
    if (!observer) return;
    document.querySelectorAll("[data-page]:not([hidden]) [data-reveal]").forEach(function (el) {
      if (el.classList.contains("is-revealed")) return;
      el.classList.add("will-reveal");
      observer.observe(el);
    });
  }

  document.querySelectorAll("[data-lang]").forEach(function (button) {
    button.addEventListener("click", function () {
      language = button.getAttribute("data-lang");
      try { window.localStorage.setItem("predict-language", language); } catch (_error) {}
      applyLanguage();
      if (menuButton && menuButton.getAttribute("aria-expanded") === "false") closeMobileMenu();
    });
  });

  categoryButtons.forEach(function (button) {
    button.addEventListener("click", function () { setCategory(button.getAttribute("data-filter")); });
  });
  if (searchInput) searchInput.addEventListener("input", filterTopics);
  planCards.forEach(function (card) {
    card.addEventListener("click", function () {
      currentPlan = card.getAttribute("data-plan");
      updatePlan();
    });
  });

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", function () {
      const expanded = menuButton.getAttribute("aria-expanded") === "true";
      mobileMenu.hidden = expanded;
      menuButton.setAttribute("aria-expanded", String(!expanded));
      menuButton.setAttribute("aria-label", language === "ru"
        ? (expanded ? "Открыть меню" : "Закрыть меню")
        : (expanded ? "Open menu" : "Close menu"));
      document.body.classList.toggle("menu-open", !expanded);
    });
  }
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMobileMenu();
  });
  document.querySelectorAll("[data-focus-main]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById("main").focus();
    });
  });
  document.querySelectorAll("[data-back-top]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    });
  });
  document.querySelectorAll("[data-scroll]").forEach(function (link) {
    link.addEventListener("click", function () {
      const targetId = link.getAttribute("data-scroll");
      window.setTimeout(function () {
        const target = document.getElementById(targetId);
        if (target) target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
      }, 30);
    });
  });
  document.querySelectorAll('a[href^="#/"]').forEach(function (link) {
    link.addEventListener("click", function () {
      if (link.hash.substring(1) === getPath()) closeMobileMenu();
    });
  });

  window.addEventListener("hashchange", navigate);
  window.addEventListener("resize", function () {
    if (window.innerWidth > 920) closeMobileMenu();
  });

  document.getElementById("footer-year").textContent = String(new Date().getFullYear());
  applyLanguage();
  navigate();
})();
