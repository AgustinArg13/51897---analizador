grammar analizador;

//Tokens - Lexico
FUNCTION : 'function';
LPAREN :'(';
RPAREN :')';
LBRACE : '{';
RBRACE : '}'; 
COMMA :',';
SEMICOLON : ';';
CONSOLE: 'console';
POINT: '.';
LOG: 'log';
PLUS: '+';
MINUS: '-';
UNDERSCORE: '_';
ID: [a-zA-Z][a-zA-Z0-9_]*;
NUM:[0-9]+;
// Espacios ignorados
WS: [ \t\r\n]+ -> skip;

//Gramática
prog: functionDeclaration+ EOF;

functionDeclaration: FUNCTION ID LPAREN parameterList? RPAREN LBRACE functionBody RBRACE;

parameterList: ID (COMMA ID)*;

functionBody: (statement)*;

statement: exprStatement
    |consStatement;

exprStatement: expr SEMICOLON;

consStatement: CONSOLE POINT LOG LPAREN expr RPAREN SEMICOLON;

expr: term ((PLUS | MINUS) term)*;

term: ID
    | NUM
    | LPAREN expr RPAREN;