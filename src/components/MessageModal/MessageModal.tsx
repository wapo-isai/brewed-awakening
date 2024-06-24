import React, {Dispatch, SetStateAction} from "react";
import styles from "./MessageModal.module.css";

interface MessageModalProps {
  isSuccess: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function MessageModal({isSuccess, setOpen}: MessageModalProps) {
  if (isSuccess) {
    return (
      <div className={`${styles.messageModal} ${styles.success}`}>
        <h3>✓ Success!</h3>
        <p>Your order was processed successfully</p>

        <button
          className={styles.closeBtn}
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          Close
        </button>
      </div>
    );
  } else {
    return (
      <div className={`${styles.messageModal} ${styles.error}`}>
        <h3>X Error!</h3>
        <p>Something went wrong</p>

        <button
          className={styles.closeBtn}
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          Close
        </button>
      </div>
    );
  }
}

export default MessageModal;
