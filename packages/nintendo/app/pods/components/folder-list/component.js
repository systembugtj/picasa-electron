import Component from '@ember/component';
import { connect } from 'ember-redux';
import listFiles from "picasa/actions/folders";
import { computed } from '@ember/object';

const stateToComputed = (state /*, attrs*/) => {
  return {
    folders: state.watched.folderList
  }
};

const dispatchToActions = {
  listFiles
};

class FolderListComponent extends Component {
  showProperty = false;

  @computed("showProperty")
  get folderListClass() {
    return this.showProperty ? "flex-70" : "flex";
  }
}


export default connect(stateToComputed, dispatchToActions)(FolderListComponent);
