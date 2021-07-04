var klaroConfig = {
    version: 2,
    cookieName: 'lp_goodhood',
    elementID: 'cc_goodhood',
    lang: 'de',
    default: false,
    acceptAll: true,
    hideDeclineAll: true,
    translations: {
        de: {
            privacyPolicyUrl: 'https://nebenan.de/privacy',
            privacyPolicy: {
                name: 'Datenschutzerklärung',
                text: 'Um mehr zu erfahren, lies bitte unsere {privacyPolicy}.',
            },
            consentModal: {
                title: 'Cookie-Einstellungen',
                description:
                    'Diese Seite verwendet Cookies. Dazu zählen notwendige Cookies (z.B. für eine sichere Anmeldung) sowie Cookies zur Erhebung statistischer Daten die uns helfen, diese Webseite weiter zu verbessern. Hier kannst Du die einzelnen Services individuell auswählen.',
            },
            consentNotice: {
                changeDescription:
                    'Wir haben unsere Cookies geändert. Bitte erneuere Deine Wahl.',
                description:
                    'Diese Seite verwendet Cookies. Dazu zählen notwendige Cookies (z.B. für eine sichere Anmeldung) sowie Cookies zur Erhebung statistischer Daten die uns helfen, diese Webseite weiter zu verbessern. Klicke auf „Alle auswählen", um allen Cookies zuzustimmen.',
                learnMore:
                    'Cookie-Einstellungen'
            },
            ok: "Los geht's!",
            purposes: {
                necessary: 'Notwendige Cookies',
                analytics: 'Besucher-Statistiken',
            },
        },
    },
    services: [
        {
            name: 'gtm',
            title: 'Google Analytics',
            purposes: ['analytics'],
            translations: {
                de: {
                    description: 'Wir verwenden Google Analytics, um die Nutzung unserer Website zu erfassen und Verbesserungen zu identifizieren.'
                },
            },
            cookies: [
                [/^_ga.*$/i, '/', '.goodhood.eu'],
                [/^_gcl.*$/i, '/', '.goodhood.eu'],
                ['_gid', '/', '.goodhood.eu'],
                [/^_dc_gtm.*$/i, '/', '.goodhood.eu'],
            ],

        },
    ],
};
