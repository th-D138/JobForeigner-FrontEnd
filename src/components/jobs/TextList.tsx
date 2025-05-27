import styles from './textList.module.scss';

type TextProps = {
  title: string;
  content: string[];
};

const TextList = ({ title, content }: TextProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <ul className={styles.listbox}>
        {content.map(ele => (
          <li className={styles.element}>{ele}</li>
        ))}
      </ul>
    </div>
  );
};

export default TextList;
