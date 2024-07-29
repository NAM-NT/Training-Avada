import './App.css';
import { 
    Page, 
    Text, 
    Avatar, 
    Box, 
    InlineStack, 
    Layout, 
    Button, 
    BlockStack,
    ResourceItem,
    ResourceList,
    Badge,
    Card

   } from '@shopify/polaris';
import "@shopify/polaris/build/esm/styles.css";
import {DeleteIcon} from "@shopify/polaris-icons"
import { useState } from 'react';

const HeaderBar = () => {
  return (
 
      <Box padding='025' borderBlockEndWidth="050">
        <InlineStack wrap={false} align="space-between" width="100%" blockAlign='center'>
          <Box minWidth="50px" background="bg-fill-critical">
            <Text>logo</Text>
          </Box>
          <Box>
            <InlineStack>
              <Avatar size='sm' initials="XA" name="Xquenda Andreev" />
              <Text alignment='start'>Xquenda Andreev</Text>
            </InlineStack>
          </Box>
        </InlineStack>
      </Box>
   
  );
}



const renderItem = (item)=>{
  const {id, content, status} = item;
  return(
    <div style= {{ margin: "5px 0",
    }}>
      <ResourceItem
        id= {id}
        >
        <InlineStack align='space-between' blockAlign='center'>
          <Box>
            <Text>
              {content}
            </Text>
          </Box>
          <Box>
            <Badge tone="info">{status}</Badge>
            <Button>
              Complete
            </Button>
            <Button>
              Delete
            </Button>
          </Box>
        </InlineStack>
     </ResourceItem>
    </div>
      
  )

}



const Body = () =>{
  const [selectedItems, setSelectedItems]= useState();
  const resourceName ={
    singular: 'todos',
    plural: 'todos',
  }
  
  const items =[
    {
      id:1,
      content: 'learn JavaScript',
      status: 'done',
    },
    {
      id:2,
      content: 'learn Docker',
      status: 'pendding',
  
    } 
  ]
  const promotedBulkActions = [
    {
      content: 'Edit customers',
      onAction: () => console.log('Todo: implement bulk edit'),
    },
  ];

  const bulkActions = [
    {
      content: 'Add tags',
      onAction: () => console.log('Todo: implement bulk add tags'),
    },
    {
      content: 'Remove tags',
      onAction: () => console.log('Todo: implement bulk remove tags'),
    },
    {
      icon: DeleteIcon,
      destructive: true,
      content: 'Delete customers',
      onAction: () => console.log('Todo: implement bulk delete'),
    },
  ];


    
  return (
    <div style={{width : "50%", margin : "auto", marginTop: "20px",

    }}>
      <BlockStack>
        <div style ={{marginBottom:"20px"}}>
          <InlineStack align='space-between' blockAlign='center'>
                <Text tone='base' variant='bodyLg' alignment='center'>
                  Todos
                </Text>
                <Button tone='success'><Text>Create todo</Text></Button>
          </InlineStack>
        </div>
        <Box>
          <ResourceList
            resourceName={resourceName}
            items={items}
            renderItem={renderItem}
            selectedItems={selectedItems}
            onSelectionChange={setSelectedItems}
            promotedBulkActions={promotedBulkActions}
            bulkActions={bulkActions}
          />
          <div style ={{height:'70px'}}></div>      
        </Box>
      </BlockStack>
      

    </div>
    
  )
}






const App = () => {
  return (
    <Page fullWidth  className="no-padding">
      <HeaderBar />
      <Body/>
    </Page>
  );
}

export default App;
