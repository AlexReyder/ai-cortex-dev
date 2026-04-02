export const PAGE_SEO_CONFIG = {
  home: {
    label: 'Главная',
    path: '/',
    defaultTitle: 'Cortex ToDo — Российская AI-native платформа для управления бизнесом',
    defaultDescription:
      'AI-агенты для роста малого и среднего бизнеса. Защищенная Task Management System для enterprise. Одна технологическая платформа для автоматизации, контроля исполнения и безопасного управления процессами.',
  },
  solutions: {
    label: 'Решения',
    path: '/solutions',
    defaultTitle: 'Решения для команд и отраслей — Cortex ToDo',
    defaultDescription:
      'Решения Cortex ToDo для команд, отраслей и сценариев импортозамещения: единая платформа для управления задачами, процессами и операционной работой компании.',
  },
  'cortex-ai': {
    label: 'Cortex AI',
    path: '/cortex-ai',
    defaultTitle: 'Cortex AI Agents — AI-слой для операционной работы компании | Cortex ToDo',
    defaultDescription:
      'Встречи, переписки, документы, задачи и управленческие сигналы в одной рабочей среде. Cortex AI превращает хаос в понятный процесс.',
  },
  'todo-enterprise': {
    label: 'ToDo Enterprise',
    path: '/todo-enterprise',
    defaultTitle:
      'ToDo Enterprise — Российская система управления задачами и проектами | Cortex ToDo',
    defaultDescription:
      'Безопасная enterprise-платформа для управления задачами, проектами и рабочими процессами. Привычный сценарий работы для команд с надежным переходом с западных систем. Private cloud, on-prem, migration-friendly.',
  },
  about: {
    label: 'О компании',
    path: '/about',
    defaultTitle: 'О компании — Cortex ToDo | Российская технологическая платформа',
    defaultDescription:
      'Cortex ToDo — российская технологическая платформа для управления работой и развития enterprise-экосистемы. Строим отечественную экосистему продуктов для компаний.',
  },
  contacts: {
    label: 'Контакты',
    path: '/contacts',
    defaultTitle: 'Контакты — Cortex ToDo',
    defaultDescription:
      'Свяжитесь с командой Cortex ToDo, чтобы обсудить внедрение Cortex AI, ToDo Enterprise, демо, безопасность, миграцию и адаптацию платформы под ваш бизнес.',
  },
  demo: {
    label: 'Демо',
    path: '/demo',
    defaultTitle: 'Демо Cortex AI и ToDo Enterprise — Cortex ToDo',
    defaultDescription:
      'Запросите демо Cortex AI и ToDo Enterprise. Покажем ключевые сценарии, обсудим миграцию, безопасность, внедрение и формат пилотного запуска.',
  },
  cases: {
    label: 'Кейсы',
    path: '/cases',
    defaultTitle: 'Кейсы внедрения — Cortex ToDo',
    defaultDescription:
      'Сценарии внедрения Cortex ToDo: миграция с западных систем, управление распределенными командами, enterprise-безопасность и кастомизация платформы.',
  },
  compare: {
    label: 'Сравнение',
    path: '/compare',
    defaultTitle:
      'ToDo Enterprise vs Jira / Trello / Asana / Tracker — Сравнение | Cortex ToDo',
    defaultDescription:
      'Сравнение ToDo Enterprise с Jira, Trello, Asana и Yandex Tracker. Привычная логика работы, российская инфраструктура, безопасное размещение и возможность адаптации под enterprise-клиента.',
  },
  security: {
    label: 'Безопасность',
    path: '/security',
    defaultTitle:
      'Безопасность, Развертывание, Миграция — ToDo Enterprise | Cortex ToDo',
    defaultDescription:
      'Безопасное внедрение ToDo Enterprise в контуре клиента. Сервер клиента, private cloud, российский ЦОД. Migration-friendly логика и управляемое внедрение для enterprise-команд.',
  },
  investors: {
  label: 'Инвесторам',
  path: '/investors',
  defaultTitle: 'Инвесторам — Cortex ToDo',
  defaultDescription:
    'Информация для инвесторов о рынке, стратегии роста, продуктовой зрелости и модели развития экосистемы Cortex ToDo.',
},
partners: {
  label: 'Партнёрам',
  path: '/partners',
  defaultTitle: 'Партнерам — Cortex ToDo',
  defaultDescription:
    'Партнерская модель для внедрения и развития Cortex ToDo. Интеграторы, облачные провайдеры, ЦОД и enterprise-партнеры.',
},
} as const

export type PageSEOKey = keyof typeof PAGE_SEO_CONFIG

export const pageSEOOptions = Object.entries(PAGE_SEO_CONFIG).map(([value, item]) => ({
  label: item.label,
  value,
}))

export function isPageSEOKey(value: string): value is PageSEOKey {
  return value in PAGE_SEO_CONFIG
}

export function getPageSEOConfig(pageKey: string) {
  if (!isPageSEOKey(pageKey)) return null
  return PAGE_SEO_CONFIG[pageKey]
}