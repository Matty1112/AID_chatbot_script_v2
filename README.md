# AID-chatbot-scripts

Hi! Welcome to my sloppy AID script that forces the AI to behave in a way reminscent of a chatbot. The main concept behind it is actually braindead easy: set names for the AI and the player, format input text into Playername: input\nAIname: and discard output text made after the AI adds a linebreak. This keeps the AI's response to the line you designate it for no matter what.

The newer version of the script adds some extra functionality without meddling with its core concept. It's still just simple stuff, like allowing for trailing sentences, greater control over where the AI completes text, and the ability to use Do or Story input modes to break out of the format.

Tutorial

This time around you'll be using Say mode if you want it to behave like a chatbot. Using Say mode without any special commands now formats it exactly the same as in the original script, taking text like 'Hey! How are you doing?' and formatting it like this:
You: Hey! How are you doing?
AI:

After the context is processed, the output might look something similar to this:

You: Hey! How are you doing?
AI: Not too bad. And yourself?

Due to how the script works by default, it won't ever deviate from responding as 'AI:' until you break out of this format. If you keep getting "The AI doesn't know what to say" after it's already responded with something, that's because it can't think of anything else to add onto that line. Respond with something yourself or edit that line to force it to keep going.

Setting names

There are two commands you're gonna use for this. /setnameplayer and /setnameai. They're pretty self-exaplantory. While in any of the three input modes, simply set the pair of names like this.

/setnameplayer Bob
Wait for the system message to pop up notifying of the change.
/setnameai Joe

For the purposes of the script, 'You' gets changed to 'Bob' and AI gets changed to 'Joe'. This is how it'd look after you've set these custom names and used Say for your input.

(Example Say input)
Hello!

(Transformed Say input)
Bob: Hello! 
Joe:


Breaking Out of The Format

If you're in the middle of discussion with the AI and for whatever reason want to transition it into narration, simply input something with Do or Story. That simple. The AI will only keep to the format if you continuously use Say for the inputs.

E.g. 

(Starting context)
Bob: Hey, wanna go for a walk?
Joe: Sure!

(Example Story input)
Bob and Joe then go for a walk.

(How it ends up)
Bob: Hey, wanna go for a walk?
Joe: Sure!
Bob and Joe then go for a walk.

(Example Do input)
go for a walk with Joe.

(And this is how a Do input ends up looking.)
Bob: Hey, wanna go for a walk?
Joe: Sure!
> You go for a walk with Joe.

The AI will then function as 'normal' until you use Say again. Until then, it is no longer confined to a single line for its output.

Additional Commands

With this version there are two 'commands' that grant you greater control over the speaker as well as letting you do trailing sentences. A ,(comma) and a ;(semi-colon) as the FIRST character in a Say input. These are only activated if found at the START of the sentence so it won't interfere with their use as punctuation.

, at the start of a Say input starts a new line with the AI's name tag. This means that even if it's already responded, you can get it to respond again, ir even add a trailing sentence to the beginning of its dialogue.

Starting context
Bob: Hey, wanna go for a walk?
Joe: Sure!

Example input
/say ,

How it ends up
Bob: Hey, wanna go for a walk?
Joe: Sure!
Joe:

If you have something in mind for it to say, you can do something like

Starting context

Bob: Hey, wanna go for a walk?
Joe: Sure!

Input (Say)

,Shoot. Let me just go back and grab my keys. I'll

How it'd look
Bob: Hey, wanna go for a walk?
Joe: Sure!
Joe: Shoot. Let me just go back and grab my keys. I'll




                              
