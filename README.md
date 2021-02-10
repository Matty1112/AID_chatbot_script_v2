# AID-chatbot-scripts

Hi! Welcome to my sloppy AID script that forces the AI to behave in a way reminscent of a chatbot. The main concept behind it is actually braindead easy: set names for the AI and the player, format input text into Playername: input\nAIname: and discard output text made after the AI adds a linebreak. This keeps the AI's response to the line you designate it for so it can only respond as one entity at a time.

The newer version of the script adds some extra functionality without meddling with its core concept. It's still just simple stuff, like allowing for trailing sentences, greater control over where the AI completes text, and the ability to use break out of this core loop with the usage of Do or Story.

Tutorial:

This time around you'll be using Say mode if you want it to behave like a chatbot. Using Say mode without any special commands now formats it exactly the same as in the original script, taking text like 'Hey!' and formatting it as 'You: Hey!(linebreak)AI:' 

It looks a little something like this.

Input: 
/say How are you doing?
Transformed input: 
You: How are you doing?
AI: 

After the context is processed, it should output something like this.

You: How are you doing?
AI: Not too bad. And yourself?

Due to how the script works, it won't ever deviate from responding as AI: until you break out of this format. If you keep getting "The AI doesn't know what to say" after it's already responded with something, that's because it can't think of anything else to add onto that line. Respond with something yourself or edit that line to force it to keep going.

E.g.

You: How are you doing?
AI: Not too bad. And yourself? We




                              
