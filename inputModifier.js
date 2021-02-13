const prefixNameCommand = '/setname'
const aiNameCommand = '/setnameai'
const playerNameCommand = '/setnameplayer'

//This function takes untrimmed text and checks for the input mode. For use in the switch statement found in the main loop. See shared library for the strings that are prepended to each input type.
function modeCheck(text)
{
  if (text.startsWith(sayString)){return 'say'}
  else if (text.startsWith(doString)){return 'do'}
  else {return 'story'}
}

//This is a procedure that takes trimmed input text (without the input mode strings prepended or any added \n) and sets a corresponding name.
function funcSetName(rawInputText) 
{
  if (rawInputText.startsWith(aiNameCommand))
  {
    state.aiName = rawInputText.slice(aiNameCommand.length+1)
    state.message = 'AI name set to ' + state.aiName + '.'
  }
  
  else if (rawInputText.startsWith(playerNameCommand))
  {
    state.playerName = rawInputText.slice(playerNameCommand.length+1)
    state.message = 'Player name set to ' + state.playerName + '.'
  }
  else 
  {
    state.message = invalidCommandMessage
  }
}


const modifier = (text) =>
{
  let stop = false
  
  if (state.message != '')
  {
    delete state.message
  }
  
  switch(modeCheck(text))
  {
    case 'say':
      //Trims \n> You say "inputtext"\n to just inputtext.
      rawInputText = text.slice(sayString.length, text.length-2)
      
      //Then checks to see if the trimmed text starts with the setname command prefix. Codeblock uses the SetName function defined above to conserve space.
      if (rawInputText.startsWith(prefixNameCommand))
      {
        funcSetName(rawInputText)
        stop = true
        return {text: '', stop}
      }
      
      //Only sets this to true in Say mode. Do and Story sets this to false to break out of the script's loop.
      state.chatMode = true 
      
      //This is the default chatbot format for Say mode. Triggers if it doesn't detect a command.
      if (!rawInputText.startsWith(',') && !rawInputText.startsWith(';'))
      {
        modifiedText = '\n' + state.playerName + ': ' + rawInputText + '\n' + state.aiName + ':'
        return {text: modifiedText}
      }
      //If comma is detected at the start of say input, starts the next line with aiName: and confines output there.
      else if (rawInputText.startsWith(',')) 
      {
        modifiedText = '\n' + state.aiName + ':' + rawInputText.slice(1) //Slices the comma off as the first character of the string, leaving only the text that comes after.
        return {text: modifiedText}
      }
      //If semi-colon is detected at the start of say input, starts the next line with playerName: and confines output there.
      else if (rawInputText.startsWith(';')) 
      {
        modifiedText = '\n' + state.playerName + ':' + rawInputText.slice(1) 
        return {text: modifiedText}
      }
      
      return {text: text}
      break
      
    case 'do':
      //Trims > You inputtext\n into inputtext to check for name command.
      rawInputText = text.slice(doString.length, text.length-2)
      //Then checks to see if its a setname command.
      if (rawInputText.startsWith(prefixNameCommand))
      {
        funcSetName(rawInputText)
        stop = true
        return {text: '', stop}
      }
      //chatMode state gets toggled off if Do or Story is used without a command. This allows the AI to output text past a linebreak again.
      if (state.chatMode){state.chatMode = false}
      
      return {text: text}
      break
      
    case 'story':
      //Trims \n at the start to check for name command. Won't use it for anything else.
      rawInputText = text.slice(1)
      //Then checks for setname command.
      if (rawInputText.startsWith(prefixNameCommand))
      {
        funcSetName(rawInputText)
        stop = true
        return {text: '', stop}
      }
      if (state.chatMode){state.chatMode = false}
      //Otherwise, Story mode is unmodified in how it functions. Returns text as is.
      return {text: text}
  }
}

modifier(text)
