
//Literally all this script does in the end is split the output text by linebreaks and only returns the first element of the constructed array, meaning the output text before the AI added any linebreaks.
//E.g. If the AI were to ouptut 'Tim is lost in the woods\nSuddenly...' this code block splits the output text into 'Tim is lost in the woods', '\n', and 'Suddenly...' Only the first segment of the text gets outputed in the end.
const modifier = (text) => 
{ 
  //Confines output to one line only if this state is set to true with Say.
  if (state.chatMode) 
  { 
    if (text.length > 0)
    {
      let splitText = text.split('\n')
      if (splitText.length > 0)
      {
        return {text: splitText[0]}
      }
    }
  }
  return {text: text}
}
// Don't modify this part
modifier(text)
