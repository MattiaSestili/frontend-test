import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import Editor from './Editor';

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },

  sideBar: {
    position: 'fixed',
    top: '56px',
    left: 0,
    height: 'calc(100vh - 56px)',
    background: 'white',
    borderRight: '1px solid #e1e1e3',
    marginLeft: '24px',
    padding: '8px',
    width: '300px',
    '& div[class*="TreeItem-label"]' : {
      textAlign: 'left',
    }
  }
});

const Body: FC = () => (
  <>
    <Grid container direction='row' justify='flex-start' alignItems='center'>
      <div className={useStyles().sideBar}>
        <TreeView
          className={useStyles().root}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          <TreeItem nodeId="1" label="Applications">
            <TreeItem nodeId="2" label="Calendar" />
            <TreeItem nodeId="3" label="Chrome" />
            <TreeItem nodeId="4" label="Webstorm" />
          </TreeItem>
          <TreeItem nodeId="5" label="Documents">
            <TreeItem nodeId="10" label="OSS" />
            <TreeItem nodeId="6" label="Material-UI">
              <TreeItem nodeId="7" label="src">
                <TreeItem nodeId="8" label="index.js" />
                <TreeItem nodeId="9" label="tree-view.js" />
              </TreeItem>
            </TreeItem>
          </TreeItem>
        </TreeView>
      </div>
      <Editor />
    </Grid>
  </>
);

export default Body;