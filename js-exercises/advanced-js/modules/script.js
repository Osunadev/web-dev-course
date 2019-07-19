// Order of how things came to work:
// 1. Inline Script
// 2. Script Tags
// 3. IIFE (Inmediatly Invoked Function Expressions)
// 4. CommonJS + Browserify

// 5. ES6 + Webpack2 (Latest)
/*  When we start a project is usually one only person that handles
    the configuration of webpack, so we don't need to worry that much */

// js1
export const add = (a, b) => a + b;
// or (if it's only one thing we want to export)
export default function add() {
    return a + b;
}

// js2
import { add } from './add';
// or (if it's a default import)
import add from './add';