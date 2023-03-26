import { Create, SimpleForm, TextInput} from 'react-admin';

export const PostEdit = () => (
    <Create sx={{ width: 3/5, pt:5 }}>
        <SimpleForm >
            <TextInput sx={{ width: 5/5 }} source="id" />
            <TextInput sx={{ width: 5/5 }} source="title" />
        </SimpleForm>
    </Create>
);