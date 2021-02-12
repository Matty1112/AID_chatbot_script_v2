const invalidCommandMessage = 'Error. Command invalid.'
const doString = '\n> You ' //This is what the client prepends to any Do inputs.
const sayString = '\n> You say "' //This is what the client prepends to any Say inputs along with the closing quotation mark.

if (!state.setup)
{
  state.setup = true // Ensure this is only set once and never wiped.
  state.playerName = 'You' // Makes a state for the Player's name. To be set later. Defaults to 'You' if not set by user.
  state.aiName = 'AI' // Makes a state for the AI's name. To be set later. Defaults to 'AI' if not set by user.
  state.chatMode = false //State to toggle the one-line behavior in output modifier.
}

