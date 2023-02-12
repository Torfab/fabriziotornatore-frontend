

interface Language {
  "keyword": Array<string>;
  "builtin": Array<string>;
  "punctuation": Array<string>;
  "operator": Array<string>;
  "comment": string;
}

interface LanguageList {
  [key: string]: Language;
}

const languages = {
  "python": {
    keyword:["import", "from", "def", "for", "in", "if", "print", "continue", "elif", "else", "not", "and","or", "return", "break"], 
    punctuation:["(", ")", "[", "]", "{","}", ":", ",", ";"], 
    builtin:["len", "max", "set", "dict", "enumerate","range"], 
    operator: ["=", "/", "%", "+", "-", "*", ">", "<"],
    comment: "#",
    directive: "directive"
  } as Language,
  "cpp": {
    keyword:["import", "from", "def", "for", "in", "if", "print", "continue", "elif", "else", "break", "return", "int", "bool", "using", "namespace", "string", "float", "printf", "scanf"], 
    punctuation:["(", ")", "[", "]", "{","}", ":", ",", ";"], 
    builtin:["cin", "cout"], 
    operator: ["=", "/", "%", "+", "-", "*", "<", ">", "!", "|"],
    comment: "//",
    directive: "#"
  } as Language,
  "json": {
    keyword: [],
    punctuation:["(", ")", "[", "]", "{","}", ":", ",", ";"], 
    builtin:[], 
    operator: ["=", "/", "%", "+", "-", "*", "<", ">", "!", "|"],
    comment: "noComment",
    directive: "noDirective"
  }
} as LanguageList

export function getKeywords(language: string, keyword: string): Array<string>{
  return languages[language][keyword]
}

export function getWholeLineSymbol(language: string, keyword:string): string {
  return languages[language][keyword]
}