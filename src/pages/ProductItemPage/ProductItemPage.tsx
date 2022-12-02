import styles from './ProductItemPage.module.scss';
import {useParams} from "react-router-dom";

interface ProductItemPageProps { }

export const ProductItemPage = ({ }: ProductItemPageProps) => {
  const { productAlias } = useParams();

  return (
    <div className={styles.productItemPage}>
      ProductItemPage Component {productAlias}
    </div>
  );
};
