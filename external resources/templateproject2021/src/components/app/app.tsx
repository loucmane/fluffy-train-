
import React, {Suspense, lazy} from 'react';

import {stylesContainer} from './app.module.less';
import {stylesHeader, stylesImage} from './app.module.scss';


export const App = (): React.ReactElement => (
    <div className={stylesContainer}>
        <div className={stylesHeader}>Good start</div>
        <Suspense fallback={'loading...'}>
            
        </Suspense>
    </div>
);

