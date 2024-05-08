import { type PaletteMode } from '@mui/material';
import { create, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface ThemeState {
	mode: PaletteMode;
	toggleColorMode: () => void;
}

const storeApi: StateCreator<ThemeState, [['zustand/devtools', never]]> = (
	set,
	get,
) => ({
	mode: 'light',
	toggleColorMode: () => {
		const { mode } = get();
		set(
			{ mode: mode === 'light' ? 'dark' : 'light' },
			false,
			'TOGGLE_COLOR_MODE',
		);
	},
});

export const useThemeStore = create<ThemeState>()(
	devtools(persist(storeApi, { name: 'theme-store' })),
);
