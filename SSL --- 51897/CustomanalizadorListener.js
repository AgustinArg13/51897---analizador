import analizadorListener from './generated/analizadorListener.js';

export default class CustomanalizadorListener extends analizadorListener {
    constructor() {
        super();
        this.jsCode = '';  // Almacena el código JS generado
        this.indentLevel = 0;
        this.consoleLogs = [];
    }

    // Genera función JS
    enterFunctionDeclaration(ctx) {
        const name = ctx.ID().getText();
        const params = ctx.parameterList() ? ctx.parameterList().getText() : '';
        this.jsCode += `function ${name}(${params}) {\n`;
        this.indentLevel++;
    }

    exitFunctionDeclaration(ctx) {
        this.indentLevel--;
        this.jsCode += '}\n\n';
    }

    // Captura console.log y genera código JS
    enterConsStatement(ctx) {
        const expr = ctx.expr().getText();
        const indent = '    '.repeat(this.indentLevel);
        this.jsCode += `${indent}console.log(${expr});\n`;
        this.consoleLogs.push({
            line: ctx.start.line,
            expression: expr
        });
    }

    // Genera código para expresiones sueltas (ej: "a + b;")
    enterExprStatement(ctx) {
        const expr = ctx.expr().getText();
        const indent = '    '.repeat(this.indentLevel);
        this.jsCode += `${indent}${expr};\n`;
    }

    // Muestra resumen (opcional)
    exitProg(ctx) {
        console.log("\n=== RESUMEN DE CONSOLE.LOGS ===");
        this.consoleLogs.forEach(log => {
            console.log(`- Línea ${log.line}: console.log(${log.expression})`);
        });
        console.log("\n=== CÓDIGO GENERADO ===");
        console.log(this.jsCode);  // Muestra el código JS completo
    }
}