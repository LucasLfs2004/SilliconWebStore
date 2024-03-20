import { EditorState } from 'draft-js';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Container } from '../../CommomStyles';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import * as C from './styles';

const Description = () => {
  const [editor, setEditor] = useState(EditorState.createEmpty());

  console.log(editor);

  //   const editorRef = useRef();
  return (
    <Container className='dark'>
      <Header />
      <C.Content>
        <C.EditorArea>
          <C.Title>Descrição do produto</C.Title>
          <C.EditorCard>
            <ReactQuill theme='snow' value={editor} onChange={setEditor} />
          </C.EditorCard>
        </C.EditorArea>
      </C.Content>
      <Footer />
    </Container>
  );
};

export default Description;
