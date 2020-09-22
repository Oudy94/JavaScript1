"use strict";

const readingList = [ 
                    {title : "The Martian", author : "Andy Weir", alreadyRead : true}, 
                    {title : "Ready Player One", author : "Ernest Cline", alreadyRead : true}, 
                    {title : "A Song of Ice and Fire", author : "George R. R. Martin", alreadyRead : false}
]

for (const book in readingList){
    console.log(`${readingList[book].title} by ${readingList[book].author}`);

    if (readingList[book].alreadyRead === true){
        console.log(`You already read "${readingList[book].title}"`);
    }
    else{
        console.log(`You still need to read "${readingList[book].title}"`);
    }
}

