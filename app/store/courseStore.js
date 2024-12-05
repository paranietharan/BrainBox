import { create } from 'zustand';

export const useCourseStore = create((set, get) => ({
  clickCount: 1,
  incrementCount: () => {
    set((state) => {
      const newCount = state.clickCount + 1;
      console.log('Incrementing count to:', newCount);
      return { clickCount: newCount };
    });
  },
}));