

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
    keyword:["import", "from", "def", "for", "in", "if", "continue", "elif", "else", "not", "and","or", "return", "break"], 
    punctuation:["(", ")", "[", "]", "{","}", ":", ",", "(?<!&lt);"], 
    builtin:["set", "dict", "enumerate","range"], 
    operator: ["=", "/", "%", "+", "-", "*", ">", "&lt;"],
    comment: "#",
    directive: "directive"
  } as Language,
  "cpp": {
    keyword:["const", "import", "from", "def", "for", "in", "if", "continue", "elif", "else", "break", "return", "int", "bool", "using", "namespace", "string", "float"], 
    punctuation:["(", ")", "[", "]", "{","}", ":", ",", "(?<!&lt|&amp);", "'"], 
    builtin:["cin", "cout"], 
    operator: ["=", "/", "%", "+", "-", "&amp;", "&lt;", ">", "!", "|"],
    comment: "//",
    directive: "#"
  } as Language,
  "json": {
    keyword: [],
    punctuation:["(", ")", "[", "]", "{","}", ":", ",", "(?<!&lt);"], 
    builtin:[], 
    operator: ["=", "/", "%", "+", "-", "*", "<", ">", "!", "|"],
    comment: "noComment",
    directive: "noDirective"
  }
} as LanguageList

export function getKeywords(language: string, keyword: string): Array<string>{
  return languages[language][keyword as keyof Language] as Array<string>
}

export function getWholeLineSymbol(language: string, keyword:string): string {
  return languages[language][keyword as keyof Language] as string
}