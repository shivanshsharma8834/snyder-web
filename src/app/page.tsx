import Featured from '@/components/featured/Featured';
import styles from './home.module.css'
import CategoryList from '@/components/categorylist/Categorylist';
import Cardlist from '@/components/cardlist/Cardlist';
import Menu from '@/components/menu/Menu';

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured/>
      <CategoryList/>
      <div className={styles.content}>
        <Cardlist/>
        <Menu/>
      </div>

    </div>
    
  );
}
