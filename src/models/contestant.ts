export type SkillCategory =
  | 'acting'
  | 'comedy'
  | 'design'
  | 'dance'
  | 'singing'
  | 'improv'
  | 'branding'
  | 'runway';

export type Archetype =
  | 'COMEDY_SPECIALIST'
  | 'ALL_ROUNDER'
  | 'DESIGN_QUEEN'
  | 'PERFORMANCE_QUEEN'
  | 'CHAOTIC_WILDCARD';

export interface ContestantStats {
  acting: number;
  comedy: number;
  design: number;
  dance: number;
  singing: number;
  improv: number;
  branding: number;
  runway: number;
}

export interface Contestant {
  id: string;
  name: string;
  archetype?: Archetype;
  stats: ContestantStats;
  volatility: number;
  tags?: SkillCategory[];
}
