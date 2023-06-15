import React from 'react';

import Button from '../Button';
import Toast from '../Toast';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [isSelected, setIsSelected] = React.useState();
  const [showToast, setShowToast] = React.useState(false);

  function handlePopToast(event) {
    event.preventDefault();
    setMessage(message);
    setShowToast(!showToast);
  }

  function handleDismiss() {
    setShowToast(false);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>

      {showToast && (
        <Toast icon={isSelected} handleDismiss={handleDismiss}>
          {message}
        </Toast>
      )}

      <div className={styles.controlsWrapper}>
        <form onSubmit={handlePopToast}>
          <div className={styles.row}>
            <label
              htmlFor='message'
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id='message'
                className={styles.messageInput}
                value={message}
                required
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((option) => {
                return (
                  <label key={option} htmlFor={`variant-${option}`}>
                    <input
                      id={`variant-${option}`}
                      type='radio'
                      name='variant'
                      value={option}
                      checked={option === isSelected}
                      required
                      onChange={(event) => {
                        setIsSelected(event.target.value);
                      }}
                    />
                    {option}
                  </label>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>

        {/*
          <p>
            <strong>Current value: </strong>
            {message || '(empty)'}
          </p>
          <p>
            <strong>Current radio button selected: </strong>
            {isSelected || '(empty)'}
          </p>
        */}
      </div>
    </div>
  );
}

export default ToastPlayground;
