import css from "./Footer.module.scss";

const Footer = ({ active, finished }) => {
  return (
    <footer className={css.footer}>
      <div>
        <span>Active tasks: {active} </span>
        <span>Finished tasks: {finished}</span>
      </div>
      <div className={css.userInfo}>
        Kanban board by <Aleksandr></Aleksandr>, 2023
      </div>
    </footer>
  );
};

export default Footer;
