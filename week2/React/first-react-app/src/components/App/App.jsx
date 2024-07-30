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
    Card,
    InlineGrid,
    
   } from '@shopify/polaris';
import "@shopify/polaris/build/esm/styles.css";
import {DeleteIcon} from "@shopify/polaris-icons"
import { Fragment, useState } from 'react';

const HeaderBar = () => {
  return (


    
      <Box padding='025' borderBlockEndWidth="050"   
      >
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
    <Fragment>
    <Margin top ={"10px"} />
    <Box>
      <ResourceItem
        id= {id}
        >
        <InlineStack align='space-between' blockAlign='center'>
          <Box>
            <Text>
              {content}
            </Text>
          </Box>
          <Box width='70%'>   
          <InlineStack align='end' blockAlign='center' gap={200} >
            <Box width='80px'>
              <InlineStack align='center' blockAlign='center'>
                <Badge tone={status === "done" ? "success" : "small"}>{status}</Badge>
              </InlineStack>  
            </Box>
            <Box>
              <Button variant="secondary">
              Complete
              </Button>
            </Box>
            <Box>
              <Button variant="primary" tone="critical">
              Delete
              </Button>
            </Box>  
          </InlineStack>
          </Box>
        </InlineStack>
     </ResourceItem>
    </Box>     
    </Fragment>
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

    <BlockStack inlineAlign='center'>
      <Margin top = {"20px"}/>
      <Box width='50%'>
      <Box>
        
        <InlineStack align='space-between' blockAlign='center'>
          <Text tone='base' variant='bodyLg' alignment='center'>
            Todos
          </Text>
          <Button tone='success' variant="primary"><Text>Create todo</Text></Button>
        </InlineStack>
      </Box>
      <Box>
        <Margin top = {"10px"}/>
        <ResourceList
          resourceName={resourceName}
          items={items}
          renderItem={renderItem}
          selectedItems={selectedItems}
          onSelectionChange={setSelectedItems}
          promotedBulkActions={promotedBulkActions}
          bulkActions={bulkActions}
        />
      </Box>
    
      </Box>
      </BlockStack>

      
  )
}

const Margin = ({top='0', left='0', right='0', bottom='0'})=>{
  return (
    <div
      style={{
        marginTop: top ,
        marginLeft: left,
        marginRight: right,
        marginBottom: bottom,
      }}
    >
    </div>
  )
}


const App = () => {
  return (
    <Page fullWidth>
      <HeaderBar />
      <Body/>
    </Page>
  );
}

export default App;
