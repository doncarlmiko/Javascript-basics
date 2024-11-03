console.log("Hello, World!")
        const name2 = "Steph"
        const max = 57
        const actual = max-13
        const percentage = actual/max
        
        let name = "John"
        let surname = "Doe"
        let a = 10
        let b = 7 * a

        console.log(name)
        console.log(surname)
        console.log(name2)
        console.log((4 + 6 + 9) / 77)
        console.log(a)
        
        console.log(9*a)
        console.log(b)
       //alert("The result is "+percentage)
       
      
      /*string method*/
      /*--------charAt()------*/
       let char = name.charAt(2)
        console.log(char)

        /*--------String length-----*/
        let length = name.length
       alert(`This is the length of string ${length}`)

        /*----charCodeAt()---*/

        let text = "HELLO WORLD";
        let charCodeVariable = text.charCodeAt(2);
        console.log(charCodeVariable)

        /*-----String at() ----*/
        const STRINGNAME = "W3Schools";
        let letterString = STRINGNAME.at(2);
        console.log(letterString)

       /*--Property access ----*/
        const nameWebsite = "W3Schools";
        let letter = nameWebsite[3];
        console.log(letter)

        /*--String slice() ----*/
        let sliceText = "Apple, Banana, Kiwi";
        let part = sliceText.slice(7,13);
        console.log(`Slice method ${part}`)

        /*--substr()--*/
        let str = "Apple, Banana, Kiwi";
        let substr = str.substr(7, 6);
        console.log(`Substring method ${substr}`)

        /*--Converting to Upper and Lower Case--*/
        let normalText = "Hello World!";
        let convertedToUpper = normalText.toUpperCase();
        console.log(`This is converted to uppercase: ${convertedToUpper}`)

        let normalText2 = "Hello World!";
        let convertedToLower = normalText2.toLowerCase();
        console.log(`This is converted to lowercase: ${convertedToLower}`)

        /*--concat()--*/
        let text1 = "Hello";
        let text2 = "World";
        let text3 = text1.concat(" ", text2)
        console.log(text3)

        /*--trim()--*/
        let textToTrim = "      Hello World!      ";
        let trimText = textToTrim.trim();

