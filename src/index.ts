import { Engine, Loader, DisplayMode } from 'excalibur';
import { LevelOne } from './scenes/level-one/level-one';
import { Player } from './actors/player/player';
import { Resources } from './resources';


const game = new Engine({
  displayMode: DisplayMode.FitScreen
});
const loader = new Loader(Object.values(Resources))
game.start(loader).then(() => {
  game.addScene('levelOne', new LevelOne())
  game.scenes['levelOne'].add(new Player())
  game.goToScene('levelOne');
});
