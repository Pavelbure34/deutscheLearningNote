$(document).ready(
    ()=>{

    }
)

const nav = {
    page:{
        ot:()=>{
            $("#mainArticle").html(pages.ot);
        },
        day01:()=>{
            $("#mainArticle").html(pages.day01);
        },
        day02:()=>{
            $("#mainArticle").html(pages.day02);
        }
    },
    vocabs:{
        day01:()=>{
            $("#mainArticle").html(vocabs.day01);
            funcs.renderVocabList(vocab_db[0].second,"list1","list2");
        },
        day02:()=>{
            $("#mainArticle").html(vocabs.day02);
        }
    },
    quiz:{
        day01:()=>{
            $("#mainArticle").html(quizes.day01);
        },
        day02:()=>{
            $("#mainArticle").html(quizes.day02);
        }
    }
}