import type { MotionValue } from 'framer-motion';
import type { ReactNode } from 'react';
import type { TimelineBadge, TimelineEntry } from '@/src/types/assets';

export type TimelineGroup = Readonly<{
  year: number;
  items: ReadonlyArray<TimelineEntry>;
}>;

export type TimelineYearGroupProps = Readonly<{
  group: TimelineGroup;
}>;

export type TimelineRailProps = Readonly<{
  progress: MotionValue<number>;
  years: ReadonlyArray<number>;
}>;

export type TimelinePopoverProps = Readonly<{
  id: string;
  open: boolean;
  badges?: ReadonlyArray<TimelineBadge>;
  children: ReactNode;
}>;

export type TimelineProps = Readonly<{
  groups: ReadonlyArray<TimelineGroup>;
}>;

export type TimelineSectionMode = 'highlights' | 'all';
