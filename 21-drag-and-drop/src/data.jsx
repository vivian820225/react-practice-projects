import { nanoid } from 'nanoid'

export const Cards = [
  // BACKLOG
  {
    title: 'Look into render bug in dashboard',
    id: nanoid(),
    column: 'backlog',
  },
  { title: 'SOX compliance checklist', id: nanoid(), column: 'backlog' },
  { title: '[SPIKE] Migrate to Azure', id: nanoid(), column: 'backlog' },
  { title: 'Document Notifications service', id: nanoid(), column: 'backlog' },
  // TODO
  {
    title: 'Research DB options for new microservice',
    id: nanoid(),
    column: 'todo',
  },
  { title: 'Postmortem for outage', id: nanoid(), column: 'todo' },
  { title: 'Sync with product on Q3 roadmap', id: nanoid(), column: 'todo' },

  // DOING
  {
    title: 'Refactor context providers to use Zustand',
    id: nanoid(),
    column: 'doing',
  },
  { title: 'Add logging to daily CRON', id: nanoid(), column: 'doing' },
  // DONE
  {
    title: 'Set up DD dashboards for Lambda listener',
    id: nanoid(),
    column: 'done',
  },
]
