import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    constructor() {
    }

    /**
     * Store an item in localStorage with the given key
     * @param key Storage key
     * @param data Data to be stored
     */
    setItem(key: string, data: any): void {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.error('L0G - Error saving to localStorage', error);
        }
    }

    /**
     * Get an item from localStorage by key
     * @param key Storage key
     * @returns The stored data if exists, null otherwise
     */
    getItem<T>(key: string): T | null {
        try {
            const item: string | null = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error('L0G - Error reading from localStorage', error);
            return null;
        }
    }

    /**
     * Remove an item from localStorage by key
     * @param key Storage key
     */
    removeItem(key: string): void {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error('L0G - Error removing from localStorage', error);
        }
    }

    /**
     * Clear all data from localStorage
     */
    clearAll(): void {
        try {
            localStorage.clear();
        } catch (error) {
            console.error('L0G - Error clearing localStorage', error);
        }
    }

    /**
     * Check if an item exists in localStorage
     * @param key Storage key
     * @returns true if item exists, false otherwise
     */
    hasItem(key: string): boolean {
        return localStorage.getItem(key) !== null;
    }

}
