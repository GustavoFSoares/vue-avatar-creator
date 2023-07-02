import HelloWorld from '@/components/HelloWorld.vue';
import TheWelcome from '@/components/TheWelcome.vue';

export const HelloWorldComponent = HelloWorld;
export const TheWelcomeComponent = TheWelcome;
export const defaultAvatar = {
  widgets: {
    ear: { shape: 'detached' },
    eyes: { shape: 'ellipse' },
    face: { shape: 'base' },
    nose: { shape: 'curve' },
    tops: { shape: 'clean', fillColor: '#6BD9E9' },
    beard: { shape: 'none', zIndex: 99 },
    mouth: { shape: 'smirk' },
    clothes: { shape: 'crew', fillColor: '#6BD9E9' },
    glasses: { shape: 'none' },
    earrings: { shape: 'none' },
    eyebrows: { shape: 'up' }
  },
  background: { color: '#E0DDFF' },
  wrapperShape: 'squircle'
};
