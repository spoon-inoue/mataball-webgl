export const mobileMql = window.matchMedia('(max-width: 750px)')
export const isSp = () => mobileMql.matches
export const isPc = () => !mobileMql.matches
