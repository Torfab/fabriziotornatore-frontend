<template>
  <div v-html="renderedMd"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {getKeywords, getWholeLineSymbol} from "@/Utility/markdownLanguageHandler"

export default defineComponent({
  props: {
    raw: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isCode: false,
      isTotalCode: false,
      isMeta: false,
      listDeep: 0,
      isParagraph: false,
      blockQuoteDeep: -1,
      continue: false,
      kindOfOrderList: "",
      totalRender: "",
      language: "python",
      isTable: false,
      tableLength: -1
    };
  },
  methods: {
    checkCode(firstElement: string): string | undefined {
      if (firstElement.startsWith("```") && !this.isTotalCode) {
        this.isTotalCode = true;
        this.language=firstElement.substring(3)||"python"
        return `<pre class="language-${this.language}"><code>`;
      }
      if (this.isTotalCode && firstElement === "```") {
        this.isTotalCode = false;
        return "</code></pre>";
      }
      return;
    },
    checkBreak(firstElement: string): string|undefined {
      
      if(["*","-","#"].includes(firstElement[0])&& firstElement.length>3 && firstElement.toLowerCase()===firstElement.toUpperCase()){
        return "<hr>"
      }
      return
    },
    toggleMeta(firstElement: string): boolean {
      if (firstElement === "---" && this.isMeta) {
        this.isMeta = false;
        return true;
      }
      if (!this.isMeta && firstElement === "---") {
        this.isMeta = true;
        return true;
      }
      return false;
    },
    resetGlobals() {
      this.isCode = false;
      this.isMeta = false;
      this.listDeep = 0;
      this.isParagraph=false;
      this.blockQuoteDeep=0;
      this.continue=false;
      this.kindOfOrderList="";
      this.totalRender="";
      this.isTotalCode=false;
      this.language="python";
      this.isTable=false;
      this.tableLength=-1;
    },
    checkBlockQuote(row: string){
      let tempResult=""
      
      let splitted=row.trimStart().split(" ")
      if(splitted[0]==">"){
        let currentDeep=0
        let iteration=0
        while (iteration<splitted.length){
          if(splitted[iteration]==">"){
            currentDeep=currentDeep+1
          }else{
            break
          }
          iteration=iteration+1
        }
        while (currentDeep < this.blockQuoteDeep) {
          tempResult += `</blockQuote>`;
          this.blockQuoteDeep = this.blockQuoteDeep - 1;
        }
        if (currentDeep == this.blockQuoteDeep) {
          if(iteration<splitted.length){
            tempResult += `${this.renderRow(splitted.slice(currentDeep).join(" "))}`;
          }
          return tempResult
        }
        if (currentDeep == this.blockQuoteDeep + 1) {
          this.blockQuoteDeep = this.blockQuoteDeep + 1;
          tempResult += `<blockQuote>${this.renderRow(splitted.slice(currentDeep).join(" "))}`;
          return tempResult;
        }
      }
      if(this.blockQuoteDeep > 0 && !this.isParagraph){
        this.continue=true;
        while (this.blockQuoteDeep > 0) {
          tempResult += "</blockQuote>";
          this.blockQuoteDeep = this.blockQuoteDeep - 1;
        } 
        return tempResult
      }  
      return
    },  
    checkTable(row:string){
      let splitted=row.split("|")
      if(splitted.length>2){
        if(!this.isTable){
          this.isTable=true
          this.tableLength=splitted.length-1
          let tempResult="<thead>"
          for(let i=1; i<this.tableLength; i++){
            tempResult=tempResult.concat(`<th>${splitted[i]}</th>`)
          }
          tempResult=tempResult.concat("</thead>")
          return `<table>${tempResult}`
        } else {
          if(this.totalRender.endsWith("</thead>")){
            return " "
          }
          let minTD=Math.min(this.tableLength, splitted.length-1)
          let tempResult="<tr>"
            for(let i=1; i<minTD; i++){
            tempResult=tempResult.concat(`<td>${splitted[i]}</td>`)
          }
          tempResult=tempResult.concat("</tr>")
          return `${tempResult}`            
        }
      }
    },
    checkList(firstElement: string, row: string) {
      
      let tempResult=""
      let unorderedList =firstElement.length==1 && firstElement.match(/\*|\-|\+/g)
      let orderedList = firstElement.match(/[0-9]+\./g)
      let currentKindOfOrderList= undefined
      if(unorderedList){
        this.kindOfOrderList="ul"
        currentKindOfOrderList=true
      }
      if(orderedList){
        this.kindOfOrderList="ol"
        currentKindOfOrderList=true
      }

      if (currentKindOfOrderList) {
        let currentDeep = Math.floor(row.indexOf(firstElement) / 2)+1;
        while (currentDeep < this.listDeep) {
          tempResult += `</${this.kindOfOrderList}>`;
          this.listDeep = this.listDeep - 1;
        }
        if (currentDeep == this.listDeep) {
          tempResult += `<li>${this.renderWithoutFirstSpecialCharacters(firstElement, row)}</li>`;
          return tempResult;
        }
        if (currentDeep == this.listDeep + 1) {
          this.listDeep = this.listDeep + 1;
          tempResult += `<${this.kindOfOrderList}><li>${this.renderWithoutFirstSpecialCharacters(firstElement, row)}`;
          return tempResult;
        }
      }
      if(firstElement=="" && this.listDeep>0 ){
        while (this.listDeep > 0) {
          tempResult=tempResult.concat(`</${this.kindOfOrderList}>`)
          this.listDeep = this.listDeep - 1;
        } 
        return tempResult
      }
      return
    },
    renderRow(row:string){
      let totalRender=""
      let firstElement = row.trimStart().split(" ")[0];
        let skip = this.toggleMeta(firstElement);
        if(firstElement===""){
          if(this.isParagraph){
            this.isParagraph=false
            totalRender=totalRender.concat("</p>")
          }
        }
        if (this.isMeta || skip) {
          return totalRender
        }

        let checkCode=this.checkCode(firstElement)
        if(checkCode!=undefined){
          return totalRender.concat(checkCode)
        }
        
        let checkList=this.checkList(firstElement, row)
        if(checkList!=undefined){
          return totalRender.concat(checkList)
        }

        let checkBreak=this.checkBreak(firstElement)
        if(checkBreak!=undefined){
          return totalRender.concat(checkBreak)
        }
        
        let checkTable=this.checkTable(row)
        if(checkTable!=undefined){
          return totalRender.concat(checkTable)
        }
        if(this.isTable){
          this.isTable=false;
          this.tableLength=-1;

          totalRender=totalRender.concat("</table>aaaaaaa")
        }
        return totalRender.concat(this.renderLine(firstElement, row))
    },
    renderRawMD(raw: string) {
      this.resetGlobals();
      raw.split("\r\n").forEach((row: string) => {

        let checkBlockQuote=this.checkBlockQuote(row)
        if(checkBlockQuote!=undefined){
          this.totalRender = this.totalRender.concat(checkBlockQuote)
          if(!this.continue){
            return
          } else {
            this.continue=false
          }
        }
        let renderRow=this.renderRow(row)
        this.totalRender=this.totalRender.concat(renderRow)

      });
      return this.totalRender;
    },
    buildLineCode(line: string){
      if(this.isTotalCode){
        return line
      }
      let indexToCancel=0;
      let isLi=false;
      let firstTimeCode=false;
      if(line.startsWith("    ")&&this.listDeep==0){
        if(this.totalRender.substring(this.totalRender.length-2)=="l>"){
          isLi=true
          this.listDeep=1
          this.isParagraph=true
        } else{
          if(!this.isCode && !this.isTotalCode){
            this.isCode=true
            firstTimeCode=true
          }
        }
        indexToCancel=4
      }
      if(line.startsWith("        ")&& this.listDeep>0){
        indexToCancel=8
      }
      if(indexToCancel!=0){
        if(isLi){
          this.totalRender=this.totalRender.substring(0, this.totalRender.length-5)
          let element="p"
          if(line[4]==">"){
            this.blockQuoteDeep=1
            element="blockQuote"
          }
          if(indexToCancel==8){
            return `<pre><code>${this.cleanLine(line.substring(indexToCancel))}</pre></code>`
          }
          return `<${element}>${line.substring(indexToCancel)}`
        }

        return `${firstTimeCode?"<pre><code>":"\r\n"}${this.cleanLine(line.substring(indexToCancel))}`

      }
      if(this.isCode && indexToCancel==0){
        this.isCode=false;
        return `</pre></code>`
      }
      return line
    },
    renderLine(firstElement: string, line: string, skipParagraph=true) {
      if(this.isTotalCode){
        return this.codify(line, this.language)
      }


      if (firstElement[0]=="#") {
        return this.heading(line);
      }


      let code=this.buildLineCode(line)
      
      if(code!=line){        
        return code
      }



      line=this.buildLineLink(line)
      

      let tempResult=""
      
      if(!this.isParagraph && line[0]!="<" && line[0]!=undefined && skipParagraph && this.listDeep==0 && !this.isTotalCode){
        this.isParagraph=true
        tempResult=tempResult.concat("<p>")
      }
      tempResult=tempResult.concat(line)

      tempResult=this.spanFormat(tempResult)


      return tempResult
    },
    evaluateString(line: string): string {
      let splitted=line.split("\"")
      let tempResult=""
      splitted.forEach((element: string, index: number)=>{
        if(index%2==1){
          tempResult=`${tempResult}<span class="string">"${element}"</span>`
        }else {
        tempResult=tempResult.concat(element)
        }
      })
      return tempResult
    },
    evaluateKeywords(line: string, keyword: string, language: string, punctuation=false): string{
      let keywords=getKeywords(language, keyword)
      let splitRegex: RegExp;
      if(punctuation){
        splitRegex = new RegExp(`(\\${keywords.join('|\\')})`, 'g');
      } else {
        splitRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
      }
      return this.evaluateRegExp(line, splitRegex, keyword)
    },
    evaluateRegExp(line: string, regex:RegExp, classKeywork:string){
      let splitted=line.split(/<span|<\/span>/g)
      let tempResult=""
      splitted.forEach((element: string, index: number)=> {
        if(index%2==1){
          tempResult=`${tempResult}<span${element}</span>`
        }else {
          tempResult=tempResult+element.replace(regex, `<span class="${classKeywork}">$1</span>`)
        }
      })

      return tempResult
    },
    evaluateWholeLine(line: string, symbol: string, keyword: string): string{
      let splitted=line.split(/<span|<\/span>/g)
      let tempResult=""
      let foundComment=false
      splitted.forEach((element: string, index: number)=> {
        if(index%2==1){
          tempResult=`${tempResult}<span${element}</span>`
        }else {
          if(!foundComment&&element.includes(symbol)){
            foundComment=true
            tempResult=tempResult+this.cleanLine(element).replace(symbol, `<span class="${keyword}">${symbol}`)
          }else {
            tempResult=tempResult+element
          }
        }
      })
      if(foundComment){
        tempResult=tempResult+"</span>"
      }
      return tempResult
    },
    codify(line: string, language: string){
      let tempResult=this.evaluateString(line)
      let tempResultWithComment=this.evaluateWholeLine(tempResult, getWholeLineSymbol(language, "comment"), "comment")
      if(tempResult!=tempResultWithComment){
        return tempResultWithComment+"\r\n"
      }
      tempResultWithComment=this.evaluateWholeLine(tempResult, getWholeLineSymbol(language, "directive"), "directive")
      if(tempResult!=tempResultWithComment){
        return tempResultWithComment+"\r\n"
      }
      tempResult=this.evaluateKeywords(tempResult, "keyword", language)
      tempResult=this.evaluateKeywords(tempResult, "builtin", language)
      tempResult=this.evaluateRegExp(tempResult, /\b(\w+\()/g, "function")
      tempResult=this.evaluateKeywords(tempResult, "punctuation", language, true)
      tempResult=this.evaluateKeywords(tempResult, "operator", language, true)
      tempResult=this.evaluateRegExp(tempResult, /\b(-?\d+(\.\d+)?)\b/g, "number")

      return tempResult+"\r\n"
    },
    renderWithoutFirstSpecialCharacters(firstElement: string, line:string){
      if(firstElement.match(/\*|\-|\+|[0-9]\./g)){
        let lineSplitted = line.trimStart().split(" ");
        lineSplitted.shift();
        line = lineSplitted.join(" ")
      }
      return this.renderLine(firstElement, line, false)
    },
    buildLineLink(line: string){
      if(line.includes("](")){
        let isImage=line[line.indexOf("[")-1]=="!"
        let start=line.indexOf("[")+1
        let end= line.indexOf("]")
        let realEnd= line.indexOf(")")
        let slice=line.slice(start, end)
        if(isImage){
          line=`${this.spanFormat(line.slice(0, start-2))}<div class="d-flex"><img class="m-auto" src="${line.slice(end+2,realEnd)}" alt="${slice}"></img></div>${this.buildLineLink(line.slice(realEnd+1))}`
        } else {
          line=`${this.spanFormat(line.slice(0, start-1))}<a href="${line.slice(end+2,realEnd)}">${slice}</a>${this.buildLineLink(line.slice(realEnd+1))}`
        }
      }
      return line;
    },
    cleanLine(line:string): string{
      return line.replaceAll("&", "&amp;").replaceAll("<", "&lt;")
    }, 
    spanInsideTag(line:string, tag: string, entity: RegExp, encapsulation: string){
      tag=tag.concat(">")
      let splitted= line.split(tag)
      if(splitted.length>1){
        let result=""
        splitted.forEach((element:string, index: number)=>{
          if(index%2==1){
            result=result.concat(element).concat(tag)
          } else {
            result=result.concat(this.spanSingleEntity(element, entity, encapsulation))
            if(index!=splitted.length-1){
              result=result.concat(tag)
            }
          }
        })
        return result
      }
      return this.spanSingleEntity(line, entity, encapsulation)
    },
    spanSingleEntity(line: string, entity: RegExp, encapsulation: string, func:Function = (value: string)=>value){
      if(line.match(entity)){
        let splitted=line.split(entity)
        line=""
        splitted.forEach((value:string, idx: number)=>{
          if(idx%2==0){
            line=line.concat(value)
          } else{
            line=line.concat(`<${encapsulation}>${func(value)}</${encapsulation}>`)
          }
        })
      }
      return line
    },
    spanFormat(line: string){

      line=this.spanSingleEntity(line, /\`/g, "code", this.cleanLine)
      line=this.spanInsideTag(line, "code", /\*\*|__/g, "strong")
      line=this.spanInsideTag(line, "code", /\*|\_/g, "em")
      return line
    },
    heading(line: string) {
      let lineSplitted = line.split(" ");
      let heading = lineSplitted[0].length;
      lineSplitted.shift();
      return `<h${heading}>${lineSplitted.join(" ")}</h${heading}>`;
    },
  },
  computed: {
    renderedMd() {
      return this.renderRawMD(this.raw);
    },
  },
});
</script>