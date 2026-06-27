—————————————Tutorial——————————————————
(BEFORE ANYTHING, TURN OFF ACCESSIBILITY MODE.)

This time around you'll be using Say mode if you want it to behave like a chatbot. You can now use Do or Story input modes break out of the format. The loop will be broken until you use Say again.

Using Say mode without any special commands now formats it the same as in the original script, taking text like 'Hey! How are you doing?' and formatting it like this.

You: Hey! How are you doing? 
AI:

Custom names

There are two commands you're gonna use for this. /setnameplayer and /setnameai. They're pretty self-explanatory. 

E.g.
(One at a time of course)
/setnameplayer Bob
/setnameai Joe

Utility Commands

A semi-colon (;) as the first character of a Say input starts a new line with your name tag. Text after ; will be inputted along with it. This means that even if you've already responded, you can respond again, or as before add a trailing sentence for the AI to finish off.

(Starting context) 
You: Hey, wanna go for a walk? 
AI: Sure!

(Example say input)
;
(How it ends up) 
You: Hey, wanna go for a walk? 
AI: Sure! 
You:

(Example say input)
; How about we go to
(How it ends up) 
You: Hey, wanna go for a walk? 
AI: Sure! 
You: How about we go to

A comma (,) as the first character of a Say input starts a new line with the AI's name tag. Text after , will be inputted along with it. This means that even if it's already responded, you can get it to respond again, or even add a trailing sentence to the beginning of its dialogue.

(Starting context) 
You: Hey, wanna go for a walk? 
AI: Sure!

(Example say input)
, 
(How it ends up) 
You: Hey, wanna go for a walk? 
AI: Sure! 
AI:

(Example say input)
, How about we go to
(How it ends up) 
You: Hey, wanna go for a walk? 
AI: Sure! 
AI: How about we go to

tl;dr
-Use Say mode for 'chatbot mode'.
-/setnameai chosenname
-/setnameplayer chosename
-Use ; or , as the FIRST character of an input in Say mode to do special things.
