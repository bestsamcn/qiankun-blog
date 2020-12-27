import React from 'react';
import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';
export default function () {
    console.log('home')
    return (
        <div className={ styles.normal }>
            home
        </div>
    );
}
