$(document).ready(
    ()=>{

    }
)

const nav = {
    chapters:{
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
    vocab:{
        day01:()=>{
            $("#mainArticle").html(vocabs.day01);
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