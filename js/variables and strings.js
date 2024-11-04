console.log("Hello, World!");
        const name2 = "Steph";
        const max = 57;
        const actual = max-13;
        const percentage = actual/max;
        
        let name = "John";
        let surname = "Doe";
        let a = 10;
        let b = 7 * a;

        console.log(name);
        console.log(surname);
        console.log(name2);
        console.log((4 + 6 + 9) / 77);
        console.log(a);
        
        console.log(9*a);
        console.log(b);
       //alert("The result is "+percentage)
       
      
      /*string method*/
      /*--------charAt()------*/
       let char = name.charAt(2);
        console.log(char);

        /*--------String length-----*/
        let length = name.length;
       alert(`This is the length of string ${length}`);

        /*----charCodeAt()---*/

        let text = "HELLO WORLD";
        let charCodeVariable = text.charCodeAt(2);
        console.log(charCodeVariable);

        /*-----String at() ----*/
        const STRINGNAME = "W3Schools";
        let letterString = STRINGNAME.at(2);
        console.log(letterString);

       /*--Property access ----*/
        const nameWebsite = "W3Schools";
        let letter = nameWebsite[3];
        console.log(letter);

        /*--String slice() ----*/
        let sliceText = "Apple, Banana, Kiwi";
        let part = sliceText.slice(7,13);
        console.log(`Slice method ${part}`);

        /*--substr()--*/
        let str = "Apple, Banana, Kiwi";
        let substr = str.substr(7, 6);
        console.log(`Substring method ${substr}`);

        /*--Converting to Upper and Lower Case--*/
        let normalText = "Hello World!";
        let convertedToUpper = normalText.toUpperCase();
        console.log(`This is converted to uppercase: ${convertedToUpper}`);

        let normalText2 = "Hello World!";
        let convertedToLower = normalText2.toLowerCase();
        console.log(`This is converted to lowercase: ${convertedToLower}`);

        /*--concat()--*/
        let text1 = "Hello";
        let text2 = "World";
        let text3 = text1.concat(" ", text2);
        console.log(text3);

        /*--trim()--*/
        let textToTrim = "      Trim text      ";
        let trimText = textToTrim.trim();
        console.log(`Using trim method: ${trimText}`);

        /* trimStart()--*/
        let textToTrimStart = "     Trim Start!     ";
        let trimTextStart = textToTrimStart.trimStart();
        console.log(`Using trim start: ${trimTextStart}`);

         /* trimEnd()--*/
         let textToTrimEnd = "             Trim End!     ";
         let trimTextEnd = textToTrimStart.trimEnd();
         console.log(`Using trim end: ${trimTextEnd}`);

        /*---PadStart---*/
        let textPadStart = "5";
        let padded = textPadStart.padStart(4,"x");
        console.log(`This is padStart: ${padded}`);

        /*Note The padStart() method is a string method. 
        To pad a number, convert the number to a string first.
        See the example below.*/
        let numb = 5;
        let numbConvertText = numb.toString();
        let numPadded = numbConvertText.padStart(4,"0");
        console.log(`This is PadStart: ${numPadded}`);

        /*-- PadEnd --*/
        let textPadEnd = "5";
        let textPaddedEnd= textPadEnd.padEnd(4,"x");
        console.log(`This is PadEnd ${textPaddedEnd}`);

        let numbPadEnd = 5;
        let converToText = numbPadEnd.toString();
        let numPaddedEnd = converToText.padEnd(4,"0");
        console.log(`This is numPadEnd: ${numPaddedEnd}`);

        /*-- String repeat()--*/
        let stringText = "Hello world!";
        let repeatResult = stringText.repeat(4);
        console.log(`This is string repeat: ${repeatResult} `);

        /*--String replace() method --
        Note:
        The replace() method does not change the string it is called on.
        The replace() method returns a new string.   
        The replace() method replaces only the first match
        If you want to replace all matches, 
        use a regular expression with the /g flag set. 
        See examples below.
        */
        let firstText = "Please visit Microsoft and Microsoft!";
        let newText = firstText.replace("Microsoft", "W3Schools");
        console.log(`This is string replace: ${newText}`);

        /* To replace case insensitive, 
          use a regular expression with an /i flag (insensitive):*/
          let secondText = "Please visit Microsoft!";
          let newText2 = secondText.replace(/MICROSOFT/i, "W3Schools");
          console.log(`This is string replace: ${newText}`);