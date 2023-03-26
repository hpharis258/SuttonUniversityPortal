import { Datagrid, List, ReferenceField, TextField } from 'react-admin';

export const PostList = () => (
    <List>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users"><TextField source="id" /></ReferenceField>
            <TextField label="POST ID" source="id" />
            <TextField label = "POST TITLE" source="title" />
            <TextField label = "POST BODY" source="body" />
        </Datagrid>
    </List>
);