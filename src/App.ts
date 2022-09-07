import Main from './components/Main';
import Nav from './components/Nav';
import Modal from './components/Modal';

export default class App {
  private $main = new Main();
  private $modal = new Modal({ $main: this.$main });
  private $nav = new Nav({ banner: 'Motion', $modal: this.$modal });
  constructor() {}

  // injectMainToModal() {
  //   this.$modal.inject(this.$main)
  // }
}
