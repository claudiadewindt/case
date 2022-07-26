import styles from "./ClientList.module.scss";
import ClientLogos from "./client-logos/ClientLogos";

const ClientList = () => {
  return (
    <div className={styles.client_list}>
      <h2 className={styles.client_list__title}>Clients</h2>
      <p className={styles.client_list__paragraph}>
        <span className={styles.client_list__text}>
          We value a great working relationship with our clients above all else.
          It’s why they often come to our parties. It’s also why we’re able to
          challenge and inspire&nbsp;
        </span>

        <span className={styles.client_list__text}>
          them to reach for the stars.
        </span>
      </p>
      <ClientLogos />
    </div>
  );
};

export default ClientList;
