import analizadorVisitor from './generated/analizadorVisitor.js';

export default class CustomanalizadorVisitor extends analizadorVisitor {
    constructor() {
        super();
        this.functions = {};
        this.currentFunction = null;
        this.output = [];
        this.scopes = [{}];
    }

    // --- Ámbitos ---
    enterScope() {
        this.scopes.push({});
    }

    exitScope() {
        this.scopes.pop();
    }

    setVariable(name, value) {
        this.scopes[this.scopes.length - 1][name] = value;
    }

    getVariable(name) {
        for (let i = this.scopes.length - 1; i >= 0; i--) {
            if (name in this.scopes[i]) {
                return this.scopes[i][name];
            }
        }
        throw new Error(`Variable no definida: ${name}`);
    }

    // --- Inicio del programa ---
    visitProg(ctx) {
        return this.visitChildren(ctx);
    }

    visitFunctionDeclaration(ctx) {
        const funcName = ctx.ID().getText();
        const params = ctx.parameterList() ? this.visit(ctx.parameterList()) : [];

        this.functions[funcName] = {
            params,
            body: ctx.functionBody()
        };
        return null;
    }

    visitParameterList(ctx) {
        return ctx.ID().map(id => id.getText());
    }

    visitFunctionBody(ctx) {
        this.enterScope();
        const result = this.visitChildren(ctx);
        this.exitScope();
        return result;
    }

    // --- Sentencias ---
    visitConsStatement(ctx) {
        const value = this.visit(ctx.expr());
        this.output.push(value);
        console.log(value);
        return value;
    }

    visitExprStatement(ctx) {
        return this.visit(ctx.expr());
    }

    // --- Expresiones ---
    visitExpr(ctx) {
        if (ctx.term().length === 1) {
            return this.visit(ctx.term(0));
        }

        const left = this.visit(ctx.term(0));
        const right = this.visit(ctx.term(1));
        const op = ctx.getChild(1).getText();

        switch (op) {
            case '+': return left + right;
            case '-': return left - right;
            default: throw new Error(`Operador no soportado: ${op}`);
        }
    }

    visitTerm(ctx) {
        if (ctx.ID()) {
            const varName = ctx.ID().getText();
            return this.getVariable(varName);
        } else if (ctx.NUM()) {
            return parseInt(ctx.NUM().getText());
        } else if (ctx.expr()) {
            return this.visit(ctx.expr());
        }
    }
    getOutput() {
        return this.output;
    }
}