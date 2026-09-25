import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const sourcePath = path.join(projectRoot, "index.html");
const siteUrl = "https://marius93rm.github.io";
const source = fs.readFileSync(sourcePath, "utf8");

const localeConfigs = {
  it: {
    lang: "it",
    canonical: `${siteUrl}/it/`,
    title: "Sviluppatore, designer e formatore IT senior | Marius Minia",
    description: "Sviluppatore, designer, formatore IT senior e coach in Romania. Aiuto sviluppatori e team a crescere con design del software, coaching e formazione pratica.",
    ogDescription: "Sviluppatore, designer, formatore IT senior e coach in Romania: crescita tecnica, architettura software, UX/UI, sviluppo web e formazione pratica.",
    ogLocale: "it_IT",
    ogLocaleAlternates: ["en_US", "ro_RO"],
    siteName: "Marius Minia | Sviluppatore, designer e formatore IT",
    schema: {
      websiteDescription: "Sviluppatore, designer, formatore IT senior e coach: aiuto gli sviluppatori a crescere tecnicamente e a progettare software con più struttura e chiarezza.",
      pageDescription: "Sviluppatore, designer, formatore IT senior e coach in Romania: aiuto gli sviluppatori a crescere tecnicamente attraverso design del software, coaching e formazione pratica.",
      personDescription: "Sviluppatore, designer, formatore IT senior e coach in Romania: aiuto sviluppatori e team a crescere tecnicamente e a progettare software con più struttura e chiarezza.",
      jobTitle: "Sviluppatore, designer, formatore IT senior, docente e coach",
      serviceName: "Coaching per sviluppatori e design del software · Marius Minia",
      serviceDescription: "Coaching per sviluppatori, design del software, UX/UI, formazione IT e sviluppo web per sviluppatori e team in Romania e oltre.",
      areaServed: "Romania",
      serviceType: ["Coaching per sviluppatori", "Design del software e architettura", "Design UX/UI", "Formazione IT", "Sviluppo web", "Supporto tecnico"],
      knowsAbout: ["Coaching per sviluppatori", "Formazione tecnica", "Progettazione software", "Architettura software", "Siti web", "Prodotti digitali", "Sviluppo full-stack", "Sviluppo web", "Qualità del software", "Database", "Metodologie Agile", "Swift", "Sviluppo iOS", "Sviluppo macOS", "Design UX/UI", "Product design", "Code review", "Sviluppo test-driven", "Design system", "Marketing digitale", "Insegnamento dell'informatica"],
      contactType: "richieste di progetto"
    },
    switcher: {
      ariaLabel: "Selezione della lingua",
      visibleLabel: "Lingua:",
      names: { en: "English", it: "Italiano", ro: "Rumeno" }
    },
    translations: [
      ["Marius Minia | Developer, Designer &amp; IT Trainer", "Marius Minia | Sviluppatore, designer e formatore IT"],
      ["Developer, designer, senior IT trainer and coach helping developers grow technically and design software with greater structure and clarity.", "Sviluppatore, designer, formatore IT senior e coach: aiuto gli sviluppatori a crescere tecnicamente e a progettare software con più struttura e chiarezza."],
      ["Developer, designer, senior IT trainer and coach in Romania helping developers grow technically through software design, coaching and practical training.", "Sviluppatore, designer, formatore IT senior e coach in Romania: aiuto gli sviluppatori a crescere tecnicamente attraverso design del software, coaching e formazione pratica."],
      ["Developer, Designer, Senior IT Trainer, Instructor and Coach", "Sviluppatore, designer, formatore IT senior, docente e coach"],
      ["Marius Minia Developer Coaching and Software Design", "Coaching per sviluppatori e design del software · Marius Minia"],
      ["Developer coaching, software design, UX/UI, IT training and web development for developers and teams in Romania and beyond.", "Coaching per sviluppatori, design del software, UX/UI, formazione IT e sviluppo web per sviluppatori e team in Romania e oltre."],
      ["project enquiries", "richieste di progetto"],
      ["Developer coaching", "Coaching per sviluppatori"],
      ["Technical training", "Formazione tecnica"],
      ["Software design", "Design del software"],
      ["Software architecture", "Architettura software"],
      ["Websites", "Siti web"],
      ["Digital products", "Prodotti digitali"],
      ["Full-stack development", "Sviluppo full-stack"],
      ["Web development", "Sviluppo web"],
      ["Software quality", "Qualità del software"],
      ["Databases", "Database"],
      ["Agile methodologies", "Metodologie Agile"],
      ["iOS development", "Sviluppo iOS"],
      ["macOS development", "Sviluppo macOS"],
      ["UX/UI design", "Design UX/UI"],
      ["Product design", "Product design"],
      ["Code review", "Code review"],
      ["Test-driven development", "Sviluppo test-driven"],
      ["Design systems", "Design system"],
      ["Digital marketing", "Marketing digitale"],
      ["Informatics teaching", "Insegnamento dell'informatica"],
      ["Skip to content", "Vai al contenuto"],
      ["Developer &amp; Designer", "Sviluppatore e designer"],
      ["Primary navigation", "Navigazione principale"],
      ["Services", "Servizi"],
      ["Training", "Formazione"],
      ["Projects", "Progetti"],
      ["Background", "Profilo"],
      ["Contact", "Contatti"],
      ["Call Marius", "Chiama Marius"],
      ["Marius Minia · Technical coaching and software design", "Marius Minia · Coaching tecnico e design del software"],
      ["Developer, Designer,", "Sviluppatore, designer,"],
      ["Senior IT Trainer &amp; Coach", "Formatore IT senior e coach"],
      ["I help developers grow technically and design software with greater structure, clarity and confidence.", "Aiuto gli sviluppatori a crescere tecnicamente e a progettare software con più struttura, chiarezza e sicurezza."],
      ["Primary actions", "Azioni principali"],
      ["Discuss your goals", "Parliamo dei tuoi obiettivi"],
      ["Marius Minia, developer, designer and senior IT trainer.", "Marius Minia, sviluppatore, designer e formatore IT senior."],
      ["Marius Minia, developer, designer and senior IT trainer, wearing a navy jacket over a white shirt.", "Marius Minia, sviluppatore, designer e formatore IT senior, con una giacca blu navy sopra una camicia bianca."],
      ["Software development, design and coaching", "Sviluppo software, design e coaching"],
      ["I support developers and teams with practical guidance across technical growth, software architecture, UX/UI design, web development and code quality.", "Supporto sviluppatori e team con una guida pratica su crescita tecnica, architettura software, design UX/UI, sviluppo web e qualità del codice."],
      ["I help developers strengthen technical judgement through code review, architecture guidance, testing practices and focused learning plans.", "Aiuto gli sviluppatori a rafforzare il giudizio tecnico con code review, guida all'architettura, pratiche di test e piani di apprendimento mirati."],
      ["Mentoring · Code review · Architecture · TDD", "Mentoring · Code review · Architettura · TDD"],
      ["Software design and UX/UI", "Design del software e UX/UI"],
      ["Turn requirements into clearer interfaces, design systems and software that is easier to understand, use and maintain.", "Trasformo i requisiti in interfacce più chiare, design system e software più facili da capire, usare e mantenere."],
      ["Web development and technical support", "Sviluppo web e supporto tecnico"],
      ["Build or improve web projects with React, JavaScript, Node.js, Laravel, PHP, C#/.NET, Python and SQL.", "Costruisci o migliora progetti web con React, JavaScript, Node.js, Laravel, PHP, C#/.NET, Python e SQL."],
      ["Senior IT Trainer and Software Development Instructor", "Formatore IT senior e docente di sviluppo software"],
      ["I have personally taught professional courses and developer academies, helping developers build stronger skills in React, C#, .NET, Laravel, databases, UX/UI, architecture and software quality.", "Ho insegnato personalmente corsi professionali e academy per sviluppatori, aiutando i partecipanti a rafforzare le competenze in React, C#, .NET, Laravel, database, UX/UI, architettura e qualità del software."],
      ["Browse courses I have taught", "Scopri i corsi che ho insegnato"],
      ["Previous course", "Corso precedente"],
      ["Next course", "Corso successivo"],
      ["Courses taught by Marius Minia", "Corsi insegnati da Marius Minia"],
      ["Technologies and topics covered", "Tecnologie e argomenti trattati"],
      ["UX/UI Specialisation", "Specializzazione UX/UI"],
      ["UX/UI Specialisation Instructor", "Docente di specializzazione UX/UI"],
      ["Advanced module on UX and UI design: design systems, Atomic Design, Material Design, React &amp; Storybook, TypeScript, Figma prototyping and developer handoff.", "Modulo avanzato su design UX e UI: design system, Atomic Design, Material Design, React e Storybook, TypeScript, prototipazione in Figma e handoff ai developer."],
      ["C# and .NET Instructor", "Docente C# e .NET"],
      ["Advanced Forma.Temp course focused on SOLID principles, design patterns, TDD, software architecture, asynchronous programming and OOP.", "Corso Forma.Temp avanzato incentrato su principi SOLID, design pattern, TDD, architettura software, programmazione asincrona e OOP."],
      ["Architecture", "Architettura"],
      ["Unit Testing and TDD", "Test unitari e TDD"],
      ["Unit Testing and TDD Instructor", "Docente di test unitari e TDD"],
      ["Software quality course covering unit testing, TDD, mocking, static code analysis, refactoring and code coverage.", "Corso sulla qualità del software con test unitari, TDD, mocking, analisi statica del codice, refactoring e code coverage."],
      ["Unit testing", "Test unitari"],
      ["Code coverage", "Code coverage"],
      ["React Instructor", "Docente React"],
      ["Course on React components, hooks, state management, APIs, React Router, dynamic interfaces and hands-on projects.", "Corso su componenti React, hook, gestione dello stato, API, React Router, interfacce dinamiche e progetti pratici."],
      ["Laravel Instructor", "Docente Laravel"],
      ["Laravel module covering PHP, routing, controllers, ORM, authentication, APIs and MVC architecture, including complete application development.", "Modulo Laravel su PHP, routing, controller, ORM, autenticazione, API e architettura MVC, con sviluppo completo di applicazioni."],
      ["C++ Instructor", "Docente C++"],
      ["Developer academy covering C++, object-oriented and functional programming, Git, Scrum and teamwork.", "Academy per sviluppatori su C++, programmazione a oggetti e funzionale, Git, Scrum e lavoro di squadra."],
      ["Functional programming", "Programmazione funzionale"],
      ["Microsoft 365 Instructor", "Docente Microsoft 365"],
      ["Course focused on advanced Word, PowerPoint and Excel, the latest productivity features and collaboration tools.", "Corso incentrato su Word, PowerPoint ed Excel avanzati, sulle più recenti funzioni di produttività e sugli strumenti di collaborazione."],
      ["Collaboration", "Collaborazione"],
      ["JavaScript and databases", "JavaScript e database"],
      ["JavaScript and Relational Database Instructor", "Docente di JavaScript e database relazionali"],
      ["Modules on JavaScript syntax, front-end integration, jQuery, Bootstrap, MySQL database creation and querying, and PostgreSQL.", "Moduli su sintassi JavaScript, integrazione front-end, jQuery, Bootstrap, creazione e interrogazione di database MySQL e PostgreSQL."],
      ["MySQL and database design", "MySQL e progettazione dei database"],
      ["MySQL Database Instructor", "Docente di database MySQL"],
      ["Course on SQL and database design: conceptual and ER modelling, queries and performance, relational and non-relational databases.", "Corso su SQL e progettazione dei database: modellazione concettuale ed ER, query e performance, database relazionali e non relazionali."],
      ["Databases and software design", "Database e design del software"],
      ["Forma.Temp vocational courses for corporate clients on databases, software design, Apache Kafka, Scrum and Docker.", "Corsi professionali Forma.Temp per clienti aziendali su database, design del software, Apache Kafka, Scrum e Docker."],
      ["Instructor", "Docente"],
      ["Artificial Intelligence", "Intelligenza artificiale"],
      ["Artificial Intelligence Instructor", "Docente di intelligenza artificiale"],
      ["Advanced employee training course on Python, machine learning, deep learning, data science, pandas and NumPy.", "Corso avanzato di formazione aziendale su Python, machine learning, deep learning, data science, pandas e NumPy."],
      ["Web development and mobile", "Sviluppo web e mobile"],
      ["Remote teaching for several academies covering Python, Selenium, CMS, databases, front-end development, Angular, Kafka and React Native.", "Insegnamento da remoto per diverse academy su Python, Selenium, CMS, database, sviluppo front-end, Angular, Kafka e React Native."],
      ["Java and Spring", "Java e Spring"],
      ["IT Instructor", "Formatore IT"],
      ["Courses on object-oriented programming, Java, Spring Framework, UML, Agile, Design Thinking, SQL and REST.", "Corsi su programmazione a oggetti, Java, Spring Framework, UML, Agile, Design Thinking, SQL e REST."],
      ["Begear for ATOS · Rome", "Begear per ATOS · Roma"],
      ["Discuss training or coaching", "Parliamo di formazione o coaching"],
      ["Selected software and web projects", "Progetti software e web selezionati"],
      ["Websites, developer tools and product experiments that show how I approach UX/UI, accessibility, performance and maintainable code.", "Siti web, strumenti per sviluppatori ed esperimenti di prodotto che mostrano il mio approccio a UX/UI, accessibilità, performance e codice manutenibile."],
      ["Overall rating", "Valutazione complessiva"],
      ["Built for performance, clarity and accessibility.", "Progettati per performance, chiarezza e accessibilità."],
      ["Performance, SEO, accessibility and engineering best practices are part of the build from the start.", "Performance, SEO, accessibilità e buone pratiche di ingegneria fanno parte del progetto fin dall'inizio."],
      ["Accessibility", "Accessibilità"],
      ["Best practices", "Buone pratiche"],
      ["Virtual tours", "Tour virtuali"],
      ["Browser tool", "Strumento browser"],
      ["CFR data", "Dati CFR"],
      ["Live website · local business", "Sito web live · attività locale"],
      ["A bilingual website for 360° virtual tours of properties, accommodation and businesses around Brașov.", "Sito bilingue per tour virtuali a 360° di immobili, strutture ricettive e attività nella zona di Brașov."],
      ["Visit website", "Visita il sito"],
      ["Open Spațiu360 website", "Apri il sito Spațiu360"],
      ["Public site · developer tooling", "Sito pubblico · strumenti per sviluppatori"],
      ["A repo-local template for Codex and Paseo with 22 agents, 27 skills and clear operational workflows.", "Template locale per repository di Codex e Paseo con 22 agenti, 27 skill e flussi operativi chiari."],
      ["Open project", "Apri il progetto"],
      ["Open unaSquadraFortissimi project", "Apri il progetto unaSquadraFortissimi"],
      ["Open-source utility", "Utility open source"],
      ["A browser-console tool for removing non-mutual TikTok follows while protecting friends and chosen accounts.", "Strumento da console del browser per rimuovere i seguiti TikTok non reciproci, proteggendo amici e account scelti."],
      ["Open TikTok Cleaner project", "Apri il progetto TikTok Cleaner"],
      ["Business website · service", "Sito aziendale · servizio"],
      ["A service website for water purifier sales, installation and assistance in Rome and Lazio.", "Sito di servizi per vendita, installazione e assistenza di depuratori d'acqua a Roma e nel Lazio."],
      ["Local SEO", "SEO locale"],
      ["Service website", "Sito di servizi"],
      ["Open Depurazioneacqua.EU website", "Apri il sito Depurazioneacqua.EU"],
      ["Portfolio website · photography", "Sito portfolio · fotografia"],
      ["A photography portfolio for events, portraits, motorcycles and cars across Rome and Brașov.", "Portfolio fotografico per eventi, ritratti, moto e auto tra Roma e Brașov."],
      ["View portfolio", "Guarda il portfolio"],
      ["Open photography portfolio", "Apri il portfolio fotografico"],
      ["Repository · product experiment", "Repository · esperimento di prodotto"],
      ["A mobile-first search tool for trains that accept a non-folding bicycle, with a verified regional pilot.", "Strumento mobile-first per cercare treni che accettano biciclette non pieghevoli, con un pilota regionale verificato."],
      ["Open TravelBike repository", "Apri il repository TravelBike"],
      ["Launching soon", "In arrivo"],
      ["Teaching repositories for developers", "Repository didattici per sviluppatori"],
      ["Course material I created and delivered, with structured lessons, exercises and project work for React, Python and C#.", "Materiale didattico che ho creato e presentato, con lezioni strutturate, esercizi e progetti per React, Python e C#."],
      ["Teaching material", "Materiale didattico"],
      ["Material I created and delivered for a React.js course, with guided exercises and project work for intermediate to advanced learners.", "Materiale creato e presentato per un corso di React.js, con esercizi guidati e progetti per partecipanti di livello intermedio e avanzato."],
      ["Material I created and delivered for Python courses, from fundamentals through OOP, SOLID, design patterns, automation and data analysis.", "Materiale creato e presentato per corsi di Python, dalle basi a OOP, SOLID, design pattern, automazione e analisi dei dati."],
      ["Material I created and delivered for C# and .NET courses, with testing, async programming, APIs and microservices.", "Materiale creato e presentato per corsi di C# e .NET, con testing, programmazione asincrona, API e microservizi."],
      ["Repository details", "Dettagli del repository"],
      ["Engineering, product design and teaching", "Ingegneria, product design e formazione"],
      ["Computer Engineering, the Apple Developer Academy and professional certifications shape the way I approach software design, teaching and technical coaching.", "Ingegneria Informatica, Apple Developer Academy e certificazioni professionali guidano il mio approccio al design del software, alla formazione e al coaching tecnico."],
      ["Selected education and certifications", "Formazione e certificazioni selezionate"],
      ["Sapienza University of Rome", "Università Sapienza di Roma"],
      ["Computer Engineering studies · Rome", "Studi di Ingegneria Informatica · Roma"],
      ["Entrepreneurship Course", "Corso di imprenditorialità"],
      ["University of Naples Federico II &amp; Apple · Swift, iOS/macOS, UX/UI", "Università degli Studi di Napoli Federico II e Apple · Swift, iOS/macOS, UX/UI"],
      ["Certification · Apple", "Certificazione · Apple"],
      ["Work on your next technical step", "Fai il prossimo passo tecnico"],
      ["Tell me where you are stuck: learning a technology, improving a codebase, shaping a product or building a web project.", "Raccontami dove ti sei bloccato: imparare una tecnologia, migliorare un codebase, definire un prodotto o costruire un progetto web."],
      ["Call +39 393 060 7643", "Chiama +39 393 060 7643"],
      [" or ", " oppure "],
      ["email me", "scrivimi"],
      ["for a direct conversation.", "per una conversazione diretta."],
      ["Name", "Nome"],
      ["Company or project", "Azienda o progetto"],
      ["(optional)", "(facoltativo)"],
      ["Phone", "Telefono"],
      ["Tell me about your project, codebase or learning goal", "Parlami del tuo progetto, codebase o obiettivo di apprendimento"],
      ["Describe what you want to learn, design, build or improve, plus your stack and timing.", "Descrivi cosa vuoi imparare, progettare, costruire o migliorare, indicando anche il tuo stack e le tempistiche."],
      ["Send project details", "Invia i dettagli del progetto"],
      ["Include your goal, current stack and timing.", "Indica il tuo obiettivo, lo stack attuale e le tempistiche."],
      ["Contact links", "Link di contatto"],
      ["Email Marius", "Scrivi a Marius"],
      ["Contact Marius", "Contatta Marius"],
      ["All rights reserved.", "Tutti i diritti riservati."],
      ["Open navigation", "Apri la navigazione"],
      ["Project details", "Dettagli del progetto"],
      ["Documentation", "Documentazione"],
      ["Open repository", "Apri il repository"],
      ["C# and .NET", "C# e .NET"],
      ["Photography portfolio", "Portfolio fotografico"],
      ["Galleries", "Gallerie"],
      ["Photography", "Fotografia"],
      ["Portfolio", "Portfolio"],
      ["Testing", "Testing"],
      ["Rome", "Roma"],
      ["React logo", "Logo React"],
      ["Python logo", "Logo Python"],
      ["C sharp logo", "Logo C sharp"],
      ["Desktop homepage screenshot of Spațiu360 showing the virtual tour hero and interactive interior", "Screenshot desktop della home di Spațiu360 con l'hero del tour virtuale e un interno interattivo"],
      ["Desktop homepage screenshot of unaSquadraFortissimi with its medieval-themed hero and navigation", "Screenshot desktop della home di unaSquadraFortissimi con hero e navigazione a tema medievale"],
      ["Desktop homepage screenshot of TikTok Cleaner showing the intentional following list hero", "Screenshot desktop della home di TikTok Cleaner con l'hero della lista dei seguiti da rimuovere"],
      ["Desktop homepage screenshot of Depurazioneacqua.EU showing the water purifier service hero", "Screenshot desktop della home di Depurazioneacqua.EU con l'hero del servizio di depurazione dell'acqua"],
      ["Desktop photography portfolio screenshot showing the selected work gallery with mountain and event photography", "Screenshot desktop del portfolio fotografico con una galleria di lavori selezionati, montagne e fotografie di eventi"],
      ["Desktop homepage screenshot of BikeTrain România showing a train search from Codlea to Brașov", "Screenshot desktop della home di BikeTrain România con una ricerca ferroviaria da Codlea a Brașov"]
    ]
  },
  ro: {
    lang: "ro",
    canonical: `${siteUrl}/ro/`,
    title: "Dezvoltator, designer și formator IT senior | Marius Minia",
    description: "Dezvoltator, designer, formator IT senior și coach în România. Îi ajut pe dezvoltatori și echipe să-și dezvolte competențele prin proiectare software, coaching și cursuri practice.",
    ogDescription: "Dezvoltator, designer, formator IT senior și coach în România. Mentorat pentru dezvoltatori, arhitectură software, UX/UI, dezvoltare web și cursuri IT aplicate.",
    ogLocale: "ro_RO",
    ogLocaleAlternates: ["en_US", "it_IT"],
    siteName: "Marius Minia | Dezvoltator, designer și formator IT",
    schema: {
      websiteDescription: "Dezvoltator, designer, formator IT senior și coach. Îi ajut pe dezvoltatori să-și dezvolte competențele și să creeze software bine structurat și ușor de înțeles.",
      pageDescription: "Dezvoltator, designer, formator IT senior și coach în România. Îi ajut pe dezvoltatori să-și dezvolte competențele prin proiectare software, coaching și cursuri practice.",
      personDescription: "Dezvoltator, designer, formator IT senior și coach în România. Lucrez cu dezvoltatori și echipe pentru a îmbunătăți competențele tehnice și calitatea software-ului.",
      jobTitle: "Dezvoltator, designer, formator IT senior, instructor și coach",
      serviceName: "Mentorat pentru dezvoltatori și proiectare software · Marius Minia",
      serviceDescription: "Mentorat pentru dezvoltatori, proiectare și arhitectură software, UX/UI, formare IT și dezvoltare web pentru persoane și echipe din România și din alte țări.",
      areaServed: "România",
      serviceType: ["Mentorat pentru dezvoltatori", "Proiectare software și arhitectură", "Design UX/UI", "Formare IT", "Dezvoltare web", "Suport tehnic"],
      knowsAbout: ["Mentorat pentru dezvoltatori", "Formare tehnică", "Proiectare software", "Arhitectură software", "Site-uri web", "Produse digitale", "Dezvoltare full-stack", "Dezvoltare web", "Calitatea software-ului", "Baze de date", "Metodologii Agile", "Swift", "Dezvoltare iOS", "Dezvoltare macOS", "Design UX/UI", "Design de produs", "Code review", "Dezvoltare bazată pe teste", "Sisteme de design", "Marketing digital", "Predarea informaticii"],
      contactType: "cereri de colaborare"
    },
    switcher: {
      ariaLabel: "Selectarea limbii",
      visibleLabel: "Limbă:",
      names: { en: "English", it: "Italiană", ro: "Română" }
    },
    translations: [
      ["Marius Minia | Developer, Designer &amp; IT Trainer", "Marius Minia | Dezvoltator, designer și formator IT"],
      ["Developer, designer, senior IT trainer and coach helping developers grow technically and design software with greater structure and clarity.", "Dezvoltator, designer, formator IT senior și coach. Îi ajut pe dezvoltatori să-și dezvolte competențele tehnice și să creeze software bine structurat și ușor de înțeles."],
      ["Developer, designer, senior IT trainer and coach in Romania helping developers grow technically through software design, coaching and practical training.", "Dezvoltator, designer, formator IT senior și coach în România. Îi ajut pe dezvoltatori să-și dezvolte competențele prin proiectare software, coaching și cursuri practice."],
      ["Developer, Designer, Senior IT Trainer, Instructor and Coach", "Dezvoltator, designer, formator IT senior, instructor și coach"],
      ["Marius Minia Developer Coaching and Software Design", "Mentorat pentru dezvoltatori și proiectare software · Marius Minia"],
      ["Developer coaching, software design, UX/UI, IT training and web development for developers and teams in Romania and beyond.", "Mentorat pentru dezvoltatori, proiectare software, UX/UI, formare IT și dezvoltare web pentru persoane și echipe din România și din alte țări."],
      ["project enquiries", "cereri de colaborare"],
      ["Developer coaching", "Mentorat pentru dezvoltatori"],
      ["Technical training", "Formare tehnică"],
      ["Software design", "Proiectare software"],
      ["Software architecture", "Arhitectură software"],
      ["Websites", "Site-uri web"],
      ["Digital products", "Produse digitale"],
      ["Full-stack development", "Dezvoltare full-stack"],
      ["Web development", "Dezvoltare web"],
      ["Software quality", "Calitatea software-ului"],
      ["Databases", "Baze de date"],
      ["Agile methodologies", "Metodologii Agile"],
      ["iOS development", "Dezvoltare iOS"],
      ["macOS development", "Dezvoltare macOS"],
      ["UX/UI design", "Design UX/UI"],
      ["Product design", "Design de produs"],
      ["Code review", "Code review"],
      ["Test-driven development", "Dezvoltare bazată pe teste"],
      ["Design systems", "Sisteme de design"],
      ["Digital marketing", "Marketing digital"],
      ["Informatics teaching", "Predarea informaticii"],
      ["Skip to content", "Mergi la conținut"],
      ["Developer &amp; Designer", "Dezvoltator și designer"],
      ["Primary navigation", "Navigare principală"],
      ["Services", "Servicii"],
      ["Training", "Formare"],
      ["Projects", "Proiecte"],
      ["Background", "Profil"],
      ["Contact", "Contact"],
      ["Call Marius", "Sună-l pe Marius"],
      ["Marius Minia · Technical coaching and software design", "Marius Minia · mentorat tehnic și proiectare software"],
      ["Developer, Designer,", "Dezvoltator, designer,"],
      ["Senior IT Trainer &amp; Coach", "Formator IT senior și coach"],
      ["I help developers grow technically and design software with greater structure, clarity and confidence.", "Îi ajut pe dezvoltatori să-și dezvolte competențele tehnice și să creeze software mai bine structurat, mai clar și mai ușor de întreținut."],
      ["Primary actions", "Acțiuni principale"],
      ["Discuss your goals", "Hai să discutăm obiectivele"],
      ["Marius Minia, developer, designer and senior IT trainer.", "Marius Minia, dezvoltator, designer și formator IT senior."],
      ["Marius Minia, developer, designer and senior IT trainer, wearing a navy jacket over a white shirt.", "Marius Minia, dezvoltator, designer și formator IT senior, într-o jachetă bleumarin și o cămașă albă."],
      ["Software development, design and coaching", "Dezvoltare software, design și mentorat tehnic"],
      ["I support developers and teams with practical guidance across technical growth, software architecture, UX/UI design, web development and code quality.", "Ofer dezvoltatorilor și echipelor sprijin practic pentru dezvoltarea competențelor tehnice, proiectarea arhitecturii software, design UX/UI, dezvoltare web și îmbunătățirea calității codului."],
      ["I help developers strengthen technical judgement through code review, architecture guidance, testing practices and focused learning plans.", "Îi ajut pe dezvoltatori să ia decizii tehnice mai bune prin code review, îndrumare în arhitectură, practici de testare și planuri de învățare adaptate obiectivelor lor."],
      ["Mentoring · Code review · Architecture · TDD", "Mentorat · Code review · Arhitectură · TDD"],
      ["Software design and UX/UI", "Proiectare software și UX/UI"],
      ["Turn requirements into clearer interfaces, design systems and software that is easier to understand, use and maintain.", "Transform cerințele în interfețe clare, sisteme de design și software ușor de înțeles, folosit și întreținut."],
      ["Web development and technical support", "Dezvoltare web și suport tehnic"],
      ["Build or improve web projects with React, JavaScript, Node.js, Laravel, PHP, C#/.NET, Python and SQL.", "Construiește sau îmbunătățește proiecte web cu React, JavaScript, Node.js, Laravel, PHP, C#/.NET, Python și SQL."],
      ["Senior IT Trainer and Software Development Instructor", "Formator IT senior și instructor de dezvoltare software"],
      ["I have personally taught professional courses and developer academies, helping developers build stronger skills in React, C#, .NET, Laravel, databases, UX/UI, architecture and software quality.", "Am predat cursuri profesionale și în academii pentru dezvoltatori, unde i-am ajutat pe cursanți să-și aprofundeze cunoștințele despre React, C#, .NET, Laravel, baze de date, UX/UI, arhitectură și calitatea software-ului."],
      ["Browse courses I have taught", "Vezi cursurile pe care le-am predat"],
      ["Previous course", "Cursul anterior"],
      ["Next course", "Cursul următor"],
      ["Courses taught by Marius Minia", "Cursuri predate de Marius Minia"],
      ["Technologies and topics covered", "Tehnologii și subiecte abordate"],
      ["UX/UI Specialisation", "Specializare UX/UI"],
      ["UX/UI Specialisation Instructor", "Instructor pentru specializarea UX/UI"],
      ["Advanced module on UX and UI design: design systems, Atomic Design, Material Design, React &amp; Storybook, TypeScript, Figma prototyping and developer handoff.", "Modul avansat de UX/UI despre sisteme de design, Atomic Design, Material Design, React și Storybook, TypeScript, prototipare în Figma și predarea designului către echipa de dezvoltare."],
      ["C# and .NET Instructor", "Instructor C# și .NET"],
      ["Advanced Forma.Temp course focused on SOLID principles, design patterns, TDD, software architecture, asynchronous programming and OOP.", "Curs Forma.Temp avansat, axat pe principii SOLID, design patterns, TDD, arhitectură software, programare asincronă și OOP."],
      ["Architecture", "Arhitectură"],
      ["Unit Testing and TDD", "Testare unitară și TDD"],
      ["Unit Testing and TDD Instructor", "Instructor de testare unitară și TDD"],
      ["Software quality course covering unit testing, TDD, mocking, static code analysis, refactoring and code coverage.", "Curs de calitate software, cu testare unitară, TDD, mocking, analiză statică a codului, refactoring și code coverage."],
      ["Unit testing", "Testare unitară"],
      ["Code coverage", "Code coverage"],
      ["React Instructor", "Instructor React"],
      ["Course on React components, hooks, state management, APIs, React Router, dynamic interfaces and hands-on projects.", "Curs despre componente React, hooks, gestionarea stării, API-uri, React Router, interfețe dinamice și proiecte practice."],
      ["Laravel Instructor", "Instructor Laravel"],
      ["Laravel module covering PHP, routing, controllers, ORM, authentication, APIs and MVC architecture, including complete application development.", "Modul Laravel despre PHP, rute, controlere, ORM, autentificare, API-uri și arhitectură MVC, cu dezvoltarea completă a unei aplicații."],
      ["C++ Instructor", "Instructor C++"],
      ["Developer academy covering C++, object-oriented and functional programming, Git, Scrum and teamwork.", "Program de formare pentru dezvoltatori, cu teme precum C++, programare orientată pe obiecte și funcțională, Git, Scrum și lucru în echipă."],
      ["Functional programming", "Programare funcțională"],
      ["Microsoft 365 Instructor", "Instructor Microsoft 365"],
      ["Course focused on advanced Word, PowerPoint and Excel, the latest productivity features and collaboration tools.", "Curs de utilizare avansată a Word, PowerPoint și Excel, cu funcții moderne de productivitate și instrumente pentru colaborare."],
      ["Collaboration", "Colaborare"],
      ["JavaScript and databases", "JavaScript și baze de date"],
      ["JavaScript and Relational Database Instructor", "Instructor JavaScript și baze de date relaționale"],
      ["Modules on JavaScript syntax, front-end integration, jQuery, Bootstrap, MySQL database creation and querying, and PostgreSQL.", "Module despre sintaxa JavaScript, integrarea în front-end, jQuery, Bootstrap, crearea și interogarea bazelor de date MySQL și PostgreSQL."],
      ["MySQL and database design", "MySQL și proiectarea bazelor de date"],
      ["MySQL Database Instructor", "Instructor de baze de date MySQL"],
      ["Course on SQL and database design: conceptual and ER modelling, queries and performance, relational and non-relational databases.", "Curs de SQL și proiectare a bazelor de date: modelare conceptuală și ER, interogări eficiente, baze de date relaționale și non-relaționale."],
      ["Databases and software design", "Baze de date și proiectare software"],
      ["Forma.Temp vocational courses for corporate clients on databases, software design, Apache Kafka, Scrum and Docker.", "Cursuri profesionale Forma.Temp pentru companii, cu teme precum baze de date, proiectare software, Apache Kafka, Scrum și Docker."],
      ["Instructor", "Instructor"],
      ["Artificial Intelligence", "Inteligență artificială"],
      ["Artificial Intelligence Instructor", "Instructor de inteligență artificială"],
      ["Advanced employee training course on Python, machine learning, deep learning, data science, pandas and NumPy.", "Curs avansat de formare pentru angajați, cu teme precum Python, machine learning, deep learning, data science, pandas și NumPy."],
      ["Web development and mobile", "Dezvoltare web și aplicații mobile"],
      ["Remote teaching for several academies covering Python, Selenium, CMS, databases, front-end development, Angular, Kafka and React Native.", "Am predat online în mai multe academii, cu cursuri de Python, Selenium, CMS, baze de date, dezvoltare front-end, Angular, Kafka și React Native."],
      ["Java and Spring", "Java și Spring"],
      ["IT Instructor", "Instructor IT"],
      ["Courses on object-oriented programming, Java, Spring Framework, UML, Agile, Design Thinking, SQL and REST.", "Cursuri despre programare orientată pe obiecte, Java, Spring Framework, UML, Agile, Design Thinking, SQL și REST."],
      ["Begear for ATOS · Rome", "Begear pentru ATOS · Roma"],
      ["Discuss training or coaching", "Discută despre formare sau coaching"],
      ["Selected software and web projects", "Proiecte software și web selectate"],
      ["Websites, developer tools and product experiments that show how I approach UX/UI, accessibility, performance and maintainable code.", "Site-uri, instrumente pentru dezvoltatori și experimente de produs care reflectă modul în care abordez UX/UI, accesibilitatea, performanța și mentenanța codului."],
      ["Overall rating", "Evaluare generală"],
      ["Built for performance, clarity and accessibility.", "Proiectate pentru performanță, claritate și accesibilitate."],
      ["Performance, SEO, accessibility and engineering best practices are part of the build from the start.", "Performanța, SEO, accesibilitatea și bunele practici de inginerie fac parte din proiect încă de la început."],
      ["Accessibility", "Accesibilitate"],
      ["Best practices", "Bune practici"],
      ["Performance", "Performanță"],
      ["Virtual tours", "Tururi virtuale"],
      ["Browser tool", "Instrument pentru browser"],
      ["CFR data", "Date CFR"],
      ["Live website · local business", "Site live · afacere locală"],
      ["A bilingual website for 360° virtual tours of properties, accommodation and businesses around Brașov.", "Site bilingv cu tururi virtuale 360° pentru locuințe, spații de cazare și afaceri din zona Brașov."],
      ["Visit website", "Vizitează site-ul"],
      ["Open Spațiu360 website", "Deschide site-ul Spațiu360"],
      ["Public site · developer tooling", "Site public · instrumente pentru dezvoltatori"],
      ["A repo-local template for Codex and Paseo with 22 agents, 27 skills and clear operational workflows.", "Un șablon pentru proiecte gestionate cu Codex și Paseo, cu 22 de agenți, 27 de skill-uri și fluxuri de lucru bine definite."],
      ["Open project", "Deschide proiectul"],
      ["Open unaSquadraFortissimi project", "Deschide proiectul unaSquadraFortissimi"],
      ["Open-source utility", "Utilitar open source"],
      ["A browser-console tool for removing non-mutual TikTok follows while protecting friends and chosen accounts.", "Un utilitar care rulează în consola browserului și te ajută să nu mai urmărești conturile care nu te urmăresc înapoi, cu excepții pentru prieteni și conturile alese."],
      ["Open TikTok Cleaner project", "Deschide proiectul TikTok Cleaner"],
      ["Business website · service", "Site pentru o firmă · servicii"],
      ["A service website for water purifier sales, installation and assistance in Rome and Lazio.", "Site de prezentare pentru vânzarea, instalarea și service-ul purificatoarelor de apă în Roma și Lazio."],
      ["Local SEO", "SEO local"],
      ["Service website", "Site de servicii"],
      ["Open Depurazioneacqua.EU website", "Deschide site-ul Depurazioneacqua.EU"],
      ["Portfolio website · photography", "Site de portofoliu · fotografie"],
      ["A photography portfolio for events, portraits, motorcycles and cars across Rome and Brașov.", "Portofoliu foto cu evenimente, portrete, motociclete și mașini fotografiate la Roma și Brașov."],
      ["View portfolio", "Vezi portofoliul"],
      ["Open photography portfolio", "Deschide portofoliul de fotografie"],
      ["Repository · product experiment", "Repository · experiment de produs"],
      ["A mobile-first search tool for trains that accept a non-folding bicycle, with a verified regional pilot.", "Instrument de căutare gândit pentru mobil, care găsește trenuri în care poți lua bicicleta nepliabilă; proiectul a fost validat printr-un pilot regional."],
      ["Open TravelBike repository", "Deschide repository-ul TravelBike"],
      ["Launching soon", "Se lansează în curând"],
      ["Teaching repositories for developers", "Materiale de curs pentru dezvoltatori"],
      ["Course material I created and delivered, with structured lessons, exercises and project work for React, Python and C#.", "Am creat și predat cursuri de React, Python și C#, cu lecții structurate, exerciții și proiecte practice."],
      ["Teaching material", "Material didactic"],
      ["Material I created and delivered for a React.js course, with guided exercises and project work for intermediate to advanced learners.", "Material de curs creat și predat pentru React.js, cu exerciții ghidate și proiecte practice pentru cursanți de nivel mediu și avansat."],
      ["Material I created and delivered for Python courses, from fundamentals through OOP, SOLID, design patterns, automation and data analysis.", "Material de curs creat și predat pentru Python, de la noțiunile de bază până la OOP, SOLID, design patterns, automatizare și analiză de date."],
      ["Material I created and delivered for C# and .NET courses, with testing, async programming, APIs and microservices.", "Material de curs creat și predat pentru C# și .NET, cu exerciții de testare, programare asincronă, API-uri și microservicii."],
      ["Repository details", "Detalii repository"],
      ["Engineering, product design and teaching", "Inginerie, design de produs și formare IT"],
      ["Computer Engineering, the Apple Developer Academy and professional certifications shape the way I approach software design, teaching and technical coaching.", "Studiile de inginerie informatică, experiența de la Apple Developer Academy și certificările profesionale se reflectă în felul în care proiectez software, predau și fac mentorat tehnic."],
      ["Selected education and certifications", "Educație și certificări selectate"],
      ["Sapienza University of Rome", "Universitatea Sapienza din Roma"],
      ["Computer Engineering studies · Rome", "Studii de inginerie informatică · Roma"],
      ["Entrepreneurship Course", "Curs de antreprenoriat"],
      ["SC SIAB Development Srl · Cluj, Romania", "SC SIAB Development Srl · Cluj, România"],
      ["University of Naples Federico II &amp; Apple · Swift, iOS/macOS, UX/UI", "Universitatea din Napoli Federico II și Apple · Swift, iOS/macOS, UX/UI"],
      ["Certification · Apple", "Certificare · Apple"],
      ["Work on your next technical step", "Fă următorul pas în dezvoltarea ta tehnică"],
      ["Tell me where you are stuck: learning a technology, improving a codebase, shaping a product or building a web project.", "Spune-mi ce vrei să faci: să înveți o tehnologie, să îmbunătățești o bază de cod, să conturezi un produs sau să construiești un proiect web."],
      ["Call +39 393 060 7643", "Sună la +39 393 060 7643"],
      [" or ", " sau "],
      ["email me", "scrie-mi"],
      ["for a direct conversation.", "pentru o discuție directă."],
      ["Name", "Nume"],
      ["Company or project", "Companie sau proiect"],
      ["(optional)", "(opțional)"],
      ["Phone", "Telefon"],
      ["Tell me about your project, codebase or learning goal", "Povestește-mi despre proiectul tău, baza de cod sau obiectivul de învățare"],
      ["Describe what you want to learn, design, build or improve, plus your stack and timing.", "Descrie ce vrei să înveți, să proiectezi, să construiești sau să îmbunătățești. Menționează tehnologiile folosite și calendarul dorit."],
      ["Send project details", "Trimite detaliile proiectului"],
      ["Include your goal, current stack and timing.", "Menționează obiectivul, tehnologiile folosite și calendarul dorit."],
      ["Contact links", "Linkuri de contact"],
      ["Email Marius", "Scrie-i lui Marius"],
      ["Contact Marius", "Contactează-l pe Marius"],
      ["All rights reserved.", "Toate drepturile rezervate."],
      ["Open navigation", "Deschide navigarea"],
      ["Project details", "Detalii proiect"],
      ["Documentation", "Documentație"],
      ["Open repository", "Deschide repository-ul"],
      ["C# and .NET", "C# și .NET"],
      ["Photography portfolio", "Portofoliu de fotografie"],
      ["Galleries", "Galerii"],
      ["Photography", "Fotografie"],
      ["Portfolio", "Portofoliu"],
      ["Testing", "Testare"],
      ["Rome", "Roma"],
      ["React logo", "Logo React"],
      ["Python logo", "Logo Python"],
      ["C sharp logo", "Logo C sharp"],
      ["Desktop homepage screenshot of Spațiu360 showing the virtual tour hero and interactive interior", "Captură de ecran a versiunii desktop Spațiu360, cu turul virtual și un interior interactiv"],
      ["Desktop homepage screenshot of unaSquadraFortissimi with its medieval-themed hero and navigation", "Captură de ecran a versiunii desktop unaSquadraFortissimi, cu secțiunea principală și meniul în stil medieval"],
      ["Desktop homepage screenshot of TikTok Cleaner showing the intentional following list hero", "Captură de ecran a versiunii desktop TikTok Cleaner, cu lista conturilor pe care utilizatorul a ales să le urmărească"],
      ["Desktop homepage screenshot of Depurazioneacqua.EU showing the water purifier service hero", "Captură de ecran a versiunii desktop Depurazioneacqua.EU, cu serviciile de purificare a apei"],
      ["Desktop photography portfolio screenshot showing the selected work gallery with mountain and event photography", "Captură de ecran a portofoliului foto, cu imagini de la evenimente și din zone montane"],
      ["Desktop homepage screenshot of BikeTrain România showing a train search from Codlea to Brașov", "Captură de ecran a versiunii desktop BikeTrain România, cu o căutare de tren de la Codlea la Brașov"]
    ]
  }
};

