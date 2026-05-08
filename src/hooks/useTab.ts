// src/hooks/useTab.ts
import { useState } from 'react';
import type { TabKey } from '../types';

interface UseTabReturn {
  tab: TabKey;
  setTab: (tab: TabKey) => void;
}

export const useTab = (initial: TabKey = 'program'): UseTabReturn => {
  const [tab, setTab] = useState<TabKey>(initial);
  return { tab, setTab };
};
