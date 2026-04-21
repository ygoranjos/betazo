declare module 'react-modal-video' {
  import { FC } from 'react';

  interface ModalVideoProps {
    channel: string;
    isOpen: boolean;
    videoId: string;
    onClose: () => void;
    [key: string]: unknown;
  }

  const ModalVideo: FC<ModalVideoProps>;
  export default ModalVideo;
}