const replaceMany = (html, replacements) => {
  for (const [from, to] of [...replacements].sort(([fromA], [fromB]) => fromB.length - fromA.length)) {
    html = html.replaceAll(from, to);
  }

  return html;
};

const buildLanguageSwitcher = (locale, config) => {
  const links = [
    ["en", "EN", "../", config.switcher.names.en],
    ["it", "IT", "../it/", config.switcher.names.it],
    ["ro", "RO", "../ro/", config.switcher.names.ro]
  ].map(([language, code, href, title]) => {
    const active = language === locale;
    return `            <a class="language-link${active ? " is-active" : ""}" href="${href}" lang="${language}"${active ? ' aria-current="page"' : ""} title="${title}">${code}</a>`;
  }).join("\n");

  return `          <!-- locale-switcher:start -->
          <div class="language-switcher" aria-label="${config.switcher.ariaLabel}">
            <span class="language-switcher-label">${config.switcher.visibleLabel}</span>
${links}
          </div>
          <!-- locale-switcher:end -->`;
};

const localizeSchema = (html, config) => {
  const marker = '<script type="application/ld+json">';
  const start = html.indexOf(marker);
  const end = html.indexOf("</script>", start);

  if (start === -1 || end === -1) {
    throw new Error("JSON-LD block not found in index.html");
  }

  const before = html.slice(0, start + marker.length);
  let schema = html.slice(start + marker.length, end);
  const after = html.slice(end);

  schema = schema.replaceAll(`${siteUrl}/`, config.canonical);
  schema = schema.replaceAll('"inLanguage": "en"', `"inLanguage": "${config.lang}"`);
  schema = schema.replaceAll('"name": "Marius Minia | Developer, Designer & IT Trainer"', `"name": "${config.siteName}"`);
  schema = schema.replaceAll('"description": "Developer, designer, senior IT trainer and coach helping developers grow technically and design software with greater structure and clarity."', `"description": "${config.schema.websiteDescription}"`);
  schema = schema.replaceAll('"name": "Developer, Designer & Senior IT Trainer | Marius Minia"', `"name": "${config.title}"`);
  schema = schema.replaceAll('"description": "Developer, designer, senior IT trainer and coach in Romania helping developers grow technically through software design, coaching and practical training."', `"description": "${config.schema.pageDescription}"`);
  schema = schema.replaceAll('"jobTitle": "Developer, Designer, Senior IT Trainer, Instructor and Coach"', `"jobTitle": "${config.schema.jobTitle}"`);
  schema = schema.replaceAll('"description": "Developer, designer, senior IT trainer and coach in Romania helping developers grow technically and design software with greater structure and clarity."', `"description": "${config.schema.personDescription}"`);
  schema = schema.replaceAll('"name": "Marius Minia Developer Coaching and Software Design"', `"name": "${config.schema.serviceName}"`);
  schema = schema.replaceAll('"description": "Developer coaching, software design, UX/UI, IT training and web development for developers and teams in Romania and beyond."', `"description": "${config.schema.serviceDescription}"`);
  schema = schema.replaceAll('"name": "Romania"', `"name": "${config.schema.areaServed}"`);
  schema = schema.replaceAll('"Developer coaching"', `"${config.schema.serviceType[0]}"`);
  schema = schema.replaceAll('"Software design and architecture"', `"${config.schema.serviceType[1]}"`);
  schema = schema.replaceAll('"UX/UI design"', `"${config.schema.serviceType[2]}"`);
  schema = schema.replaceAll('"IT training"', `"${config.schema.serviceType[3]}"`);
  schema = schema.replaceAll('"Web development"', `"${config.schema.serviceType[4]}"`);
  schema = schema.replaceAll('"Technical support"', `"${config.schema.serviceType[5]}"`);
  schema = schema.replaceAll('"contactType": "project enquiries"', `"contactType": "${config.schema.contactType}"`);

  if (config.schema.knowsAbout) {
    const localizedTopics = `[
${config.schema.knowsAbout.map((topic) => `              ${JSON.stringify(topic)}`).join(",\n")}
            ]`;
    schema = schema.replace(
      /"knowsAbout": \[[\s\S]*?\n            \]/,
      `"knowsAbout": ${localizedTopics}`
    );
  }

  return `${before}${schema}${after}`;
};

