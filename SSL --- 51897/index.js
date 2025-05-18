import antlr4 from 'antlr4';
import { InputStream, CommonTokenStream } from 'antlr4';
import analizadorLexer from './generated/analizadorLexer.js';
import analizadorParser from './generated/analizadorParser.js';
import { Translator } from './translator.js';
import fs from 'fs';
import vm from 'vm';

async function main() {
    try {
        // 1. Leer y mostrar el código fuente
        const input = fs.readFileSync('input.txt', 'utf8');
        console.log("\n============ CÓDIGO FUENTE ============\n");
        console.log(input);
        console.log("\n========================================");

        // 2. Análisis Léxico y generación de tabla de tokens
        const inputStream = new InputStream(input);
        const lexer = new analizadorLexer(inputStream);

        // Variable para almacenar el error léxico (si existe)
        let lexError = null;

        // Configuramos el error listener para capturar pero no lanzar el error inmediatamente
        lexer.removeErrorListeners();
        lexer.addErrorListener({
            syntaxError: (recognizer, offendingSymbol, line, column, msg, err) => {
                const badChar = recognizer.inputStream.strdata.charAt(recognizer.inputStream.index);
                lexError = `❌ ERROR LÉXICO en Línea ${line}:${column} - Símbolo no reconocido: '${badChar}'`;
            }
        });

        console.log("\n TABLA DE LEXEMAS-TOKENS:");
        console.log("\n=================================================");
        console.log("| Lexema\t\t|     Token\t\t|");
        console.log("=================================================");

        // Obtenemos todos los tokens (aunque haya errores)
        const tokens = lexer.getAllTokens();

        // Mostramos todos los tokens reconocidos
        tokens.forEach(token => {
            const tokenName = analizadorLexer.symbolicNames[token.type] || `UNKNOWN_${token.type}`;
            console.log(`| ${token.text.padEnd(15)}\t| ${tokenName.padEnd(15)}\t|`);
        });

        console.log("=================================================");

        // Si hubo un error léxico, lo mostramos al final
        if (lexError) {
            console.error("\n" + lexError);
            console.error("\n❌ ERROR CRÍTICO EN main(): Se detectaron errores léxicos");
            process.exit(1);
        }
        // 3. Análisis Sintáctico
        lexer.reset();
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new analizadorParser(tokenStream);
        
        // Manejo de errores sintácticos
        parser.removeErrorListeners();
        parser.addErrorListener({
            syntaxError: (recognizer, offendingSymbol, line, column, msg, err) => {
                throw new Error(`ERROR SINTÁCTICO en Línea ${line}:${column} - ${msg}\nToken inesperado: "${offendingSymbol.text}"`);
            }
        });

        const tree = parser.prog();

        console.log("\n✅ ANÁLISIS SINTÁCTICO EXITOSO");
        console.log("\n========================================");

        // 4. Mostrar árbol de análisis sintáctico
        console.log("\n🌳 ÁRBOL DE ANÁLISIS SINTÁCTICO:");
        console.log(tree.toStringTree(parser.ruleNames, parser));
        console.log("\n========================================");

        // 5. Traducción a JavaScript
        const translator = new Translator();
        new antlr4.tree.ParseTreeWalker().walk(translator, tree);
        const jsCode = translator.jsCode;
        
        console.log("\n CÓDIGO TRADUCIDO A JAVASCRIPT:");
        console.log(jsCode);

        // 6. Ejecución del código JavaScript
        if (jsCode) {
            try {
                console.log("\n============== EJECUCIÓN ===============");
                const sandbox = {
                    console: {
                        log: (...args) => {
                        console.log("\n🔹", ...args);
                        console.log("\n========================================");
                        }
                    }
                };
                vm.runInNewContext(jsCode, sandbox);
            } catch (execError) {
                console.error("\n❌ ERROR EN EJECUCIÓN:", execError.message);
            }
        }
    }
    // Agregar catch para manejar errores en main
    catch (err) {
        console.error("\n ❌ ERROR CRÍTICO EN main():", err.message);
        console.log("\n========================================");
        process.exit(1);
    }
}
if (typeof main === 'function') {
    main().catch(err => { 
        console.error("\n❌ ERROR INESPERADO:", err.message);
        console.error("\nPor favor, revisa el código fuente y vuelve a intentarlo.");
        console.log("\n========================================");
        process.exit(1);
    });
}