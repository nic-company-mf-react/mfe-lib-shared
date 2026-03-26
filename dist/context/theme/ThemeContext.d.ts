type Theme = 'light' | 'dark';
type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};
export declare const useTheme: () => ThemeContextType;
export declare const ThemeProvider: React.FC<{
    children: React.ReactNode;
}>;
export {};
