import antlr4 from 'antlr4';
import { analizadorLexer } from './grammar/analizadorLexer.js';
import { analizadorParser } from './grammar/analizadorParser.js';
import { Translator } from './translator.js';
import fs from 'fs';

function analyze(input) {
    // 1. Análisis léxico/sintáctico
    const chars = new antlr4.InputStream(input);
    const lexer = new analizadorLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new analizadorParser(tokens);

    // Manejo de errores
    let syntaxErrors = [];
    parser.addErrorListener({
        syntaxError: (recognizer, offendingSymbol, line, column, msg, err) => {
            syntaxErrors.push(`Error en línea ${line}:${column} - ${msg}`);
        }
    });

    const tree = parser.prog();

    // 2. Tabla de tokens
    const tokenTable = [];
    for (let token of tokens.tokens) {
        if (token.channel !== antlr4.Lexer.HIDDEN) {
            tokenTable.push({
                Lexema: token.text,
                Token: lexer.symbolicNames[token.type] || `TOKEN_${token.type}`
            });
        }
    }

    // 3. Traducción a JavaScript
    const translator = new Translator();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(translator, tree);

    return {
        syntaxErrors,
        tokenTable,
        syntaxTree: tree.toStringTree(parser.ruleNames, parser),
        translatedCode: translator.jsCode
    };
}

// Ejemplo de uso
const input = fs.readFileSync('input.txt', 'utf-8');
const result = analyze(input);

// Mostrar resultados
console.log("=== ERRORES SINTÁCTICOS ===");
console.log(result.syntaxErrors.length ? result.syntaxErrors.join('\n') : "No hay errores.");

console.log("\n=== TABLA DE TOKENS ===");
console.table(result.tokenTable);

console.log("\n=== ÁRBOL SINTÁCTICO ===");
console.log(result.syntaxTree);

console.log("\n=== CÓDIGO TRADUCIDO ===");
console.log(result.translatedCode);

export { analyze };  // Exportamos la función analyze para poder usarla desde otros módulos