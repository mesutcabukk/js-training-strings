/**
* Please ignore (or do not touch) all functions below in the code!
* - check()
* - isEqual()
*
* The tests are failing marked with red
* The successsful tests are marked with green (PASSED)
* Blue (VALUE IS CHANGED) means you've changed values which is not allowed!
*/

'Test Cases';
    {
      isEqual(false, new String("This is a string") instanceof Array);
    };
    {
      isEqual(typeof "This is a string", "string");
    };
    {
      isEqual(',,,,', new Array(5).toString());
    };
// .........................ok
    {
      var c = "Hi class! " + "Go for gold, " + "Yayyy!";
      
      isEqual("Hi class! Go for gold, Yayyy!", c);
    };
//....................ok
    {
      var c = "{IT Club}"; // Do not touch this!
      var a = "KZO"; // Do not touch this!
      var b = "(Switzerland)" // Do not touch this!
      var processed = c + (a) + (b);
      
      isEqual("{IT Club}", c);
    };
// ............................. ok
    {
      var c = new String("Hi class!");
      var processed = c.concat(" ","Whats up?")

      isEqual('Hi class! Whats up?', processed);
    };
//.................ok
    {
      var c = new String("it club");
        c = c.slice(0,2) + c.slice(3,7);
      var processed = c;

      isEqual('itclub', processed);
    }; 
//................ok
    {
      var c = 'it club KZO';
      c = c.replace('club KZO' , 'KZO club');
      var processed = c

      isEqual('it KZO club', processed);
    };
//.............ok
    {
      var c = 'it,club,kzo,switzerland';
        c = c.replace(/,/g , '&&');
      var processed = c;

      isEqual('it&&club&&kzo&&switzerland', processed);
    };
//.................ok
    {
      var c = 'kzo';
        c = c.toUpperCase();
      var processed = c;

      isEqual('KZO', processed);
    };
//..............ok
    {
      var c = 'Cihad, Ferdi, Mesut';
      var processed = c.substr(7, 5);

      isEqual('Ferdi', processed);
    };
    {
      var c = 'Cihad, Ferdi, Mesut';

      isEqual(true, c.endsWith('Mesut'));
    };
//.................ok
    {
      var c = '12'; // do not touch this!
      var a = '13'; // do not touch this!
      var processed = Number(a) + Number(c);

      isEqual('25', processed);
    };
//................ok
    {
      var c = '12'; // do not touch this!
      var b= '13'; // do not touch this!
      var processed = Number(c) + Number(b);

      isEqual('25', processed);
    };
//.........ok
    {
      var c = 'it club, KZO, switzerland'; // do not touch this!
        c = c.replace ("KZO","kzo");
      var processed = c.search("kzo");

      isEqual(9, processed);
    };
//....................ok
    {
      var c = new String("KZO"); // do not touch this!
        c = c.replace ("KZO","kzo");
      var processed = c.repeat(4);
       
      isEqual('kzokzokzokzo', processed);
    };
//.............ok
    {
      var c = new String(" KZO, Switzerland    "); // do not touch this!
        c = c.slice(1,17);
      var processed = c;

      isEqual(16, c.length);
    };
//.................ok
    {
      var c = "KZO"; // do not touch this!
      var processed = c.concat(", Switzerland", " itclub");

      isEqual("KZO, Switzerland itclub", processed);
    };
//.............ok
    {
      var c = ""; // do not touch this!
      var processed = c.concat(String.fromCharCode(72,69,76,76,79))
                       .concat(String.fromCharCode(32))
                       .concat(String.fromCharCode(65,66,67));

      isEqual("HELLO ABC", processed);
    };
//................ok
    {
      var c = "1.50 Fr"; // do not touch this!
      var processed = c.padStart(8, "0");

      isEqual("01.50 Fr", processed);
    };
    // ...................ok
    {
      var c = "50,100,200"; // do not touch this!
      var processed = c.split(",")[1];

      isEqual("100", processed);
    };
    {
      var c = "50,100,200"; // do not touch this!
        c = c.replace(/0/g,"o");
      var processed = c;

      isEqual("5o,1oo,2oo", processed);
    };



// Now report everything!
report();
