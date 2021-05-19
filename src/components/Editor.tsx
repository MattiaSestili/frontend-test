import { makeStyles } from '@material-ui/core/styles';
import MonacoEditor from 'react-monaco-editor';

const useStyles = makeStyles({
  editorContainer: {
    width: 'calc(100% - 324px)',
    height: 'calc(100vh - 56px)',
    position: 'fixed',
    left: '324px',
    top: '56px',
    padding: '8px 24px 0 0',
    backgroundColor: 'white',
    '& > div[class*="monaco-editor"]': {
      textAlign: 'left',
    }
  }
});

const Editor = (props: { value: string }) => {
  const options = {
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    automaticLayout: false,
  }

  const onChange = () => {
    console.log('onChange');
  }

  return (
    <div className={useStyles().editorContainer}>
      <MonacoEditor
        width="100%"
        height="100%"
        language="javascript"
        theme="vs-light"
        value={props.value ? props.value : '// type your code...'}
        options={options}
        onChange={onChange}
      />
    </div>
  );
};

export default Editor;