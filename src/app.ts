import { createApp, registerElement } from 'nativescript-vue';
import Home from './views/Home.vue';

const app=createApp(Home);
app.start();

registerElement('ImageCacheIt', () => require('@triniwiz/nativescript-image-cache-it').ImageCacheIt);

import { initialize } from "@nativescript-community/ui-image";
initialize({ isDownsampleEnabled: true });

registerElement('Img', () => require('@nativescript-community/ui-image').Img);
