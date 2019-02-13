import Component from '@ember/component';
import { connect } from 'ember-redux';
import listFiles from "picasa/actions/folders";

const stateToComputed = (state /*, attrs*/) => ({
  folders: state.folders
});

const dispatchToActions = {
  listFiles
};

class FolderListComponent extends Component {
}


export default connect(stateToComputed, dispatchToActions)(FolderListComponent);
