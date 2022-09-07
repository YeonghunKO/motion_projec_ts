import Main from './components/Main';
import Nav from './components/Nav';
import Modal from './components/Modal';

export default class App {
  private $modal = new Modal();
  private $nav = new Nav({ banner: 'Motion', $modal: this.$modal });
  private $main = new Main();
  constructor() {}
}
