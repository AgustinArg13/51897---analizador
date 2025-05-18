// translator.js - Versión corregida
import antlr4 from 'antlr4';
import analizadorListener from './generated/analizadorListener.js';

export class Translator extends analizadorListener {
    constructor() {
        super();
        this.jsCode = '\n';
        this.indentLevel = 0;
        this.functionName = null;
        this.functionParams = [];
        this.lastExpression = null; // Nuevo: para guardar la última expresión
    }

    enterFunctionDeclaration(ctx) {
        this.functionName = ctx.ID().getText();
        this.functionParams = ctx.parameterList()
            ? ctx.parameterList().ID().map(id => id.getText())
            : [];
        this.jsCode += `function ${this.functionName}(${this.functionParams.join(',')}) {\n`;
        this.indentLevel++; 
    }

    exitFunctionDeclaration(ctx) {
        this.indentLevel--;
        this.jsCode += '}\n\n';
        if (this.functionParams.length > 0) {
            const exampleCall = this.lastExpression 
                ? `"${this.formatExpression(this.lastExpression)}"`
                : '""';
            this.jsCode += `// Ejemplo de llamada a la función:\n`;
            this.jsCode += `console.log("${this.functionName}(${this.functionParams.join(', ')}) =", ${exampleCall});\n`;
        }
        this.lastExpression = null; // Resetear para la siguiente función
    }

    enterConsStatement(ctx) {
        const expr = ctx.expr().getText();
        this.lastExpression = expr; // Guardar la expresión
        const indent = '    '.repeat(this.indentLevel);
        this.jsCode += `${indent}return "${this.formatExpression(expr)}";\n`;
    }

    formatExpression(expr) {
        // Corregir operadores duplicados
        expr = expr.replace(/\+\+/g, '+').replace(/\-\-/g, '-');
        
        // Simplificar números
        const tokens = expr.split(/([+\-])/).filter(t => t.trim() !== '');
        
        let numbers = 0;
        let operation = '+';
        let result = [];
        
        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i].trim();
            
            if (token === '+' || token === '-') {
                operation = token;
                // Evitar añadir operador si el anterior fue operador
                if (result.length === 0 || 
                    !['+','-'].includes(result[result.length-1])) {
                    result.push(token);
                }
            } else if (/^\d+$/.test(token)) {
                const num = parseInt(token);
                numbers = operation === '+' ? numbers + num : numbers - num;
            } else {
                result.push(token);
            }
        }
        
        // Añadir el resultado numérico si hubo operaciones
        if (numbers !== 0) {
            // Eliminar último operador si es redundante
            if (result.length > 0 && ['+','-'].includes(result[result.length-1])) {
                result.pop();
            }
            result.push(numbers > 0 ? `+ ${numbers}` : `- ${Math.abs(numbers)}`);
        }
        
        return result.join(' ')
                    .replace(/\s+\+\s+0/g, '')
                    .replace(/\s+\-\s+0/g, '')
                    .replace(/^\+\s/, '')
                    .trim();
    }
}