import data from "./data.js"
import { writable } from 'svelte/store';
export const all_data = writable(data);
