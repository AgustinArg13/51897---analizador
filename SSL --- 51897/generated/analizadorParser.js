// Generated from c:/AGUSTIN/1_ UTN/SEGUNDO/SINTAXIS Y SISTEMAS DE LENGUAJE/analizador 2.0/SSL --- 51897/analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import analizadorListener from './analizadorListener.js';
import analizadorVisitor from './analizadorVisitor.js';

const serializedATN = [4,1,16,82,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,0,1,0,1,1,
1,1,1,1,1,1,3,1,30,8,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,5,2,40,8,2,10,2,12,
2,43,9,2,1,3,5,3,46,8,3,10,3,12,3,49,9,3,1,4,1,4,3,4,53,8,4,1,5,1,5,1,5,
1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,5,7,69,8,7,10,7,12,7,72,9,7,
1,8,1,8,1,8,1,8,1,8,1,8,3,8,80,8,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,1,1,
0,11,12,80,0,19,1,0,0,0,2,25,1,0,0,0,4,36,1,0,0,0,6,47,1,0,0,0,8,52,1,0,
0,0,10,54,1,0,0,0,12,57,1,0,0,0,14,65,1,0,0,0,16,79,1,0,0,0,18,20,3,2,1,
0,19,18,1,0,0,0,20,21,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,23,1,0,0,0,
23,24,5,0,0,1,24,1,1,0,0,0,25,26,5,1,0,0,26,27,5,14,0,0,27,29,5,2,0,0,28,
30,3,4,2,0,29,28,1,0,0,0,29,30,1,0,0,0,30,31,1,0,0,0,31,32,5,3,0,0,32,33,
5,4,0,0,33,34,3,6,3,0,34,35,5,5,0,0,35,3,1,0,0,0,36,41,5,14,0,0,37,38,5,
6,0,0,38,40,5,14,0,0,39,37,1,0,0,0,40,43,1,0,0,0,41,39,1,0,0,0,41,42,1,0,
0,0,42,5,1,0,0,0,43,41,1,0,0,0,44,46,3,8,4,0,45,44,1,0,0,0,46,49,1,0,0,0,
47,45,1,0,0,0,47,48,1,0,0,0,48,7,1,0,0,0,49,47,1,0,0,0,50,53,3,10,5,0,51,
53,3,12,6,0,52,50,1,0,0,0,52,51,1,0,0,0,53,9,1,0,0,0,54,55,3,14,7,0,55,56,
5,7,0,0,56,11,1,0,0,0,57,58,5,8,0,0,58,59,5,9,0,0,59,60,5,10,0,0,60,61,5,
2,0,0,61,62,3,14,7,0,62,63,5,3,0,0,63,64,5,7,0,0,64,13,1,0,0,0,65,70,3,16,
8,0,66,67,7,0,0,0,67,69,3,16,8,0,68,66,1,0,0,0,69,72,1,0,0,0,70,68,1,0,0,
0,70,71,1,0,0,0,71,15,1,0,0,0,72,70,1,0,0,0,73,80,5,14,0,0,74,80,5,15,0,
0,75,76,5,2,0,0,76,77,3,14,7,0,77,78,5,3,0,0,78,80,1,0,0,0,79,73,1,0,0,0,
79,74,1,0,0,0,79,75,1,0,0,0,80,17,1,0,0,0,7,21,29,41,47,52,70,79];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class analizadorParser extends antlr4.Parser {

    static grammarFileName = "analizador.g4";
    static literalNames = [ null, "'function'", "'('", "')'", "'{'", "'}'", 
                            "','", "';'", "'console'", "'.'", "'log'", "'+'", 
                            "'-'", "'_'" ];
    static symbolicNames = [ null, "FUNCTION", "LPAREN", "RPAREN", "LBRACE", 
                             "RBRACE", "COMMA", "SEMICOLON", "CONSOLE", 
                             "POINT", "LOG", "PLUS", "MINUS", "UNDERSCORE", 
                             "ID", "NUM", "WS" ];
    static ruleNames = [ "prog", "functionDeclaration", "parameterList", 
                         "functionBody", "statement", "exprStatement", "consStatement", 
                         "expr", "term" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = analizadorParser.ruleNames;
        this.literalNames = analizadorParser.literalNames;
        this.symbolicNames = analizadorParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, analizadorParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.functionDeclaration();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	        this.state = 23;
	        this.match(analizadorParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDeclaration() {
	    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, analizadorParser.RULE_functionDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.match(analizadorParser.FUNCTION);
	        this.state = 26;
	        this.match(analizadorParser.ID);
	        this.state = 27;
	        this.match(analizadorParser.LPAREN);
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14) {
	            this.state = 28;
	            this.parameterList();
	        }

	        this.state = 31;
	        this.match(analizadorParser.RPAREN);
	        this.state = 32;
	        this.match(analizadorParser.LBRACE);
	        this.state = 33;
	        this.functionBody();
	        this.state = 34;
	        this.match(analizadorParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameterList() {
	    let localctx = new ParameterListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, analizadorParser.RULE_parameterList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(analizadorParser.ID);
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 37;
	            this.match(analizadorParser.COMMA);
	            this.state = 38;
	            this.match(analizadorParser.ID);
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionBody() {
	    let localctx = new FunctionBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, analizadorParser.RULE_functionBody);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 49412) !== 0)) {
	            this.state = 44;
	            this.statement();
	            this.state = 49;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, analizadorParser.RULE_statement);
	    try {
	        this.state = 52;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 14:
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            this.exprStatement();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 51;
	            this.consStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exprStatement() {
	    let localctx = new ExprStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, analizadorParser.RULE_exprStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.expr();
	        this.state = 55;
	        this.match(analizadorParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	consStatement() {
	    let localctx = new ConsStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, analizadorParser.RULE_consStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(analizadorParser.CONSOLE);
	        this.state = 58;
	        this.match(analizadorParser.POINT);
	        this.state = 59;
	        this.match(analizadorParser.LOG);
	        this.state = 60;
	        this.match(analizadorParser.LPAREN);
	        this.state = 61;
	        this.expr();
	        this.state = 62;
	        this.match(analizadorParser.RPAREN);
	        this.state = 63;
	        this.match(analizadorParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, analizadorParser.RULE_expr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.term();
	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===11 || _la===12) {
	            this.state = 66;
	            _la = this._input.LA(1);
	            if(!(_la===11 || _la===12)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 67;
	            this.term();
	            this.state = 72;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, analizadorParser.RULE_term);
	    try {
	        this.state = 79;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 73;
	            this.match(analizadorParser.ID);
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 74;
	            this.match(analizadorParser.NUM);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 75;
	            this.match(analizadorParser.LPAREN);
	            this.state = 76;
	            this.expr();
	            this.state = 77;
	            this.match(analizadorParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

analizadorParser.EOF = antlr4.Token.EOF;
analizadorParser.FUNCTION = 1;
analizadorParser.LPAREN = 2;
analizadorParser.RPAREN = 3;
analizadorParser.LBRACE = 4;
analizadorParser.RBRACE = 5;
analizadorParser.COMMA = 6;
analizadorParser.SEMICOLON = 7;
analizadorParser.CONSOLE = 8;
analizadorParser.POINT = 9;
analizadorParser.LOG = 10;
analizadorParser.PLUS = 11;
analizadorParser.MINUS = 12;
analizadorParser.UNDERSCORE = 13;
analizadorParser.ID = 14;
analizadorParser.NUM = 15;
analizadorParser.WS = 16;

analizadorParser.RULE_prog = 0;
analizadorParser.RULE_functionDeclaration = 1;
analizadorParser.RULE_parameterList = 2;
analizadorParser.RULE_functionBody = 3;
analizadorParser.RULE_statement = 4;
analizadorParser.RULE_exprStatement = 5;
analizadorParser.RULE_consStatement = 6;
analizadorParser.RULE_expr = 7;
analizadorParser.RULE_term = 8;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(analizadorParser.EOF, 0);
	};

	functionDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunctionDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(FunctionDeclarationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_functionDeclaration;
    }

	FUNCTION() {
	    return this.getToken(analizadorParser.FUNCTION, 0);
	};

	ID() {
	    return this.getToken(analizadorParser.ID, 0);
	};

	LPAREN() {
	    return this.getToken(analizadorParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(analizadorParser.RPAREN, 0);
	};

	LBRACE() {
	    return this.getToken(analizadorParser.LBRACE, 0);
	};

	functionBody() {
	    return this.getTypedRuleContext(FunctionBodyContext,0);
	};

	RBRACE() {
	    return this.getToken(analizadorParser.RBRACE, 0);
	};

	parameterList() {
	    return this.getTypedRuleContext(ParameterListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterFunctionDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitFunctionDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitFunctionDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParameterListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_parameterList;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(analizadorParser.ID);
	    } else {
	        return this.getToken(analizadorParser.ID, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(analizadorParser.COMMA);
	    } else {
	        return this.getToken(analizadorParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterParameterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitParameterList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitParameterList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_functionBody;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterFunctionBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitFunctionBody(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitFunctionBody(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_statement;
    }

	exprStatement() {
	    return this.getTypedRuleContext(ExprStatementContext,0);
	};

	consStatement() {
	    return this.getTypedRuleContext(ConsStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_exprStatement;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	SEMICOLON() {
	    return this.getToken(analizadorParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterExprStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitExprStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitExprStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConsStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_consStatement;
    }

	CONSOLE() {
	    return this.getToken(analizadorParser.CONSOLE, 0);
	};

	POINT() {
	    return this.getToken(analizadorParser.POINT, 0);
	};

	LOG() {
	    return this.getToken(analizadorParser.LOG, 0);
	};

	LPAREN() {
	    return this.getToken(analizadorParser.LPAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RPAREN() {
	    return this.getToken(analizadorParser.RPAREN, 0);
	};

	SEMICOLON() {
	    return this.getToken(analizadorParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterConsStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitConsStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitConsStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_expr;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(analizadorParser.PLUS);
	    } else {
	        return this.getToken(analizadorParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(analizadorParser.MINUS);
	    } else {
	        return this.getToken(analizadorParser.MINUS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_term;
    }

	ID() {
	    return this.getToken(analizadorParser.ID, 0);
	};

	NUM() {
	    return this.getToken(analizadorParser.NUM, 0);
	};

	LPAREN() {
	    return this.getToken(analizadorParser.LPAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RPAREN() {
	    return this.getToken(analizadorParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




analizadorParser.ProgContext = ProgContext; 
analizadorParser.FunctionDeclarationContext = FunctionDeclarationContext; 
analizadorParser.ParameterListContext = ParameterListContext; 
analizadorParser.FunctionBodyContext = FunctionBodyContext; 
analizadorParser.StatementContext = StatementContext; 
analizadorParser.ExprStatementContext = ExprStatementContext; 
analizadorParser.ConsStatementContext = ConsStatementContext; 
analizadorParser.ExprContext = ExprContext; 
analizadorParser.TermContext = TermContext; 
