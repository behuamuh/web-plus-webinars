import cats from './cats';
import user from './user';

class SuperStor {
  cats = cats;
  user = user;
}

const superStor = new SuperStor();

export default superStor;
