export type WatchStatus = 'PLANNED' | 'WATCHING' | 'COMPLETED' | 'DROPPED';

export const watchStatusLabels: Record<WatchStatus, string> = {
  PLANNED: '📌 Planned',
  WATCHING: '👀 Watching',
  COMPLETED: '✅ Completed',
  DROPPED: '❌ Dropped',
};