for (const [locale, config] of Object.entries(localeConfigs)) {
  let localized = source;

  localized = localized.replace('<html lang="en" data-locale="en">', `<html lang="${config.lang}" data-locale="${config.lang}">`);
  localized = localized.replace('href="https://marius93rm.github.io/"', `href="${config.canonical}"`);
  localized = localized.replace('content="https://marius93rm.github.io/"', `content="${config.canonical}"`);
  localized = localized.replace(
    `    <meta property="og:locale" content="en_US">
    <meta property="og:locale:alternate" content="it_IT">
    <meta property="og:locale:alternate" content="ro_RO">`,
    `    <meta property="og:locale" content="${config.ogLocale}">
    <meta property="og:locale:alternate" content="${config.ogLocaleAlternates[0]}">
    <meta property="og:locale:alternate" content="${config.ogLocaleAlternates[1]}">`
  );
  localized = localized.replaceAll('content="Marius Minia | Developer, Designer &amp; IT Trainer"', `content="${config.siteName}"`);
  localized = localized.replace('<title>Developer, Designer &amp; Senior IT Trainer | Marius Minia</title>', `<title>${config.title}</title>`);
  localized = localized.replace('content="Developer, designer, senior IT trainer and coach in Romania. I help developers grow technically through software design, coaching and practical training."', `content="${config.description}"`);
  localized = localized.replaceAll('content="Developer, designer, senior IT trainer and coach in Romania helping developers grow technically through software design, coaching and practical training."', `content="${config.ogDescription}"`);
  localized = localized.replaceAll('content="Developer, Designer &amp; Senior IT Trainer | Marius Minia"', `content="${config.title}"`);
  localized = localizeSchema(localized, config);
  const bodyStart = localized.indexOf("<body>");
  const bodyEnd = localized.indexOf("</body>", bodyStart);
  const body = replaceMany(localized.slice(bodyStart, bodyEnd), config.translations);
  localized = `${localized.slice(0, bodyStart)}${body}${localized.slice(bodyEnd)}`;
  localized = localized.replace(/          <!-- locale-switcher:start -->[\s\S]*?          <!-- locale-switcher:end -->/, buildLanguageSwitcher(locale, config));
  localized = localized.replaceAll('href="assets/', 'href="../assets/');
  localized = localized.replaceAll('src="assets/', 'src="../assets/');
  localized = localized.replaceAll('srcset="assets/', 'srcset="../assets/');
  localized = localized.replace('href="/"', `href="../${locale}/"`);

  const outputDirectory = path.join(projectRoot, locale);
  fs.mkdirSync(outputDirectory, { recursive: true });
  fs.writeFileSync(path.join(outputDirectory, "index.html"), localized);
}

console.log("Generated localized pages: /it/ and /ro/");
