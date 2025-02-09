import { AIConversation, createAIHooks } from '@aws-amplify/ui-react-ai';
import { generateClient } from 'aws-amplify/api';
import { Schema } from '../amplify/data/resource';
import { Authenticator, Card } from '@aws-amplify/ui-react';

const client = generateClient<Schema>();

export default function App() {
  const { useAIConversation } = createAIHooks(client);
  const [
    {
      data: { messages },
      isLoading,
    },
    handleSendMessage,
  ] = useAIConversation('chat');
  // 'chat' is based on the key for the conversation route in your schema.

  return (
    <Authenticator>
      <Card>
        <AIConversation
          messages={messages}
          isLoading={isLoading}
          handleSendMessage={handleSendMessage}
          welcomeMessage={
            <Card variation="outlined">
              <p>I am your virtual assistant, ask me any questions you like!</p>
            </Card>
          }
        />
      </Card>
      
    </Authenticator>
  );
}