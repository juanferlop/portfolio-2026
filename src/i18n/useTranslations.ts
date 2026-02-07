import { messages } from "./messages";

export function useTranslations(locale: "es" | "en") {
    return function (key: string) {
        // Soporta keys anidadas tipo 'skills.stack' o 'navbar.home'
        const parts = key.split('.');
        let value: any = messages[locale];
        for (const part of parts) {
            if (value && typeof value === 'object' && part in value) {
                value = value[part];
            } else {
                return key; // fallback
            }
        }
        return typeof value === 'string' ? value : key;
    };
}
